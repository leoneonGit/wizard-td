import * as THREE from 'three';
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';
import { CELL } from '../engine/grid';
import { getAsset, getAttachment, WIZARD_LOOKS, ENEMY_LOOKS, type UnitLook } from './assets';
import type { GameState } from '../game/state';
import type { Enemy, Wizard } from '../game/types';

const PX = 1 / CELL; // board px -> world units
/** KayKit models face +Z; board heading 0 rad = +X. */
function headingToYaw(angle: number): number {
  return Math.atan2(Math.cos(angle), Math.sin(angle));
}

interface UnitView {
  root: THREE.Group;
  /** WizardDef id the view was built for — specializing swaps the def, so the view rebuilds */
  defId?: string;
  inner: THREE.Group; // scaled model
  /** absent for vehicles — they roll instead of walking */
  mixer?: THREE.AnimationMixer;
  idle?: THREE.AnimationAction;
  walk?: THREE.AnimationAction;
  attack?: THREE.AnimationAction;
  death?: THREE.AnimationAction | null;
  cheer?: THREE.AnimationAction | null;
  mats: THREE.MeshStandardMaterial[];
  origColors: THREE.Color[];
  baseEmissive: THREE.Color;
  yaw: number;
  casting: boolean;
  cheering: boolean;
  becalmed: boolean;
  watery: boolean;
  prevRecoil: number;
  hpBar?: { bg: THREE.Sprite; fg: THREE.Sprite };
  iceCube?: THREE.Mesh;
  /** translucent stone shell shown while a boss's armor holds */
  armorShell?: THREE.Mesh;
  /** vehicle wheels — spun with movement */
  wheels?: THREE.Mesh[];
  /** wraith: opacity follows the phase state */
  ghostly?: boolean;
  /** flyer wings — flapped every frame */
  flapWings?: THREE.Mesh[];
  /** slime: squash-and-stretch instead of a walk cycle */
  blob?: boolean;
  height: number;
}

interface Dying {
  view: UnitView;
  t: number;
  mode: 'anim' | 'shrink';
}

const DEATH_TIME = 1.05;
const SHRINK_TIME = 0.28;

const enemyViews = new Map<number, UnitView>();
const wizardViews = new Map<number, UnitView>();
const dying: Dying[] = [];
let sceneRef: THREE.Scene;
let exitWorld = new THREE.Vector3();

export function initUnits(scene: THREE.Scene, exitPos: THREE.Vector3): void {
  sceneRef = scene;
  exitWorld = exitPos;
}

/** Slimes are rigless bouncing blobs — a sphere with squash-and-stretch. */
function makeBlobView(look: UnitLook): UnitView {
  const root = new THREE.Group();
  const inner = new THREE.Group();
  root.add(inner);
  const mat = new THREE.MeshStandardMaterial({
    color: look.tint ?? new THREE.Color('#5fbf4a'),
    roughness: 0.25,
    transparent: true,
    opacity: 0.92,
  });
  const body = new THREE.Mesh(new THREE.SphereGeometry(look.height / 2, 14, 12), mat);
  body.position.y = look.height / 2;
  body.castShadow = true;
  inner.add(body);
  // two beady dark eyes so the goo has a face
  const eyeMat = new THREE.MeshStandardMaterial({ color: '#1a2415' });
  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(look.height * 0.06, 6, 6), eyeMat);
    eye.position.set(side * look.height * 0.14, look.height * 0.62, look.height * 0.4);
    inner.add(eye);
  }
  return {
    root,
    inner,
    mats: [mat],
    origColors: [mat.color.clone()],
    baseEmissive: new THREE.Color(0x000000),
    yaw: 0,
    casting: false,
    cheering: false,
    becalmed: false,
    watery: false,
    prevRecoil: 0,
    blob: true,
    height: look.height,
  };
}

