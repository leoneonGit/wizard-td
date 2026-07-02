import { ENEMIES } from '../data/enemies';
import {
  WAVES, ROUND_BONUS_BASE, ROUND_BONUS_PER_ROUND,
  ELITE_MODIFIERS, ELITE_CHANCE, ELITE_MIN_ROUND,
} from '../data/waves';
import { fx } from '../render/effects';
import { sfx } from '../audio/sfx';
import { drawDraft, type GameState } from './state';
import { saveRun } from './save';

const AUTOPLAY_DELAY = 1.6;

export function startWave(state: GameState): boolean {
  if (state.phase !== 'build' || state.round >= WAVES.length) return false;
  saveRun(state); // checkpoint: restoring replays this wave with the current build
  const wave = WAVES[state.round];

  // elite roll (seeded; never two elites back to back)
  state.waveModifier = null;
  if (state.round >= ELITE_MIN_ROUND && state.round > state.lastEliteRound + 1) {
    if (state.rng() < ELITE_CHANCE) {
      state.waveModifier = ELITE_MODIFIERS[Math.floor(state.rng() * ELITE_MODIFIERS.length)];
      state.lastEliteRound = state.round;
      fx.floater(480, 80, `★ ELITE: ${state.waveModifier.name} — ${state.waveModifier.desc}`, '#ffd75e', 15);
    }
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
    const wasElite = state.waveModifier !== null;
    state.waveModifier = null;
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
      // Slay-the-Spire moment: reveal 3 cards (elite clears draw rare-only)
      state.pendingDraft = drawDraft(state, 3, wasElite);
      state.eliteDraft = wasElite;
      state.phase = 'draft';
      // autoplay arms only after the player picks (see ui/draft.ts)
    }
  }
}

function spawnEnemy(state: GameState, type: string): void {
  const def = ENEMIES[type];
  const p = state.track.posAt(0);
  const mod = state.waveModifier;
  const hp = def.hp * (mod?.hpMult ?? 1);
  state.enemies.push({
    id: state.nextId++,
    def,
    hp,
    maxHp: hp,
    dist: 0,
    x: p.x,
    y: p.y,
    statuses: {},
    wobble: Math.random() * Math.PI * 2,
    animT: Math.random() * 2, // desync walk cycles between units
    angle: p.angle,
    hitFlash: 0,
    speedMult: mod?.speedMult,
    immunities: mod?.immune,
    gustImmune: mod?.gustImmune,
  });
  if (def.boss) fx.floater(p.x + 30, p.y - 20, `${def.name}!`, '#ff9db5', 14);
}
