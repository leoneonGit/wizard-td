import * as THREE from 'three';
import { BOARD_W, BOARD_H, CELL, COLS, ROWS, pixelToCell, inBounds, cellCenter } from '../engine/grid';
import { WIZARDS } from '../data/wizards';
import { ELEMENTS } from '../data/elements';
import { isBuildable, findWizard, type GameState } from '../game/state';
import { paintBoardTexture, DEFAULT_THEME } from './ground';
import type { MapTheme } from '../game/types';
import { loadCharacters } from './assets';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { PROP_MODELS } from '../game/mapio';
import { initUnits, syncUnits } from './units';
import { initFx3d, syncFx } from './fx3d';

const PX = 1 / CELL;
const W_UNITS = BOARD_W * PX; // 24
const H_UNITS = BOARD_H * PX; // 16

let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.OrthographicCamera;
let raycaster: THREE.Raycaster;
let groundPlane: THREE.Plane;

let waterGroup: THREE.Group; // animated water surfaces
let cloudGroup: THREE.Group; // drifting clouds (visuals follow sim state)
let cloudShadows: THREE.Mesh[] = [];
let cloudPuffs: THREE.Group[] = [];
let hemi: THREE.HemisphereLight;
let sun: THREE.DirectionalLight;
let groundMat: THREE.MeshStandardMaterial;
let skirtMat: THREE.MeshStandardMaterial;
let mapGroup: THREE.Group; // everything map-specific: portals, water, clouds, props
let rangeRing: THREE.Mesh; // selected wizard range
let gridGroup: THREE.Group; // buildable-grid overlay while placing
let gridCells: THREE.InstancedMesh;
let gridKey = '';
let ghostGroup: THREE.Group; // placement preview
let ghostRing: THREE.Mesh;
let ghostCell: THREE.Mesh;
let ghostBody: THREE.Mesh;

let lastTime = 0;

// ---- board camera view: zoom (1..3) + clamped pan, all in world units ----
const BASE_HALF_W = W_UNITS / 2 + 0.3;
const BASE_HALF_H = BASE_HALF_W / (BOARD_W / BOARD_H);
const CAM_TILT = THREE.MathUtils.degToRad(52);
const CAM_DIST = 30;
const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
let viewZoom = 1;
let panX = 0;
let panZ = 0;

/** Re-aim the camera from the current zoom/pan state. */
function applyView(): void {
  const center = new THREE.Vector3(W_UNITS / 2 + panX, 0, H_UNITS / 2 - 0.2 + panZ);
  camera.position.set(center.x, Math.sin(CAM_TILT) * CAM_DIST, center.z + Math.cos(CAM_TILT) * CAM_DIST);
  camera.lookAt(center);
  camera.zoom = viewZoom;
  camera.updateProjectionMatrix();
}

function clampPan(): void {
  // keep the visible window inside the board (with the base margin)
  const maxX = BASE_HALF_W * (1 - 1 / viewZoom);
  const maxZ = BASE_HALF_H * (1 - 1 / viewZoom);
  panX = Math.max(-maxX, Math.min(maxX, panX));
  panZ = Math.max(-maxZ, Math.min(maxZ, panZ));
}

/** Zoom by a factor, keeping the given canvas point (offset px) fixed on screen. */
export function zoomView(factor: number, offsetX?: number, offsetY?: number): void {
  const anchor = offsetX !== undefined && offsetY !== undefined
    ? pickBoardPoint(offsetX, offsetY)
    : null;
  const before = anchor ? { x: anchor.x, y: anchor.y } : null;
  viewZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, viewZoom * factor));
  if (viewZoom <= MIN_ZOOM + 0.001) {
    panX = 0;
    panZ = 0;
  } else if (before && offsetX !== undefined && offsetY !== undefined) {
    applyView();
    const after = pickBoardPoint(offsetX, offsetY);
    if (after) {
      panX += (before.x - after.x) * PX;
      panZ += (before.y - after.y) * PX;
    }
  }
  clampPan();
  applyView();
}

