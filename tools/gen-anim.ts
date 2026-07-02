/**
 * Animation pipeline (image-to-video on the local GPU):
 *   node tools/gen-anim.ts [--only enemy_grunt] [--force] [--pack-only]
 *
 * For each unit: static sprite -> flatten on white 704x704 -> upload to ComfyUI ->
 * Wan 2.2 (5B) image-to-video "walks/idles in place, static camera" -> frame PNGs ->
 * flood-fill bg removal -> centroid alignment (drift stabilization) -> union-bbox crop ->
 * resize -> art/anim/<key>/NNN.png + anims.json -> repack atlas.
 *
 * Requires a running ComfyUI (default http://127.0.0.1:8188) with:
 *   diffusion_models/wan2.2_ti2v_5B_fp16.safetensors
 *   text_encoders/umt5_xxl_fp8_e4m3fn_scaled.safetensors
 *   vae/wan2.2_vae.safetensors
 */
import { mkdir, readFile, writeFile, access, rm } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';
import { packAtlas, type AnimMeta } from './pack.ts';
import { MANIFEST } from '../art/manifest.ts';

const ROOT = path.join(import.meta.dirname, '..');
const PROCESSED = path.join(ROOT, 'art', 'processed');
const ANIM_DIR = path.join(ROOT, 'art', 'anim');
const COMFY = process.env.COMFY_URL ?? 'http://127.0.0.1:8188';

const GEN_SIZE = 704; // Wan 2.2 5B sweet spot that fits 12GB VRAM
const CLIP_FRAMES = 49; // 4n+1 (~2s @ 24fps -> room for full strides)
const KEEP_FRAMES = 24; // frames for non-looping (pingpong) anims
const LOOP_MIN = 14; // loop-cut search: min/max loop length in frames
const LOOP_MAX = 26;
const STEPS = 24;
const CFG = 5.0;

interface AnimSpec {
  unit: string; // static sprite key (must exist in art/processed)
  anim: string; // suffix -> atlas anim key `${unit}_${anim}`
  prompt: string;
  fps: number;
  mode: 'loop' | 'pingpong';
  frameSize: number;
}

const CAMERA_LOCK =
  ' The camera is completely static and locked. The character stays centered in frame and remains ' +
  'in place, not moving across the frame. Plain solid white background at all times. ' +
  'Consistent 2D cartoon game art style, no style change.';

const NEGATIVE =
  'camera movement, camera pan, camera zoom, dolly, background change, scenery, landscape, ' +
  'morphing, deformation, extra limbs, character walking away, character leaving frame, ' +
  'text, watermark, logo, realistic photo, 3d render, style change, color shift';

const WALK = (desc: string) =>
  `The ${desc} marches in place with big exaggerated bouncy steps, lifting its knees high, ` +
  `arms swinging widely, whole body bobbing up and down rhythmically with each step, ` +
  `energetic cartoon video game walk cycle animation, constant motion.` + CAMERA_LOCK;

const IDLE = (desc: string) =>
  `The ${desc} sways rhythmically side to side, cape and robe flowing in the wind, hat tilting ` +
  `slightly, the magical orb on the staff pulsing with bright light, lively cartoon idle animation, ` +
  `constant gentle motion.` + CAMERA_LOCK;

