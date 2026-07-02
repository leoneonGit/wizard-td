import { ENEMIES } from '../data/enemies';
import { WAVES, ROUND_BONUS_BASE, ROUND_BONUS_PER_ROUND } from '../data/waves';
import { fx } from '../render/effects';
import { sfx } from '../audio/sfx';
import type { GameState } from './state';

const AUTOPLAY_DELAY = 1.6;

export function startWave(state: GameState): boolean {
  if (state.phase !== 'build' || state.round >= WAVES.length) return false;
  const wave = WAVES[state.round];
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
    state.round++;
    if (state.round >= WAVES.length) {
      state.phase = 'won';
      sfx.win();
    } else {
      state.phase = 'build';
      const bonus = ROUND_BONUS_BASE + ROUND_BONUS_PER_ROUND * state.round;
      state.gold += bonus;
      if (state.autoplay) state.autoplayTimer = AUTOPLAY_DELAY;
    }
  }
}

function spawnEnemy(state: GameState, type: string): void {
  const def = ENEMIES[type];
  const p = state.track.posAt(0);
  state.enemies.push({
    id: state.nextId++,
    def,
    hp: def.hp,
    maxHp: def.hp,
    dist: 0,
    x: p.x,
    y: p.y,
    statuses: {},
    wobble: Math.random() * Math.PI * 2,
    animT: Math.random() * 2, // desync walk cycles between units
    angle: p.angle,
    hitFlash: 0,
  });
  if (def.boss) fx.floater(p.x + 30, p.y - 20, `${def.name}!`, '#ff9db5', 14);
}