/** Vehicles are procedural wheel-and-plank rigs — no skeleton, they roll and rock. */
function makeVehicleView(look: UnitLook): UnitView {
  const asset = getAttachment(look.vehicle!);
  const root = new THREE.Group();
  const inner = new THREE.Group();
  root.add(inner);
  const mats: THREE.MeshStandardMaterial[] = [];
  const wheels: THREE.Mesh[] = [];
  if (asset) {
    const body = asset.scene.clone(true);
    body.scale.setScalar(look.height / asset.rawHeight);
    inner.add(body);
    body.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (!mesh.isMesh) return;
      const m = (mesh.material as THREE.MeshStandardMaterial).clone();
      if (look.tint) m.color.lerp(look.tint, look.tintStrength ?? 0.25);
      mesh.material = m;
      mats.push(m);
      if (/wheel/i.test(mesh.name)) wheels.push(mesh);
    });
  }
  return {
    root,
    inner,
    mats,
    origColors: mats.map((m) => m.color.clone()),
    baseEmissive: new THREE.Color(0x000000),
    yaw: 0,
    casting: false,
    cheering: false,
    becalmed: false,
    watery: false,
    prevRecoil: 0,
    wheels,
    height: look.height,
  };
}

function makeView(look: UnitLook): UnitView {
  if (look.vehicle) return makeVehicleView(look);
  if (look.blob) return makeBlobView(look);
  const asset = getAsset(look.model);
  const inner = SkeletonUtils.clone(asset.scene) as THREE.Group;
  const s = asset.unitScale * look.height;
  inner.scale.setScalar(s);

  // mage styling: reshape the hat node, toggle held props
  const collectMeshes = (root: THREE.Object3D | undefined): Set<THREE.Object3D> => {
    const set = new Set<THREE.Object3D>();
    root?.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) set.add(o);
    });
    return set;
  };
  let headMeshes = new Set<THREE.Object3D>();
  let hatMeshes = new Set<THREE.Object3D>();
  if (look.mage) {
    const hat = inner.getObjectByName('Mage_Hat');
    if (hat) {
      const h = look.mage.hat;
      hat.scale.set(hat.scale.x * h.sx, hat.scale.y * h.sy, hat.scale.z * h.sz);
      if (h.rotZ) hat.rotation.z += h.rotZ;
      if (h.rotX) hat.rotation.x += h.rotX;
      hatMeshes = collectMeshes(hat);
    }
    const book = inner.getObjectByName('Spellbook');
    const bookOpen = inner.getObjectByName('Spellbook_open');
    if (book) book.visible = false;
    if (bookOpen) bookOpen.visible = !!look.mage.spellbook;
    headMeshes = collectMeshes(inner.getObjectByName('Mage_Head'));
  }

  // generic gear stripping (archer rigs whose held weapons don't match the kit;
  // also used to hide the sculpted orc rig's built-in axe for unarmed variants)
  if (look.hideRe) {
    inner.traverse((o) => {
      if (look.hideRe!.test(o.name)) o.visible = false;
    });
  }

  // held weapon (procedural bow/crossbow) into a hand slot — same math as the ent rock
  if (look.held) {
    const asset = getAttachment(look.held.key);
    // GLTFLoader sanitizes node names ("Arm.R_end_end" -> "ArmR_end_end");
    // the goblin rig's arm chain ends at ArmX_end_end, the orc's at LowerArmX
    const side = look.held.hand === 'l' ? 'L' : 'R';
    const slot = inner.getObjectByName(`handslot${look.held.hand}`)
      ?? inner.getObjectByName(`hand${look.held.hand}`)
      ?? inner.getObjectByName(`Arm${side}_end_end`)
      ?? inner.getObjectByName(`LowerArm${side}`);
    if (asset && slot) {
      inner.updateMatrixWorld(true);
      const weapon = asset.scene.clone(true);
      const ws = new THREE.Vector3();
      slot.getWorldScale(ws);
      const localUnit = 1 / Math.max(1e-6, ws.y);
      const targetH = look.held.scale * look.height;
      weapon.scale.setScalar(targetH * localUnit / asset.rawHeight);
      weapon.rotation.set(look.held.rotX ?? 0, look.held.rotY ?? Math.PI / 2, look.held.rotZ ?? 0);
      slot.add(weapon);
    }
  }

  // clone + tint materials per instance so statuses can recolor safely.
  // mages tint robes strongly, hat strongest (w/ accent glow), face barely.
  const mats: THREE.MeshStandardMaterial[] = [];
  inner.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    const src = mesh.material as THREE.MeshStandardMaterial;
    let m: THREE.MeshStandardMaterial;
    if (look.watery) {
      // liquid look: translucent, glossy, clearcoated.
      // built fresh (NOT copy()) — copying a Standard source into Physical throws.
      m = new THREE.MeshPhysicalMaterial({
        map: src.map ?? null,
        color: src.color?.clone() ?? new THREE.Color('#ffffff'),
        transparent: true,
        opacity: 0.72,
        roughness: 0.08,
        metalness: 0.1,
        clearcoat: 0.6,
        side: THREE.DoubleSide, // interior visible through transparency
      });
    } else {
      m = src.clone();
    }
    if (look.tint) {
      let strength = look.tintStrength ?? 0.4;
      if (look.mage) {
        if (headMeshes.has(mesh)) strength = 0.08;
        else if (hatMeshes.has(mesh)) strength = Math.min(1, strength + 0.25);
      }
      m.color.lerp(look.tint, strength);
    }
    const accentEmissive = look.mage?.hatEmissive;
    if (accentEmissive && hatMeshes.has(mesh)) {
      m.emissive.copy(accentEmissive);
      m.emissiveIntensity = 0.18;
    } else if (look.emissive) {
      m.emissive.copy(look.emissive);
      m.emissiveIntensity = look.emissiveIntensity ?? 0.35;
    }
    if (look.ghostly) m.transparent = true; // wraiths fade with their phase
    mesh.material = m;
    mats.push(m);
  });

  // flyer wings: two dark membranes on the back, flapped per frame
  let flapWings: THREE.Mesh[] | undefined;
  if (look.wings) {
    const s = asset.unitScale * look.height;
    const localUnit = 1 / s;
    const wingMat = new THREE.MeshStandardMaterial({
      color: '#2e3238', roughness: 0.7, side: THREE.DoubleSide, transparent: true, opacity: 0.92,
    });
    flapWings = [];
    for (const side of [-1, 1]) {
      const wing = new THREE.Mesh(
        new THREE.PlaneGeometry(0.55 * look.height * localUnit, 0.26 * look.height * localUnit),
        wingMat,
      );
      // pivot at the wing root: shift the geometry so rotation hinges at the body
      wing.geometry.translate((side * 0.55 * look.height * localUnit) / 2, 0, 0);
      wing.position.set(side * 0.06 * look.height * localUnit, 0.6 * look.height * localUnit, -0.08 * look.height * localUnit);
      wing.rotation.x = -0.4;
      inner.add(wing);
      flapWings.push(wing);
    }
  }

  const mixer = new THREE.AnimationMixer(inner);
  const clip = (name: string) => {
    const c = THREE.AnimationClip.findByName(asset.clips, name);
    return mixer.clipAction(c!);
  };
  const idle = clip(asset.idle);
  const walk = clip(asset.walk);
  const attack = clip(asset.attack);
  attack.setLoop(THREE.LoopOnce, 1);
  const death = asset.death ? clip(asset.death) : null;
  if (death) {
    death.setLoop(THREE.LoopOnce, 1);
    death.clampWhenFinished = true;
  }
  const cheer = asset.cheer ? clip(asset.cheer) : null;

  const root = new THREE.Group();
  root.add(inner);
  return {
    root,
    inner,
    mixer,
    idle,
    walk,
    attack,
    death,
    cheer,
    mats,
    origColors: mats.map((m) => m.color.clone()),
    baseEmissive: look.emissive ? look.emissive.clone() : new THREE.Color(0x000000),
    yaw: 0,
    casting: false,
    cheering: false,
    becalmed: false,
    watery: !!look.watery,
    prevRecoil: 0,
    flapWings,
    height: look.height,
  };
}

