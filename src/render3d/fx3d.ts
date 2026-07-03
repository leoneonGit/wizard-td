import * as THREE from 'three';
import { CELL } from '../engine/grid';
import { fx } from '../render/effects';
import { ELEMENTS } from '../data/elements';
import type { GameState } from '../game/state';

const PX = 1 / CELL;
const FX_Y = 0.45; // effects float at torso height

let scene: THREE.Scene;
let camera: THREE.Camera;
let boardWrap: HTMLElement;

// particles as a single Points cloud, refilled each frame
const MAX_PARTICLES = 800;
let points: THREE.Points;
let posAttr: THREE.BufferAttribute;
let colAttr: THREE.BufferAttribute;

// pooled projectile meshes, one pool per visual kind (orb/rock/stick/arrow/bolt/needle)
type ProjKind = 'orb' | 'rock' | 'stick' | 'arrow' | 'bolt' | 'needle';
const KINDS: ProjKind[] = ['orb', 'rock', 'stick', 'arrow', 'bolt', 'needle'];
const projPools: Record<ProjKind, THREE.Mesh[]> = { orb: [], rock: [], stick: [], arrow: [], bolt: [], needle: [] };
let projGeos: Record<ProjKind, THREE.BufferGeometry>;
/** fixed tints for the physical kinds — orbs take their element's color */
const KIND_COLOR: Record<ProjKind, string | null> = {
  orb: null, rock: '#8d8578', stick: '#c8452e', arrow: '#e6d7b0', bolt: '#cdd7e0', needle: '#7fce6a',
};
let projSpin = 0;

// per-frame rebuilt lines for lightning arcs
let arcLines: THREE.Group;

// rings on the ground
let ringGroup: THREE.Group;

// DOM floaters
const floaterDivs = new Map<object, HTMLDivElement>();
let floaterLayer: HTMLDivElement;

