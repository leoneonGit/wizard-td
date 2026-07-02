import type { TowerFamily, WizardDef } from '../game/types';

/**
 * The three slice wizards. Upgrades: 2 paths x 3 tiers each (BTD6-style).
 * All numbers are starting points for playtest balancing.
 */
export const WIZARDS: Record<string, WizardDef> = {
  fire: {
    id: 'fire',
    name: 'Fire Mage',
    element: 'fire',
    placement: 'ground',
    family: 'wizard',
    cost: 100,
    desc: 'Hurls fireballs. Splash damage, ignites enemies (Burn). Shatters Frozen foes.',
    range: 130,
    rate: 0.95,
    damage: 14,
    projSpeed: 340,
    splash: 34,
    chains: 0,
    chainFalloff: 0,
    color: '#ff6b35',
    icon: '🔥',
    upgrades: [
      {
        name: 'Inferno',
        tiers: [
          { name: 'Hotter Flames', cost: 70, desc: '+6 damage', mod: { damage: 6 } },
          { name: 'Searing Burn', cost: 140, desc: 'Burn +8 dps, +1s', mod: { burnDps: 8, burnDuration: 1 } },
          { name: 'Blast Wave', cost: 320, desc: '+22 splash radius, +10 dmg', mod: { splash: 22, damage: 10 } },
        ],
      },
      {
        name: 'Pyromancy',
        tiers: [
          { name: 'Quick Cast', cost: 80, desc: '20% faster attacks', mod: { rateMul: 0.8 } },
          { name: 'Far Sight', cost: 120, desc: '+30 range', mod: { range: 30 } },
          { name: 'Rapid Fire', cost: 300, desc: '30% faster attacks', mod: { rateMul: 0.7 } },
        ],
      },
    ],
  },

  ice: {
    id: 'ice',
    name: 'Frost Mage',
    element: 'ice',
    placement: 'ground',
    family: 'wizard',
    cost: 110,
    desc: 'Chills and Soaks (Wet) enemies; stacked Chill Freezes. Enables Conduct & Shatter.',
    range: 120,
    rate: 0.75,
    damage: 7,
    projSpeed: 300,
    splash: 0,
    chains: 0,
    chainFalloff: 0,
    color: '#5bc8f5',
    icon: '❄️',
    upgrades: [
      {
        name: 'Deep Freeze',
        tiers: [
          { name: 'Bitter Cold', cost: 70, desc: 'Chill slows +15%', mod: { chillPct: 0.15 } },
          { name: 'Lasting Soak', cost: 110, desc: 'Wet lasts +3s', mod: { wetDuration: 3 } },
          { name: 'Permafrost', cost: 280, desc: 'Chill slows +20%, +6 dmg', mod: { chillPct: 0.2, damage: 6 } },
        ],
      },
      {
        name: 'Glacier',
        tiers: [
          { name: 'Ice Shards', cost: 80, desc: '+5 damage', mod: { damage: 5 } },
          { name: 'Frost Nova', cost: 160, desc: 'Attacks splash (26)', mod: { splash: 26 } },
          { name: 'Winter Reach', cost: 240, desc: '+35 range, faster cast', mod: { range: 35, rateMul: 0.85 } },
        ],
      },
    ],
  },

  lightning: {
    id: 'lightning',
    name: 'Storm Mage',
    element: 'lightning',
    placement: 'ground',
    family: 'wizard',
    cost: 140,
    desc: 'Chain lightning arcs between enemies. Conducts brutally through Wet targets.',
    range: 145,
    rate: 1.15,
    damage: 18,
    projSpeed: 0, // instant beam
    splash: 0,
    chains: 2,
    chainFalloff: 0.65,
    color: '#c77dff',
    icon: '⚡',
    upgrades: [
      {
        name: 'Tempest',
        tiers: [
          { name: 'Forked Bolt', cost: 90, desc: '+1 chain target', mod: { chains: 1 } },
          { name: 'High Voltage', cost: 150, desc: '+10 damage', mod: { damage: 10 } },
          { name: 'Storm Front', cost: 340, desc: '+2 chain targets', mod: { chains: 2 } },
        ],
      },
      {
        name: 'Stormcalling',
        tiers: [
          { name: 'Static Charge', cost: 80, desc: '15% faster attacks', mod: { rateMul: 0.85 } },
          { name: 'Long Arc', cost: 130, desc: '+35 range', mod: { range: 35 } },
          { name: 'Overload', cost: 320, desc: '+14 dmg, 15% faster', mod: { damage: 14, rateMul: 0.85 } },
        ],
      },
    ],
  },

  water: {
    id: 'water',
    name: 'Water Mage',
    element: 'water',
    placement: 'water',
    family: 'wizard',
    auraKind: 'tide',
    cost: 120,
    desc: 'Builds ONLY on water. Pulsing tide Soaks (Wet) and slows everything in range — the reaction engine.',
    range: 115,
    rate: 1.6,
    damage: 8,
    projSpeed: 0, // radial aura, no projectile
    splash: 0,
    chains: 0,
    chainFalloff: 0,
    color: '#3a86ff',
    icon: '🌊',
    upgrades: [
      {
        name: 'Tides',
        tiers: [
          { name: 'Undertow', cost: 70, desc: 'Slow +10%', mod: { soakSlow: 0.1 } },
          { name: 'Deep Soak', cost: 120, desc: 'Wet lasts +3s', mod: { wetDuration: 3 } },
          { name: 'Riptide', cost: 280, desc: 'Slow +15%, +8 dmg', mod: { soakSlow: 0.15, damage: 8 } },
        ],
      },
      {
        name: 'Depths',
        tiers: [
          { name: 'Swell', cost: 80, desc: '+25 range', mod: { range: 25 } },
          { name: 'Surge', cost: 140, desc: '25% faster pulses', mod: { rateMul: 0.75 } },
          { name: 'Tsunami', cost: 300, desc: '+12 dmg, +20 range', mod: { damage: 12, range: 20 } },
        ],
      },
    ],
  },

  wind: {
    id: 'wind',
    name: 'Cloud Mage',
    element: 'wind',
    placement: 'ground',
    needsCloud: true,
    family: 'wizard',
    auraKind: 'gust',
    cost: 160,
    desc: 'Rides the wind: only attacks while a cloud drifts nearby. Gusts hurl enemies BACKWARD along the path.',
    range: 130,
    rate: 2.2,
    damage: 6,
    projSpeed: 0, // radial gust
    splash: 0,
    chains: 0,
    chainFalloff: 0,
    color: '#b8d8d0',
    icon: '☁️',
    upgrades: [
      {
        name: 'Gale',
        tiers: [
          { name: 'Stiff Breeze', cost: 80, desc: '+25px knockback', mod: { knockback: 25 } },
          { name: 'Squall', cost: 150, desc: '+10 dmg', mod: { damage: 10 } },
          { name: 'Hurricane', cost: 320, desc: '+45px knockback', mod: { knockback: 45 } },
        ],
      },
      {
        name: 'Zephyr',
        tiers: [
          { name: 'Second Wind', cost: 90, desc: '20% faster gusts', mod: { rateMul: 0.8 } },
          { name: 'High Winds', cost: 140, desc: '+30 range', mod: { range: 30 } },
          { name: 'Jetstream', cost: 300, desc: '30% faster gusts', mod: { rateMul: 0.7 } },
        ],
      },
    ],
  },
  // ---------------- goblins (physical family; no elemental resistance interplay
  //                   except Dynamite, which reuses fire's splash+burn kit on purpose) ----------------
  slingshot: {
    id: 'slingshot',
    name: 'Slingshot Goblin',
    element: 'physical',
    placement: 'ground',
    family: 'goblin',
    cost: 75,
    desc: 'Cheap, fast, reliable. Physical damage always lands at full strength — no resistances apply.',
    range: 110,
    rate: 0.6,
    damage: 8,
    projSpeed: 380,
    splash: 0,
    chains: 0,
    chainFalloff: 0,
    color: '#a08060',
    icon: '🪨',
    upgrades: [
      {
        name: 'Quickdraw',
        tiers: [
          { name: 'Taut Cord', cost: 60, desc: '+3 damage', mod: { damage: 3 } },
          { name: 'Rapid Sling', cost: 110, desc: '18% faster attacks', mod: { rateMul: 0.82 } },
          { name: 'Iron Shot', cost: 240, desc: '+7 damage', mod: { damage: 7 } },
        ],
      },
      {
        name: 'Marksmanship',
        tiers: [
          { name: 'Keen Eye', cost: 60, desc: '+20 range', mod: { range: 20 } },
          { name: 'Steady Hand', cost: 100, desc: '+5 damage', mod: { damage: 5 } },
          { name: 'Deadeye', cost: 220, desc: '15% faster, +25 range', mod: { rateMul: 0.85, range: 25 } },
        ],
      },
    ],
  },

  dynamite: {
    id: 'dynamite',
    name: 'Dynamite Goblin',
    element: 'fire',
    placement: 'ground',
    family: 'goblin',
    cost: 95,
    desc: 'Lobs sputtering dynamite for big splash damage and Burn. Shares fire’s strengths — and its counters.',
    range: 100,
    rate: 1.5,
    damage: 10,
    projSpeed: 220,
    splash: 42,
    chains: 0,
    chainFalloff: 0,
    color: '#e0522f',
    icon: '🧨',
    upgrades: [
      {
        name: 'Bigger Bangs',
        tiers: [
          { name: 'Extra Fuse', cost: 65, desc: '+5 damage', mod: { damage: 5 } },
          { name: 'Shrapnel', cost: 120, desc: '+16 splash radius', mod: { splash: 16 } },
          { name: 'Volatile Mix', cost: 260, desc: 'Burn +6 dps, +1s', mod: { burnDps: 6, burnDuration: 1 } },
        ],
      },
      {
        name: 'Munitions',
        tiers: [
          { name: 'Quick Fuse', cost: 70, desc: '20% faster throws', mod: { rateMul: 0.8 } },
          { name: 'Long Toss', cost: 100, desc: '+20 range', mod: { range: 20 } },
          { name: 'Blasting Cap', cost: 250, desc: '+9 damage, +14 splash', mod: { damage: 9, splash: 14 } },
        ],
      },
    ],
  },

  gong: {
    id: 'gong',
    name: 'Gong Goblin',
    element: 'physical',
    placement: 'ground',
    family: 'goblin',
    auraKind: 'rattle',
    cost: 85,
    desc: 'Support, not a damage dealer. Pulses a Rattling gong that makes nearby foes take extra damage from everything.',
    range: 105,
    rate: 3,
    damage: 0,
    projSpeed: 0, // radial aura
    splash: 0,
    chains: 0,
    chainFalloff: 0,
    color: '#c9a63f',
    icon: '🔔',
    upgrades: [
      {
        name: 'Resonance',
        tiers: [
          { name: 'Bigger Gong', cost: 65, desc: 'Rattled +8% damage taken', mod: { rattlePct: 0.08 } },
          { name: 'Echo', cost: 110, desc: '+25 range', mod: { range: 25 } },
          { name: 'Thunderous Peal', cost: 240, desc: 'Rattled +10% damage taken', mod: { rattlePct: 0.1 } },
        ],
      },
      {
        name: 'Cadence',
        tiers: [
          { name: 'Steady Beat', cost: 70, desc: '20% faster pulses', mod: { rateMul: 0.8 } },
          { name: 'War Rhythm', cost: 110, desc: '+20 range', mod: { range: 20 } },
          { name: 'Relentless Toll', cost: 230, desc: '25% faster pulses', mod: { rateMul: 0.75 } },
        ],
      },
    ],
  },

  // ---------------- generic shells (shop-purchasable; never actually attack) ----------------
  generic_wizard: {
    id: 'generic_wizard',
    name: 'Wizard',
    element: 'physical',
    placement: 'any', // may stand on water — that's what unlocks Water in the specialize draw
    family: 'wizard',
    isGeneric: true,
    cost: 90,
    desc: 'An unproven apprentice. Place, then click to specialize into a random draw of elements.',
    range: 0,
    rate: 0,
    damage: 0,
    projSpeed: 0,
    splash: 0,
    chains: 0,
    chainFalloff: 0,
    color: '#8a7aff',
    icon: '🧙',
    upgrades: [
      { name: '—', tiers: [] },
      { name: '—', tiers: [] },
    ],
  },

  generic_goblin: {
    id: 'generic_goblin',
    name: 'Goblin',
    element: 'physical',
    placement: 'ground',
    family: 'goblin',
    isGeneric: true,
    cost: 75,
    desc: 'A goblin recruit, itching for a job. Place, then click to specialize into a random draw of roles.',
    range: 0,
    rate: 0,
    damage: 0,
    projSpeed: 0,
    splash: 0,
    chains: 0,
    chainFalloff: 0,
    color: '#7da35c',
    icon: '👺',
    upgrades: [
      { name: '—', tiers: [] },
      { name: '—', tiers: [] },
    ],
  },
};

/** Shop only sells the generic shells now — real specializations are reached via the draw. */
export const SHOP_ORDER = ['generic_wizard', 'generic_goblin'];

/** All non-generic defs for a given family, in a stable order for the specialize draw. */
export function specializationsFor(family: TowerFamily): WizardDef[] {
  return Object.values(WIZARDS).filter((d) => d.family === family && !d.isGeneric);
}
