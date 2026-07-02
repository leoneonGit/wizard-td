import type { MapDef } from '../game/types';

/**
 * Grid is 24x16 cells of 40px (960x640).
 * Waypoints in cell coords; entry/exit sit off-board so creeps walk in/out cleanly.
 * "Emerald Vale": a serpentine with two long straights (good early spots) and
 * a tight double-bend in the middle (premium splash/chain real estate).
 */
export const MAPS: Record<string, MapDef> = {
  vale: {
    id: 'vale',
    name: 'Emerald Vale',
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
  },
};

export const DEFAULT_MAP = 'vale';
