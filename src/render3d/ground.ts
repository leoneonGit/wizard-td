import { BOARD_W, BOARD_H, CELL, COLS, ROWS } from '../engine/grid';
import type { Track } from '../game/path';
import type { MapTheme } from '../game/types';

/** Fallback palette — the original Emerald Vale look. */
export const DEFAULT_THEME: MapTheme = {
  grassA: '#2c4030', grassB: '#26392b',
  road: '#7d6647', roadEdge: '#4a3b2a',
  water: '#1d4e79', shore: '#c9b98a',
  scatter: 'flowers',
  fog: '#bcd7c2',
  hemiSky: '#cfe8ff', hemiGround: '#3a4a30',
  sun: '#fff4d6', sunIntensity: 2.4, exposure: 1.25,
};

const RES = 2; // supersample the paint 2x — crisper road edges and detail up close

/** Deterministic-ish value noise for grass blotching (no lib, just layered sines). */
function blotch(x: number, y: number): number {
  return (
    Math.sin(x * 0.011 + y * 0.017) * 0.5 +
    Math.sin(x * 0.031 - y * 0.023 + 1.7) * 0.3 +
    Math.sin(x * 0.071 + y * 0.067 + 4.2) * 0.2
  );
}

function shade(hex: string, amt: number): string {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + amt));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 0xff) + amt));
  const b = Math.max(0, Math.min(255, (n & 0xff) + amt));
  return `rgb(${r},${g},${b})`;
}

/** Paint the board (grass + dirt track + water beds) for use as the ground texture. */
export function paintBoardTexture(
  track: Track,
  water: [number, number][] = [],
  theme: MapTheme = DEFAULT_THEME,
): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = BOARD_W * RES;
  canvas.height = BOARD_H * RES;
  const g = canvas.getContext('2d')!;
  g.scale(RES, RES);

  // base checker, softened by organic blotches so it reads as terrain, not tiles
  for (let cy = 0; cy < ROWS; cy++) {
    for (let cx = 0; cx < COLS; cx++) {
      const even = (cx + cy) % 2 === 0;
      g.fillStyle = even ? theme.grassA : theme.grassB;
      g.fillRect(cx * CELL, cy * CELL, CELL, CELL);
    }
  }
  for (let i = 0; i < 260; i++) {
    const x = Math.random() * BOARD_W;
    const y = Math.random() * BOARD_H;
    const b = blotch(x, y);
    g.fillStyle = b > 0 ? 'rgba(255,255,230,0.045)' : 'rgba(0,0,0,0.08)';
    g.beginPath();
    g.ellipse(x, y, 14 + Math.random() * 26, 9 + Math.random() * 18, Math.random() * Math.PI, 0, Math.PI * 2);
    g.fill();
  }
  // fine grain: pebbles + tufts
  for (let i = 0; i < 420; i++) {
    const x = Math.random() * BOARD_W;
    const y = Math.random() * BOARD_H;
    g.fillStyle = Math.random() < 0.5 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.09)';
    g.beginPath();
    g.arc(x, y, 0.8 + Math.random() * 2, 0, Math.PI * 2);
    g.fill();
  }
  // theme scatter: tiny flowers / marsh reeds / ember cracks
  for (let i = 0; i < 90; i++) {
    const x = Math.random() * BOARD_W;
    const y = Math.random() * BOARD_H;
    if (theme.scatter === 'flowers') {
      g.fillStyle = ['#d8c6ff', '#ffe08a', '#ffb6c9'][i % 3];
      g.globalAlpha = 0.5;
      g.beginPath();
      g.arc(x, y, 1.4, 0, Math.PI * 2);
      g.fill();
      g.globalAlpha = 1;
    } else if (theme.scatter === 'reeds') {
      g.strokeStyle = 'rgba(122,140,96,0.5)';
      g.lineWidth = 1;
      g.beginPath();
      g.moveTo(x, y);
      g.quadraticCurveTo(x + 2, y - 5, x + (Math.random() * 4 - 2), y - 9);
      g.stroke();
    } else {
      // ash: faint ember cracks
      g.strokeStyle = i % 4 === 0 ? 'rgba(255,120,60,0.35)' : 'rgba(0,0,0,0.25)';
      g.lineWidth = 1.1;
      g.beginPath();
      g.moveTo(x, y);
      g.lineTo(x + (Math.random() * 14 - 7), y + (Math.random() * 10 - 5));
      g.stroke();
    }
  }

  const pts = track.points;
  g.lineJoin = 'round';
  g.lineCap = 'round';
  const stroke = (width: number, color: string) => {
    g.strokeStyle = color;
    g.lineWidth = width;
    g.beginPath();
    g.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) g.lineTo(pts[i].x, pts[i].y);
    g.stroke();
  };
  // trampled halo -> hard edge -> body -> worn center
  stroke(46, 'rgba(0,0,0,0.14)');
  stroke(38, theme.roadEdge);
  stroke(32, shade(theme.road, -18));
  stroke(26, theme.road);
  stroke(14, shade(theme.road, 12));
  // wheel-rut highlights
  g.setLineDash([10, 14]);
  stroke(2, 'rgba(255,240,200,0.25)');
  g.setLineDash([]);
  // scattered road stones
  for (let i = 0; i < pts.length - 1; i += 1) {
    const a = pts[i];
    const b = pts[i + 1];
    const segLen = Math.hypot(b.x - a.x, b.y - a.y);
    const n = Math.floor(segLen / 26);
    for (let k = 0; k < n; k++) {
      const t = Math.random();
      const x = a.x + (b.x - a.x) * t + (Math.random() * 20 - 10);
      const y = a.y + (b.y - a.y) * t + (Math.random() * 20 - 10);
      g.fillStyle = Math.random() < 0.5 ? 'rgba(0,0,0,0.18)' : 'rgba(255,255,255,0.09)';
      g.beginPath();
      g.arc(x, y, 1 + Math.random() * 1.8, 0, Math.PI * 2);
      g.fill();
    }
  }

  // water beds: shore ring -> depth gradient -> foam dashes at the rim
  for (const [cx, cy] of water) {
    g.fillStyle = theme.shore;
    g.fillRect(cx * CELL - 4, cy * CELL - 4, CELL + 8, CELL + 8);
  }
  for (const [cx, cy] of water) {
    const grad = g.createRadialGradient(
      cx * CELL + CELL / 2, cy * CELL + CELL / 2, 4,
      cx * CELL + CELL / 2, cy * CELL + CELL / 2, CELL * 0.75,
    );
    grad.addColorStop(0, shade(theme.water, -22));
    grad.addColorStop(1, theme.water);
    g.fillStyle = grad;
    g.fillRect(cx * CELL, cy * CELL, CELL, CELL);
  }
  g.strokeStyle = 'rgba(255,255,255,0.22)';
  g.lineWidth = 1.2;
  g.setLineDash([4, 7]);
  for (const [cx, cy] of water) {
    g.strokeRect(cx * CELL + 2.5, cy * CELL + 2.5, CELL - 5, CELL - 5);
  }
  g.setLineDash([]);

  return canvas;
}
