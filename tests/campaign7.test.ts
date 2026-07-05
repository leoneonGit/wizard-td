/** Phase 7: campaign acts, act transitions, bosses, armor mechanic, difficulty scaling. */
import { describe, expect, it } from 'vitest';
import {
  createGame, advanceAct, isCampaign, makeWizard, ensureNodes, applyRelic, SELL_REFUND,
} from '../src/game/state';
import { startWave, updateWave } from '../src/game/waves';
import { dealDamage, updateEnemies } from '../src/game/combat';
import { restoreRun, type RunSave } from '../src/game/save';
import { ACT_WAVES, ACT_SCALING, WAVE_HP_RAMP, WAVES_PER_ACT, TOTAL_ACTS } from '../src/data/waves';
import { ENEMIES } from '../src/data/enemies';
import { MAPS, ACT_MAPS, ACT_MAP_POOLS, mapForAct } from '../src/data/maps';
import { PROP_MODELS, propOverlapsRoad } from '../src/game/mapio';
import { RELICS } from '../src/data/relics';
import { WIZARDS } from '../src/data/wizards';
import { fx } from '../src/render/effects';
import type { Enemy } from '../src/game/types';

const DT = 1 / 60;

function addEnemy(state: ReturnType<typeof createGame>, type: string, x = 100, y = 100): Enemy {
  const def = ENEMIES[type];
  const e: Enemy = {
    id: state.nextId++, def, hp: def.hp, maxHp: def.hp, dist: 500,
    x, y, statuses: {}, wobble: 0, animT: 0, angle: 0, hitFlash: 0,
    armorHp: def.armor,
  };
  state.enemies.push(e);
  return e;
}

/** Run startWave + updateWave long enough to spawn the first enemy. */
function spawnFirst(state: ReturnType<typeof createGame>) {
  startWave(state);
  for (let i = 0; i < 60 && state.enemies.length === 0; i++) updateWave(state, 0.5);
  return state.enemies[0];
}

// ---------------------------------------------------------------- campaign structure

describe('campaign structure', () => {
  it('three acts of ten waves, ending in warlord / pyretitan / colossus', () => {
    expect(TOTAL_ACTS).toBe(3);
    for (const act of ACT_WAVES) expect(act.length).toBe(WAVES_PER_ACT);
    expect(ACT_WAVES[0][9].some((g) => g.type === 'warlord')).toBe(true);
    expect(ACT_WAVES[1][9].some((g) => g.type === 'pyretitan')).toBe(true);
    expect(ACT_WAVES[2][9].some((g) => g.type === 'colossus')).toBe(true);
  });

  it('every act map exists and its props stay off the road', () => {
    for (const id of ACT_MAPS) {
      const map = MAPS[id];
      expect(map, id).toBeDefined();
      expect(map.theme, `${id} theme`).toBeDefined();
      for (const p of map.props ?? []) {
        const r = (PROP_MODELS[p.model]?.blockRadius ?? 12) * p.scale;
        expect(propOverlapsRoad(map, p.x, p.y, r), `${id} prop ${p.model}@${p.x},${p.y}`).toBe(false);
      }
    }
  });

  it('act scaling + within-act ramp are applied at spawn', () => {
    const state = createGame(MAPS.vale, 1);
    state.act = 1;
    state.round = 3; // act 2 wave 4: the runner rush (no bosses in this wave)
    state.nodePicked = true;
    const e = spawnFirst(state);
    expect(e.def.boss).toBeFalsy();
    const expected = e.def.hp * ACT_SCALING[1].hp * (1 + 3 * WAVE_HP_RAMP);
    expect(e.maxHp).toBeCloseTo(expected, 3);
    expect(e.speedMult).toBeCloseTo(ACT_SCALING[1].speed, 5);
  });

  it('bosses skip the within-act ramp', () => {
    const state = createGame(MAPS.vale, 2);
    state.act = 0;
    state.round = 9;
    state.nodePicked = true;
    startWave(state);
    for (let i = 0; i < 60 && !state.enemies.some((e) => e.def.id === 'warlord'); i++) {
      updateWave(state, 0.5);
    }
    const boss = state.enemies.find((e) => e.def.id === 'warlord')!;
    expect(boss.maxHp).toBeCloseTo(boss.def.hp * ACT_SCALING[0].hp, 3); // no ramp
  });

  it('kills pay act-scaled bounty', () => {
    const state = createGame(MAPS.vale, 2);
    state.act = 2;
    fx.clear();
    const e = addEnemy(state, 'grunt');
    const gold = state.gold;
    dealDamage(state, e, 99999, 'physical');
    expect(state.gold).toBe(gold + Math.round(e.def.bounty * ACT_SCALING[2].bounty));
  });
});