const ANIMS: AnimSpec[] = [
  { unit: 'enemy_grunt', anim: 'walk', prompt: WALK('small round green goblin creature'), fps: 20, mode: 'loop', frameSize: 160 },
  { unit: 'enemy_runner', anim: 'walk', prompt: WALK('lean sandy-yellow jackal creature'), fps: 24, mode: 'loop', frameSize: 160 },
  { unit: 'enemy_knight', anim: 'walk', prompt: WALK('small knight in heavy steel plate armor'), fps: 18, mode: 'loop', frameSize: 160 },
  { unit: 'enemy_shade', anim: 'walk', prompt: WALK('smoldering ember spirit creature with flame tufts'), fps: 20, mode: 'loop', frameSize: 160 },
  { unit: 'enemy_golem', anim: 'walk', prompt: WALK('hulking obsidian crystal golem with glowing purple runes'), fps: 14, mode: 'loop', frameSize: 200 },
  { unit: 'enemy_golemling', anim: 'walk', prompt: WALK('small purple crystal golem creature'), fps: 18, mode: 'loop', frameSize: 160 },
  { unit: 'wizard_fire', anim: 'idle', prompt: IDLE('small fire mage wizard in orange robes with pointed hat'), fps: 12, mode: 'pingpong', frameSize: 176 },
  { unit: 'wizard_ice', anim: 'idle', prompt: IDLE('small frost mage wizard in icy blue robes with pointed hat'), fps: 12, mode: 'pingpong', frameSize: 176 },
  { unit: 'wizard_lightning', anim: 'idle', prompt: IDLE('small storm mage wizard in purple robes with pointed hat'), fps: 12, mode: 'pingpong', frameSize: 176 },
];

const args = new Set(process.argv.slice(2).filter((a) => a.startsWith('--')));
const onlyArg = process.argv.find((a, i) => process.argv[i - 1] === '--only');
const ONLY = onlyArg ? new Set(onlyArg.split(',')) : null;
const FORCE = args.has('--force');
const PACK_ONLY = args.has('--pack-only');

async function exists(p: string): Promise<boolean> {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------- ComfyUI API

async function uploadImage(name: string, buf: Buffer): Promise<string> {
  const form = new FormData();
  form.append('image', new Blob([new Uint8Array(buf)], { type: 'image/png' }), name);
  form.append('overwrite', 'true');
  const res = await fetch(`${COMFY}/upload/image`, { method: 'POST', body: form });
  if (!res.ok) throw new Error(`upload ${res.status}: ${await res.text()}`);
  const json = (await res.json()) as { name: string };
  return json.name;
}

function buildWorkflow(imageName: string, positive: string, seed: number): Record<string, unknown> {
  return {
    '37': { class_type: 'UNETLoader', inputs: { unet_name: 'wan2.2_ti2v_5B_fp16.safetensors', weight_dtype: 'default' } },
    '38': { class_type: 'CLIPLoader', inputs: { clip_name: 'umt5_xxl_fp8_e4m3fn_scaled.safetensors', type: 'wan', device: 'default' } },
    '39': { class_type: 'VAELoader', inputs: { vae_name: 'wan2.2_vae.safetensors' } },
    '48': { class_type: 'ModelSamplingSD3', inputs: { model: ['37', 0], shift: 8.0 } },
    '6': { class_type: 'CLIPTextEncode', inputs: { text: positive, clip: ['38', 0] } },
    '7': { class_type: 'CLIPTextEncode', inputs: { text: NEGATIVE, clip: ['38', 0] } },
    '52': { class_type: 'LoadImage', inputs: { image: imageName } },
    '55': {
      class_type: 'Wan22ImageToVideoLatent',
      inputs: { vae: ['39', 0], width: GEN_SIZE, height: GEN_SIZE, length: CLIP_FRAMES, batch_size: 1, start_image: ['52', 0] },
    },
    '3': {
      class_type: 'KSampler',
      inputs: {
        model: ['48', 0], positive: ['6', 0], negative: ['7', 0], latent_image: ['55', 0],
        seed, steps: STEPS, cfg: CFG, sampler_name: 'uni_pc', scheduler: 'simple', denoise: 1.0,
      },
    },
    '8': { class_type: 'VAEDecode', inputs: { samples: ['3', 0], vae: ['39', 0] } },
    '50': { class_type: 'SaveImage', inputs: { images: ['8', 0], filename_prefix: 'wizardtd/frames' } },
  };
}

interface OutputImage {
  filename: string;
  subfolder: string;
  type: string;
}

async function runWorkflow(wf: Record<string, unknown>, timeoutMin = 30): Promise<OutputImage[]> {
  const res = await fetch(`${COMFY}/prompt`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ prompt: wf, client_id: 'wizard-td-gen-anim' }),
  });
  if (!res.ok) throw new Error(`queue ${res.status}: ${await res.text()}`);
  const { prompt_id } = (await res.json()) as { prompt_id: string };

  const deadline = Date.now() + timeoutMin * 60_000;
  for (;;) {
    if (Date.now() > deadline) throw new Error('workflow timed out');
    await new Promise((r) => setTimeout(r, 3000));
    const hres = await fetch(`${COMFY}/history/${prompt_id}`);
    if (!hres.ok) continue;
    const hist = (await hres.json()) as Record<string, { status?: { completed?: boolean; status_str?: string }; outputs?: Record<string, { images?: OutputImage[] }> }>;
    const entry = hist[prompt_id];
    if (!entry) continue;
    if (entry.status?.status_str === 'error') throw new Error('workflow errored (see ComfyUI log)');
    if (entry.status?.completed) {
      const images: OutputImage[] = [];
      for (const out of Object.values(entry.outputs ?? {})) {
        if (out.images) images.push(...out.images.filter((i) => i.type === 'output'));
      }
      if (images.length === 0) throw new Error('workflow completed but produced no images');
      return images;
    }
  }
}

