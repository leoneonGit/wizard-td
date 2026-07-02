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
};
