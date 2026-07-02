import { describe, expect, it } from 'vitest';
import { createGame, isBuildable, makeWizard } from '../src/game/state';
import { hasLOS, pickTarget } from '../src/game/targeting';
import { WIZARDS } from '../src/data/wizards';
import { ENEMIES } from '../src/data/enemies';
import { MAPS } from '../src/data/maps';
import type { Enemy, MapDef } from '../src/game/types';

function addEnemy(state: ReturnType<typeof createGame>, x: number, y: number, dist = 500): Enemy {
  const def = ENEMIES.golem;
  const e: Enemy = {
    id: state.nextId++, def, hp: def.hp, maxHp: def.hp, dist,
    x, y, statuses: {}, wobble: 0, animT: 0, angle: 0, hitFlash: 0,
  };
  state.enemies.push(e);
  return e;
}

describe('prop line of sight', () => {
  it('hasLOS is true on a clear board, false through a blocker', () => {
    const state = createGame(MAPS.vale, 1);
    expect(hasLOS(state, 100, 100, 300, 100)).toBe(true);
    state.blockers.push({ x: 200, y: 100, r: 16 });
    expect(hasLOS(state, 100, 100, 300, 100)).toBe(false);
    // off-axis path misses the blocker
    expect(hasLOS(state, 100, 100, 300, 220)).toBe(true);
  });

  it('pickTarget skips enemies hidden behind a prop', () => {
    const state = createGame(MAPS.vale, 1);
    const w = makeWizard(state, WIZARDS.fire, 20, 14); // far corner, clear of the track
    state.wizards.push(w);
    state.blockers.push({ x: w.x + 50, y: w.y, r: 16 });

    const hidden = addEnemy(state, w.x + 100, w.y); // straight behind the blocker
    expect(pickTarget(state, w)).toBeUndefined();

    const visible = addEnemy(state, w.x, w.y - 90, 300); // clear line, different angle
    expect(pickTarget(state, w)?.id).toBe(visible.id);
    expect(hidden.hp).toBe(hidden.maxHp);
  });

  it('the cell under a prop is unbuildable', () => {
    const mapWithProp: MapDef = {
      ...MAPS.vale,
      id: 'test_prop',
      props: [{ model: 'tree_a', x: 100, y: 220, rot: 0, scale: 1 }], // cell (2,5)
    };
    const state = createGame(mapWithProp, 1);
    expect(isBuildable(state, 2, 5, WIZARDS.fire)).toBe(false);
    expect(isBuildable(state, 3, 5, WIZARDS.fire)).toBe(true); // neighbor fine
  });
});
