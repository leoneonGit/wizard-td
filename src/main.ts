import { startLoop } from './engine/loop';
import { pixelToCell, inBounds } from './engine/grid';
import { WIZARDS, SHOP_ORDER } from './data/wizards';
import { createGame, computeStats, findWizard, isBuildable, makeWizard, wizardAt, type GameState } from './game/state';
import { updateWizards, updateProjectiles, updateEnemies, updateClouds } from './game/combat';
import { startWave, updateWave } from './game/waves';
import { canAfford, spend, sellWizard } from './game/economy';
import { initRenderer3d, draw3d, pickBoardPoint } from './render3d/renderer3d';
import { fx } from './render/effects';
import { sfx } from './audio/sfx';
import { initHud, updateHud } from './ui/hud';
import { initShop, updateShop } from './ui/shop';
import { initTowerPanel, updateTowerPanel } from './ui/towerPanel';
import { initScreens, updateScreens } from './ui/screens';
import { listMaps, loadMap } from './game/mapio';

// map selection via ?map=<id> (built-in or editor-made)
const requestedMap = new URLSearchParams(location.search).get('map');
const activeMap = (requestedMap && loadMap(requestedMap)) || undefined;

let state: GameState = createGame(activeMap);

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

canvas.addEventListener('click', (e) => {
  const p = pickBoardPoint(e.offsetX, e.offsetY);
  if (!p) return;
  const { cx, cy } = pixelToCell(p.x, p.y);
  if (!inBounds(cx, cy)) return;

  if (state.placingType) {
    const def = WIZARDS[state.placingType];
    if (isBuildable(state, cx, cy, def) && canAfford(state, def.cost)) {
      spend(state, def.cost);
      const w = makeWizard(state, def, cx, cy);
      state.wizards.push(w);
      fx.burst(w.x, w.y, def.color, 14, 120, 3);
      sfx.place();
      // keep placing if still affordable (BTD-style rapid building) unless shift not held
      if (!e.shiftKey || !canAfford(state, def.cost)) state.placingType = null;
      state.selectedWizardId = w.id;
    }
    return;
  }

  const w = wizardAt(state, cx, cy);
  state.selectedWizardId = w ? w.id : null;
});

canvas.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  state.placingType = null;
  state.selectedWizardId = null;
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    state.placingType = null;
    state.selectedWizardId = null;
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
}

initShop(pickShopItem);
initHud(() => startWave(state));
initScreens(() => {
  state = createGame(activeMap);
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
});

document.querySelectorAll<HTMLButtonElement>('.btn-speed').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.speed = Number(btn.dataset.speed);
    document.querySelectorAll('.btn-speed').forEach((b) => b.classList.toggle('active', b === btn));
  });
});

// ---- audio wiring (context unlocks on first user gesture per autoplay policy) ----
window.addEventListener('pointerdown', () => sfx.init(), { once: true });
window.addEventListener('keydown', () => sfx.init(), { once: true });

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
  if (state.phase === 'won' || state.phase === 'lost') {
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
  draw3d(state);
  updateHud(state);
  updateShop(state);
  updateTowerPanel(state);
  updateScreens(state);
}

// boot: load 3D assets, then start the loop
initRenderer3d(canvas, state).then(() => {
  startLoop(update, render, () => state.speed);
});

// debug/test handles (read-only inspection)
Object.defineProperty(window, '__game', { get: () => state });
(window as any).__fx = fx;
(window as any).__computeStats = computeStats;
