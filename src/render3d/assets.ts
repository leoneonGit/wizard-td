import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { assetUrl } from '../engine/assetUrl';

export interface CharacterAsset {
  scene: THREE.Group;
  clips: THREE.AnimationClip[];
  /** resolved clip names */
  idle: string;
  walk: string;
  attack: string;
  death: string | null;
  cheer: string | null;
  /** uniform scale that normalizes model height to 1 world unit */
  unitScale: number;
}

const MODELS: Record<string, string> = {
  mage: assetUrl('models/Mage.glb'),
  knight: assetUrl('models/Knight.glb'),
  ranger: assetUrl('models/Rogue_Hooded.glb'), // hooded archer — elf longbow + archer recruits
  skel_mage: assetUrl('models/Skeleton_Mage.glb'),
  skel_minion: assetUrl('models/Skeleton_Minion.glb'),
  skel_rogue: assetUrl('models/Skeleton_Rogue.glb'),
  skel_warrior: assetUrl('models/Skeleton_Warrior.glb'),
  // real sculpted greenskins (Quaternius, CC0) — actual goblin/orc creature meshes,
  // not a tinted human. Replaced the Barbarian-rig-plus-procedural-ears hack (P13).
  goblin_real: assetUrl('models/Goblin.glb'),
  orc_real: assetUrl('models/Orc.glb'),
  // nature spirits for the tree family (Quaternius, CC0) — one real creature per
  // lineage instead of the primitive-built treant (P13b). Mushnub replaced the
  // winged Goleling (user: "just a bat") — a grounded mushroom-beast cousin of
  // the Mushroom King, so Boulder reads as kin to Rootgrasp without twinning it.
  cactoro: assetUrl('models/Cactoro.glb'),
  mushroom_king: assetUrl('models/Mushroom_King.glb'),
  mushnub: assetUrl('models/Mushnub_Evolved.glb'),
  // the Void family's drake (Quaternius, CC0) — winged, no ground clips:
  // idle resolves to Dragon_Flying so it hovers in place
  dragon: assetUrl('models/Dragon.glb'),
};

/** Static prop pieces grafted onto rigged characters. */
const ATTACH_MODELS: Record<string, string> = {};

/** Per-model attack-clip search order. Default favors the mage's spellcast gesture;
 *  the goblin model shares the same shared KayKit anim library but reads better
 *  throwing/swinging than "casting a spell"; archers should draw and loose. */
const ATTACK_CLIP_PRIORITY: Record<string, RegExp[]> = {
  default: [/spellcast.*shoot/i, /spellcast/i, /cast/i, /attack/i, /melee/i],
  ranger: [/2h_ranged.*shoot/i, /ranged.*shoot/i, /ranged/i, /shoot/i, /throw/i, /attack/i],
  knight: [/1h_ranged.*shoot/i, /ranged.*shoot/i, /ranged/i, /shoot/i, /throw/i, /attack/i],
  goblin_real: [/attack/i],
  orc_real: [/weapon/i, /punch/i, /attack/i],
  cactoro: [/punch/i, /weapon/i, /attack/i],
  mushroom_king: [/weapon/i, /punch/i, /attack/i], // swings his mushroom club
  mushnub: [/bite_front/i, /bite/i], // lunging heave — sells the boulder toss
  dragon: [/attack2/i, /attack/i], // breath gout
};

const assets = new Map<string, CharacterAsset>();
const attachments = new Map<string, { scene: THREE.Group; rawHeight: number }>();

function pickClip(clips: THREE.AnimationClip[], patterns: RegExp[], fallback: string): string {
  for (const p of patterns) {
    const hit = clips.find((c) => p.test(c.name));
    if (hit) return hit.name;
  }
  return clips[0]?.name ?? fallback;
}

function pickClipOrNull(clips: THREE.AnimationClip[], patterns: RegExp[]): string | null {
  for (const p of patterns) {
    const hit = clips.find((c) => p.test(c.name));
    if (hit) return hit.name;
  }
  return null;
}