/** Pan by a screen-pixel delta (drag). */
export function panView(dxPx: number, dyPx: number): void {
  const el = renderer.domElement;
  const worldPerPx = (BASE_HALF_W * 2) / (el.clientWidth || BOARD_W) / viewZoom;
  panX -= dxPx * worldPerPx;
  panZ -= dyPx * worldPerPx; // screen-Y maps to board-Z under the tilted ortho view
  clampPan();
  applyView();
}

export function resetView(): void {
  viewZoom = 1;
  panX = 0;
  panZ = 0;
  applyView();
}

export function getViewZoom(): number {
  return viewZoom;
}

export async function initRenderer3d(canvas: HTMLCanvasElement, state: GameState): Promise<void> {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
  renderer.setSize(BOARD_W, BOARD_H, false);
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // softer contact edges
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;

  scene = new THREE.Scene();
  scene.background = new THREE.Color('#1a2419');

  // orthographic 3/4 view: straight-on from the south, tilted down
  const aspect = BOARD_W / BOARD_H;
  const halfW = W_UNITS / 2 + 0.3;
  const halfH = halfW / aspect;
  camera = new THREE.OrthographicCamera(-halfW, halfW, halfH, -halfH, 0.1, 100);
  applyView();

  // lights (theme-tinted; retinted on act transitions)
  hemi = new THREE.HemisphereLight('#cfe8ff', '#3a4a30', 1.7);
  scene.add(hemi);
  sun = new THREE.DirectionalLight('#fff4d6', 2.4);
  sun.position.set(W_UNITS * 0.3, 14, H_UNITS * 0.15);
  sun.target.position.set(W_UNITS / 2, 0, H_UNITS / 2 - 0.2); // board center (pan-independent)
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const s = 15;
  sun.shadow.camera.left = -s;
  sun.shadow.camera.right = s;
  sun.shadow.camera.top = s;
  sun.shadow.camera.bottom = -s;
  sun.shadow.camera.far = 60;
  scene.add(sun, sun.target);

  // ground: painted 2D board as texture (texture swapped per act)
  groundMat = new THREE.MeshStandardMaterial({ roughness: 1 });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(W_UNITS, H_UNITS), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(W_UNITS / 2, 0, H_UNITS / 2);
  ground.receiveShadow = true;
  scene.add(ground);

  // oversized skirt below the board so the tilted view never shows void
  skirtMat = new THREE.MeshStandardMaterial({ color: '#1c2b1c', roughness: 1 });
  const skirt = new THREE.Mesh(new THREE.PlaneGeometry(W_UNITS * 4, H_UNITS * 4), skirtMat);
  skirt.rotation.x = -Math.PI / 2;
  skirt.position.set(W_UNITS / 2, -0.02, H_UNITS / 2);
  skirt.receiveShadow = true;
  scene.add(skirt);

  applyTheme(state.map.theme ?? DEFAULT_THEME);
  await buildMapScene(state);

  // selection range ring
  rangeRing = new THREE.Mesh(
    new THREE.RingGeometry(0.97, 1, 48),
    new THREE.MeshBasicMaterial({ color: '#c9b8ff', transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false }),
  );
  rangeRing.rotation.x = -Math.PI / 2;
  rangeRing.position.y = 0.03;
  rangeRing.visible = false;
  scene.add(rangeRing);

  // buildable-grid overlay: the 24x16 lattice + per-cell green/red tint, shown
  // only while placing — phones can't hover to probe where cells are
  gridGroup = new THREE.Group();
  const latticePts: number[] = [];
  for (let cx = 0; cx <= COLS; cx++) latticePts.push(cx, 0, 0, cx, 0, ROWS);
  for (let cy = 0; cy <= ROWS; cy++) latticePts.push(0, 0, cy, COLS, 0, cy);
  const latticeGeo = new THREE.BufferGeometry();
  latticeGeo.setAttribute('position', new THREE.Float32BufferAttribute(latticePts, 3));
  const lattice = new THREE.LineSegments(
    latticeGeo,
    new THREE.LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.13, depthWrite: false }),
  );
  lattice.position.y = 0.016;
  gridGroup.add(lattice);
  gridCells = new THREE.InstancedMesh(
    new THREE.PlaneGeometry(0.92, 0.92),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.14, depthWrite: false, side: THREE.DoubleSide }),
    COLS * ROWS,
  );
  {
    const m4 = new THREE.Matrix4();
    const rot = new THREE.Matrix4().makeRotationX(-Math.PI / 2);
    let i = 0;
    for (let cy = 0; cy < ROWS; cy++) {
      for (let cx = 0; cx < COLS; cx++) {
        m4.copy(rot);
        m4.setPosition(cx + 0.5, 0.012, cy + 0.5);
        gridCells.setMatrixAt(i, m4);
        gridCells.setColorAt(i, new THREE.Color('#59c96a'));
        i++;
      }
    }
  }
  gridGroup.add(gridCells);
  gridGroup.visible = false;
  scene.add(gridGroup);

  // placement ghost
  ghostGroup = new THREE.Group();
  ghostRing = rangeRing.clone();
  ghostRing.material = (rangeRing.material as THREE.MeshBasicMaterial).clone();
  ghostRing.visible = true;
  ghostRing.position.set(0, 0.03, 0);
  ghostCell = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ color: '#7dff9b', transparent: true, opacity: 0.3, side: THREE.DoubleSide, depthWrite: false }),
  );
  ghostCell.rotation.x = -Math.PI / 2;
  ghostCell.position.y = 0.02;
  ghostBody = new THREE.Mesh(
    new THREE.CylinderGeometry(0.28, 0.36, 1.0, 12),
    new THREE.MeshStandardMaterial({ color: '#ffffff', transparent: true, opacity: 0.45 }),
  );
  ghostBody.position.y = 0.5;
  ghostGroup.add(ghostRing, ghostCell, ghostBody);
  ghostGroup.visible = false;
  scene.add(ghostGroup);

  raycaster = new THREE.Raycaster();
  groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

  const exit = state.track.posAt(state.track.total);
  initUnits(scene, new THREE.Vector3(exit.x * PX, 0, exit.y * PX));
  initFx3d(scene, camera, canvas.parentElement as HTMLElement);

  await loadCharacters();
  lastTime = performance.now();
  (window as unknown as { __scene?: THREE.Scene }).__scene = scene; // debug/test handle
}

