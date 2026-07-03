/** Phase 6: relics, branching wave map, events, tower evolutions. */
import { describe, expect, it } from 'vitest';
import {
  createGame, applyRelic, relicSpecial, drawRelics, ensureNodes, drawEvent,
  canEvolve, evolveWizard, makeWizard, drawSpecialize, computeStats,
} from '../src/game/state';
import { resolveEventChoice } from '../src/game/events';
import { startWave, updateWave } from '../src/game/waves';
import { dealDamage } from '../src/game/combat';
import { attackProcMult } from '../src/game/procs';
import { restoreRun, type RunSave } from '../src/game/save';
import { RELICS } from '../src/data/relics';
import { EVENTS } from '../src/data/events';
import { WIZARDS, EVOLUTIONS } from '../src/data/wizards';
import { ENEMIES } from '../src/data/enemies';
import { MAPS } from '../src/data/maps';
import { fx } from '../src/render/effects';
import type { Enemy } from '../src/game/types';

const DT = 1 / 60;

function relic(id: string) {
  return RELICS.find((r) => r.id === id)!;
}

function addEnemy(state: ReturnType<typeof createGame>, type: string, x: number, y: number): Enemy {
  const def = ENEMIES[type];
  const e: Enemy = {
    id: state.nextId++, def, hp: def.hp, maxHp: def.hp, dist: 500,
    x, y, statuses: {}, wobble: 0, animT: 0, angle: 0, hitFlash: 0,
  };
  state.enemies.push(e);
  return e;
}

// ---------------------------------------------------------------- relics

describe('relics', () => {
  it('payload relics push a hidden card and buff towers immediately', () => {
    const state = createGame(MAPS.vale, 1);
    const w = makeWizard(state, WIZARDS.fire, 2, 5);
    state.wizards.push(w);
    const before = w.stats.damage;
    applyRelic(state, relic('sharpening_stone'));
    expect(w.stats.damage).toBe(before + 2); // recomputed on pickup
    expect(state.draftMods.some((c) => c.id === 'relic_sharp')).toBe(true);
  });

  it('special hooks are queryable and duplicates are rejected', () => {
    const state = createGame(MAPS.vale, 2);
    expect(relicSpecial(state, 'spawnChill')).toBe(false);
    applyRelic(state, relic('frozen_core'));
    applyRelic(state, relic('frozen_core'));
    expect(state.relics.length).toBe(1);
    expect(relicSpecial(state, 'spawnChill')).toBe(true);
  });

  it('drawRelics excludes owned relics and returns distinct picks', () => {
    const state = createGame(MAPS.vale, 3);
    applyRelic(state, relic('golden_idol'));
    for (let i = 0; i < 10; i++) {
      const picks = drawRelics(state, 2);
      expect(picks.length).toBe(2);
      expect(new Set(picks.map((r) => r.id)).size).toBe(2);
      expect(picks.some((r) => r.id === 'golden_idol')).toBe(false);
    }
  });

  it('Frozen Core: spawned enemies arrive pre-chilled', () => {
    const state = createGame(MAPS.vale, 4);
    applyRelic(state, relic('frozen_core'));
    state.nodeChoice = 'normal';
    startWave(state);
    for (let i = 0; i < 50 && state.enemies.length === 0; i++) updateWave(state, 0.5);
    expect(state.enemies.length).toBeGreaterThan(0);
    expect(state.enemies[0].statuses.chill).toBeDefined();
    expect(state.enemies[0].statuses.chill!.stacks).toBe(1);
  });

  it('Blood Chalice: every 40th kill restores a life', () => {
    const state = createGame(MAPS.vale, 5);
    fx.clear();
    applyRelic(state, relic('blood_chalice'));
    state.stats.kills = 39;
    const lives = state.lives;
    const e = addEnemy(state, 'grunt', 100, 100);
    dealDamage(state, e, 99999, 'physical');
    expect(state.stats.kills).toBe(40);
    expect(state.lives).toBe(lives + 1);
  });
});

// ---------------------------------------------------------------- branching map

