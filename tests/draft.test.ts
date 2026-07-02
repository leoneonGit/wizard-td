import { describe, expect, it } from 'vitest';
import { createGame, drawDraft, applyCard, makeWizard, computeStats } from '../src/game/state';
import { restoreRun, type RunSave } from '../src/game/save';
import { updateWizards } from '../src/game/combat';
import { towerCost } from '../src/game/economy';
import { CARDS } from '../src/data/cards';
import { WIZARDS } from '../src/data/wizards';
import { ENEMIES } from '../src/data/enemies';
import { MAPS } from '../src/data/maps';
import { fx } from '../src/render/effects';
import type { Enemy } from '../src/game/types';

const card = (id: string) => CARDS.find((c) => c.id === id)!;

describe('card drafts', () => {
  it('is deterministic per seed and duplicate-free', () => {
    const a = createGame(MAPS.vale, 42);
    const b = createGame(MAPS.vale, 42);
    const draftA = drawDraft(a);
    const draftB = drawDraft(b);
    expect(draftA.map((c) => c.id)).toEqual(draftB.map((c) => c.id));
    expect(new Set(draftA.map((c) => c.id)).size).toBe(3);
  });

  it('element card buffs ALL mages of that element, including later ones', () => {
    const state = createGame(MAPS.vale, 7);
    const w1 = makeWizard(state, WIZARDS.fire, 2, 5);
    state.wizards.push(w1);
    const base = w1.stats.damage;

    applyCard(state, card('fire_dmg1')); // +4 fire damage
    expect(w1.stats.damage).toBe(base + 4);

    const w2 = makeWizard(state, WIZARDS.fire, 3, 5); // placed AFTER the draft
    expect(w2.stats.damage).toBe(base + 4);

    const ice = makeWizard(state, WIZARDS.ice, 2, 6); // other element untouched
    expect(ice.stats.damage).toBe(WIZARDS.ice.damage);
  });

  it('unique cards leave the pool once picked', () => {
    const state = createGame(MAPS.vale, 9);
    applyCard(state, card('rx_conduct1'));
    for (let i = 0; i < 30; i++) {
      const draft = drawDraft(state);
      expect(draft.map((c) => c.id)).not.toContain('rx_conduct1');
    }
  });

  it('rare-only drafts (elite reward) contain only rares', () => {
    const state = createGame(MAPS.vale, 11);
    for (let i = 0; i < 10; i++) {
      const draft = drawDraft(state, 3, true);
      for (const c of draft) expect(c.rarity).toBe('rare');
    }
  });

  it('reaction and econ cards mutate run state', () => {
    const state = createGame(MAPS.vale, 3);
    applyCard(state, card('rx_shatter1'));
    expect(state.reaction.shatterMult).toBe(2.6);

    const goldBefore = state.gold;
    applyCard(state, card('eco_gold1'));
    expect(state.gold).toBe(goldBefore + 60);

    applyCard(state, card('eco_disc1'));
    expect(towerCost(state, 100)).toBe(88);
  });

  it('wet-immune elite enemies ignore tide wetting', () => {
    fx.clear();
    const state = createGame(MAPS.vale, 5);
    const w = makeWizard(state, WIZARDS.water, 11, 8);
    w.cooldown = 0;
    state.wizards.push(w);
    const def = ENEMIES.golem;
    const e: Enemy = {
      id: 1, def, hp: def.hp, maxHp: def.hp, dist: 500,
      x: w.x + 30, y: w.y, statuses: {}, wobble: 0, animT: 0, angle: 0, hitFlash: 0,
      immunities: ['wet'],
    };
    state.enemies.push(e);
    updateWizards(state, 1 / 60);
    expect(e.statuses.wet).toBeUndefined();
    expect(e.hp).toBeLessThan(e.maxHp); // damage still lands
  });

  it('restoreRun round-trips gold, towers and drafted cards', () => {
    const save: RunSave = {
      mapId: 'vale',
      seed: 123,
      gold: 555,
      lives: 19,
      round: 6,
      lastEliteRound: 4,
      cardIds: ['fire_dmg1', 'eco_bounty1'],
      wizards: [
        { defId: 'fire', cx: 2, cy: 5, tiers: [1, 0], mode: 'strong', invested: 170 },
        { defId: 'water', cx: 11, cy: 8, tiers: [0, 0], mode: 'first', invested: 120 },
      ],
      stats: {
        kills: 40, leaks: 2, wavesCleared: 6,
        dmgByElement: { fire: 100, ice: 0, lightning: 0, water: 50, wind: 0 },
        reactions: { conduct: 3, shatter: 8, evaporate: 1, frozen: 2 },
        cardIds: ['fire_dmg1', 'eco_bounty1'],
      },
    };
    const state = restoreRun(save)!;
    expect(state).not.toBeNull();
    expect(state.gold).toBe(555);
    expect(state.lives).toBe(19);
    expect(state.round).toBe(6);
    expect(state.wizards.length).toBe(2);
    expect(state.bountyBonus).toBe(1); // eco_bounty1 replayed
    const fire = state.wizards.find((w) => w.def.id === 'fire')!;
    // base 14 + tier1 (+6) + card (+4)
    expect(fire.stats.damage).toBe(24);
    expect(fire.mode).toBe('strong');
  });
});
