import { computeBlockedCells, cellKey, cellCenter, pixelToCell } from '../engine/grid';
import { makeRng } from '../engine/rng';
import { MAPS, DEFAULT_MAP } from '../data/maps';
import { WAVES } from '../data/waves';
import { PROP_MODELS } from './mapio';
import { Track } from './path';
import type {
  CardDef, Cloud, Enemy, EventDef, MapDef, NodeKind, Phase, Projectile, ReactionMods,
  RelicDef, RelicSpecial, RunStats, TargetMode, TowerFamily, WaveModifier, Wizard,
  WizardDef, WizardStats,
} from './types';

export interface PendingSpawn {
  t: number; // wave-relative time
  type: string;
}

export interface GameState {
  phase: Phase;
  gold: number;
  lives: number;
  round: number; // 0-based index of NEXT wave to start (displayed +1)
  speed: number;
  autoplay: boolean;
  autoplayTimer: number;

  map: MapDef;
  track: Track;
  blocked: Set<number>;
  water: Set<number>; // cellKeys of water cells
  clouds: Cloud[];
  cloudTracks: Track[];
  /** props that block line of sight (board px + radius) */
  blockers: { x: number; y: number; r: number }[];

  // roguelite run state
  seed: number;
  rng: () => number;
  draftMods: CardDef[];
  pendingDraft: CardDef[] | null;
  /** true when the pending draft came from an elite clear (rare-only) */
  eliteDraft: boolean;
  reaction: ReactionMods;
  bountyBonus: number;
  towerDiscountPct: number;
  waveModifier: WaveModifier | null;
  lastEliteRound: number;
  stats: RunStats;
  /** run clock (sec) — drives periodic "frenzy" proc cards */
  clock: number;
  /** Soul Harvest-style permanent damage ramp (%), capped by the granting card */
  killStackPct: number;

  // branching map + relics + events
  relics: RelicDef[];
  /** node choices offered for the upcoming wave (re-rolled per round) */
  nextNodes: NodeKind[];
  nodesForRound: number;
  nodeChoice: NodeKind;
  /** what kind of node the RUNNING wave was started as (drives clear rewards) */
  waveKind: NodeKind;
  /** wave modifier forced by an event (cursed chest / storm blessing) */
  forcedModifier: WaveModifier | null;
  pendingRelicDraft: RelicDef[] | null;
  pendingEvent: EventDef | null;
  seenEvents: string[];

  enemies: Enemy[];
  wizards: Wizard[];
  projectiles: Projectile[];

  waveTime: number;
  pendingSpawns: PendingSpawn[];

  selectedWizardId: number | null;
  placingType: string | null;
  mouseX: number;
  mouseY: number;
  mouseOnBoard: boolean;

  nextId: number;
}

export const START_GOLD = 230;
export const START_LIVES = 25;
export const SELL_REFUND = 0.7;

export const DEFAULT_REACTION: ReactionMods = {
  conductMult: 1.6,
  shatterMult: 2.0,
  chainBonus: 1,
  freezeDuration: 1.1,
  evaporateBurst: 10,
};

export function freshStats(): RunStats {
  return {
    kills: 0,
    leaks: 0,
    wavesCleared: 0,
    dmgByElement: { fire: 0, ice: 0, lightning: 0, water: 0, wind: 0, physical: 0 },
    reactions: { conduct: 0, shatter: 0, evaporate: 0, frozen: 0 },
    cardIds: [],
  };
}