export async function loadCharacters(onProgress?: (done: number, total: number) => void): Promise<void> {
  const loader = new GLTFLoader();
  // character GLBs are gltfpack'd (EXT_meshopt_compression) — ~70% smaller downloads
  loader.setMeshoptDecoder(MeshoptDecoder);
  const total = Object.keys(MODELS).length + Object.keys(ATTACH_MODELS).length;
  let done = 0;
  const tick = () => onProgress?.(++done, total);
  await Promise.all(
    Object.entries(MODELS).map(async ([key, url]) => {
      const gltf = await loader.loadAsync(url);
      tick();
      const scene = gltf.scene;
      scene.traverse((o) => {
        if ((o as THREE.Mesh).isMesh) {
          o.castShadow = true;
          o.frustumCulled = false; // skinned meshes misbehave with tight culling
        }
      });
      const box = new THREE.Box3().setFromObject(scene);
      const height = Math.max(0.001, box.max.y - box.min.y);
      const clips = gltf.animations;
      assets.set(key, {
        scene,
        clips,
        // /flying/i: winged rigs (Dragon) have no Idle — hovering reads as idle
        idle: pickClip(clips, [/^idle$/i, /idle/i, /flying/i], 'Idle'),
        walk: pickClip(clips, [/^walking_a$/i, /walking/i, /walk/i, /running/i, /flying/i], 'Walking_A'),
        attack: pickClip(
          clips,
          ATTACK_CLIP_PRIORITY[key] ?? ATTACK_CLIP_PRIORITY.default,
          'Attack',
        ),
        death: pickClipOrNull(clips, [/^death_a$/i, /death/i]),
        cheer: pickClipOrNull(clips, [/cheer/i]),
        unitScale: 1 / height,
      });
      console.log(`[3d] ${key}: ${clips.length} clips (idle=${assets.get(key)!.idle}, walk=${assets.get(key)!.walk}, attack=${assets.get(key)!.attack})`);
    }),
  );
  // attachment props (non-fatal if any fails — units just render without the garnish)
  await Promise.all(
    Object.entries(ATTACH_MODELS).map(async ([key, url]) => {
      try {
        const gltf = await loader.loadAsync(url);
        gltf.scene.traverse((o) => {
          if ((o as THREE.Mesh).isMesh) o.castShadow = true;
        });
        const box = new THREE.Box3().setFromObject(gltf.scene);
        attachments.set(key, { scene: gltf.scene, rawHeight: Math.max(0.001, box.max.y - box.min.y) });
      } catch (err) {
        console.warn(`attachment prop failed to load: ${key}`, err);
      }
      tick();
    }),
  );
  // procedural weapons — archers finally get their bows
  attachments.set('bow', { scene: makeBow(), rawHeight: 0.9 });
  attachments.set('crossbow', { scene: makeCrossbow(), rawHeight: 0.5 });
  // procedural war machines — the horde's carriers
  attachments.set('vehicle_wagon', { scene: makeWagon(), rawHeight: 1.0 });
  attachments.set('vehicle_tower', { scene: makeSiegeTower(), rawHeight: 2.3 });
  // small hand props for the new sculpted rigs (no built-in shield/drum nodes to toggle)
  attachments.set('gong', { scene: makeGong(), rawHeight: 0.5 });
  attachments.set('drum', { scene: makeDrum(), rawHeight: 0.4 });
}

const WOOD_DARK = () => new THREE.MeshStandardMaterial({ color: '#4a3826', roughness: 0.85 });
const WOOD_MID = () => new THREE.MeshStandardMaterial({ color: '#6b4f30', roughness: 0.8 });
const IRON = () => new THREE.MeshStandardMaterial({ color: '#3a3f47', roughness: 0.5, metalness: 0.6 });

function makeWheel(r: number): THREE.Mesh {
  const wheel = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.08, 10), IRON());
  wheel.rotation.z = Math.PI / 2; // axis along X — rolls when moving along Z
  wheel.name = 'wheel';
  wheel.castShadow = true;
  return wheel;
}

