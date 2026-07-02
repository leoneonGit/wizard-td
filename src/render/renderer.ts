import { BOARD_W, BOARD_H, CELL, COLS, ROWS, cellKey, cellCenter, pixelToCell, inBounds } from '../engine/grid';
import { ELEMENTS } from '../data/elements';
import { WIZARDS } from '../data/wizards';
import { fx } from './effects';
import { drawSprite, drawAnim } from './atlas';
import { isBuildable, type GameState } from '../game/state';
import type { Enemy, Wizard, WizardDef } from '../game/types';

let ctx: CanvasRenderingContext2D;
let groundCache: HTMLCanvasElement | null = null;

export function initRenderer(canvas: HTMLCanvasElement): void {
  ctx = canvas.getContext('2d')!;
}

export function draw(state: GameState, time: number): void {
  drawGround(state);
  drawTrack(state);
  drawPlacementOverlay(state);
  for (const w of state.wizards) drawWizard(w, w.id === state.selectedWizardId, time);
  for (const e of state.enemies) drawEnemy(e, time);
  drawProjectiles(state);
  fx.draw(ctx);
  drawPlacementGhost(state);
}

// ---------------------------------------------------------------- ground & track

function drawGround(state: GameState): void {
  if (!groundCache) {
    groundCache = document.createElement('canvas');
    groundCache.width = BOARD_W;
    groundCache.height = BOARD_H;
    const g = groundCache.getContext('2d')!;
    for (let cy = 0; cy < ROWS; cy++) {
      for (let cx = 0; cx < COLS; cx++) {
        const even = (cx + cy) % 2 === 0;
        g.fillStyle = even ? '#243524' : '#1f2f20';
        g.fillRect(cx * CELL, cy * CELL, CELL, CELL);
      }
    }
    // scattered pebbles/grass tufts for texture
    for (let i = 0; i < 260; i++) {
      const x = Math.random() * BOARD_W;
      const y = Math.random() * BOARD_H;
      g.fillStyle = Math.random() < 0.5 ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.06)';
      g.beginPath();
      g.arc(x, y, 1 + Math.random() * 2, 0, Math.PI * 2);
      g.fill();
    }
    drawTrackInto(g, state);
  }
  ctx.drawImage(groundCache, 0, 0);
}

function drawTrackInto(g: CanvasRenderingContext2D, state: GameState): void {
  const pts = state.track.points;
  g.lineJoin = 'round';
  g.lineCap = 'round';

  const stroke = (width: number, color: string) => {
    g.strokeStyle = color;
    g.lineWidth = width;
    g.beginPath();
    g.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) g.lineTo(pts[i].x, pts[i].y);
    g.stroke();
  };

  stroke(38, '#4a3b2a'); // dark edge
  stroke(32, '#6e583c'); // dirt body
  stroke(26, '#7d6647'); // worn center

  // center guide dashes
  g.setLineDash([10, 14]);
  stroke(2, 'rgba(255,240,200,0.25)');
  g.setLineDash([]);
}

function drawTrack(state: GameState): void {
  // portals drawn live (they pulse)
  const t = performance.now() / 1000;
  const start = state.track.posAt(0);
  const end = state.track.posAt(state.track.total);
  drawPortal(start.x, start.y, '#9d4edd', t);
  drawPortal(end.x, end.y, '#3a86ff', t + 0.5);
}

