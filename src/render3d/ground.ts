import { BOARD_W, BOARD_H, CELL, COLS, ROWS } from '../engine/grid';
import type { Track } from '../game/path';

/** Paint the board (grass checker + dirt track + water beds) for use as the ground texture. */
export function paintBoardTexture(track: Track, water: [number, number][] = []): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = BOARD_W;
  canvas.height = BOARD_H;
  const g = canvas.getContext('2d')!;

  for (let cy = 0; cy < ROWS; cy++) {
    for (let cx = 0; cx < COLS; cx++) {
      const even = (cx + cy) % 2 === 0;
      g.fillStyle = even ? '#2c4030' : '#26392b';
      g.fillRect(cx * CELL, cy * CELL, CELL, CELL);
    }
  }
  // scattered pebbles/grass tufts
  for (let i = 0; i < 300; i++) {
    const x = Math.random() * BOARD_W;
    const y = Math.random() * BOARD_H;
    g.fillStyle = Math.random() < 0.5 ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.07)';
    g.beginPath();
    g.arc(x, y, 1 + Math.random() * 2.2, 0, Math.PI * 2);
    g.fill();
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
  stroke(38, '#4a3b2a');
  stroke(32, '#6e583c');
  stroke(26, '#7d6647');
  g.setLineDash([10, 14]);
  stroke(2, 'rgba(255,240,200,0.28)');
  g.setLineDash([]);

  // water beds: sandy shore ring + deep blue base (animated surface plane sits above in 3D)
  for (const [cx, cy] of water) {
    g.fillStyle = '#c9b98a';
    g.fillRect(cx * CELL - 4, cy * CELL - 4, CELL + 8, CELL + 8);
  }
  for (const [cx, cy] of water) {
    g.fillStyle = '#1d4e79';
    g.fillRect(cx * CELL, cy * CELL, CELL, CELL);
  }

  return canvas;
}