async function downloadOutput(img: OutputImage): Promise<Buffer> {
  const q = new URLSearchParams({ filename: img.filename, subfolder: img.subfolder, type: img.type });
  const res = await fetch(`${COMFY}/view?${q}`);
  if (!res.ok) throw new Error(`view ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

// ---------------------------------------------------------------- frame processing

/** Flood-fill white removal (border-connected), same approach as gen-sprites. */
async function removeWhiteBackgroundRaw(buf: Buffer): Promise<{ data: Buffer; w: number; h: number }> {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;
  const TOL = 225; // video compression softens whites — slightly looser than stills
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
    data[pi * 4 + 3] = 0;
    const x = pi % w;
    const y = (pi / w) | 0;
    if (x > 0) push(x - 1, y);
    if (x < w - 1) push(x + 1, y);
    if (y > 0) push(x, y - 1);
    if (y < h - 1) push(x, y + 1);
  }
  return { data, w, h };
}

function centroid(data: Buffer, w: number, h: number): { cx: number; cy: number } {
  let sx = 0;
  let sy = 0;
  let sa = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const a = data[(y * w + x) * 4 + 3];
      if (a > 32) {
        sx += x * a;
        sy += y * a;
        sa += a;
      }
    }
  }
  return sa > 0 ? { cx: sx / sa, cy: sy / sa } : { cx: w / 2, cy: h / 2 };
}

/** Find the loop cut [start, end) minimizing visual distance between frame[start] and frame[end]. */
async function bestLoopRange(
  canvases: Buffer[],
  bw: number,
  bh: number,
): Promise<{ start: number; end: number }> {
  const T = 24; // thumbnail edge
  const thumbs: Buffer[] = [];
  for (const c of canvases) {
    thumbs.push(
      await sharp(c, { raw: { width: bw, height: bh, channels: 4 } })
        .resize(T, T, { fit: 'fill' })
        .raw()
        .toBuffer(),
    );
  }
  const dist = (a: Buffer, b: Buffer) => {
    let d = 0;
    for (let i = 0; i < a.length; i++) {
      const diff = a[i] - b[i];
      d += diff * diff;
    }
    return d;
  };

  let best = { start: 0, end: Math.min(canvases.length, LOOP_MAX), d: Infinity };
  const maxStart = Math.max(0, canvases.length - 1 - LOOP_MIN);
  for (let start = 0; start <= Math.min(maxStart, canvases.length - LOOP_MIN - 1); start++) {
    const endMax = Math.min(canvases.length - 1, start + LOOP_MAX);
    for (let end = start + LOOP_MIN; end <= endMax; end++) {
      const d = dist(thumbs[start], thumbs[end]);
      if (d < best.d) best = { start, end, d };
    }
  }
  return { start: best.start, end: best.end };
}

/** Least-squares linear fit; returns value of the trend line at each index. */
function linearTrend(values: number[]): number[] {
  const n = values.length;
  const meanX = (n - 1) / 2;
  const meanY = values.reduce((a, b) => a + b, 0) / n;
  let num = 0;
  let den = 0;
  for (let i = 0; i < n; i++) {
    num += (i - meanX) * (values[i] - meanY);
    den += (i - meanX) ** 2;
  }
  const slope = den > 0 ? num / den : 0;
  return values.map((_, i) => meanY + slope * (i - meanX));
}

/**
 * bg-remove all frames, remove centroid DRIFT (linear trend only — the walk bounce
 * and side-sway oscillations are the animation, so they are preserved), crop to a
 * shared bbox, crossfade the loop seam, resize.
 */
async function processFrames(bufs: Buffer[], spec: AnimSpec): Promise<Buffer[]> {
  const raws = [];
  for (const b of bufs) raws.push(await removeWhiteBackgroundRaw(b));

  const cents = raws.map((r) => centroid(r.data, r.w, r.h));
  const trendX = linearTrend(cents.map((c) => c.cx));
  const trendY = linearTrend(cents.map((c) => c.cy));
  // shift only by how far the trend line has drifted from its start
  const shifts = raws.map((_, i) => ({
    dx: Math.round(trendX[i] - trendX[0]),
    dy: Math.round(trendY[i] - trendY[0]),
  }));

  // union bbox in frame-0 space (after alignment), padded
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  raws.forEach((r, i) => {
    for (let y = 0; y < r.h; y++) {
      for (let x = 0; x < r.w; x++) {
        if (r.data[(y * r.w + x) * 4 + 3] > 32) {
          const ax = x - shifts[i].dx;
          const ay = y - shifts[i].dy;
          if (ax < minX) minX = ax;
          if (ax > maxX) maxX = ax;
          if (ay < minY) minY = ay;
          if (ay > maxY) maxY = ay;
        }
      }
    }
  });
  const PAD_BOX = 6;
  minX -= PAD_BOX; minY -= PAD_BOX; maxX += PAD_BOX; maxY += PAD_BOX;
  const bw = maxX - minX + 1;
  const bh = maxY - minY + 1;

  // crop every frame into an identical canvas
  const canvases: Buffer[] = [];
  for (let i = 0; i < raws.length; i++) {
    const r = raws[i];
    const sx = minX + shifts[i].dx;
    const sy = minY + shifts[i].dy;
    const canvas = Buffer.alloc(bw * bh * 4);
    for (let y = 0; y < bh; y++) {
      const srcY = sy + y;
      if (srcY < 0 || srcY >= r.h) continue;
      for (let x = 0; x < bw; x++) {
        const srcX = sx + x;
        if (srcX < 0 || srcX >= r.w) continue;
        const si = (srcY * r.w + srcX) * 4;
        const di = (y * bw + x) * 4;
        canvas[di] = r.data[si];
        canvas[di + 1] = r.data[si + 1];
        canvas[di + 2] = r.data[si + 2];
        canvas[di + 3] = r.data[si + 3];
      }
    }
    canvases.push(canvas);
  }

  // seamless loop: search for the most similar frame pair (start, start+len) —
  // a periodic gait repeats, so cutting the loop at the best match avoids both
  // pops and crossfade ghosting.
  let finalFrames: Buffer[];
  if (spec.mode === 'loop' && canvases.length > LOOP_MIN + 2) {
    const { start, end } = await bestLoopRange(canvases, bw, bh);
    console.log(`  loop cut: frames ${start}..${end - 1} (${end - start} frames)`);
    finalFrames = canvases.slice(start, end);
  } else {
    // pingpong plays A..Z..A — evenly thin to KEEP_FRAMES
    const step = Math.max(1, Math.floor(canvases.length / KEEP_FRAMES));
    finalFrames = canvases.filter((_, i) => i % step === 0).slice(0, KEEP_FRAMES);
  }

  const out: Buffer[] = [];
  for (const canvas of finalFrames) {
    const png = await sharp(canvas, { raw: { width: bw, height: bh, channels: 4 } })
      .resize(spec.frameSize, spec.frameSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    out.push(png);
  }
  return out;
}

// ---------------------------------------------------------------- main

async function generateAnim(spec: AnimSpec): Promise<void> {
  const animKey = `${spec.unit}_${spec.anim}`;
  const outDir = path.join(ANIM_DIR, animKey);
  if (!FORCE && (await exists(outDir))) {
    console.log(`skip ${animKey} (exists; --force to regenerate)`);
    return;
  }

  const spritePath = path.join(PROCESSED, `${spec.unit}.png`);
  if (!(await exists(spritePath))) throw new Error(`missing static sprite ${spritePath} — run gen-art first`);

  // flatten the transparent sprite onto white, with margin for limb movement
  const margin = Math.round(GEN_SIZE * 0.14);
  const inner = GEN_SIZE - margin * 2;
  const flat = await sharp(spritePath)
    .resize(inner, inner, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .extend({ top: margin, bottom: margin, left: margin, right: margin, background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .png()
    .toBuffer();

  console.log(`[${animKey}] uploading start frame...`);
  const uploaded = await uploadImage(`wizardtd_${animKey}.png`, flat);

  const seedEntry = MANIFEST.find((m) => m.key === spec.unit);
  console.log(`[${animKey}] generating ${CLIP_FRAMES}-frame clip (this takes a few minutes)...`);
  const outputs = await runWorkflow(buildWorkflow(uploaded, spec.prompt, (seedEntry?.seed ?? 1) * 7 + 13));
  console.log(`[${animKey}] got ${outputs.length} frames, downloading + processing...`);

  // loop mode: fetch ALL frames so the loop-cut search has full freedom;
  // pingpong: an even KEEP_FRAMES sample is enough
  const bufs: Buffer[] = [];
  if (spec.mode === 'loop') {
    for (const o of outputs) bufs.push(await downloadOutput(o));
  } else {
    const picks: number[] = [];
    for (let i = 0; i < KEEP_FRAMES; i++) picks.push(Math.round((i * (outputs.length - 1)) / (KEEP_FRAMES - 1)));
    for (const idx of picks) bufs.push(await downloadOutput(outputs[idx]));
  }

  const frames = await processFrames(bufs, spec);

  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });
  for (let i = 0; i < frames.length; i++) {
    await writeFile(path.join(outDir, `${String(i).padStart(3, '0')}.png`), frames[i]);
  }

  // update anims.json (anchor mirrors the unit's static anchor)
  const metaPath = path.join(ANIM_DIR, 'anims.json');
  const meta: Record<string, AnimMeta> = (await exists(metaPath))
    ? JSON.parse(await readFile(metaPath, 'utf8'))
    : {};
  meta[animKey] = {
    fps: spec.fps,
    mode: spec.mode,
    anchor: seedEntry?.anchor ?? { x: 0.5, y: 0.6 },
  };
  await writeFile(metaPath, JSON.stringify(meta, null, 2));
  console.log(`[${animKey}] done: ${frames.length} frames`);
}

async function main(): Promise<void> {
  await mkdir(ANIM_DIR, { recursive: true });

  if (!PACK_ONLY) {
    // fail fast if ComfyUI isn't reachable
    try {
      await fetch(`${COMFY}/system_stats`, { signal: AbortSignal.timeout(5000) });
    } catch {
      throw new Error(`ComfyUI not reachable at ${COMFY} — start it first`);
    }
    const specs = ANIMS.filter((s) => !ONLY || ONLY.has(s.unit) || ONLY.has(`${s.unit}_${s.anim}`));
    for (const spec of specs) {
      try {
        await generateAnim(spec);
      } catch (err) {
        console.error(`FAILED ${spec.unit}_${spec.anim}: ${(err as Error).message}`);
      }
    }
  }

  await packAtlas();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
