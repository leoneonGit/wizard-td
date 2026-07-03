/** Event choice resolution — each EventChoice.effect id lands here. */
import { ELITE_MODIFIERS } from '../data/waves';
import { fx } from '../render/effects';
import { sfx } from '../audio/sfx';
import {
  applyRelic, drawDraft, drawRelics, type GameState,
} from './state';
import type { WaveModifier } from './types';

const BLESSING: WaveModifier = {
  id: 'blessed',
  name: 'Storm-Blessed',
  desc: '20% slower, +30% HP, 2x bounty',
  speedMult: 0.8,
  hpMult: 1.3,
  bountyMult: 2,
};

export function resolveEventChoice(state: GameState, effect: string): void {
  switch (effect) {
    case 'chest_open': {
      const relic = drawRelics(state, 1)[0];
      if (relic) {
        applyRelic(state, relic);
        fx.floater(480, 180, `${relic.icon} ${relic.name}!`, '#ffd75e', 15);
      }
      state.forcedModifier = ELITE_MODIFIERS[Math.floor(state.rng() * ELITE_MODIFIERS.length)];
      fx.floater(480, 210, `⚠ Something stirs... next wave is ELITE`, '#ff9db5', 13);
      sfx.upgrade();
      break;
    }
    case 'blood_pact': {
      state.lives = Math.max(1, state.lives - 3);
      state.pendingDraft = drawDraft(state, 3, true);
      state.eliteDraft = true;
      state.phase = 'draft';
      sfx.leak();
      break;
    }
    case 'merchant_buy': {
      if (state.gold < 130) {
        fx.floater(480, 180, 'Not enough gold — he scoffs and rolls on.', '#9a92b5', 12);
        break;
      }
      state.gold -= 130;
      const relic = drawRelics(state, 1)[0];
      if (relic) {
        applyRelic(state, relic);
        fx.floater(480, 180, `${relic.icon} ${relic.name}!`, '#ffd75e', 15);
      }
      sfx.coin();
      break;
    }
    case 'training': {
      if (state.gold < 60) {
        fx.floater(480, 180, 'Not enough gold for the drillmaster.', '#9a92b5', 12);
        break;
      }
      const candidates = state.wizards.filter(
        (w) =>
          !w.pendingSpecialize &&
          (w.tiers[0] < w.def.upgrades[0].tiers.length || w.tiers[1] < w.def.upgrades[1].tiers.length),
      );
      if (candidates.length === 0) {
        fx.floater(480, 180, 'No tower can be trained further.', '#9a92b5', 12);
        break;
      }
      state.gold -= 60;
      const w = candidates[Math.floor(state.rng() * candidates.length)];
      const path = w.tiers[0] < w.def.upgrades[0].tiers.length ? 0 : 1;
      const tier = w.def.upgrades[path].tiers[w.tiers[path]];
      w.tiers[path]++;
      w.stats = recompute(state, w);
      fx.burst(w.x, w.y, '#c9b8ff', 12, 110, 3);
      fx.floater(w.x, w.y - 24, `${tier.name} — free!`, '#c9b8ff', 12);
      sfx.upgrade();
      break;
    }
    case 'gamble': {
      if (state.rng() < 0.5) {
        state.gold *= 2;
        fx.floater(480, 180, `🪙 DOUBLE! ${state.gold} gold`, '#ffd75e', 16);
        sfx.coin();
      } else {
        state.gold = Math.floor(state.gold / 2);
        fx.floater(480, 180, `🪙 The imp cackles. ${state.gold} gold left`, '#ff9db5', 14);
        sfx.leak();
      }
      break;
    }
    case 'blessing': {
      state.forcedModifier = BLESSING;
      fx.floater(480, 180, '⛈️ The next wave is Storm-Blessed', '#7fd8ff', 14);
      sfx.waterPulse();
      break;
    }
    case 'skip':
    default:
      break;
  }
  state.pendingEvent = null;
  // an event consumes the round's path choice — the wave itself runs as normal
  state.nodeChoice = 'normal';
  state.nodePicked = true;
  state.nextNodes = state.nextNodes.filter((n) => n !== 'event');
}

// small local recompute to avoid importing computeStats circularly at module top
import { computeStats } from './state';
import type { Wizard } from './types';
function recompute(state: GameState, w: Wizard) {
  return computeStats(w.def, w.tiers, state.draftMods);
}
