/** Between-wave event vignette modal. */
import { resolveEventChoice } from '../game/events';
import type { GameState } from '../game/state';
import { sfx } from '../audio/sfx';
import type { EventDef } from '../game/types';

let modal: HTMLElement;
let shown: EventDef | null = null;
let afterPick: (() => void) | null = null;

export function initEvents(onResolved: () => void): void {
  afterPick = onResolved;
  modal = document.getElementById('event-modal')!;
}

export function updateEvents(state: GameState): void {
  if (!state.pendingEvent) {
    if (shown) {
      modal.classList.add('hidden');
      shown = null;
    }
    return;
  }
  if (shown === state.pendingEvent) return;
  shown = state.pendingEvent;
  render(state);
}

function render(state: GameState): void {
  const ev = state.pendingEvent!;
  modal.classList.remove('hidden');
  modal.innerHTML = `
    <div id="event-inner">
      <div class="ev-icon">${ev.icon}</div>
      <h2>${ev.name}</h2>
      <div class="ev-desc">${ev.desc}</div>
      <div id="event-choices"></div>
    </div>`;
  const wrap = modal.querySelector('#event-choices')!;
  for (const choice of ev.choices) {
    const el = document.createElement('button');
    el.className = 'ev-choice';
    el.innerHTML = `
      <div class="evc-label">${choice.label}</div>
      <div class="evc-desc">${choice.desc}</div>`;
    el.addEventListener('click', () => {
      sfx.click();
      resolveEventChoice(state, choice.effect);
      modal.classList.add('hidden');
      shown = null;
      afterPick?.();
    });
    wrap.appendChild(el);
  }
}
