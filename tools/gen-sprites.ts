/**
 * Sprite generation pipeline (one command):
 *   node tools/gen-sprites.ts [--dry-run] [--pack-only] [--force] [--only key1,key2]
 *
 * generate (image API) -> raw/ -> trim+normalize -> processed/ -> pack -> public/atlas.{png,json}
 *
 * Providers (env IMAGE_PROVIDER, default "openai"):
 *   openai       : gpt-image-1, native transparent background. Needs OPENAI_API_KEY.
 *                  (no seed support — consistency comes from the locked style prompt)
 *   replicate    : FLUX dev + background-removal chain. Needs REPLICATE_API_TOKEN.
 *                  (honors per-asset seeds from the manifest)
 *   pollinations : FREE, keyless (pollinations.ai, FLUX). Honors seeds. Generates on a
 *                  white background; local flood-fill removal makes it transparent.
 *
 * Missing sprites are fine: the game falls back to procedural placeholders per-key.
 */
import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';
import { MANIFEST, ICON_MANIFEST, STYLE_PREFIX, STYLE_SUFFIX, type SpriteEntry } from '../art/manifest.ts';
import { packAtlas } from './pack.ts';

const ROOT = path.join(import.meta.dirname, '..');
const RAW = path.join(ROOT, 'art', 'raw');
const PROCESSED = path.join(ROOT, 'art', 'processed');
const PUBLIC = path.join(ROOT, 'public');

const args = new Set(process.argv.slice(2).filter((a) => a.startsWith('--')));
const onlyArg = process.argv.find((a, i) => process.argv[i - 1] === '--only');
const ONLY = onlyArg ? new Set(onlyArg.split(',')) : null;
const DRY = args.has('--dry-run');
const PACK_ONLY = args.has('--pack-only');
const FORCE = args.has('--force');
const ICONS = args.has('--icons'); // generate UI icons -> public/icons/*.png (no atlas)

function prompt(e: SpriteEntry): string {
  // icon entries carry their full style in the fragment already
  return ICONS ? e.fragment : STYLE_PREFIX + e.fragment + STYLE_SUFFIX;
}

async function exists(p: string): Promise<boolean> {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------- providers

async function generateOpenAI(e: SpriteEntry): Promise<Buffer> {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error('OPENAI_API_KEY not set');
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: 'gpt-image-1',
      prompt: prompt(e),
      size: '1024x1024',
      background: 'transparent',
      output_format: 'png',
      quality: 'high',
    }),
  });
  if (!res.ok) throw new Error(`openai ${res.status}: ${await res.text()}`);
  const json = (await res.json()) as { data: { b64_json: string }[] };
  return Buffer.from(json.data[0].b64_json, 'base64');
}

async function replicateRun(model: string, input: Record<string, unknown>): Promise<string> {
  const token = process.env.REPLICATE_API_TOKEN;
  if (!token) throw new Error('REPLICATE_API_TOKEN not set');
  const res = await fetch(`https://api.replicate.com/v1/models/${model}/predictions`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
      prefer: 'wait=60',
    },
    body: JSON.stringify({ input }),
  });
  if (!res.ok) throw new Error(`replicate(${model}) ${res.status}: ${await res.text()}`);
  const pred = (await res.json()) as { status: string; output: string | string[]; error?: string };
  if (pred.error || pred.status === 'failed') throw new Error(`replicate failed: ${pred.error}`);
  return Array.isArray(pred.output) ? pred.output[0] : pred.output;
}

