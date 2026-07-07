import { ELEMENTS } from '../data/elements';
import { ENEMIES as ENEMY_DEFS } from '../data/enemies';
import { ACT_SCALING } from '../data/waves';
import { fx } from '../render/effects';
import { sfx } from '../audio/sfx';
import { pickTarget, enemiesInRange, hasLOS } from './targeting';
import { attackProcMult, conditionalDamageMult, frenzyRateMul } from './procs';
import { cardAppliesTo, relicSpecial, type GameState } from './state';
import type { ElementId, Enemy, Projectile, ProjectileVisual, Wizard, WizardDef } from './types';

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
const ENTANGLE_IMMUNITY = 2.5; // s after a root ends before the same enemy can be rooted again
const BOSS_ENTANGLE_FACTOR = 0.3;
const PIERCE_OVERSHOOT = 1.4; // bolts fly this far past nominal range
const PIERCE_HIT_WIDTH = 14; // px — bolt "thickness" added to enemy radius
const ROOTGRASP_AREA = 30; // px — eruption radius at the target's feet
const SNARE_DURATION = 1.6;

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
  state.clock += dt; // run clock — drives periodic frenzy proc cards

  for (const w of state.wizards) {
    if (w.pendingSpecialize) continue; // idle shell — does nothing until specialized

    if (w.recoil > 0) w.recoil -= dt;
    if (w.cooldown > 0) w.cooldown -= dt;

    // hexed: the tower stands dark and silent until the curse lifts
    if (w.silencedT !== undefined && w.silencedT > 0) {
      w.silencedT -= dt;
      continue;
    }

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
        w.cooldown = w.stats.rate * frenzyRateMul(state, w);
        w.recoil = 0.18;
        const mult = attackProcMult(state, w);
        if (w.def.auraKind === 'tide') tideAttack(state, w, mult);
        else if (w.def.auraKind === 'gust') gustAttack(state, w, mult);
        else rattleAttack(state, w, mult);
      }
      continue;
    }

    const target = pickTarget(state, w);
    if (target) {
      w.aim = Math.atan2(target.y - w.y, target.x - w.x);
      if (w.cooldown <= 0) {
        w.cooldown = w.stats.rate * frenzyRateMul(state, w);
        w.recoil = 0.18;
        attack(state, w, target);
      }
    }
  }
}

