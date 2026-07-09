/** Phase 15a: Warden's Grove — essence, perks, and their hooks into the run. */
import { describe, expect, it } from 'vitest';
import {
  NO_PERKS, PERKS, buyPerk, essenceForRun, freshMeta, loadMeta, perkCost, perksFromMeta,
} from '../src/game/meta';
import { START_GOLD, START_LIVES, createGame, draftCount, drawRelics, makeWizard } from '../src/game/state';
import { restoreRun, type RunSave } from '../src/game/save';
import { towerCost } from '../src/game/economy';
import { dealDamage } from '../src/game/combat';
import { updateWave } from '../src/game/waves';
import { ACT_SCALING } from '../src/data/waves';
import { ENEMIES } from '../src/data/enemies';
import { MAPS } from '../src/data/maps';
import { WIZARDS } from '../src/data/wizards';
import { fx } from '../src/render/effects';
import type { Enemy } from '../src/game/types';

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

describe('essence economy', () => {
  it('pays waves x2 + acts x15 + 40 for the win', () => {
    expect(essenceForRun({ wavesCleared: 28 }, 2, true)).toBe(141); // full clear
    expect(essenceForRun({ wavesCleared: 12 }, 1, false)).toBe(39); // died in act 2
    expect(essenceForRun({ wavesCleared: 4 }, 0, false)).toBe(8); // early act-1 loss
  });

  it('loadMeta in node (no localStorage) yields a fresh empty grove', () => {
    const m = loadMeta();
    expect(m.essence).toBe(0);
    expect(m.perks).toEqual({});
  });

  it('buyPerk enforces cost and max rank', () => {
    const m = freshMeta();
    m.essence = 100;
    expect(buyPerk(m, 'deep_pockets')).toBe(true); // 40
    expect(m.essence).toBe(60);
    expect(buyPerk(m, 'deep_pockets')).toBe(true); // 60
    expect(m.essence).toBe(0);
    expect(buyPerk(m, 'deep_pockets')).toBe(false); // 90 — can't afford
    m.essence = 500;
    expect(buyPerk(m, 'deep_pockets')).toBe(true); // rank 3
    expect(buyPerk(m, 'deep_pockets')).toBe(false); // maxed
    const def = PERKS.find((p) => p.id === 'deep_pockets')!;
    expect(perkCost(m, def)).toBeNull();
  });

  it('perksFromMeta maps ranks to run effects (attunement needs the perk)', () => {
    const m = freshMeta();
    m.perks = { deep_pockets: 2, thick_roots: 1, reroll: 2, bounty: 1, founder: 1, wider_draft: 1, trove: 1 };
    m.attunedElement = 'fire';
    let p = perksFromMeta(m);
    expect(p.startGold).toBe(20);
    expect(p.startLives).toBe(2);
    expect(p.rerollTokens).toBe(2);
    expect(p.bountyPct).toBe(5);
    expect(p.founderDiscount).toBe(true);
    expect(p.widerDraft).toBe(true);
    expect(p.trove).toBe(true);
    expect(p.attuneElement).toBeNull(); // element picked but perk unowned
    m.perks.attune = 2;
    p = perksFromMeta(m);
    expect(p.attuneElement).toBe('fire');
    expect(p.attunePct).toBe(10);
  });
});

describe('perk-free runs are untouched (the determinism firewall)', () => {
  it('createGame without perks matches the classic constants', () => {
    const state = createGame(MAPS.vale, 42);
    expect(state.gold).toBe(START_GOLD);
    expect(state.lives).toBe(START_LIVES);
    expect(state.rerollTokens).toBe(0);
    expect(state.perks).toEqual(NO_PERKS);
    expect(draftCount(state)).toBe(3);
  });
});

