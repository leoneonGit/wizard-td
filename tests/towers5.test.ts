/** Phase 5: archers + ents (pierce / entangle / ground-snare) and the proc card engine. */
import { describe, expect, it } from 'vitest';
import { createGame, drawSpecialize, makeWizard, computeStats } from '../src/game/state';
import { updateWizards, updateProjectiles, updateEnemies, dealDamage } from '../src/game/combat';
import { attackProcMult, frenzyRateMul } from '../src/game/procs';
import { updateWave } from '../src/game/waves';
import { ROUND_BONUS_BASE, ROUND_BONUS_PER_ROUND } from '../src/data/waves';
import { WIZARDS } from '../src/data/wizards';
import { ENEMIES } from '../src/data/enemies';
import { MAPS } from '../src/data/maps';
import { fx } from '../src/render/effects';
import type { CardDef, Enemy } from '../src/game/types';

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

function fresh(seed: number) {
  const state = createGame(MAPS.vale, seed);
  state.blockers = []; // no LOS interference — these tests are about mechanics, not props
  fx.clear();
  return state;
}

// ---------------------------------------------------------------- specialize draws

describe('archer/tree specialize draws', () => {
  it('archer family draws its three marksmen', () => {
    const state = fresh(1);
    const draft = drawSpecialize(state, 'archer', false);
    expect(draft.map((d) => d.id).sort()).toEqual(['ballesta', 'bolas', 'longbow']);
  });

  it('tree family draws its three ents', () => {
    const state = fresh(2);
    const draft = drawSpecialize(state, 'tree', false);
    expect(draft.map((d) => d.id).sort()).toEqual(['boulder', 'rootgrasp', 'thornspitter']);
  });
});

// ---------------------------------------------------------------- pierce

describe('Ballesta: pierce bolts', () => {
  it('one bolt damages every enemy along the line, each exactly once', () => {
    const state = fresh(10);
    const w = makeWizard(state, WIZARDS.ballesta, 5, 5); // center (220, 220)
    state.wizards.push(w);
    const e1 = addEnemy(state, 'grunt', w.x + 40, w.y);
    const e2 = addEnemy(state, 'grunt', w.x + 70, w.y);
    const e3 = addEnemy(state, 'grunt', w.x + 110, w.y); // outside range, inside bolt overshoot

    updateWizards(state, DT);
    expect(state.projectiles.length).toBe(1);
    expect(state.projectiles[0].pierce).toBeDefined();

    for (let i = 0; i < 60; i++) updateProjectiles(state, DT);
    expect(state.projectiles.length).toBe(0); // bolt spent at max distance

    const dmg = w.stats.damage;
    expect(e1.maxHp - e1.hp).toBeCloseTo(dmg, 4);
    expect(e2.maxHp - e2.hp).toBeCloseTo(dmg, 4);
    expect(e3.maxHp - e3.hp).toBeCloseTo(dmg, 4);
  });
});

// ---------------------------------------------------------------- entangle

describe('Orc Trapper: entangle root', () => {
  function rootOne(seed: number, type: string) {
    const state = fresh(seed);
    const w = makeWizard(state, WIZARDS.bolas, 5, 5);
    state.wizards.push(w);
    const e = addEnemy(state, type, w.x + 40, w.y);
    updateWizards(state, DT);
    for (let i = 0; i < 90 && state.projectiles.length > 0; i++) updateProjectiles(state, DT);
    return { state, w, e };
  }

  it('roots the target in place and starts an immunity window', () => {
    const { state, e } = rootOne(20, 'grunt');
    expect(e.statuses.entangled).toBeDefined();
    expect(e.statuses.entangled!.t).toBeCloseTo(1.0, 5);
    expect(e.entangleCd).toBeGreaterThan(1.0);

    // rooted: zero movement
    const distBefore = e.dist;
    e.dist = 100; // keep well inside the track
    updateEnemies(state, DT);
    expect(e.dist).toBe(100);
    void distBefore;
  });

  it('cannot re-root during the immunity window', () => {
    const { state, w, e } = rootOne(21, 'grunt');
    delete e.statuses.entangled; // root wore off, immunity remains
    w.cooldown = 0;
    updateWizards(state, DT);
    for (let i = 0; i < 90 && state.projectiles.length > 0; i++) updateProjectiles(state, DT);
    expect(e.statuses.entangled).toBeUndefined();
  });

  it('bosses are rooted for only 30% of the duration', () => {
    const { e } = rootOne(22, 'golemling');
    expect(e.statuses.entangled).toBeDefined();
    expect(e.statuses.entangled!.t).toBeCloseTo(0.3, 5);
  });
});

// ---------------------------------------------------------------- rootgrasp / snare