export function createGame(map: MapDef = MAPS[DEFAULT_MAP], seed = Date.now()): GameState {
  const track = new Track(map);
  // cloud paths are closed loops: append the first waypoint so posAt wraps smoothly
  const cloudTracks = (map.cloudPaths ?? []).map(
    (pts) => new Track({ id: '', name: '', waypoints: [...pts, pts[0]] }),
  );
  const blockers = (map.props ?? []).map((p) => ({
    x: p.x,
    y: p.y,
    r: (PROP_MODELS[p.model]?.blockRadius ?? 12) * p.scale,
  }));
  const blocked = computeBlockedCells(track);
  for (const b of blockers) {
    const { cx, cy } = pixelToCell(b.x, b.y);
    blocked.add(cellKey(cx, cy)); // no wizards inside trees
  }
  return {
    phase: 'build',
    gold: START_GOLD,
    lives: START_LIVES,
    round: 0,
    speed: 1,
    autoplay: false,
    autoplayTimer: 0,
    map,
    track,
    blocked,
    water: new Set((map.water ?? []).map(([cx, cy]) => cellKey(cx, cy))),
    blockers,
    seed,
    rng: makeRng(seed),
    draftMods: [],
    pendingDraft: null,
    eliteDraft: false,
    reaction: { ...DEFAULT_REACTION },
    bountyBonus: 0,
    towerDiscountPct: 0,
    waveModifier: null,
    lastEliteRound: -5,
    stats: freshStats(),
    clock: 0,
    killStackPct: 0,
    relics: [],
    nextNodes: ['normal'],
    nodesForRound: -1,
    nodeChoice: 'normal',
    waveKind: 'normal',
    forcedModifier: null,
    pendingRelicDraft: null,
    pendingEvent: null,
    seenEvents: [],
    // two clouds per path, staggered half a lap apart — keeps wind uptime reasonable
    clouds: cloudTracks.flatMap((t, i) =>
      [0, t.total / 2].map((d) => {
        const p = t.posAt(d);
        return { pathIdx: i, dist: d, x: p.x, y: p.y };
      }),
    ),
    cloudTracks,
    enemies: [],
    wizards: [],
    projectiles: [],
    waveTime: 0,
    pendingSpawns: [],
    selectedWizardId: null,
    placingType: null,
    mouseX: 0,
    mouseY: 0,
    mouseOnBoard: false,
    nextId: 1,
  };
}

export function totalWaves(): number {
  return WAVES.length;
}

function applyMod(s: WizardStats, mod: import('./types').StatMods): void {
  if (mod.damage) s.damage += mod.damage;
  if (mod.rateMul) s.rate *= mod.rateMul;
  if (mod.range) s.range += mod.range;
  if (mod.splash) s.splash += mod.splash;
  if (mod.chains) s.chains += mod.chains;
  if (mod.burnDps) s.burnDps += mod.burnDps;
  if (mod.burnDuration) s.burnDuration += mod.burnDuration;
  if (mod.chillPct) s.chillPct += mod.chillPct;
  if (mod.wetDuration) s.wetDuration += mod.wetDuration;
  if (mod.projSpeed) s.projSpeed += mod.projSpeed;
  if (mod.soakSlow) s.soakSlow += mod.soakSlow;
  if (mod.knockback) s.knockback += mod.knockback;
  if (mod.rattlePct) s.rattlePct += mod.rattlePct;
  if (mod.entangleDur) s.entangleDur += mod.entangleDur;
  if (mod.rootSlow) s.rootSlow += mod.rootSlow;
}

/** Recompute a wizard's effective stats: base def + owned tiers + element-wide drafted cards. */
export function computeStats(def: WizardDef, tiers: [number, number], draftMods: CardDef[] = []): WizardStats {
  const s: WizardStats = {
    range: def.range,
    rate: def.rate,
    damage: def.damage,
    projSpeed: def.projSpeed,
    splash: def.splash,
    chains: def.chains,
    chainFalloff: def.chainFalloff,
    burnDps: def.element === 'fire' ? 6 : 0,
    burnDuration: def.element === 'fire' ? 3 : 0,
    chillPct: def.element === 'ice' ? 0.3 : 0,
    wetDuration: def.element === 'ice' ? 4 : def.element === 'water' ? 5 : 0,
    soakSlow: def.auraKind === 'tide' ? 0.2 : 0,
    knockback: def.auraKind === 'gust' ? 70 : 0,
    rattlePct: def.auraKind === 'rattle' ? 0.25 : 0,
    entangleDur: def.entangles ? 1.0 : 0,
    rootSlow: def.groundAttack ? 0.25 : 0,
  };
  if (def.baseMods) applyMod(s, def.baseMods); // evolved-form tuning of aura/status bases
  for (let p = 0; p < 2; p++) {
    for (let t = 0; t < tiers[p]; t++) {
      applyMod(s, def.upgrades[p].tiers[t].mod);
    }
  }
  for (const card of draftMods) {
    if (!card.mod) continue;
    const elementMatch = card.element === def.element || card.element === 'all';
    const familyMatch = !card.family || card.family === def.family;
    if (elementMatch && familyMatch) applyMod(s, card.mod);
  }
  return s;
}