async function generateReplicate(e: SpriteEntry): Promise<Buffer> {
  const imgUrl = await replicateRun('black-forest-labs/flux-dev', {
    prompt: prompt(e),
    seed: e.seed,
    output_format: 'png',
    aspect_ratio: '1:1',
  });
  const cutUrl = await replicateRun('851-labs/background-removal', { image: imgUrl });
  const res = await fetch(cutUrl);
  if (!res.ok) throw new Error(`download ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function generatePollinations(e: SpriteEntry): Promise<Buffer> {
  const p = prompt(e) + ', isolated on a plain pure white background';
  const url =
    `https://image.pollinations.ai/prompt/${encodeURIComponent(p)}` +
    `?width=1024&height=1024&seed=${e.seed}&model=flux&nologo=true&private=true`;
  const res = await fetch(url, { signal: AbortSignal.timeout(180_000) });
  if (!res.ok) throw new Error(`pollinations ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 10_000) throw new Error('pollinations returned a suspiciously small file');
  return buf;
}

const PROVIDERS: Record<string, (e: SpriteEntry) => Promise<Buffer>> = {
  openai: generateOpenAI,
  replicate: generateReplicate,
  pollinations: generatePollinations,
};

/** Providers whose output needs local background removal (no native transparency). */
const NEEDS_BG_REMOVAL = new Set(['pollinations']);

/**
 * Flood-fill white-background removal: BFS from every border pixel, clearing
 * connected near-white regions. Interior whites (eyes, highlights) survive because
 * they aren't border-connected; cartoon outlines stop the fill cleanly.
 */
async function removeWhiteBackground(buf: Buffer): Promise<Buffer> {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;
  const TOL = 235; // r,g,b all above -> "white enough"
  const nearWhite = (i: number) => data[i] >= TOL && data[i + 1] >= TOL && data[i + 2] >= TOL;

  const seen = new Uint8Array(w * h);
  const stack: number[] = [];
  const push = (x: number, y: number) => {
    const pi = y * w + x;
    if (seen[pi]) return;
    seen[pi] = 1;
    if (nearWhite(pi * 4)) stack.push(pi);
  };
  for (let x = 0; x < w; x++) {
    push(x, 0);
    push(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    push(0, y);
    push(w - 1, y);
  }
  while (stack.length > 0) {
    const pi = stack.pop()!;
    data[pi * 4 + 3] = 0; // transparent
    const x = pi % w;
    const y = (pi / w) | 0;
    if (x > 0) push(x - 1, y);
    if (x < w - 1) push(x + 1, y);
    if (y > 0) push(x, y - 1);
    if (y < h - 1) push(x, y + 1);
  }

  // 1px edge soften: halve alpha of opaque pixels adjacent to cleared ones
  const cleared = (x: number, y: number) => data[(y * w + x) * 4 + 3] === 0;
  const toSoften: number[] = [];
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const i = (y * w + x) * 4;
      if (data[i + 3] === 0) continue;
      if (cleared(x - 1, y) || cleared(x + 1, y) || cleared(x, y - 1) || cleared(x, y + 1)) {
        toSoften.push(i);
      }
    }
  }
  for (const i of toSoften) data[i + 3] = Math.floor(data[i + 3] * 0.5);

  return sharp(data, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();
}

// ---------------------------------------------------------------- process & pack

/** (Optionally strip bg), trim transparent borders, fit into a size x size square, centered. */
async function processRaw(rawPath: string, e: SpriteEntry, stripBg: boolean, outDir: string): Promise<void> {
  let buf: Buffer = await readFile(rawPath);
  if (stripBg) buf = await removeWhiteBackground(buf);
  const trimmed = await sharp(buf).trim().toBuffer();
  await sharp(trimmed)
    .resize(e.size, e.size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(outDir, `${e.key}.png`));
}

// packing lives in tools/pack.ts (shared with gen-anim)

// ---------------------------------------------------------------- main

async function main(): Promise<void> {
  const ICONS_DIR = path.join(ROOT, 'public', 'icons');
  const rawDir = ICONS ? path.join(RAW, 'icons') : RAW;
  const outDir = ICONS ? ICONS_DIR : PROCESSED;
  await mkdir(rawDir, { recursive: true });
  await mkdir(outDir, { recursive: true });

  const provider = process.env.IMAGE_PROVIDER ?? 'openai';
  const generate = PROVIDERS[provider];
  if (!generate) throw new Error(`unknown IMAGE_PROVIDER "${provider}" (openai | replicate | pollinations)`);

  const source = ICONS ? ICON_MANIFEST : MANIFEST;
  const entries = source.filter((e) => !ONLY || ONLY.has(e.key));

  if (DRY) {
    for (const e of entries) console.log(`[${e.key}] seed=${e.seed} size=${e.size}\n  ${prompt(e)}\n`);
    return;
  }

  if (!PACK_ONLY) {
    for (const e of entries) {
      const rawPath = path.join(rawDir, `${e.key}.png`);
      const processedPath = path.join(outDir, `${e.key}.png`);
      if (!FORCE && (await exists(processedPath))) {
        console.log(`skip ${e.key} (exists; use --force to regenerate)`);
        continue;
      }
      try {
        if (FORCE || !(await exists(rawPath))) {
          console.log(`generate ${e.key} via ${provider}...`);
          const buf = await generate(e);
          await writeFile(rawPath, buf);
        }
        await processRaw(rawPath, e, NEEDS_BG_REMOVAL.has(provider), outDir);
        console.log(`processed ${e.key}`);
      } catch (err) {
        console.error(`FAILED ${e.key}: ${(err as Error).message}`);
      }
    }
  }

  if (!ICONS) await packAtlas(); // icons are loose files for the DOM, not atlas frames
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
