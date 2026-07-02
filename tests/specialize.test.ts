import { describe, expect, it } from 'vitest';
import {
  createGame, isBuildable, makeWizard, specializeWizard, drawSpecialize, computeStats,
} from '../src/game/state';
import { updateWizards, dealDamage, updateEnemies } from '../src/game/combat';
import { restoreRun, type RunSave } from '../src/game/save';
import { WIZARDS } from '../src/data/wizards';
import { ENEMIES } from '../src/data/enemies';
import { MAPS } from '../src/data/maps';
import { fx } from '../src/render/effects';
import type { Enemy } from '../src/game/types';

const DT = 1 / 60;

function addEnemy(state: ReturnType<typeof createGame>, type: string, x: number, y: number, dist = 500): Enemy {
  const def = ENEMIES[type];
  const e: Enemy = {
    id: state.nextId++, def, hp: def.hp, maxHp: def.hp, dist,
    x, y, statuses: {}, wobble: 0, animT: 0, angle: 0, hitFlash: 0,
  };
  state.enemies.push(e);
  return e;
}

describe('generic tower placement', () => {
  it('generic wizard shell may be placed on ground OR water (placement: any)', () => {
    const state = createGame(MAPS.vale, 1);
    expect(isBuildable(state, 2, 5, WIZARDS.generic_wizard)).toBe(true); // grass
    expect(isBuildable(state, 11, 8, WIZARDS.generic_wizard)).toBe(true); // pond
  });

  it('generic goblin shell is ground-only, like its specializations', () => {
    const state = createGame(MAPS.vale, 1);
    expect(isBuildable(state, 2, 5, WIZARDS.generic_goblin)).toBe(true);
    expect(isBuildable(state, 11, 8, WIZARDS.generic_goblin)).toBe(false); // pond
  });

  it('placing a generic def auto-rolls pendingSpecialize + specializeOptions', () => {
    const state = createGame(MAPS.vale, 5);
    const w = makeWizard(state, WIZARDS.generic_wizard, 2, 5);
    expect(w.pendingSpecialize).toBe(true);
    expect(w.family).toBe('wizard');
    expect(w.specializeOptions).toBeDefined();
    expect(w.specializeOptions!.length).toBeGreaterThan(0);
  });

  it('placing a real (non-generic) def never sets pendingSpecialize', () => {
    const state = createGame(MAPS.vale, 5);
    const w = makeWizard(state, WIZARDS.fire, 2, 5);
    expect(w.pendingSpecialize).toBeUndefined();
    expect(w.specializeOptions).toBeUndefined();
  });
});

describe('drawSpecialize water-gating', () => {
  it('standing on water guarantees Water among the wizard options', () => {
    const state = createGame(MAPS.vale, 10);
    for (let i = 0; i < 20; i++) {
      const draft = drawSpecialize(state, 'wizard', true);
      expect(draft.some((d) => d.id === 'water')).toBe(true);
    }
  });

  it('standing on ground NEVER offers Water', () => {
    const state = createGame(MAPS.vale, 11);
    for (let i = 0; i < 20; i++) {
      const draft = drawSpecialize(state, 'wizard', false);
      expect(draft.some((d) => d.id === 'water')).toBe(false);
    }
  });

  it('goblin family draw is unaffected by the water flag (no water goblin exists)', () => {
    const state = createGame(MAPS.vale, 12);
    const onLand = drawSpecialize(state, 'goblin', false);
    const onWater = drawSpecialize(state, 'goblin', true);
    expect(onLand.map((d) => d.id).sort()).toEqual(['dynamite', 'gong', 'slingshot']);
    expect(onWater.map((d) => d.id).sort()).toEqual(['dynamite', 'gong', 'slingshot']);
  });

  it('draws are distinct within a single call', () => {
    const state = createGame(MAPS.vale, 13);
    const draft = drawSpecialize(state, 'wizard', false);
    expect(new Set(draft.map((d) => d.id)).size).toBe(draft.length);
  });
});

describe('specializeWizard', () => {
  it('swaps def + recomputes stats, clears pending state, does not double-charge', () => {
    const state = createGame(MAPS.vale, 20);
    const w = makeWizard(state, WIZARDS.generic_wizard, 2, 5);
    const investedBefore = w.invested;
    specializeWizard(state, w, WIZARDS.fire);
    expect(w.def.id).toBe('fire');
    expect(w.pendingSpecialize).toBe(false);
    expect(w.specializeOptions).toBeUndefined();
    expect(w.stats.damage).toBe(WIZARDS.fire.damage);
    expect(w.invested).toBe(investedBefore); // specializing itself costs nothing extra
  });

  it('a specialized tower is family-locked (family persists across the def swap)', () => {
    const state = createGame(MAPS.vale, 21);
    const w = makeWizard(state, WIZARDS.generic_goblin, 2, 5);
    specializeWizard(state, w, WIZARDS.gong);
    expect(w.family).toBe('goblin');
  });
});

