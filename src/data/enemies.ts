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
