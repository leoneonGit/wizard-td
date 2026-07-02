import { startLoop } from './engine/loop';
import { pixelToCell, inBounds } from './engine/grid';
import { WIZARDS, SHOP_ORDER } from './data/wizards';
import { createGame, computeStats, findWizard, isBuildable, makeWizard, specializeWizard, wizardAt, type GameState } from './game/state';
import { updateWizards, updateProjectiles, updateEnemies, updateClouds } from './game/combat';
import { startWave, updateWave } from './game/waves';
import { canAfford, spend, sellWizard, towerCost } from './game/economy';
import { initDraft, updateDraft } from './ui/draft';
import { initSpecialize, updateSpecialize } from './ui/specialize';
import { initRenderer3d, draw3d, pickBoardPoint } from './render3d/renderer3d';
import { fx } from './render/effects';
import { sfx } from './audio/sfx';
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

canvas.addEventListener('click', (e) => {
  const p = pickBoardPoint(e.offsetX, e.offsetY);
  if (!p) return;
  const { cx, cy } = pixelToCell(p.x, p.y);
  if (!inBounds(cx, cy)) return;

  if (state.placingType) {
    const def = WIZARDS[state.placingType];
    const cost = towerCost(state, def.cost);
    if (isBuildable(state, cx, cy, def) && canAfford(state, cost)) {
      spend(state, cost);
      const w = makeWizard(state, def, cx, cy);
      w.invested = cost;
      state.wizards.push(w);
      fx.burst(w.x, w.y, def.color, 14, 120, 3);
      sfx.place();
      // keep placing if still affordable (BTD-style rapid building) unless shift not held
      if (!e.shiftKey || !canAfford(state, towerCost(state, def.cost))) state.placingType = null;
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
initDraft(() => {
  saveRun(state); // checkpoint after every draft decision
  if (state.autoplay) state.autoplayTimer = 1.2;
});
initSpecialize(() => {
  saveRun(state); // checkpoint after every specialize decision
});

// "New Run" clears the save and starts fresh on the current map
document.getElementById('btn-newrun')?.addEventListener('click', () => {
  clearRunSave();
  state = createGame(activeMap ?? (resumed ? state.map : undefined));
  fx.clear();
  sfx.click();
});
if (resumed) {
  fx.floater(480, 120, `▶ Run resumed — Wave ${resumed.round + 1}`, '#7dff9b', 15);
}
initScreens(() => {
  clearRunSave();
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
  if (state.phase === 'won' || state.phase === 'lost' || state.phase === 'draft') {
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
  updateDraft(state);
  updateSpecialize(state);
  updateScreens(state);
}

// boot: load 3D assets, then start the loop
initRenderer3d(canvas, state)
  .then(() => {
    startLoop(update, render, () => state.speed);
  })
  .catch((err) => {
    console.error('renderer failed to initialize', err);
    const wrap = canvas.parentElement!;
    const msg = document.createElement('div');
    msg.style.cssText =
      'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#ff9db5;font-size:15px;text-align:center;padding:20px;';
    msg.textContent = `Failed to load game assets: ${err?.message ?? err}. Try refreshing.`;
    wrap.appendChild(msg);
  });

// debug/test handles (read-only inspection + scripted placement for live verification)
Object.defineProperty(window, '__game', { get: () => state });
(window as any).__fx = fx;
(window as any).__computeStats = computeStats;
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