describe('pending towers do not fight', () => {
  it('updateWizards skips pendingSpecialize towers entirely', () => {
    const state = createGame(MAPS.vale, 30);
    const w = makeWizard(state, WIZARDS.generic_wizard, 2, 5);
    state.wizards.push(w);
    addEnemy(state, 'golem', w.x + 20, w.y);
    updateWizards(state, DT);
    expect(w.cooldown).toBe(0); // untouched — never entered the attack branch
    expect(state.projectiles.length).toBe(0);
  });
});

describe('Gong Goblin: Rattled support debuff', () => {
  it('Rattled increases damage taken from ALL sources multiplicatively', () => {
    const state = createGame(MAPS.vale, 40);
    fx.clear();
    const e = addEnemy(state, 'golem', 100, 100);
    const before = e.hp;
    dealDamage(state, e, 100, 'physical');
    const plainDealt = before - e.hp;

    const e2 = addEnemy(state, 'golem', 200, 100);
    e2.statuses.rattled = { t: 3, pct: 0.25 };
    const before2 = e2.hp;
    dealDamage(state, e2, 100, 'physical');
    const rattledDealt = before2 - e2.hp;

    expect(rattledDealt).toBeCloseTo(plainDealt * 1.25, 5);
  });

  it('a live Gong pulse applies Rattled to enemies in range', () => {
    const state = createGame(MAPS.vale, 41);
    fx.clear();
    const w = makeWizard(state, WIZARDS.gong, 5, 5);
    w.cooldown = 0;
    state.wizards.push(w);
    const e = addEnemy(state, 'golem', w.x + 30, w.y);
    updateWizards(state, DT);
    expect(e.statuses.rattled).toBeDefined();
    expect(e.statuses.rattled!.pct).toBeCloseTo(w.stats.rattlePct);
  });

  it('Rattled status decays and clears via updateEnemies', () => {
    const state = createGame(MAPS.vale, 42);
    const e = addEnemy(state, 'golem', 100, 100);
    e.statuses.rattled = { t: 0.01, pct: 0.25 };
    // pull off the track so movement/leak logic doesn't interfere with this status-only check
    e.dist = 1;
    updateEnemies(state, 0.02);
    expect(e.statuses.rattled).toBeUndefined();
  });
});

describe('Slingshot Goblin: physical damage always unresisted', () => {
  it('deals full damage to an enemy that resists every other element', () => {
    const state = createGame(MAPS.vale, 50);
    fx.clear();
    // golem resists fire/ice at 0.75x — physical isn't in its resist table at all
    const e = addEnemy(state, 'golem', 100, 100);
    const before = e.hp;
    dealDamage(state, e, 50, 'physical');
    expect(before - e.hp).toBeCloseTo(50, 5);
  });
});

describe('save/restore with a mix of pending and specialized towers', () => {
  it('a saved generic-def tower resumes as pending, with a fresh options roll', () => {
    const save: RunSave = {
      mapId: 'vale',
      seed: 77,
      gold: 300,
      lives: 20,
      round: 2,
      lastEliteRound: -5,
      cardIds: [],
      wizards: [
        { defId: 'fire', cx: 2, cy: 5, tiers: [0, 0], mode: 'first', invested: 100 },
        { defId: 'generic_goblin', cx: 3, cy: 5, tiers: [0, 0], mode: 'first', invested: 75 },
      ],
      stats: {
        kills: 0, leaks: 0, wavesCleared: 2,
        dmgByElement: { fire: 0, ice: 0, lightning: 0, water: 0, wind: 0, physical: 0 },
        reactions: { conduct: 0, shatter: 0, evaporate: 0, frozen: 0 },
        cardIds: [],
      },
    };
    const state = restoreRun(save)!;
    expect(state.wizards.length).toBe(2);

    const specialized = state.wizards.find((w) => w.cx === 2);
    expect(specialized!.def.id).toBe('fire');
    expect(specialized!.pendingSpecialize).toBeUndefined();

    const pending = state.wizards.find((w) => w.cx === 3);
    expect(pending!.def.id).toBe('generic_goblin');
    expect(pending!.pendingSpecialize).toBe(true);
    expect(pending!.family).toBe('goblin');
    expect(pending!.specializeOptions!.map((d) => d.id).sort()).toEqual(['dynamite', 'gong', 'slingshot']);
    expect(pending!.invested).toBe(75); // restored, not re-charged
  });
});

describe('Dynamite Goblin: reuses fire resistance on purpose', () => {
  it('is fully resisted by the fire-immune Ember Shade, same as Fire Mage', () => {
    const state = createGame(MAPS.vale, 51);
    fx.clear();
    const e = addEnemy(state, 'shade', 100, 100);
    const before = e.hp;
    dealDamage(state, e, 50, 'fire');
    expect(e.hp).toBe(before); // 0x multiplier -> immune, no damage at all
  });

  it('shares Fire Mage’s splash+burn kit shape via computeStats', () => {
    const stats = computeStats(WIZARDS.dynamite, [0, 0]);
    expect(stats.splash).toBeGreaterThan(0);
    expect(stats.burnDps).toBeGreaterThan(0);
  });
});