/** Does a card's scope (element + optional family) cover this tower? */
export function cardAppliesTo(card: CardDef, def: WizardDef): boolean {
  const elementMatch = card.element === def.element || card.element === 'all';
  const familyMatch = !card.family || card.family === def.family;
  return elementMatch && familyMatch;
}

/** Apply a picked card to the run: mods, reaction buffs, economy, stat recompute. */
export function applyCard(state: GameState, card: CardDef): void {
  state.draftMods.push(card);
  state.stats.cardIds.push(card.id);
  if (card.reaction) {
    for (const [k, v] of Object.entries(card.reaction)) {
      // reaction card values REPLACE the default (they're absolute, e.g. 1.6 -> 2.0),
      // except additive bonuses (chainBonus/freezeDuration/evaporateBurst are absolute too)
      (state.reaction as unknown as Record<string, number>)[k] = v as number;
    }
  }
  if (card.econ) {
    if (card.econ.goldNow) state.gold += card.econ.goldNow;
    if (card.econ.bountyBonus) state.bountyBonus += card.econ.bountyBonus;
    if (card.econ.towerDiscountPct) state.towerDiscountPct += card.econ.towerDiscountPct;
  }
  for (const w of state.wizards) {
    w.stats = computeStats(w.def, w.tiers, state.draftMods);
  }
}

export function findWizard(state: GameState, id: number | null): Wizard | undefined {
  if (id === null) return undefined;
  return state.wizards.find((w) => w.id === id);
}

export function wizardAt(state: GameState, cx: number, cy: number): Wizard | undefined {
  return state.wizards.find((w) => w.cx === cx && w.cy === cy);
}

export function isBuildable(state: GameState, cx: number, cy: number, def?: WizardDef): boolean {
  const key = cellKey(cx, cy);
  if (state.blocked.has(key) || wizardAt(state, cx, cy)) return false;
  if (def?.placement === 'any') return true; // generic shells: ground or water both fine
  const isWater = state.water.has(key);
  const wantsWater = def?.placement === 'water';
  return isWater === wantsWater;
}

export function makeWizard(state: GameState, def: WizardDef, cx: number, cy: number): Wizard {
  const tiers: [number, number] = [0, 0];
  const c = cellCenter(cx, cy);
  const w: Wizard = {
    id: state.nextId++,
    def,
    cx,
    cy,
    x: c.x,
    y: c.y,
    cooldown: 0,
    mode: 'first' as TargetMode,
    aim: -Math.PI / 2,
    tiers,
    invested: def.cost,
    stats: computeStats(def, tiers, state.draftMods),
    recoil: 0,
    attackCount: 0,
    family: def.family,
  };
  if (def.isGeneric) {
    w.pendingSpecialize = true;
    const onWater = state.water.has(cellKey(cx, cy));
    w.specializeOptions = drawSpecialize(state, def.family, onWater);
  }
  return w;
}

/** Resolve a pending generic tower into a real specialization, in place. */
export function specializeWizard(state: GameState, w: Wizard, chosen: WizardDef): void {
  w.def = chosen;
  // invested stays as the generic's placement cost — specializing itself is free
  w.pendingSpecialize = false;
  w.specializeOptions = undefined;
  w.stats = computeStats(chosen, w.tiers, state.draftMods);
  w.cooldown = 0;
}

