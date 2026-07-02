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
  { id: 'ice_chill1', name: 'Deeper Cold', desc: 'Chill slows +8% more', icon: '❄️', element: 'ice', rarity: 'common', mod: { chillPct: 0.08 } },
  { id: 'ice_dmg1', name: 'Jagged Icicles', desc: 'All Frost Mages +3 damage', icon: '❄️', element: 'ice', rarity: 'common', mod: { damage: 3 } },
  { id: 'ice_wet1', name: 'Soaking Sleet', desc: 'Frost Wet lasts +2s', icon: '❄️', element: 'ice', rarity: 'common', mod: { wetDuration: 2 } },
  { id: 'ice_rate1', name: 'Flash Freeze', desc: 'Frost Mages attack 15% faster', icon: '❄️', element: 'ice', rarity: 'uncommon', mod: { rateMul: 0.85 } },
  { id: 'ice_range1', name: 'Glacial Reach', desc: 'Frost Mages +22 range', icon: '❄️', element: 'ice', rarity: 'uncommon', mod: { range: 22 } },

  // ---------------- lightning ----------------
  { id: 'ltn_dmg1', name: 'Amped Bolts', desc: 'All Storm Mages +5 damage', icon: '⚡', element: 'lightning', rarity: 'common', mod: { damage: 5 } },
  { id: 'ltn_chain1', name: 'Forked Streams', desc: 'Chain lightning +1 target', icon: '⚡', element: 'lightning', rarity: 'uncommon', mod: { chains: 1 } },
  { id: 'ltn_range1', name: 'Skyline Arcs', desc: 'Storm Mages +25 range', icon: '⚡', element: 'lightning', rarity: 'common', mod: { range: 25 } },
  { id: 'ltn_rate1', name: 'Static Rhythm', desc: 'Storm Mages attack 12% faster', icon: '⚡', element: 'lightning', rarity: 'uncommon', mod: { rateMul: 0.88 } },

  // ---------------- water ----------------
  { id: 'wat_slow1', name: 'Heavy Currents', desc: 'Tide slow +8% stronger', icon: '🌊', element: 'water', rarity: 'common', mod: { soakSlow: 0.08 } },
  { id: 'wat_dmg1', name: 'Crashing Waves', desc: 'All Water Mages +4 damage', icon: '🌊', element: 'water', rarity: 'common', mod: { damage: 4 } },
  { id: 'wat_range1', name: 'High Tide', desc: 'Water Mages +20 range', icon: '🌊', element: 'water', rarity: 'uncommon', mod: { range: 20 } },
  { id: 'wat_wet1', name: 'Drenching Pulse', desc: 'Tide Wet lasts +2s', icon: '🌊', element: 'water', rarity: 'common', mod: { wetDuration: 2 } },

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
];

export const RARITY_WEIGHT: Record<Rarity, number> = { common: 60, uncommon: 30, rare: 10 };
export const SKIP_GOLD = 25;