/** LotR-style troop wagon: plank tub on iron wheels, a tarp, a pennant. Faces +Z. */
function makeWagon(): THREE.Group {
  const g = new THREE.Group();
  const tub = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.34, 0.95), WOOD_MID());
  tub.position.y = 0.42;
  tub.castShadow = true;
  const rim = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.08, 1.02), WOOD_DARK());
  rim.position.y = 0.6;
  const tarp = new THREE.Mesh(
    new THREE.CylinderGeometry(0.3, 0.3, 0.6, 10, 1, false, 0, Math.PI),
    new THREE.MeshStandardMaterial({ color: '#5e5346', roughness: 0.95, side: THREE.DoubleSide }),
  );
  tarp.rotation.z = Math.PI / 2;
  tarp.rotation.y = Math.PI / 2;
  tarp.position.set(0, 0.64, -0.15);
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5, 5), WOOD_DARK());
  mast.position.set(0, 0.95, 0.4);
  const flag = new THREE.Mesh(
    new THREE.PlaneGeometry(0.24, 0.14),
    new THREE.MeshStandardMaterial({ color: '#8a2f2f', side: THREE.DoubleSide, roughness: 0.9 }),
  );
  flag.position.set(0.12, 1.1, 0.4);
  g.add(tub, rim, tarp, mast, flag);
  for (const [x, z] of [[-0.32, 0.3], [0.32, 0.3], [-0.32, -0.32], [0.32, -0.32]] as const) {
    const w = makeWheel(0.19);
    w.position.set(x, 0.19, z);
    g.add(w);
  }
  return g;
}

/** Rolling siege tower: tall plank keep on wheels, crenellated top, war banner. Faces +Z. */
function makeSiegeTower(): THREE.Group {
  const g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.24, 1.0), WOOD_DARK());
  base.position.y = 0.34;
  base.castShadow = true;
  const keep = new THREE.Mesh(new THREE.BoxGeometry(0.62, 1.5, 0.7), WOOD_MID());
  keep.position.y = 1.2;
  keep.castShadow = true;
  const band = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.07, 0.74), IRON());
  band.position.y = 1.0;
  const band2 = band.clone();
  band2.position.y = 1.6;
  g.add(base, keep, band, band2);
  // crenellations
  for (const [x, z] of [[-0.24, -0.24], [0.24, -0.24], [-0.24, 0.24], [0.24, 0.24]] as const) {
    const c = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.18, 0.14), WOOD_DARK());
    c.position.set(x, 2.03, z);
    g.add(c);
  }
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5, 5), WOOD_DARK());
  mast.position.y = 2.3;
  const flag = new THREE.Mesh(
    new THREE.PlaneGeometry(0.3, 0.18),
    new THREE.MeshStandardMaterial({ color: '#8a2f2f', side: THREE.DoubleSide, roughness: 0.9 }),
  );
  flag.position.set(0.15, 2.42, 0);
  g.add(mast, flag);
  for (const [x, z] of [[-0.44, 0.34], [0.44, 0.34], [-0.44, -0.34], [0.44, -0.34]] as const) {
    const w = makeWheel(0.22);
    w.position.set(x, 0.22, z);
    g.add(w);
  }
  return g;
}

/** A recurve bow built from a bent tube + string — reads perfectly at game scale. */
function makeBow(): THREE.Group {
  const g = new THREE.Group();
  const wood = new THREE.MeshStandardMaterial({ color: '#6b4a2f', roughness: 0.75 });
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(0, -0.45, 0),
    new THREE.Vector3(0.2, 0, 0),
    new THREE.Vector3(0, 0.45, 0),
  );
  const limb = new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 0.028, 6), wood);
  limb.castShadow = true;
  const string = new THREE.Mesh(
    new THREE.CylinderGeometry(0.007, 0.007, 0.9, 4),
    new THREE.MeshStandardMaterial({ color: '#e8e2d5', roughness: 0.4 }),
  );
  g.add(limb, string);
  return g;
}

/** A crank crossbow: stock along the aim axis, short limb across it. */
function makeCrossbow(): THREE.Group {
  const g = new THREE.Group();
  const wood = new THREE.MeshStandardMaterial({ color: '#5a4630', roughness: 0.75 });
  const steel = new THREE.MeshStandardMaterial({ color: '#9aa6b5', roughness: 0.4, metalness: 0.5 });
  const stock = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.05, 0.06), wood);
  stock.castShadow = true;
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(0.18, 0, -0.25),
    new THREE.Vector3(0.3, 0, 0),
    new THREE.Vector3(0.18, 0, 0.25),
  );
  const limb = new THREE.Mesh(new THREE.TubeGeometry(curve, 12, 0.02, 6), steel);
  const string = new THREE.Mesh(
    new THREE.CylinderGeometry(0.006, 0.006, 0.5, 4),
    new THREE.MeshStandardMaterial({ color: '#e8e2d5', roughness: 0.4 }),
  );
  string.rotation.x = Math.PI / 2;
  string.position.x = 0.18;
  g.add(stock, limb, string);
  return g;
}