function drawPortal(x: number, y: number, color: string, t: number): void {
  const pulse = 1 + Math.sin(t * 3) * 0.12;
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = 18;
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.ellipse(x, y, 15 * pulse, 22 * pulse, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = 'rgba(20,10,40,0.85)';
  ctx.beginPath();
  ctx.ellipse(x, y, 12 * pulse, 19 * pulse, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

// ---------------------------------------------------------------- placement

function drawPlacementOverlay(state: GameState): void {
  if (!state.placingType) return;
  // tint blocked cells subtly while placing
  ctx.save();
  ctx.globalAlpha = 0.15;
  for (let cy = 0; cy < ROWS; cy++) {
    for (let cx = 0; cx < COLS; cx++) {
      if (state.blocked.has(cellKey(cx, cy))) {
        ctx.fillStyle = '#000';
        ctx.fillRect(cx * CELL, cy * CELL, CELL, CELL);
      }
    }
  }
  ctx.restore();
}

function drawPlacementGhost(state: GameState): void {
  if (!state.placingType || !state.mouseOnBoard) return;
  const def = WIZARDS[state.placingType];
  const { cx, cy } = pixelToCell(state.mouseX, state.mouseY);
  if (!inBounds(cx, cy)) return;
  const ok = isBuildable(state, cx, cy);
  const c = cellCenter(cx, cy);

  ctx.save();
  // range preview
  ctx.globalAlpha = 0.14;
  ctx.fillStyle = ok ? '#7dff9b' : '#ff6b6b';
  ctx.beginPath();
  ctx.arc(c.x, c.y, def.range, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 0.5;
  ctx.strokeStyle = ok ? '#7dff9b' : '#ff6b6b';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(c.x, c.y, def.range, 0, Math.PI * 2);
  ctx.stroke();

  // cell highlight
  ctx.globalAlpha = 0.35;
  ctx.fillStyle = ok ? '#7dff9b' : '#ff6b6b';
  ctx.fillRect(cx * CELL, cy * CELL, CELL, CELL);

  ctx.globalAlpha = 0.75;
  drawWizardSprite(c.x, c.y, def, -Math.PI / 2, 0);
  ctx.restore();
}

// ---------------------------------------------------------------- wizards

function drawWizard(w: Wizard, selected: boolean, time: number): void {
  if (selected) {
    ctx.save();
    ctx.globalAlpha = 0.1;
    ctx.fillStyle = '#c9b8ff';
    ctx.beginPath();
    ctx.arc(w.x, w.y, w.stats.range, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 0.6;
    ctx.strokeStyle = '#c9b8ff';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.arc(w.x, w.y, w.stats.range, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }
  const bob = Math.sin(time * 2.2 + w.id) * 1.2;
  const recoil = Math.max(0, w.recoil) / 0.18;
  drawWizardSprite(w.x, w.y + bob, w.def, w.aim, recoil, tierGlow(w));
}

function tierGlow(w: Wizard): number {
  return w.tiers[0] + w.tiers[1];
}

/** Procedural cute wizard: robe, hat, staff with glowing orb. Placeholder until atlas art. */
function drawWizardSprite(x: number, y: number, def: WizardDef, aim: number, recoil: number, tiers = 0): void {
  const el = ELEMENTS[def.element];
  const kick = recoil * 3;
  const bx = x - Math.cos(aim) * kick;
  const by = y - Math.sin(aim) * kick;

  ctx.save();

  // shadow
  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.beginPath();
  ctx.ellipse(x, y + 13, 12, 5, 0, 0, Math.PI * 2);
  ctx.fill();

  // generated idle animation > static sprite > procedural.
  // alive-ness: mirror toward the target, lean into the aim, squash-and-stretch on cast.
  const wizTime = performance.now() / 1000;
  const facingLeft = Math.cos(aim) < -0.1;
  const dir = facingLeft ? -1 : 1;
  const castLean = Math.sin(aim) * 0.09 * dir - recoil * 0.22 * dir; // kick back on release
  const wopts = {
    flipX: facingLeft,
    rot: castLean,
    sx: 1 + recoil * 0.18, // stretch toward the shot...
    sy: 1 - recoil * 0.12, // ...while squashing vertically
  };
  if (
    drawAnim(ctx, `wizard_${def.id}_idle`, wizTime, bx, by + 16, 52, wopts) ||
    drawSprite(ctx, `wizard_${def.id}`, bx, by + 16, 52, wopts)
  ) {
    // staff-tip glow keeps aim readable on static sprites
    const gx = bx + Math.cos(aim) * 15;
    const gy = by + Math.sin(aim) * 15;
    ctx.shadowColor = el.glow;
    ctx.shadowBlur = 10 + tiers * 3;
    ctx.fillStyle = el.color;
    ctx.beginPath();
    ctx.arc(gx, gy, 3.5 + tiers * 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    return;
  }

  // staff (points toward aim)
  const sx = bx + Math.cos(aim) * 14;
  const sy = by + Math.sin(aim) * 14;
  ctx.strokeStyle = '#8a6f4d';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(bx + Math.cos(aim + 2.6) * 6, by + Math.sin(aim + 2.6) * 6);
  ctx.lineTo(sx, sy);
  ctx.stroke();
  // orb at staff tip
  ctx.shadowColor = el.glow;
  ctx.shadowBlur = 10 + tiers * 3;
  ctx.fillStyle = el.color;
  ctx.beginPath();
  ctx.arc(sx, sy, 4 + tiers * 0.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  // robe (body)
  const grad = ctx.createRadialGradient(bx - 3, by - 5, 2, bx, by, 13);
  grad.addColorStop(0, lighten(el.color, 0.35));
  grad.addColorStop(1, el.color);
  ctx.fillStyle = grad;
  ctx.strokeStyle = 'rgba(0,0,0,0.35)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(bx, by, 11, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // face
  ctx.fillStyle = '#f5d7b2';
  ctx.beginPath();
  ctx.arc(bx, by - 3, 5.5, 0, Math.PI * 2);
  ctx.fill();
  // eyes
  ctx.fillStyle = '#2a2a35';
  const lookX = Math.cos(aim) * 1.5;
  const lookY = Math.sin(aim) * 1.0;
  ctx.beginPath();
  ctx.arc(bx - 2 + lookX, by - 3.5 + lookY, 1, 0, Math.PI * 2);
  ctx.arc(bx + 2 + lookX, by - 3.5 + lookY, 1, 0, Math.PI * 2);
  ctx.fill();

  // hat
  ctx.fillStyle = darken(el.color, 0.25);
  ctx.strokeStyle = 'rgba(0,0,0,0.35)';
  ctx.beginPath();
  ctx.moveTo(bx - 9, by - 6);
  ctx.quadraticCurveTo(bx, by - 9, bx + 9, by - 6);
  ctx.lineTo(bx + 2.5, by - 19);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  // hat band
  ctx.strokeStyle = el.glow;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(bx - 7, by - 7.5);
  ctx.quadraticCurveTo(bx, by - 10, bx + 7, by - 7.5);
  ctx.stroke();

  ctx.restore();
}

// ---------------------------------------------------------------- enemies

function drawEnemy(e: Enemy, time: number): void {
  const r = e.def.radius;
  const wob = Math.sin(time * 8 + e.wobble) * 0.08 + 1;

  ctx.save();

  // shadow
  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.beginPath();
  ctx.ellipse(e.x, e.y + r * 0.85, r * 0.9, r * 0.35, 0, 0, Math.PI * 2);
  ctx.fill();

  // status tint rings under body
  if (e.statuses.wet) {
    ctx.strokeStyle = 'rgba(90,180,255,0.7)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(e.x, e.y, r + 4, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (e.statuses.burn) {
    ctx.strokeStyle = 'rgba(255,120,40,0.8)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(e.x, e.y, r + 7, 0, Math.PI * 2);
    ctx.stroke();
    if (Math.random() < 0.3) {
      fx.burst(e.x + (Math.random() - 0.5) * r, e.y - r * 0.5, '#ff9b45', 1, 30, 2.5, 0.4);
    }
  }

  // walk animation > static sprite > procedural (anim clock freezes with the enemy)
  // facing: mirror when traveling left; lean slightly into vertical stretches
  const movingLeft = Math.cos(e.angle) < -0.15;
  const lean = Math.sin(e.angle) * 0.14 * (movingLeft ? -1 : 1);
  const drawOpts = {
    flipX: movingLeft,
    rot: lean,
    glow: e.hitFlash > 0 ? 1.9 : 1,
  };
  const spriteDrawn =
    drawAnim(ctx, `enemy_${e.def.id}_walk`, e.animT, e.x, e.y + r * 0.7, r * 3.0, drawOpts) ||
    drawSprite(ctx, `enemy_${e.def.id}`, e.x, e.y + r * 0.7, r * 3.0, { ...drawOpts, scale: wob });

  // body (procedural fallback)
  const chillTint = e.statuses.chill || e.statuses.frozen;
  if (!spriteDrawn) {
  const grad = ctx.createRadialGradient(e.x - r * 0.3, e.y - r * 0.4, 1, e.x, e.y, r * wob);
  grad.addColorStop(0, lighten(e.def.color, chillTint ? 0.5 : 0.3));
  grad.addColorStop(1, chillTint ? mix(e.def.color, '#7fd4ff', 0.45) : e.def.color);
  ctx.fillStyle = grad;
  ctx.strokeStyle = 'rgba(0,0,0,0.4)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(e.x, e.y, r * wob, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // eyes (facing along path — simple: forward = right-ish, use small offset)
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(e.x - r * 0.25, e.y - r * 0.2, r * 0.22, 0, Math.PI * 2);
  ctx.arc(e.x + r * 0.25, e.y - r * 0.2, r * 0.22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#1a1a24';
  ctx.beginPath();
  ctx.arc(e.x - r * 0.25, e.y - r * 0.18, r * 0.1, 0, Math.PI * 2);
  ctx.arc(e.x + r * 0.25, e.y - r * 0.18, r * 0.1, 0, Math.PI * 2);
  ctx.fill();
  }

  // chilled sprite tint (fallback bodies tint via gradient instead)
  if (spriteDrawn && chillTint) {
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = '#7fd4ff';
    ctx.beginPath();
    ctx.arc(e.x, e.y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  // frozen: ice block overlay
  if (e.statuses.frozen) {
    ctx.globalAlpha = 0.55;
    ctx.fillStyle = '#a8e6ff';
    ctx.strokeStyle = '#d7f5ff';
    ctx.lineWidth = 1.5;
    const s = r * 1.35;
    ctx.beginPath();
    ctx.rect(e.x - s, e.y - s, s * 2, s * 2);
    ctx.fill();
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  // hp bar
  if (e.hp < e.maxHp) {
    const bw = r * 2.2;
    const frac = Math.max(0, e.hp / e.maxHp);
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.fillRect(e.x - bw / 2, e.y - r - 9, bw, 4);
    ctx.fillStyle = frac > 0.5 ? '#7dff9b' : frac > 0.25 ? '#ffd75e' : '#ff6b6b';
    ctx.fillRect(e.x - bw / 2, e.y - r - 9, bw * frac, 4);
  }

  // chill stack pips
  if (e.statuses.chill) {
    ctx.fillStyle = '#b3ecff';
    for (let i = 0; i < e.statuses.chill.stacks; i++) {
      ctx.beginPath();
      ctx.arc(e.x - 8 + i * 8, e.y + r + 6, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.restore();
}

// ---------------------------------------------------------------- projectiles

function drawProjectiles(state: GameState): void {
  ctx.save();
  for (const p of state.projectiles) {
    const el = ELEMENTS[p.element];
    const dir = Math.atan2(p.ty - p.y, p.tx - p.x);
    ctx.shadowColor = el.glow;
    ctx.shadowBlur = 12;
    ctx.fillStyle = el.color;
    ctx.beginPath();
    // comet: stretched along the direction of travel
    ctx.ellipse(p.x, p.y, 8, 4, dir, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.ellipse(p.x + Math.cos(dir) * 2, p.y + Math.sin(dir) * 2, 3, 2, dir, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

// ---------------------------------------------------------------- color utils

function lighten(hex: string, amt: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgb(${Math.min(255, r + 255 * amt) | 0},${Math.min(255, g + 255 * amt) | 0},${Math.min(255, b + 255 * amt) | 0})`;
}

function darken(hex: string, amt: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgb(${(r * (1 - amt)) | 0},${(g * (1 - amt)) | 0},${(b * (1 - amt)) | 0})`;
}

function mix(hexA: string, hexB: string, t: number): string {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  return `rgb(${(a[0] + (b[0] - a[0]) * t) | 0},${(a[1] + (b[1] - a[1]) * t) | 0},${(a[2] + (b[2] - a[2]) * t) | 0})`;
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}
