/**
 * Synthesized SFX — zero assets, all Web Audio. Every sound is built from
 * oscillators / noise buffers with short envelopes. Call sfx.init() once on the
 * first user gesture (autoplay policy); every play call is safe before init (no-op).
 */

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let noiseBuf: AudioBuffer | null = null;
let muted = false;
let volume = 0.5;

const lastPlayed = new Map<string, number>();

/** Rate-limit spammy sounds (casts at 3x speed with many towers). */
function gate(name: string, minGapMs: number): AudioContext | null {
  if (!ctx) return null;
  const now = performance.now();
  if (now - (lastPlayed.get(name) ?? -Infinity) < minGapMs) return null;
  lastPlayed.set(name, now);
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
}

function ensure(): AudioContext | null {
  if (!ctx) return null;
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
}

function makeNoise(c: AudioContext): AudioBuffer {
  const len = c.sampleRate * 1.5;
  const buf = c.createBuffer(1, len, c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  return buf;
}

/** Envelope helper: gain node with exp decay. */
function env(c: AudioContext, t0: number, peak: number, decay: number): GainNode {
  const g = c.createGain();
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(Math.max(0.0001, peak), t0 + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + decay);
  g.connect(master!);
  return g;
}

function osc(c: AudioContext, type: OscillatorType, freq: number, t0: number, dur: number, g: GainNode): void {
  const o = c.createOscillator();
  o.type = type;
  o.frequency.setValueAtTime(freq, t0);
  o.connect(g);
  o.start(t0);
  o.stop(t0 + dur);
}

function sweep(
  c: AudioContext, type: OscillatorType, f0: number, f1: number, t0: number, dur: number, g: GainNode,
): void {
  const o = c.createOscillator();
  o.type = type;
  o.frequency.setValueAtTime(Math.max(1, f0), t0);
  o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t0 + dur);
  o.connect(g);
  o.start(t0);
  o.stop(t0 + dur);
}

function noise(
  c: AudioContext, t0: number, dur: number, g: GainNode,
  filter?: { type: BiquadFilterType; f0: number; f1?: number; q?: number },
): void {
  const src = c.createBufferSource();
  src.buffer = noiseBuf!;
  src.loop = true;
  if (filter) {
    const f = c.createBiquadFilter();
    f.type = filter.type;
    f.frequency.setValueAtTime(filter.f0, t0);
    if (filter.f1) f.frequency.exponentialRampToValueAtTime(Math.max(1, filter.f1), t0 + dur);
    f.Q.value = filter.q ?? 1;
    src.connect(f);
    f.connect(g);
  } else {
    src.connect(g);
  }
  src.start(t0);
  src.stop(t0 + dur);
}

