import { findWizard, specializeWizard, type GameState } from '../game/state';
import { fx } from '../render/effects';
import { sfx } from '../audio/sfx';
import type { Wizard, WizardDef } from '../game/types';

let modal: HTMLElement;
let shownFor: Wizard | null = null;
let afterPick: (() => void) | null = null;

export function initSpecialize(onResolved: () => void): void {
  afterPick = onResolved;
  modal = document.getElementById('specialize-modal')!;
}

export function updateSpecialize(state: GameState): void {
  const w = findWizard(state, state.selectedWizardId);
  const pending = w?.pendingSpecialize ? w : undefined;

  if (!pending) {
    if (shownFor) {
      modal.classList.add('hidden');
      shownFor = null;
    }
    return;
  }
  if (shownFor === pending) return; // already rendered
  shownFor = pending;
  render(state, pending);
}

function render(state: GameState, w: Wizard): void {
  const options = w.specializeOptions ?? [];
  modal.classList.remove('hidden');
  modal.innerHTML = `
    <div id="draft-inner">
      <h2>Specialize your ${w.family === 'wizard' ? 'Wizard' : 'Goblin'}</h2>
      <div id="draft-cards"></div>
      <div id="spec-hint">Click elsewhere to decide later — it'll wait, idle, until you choose.</div>
    </div>`;

  const wrap = modal.querySelector('#draft-cards')!;
  for (const def of options) {
    const el = document.createElement('button');
    el.className = 'draft-card';
    el.style.borderColor = def.color;
    el.innerHTML = `
      <div class="dc-icon" style="background:${def.color}22">${def.icon}</div>
      <div class="dc-name">${def.name}</div>
      <div class="dc-desc">${def.desc}</div>`;
    el.addEventListener('click', () => resolve(state, w, def));
    wrap.appendChild(el);
  }
}

function resolve(state: GameState, w: Wizard, def: WizardDef): void {
  specializeWizard(state, w, def);
  sfx.upgrade();
  fx.burst(w.x, w.y, def.color, 14, 120, 3);
  fx.floater(w.x, w.y - 24, `${def.icon} ${def.name}!`, def.color, 14);
  modal.classList.add('hidden');
  shownFor = null;
  afterPick?.();
}
