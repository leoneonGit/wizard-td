/** 2D top-down map editor. Paints road / water / cloud paths / props onto a MapDef. */
import { CELL, COLS, ROWS, BOARD_W, BOARD_H } from '../engine/grid';
import { Track } from '../game/path';
import { paintBoardTexture } from '../render3d/ground';
import {
  PROP_MODELS, listMaps, loadMap, saveCustomMap, deleteCustomMap,
  validateMap, exportMapJson, importMapJson, propOverlapsRoad,
} from '../game/mapio';
import type { MapDef, PropDef } from '../game/types';

type Tool = 'road' | 'water' | 'cloud' | 'prop';

const HELP: Record<Tool, string> = {
  road: 'Click to add road waypoints. Drag handles to move, right-click a handle to delete. Drop the FIRST and LAST point at a board edge — it snaps off-board (the entrance/exit).',
  water: 'Click / drag to paint water cells. Drag starting on water to erase.',
  cloud: 'Click to add points to the cloud loop. Right-click a point to delete it. Clouds drift around the loop.',
  prop: 'Pick a prop, click to place. Click a placed prop to select it — R rotates, +/- scales, Delete removes.',
};

let map: MapDef = freshMap();
let tool: Tool = 'road';
let activeProp = 'tree_a';
let selectedProp: PropDef | null = null;
let dragWaypoint = -1;
let paintingWater: boolean | null = null; // true = paint, false = erase

const canvas = document.getElementById('edit-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const nameInput = document.getElementById('map-name') as HTMLInputElement;

function freshMap(): MapDef {
  return {
    id: `custom_${Date.now().toString(36)}`,
    name: 'My Map',
    waypoints: [],
    water: [],
    cloudPaths: [],
    props: [],
  };
}

// ---------------------------------------------------------------- rendering

function draw(): void {
  // the board texture is painted at 2x resolution (P7) — draw it scaled to fit
  if (map.waypoints.length >= 2) {
    const base = paintBoardTexture(new Track(map), map.water ?? []);
    ctx.drawImage(base, 0, 0, BOARD_W, BOARD_H);
  } else {
    // empty grass
    const base = paintBoardTexture(new Track({ ...map, waypoints: [[-2, -2], [-1, -2]] }), map.water ?? []);
    ctx.drawImage(base, 0, 0, BOARD_W, BOARD_H);
  }

  // grid overlay
  ctx.save();
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  for (let x = 0; x <= COLS; x++) {
    ctx.beginPath();
    ctx.moveTo(x * CELL, 0);
    ctx.lineTo(x * CELL, BOARD_H);
    ctx.stroke();
  }
  for (let y = 0; y <= ROWS; y++) {
    ctx.beginPath();
    ctx.moveTo(0, y * CELL);
    ctx.lineTo(BOARD_W, y * CELL);
    ctx.stroke();
  }
  ctx.restore();

  // waypoint handles (off-board points draw clamped to the rim so they stay grabbable)
  ctx.save();
  for (let i = 0; i < map.waypoints.length; i++) {
    const [x, y] = handlePos(i);
    ctx.fillStyle = i === 0 ? '#b14aed' : i === map.waypoints.length - 1 ? '#3a86ff' : '#ffd75e';
    ctx.strokeStyle = 'rgba(0,0,0,0.6)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#14121f';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(i + 1), x, y);
  }
  ctx.restore();

  // cloud paths
  ctx.save();
  ctx.setLineDash([8, 8]);
  for (const path of map.cloudPaths ?? []) {
    ctx.strokeStyle = 'rgba(244,249,255,0.75)';
    ctx.lineWidth = 2;
    if (path.length >= 2) {
      ctx.beginPath();
      ctx.moveTo(path[0][0] * CELL, path[0][1] * CELL);
      for (const [px, py] of path.slice(1)) ctx.lineTo(px * CELL, py * CELL);
      ctx.closePath();
      ctx.stroke();
    }
    for (const [px, py] of path) {
      ctx.fillStyle = '#f4f9ff';
      ctx.beginPath();
      ctx.arc(px * CELL, py * CELL, 6, 0, Math.PI * 2);
      ctx.fill();
    }
    if (path.length > 0) {
      ctx.font = '16px sans-serif';
      ctx.fillText('☁️', path[0][0] * CELL + 12, path[0][1] * CELL - 10);
    }
  }
  ctx.setLineDash([]);
  ctx.restore();

  // props
  ctx.save();
  for (const p of map.props ?? []) {
    const sel = p === selectedProp;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    const s = 14 * p.scale;
    ctx.fillStyle = sel ? '#c9b8ff' : '#7dc98f';
    ctx.strokeStyle = 'rgba(0,0,0,0.55)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.rect(-s, -s, s * 2, s * 2);
    ctx.fill();
    ctx.stroke();
    // heading tick
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(s * 1.4, 0);
    ctx.stroke();
    ctx.restore();
    ctx.fillStyle = '#14121f';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(PROP_MODELS[p.model]?.label ?? p.model, p.x, p.y + 3);
  }
  ctx.restore();

  refreshIssues();
}

