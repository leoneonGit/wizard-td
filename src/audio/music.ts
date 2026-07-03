/**
 * Generative ambient music — zero assets, all Web Audio, routed through the sfx
 * master chain (so it inherits the reverb, the volume slider and the mute button).
 *
 * Layers by intensity:
 *   0 (build)  — slow chord pad only
 *   1 (wave)   — + pulsing bass root and soft noise hats
 *   2 (boss)   — + low drone, darker filter
 */
import { sfx } from './sfx';

// A-minor: i – VI – III – VII (Am, F, C, G), voiced low-mid so it stays out of the SFX's way
const CHORDS: number[][] = [
  [220.0, 261.63, 329.63], // Am
  [174.61, 220.0, 261.63], // F
  [196.0, 261.63, 329.63], // C (voiced with E)
  [196.0, 246.94, 293.66], // G
];
const CHORD_LEN = 7.5; // seconds per chord
// gain staging: voices (0.12 peak x ~6) x MUSIC_LEVEL x master (~0.5) needs to land
// around -14dB under the sfx — the original 0.14/0.055 combo was mathematically inaudible
const MUSIC_LEVEL = 0.5;
const VOICE_LEVEL = 0.12;
const BASS_LEVEL = 0.22;
const DRONE_LEVEL = 0.13;

let started = false;
let enabled = true;
let intensity = 0;
let chordIdx = 0;
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

  /** 0 = build phase, 1 = wave running, 2 = boss wave. */
  setIntensity(level: number): void {
    if (level === intensity) return;
    intensity = level;
    updateDrone();
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

  while (nextChordAt < horizon) {
    scheduleChord(ctx, CHORDS[chordIdx % CHORDS.length], nextChordAt);
    chordIdx++;
    nextChordAt += CHORD_LEN;
  }

  // bass pulse + hats only while a wave is running
  const pulseGap = intensity >= 2 ? 0.375 : 0.5; // boss pushes the pulse
  while (nextPulseAt < horizon) {
    if (intensity >= 1) {
      const root = CHORDS[(chordIdx - 1 + CHORDS.length) % CHORDS.length][0] / 2;
      schedulePulse(ctx, root, nextPulseAt);
    }
    nextPulseAt += pulseGap;
  }
}

function scheduleChord(ctx: AudioContext, freqs: number[], t: number): void {
  const dark = intensity >= 2;
  for (const f of freqs) {
    for (const detune of [-3, 3]) {
      const o = ctx.createOscillator();
      o.type = 'triangle';
      o.frequency.value = f;
      o.detune.value = detune;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(VOICE_LEVEL, t + 2.2);
      g.gain.setValueAtTime(VOICE_LEVEL, t + CHORD_LEN - 2.0);
      g.gain.linearRampToValueAtTime(0.0001, t + CHORD_LEN + 0.6);
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.setValueAtTime(dark ? 500 : 750, t);
      lp.frequency.linearRampToValueAtTime(dark ? 380 : 950, t + CHORD_LEN);
      o.connect(lp);
      lp.connect(g);
      g.connect(musicGain!);
      o.start(t);
      o.stop(t + CHORD_LEN + 0.8);
    }
  }
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
  if (intensity >= 2 && !droneOsc) {
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
  } else if (intensity < 2 && droneOsc && droneGain) {
    const o = droneOsc;
    droneGain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.5);
    setTimeout(() => o.stop(), 1800);
    droneOsc = null;
    droneGain = null;
  }
}
