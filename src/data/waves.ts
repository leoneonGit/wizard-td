import type { WaveDef } from '../game/types';

/**
 * 12-wave slice. Teaches counters progressively:
 *  w1-3 basics -> w4 runners (ice!) -> w5 knights (fire!) -> w7 shades (fire immune!)
 *  w6/w12 bosses. Balance target: beatable with smart element mixing, not with mono-element.
 */
export const WAVES: WaveDef[] = [
  // 1
  [{ type: 'grunt', count: 8, gap: 0.9, delay: 0 }],
  // 2
  [{ type: 'grunt', count: 13, gap: 0.75, delay: 0 }],
  // 3
  [
    { type: 'grunt', count: 10, gap: 0.7, delay: 0 },
    { type: 'runner', count: 4, gap: 0.9, delay: 3 },
  ],
  // 4 — runner rush: control matters
  [{ type: 'runner', count: 14, gap: 0.55, delay: 0 }],
  // 5 — first knights: bring fire
  [
    { type: 'knight', count: 6, gap: 1.4, delay: 0 },
    { type: 'grunt', count: 8, gap: 0.6, delay: 4 },
  ],
  // 6 — mini-boss
  [
    { type: 'golemling', count: 1, gap: 0, delay: 0 },
    { type: 'grunt', count: 10, gap: 0.8, delay: 2 },
  ],
  // 7 — ember shades: fire does NOTHING
  [
    { type: 'shade', count: 8, gap: 0.9, delay: 0 },
    { type: 'runner', count: 6, gap: 0.7, delay: 5 },
  ],
  // 8 — mixed pressure
  [
    { type: 'grunt', count: 12, gap: 0.5, delay: 0 },
    { type: 'knight', count: 5, gap: 1.2, delay: 3 },
    { type: 'shade', count: 5, gap: 1.0, delay: 7 },
  ],
  // 9 — speed check
  [
    { type: 'runner', count: 18, gap: 0.4, delay: 0 },
    { type: 'knight', count: 4, gap: 1.5, delay: 5 },
  ],
  // 10 — armor wall
  [
    { type: 'knight', count: 10, gap: 0.9, delay: 0 },
    { type: 'shade', count: 6, gap: 0.8, delay: 6 },
  ],
  // 11 — everything
  [
    { type: 'grunt', count: 14, gap: 0.4, delay: 0 },
    { type: 'runner', count: 10, gap: 0.5, delay: 4 },
    { type: 'knight', count: 6, gap: 1.1, delay: 8 },
    { type: 'shade', count: 6, gap: 0.9, delay: 12 },
  ],
  // 12 — THE GOLEM
  [
    { type: 'golem', count: 1, gap: 0, delay: 0 },
    { type: 'golemling', count: 2, gap: 3, delay: 6 },
    { type: 'runner', count: 8, gap: 0.7, delay: 10 },
  ],
];

export const ROUND_BONUS_BASE = 25;
export const ROUND_BONUS_PER_ROUND = 3;
