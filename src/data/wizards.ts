import type { TowerFamily, UpgradePath, WizardDef } from '../game/types';

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

  // ---------------- archers (physical precision family: elf sniper / human pierce / orc control) ----------------
  longbow: {
    id: 'longbow',
    name: 'Elf Longbow',
    element: 'physical',
    placement: 'ground',
    family: 'archer',
    cost: 110,
    desc: 'Elven marksman. Enormous range, heavy single arrows — the sniper of the realm.',
    range: 195,
    rate: 2.0,
    damage: 34,
    projSpeed: 560,
    splash: 0,
    chains: 0,
    chainFalloff: 0,
    color: '#7dc98f',
    icon: '🏹',
    upgrades: [
      {
        name: 'Marksman',
        tiers: [
          { name: 'Heavy Draw', cost: 80, desc: '+12 damage', mod: { damage: 12 } },
          { name: 'Eagle Eye', cost: 130, desc: '+35 range', mod: { range: 35 } },
          { name: 'Heartseeker', cost: 320, desc: '+24 damage', mod: { damage: 24 } },
        ],
      },
      {
        name: 'Fleetness',
        tiers: [
          { name: 'Swift Nock', cost: 75, desc: '15% faster shots', mod: { rateMul: 0.85 } },
          { name: 'Windrunner', cost: 140, desc: '20% faster shots', mod: { rateMul: 0.8 } },
          { name: 'Arrowstorm', cost: 300, desc: '+10 dmg, 15% faster', mod: { damage: 10, rateMul: 0.85 } },
        ],
      },
    ],
  },

  ballesta: {
    id: 'ballesta',
    name: 'Human Ballesta',
    element: 'physical',
    placement: 'ground',
    family: 'archer',
    pierce: true,
    cost: 100,
    desc: 'Crank-loaded crossbow. Short range, but bolts PIERCE clean through everything in a line.',
    range: 95,
    rate: 1.2,
    damage: 12,
    projSpeed: 480,
    splash: 0,
    chains: 0,
    chainFalloff: 0,
    color: '#5b7fc9',
    icon: '🎯',
    upgrades: [
      {
        name: 'Penetration',
        tiers: [
          { name: 'Steel Bolts', cost: 70, desc: '+5 damage', mod: { damage: 5 } },
          { name: 'Windlass', cost: 130, desc: '20% faster reload', mod: { rateMul: 0.8 } },
          { name: 'Arbalest', cost: 300, desc: '+12 damage', mod: { damage: 12 } },
        ],
      },
      {
        name: 'Fieldcraft',
        tiers: [
          { name: 'Braced Stock', cost: 65, desc: '+18 range', mod: { range: 18 } },
          { name: 'Quick Hands', cost: 120, desc: '15% faster reload', mod: { rateMul: 0.85 } },
          { name: 'Siege Position', cost: 260, desc: '+30 range, +6 dmg', mod: { range: 30, damage: 6 } },
        ],
      },
    ],
  },

  bolas: {
    id: 'bolas',
    name: 'Orc Trapper',
    element: 'physical',
    placement: 'ground',
    family: 'archer',
    entangles: true,
    cost: 115,
    desc: 'Hurls bolas that ENTANGLE — roots enemies in place. Pure lockdown; never disturbs your Freeze combos.',
    range: 125,
    rate: 1.8,
    damage: 6,
    projSpeed: 320,
    splash: 0,
    chains: 0,
    chainFalloff: 0,
    color: '#8c9c72',
    icon: '🪢',
    upgrades: [
      {
        name: 'Snares',
        tiers: [
          { name: 'Heavier Weights', cost: 75, desc: 'Entangle +0.4s', mod: { entangleDur: 0.4 } },
          { name: 'Barbed Cords', cost: 130, desc: '+8 damage', mod: { damage: 8 } },
          { name: 'Master Trapper', cost: 300, desc: 'Entangle +0.6s', mod: { entangleDur: 0.6 } },
        ],
      },
      {
        name: 'Warcraft',
        tiers: [
          { name: 'Strong Arm', cost: 70, desc: '+25 range', mod: { range: 25 } },
          { name: 'Rapid Toss', cost: 125, desc: '20% faster throws', mod: { rateMul: 0.8 } },
          { name: 'Twin Bolas', cost: 280, desc: '25% faster, +5 dmg', mod: { rateMul: 0.75, damage: 5 } },
        ],
      },
    ],
  },

  // ---------------- trees (stationary living towers; nature's own siegeworks) ----------------
  rootgrasp: {
    id: 'rootgrasp',
    name: 'Rootgrasp Tree',
    element: 'physical',
    placement: 'ground',
    family: 'tree',
    groundAttack: true,
    cost: 90,
    desc: 'Roots erupt beneath enemies — no projectile to dodge, and every strike SLOWS.',
    range: 110,
    rate: 1.4,
    damage: 9,
    projSpeed: 0,
    splash: 0,
    chains: 0,
    chainFalloff: 0,
    color: '#6a8f4f',
    icon: '🌳',
    upgrades: [
      {
        name: 'Deep Roots',
        tiers: [
          { name: 'Gnarled Grip', cost: 70, desc: 'Slow +10% stronger', mod: { rootSlow: 0.1 } },
          { name: 'Thick Taproot', cost: 120, desc: '+6 damage', mod: { damage: 6 } },
          { name: 'Strangleroot', cost: 280, desc: 'Slow +15%, +6 dmg', mod: { rootSlow: 0.15, damage: 6 } },
        ],
      },
      {
        name: 'Overgrowth',
        tiers: [
          { name: 'Spreading Roots', cost: 75, desc: '+22 range', mod: { range: 22 } },
          { name: 'Quickened Sap', cost: 130, desc: '20% faster strikes', mod: { rateMul: 0.8 } },
          { name: 'Ancient Reach', cost: 260, desc: '+30 range, +5 dmg', mod: { range: 30, damage: 5 } },
        ],
      },
    ],
  },

  boulder: {
    id: 'boulder',
    name: 'Boulder Tree',
    element: 'physical',
    placement: 'ground',
    family: 'tree',
    cost: 105,
    desc: 'An old ent that hurls boulders. Slow, furious, and the splash flattens whole clumps.',
    range: 135,
    rate: 2.6,
    damage: 24,
    projSpeed: 210,
    splash: 46,
    chains: 0,
    chainFalloff: 0,
    color: '#8d7a5e',
    icon: '🪨',
    upgrades: [
      {
        name: 'Avalanche',
        tiers: [
          { name: 'Bigger Rocks', cost: 80, desc: '+10 damage', mod: { damage: 10 } },
          { name: 'Wide Impact', cost: 140, desc: '+16 splash radius', mod: { splash: 16 } },
          { name: 'Meteor Toss', cost: 320, desc: '+18 dmg, +12 splash', mod: { damage: 18, splash: 12 } },
        ],
      },
      {
        name: 'Old Growth',
        tiers: [
          { name: 'Long Arms', cost: 70, desc: '+25 range', mod: { range: 25 } },
          { name: 'Limber Boughs', cost: 130, desc: '20% faster throws', mod: { rateMul: 0.8 } },
          { name: 'Wrath of Ages', cost: 300, desc: '25% faster throws', mod: { rateMul: 0.75 } },
        ],
      },
    ],
  },

  thornspitter: {
    id: 'thornspitter',
    name: 'Thornspitter',
    element: 'physical',
    placement: 'ground',
    family: 'tree',
    cost: 95,
    desc: 'A bristling bush that machine-guns needles — the fastest attacker in the realm. Loves "every Nth shot" cards.',
    range: 100,
    rate: 0.25,
    damage: 3,
    projSpeed: 450,
    splash: 0,
    chains: 0,
    chainFalloff: 0,
    color: '#4f8f5c',
    icon: '🌵',
    upgrades: [
      {
        name: 'Bristles',
        tiers: [
          { name: 'Sharper Thorns', cost: 70, desc: '+2 damage', mod: { damage: 2 } },
          { name: 'Dense Quills', cost: 130, desc: '15% faster spray', mod: { rateMul: 0.85 } },
          { name: 'Ironwood Barbs', cost: 300, desc: '+4 damage', mod: { damage: 4 } },
        ],
      },
      {
        name: 'Wildgrowth',
        tiers: [
          { name: 'Tall Canes', cost: 65, desc: '+20 range', mod: { range: 20 } },
          { name: 'Feverish Growth', cost: 125, desc: '15% faster spray', mod: { rateMul: 0.85 } },
          { name: 'Bramble Storm', cost: 280, desc: '+2 dmg, +20 range', mod: { damage: 2, range: 20 } },
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

  generic_archer: {
    id: 'generic_archer',
    name: 'Archer',
    element: 'physical',
    placement: 'ground',
    family: 'archer',
    isGeneric: true,
    cost: 85,
    desc: 'A fresh recruit with a training bow. Place, then click to specialize into a random draw of marksmen.',
    range: 0,
    rate: 0,
    damage: 0,
    projSpeed: 0,
    splash: 0,
    chains: 0,
    chainFalloff: 0,
    color: '#c9a55b',
    icon: '🏹',
    upgrades: [
      { name: '—', tiers: [] },
      { name: '—', tiers: [] },
    ],
  },

  generic_tree: {
    id: 'generic_tree',
    name: 'Sapling',
    element: 'physical',
    placement: 'ground',
    family: 'tree',
    isGeneric: true,
    cost: 70,
    desc: 'A drowsy young ent. Place, then click to awaken it into a random draw of tree-folk.',
    range: 0,
    rate: 0,
    damage: 0,
    projSpeed: 0,
    splash: 0,
    chains: 0,
    chainFalloff: 0,
    color: '#5f9e57',
    icon: '🌱',
    upgrades: [
      { name: '—', tiers: [] },
      { name: '—', tiers: [] },
    ],
  },
};

/** Shop only sells the generic shells now — real specializations are reached via the draw. */
export const SHOP_ORDER = ['generic_wizard', 'generic_goblin', 'generic_archer', 'generic_tree'];

/** All non-generic defs for a given family, in a stable order for the specialize draw. */
export function specializationsFor(family: TowerFamily): WizardDef[] {
  return Object.values(WIZARDS).filter((d) => d.family === family && !d.isGeneric && !d.isEvolved);
}

// ---------------------------------------------------------------- evolutions

const NO_PATHS: [UpgradePath, UpgradePath] = [
  { name: '—', tiers: [] },
  { name: '—', tiers: [] },
];

/** Evolved super-forms: reached by maxing both paths + paying gold (Evolve button).
 *  Holding the tagged card halves the cost — build synergy pays off literally. */
export const EVOLUTIONS: Record<string, { to: string; cost: number; cardId: string }> = {
  fire: { to: 'phoenix', cost: 380, cardId: 'pr_wildfire' },
  ice: { to: 'wintercourt', cost: 380, cardId: 'pr_executioner' },
  lightning: { to: 'tempest', cost: 400, cardId: 'rx_conduct2' },
  water: { to: 'tidelord', cost: 350, cardId: 'pr_soaked' },
  wind: { to: 'zephyr', cost: 350, cardId: 'rx_evap1' },
  slingshot: { to: 'warlord', cost: 340, cardId: 'pr_firstblood' },
  dynamite: { to: 'sapperking', cost: 380, cardId: 'pr_powder' },
  gong: { to: 'doomgong', cost: 360, cardId: 'pr_opportunist' },
  longbow: { to: 'stormpiercer', cost: 400, cardId: 'arc_crit1' },
  ballesta: { to: 'ironstorm', cost: 360, cardId: 'arc_root1' },
  bolas: { to: 'chainwarden', cost: 350, cardId: 'arc_root1' },
  rootgrasp: { to: 'elderroot', cost: 360, cardId: 'tre_crit1' },
  boulder: { to: 'mountain', cost: 400, cardId: 'pr_harvest' },
  thornspitter: { to: 'bramblehydra', cost: 380, cardId: 'tre_crit1' },
};

/** Compact helper for evolved defs — they share family/element/placement with the base. */
function evolved(base: string, def: Partial<WizardDef> & { id: string; name: string; desc: string; icon: string; color: string }): WizardDef {
  const b = WIZARDS[base];
  return {
    element: b.element,
    placement: b.placement,
    family: b.family,
    cost: 0,
    range: b.range,
    rate: b.rate,
    damage: b.damage,
    projSpeed: b.projSpeed,
    splash: b.splash,
    chains: b.chains,
    chainFalloff: b.chainFalloff,
    needsCloud: b.needsCloud,
    auraKind: b.auraKind,
    pierce: b.pierce,
    entangles: b.entangles,
    groundAttack: b.groundAttack,
    isEvolved: true,
    upgrades: NO_PATHS,
    ...def,
  };
}

// evolved forms are registered after WIZARDS so the helper can read the bases
Object.assign(WIZARDS, {
  phoenix: evolved('fire', {
    id: 'phoenix', name: 'Phoenix Herald', icon: '🐦‍🔥', color: '#ff8c42',
    desc: 'EVOLVED. Fire made flesh — victims pass their flames on death, forever.',
    damage: 26, rate: 0.75, splash: 44, range: 145, projSpeed: 340,
    baseMods: { burnDps: 5, burnDuration: 1 },
    innateFx: { spreadBurnOnDeath: true },
  }),
  wintercourt: evolved('ice', {
    id: 'wintercourt', name: 'Winter Court Sage', icon: '👑', color: '#a8e6ff',
    desc: 'EVOLVED. The deep cold answers — Frozen enemies take +60% from her hand.',
    damage: 15, rate: 0.6, range: 155, projSpeed: 400,
    baseMods: { chillPct: 0.15 },
    innateFx: { bonusVsStatus: { status: 'frozen', mult: 1.6 } },
  }),
  tempest: evolved('lightning', {
    id: 'tempest', name: 'Tempest Lord', icon: '🌩️', color: '#d9a8ff',
    desc: 'EVOLVED. The storm has opinions. Every 5th bolt is a CRIT; chains run long.',
    damage: 32, rate: 0.9, range: 165, chains: 4, chainFalloff: 0.8,
    innateFx: { critEveryN: { n: 5, mult: 2 } },
  }),
  tidelord: evolved('water', {
    id: 'tidelord', name: 'Tidelord', icon: '🔱', color: '#26c2e8',
    desc: 'EVOLVED. The pond obeys. Wet enemies take +50% from the tide.',
    damage: 11, rate: 0.8, range: 150,
    baseMods: { soakSlow: 0.1, wetDuration: 2 },
    innateFx: { bonusVsStatus: { status: 'wet', mult: 1.5 } },
  }),
  zephyr: evolved('wind', {
    id: 'zephyr', name: 'Zephyr Sovereign', icon: '🌀', color: '#bcd9ce',
    desc: 'EVOLVED. Commands the wind itself — no cloud required, and the gusts hit like walls.',
    damage: 9, rate: 1.0, range: 140, needsCloud: false,
    baseMods: { knockback: 40 },
  }),
  warlord: evolved('slingshot', {
    id: 'warlord', name: 'Goblin Warlord', icon: '👹', color: '#7da35c',
    desc: 'EVOLVED. His shots pierce through the whole column. The lads cheer every volley.',
    damage: 18, rate: 0.7, range: 130, pierce: true, projSpeed: 460,
  }),
  sapperking: evolved('dynamite', {
    id: 'sapperking', name: 'Sapper King', icon: '💥', color: '#ffb163',
    desc: 'EVOLVED. Everything he kills becomes a bomb. Chain reactions are the point.',
    damage: 32, rate: 1.0, splash: 62, range: 135,
    innateFx: { onKillExplode: { damage: 26, radius: 52 } },
  }),
  doomgong: evolved('gong', {
    id: 'doomgong', name: 'Gong of Doom', icon: '🛎️', color: '#f4d98a',
    desc: 'EVOLVED. One strike and the whole field flinches — Rattled +40%, huge reach.',
    rate: 1.6, range: 160,
    baseMods: { rattlePct: 0.15 },
  }),
  stormpiercer: evolved('longbow', {
    id: 'stormpiercer', name: 'Stormpiercer', icon: '🏹', color: '#7dc98f',
    desc: 'EVOLVED. An elven legend. Every 3rd arrow CRITS for double across half the map.',
    damage: 55, rate: 1.5, range: 240, projSpeed: 650,
    innateFx: { critEveryN: { n: 3, mult: 2 } },
  }),
  ironstorm: evolved('ballesta', {
    id: 'ironstorm', name: 'Ironstorm Arbalest', icon: '🎯', color: '#5b7fc9',
    desc: 'EVOLVED. A crank-fed storm of bolts, each punching through the entire line.',
    damage: 20, rate: 0.65, range: 115, projSpeed: 540,
  }),
  chainwarden: evolved('bolas', {
    id: 'chainwarden', name: 'Warden of Chains', icon: '⛓️', color: '#8c9c72',
    desc: 'EVOLVED. Longer roots, crueler hits — Entangled enemies take +50% from him.',
    damage: 12, rate: 1.3, range: 145,
    baseMods: { entangleDur: 0.5 },
    innateFx: { bonusVsStatus: { status: 'entangled', mult: 1.5 } },
  }),
  elderroot: evolved('rootgrasp', {
    id: 'elderroot', name: 'Elderroot Colossus', icon: '🌲', color: '#4c6b38',
    desc: 'EVOLVED. The forest remembers. Wider eruptions, crushing grip.',
    damage: 17, rate: 1.1, range: 135,
    baseMods: { rootSlow: 0.15 },
  }),
  mountain: evolved('boulder', {
    id: 'mountain', name: 'The Walking Mountain', icon: '⛰️', color: '#8d7a5e',
    desc: 'EVOLVED. Every kill splinters into shrapnel. Whole waves vanish under the rubble.',
    damage: 42, rate: 2.2, splash: 62, range: 150, projSpeed: 240,
    innateFx: { onKillExplode: { damage: 20, radius: 48 } },
  }),
  bramblehydra: evolved('thornspitter', {
    id: 'bramblehydra', name: 'Bramble Hydra', icon: '🐉', color: '#6fcf5f',
    desc: 'EVOLVED. Two heads, twice the needles, zero mercy. The ultimate proc machine.',
    damage: 4, rate: 0.125, range: 115, projSpeed: 500,
  }),
} satisfies Record<string, WizardDef>);
