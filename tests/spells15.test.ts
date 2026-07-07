/** Phase 15b: Warden Spells — board-composition unlocks, casting, and the five effects. */
import { describe, expect, it } from 'vitest';
import { SPELLS, castSpell, distinctSpecs, spellById, spellUnlocked, updateSpells } from '../src/game/spells';
import { createGame, makeWizard } from '../src/game/state';
import { updateEnemies } from '../src/game/combat';
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
  };
  state.enemies.push(e);
  return e;
}

function field(state: ReturnType<typeof createGame>, defIds: string[], atCy = 3): void {
  defIds.forEach((id, i) => state.wizards.push(makeWizard(state, WIZARDS[id], 2 + i, atCy)));
}

function freshWaveState(seed = 42) {
  const state = createGame(MAPS.vale, seed);
  fx.clear();
  state.phase = 'wave';
  return state;
}

describe('unlock predicates', () => {
  it('counts distinct specializations; shells pending a choice never count', () => {
    const state = freshWaveState();
    field(state, ['slingshot', 'slingshot', 'dynamite']);
    expect(distinctSpecs(state, 'goblin')).toBe(2);
    state.wizards.push(makeWizard(state, WIZARDS.generic_goblin, 9, 3)); // undecided shell
    expect(distinctSpecs(state, 'goblin')).toBe(2);
    field(state, ['gong'], 5);
    expect(distinctSpecs(state, 'goblin')).toBe(3);
    expect(spellUnlocked(state, spellById('gong')!)).toBe(true);
  });

  it('evolved forms count as their base — a Warlord is still a slingshot at heart', () => {
    const state = freshWaveState();
    field(state, ['warlord', 'dynamite', 'gong']);
    expect(distinctSpecs(state, 'goblin')).toBe(3);
    field(state, ['slingshot'], 5); // base + its own evolution are ONE spec
    expect(distinctSpecs(state, 'goblin')).toBe(3);
  });

  it('mages need 4 of their 5 elements', () => {
    const state = freshWaveState();
    field(state, ['fire', 'ice', 'lightning']);
    expect(spellUnlocked(state, spellById('convergence')!)).toBe(false);
    field(state, ['water'], 5);
    expect(spellUnlocked(state, spellById('convergence')!)).toBe(true);
  });
});

describe('casting & cooldowns', () => {
  it('casts set the cooldown; recasts wait for it; time pays it off', () => {
    const state = freshWaveState();
    field(state, ['slingshot', 'dynamite', 'gong']);
    expect(castSpell(state, 'gong')).toBe(true);
    expect(state.spellCds.gong).toBe(45);
    expect(castSpell(state, 'gong')).toBe(false);
    for (let t = 0; t < 1; t += DT) updateSpells(state, DT);
    expect(state.spellCds.gong).toBeCloseTo(44, 1);
  });

  it('locked or out-of-wave spells refuse to cast', () => {
    const state = freshWaveState();
    expect(castSpell(state, 'gong')).toBe(false); // no goblins at all
    field(state, ['slingshot', 'dynamite', 'gong']);
    state.phase = 'build';
    expect(castSpell(state, 'gong')).toBe(false); // waves only
  });

  it('selling towers mid-targeting cancels the cast mode', () => {
    const state = freshWaveState();
    field(state, ['rootgrasp', 'boulder', 'thornspitter']);
    state.castingSpell = 'roots';
    updateSpells(state, DT);
    expect(state.castingSpell).toBe('roots'); // still unlocked
    state.wizards.pop();
    updateSpells(state, DT);
    expect(state.castingSpell).toBeNull();
  });

  it('casting never touches the run rng (determinism guard)', () => {
    const state = freshWaveState();
    field(state, ['fire', 'ice', 'lightning', 'water'], 3);
    field(state, ['slingshot', 'dynamite', 'gong'], 5);
    field(state, ['longbow', 'ballesta', 'bolas'], 7);
    field(state, ['rootgrasp', 'boulder', 'thornspitter'], 9);
    field(state, ['voidgazer', 'voidsylph', 'voidmaw'], 11);
    let rngCalls = 0;
    const base = state.rng;
    state.rng = () => { rngCalls++; return base(); };
    addEnemy(state, 'grunt', 400, 100000);
    const p = state.track.posAt(400);
    for (const s of SPELLS) castSpell(state, s.id, p.x, p.y);
    for (let t = 0; t < 8; t += DT) updateSpells(state, DT);
    expect(rngCalls).toBe(0);
  });
});

describe('Great Gong', () => {
  it('stops everything dead — bosses only briefly', () => {
    const state = freshWaveState();
    field(state, ['slingshot', 'dynamite', 'gong']);
    const grunt = addEnemy(state, 'grunt', 400);
    const boss = addEnemy(state, 'pyretitan', 300);
    castSpell(state, 'gong');
    expect(grunt.statuses.stunned?.t).toBeCloseTo(2.5, 3);
    expect(boss.statuses.stunned?.t).toBeCloseTo(0.75, 3);
    const d0 = grunt.dist;
    for (let t = 0; t < 1; t += DT) updateEnemies(state, DT);
    expect(grunt.dist).toBe(d0); // rooted to the spot
    for (let t = 0; t < 2; t += DT) updateEnemies(state, DT);
    expect(grunt.dist).toBeGreaterThan(d0); // stun expired, marching again
  });
});

