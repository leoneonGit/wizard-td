import type { GameState } from '../game/state';

let overlay: HTMLElement;
let title: HTMLElement;
let text: HTMLElement;
let shown: string = '';

export function initScreens(onRestart: () => void): void {
  overlay = document.getElementById('overlay')!;
  title = document.getElementById('overlay-title')!;
  text = document.getElementById('overlay-text')!;
  document.getElementById('btn-restart')!.addEventListener('click', onRestart);
}

export function updateScreens(state: GameState): void {
  const want = state.phase === 'won' || state.phase === 'lost' ? state.phase : '';
  if (want === shown) return;
  shown = want;

  if (!want) {
    overlay.classList.add('hidden');
    return;
  }
  overlay.classList.remove('hidden');
  if (want === 'won') {
    title.textContent = '🏆 Victory!';
    text.textContent = `The realm stands! You survived all waves with ${state.lives} lives to spare.`;
  } else {
    title.textContent = '💀 Defeat';
    text.textContent = `The horde broke through on wave ${state.round + 1}. Adjust your elements and try again!`;
  }
}