// ---------------------------------------------------------------- helpers

function evPos(e: MouseEvent): { x: number; y: number } {
  const r = canvas.getBoundingClientRect();
  return { x: ((e.clientX - r.left) / r.width) * BOARD_W, y: ((e.clientY - r.top) / r.height) * BOARD_H };
}

/** Canvas position of a waypoint's drag handle — off-board points clamp to the
 *  rim so the entrance/exit stay visible and grabbable. */
function handlePos(i: number): [number, number] {
  const [wx, wy] = map.waypoints[i];
  return [
    Math.min(Math.max(wx * CELL, 8), BOARD_W - 8),
    Math.min(Math.max(wy * CELL, 8), BOARD_H - 8),
  ];
}

function nearestWaypoint(x: number, y: number, maxPx = 14): number {
  let best = -1;
  let bestD = maxPx;
  map.waypoints.forEach((_, i) => {
    const [hx, hy] = handlePos(i);
    const d = Math.hypot(hx - x, hy - y);
    if (d < bestD) {
      bestD = d;
      best = i;
    }
  });
  return best;
}

function snapHalf(v: number): number {
  return Math.round(v / CELL - 0.5) + 0.5;
}

/** Half-cell snap for road points; the board rim is MAGNETIC for the first and
 *  last waypoint — dropping an endpoint within a cell of an edge throws it
 *  off-board, which validation requires (enemies must walk IN from off-screen).
 *  Dragging inside the rim never produces a negative coordinate, so without
 *  this the left/top edges could never host an entrance or exit at all. */
function snapRoadPoint(px: number, py: number, isEnd: boolean): [number, number] {
  let x = snapHalf(px);
  let y = snapHalf(py);
  if (isEnd) {
    if (px < CELL) x = -1.5;
    else if (px > BOARD_W - CELL) x = COLS + 1.5;
    if (py < CELL) y = -1.5;
    else if (py > BOARD_H - CELL) y = ROWS + 1.5;
  }
  return [x, y];
}

// ---------------------------------------------------------------- input

