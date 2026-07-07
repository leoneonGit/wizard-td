/** Phase 15c: interactive boss phases — the Pyre Titan's Cinder Carapace and
 *  the Dread Colossus' Heartstones. Act 1's warlord is untouched. */
import { describe, expect, it } from 'vitest';
import { createGame } from '../src/game/state';
import { dealDamage, updateEnemies } from '../src/game/combat';
import { updateWave } from '../src/game/waves';
import { ENEMIES } from '../src/data/enemies';
import { MAPS } from '../src/data/maps';
import { fx } from '../src/render/effects';
import type { Enemy } from '../src/game/types';

const DT = 1 / 60;

function addEnemy(state: ReturnType<typeof createGame>, type: string, dist = 500): Enemy {
  const def = ENEMIES[type];
  const p = state.track.posAt(Math.min(dist, state.track.total - 1));
  const e: Enemy = {
    id: state.nextId++, def, hp: def.hp, maxHp: def.hp, dist,
    x: p.x, y: p.y, statuses: {}, wobble: 0, animT: 0, angle: 0, hitFlash: 0,
    armorHp: def.armor,
  };
  state.enemies.push(e);
  return e;
}

const pin = (e: Enemy) => { e.statuses.frozen = { t: 600 }; };

/** Step updateEnemies until the predicate holds (bounded). */
function stepUntil(state: ReturnType<typeof createGame>, cond: () => boolean, maxSec = 20): void {
  for (let t = 0; t < maxSec && !cond(); t += DT) updateEnemies(state, DT);
}

describe('Pyre Titan — Cinder Carapace', () => {
  it('opens vulnerable, shields late in each cycle, blocks everything while up', () => {
    const state = createGame(MAPS.vale, 90);
    fx.clear();
    const boss = addEnemy(state, 'pyretitan', 300);
    pin(boss);
    expect(boss.shieldActive).toBeUndefined(); // fresh spawn: open season
    dealDamage(state, boss, 100, 'lightning');
    expect(boss.maxHp - boss.hp).toBeGreaterThan(0);

    stepUntil(state, () => boss.shieldActive === true);
    expect(boss.shieldActive).toBe(true);
    const hpAtShield = boss.hp;
    dealDamage(state, boss, 500, 'lightning');
    expect(boss.hp).toBe(hpAtShield); // eaten whole
    expect(boss.shieldHits).toBe(1);
  });

  it('ten blocked hits shatter it early — and it stays down that cycle', () => {
    const state = createGame(MAPS.vale, 91);
    fx.clear();
    const boss = addEnemy(state, 'pyretitan', 300);
    pin(boss);
    stepUntil(state, () => boss.shieldActive === true);
    for (let i = 0; i < 10; i++) dealDamage(state, boss, 50, 'physical');
    expect(boss.shieldActive).toBe(false); // battered down
    const hp0 = boss.hp;
    dealDamage(state, boss, 100, 'physical');
    expect(boss.hp).toBeLessThan(hp0); // damage flows again
    updateEnemies(state, DT); // still inside the window...
    expect(boss.shieldActive).toBe(false); // ...but it does NOT re-arm
  });

  it('an untouched shield burns out when the window closes', () => {
    const state = createGame(MAPS.vale, 92);
    fx.clear();
    const boss = addEnemy(state, 'pyretitan', 300);
    pin(boss);
    stepUntil(state, () => boss.shieldActive === true);
    stepUntil(state, () => boss.shieldActive === false);
    expect(boss.shieldActive).toBe(false);
    expect(boss.shieldHits).toBe(0); // slate cleaned for the next cycle
  });

  it('burn ticks are blocked but never count as shield hits', () => {
    const state = createGame(MAPS.vale, 93);
    fx.clear();
    const boss = addEnemy(state, 'pyretitan', 300);
    pin(boss);
    stepUntil(state, () => boss.shieldActive === true);
    boss.statuses.burn = { t: 0.5, dps: 600 }; // forced on (it's normally burn-immune)
    const hp0 = boss.hp;
    for (let t = 0; t < 0.5; t += DT) updateEnemies(state, DT);
    expect(boss.hp).toBe(hp0);
    expect(boss.shieldHits ?? 0).toBe(0);
  });
});

describe('Dread Colossus — Heartstones', () => {
  it('plants a pair at each hp threshold once the shell is broken', () => {
    const state = createGame(MAPS.vale, 94);
    fx.clear();
    const boss = addEnemy(state, 'colossus', 500);
    pin(boss);
    boss.armorHp = 0; // shell already cracked
    boss.hp = boss.maxHp * 0.74; // through the 75% line
    updateEnemies(state, DT);
    const stones = state.enemies.filter((e) => e.def.id === 'heartstone');
    expect(stones.length).toBe(2);
    expect(stones.map((s) => Math.round(s.dist)).sort((a, b) => a - b)).toEqual([455, 545]);
    expect(boss.phaseIdx).toBe(1);
  });

  it('one massive hit across two thresholds erupts both pairs', () => {
    const state = createGame(MAPS.vale, 95);
    fx.clear();
    const boss = addEnemy(state, 'colossus', 500);
    pin(boss);
    boss.armorHp = 0;
    boss.hp = boss.maxHp * 0.9;
    updateEnemies(state, DT);
    expect(state.enemies.filter((e) => e.def.id === 'heartstone').length).toBe(0);
    boss.hp = boss.maxHp * 0.4; // crashes through 75% AND 50%
    updateEnemies(state, DT);
    expect(state.enemies.filter((e) => e.def.id === 'heartstone').length).toBe(4);
    expect(boss.phaseIdx).toBe(2);
  });

  it('heartstones heal the wounded boss until sniped', () => {
    const state = createGame(MAPS.vale, 96);
    fx.clear();
    const boss = addEnemy(state, 'colossus', 500);
    pin(boss);
    boss.armorHp = 0;
    boss.hp = boss.maxHp * 0.6; // wounded, but above the next threshold
    boss.phaseIdx = 1; // the 75% eruption already happened — no fresh stones mid-test
    const stone = addEnemy(state, 'heartstone', 505);
    const hp0 = boss.hp;
    for (let t = 0; t < 2.2; t += DT) updateEnemies(state, DT);
    expect(boss.hp).toBeGreaterThan(hp0); // ~2% maxHp per pulse
    dealDamage(state, stone, 99999, 'physical');
    const healed = boss.hp;
    for (let t = 0; t < 1.5; t += DT) updateEnemies(state, DT);
    expect(boss.hp).toBe(healed); // silence after the snipe
  });

  it('a heartstone never walks, never leaks, and holds the wave open', () => {
    const state = createGame(MAPS.vale, 97);
    fx.clear();
    state.phase = 'wave';
    state.waveKind = 'normal';
    state.pendingSpawns = [];
    const stone = addEnemy(state, 'heartstone', 500);
    const lives0 = state.lives;
    for (let t = 0; t < 10; t += DT) updateEnemies(state, DT);
    expect(stone.dist).toBe(500);
    expect(state.lives).toBe(lives0);
    updateWave(state, DT);
    expect(state.phase).toBe('wave'); // the crystal holds the wave hostage
    stone.hp = 0;
    updateEnemies(state, DT); // reaper pass
    updateWave(state, DT);
    expect(state.phase).not.toBe('wave'); // cleared once it dies
  });
});
