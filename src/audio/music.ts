/**
 * Generative ambient music — zero assets, all Web Audio, routed through the sfx
 * master chain (so it inherits the reverb, the volume slider and the mute button).
 *
 * Each ACT has its own chord progression; INTENSITY climbs every couple of
 * waves so the score keeps pace with the run:
 *   0 (build)      — slow chord pad only
 *   1 (waves 1-2)  — + pulsing bass root
 *   2 (waves 3-4)  — + quicker pulse, alternating root/fifth
 *   3 (waves 5+)   — + sparkle pings on the chord tones
 *   4 (boss)       — + low drone, darker filter, driving pulse
 */
import { sfx } from './sfx';

// per-act progressions, voiced low-mid so they stay out of the SFX's way
const PROGRESSIONS: number[][][] = [
  // act 1 — A minor, gentle: i – VI – III – VII (Am, F, C, G)
  [
    [220.0, 261.63, 329.63], // Am
    [174.61, 220.0, 261.63], // F
    [196.0, 261.63, 329.63], // C (voiced with E)
    [196.0, 246.94, 293.66], // G
  ],
  // act 2 — D minor, uneasy: i – iv – VI – V (Dm, Gm, Bb, A)
  [
    [146.83, 174.61, 220.0], // Dm
    [196.0, 233.08, 293.66], // Gm
    [174.61, 233.08, 293.66], // Bb (voiced F Bb D)
    [164.81, 220.0, 277.18], // A (voiced E A C#)
  ],
  // act 3 — E phrygian, ominous: the half-step above the root looms
  [
    [164.81, 196.0, 246.94], // Em
    [174.61, 220.0, 261.63], // F
    [164.81, 196.0, 246.94], // Em
    [146.83, 174.61, 220.0], // Dm
  ],
];
const CHORD_LENS = [7.5, 7.0, 6.0]; // each act breathes a little faster
// gain staging: voices (0.12 peak x ~6) x MUSIC_LEVEL x master (~0.5) needs to land
// around -14dB under the sfx — the original 0.14/0.055 combo was mathematically inaudible
const MUSIC_LEVEL = 0.5;
const VOICE_LEVEL = 0.12;
const BASS_LEVEL = 0.22;
const DRONE_LEVEL = 0.13;
const SPARKLE_LEVEL = 0.07;

let started = false;
let enabled = true;
let intensity = 0;
let act = 0;
let chordIdx = 0;
let pulseIdx = 0;
let nextChordAt = 0;
let nextPulseAt = 0;
let musicGain: GainNode | null = null;
let droneOsc: OscillatorNode | null = null;
let droneGain: GainNode | null = null;
let timer: ReturnType<typeof setInterval> | null = null;

export const music = {
  /** Call once after sfx.init() (first user gesture). Safe to call repeatedly. */
  start(): void {
    if (started) return;
    const bus = sfx.bus();
    if (!bus) return;
    started = true;
    musicGain = bus.ctx.createGain();
    musicGain.gain.value = enabled ? MUSIC_LEVEL : 0;
    musicGain.connect(bus.target);
    nextChordAt = bus.ctx.currentTime + 0.1;
    nextPulseAt = nextChordAt;
    // 2.6s lookahead survives background-tab timer throttling (1s tiers)
    timer = setInterval(() => schedule(bus.ctx), 500);
    schedule(bus.ctx);
    // catch up immediately when the tab comes back — no silent gap
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && musicGain) {
        const b = sfx.bus();
        if (b) {
          nextChordAt = Math.max(nextChordAt, b.ctx.currentTime + 0.05);
          nextPulseAt = Math.max(nextPulseAt, b.ctx.currentTime + 0.05);
          schedule(b.ctx);
        }
      }
    });
  },

  setEnabled(on: boolean): void {
    enabled = on;
    if (on) music.start(); // defensive: the toggle can boot music even if the unlock missed
    const bus = sfx.bus();
    if (musicGain && bus) {
      musicGain.gain.cancelScheduledValues(bus.ctx.currentTime);
      musicGain.gain.linearRampToValueAtTime(on ? MUSIC_LEVEL : 0, bus.ctx.currentTime + 0.8);
    }
  },

  isEnabled(): boolean {
    return enabled;
  },

  /** 0 = build, 1-3 = wave heat (climbs every couple of waves), 4 = boss. */
  setIntensity(level: number): void {
    if (level === intensity) return;
    intensity = level;
    updateDrone();
  },

  /** Each act plays its own progression (clamped to the last one defined). */
  setAct(a: number): void {
    act = Math.max(0, Math.min(PROGRESSIONS.length - 1, a));
  },

  stop(): void {
    if (timer) clearInterval(timer);
    timer = null;
    started = false;
  },
};

