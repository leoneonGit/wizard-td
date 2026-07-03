/** Phase 12: flyers + anti-air, tower silences, slimes, necromancer, thief, shieldbearer. */
import { describe, expect, it } from 'vitest';
import { createGame, makeWizard } from '../src/game/state';
import { dealDamage, updateEnemies, updateWizards } from '../src/game/combat';
import { pickTarget, canHitAir } from '../src/game/targeting';
import { ACT_WAVES } from '../src/data/waves';
import { ENEMIES } from '../src/data/enemies';
import { MAPS } from '../src/data/maps';
import { WIZARDS } from '../src/data/wizards';
import { fx } from '../src/render/effects';
import type { CardDef, Enemy } from '../src/game/types';

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

const pin = (e: Enemy) => { e.statuses.frozen = { t: 60 }; };

// ---------------------------------------------------------------- flyers

describe('flying enemies', () => {
  it('fly the straight entrance->exit line, not the road', () => {
    const state = createGame(MAPS.vale, 1);
    const g = addEnemy(state, 'gargoyle', 0);
    g.dist = 200;
    updateEnemies(state, DT);
    const a = state.track.posAt(0);
    const b = state.track.posAt(state.track.total);
    const lineLen = Math.hypot(b.x - a.x, b.y - a.y);
    const t = g.dist / lineLen;
    expect(g.x).toBeCloseTo(a.x + (b.x - a.x) * t, 1);
    expect(g.y).toBeCloseTo(a.y + (b.y - a.y) * t, 1);
    // definitively NOT the road position for that dist
    const road = state.track.posAt(g.dist);
    expect(Math.hypot(g.x - road.x, g.y - road.y)).toBeGreaterThan(5);
  });

  it('ground-slammers cannot target air; archers can', () => {
    expect(canHitAir(WIZARDS.rootgrasp)).toBe(false);
    expect(canHitAir(WIZARDS.elderroot)).toBe(false);
    expect(canHitAir(WIZARDS.water)).toBe(false); // tide
    expect(canHitAir(WIZARDS.longbow)).toBe(true);
    expect(canHitAir(WIZARDS.fire)).toBe(true);

    const state = createGame(MAPS.vale, 2);
    const tree = makeWizard(state, WIZARDS.rootgrasp, 2, 5);
    const bow = makeWizard(state, WIZARDS.longbow, 3, 5);
    state.wizards.push(tree, bow);
    const flyer = addEnemy(state, 'gargoyle');
    flyer.x = tree.x + 30;
    flyer.y = tree.y;
    flyer.dist = 100;
    pin(flyer); // hold position for the check
    expect(pickTarget(state, tree)).toBeUndefined();
    flyer.x = bow.x + 30;
    flyer.y = bow.y;
    expect(pickTarget(state, bow)?.id).toBe(flyer.id);
  });

  it('archers deal +50% to air; Skywatch stacks another +25%', () => {
    const state = createGame(MAPS.vale, 3);
    fx.clear();
    const bow = makeWizard(state, WIZARDS.longbow, 2, 5);
    const flyer = addEnemy(state, 'gargoyle');
    dealDamage(state, flyer, 10, 'physical', bow);
    expect(flyer.maxHp - flyer.hp).toBeCloseTo(15, 3); // 10 x 1.5

    const skywatch: CardDef = {
      id: 'pr_skywatch', name: '', desc: '', icon: '', element: 'all', rarity: 'uncommon',
      fx: { bonusVsFlying: { mult: 1.25 } },
    };
    state.draftMods.push(skywatch);
    const flyer2 = addEnemy(state, 'gargoyle');
    dealDamage(state, flyer2, 10, 'physical', bow);
    expect(flyer2.maxHp - flyer2.hp).toBeCloseTo(18.75, 3); // 10 x 1.5 x 1.25
  });
});

// ---------------------------------------------------------------- silences

describe('tower silences', () => {
  it('the Hexer curses a tower in range for 3s; it cannot attack until it wears off', () => {
    const state = createGame(MAPS.vale, 10);
    fx.clear();
    const w = makeWizard(state, WIZARDS.fire, 2, 5);
    state.wizards.push(w);
    // dist 340 puts him on the vertical road stretch ~80px from the fire mage at (2,5)
    const hexer = addEnemy(state, 'hexer', 340);
    pin(hexer);
    // initial cast delay is 0.6 x period = 3.6s
    for (let t = 0; t < 3.8; t += DT) updateEnemies(state, DT);
    expect(w.silencedT ?? 0).toBeGreaterThan(2.5);

    // silenced: an enemy walks by, the tower does nothing
    const grunt = addEnemy(state, 'grunt', 340);
    pin(grunt);
    updateWizards(state, DT);
    expect(state.projectiles.length).toBe(0);

    // curse expires -> business as usual
    w.silencedT = 0.001;
    updateWizards(state, DT); // burns off the remainder
    updateWizards(state, DT);
    expect(state.projectiles.length).toBeGreaterThan(0);
  });

  it("the Banshee's death-wail silences towers near her corpse only", () => {
    const state = createGame(MAPS.vale, 11);
    fx.clear();
    const near = makeWizard(state, WIZARDS.fire, 2, 5);
    const far = makeWizard(state, WIZARDS.ice, 20, 14);
    state.wizards.push(near, far);
    const banshee = addEnemy(state, 'banshee');
    banshee.x = near.x + 40;
    banshee.y = near.y;
    dealDamage(state, banshee, 99999, 'physical');
    expect(near.silencedT).toBeCloseTo(2.5, 3);
    expect(far.silencedT).toBeUndefined();
  });
});

