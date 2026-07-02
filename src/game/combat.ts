import { ELEMENTS } from '../data/elements';
import { fx } from '../render/effects';
import { sfx } from '../audio/sfx';
import { pickTarget, enemiesInRange, hasLOS } from './targeting';
import type { GameState } from './state';
import type { ElementId, Enemy, Wizard } from './types';

/** ---- Elemental reactions (the signature mechanic) ----
 *  Conduct   : Lightning hit on WET      -> 1.6x dmg, +1 chain hop, consumes Wet
 *  Shatter   : Fire hit on CHILL/FROZEN  -> 2.0x dmg, consumes Chill/Frozen
 *  Evaporate : Burn applied on WET (or Wet on BURNing) -> cancels both, small burst
 */
// reaction tuning lives in state.reaction (buffable by drafted cards)
const CHAIN_RANGE = 95;
const FREEZE_STACKS = 3;
const BOSS_FREEZE_FACTOR = 0.35;
export const CLOUD_RANGE = 165; // px — cloud mages need a cloud this close
export const CLOUD_SPEED = 26; // px/s drift
const GUST_IMMUNITY = 1.5; // s — no repeat knockback (prevents stunlock)
const BOSS_KNOCKBACK_FACTOR = 0.25;
const SOAK_DURATION = 1.5;

// ---------------------------------------------------------------- clouds

export function updateClouds(state: GameState, dt: number): void {
  for (const c of state.clouds) {
    const track = state.cloudTracks[c.pathIdx];
    c.dist = (c.dist + CLOUD_SPEED * dt) % track.total;
    const p = track.posAt(c.dist);
    c.x = p.x;
    c.y = p.y;
  }
}

function cloudNear(state: GameState, w: Wizard): boolean {
  return state.clouds.some((c) => (c.x - w.x) ** 2 + (c.y - w.y) ** 2 <= CLOUD_RANGE * CLOUD_RANGE);
}

// ---------------------------------------------------------------- wizards

export function updateWizards(state: GameState, dt: number): void {
  for (const w of state.wizards) {
    if (w.pendingSpecialize) continue; // idle shell — does nothing until specialized

    if (w.recoil > 0) w.recoil -= dt;
    if (w.cooldown > 0) w.cooldown -= dt;

    // cloud mages are becalmed without wind
    if (w.def.needsCloud) {
      w.becalmed = !cloudNear(state, w);
      if (w.becalmed) {
        if (Math.random() < dt * 0.5) fx.floater(w.x, w.y - 30, '≋ no wind', '#cfd8dc', 10);
        continue;
      }
    }

    // aura casters (water tide / wind gust / gong rattle) need no single target
    if (w.def.auraKind) {
      if (w.cooldown <= 0 && enemiesInRange(state, w.x, w.y, w.stats.range).length > 0) {
        w.cooldown = w.stats.rate;
        w.recoil = 0.18;
        if (w.def.auraKind === 'tide') tideAttack(state, w);
        else if (w.def.auraKind === 'gust') gustAttack(state, w);
        else rattleAttack(state, w);
      }
      continue;
    }

    const target = pickTarget(state, w);
    if (target) {
      w.aim = Math.atan2(target.y - w.y, target.x - w.x);
      if (w.cooldown <= 0) {
        w.cooldown = w.stats.rate;
        w.recoil = 0.18;
        attack(state, w, target);
      }
    }
  }
}

/** Water Mage: radial tide — small damage, heavy Wet, soak slow (a 1-stack chill). */
function tideAttack(state: GameState, w: Wizard): void {
  sfx.waterPulse();
  fx.ring(w.x, w.y, '#3a86ff', w.stats.range);
  for (const e of enemiesInRange(state, w.x, w.y, w.stats.range)) {
    dealDamage(state, e, w.stats.damage, 'water');
    if (e.hp <= 0) continue;
    if (e.immunities?.includes('wet')) continue;
    // Wet everything (feeds Conduct); Evaporate rules apply like ice's wetting
    if (e.statuses.burn) {
      delete e.statuses.burn;
      state.stats.reactions.evaporate++;
      fx.floater(e.x, e.y - 18, 'Evaporate!', '#ffffff', 12);
      sfx.evaporate();
      dealDamage(state, e, state.reaction.evaporateBurst, 'water');
      if (e.hp <= 0) continue;
    } else {
      e.statuses.wet = { t: w.stats.wetDuration };
    }
    // soak slow: gentle chill stack (also inches enemies toward Freeze with ice support)
    applyChillStack(state, e, w.stats.soakSlow);
    if (e.statuses.chill) e.statuses.chill.t = SOAK_DURATION;
  }
}