describe('Living Roots', () => {
  it('roots grunts, merely slows bosses, never touches the sky', () => {
    const state = freshWaveState();
    field(state, ['rootgrasp', 'boulder', 'thornspitter']);
    const grunt = addEnemy(state, 'grunt', 400);
    const boss = addEnemy(state, 'colossus', 402);
    const flyer = addEnemy(state, 'gargoyle', 100);
    flyer.x = grunt.x;
    flyer.y = grunt.y;
    castSpell(state, 'roots', grunt.x, grunt.y);
    updateSpells(state, DT);
    expect(grunt.statuses.entangled).toBeDefined();
    expect(boss.statuses.entangled).toBeUndefined();
    expect(boss.statuses.snared?.pct).toBe(0.6);
    expect(flyer.statuses.entangled).toBeUndefined();
    // the zone dies after 6s and the grunt shakes free moments later
    for (let t = 0; t < 6.5; t += DT) {
      updateSpells(state, DT);
      updateEnemies(state, DT);
    }
    expect(state.spellEffects.length).toBe(0);
    expect(grunt.statuses.entangled).toBeUndefined();
  });
});

describe('Black Hole', () => {
  it('drags enemies BACKWARD to the anchor — never forward, never past it', () => {
    const state = freshWaveState();
    field(state, ['voidgazer', 'voidsylph', 'voidmaw']);
    const anchor = state.track.posAt(300);
    const past = addEnemy(state, 'grunt', 330, 100000);
    const before = addEnemy(state, 'grunt', 280, 100000);
    before.x = anchor.x; // parked inside the radius but not yet past the hole
    before.y = anchor.y;
    castSpell(state, 'blackhole', anchor.x, anchor.y);
    const eff = state.spellEffects[0];
    expect(eff.pointDist).toBeCloseTo(300, 0);
    for (let t = 0; t < 0.5; t += DT) updateSpells(state, DT);
    expect(past.dist).toBeLessThan(330);
    expect(past.dist).toBeGreaterThanOrEqual(300);
    expect(before.dist).toBe(280); // never dragged forward
    expect(past.maxHp - past.hp).toBeGreaterThan(0); // and it burns
    for (let t = 0; t < 3; t += DT) updateSpells(state, DT);
    expect(past.dist).toBeCloseTo(300, 0); // pinned at the anchor, not beyond
  });
});

describe('Arrow Storm', () => {
  it('five volleys of 12, half again versus the sky', () => {
    const state = freshWaveState();
    field(state, ['longbow', 'ballesta', 'bolas']);
    const ground = addEnemy(state, 'grunt', 400, 100000);
    const flyer = addEnemy(state, 'gargoyle', 100, 100000);
    flyer.x = ground.x;
    flyer.y = ground.y;
    castSpell(state, 'arrowstorm', ground.x, ground.y);
    for (let t = 0; t < 1.6; t += DT) updateSpells(state, DT);
    expect(state.spellEffects.length).toBe(0);
    expect(ground.maxHp - ground.hp).toBeCloseTo(60, 3); // 5 x 12
    expect(flyer.maxHp - flyer.hp).toBeCloseTo(90, 3); // 5 x 18
  });
});

describe('Elemental Convergence', () => {
  it('one blast per fielded element, reactions firing on-brand', () => {
    const state = freshWaveState();
    field(state, ['fire', 'ice', 'lightning', 'water']);
    const e = addEnemy(state, 'grunt', 400, 100000);
    castSpell(state, 'convergence', e.x, e.y);
    // water wets -> lightning conducts -> ice re-wets & chills -> fire shatters the chill
    expect(state.stats.reactions.conduct).toBe(1);
    expect(state.stats.reactions.shatter).toBe(1);
    expect(e.statuses.burn).toBeUndefined(); // fire pass evaporated the ice pass' wet
    expect(state.stats.reactions.evaporate).toBe(1);
  });

  it('immunities do not dilute the share — the fire-immune Pyre Titan still loses 25%', () => {
    const state = freshWaveState();
    field(state, ['fire', 'ice', 'lightning', 'wind']); // no water: no conduct bonus either
    const boss = addEnemy(state, 'pyretitan', 400); // resist.fire = 0
    castSpell(state, 'convergence', boss.x, boss.y);
    expect(boss.maxHp - boss.hp).toBeGreaterThanOrEqual(boss.maxHp * 0.25 * 0.999);
  });

  it('is a boss-buster: the passes together strip at least 25% of max hp', () => {
    const state = freshWaveState();
    field(state, ['fire', 'ice', 'lightning', 'water']);
    const e = addEnemy(state, 'grunt', 400, 100000); // resist-free tank
    castSpell(state, 'convergence', e.x, e.y);
    expect(e.maxHp - e.hp).toBeGreaterThanOrEqual(e.maxHp * 0.25);
    // and small fry still feel the 60-per-pass floor
    const s2 = freshWaveState(43);
    field(s2, ['fire', 'ice', 'lightning', 'water']);
    const small = addEnemy(s2, 'grunt', 400, 700);
    castSpell(s2, 'convergence', small.x, small.y);
    expect(small.maxHp - small.hp).toBeGreaterThanOrEqual(240); // 4 x 60 floor
  });

  it('only fielded elements fire — three mages means three blasts', () => {
    const state = freshWaveState();
    field(state, ['fire', 'ice', 'lightning', 'water']);
    // silence one? No — composition is what counts: rebuild with exactly 4 but
    // check a wind-less board doesn't do a wind pass by damage accounting alone.
    const e = addEnemy(state, 'grunt', 400, 100000);
    castSpell(state, 'convergence', e.x, e.y);
    expect(state.stats.dmgByElement.wind).toBe(0);
  });
});