/**
 * Draw 2-3 distinct specialization options for a generic tower, seeded per-run.
 * For the wizard family, standing on water GUARANTEES Water among the options;
 * standing on ground EXCLUDES Water entirely — placement location gates the draw.
 */
export function drawSpecialize(state: GameState, family: TowerFamily, onWater: boolean, count = 3): WizardDef[] {
  const { specializationsFor } = wizardsData();
  let pool = specializationsFor(family);
  let guaranteed: WizardDef | undefined;
  if (family === 'wizard') {
    if (onWater) {
      guaranteed = pool.find((d) => d.placement === 'water');
      pool = pool.filter((d) => d.placement !== 'water');
    } else {
      pool = pool.filter((d) => d.placement !== 'water');
    }
  }
  const picks: WizardDef[] = guaranteed ? [guaranteed] : [];
  const remaining = Math.max(0, count - picks.length);
  for (let i = 0; i < remaining && pool.length > 0; i++) {
    const idx = Math.floor(state.rng() * pool.length);
    picks.push(pool[idx]);
    pool.splice(idx, 1);
  }
  // shuffle so the guaranteed option isn't always shown first
  for (let i = picks.length - 1; i > 0; i--) {
    const j = Math.floor(state.rng() * (i + 1));
    [picks[i], picks[j]] = [picks[j], picks[i]];
  }
  return picks;
}

// small indirection so state.ts (imported by data-agnostic tests) doesn't hard-cycle with data
import { specializationsFor as _specializationsFor } from '../data/wizards';
function wizardsData() {
  return { specializationsFor: _specializationsFor };
}

/** Draw `count` distinct cards from the pool with rarity weighting (seeded). */
export function drawDraft(state: GameState, count = 3, rareOnly = false): CardDef[] {
  // dynamic import avoided: cards data imported lazily to dodge cycles
  const { CARDS, RARITY_WEIGHT } = cardsData();
  const pickedUniques = new Set(state.draftMods.filter((c) => c.unique).map((c) => c.id));
  let pool = CARDS.filter((c) => !pickedUniques.has(c.id));
  if (rareOnly) {
    const rares = pool.filter((c) => c.rarity === 'rare');
    if (rares.length >= count) pool = rares;
  }
  const draft: CardDef[] = [];
  for (let i = 0; i < count && pool.length > 0; i++) {
    const total = pool.reduce((sum, c) => sum + RARITY_WEIGHT[c.rarity], 0);
    let roll = state.rng() * total;
    let chosen = pool[0];
    for (const c of pool) {
      roll -= RARITY_WEIGHT[c.rarity];
      if (roll <= 0) {
        chosen = c;
        break;
      }
    }
    draft.push(chosen);
    pool = pool.filter((c) => c.id !== chosen.id);
  }
  return draft;
}

// small indirection so state.ts (imported by data-agnostic tests) doesn't hard-cycle with data
import { CARDS as _CARDS, RARITY_WEIGHT as _WEIGHTS } from '../data/cards';
function cardsData() {
  return { CARDS: _CARDS, RARITY_WEIGHT: _WEIGHTS };
}

// ---------------------------------------------------------------- relics

/** Pick up a relic: remember it, and push its hidden-card payload into the engine. */
export function applyRelic(state: GameState, relic: RelicDef): void {
  if (state.relics.some((r) => r.id === relic.id)) return;
  state.relics.push(relic);
  if (relic.payload) applyCard(state, relic.payload);
}

export function relicSpecial(state: GameState, special: RelicSpecial): boolean {
  return state.relics.some((r) => r.special?.includes(special));
}