function makeHpBar(view: UnitView): void {
  const mk = (color: string, z: number) => {
    const mat = new THREE.SpriteMaterial({ color, depthTest: false });
    const spr = new THREE.Sprite(mat);
    spr.center.set(0, 0.5);
    spr.scale.set(0.8, 0.09, 1);
    spr.position.set(-0.4, view.height + 0.25, 0);
    spr.renderOrder = 10 + z;
    view.root.add(spr);
    return spr;
  };
  view.hpBar = { bg: mk('#3a0d12', 0), fg: mk('#58e05e', 1) };
}

// ---------------------------------------------------------------- per-frame sync

export function syncUnits(state: GameState, dt: number): void {
  syncEnemies(state, dt);
  syncWizards(state, dt);
  updateDying(dt);
}

function syncEnemies(state: GameState, dt: number): void {
  const seen = new Set<number>();
  for (const e of state.enemies) {
    seen.add(e.id);
    let v = enemyViews.get(e.id);
    if (!v) {
      const look = ENEMY_LOOKS[e.def.id] ?? ENEMY_LOOKS.grunt;
      v = makeView(look);
      v.ghostly = look.ghostly;
      makeHpBar(v);
      v.walk?.play();
      v.yaw = headingToYaw(e.angle);
      enemyViews.set(e.id, v);
      sceneRef.add(v.root);
      // spawn pop
      v.root.scale.setScalar(0.01);
    }
    // position + facing (flyers soar with a gentle bob)
    const flyY = e.def.flying ? 1.05 + Math.sin(performance.now() / 380 + e.id) * 0.12 : 0;
    v.root.position.set(e.x * PX, flyY, e.y * PX);
    const targetYaw = headingToYaw(e.angle);
    v.yaw += shortestAngle(v.yaw, targetYaw) * Math.min(1, dt * 10);
    v.root.rotation.y = v.yaw;

    // wings flap, blobs squish
    if (v.flapWings) {
      const flap = Math.sin(performance.now() / 90 + e.id) * 0.55;
      v.flapWings[0].rotation.y = -0.35 - flap;
      v.flapWings[1].rotation.y = 0.35 + flap;
    }
    if (v.blob) {
      const b = Math.abs(Math.sin(e.animT * 6));
      v.inner.scale.set(1 + 0.14 * b, 1 - 0.18 * b, 1 + 0.14 * b);
    }
    // spawn scale-in
    const cur = v.root.scale.x;
    if (cur < 1) v.root.scale.setScalar(Math.min(1, cur + dt * 5));

    // walk speed mirrors the sim's slow/freeze factor
    let factor = 1;
    if (e.statuses.frozen) factor = 0;
    else if (e.statuses.chill) factor = Math.max(0.25, 1 - e.statuses.chill.pct * (0.6 + 0.2 * e.statuses.chill.stacks));
    if (v.walk) v.walk.timeScale = (e.def.speed / 60) * factor;
    v.mixer?.update(dt);

    // vehicles roll: wheels spin with covered distance, the body rocks on the ruts
    if (v.wheels && v.wheels.length > 0) {
      for (const wheel of v.wheels) wheel.rotation.x = e.animT * e.def.speed * 0.09;
      v.inner.rotation.z = Math.sin(e.animT * 5) * 0.02;
    }

    // wraiths thin out of reality while phased
    if (v.ghostly) {
      const target = e.phased ? 0.22 : 0.95;
      for (const m of v.mats) m.opacity += (target - m.opacity) * Math.min(1, dt * 8);
    }

    // hp bar
    if (v.hpBar) {
      const frac = Math.max(0, e.hp / e.maxHp);
      v.hpBar.fg.scale.x = 0.8 * frac;
      const c = frac > 0.5 ? '#58e05e' : frac > 0.25 ? '#ffd75e' : '#ff5e5e';
      (v.hpBar.fg.material as THREE.SpriteMaterial).color.set(c);
      v.hpBar.bg.visible = v.hpBar.fg.visible = frac < 1;
    }

    // status looks: hit flash > burn > wet > chill, via emissive
    for (const m of v.mats) {
      if (e.hitFlash > 0) {
        m.emissive.setRGB(1, 1, 1);
        m.emissiveIntensity = 0.7;
      } else if (e.statuses.burn) {
        m.emissive.set('#ff6a1e');
        m.emissiveIntensity = 0.45 + Math.sin(performance.now() / 90) * 0.15;
      } else if (e.statuses.wet) {
        m.emissive.set('#2277ff');
        m.emissiveIntensity = 0.3;
      } else if (e.statuses.chill) {
        m.emissive.set('#66ccff');
        m.emissiveIntensity = 0.25;
      } else {
        m.emissive.copy(v.baseEmissive);
        m.emissiveIntensity = v.baseEmissive.getHex() === 0 ? 0 : 0.35;
      }
    }

    // boss armor: a translucent stone shell that shatters when the armor breaks
    const armored = (e.armorHp ?? 0) > 0;
    if (armored && !v.armorShell) {
      const shell = new THREE.Mesh(
        new THREE.SphereGeometry(0.62, 12, 10),
        new THREE.MeshStandardMaterial({
          color: '#9aa6b5', transparent: true, opacity: 0.4,
          roughness: 0.35, metalness: 0.6,
        }),
      );
      shell.scale.set(1, (v.height + 0.2) / 1.24, 1);
      shell.position.y = (v.height + 0.2) / 2;
      v.root.add(shell);
      v.armorShell = shell;
    } else if (!armored && v.armorShell) {
      v.root.remove(v.armorShell);
      disposeMesh(v.armorShell);
      v.armorShell = undefined;
    }
    if (v.armorShell) {
      // shell shimmers faintly and thins as it takes damage
      const frac = Math.max(0.15, (e.armorHp ?? 0) / (e.def.armor ?? 1));
      (v.armorShell.material as THREE.MeshStandardMaterial).opacity =
        0.18 + frac * 0.3 + Math.sin(performance.now() / 300) * 0.04;
    }

    // frozen: ice cube
    if (e.statuses.frozen && !v.iceCube) {
      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(0.7, v.height + 0.15, 0.7),
        new THREE.MeshStandardMaterial({ color: '#9fdcff', transparent: true, opacity: 0.45, roughness: 0.1 }),
      );
      cube.position.y = (v.height + 0.15) / 2;
      v.root.add(cube);
      v.iceCube = cube;
    } else if (!e.statuses.frozen && v.iceCube) {
      v.root.remove(v.iceCube);
      disposeMesh(v.iceCube);
      v.iceCube = undefined;
    }
  }

  // remove dead/leaked. Killed enemies play their death animation;
  // leaked ones (near the exit portal) just fade through the gate.
  for (const [id, v] of enemyViews) {
    if (!seen.has(id)) {
      enemyViews.delete(id);
      const leaked = v.root.position.distanceTo(exitWorld) < 1.2;
      if (v.death && !leaked) {
        v.walk?.fadeOut(0.08);
        v.death.reset().setEffectiveTimeScale(1.5).fadeIn(0.05).play();
        if (v.hpBar) v.hpBar.bg.visible = v.hpBar.fg.visible = false;
        dying.push({ view: v, t: DEATH_TIME, mode: 'anim' });
      } else {
        dying.push({ view: v, t: SHRINK_TIME, mode: 'shrink' });
      }
    }
  }
}

