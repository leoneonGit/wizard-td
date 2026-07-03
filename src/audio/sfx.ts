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

/** ±pct random detune — keeps repetitive casts from sounding stamped-out. */
function vary(freq: number, pct = 0.04): number {
  return freq * (1 + (Math.random() * 2 - 1) * pct);
}

/** 1.4s exponentially-decaying stereo noise — a free, surprisingly decent room. */
function makeImpulse(c: AudioContext): AudioBuffer {
  const len = Math.floor(c.sampleRate * 1.4);
  const buf = c.createBuffer(2, len, c.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.4);
    }
  }
  return buf;
}

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
      // master chain: gentle lowpass -> compressor -> dry + convolver reverb.
      // Every sound (and the music bus) inherits the same room for free.
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 11000;
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -16;
      comp.ratio.value = 4;
      const verb = ctx.createConvolver();
      verb.buffer = makeImpulse(ctx);
      const wet = ctx.createGain();
      wet.gain.value = 0.18;
      master.connect(lp);
      lp.connect(comp);
      comp.connect(ctx.destination); // dry
      comp.connect(verb);
      verb.connect(wet);
      wet.connect(ctx.destination); // wet
      noiseBuf = makeNoise(ctx);
    } catch {
      ctx = null;
    }
  },

  /** The shared bus other audio modules (music) plug into. */
  bus(): { ctx: AudioContext; target: GainNode } | null {
    return ctx && master ? { ctx, target: master } : null;
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
    noise(c, t, 0.28, env(c, t, 0.5, 0.28), { type: 'bandpass', f0: vary(400), f1: 1600, q: 1.2 });
    sweep(c, 'sawtooth', vary(160), 60, t, 0.25, env(c, t, 0.15, 0.25));
  },

  iceCast(): void {
    const c = gate('ice', 90);
    if (!c) return;
    const t = c.currentTime;
    // FM-ish bell: two detuned triangles high up
    osc(c, 'triangle', vary(1320), t, 0.3, env(c, t, 0.25, 0.3));
    osc(c, 'triangle', vary(1980), t + 0.03, 0.25, env(c, t + 0.03, 0.15, 0.25));
  },

  boltCast(): void {
    const c = gate('bolt', 90);
    if (!c) return;
    const t = c.currentTime;
    noise(c, t, 0.16, env(c, t, 0.55, 0.16), { type: 'highpass', f0: 2000, q: 0.7 });
    sweep(c, 'square', vary(800), 90, t, 0.12, env(c, t, 0.2, 0.12));
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

  gongPulse(): void {
    const c = gate('gong', 200);
    if (!c) return;
    const t = c.currentTime;
    osc(c, 'sine', 55, t, 1.4, env(c, t, 0.3, 1.4)); // sub weight — you FEEL the gong
    // low resonant metallic boom: fundamental + a couple of inharmonic partials
    osc(c, 'sine', 110, t, 1.1, env(c, t, 0.4, 1.1));
    osc(c, 'triangle', 187, t, 0.9, env(c, t, 0.18, 0.9));
    osc(c, 'triangle', 266, t, 0.7, env(c, t, 0.1, 0.7));
  },

  bowTwang(): void {
    const c = gate('bow', 80);
    if (!c) return;
    const t = c.currentTime;
    // plucked string: sharp high transient that drops fast, plus a whoosh of air
    sweep(c, 'triangle', vary(900, 0.07), 320, t, 0.12, env(c, t, 0.35, 0.12));
    noise(c, t + 0.02, 0.14, env(c, t + 0.02, 0.12, 0.14), { type: 'bandpass', f0: 2200, f1: 900, q: 1.5 });
  },

  thud(): void {
    const c = gate('thud', 110);
    if (!c) return;
    const t = c.currentTime;
    // heavy woody impact: low sine punch + knocky filtered noise
    sweep(c, 'sine', vary(140, 0.08), 45, t, 0.22, env(c, t, 0.5, 0.22));
    noise(c, t, 0.1, env(c, t, 0.25, 0.1), { type: 'lowpass', f0: 500, f1: 120 });
  },

  // ---------------- battle punctuation ----------------
  explosion(): void {
    const c = gate('boom', 120);
    if (!c) return;
    const t = c.currentTime;
    // sub punch + wide noise wall + a few late crackles
    sweep(c, 'sine', vary(64), 26, t, 0.5, env(c, t, 0.9, 0.5));
    noise(c, t, 0.45, env(c, t, 0.55, 0.45), { type: 'lowpass', f0: 3000, f1: 300 });
    for (let i = 0; i < 3; i++) {
      const dt = 0.1 + Math.random() * 0.22;
      noise(c, t + dt, 0.06, env(c, t + dt, 0.16, 0.06), { type: 'bandpass', f0: vary(1600, 0.3), q: 2 });
    }
  },

  armorClank(): void {
    const c = gate('clank', 100);
    if (!c) return;
    const t = c.currentTime;
    // hammer on plate: two inharmonic metal partials, dead short
    osc(c, 'triangle', vary(1180, 0.06), t, 0.09, env(c, t, 0.3, 0.09));
    osc(c, 'triangle', vary(1730, 0.06), t, 0.07, env(c, t, 0.18, 0.07));
    noise(c, t, 0.05, env(c, t, 0.2, 0.05), { type: 'highpass', f0: 3500, q: 1 });
  },

  armorBreak(): void {
    const c = ensure();
    if (!c) return;
    const t = c.currentTime;
    // the shell gives: crash + a rain of falling metallic shards
    noise(c, t, 0.5, env(c, t, 0.7, 0.5), { type: 'bandpass', f0: 2400, f1: 500, q: 0.8 });
    sweep(c, 'sine', 90, 35, t, 0.4, env(c, t, 0.6, 0.4));
    for (let i = 0; i < 5; i++) {
      const dt = 0.06 + i * 0.07;
      osc(c, 'triangle', vary(2200 - i * 320, 0.1), t + dt, 0.12, env(c, t + dt, 0.14, 0.12));
    }
  },

  bossRoar(): void {
    const c = gate('roar', 800);
    if (!c) return;
    const t = c.currentTime;
    // detuned saw cluster through a throaty formant sweep + sub weight
    const g = env(c, t, 0.5, 1.2);
    const f = c.createBiquadFilter();
    f.type = 'bandpass';
    f.Q.value = 1.4;
    f.frequency.setValueAtTime(280, t);
    f.frequency.exponentialRampToValueAtTime(900, t + 0.45);
    f.frequency.exponentialRampToValueAtTime(320, t + 1.1);
    for (const base of [55, 82.5, 110.5]) {
      const o = c.createOscillator();
      o.type = 'sawtooth';
      o.frequency.setValueAtTime(vary(base, 0.02), t);
      o.connect(f);
      o.start(t);
      o.stop(t + 1.2);
    }
    f.connect(g);
    sweep(c, 'sine', 60, 38, t, 1.0, env(c, t, 0.4, 1.0));
  },

  actFanfare(): void {
    const c = ensure();
    if (!c) return;
    const t = c.currentTime;
    // a bigger, prouder horn line than waveStart — the act is WON
    const line = [262, 330, 392, 523, 659];
    line.forEach((f0, i) => {
      const dt = i * 0.16;
      osc(c, 'sawtooth', f0, t + dt, 0.34, env(c, t + dt, 0.16, 0.34));
      osc(c, 'triangle', f0 * 2, t + dt, 0.3, env(c, t + dt, 0.08, 0.3));
    });
    osc(c, 'sawtooth', 262, t + 0.85, 0.9, env(c, t + 0.85, 0.14, 0.9));
    osc(c, 'sawtooth', 392, t + 0.85, 0.9, env(c, t + 0.85, 0.12, 0.9));
    osc(c, 'sawtooth', 523, t + 0.85, 0.9, env(c, t + 0.85, 0.12, 0.9));
  },

  // ---------------- the horde ----------------
  healChime(): void {
    const c = gate('heal', 250);
    if (!c) return;
    const t = c.currentTime;
    // soft rising two-note bell — mercy in the middle of a war
    osc(c, 'sine', vary(880, 0.02), t, 0.25, env(c, t, 0.14, 0.25));
    osc(c, 'sine', vary(1320, 0.02), t + 0.09, 0.3, env(c, t + 0.09, 0.1, 0.3));
  },

  drumBeat(): void {
    const c = gate('drum', 850);
    if (!c) return;
    const t = c.currentTime;
    // war drum: two low toms, marching cadence
    sweep(c, 'sine', 120, 55, t, 0.18, env(c, t, 0.45, 0.18));
    sweep(c, 'sine', 110, 50, t + 0.22, 0.18, env(c, t + 0.22, 0.3, 0.18));
    noise(c, t, 0.05, env(c, t, 0.12, 0.05), { type: 'lowpass', f0: 900 });
  },

  phaseShimmer(): void {
    const c = gate('phase', 300);
    if (!c) return;
    const t = c.currentTime;
    // airy shimmer — something slipping between worlds
    noise(c, t, 0.35, env(c, t, 0.16, 0.35), { type: 'bandpass', f0: 3200, f1: 6800, q: 3 });
    osc(c, 'sine', vary(2093, 0.05), t, 0.3, env(c, t, 0.05, 0.3));
  },

  woodCrash(): void {
    const c = gate('wood', 300);
    if (!c) return;
    const t = c.currentTime;
    // snapping planks: knocky mid noise + low body + a couple of clacks
    noise(c, t, 0.3, env(c, t, 0.5, 0.3), { type: 'bandpass', f0: 700, f1: 250, q: 1 });
    sweep(c, 'sine', 110, 45, t, 0.25, env(c, t, 0.4, 0.25));
    for (let i = 0; i < 2; i++) {
      const dt = 0.08 + Math.random() * 0.12;
      noise(c, t + dt, 0.04, env(c, t + dt, 0.2, 0.04), { type: 'bandpass', f0: vary(1400, 0.2), q: 3 });
    }
  },

  hexZap(): void {
    const c = gate('hex', 200);
    if (!c) return;
    const t = c.currentTime;
    // a curse landing: sour descending square + dark noise hiss
    sweep(c, 'square', vary(620, 0.05), 110, t, 0.3, env(c, t, 0.3, 0.3));
    noise(c, t, 0.25, env(c, t, 0.15, 0.25), { type: 'bandpass', f0: 900, f1: 300, q: 2 });
  },

  wail(): void {
    const c = gate('wail', 400);
    if (!c) return;
    const t = c.currentTime;
    // banshee death-cry: two gliding sines a sour interval apart
    sweep(c, 'sine', vary(1180, 0.04), 320, t, 0.9, env(c, t, 0.3, 0.9));
    sweep(c, 'sine', vary(1580, 0.04), 420, t + 0.05, 0.85, env(c, t + 0.05, 0.2, 0.85));
    noise(c, t, 0.7, env(c, t, 0.1, 0.7), { type: 'bandpass', f0: 2400, f1: 900, q: 3 });
  },

  squish(): void {
    const c = gate('squish', 100);
    if (!c) return;
    const t = c.currentTime;
    // wet pop
    noise(c, t, 0.12, env(c, t, 0.35, 0.12), { type: 'lowpass', f0: 900, f1: 250 });
    sweep(c, 'sine', vary(300, 0.15), 90, t, 0.1, env(c, t, 0.25, 0.1));
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
    osc(c, 'square', vary(1046, 0.02), t, 0.06, env(c, t, 0.12, 0.06));
    osc(c, 'square', vary(1568, 0.02), t + 0.06, 0.1, env(c, t + 0.06, 0.12, 0.1));
    osc(c, 'sine', 3136, t + 0.1, 0.12, env(c, t + 0.1, 0.05, 0.12)); // sparkle
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