/** Cloud Mage: wind gust — pushes enemies BACKWARD along the track. */
function gustAttack(state: GameState, w: Wizard): void {
  sfx.windGust();
  fx.ring(w.x, w.y, '#e6f7f1', w.stats.range * 0.7);
  for (const e of enemiesInRange(state, w.x, w.y, w.stats.range)) {
    dealDamage(state, e, w.stats.damage, 'wind');
    if (e.hp <= 0) continue;
    if (e.gustImmune || (e.gustCd ?? 0) > 0) continue;
    const kb = w.stats.knockback * (e.def.boss ? BOSS_KNOCKBACK_FACTOR : 1);
    e.dist = Math.max(0, e.dist - kb);
    e.gustCd = GUST_IMMUNITY;
    const p = state.track.posAt(e.dist);
    fx.burst(e.x, e.y, '#e6f7f1', 6, 90, 2.5, 0.35);
    e.x = p.x;
    e.y = p.y;
  }
}

/** Gong Goblin: support pulse — little/no direct damage, marks targets Rattled
 *  (extra damage taken from everything). No elemental interaction by design. */
function rattleAttack(state: GameState, w: Wizard): void {
  sfx.gongPulse();
  fx.ring(w.x, w.y, '#c9a63f', w.stats.range);
  for (const e of enemiesInRange(state, w.x, w.y, w.stats.range)) {
    if (w.stats.damage > 0) dealDamage(state, e, w.stats.damage, 'physical');
    if (e.hp <= 0) continue;
    const cur = e.statuses.rattled;
    e.statuses.rattled = { t: 3, pct: Math.max(cur?.pct ?? 0, w.stats.rattlePct) };
    if (!cur) fx.floater(e.x, e.y - 14, 'Rattled!', '#c9a63f', 11);
  }
}

function attack(state: GameState, w: Wizard, target: Enemy): void {
  const el = ELEMENTS[w.def.element];
  // staff tip muzzle flash
  const tipX = w.x + Math.cos(w.aim) * 16;
  const tipY = w.y + Math.sin(w.aim) * 16;
  fx.burst(tipX, tipY, el.glow, 4, 60, 2, 0.25);

  if (w.def.element === 'fire') sfx.fireCast();
  else if (w.def.element === 'ice') sfx.iceCast();
  else if (w.def.element === 'lightning') sfx.boltCast();

  if (w.def.element === 'lightning') {
    resolveChainLightning(state, w, target);
  } else {
    state.projectiles.push({
      id: state.nextId++,
      element: w.def.element,
      x: tipX,
      y: tipY,
      speed: w.stats.projSpeed,
      damage: w.stats.damage,
      splash: w.stats.splash,
      targetId: target.id,
      tx: target.x,
      ty: target.y,
      wizardId: w.id,
    });
  }
}

function resolveChainLightning(state: GameState, w: Wizard, first: Enemy): void {
  const el = ELEMENTS.lightning;
  let hops = 1 + w.stats.chains;
  let dmg = w.stats.damage;
  const hit = new Set<number>();
  let cur: Enemy | undefined = first;
  let fromX = w.x;
  let fromY = w.y;

  while (cur && hops > 0) {
    fx.arc(fromX, fromY, cur.x, cur.y, el.glow);
    // Conduct: wet target takes bonus & extends the chain
    if (cur.statuses.wet) {
      delete cur.statuses.wet;
      hops += state.reaction.chainBonus;
      state.stats.reactions.conduct++;
      fx.floater(cur.x, cur.y - 18, 'Conduct!', '#e8c3ff', 13);
      fx.burst(cur.x, cur.y, '#c77dff', 10, 120, 3);
      sfx.conduct();
      dealDamage(state, cur, dmg * state.reaction.conductMult, 'lightning');
    } else {
      dealDamage(state, cur, dmg, 'lightning');
    }
    applyStatusesFromWizard(state, w, cur);
    hit.add(cur.id);
    hops--;
    dmg *= w.stats.chainFalloff;
    fromX = cur.x;
    fromY = cur.y;
    cur = nextChainTarget(state, fromX, fromY, hit);
  }
}

function nextChainTarget(state: GameState, x: number, y: number, hit: Set<number>): Enemy | undefined {
  let best: Enemy | undefined;
  let bestD2 = CHAIN_RANGE * CHAIN_RANGE;
  for (const e of state.enemies) {
    if (e.hp <= 0 || hit.has(e.id)) continue;
    const d2 = (e.x - x) ** 2 + (e.y - y) ** 2;
    if (d2 <= bestD2 && hasLOS(state, x, y, e.x, e.y)) {
      bestD2 = d2;
      best = e;
    }
  }
  return best;
}

// ---------------------------------------------------------------- projectiles