canvas.addEventListener('mousedown', (e) => {
  const { x, y } = evPos(e);
  if (e.button === 2) return; // handled in contextmenu

  if (tool === 'road') {
    const hit = nearestWaypoint(x, y);
    if (hit >= 0) {
      dragWaypoint = hit;
    } else {
      // a newly placed point is always the current end of the road
      map.waypoints.push(snapRoadPoint(x, y, true));
    }
  } else if (tool === 'water') {
    const cx = Math.floor(x / CELL);
    const cy = Math.floor(y / CELL);
    const has = (map.water ?? []).some(([a, b]) => a === cx && b === cy);
    paintingWater = !has;
    paintWaterCell(cx, cy);
  } else if (tool === 'cloud') {
    if (!map.cloudPaths || map.cloudPaths.length === 0) map.cloudPaths = [[]];
    map.cloudPaths[map.cloudPaths.length - 1].push([snapHalf(x), snapHalf(y)]);
  } else if (tool === 'prop') {
    const hit = (map.props ?? []).find((p) => Math.hypot(p.x - x, p.y - y) < 18 * p.scale);
    if (hit) {
      selectedProp = hit;
    } else if (propOverlapsRoad(map, x, y, PROP_MODELS[activeProp].blockRadius)) {
      // props block line of sight — they may not sit on the road itself
      flashHelp('⚠ Props cannot overlap the road.');
    } else {
      const prop: PropDef = { model: activeProp, x: Math.round(x), y: Math.round(y), rot: 0, scale: 1 };
      map.props = map.props ?? [];
      map.props.push(prop);
      selectedProp = prop;
    }
  }
  draw();
});

canvas.addEventListener('mousemove', (e) => {
  if (dragWaypoint >= 0) {
    const { x, y } = evPos(e);
    const isEnd = dragWaypoint === 0 || dragWaypoint === map.waypoints.length - 1;
    map.waypoints[dragWaypoint] = snapRoadPoint(x, y, isEnd);
    draw();
  } else if (paintingWater !== null) {
    const { x, y } = evPos(e);
    paintWaterCell(Math.floor(x / CELL), Math.floor(y / CELL));
    draw();
  }
});

window.addEventListener('mouseup', () => {
  dragWaypoint = -1;
  paintingWater = null;
});

canvas.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  const { x, y } = evPos(e);
  if (tool === 'road') {
    const hit = nearestWaypoint(x, y);
    if (hit >= 0) map.waypoints.splice(hit, 1);
  } else if (tool === 'cloud') {
    for (const path of map.cloudPaths ?? []) {
      const i = path.findIndex(([px, py]) => Math.hypot(px * CELL - x, py * CELL - y) < 12);
      if (i >= 0) {
        path.splice(i, 1);
        break;
      }
    }
    map.cloudPaths = (map.cloudPaths ?? []).filter((p) => p.length > 0);
  } else if (tool === 'prop') {
    const i = (map.props ?? []).findIndex((p) => Math.hypot(p.x - x, p.y - y) < 18 * p.scale);
    if (i >= 0) {
      if (map.props![i] === selectedProp) selectedProp = null;
      map.props!.splice(i, 1);
    }
  }
  draw();
});

function paintWaterCell(cx: number, cy: number): void {
  if (cx < 0 || cy < 0 || cx >= COLS || cy >= ROWS) return;
  map.water = map.water ?? [];
  const idx = map.water.findIndex(([a, b]) => a === cx && b === cy);
  if (paintingWater && idx < 0) map.water.push([cx, cy]);
  if (!paintingWater && idx >= 0) map.water.splice(idx, 1);
}

window.addEventListener('keydown', (e) => {
  if (!selectedProp) return;
  if (e.key === 'r' || e.key === 'R') selectedProp.rot += Math.PI / 4;
  else if (e.key === '+' || e.key === '=') selectedProp.scale = Math.min(2.5, selectedProp.scale + 0.15);
  else if (e.key === '-') selectedProp.scale = Math.max(0.4, selectedProp.scale - 0.15);
  else if (e.key === 'Delete' || e.key === 'Backspace') {
    map.props = (map.props ?? []).filter((p) => p !== selectedProp);
    selectedProp = null;
  } else return;
  e.preventDefault();
  draw();
});

// ---------------------------------------------------------------- ui wiring

document.querySelectorAll<HTMLButtonElement>('.btn-tool').forEach((btn) => {
  btn.addEventListener('click', () => {
    tool = btn.dataset.tool as Tool;
    document.querySelectorAll('.btn-tool').forEach((b) => b.classList.toggle('active', b === btn));
    document.getElementById('tool-help')!.textContent = HELP[tool];
    document.getElementById('prop-palette')!.classList.toggle('hidden', tool !== 'prop');
    selectedProp = null;
    draw();
  });
});