/** Tint the world to the act's mood: lights, fog, exposure, backdrop. */
function applyTheme(theme: MapTheme): void {
  hemi.color.set(theme.hemiSky);
  hemi.groundColor.set(theme.hemiGround);
  sun.color.set(theme.sun);
  sun.intensity = theme.sunIntensity;
  renderer.toneMappingExposure = theme.exposure;
  scene.fog = new THREE.Fog(theme.fog, 34, 62); // a whisper of depth at the board's far edge
  scene.background = new THREE.Color(theme.fog).multiplyScalar(0.35);
  skirtMat.color.set(theme.grassB).multiplyScalar(0.75);
}

/** Build everything map-specific (ground texture, portals, water, clouds, props). */
async function buildMapScene(state: GameState): Promise<void> {
  const theme = state.map.theme ?? DEFAULT_THEME;
  const tex = new THREE.CanvasTexture(paintBoardTexture(state.track, state.map.water ?? [], theme));
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  groundMat.map?.dispose();
  groundMat.map = tex;
  groundMat.needsUpdate = true;

  mapGroup = new THREE.Group();
  scene.add(mapGroup);

  // portals: glowing torus gates at track ends
  addPortal(state.track.posAt(0), '#b14aed');
  addPortal(state.track.posAt(state.track.total), '#3a86ff');

  // water surfaces: one translucent quad per water cell, gently animated in draw3d
  waterGroup = new THREE.Group();
  for (const [cx, cy] of state.map.water ?? []) {
    const quad = new THREE.Mesh(
      new THREE.PlaneGeometry(1.02, 1.02),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(theme.water).lerp(new THREE.Color('#4f9fe4'), 0.4),
        transparent: true,
        opacity: 0.72,
        roughness: 0.12,
        metalness: 0.35, // glossier — catches the theme sun
      }),
    );
    quad.rotation.x = -Math.PI / 2;
    quad.position.set(cx + 0.5, 0.04, cy + 0.5);
    waterGroup.add(quad);
  }
  mapGroup.add(waterGroup);

  // clouds: stylized puff clusters, positions driven by the sim
  cloudGroup = new THREE.Group();
  cloudPuffs = [];
  cloudShadows = [];
  const puffMat = new THREE.MeshStandardMaterial({
    color: '#f4f9ff',
    transparent: true,
    opacity: 0.88,
    roughness: 0.9,
  });
  for (let i = 0; i < state.clouds.length; i++) {
    const puffs = new THREE.Group();
    const sizes: [number, number, number, number][] = [
      [0, 0, 0, 0.65], [0.6, 0.1, 0.15, 0.45], [-0.55, 0.05, -0.1, 0.5], [0.15, 0.35, -0.2, 0.4],
    ];
    for (const [px, py, pz, r] of sizes) {
      const puff = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 10), puffMat);
      puff.position.set(px, py, pz);
      puffs.add(puff);
    }
    puffs.position.y = 3.1;
    cloudGroup.add(puffs);
    cloudPuffs.push(puffs);

    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(1.05, 24),
      new THREE.MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.16, depthWrite: false }),
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.03;
    cloudGroup.add(shadow);
    cloudShadows.push(shadow);
  }
  mapGroup.add(cloudGroup);

  await placeProps(state);
}

