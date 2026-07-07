/** Warden Spells — castable abilities earned by BOARD COMPOSITION: field enough
 *  distinct specializations of a family and its spell appears on the spell bar.
 *  Cooldown-gated, cast during waves only. Deliberately rng-free: casting a spell
 *  never advances state.rng, so scripted runs stay reproducible.
 */
import { EVOLUTIONS } from '../data/wizards';
import { ELEMENTS } from '../data/elements';
import { fx } from '../render/effects';
import { sfx } from '../audio/sfx';
import { applyChillStack, dealDamage, hitEnemy } from './combat';
import type { GameState } from './state';
import type { ElementId, Enemy, SpellEffect, TowerFamily } from './types';

export interface SpellDef {
  id: string;
  family: TowerFamily;
  name: string;
  icon: string;
  desc: string;
  /** distinct specializations of the family required on the board */
  needed: number;
  cooldown: number;
  /** false = fires immediately (Great Gong); true = awaits a board click */
  needsTarget: boolean;
  /** effect + targeting-preview radius (board px) */
  radius: number;
  color: string;
  cast(state: GameState, x: number, y: number): void;
}

const GONG_STUN = 2.5;
const BOSS_STUN_FACTOR = 0.3; // mirrors BOSS_ENTANGLE_FACTOR
const CONVERGE_DMG = 45;
const ROOTS_DURATION = 6;
const HOLE_DURATION = 3;
const HOLE_DPS = 25;
const HOLE_PULL = 130; // px/s dragged backward along the track
const STORM_DURATION = 1.5;
const STORM_TICK = 0.3;
const STORM_DMG = 12;

/** evolved def id -> its base specialization id (warlord -> slingshot, ...) */
const EVOLVED_TO_BASE: Record<string, string> = Object.fromEntries(
  Object.entries(EVOLUTIONS).map(([base, evo]) => [evo.to, base]),
);

/** Distinct specializations of a family on the board (shells pending a choice
 *  don't count; evolved forms count as their base). */
export function distinctSpecs(state: GameState, family: TowerFamily): number {
  const ids = new Set<string>();
  for (const w of state.wizards) {
    if (w.family !== family || w.pendingSpecialize) continue;
    ids.add(EVOLVED_TO_BASE[w.def.id] ?? w.def.id);
  }
  return ids.size;
}

export function spellUnlocked(state: GameState, def: SpellDef): boolean {
  return distinctSpecs(state, def.family) >= def.needed;
}

export function spellReady(state: GameState, def: SpellDef): boolean {
  return spellUnlocked(state, def) && (state.spellCds[def.id] ?? 0) <= 0 && state.phase === 'wave';
}

/** Snapshot the living enemies inside a spell circle (mid-cast spawns are excluded). */
function targetsIn(state: GameState, x: number, y: number, r: number, groundOnly = false): Enemy[] {
  return state.enemies.filter((e) => {
    if (e.hp <= 0 || e.phased || (groundOnly && e.def.flying)) return false;
    const rr = r + e.def.radius;
    return (e.x - x) ** 2 + (e.y - y) ** 2 <= rr * rr;
  });
}

// ---------------------------------------------------------------- the five spells

/** Wizards: one blast PER ELEMENT you have fielded, in reaction-optimal order —
 *  water wets, lightning conducts, ice chills, fire shatters/evaporates. */
