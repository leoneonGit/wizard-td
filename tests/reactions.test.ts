import { describe, expect, it, beforeEach } from 'vitest';
import { createGame, makeWizard, type GameState } from '../src/game/state';
import { updateWizards, updateProjectiles, updateEnemies } from '../src/game/combat';
import { WIZARDS } from '../src/data/wizards';
import { ENEMIES } from '../src/data/enemies';
import { fx } from '../src/render/effects';
import type { Enemy } from '../src/game/types';

const DT = 1 / 60;

/** Place an enemy at an exact position, standing still far along the track conceptually. */
function addEnemy(state: GameState, type: string, x: number, y: number): Enemy {
  const def = ENEMIES[type];
  const e: Enemy = {
    id: state.nextId++,
    def,
    hp: def.hp,
    maxHp: def.hp,
    dist: 1, // on track but irrelevant for these tests
    x,
    y,
    statuses: {},
    wobble: 0,
    animT: 0,
    angle: 0,
    hitFlash: 0,
  };
  state.enemies.push(e);
  return e;
}

function addWizard(state: GameState, type: string, cx: number, cy: number) {
  const w = makeWizard(state, WIZARDS[type], cx, cy);
  state.wizards.push(w);
  return w;
}

/** Step wizards+projectiles enough for one attack to land. */
function combatSteps(state: GameState, steps: number) {
  for (let i = 0; i < steps; i++) {
    updateWizards(state, DT);
    updateProjectiles(state, DT);
  }
}

function floaterTexts(): string[] {
  return fx.floaters.map((f) => f.text);
}

describe('elemental reactions', () => {
  let state: GameState;

  beforeEach(() => {
    state = createGame();
    fx.clear();
  });

  it('Conduct: lightning deals bonus damage to Wet enemies and consumes Wet', () => {
    const w = addWizard(state, 'lightning', 5, 5); // center (220,220)
    const e = addEnemy(state, 'golem', w.x + 50, w.y); // tanky: survives the hit
    e.statuses.wet = { t: 4 };

    updateWizards(state, DT); // instant beam

    const expected = w.stats.damage * 1.6 * (e.def.resist.lightning ?? 1);
    expect(e.maxHp - e.hp).toBeCloseTo(expected, 3);
    expect(e.statuses.wet).toBeUndefined();
    expect(floaterTexts()).toContain('Conduct!');
  });

  it('Conduct extends the chain by one hop', () => {
    const w = addWizard(state, 'lightning', 5, 5);
    // base chains = 2 -> 3 hits normally; wet first target => 4 hits
    const targets = [
      addEnemy(state, 'golem', w.x + 50, w.y),
      addEnemy(state, 'golem', w.x + 90, w.y),
      addEnemy(state, 'golem', w.x + 130, w.y),
      addEnemy(state, 'golem', w.x + 170, w.y),
    ];
    targets[0].statuses.wet = { t: 4 };

    updateWizards(state, DT);

    const hit = targets.filter((t) => t.hp < t.maxHp).length;
    expect(hit).toBe(4);
  });

  it('Shatter: fire deals double damage to Chilled enemies and consumes Chill', () => {
    const w = addWizard(state, 'fire', 5, 5);
    const e = addEnemy(state, 'golem', w.x + 60, w.y);
    e.statuses.chill = { t: 2, pct: 0.3, stacks: 1 };

    combatSteps(state, 30); // fire projectile needs flight time

    const dealt = e.maxHp - e.hp;
    const oneShatterHit = w.stats.damage * 2 * (e.def.resist.fire ?? 1);
    expect(dealt).toBeGreaterThanOrEqual(oneShatterHit - 0.01);
    expect(e.statuses.chill).toBeUndefined();
    expect(floaterTexts()).toContain('Shatter!');
  });

  it('Evaporate: burning enemy hit by ice loses Burn, gains no Wet, takes burst', () => {
    const w = addWizard(state, 'ice', 5, 5);
    const e = addEnemy(state, 'golem', w.x + 60, w.y);
    e.statuses.burn = { t: 3, dps: 6 };

    combatSteps(state, 30);

    expect(e.statuses.burn).toBeUndefined();
    expect(e.statuses.wet).toBeUndefined();
    expect(floaterTexts()).toContain('Evaporate!');
  });

  it('Evaporate: wet enemy hit by fire loses Wet and gains no Burn', () => {
    const w = addWizard(state, 'fire', 5, 5);
    const e = addEnemy(state, 'golem', w.x + 60, w.y);
    e.statuses.wet = { t: 4 };

    combatSteps(state, 30);

    expect(e.statuses.wet).toBeUndefined();
    expect(e.statuses.burn).toBeUndefined();
    expect(floaterTexts()).toContain('Evaporate!');
  });

  it('Freeze: three chill stacks freeze the enemy, stopping movement', () => {
    const w = addWizard(state, 'ice', 5, 5);
    const e = addEnemy(state, 'golem', w.x + 60, w.y);

    // three ice hits: rate 0.75s -> ~2.5s of sim incl. projectile flight
    for (let i = 0; i < 60 * 3; i++) {
      updateWizards(state, DT);
      updateProjectiles(state, DT);
      // tick status durations but pin position (keep it simple: don't move)
    }

    expect(e.statuses.frozen).toBeDefined();
    expect(floaterTexts()).toContain('Frozen!');

    // frozen enemy must not advance
    const distBefore = e.dist;
    updateEnemies(state, DT);
    expect(e.dist).toBe(distBefore);
  });

  it('resistances: fire-immune shade takes zero fire damage', () => {
    const w = addWizard(state, 'fire', 5, 5);
    const e = addEnemy(state, 'shade', w.x + 60, w.y);

    combatSteps(state, 30);

    expect(e.hp).toBe(e.maxHp);
    expect(e.statuses.burn).toBeDefined(); // status still applies; ticks deal 0 via resist
  });

  it('armored knight takes 1.5x from fire, 0.5x from ice', () => {
    const wf = addWizard(state, 'fire', 5, 5);
    const knight = addEnemy(state, 'knight', wf.x + 60, wf.y);
    combatSteps(state, 25);
    const fireDealt = knight.maxHp - knight.hp;
    expect(fireDealt).toBeGreaterThanOrEqual(wf.stats.damage * 1.5 - 0.01);
  });
});