/** Gong Goblin's hand-carried gong: a brass disc on a short handle. */
function makeGong(): THREE.Group {
  const g = new THREE.Group();
  const brass = new THREE.MeshStandardMaterial({ color: '#c9a24a', roughness: 0.4, metalness: 0.7 });
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.04, 16), brass);
  disc.rotation.x = Math.PI / 2;
  disc.castShadow = true;
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.02, 6, 16), WOOD_DARK());
  rim.rotation.x = Math.PI / 2;
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.22, 5), WOOD_DARK());
  handle.position.y = -0.28;
  g.add(disc, rim, handle);
  return g;
}

/** War Drummer's marching drum: a squat barrel with a taut skin. */
function makeDrum(): THREE.Group {
  const g = new THREE.Group();
  const shell = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.3, 12), WOOD_MID());
  shell.castShadow = true;
  const skin = new THREE.Mesh(
    new THREE.CylinderGeometry(0.23, 0.23, 0.02, 12),
    new THREE.MeshStandardMaterial({ color: '#e8dcc0', roughness: 0.6 }),
  );
  skin.position.y = 0.16;
  const band1 = new THREE.Mesh(new THREE.TorusGeometry(0.225, 0.015, 5, 12), IRON());
  band1.rotation.x = Math.PI / 2;
  band1.position.y = 0.1;
  const band2 = band1.clone();
  band2.position.y = -0.1;
  g.add(shell, skin, band1, band2);
  return g;
}

export function getAsset(key: string): CharacterAsset {
  const a = assets.get(key);
  if (!a) throw new Error(`asset not loaded: ${key}`);
  return a;
}

export function getAttachment(key: string): { scene: THREE.Group; rawHeight: number } | undefined {
  return attachments.get(key);
}

/** Mage-specific styling: reshape the named Mage_Hat node, toggle held props. */
export interface MageStyle {
  hat: { sx: number; sy: number; sz: number; rotZ?: number; rotX?: number };
  spellbook?: boolean; // show the open spellbook in the left hand
  hatEmissive?: THREE.Color;
}

/** Per-unit model mapping: model key, height (world units), tint. */
export interface UnitLook {
  model: string;
  height: number;
  tint?: THREE.Color;
  tintStrength?: number;
  emissive?: THREE.Color;
  /** whole-body glow strength (default 0.35 — lower keeps dark bodies dark) */
  emissiveIntensity?: number;
  /** multi-tone reskin: materials are ranked by brightness and mapped to
   *  dark / mid / accent — keeps a sculpt's material variation instead of
   *  flooding the whole body with one tint. Only the accent materials glow. */
  palette?: {
    dark: THREE.Color;
    mid: THREE.Color;
    accent: THREE.Color;
    accentEmissive?: THREE.Color;
  };
  /** texture warpaint: exact swatch colors in the model's palette atlas are
   *  replaced (source hex -> target hex). The way to recolor skin/cloth/eyes
   *  INDEPENDENTLY on single-material atlas-textured rigs like the goblin. */
  atlasRemap?: Record<string, string>;
  mage?: MageStyle;
  /** a weapon placed in a hand slot (procedural bow/crossbow, or any attachment key) */
  held?: { key: string; hand: 'l' | 'r'; scale: number; rotX?: number; rotY?: number; rotZ?: number };
  /** hide any node whose name matches (strip held weapons the kit doesn't use) */
  hideRe?: RegExp;
  /** translucent, glossy "made of water" materials (Water Mage) */
  watery?: boolean;
  /** procedural vehicle attachment key — rendered wheels-and-planks, no rig */
  vehicle?: string;
  /** transparent materials whose opacity tracks the wraith's phase state */
  ghostly?: boolean;
  /** flyer: dark membrane wings attached to the back, flapped in code */
  wings?: boolean;
  /** slime: rigless squash-and-stretch blob (tint = goo color) */
  blob?: boolean;
  /** heartstone: rigless glowing crystal, gentle pulse (tint = crystal color) */
  crystal?: boolean;
}

/** The Quaternius goblin's atlas uses exactly five swatches (measured from the
 *  mesh's UVs): skin #758718, cloth #cf9f41, dark gear #45433b, leather #715e40,
 *  eyes #b141ff. Swap them for MTG-card warpaint — green skin, red gear. */
