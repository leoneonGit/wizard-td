import { computeBlockedCells, cellKey, cellCenter } from '../engine/grid';
import { MAPS, DEFAULT_MAP } from '../data/maps';
import { WAVES } from '../data/waves';
import { Track } from './path';
import type { Cloud, Enemy, MapDef, Phase, Projectile, TargetMode, Wizard, WizardDef, WizardStats } from './types';

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

export function createGame(map: MapDef = MAPS[DEFAULT_MAP]): GameState {
  const track = new Track(map);
  // cloud paths are closed loops: append the first waypoint so posAt wraps smoothly
  const cloudTracks = (map.cloudPaths ?? []).map(
    (pts) => new Track({ id: '', name: '', waypoints: [...pts, pts[0]] }),
  );
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
    blocked: computeBlockedCells(track),
    water: new Set((map.water ?? []).map(([cx, cy]) => cellKey(cx, cy))),
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

/** Recompute a wizard's effective stats from base def + owned upgrade tiers. */
export function computeStats(def: WizardDef, tiers: [number, number]): WizardStats {
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
      const mod = def.upgrades[p].tiers[t].mod;
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
  }
  return s;
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
    stats: computeStats(def, tiers),
    recoil: 0,
  };
}