export function updateProjectiles(state: GameState, dt: number): void {
  for (const p of state.projectiles) {
    const target = state.enemies.find((e) => e.id === p.targetId && e.hp > 0);
    if (target) {
      p.tx = target.x;
      p.ty = target.y;
    }
    const dx = p.tx - p.x;
    const dy = p.ty - p.y;
    const d = Math.hypot(dx, dy);
    const step = p.speed * dt;
    if (d <= Math.max(10, step)) {
      impact(state, p, target);
      p.speed = -1; // mark dead
    } else {
      p.x += (dx / d) * step;
      p.y += (dy / d) * step;
      // trail
      if (Math.random() < 0.6) {
        fx.burst(p.x, p.y, ELEMENTS[p.element].glow, 1, 15, 2, 0.3);
      }
    }
  }
  state.projectiles = state.projectiles.filter((p) => p.speed >= 0);
}

function impact(state: GameState, p: { x: number; y: number; tx: number; ty: number; element: ElementId; damage: number; splash: number; wizardId: number }, primary: Enemy | undefined): void {
  const el = ELEMENTS[p.element];
  fx.burst(p.tx, p.ty, el.color, p.splash > 0 ? 14 : 7, p.splash > 0 ? 150 : 90, 3);

  const w = state.wizards.find((wz) => wz.id === p.wizardId);

  if (primary && primary.hp > 0) {
    hitEnemy(state, w, primary, p.damage, p.element);
  }
  if (p.splash > 0) {
    for (const e of state.enemies) {
      if (e.hp <= 0 || e === primary) continue;
      const dx = e.x - p.tx;
      const dy = e.y - p.ty;
      if (dx * dx + dy * dy <= (p.splash + e.def.radius) ** 2) {
        hitEnemy(state, w, e, p.damage * 0.6, p.element);
      }
    }
  }
}

/** Full hit: reaction check -> damage -> status application. */
function hitEnemy(state: GameState, w: Wizard | undefined, e: Enemy, dmg: number, element: ElementId): void {
  // Shatter: fire on chilled/frozen
  if (element === 'fire' && (e.statuses.chill || e.statuses.frozen)) {
    delete e.statuses.chill;
    delete e.statuses.frozen;
    dmg *= state.reaction.shatterMult;
    state.stats.reactions.shatter++;
    fx.floater(e.x, e.y - 18, 'Shatter!', '#b3ecff', 13);
    fx.burst(e.x, e.y, '#b3ecff', 12, 140, 3);
    sfx.shatter();
  }
  dealDamage(state, e, dmg, element);
  if (w && e.hp > 0) applyStatusesFromWizard(state, w, e);
}

// ---------------------------------------------------------------- statuses

function immuneTo(e: Enemy, status: 'burn' | 'wet' | 'chill'): boolean {
  return e.immunities?.includes(status) ?? false;
}

function applyStatusesFromWizard(state: GameState, w: Wizard, e: Enemy): void {
  const s = w.stats;
  if (w.def.element === 'fire' && s.burnDps > 0 && !immuneTo(e, 'burn')) {
    if (e.statuses.wet) {
      // Evaporate: burn + wet cancel with a burst
      delete e.statuses.wet;
      state.stats.reactions.evaporate++;
      fx.floater(e.x, e.y - 18, 'Evaporate!', '#ffffff', 12);
      fx.burst(e.x, e.y, '#dddddd', 8, 80, 2.5);
      sfx.evaporate();
      dealDamage(state, e, state.reaction.evaporateBurst, 'fire');
    } else {
      const cur = e.statuses.burn;
      e.statuses.burn = {
        t: s.burnDuration,
        dps: Math.max(cur?.dps ?? 0, s.burnDps),
      };
    }
  }

  if (w.def.element === 'ice') {
    if (e.statuses.burn && !immuneTo(e, 'wet')) {
      // Evaporate (reverse order): wet meets burn
      delete e.statuses.burn;
      state.stats.reactions.evaporate++;
      fx.floater(e.x, e.y - 18, 'Evaporate!', '#ffffff', 12);
      fx.burst(e.x, e.y, '#dddddd', 8, 80, 2.5);
      sfx.evaporate();
      dealDamage(state, e, state.reaction.evaporateBurst, 'ice');
    } else if (!immuneTo(e, 'wet')) {
      e.statuses.wet = { t: s.wetDuration };
    }
    if (e.hp <= 0) return;
    applyChillStack(state, e, s.chillPct);
  }
}

