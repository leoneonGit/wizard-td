import { startLoop } from './engine/loop';
import { pixelToCell, inBounds } from './engine/grid';
import { WIZARDS, SHOP_ORDER } from './data/wizards';
import { advanceAct, createGame, computeStats, ensureNodes, evolveWizard, findWizard, isBuildable, makeWizard, specializeWizard, wizardAt, type GameState } from './game/state';
import { updateWizards, updateProjectiles, updateEnemies, updateClouds } from './game/combat';
import { startWave, updateWave } from './game/waves';
import { canAfford, spend, sellWizard, towerCost } from './game/economy';
import { initDraft, updateDraft } from './ui/draft';
import { initSpecialize, updateSpecialize } from './ui/specialize';
import { initRelics, updateRelics } from './ui/relics';
import { initEvents, updateEvents } from './ui/events';
import { initNodes, updateNodes } from './ui/nodes';
import { initActClear, updateActClear } from './ui/actclear';
import { initRenderer3d, draw3d, pickBoardPoint, rebuildMap, zoomView, panView, resetView, getViewZoom } from './render3d/renderer3d';
import { fx } from './render/effects';
import { sfx } from './audio/sfx';
import { music } from './audio/music';
import { wavesInAct } from './data/waves';
import { initHud, updateHud } from './ui/hud';
import { initShop, updateShop } from './ui/shop';
import { initTowerPanel, updateTowerPanel } from './ui/towerPanel';
import { initScreens, updateScreens } from './ui/screens';
import { listMaps, loadMap } from './game/mapio';
import { loadRunSave, restoreRun, clearRunSave, saveRun } from './game/save';

// map selection via ?map=<id> (built-in or editor-made)
const requestedMap = new URLSearchParams(location.search).get('map');
const activeMap = (requestedMap && loadMap(requestedMap)) || undefined;

// resume a saved run when it matches the requested map (or no map was requested)
const runSave = loadRunSave();
const resumed =
  runSave && (!requestedMap || requestedMap === runSave.mapId) ? restoreRun(runSave) : null;

let state: GameState = resumed ?? createGame(activeMap);

const canvas = document.getElementById('board') as HTMLCanvasElement;

// ---------------------------------------------------------------- input
// mouse -> board px goes through the 3D ground-plane raycast

canvas.addEventListener('mousemove', (e) => {
  const p = pickBoardPoint(e.offsetX, e.offsetY);
  if (p) {
    state.mouseX = p.x;
    state.mouseY = p.y;
    state.mouseOnBoard = true;
  } else {
    state.mouseOnBoard = false;
  }
});
canvas.addEventListener('mouseleave', () => {
  state.mouseOnBoard = false;
});

// touch devices place in two taps: first tap parks the ghost (with range ring)
// on the cell, second tap on the SAME cell (or the ✓ button) confirms
const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
let pendingPlace: { cx: number; cy: number } | null = null;

/** Shared placement path (tap confirm + the ✓ button). */
function tryPlaceAt(cx: number, cy: number, keepPlacing = false): boolean {
  if (!state.placingType) return false;
  const def = WIZARDS[state.placingType];
  const cost = towerCost(state, def.cost);
  if (!isBuildable(state, cx, cy, def) || !canAfford(state, cost)) return false;
  spend(state, cost);
  const w = makeWizard(state, def, cx, cy);
  w.invested = cost;
  state.wizards.push(w);
  fx.burst(w.x, w.y, def.color, 14, 120, 3);
  sfx.place();
  // keep placing if still affordable (BTD-style rapid building) when asked
  if (!keepPlacing || !canAfford(state, towerCost(state, def.cost))) state.placingType = null;
  state.selectedWizardId = w.id;
  pendingPlace = null;
  return true;
}

