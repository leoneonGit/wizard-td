import { describe, expect, it, beforeEach } from 'vitest';
import { createGame, isBuildable, makeWizard, type GameState } from '../src/game/state';
import { updateWizards, updateClouds, updateEnemies, CLOUD_RANGE } from '../src/game/combat';
import { MAPS } from '../src/data/maps';
import { WIZARDS } from '../src/data/wizards';
import { ENEMIES } from '../src/data/enemies';
import { fx } from '../src/render/effects';
import type { Enemy } from '../src/game/types';

const DT = 1 / 60;

function addEnemy(state: GameState, type: string, x: number, y: number, dist = 500): Enemy {
  const def = ENEMIES[type];
  const e: Enemy = {
    id: state.nextId++,
    def,
    hp: def.hp,
    maxHp: def.hp,
    dist,
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

describe('terrain placement', () => {
  let state: GameState;
  beforeEach(() => {
    state = createGame(MAPS.vale); // these tests assert vale-specific terrain
    fx.clear();
  });

  it('ground wizard cannot build on water; water wizard can', () => {
    // vale pond includes (11,8)
    expect(isBuildable(state, 11, 8, WIZARDS.fire)).toBe(false);
    expect(isBuildable(state, 11, 8, WIZARDS.water)).toBe(true);
  });

  it('water wizard cannot build on ground; ground wizard can', () => {
    // (2,5) is open grass on vale
    expect(isBuildable(state, 2, 5, WIZARDS.water)).toBe(false);
    expect(isBuildable(state, 2, 5, WIZARDS.fire)).toBe(true);
  });
});

describe('clouds & cloud mage', () => {
  let state: GameState;
  beforeEach(() => {
    state = createGame(MAPS.vale); // these tests assert vale-specific terrain
    fx.clear();
  });

  it('vale spawns two staggered drifting clouds that move along the loop', () => {
    expect(state.clouds.length).toBe(2);
    const x0 = state.clouds[0].x;
    const y0 = state.clouds[0].y;
    for (let i = 0; i < 300; i++) updateClouds(state, DT);
    expect(Math.hypot(state.clouds[0].x - x0, state.clouds[0].y - y0)).toBeGreaterThan(10);
  });

  it('cloud mage is becalmed with no cloud near, active with one near', () => {
    const w = makeWizard(state, WIZARDS.wind, 20, 14); // far corner
    state.wizards.push(w);
    for (const c of state.clouds) {
      c.x = 0;
      c.y = 0;
    }
    addEnemy(state, 'golem', w.x + 40, w.y);
    updateWizards(state, DT);
    expect(w.becalmed).toBe(true);

    // park the cloud on top of the mage
    state.clouds[0].x = w.x;
    state.clouds[0].y = w.y;
    updateWizards(state, DT);
    expect(w.becalmed).toBe(false);
  });

  it('wind gust knocks enemies backward along the track, with immunity window', () => {
    const w = makeWizard(state, WIZARDS.wind, 20, 14);
    w.cooldown = 0;
    state.wizards.push(w);
    for (const c of state.clouds) {
      c.x = 0;
      c.y = 0;
    }
    state.clouds[0].x = w.x;
    state.clouds[0].y = w.y;
    const e = addEnemy(state, 'golem', w.x + 40, w.y, 800);

    updateWizards(state, DT);
    const afterFirst = e.dist;
    expect(afterFirst).toBeLessThan(800);
    expect(800 - afterFirst).toBeCloseTo(70 * 0.25, 1); // boss knockback factor

    // immediate second gust must NOT knock again (immunity)
    w.cooldown = 0;
    updateWizards(state, DT);
    expect(e.dist).toBe(afterFirst);
  });

  it('non-boss takes full knockback', () => {
    const w = makeWizard(state, WIZARDS.wind, 20, 14);
    w.cooldown = 0;
    state.wizards.push(w);
    for (const c of state.clouds) {
      c.x = 0;
      c.y = 0;
    }
    state.clouds[0].x = w.x;
    state.clouds[0].y = w.y;
    const e = addEnemy(state, 'knight', w.x + 40, w.y, 800);
    updateWizards(state, DT);
    expect(800 - e.dist).toBeCloseTo(70, 1);
  });
});

describe('water mage tide', () => {
  let state: GameState;
  beforeEach(() => {
    state = createGame(MAPS.vale); // these tests assert vale-specific terrain
    fx.clear();
  });

  it('tide wets and slows every enemy in range', () => {
    const w = makeWizard(state, WIZARDS.water, 11, 8); // on the pond
    w.cooldown = 0;
    state.wizards.push(w);
    const a = addEnemy(state, 'golem', w.x + 30, w.y);
    const b = addEnemy(state, 'golem', w.x - 50, w.y + 20);
    const far = addEnemy(state, 'golem', w.x + 500, w.y);

    updateWizards(state, DT);

    expect(a.statuses.wet).toBeDefined();
    expect(b.statuses.wet).toBeDefined();
    expect(a.statuses.chill?.pct).toBeCloseTo(0.2);
    expect(far.statuses.wet).toBeUndefined();
    expect(a.hp).toBeLessThan(a.maxHp);
  });

  it('tide on a burning enemy evaporates instead of wetting', () => {
    const w = makeWizard(state, WIZARDS.water, 11, 8);
    w.cooldown = 0;
    state.wizards.push(w);
    const e = addEnemy(state, 'golem', w.x + 30, w.y);
    e.statuses.burn = { t: 3, dps: 6 };

    updateWizards(state, DT);

    expect(e.statuses.burn).toBeUndefined();
    expect(e.statuses.wet).toBeUndefined();
  });

  it('CLOUD_RANGE sanity export', () => {
    expect(CLOUD_RANGE).toBeGreaterThan(0);
  });
});