const palette = document.getElementById('prop-palette')!;
for (const [key, info] of Object.entries(PROP_MODELS)) {
  const chip = document.createElement('button');
  chip.className = 'prop-chip' + (key === activeProp ? ' active' : '');
  chip.textContent = info.label;
  chip.addEventListener('click', () => {
    activeProp = key;
    palette.querySelectorAll('.prop-chip').forEach((c) => c.classList.toggle('active', c === chip));
  });
  palette.appendChild(chip);
}

nameInput.addEventListener('input', () => {
  map.name = nameInput.value;
  refreshIssues();
});

let flashTimer = 0;
function flashHelp(msg: string): void {
  const el = document.getElementById('tool-help')!;
  el.textContent = msg;
  clearTimeout(flashTimer);
  flashTimer = window.setTimeout(() => {
    el.textContent = HELP[tool];
  }, 1800);
}

function refreshIssues(): void {
  const issues = validateMap(map);
  const el = document.getElementById('issues')!;
  el.innerHTML = issues.length === 0 ? '<span class="ok">✓ Map is valid</span>' : issues.map((i) => `• ${i}`).join('<br>');
}

function refreshMapList(): void {
  const el = document.getElementById('map-list')!;
  el.innerHTML = '';
  for (const m of listMaps()) {
    const row = document.createElement('div');
    row.className = 'map-row';
    row.innerHTML = `<span>${m.name}${m.custom ? '' : ' 🔒'}</span><span></span>`;
    const btns = row.lastElementChild as HTMLElement;
    const load = document.createElement('button');
    load.textContent = 'load';
    load.addEventListener('click', () => {
      const loaded = loadMap(m.id);
      if (!loaded) return;
      map = JSON.parse(JSON.stringify(loaded)) as MapDef;
      if (!m.custom) {
        map.id = `custom_${Date.now().toString(36)}`;
        map.name = `${map.name} Copy`;
      }
      nameInput.value = map.name;
      selectedProp = null;
      draw();
    });
    btns.appendChild(load);
    if (m.custom) {
      const del = document.createElement('button');
      del.className = 'del';
      del.textContent = 'delete';
      del.addEventListener('click', () => {
        deleteCustomMap(m.id);
        refreshMapList();
      });
      btns.appendChild(del);
    }
    el.appendChild(row);
  }
}

document.getElementById('btn-save')!.addEventListener('click', () => {
  map.name = nameInput.value || 'My Map';
  saveCustomMap(map);
  refreshMapList();
  refreshIssues();
});

document.getElementById('btn-play')!.addEventListener('click', () => {
  map.name = nameInput.value || 'My Map';
  const issues = validateMap(map);
  if (issues.length > 0) {
    refreshIssues();
    return;
  }
  saveCustomMap(map);
  location.href = `./index.html?map=${encodeURIComponent(map.id)}`;
});

document.getElementById('btn-export')!.addEventListener('click', () => {
  const blob = new Blob([exportMapJson(map)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${map.name.replace(/\s+/g, '_') || 'map'}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
});

const importFile = document.getElementById('import-file') as HTMLInputElement;
document.getElementById('btn-import')!.addEventListener('click', () => importFile.click());
importFile.addEventListener('change', async () => {
  const file = importFile.files?.[0];
  if (!file) return;
  try {
    map = importMapJson(await file.text());
    nameInput.value = map.name;
    saveCustomMap(map);
    refreshMapList();
    draw();
  } catch (err) {
    document.getElementById('issues')!.textContent = String(err);
  }
  importFile.value = '';
});

document.getElementById('btn-clear')!.addEventListener('click', () => {
  map = freshMap();
  nameInput.value = map.name;
  selectedProp = null;
  draw();
});

// ---------------------------------------------------------------- boot

nameInput.value = map.name;
refreshMapList();
draw();
