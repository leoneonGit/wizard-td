import type { MapDef, MapTheme } from '../game/types';

/**
 * Grid is 24x16 cells of 40px (960x640).
 * Waypoints in cell coords; entry/exit sit off-board so creeps walk in/out cleanly.
 * The campaign runs three acts, each on its own map with its own mood.
 */

const THEME_VALE: MapTheme = {
  grassA: '#2c4030', grassB: '#26392b',
  road: '#7d6647', roadEdge: '#4a3b2a',
  water: '#1d4e79', shore: '#c9b98a',
  scatter: 'flowers',
  fog: '#bcd7c2',
  hemiSky: '#cfe8ff', hemiGround: '#3a4a30',
  sun: '#fff4d6', sunIntensity: 2.4, exposure: 1.25,
};

const THEME_FEN: MapTheme = {
  grassA: '#31403a', grassB: '#283630',
  road: '#5d5347', roadEdge: '#37302a',
  water: '#173d4a', shore: '#7e8a6a',
  scatter: 'reeds',
  fog: '#8ea0a8',
  hemiSky: '#a9c0d8', hemiGround: '#2c3a34',
  sun: '#ffd9a8', sunIntensity: 1.9, exposure: 1.12,
};

const THEME_PEAK: MapTheme = {
  grassA: '#3d3a38', grassB: '#34302e',
  road: '#5a4a42', roadEdge: '#2e2624',
  water: '#3a2c2c', shore: '#6a5a50',
  scatter: 'ash',
  fog: '#9a8a84',
  hemiSky: '#d8b8a8', hemiGround: '#3a2e2a',
  sun: '#ffb98a', sunIntensity: 2.1, exposure: 1.18,
};