function castConvergence(state: GameState, x: number, y: number): void {
  const present = new Set<ElementId>();
  for (const w of state.wizards) {
    if (w.family === 'wizard' && !w.pendingSpecialize) present.add(w.def.element);
  }
  const order: ElementId[] = ['water', 'lightning', 'ice', 'fire', 'wind'];
  const targets = targetsIn(state, x, y, SPELLS_BY_ID.convergence.radius);
  fx.ring(x, y, '#c9b8ff', SPELLS_BY_ID.convergence.radius);
  sfx.explosion();
  for (const el of order) {
    if (!present.has(el)) continue;
    fx.burst(x, y, ELEMENTS[el].glow, 12, 160, 3, 0.5);
    for (const e of targets) {
      if (e.hp <= 0) continue;
      const immune = (s: 'burn' | 'wet' | 'chill') => e.immunities?.includes(s) ?? false;
      if (el === 'lightning' && e.statuses.wet) {
        // Conduct: the wet coat turns the bolt into a live wire
        delete e.statuses.wet;
        state.stats.reactions.conduct++;
        fx.floater(e.x, e.y - 18, 'Conduct!', '#e8c3ff', 13);
        sfx.conduct();
        hitEnemy(state, undefined, e, CONVERGE_DMG * state.reaction.conductMult, el);
      } else {
        // fire pass: hitEnemy fires Shatter automatically on chilled/frozen targets
        hitEnemy(state, undefined, e, CONVERGE_DMG, el);
      }
      if (e.hp <= 0) continue;
      if (el === 'water' && !immune('wet')) {
        if (e.statuses.burn) {
          delete e.statuses.burn;
          state.stats.reactions.evaporate++;
          fx.floater(e.x, e.y - 18, 'Evaporate!', '#ffffff', 12);
          sfx.evaporate();
          dealDamage(state, e, state.reaction.evaporateBurst, 'water');
        } else {
          e.statuses.wet = { t: 4 };
        }
      } else if (el === 'ice') {
        if (!immune('wet') && !e.statuses.burn) e.statuses.wet = { t: 4 };
        applyChillStack(state, e, 0.3);
      } else if (el === 'fire' && !immune('burn')) {
        if (e.statuses.wet) {
          delete e.statuses.wet;
          state.stats.reactions.evaporate++;
          fx.floater(e.x, e.y - 18, 'Evaporate!', '#ffffff', 12);
          sfx.evaporate();
          dealDamage(state, e, state.reaction.evaporateBurst, 'fire');
        } else {
          const cur = e.statuses.burn;
          e.statuses.burn = { t: 2.5, dps: Math.max(cur?.dps ?? 0, 8) };
        }
      }
    }
  }
}

/** Goblins: one almighty gong strike — everything on the board stops dead. */
function castGong(state: GameState): void {
  sfx.gongPulse();
  fx.ring(480, 320, '#ffd75e', 400);
  fx.floater(480, 240, '🔔 GREAT GONG!', '#ffd75e', 18);
  for (const e of state.enemies) {
    if (e.hp <= 0) continue;
    const t = e.def.boss ? GONG_STUN * BOSS_STUN_FACTOR : GONG_STUN;
    const cur = e.statuses.stunned;
    e.statuses.stunned = { t: Math.max(cur?.t ?? 0, t) };
    fx.burst(e.x, e.y, '#ffd75e', 5, 70, 2.5, 0.35);
  }
}

/** Ents: a writhing root zone — non-bosses held fast, bosses wade through slowly. */
function castRoots(state: GameState, x: number, y: number): void {
  sfx.thud();
  fx.ring(x, y, '#6a8f4f', SPELLS_BY_ID.roots.radius);
  fx.burst(x, y, '#4c6b38', 16, 120, 3.5, 0.6);
  state.spellEffects.push({ kind: 'roots', x, y, r: SPELLS_BY_ID.roots.radius, t: ROOTS_DURATION, tickT: 0 });
}

/** Voids: a black hole — drags the horde BACKWARD along the road while it burns. */
function castBlackhole(state: GameState, x: number, y: number): void {
  sfx.hexZap();
  fx.ring(x, y, ELEMENTS.void.color, SPELLS_BY_ID.blackhole.radius);
  state.spellEffects.push({
    kind: 'blackhole', x, y, r: SPELLS_BY_ID.blackhole.radius, t: HOLE_DURATION,
    pointDist: state.track.nearestDist(x, y), tickT: 0,
  });
}

/** Archers: five volleys rain on the circle — the sky is no shelter. */
function castArrowstorm(state: GameState, x: number, y: number): void {
  state.spellEffects.push({ kind: 'arrowstorm', x, y, r: SPELLS_BY_ID.arrowstorm.radius, t: STORM_DURATION, tickT: 0 });
}