canvas.addEventListener('click', (e) => {
  if (suppressClick) {
    suppressClick = false;
    return; // that was a pan/pinch, not a tap
  }
  const p = pickBoardPoint(e.offsetX, e.offsetY);
  if (!p) {
    // tapped the scenery around the board: dismiss the tower panel
    if (!state.placingType) state.selectedWizardId = null;
    return;
  }
  const { cx, cy } = pixelToCell(p.x, p.y);
  if (!inBounds(cx, cy)) return;

  if (state.placingType) {
    const def = WIZARDS[state.placingType];
    if (coarsePointer) {
      // park/move the ghost on this cell (touch has no hover to preview with)
      state.mouseX = p.x;
      state.mouseY = p.y;
      state.mouseOnBoard = true;
      if (!pendingPlace || pendingPlace.cx !== cx || pendingPlace.cy !== cy) {
        pendingPlace = { cx, cy };
        if (!isBuildable(state, cx, cy, def)) {
          fx.floater(p.x, p.y - 26, "can't build here", '#ff9db5', 12);
        }
        return;
      }
    }
    tryPlaceAt(cx, cy, e.shiftKey);
    return;
  }

  const w = wizardAt(state, cx, cy);
  state.selectedWizardId = w ? w.id : null;
});

// ---- board camera gestures: pinch zooms, drag pans (when zoomed), double-tap toggles ----
const pointers = new Map<number, { x: number; y: number }>();
let pinchDist = 0;
let dragMoved = false;
let suppressClick = false;
let lastTapT = 0;
let lastTapX = 0;
let lastTapY = 0;

canvas.addEventListener('pointerdown', (e) => {
  pointers.set(e.pointerId, { x: e.offsetX, y: e.offsetY });
  dragMoved = false;
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()];
    pinchDist = Math.hypot(a.x - b.x, a.y - b.y);
  }
});
canvas.addEventListener('pointermove', (e) => {
  const prev = pointers.get(e.pointerId);
  if (!prev) return; // plain mouse hover — mousemove handles the ghost
  if (pointers.size === 2) {
    pointers.set(e.pointerId, { x: e.offsetX, y: e.offsetY });
    const [a, b] = [...pointers.values()];
    const d = Math.hypot(a.x - b.x, a.y - b.y);
    if (pinchDist > 0 && d > 0) zoomView(d / pinchDist, (a.x + b.x) / 2, (a.y + b.y) / 2);
    pinchDist = d;
    suppressClick = true;
    return;
  }
  const dx = e.offsetX - prev.x;
  const dy = e.offsetY - prev.y;
  if (Math.abs(dx) + Math.abs(dy) > 6) dragMoved = true;
  if (dragMoved && getViewZoom() > 1.01) {
    panView(dx, dy);
    suppressClick = true;
  }
  pointers.set(e.pointerId, { x: e.offsetX, y: e.offsetY });
});
const endPointer = (e: PointerEvent) => {
  pointers.delete(e.pointerId);
  pinchDist = 0;
};
canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', endPointer);

// double-tap (touch, not while placing — that's the confirm gesture) toggles zoom
canvas.addEventListener('pointerup', (e) => {
  if (e.pointerType !== 'touch' || dragMoved || pointers.size > 0 || state.placingType) return;
  const now = performance.now();
  if (now - lastTapT < 300 && Math.hypot(e.offsetX - lastTapX, e.offsetY - lastTapY) < 30) {
    zoomView(getViewZoom() > 1.5 ? 0.01 : 2.2, e.offsetX, e.offsetY); // tiny factor clamps to 1x
    suppressClick = true;
    lastTapT = 0;
  } else {
    lastTapT = now;
    lastTapX = e.offsetX;
    lastTapY = e.offsetY;
  }
});

// scroll wheel zoom for desktop comfort
canvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  zoomView(e.deltaY < 0 ? 1.15 : 1 / 1.15, e.offsetX, e.offsetY);
}, { passive: false });

// corner buttons: discoverable zoom for everyone
document.getElementById('zoom-in')!.addEventListener('click', () => zoomView(1.4));
document.getElementById('zoom-out')!.addEventListener('click', () => zoomView(1 / 1.4));
document.getElementById('zoom-reset')!.addEventListener('click', () => resetView());

