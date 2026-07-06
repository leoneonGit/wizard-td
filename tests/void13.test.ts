/** Phase 13f: the Void tower family + the Warlord's stun grenades + the 8-wave act 1. */
import { describe, expect, it } from 'vitest';
import { createGame, makeWizard, drawSpecialize } from '../src/game/state';
import { dealDamage, updateEnemies, updateWizards } from '../src/game/combat';
import { pickTarget } from '../src/game/targeting';
import { ENEMIES } from '../src/data/enemies';
import { MAPS } from '../src/data/maps';
import { WIZARDS, SHOP_ORDER, specializationsFor } from '../src/data/wizards';
import { ELEMENTS } from '../src/data/elements';
import { fx } from '../src/render/effects';
import type { Enemy } from '../src/game/types';

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

describe('the Void family roster', () => {
  it('is in the shop and draws its three specializations', () => {
    expect(SHOP_ORDER).toContain('generic_void');
    expect(WIZARDS.generic_void.isGeneric).toBe(true);
    const specs = specializationsFor('void').map((d) => d.id).sort();
    expect(specs).toEqual(['voidgazer', 'voidmaw', 'voidsylph']);
    expect(ELEMENTS.void).toBeDefined();
  });

  it('void damage is never resisted — even the fire-proof shade takes it whole', () => {
    const state = createGame(MAPS.vale, 50);
    fx.clear();
    const shade = addEnemy(state, 'shade'); // resist.fire = 0
    dealDamage(state, shade, 10, 'void');
    expect(shade.maxHp - shade.hp).toBeCloseTo(10, 3);
  });

  it('but armor still shrugs it off (only physical cracks shells)', () => {
    const state = createGame(MAPS.vale, 51);
    fx.clear();
    const brute = addEnemy(state, 'orcbrute'); // armored
    const shellBefore = brute.armorHp!;
    dealDamage(state, brute, 100, 'void');
    expect(brute.hp).toBe(brute.maxHp); // nothing through
    expect(shellBefore - brute.armorHp!).toBeCloseTo(10, 3); // 10% chip
  });

  it('the Void Sylph reaches ANY enemy on the map, through the trees', () => {
    const state = createGame(MAPS.vale, 52);
    fx.clear();
    expect(WIZARDS.voidsylph.ignoreLOS).toBe(true);
    const sylph = makeWizard(state, WIZARDS.voidsylph, 2, 5);
    state.wizards.push(sylph);
    const far = addEnemy(state, 'grunt', state.track.total - 10); // the far gate
    pin(far);
    expect(pickTarget(state, sylph)?.id).toBe(far.id);
  });

  it('the Voidmaw splashes, the Voidgazer does not', () => {
    expect(WIZARDS.voidmaw.splash).toBeGreaterThan(0);
    expect(WIZARDS.voidmaw.range).toBeLessThan(100); // arm's length only
    expect(WIZARDS.voidgazer.splash).toBe(0);
  });
});

describe("the Warlord's stun grenades", () => {
  it('silence a random tower anywhere on the map, every couple of seconds', () => {
    const state = createGame(MAPS.vale, 60);
    fx.clear();
    const w = makeWizard(state, WIZARDS.fire, 20, 14); // far corner — range is no shield
    state.wizards.push(w);
    const boss = addEnemy(state, 'warlord', 100);
    pin(boss);
    expect(boss.def.hexes?.period).toBe(2);
    // initial fuse is 0.6 x period = 1.2s
    for (let t = 0; t < 1.4; t += DT) updateEnemies(state, DT);
    expect(w.silencedT ?? 0).toBeGreaterThan(2.5);

    // silenced: an enemy walks by, the tower does nothing
    const grunt = addEnemy(state, 'grunt', 100);
    grunt.x = w.x + 30;
    grunt.y = w.y;
    pin(grunt);
    updateWizards(state, DT);
    expect(state.projectiles.length).toBe(0);
  });
});

describe('specialize draw for the void family', () => {
  it('offers only void towers', () => {
    const state = createGame(MAPS.vale, 61);
    const picks = drawSpecialize(state, 'void', false);
    expect(picks.length).toBeGreaterThan(1);
    for (const d of picks) expect(d.family).toBe('void');
  });
});