describe('perk hooks in the sim', () => {
  it('Deep Pockets / Thick Roots raise the starting line', () => {
    const state = createGame(MAPS.vale, 42, { ...NO_PERKS, startGold: 30, startLives: 6, rerollTokens: 2 });
    expect(state.gold).toBe(START_GOLD + 30);
    expect(state.lives).toBe(START_LIVES + 6);
    expect(state.rerollTokens).toBe(2);
  });

  it("Founder's Discount: first tower only, stacks with drafted discounts", () => {
    const state = createGame(MAPS.vale, 42, { ...NO_PERKS, founderDiscount: true });
    expect(towerCost(state, 100)).toBe(75);
    state.towerDiscountPct = 10; // drafted discount multiplies in
    expect(towerCost(state, 100)).toBe(68); // 100 * 0.9 * 0.75
    state.firstTowerBought = true;
    expect(towerCost(state, 100)).toBe(90);
  });

  it('Bounty Hunter fattens every kill', () => {
    const state = createGame(MAPS.vale, 42, { ...NO_PERKS, bountyPct: 10 });
    fx.clear();
    const grunt = addEnemy(state, 'grunt');
    const before = state.gold;
    dealDamage(state, grunt, 99999, 'physical');
    const actB = ACT_SCALING[0].bounty;
    expect(state.gold - before).toBe(Math.round(ENEMIES.grunt.bounty * actB * 1.1));
  });

  it('Elemental Attunement boosts ONLY the attuned element', () => {
    const state = createGame(MAPS.vale, 42, { ...NO_PERKS, attuneElement: 'fire', attunePct: 10 });
    fx.clear();
    const fire = makeWizard(state, WIZARDS.fire, 3, 3);
    const ice = makeWizard(state, WIZARDS.ice, 4, 3);
    const a = addEnemy(state, 'grunt');
    a.hp = a.maxHp = 10000;
    dealDamage(state, a, 100, 'fire', fire);
    expect(a.maxHp - a.hp).toBeCloseTo(110, 3);
    const b = addEnemy(state, 'grunt');
    b.hp = b.maxHp = 10000;
    dealDamage(state, b, 100, 'ice', ice);
    expect(b.maxHp - b.hp).toBeCloseTo(100, 3); // not attuned
  });

  it('Wider Draft widens card drafts to 4', () => {
    const state = createGame(MAPS.vale, 42, { ...NO_PERKS, widerDraft: true });
    expect(draftCount(state)).toBe(4);
  });

  it('Treasure Trove: a treasure clear offers 3 relics instead of 2', () => {
    for (const trove of [false, true]) {
      const state = createGame(MAPS.vale, 42, { ...NO_PERKS, trove });
      state.phase = 'wave';
      state.waveKind = 'treasure';
      state.pendingSpawns = [];
      state.enemies = [];
      updateWave(state, 1 / 60);
      expect(state.phase).toBe('relic');
      expect(state.pendingRelicDraft!.length).toBe(trove ? 3 : 2);
    }
  });

  it('drawRelics(3) yields three distinct relics', () => {
    const state = createGame(MAPS.vale, 42);
    const picks = drawRelics(state, 3);
    expect(new Set(picks.map((r) => r.id)).size).toBe(3);
  });
});

describe('save compatibility', () => {
  it('a pre-Grove RunSave restores with sensible defaults', () => {
    const legacy: RunSave = {
      mapId: 'vale', seed: 7, gold: 300, lives: 15, round: 3, act: 0,
      lastEliteRound: -5, cardIds: [],
      wizards: [{ defId: 'fire', cx: 3, cy: 3, tiers: [1, 0], mode: 'first', invested: 90 }],
      stats: {
        kills: 10, leaks: 1, wavesCleared: 3,
        dmgByElement: { fire: 100, ice: 0, lightning: 0, water: 0, wind: 0, physical: 0, void: 0 },
        reactions: { conduct: 0, shatter: 0, evaporate: 0, frozen: 0 },
        cardIds: [],
      },
    };
    const state = restoreRun(legacy, { ...NO_PERKS, rerollTokens: 2 })!;
    expect(state).not.toBeNull();
    expect(state.gold).toBe(300);
    expect(state.rerollTokens).toBe(2); // perk tokens granted to the old save
    expect(state.firstTowerBought).toBe(true); // it has towers — the discount is spent
    expect(state.spellCds).toEqual({});
  });
});