describe('Rootgrasp Ent: instant ground eruption + snare', () => {
  it('damages instantly with no projectile and applies its own snare (never chill)', () => {
    const state = fresh(30);
    const w = makeWizard(state, WIZARDS.rootgrasp, 5, 5);
    state.wizards.push(w);
    const e = addEnemy(state, 'grunt', w.x + 40, w.y);
    updateWizards(state, DT);
    expect(state.projectiles.length).toBe(0); // roots erupt — nothing flies
    expect(e.maxHp - e.hp).toBeCloseTo(w.stats.damage, 4);
    expect(e.statuses.snared).toBeDefined();
    expect(e.statuses.snared!.pct).toBeCloseTo(0.25, 5);
    expect(e.statuses.chill).toBeUndefined(); // deliberately outside the freeze economy
  });

  it('snare slows movement by its pct', () => {
    const state = fresh(31);
    const e = addEnemy(state, 'grunt', 100, 100);
    e.dist = 100;
    e.statuses.snared = { t: 1, pct: 0.25 };
    updateEnemies(state, DT);
    expect(e.dist).toBeCloseTo(100 + e.def.speed * 0.75 * DT, 5);
  });
});

// ---------------------------------------------------------------- proc engine

const OVERDRAW: CardDef = {
  id: 't_overdraw', name: '', desc: '', icon: '', element: 'physical', family: 'archer',
  rarity: 'rare', fx: { critEveryN: { n: 4, mult: 2.5 } },
};

describe('rhythm procs', () => {
  it('critEveryN: every 4th attack from matching towers multiplies damage', () => {
    const state = fresh(40);
    state.draftMods.push(OVERDRAW);
    const w = makeWizard(state, WIZARDS.longbow, 5, 5);
    expect(attackProcMult(state, w)).toBe(1);
    expect(attackProcMult(state, w)).toBe(1);
    expect(attackProcMult(state, w)).toBe(1);
    expect(attackProcMult(state, w)).toBe(2.5); // the 4th shot
    expect(attackProcMult(state, w)).toBe(1);
  });

  it('critEveryN ignores towers outside the card scope', () => {
    const state = fresh(41);
    state.draftMods.push(OVERDRAW);
    const w = makeWizard(state, WIZARDS.slingshot, 5, 5); // physical but goblin
    for (let i = 0; i < 8; i++) expect(attackProcMult(state, w)).toBe(1);
  });

  it('frenzy windows speed up matching towers only while open', () => {
    const state = fresh(42);
    state.draftMods.push({
      id: 't_frenzy', name: '', desc: '', icon: '', element: 'all', rarity: 'rare',
      fx: { frenzy: { period: 10, duration: 3, rateMul: 0.5 } },
    });
    const w = makeWizard(state, WIZARDS.longbow, 5, 5);
    state.clock = 1; // inside the window
    expect(frenzyRateMul(state, w)).toBe(0.5);
    state.clock = 5; // outside
    expect(frenzyRateMul(state, w)).toBe(1);
    state.clock = 11.5; // next period's window
    expect(frenzyRateMul(state, w)).toBe(0.5);
  });
});

