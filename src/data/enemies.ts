import type { EnemyDef } from '../game/types';

/**
 * Elemental counters (BTD6-style, element-coded):
 *  - grunt: baseline, no resists
 *  - runner: fast; ice (control) is extra effective
 *  - knight: armored — shrugs off ice chip damage, burns hot (weak to fire)
 *  - shade: fire-proof spirit — needs lightning/ice
 *  - golem: boss — thick resists everywhere except lightning
 */
export const ENEMIES: Record<string, EnemyDef> = {
  grunt: {
    id: 'grunt', name: 'Grunt', hp: 34, speed: 68, radius: 12, bounty: 4,
    color: '#7da35c', resist: {},
  },
  runner: {
    id: 'runner', name: 'Runner', hp: 22, speed: 128, radius: 10, bounty: 5,
    color: '#d9a648', resist: { ice: 1.4 },
  },
  knight: {
    id: 'knight', name: 'Armored Knight', hp: 110, speed: 52, radius: 13, bounty: 10,
    color: '#8d99ae', resist: { ice: 0.5, lightning: 0.75, fire: 1.5 },
  },
  shade: {
    id: 'shade', name: 'Ember Shade', hp: 60, speed: 80, radius: 11, bounty: 8,
    color: '#b35442', resist: { fire: 0.0, lightning: 1.3 },
  },
  golem: {
    id: 'golem', name: 'Obsidian Golem', hp: 2600, speed: 30, radius: 22, bounty: 200,
    color: '#5e4b8b', resist: { fire: 0.75, ice: 0.75 }, boss: true,
  },
  golemling: {
    id: 'golemling', name: 'Golemling', hp: 500, speed: 42, radius: 16, bounty: 50,
    color: '#7a68a6', resist: { fire: 0.75, ice: 0.75 }, boss: true,
  },

  // ---------------- the horde (Phase 8) ----------------
  // trash orc — and the payload every carrier is stuffed with
  orcraider: {
    id: 'orcraider', name: 'Orc Raider', hp: 55, speed: 75, radius: 12, bounty: 6,
    color: '#5e7a3a', resist: {},
  },
  // armored trash: physical coverage matters on ordinary waves now, not just bosses
  orcbrute: {
    id: 'orcbrute', name: 'Orc Brute', hp: 260, speed: 46, radius: 15, bounty: 14,
    color: '#4a5d33', resist: {}, armor: 120,
  },
  // the full "think about it" package: crack the shell with physical, then BURST him —
  // chip damage gets out-healed
  troll: {
    id: 'troll', name: 'Troll', hp: 1300, speed: 34, radius: 19, bounty: 60,
    color: '#6a7d5e', resist: {}, armor: 320, regen: 0.015,
  },
  // death-burst carrier: kill it EARLY or fight fresh orcs deep in your territory;
  // let it reach the gate and it costs 8 lives — it is full of troops
  warwagon: {
    id: 'warwagon', name: 'War Wagon', hp: 900, speed: 40, radius: 20, bounty: 45,
    color: '#7a5c38', resist: {}, vehicle: 'wagon', leakCost: 8,
    deathSpawns: ['orcraider', 'orcraider', 'orcraider', 'orcraider', 'orcraider'],
  },
  // rolling-drop carrier: unloads orcs while it advances — constant pressure
  siegetower: {
    id: 'siegetower', name: 'Siege Tower', hp: 1600, speed: 30, radius: 22, bounty: 80,
    color: '#6b4f30', resist: {}, vehicle: 'tower', leakCost: 10,
    dropSpawns: { type: 'orcraider', count: 2, period: 5 },
  },
  // kill-the-healer-first: his pulses keep the pack alive through your damage
  orcshaman: {
    id: 'orcshaman', name: 'Orc Shaman', hp: 140, speed: 60, radius: 11, bounty: 18,
    color: '#3f8f5c', resist: {},
    aura: { kind: 'heal', radius: 110, power: 0.03, period: 2 },
  },
  // the horde marches to his beat — nearby enemies move 18% faster while he lives
  wardrummer: {
    id: 'wardrummer', name: 'War Drummer', hp: 300, speed: 55, radius: 13, bounty: 22,
    color: '#8a5c3a', resist: {},
    aura: { kind: 'haste', radius: 120, power: 0.18 },
  },
  // slips out of reality for 1.6s of every 5 — punishes single-target tunnel vision
  wraith: {
    id: 'wraith', name: 'Wraith', hp: 220, speed: 95, radius: 11, bounty: 20,
    color: '#9db8c9', resist: {},
    phase: { period: 5, duration: 1.6 },
  },

  // ---------------- act bosses ----------------
  // Act 1 finale: teaches that ARMOR only cracks under physical fire (goblins/archers/ents)
  warlord: {
    id: 'warlord', name: 'Ironhide Warlord', hp: 1800, speed: 26, radius: 24, bounty: 250,
    color: '#6e7b8a', resist: { ice: 0.8 }, boss: true, armor: 700,
  },
  // Act 2 finale: burns cannot touch it, cold slides off — lightning/physical/water day
  pyretitan: {
    id: 'pyretitan', name: 'Pyre Titan', hp: 4200, speed: 24, radius: 26, bounty: 350,
    color: '#c25a2e', resist: { fire: 0.0, lightning: 1.15 }, boss: true,
    innateImmune: ['burn', 'chill'],
  },
  // Act 3 finale, THE boss: armored AND fire-hardened AND cold-proof.
  // Cracking the shell releases its heartlings.
  colossus: {
    id: 'colossus', name: 'Dread Colossus', hp: 7500, speed: 20, radius: 30, bounty: 600,
    color: '#3d2f5e', resist: { fire: 0.5 }, boss: true, armor: 1600,
    innateImmune: ['chill'], armorBreakSpawns: ['golemling', 'golemling', 'golemling'],
  },
};
