/** Fixed-timestep game loop: deterministic simulation, speed multiplier just steps more. */
export const FIXED_DT = 1 / 60;
const MAX_STEPS_PER_FRAME = 300; // generous: lets a throttled/background tab catch up at 3x
const RAF_STARVED_MS = 350; // no rAF for this long -> assume hidden tab
const FALLBACK_TICK_MS = 250;

export function startLoop(
  update: (dt: number) => void,
  render: () => void,
  getSpeed: () => number,
): void {
  let last = performance.now();
  let acc = 0;
  let lastRaf = performance.now();

  function step(now: number, doRender: boolean) {
    const real = Math.min((now - last) / 1000, 0.25); // clamp huge gaps
    last = now;
    acc += real * getSpeed();

    let steps = 0;
    while (acc >= FIXED_DT && steps < MAX_STEPS_PER_FRAME) {
      update(FIXED_DT);
      acc -= FIXED_DT;
      steps++;
    }
    if (steps === MAX_STEPS_PER_FRAME) acc = 0; // drop backlog rather than freeze

    if (doRender) render();
  }

  function frame(now: number) {
    lastRaf = now;
    step(now, true);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  // hidden/throttled tabs stop firing rAF — keep the simulation (and UI state)
  // alive on a low-rate timer
  setInterval(() => {
    const now = performance.now();
    if (now - lastRaf > RAF_STARVED_MS) step(now, true);
  }, FALLBACK_TICK_MS);
}