function schedule(ctx: AudioContext): void {
  if (!musicGain) return;
  const horizon = ctx.currentTime + 2.6;
  const chords = PROGRESSIONS[act];
  const chordLen = CHORD_LENS[act];

  while (nextChordAt < horizon) {
    scheduleChord(ctx, chords[chordIdx % chords.length], nextChordAt, chordLen);
    chordIdx++;
    nextChordAt += chordLen;
  }

  // bass pulse only while a wave is running; it quickens as the act heats up
  const pulseGap = intensity >= 4 ? 0.375 : intensity >= 3 ? 0.4 : intensity >= 2 ? 0.45 : 0.5;
  while (nextPulseAt < horizon) {
    if (intensity >= 1) {
      const chord = chords[(chordIdx - 1 + chords.length) % chords.length];
      // heat 2+: the bass walks root/fifth instead of hammering the root
      const root = (intensity >= 2 && pulseIdx % 2 === 1 ? chord[0] * 1.5 : chord[0]) / 2;
      schedulePulse(ctx, root, nextPulseAt);
      // heat 3+: sparkle pings on the chord tones — the "we're winning" layer
      if (intensity >= 3 && pulseIdx % 4 === 2) {
        scheduleSparkle(ctx, chord[(pulseIdx >> 2) % chord.length] * 2, nextPulseAt);
      }
      pulseIdx++;
    }
    nextPulseAt += pulseGap;
  }
}

function scheduleChord(ctx: AudioContext, freqs: number[], t: number, chordLen: number): void {
  const dark = intensity >= 4;
  for (const f of freqs) {
    for (const detune of [-3, 3]) {
      const o = ctx.createOscillator();
      o.type = 'triangle';
      o.frequency.value = f;
      o.detune.value = detune;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(VOICE_LEVEL, t + 2.2);
      g.gain.setValueAtTime(VOICE_LEVEL, t + chordLen - 2.0);
      g.gain.linearRampToValueAtTime(0.0001, t + chordLen + 0.6);
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.setValueAtTime(dark ? 500 : 750, t);
      lp.frequency.linearRampToValueAtTime(dark ? 380 : 950, t + chordLen);
      o.connect(lp);
      lp.connect(g);
      g.connect(musicGain!);
      o.start(t);
      o.stop(t + chordLen + 0.8);
    }
  }
}

/** A brief high chime on a chord tone — hope, in 0.5 seconds or less. */
function scheduleSparkle(ctx: AudioContext, freq: number, t: number): void {
  const o = ctx.createOscillator();
  o.type = 'triangle';
  o.frequency.value = freq;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(SPARKLE_LEVEL, t + 0.03);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
  o.connect(g);
  g.connect(musicGain!);
  o.start(t);
  o.stop(t + 0.55);
}

function schedulePulse(ctx: AudioContext, root: number, t: number): void {
  const o = ctx.createOscillator();
  o.type = 'sine';
  o.frequency.value = root;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(BASS_LEVEL, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
  o.connect(g);
  g.connect(musicGain!);
  o.start(t);
  o.stop(t + 0.35);
}

function updateDrone(): void {
  const bus = sfx.bus();
  if (!bus || !musicGain) return;
  const { ctx } = bus;
  if (intensity >= 4 && !droneOsc) {
    droneOsc = ctx.createOscillator();
    droneOsc.type = 'sawtooth';
    droneOsc.frequency.value = 55;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 160;
    droneGain = ctx.createGain();
    droneGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    droneGain.gain.linearRampToValueAtTime(DRONE_LEVEL, ctx.currentTime + 2.5);
    droneOsc.connect(lp);
    lp.connect(droneGain);
    droneGain.connect(musicGain);
    droneOsc.start();
  } else if (intensity < 4 && droneOsc && droneGain) {
    const o = droneOsc;
    droneGain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.5);
    setTimeout(() => o.stop(), 1800);
    droneOsc = null;
    droneGain = null;
  }
}
