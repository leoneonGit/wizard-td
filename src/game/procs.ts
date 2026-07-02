import { fx } from '../render/effects';
import { cardAppliesTo, type GameState } from './state';
import type { CardDef, Enemy, Wizard } from './types';

/** Drafted cards with a triggered ability whose scope covers this tower. */
function fxCardsFor(state: GameState, w: Wizard): CardDef[] {
  return state.draftMods.filter((c) => c.fx && cardAppliesTo(c, w.def));
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
  for (const c of fxCardsFor(state, w)) {
    const crit = c.fx!.critEveryN;
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
  for (const c of fxCardsFor(state, w)) {
    const f = c.fx!.frenzy;
    if (f && frenzyActive(state, f)) mul *= f.rateMul;
  }
  return mul;
}

/** Conditional hunter bonuses (vs status / vs near-full HP), scoped by the source tower. */
export function conditionalDamageMult(state: GameState, src: Wizard | undefined, e: Enemy): number {
  if (!src) return 1; // burn ticks etc. have no source tower — no conditional bonuses
  let mult = 1;
  for (const c of fxCardsFor(state, src)) {
    const vs = c.fx!.bonusVsStatus;
    if (vs && e.statuses[vs.status]) mult *= vs.mult;
    const bh = c.fx!.bonusVsHealthy;
    if (bh && e.hp >= e.maxHp * bh.threshold) mult *= bh.mult;
  }
  return mult;
}