// ✓ / ✕ placement confirm bar (shown while a two-tap placement is parked)
const placeConfirm = document.getElementById('place-confirm')!;
const pcBuild = document.getElementById('pc-build') as HTMLButtonElement;
document.getElementById('pc-cancel')!.addEventListener('click', () => {
  pendingPlace = null; // keep placingType — the grid stays up, pick another cell
});
pcBuild.addEventListener('click', () => {
  if (pendingPlace) tryPlaceAt(pendingPlace.cx, pendingPlace.cy);
});

function updatePlaceConfirm(): void {
  const show = pendingPlace !== null && state.placingType !== null;
  placeConfirm.classList.toggle('hidden', !show);
  if (show && state.placingType) {
    const def = WIZARDS[state.placingType];
    const cost = towerCost(state, def.cost);
    const ok = isBuildable(state, pendingPlace!.cx, pendingPlace!.cy, def) && canAfford(state, cost);
    pcBuild.disabled = !ok;
    pcBuild.textContent = ok ? `✓ Build ${def.name} · ${cost} ◉` : '✕ blocked spot';
  }
}

canvas.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  state.placingType = null;
  state.selectedWizardId = null;
  pendingPlace = null;
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    state.placingType = null;
    state.selectedWizardId = null;
    pendingPlace = null;
  } else if (e.key === ' ') {
    e.preventDefault();
    startWave(state);
  } else if (e.key >= '1' && e.key <= String(SHOP_ORDER.length)) {
    pickShopItem(SHOP_ORDER[Number(e.key) - 1]);
  }
});

// ---------------------------------------------------------------- ui wiring

function pickShopItem(typeId: string): void {
  if (state.phase === 'won' || state.phase === 'lost') return;
  const def = WIZARDS[typeId];
  if (!canAfford(state, def.cost)) return;
  state.placingType = state.placingType === typeId ? null : typeId;
  state.selectedWizardId = null;
  pendingPlace = null; // fresh pick, fresh two-tap cycle
}

initShop(pickShopItem);
initHud(() => startWave(state));
initDraft(() => {
  saveRun(state); // checkpoint after every draft decision
  if (state.autoplay) state.autoplayTimer = 1.2;
});
initSpecialize(() => {
  saveRun(state); // checkpoint after every specialize decision
});
initRelics(() => {
  saveRun(state); // checkpoint after claiming a relic
  if (state.autoplay) state.autoplayTimer = 1.2;
});
initEvents(() => {
  saveRun(state); // checkpoint after every event decision
});
initNodes();
initActClear((s) => {
  if (!advanceAct(s)) return;
  rebuildMap(s); // repaint ground, swap props, apply the act's lighting mood
  fx.clear();
  fx.floater(480, 120, `⚑ ${s.map.name} — Act ${['I', 'II', 'III'][s.act]}`, '#7dff9b', 16);
  saveRun(s);
});

// "New Run" clears the save and starts fresh — campaign runs re-roll their
// act maps from the pools (only an explicit ?map= request pins the map).
// The re-roll can land on a DIFFERENT map, so the 3D scene must be rebuilt —
// otherwise enemies walk the new map's road across the old map's scenery.
document.getElementById('btn-newrun')?.addEventListener('click', () => {
  clearRunSave();
  state = createGame(activeMap);
  rebuildMap(state);
  fx.clear();
  sfx.click();
});
if (resumed) {
  fx.floater(480, 120, `▶ Run resumed — Wave ${resumed.round + 1}`, '#7dff9b', 15);
}
initScreens(() => {
  clearRunSave();
  state = createGame(activeMap);
  rebuildMap(state);
  fx.clear();
});

