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
    color: '#5e4b8b', resist: { fire: 0.75, ice: 0.75 }, boss: true, leakCost: 10,
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

  // ---------------- death from above + dirty tricks (Phase 12) ----------------
  // flyers cut STRAIGHT across the map — your road maze means nothing to them.
  // Ground eruptions and tides can't touch them; archers were born for this.
  gargoyle: {
    id: 'gargoyle', name: 'Gargoyle', hp: 90, speed: 85, radius: 11, bounty: 12,
    color: '#8d99ae', resist: { ice: 0.8 }, flying: true,
  },
  drake: {
    id: 'drake', name: 'Ember Drake', hp: 380, speed: 110, radius: 14, bounty: 30,
    color: '#c25a2e', resist: { fire: 0.5 }, flying: true, innateImmune: ['burn'],
  },
  // the Hexer silences a tower for 3s every few beats — kill him FIRST
  hexer: {
    id: 'hexer', name: 'Hexer', hp: 160, speed: 55, radius: 11, bounty: 20,
    color: '#7a4a9e', resist: {},
    hexes: { period: 6, duration: 3, radius: 150 },
  },
  // the Banshee's death-wail silences towers near her corpse — kill her AWAY from your cluster
  banshee: {
    id: 'banshee', name: 'Banshee', hp: 130, speed: 90, radius: 10, bounty: 18,
    color: '#cfd8e8', resist: {},
    deathSilence: { radius: 100, duration: 2.5 },
  },
  // seven kills for the price of one — slow single-target builds drown in goo
  slime_big: {
    id: 'slime_big', name: 'Great Slime', hp: 320, speed: 45, radius: 16, bounty: 10,
    color: '#5fbf4a', resist: {}, deathSpawns: ['slime_mid', 'slime_mid'],
  },
  slime_mid: {
    id: 'slime_mid', name: 'Slime', hp: 120, speed: 55, radius: 12, bounty: 6,
    color: '#74d15e', resist: {}, deathSpawns: ['slime_small', 'slime_small'],
  },
  slime_small: {
    id: 'slime_small', name: 'Slimeling', hp: 45, speed: 70, radius: 8, bounty: 3,
    color: '#8ce276', resist: {},
  },
  // raises the fallen as he walks — leave him alive and the wave never ends
  necromancer: {
    id: 'necromancer', name: 'Necromancer', hp: 200, speed: 50, radius: 12, bounty: 25,
    color: '#3a2f4e', resist: {},
    dropSpawns: { type: 'risen', count: 2, period: 5 },
  },
  risen: {
    id: 'risen', name: 'Risen', hp: 40, speed: 60, radius: 10, bounty: 2,
    color: '#9a92b5', resist: {},
  },
  // sprints to the gate, grabs your GOLD, and runs it home — catch him on the way back
  thief: {
    id: 'thief', name: 'Thief', hp: 100, speed: 130, radius: 10, bounty: 15,
    color: '#d9c148', resist: {}, stealsGold: 25,
  },
  // his ward caps every single hit on nearby allies — snipers need chip support
  shieldbearer: {
    id: 'shieldbearer', name: 'Shieldbearer', hp: 350, speed: 48, radius: 14, bounty: 22,
    color: '#5b7fc9', resist: {},
    aura: { kind: 'ward', radius: 110, power: 60 },
  },

  // ---------------- act bosses ----------------
  // Act 1 finale: teaches that ARMOR only cracks under physical fire (goblins/archers/ents)
  warlord: {
    id: 'warlord', name: 'Ironhide Warlord', hp: 2100, speed: 26, radius: 24, bounty: 250,
    color: '#6e7b8a', resist: { ice: 0.8 }, boss: true, armor: 700, leakCost: 10,
    // stun grenades: every 2s he lobs one at a random tower ANYWHERE — 3s of silence
    hexes: { period: 2, duration: 3, radius: 9999 },
  },
  // Act 2 finale: burns cannot touch it, cold slides off — lightning/physical/water day.
  // Cinder Carapace: periodically hardens — hits are BLOCKED but counted; land 10 fast
  // hits and it shatters early. Rewards rapid-fire builds over slow nukers.
  pyretitan: {
    id: 'pyretitan', name: 'Pyre Titan', hp: 4800, speed: 24, radius: 26, bounty: 350,
    color: '#c25a2e', resist: { fire: 0.0, lightning: 1.15 }, boss: true, leakCost: 10,
    innateImmune: ['burn', 'chill'],
    periodicShield: { period: 9, duration: 4, hits: 10 },
  },
  // Act 3 finale, THE boss: armored AND fire-hardened AND cold-proof.
  // Cracking the shell releases its heartlings — and wounds erupt into Heartstones
  // (75/50/25% hp) that heal it until sniped.
  colossus: {
    id: 'colossus', name: 'Dread Colossus', hp: 8600, speed: 20, radius: 30, bounty: 600,
    color: '#3d2f5e', resist: { fire: 0.5 }, boss: true, armor: 1600, leakCost: 25,
    innateImmune: ['chill'], armorBreakSpawns: ['golemling', 'golemling', 'golemling'],
    hpPhases: { thresholds: [0.75, 0.5, 0.25], type: 'heartstone', count: 2 },
  },
  // The Colossus' pulsing heal-crystal: rooted to the road, never leaks, holds the
  // wave open until destroyed. Snipe it or the boss drinks deep.
  heartstone: {
    id: 'heartstone', name: 'Heartstone', hp: 130, speed: 0, radius: 12, bounty: 25,
    color: '#e05a7a', resist: {},
    aura: { kind: 'heal', radius: 150, power: 0.02, period: 1 },
    leakCost: 0,
  },
};
