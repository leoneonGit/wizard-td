import { ENEMIES } from '../data/enemies';
import {
  WAVES, ROUND_BONUS_BASE, ROUND_BONUS_PER_ROUND, ELITE_MODIFIERS,
} from '../data/waves';
import { fx } from '../render/effects';
import { sfx } from '../audio/sfx';
import { drawDraft, drawRelics, relicSpecial, type GameState } from './state';
import type { WaveModifier } from './types';
import { saveRun } from './save';

const AUTOPLAY_DELAY = 1.6;

/** Treasure nodes guard their prize — a modest toughness bump. */
const GUARDED: WaveModifier = {
  id: 'guarded', name: 'Guarded', desc: '+25% HP — a relic awaits', hpMult: 1.25,
};

export function startWave(state: GameState): boolean {
  if (state.phase !== 'build' || state.round >= WAVES.length) return false;
  saveRun(state); // checkpoint: restoring replays this wave with the current build
  const wave = WAVES[state.round];

  // wave flavor comes from the chosen node (or an event's forced modifier)
  state.waveKind = state.nodeChoice;
  state.waveModifier = null;
  if (state.forcedModifier) {
    state.waveModifier = state.forcedModifier;
    state.forcedModifier = null;
    if (state.waveModifier !== GUARDED && state.waveModifier.id !== 'blessed') {
      state.waveKind = 'elite'; // cursed chest: forced elite pays elite rewards
    }
    fx.floater(480, 80, `★ ${state.waveModifier.name} — ${state.waveModifier.desc}`, '#ffd75e', 15);
  } else if (state.nodeChoice === 'elite') {
    state.waveModifier = ELITE_MODIFIERS[Math.floor(state.rng() * ELITE_MODIFIERS.length)];
    state.lastEliteRound = state.round;
    fx.floater(480, 80, `★ ELITE: ${state.waveModifier.name} — ${state.waveModifier.desc}`, '#ffd75e', 15);
  } else if (state.nodeChoice === 'treasure') {
    state.waveModifier = GUARDED;
    fx.floater(480, 80, `💎 GUARDED: clear the wave to claim a relic`, '#7fd8ff', 15);
  }
  state.pendingSpawns = [];
  for (const g of wave) {
    for (let i = 0; i < g.count; i++) {
      state.pendingSpawns.push({ t: g.delay + i * g.gap, type: g.type });
    }
  }
  state.pendingSpawns.sort((a, b) => a.t - b.t);
  state.waveTime = 0;
  state.phase = 'wave';
  sfx.waveStart();
  return true;
}

export function updateWave(state: GameState, dt: number): void {
  if (state.phase !== 'wave') {
    // autoplay countdown between rounds
    if (state.phase === 'build' && state.autoplay && state.autoplayTimer > 0) {
      state.autoplayTimer -= dt;
      if (state.autoplayTimer <= 0) startWave(state);
    }
    return;
  }

  state.waveTime += dt;
  while (state.pendingSpawns.length > 0 && state.pendingSpawns[0].t <= state.waveTime) {
    const s = state.pendingSpawns.shift()!;
    spawnEnemy(state, s.type);
  }

  // wave cleared?
  if (state.pendingSpawns.length === 0 && state.enemies.length === 0) {
    const wasElite = state.waveKind === 'elite';
    const wasTreasure = state.waveKind === 'treasure';
    state.waveModifier = null;
    state.waveKind = 'normal';
    state.round++;
    state.stats.wavesCleared++;
    if (state.round >= WAVES.length) {
      state.phase = 'won';
      sfx.win();
    } else {
      const bonus = ROUND_BONUS_BASE + ROUND_BONUS_PER_ROUND * state.round;
      state.gold += bonus;
      // economy-engine cards: interest on gold held at wave end
      for (const c of state.draftMods) {
        const it = c.fx?.interest;
        if (!it) continue;
        const gain = Math.min(it.cap, Math.floor(state.gold / it.per));
        if (gain > 0) {
          state.gold += gain;
          fx.floater(480, 110, `+${gain} interest 🏦`, '#ffd75e', 13);
        }
      }
      if (wasTreasure) {
        // treasure clear: the reward IS the relic — pick 1 of 2
        state.pendingRelicDraft = drawRelics(state, 2);
        state.phase = 'relic';
      } else {
        // Slay-the-Spire moment: reveal 3 cards (elite clears draw rare-only;
        // Cursed Hourglass relic widens every draft to 4)
        const count = relicSpecial(state, 'draft4') ? 4 : 3;
        state.pendingDraft = drawDraft(state, count, wasElite);
        state.eliteDraft = wasElite;
        state.phase = 'draft';
      }
      // autoplay arms only after the player picks (see ui/draft.ts + ui/relics.ts)
    }
  }
}

function spawnEnemy(state: GameState, type: string): void {
  const def = ENEMIES[type];
  const p = state.track.posAt(0);
  const mod = state.waveModifier;
  const hp = def.hp * (mod?.hpMult ?? 1);
  // relic hooks: Cursed Hourglass hastens everything; Frozen Core pre-chills
  const haste = relicSpecial(state, 'hasteEnemies') ? 1.1 : 1;
  state.enemies.push({
    id: state.nextId++,
    def,
    hp,
    maxHp: hp,
    dist: 0,
    x: p.x,
    y: p.y,
    statuses: relicSpecial(state, 'spawnChill') && !mod?.immune?.includes('chill')
      ? { chill: { t: 2.5, pct: 0.15, stacks: 1 } }
      : {},
    wobble: Math.random() * Math.PI * 2,
    animT: Math.random() * 2, // desync walk cycles between units
    angle: p.angle,
    hitFlash: 0,
    speedMult: (mod?.speedMult ?? 1) * haste,
    immunities: mod?.immune,
    gustImmune: mod?.gustImmune,
  });
  if (def.boss) fx.floater(p.x + 30, p.y - 20, `${def.name}!`, '#ff9db5', 14);
}
