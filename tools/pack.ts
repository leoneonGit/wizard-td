/**
 * Shared atlas packer: bundles static sprites (art/processed/*.png) AND animation
 * strips (art/anim/<animKey>/NNN.png + art/anim/anims.json) into public/atlas.{png,json}.
 *
 * atlas.json:
 *   frames: { key: {x,y,w,h,ax,ay} }            — every drawable frame
 *   anims:  { animKey: {frames:[keys], fps, mode} }
 */
import { mkdir, readFile, writeFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import sharp, { type OverlayOptions } from 'sharp';
import { MANIFEST } from '../art/manifest.ts';

const ROOT = path.join(import.meta.dirname, '..');
const PROCESSED = path.join(ROOT, 'art', 'processed');
const ANIM_DIR = path.join(ROOT, 'art', 'anim');
const PUBLIC = path.join(ROOT, 'public');

interface Frame {
  x: number;
  y: number;
  w: number;
  h: number;
  ax: number;
  ay: number;
}

export interface AnimMeta {
  fps: number;
  mode: 'loop' | 'pingpong';
  anchor: { x: number; y: number };
}

async function exists(p: string): Promise<boolean> {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

interface Item {
  key: string;
  buf: Buffer;
  w: number;
  h: number;
  ax: number;
  ay: number;
}

export async function packAtlas(): Promise<void> {
  const items: Item[] = [];

  // static sprites (anchors from the manifest)
  for (const e of MANIFEST) {
    const p = path.join(PROCESSED, `${e.key}.png`);
    if (!(await exists(p))) continue;
    const buf = await readFile(p);
    const meta = await sharp(buf).metadata();
    items.push({ key: e.key, buf, w: meta.width!, h: meta.height!, ax: e.anchor.x, ay: e.anchor.y });
  }

  // animation strips
  const anims: Record<string, { frames: string[]; fps: number; mode: 'loop' | 'pingpong' }> = {};
  const animsMetaPath = path.join(ANIM_DIR, 'anims.json');
  if (await exists(animsMetaPath)) {
    const meta = JSON.parse(await readFile(animsMetaPath, 'utf8')) as Record<string, AnimMeta>;
    for (const [animKey, m] of Object.entries(meta)) {
      const dir = path.join(ANIM_DIR, animKey);
      if (!(await exists(dir))) continue;
      const files = (await readdir(dir)).filter((f) => f.endsWith('.png')).sort();
      const frameKeys: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const buf = await readFile(path.join(dir, files[i]));
        const md = await sharp(buf).metadata();
        const key = `${animKey}_${i}`;
        items.push({ key, buf, w: md.width!, h: md.height!, ax: m.anchor.x, ay: m.anchor.y });
        frameKeys.push(key);
      }
      if (frameKeys.length > 0) anims[animKey] = { frames: frameKeys, fps: m.fps, mode: m.mode };
    }
  }

  if (items.length === 0) {
    console.log('pack: nothing to pack yet');
    return;
  }
  items.sort((a, b) => b.h - a.h);

  const ATLAS_W = 2048; // anim frames add up; use a wider sheet
  const PAD = 2;
  let x = PAD;
  let y = PAD;
  let shelfH = 0;
  const frames: Record<string, Frame> = {};
  const composites: OverlayOptions[] = [];
  for (const it of items) {
    if (x + it.w + PAD > ATLAS_W) {
      x = PAD;
      y += shelfH + PAD;
      shelfH = 0;
    }
    frames[it.key] = { x, y, w: it.w, h: it.h, ax: it.ax, ay: it.ay };
    composites.push({ input: it.buf, left: x, top: y });
    x += it.w + PAD;
    shelfH = Math.max(shelfH, it.h);
  }
  const atlasH = y + shelfH + PAD;

  await mkdir(PUBLIC, { recursive: true });
  await sharp({
    create: { width: ATLAS_W, height: atlasH, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite(composites)
    .png()
    .toFile(path.join(PUBLIC, 'atlas.png'));
  await writeFile(path.join(PUBLIC, 'atlas.json'), JSON.stringify({ frames, anims }, null, 2));
  console.log(
    `pack: ${items.length} frames (${Object.keys(anims).length} anims) -> public/atlas.png (${ATLAS_W}x${atlasH})`,
  );
}