export function initFx3d(s: THREE.Scene, cam: THREE.Camera, wrap: HTMLElement): void {
  scene = s;
  camera = cam;
  boardWrap = wrap;

  const geo = new THREE.BufferGeometry();
  posAttr = new THREE.BufferAttribute(new Float32Array(MAX_PARTICLES * 3), 3);
  colAttr = new THREE.BufferAttribute(new Float32Array(MAX_PARTICLES * 3), 3);
  geo.setAttribute('position', posAttr);
  geo.setAttribute('color', colAttr);
  const mat = new THREE.PointsMaterial({
    size: 0.15,
    vertexColors: true,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  scene.add(points);

  projGeos = {
    orb: new THREE.SphereGeometry(0.11, 10, 8),
    rock: new THREE.DodecahedronGeometry(0.12),
    stick: new THREE.CylinderGeometry(0.05, 0.05, 0.28, 8).rotateZ(Math.PI / 2),
    arrow: new THREE.ConeGeometry(0.04, 0.44, 6).rotateZ(-Math.PI / 2),
    bolt: new THREE.ConeGeometry(0.06, 0.34, 6).rotateZ(-Math.PI / 2),
    needle: new THREE.ConeGeometry(0.022, 0.22, 5).rotateZ(-Math.PI / 2),
  };
  arcLines = new THREE.Group();
  scene.add(arcLines);
  ringGroup = new THREE.Group();
  scene.add(ringGroup);

  floaterLayer = document.createElement('div');
  floaterLayer.style.cssText =
    'position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:4;font-family:Segoe UI,sans-serif;';
  boardWrap.appendChild(floaterLayer);
}

const tmpColor = new THREE.Color();

export function syncFx(state: GameState): void {
  // ---- particles
  let n = 0;
  for (const p of fx.particles) {
    if (n >= MAX_PARTICLES) break;
    posAttr.setXYZ(n, p.x * PX, FX_Y + (1 - p.life / p.maxLife) * 0.3, p.y * PX);
    tmpColor.set(p.color);
    colAttr.setXYZ(n, tmpColor.r, tmpColor.g, tmpColor.b);
    n++;
  }
  posAttr.needsUpdate = true;
  colAttr.needsUpdate = true;
  (points.geometry as THREE.BufferGeometry).setDrawRange(0, n);

  // ---- projectiles: per-kind pooled meshes with real identity
  projSpin += 0.22;
  const used: Record<ProjKind, number> = { orb: 0, rock: 0, stick: 0, arrow: 0, bolt: 0, needle: 0 };
  for (const p of state.projectiles) {
    const kind = (p.visual ?? 'orb') as ProjKind;
    const pool = projPools[kind];
    let mesh = pool[used[kind]];
    if (!mesh) {
      mesh = new THREE.Mesh(projGeos[kind], new THREE.MeshBasicMaterial({ color: '#ffffff' }));
      scene.add(mesh);
      pool.push(mesh);
    }
    used[kind]++;
    mesh.visible = true;

    // thrown things (rocks, dynamite) lob a parabola — render-only juice
    let yOff = 0;
    if ((kind === 'rock' || kind === 'stick') && p.sx !== undefined && p.sy !== undefined) {
      const total = Math.hypot(p.tx - p.sx, p.ty - p.sy) || 1;
      const traveled = Math.hypot(p.x - p.sx, p.y - p.sy);
      const t = Math.min(1, traveled / total);
      const arcH = Math.min(0.95, 0.35 + total * PX * 0.05);
      yOff = Math.sin(t * Math.PI) * arcH;
    }
    mesh.position.set(p.x * PX, FX_Y + yOff, p.y * PX);

    const mat = mesh.material as THREE.MeshBasicMaterial;
    mat.color.set(KIND_COLOR[kind] ?? ELEMENTS[p.element].color);

    const dir = Math.atan2(p.ty - p.y, p.tx - p.x);
    mesh.rotation.set(0, -dir, 0);
    if (kind === 'orb') {
      mesh.scale.set(1.8, 1, 1); // comet stretch along travel
    } else if (kind === 'rock') {
      mesh.scale.setScalar(1);
      mesh.rotation.x = projSpin;
      mesh.rotation.z = projSpin * 0.7;
    } else if (kind === 'stick') {
      mesh.scale.setScalar(1);
      mesh.rotation.z = projSpin * 1.6; // tumbling dynamite
      // fuse sparks trail off the stick
      if (Math.random() < 0.5) fx.burst(p.x, p.y, '#ffd75e', 1, 20, 1.5, 0.2);
    } else {
      mesh.scale.setScalar(1);
    }
  }
  for (const kind of KINDS) {
    const pool = projPools[kind];
    for (let i = used[kind]; i < pool.length; i++) pool[i].visible = false;
  }

  // ---- lightning arcs (rebuilt per frame; few of them, short-lived)
  arcLines.clear();
  for (const a of fx.arcs) {
    const alpha = a.life / a.maxLife;
    const pts = a.pts.map((q) => new THREE.Vector3(q.x * PX, FX_Y + 0.15, q.y * PX));
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const mat = new THREE.LineBasicMaterial({
      color: a.color,
      transparent: true,
      opacity: alpha,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    arcLines.add(new THREE.Line(geo, mat));
  }

  // ---- rings (ground shockwaves)
  ringGroup.clear();
  for (const g of fx.rings) {
    const t = 1 - g.life / g.maxLife;
    const R = Math.max(0.02, (g.maxR * t) * PX);
    const geo = new THREE.RingGeometry(R * 0.82, R, 28);
    const mat = new THREE.MeshBasicMaterial({
      color: g.color,
      transparent: true,
      opacity: (1 - t) * 0.7,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(g.x * PX, 0.02, g.y * PX);
    ringGroup.add(mesh);
  }

  // ---- floaters as DOM overlay (crisp text, cheap)
  const seen = new Set<object>();
  const rect = { w: boardWrap.clientWidth, h: boardWrap.clientHeight };
  const v = new THREE.Vector3();
  for (const f of fx.floaters) {
    seen.add(f);
    let div = floaterDivs.get(f);
    if (!div) {
      div = document.createElement('div');
      div.textContent = f.text;
      div.style.cssText = `position:absolute;transform:translate(-50%,-50%);font-weight:700;font-size:${f.size}px;color:${f.color};text-shadow:0 1px 3px rgba(0,0,0,0.8);white-space:nowrap;`;
      floaterLayer.appendChild(div);
      floaterDivs.set(f, div);
    }
    v.set(f.x * PX, FX_Y + 0.3, f.y * PX).project(camera);
    div.style.left = `${((v.x + 1) / 2) * rect.w}px`;
    div.style.top = `${((1 - v.y) / 2) * rect.h - (1 - f.life / f.maxLife) * 26}px`;
    div.style.opacity = String(Math.min(1, (f.life / f.maxLife) * 2));
  }
  for (const [key, div] of floaterDivs) {
    if (!seen.has(key)) {
      div.remove();
      floaterDivs.delete(key);
    }
  }
}
