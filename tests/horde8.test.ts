/** Phase 8: the horde — carriers, trolls, support auras, wraiths, leak costs. */
import { describe, expect, it } from 'vitest';
import { createGame, makeWizard } from '../src/game/state';
import { dealDamage, updateEnemies } from '../src/game/combat';
import { pickTarget } from '../src/game/targeting';
import { ACT_WAVES, ACT_SCALING } from '../src/data/waves';
import { ENEMIES } from '../src/data/enemies';
import { MAPS } from '../src/data/maps';
import { WIZARDS } from '../src/data/wizards';
import { fx } from '../src/render/effects';
import type { Enemy } from '../src/game/types';

const DT = 1 / 60;

function addEnemy(state: ReturnType<typeof createGame>, type: string, x = 100, y = 100, dist = 500): Enemy {
  const def = ENEMIES[type];
  const e: Enemy = {
    id: state.nextId++, def, hp: def.hp, maxHp: def.hp, dist,
    x, y, statuses: {}, wobble: 0, animT: 0, angle: 0, hitFlash: 0,
    armorHp: def.armor,
  };
  state.enemies.push(e);
  return e;
}

// ---------------------------------------------------------------- roster invariants

describe('horde roster', () => {
  it('NO enemy in the entire roster resists physical (sacred rule)', () => {
    for (const def of Object.values(ENEMIES)) {
      expect(def.resist.physical, def.id).toBeUndefined();
    }
  });

  it('every new horde unit marches somewhere in the campaign', () => {
    const used = new Set<string>();
    for (const act of ACT_WAVES) for (const wave of act) for (const g of wave) used.add(g.type);
    for (const id of ['orcraider', 'orcbrute', 'troll', 'warwagon', 'siegetower', 'orcshaman', 'wardrummer', 'wraith']) {
      expect(used.has(id), id).toBe(true);
    }
  });

  it('carriers reference real payload types', () => {
    for (const def of Object.values(ENEMIES)) {
      for (const id of def.deathSpawns ?? []) expect(ENEMIES[id], `${def.id} deathSpawns`).toBeDefined();
      if (def.dropSpawns) expect(ENEMIES[def.dropSpawns.type], `${def.id} dropSpawns`).toBeDefined();
    }
  });
});

// ---------------------------------------------------------------- carriers

describe('War Wagon (death-burst carrier)', () => {
  it('killing it releases its orcs at the corpse, act-scaled', () => {
    const state = createGame(MAPS.vale, 1);
    state.act = 1;
    fx.clear();
    const wagon = addEnemy(state, 'warwagon', 200, 200, 400);
    dealDamage(state, wagon, 99999, 'physical');
    const raiders = state.enemies.filter((e) => e.def.id === 'orcraider');
    expect(raiders.length).toBe(5);
    for (const r of raiders) {
      expect(r.dist).toBeLessThan(400);
      expect(r.maxHp).toBeCloseTo(ENEMIES.orcraider.hp * ACT_SCALING[1].hp, 3);
    }
  });

  it('leaking costs 8 lives', () => {
    const state = createGame(MAPS.vale, 2);
    fx.clear();
    const wagon = addEnemy(state, 'warwagon');
    wagon.dist = state.track.total + 1;
    const lives = state.lives;
    updateEnemies(state, DT);
    expect(state.lives).toBe(lives - 8);
  });
});

describe('Siege Tower (rolling-drop carrier)', () => {
  it('drips orc raiders on its period while alive', () => {
    const state = createGame(MAPS.vale, 3);
    fx.clear();
    const tower = addEnemy(state, 'siegetower', 200, 200, 300);
    tower.dist = 300;
    const period = ENEMIES.siegetower.dropSpawns!.period;
    // just under one period: nothing yet
    for (let t = 0; t < period - 0.1; t += DT) updateEnemies(state, DT);
    expect(state.enemies.filter((e) => e.def.id === 'orcraider').length).toBe(0);
    // cross the period boundary
    for (let t = 0; t < 0.3; t += DT) updateEnemies(state, DT);
    expect(state.enemies.filter((e) => e.def.id === 'orcraider').length).toBe(2);
  });
});

// ---------------------------------------------------------------- troll

