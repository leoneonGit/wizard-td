import { SELL_REFUND, type GameState } from './state';
import type { Wizard } from './types';

export function canAfford(state: GameState, cost: number): boolean {
  return state.gold >= cost;
}

/** Tower placement cost after drafted discounts (+ the Founder's first-tower perk). */
export function towerCost(state: GameState, baseCost: number): number {
  const founder = state.perks.founderDiscount && !state.firstTowerBought ? 0.75 : 1;
  return Math.round(baseCost * (1 - state.towerDiscountPct / 100) * founder);
}

export function spend(state: GameState, cost: number): boolean {
  if (!canAfford(state, cost)) return false;
  state.gold -= cost;
  return true;
}

export function sellValue(w: Wizard): number {
  return Math.floor(w.invested * SELL_REFUND);
}

export function sellWizard(state: GameState, w: Wizard): void {
  state.gold += sellValue(w);
  state.wizards = state.wizards.filter((x) => x.id !== w.id);
  if (state.selectedWizardId === w.id) state.selectedWizardId = null;
}