// ---------------------------------------------------------------- act transition

describe('act map pools', () => {
  it('rolls each act map from its pool, deterministically per seed', () => {
    for (let act = 0; act < 3; act++) {
      const rolled = mapForAct(act, 123456789);
      expect(ACT_MAP_POOLS[act]).toContain(rolled.id);
      expect(mapForAct(act, 123456789).id).toBe(rolled.id); // same seed -> same map
    }
  });
});

describe('advanceAct', () => {
  it('sells towers at the standard refund, keeps cards/relics/gold, swaps the map', () => {
    const state = createGame(MAPS.vale, 10);
    state.gold = 500;
    applyRelic(state, RELICS.find((r) => r.id === 'golden_idol')!);
    state.killStackPct = 12;
    const w = makeWizard(state, WIZARDS.fire, 2, 5);
    w.invested = 300;
    state.wizards.push(w);
    state.round = WAVES_PER_ACT;
    state.phase = 'actClear';

    expect(advanceAct(state)).toBe(true);
    expect(state.act).toBe(1);
    expect(ACT_MAP_POOLS[1]).toContain(state.map.id); // rolled from act 2's pool
    expect(state.gold).toBe(500 + Math.round(300 * SELL_REFUND));
    expect(state.wizards.length).toBe(0);
    expect(state.relics.length).toBe(1); // relics travel
    expect(state.killStackPct).toBe(12); // permanent ramps travel
    expect(state.round).toBe(0);
    expect(state.phase).toBe('build');
    // the new map's water layout is live (fen has different ponds than vale)
    expect(state.map.water?.length).not.toBe(MAPS.vale.water?.length);
  });

  it('cannot advance past the final act', () => {
    const state = createGame(MAPS.vale, 11);
    state.act = 2;
    expect(advanceAct(state)).toBe(false);
  });

  it('clearing act 1/2 goes to actClear; only act 3 wins the run', () => {
    for (const [act, expected] of [[0, 'actClear'], [1, 'actClear'], [2, 'won']] as const) {
      const state = createGame(MAPS[ACT_MAPS[act]], 12 + act);
      state.act = act;
      state.round = WAVES_PER_ACT - 1;
      state.phase = 'wave';
      state.waveKind = 'normal';
      state.pendingSpawns = [];
      state.enemies = [];
      updateWave(state, DT);
      expect(state.phase, `act ${act}`).toBe(expected);
    }
  });

  it('custom (non-campaign) maps win after a single act', () => {
    const custom = { ...MAPS.vale, id: 'my_custom_map' };
    const state = createGame(custom, 14);
    expect(isCampaign(state)).toBe(false);
    state.round = WAVES_PER_ACT - 1;
    state.phase = 'wave';
    state.pendingSpawns = [];
    state.enemies = [];
    updateWave(state, DT);
    expect(state.phase).toBe('won');
  });
});

// ---------------------------------------------------------------- armor mechanic

