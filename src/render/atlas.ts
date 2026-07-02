/**
 * Runtime sprite atlas. Loads public/atlas.{png,json} if present.
 * Every draw site falls back to procedural placeholders when a key is missing,
 * so the game is fully playable with zero generated art.
 */

interface Frame {
  x: number;
  y: number;
  w: number;
  h: number;
  ax: number; // anchor 0..1
  ay: number;
}

export interface AnimDef {
  frames: string[]; // frame keys, in order
  fps: number;
  mode: 'loop' | 'pingpong';
}

let image: HTMLImageElement | null = null;
let frames: Record<string, Frame> = {};
let anims: Record<string, AnimDef> = {};

export async function loadAtlas(): Promise<void> {
  try {
    const res = await fetch('/atlas.json');
    if (!res.ok) return; // no atlas generated yet — placeholders take over
    const json = (await res.json()) as { frames: Record<string, Frame>; anims?: Record<string, AnimDef> };
    const img = new Image();
    img.src = '/atlas.png';
    await img.decode();
    frames = json.frames;
    anims = json.anims ?? {};
    image = img;
    console.log(`atlas loaded: ${Object.keys(frames).length} sprites, ${Object.keys(anims).length} anims`);
  } catch {
    // silent: placeholder art is the designed fallback
  }
}

export function hasSprite(key: string): boolean {
  return image !== null && key in frames;
}

export function hasAnim(key: string): boolean {
  return image !== null && key in anims;
}

/**
 * Draw an animation frame selected by a time clock (seconds). Loops or ping-pongs.
 * Returns false when the anim isn't in the atlas so callers can fall back.
 */
export function drawAnim(
  ctx: CanvasRenderingContext2D,
  key: string,
  timeSec: number,
  x: number,
  y: number,
  heightPx: number,
  opts: DrawOpts = {},
): boolean {
  const a = anims[key];
  if (!a || a.frames.length === 0) return false;
  const n = a.frames.length;
  let fi = Math.floor(Math.max(0, timeSec) * a.fps);
  if (a.mode === 'pingpong' && n > 1) {
    const cycle = 2 * n - 2;
    fi = fi % cycle;
    if (fi >= n) fi = cycle - fi;
  } else {
    fi = fi % n;
  }
  return drawSprite(ctx, a.frames[fi], x, y, heightPx, opts);
}

export interface DrawOpts {
  scale?: number;
  alpha?: number;
  /** rotation in radians around the anchor point */
  rot?: number;
  /** mirror horizontally (face the other way) */
  flipX?: boolean;
  /** stretch factors along x/y for squash & stretch (default 1) */
  sx?: number;
  sy?: number;
  /** brightness boost (1 = normal) — used for hit flashes */
  glow?: number;
}

/** Draw sprite with its anchor at (x, y), scaled to `heightPx` tall. */
export function drawSprite(
  ctx: CanvasRenderingContext2D,
  key: string,
  x: number,
  y: number,
  heightPx: number,
  opts: DrawOpts = {},
): boolean {
  if (!image) return false;
  const f = frames[key];
  if (!f) return false;
  const scale = (heightPx / f.h) * (opts.scale ?? 1);
  const w = f.w * scale * (opts.sx ?? 1);
  const h = f.h * scale * (opts.sy ?? 1);

  ctx.save();
  if (opts.alpha !== undefined) ctx.globalAlpha = opts.alpha;
  ctx.translate(x, y);
  if (opts.rot) ctx.rotate(opts.rot);
  if (opts.flipX) ctx.scale(-1, 1);
  if (opts.glow && opts.glow > 1) ctx.filter = `brightness(${opts.glow})`;
  ctx.drawImage(image, f.x, f.y, f.w, f.h, -w * f.ax, -h * f.ay, w, h);
  ctx.restore();
  return true;
}