// map picker
const mapSelect = document.getElementById('map-select') as HTMLSelectElement;
for (const m of listMaps()) {
  const opt = document.createElement('option');
  opt.value = m.id;
  opt.textContent = (m.custom ? '✏️ ' : '') + m.name;
  if (m.id === (state.map.id ?? 'vale')) opt.selected = true;
  mapSelect.appendChild(opt);
}
mapSelect.addEventListener('change', () => {
  location.href = `${location.pathname}?map=${encodeURIComponent(mapSelect.value)}`;
});
initTowerPanel({
  upgrade(w, path) {
    const next = w.def.upgrades[path].tiers[w.tiers[path]];
    if (!next || !spend(state, next.cost)) return;
    w.tiers[path]++;
    w.invested += next.cost;
    w.stats = computeStats(w.def, w.tiers);
    fx.burst(w.x, w.y, '#c9b8ff', 12, 110, 3);
    fx.floater(w.x, w.y - 24, next.name + '!', '#c9b8ff', 12);
    sfx.upgrade();
  },
  sell(w) {
    sellWizard(state, w);
    sfx.sell();
  },
  mode(w, mode) {
    w.mode = mode;
    sfx.click();
  },
  evolve(w) {
    const before = w.def.name;
    if (!evolveWizard(state, w)) return;
    fx.ring(w.x, w.y, '#ffd75e', 60);
    fx.burst(w.x, w.y, '#ffd75e', 24, 180, 4, 0.7);
    fx.floater(w.x, w.y - 34, `${before} → ${w.def.name}!`, '#ffd75e', 15);
    sfx.win();
    saveRun(state);
  },
});

function setSpeed(speed: number): void {
  state.speed = speed;
  document.querySelectorAll<HTMLButtonElement>('.btn-speed').forEach((b) =>
    b.classList.toggle('active', Number(b.dataset.speed) === speed),
  );
}
document.querySelectorAll<HTMLButtonElement>('.btn-speed').forEach((btn) => {
  btn.addEventListener('click', () => setSpeed(Number(btn.dataset.speed)));
});

// ---- audio wiring (context unlocks on first user gesture per autoplay policy) ----
const unlockAudio = () => {
  sfx.init();
  music.start();
};
window.addEventListener('pointerdown', unlockAudio, { once: true });
window.addEventListener('keydown', unlockAudio, { once: true });

const btnMusic = document.getElementById('btn-music') as HTMLButtonElement;
btnMusic.addEventListener('click', () => {
  music.setEnabled(!music.isEnabled());
  btnMusic.textContent = music.isEnabled() ? '🎵' : '🎵̸';
  btnMusic.style.opacity = music.isEnabled() ? '1' : '0.4';
});

const btnMute = document.getElementById('btn-mute') as HTMLButtonElement;
btnMute.addEventListener('click', () => {
  sfx.setMuted(!sfx.isMuted());
  btnMute.textContent = sfx.isMuted() ? '🔇' : '🔊';
});
(document.getElementById('vol-slider') as HTMLInputElement).addEventListener('input', (e) => {
  sfx.setVolume(Number((e.target as HTMLInputElement).value) / 100);
});

(document.getElementById('chk-auto') as HTMLInputElement).addEventListener('change', (e) => {
  state.autoplay = (e.target as HTMLInputElement).checked;
  // if enabled while resting between waves, chain into the next wave immediately
  if (state.autoplay && state.phase === 'build') state.autoplayTimer = 0.8;
});

// ---------------------------------------------------------------- loop

function update(dt: number): void {
  // roll the round's path options in the SIM step (not render) — autoplay must see
  // the fresh "choice owed" state before its timer can ever fire
  if (state.phase === 'build') ensureNodes(state);
  const pathChoiceDue = state.phase === 'build' && !state.nodePicked && state.nextNodes.length > 1;
  const paused =
    state.phase === 'won' || state.phase === 'lost' ||
    state.phase === 'draft' || state.phase === 'relic' ||
    state.phase === 'actClear' || // between acts the world holds its breath
    state.pendingEvent !== null || // an open event vignette freezes time
    pathChoiceDue; // so does the path modal — autoplay must not skip the choice
  if (paused) {
    fx.update(dt);
    return;
  }
  updateWave(state, dt);
  updateClouds(state, dt);
  updateWizards(state, dt);
  updateProjectiles(state, dt);
  updateEnemies(state, dt);
  fx.update(dt);
}

