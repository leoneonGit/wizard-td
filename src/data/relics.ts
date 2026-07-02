import type { RelicDef } from '../game/types';

/**
 * Relics — run-wide artifacts from treasure nodes, events and elite spoils.
 * Most work via a hidden card `payload` (the card engine applies mods/fx/reaction/econ);
 * `special` ids cover hooks the card engine can't express (spawn effects, draft size...).
 */
export const RELICS: RelicDef[] = [
  {
    id: 'frozen_core', name: 'Frozen Core', icon: '🧊', rarity: 'rare',
    desc: 'Enemies arrive with a chill in their bones (1 chill stack on spawn).',
    special: ['spawnChill'],
  },
  {
    id: 'cursed_hourglass', name: 'Cursed Hourglass', icon: '⏳', rarity: 'rare',
    desc: 'Drafts show 4 cards — but enemies move 10% faster.',
    special: ['draft4', 'hasteEnemies'],
  },
  {
    id: 'blood_chalice', name: 'Blood Chalice', icon: '🍷', rarity: 'rare',
    desc: 'Every 40 kills restores 1 life.',
    special: ['killLives'],
  },
  {
    id: 'sharpening_stone', name: 'Sharpening Stone', icon: '🪨', rarity: 'uncommon',
    desc: 'ALL towers +2 damage.',
    payload: { id: 'relic_sharp', name: 'Sharpening Stone', desc: '', icon: '🪨', element: 'all', rarity: 'rare', mod: { damage: 2 } },
  },
  {
    id: 'eagle_standard', name: 'Eagle Standard', icon: '🦅', rarity: 'uncommon',
    desc: 'ALL towers +12 range.',
    payload: { id: 'relic_eagle', name: 'Eagle Standard', desc: '', icon: '🦅', element: 'all', rarity: 'rare', mod: { range: 12 } },
  },
  {
    id: 'war_banner', name: 'War Banner', icon: '🚩', rarity: 'uncommon',
    desc: 'Physical towers (goblins, archers, tree-folk) attack 8% faster.',
    payload: { id: 'relic_banner', name: 'War Banner', desc: '', icon: '🚩', element: 'physical', rarity: 'rare', mod: { rateMul: 0.92 } },
  },
  {
    id: 'molten_heart', name: 'Molten Heart', icon: '🌋', rarity: 'rare',
    desc: 'Burn ticks +3/s and last +1s.',
    payload: { id: 'relic_molten', name: 'Molten Heart', desc: '', icon: '🌋', element: 'fire', rarity: 'rare', mod: { burnDps: 3, burnDuration: 1 } },
  },
  {
    id: 'storm_prism', name: 'Storm Prism', icon: '🔮', rarity: 'rare',
    desc: 'Conduct deals 2.0x (up from 1.6x).',
    payload: { id: 'relic_prism', name: 'Storm Prism', desc: '', icon: '🔮', element: 'all', rarity: 'rare', reaction: { conductMult: 2.0 } },
  },
  {
    id: 'golden_idol', name: 'Golden Idol', icon: '🗿', rarity: 'uncommon',
    desc: '+1 gold per kill.',
    payload: { id: 'relic_idol', name: 'Golden Idol', desc: '', icon: '🗿', element: 'all', rarity: 'rare', econ: { bountyBonus: 1 } },
  },
  {
    id: 'beggars_bowl', name: "Beggar's Bowl", icon: '🥣', rarity: 'uncommon',
    desc: 'Wave end: +1 gold per 20 held (max +20).',
    payload: { id: 'relic_bowl', name: "Beggar's Bowl", desc: '', icon: '🥣', element: 'all', rarity: 'rare', fx: { interest: { per: 20, cap: 20 } } },
  },
  {
    id: 'headsman_seal', name: "Headsman's Seal", icon: '🪓', rarity: 'rare',
    desc: 'All damage +35% vs Frozen enemies.',
    payload: { id: 'relic_seal', name: "Headsman's Seal", desc: '', icon: '🪓', element: 'all', rarity: 'rare', fx: { bonusVsStatus: { status: 'frozen', mult: 1.35 } } },
  },
  {
    id: 'ancient_acorn', name: 'Ancient Acorn', icon: '🌰', rarity: 'uncommon',
    desc: 'Tree-folk +2 damage and +15 range.',
    payload: { id: 'relic_acorn', name: 'Ancient Acorn', desc: '', icon: '🌰', element: 'physical', family: 'tree', rarity: 'rare', mod: { damage: 2, range: 15 } },
  },
];

export const RELIC_RARITY_WEIGHT: Record<string, number> = { uncommon: 65, rare: 35 };
