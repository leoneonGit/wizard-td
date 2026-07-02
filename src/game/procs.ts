import { fx } from '../render/effects';
import { cardAppliesTo, type GameState } from './state';
import type { Enemy, ProcFx, Wizard } from './types';

/** All triggered-ability sources covering this tower: matching drafted cards
 *  plus the tower's own innate ability (evolved forms). */
function fxSourcesFor(state: GameState, w: Wizard): ProcFx[] {
  const list = state.draftMods.filter((c) => c.fx && cardAppliesTo(c, w.def)).map((c) => c.fx!);
  if (w.def.innateFx) list.push(w.def.innateFx);
  return list;
}

/** Is a frenzy window currently open? (for `duration`s out of every `period`s) */
export function frenzyActive(state: GameState, f: { period: number; duration: number }): boolean {
  return state.clock % f.period < f.duration;
}

/**
 * Called exactly once per attack (or aura pulse). Advances the tower's lifetime
 * attack counter and returns the damage multiplier for THIS shot:
 * every-Nth-attack crits × the permanent Soul Harvest ramp.
 */
export function attackProcMult(state: GameState, w: Wizard): number {
  w.attackCount++;
  let mult = 1 + state.killStackPct / 100;
  for (const f of fxSourcesFor(state, w)) {
    const crit = f.critEveryN;
    if (crit && w.attackCount % crit.n === 0) {
      mult *= crit.mult;
      fx.floater(w.x, w.y - 28, 'CRIT!', '#ffd75e', 13);
      fx.burst(w.x, w.y - 10, '#ffd75e', 6, 90, 2.5, 0.3);
    }
  }
  return mult;
}

/** Effective cooldown multiplier — open frenzy windows make matching towers fire faster. */
export function frenzyRateMul(state: GameState, w: Wizard): number {
  let mul = 1;
  for (const f of fxSourcesFor(state, w)) {
    if (f.frenzy && frenzyActive(state, f.frenzy)) mul *= f.frenzy.rateMul;
  }
  return mul;
}

/** Conditional hunter bonuses (vs status / vs near-full HP), scoped by the source tower. */
export function conditionalDamageMult(state: GameState, src: Wizard | undefined, e: Enemy): number {
  if (!src) return 1; // burn ticks etc. have no source tower — no conditional bonuses
  let mult = 1;
  for (const f of fxSourcesFor(state, src)) {
    const vs = f.bonusVsStatus;
    if (vs && e.statuses[vs.status]) mult *= vs.mult;
    const bh = f.bonusVsHealthy;
    if (bh && e.hp >= e.maxHp * bh.threshold) mult *= bh.mult;
  }
  return mult;
}
