import type { CardDef, Rarity } from '../game/types';

/**
 * Draft card pool — element-wide permanent buffs picked after each wave.
 * Weights: common 60 / uncommon 30 / rare 10. `unique` cards leave the pool once picked.
 */
export const CARDS: CardDef[] = [
  // ---------------- fire ----------------
  { id: 'fire_dmg1', name: 'Searing Flames', desc: 'All Fire Mages +4 damage', icon: '🔥', element: 'fire', rarity: 'common', mod: { damage: 4 } },
  { id: 'fire_rate1', name: 'Kindled Haste', desc: 'Fire Mages attack 12% faster', icon: '🔥', element: 'fire', rarity: 'common', mod: { rateMul: 0.88 } },
  { id: 'fire_burn1', name: 'Lingering Embers', desc: 'Burn +4/s and lasts +1s', icon: '🔥', element: 'fire', rarity: 'uncommon', mod: { burnDps: 4, burnDuration: 1 } },
  { id: 'fire_splash1', name: 'Bigger Booms', desc: 'Fire splash radius +14', icon: '🔥', element: 'fire', rarity: 'uncommon', mod: { splash: 14 } },
  { id: 'fire_dmg2', name: 'Inferno Core', desc: 'All Fire Mages +9 damage', icon: '🔥', element: 'fire', rarity: 'rare', mod: { damage: 9 } },

  // ---------------- ice ----------------
  { id: 'ice_chill1', name: 'Deeper Cold', desc: 'Chill slows +20% more', icon: '❄️', element: 'ice', rarity: 'rare', mod: { chillPct: 0.2 } },
  { id: 'ice_dmg1', name: 'Jagged Icicles', desc: 'All Frost Mages +3 damage', icon: '❄️', element: 'ice', rarity: 'common', mod: { damage: 3 } },
  { id: 'ice_wet1', name: 'Soaking Sleet', desc: 'Frost Wet lasts +2s', icon: '❄️', element: 'ice', rarity: 'common', mod: { wetDuration: 2 } },
  { id: 'ice_rate1', name: 'Flash Freeze', desc: 'Frost Mages attack 15% faster', icon: '❄️', element: 'ice', rarity: 'uncommon', mod: { rateMul: 0.85 } },
  { id: 'ice_range1', name: 'Glacial Reach', desc: 'Frost Mages +22 range', icon: '❄️', element: 'ice', rarity: 'uncommon', mod: { range: 22 } },

  // ---------------- lightning ----------------
  { id: 'ltn_dmg1', name: 'Amped Bolts', desc: 'All Storm Mages +5 damage', icon: '⚡', element: 'lightning', rarity: 'common', mod: { damage: 5 } },
  { id: 'ltn_chain1', name: 'Forked Streams', desc: 'Chain lightning +1 target', icon: '⚡', element: 'lightning', rarity: 'uncommon', mod: { chains: 1 } },
  { id: 'ltn_range1', name: 'Skyline Arcs', desc: 'Storm Mages +25 range', icon: '⚡', element: 'lightning', rarity: 'common', mod: { range: 25 } },
  { id: 'ltn_rate1', name: 'Static Rhythm', desc: 'Storm Mages attack 12% faster', icon: '⚡', element: 'lightning', rarity: 'uncommon', mod: { rateMul: 0.88 } },

  // (water mage cards removed by design — the tower carries the element on its own)

  // ---------------- void ----------------
  { id: 'void_dmg1', name: 'Umbral Edge', desc: 'All Void towers +4 damage', icon: '🌌', element: 'void', rarity: 'common', mod: { damage: 4 } },
  { id: 'void_rate1', name: 'Dark Resonance', desc: 'Void towers attack 12% faster', icon: '🌌', element: 'void', rarity: 'common', mod: { rateMul: 0.88 } },
  { id: 'void_range1', name: 'Deep Gaze', desc: 'Void towers +20 range', icon: '👁️', element: 'void', rarity: 'uncommon', mod: { range: 20 } },
  { id: 'void_splash1', name: 'Hungering Maw', desc: 'Void splash radius +14', icon: '🕳️', element: 'void', rarity: 'uncommon', mod: { splash: 14 } },
  { id: 'void_dmg2', name: 'Event Horizon', desc: 'All Void towers +9 damage', icon: '🌌', element: 'void', rarity: 'rare', mod: { damage: 9 } },

  // ---------------- wind ----------------
  { id: 'wnd_kb1', name: 'Tailwind', desc: 'Gust knockback +20px', icon: '☁️', element: 'wind', rarity: 'common', mod: { knockback: 20 } },
  { id: 'wnd_rate1', name: 'Brisk Gales', desc: 'Cloud Mages gust 15% faster', icon: '☁️', element: 'wind', rarity: 'uncommon', mod: { rateMul: 0.85 } },
  { id: 'wnd_range1', name: 'Far Horizons', desc: 'Cloud Mages +25 range', icon: '☁️', element: 'wind', rarity: 'common', mod: { range: 25 } },

  // ---------------- reactions (element: 'all') ----------------
  { id: 'rx_conduct1', name: 'Overcharge', desc: 'Conduct deals 2.0x (was 1.6x)', icon: '💫', element: 'all', rarity: 'rare', unique: true, reaction: { conductMult: 2.0 } },
  { id: 'rx_conduct2', name: 'Superconductor', desc: 'Conduct extends chains by 3 (was 1)', icon: '💫', element: 'all', rarity: 'rare', unique: true, reaction: { chainBonus: 3 } },
  { id: 'rx_shatter1', name: 'Brittle Frost', desc: 'Shatter deals 2.6x (was 2.0x)', icon: '💎', element: 'all', rarity: 'rare', unique: true, reaction: { shatterMult: 2.6 } },
  { id: 'rx_freeze1', name: 'Permafrost Grip', desc: 'Freeze lasts 1.7s (was 1.1s)', icon: '🧊', element: 'all', rarity: 'uncommon', unique: true, reaction: { freezeDuration: 1.7 } },
  { id: 'rx_evap1', name: 'Steam Burst', desc: 'Evaporate burst 10 → 26 damage', icon: '♨️', element: 'all', rarity: 'uncommon', unique: true, reaction: { evaporateBurst: 26 } },

  // ---------------- economy / utility ----------------
  { id: 'eco_gold1', name: 'Windfall', desc: '+60 gold, right now', icon: '💰', element: 'all', rarity: 'common', econ: { goldNow: 60 } },
  { id: 'eco_gold2', name: 'Royal Grant', desc: '+140 gold, right now', icon: '💰', element: 'all', rarity: 'uncommon', econ: { goldNow: 140 } },
  { id: 'eco_bounty1', name: 'Bounty Board', desc: '+1 gold per kill', icon: '🪙', element: 'all', rarity: 'uncommon', econ: { bountyBonus: 1 } },
  { id: 'eco_bounty2', name: 'Head Hunter', desc: '+2 gold per kill', icon: '🪙', element: 'all', rarity: 'rare', unique: true, econ: { bountyBonus: 2 } },
  { id: 'eco_disc1', name: 'Guild Discount', desc: 'Towers cost 12% less', icon: '🏷️', element: 'all', rarity: 'uncommon', unique: true, econ: { towerDiscountPct: 12 } },
  { id: 'eco_interest1', name: 'Compound Interest', desc: 'Wave end: +1 gold per 15 held (max +30)', icon: '🏦', element: 'all', rarity: 'rare', unique: true, fx: { interest: { per: 15, cap: 30 } } },
  { id: 'eco_trophy1', name: 'Trophy Hunter', desc: 'Kills have a 15% chance to drop +3 bonus gold', icon: '🏆', element: 'all', rarity: 'uncommon', unique: true, fx: { onKillGold: { chance: 0.15, amount: 3 } } },

  // ---------------- archer family ----------------
  { id: 'arc_dmg1', name: 'Bodkin Points', desc: 'All Archers +4 damage', icon: '🏹', element: 'physical', family: 'archer', rarity: 'common', mod: { damage: 4 } },
  { id: 'arc_range1', name: 'Watchtower Drills', desc: 'All Archers +18 range', icon: '🏹', element: 'physical', family: 'archer', rarity: 'common', mod: { range: 18 } },
  { id: 'arc_rate1', name: 'Nimble Fingers', desc: 'Archers attack 12% faster', icon: '🏹', element: 'physical', family: 'archer', rarity: 'uncommon', mod: { rateMul: 0.88 } },
  { id: 'arc_crit1', name: 'Overdraw', desc: 'Every 4th Archer shot CRITS for 2.5x', icon: '🎯', element: 'physical', family: 'archer', rarity: 'rare', unique: true, fx: { critEveryN: { n: 4, mult: 2.5 } } },
  { id: 'arc_root1', name: 'Cruel Snares', desc: 'Archer damage +40% vs Entangled enemies', icon: '🪢', element: 'physical', family: 'archer', rarity: 'uncommon', unique: true, fx: { bonusVsStatus: { status: 'entangled', mult: 1.4 } } },

  // ---------------- tree family ----------------
  { id: 'tre_dmg1', name: 'Heartwood', desc: 'All Tree-folk +3 damage', icon: '🌳', element: 'physical', family: 'tree', rarity: 'common', mod: { damage: 3 } },
  { id: 'tre_range1', name: 'Elder Boughs', desc: 'All Tree-folk +16 range', icon: '🌳', element: 'physical', family: 'tree', rarity: 'common', mod: { range: 16 } },
  { id: 'tre_rate1', name: 'Rising Sap', desc: 'Tree-folk attack 12% faster', icon: '🌳', element: 'physical', family: 'tree', rarity: 'uncommon', mod: { rateMul: 0.88 } },
  { id: 'tre_crit1', name: 'Thorn Volley', desc: 'Every 6th Tree-folk attack CRITS for 3x', icon: '🌵', element: 'physical', family: 'tree', rarity: 'rare', unique: true, fx: { critEveryN: { n: 6, mult: 3 } } },

  // ---------------- rhythm procs (Vampire Survivors energy) ----------------
  { id: 'pr_adrenaline', name: 'Adrenaline Surge', desc: 'Every 10s, ALL towers frenzy: 2x attack speed for 3s', icon: '🫀', element: 'all', rarity: 'rare', unique: true, fx: { frenzy: { period: 10, duration: 3, rateMul: 0.5 } } },
  // no longer unique (user-tuned): copies stack — two hymns = 4x speed in the window
  { id: 'pr_warhymn', name: 'Goblin War-Hymn', desc: 'Every 8s, Goblins frenzy: 2x attack speed for 2.5s', icon: '🥁', element: 'physical', family: 'goblin', rarity: 'uncommon', fx: { frenzy: { period: 8, duration: 2.5, rateMul: 0.5 } } },

  // ---------------- on-kill chains ----------------
  { id: 'pr_powder', name: 'Powder Trail', desc: 'Enemies killed by Goblins EXPLODE (30 dmg, small area)', icon: '🧨', element: 'physical', family: 'goblin', rarity: 'rare', unique: true, fx: { onKillExplode: { damage: 30, radius: 55 } } },
  { id: 'pr_wildfire', name: 'Wildfire', desc: 'Burning enemies pass their Burn to a neighbor on death', icon: '🔥', element: 'fire', rarity: 'rare', unique: true, fx: { spreadBurnOnDeath: true } },
  { id: 'pr_harvest', name: 'Soul Harvest', desc: 'Every kill: ALL damage +0.2%, forever (max +30%)', icon: '👻', element: 'all', rarity: 'rare', unique: true, fx: { onKillStackDamage: { pct: 0.2, capPct: 30 } } },

  // ---------------- conditional hunters ----------------
  { id: 'pr_opportunist', name: 'Opportunist', desc: 'All damage +40% vs Rattled enemies', icon: '🎯', element: 'all', rarity: 'uncommon', unique: true, fx: { bonusVsStatus: { status: 'rattled', mult: 1.4 } } },
  { id: 'pr_executioner', name: 'Executioner', desc: 'All damage +75% vs Frozen enemies', icon: '⚔️', element: 'all', rarity: 'rare', unique: true, fx: { bonusVsStatus: { status: 'frozen', mult: 1.75 } } },
  { id: 'pr_firstblood', name: 'First Blood', desc: 'Physical damage +30% vs full-health enemies', icon: '🩸', element: 'physical', rarity: 'uncommon', unique: true, fx: { bonusVsHealthy: { threshold: 0.99, mult: 1.3 } } },
  { id: 'pr_soaked', name: 'Riptide Predator', desc: 'Lightning damage +35% vs Wet enemies', icon: '🌩️', element: 'lightning', rarity: 'uncommon', unique: true, fx: { bonusVsStatus: { status: 'wet', mult: 1.35 } } },
  { id: 'pr_skywatch', name: 'Skywatch', desc: 'ALL towers deal +25% damage to FLYING enemies', icon: '🦅', element: 'all', rarity: 'uncommon', unique: true, fx: { bonusVsFlying: { mult: 1.25 } } },
  { id: 'pr_skywatch2', name: 'Skywatch 2', desc: 'ALL towers deal +50% damage to FLYING enemies', icon: '🦅', element: 'all', rarity: 'rare', unique: true, fx: { bonusVsFlying: { mult: 1.5 } } },
];

export const RARITY_WEIGHT: Record<Rarity, number> = { common: 60, uncommon: 30, rare: 10 };
export const SKIP_GOLD = 25;