// ---------------------------------------------------------------- goo, gold, wards, dead

describe('slime splits', () => {
  it('big -> 2 mid -> 4 small, seven kills total', () => {
    const state = createGame(MAPS.vale, 20);
    fx.clear();
    const big = addEnemy(state, 'slime_big', 300);
    dealDamage(state, big, 99999, 'physical');
    expect(state.enemies.filter((e) => e.def.id === 'slime_mid' && e.hp > 0).length).toBe(2);
    for (const mid of state.enemies.filter((e) => e.def.id === 'slime_mid' && e.hp > 0)) {
      dealDamage(state, mid, 99999, 'physical');
    }
    expect(state.enemies.filter((e) => e.def.id === 'slime_small' && e.hp > 0).length).toBe(4);
  });
});

describe('the Thief', () => {
  it('steals gold at the gate, no life lost, and turns back', () => {
    const state = createGame(MAPS.vale, 21);
    fx.clear();
    state.gold = 200;
    const thief = addEnemy(state, 'thief');
    thief.dist = state.track.total + 1;
    const lives = state.lives;
    updateEnemies(state, DT);
    expect(state.gold).toBe(175);
    expect(state.lives).toBe(lives);
    expect(thief.returning).toBe(true);
    expect(thief.hp).toBeGreaterThan(0); // still alive, sprinting home
  });

  it('killing him on the way back recovers the loot', () => {
    const state = createGame(MAPS.vale, 22);
    fx.clear();
    state.gold = 100;
    const thief = addEnemy(state, 'thief', 300);
    thief.returning = true;
    dealDamage(state, thief, 99999, 'physical');
    expect(state.gold).toBe(100 + 25 + Math.round(ENEMIES.thief.bounty * 1)); // loot + bounty
  });

  it('reaching the entrance escapes with the gold for good', () => {
    const state = createGame(MAPS.vale, 23);
    fx.clear();
    state.gold = 100;
    const thief = addEnemy(state, 'thief', 1);
    thief.returning = true;
    const kills = state.stats.kills;
    updateEnemies(state, DT);
    expect(state.enemies.includes(thief)).toBe(false); // gone
    expect(state.gold).toBe(100); // no refund
    expect(state.stats.kills).toBe(kills); // and no bounty either
  });
});

describe('the Shieldbearer', () => {
  it('caps single hits on nearby allies at 60; distant allies take full damage', () => {
    const state = createGame(MAPS.vale, 30);
    fx.clear();
    const bearer = addEnemy(state, 'shieldbearer', 100);
    pin(bearer);
    const nearAlly = addEnemy(state, 'knight', 110); // ~10px down the road, inside radius 110
    pin(nearAlly);
    const farAlly = addEnemy(state, 'knight', 800); // several bends away
    pin(farAlly);
    updateEnemies(state, DT); // computes wardCap

    dealDamage(state, nearAlly, 500, 'physical');
    expect(nearAlly.maxHp - nearAlly.hp).toBeCloseTo(60, 3); // warded
    dealDamage(state, farAlly, 500, 'physical');
    expect(farAlly.hp).toBeLessThanOrEqual(0); // obliterated
  });
});

describe('the Necromancer + roster wiring', () => {
  it('raises risen on his period (dropSpawns reuse)', () => {
    expect(ENEMIES.necromancer.dropSpawns?.type).toBe('risen');
    expect(ENEMIES.risen).toBeDefined();
  });

  it('every Phase 12 enemy marches somewhere in acts 2-3, and nothing resists physical', () => {
    const used = new Set<string>();
    for (const act of ACT_WAVES) for (const wave of act) for (const g of wave) used.add(g.type);
    for (const id of ['gargoyle', 'drake', 'hexer', 'banshee', 'slime_big', 'necromancer', 'thief', 'shieldbearer']) {
      expect(used.has(id), id).toBe(true);
    }
    for (const def of Object.values(ENEMIES)) {
      expect(def.resist.physical, def.id).toBeUndefined();
    }
  });
});
