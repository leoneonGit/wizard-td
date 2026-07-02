import type { Track } from '../game/path';

export const COLS = 24;
export const ROWS = 16;
export const CELL = 40;
export const BOARD_W = COLS * CELL;
export const BOARD_H = ROWS * CELL;

export function cellCenter(cx: number, cy: number): { x: number; y: number } {
  return { x: cx * CELL + CELL / 2, y: cy * CELL + CELL / 2 };
}

export function pixelToCell(px: number, py: number): { cx: number; cy: number } {
  return { cx: Math.floor(px / CELL), cy: Math.floor(py / CELL) };
}

export function inBounds(cx: number, cy: number): boolean {
  return cx >= 0 && cy >= 0 && cx < COLS && cy < ROWS;
}

export function cellKey(cx: number, cy: number): number {
  return cy * COLS + cx;
}

/** Cells covered by the track ribbon (unbuildable). Samples the polyline densely. */
export function computeBlockedCells(track: Track): Set<number> {
  const blocked = new Set<number>();
  const step = 4;
  const halfWidth = CELL * 0.55; // ribbon half-width used for blocking
  for (let d = 0; d <= track.total; d += step) {
    const p = track.posAt(d);
    // mark any cell whose center is within halfWidth of this sample
    const minCx = Math.floor((p.x - halfWidth) / CELL);
    const maxCx = Math.floor((p.x + halfWidth) / CELL);
    const minCy = Math.floor((p.y - halfWidth) / CELL);
    const maxCy = Math.floor((p.y + halfWidth) / CELL);
    for (let cy = minCy; cy <= maxCy; cy++) {
      for (let cx = minCx; cx <= maxCx; cx++) {
        if (!inBounds(cx, cy)) continue;
        const c = cellCenter(cx, cy);
        const dx = c.x - p.x;
        const dy = c.y - p.y;
        if (dx * dx + dy * dy <= halfWidth * halfWidth) blocked.add(cellKey(cx, cy));
      }
    }
  }
  return blocked;
}