function goblinWarpaint(skin: string, cloth: string, leather: string, eyes: string): Record<string, string> {
  return {
    '#758718': skin,
    '#cf9f41': cloth,
    '#715e40': leather,
    '#b141ff': eyes,
    '#45433b': '#33291f', // straps & buckles: warm dark leather on every kit
  };
}

/** Keyed by WizardDef id (not element — multiple defs, e.g. goblins, can share an element). */
export const WIZARD_LOOKS: Record<string, UnitLook> = {
  fire: {
    model: 'mage', height: 1.45,
    tint: new THREE.Color('#ff6a1e'), tintStrength: 0.75,
    mage: {
      hat: { sx: 0.78, sy: 1.55, sz: 0.78, rotX: -0.18 }, // tall, narrow, swept back
      hatEmissive: new THREE.Color('#ff5500'),
    },
  },
  ice: {
    model: 'mage', height: 1.45,
    tint: new THREE.Color('#5bc8f5'), tintStrength: 0.55,
    mage: {
      hat: { sx: 1.4, sy: 0.62, sz: 1.4 }, // wide-brimmed, squat
      spellbook: true, // scholarly frost mage reads from an open tome
      hatEmissive: new THREE.Color('#7fd8ff'),
    },
  },
  lightning: {
    model: 'mage', height: 1.45,
    tint: new THREE.Color('#b06bff'), tintStrength: 0.55,
    mage: {
      hat: { sx: 0.92, sy: 1.35, sz: 0.92, rotZ: 0.34 }, // tall and crooked
      hatEmissive: new THREE.Color('#d9a8ff'),
    },
  },
  water: {
    model: 'mage', height: 1.45,
    tint: new THREE.Color('#26c2e8'), tintStrength: 0.55,
    watery: true, // translucent liquid look — clearly distinct from opaque Frost
    mage: {
      hat: { sx: 1.15, sy: 0.85, sz: 1.15, rotX: 0.35 }, // brim drooped over the eyes
      hatEmissive: new THREE.Color('#7fe8ff'),
    },
  },
  wind: {
    model: 'mage', height: 1.45,
    tint: new THREE.Color('#bcd9ce'), tintStrength: 0.5,
    mage: {
      hat: { sx: 1.22, sy: 1.0, sz: 1.22 }, // puffy, cloud-like
      hatEmissive: new THREE.Color('#eafff5'),
    },
  },
  // unspecialized shells — neutral, no styling (a pending-icon overlay marks them in 3D)
  generic_wizard: { model: 'mage', height: 1.45, tint: new THREE.Color('#8a8494'), tintStrength: 0.5 },
  generic_goblin: {
    model: 'goblin_real', height: 1.15,
    tint: new THREE.Color('#8a8494'), tintStrength: 0.55,
  },

  // goblins — MTG-card warpaint via atlas swatch remaps: vivid green skin,
  // crimson/orange gear, warm glinting eyes. The goblin atlas has exactly five
  // swatches (skin / cloth / dark gear / leather / eyes) — see goblinWarpaint.
  slingshot: {
    model: 'goblin_real', height: 1.15,
    atlasRemap: goblinWarpaint('#4f9e3f', '#a3271b', '#6b3a24', '#ffc93d'), // classic red raider
  },
  dynamite: {
    model: 'goblin_real', height: 1.15,
    atlasRemap: goblinWarpaint('#5da33a', '#d1571f', '#5a3020', '#ffd75e'), // orange bomber
    emissive: new THREE.Color('#ff6a1e'), emissiveIntensity: 0.12, // ember glow off a lit fuse
  },
  gong: {
    model: 'goblin_real', height: 1.15,
    atlasRemap: goblinWarpaint('#3f8f3f', '#8f1d2e', '#b8862f', '#ffcf4d'), // crimson + gold ritualist
    held: { key: 'gong', hand: 'r', scale: 0.4 },
  },

  // archers — hooded ranger rig for the elves, knight for the human arbalist,
  // the sculpted orc for the bolas trapper
  generic_archer: {
    model: 'ranger', height: 1.4,
    tint: new THREE.Color('#8a8494'), tintStrength: 0.5,
    hideRe: /knife|dagger|sword|crossbow/i,
    held: { key: 'bow', hand: 'l', scale: 0.55 },
  },
  longbow: {
    model: 'ranger', height: 1.5,
    tint: new THREE.Color('#4e8f4e'), tintStrength: 0.55, // forest-green elf
    emissive: new THREE.Color('#3fae5a'),
    hideRe: /knife|dagger|sword|crossbow/i,
    held: { key: 'bow', hand: 'l', scale: 0.62 },
  },
  ballesta: {
    model: 'knight', height: 1.35,
    tint: new THREE.Color('#5b7fc9'), tintStrength: 0.5, // indigo man-at-arms
    hideRe: /sword|shield/i,
    held: { key: 'crossbow', hand: 'l', scale: 0.5 },
  },
  bolas: {
    model: 'orc_real', height: 1.3,
    tint: new THREE.Color('#4a5548'), tintStrength: 0.4, // dark slate war-paint orc
    hideRe: /orc_weapon/i, // he throws bolas bare-handed, not his rig's built-in axe
  },

  // trees — nature spirits, one real sculpted creature per lineage (P13b):
  // Rootgrasp line = Mushroom King (forest monarch, swings his mushroom club),
  // Boulder line = Mushnub (his stout mushroom-beast cousin, stone-tinted),
  // Thornspitter line = Cactoro (a cactus that shoots needles, obviously).
  generic_tree: {
    model: 'cactoro', height: 1.1,
    tint: new THREE.Color('#8a8494'), tintStrength: 0.55,
  },
  rootgrasp: {
    model: 'mushroom_king', height: 1.7,
    tint: new THREE.Color('#5e4630'), tintStrength: 0.45, // barky woodland king
  },
  boulder: {
    model: 'mushnub', height: 1.95,
    tint: new THREE.Color('#6b543c'), tintStrength: 0.45, // stone-brown hide
  },
  thornspitter: {
    model: 'cactoro', height: 1.35,
    tint: new THREE.Color('#55663d'), tintStrength: 0.3, // already green and spiky
  },

  // void — visitors from beyond the sky: deep-violet bodies, glowing magenta
  // accents (dark-swarm palette: purple flesh, darker chitin, hot-pink gems)
  generic_void: {
    model: 'skel_rogue', height: 1.3,
    tint: new THREE.Color('#8a8494'), tintStrength: 0.55,
  },
  voidgazer: {
    model: 'skel_rogue', height: 1.45,
    // obsidian watcher: near-black shroud, violet trim, a glowing amethyst core
    palette: {
      dark: new THREE.Color('#151021'), mid: new THREE.Color('#38265c'),
      accent: new THREE.Color('#b04df0'), accentEmissive: new THREE.Color('#9b30e8'),
    },
  },
  voidsylph: {
    model: 'skel_mage', height: 1.1,
    // dark fairy: ink body, royal-purple robes, hot-pink glow
    palette: {
      dark: new THREE.Color('#1c1233'), mid: new THREE.Color('#4a2f73'),
      accent: new THREE.Color('#ff5fc8'), accentEmissive: new THREE.Color('#ff3db6'),
    },
    wings: true, // membrane wings, flapped in sync
  },
  voidmaw: {
    model: 'dragon', height: 1.5,
    // cosmic drake: blue-black hide, deep-blue belly, purple crest lit from within
    palette: {
      dark: new THREE.Color('#10142a'), mid: new THREE.Color('#283064'),
      accent: new THREE.Color('#8a4be0'), accentEmissive: new THREE.Color('#5a7bff'),
    },
  },

  // ---------------- EVOLVED super-forms: bigger, brighter, unmistakable ----------------
  phoenix: {
    model: 'mage', height: 1.7,
    tint: new THREE.Color('#ff8c42'), tintStrength: 0.85,
    emissive: new THREE.Color('#ff5500'),
    mage: { hat: { sx: 0.7, sy: 1.9, sz: 0.7, rotX: -0.3 }, hatEmissive: new THREE.Color('#ffb163') },
  },
  wintercourt: {
    model: 'mage', height: 1.7,
    tint: new THREE.Color('#a8e6ff'), tintStrength: 0.7,
    emissive: new THREE.Color('#7fd8ff'),
    mage: { hat: { sx: 1.6, sy: 0.7, sz: 1.6 }, spellbook: true, hatEmissive: new THREE.Color('#ffffff') },
  },
  tempest: {
    model: 'mage', height: 1.7,
    tint: new THREE.Color('#d9a8ff'), tintStrength: 0.7,
    emissive: new THREE.Color('#b06bff'),
    mage: { hat: { sx: 0.95, sy: 1.7, sz: 0.95, rotZ: 0.45 }, hatEmissive: new THREE.Color('#f0dcff') },
  },
  tidelord: {
    model: 'mage', height: 1.7,
    tint: new THREE.Color('#26c2e8'), tintStrength: 0.6,
    watery: true,
    mage: { hat: { sx: 1.3, sy: 1.0, sz: 1.3, rotX: 0.4 }, hatEmissive: new THREE.Color('#bff4ff') },
  },
  zephyr: {
    model: 'mage', height: 1.7,
    tint: new THREE.Color('#dff2ea'), tintStrength: 0.6,
    emissive: new THREE.Color('#bcd9ce'),
    mage: { hat: { sx: 1.4, sy: 1.15, sz: 1.4 }, hatEmissive: new THREE.Color('#ffffff') },
  },
  warlord: {
    model: 'goblin_real', height: 1.45,
    atlasRemap: goblinWarpaint('#4f9e3f', '#c2231a', '#7a2e1c', '#ffe08a'), // brighter crimson
    emissive: new THREE.Color('#c9e08a'), emissiveIntensity: 0.15,
  },
  sapperking: {
    model: 'goblin_real', height: 1.45,
    atlasRemap: goblinWarpaint('#5da33a', '#e0641f', '#5a3020', '#ffd75e'),
    emissive: new THREE.Color('#ff6a1e'), emissiveIntensity: 0.15,
  },
  doomgong: {
    model: 'goblin_real', height: 1.45,
    atlasRemap: goblinWarpaint('#3f8f3f', '#a01f33', '#d1a13d', '#ffcf4d'), // gilded doom
    emissive: new THREE.Color('#f4d98a'), emissiveIntensity: 0.15,
    held: { key: 'gong', hand: 'r', scale: 0.5 },
  },
  stormpiercer: {
    model: 'ranger', height: 1.75,
    tint: new THREE.Color('#4e8f4e'), tintStrength: 0.65,
    emissive: new THREE.Color('#7dff9b'),
    hideRe: /knife|dagger|sword|crossbow/i,
    held: { key: 'bow', hand: 'l', scale: 0.7 },
  },
  ironstorm: {
    model: 'knight', height: 1.55,
    tint: new THREE.Color('#5b7fc9'), tintStrength: 0.65,
    emissive: new THREE.Color('#8fb4ff'),
    hideRe: /sword|shield/i,
    held: { key: 'crossbow', hand: 'l', scale: 0.58 },
  },
  chainwarden: {
    model: 'orc_real', height: 1.55,
    tint: new THREE.Color('#4a5548'), tintStrength: 0.45,
    emissive: new THREE.Color('#c8d6b0'),
    hideRe: /orc_weapon/i,
  },
  elderroot: {
    model: 'mushroom_king', height: 2.15,
    tint: new THREE.Color('#4a3624'), tintStrength: 0.55,
    emissive: new THREE.Color('#3f6b33'),
  },
  mountain: {
    model: 'mushnub', height: 2.4,
    tint: new THREE.Color('#5e4c38'), tintStrength: 0.5,
    emissive: new THREE.Color('#8d7a5e'),
  },
  bramblehydra: {
    model: 'cactoro', height: 1.7,
    tint: new THREE.Color('#3f6b33'), tintStrength: 0.45,
    emissive: new THREE.Color('#6fcf5f'),
  },
};

