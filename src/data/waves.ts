import type { WaveDef, WaveModifier } from '../game/types';

/**
 * Campaign: 3 acts (act 1 is a brisk EIGHT waves; acts 2-3 run the full ten),
 * each act on its own map, each act ending in a BOSS.
 * Act scaling multiplies enemy hp/speed/bounty; within an act, hp also ramps per wave.
 * Teaching arc (act 1): basics -> runners (ice!) -> knights (fire!) -> shades (fire immune!)
 * -> a taste of the sky -> armored boss (physical!). Acts 2-3 press much harder.
 */
export const ACT_WAVES: WaveDef[][] = [
  // ---------------- ACT 1 — Emerald Vale (8 waves) ----------------
  [
    [{ type: 'grunt', count: 8, gap: 0.9, delay: 0 }],
    [{ type: 'grunt', count: 13, gap: 0.7, delay: 0 }],
    [
      { type: 'grunt', count: 10, gap: 0.65, delay: 0 },
      { type: 'runner', count: 5, gap: 0.8, delay: 3 },
    ],
    // runner rush: control matters
    [{ type: 'runner', count: 15, gap: 0.5, delay: 0 }],
    // first knights: bring fire
    [
      { type: 'knight', count: 6, gap: 1.3, delay: 0 },
      { type: 'grunt', count: 9, gap: 0.55, delay: 4 },
    ],
    // mini-boss + ember shades: fire does NOTHING to either
    [
      { type: 'golemling', count: 1, gap: 0, delay: 0 },
      { type: 'shade', count: 9, gap: 0.85, delay: 2 },
    ],
    // a TASTE of the sky (just a pair of gargoyles) + the first orcs
    [
      { type: 'gargoyle', count: 2, gap: 2.0, delay: 0 },
      { type: 'runner', count: 12, gap: 0.45, delay: 2 },
      { type: 'orcraider', count: 6, gap: 0.7, delay: 4 },
      { type: 'knight', count: 4, gap: 1.1, delay: 7 },
    ],
    // BOSS: the Ironhide Warlord — crack the armor with PHYSICAL damage while
    // his stun grenades silence a random tower every couple of seconds
    [
      { type: 'warlord', count: 1, gap: 0, delay: 0 },
      { type: 'knight', count: 4, gap: 1.6, delay: 5 },
      { type: 'grunt', count: 8, gap: 0.6, delay: 9 },
    ],
  ],

  // ---------------- ACT 2 — Ashen Fen (the horde arrives) ----------------
  [
    [
      { type: 'orcraider', count: 12, gap: 0.55, delay: 0 },
      { type: 'runner', count: 6, gap: 0.6, delay: 4 },
    ],
    [
      { type: 'shade', count: 10, gap: 0.7, delay: 0 },
      { type: 'orcbrute', count: 2, gap: 3, delay: 4 },
      { type: 'slime_big', count: 2, gap: 5, delay: 2 }, // they split, and split again
    ],
    // the sky opens: GARGOYLES fly straight across your maze
    [
      { type: 'orcraider', count: 10, gap: 0.5, delay: 0 },
      { type: 'orcshaman', count: 1, gap: 0, delay: 2 }, // kill the healer FIRST
      { type: 'gargoyle', count: 4, gap: 1.2, delay: 3 },
      { type: 'knight', count: 6, gap: 0.9, delay: 4 },
    ],
    [
      { type: 'runner', count: 24, gap: 0.32, delay: 0 },
      { type: 'burrower', count: 3, gap: 1.5, delay: 3 }, // they tunnel PAST your kill zone
      { type: 'thief', count: 1, gap: 0, delay: 5 }, // he's after your GOLD
    ],
    // first WAR WAGON — kill it early or fight its orcs deep in your lines
    [
      { type: 'warwagon', count: 1, gap: 0, delay: 0 },
      { type: 'hexer', count: 1, gap: 0, delay: 2 }, // and now they curse your towers
      { type: 'shade', count: 8, gap: 0.7, delay: 3 },
    ],
    [
      { type: 'knight', count: 8, gap: 0.8, delay: 0 },
      { type: 'orcshaman', count: 2, gap: 6, delay: 2 },
      { type: 'frostshaman', count: 1, gap: 0, delay: 3 }, // his cold slows YOUR towers
      { type: 'gargoyle', count: 5, gap: 1.0, delay: 3 },
      { type: 'orcraider', count: 12, gap: 0.45, delay: 4 },
    ],
    [
      { type: 'runner', count: 14, gap: 0.4, delay: 0 },
      { type: 'orcbrute', count: 3, gap: 2.5, delay: 3 },
      { type: 'slime_big', count: 2, gap: 4, delay: 5 },
      { type: 'thief', count: 1, gap: 0, delay: 6 },
      { type: 'golemling', count: 1, gap: 0, delay: 7 },
    ],
    [
      { type: 'warwagon', count: 2, gap: 9, delay: 0 },
      { type: 'hexer', count: 2, gap: 7, delay: 2 },
      { type: 'shade', count: 10, gap: 0.6, delay: 3 },
    ],
    [
      { type: 'orcraider', count: 16, gap: 0.35, delay: 0 },
      { type: 'orcshaman', count: 2, gap: 5, delay: 2 },
      { type: 'frostshaman', count: 2, gap: 8, delay: 2 },
      { type: 'gargoyle', count: 6, gap: 0.9, delay: 3 },
      { type: 'shieldbearer', count: 1, gap: 0, delay: 4 },
      { type: 'burrower', count: 4, gap: 1.4, delay: 5 },
      { type: 'knight', count: 6, gap: 0.9, delay: 9 },
    ],
    // BOSS: the Pyre Titan — burns cannot touch it, cold slides off
    [
      { type: 'pyretitan', count: 1, gap: 0, delay: 0 },
      { type: 'orcshaman', count: 1, gap: 0, delay: 4 }, // healing the Titan!
      { type: 'gargoyle', count: 4, gap: 1.1, delay: 5 },
      { type: 'orcraider', count: 10, gap: 0.5, delay: 6 },
    ],
  ],

  // ---------------- ACT 3 — Obsidian Pass (the full war machine + the sky) ----------------
  [
    [
      { type: 'orcraider', count: 14, gap: 0.5, delay: 0 },
      { type: 'wardrummer', count: 1, gap: 0, delay: 2 }, // the horde marches to his beat
      { type: 'shieldbearer', count: 1, gap: 0, delay: 3 },
      { type: 'orcbrute', count: 2, gap: 3, delay: 4 },
    ],
    [
      { type: 'wraith', count: 6, gap: 1.0, delay: 0 }, // they slip between your shots
      { type: 'banshee', count: 2, gap: 4, delay: 2 }, // kill her AWAY from your towers
      { type: 'mirrorslime', count: 1, gap: 0, delay: 3 }, // magic splits it — hit it with STONE
      { type: 'runner', count: 12, gap: 0.4, delay: 4 },
    ],
    [
      { type: 'troll', count: 1, gap: 0, delay: 0 }, // crack him and BURST — he heals
      { type: 'hexer', count: 2, gap: 6, delay: 2 },
      { type: 'knight', count: 8, gap: 0.8, delay: 3 },
    ],
    [
      { type: 'siegetower', count: 1, gap: 0, delay: 0 }, // it unloads as it rolls
      { type: 'drake', count: 3, gap: 1.4, delay: 3 }, // fast burn-proof flyers
      { type: 'shade', count: 10, gap: 0.6, delay: 4 },
    ],
    [
      { type: 'orcraider', count: 18, gap: 0.35, delay: 0 },
      { type: 'orcshaman', count: 2, gap: 5, delay: 2 },
      { type: 'necromancer', count: 1, gap: 0, delay: 3 }, // he raises what you kill
      { type: 'slime_big', count: 2, gap: 4, delay: 4 },
      { type: 'wardrummer', count: 1, gap: 0, delay: 5 },
      { type: 'orcbrute', count: 3, gap: 2.5, delay: 6 },
    ],
    [
      { type: 'troll', count: 2, gap: 8, delay: 0 },
      { type: 'frostshaman', count: 2, gap: 7, delay: 1 },
      { type: 'drake', count: 4, gap: 1.2, delay: 2 },
      { type: 'banshee', count: 2, gap: 4, delay: 3 },
      { type: 'wraith', count: 6, gap: 0.9, delay: 3 },
    ],
    [
      { type: 'siegetower', count: 1, gap: 0, delay: 0 },
      { type: 'warwagon', count: 1, gap: 0, delay: 8 },
      { type: 'necromancer', count: 2, gap: 8, delay: 2 },
      { type: 'thief', count: 2, gap: 5, delay: 3 },
      { type: 'knight', count: 8, gap: 0.7, delay: 4 },
    ],
    [
      { type: 'wraith', count: 8, gap: 0.7, delay: 0 },
      { type: 'drake', count: 4, gap: 1.1, delay: 1 },
      { type: 'orcshaman', count: 2, gap: 5, delay: 2 },
      { type: 'shieldbearer', count: 1, gap: 0, delay: 3 },
      { type: 'burrower', count: 5, gap: 1.2, delay: 4 },
      { type: 'mirrorslime', count: 2, gap: 7, delay: 5 },
      { type: 'troll', count: 1, gap: 0, delay: 6 },
      { type: 'runner', count: 12, gap: 0.4, delay: 8 },
    ],
    [
      { type: 'siegetower', count: 2, gap: 12, delay: 0 },
      { type: 'wardrummer', count: 2, gap: 8, delay: 2 },
      { type: 'frostshaman', count: 2, gap: 9, delay: 2 },
      { type: 'necromancer', count: 2, gap: 9, delay: 3 },
      { type: 'banshee', count: 3, gap: 3, delay: 3 },
      { type: 'orcraider', count: 16, gap: 0.35, delay: 4 },
      { type: 'drake', count: 5, gap: 1.0, delay: 6 },
      { type: 'mirrorslime', count: 2, gap: 8, delay: 7 },
      { type: 'orcbrute', count: 4, gap: 2.2, delay: 8 },
    ],
    // THE BOSS: the Aetherwyrm descends — its roar remakes your defenses mid-fight.
    [
      { type: 'aetherwyrm', count: 1, gap: 0, delay: 0 },
      { type: 'orcshaman', count: 2, gap: 6, delay: 4 }, // healers on the dragon!
      { type: 'shieldbearer', count: 2, gap: 8, delay: 5 }, // and wards capping your hits
      { type: 'troll', count: 1, gap: 0, delay: 8 },
      { type: 'drake', count: 4, gap: 1.2, delay: 10 },
      { type: 'wraith', count: 6, gap: 0.8, delay: 12 },
    ],
  ],
];