function render(): void {
  // each act has its own score; the heat climbs every couple of waves (boss = 4)
  music.setAct(state.act);
  music.setIntensity(
    state.phase !== 'wave' ? 0
      : state.round === wavesInAct(state.act) - 1 ? 4
        : 1 + Math.min(2, Math.floor(state.round / 2)),
  );
  draw3d(state);
  updatePlaceConfirm();
  updateHud(state);
  updateShop(state);
  updateTowerPanel(state);
  updateDraft(state);
  updateSpecialize(state);
  updateRelics(state);
  updateEvents(state);
  updateNodes(state);
  updateActClear(state);
  updateScreens(state);
}

// boot: load 3D assets (with a visible progress bar), then start the loop
const loadingEl = document.getElementById('loading')!;
const loadingFill = document.getElementById('loading-fill')!;
const loadingText = document.getElementById('loading-text')!;
initRenderer3d(canvas, state, (done, total) => {
  loadingFill.style.width = `${Math.round((done / total) * 100)}%`;
  loadingText.textContent = `Summoning defenders… ${done}/${total}`;
})
  .then(() => {
    loadingEl.remove();
    showGestureHintOnce();
    startLoop(update, render, () => state.speed);
  })
  .catch((err) => {
    console.error('renderer failed to initialize', err);
    loadingText.textContent = `Failed to load game assets: ${err?.message ?? err}. Check your connection and refresh.`;
    (loadingText as HTMLElement).style.color = '#ff9db5';
  });

// one-time touch onboarding: players kept missing that the board zooms/pans.
// The zoom buttons also pulse (body[data-hint]) until the hint is dismissed.
function showGestureHintOnce(): void {
  const HINT_KEY = 'wizardtd.hintSeen';
  const touch = window.matchMedia('(pointer: coarse)').matches;
  if (!touch || localStorage.getItem(HINT_KEY)) return;
  const hint = document.getElementById('gesture-hint')!;
  hint.classList.remove('hidden');
  document.body.dataset.hint = '1';
  document.getElementById('gh-ok')!.addEventListener('click', () => {
    hint.classList.add('hidden');
    delete document.body.dataset.hint;
    localStorage.setItem(HINT_KEY, '1');
    sfx.click();
  }, { once: true });
}

// offline + repeat-visit caching (production only — a SW would fight Vite's dev HMR)
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch(() => {
    /* not fatal — the game just won't work offline */
  });
}

// debug/test handles (read-only inspection + scripted placement for live verification)
Object.defineProperty(window, '__game', { get: () => state });
(window as any).__fx = fx;
(window as any).__computeStats = computeStats;
(window as any).__audio = { sfx, music };
(window as any).__place = (defId: string, cx: number, cy: number) => {
  const def = WIZARDS[defId];
  if (!def || !isBuildable(state, cx, cy, def)) return null;
  const w = makeWizard(state, def, cx, cy);
  state.wizards.push(w);
  return w.id;
};
(window as any).__specialize = (wizardId: number, defId: string) => {
  const w = findWizard(state, wizardId);
  const chosen = w?.specializeOptions?.find((d) => d.id === defId) ?? WIZARDS[defId];
  if (!w || !chosen) return false;
  specializeWizard(state, w, chosen);
  return true;
};
// manual sim stepping for scripted verification (hidden tabs get timer-throttled hard);
// renders once at the end so modal/HUD DOM reflects the new state
(window as any).__step = (seconds: number) => {
  const dt = 1 / 60;
  const steps = Math.min(60 * 600, Math.round(seconds / dt));
  for (let i = 0; i < steps; i++) update(dt);
  render();
  return { phase: state.phase, enemies: state.enemies.length, round: state.round };
};
