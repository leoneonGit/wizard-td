import type { WizardDef } from '../game/types';

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
};

export const SHOP_ORDER = ['fire', 'ice', 'lightning', 'water', 'wind'];