export const ENEMY_LOOKS: Record<string, UnitLook> = {
  grunt: { model: 'skel_minion', height: 1.05, tint: new THREE.Color('#7da35c'), tintStrength: 0.35 },
  runner: { model: 'skel_rogue', height: 1.1, tint: new THREE.Color('#d9a648'), tintStrength: 0.35 },
  knight: { model: 'knight', height: 1.25, tint: new THREE.Color('#8d99ae'), tintStrength: 0.25 },
  shade: {
    model: 'skel_mage', height: 1.15,
    tint: new THREE.Color('#b35442'), tintStrength: 0.45,
    emissive: new THREE.Color('#ff5522'),
  },
  golem: { model: 'skel_warrior', height: 2.6, tint: new THREE.Color('#3d2f5e'), tintStrength: 0.6 },
  golemling: { model: 'skel_warrior', height: 1.45, tint: new THREE.Color('#7a68a6'), tintStrength: 0.5 },

  // the horde (Phase 8) — real sculpted Quaternius Orc mesh, axe built into the rig
  orcraider: {
    model: 'orc_real', height: 1.15,
    tint: new THREE.Color('#5e7a3a'), tintStrength: 0.35,
  },
  orcbrute: {
    model: 'orc_real', height: 1.5,
    tint: new THREE.Color('#4a5d33'), tintStrength: 0.45,
  },
  troll: {
    model: 'orc_real', height: 2.3,
    tint: new THREE.Color('#6a7d5e'), tintStrength: 0.5,
    emissive: new THREE.Color('#38553f'),
  },
  orcshaman: {
    model: 'skel_mage', height: 1.2,
    tint: new THREE.Color('#3f8f5c'), tintStrength: 0.6,
    emissive: new THREE.Color('#3fae5a'),
  },
  wardrummer: {
    model: 'orc_real', height: 1.35,
    tint: new THREE.Color('#8a5c3a'), tintStrength: 0.4,
    hideRe: /orc_weapon/i,
    held: { key: 'drum', hand: 'l', scale: 0.42 },
  },
  wraith: {
    model: 'skel_rogue', height: 1.15,
    tint: new THREE.Color('#9db8c9'), tintStrength: 0.5,
    emissive: new THREE.Color('#bcd9ff'),
    ghostly: true,
  },
  warwagon: { model: 'goblin', height: 1.0, vehicle: 'vehicle_wagon', tint: new THREE.Color('#7a5c38'), tintStrength: 0.2 },
  siegetower: { model: 'goblin', height: 2.3, vehicle: 'vehicle_tower', tint: new THREE.Color('#6b4f30'), tintStrength: 0.2 },

  // death from above + dirty tricks (Phase 12)
  gargoyle: {
    model: 'skel_minion', height: 1.05,
    tint: new THREE.Color('#8d99ae'), tintStrength: 0.6,
    wings: true,
  },
  drake: {
    model: 'skel_rogue', height: 1.3,
    tint: new THREE.Color('#c25a2e'), tintStrength: 0.65,
    emissive: new THREE.Color('#ff5522'),
    wings: true,
  },
  hexer: {
    model: 'skel_mage', height: 1.25,
    tint: new THREE.Color('#7a4a9e'), tintStrength: 0.65,
    emissive: new THREE.Color('#b06bff'),
  },
  banshee: {
    model: 'skel_rogue', height: 1.15,
    tint: new THREE.Color('#cfd8e8'), tintStrength: 0.6,
    emissive: new THREE.Color('#e8f2ff'),
    ghostly: true, // pale and translucent — no phasing, just dread
  },
  necromancer: {
    model: 'skel_mage', height: 1.35,
    tint: new THREE.Color('#3a2f4e'), tintStrength: 0.7,
    emissive: new THREE.Color('#7a4a9e'),
  },
  risen: { model: 'skel_minion', height: 0.95, tint: new THREE.Color('#9a92b5'), tintStrength: 0.5 },
  thief: { model: 'skel_rogue', height: 1.05, tint: new THREE.Color('#d9c148'), tintStrength: 0.55 },
  shieldbearer: {
    model: 'knight', height: 1.35,
    tint: new THREE.Color('#5b7fc9'), tintStrength: 0.5,
    emissive: new THREE.Color('#8fb4ff'),
  },
  slime_big: { model: 'goblin', height: 0.85, tint: new THREE.Color('#5fbf4a'), blob: true },
  slime_mid: { model: 'goblin', height: 0.6, tint: new THREE.Color('#74d15e'), blob: true },
  slime_small: { model: 'goblin', height: 0.42, tint: new THREE.Color('#8ce276'), blob: true },
  heartstone: { model: 'goblin', height: 1.0, tint: new THREE.Color('#e05a7a'), crystal: true },

  // act bosses — huge, tinted, unmistakable
  warlord: {
    model: 'skel_warrior', height: 3.0,
    tint: new THREE.Color('#6e7b8a'), tintStrength: 0.55,
    emissive: new THREE.Color('#8fa2b8'),
  },
  pyretitan: {
    model: 'skel_mage', height: 3.1,
    tint: new THREE.Color('#c25a2e'), tintStrength: 0.6,
    emissive: new THREE.Color('#ff5522'),
  },
  colossus: {
    model: 'skel_warrior', height: 3.6,
    tint: new THREE.Color('#3d2f5e'), tintStrength: 0.7,
    emissive: new THREE.Color('#b14aed'),
  },
};