/** Draw `count` distinct unowned relics, rarity-weighted (seeded). */
export function drawRelics(state: GameState, count = 2): RelicDef[] {
  const owned = new Set(state.relics.map((r) => r.id));
  let pool = _RELICS.filter((r) => !owned.has(r.id));
  const picks: RelicDef[] = [];
  for (let i = 0; i < count && pool.length > 0; i++) {
    const total = pool.reduce((sum, r) => sum + _RELIC_WEIGHT[r.rarity], 0);
    let roll = state.rng() * total;
    let chosen = pool[0];
    for (const r of pool) {
      roll -= _RELIC_WEIGHT[r.rarity];
      if (roll <= 0) {
        chosen = r;
        break;
      }
    }
    picks.push(chosen);
    pool = pool.filter((r) => r.id !== chosen.id);
  }
  return picks;
}

import { RELICS as _RELICS, RELIC_RARITY_WEIGHT as _RELIC_WEIGHT } from '../data/relics';

// ---------------------------------------------------------------- branching map

const NODE_MIN_ROUND = 2; // first two waves are always plain
const ELITE_MIN = 3;

/** Roll (once per round, seeded) the node choices for the upcoming wave. */
export function ensureNodes(state: GameState): void {
  if (state.nodesForRound === state.round) return;
  state.nodesForRound = state.round;
  state.nodeChoice = 'normal';
  const nodes: NodeKind[] = ['normal'];
  if (state.round >= NODE_MIN_ROUND) {
    if (state.round >= ELITE_MIN && state.rng() < 0.5) nodes.push('elite');
    if (state.rng() < 0.35) nodes.push('treasure');
    if (state.rng() < 0.4 && state.seenEvents.length < eventCount()) nodes.push('event');
  }
  state.nextNodes = nodes.slice(0, 3);
}

// lazy to dodge data cycles
import { EVENTS as _EVENTS } from '../data/events';
function eventCount(): number {
  return _EVENTS.length;
}

/** Seeded pick of an unseen event; marks it seen. */
export function drawEvent(state: GameState): EventDef | null {
  const pool = _EVENTS.filter((e) => !state.seenEvents.includes(e.id));
  if (pool.length === 0) return null;
  const e = pool[Math.floor(state.rng() * pool.length)];
  state.seenEvents.push(e.id);
  return e;
}

// ---------------------------------------------------------------- evolutions

export interface EvolveCheck {
  ok: boolean;
  cost: number;
  discounted: boolean;
  reason?: string;
}

/** Both upgrade paths maxed → the tower may evolve. Holding the tagged card halves the cost. */
export function canEvolve(state: GameState, w: Wizard): EvolveCheck | null {
  const evo = evolutionsData()[w.def.id];
  if (!evo) return null;
  const maxed =
    w.tiers[0] >= w.def.upgrades[0].tiers.length &&
    w.tiers[1] >= w.def.upgrades[1].tiers.length;
  const discounted = state.draftMods.some((c) => c.id === evo.cardId);
  const cost = discounted ? Math.floor(evo.cost / 2) : evo.cost;
  if (!maxed) return { ok: false, cost, discounted, reason: 'Max both paths first' };
  if (state.gold < cost) return { ok: false, cost, discounted, reason: 'Not enough gold' };
  return { ok: true, cost, discounted };
}

export function evolveWizard(state: GameState, w: Wizard): boolean {
  const check = canEvolve(state, w);
  const evo = evolutionsData()[w.def.id];
  if (!check?.ok || !evo) return false;
  state.gold -= check.cost;
  w.invested += check.cost;
  w.def = wizardById(evo.to);
  w.tiers = [0, 0]; // evolved forms have no further paths
  w.stats = computeStats(w.def, w.tiers, state.draftMods);
  w.cooldown = 0;
  return true;
}

import { EVOLUTIONS as _EVOLUTIONS, WIZARDS as _WIZARDS } from '../data/wizards';
function evolutionsData() {
  return _EVOLUTIONS;
}
function wizardById(id: string): WizardDef {
  return _WIZARDS[id];
}
