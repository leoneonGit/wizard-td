import type { GameState } from './state';
import type { Enemy, Wizard } from './types';

export function enemiesInRange(state: GameState, x: number, y: number, range: number): Enemy[] {
  const out: Enemy[] = [];
  for (const e of state.enemies) {
    if (e.hp <= 0) continue;
    const dx = e.x - x;
    const dy = e.y - y;
    const r = range + e.def.radius;
    if (dx * dx + dy * dy <= r * r) out.push(e);
  }
  return out;
}

/** Line of sight: false if the segment (x1,y1)->(x2,y2) crosses any prop blocker circle. */
export function hasLOS(state: GameState, x1: number, y1: number, x2: number, y2: number): boolean {
  for (const b of state.blockers) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len2 = dx * dx + dy * dy;
    // closest point on segment to circle center
    const t = len2 === 0 ? 0 : Math.max(0, Math.min(1, ((b.x - x1) * dx + (b.y - y1) * dy) / len2));
    const px = x1 + t * dx;
    const py = y1 + t * dy;
    const d2 = (b.x - px) ** 2 + (b.y - py) ** 2;
    if (d2 < b.r * b.r) return false;
  }
  return true;
}

export function pickTarget(state: GameState, w: Wizard): Enemy | undefined {
  const candidates = enemiesInRange(state, w.x, w.y, w.stats.range).filter((e) =>
    hasLOS(state, w.x, w.y, e.x, e.y),
  );
  if (candidates.length === 0) return undefined;

  switch (w.mode) {
    case 'first':
      return candidates.reduce((a, b) => (b.dist > a.dist ? b : a));
    case 'last':
      return candidates.reduce((a, b) => (b.dist < a.dist ? b : a));
    case 'strong':
      return candidates.reduce((a, b) => (b.hp > a.hp ? b : a));
    case 'close': {
      const d2 = (e: Enemy) => (e.x - w.x) ** 2 + (e.y - w.y) ** 2;
      return candidates.reduce((a, b) => (d2(b) < d2(a) ? b : a));
    }
  }
}