describe('Troll (armor + regeneration)', () => {
  it('regenerates toward max hp, capped', () => {
    const state = createGame(MAPS.vale, 10);
    const troll = addEnemy(state, 'troll');
    troll.dist = 1;
    troll.hp = 1000;
    updateEnemies(state, 1); // one full second
    expect(troll.hp).toBeCloseTo(1000 + troll.maxHp * 0.015, 1);
    troll.hp = troll.maxHp - 0.01;
    updateEnemies(state, 1);
    expect(troll.hp).toBe(troll.maxHp); // never overheals
  });

  it('does not regenerate while frozen', () => {
    const state = createGame(MAPS.vale, 11);
    const troll = addEnemy(state, 'troll');
    troll.dist = 1;
    troll.hp = 1000;
    troll.statuses.frozen = { t: 5 };
    updateEnemies(state, 1);
    expect(troll.hp).toBe(1000);
  });

  it('carries a physical-gated armor shell like the bosses', () => {
    const state = createGame(MAPS.vale, 12);
    fx.clear();
    const troll = addEnemy(state, 'troll');
    expect(troll.armorHp).toBe(320);
    dealDamage(state, troll, 100, 'fire');
    expect(troll.hp).toBe(troll.maxHp);
    expect(troll.armorHp).toBeCloseTo(310, 1); // 10% leak-through
    dealDamage(state, troll, 100, 'physical');
    expect(troll.armorHp).toBeCloseTo(210, 1);
  });
});

// ---------------------------------------------------------------- support auras

describe('Orc Shaman (heal pulses)', () => {
  it('heals damaged allies in radius on its period — not the healthy, not the distant', () => {
    const state = createGame(MAPS.vale, 20);
    fx.clear();
    // separation via track distance (positions are track-derived every tick);
    // frozen pins everyone in place without touching the aura logic
    const pin = (e: Enemy) => { e.statuses.frozen = { t: 60 }; };
    const shaman = addEnemy(state, 'orcshaman');
    shaman.dist = 100;
    pin(shaman);
    const hurt = addEnemy(state, 'grunt'); // ~10px down the road — inside radius 110
    hurt.dist = 110;
    hurt.hp = 10;
    pin(hurt);
    const far = addEnemy(state, 'grunt'); // several bends away
    far.dist = 800;
    far.hp = 10;
    pin(far);
    for (let t = 0; t < 2.2; t += DT) updateEnemies(state, DT);
    expect(hurt.hp).toBeGreaterThan(10);
    expect(hurt.hp).toBeCloseTo(10 + hurt.maxHp * 0.03, 1);
    expect(far.hp).toBe(10);
  });
});

describe('War Drummer (haste aura)', () => {
  it('nearby enemies march faster while he lives; distant ones do not', () => {
    const state = createGame(MAPS.vale, 21);
    const drummer = addEnemy(state, 'wardrummer', 100, 100);
    drummer.dist = 1;
    const near = addEnemy(state, 'grunt', 150, 100);
    near.dist = 100;
    const far = addEnemy(state, 'grunt', 600, 400);
    far.dist = 100;
    updateEnemies(state, DT);
    const nearMoved = near.dist - 100;
    const farMoved = far.dist - 100;
    expect(nearMoved).toBeCloseTo(farMoved * 1.18, 5);
    // drummer dies -> the beat stops
    drummer.hp = -1;
    const nd = near.dist;
    const fd = far.dist;
    updateEnemies(state, DT);
    expect(near.dist - nd).toBeCloseTo(far.dist - fd, 5);
  });
});

// ---------------------------------------------------------------- wraith

describe('Wraith (phase-shifter)', () => {
  it('cycles untargetable windows; towers skip it while phased', () => {
    const state = createGame(MAPS.vale, 30);
    const w = makeWizard(state, WIZARDS.longbow, 2, 5);
    state.wizards.push(w);
    const wraith = addEnemy(state, 'wraith', w.x + 40, w.y);
    wraith.dist = 1;

    // fresh spawn: targetable (phase sits at the END of each 5s period)
    updateEnemies(state, DT);
    expect(wraith.phased).toBe(false);
    expect(pickTarget(state, w)?.id).toBe(wraith.id);

    // advance into the phased window (last 1.6s of the 5s cycle)
    wraith.phaseT = 4.0;
    updateEnemies(state, DT);
    expect(wraith.phased).toBe(true);
    expect(pickTarget(state, w)).toBeUndefined();

    // and back out
    wraith.phaseT = 5.1;
    updateEnemies(state, DT);
    expect(wraith.phased).toBe(false);
    expect(pickTarget(state, w)?.id).toBe(wraith.id);
  });
});