describe('branching wave map', () => {
  it('early rounds offer only a normal node; the roll is stable within a round', () => {
    const state = createGame(MAPS.vale, 10);
    ensureNodes(state);
    expect(state.nextNodes).toEqual(['normal']);
    expect(state.nodePicked).toBe(true); // nothing to choose — nothing owed
    const first = [...state.nextNodes];
    ensureNodes(state);
    expect(state.nextNodes).toEqual(first); // idempotent per round
  });

  it('from wave 3 on there is ALWAYS a real choice, and it blocks the wave start', () => {
    for (const seed of [1, 2, 3, 4, 5, 6, 7]) {
      const state = createGame(MAPS.vale, seed);
      for (let round = 2; round < 12; round++) {
        state.round = round;
        ensureNodes(state);
        expect(state.nextNodes.length, `seed ${seed} round ${round}`).toBeGreaterThanOrEqual(2);
        expect(state.nodePicked).toBe(false); // choice owed
        expect(startWave(state)).toBe(false); // Start refuses until the path is picked
        state.nodePicked = true;
      }
    }
  });

  it('resolving an event counts as the round’s path choice', () => {
    const state = createGame(MAPS.vale, 13);
    state.round = 3;
    ensureNodes(state);
    state.nodePicked = false;
    resolveEventChoice(state, 'skip');
    expect(state.nodePicked).toBe(true);
    expect(state.nodeChoice).toBe('normal');
  });

  it('elite node forces a modifier and pays a rare draft on clear', () => {
    const state = createGame(MAPS.vale, 11);
    state.round = 4;
    state.nodeChoice = 'elite';
    startWave(state);
    expect(state.waveModifier).not.toBeNull();
    expect(state.waveKind).toBe('elite');
    // clear it
    state.pendingSpawns = [];
    state.enemies = [];
    updateWave(state, DT);
    expect(state.phase).toBe('draft');
    expect(state.eliteDraft).toBe(true);
  });

  it('treasure node runs a Guarded wave and rewards a relic pick on clear', () => {
    const state = createGame(MAPS.vale, 12);
    state.round = 4;
    state.nodeChoice = 'treasure';
    startWave(state);
    expect(state.waveModifier?.id).toBe('guarded');
    state.pendingSpawns = [];
    state.enemies = [];
    updateWave(state, DT);
    expect(state.phase).toBe('relic');
    expect(state.pendingRelicDraft?.length).toBe(2);
  });
});

// ---------------------------------------------------------------- events

describe('events', () => {
  it('drawEvent never repeats an event within a run', () => {
    const state = createGame(MAPS.vale, 20);
    const seen = new Set<string>();
    for (let i = 0; i < EVENTS.length; i++) {
      const ev = drawEvent(state);
      expect(ev).not.toBeNull();
      expect(seen.has(ev!.id)).toBe(false);
      seen.add(ev!.id);
    }
    expect(drawEvent(state)).toBeNull(); // pool exhausted
  });

  it('Storm Blessing sets a forced modifier that doubles bounty next wave', () => {
    const state = createGame(MAPS.vale, 21);
    fx.clear();
    resolveEventChoice(state, 'blessing');
    expect(state.forcedModifier?.id).toBe('blessed');
    state.nodeChoice = 'normal';
    startWave(state);
    expect(state.waveModifier?.id).toBe('blessed');
    expect(state.forcedModifier).toBeNull(); // consumed
    // bounty is doubled during the blessed wave
    const gold = state.gold;
    const e = addEnemy(state, 'grunt', 100, 100);
    dealDamage(state, e, 99999, 'physical');
    expect(state.gold).toBe(gold + e.def.bounty * 2);
  });

  it('Cursed Chest grants a relic but curses the next wave into an elite', () => {
    const state = createGame(MAPS.vale, 22);
    fx.clear();
    resolveEventChoice(state, 'chest_open');
    expect(state.relics.length).toBe(1);
    expect(state.forcedModifier).not.toBeNull();
    startWave(state);
    expect(state.waveKind).toBe('elite'); // pays elite rewards for the pain
  });

  it('Blood Pact trades lives for an immediate rare draft', () => {
    const state = createGame(MAPS.vale, 23);
    fx.clear();
    const lives = state.lives;
    resolveEventChoice(state, 'blood_pact');
    expect(state.lives).toBe(lives - 3);
    expect(state.phase).toBe('draft');
    expect(state.eliteDraft).toBe(true);
    expect(state.pendingDraft?.length).toBe(3);
  });
});

// ---------------------------------------------------------------- evolutions