export const MAPS: Record<string, MapDef> = {
  // ---------------- ACT 1: a serpentine with two long straights (good early
  // spots) and a tight double-bend in the middle (premium splash real estate).
  vale: {
    id: 'vale',
    name: 'Emerald Vale',
    theme: THEME_VALE,
    waypoints: [
      [-1, 2.5],
      [4.5, 2.5],
      [4.5, 12.5],
      [9.5, 12.5],
      [9.5, 5.5],
      [14.5, 5.5],
      [14.5, 12.5],
      [19.5, 12.5],
      [19.5, 8.5],
      [24.5, 8.5],
    ],
    // pond inside the second U-bend — home for Water Mages, in tide-range of the track
    water: [
      [11, 7], [12, 7],
      [10, 8], [11, 8], [12, 8], [13, 8],
      [11, 9], [12, 9],
    ],
    // one lazy cloud circling the western half
    cloudPaths: [
      [
        [3, 3],
        [12, 4],
        [15, 9],
        [8, 13],
        [2, 9],
      ],
    ],
    // edge decoration only — the open middle stays free for towers
    props: [
      { model: 'tree_a', x: 60, y: 580, rot: 0.4, scale: 1.1 },
      { model: 'tree_b', x: 260, y: 620, rot: 2.1, scale: 1.0 },
      { model: 'tree_a', x: 700, y: 100, rot: 1.2, scale: 0.9 },
      { model: 'tree_b', x: 860, y: 60, rot: 0.0, scale: 1.15 },
      { model: 'rock_a', x: 660, y: 60, rot: 0.8, scale: 1.0 },
      { model: 'rock_c', x: 660, y: 620, rot: 1.9, scale: 1.1 },
      { model: 'barrel', x: 20, y: 420, rot: 0.3, scale: 1.0 },
      { model: 'tree_a', x: 900, y: 580, rot: 2.8, scale: 1.05 },
    ],
  },

  // ---------------- ACT 2: a mire crossing — twistier, two ponds, misty dusk.
  // Longer path = more time on target, but the marsh eats buildable land.
  fen: {
    id: 'fen',
    name: 'Ashen Fen',
    theme: THEME_FEN,
    waypoints: [
      [-1, 13.5],
      [3.5, 13.5],
      [3.5, 3.5],
      [8.5, 3.5],
      [8.5, 10.5],
      [12.5, 10.5],
      [12.5, 2.5],
      [17.5, 2.5],
      [17.5, 9.5],
      [21.5, 9.5],
      [21.5, 13.5],
      [24.5, 13.5],
    ],
    water: [
      // western mire pool
      [5, 7], [6, 7], [5, 8], [6, 8], [6, 9],
      // eastern shallows
      [14, 5], [15, 5], [14, 6], [15, 6], [15, 7], [19, 12], [20, 12],
    ],
    cloudPaths: [
      [
        [2, 5],
        [9, 2],
        [14, 6],
        [7, 11],
      ],
      [
        [13, 12],
        [20, 8],
        [22, 3],
        [16, 12],
      ],
    ],
    props: [
      { model: 'tree_b', x: 60, y: 300, rot: 0.9, scale: 1.2 },
      { model: 'tree_b', x: 430, y: 560, rot: 2.4, scale: 1.1 },
      { model: 'tree_a', x: 420, y: 90, rot: 0.2, scale: 0.95 },
      { model: 'rock_c', x: 780, y: 120, rot: 1.1, scale: 1.0 },
      { model: 'tree_b', x: 900, y: 420, rot: 1.7, scale: 1.25 },
      { model: 'barrels', x: 160, y: 90, rot: 0.6, scale: 1.0 },
      { model: 'rock_a', x: 560, y: 340, rot: 2.9, scale: 1.05 },
      { model: 'tree_a', x: 260, y: 470, rot: 1.4, scale: 1.0 },
      { model: 'crates', x: 870, y: 620, rot: 0.1, scale: 1.0 },
    ],
  },

  // ---------------- ACT 3: a scorched mountain pass — one long gauntlet with a
  // brutal switchback. Almost no water; rock and cinder everywhere.
  peak: {
    id: 'peak',
    name: 'Obsidian Pass',
    theme: THEME_PEAK,
    waypoints: [
      [-1, 8.5],
      [3.5, 8.5],
      [3.5, 2.5],
      [10.5, 2.5],
      [10.5, 13.5],
      [16.5, 13.5],
      [16.5, 5.5],
      [13.5, 5.5],
      [13.5, 9.5],
      [20.5, 9.5],
      [20.5, 3.5],
      [24.5, 3.5],
    ],
    water: [
      // a single obsidian tarn — the only refuge for water mages
      [6, 12], [7, 12], [6, 13], [7, 13],
    ],
    cloudPaths: [
      [
        [4, 5],
        [12, 8],
        [19, 12],
        [9, 12],
      ],
    ],
    props: [
      { model: 'rock_c', x: 90, y: 160, rot: 0.5, scale: 1.3 },
      { model: 'rock_c', x: 250, y: 590, rot: 1.8, scale: 1.15 },
      { model: 'rock_a', x: 520, y: 120, rot: 0.9, scale: 1.2 },
      { model: 'rock_c', x: 700, y: 300, rot: 2.5, scale: 1.25 },
      { model: 'rock_a', x: 860, y: 540, rot: 1.2, scale: 1.1 },
      { model: 'tree_b', x: 130, y: 420, rot: 0.7, scale: 0.85 }, // one stubborn pine
      { model: 'rock_a', x: 330, y: 260, rot: 2.0, scale: 0.95 },
      { model: 'rock_c', x: 930, y: 100, rot: 0.2, scale: 1.05 },
    ],
  },
};

/** The campaign route: each act rolls ONE map from its pool per run (seeded).
 *  Add editor-built maps to an act's pool and the campaign rotates them. */
export const ACT_MAP_POOLS: string[][] = [['vale'], ['fen'], ['peak']];

/** Every campaign-capable map id, flattened (campaign detection, saves). */
export const ACT_MAPS = ACT_MAP_POOLS.flat();

/** Seeded per-run pick — the same run seed always rolls the same map per act. */
export function mapForAct(act: number, seed: number): MapDef {
  const pool = ACT_MAP_POOLS[Math.min(act, ACT_MAP_POOLS.length - 1)];
  return MAPS[pool[Math.abs(Math.floor(seed / 97) + act * 31) % pool.length]];
}

export const DEFAULT_MAP = 'vale';