export const TOTAL_ACTS = ACT_WAVES.length;

/** Acts vary in length now (act 1 is 8 waves, acts 2-3 are 10). */
export function wavesInAct(act: number): number {
  return wavesForAct(act).length;
}

/** Per-act enemy multipliers — the campaign's difficulty spine. */
export const ACT_SCALING = [
  { hp: 1.0, speed: 1.0, bounty: 1.0 },
  { hp: 2.0, speed: 1.08, bounty: 1.35 },
  { hp: 3.4, speed: 1.15, bounty: 1.7 },
];

/** Within an act, enemies also toughen a little every wave. */
export const WAVE_HP_RAMP = 0.08; // hp x (1 + round * 0.08)

/** Waves for a given act — custom (editor) maps play act 1's list as free-play. */
export function wavesForAct(act: number): WaveDef[] {
  return ACT_WAVES[Math.min(act, ACT_WAVES.length - 1)];
}

export const ROUND_BONUS_BASE = 25;
export const ROUND_BONUS_PER_ROUND = 3;

// ---------------------------------------------------------------- elite waves

export const ELITE_MODIFIERS: WaveModifier[] = [
  { id: 'enraged', name: 'Enraged', desc: '+40% speed', speedMult: 1.4 },
  { id: 'stoneskin', name: 'Stoneskin', desc: '+60% health', hpMult: 1.6 },
  { id: 'slippery', name: 'Slippery', desc: 'Immune to Wet', immune: ['wet'] },
  { id: 'fireproof', name: 'Fireproof', desc: 'Immune to Burn', immune: ['burn'] },
  { id: 'steadfast', name: 'Steadfast', desc: 'Immune to knockback', gustImmune: true },
];

export const ELITE_CHANCE = 0.22;
export const ELITE_MIN_ROUND = 3; // 0-based: wave 4+
