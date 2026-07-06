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

  // ================= player-designed campaign maps (P13d) =================
  // Two per act; the run seed rolls one of each pair. Themes darken and the
  // light dies as the campaign advances — act 1 morning, act 2 ashen dusk,
  // act 3 black woods and embers.

  // ---------------- ACT 1a: Rockbend — sunny farmland switchbacks
  rockbend: {
    id: 'rockbend',
    name: 'Rockbend',
    theme: {
      grassA: '#2c4030', grassB: '#26392b',
      road: '#7d6647', roadEdge: '#4a3b2a',
      water: '#1d4e79', shore: '#c9b98a',
      scatter: 'flowers',
      fog: '#bcd7c2',
      hemiSky: '#cfe8ff', hemiGround: '#3a4a30',
      sun: '#fff4d6', sunIntensity: 2.4, exposure: 1.25,
    },
    waypoints: [
      [-1.5, 13.5], [7.5, 13.5], [7.5, 7.5], [12.5, 7.5],
      [12.5, 12.5], [17.5, 12.5], [17.5, 5.5], [25.5, 5.5],
    ],
    water: [],
    cloudPaths: [[[17.5, 2.5], [7.5, 9.5], [13.5, 11.5]]],
    props: [
      { model: 'rock_a', x: 626, y: 342, rot: 0, scale: 1 },
      { model: 'rock_a', x: 239, y: 267, rot: 0, scale: 1 },
      { model: 'rock_a', x: 372, y: 189, rot: 0, scale: 1 },
      { model: 'rock_a', x: 426, y: 151, rot: 0, scale: 1 },
      { model: 'rock_a', x: 597, y: 41, rot: 0, scale: 1 },
      { model: 'crates', x: 861, y: 145, rot: 0, scale: 1 },
      { model: 'crates', x: 906, y: 140, rot: 0, scale: 1 },
      { model: 'tree_b', x: 140, y: 148, rot: 0, scale: 1 },
      { model: 'tree_b', x: 100, y: 220, rot: 0, scale: 1 },
      { model: 'tree_b', x: 63, y: 226, rot: 0, scale: 1 },
      { model: 'tree_b', x: 29, y: 225, rot: 0, scale: 1 },
      { model: 'tree_b', x: 25, y: 181, rot: 0, scale: 1 },
      { model: 'tree_b', x: 65, y: 132, rot: 0, scale: 1 },
      { model: 'tree_b', x: 109, y: 99, rot: 0, scale: 1 },
      { model: 'tree_b', x: 112, y: 60, rot: 0, scale: 1 },
      { model: 'tree_b', x: 119, y: 25, rot: 0, scale: 1 },
      { model: 'tree_b', x: 151, y: 21, rot: 0, scale: 1 },
      { model: 'tree_b', x: 203, y: 17, rot: 0, scale: 1 },
      { model: 'tree_b', x: 279, y: 20, rot: 0, scale: 1 },
      { model: 'tree_b', x: 258, y: 102, rot: 0, scale: 1 },
      { model: 'tree_b', x: 209, y: 160, rot: 0, scale: 1 },
      { model: 'tree_b', x: 194, y: 207, rot: 0, scale: 1 },
      { model: 'barrels', x: 26, y: 470, rot: 0, scale: 1 },
      { model: 'barrels', x: 58, y: 466, rot: 0, scale: 1 },
      { model: 'barrels', x: 98, y: 468, rot: 0, scale: 1 },
      { model: 'barrels', x: 139, y: 468, rot: 0, scale: 1 },
      { model: 'rock_a', x: 527, y: 613, rot: 0, scale: 1 },
      { model: 'rock_a', x: 941, y: 609, rot: 0, scale: 1 },
      { model: 'rock_c', x: 855, y: 366, rot: 0, scale: 1 },
      { model: 'rock_c', x: 444, y: 63, rot: 0, scale: 1 },
      { model: 'rock_c', x: 51, y: 322, rot: 0, scale: 1 },
      { model: 'rock_c', x: 176, y: 377, rot: 0, scale: 1 },
      { model: 'rock_c', x: 785, y: 61, rot: 0, scale: 1 },
      { model: 'rock_c', x: 625, y: 163, rot: 0, scale: 1 },
      { model: 'rock_c', x: 939, y: 26, rot: 0, scale: 1 },
      { model: 'rock_c', x: 79, y: 628, rot: 0, scale: 1 },
      { model: 'tree_a', x: 317, y: 627, rot: 0, scale: 1 },
      { model: 'tree_a', x: 423, y: 589, rot: 0, scale: 1 },
      { model: 'tree_b', x: 629, y: 580, rot: 0, scale: 1 },
      { model: 'tree_b', x: 759, y: 569, rot: 0, scale: 1 },
      { model: 'tree_b', x: 864, y: 504, rot: 0, scale: 1 },
    ],
  },

  // ---------------- ACT 1b: Back Forest — a shaded double-back through the pines
  backforest: {
    id: 'backforest',
    name: 'Back Forest',
    theme: {
      grassA: '#28402c', grassB: '#223626',
      road: '#75604a', roadEdge: '#443626',
      water: '#1d4e79', shore: '#b8ad84',
      scatter: 'flowers',
      fog: '#b0cdb6',
      hemiSky: '#c6e2f5', hemiGround: '#344a2e',
      sun: '#fff0c8', sunIntensity: 2.3, exposure: 1.22,
    },
    waypoints: [
      [-1.5, 8.5], [9.5, 8.5], [9.5, 3.5], [1.5, 3.5],
      [1.5, 12.5], [10.5, 12.5], [25.5, 12.5],
    ],
    water: [],
    cloudPaths: [[[5.5, 1.5], [14.5, 5.5], [8.5, 10.5]]],
    props: [
      { model: 'tree_b', x: 589, y: 68, rot: 0, scale: 1 },
      { model: 'tree_b', x: 590, y: 169, rot: 0, scale: 1 },
      { model: 'tree_b', x: 611, y: 317, rot: 0, scale: 1 },
      { model: 'tree_b', x: 610, y: 430, rot: 0, scale: 1 },
      { model: 'tree_a', x: 714, y: 57, rot: 0, scale: 1 },
      { model: 'tree_a', x: 723, y: 117, rot: 0, scale: 1 },
      { model: 'tree_a', x: 730, y: 234, rot: 0, scale: 1 },
      { model: 'tree_a', x: 510, y: 250, rot: 0, scale: 1 },
      { model: 'tree_a', x: 429, y: 60, rot: 0, scale: 1 },
      { model: 'rock_c', x: 53, y: 26, rot: 0, scale: 1 },
      { model: 'rock_c', x: 231, y: 440, rot: 0, scale: 1 },
      { model: 'rock_c', x: 64, y: 614, rot: 0, scale: 1 },
      { model: 'barrels', x: 339, y: 585, rot: 0, scale: 1 },
      { model: 'barrels', x: 553, y: 578, rot: 0, scale: 1 },
      { model: 'barrels', x: 651, y: 586, rot: 0, scale: 1 },
      { model: 'barrels', x: 744, y: 596, rot: 0, scale: 1 },
      { model: 'tree_b', x: 856, y: 377, rot: 0, scale: 1 },
      { model: 'tree_b', x: 890, y: 237, rot: 0, scale: 1 },
      { model: 'tree_b', x: 913, y: 124, rot: 0, scale: 1 },
      { model: 'tree_b', x: 838, y: 28, rot: 0, scale: 1 },
      { model: 'tree_b', x: 22, y: 270, rot: 0, scale: 1 },
      { model: 'tree_b', x: 432, y: 409, rot: 0, scale: 1 },
      { model: 'tree_b', x: 348, y: 418, rot: 0, scale: 1 },
      { model: 'rock_c', x: 730, y: 309, rot: 0, scale: 1 },
      { model: 'chest', x: 244, y: 620, rot: 0, scale: 1 },
      { model: 'chest', x: 154, y: 623, rot: 0, scale: 1 },
      { model: 'tree_b', x: 907, y: 577, rot: 0, scale: 1 },
    ],
  },

  // ---------------- ACT 2a: Ash Town — a burnt village under a low sun
  ashtown: {
    id: 'ashtown',
    name: 'Ash Town',
    theme: {
      grassA: '#2e3833', grassB: '#25302a',
      road: '#57493d', roadEdge: '#302822',
      water: '#14384a', shore: '#6d7a5c',
      scatter: 'reeds',
      fog: '#7a8c96',
      hemiSky: '#93aac4', hemiGround: '#273630',
      sun: '#ffcf94', sunIntensity: 1.75, exposure: 1.06,
    },
    waypoints: [
      [-1.5, 4.5], [11.5, 4.5], [11.5, 8.5], [8.5, 8.5], [9.5, 11.5],
      [13.5, 11.5], [16.5, 11.5], [13.5, 5.5], [17.5, 2.5], [25.5, 5.5],
    ],
    water: [
      [1, 14], [2, 15], [1, 15], [0, 15], [0, 14], [2, 14],
      [3, 14], [3, 15], [4, 15], [5, 15], [7, 15], [6, 15],
    ],
    cloudPaths: [[[6.5, 2.5], [15.5, 11.5], [16.5, 2.5]]],
    props: [
      { model: 'chest', x: 782, y: 224, rot: 0, scale: 1 },
      { model: 'chest', x: 880, y: 277, rot: 0, scale: 1 },
      { model: 'chest', x: 886, y: 99, rot: 0, scale: 1 },
      { model: 'chest', x: 818, y: 39, rot: 0, scale: 1 },
      { model: 'barrels', x: 70, y: 127, rot: 0, scale: 1 },
      { model: 'barrels', x: 111, y: 57, rot: 0, scale: 1 },
      { model: 'barrels', x: 80, y: 273, rot: 0, scale: 1 },
      { model: 'barrels', x: 155, y: 310, rot: 0, scale: 1 },
      { model: 'barrels', x: 267, y: 360, rot: 0, scale: 1 },
      { model: 'crates', x: 253, y: 452, rot: 0, scale: 1 },
      { model: 'crates', x: 540, y: 572, rot: 0, scale: 1 },
      { model: 'crates', x: 788, y: 606, rot: 0, scale: 1 },
      { model: 'rock_c', x: 848, y: 348, rot: 0, scale: 1 },
      { model: 'rock_c', x: 168, y: 142, rot: 0, scale: 1 },
      { model: 'rock_c', x: 55, y: 434, rot: 0, scale: 1 },
      { model: 'rock_c', x: 306, y: 254, rot: 0, scale: 1 },
      { model: 'rock_c', x: 575, y: 134, rot: 0, scale: 1 },
      { model: 'rock_a', x: 648, y: 253, rot: 0, scale: 1 },
    ],
  },

  // ---------------- ACT 2b: Pine Town — misty pines and two cold ponds
  pinetown: {
    id: 'pinetown',
    name: 'Pine Town',
    theme: {
      grassA: '#2b3a34', grassB: '#22302b',
      road: '#5a4f40', roadEdge: '#332b24',
      water: '#153f4e', shore: '#75825f',
      scatter: 'reeds',
      fog: '#84949c',
      hemiSky: '#9cb2c8', hemiGround: '#293832',
      sun: '#ffd6a0', sunIntensity: 1.8, exposure: 1.08,
    },
    waypoints: [
      [-1.5, 14.5], [6.5, 14.5], [6.5, 11.5], [1.5, 11.5], [1.5, 7.5],
      [14.5, 7.5], [14.5, 11.5], [18.5, 11.5], [19.5, 2.5], [25.5, 1.5],
    ],
    water: [
      [3, 9], [4, 9], [5, 9], [6, 9],
      [2, 13], [3, 13], [4, 13],
    ],
    cloudPaths: [[[4.5, 3.5], [16.5, 5.5], [10.5, 13.5]]],
    props: [
      { model: 'tree_b', x: 523, y: 382, rot: 0, scale: 1 },
      { model: 'tree_b', x: 155, y: 244, rot: 0, scale: 1 },
      { model: 'tree_b', x: 342, y: 225, rot: 0, scale: 1 },
      { model: 'tree_b', x: 462, y: 235, rot: 0, scale: 1 },
      { model: 'tree_b', x: 645, y: 223, rot: 0, scale: 1 },
      { model: 'tree_b', x: 712, y: 169, rot: 0, scale: 1 },
      { model: 'tree_b', x: 719, y: 91, rot: 0, scale: 1 },
      { model: 'tree_b', x: 828, y: 29, rot: 0, scale: 1 },
      { model: 'tree_b', x: 370, y: 624, rot: 0, scale: 1 },
      { model: 'tree_b', x: 20, y: 525, rot: 0, scale: 1 },
      { model: 'tree_b', x: 21, y: 377, rot: 0, scale: 1 },
      { model: 'tree_b', x: 8, y: 226, rot: 0, scale: 1 },
      { model: 'tree_b', x: 70, y: 191, rot: 0, scale: 1 },
      { model: 'tree_b', x: 342, y: 125, rot: 0, scale: 1 },
      { model: 'tree_b', x: 550, y: 70, rot: 0, scale: 1 },
      { model: 'tree_b', x: 133, y: 64, rot: 0, scale: 1 },
      { model: 'rock_c', x: 337, y: 33, rot: 0, scale: 1 },
      { model: 'rock_c', x: 23, y: 15, rot: 0, scale: 1 },
      { model: 'rock_c', x: 907, y: 510, rot: 0, scale: 1 },
      { model: 'rock_c', x: 826, y: 609, rot: 0, scale: 1 },
      { model: 'tree_a', x: 393, y: 485, rot: 0, scale: 1 },
      { model: 'tree_a', x: 884, y: 327, rot: 0, scale: 1 },
      { model: 'tree_a', x: 905, y: 199, rot: 0, scale: 1 },
    ],
  },

  // ---------------- ACT 3a: Mythwood Pass — the black wood, treasure-strewn
  mythwood: {
    id: 'mythwood',
    name: 'Mythwood Pass',
    theme: {
      grassA: '#2e2c36', grassB: '#262430',
      road: '#4e4248', roadEdge: '#282026',
      water: '#2c2440', shore: '#5c5266',
      scatter: 'ash',
      fog: '#7a7086',
      hemiSky: '#b0a0c8', hemiGround: '#2c2632',
      sun: '#d8a8e8', sunIntensity: 1.9, exposure: 1.05,
    },
    waypoints: [
      [-1.5, 1.5], [2.5, 1.5], [2.5, 11.5], [10.5, 2.5],
      [13.5, 4.5], [16.5, 2.5], [19.5, 5.5], [25.5, 6.5],
    ],
    water: [],
    cloudPaths: [[[6.5, 4.5], [17.5, 8.5], [9.5, 12.5]]],
    props: [
      { model: 'chest', x: 901, y: 350, rot: 0.7853981633974483, scale: 1 },
      { model: 'chest', x: 787, y: 328, rot: 1.5707963267948966, scale: 1 },
      { model: 'chest', x: 700, y: 286, rot: 1.5707963267948966, scale: 1.3 },
      { model: 'chest', x: 654, y: 240, rot: 0, scale: 1 },
      { model: 'chest', x: 931, y: 177, rot: 0, scale: 1.3 },
      { model: 'chest', x: 861, y: 128, rot: 0, scale: 1 },
      { model: 'chest', x: 797, y: 63, rot: 0, scale: 1 },
      { model: 'chest', x: 894, y: 35, rot: 0, scale: 1 },
      { model: 'barrels', x: 235, y: 616, rot: 0, scale: 1 },
      { model: 'barrels', x: 446, y: 603, rot: 0, scale: 1 },
      { model: 'barrels', x: 626, y: 602, rot: 0.7853981633974483, scale: 1 },
      { model: 'barrels', x: 711, y: 537, rot: 0, scale: 1 },
      { model: 'barrels', x: 843, y: 503, rot: 0, scale: 1 },
      { model: 'barrels', x: 933, y: 540, rot: 0, scale: 1 },
      { model: 'rock_c', x: 23, y: 183, rot: 0, scale: 1 },
      { model: 'rock_c', x: 29, y: 283, rot: 0, scale: 1 },
      { model: 'rock_c', x: 193, y: 49, rot: 0.7853981633974483, scale: 0.85 },
      { model: 'rock_c', x: 183, y: 154, rot: 1.5707963267948966, scale: 1 },
      { model: 'tree_b', x: 460, y: 18, rot: 0, scale: 0.7 },
      { model: 'tree_b', x: 581, y: 20, rot: 0, scale: 0.7 },
      { model: 'rock_a', x: 40, y: 616, rot: 0, scale: 1 },
      { model: 'barrel', x: 467, y: 463, rot: 0, scale: 1 },
      { model: 'crates', x: 487, y: 318, rot: 0, scale: 1 },
      { model: 'crates', x: 611, y: 383, rot: 0, scale: 1 },
      { model: 'crates', x: 748, y: 422, rot: 0, scale: 1 },
      { model: 'tree_a', x: 335, y: 608, rot: 1.5707963267948966, scale: 1 },
      { model: 'tree_a', x: 340, y: 530, rot: 0, scale: 1 },
      { model: 'tree_a', x: 487, y: 395, rot: 0, scale: 1 },
      { model: 'tree_a', x: 850, y: 619, rot: 0, scale: 1 },
    ],
  },

  // ---------------- ACT 3b: End Pass — embers, a dead river, the last road
  endpass: {
    id: 'endpass',
    name: 'End Pass',
    theme: {
      grassA: '#38322e', grassB: '#2e2926',
      road: '#54443c', roadEdge: '#2a221e',
      water: '#3a2c2c', shore: '#645448',
      scatter: 'ash',
      fog: '#8a7a72',
      hemiSky: '#d0a898', hemiGround: '#342a24',
      sun: '#ff9e6a', sunIntensity: 2.0, exposure: 1.1,
    },
    waypoints: [
      [-1.5, 1.5], [7.5, 1.5], [2.5, 5.5], [16.5, 7.5],
      [13.5, 2.5], [17.5, -1.5], [21.5, 2.5], [25.5, 3.5],
    ],
    water: [
      [22, 8], [22, 9], [21, 9], [21, 10], [20, 10], [20, 11], [19, 12],
      [18, 12], [17, 12], [17, 13], [16, 13], [15, 13], [14, 13], [13, 13],
      [12, 13], [12, 14], [11, 14], [10, 14], [11, 15], [12, 15], [13, 15],
      [14, 15], [14, 14], [15, 14], [16, 14], [17, 14], [18, 13], [19, 13],
      [20, 13], [21, 13], [21, 12], [22, 12], [22, 11], [22, 10], [23, 10],
      [23, 9], [23, 8], [21, 11], [20, 12],
      [10, 0], [10, 1], [10, 2], [10, 3], [10, 4], [10, 5], [11, 5], [12, 5],
    ],
    cloudPaths: [[[5.5, 8.5], [14.5, 10.5], [7.5, 13.5]]],
    props: [
      { model: 'tree_b', x: 471, y: 15, rot: 0, scale: 1 },
      { model: 'tree_b', x: 461, y: 64, rot: 0, scale: 1 },
      { model: 'tree_b', x: 468, y: 111, rot: 0, scale: 1 },
      { model: 'tree_b', x: 480, y: 159, rot: 0, scale: 1 },
      { model: 'tree_a', x: 755, y: 69, rot: 0, scale: 1 },
      { model: 'tree_a', x: 688, y: 82, rot: 0, scale: 1 },
      { model: 'tree_a', x: 647, y: 102, rot: 0, scale: 1 },
      { model: 'tree_a', x: 695, y: 189, rot: 0, scale: 1 },
      { model: 'rock_c', x: 752, y: 141, rot: 0, scale: 1 },
      { model: 'rock_c', x: 65, y: 146, rot: 0, scale: 1 },
      { model: 'rock_c', x: 269, y: 330, rot: 0, scale: 1 },
      { model: 'rock_c', x: 410, y: 363, rot: 0, scale: 1 },
      { model: 'rock_c', x: 654, y: 396, rot: 0, scale: 1 },
      { model: 'rock_c', x: 802, y: 274, rot: 0, scale: 1 },
      { model: 'rock_c', x: 910, y: 251, rot: 0, scale: 1 },
    ],
  },
};

/** The campaign route: each act rolls ONE map from its pool per run (seeded).
 *  Add editor-built maps to an act's pool and the campaign rotates them. */
export const ACT_MAP_POOLS: string[][] = [
  ['rockbend', 'backforest'],
  ['ashtown', 'pinetown'],
  ['mythwood', 'endpass'],
];

/** Every campaign-capable map id (campaign detection, saves). The legacy trio
 *  stays campaign-detectable so runs saved on the old maps keep working, but
 *  is out of the pools — new runs never roll them. */
export const ACT_MAPS = [...ACT_MAP_POOLS.flat(), 'vale', 'fen', 'peak'];

/** Seeded per-run pick — the same run seed always rolls the same map per act. */
export function mapForAct(act: number, seed: number): MapDef {
  const pool = ACT_MAP_POOLS[Math.min(act, ACT_MAP_POOLS.length - 1)];
  return MAPS[pool[Math.abs(Math.floor(seed / 97) + act * 31) % pool.length]];
}

export const DEFAULT_MAP = 'vale';