function syncWizards(state: GameState, dt: number): void {
  const seen = new Set<number>();
  for (const w of state.wizards) {
    seen.add(w.id);
    let v = wizardViews.get(w.id);
    if (v && v.defId !== w.def.id) {
      // specialized: the def swapped under us — rebuild the view (new model/styling),
      // scaling in from small so the new form visibly "grows" into place
      sceneRef.remove(v.root);
      v.root.traverse((o) => disposeMesh(o as THREE.Mesh));
      wizardViews.delete(w.id);
      v = undefined;
    }
    if (!v) {
      v = makeView(WIZARD_LOOKS[w.def.id] ?? WIZARD_LOOKS.generic_wizard);
      v.defId = w.def.id;
      v.idle?.play();
      v.yaw = headingToYaw(w.aim);
      wizardViews.set(w.id, v);
      sceneRef.add(v.root);
      v.root.position.set(w.x * PX, 0, w.y * PX);
      v.root.scale.setScalar(0.01);
    }
    const cur = v.root.scale.x;
    if (cur < 1) v.root.scale.setScalar(Math.min(1, cur + dt * 4));

    // rotate toward aim
    const targetYaw = headingToYaw(w.aim);
    v.yaw += shortestAngle(v.yaw, targetYaw) * Math.min(1, dt * 12);
    v.root.rotation.y = v.yaw;

    // becalmed cloud mage OR hexed tower: grayed out, sluggish idle
    const becalmed = !!w.becalmed || (w.silencedT ?? 0) > 0;
    if (becalmed !== v.becalmed) {
      v.becalmed = becalmed;
      v.mats.forEach((m, i) => {
        m.color.copy(v.origColors[i]);
        if (becalmed) m.color.lerp(new THREE.Color('#777777'), 0.6);
      });
      if (v.idle) v.idle.timeScale = becalmed ? 0.35 : 1;
    }

    // victory: mages celebrate
    if (state.phase === 'won' && v.cheer && !v.cheering) {
      v.cheering = true;
      v.idle?.fadeOut(0.2);
      v.attack?.fadeOut(0.2);
      v.cheer.reset().fadeIn(0.2).play();
    } else if (state.phase !== 'won' && v.cheering) {
      v.cheering = false;
      v.cheer?.fadeOut(0.2);
      v.idle?.reset().fadeIn(0.2).play();
    }

    // cast: recoil jumps when the sim fires -> play the spellcast clip once
    if (!v.cheering && v.attack && w.recoil > v.prevRecoil + 0.01) {
      const clipDur = (v.attack.getClip() as THREE.AnimationClip).duration;
      v.attack.reset();
      v.attack.timeScale = clipDur / Math.min(Math.max(w.stats.rate * 0.85, 0.35), 1.1);
      v.attack.play();
      v.idle?.fadeOut(0.08);
      v.casting = true;
    }
    if (v.casting && v.attack && !v.attack.isRunning()) {
      v.casting = false;
      v.idle?.reset().fadeIn(0.15).play();
    }
    v.prevRecoil = w.recoil;
    v.mixer?.update(dt);

    // winged towers (Void Sylph) flutter in place
    if (v.flapWings) {
      const flap = Math.sin(performance.now() / 110 + w.id) * 0.5;
      v.flapWings[0].rotation.y = -0.35 - flap;
      v.flapWings[1].rotation.y = 0.35 + flap;
    }

    // watery shimmer: opacity gently oscillates
    if (v.watery) {
      const op = 0.72 + Math.sin(performance.now() / 380 + w.id) * 0.06;
      for (const m of v.mats) m.opacity = op;
    }
  }

  for (const [id, v] of wizardViews) {
    if (!seen.has(id)) {
      wizardViews.delete(id);
      dying.push({ view: v, t: SHRINK_TIME, mode: 'shrink' });
    }
  }
}