/** Shared chill/freeze stacking (ice hits + water soak). */
export function applyChillStack(state: GameState, e: Enemy, pct: number): void {
  if (e.statuses.frozen || immuneTo(e, 'chill')) return;
  const chill = e.statuses.chill ?? { t: 0, pct: 0, stacks: 0 };
  chill.stacks = Math.min(FREEZE_STACKS, chill.stacks + 1);
  chill.pct = Math.max(chill.pct, pct);
  chill.t = 2.5;
  e.statuses.chill = chill;
  if (chill.stacks >= FREEZE_STACKS) {
    delete e.statuses.chill;
    const dur = e.def.boss ? state.reaction.freezeDuration * BOSS_FREEZE_FACTOR : state.reaction.freezeDuration;
    e.statuses.frozen = { t: dur };
    state.stats.reactions.frozen++;
    fx.floater(e.x, e.y - 18, 'Frozen!', '#e6f9ff', 12);
    fx.burst(e.x, e.y, '#b3ecff', 10, 100, 3);
    sfx.freeze();
  }
}

// ---------------------------------------------------------------- damage & death

export function dealDamage(state: GameState, e: Enemy, amount: number, element: ElementId): void {
  if (e.hp <= 0) return;
  const mult = e.def.resist[element] ?? 1;
  if (mult === 0) {
    fx.floater(e.x, e.y - 14, 'Immune!', '#999999', 11);
    return;
  }
  const rattleMult = 1 + (e.statuses.rattled?.pct ?? 0);
  const dealt = amount * mult * rattleMult;
  e.hp -= dealt;
  e.hitFlash = 0.12;
  state.stats.dmgByElement[element] += dealt;
  if (dealt >= 1) {
    const col = mult > 1 ? '#ffe08a' : mult < 1 ? '#8899aa' : '#ffffff';
    fx.floater(e.x + (Math.random() - 0.5) * 12, e.y - 10, String(Math.round(dealt)), col, mult > 1 ? 12 : 10);
  }
  if (e.hp <= 0) kill(state, e);
}

function kill(state: GameState, e: Enemy): void {
  const bounty = e.def.bounty + state.bountyBonus;
  state.gold += bounty;
  state.stats.kills++;
  fx.floater(e.x, e.y - 22, `+${bounty}`, '#ffd75e', 12);
  fx.burst(e.x, e.y, e.def.color, 12, 130, 3.5, 0.5);
  fx.ring(e.x, e.y, e.def.color, e.def.boss ? 46 : 24);
  sfx.coin();
}

// ---------------------------------------------------------------- enemies

export function updateEnemies(state: GameState, dt: number): void {
  for (const e of state.enemies) {
    if (e.hp <= 0) continue;
    const st = e.statuses;

    // tick statuses
    if (st.burn) {
      dealBurnTick(state, e, st.burn.dps * dt);
      st.burn.t -= dt;
      if (st.burn.t <= 0) delete st.burn;
    }
    if (st.wet) {
      st.wet.t -= dt;
      if (st.wet.t <= 0) delete st.wet;
    }
    if (st.chill) {
      st.chill.t -= dt;
      if (st.chill.t <= 0) delete st.chill;
    }
    if (st.frozen) {
      st.frozen.t -= dt;
      if (st.frozen.t <= 0) delete st.frozen;
    }
    if (st.rattled) {
      st.rattled.t -= dt;
      if (st.rattled.t <= 0) delete st.rattled;
    }
    if (e.hp <= 0) continue;

    // movement
    let factor = 1;
    if (st.frozen) factor = 0;
    else if (st.chill) factor = Math.max(0.25, 1 - st.chill.pct * (0.6 + 0.2 * st.chill.stacks));

    e.animT += factor * dt; // walk cycle slows/freezes with the enemy
    if (e.hitFlash > 0) e.hitFlash -= dt;
    if (e.gustCd && e.gustCd > 0) e.gustCd -= dt;
    e.dist += e.def.speed * (e.speedMult ?? 1) * factor * dt;
    const p = state.track.posAt(e.dist);
    e.x = p.x;
    e.y = p.y;
    e.angle = p.angle;

    // leak
    if (e.dist >= state.track.total) {
      e.hp = 0; // no bounty — mark for removal via leak path
      state.lives -= e.def.boss ? 5 : 1;
      state.stats.leaks++;
      fx.floater(p.x - 20, p.y, e.def.boss ? '-5 ❤' : '-1 ❤', '#ff6b81', 14);
      sfx.leak();
      if (state.lives <= 0) {
        state.lives = 0;
        state.phase = 'lost';
        sfx.lose();
      }
    }
  }
  state.enemies = state.enemies.filter((e) => e.hp > 0);
}

/** Burn ticks bypass reaction logic but still respect resistances (and Rattled); kills pay bounty. */
function dealBurnTick(state: GameState, e: Enemy, amount: number): void {
  const mult = e.def.resist.fire ?? 1;
  const rattleMult = 1 + (e.statuses.rattled?.pct ?? 0);
  const dealt = amount * mult * rattleMult;
  e.hp -= dealt;
  state.stats.dmgByElement.fire += dealt;
  if (e.hp <= 0) kill(state, e);
}