export const SPELLS: SpellDef[] = [
  {
    id: 'convergence', family: 'wizard', name: 'Elemental Convergence', icon: '🌀',
    desc: 'Blast an area once per element you have fielded — reactions included',
    needed: 4, cooldown: 40, needsTarget: true, radius: 85, color: '#c9b8ff',
    cast: castConvergence,
  },
  {
    id: 'gong', family: 'goblin', name: 'Great Gong', icon: '🔔',
    desc: 'Stun every enemy on the battlefield for 2.5s (bosses briefly)',
    needed: 3, cooldown: 45, needsTarget: false, radius: 0, color: '#ffd75e',
    cast: castGong,
  },
  {
    id: 'arrowstorm', family: 'archer', name: 'Arrow Storm', icon: '🏹',
    desc: 'Five volleys rain on an area — extra damage to flyers',
    needed: 3, cooldown: 35, needsTarget: true, radius: 95, color: '#e6d7b0',
    cast: castArrowstorm,
  },
  {
    id: 'roots', family: 'tree', name: 'Living Roots', icon: '🌿',
    desc: 'Roots erupt across an area for 6s, holding ground enemies fast',
    needed: 3, cooldown: 40, needsTarget: true, radius: 90, color: '#6a8f4f',
    cast: castRoots,
  },
  {
    id: 'blackhole', family: 'void', name: 'Black Hole', icon: '🕳️',
    desc: 'Drags enemies backward along the road for 3s while searing them',
    needed: 3, cooldown: 45, needsTarget: true, radius: 110, color: '#e34bb2',
    cast: castBlackhole,
  },
];

const SPELLS_BY_ID: Record<string, SpellDef> = Object.fromEntries(SPELLS.map((s) => [s.id, s]));

export function spellById(id: string): SpellDef | undefined {
  return SPELLS_BY_ID[id];
}

/** Cast by id at a board point (ignored for global spells). True on success. */
export function castSpell(state: GameState, id: string, x = 0, y = 0): boolean {
  const def = SPELLS_BY_ID[id];
  if (!def || !spellReady(state, def)) return false;
  state.spellCds[id] = def.cooldown;
  def.cast(state, x, y);
  return true;
}

/** Per-frame spell upkeep: cooldowns tick, zones act, stale targeting cancels. */
export function updateSpells(state: GameState, dt: number): void {
  for (const id of Object.keys(state.spellCds)) {
    if (state.spellCds[id] > 0) state.spellCds[id] = Math.max(0, state.spellCds[id] - dt);
  }

  // targeting mode dies with its preconditions (spell re-locked / wave over)
  if (state.castingSpell) {
    const def = SPELLS_BY_ID[state.castingSpell];
    if (!def || !spellReady(state, def)) state.castingSpell = null;
  }

  for (const ef of state.spellEffects) {
    ef.t -= dt;
    ef.tickT = (ef.tickT ?? 0) - dt;

    if (ef.kind === 'roots') {
      for (const e of targetsIn(state, ef.x, ef.y, ef.r, true)) {
        if (e.def.boss) {
          // bosses trample through, but slowly
          const cur = e.statuses.snared;
          e.statuses.snared = { t: Math.max(cur?.t ?? 0, 0.3), pct: Math.max(cur?.pct ?? 0, 0.6) };
        } else {
          // short refresh: freedom comes 0.25s after leaving the zone (or its end)
          const cur = e.statuses.entangled;
          e.statuses.entangled = { t: Math.max(cur?.t ?? 0, 0.25) };
        }
      }
      if (ef.tickT <= 0) {
        ef.tickT = 0.4;
        fx.ring(ef.x, ef.y, '#6a8f4f', ef.r);
      }
    } else if (ef.kind === 'blackhole') {
      const anchor = ef.pointDist ?? 0;
      for (const e of targetsIn(state, ef.x, ef.y, ef.r)) {
        dealDamage(state, e, HOLE_DPS * dt, 'void');
        // ground units past the hole are dragged back toward it — never forward
        if (e.hp > 0 && !e.def.flying && e.dist > anchor) {
          e.dist = Math.max(anchor, e.dist - HOLE_PULL * dt);
        }
      }
      if (ef.tickT <= 0) {
        ef.tickT = 0.3;
        fx.ring(ef.x, ef.y, ELEMENTS.void.color, ef.r * 0.7);
        fx.burst(ef.x, ef.y, '#9b30e8', 6, -90, 2.5, 0.4); // negative speed: falling inward
      }
    } else if (ef.kind === 'arrowstorm') {
      if (ef.tickT <= 0) {
        ef.tickT = STORM_TICK;
        sfx.bowTwang();
        // fixed-angle impact ring — pretty AND deterministic
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2;
          fx.burst(ef.x + Math.cos(a) * ef.r * 0.5, ef.y + Math.sin(a) * ef.r * 0.5, '#e6d7b0', 3, 60, 2, 0.3);
        }
        for (const e of targetsIn(state, ef.x, ef.y, ef.r)) {
          dealDamage(state, e, STORM_DMG * (e.def.flying ? 1.5 : 1), 'physical');
        }
      }
    }
  }
  state.spellEffects = state.spellEffects.filter((ef) => ef.t > 0);
}
