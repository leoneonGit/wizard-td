/** Phase 17: THE AETHERWYRM — the act 3 dragon boss and its polymorph roar. */
import { describe, expect, it } from 'vitest';
import { createGame, makeWizard } from '../src/game/state';
import { updateEnemies } from '../src/game/combat';
import { ACT_WAVES } from '../src/data/waves';
import { ENEMIES } from '../src/data/enemies';
import { MAPS } from '../src/data/maps';
import { WIZARDS } from '../src/data/wizards';
import { fx } from '../src/render/effects';
import type { Enemy } from '../src/game/types';

const DT = 1 / 60;

function addEnemy(state: ReturnType<typeof createGame>, type: string, dist = 500): Enemy {
  const def = ENEMIES[type];
  const p = state.track.posAt(Math.min(dist, state.track.total - 1));
  const e: Enemy = {
    id: state.nextId++, def, hp: def.hp, maxHp: def.hp, dist,
    x: p.x, y: p.y, statuses: {}, wobble: 0, animT: 0, angle: 0, hitFlash: 0,
  };
  state.enemies.push(e);
  return e;
}

function field(state: ReturnType<typeof createGame>, defIds: string[]): void {
  defIds.forEach((id, i) => state.wizards.push(makeWizard(state, WIZARDS[id], 2 + (i % 10) * 2, 3 + Math.floor(i / 10) * 2)));
}

describe('the Aetherwyrm reigns over act 3', () => {
  it('is the campaign finale boss (the Colossus stands down)', () => {
    const finale = ACT_WAVES[2][ACT_WAVES[2].length - 1];
    expect(finale.some((g) => g.type === 'aetherwyrm')).toBe(true);
    expect(finale.some((g) => g.type === 'colossus')).toBe(false);
    expect(ENEMIES.aetherwyrm.boss).toBe(true);
    expect(ENEMIES.aetherwyrm.leakCost).toBe(25);
  });

  it('roars at 25% of the road: HALF the towers polymorph, value preserved', () => {
    const state = createGame(MAPS.vale, 200);
    fx.clear();
    field(state, ['fire', 'ice', 'slingshot', 'longbow', 'rootgrasp', 'gong', 'voidgazer', 'dynamite']);
    state.wizards.forEach((w) => { w.invested = 150; });
    const before = state.wizards.map((w) => w.def.id);
    const dragon = addEnemy(state, 'aetherwyrm', 10);
    // shy of the line: nothing happens
    dragon.dist = state.track.total * 0.24;
    updateEnemies(state, DT);
    expect(state.wizards.map((w) => w.def.id)).toEqual(before);
    // crossing it: exactly half twist, invested untouched, tiers reset
    dragon.dist = state.track.total * 0.26;
    updateEnemies(state, DT);
    const after = state.wizards.map((w) => w.def.id);
    const changed = after.filter((id, i) => id !== before[i]);
    expect(changed.length).toBe(4); // floor(8 * 0.5)
    for (const w of state.wizards) {
      expect(w.invested).toBe(150);
      expect(w.def.isGeneric ?? false).toBe(false);
      expect(w.family).toBe(w.def.family); // family field follows the new def
    }
    expect(state.wizards.filter((w, i) => after[i] !== before[i]).every((w) => w.tiers[0] === 0 && w.tiers[1] === 0)).toBe(true);
  });

  it('fires exactly once', () => {
    const state = createGame(MAPS.vale, 201);
    fx.clear();
    field(state, ['fire', 'ice', 'slingshot', 'longbow']);
    const dragon = addEnemy(state, 'aetherwyrm', 10);
    dragon.dist = state.track.total * 0.3;
    updateEnemies(state, DT);
    const once = state.wizards.map((w) => w.def.id);
    dragon.dist = state.track.total * 0.6;
    for (let t = 0; t < 1; t += DT) updateEnemies(state, DT);
    expect(state.wizards.map((w) => w.def.id)).toEqual(once);
    expect(dragon.polyDone).toBe(true);
  });

  it('never conjures a water mage onto dry land, nor touches the tide in its pool', () => {
    const state = createGame(MAPS.vale, 202);
    fx.clear();
    field(state, ['fire', 'ice', 'slingshot', 'longbow', 'gong', 'rootgrasp']);
    const tide = makeWizard(state, WIZARDS.water, 15, 8); // the vale pool
    state.wizards.push(tide);
    const dragon = addEnemy(state, 'aetherwyrm', 10);
    // several seeds, same guarantee
    for (let s = 0; s < 5; s++) {
      dragon.polyDone = false;
      dragon.dist = state.track.total * 0.26;
      updateEnemies(state, DT);
    }
    expect(tide.def.id).toBe('water'); // the water tower is never polymorphed
    for (const w of state.wizards) {
      if (w === tide) continue;
      expect(w.def.placement).not.toBe('water'); // and no one became one
    }
  });

  it('is deterministic: the same seed twists the same towers the same way', () => {
    const run = (seed: number) => {
      const state = createGame(MAPS.vale, seed);
      fx.clear();
      field(state, ['fire', 'ice', 'slingshot', 'longbow', 'rootgrasp', 'gong']);
      const dragon = addEnemy(state, 'aetherwyrm', 10);
      dragon.dist = state.track.total * 0.26;
      updateEnemies(state, DT);
      return state.wizards.map((w) => w.def.id).join(',');
    };
    expect(run(777)).toBe(run(777));
    expect(ENEMIES.aetherwyrm.polymorph!.fraction).toBe(0.5);
  });
});