describe('on-kill chains', () => {
  it('onKillExplode: kills by matching towers detonate and damage neighbors', () => {
    const state = fresh(50);
    state.draftMods.push({
      id: 't_powder', name: '', desc: '', icon: '', element: 'physical', family: 'goblin',
      rarity: 'rare', fx: { onKillExplode: { damage: 30, radius: 55 } },
    });
    const w = makeWizard(state, WIZARDS.slingshot, 5, 5);
    const victim = addEnemy(state, 'grunt', 100, 100);
    const bystander = addEnemy(state, 'grunt', 130, 100);
    dealDamage(state, victim, 99999, 'physical', w);
    expect(victim.hp).toBeLessThanOrEqual(0);
    expect(bystander.maxHp - bystander.hp).toBeCloseTo(30, 4);
  });

  it('onKillExplode does NOT trigger for kills by out-of-scope towers', () => {
    const state = fresh(51);
    state.draftMods.push({
      id: 't_powder', name: '', desc: '', icon: '', element: 'physical', family: 'goblin',
      rarity: 'rare', fx: { onKillExplode: { damage: 30, radius: 55 } },
    });
    const w = makeWizard(state, WIZARDS.longbow, 5, 5); // archer, not goblin
    const victim = addEnemy(state, 'grunt', 100, 100);
    const bystander = addEnemy(state, 'grunt', 130, 100);
    dealDamage(state, victim, 99999, 'physical', w);
    expect(bystander.hp).toBe(bystander.maxHp);
  });

  it('onKillGold pays out and onKillStackDamage ramps (capped)', () => {
    const state = fresh(52);
    state.draftMods.push({
      id: 't_gold', name: '', desc: '', icon: '', element: 'all', rarity: 'rare',
      fx: { onKillGold: { chance: 1, amount: 3 }, onKillStackDamage: { pct: 0.2, capPct: 0.3 } },
    });
    const e = addEnemy(state, 'grunt', 100, 100);
    const goldBefore = state.gold;
    dealDamage(state, e, 99999, 'physical');
    expect(state.gold).toBe(goldBefore + e.def.bounty + 3);
    expect(state.killStackPct).toBeCloseTo(0.2, 5);

    const e2 = addEnemy(state, 'grunt', 100, 100);
    dealDamage(state, e2, 99999, 'physical');
    expect(state.killStackPct).toBeCloseTo(0.3, 5); // capped, not 0.4
  });

  it('killStackPct feeds back into attack damage', () => {
    const state = fresh(53);
    state.killStackPct = 30;
    const w = makeWizard(state, WIZARDS.longbow, 5, 5);
    expect(attackProcMult(state, w)).toBeCloseTo(1.3, 5);
  });

  it('spreadBurnOnDeath passes the flame to the nearest unburned neighbor', () => {
    const state = fresh(54);
    state.draftMods.push({
      id: 't_wildfire', name: '', desc: '', icon: '', element: 'fire', rarity: 'rare',
      fx: { spreadBurnOnDeath: true },
    });
    const victim = addEnemy(state, 'grunt', 100, 100);
    victim.statuses.burn = { t: 2, dps: 8 };
    const neighbor = addEnemy(state, 'grunt', 140, 100);
    dealDamage(state, victim, 99999, 'physical'); // even an unattributed death spreads it
    expect(neighbor.statuses.burn).toBeDefined();
    expect(neighbor.statuses.burn!.dps).toBe(8);
  });
});

describe('conditional hunters', () => {
  it('bonusVsStatus amplifies damage only against carriers', () => {
    const state = fresh(60);
    state.draftMods.push({
      id: 't_opp', name: '', desc: '', icon: '', element: 'all', rarity: 'uncommon',
      fx: { bonusVsStatus: { status: 'entangled', mult: 1.4 } },
    });
    const w = makeWizard(state, WIZARDS.longbow, 5, 5);
    const plain = addEnemy(state, 'grunt', 100, 100);
    dealDamage(state, plain, 10, 'physical', w);
    expect(plain.maxHp - plain.hp).toBeCloseTo(10, 4);

    const rooted = addEnemy(state, 'grunt', 200, 100);
    rooted.statuses.entangled = { t: 1 };
    dealDamage(state, rooted, 10, 'physical', w);
    expect(rooted.maxHp - rooted.hp).toBeCloseTo(14, 4);
  });

  it('bonusVsHealthy only applies at (near) full health', () => {
    const state = fresh(61);
    state.draftMods.push({
      id: 't_fb', name: '', desc: '', icon: '', element: 'physical', rarity: 'uncommon',
      fx: { bonusVsHealthy: { threshold: 0.99, mult: 1.3 } },
    });
    const w = makeWizard(state, WIZARDS.longbow, 5, 5);
    const e = addEnemy(state, 'grunt', 100, 100);
    dealDamage(state, e, 10, 'physical', w); // full HP -> boosted
    expect(e.maxHp - e.hp).toBeCloseTo(13, 4);
    const hpAfterFirst = e.hp;
    dealDamage(state, e, 10, 'physical', w); // now damaged -> plain
    expect(hpAfterFirst - e.hp).toBeCloseTo(10, 4);
  });
});

describe('economy engines', () => {
  it('interest pays at wave clear, capped', () => {
    const state = fresh(70);
    state.draftMods.push({
      id: 't_int', name: '', desc: '', icon: '', element: 'all', rarity: 'rare',
      fx: { interest: { per: 15, cap: 30 } },
    });
    state.phase = 'wave';
    state.gold = 1000; // far past the cap threshold
    state.pendingSpawns = [];
    state.enemies = [];
    updateWave(state, DT);
    const roundBonus = ROUND_BONUS_BASE + ROUND_BONUS_PER_ROUND * state.round;
    expect(state.gold).toBe(1000 + roundBonus + 30);
  });
});

describe('family-scoped stat cards', () => {
  it('an archer damage card boosts archers but not same-element goblins', () => {
    const card: CardDef = {
      id: 't_arc', name: '', desc: '', icon: '', element: 'physical', family: 'archer',
      rarity: 'common', mod: { damage: 4 },
    };
    const arc = computeStats(WIZARDS.longbow, [0, 0], [card]);
    expect(arc.damage).toBe(WIZARDS.longbow.damage + 4);
    const gob = computeStats(WIZARDS.slingshot, [0, 0], [card]);
    expect(gob.damage).toBe(WIZARDS.slingshot.damage);
  });
});