describe('boss armor', () => {
  it('non-physical damage barely chips the shell; physical cracks it; then normal rules', () => {
    const state = createGame(MAPS.vale, 20);
    fx.clear();
    const e = addEnemy(state, 'warlord');
    expect(e.armorHp).toBe(700);

    dealDamage(state, e, 100, 'fire');
    expect(e.hp).toBe(e.maxHp); // shell absorbed everything
    expect(e.armorHp).toBeCloseTo(690, 3); // 10% leak-through chips

    dealDamage(state, e, 100, 'physical');
    expect(e.armorHp).toBeCloseTo(590, 3);
    expect(e.hp).toBe(e.maxHp);

    e.armorHp = 50;
    dealDamage(state, e, 100, 'physical'); // breaks
    expect(e.armorHp).toBe(0);
    expect(e.hp).toBe(e.maxHp); // the breaking hit is absorbed by the shell

    const before = e.hp;
    dealDamage(state, e, 100, 'physical'); // now it hurts
    expect(before - e.hp).toBeCloseTo(100, 3);
  });

  it('burn ticks do nothing while the shell holds', () => {
    const state = createGame(MAPS.vale, 21);
    fx.clear();
    const e = addEnemy(state, 'warlord');
    e.statuses.burn = { t: 2, dps: 50 };
    updateEnemies(state, DT);
    expect(e.hp).toBe(e.maxHp);
  });

  it('the Dread Colossus births golemlings when its shell shatters', () => {
    const state = createGame(MAPS.vale, 22);
    fx.clear();
    const e = addEnemy(state, 'colossus');
    e.dist = 300;
    e.armorHp = 10;
    dealDamage(state, e, 100, 'physical');
    expect(e.armorHp).toBe(0);
    const adds = state.enemies.filter((x) => x.def.id === 'golemling');
    expect(adds.length).toBe(3);
    for (const a of adds) expect(a.dist).toBeLessThanOrEqual(300);
  });

  it('Pyre Titan: fire-immune and unchillable from birth', () => {
    const state = createGame(MAPS.vale, 23);
    state.round = 9;
    state.act = 1;
    state.nodePicked = true;
    // spawn through the real pipeline so innateImmune merges
    startWave(state);
    for (let i = 0; i < 60 && !state.enemies.some((e) => e.def.id === 'pyretitan'); i++) {
      updateWave(state, 0.5);
    }
    const boss = state.enemies.find((e) => e.def.id === 'pyretitan')!;
    expect(boss).toBeDefined();
    expect(boss.immunities).toContain('burn');
    expect(boss.immunities).toContain('chill');
    fx.clear();
    const hp = boss.hp;
    dealDamage(state, boss, 500, 'fire');
    expect(boss.hp).toBe(hp); // resist fire 0 -> immune
  });
});

// ---------------------------------------------------------------- boss bite (P11)

describe('boss leak costs', () => {
  it('act bosses leak for 10, THE Colossus for 25', () => {
    expect(ENEMIES.warlord.leakCost).toBe(10);
    expect(ENEMIES.pyretitan.leakCost).toBe(10);
    expect(ENEMIES.golem.leakCost).toBe(10);
    expect(ENEMIES.colossus.leakCost).toBe(25);
    expect(ENEMIES.golemling.leakCost).toBeUndefined(); // mini-boss stays at the default 5
  });

  it('a leaked warlord drains 10 lives', () => {
    const state = createGame(MAPS.vale, 60);
    fx.clear();
    const boss = addEnemy(state, 'warlord');
    boss.dist = state.track.total + 1;
    const lives = state.lives;
    updateEnemies(state, DT);
    expect(state.lives).toBe(lives - 10);
  });
});

// ---------------------------------------------------------------- save round-trip

describe('campaign save round-trip', () => {
  it('act and act-map restore together', () => {
    const save: RunSave = {
      mapId: 'fen',
      seed: 30,
      gold: 800,
      lives: 18,
      round: 3,
      act: 1,
      lastEliteRound: -5,
      cardIds: [],
      wizards: [],
      stats: {
        kills: 0, leaks: 0, wavesCleared: 13,
        dmgByElement: { fire: 0, ice: 0, lightning: 0, water: 0, wind: 0, physical: 0 },
        reactions: { conduct: 0, shatter: 0, evaporate: 0, frozen: 0 },
        cardIds: [],
      },
    };
    const state = restoreRun(save)!;
    expect(state.act).toBe(1);
    expect(state.map.id).toBe('fen');
    expect(state.round).toBe(3);
    expect(isCampaign(state)).toBe(true);
  });
});

// ---------------------------------------------------------------- node suppression sanity

describe('boss round nodes', () => {
  it('round 10 of any act rolls no detours', () => {
    const state = createGame(MAPS.fen, 40);
    state.act = 1;
    state.round = WAVES_PER_ACT - 1;
    ensureNodes(state);
    expect(state.nextNodes).toEqual(['normal']);
    expect(state.nodePicked).toBe(true);
  });
});