/** Act transition: tear down the old map's scene pieces and raise the new act's. */
export function rebuildMap(state: GameState): void {
  if (mapGroup) {
    scene.remove(mapGroup);
    mapGroup.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh) {
        m.geometry?.dispose();
        const mat = m.material as THREE.Material | THREE.Material[];
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
        else mat?.dispose();
      }
    });
  }
  applyTheme(state.map.theme ?? DEFAULT_THEME);
  const exit = state.track.posAt(state.track.total);
  initUnits(scene, new THREE.Vector3(exit.x * PX, 0, exit.y * PX));
  void buildMapScene(state).catch((err) => console.warn('map rebuild failed', err));
}

/** Load + place the map's decorative props as static, shadow-casting clones. */
async function placeProps(state: GameState): Promise<void> {
  const props = state.map.props ?? [];
  if (props.length === 0) return;
  const loader = new GLTFLoader();
  const cache = new Map<string, { scene: THREE.Group; unitScale: number }>();
  for (const key of new Set(props.map((p) => p.model))) {
    const info = PROP_MODELS[key];
    if (!info) continue;
    try {
      const gltf = await loader.loadAsync(info.file);
      gltf.scene.traverse((o) => {
        if ((o as THREE.Mesh).isMesh) o.castShadow = true;
      });
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const h = Math.max(0.001, box.max.y - box.min.y);
      cache.set(key, { scene: gltf.scene, unitScale: info.height / h });
    } catch (err) {
      console.warn(`prop model failed to load: ${key}`, err);
    }
  }
  for (const p of props) {
    const entry = cache.get(p.model);
    if (!entry) continue;
    const clone = entry.scene.clone(true);
    clone.scale.setScalar(entry.unitScale * p.scale);
    clone.position.set(p.x * PX, 0, p.y * PX);
    clone.rotation.y = -p.rot;
    mapGroup.add(clone);
  }
}

function addPortal(p: { x: number; y: number; angle: number }, color: string): void {
  const g = new THREE.Group();
  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.55, 0.09, 10, 24),
    new THREE.MeshBasicMaterial({ color }),
  );
  torus.position.y = 0.7;
  torus.rotation.y = p.angle + Math.PI / 2;
  const glow = new THREE.PointLight(color, 6, 4);
  glow.position.y = 0.7;
  g.add(torus, glow);
  g.position.set(p.x * PX, 0, p.y * PX);
  mapGroup.add(g);
}