/** Water Mage: radial tide — small damage, heavy Wet, soak slow (a 1-stack chill). */
function tideAttack(state: GameState, w: Wizard, procMult = 1): void {
  sfx.waterPulse();
  fx.ring(w.x, w.y, '#3a86ff', w.stats.range);
  for (const e of enemiesInRange(state, w.x, w.y, w.stats.range)) {
    if (e.def.flying) continue; // tides stay on the ground
    dealDamage(state, e, w.stats.damage * procMult, 'water', w);
    if (e.hp <= 0) continue;
    if (e.immunities?.includes('wet')) continue;
    // Wet everything (feeds Conduct); Evaporate rules apply like ice's wetting
    if (e.statuses.burn) {
      delete e.statuses.burn;
      state.stats.reactions.evaporate++;
      fx.floater(e.x, e.y - 18, 'Evaporate!', '#ffffff', 12);
      sfx.evaporate();
      dealDamage(state, e, state.reaction.evaporateBurst, 'water', w);
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
function gustAttack(state: GameState, w: Wizard, procMult = 1): void {
  sfx.windGust();
  fx.ring(w.x, w.y, '#e6f7f1', w.stats.range * 0.7);
  for (const e of enemiesInRange(state, w.x, w.y, w.stats.range)) {
    dealDamage(state, e, w.stats.damage * procMult, 'wind', w);
    if (e.hp <= 0) continue;
    if (e.gustImmune || (e.gustCd ?? 0) > 0) continue;
    const kb = w.stats.knockback * (e.def.boss ? BOSS_KNOCKBACK_FACTOR : 1);
    e.dist = Math.max(0, e.dist - kb);
    e.gustCd = GUST_IMMUNITY;
    fx.burst(e.x, e.y, '#e6f7f1', 6, 90, 2.5, 0.35);
    if (!e.def.flying) {
      // flyers get blown back along their flight line instead (repositioned next tick)
      const p = state.track.posAt(e.dist);
      e.x = p.x;
      e.y = p.y;
    }
  }
}

/** Gong Goblin: support pulse — little/no direct damage, marks targets Rattled
 *  (extra damage taken from everything). No elemental interaction by design. */
function rattleAttack(state: GameState, w: Wizard, procMult = 1): void {
  sfx.gongPulse();
  fx.ring(w.x, w.y, '#c9a63f', w.stats.range);
  for (const e of enemiesInRange(state, w.x, w.y, w.stats.range)) {
    if (w.stats.damage > 0) dealDamage(state, e, w.stats.damage * procMult, 'physical', w);
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
  else if (w.def.family === 'archer') sfx.bowTwang();
  else if (w.def.family === 'tree') sfx.thud();

  // rhythm/on-kill card engine: every-Nth crits + permanent kill-stack ramp
  const procMult = attackProcMult(state, w);

  if (w.def.element === 'lightning') {
    resolveChainLightning(state, w, target, procMult);
  } else if (w.def.groundAttack) {
    rootgraspAttack(state, w, target, procMult);
  } else if (w.def.pierce) {
    // ballesta: a straight-line bolt that damages everything it passes through
    const dx = target.x - tipX;
    const dy = target.y - tipY;
    const d = Math.hypot(dx, dy) || 1;
    state.projectiles.push({
      id: state.nextId++,
      element: w.def.element,
      x: tipX,
      y: tipY,
      speed: w.stats.projSpeed,
      damage: w.stats.damage * procMult,
      splash: 0,
      targetId: -1, // never homes
      tx: target.x,
      ty: target.y,
      wizardId: w.id,
      visual: w.def.family === 'archer' ? 'bolt' : visualFor(w.def),
      pierce: {
        dirX: dx / d,
        dirY: dy / d,
        traveled: 0,
        maxDist: w.stats.range * PIERCE_OVERSHOOT,
        hitIds: [],
      },
    });
  } else {
    state.projectiles.push({
      id: state.nextId++,
      element: w.def.element,
      x: tipX,
      y: tipY,
      speed: w.stats.projSpeed,
      damage: w.stats.damage * procMult,
      splash: w.stats.splash,
      targetId: target.id,
      tx: target.x,
      ty: target.y,
      wizardId: w.id,
      visual: visualFor(w.def),
      sx: tipX, // thrown visuals (rock/stick) lob a parabola from here
      sy: tipY,
    });
  }
}

/** What this tower's shots LOOK like — purely cosmetic identity. */
function visualFor(def: WizardDef): ProjectileVisual {
  if (def.family === 'archer') return 'arrow';
  if (def.id === 'dynamite' || def.id === 'sapperking') return 'stick';
  if (def.id === 'slingshot' || def.id === 'boulder' || def.id === 'mountain') return 'rock';
  if (def.id === 'thornspitter' || def.id === 'bramblehydra') return 'needle';
  if (def.id === 'voidgazer') return 'bolt'; // a searing red laser lance
  return 'orb';
}

/** Rootgrasp Tree: roots erupt under the target — instant, small area, snare slow.
 *  The snare is deliberately its own status (physical), never feeding Chill→Freeze. */
function rootgraspAttack(state: GameState, w: Wizard, target: Enemy, procMult = 1): void {
  fx.burst(target.x, target.y + 4, '#6a8f4f', 10, 80, 3, 0.4);
  fx.ring(target.x, target.y, '#4c6b38', ROOTGRASP_AREA);
  for (const e of state.enemies) {
    if (e.hp <= 0 || e.def.flying) continue; // roots cannot reach the sky
    const dx = e.x - target.x;
    const dy = e.y - target.y;
    if (dx * dx + dy * dy > (ROOTGRASP_AREA + e.def.radius) ** 2) continue;
    dealDamage(state, e, w.stats.damage * procMult, w.def.element, w);
    if (e.hp <= 0) continue;
    const cur = e.statuses.snared;
    e.statuses.snared = { t: SNARE_DURATION, pct: Math.max(cur?.pct ?? 0, w.stats.rootSlow) };
  }
}

function resolveChainLightning(state: GameState, w: Wizard, first: Enemy, procMult = 1): void {
  const el = ELEMENTS.lightning;
  let hops = 1 + w.stats.chains;
  let dmg = w.stats.damage * procMult;
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
      dealDamage(state, cur, dmg * state.reaction.conductMult, 'lightning', w);
    } else {
      dealDamage(state, cur, dmg, 'lightning', w);
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
    if (e.hp <= 0 || e.phased || hit.has(e.id)) continue;
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
    if (p.pierce) {
      updatePierceBolt(state, p, dt);
      continue;
    }
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

/** Ballesta bolt: flies a fixed line, hitting each enemy along it exactly once. */
function updatePierceBolt(state: GameState, p: Projectile, dt: number): void {
  const pr = p.pierce!;
  const step = Math.min(p.speed * dt, pr.maxDist - pr.traveled);
  p.x += pr.dirX * step;
  p.y += pr.dirY * step;
  pr.traveled += step;
  // keep tx/ty a touch ahead along the line so the renderer can stretch the bolt
  p.tx = p.x + pr.dirX * 20;
  p.ty = p.y + pr.dirY * 20;

  const w = state.wizards.find((wz) => wz.id === p.wizardId);
  for (const e of state.enemies) {
    if (e.hp <= 0 || e.phased || pr.hitIds.includes(e.id)) continue;
    const dx = e.x - p.x;
    const dy = e.y - p.y;
    const r = PIERCE_HIT_WIDTH + e.def.radius;
    if (dx * dx + dy * dy > r * r) continue;
    pr.hitIds.push(e.id);
    fx.burst(e.x, e.y, ELEMENTS[p.element].glow, 5, 80, 2.5, 0.3);
    hitEnemy(state, w, e, p.damage, p.element);
  }

  if (pr.traveled >= pr.maxDist) p.speed = -1; // spent — flew its full line
  else if (Math.random() < 0.5) fx.burst(p.x, p.y, ELEMENTS[p.element].glow, 1, 12, 1.5, 0.2);
}

function impact(state: GameState, p: { x: number; y: number; tx: number; ty: number; element: ElementId; damage: number; splash: number; wizardId: number; visual?: ProjectileVisual }, primary: Enemy | undefined): void {
  const el = ELEMENTS[p.element];
  fx.burst(p.tx, p.ty, el.color, p.splash > 0 ? 14 : 7, p.splash > 0 ? 150 : 90, 3);
  if (p.splash >= 40) {
    // a real detonation: boom + slow smoke plume + scorch ring
    sfx.explosion();
    fx.ring(p.tx, p.ty, '#ff7b00', p.splash);
    fx.burst(p.tx, p.ty, '#9a9086', 12, 35, 4, 1.3);
  }

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
export function hitEnemy(state: GameState, w: Wizard | undefined, e: Enemy, dmg: number, element: ElementId): void {
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
  dealDamage(state, e, dmg, element, w);
  if (w && e.hp > 0 && !e.shieldActive) applyStatusesFromWizard(state, w, e); // no statuses through the carapace
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
      dealDamage(state, e, state.reaction.evaporateBurst, 'fire', w);
    } else {
      const cur = e.statuses.burn;
      e.statuses.burn = {
        t: s.burnDuration,
        dps: Math.max(cur?.dps ?? 0, s.burnDps),
      };
    }
  }

  // Orc Trapper bolas: root in place. Pure CC — never touches the elemental economy.
  if (w.def.entangles && w.stats.entangleDur > 0 && (e.entangleCd ?? 0) <= 0) {
    const dur = e.def.boss ? w.stats.entangleDur * BOSS_ENTANGLE_FACTOR : w.stats.entangleDur;
    e.statuses.entangled = { t: dur };
    e.entangleCd = dur + ENTANGLE_IMMUNITY;
    fx.floater(e.x, e.y - 14, 'Rooted!', '#8c9c72', 11);
    fx.burst(e.x, e.y + 6, '#6b7a52', 8, 70, 2.5, 0.4);
  }

  if (w.def.element === 'ice') {
    if (e.statuses.burn && !immuneTo(e, 'wet')) {
      // Evaporate (reverse order): wet meets burn
      delete e.statuses.burn;
      state.stats.reactions.evaporate++;
      fx.floater(e.x, e.y - 18, 'Evaporate!', '#ffffff', 12);
      fx.burst(e.x, e.y, '#dddddd', 8, 80, 2.5);
      sfx.evaporate();
      dealDamage(state, e, state.reaction.evaporateBurst, 'ice', w);
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

/** Grove perk: towers of the player's attuned element hit harder (source-attributed only). */
function attunementMult(state: GameState, src?: Wizard): number {
  return src && state.perks.attuneElement === src.def.element ? 1 + state.perks.attunePct / 100 : 1;
}

export function dealDamage(state: GameState, e: Enemy, amount: number, element: ElementId, src?: Wizard): void {
  if (e.hp <= 0) return;

  // Cinder Carapace: while the shield is up, EVERY hit is eaten whole — but each
  // blocked hit chips at the shield's patience (hits counter shatters it early)
  if (e.shieldActive) {
    e.shieldHits = (e.shieldHits ?? 0) + 1;
    e.hitFlash = 0.08;
    fx.floater(e.x + (Math.random() - 0.5) * 12, e.y - 14, 'Blocked!', '#ffb163', 11);
    sfx.armorClank();
    if (e.shieldHits >= (e.def.periodicShield?.hits ?? Infinity)) shatterShield(state, e);
    return;
  }

  // boss armor: while the shell holds, only PHYSICAL damage chips it — everything
  // else patters off at 10%. Break it, then do whatever you want.
  if (e.armorHp !== undefined && e.armorHp > 0) {
    const rattleMult = 1 + (e.statuses.rattled?.pct ?? 0);
    const condMult = conditionalDamageMult(state, src, e);
    const attuneMult = attunementMult(state, src);
    const chip = amount * rattleMult * condMult * attuneMult * (element === 'physical' ? 1 : 0.1);
    e.armorHp -= chip;
    e.hitFlash = 0.12;
    // ?? 0: saves from before the void element lack its stats bucket
    state.stats.dmgByElement[element] = (state.stats.dmgByElement[element] ?? 0) + chip;
    if (chip >= 1) {
      fx.floater(e.x + (Math.random() - 0.5) * 12, e.y - 10, String(Math.round(chip)),
        element === 'physical' ? '#cdd7e0' : '#6b7684', element === 'physical' ? 11 : 9);
    }
    if (element === 'physical') sfx.armorClank();
    if (e.armorHp <= 0) breakArmor(state, e);
    return; // the shell absorbs the whole hit
  }

  const mult = e.def.resist[element] ?? 1;
  if (mult === 0) {
    fx.floater(e.x, e.y - 14, 'Immune!', '#999999', 11);
    return;
  }
  const rattleMult = 1 + (e.statuses.rattled?.pct ?? 0);
  const condMult = conditionalDamageMult(state, src, e); // hunter cards: vs status / vs healthy
  // archers were born for the sky
  const airMult = e.def.flying && src?.def.family === 'archer' ? 1.5 : 1;
  let dealt = amount * mult * rattleMult * condMult * airMult * attunementMult(state, src);
  // shieldbearer's ward: no single hit can exceed the cap
  if (e.wardCap !== undefined && dealt > e.wardCap) {
    dealt = e.wardCap;
    fx.floater(e.x, e.y - 16, 'warded', '#8fb4ff', 9);
  }
  e.hp -= dealt;
  e.hitFlash = 0.12;
  state.stats.dmgByElement[element] = (state.stats.dmgByElement[element] ?? 0) + dealt;
  if (dealt >= 1) {
    const col = mult > 1 ? '#ffe08a' : mult < 1 ? '#8899aa' : '#ffffff';
    fx.floater(e.x + (Math.random() - 0.5) * 12, e.y - 10, String(Math.round(dealt)), col, mult > 1 ? 12 : 10);
  }
  if (e.hp <= 0) kill(state, e, src);
}

/** Reinforcement spawn mid-track (armor-break heartlings, carrier payloads). */
function spawnAtDist(state: GameState, type: string, dist: number): Enemy | null {
  const def = ENEMY_DEFS[type];
  if (!def) return null;
  const scale = ACT_SCALING[Math.min(state.act, ACT_SCALING.length - 1)];
  const hp = def.hp * scale.hp;
  const d = Math.max(0, dist);
  const p = state.track.posAt(d);
  const e: Enemy = {
    id: state.nextId++, def, hp, maxHp: hp, dist: d,
    x: p.x, y: p.y, statuses: {}, wobble: Math.random() * Math.PI * 2,
    animT: Math.random() * 2, angle: p.angle, hitFlash: 0,
    speedMult: scale.speed,
    armorHp: def.armor,
  };
  state.enemies.push(e);
  fx.burst(p.x, p.y, def.color, 10, 120, 3, 0.4);
  return e;
}

/** The carapace gives way — timed out or battered down early. shieldHits is
 *  deliberately NOT reset: it holds the "already shattered this window" mark
 *  so the shield can't re-arm until a fresh cycle clears it. */
function shatterShield(state: GameState, e: Enemy): void {
  e.shieldActive = false;
  fx.floater(e.x, e.y - 32, 'Shield shatters!', '#ffd75e', 14);
  fx.burst(e.x, e.y, '#ff9b4a', 18, 170, 3.5, 0.5);
  fx.ring(e.x, e.y, '#ff7b00', 48);
  sfx.bossRoar();
}

/** The shell gives — full damage flows from here on, and the Colossus births its heartlings. */
function breakArmor(state: GameState, e: Enemy): void {
  e.armorHp = 0;
  fx.floater(e.x, e.y - 30, 'ARMOR SHATTERED!', '#ffd75e', 15);
  fx.burst(e.x, e.y, '#cdd7e0', 22, 190, 4, 0.6);
  fx.ring(e.x, e.y, '#cdd7e0', 55);
  sfx.armorBreak();
  for (const id of e.def.armorBreakSpawns ?? []) {
    spawnAtDist(state, id, e.dist - 20 - Math.random() * 30);
  }
}

function kill(state: GameState, e: Enemy, src?: Wizard): void {
  const actBounty = ACT_SCALING[Math.min(state.act, ACT_SCALING.length - 1)].bounty;
  const bounty = Math.round(
    e.def.bounty * (state.waveModifier?.bountyMult ?? 1) * actBounty * (1 + state.perks.bountyPct / 100),
  ) + state.bountyBonus;
  state.gold += bounty;
  state.stats.kills++;
  fx.floater(e.x, e.y - 22, `+${bounty}`, '#ffd75e', 12);
  fx.burst(e.x, e.y, e.def.color, 12, 130, 3.5, 0.5);
  fx.ring(e.x, e.y, e.def.color, e.def.boss ? 46 : 24);
  sfx.coin();
  // Blood Chalice relic: every 40 kills restores a life
  if (state.stats.kills % 40 === 0 && relicSpecial(state, 'killLives')) {
    state.lives++;
    fx.floater(e.x, e.y - 40, '🍷 +1 ❤', '#ff9db5', 14);
  }
  // a slain thief drops the loot he was carrying home
  if (e.returning && e.def.stealsGold) {
    state.gold += e.def.stealsGold;
    fx.floater(e.x, e.y - 34, `💰 +${e.def.stealsGold} recovered!`, '#7dff9b', 13);
  }
  // the banshee's death-wail silences every tower near her corpse
  if (e.def.deathSilence) {
    const ds = e.def.deathSilence;
    fx.ring(e.x, e.y, '#cfd8e8', ds.radius);
    sfx.wail();
    for (const w of state.wizards) {
      if (w.pendingSpecialize) continue;
      if ((w.x - e.x) ** 2 + (w.y - e.y) ** 2 <= ds.radius * ds.radius) {
        w.silencedT = Math.max(w.silencedT ?? 0, ds.duration);
        fx.floater(w.x, w.y - 28, 'silenced!', '#cfd8e8', 12);
      }
    }
  }
  // things that burst: wagons spill troops, slimes split into smaller goo
  if (e.def.deathSpawns) {
    const isSlime = e.def.id.startsWith('slime');
    if (isSlime) {
      sfx.squish();
      fx.burst(e.x, e.y, e.def.color, 12, 110, 4, 0.5);
    } else {
      sfx.woodCrash();
      fx.floater(e.x, e.y - 34, 'The wagon breaks open!', '#e0b070', 13);
      fx.burst(e.x, e.y, '#7a5c38', 18, 150, 4, 0.6);
    }
    e.def.deathSpawns.forEach((id, i) => spawnAtDist(state, id, e.dist - 8 - i * 14));
  }
  onKillProcs(state, e, src);
}

/** Vampire Survivors-style on-kill chain: explosions, bonus gold, permanent ramp, flame spread. */
function onKillProcs(state: GameState, e: Enemy, src?: Wizard): void {
  for (const c of state.draftMods) {
    if (!c.fx) continue;
    // scoped cards only trigger when the KILLING tower matches; unattributed kills
    // (burn ticks) trigger only unscoped ('all', no family) cards
    const scoped = c.element !== 'all' || !!c.family;
    const attributed = src ? cardAppliesTo(c, src.def) : !scoped;
    runKillFx(state, e, src, c.fx, attributed);
  }
  // evolved forms carry their own triggered abilities (always attributed to themselves)
  if (src?.def.innateFx) runKillFx(state, e, src, src.def.innateFx, true);
}

function runKillFx(state: GameState, e: Enemy, src: Wizard | undefined, f: import('./types').ProcFx, attributed: boolean): void {
  // Wildfire is self-scoping (the victim must be burning) — any death counts,
  // because burn deaths usually have no source tower at all
  if (f.spreadBurnOnDeath && e.statuses.burn) {
    let best: Enemy | undefined;
    let bestD2 = 90 * 90;
    for (const o of state.enemies) {
      if (o === e || o.hp <= 0 || o.statuses.burn || o.immunities?.includes('burn')) continue;
      const d2 = (o.x - e.x) ** 2 + (o.y - e.y) ** 2;
      if (d2 <= bestD2) {
        bestD2 = d2;
        best = o;
      }
    }
    if (best) {
      best.statuses.burn = { t: Math.max(e.statuses.burn.t, 1.5), dps: e.statuses.burn.dps };
      fx.arc(e.x, e.y, best.x, best.y, '#ff7b00');
      fx.floater(best.x, best.y - 16, 'Wildfire!', '#ff9b4a', 11);
    }
  }

  if (!attributed) return;

  const ex = f.onKillExplode;
  if (ex) {
    sfx.explosion();
    fx.burst(e.x, e.y, '#ffab5e', 14, 160, 3.5);
    fx.burst(e.x, e.y, '#9a9086', 8, 30, 4, 1.2);
    fx.ring(e.x, e.y, '#ff7b00', ex.radius);
    for (const o of state.enemies) {
      if (o === e || o.hp <= 0) continue;
      const dx = o.x - e.x;
      const dy = o.y - e.y;
      if (dx * dx + dy * dy <= (ex.radius + o.def.radius) ** 2) {
        dealDamage(state, o, ex.damage, 'physical', src); // may chain — corpses explode corpses
      }
    }
  }

  const g = f.onKillGold;
  if (g && state.rng() < g.chance) {
    state.gold += g.amount;
    fx.floater(e.x, e.y - 36, `+${g.amount} bonus`, '#ffd75e', 11);
  }

  const stk = f.onKillStackDamage;
  if (stk && state.killStackPct < stk.capPct) {
    state.killStackPct = Math.min(stk.capPct, state.killStackPct + stk.pct);
  }
}

// ---------------------------------------------------------------- enemies

export function updateEnemies(state: GameState, dt: number): void {
  // ---- support auras (two passes: sources first, then everyone moves)
  for (const e of state.enemies) {
    e.hasteMul = 1;
    e.wardCap = undefined;
  }
  for (const e of state.enemies) {
    const aura = e.def.aura;
    if (!aura || e.hp <= 0) continue;
    if (aura.kind === 'ward') {
      // shieldbearer: allies under the banner can't be one-shot
      for (const o of state.enemies) {
        if (o === e || o.hp <= 0) continue;
        const d2 = (o.x - e.x) ** 2 + (o.y - e.y) ** 2;
        if (d2 <= aura.radius * aura.radius) {
          o.wardCap = Math.min(o.wardCap ?? Infinity, aura.power);
        }
      }
      continue;
    }
    if (aura.kind === 'heal') {
      e.auraCd = (e.auraCd ?? aura.period ?? 2) - dt;
      if (e.auraCd <= 0) {
        e.auraCd = aura.period ?? 2;
        let healed = false;
        for (const o of state.enemies) {
          if (o === e || o.hp <= 0 || o.hp >= o.maxHp) continue;
          const d2 = (o.x - e.x) ** 2 + (o.y - e.y) ** 2;
          if (d2 > aura.radius * aura.radius) continue;
          const amount = o.maxHp * aura.power;
          o.hp = Math.min(o.maxHp, o.hp + amount);
          fx.floater(o.x, o.y - 12, `+${Math.round(amount)}`, '#7dff9b', 10);
          healed = true;
        }
        if (healed) {
          fx.ring(e.x, e.y, '#3fae5a', aura.radius);
          sfx.healChime();
        }
      }
    } else {
      // haste: the horde marches to the drum
      sfx.drumBeat(); // gated internally to the marching cadence
      for (const o of state.enemies) {
        if (o === e || o.hp <= 0) continue;
        const d2 = (o.x - e.x) ** 2 + (o.y - e.y) ** 2;
        if (d2 <= aura.radius * aura.radius) {
          o.hasteMul = Math.max(o.hasteMul ?? 1, 1 + aura.power);
        }
      }
    }
  }

  for (const e of state.enemies) {
    if (e.hp <= 0) continue;
    const st = e.statuses;

    // troll blood: regenerates unless frozen solid — chip damage gets out-healed
    if (e.def.regen && !st.frozen && e.hp < e.maxHp) {
      e.hp = Math.min(e.maxHp, e.hp + e.maxHp * e.def.regen * dt);
    }

    // rolling carriers drip troops as they advance
    if (e.def.dropSpawns) {
      e.dropCd = (e.dropCd ?? e.def.dropSpawns.period) - dt;
      if (e.dropCd <= 0) {
        e.dropCd = e.def.dropSpawns.period;
        sfx.woodCrash();
        fx.floater(e.x, e.y - 30, 'The tower unloads!', '#e0b070', 12);
        for (let i = 0; i < e.def.dropSpawns.count; i++) {
          spawnAtDist(state, e.def.dropSpawns.type, e.dist - 18 - i * 14);
        }
      }
    }

    // the Hexer curses a random tower in reach — 3s of enforced silence
    if (e.def.hexes) {
      e.hexCd = (e.hexCd ?? e.def.hexes.period * 0.6) - dt;
      if (e.hexCd <= 0) {
        e.hexCd = e.def.hexes.period;
        const r2 = e.def.hexes.radius * e.def.hexes.radius;
        const targets = state.wizards.filter(
          (w) => !w.pendingSpecialize && (w.silencedT ?? 0) <= 0 &&
            (w.x - e.x) ** 2 + (w.y - e.y) ** 2 <= r2,
        );
        if (targets.length > 0) {
          const w = targets[Math.floor(Math.random() * targets.length)];
          w.silencedT = e.def.hexes.duration;
          fx.arc(e.x, e.y, w.x, w.y, '#b06bff');
          fx.ring(w.x, w.y, '#7a4a9e', 30);
          fx.floater(w.x, w.y - 30, 'HEXED!', '#b06bff', 14);
          sfx.hexZap();
        }
      }
    }

    // Cinder Carapace: shields up for the LAST stretch of each cycle, so a fresh
    // boss is hittable first. Blocked hits are counted in dealDamage; the timer
    // here raises the shield and retires it when the window closes.
    if (e.def.periodicShield) {
      const ps = e.def.periodicShield;
      e.shieldT = (e.shieldT ?? 0) + dt;
      const inWindow = e.shieldT % ps.period > ps.period - ps.duration;
      if (inWindow && !e.shieldActive && (e.shieldHits ?? 0) === 0) {
        // shieldHits === 0 gates the re-arm: a shield battered down early leaves its
        // hit count standing until the window closes, so it stays down this cycle
        e.shieldActive = true;
        fx.floater(e.x, e.y - 34, '🛡 CINDER CARAPACE!', '#ff9b4a', 15);
        fx.ring(e.x, e.y, '#ff7b00', 60);
        sfx.armorClank();
      } else if (!inWindow && e.shieldActive) {
        shatterShield(state, e); // window closed — the shield burns out on its own
      }
      if (!inWindow) e.shieldHits = 0; // new cycle, clean slate
      if (e.shieldActive) {
        // steady ember pulse telegraphs "this is a shield, not a bug"
        const c = e.shieldT % 0.4;
        if (c < dt) fx.ring(e.x, e.y, '#ff7b00', 34);
      }
    }

    // Heartstones: at each hp threshold the Colossus plants a pair of heal-crystals
    // beside itself. A single huge hit can cross two thresholds — plant both pairs.
    if (e.def.hpPhases) {
      const hpp = e.def.hpPhases;
      let idx = e.phaseIdx ?? 0;
      while (idx < hpp.thresholds.length && e.hp <= e.maxHp * hpp.thresholds[idx]) {
        idx++;
        fx.floater(e.x, e.y - 40, '💗 Heartstones erupt!', '#ff9db5', 15);
        fx.ring(e.x, e.y, '#e05a7a', 90);
        sfx.healChime();
        for (let i = 0; i < hpp.count; i++) {
          spawnAtDist(state, hpp.type, e.dist + (i % 2 === 0 ? -45 : 45) * (1 + Math.floor(i / 2)));
        }
      }
      e.phaseIdx = idx;
    }

    // wraiths slip out of reality on a cycle (phased at the END of each period,
    // so a fresh spawn is targetable for a few seconds first)
    if (e.def.phase) {
      e.phaseT = (e.phaseT ?? 0) + dt;
      const c = e.phaseT % e.def.phase.period;
      const wasPhased = e.phased;
      e.phased = c > e.def.phase.period - e.def.phase.duration;
      if (e.phased !== wasPhased) sfx.phaseShimmer();
    }

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
    if (st.entangled) {
      st.entangled.t -= dt;
      if (st.entangled.t <= 0) delete st.entangled;
    }
    if (st.snared) {
      st.snared.t -= dt;
      if (st.snared.t <= 0) delete st.snared;
    }
    if (st.stunned) {
      st.stunned.t -= dt;
      if (st.stunned.t <= 0) delete st.stunned;
    }
    if (e.hp <= 0) continue;

    // movement
    let factor = 1;
    if (st.frozen || st.entangled || st.stunned) factor = 0;
    else if (st.chill) factor = Math.max(0.25, 1 - st.chill.pct * (0.6 + 0.2 * st.chill.stacks));
    if (factor > 0 && st.snared) factor *= Math.max(0.2, 1 - st.snared.pct); // stacks with chill
    factor *= e.hasteMul ?? 1; // the war drums

    e.animT += factor * dt; // walk cycle slows/freezes with the enemy
    if (e.hitFlash > 0) e.hitFlash -= dt;
    if (e.gustCd && e.gustCd > 0) e.gustCd -= dt;
    if (e.entangleCd && e.entangleCd > 0) e.entangleCd -= dt;

    const step = e.def.speed * (e.speedMult ?? 1) * factor * dt;
    e.dist += e.returning ? -step : step; // thieves sprint back home with the loot

    if (e.def.flying) {
      // flyers ignore the road: dist is progress along the straight entrance->exit line
      const a = state.track.posAt(0);
      const b = state.track.posAt(state.track.total);
      const lineLen = Math.hypot(b.x - a.x, b.y - a.y) || 1;
      const t = Math.max(0, Math.min(1, e.dist / lineLen));
      e.x = a.x + (b.x - a.x) * t;
      e.y = a.y + (b.y - a.y) * t;
      e.angle = Math.atan2(b.y - a.y, b.x - a.x);
      if (e.dist >= lineLen) leak(state, e);
    } else {
      const p = state.track.posAt(e.dist);
      e.x = p.x;
      e.y = p.y;
      e.angle = p.angle;
      if (e.returning) {
        e.angle += Math.PI; // running the other way
        if (e.dist <= 0) e.hp = 0; // the thief escapes — the gold is gone for good
      } else if (e.dist >= state.track.total) {
        leak(state, e);
      }
    }
  }
  state.enemies = state.enemies.filter((e) => e.hp > 0);
}

/** An enemy reaches the gate. Thieves grab gold and turn around; everyone else costs lives. */
function leak(state: GameState, e: Enemy): void {
  if (e.def.stealsGold && !e.returning) {
    const stolen = Math.min(state.gold, e.def.stealsGold);
    state.gold -= stolen;
    e.returning = true;
    fx.floater(e.x, e.y - 20, `💰 -${stolen} stolen!`, '#ffd75e', 15);
    sfx.leak();
    return;
  }
  e.hp = 0; // no bounty — mark for removal via leak path
  const cost = e.def.leakCost ?? (e.def.boss ? 5 : 1);
  state.lives -= cost;
  state.stats.leaks++;
  fx.floater(e.x - 20, e.y, `-${cost} ❤`, '#ff6b81', cost > 1 ? 16 : 14);
  sfx.leak();
  if (state.lives <= 0) {
    state.lives = 0;
    state.phase = 'lost';
    sfx.lose();
  }
}

/** Burn ticks bypass reaction logic but still respect resistances (and Rattled); kills pay bounty. */
function dealBurnTick(state: GameState, e: Enemy, amount: number): void {
  if (e.shieldActive) return; // blocked, but 60 ticks/s must NOT count as shield hits
  if (e.armorHp !== undefined && e.armorHp > 0) return; // flames patter off the shell
  const mult = e.def.resist.fire ?? 1;
  const rattleMult = 1 + (e.statuses.rattled?.pct ?? 0);
  const dealt = amount * mult * rattleMult;
  e.hp -= dealt;
  state.stats.dmgByElement.fire += dealt;
  if (e.hp <= 0) kill(state, e);
}
