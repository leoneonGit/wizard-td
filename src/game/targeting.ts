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

export function pickTarget(state: GameState, w: Wizard): Enemy | undefined {
  const candidates = enemiesInRange(state, w.x, w.y, w.stats.range);
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