/** Map a mouse position (canvas offset px) to board pixels via ground-plane raycast.
 *  Uses the canvas' CSS size so it works when the board is responsively scaled. */
export function pickBoardPoint(offsetX: number, offsetY: number): { x: number; y: number } | null {
  const el = renderer.domElement;
  const w = el.clientWidth || BOARD_W;
  const h = el.clientHeight || BOARD_H;
  const ndc = new THREE.Vector2((offsetX / w) * 2 - 1, -(offsetY / h) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const hit = new THREE.Vector3();
  if (!raycaster.ray.intersectPlane(groundPlane, hit)) return null;
  const bx = hit.x * CELL;
  const by = hit.z * CELL;
  if (bx < 0 || by < 0 || bx >= BOARD_W || by >= BOARD_H) return null;
  return { x: bx, y: by };
}

export function draw3d(state: GameState): void {
  const now = performance.now();
  const dt = Math.min(0.1, (now - lastTime) / 1000);
  lastTime = now;

  syncUnits(state, dt);
  syncFx(state);

  // water shimmer
  const t = now / 1000;
  waterGroup.children.forEach((quad, i) => {
    quad.position.y = 0.04 + Math.sin(t * 1.8 + i * 1.3) * 0.012;
    ((quad as THREE.Mesh).material as THREE.MeshStandardMaterial).opacity =
      0.68 + Math.sin(t * 2.4 + i * 0.7) * 0.07;
  });

  // clouds follow the sim (gentle bob on top)
  state.clouds.forEach((c, i) => {
    const puffs = cloudPuffs[i];
    const shadow = cloudShadows[i];
    if (!puffs) return;
    puffs.position.set(c.x * PX, 3.1 + Math.sin(t * 0.9 + i) * 0.12, c.y * PX);
    shadow.position.set(c.x * PX, 0.03, c.y * PX);
  });

  // selected wizard range ring
  const sel = findWizard(state, state.selectedWizardId);
  if (sel) {
    rangeRing.visible = true;
    rangeRing.position.set(sel.x * PX, 0.03, sel.y * PX);
    const r = sel.stats.range * PX;
    rangeRing.scale.setScalar(r);
  } else {
    rangeRing.visible = false;
  }

  // buildable-grid overlay: repaint when the placing def / towers / map change
  if (state.placingType) {
    gridGroup.visible = true;
    const key = `${state.placingType}|${state.wizards.length}|${state.map.id}|${state.act}`;
    if (key !== gridKey) {
      gridKey = key;
      const def = WIZARDS[state.placingType];
      const green = new THREE.Color('#59c96a');
      const red = new THREE.Color('#c94d4d');
      let i = 0;
      for (let cy = 0; cy < ROWS; cy++) {
        for (let cx = 0; cx < COLS; cx++) {
          gridCells.setColorAt(i++, isBuildable(state, cx, cy, def) ? green : red);
        }
      }
      if (gridCells.instanceColor) gridCells.instanceColor.needsUpdate = true;
    }
  } else {
    gridGroup.visible = false;
    gridKey = '';
  }

  // placement ghost
  if (state.placingType && state.mouseOnBoard) {
    const def = WIZARDS[state.placingType];
    const { cx, cy } = pixelToCell(state.mouseX, state.mouseY);
    if (inBounds(cx, cy)) {
      const ok = isBuildable(state, cx, cy, def);
      const c = cellCenter(cx, cy);
      ghostGroup.visible = true;
      ghostGroup.position.set(c.x * PX, 0, c.y * PX);
      ghostRing.scale.setScalar(def.range * PX);
      const col = ok ? '#7dff9b' : '#ff6b6b';
      (ghostRing.material as THREE.MeshBasicMaterial).color.set(col);
      (ghostCell.material as THREE.MeshBasicMaterial).color.set(col);
      (ghostBody.material as THREE.MeshStandardMaterial).color.set(ELEMENTS[def.element].color);
    } else {
      ghostGroup.visible = false;
    }
  } else {
    ghostGroup.visible = false;
  }

  renderer.render(scene, camera);
}
