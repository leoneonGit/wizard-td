import { ELEMENTS } from '../data/elements';
import { CARDS } from '../data/cards';
import { clearRunSave } from '../game/save';
import type { GameState } from '../game/state';
import type { ElementId } from '../game/types';

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
  clearRunSave(); // the run is over either way
  if (want === 'won') {
    title.textContent = '🏆 Victory!';
    text.innerHTML = `The realm stands! ${state.lives} lives to spare.${summaryHtml(state)}`;
  } else {
    title.textContent = '💀 Defeat';
    text.innerHTML = `The horde broke through on wave ${state.round + 1}.${summaryHtml(state)}`;
  }
}

function summaryHtml(state: GameState): string {
  const s = state.stats;
  const dmg = Object.entries(s.dmgByElement).filter(([, v]) => v > 0) as [ElementId, number][];
  dmg.sort((a, b) => b[1] - a[1]);
  const maxDmg = dmg[0]?.[1] ?? 1;
  const bars = dmg
    .map(
      ([el, v]) => `
      <div class="sum-bar-row">
        <span class="sum-bar-label">${ELEMENTS[el].name}</span>
        <div class="sum-bar"><div style="width:${Math.max(4, (v / maxDmg) * 100)}%;background:${ELEMENTS[el].color}"></div></div>
        <span class="sum-bar-val">${Math.round(v)}</span>
      </div>`,
    )
    .join('');
  const cards = s.cardIds
    .map((id) => CARDS.find((c) => c.id === id))
    .filter(Boolean)
    .map((c) => `<span class="sum-card" title="${c!.name}">${c!.icon}</span>`)
    .join('');
  const r = s.reactions;
  return `
    <div id="run-summary">
      <div class="sum-line">Waves <b>${s.wavesCleared}</b> · Kills <b>${s.kills}</b> · Leaks <b>${s.leaks}</b></div>
      <div class="sum-line">💫 Conduct ×${r.conduct} · 💎 Shatter ×${r.shatter} · ♨️ Evaporate ×${r.evaporate} · 🧊 Frozen ×${r.frozen}</div>
      ${bars ? `<div class="sum-section">Damage by element</div>${bars}` : ''}
      ${cards ? `<div class="sum-section">Cards drafted (${s.cardIds.length})</div><div class="sum-cards">${cards}</div>` : ''}
    </div>`;
}
