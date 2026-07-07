/** Relic pick modal (treasure-node reward) + the always-visible relic bar. */
import { applyRelic, type GameState } from '../game/state';
import { fx } from '../render/effects';
import { sfx } from '../audio/sfx';
import type { RelicDef } from '../game/types';

let modal: HTMLElement;
let bar: HTMLElement;
let info: HTMLElement;
let infoFor: string | null = null; // relic id the info card is showing
let shown: RelicDef[] | null = null;
let afterPick: (() => void) | null = null;
let barKey = '';

export function initRelics(onResolved: () => void): void {
  afterPick = onResolved;
  modal = document.getElementById('relic-modal')!;
  bar = document.getElementById('relic-bar')!;
  // tap-a-chip info card lives right under the bar (hover tooltips don't exist on touch)
  info = document.createElement('div');
  info.id = 'relic-info';
  info.style.display = 'none';
  bar.insertAdjacentElement('afterend', info);
}

function toggleInfo(r: RelicDef): void {
  if (infoFor === r.id) {
    infoFor = null;
    info.style.display = 'none';
    return;
  }
  infoFor = r.id;
  info.innerHTML = `<b>${r.icon} ${r.name}</b> — ${r.desc}`;
  info.style.display = '';
}

export function updateRelics(state: GameState): void {
  // ---- pick modal
  if (state.phase !== 'relic' || !state.pendingRelicDraft) {
    if (shown) {
      modal.classList.add('hidden');
      shown = null;
    }
  } else if (shown !== state.pendingRelicDraft) {
    shown = state.pendingRelicDraft;
    render(state);
  }

  // ---- bar
  const key = state.relics.map((r) => r.id).join(',');
  if (key !== barKey) {
    barKey = key;
    bar.innerHTML = '';
    infoFor = null;
    info.style.display = 'none';
    for (const r of state.relics) {
      const chip = document.createElement('div');
      chip.className = `relic-chip ${r.rarity}`;
      chip.textContent = r.icon;
      chip.title = `${r.name} — ${r.desc}`;
      chip.addEventListener('click', () => {
        toggleInfo(r);
        sfx.click();
      });
      bar.appendChild(chip);
    }
  }
}

function render(state: GameState): void {
  const relics = state.pendingRelicDraft!;
  modal.classList.remove('hidden');
  modal.innerHTML = `
    <div id="draft-inner">
      <h2>💎 Treasure! Choose a relic</h2>
      <div id="draft-cards"></div>
    </div>`;
  const wrap = modal.querySelector('#draft-cards')!;
  for (const relic of relics) {
    const el = document.createElement('button');
    el.className = 'draft-card';
    el.style.borderColor = relic.rarity === 'rare' ? '#ffd75e' : '#5bc8f5';
    el.innerHTML = `
      <div class="dc-icon" style="background:#ffd75e22">${relic.icon}</div>
      <div class="dc-name">${relic.name}</div>
      <div class="dc-desc">${relic.desc}</div>
      <div class="dc-rarity" style="color:${relic.rarity === 'rare' ? '#ffd75e' : '#5bc8f5'}">◆ ${relic.rarity} relic</div>`;
    el.addEventListener('click', () => resolve(state, relic));
    wrap.appendChild(el);
  }
}

function resolve(state: GameState, relic: RelicDef): void {
  applyRelic(state, relic);
  sfx.upgrade();
  fx.floater(480, 200, `${relic.icon} ${relic.name}!`, '#ffd75e', 16);
  state.pendingRelicDraft = null;
  state.phase = 'build';
  modal.classList.add('hidden');
  shown = null;
  afterPick?.();
}