export const sfx = {
  init(): void {
    if (ctx) {
      void ctx.resume();
      return;
    }
    try {
      ctx = new AudioContext();
      master = ctx.createGain();
      master.gain.value = muted ? 0 : volume;
      master.connect(ctx.destination);
      noiseBuf = makeNoise(ctx);
    } catch {
      ctx = null;
    }
  },

  setVolume(v: number): void {
    volume = v;
    if (master && !muted) master.gain.value = v;
  },

  setMuted(m: boolean): void {
    muted = m;
    if (master) master.gain.value = m ? 0 : volume;
  },

  isMuted(): boolean {
    return muted;
  },

  // ---------------- casts ----------------
  fireCast(): void {
    const c = gate('fire', 90);
    if (!c) return;
    const t = c.currentTime;
    noise(c, t, 0.28, env(c, t, 0.5, 0.28), { type: 'bandpass', f0: 400, f1: 1600, q: 1.2 });
    sweep(c, 'sawtooth', 160, 60, t, 0.25, env(c, t, 0.15, 0.25));
  },

  iceCast(): void {
    const c = gate('ice', 90);
    if (!c) return;
    const t = c.currentTime;
    // FM-ish bell: two detuned triangles high up
    osc(c, 'triangle', 1320, t, 0.3, env(c, t, 0.25, 0.3));
    osc(c, 'triangle', 1980, t + 0.03, 0.25, env(c, t + 0.03, 0.15, 0.25));
  },

  boltCast(): void {
    const c = gate('bolt', 90);
    if (!c) return;
    const t = c.currentTime;
    noise(c, t, 0.16, env(c, t, 0.55, 0.16), { type: 'highpass', f0: 2000, q: 0.7 });
    sweep(c, 'square', 800, 90, t, 0.12, env(c, t, 0.2, 0.12));
  },

  waterPulse(): void {
    const c = ensure();
    if (!c) return;
    const t = c.currentTime;
    sweep(c, 'sine', 90, 220, t, 0.35, env(c, t, 0.45, 0.4));
    noise(c, t + 0.05, 0.3, env(c, t + 0.05, 0.18, 0.3), { type: 'lowpass', f0: 700, f1: 250 });
  },

  windGust(): void {
    const c = ensure();
    if (!c) return;
    const t = c.currentTime;
    noise(c, t, 0.5, env(c, t, 0.4, 0.5), { type: 'bandpass', f0: 300, f1: 1200, q: 0.6 });
  },

  // ---------------- impacts & reactions ----------------
  hit(): void {
    const c = gate('hit', 70);
    if (!c) return;
    const t = c.currentTime;
    sweep(c, 'sine', 220, 70, t, 0.09, env(c, t, 0.3, 0.09));
  },

  shatter(): void {
    const c = gate('shatter', 110);
    if (!c) return;
    const t = c.currentTime;
    noise(c, t, 0.25, env(c, t, 0.5, 0.25), { type: 'highpass', f0: 3000, q: 1.5 });
    osc(c, 'triangle', 2640, t, 0.12, env(c, t, 0.2, 0.12));
  },

  conduct(): void {
    const c = gate('conduct', 110);
    if (!c) return;
    const t = c.currentTime;
    sweep(c, 'square', 1400, 200, t, 0.18, env(c, t, 0.3, 0.18));
    noise(c, t, 0.14, env(c, t, 0.25, 0.14), { type: 'highpass', f0: 2500 });
  },

  evaporate(): void {
    const c = ensure();
    if (!c) return;
    const t = c.currentTime;
    noise(c, t, 0.4, env(c, t, 0.3, 0.4), { type: 'bandpass', f0: 4500, f1: 900, q: 0.8 });
  },

  freeze(): void {
    const c = ensure();
    if (!c) return;
    const t = c.currentTime;
    sweep(c, 'triangle', 1500, 3200, t, 0.2, env(c, t, 0.25, 0.22));
    osc(c, 'triangle', 990, t + 0.05, 0.2, env(c, t + 0.05, 0.12, 0.2));
  },

  // ---------------- economy & flow ----------------
  coin(): void {
    const c = gate('coin', 80);
    if (!c) return;
    const t = c.currentTime;
    osc(c, 'square', 1046, t, 0.06, env(c, t, 0.12, 0.06));
    osc(c, 'square', 1568, t + 0.06, 0.1, env(c, t + 0.06, 0.12, 0.1));
  },

  place(): void {
    const c = ensure();
    if (!c) return;
    const t = c.currentTime;
    sweep(c, 'sine', 300, 500, t, 0.12, env(c, t, 0.3, 0.14));
    osc(c, 'triangle', 750, t + 0.08, 0.12, env(c, t + 0.08, 0.15, 0.12));
  },

  sell(): void {
    const c = ensure();
    if (!c) return;
    const t = c.currentTime;
    sweep(c, 'sine', 500, 280, t, 0.16, env(c, t, 0.25, 0.18));
  },

  upgrade(): void {
    const c = ensure();
    if (!c) return;
    const t = c.currentTime;
    [523, 659, 784].forEach((f, i) => osc(c, 'triangle', f, t + i * 0.06, 0.12, env(c, t + i * 0.06, 0.2, 0.14)));
  },

  leak(): void {
    const c = ensure();
    if (!c) return;
    const t = c.currentTime;
    sweep(c, 'sawtooth', 180, 60, t, 0.3, env(c, t, 0.35, 0.3));
    noise(c, t, 0.2, env(c, t, 0.15, 0.2), { type: 'lowpass', f0: 300 });
  },

  waveStart(): void {
    const c = ensure();
    if (!c) return;
    const t = c.currentTime;
    // little horn: fifth up
    osc(c, 'sawtooth', 262, t, 0.22, env(c, t, 0.18, 0.24));
    osc(c, 'sawtooth', 392, t + 0.18, 0.3, env(c, t + 0.18, 0.2, 0.32));
  },

  win(): void {
    const c = ensure();
    if (!c) return;
    const t = c.currentTime;
    [523, 659, 784, 1046].forEach((f, i) =>
      osc(c, 'triangle', f, t + i * 0.13, 0.3, env(c, t + i * 0.13, 0.25, 0.34)),
    );
  },

  lose(): void {
    const c = ensure();
    if (!c) return;
    const t = c.currentTime;
    [392, 330, 262].forEach((f, i) =>
      osc(c, 'sawtooth', f, t + i * 0.18, 0.32, env(c, t + i * 0.18, 0.2, 0.36)),
    );
  },

  click(): void {
    const c = ensure();
    if (!c) return;
    const t = c.currentTime;
    osc(c, 'square', 660, t, 0.04, env(c, t, 0.08, 0.045));
  },
};
