import { computeBlockedCells, cellKey, cellCenter, pixelToCell } from '../engine/grid';
import { makeRng } from '../engine/rng';
import { MAPS, DEFAULT_MAP } from '../data/maps';
import { WAVES } from '../data/waves';
import { PROP_MODELS } from './mapio';
import { Track } from './path';
import type {
  CardDef, Cloud, Enemy, MapDef, Phase, Projectile, ReactionMods, RunStats,
  TargetMode, WaveModifier, Wizard, WizardDef, WizardStats,
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
    dmgByElement: { fire: 0, ice: 0, lightning: 0, water: 0, wind: 0 },
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
    soakSlow: def.element === 'water' ? 0.2 : 0,
    knockback: def.element === 'wind' ? 70 : 0,
  };
  for (let p = 0; p < 2; p++) {
    for (let t = 0; t < tiers[p]; t++) {
      applyMod(s, def.upgrades[p].tiers[t].mod);
    }
  }
  for (const card of draftMods) {
    if (card.mod && (card.element === def.element || card.element === 'all')) {
      applyMod(s, card.mod);
    }
  }
  return s;
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
  const isWater = state.water.has(key);
  const wantsWater = def?.placement === 'water';
  return isWater === wantsWater;
}

export function makeWizard(state: GameState, def: WizardDef, cx: number, cy: number): Wizard {
  const tiers: [number, number] = [0, 0];
  const c = cellCenter(cx, cy);
  return {
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
  };
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