describe('tower evolutions', () => {
  function maxedLongbow(seed: number) {
    const state = createGame(MAPS.vale, seed);
    state.gold = 2000;
    const w = makeWizard(state, WIZARDS.longbow, 2, 5);
    state.wizards.push(w);
    w.tiers = [
      WIZARDS.longbow.upgrades[0].tiers.length,
      WIZARDS.longbow.upgrades[1].tiers.length,
    ] as [number, number];
    return { state, w };
  }

  it('every evolution target exists and is excluded from specialize draws', () => {
    for (const [from, evo] of Object.entries(EVOLUTIONS)) {
      expect(WIZARDS[from], `base ${from}`).toBeDefined();
      expect(WIZARDS[evo.to], `evolved ${evo.to}`).toBeDefined();
      expect(WIZARDS[evo.to].isEvolved).toBe(true);
      expect(WIZARDS[evo.to].family).toBe(WIZARDS[from].family);
    }
    const state = createGame(MAPS.vale, 30);
    for (let i = 0; i < 10; i++) {
      for (const fam of ['wizard', 'goblin', 'archer', 'tree'] as const) {
        const draw = drawSpecialize(state, fam, false);
        expect(draw.some((d) => d.isEvolved)).toBe(false);
      }
    }
  });

  it('requires both paths maxed; holding the tagged card halves the cost', () => {
    const state = createGame(MAPS.vale, 31);
    state.gold = 2000;
    const w = makeWizard(state, WIZARDS.longbow, 2, 5);
    let check = canEvolve(state, w)!;
    expect(check.ok).toBe(false);

    w.tiers = [3, 3];
    check = canEvolve(state, w)!;
    expect(check.ok).toBe(true);
    expect(check.cost).toBe(EVOLUTIONS.longbow.cost);

    state.draftMods.push({ id: EVOLUTIONS.longbow.cardId, name: '', desc: '', icon: '', element: 'physical', rarity: 'rare' });
    check = canEvolve(state, w)!;
    expect(check.cost).toBe(Math.floor(EVOLUTIONS.longbow.cost / 2));
    expect(check.discounted).toBe(true);
  });

  it('evolveWizard swaps the def, resets tiers, charges gold and keeps investment', () => {
    const { state, w } = maxedLongbow(32);
    const gold = state.gold;
    const invested = w.invested;
    expect(evolveWizard(state, w)).toBe(true);
    expect(w.def.id).toBe('stormpiercer');
    expect(w.tiers).toEqual([0, 0]);
    expect(state.gold).toBe(gold - EVOLUTIONS.longbow.cost);
    expect(w.invested).toBe(invested + EVOLUTIONS.longbow.cost);
    expect(w.stats.damage).toBe(WIZARDS.stormpiercer.damage);
    expect(canEvolve(state, w)).toBeNull(); // evolved forms have no further evolution
  });

  it('innateFx drives the proc engine: Stormpiercer crits every 3rd shot', () => {
    const { state, w } = maxedLongbow(33);
    evolveWizard(state, w);
    expect(attackProcMult(state, w)).toBe(1);
    expect(attackProcMult(state, w)).toBe(1);
    expect(attackProcMult(state, w)).toBe(2); // innate critEveryN {3, 2}
  });

  it('baseMods tune aura/status bases (Gong of Doom rattles at 40%)', () => {
    const stats = computeStats(WIZARDS.doomgong, [0, 0]);
    expect(stats.rattlePct).toBeCloseTo(0.4, 5);
  });

  it('Zephyr Sovereign no longer needs a cloud', () => {
    expect(WIZARDS.wind.needsCloud).toBe(true);
    expect(WIZARDS.zephyr.needsCloud).toBe(false);
  });
});

// ---------------------------------------------------------------- save round-trip

describe('save round-trip with relics + evolved towers', () => {
  it('restores relic payloads and evolved defs', () => {
    const save: RunSave = {
      mapId: 'vale',
      seed: 40,
      gold: 500,
      lives: 20,
      round: 6,
      lastEliteRound: -5,
      cardIds: [],
      relicIds: ['sharpening_stone', 'frozen_core'],
      seenEvents: ['gambler'],
      wizards: [
        { defId: 'stormpiercer', cx: 2, cy: 5, tiers: [0, 0], mode: 'first', invested: 500 },
      ],
      stats: {
        kills: 0, leaks: 0, wavesCleared: 6,
        dmgByElement: { fire: 0, ice: 0, lightning: 0, water: 0, wind: 0, physical: 0 },
        reactions: { conduct: 0, shatter: 0, evaporate: 0, frozen: 0 },
        cardIds: [],
      },
    };
    const state = restoreRun(save)!;
    expect(state.relics.map((r) => r.id).sort()).toEqual(['frozen_core', 'sharpening_stone']);
    expect(relicSpecial(state, 'spawnChill')).toBe(true);
    expect(state.seenEvents).toEqual(['gambler']);
    const w = state.wizards[0];
    expect(w.def.id).toBe('stormpiercer');
    expect(w.def.isEvolved).toBe(true);
    // sharpening stone payload applies to the restored tower
    expect(w.stats.damage).toBe(WIZARDS.stormpiercer.damage + 2);
  });
});
