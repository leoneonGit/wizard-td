import { ENEMIES } from '../data/enemies';
import {
  wavesForAct, ROUND_BONUS_BASE, ROUND_BONUS_PER_ROUND, ELITE_MODIFIERS,
  ACT_SCALING, WAVE_HP_RAMP, TOTAL_ACTS,
} from '../data/waves';
import { fx } from '../render/effects';
import { sfx } from '../audio/sfx';
import { drawDraft, drawRelics, isCampaign, relicSpecial, type GameState } from './state';
import type { StatusId, WaveModifier } from './types';
import { saveRun } from './save';

const AUTOPLAY_DELAY = 1.6;

/** Treasure nodes guard their prize — a modest toughness bump. */
const GUARDED: WaveModifier = {
  id: 'guarded', name: 'Guarded', desc: '+25% HP — a relic awaits', hpMult: 1.25,
};

export function startWave(state: GameState): boolean {
  const waves = wavesForAct(state.act);
  if (state.phase !== 'build' || state.round >= waves.length) return false;
  if (!state.nodePicked && state.nextNodes.length > 1) return false; // path choice owed first
  saveRun(state); // checkpoint: restoring replays this wave with the current build
  const wave = waves[state.round];

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
    state.waveModifier = rollElite(state);
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

/** Elite modifier roll — act 3 elites stack TWO modifiers at once. */
function rollElite(state: GameState): WaveModifier {
  const pick = () => ELITE_MODIFIERS[Math.floor(state.rng() * ELITE_MODIFIERS.length)];
  const a = pick();
  if (state.act < 2) return a;
  let b = pick();
  for (let i = 0; i < 5 && b.id === a.id; i++) b = pick();
  if (b.id === a.id) return a;
  return {
    id: `${a.id}+${b.id}`,
    name: `${a.name} ${b.name}`,
    desc: `${a.desc} & ${b.desc}`,
    speedMult: (a.speedMult ?? 1) * (b.speedMult ?? 1),
    hpMult: (a.hpMult ?? 1) * (b.hpMult ?? 1),
    immune: [...(a.immune ?? []), ...(b.immune ?? [])],
    gustImmune: a.gustImmune || b.gustImmune,
  };
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
    if (state.round >= wavesForAct(state.act).length) {
      if (isCampaign(state) && state.act < TOTAL_ACTS - 1) {
        // act boss down — the road goes on (ui/actclear.ts handles the crossing)
        state.phase = 'actClear';
        sfx.actFanfare();
      } else {
        state.phase = 'won';
        sfx.win();
      }
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
  // campaign difficulty spine: per-act multipliers + a within-act ramp (bosses exempt
  // from the ramp — their numbers are hand-tuned walls already)
  const scale = ACT_SCALING[Math.min(state.act, ACT_SCALING.length - 1)];
  const ramp = def.boss ? 1 : 1 + state.round * WAVE_HP_RAMP;
  const hp = def.hp * (mod?.hpMult ?? 1) * scale.hp * ramp;
  // relic hooks: Cursed Hourglass hastens everything; Frozen Core pre-chills
  const haste = relicSpecial(state, 'hasteEnemies') ? 1.1 : 1;
  const immunities: StatusId[] = [...(def.innateImmune ?? []), ...(mod?.immune ?? [])];
  state.enemies.push({
    id: state.nextId++,
    def,
    hp,
    maxHp: hp,
    dist: 0,
    x: p.x,
    y: p.y,
    statuses: relicSpecial(state, 'spawnChill') && !immunities.includes('chill')
      ? { chill: { t: 2.5, pct: 0.15, stacks: 1 } }
      : {},
    wobble: Math.random() * Math.PI * 2,
    animT: Math.random() * 2, // desync walk cycles between units
    angle: p.angle,
    hitFlash: 0,
    speedMult: (mod?.speedMult ?? 1) * haste * scale.speed,
    immunities: immunities.length > 0 ? immunities : undefined,
    gustImmune: mod?.gustImmune,
    armorHp: def.armor, // boss shell — physical damage only until it breaks
  });
  if (def.boss) {
    fx.floater(p.x + 30, p.y - 20, `${def.name}!`, '#ff9db5', 14);
    if (def.armor || def.hp >= 1500) sfx.bossRoar();
  }
}
