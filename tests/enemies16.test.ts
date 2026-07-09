/** Phase 16: the act 2/3 specialists — Frost Shaman (tower-slowing aura),
 *  Burrower (dives under the road), Mirror Slime (splits on elemental kills). */
import { describe, expect, it } from 'vitest';
import { createGame, makeWizard } from '../src/game/state';
import { dealDamage, updateEnemies, updateWizards } from '../src/game/combat';
import { ACT_WAVES } from '../src/data/waves';
import { ENEMIES } from '../src/data/enemies';
import { MAPS } from '../src/data/maps';
import { WIZARDS } from '../src/data/wizards';
import { fx } from '../src/render/effects';
import type { Enemy } from '../src/game/types';

const DT = 1 / 60;

function addEnemy(state: ReturnType<typeof createGame>, type: string, dist = 500, hp?: number): Enemy {
  const def = ENEMIES[type];
  const p = state.track.posAt(Math.min(dist, state.track.total - 1));
  const e: Enemy = {
    id: state.nextId++, def, hp: hp ?? def.hp, maxHp: hp ?? def.hp, dist,
    x: p.x, y: p.y, statuses: {}, wobble: 0, animT: 0, angle: 0, hitFlash: 0,
    armorHp: def.armor,
  };
  state.enemies.push(e);
  return e;
}

const pin = (e: Enemy) => { e.statuses.frozen = { t: 600 }; };

describe('wave-table integrity', () => {
  it('every wave references a real enemy def', () => {
    for (const act of ACT_WAVES) {
      for (const wave of act) {
        for (const g of wave) expect(ENEMIES[g.type], `missing enemy: ${g.type}`).toBeDefined();
      }
    }
  });

  it('the new specialists actually march in acts 2 and 3', () => {
    const types = (a: number) => new Set(ACT_WAVES[a].flat().map((g) => g.type));
    expect(types(1).has('frostshaman')).toBe(true);
    expect(types(1).has('burrower')).toBe(true);
    expect(types(2).has('mirrorslime')).toBe(true);
    expect(types(2).has('frostshaman')).toBe(true);
    expect(types(2).has('burrower')).toBe(true);
  });
});

describe('Frost Shaman — his cold slows YOUR towers', () => {
  it('towers in the aura fire slower; out of it they are untouched', () => {
    const state = createGame(MAPS.vale, 100);
    fx.clear();
    const near = makeWizard(state, WIZARDS.fire, 3, 3);
    const far = makeWizard(state, WIZARDS.fire, 20, 14);
    state.wizards.push(near, far);
    const shaman = addEnemy(state, 'frostshaman', 100);
    shaman.x = near.x + 40; // parked inside the near tower's aura range
    shaman.y = near.y;
    pin(shaman);
    updateWizards(state, DT);
    expect(near.frostMul).toBeCloseTo(1.45, 3);
    expect(far.frostMul).toBe(1);
    // the chilled tower's next shot winds up on a longer cooldown
    const grunt = addEnemy(state, 'grunt', 100);
    grunt.x = near.x + 30;
    grunt.y = near.y;
    pin(grunt);
    near.cooldown = 0;
    updateWizards(state, DT);
    expect(near.cooldown).toBeCloseTo(WIZARDS.fire.rate * 1.45, 2);
  });

  it('the aura lifts when the shaman dies', () => {
    const state = createGame(MAPS.vale, 101);
    fx.clear();
    const w = makeWizard(state, WIZARDS.fire, 3, 3);
    state.wizards.push(w);
    const shaman = addEnemy(state, 'frostshaman', 100);
    shaman.x = w.x + 40;
    shaman.y = w.y;
    updateWizards(state, DT);
    expect(w.frostMul).toBeGreaterThan(1);
    dealDamage(state, shaman, 99999, 'physical');
    updateWizards(state, DT);
    expect(w.frostMul).toBe(1);
  });
});

describe('Burrower — under the road and gone', () => {
  it('phases on its cycle and covers ground FASTER while burrowed', () => {
    const state = createGame(MAPS.vale, 102);
    fx.clear();
    const e = addEnemy(state, 'burrower', 100);
    expect(e.def.phase).toBeDefined();
    // surface stretch: fresh spawns are targetable first (phased late in the cycle)
    let surface = 0;
    const d0 = e.dist;
    for (let t = 0; t < 1; t += DT) updateEnemies(state, DT);
    surface = e.dist - d0;
    expect(e.phased ?? false).toBe(false);
    // ride into the burrow window
    for (let t = 0; t < 3.2; t += DT) updateEnemies(state, DT);
    expect(e.phased).toBe(true);
    const d1 = e.dist;
    for (let t = 0; t < 1; t += DT) updateEnemies(state, DT);
    const buried = e.dist - d1;
    expect(buried).toBeGreaterThan(surface * 1.5); // 1.8x underground
  });
});

describe('Mirror Slime — magic splits it, stone ends it', () => {
  it('an elemental deathblow fissions it into two mirrorlings', () => {
    const state = createGame(MAPS.vale, 103);
    fx.clear();
    const slime = addEnemy(state, 'mirrorslime', 400);
    dealDamage(state, slime, 99999, 'fire');
    updateEnemies(state, DT); // reaper pass
    const shards = state.enemies.filter((e) => e.def.id === 'mirrorling');
    expect(shards.length).toBe(2);
  });

  it('void counts as magic too', () => {
    const state = createGame(MAPS.vale, 104);
    fx.clear();
    const slime = addEnemy(state, 'mirrorslime', 400);
    dealDamage(state, slime, 99999, 'void');
    expect(state.enemies.filter((e) => e.def.id === 'mirrorling').length).toBe(2);
  });

  it('a physical kill puts it down clean — no reflections', () => {
    const state = createGame(MAPS.vale, 105);
    fx.clear();
    const slime = addEnemy(state, 'mirrorslime', 400);
    dealDamage(state, slime, 99999, 'physical');
    expect(state.enemies.filter((e) => e.def.id === 'mirrorling').length).toBe(0);
  });

  it('mirrorlings do not split again', () => {
    const state = createGame(MAPS.vale, 106);
    fx.clear();
    const shard = addEnemy(state, 'mirrorling', 400);
    dealDamage(state, shard, 99999, 'fire');
    expect(state.enemies.filter((e) => e.def.id === 'mirrorling' && e.hp > 0).length).toBe(0);
  });
});