function updateDying(dt: number): void {
  for (let i = dying.length - 1; i >= 0; i--) {
    const d = dying[i];
    d.t -= dt;
    if (d.mode === 'anim') {
      d.view.mixer?.update(dt); // let the death clip play out
      if (d.t < 0.3) {
        // fade into the ground at the end
        const k = Math.max(0.01, d.t / 0.3);
        d.view.root.position.y = -(1 - k) * 0.5;
      }
    } else {
      const k = Math.max(0.01, d.t / SHRINK_TIME);
      d.view.root.scale.setScalar(k);
      d.view.root.position.y = -(1 - k) * 0.4; // sink
    }
    if (d.t <= 0) {
      sceneRef.remove(d.view.root);
      d.view.root.traverse((o) => disposeMesh(o as THREE.Mesh));
      dying.splice(i, 1);
    }
  }
}

function shortestAngle(from: number, to: number): number {
  let d = (to - from) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
}

function disposeMesh(m: THREE.Mesh): void {
  if (!m.isMesh) return;
  m.geometry?.dispose();
  const mat = m.material as THREE.Material | THREE.Material[];
  if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
  else mat?.dispose();
}

export function clearUnits(): void {
  for (const v of [...enemyViews.values(), ...wizardViews.values()]) {
    sceneRef.remove(v.root);
  }
  enemyViews.clear();
  wizardViews.clear();
}
