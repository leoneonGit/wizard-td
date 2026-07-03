/** Act transition: the boss is down — pack up camp and travel to the next map. */
import { ACT_MAPS, MAPS } from '../data/maps';
import { SELL_REFUND, type GameState } from '../game/state';

let modal: HTMLElement;
let shownForAct = -1;
let onTravel: ((state: GameState) => void) | null = null;

export function initActClear(travel: (state: GameState) => void): void {
  onTravel = travel;
  modal = document.getElementById('actclear-modal')!;
}

export function updateActClear(state: GameState): void {
  if (state.phase !== 'actClear') {
    if (shownForAct !== -1) {
      modal.classList.add('hidden');
      shownForAct = -1;
    }
    return;
  }
  if (shownForAct === state.act) return;
  shownForAct = state.act;
  render(state);
}

function render(state: GameState): void {
  const nextMap = MAPS[ACT_MAPS[state.act + 1]];
  const refund = state.wizards.reduce((sum, w) => sum + Math.round(w.invested * SELL_REFUND), 0);
  modal.classList.remove('hidden');
  modal.innerHTML = `
    <div id="event-inner">
      <div class="ev-icon">🏰</div>
      <h2>Act ${['I', 'II', 'III'][state.act]} Complete!</h2>
      <div class="ev-desc">
        The ${state.map.name} is safe. The horde regroups ahead at <b>${nextMap.name}</b>.<br/>
        Your towers are packed up and sold for <b>+${refund} ◉</b> — cards, relics and gold
        travel with you. Build anew.
      </div>
      <div id="event-choices">
        <button class="ev-choice" id="btn-travel">
          <div class="evc-label">Travel onward ➤</div>
          <div class="evc-desc">Cross into ${nextMap.name} (Act ${['I', 'II', 'III'][state.act + 1]})</div>
        </button>
      </div>
    </div>`;
  modal.querySelector('#btn-travel')!.addEventListener('click', () => {
    modal.classList.add('hidden');
    shownForAct = -1;
    onTravel?.(state);
  });
}
