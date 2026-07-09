import { SKIP_GOLD } from '../data/cards';
import { ELEMENTS } from '../data/elements';
import { applyCard, draftCount, drawDraft, type GameState } from '../game/state';
import { fx } from '../render/effects';
import { sfx } from '../audio/sfx';
import type { CardDef } from '../game/types';

const RARITY_COLOR: Record<string, string> = {
  common: '#9a92b5',
  uncommon: '#5bc8f5',
  rare: '#ffd75e',
};

let modal: HTMLElement;
let shownDraft: CardDef[] | null = null;
let afterPick: (() => void) | null = null;

export function initDraft(onResolved: () => void): void {
  afterPick = onResolved;
  modal = document.getElementById('draft-modal')!;
}

export function updateDraft(state: GameState): void {
  if (state.phase !== 'draft' || !state.pendingDraft) {
    if (shownDraft) {
      modal.classList.add('hidden');
      shownDraft = null;
    }
    return;
  }
  if (shownDraft === state.pendingDraft) return; // already rendered
  shownDraft = state.pendingDraft;
  render(state);
}

function render(state: GameState): void {
  const cards = state.pendingDraft!;
  modal.classList.remove('hidden');
  modal.innerHTML = `
    <div id="draft-inner">
      <h2>${state.eliteDraft ? '★ Elite Spoils — choose a RARE' : 'Choose a card'}</h2>
      <div id="draft-cards"></div>
      <div id="draft-footer">
        ${state.rerollTokens > 0 ? `<button id="draft-reroll">🎲 Reroll (${state.rerollTokens} left)</button>` : ''}
        <button id="draft-skip">Skip — take ${SKIP_GOLD} ◉</button>
      </div>
    </div>`;

  const wrap = modal.querySelector('#draft-cards')!;
  for (const card of cards) {
    const color = card.element === 'all' ? '#c9b8ff' : ELEMENTS[card.element].color;
    const el = document.createElement('button');
    el.className = 'draft-card';
    el.style.borderColor = color;
    el.innerHTML = `
      <div class="dc-icon" style="background:${color}22">${card.icon}</div>
      <div class="dc-name">${card.name}</div>
      <div class="dc-desc">${card.desc}</div>
      <div class="dc-rarity" style="color:${RARITY_COLOR[card.rarity]}">◆ ${card.rarity}</div>`;
    el.addEventListener('click', () => resolve(state, card));
    wrap.appendChild(el);
  }
  modal.querySelector('#draft-skip')!.addEventListener('click', () => resolve(state, null));
  // Grove perk: burn a token, redraw the hand. NEW array -> the reference guard re-renders.
  modal.querySelector('#draft-reroll')?.addEventListener('click', () => {
    if (state.rerollTokens <= 0) return;
    state.rerollTokens--;
    state.pendingDraft = drawDraft(state, draftCount(state), state.eliteDraft);
    sfx.click();
  });
}

function resolve(state: GameState, card: CardDef | null): void {
  if (card) {
    applyCard(state, card);
    sfx.upgrade();
    fx.floater(480, 200, `${card.icon} ${card.name}!`, '#c9b8ff', 16);
  } else {
    state.gold += SKIP_GOLD;
    sfx.coin();
  }
  state.pendingDraft = null;
  state.eliteDraft = false;
  state.phase = 'build';
  modal.classList.add('hidden');
  shownDraft = null;
  afterPick?.();
}
