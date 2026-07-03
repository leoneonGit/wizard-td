/** Branching wave map: pick what the next wave IS before starting it.
 *  From wave 3 every round OWES a choice — a blocking modal presents it right
 *  after the draft (autoplay waits); the sidebar row lets you change your mind
 *  any time before hitting Start. */
import { drawEvent, ensureNodes, type GameState } from '../game/state';
import { sfx } from '../audio/sfx';
import type { NodeKind } from '../game/types';

const NODE_INFO: Record<NodeKind, { icon: string; label: string; hint: string }> = {
  normal: { icon: '⚔️', label: 'Normal', hint: 'A standard wave. No surprises.' },
  elite: { icon: '★', label: 'Elite', hint: 'A modified, harder wave — clear it for a RARE-only card draft.' },
  treasure: { icon: '💎', label: 'Treasure', hint: 'Guarded wave (+25% HP) — clear it to claim a RELIC.' },
  event: { icon: '❓', label: 'Event', hint: 'Something is happening on the road...' },
};

let picker: HTMLElement;
let modal: HTMLElement;
let lastKey = '';
let modalShownFor = -1;

export function initNodes(): void {
  picker = document.getElementById('node-picker')!;
  modal = document.getElementById('path-modal')!;
}

export function updateNodes(state: GameState): void {
  if (state.phase === 'build') ensureNodes(state);

  updateModal(state);
  updateSidebarRow(state);
}

/** Blocking "choose your path" moment — appears once per round, right after the draft. */
function updateModal(state: GameState): void {
  const due =
    state.phase === 'build' &&
    !state.nodePicked &&
    state.nextNodes.length > 1 &&
    !state.pendingEvent; // the event vignette takes over once clicked

  if (!due) {
    if (modalShownFor === state.round) return; // keep hidden-state stable
    modal.classList.add('hidden');
    return;
  }
  if (modalShownFor === state.round && !modal.classList.contains('hidden')) return;
  modalShownFor = state.round;
  modal.classList.remove('hidden');
  modal.innerHTML = `
    <div id="draft-inner">
      <h2>🗺️ Choose your path — Wave ${state.round + 1}</h2>
      <div id="draft-cards"></div>
    </div>`;
  const wrap = modal.querySelector('#draft-cards')!;
  for (const kind of state.nextNodes) {
    const info = NODE_INFO[kind];
    const el = document.createElement('button');
    el.className = `draft-card path-card ${kind}`;
    el.innerHTML = `
      <div class="dc-icon">${info.icon}</div>
      <div class="dc-name">${info.label}</div>
      <div class="dc-desc">${info.hint}</div>`;
    el.addEventListener('click', () => pick(state, kind));
    wrap.appendChild(el);
  }
}

function pick(state: GameState, kind: NodeKind): void {
  sfx.click();
  if (kind === 'event') {
    state.pendingEvent = drawEvent(state);
    if (!state.pendingEvent) {
      // pool exhausted — treat as a normal pick
      state.nextNodes = state.nextNodes.filter((n) => n !== 'event');
      state.nodeChoice = 'normal';
      state.nodePicked = true;
    }
    // the event resolver marks the choice as made
  } else {
    state.nodeChoice = kind;
    state.nodePicked = true;
  }
  modal.classList.add('hidden');
  lastKey = ''; // refresh the sidebar row
}

/** Compact sidebar row — review/change the pick before starting the wave. */
function updateSidebarRow(state: GameState): void {
  const visible = state.phase === 'build' && state.nodePicked && state.nextNodes.length > 1;
  const key = `${visible}|${state.nextNodes.join(',')}|${state.nodeChoice}|${state.nodesForRound}`;
  if (key === lastKey) return;
  lastKey = key;

  picker.classList.toggle('hidden', !visible);
  if (!visible) return;

  picker.innerHTML = '';
  for (const kind of state.nextNodes) {
    const info = NODE_INFO[kind];
    const btn = document.createElement('button');
    btn.className = `node-btn ${kind}${state.nodeChoice === kind ? ' active' : ''}`;
    btn.title = info.hint;
    btn.innerHTML = `<span class="nb-icon">${info.icon}</span>${info.label}`;
    btn.addEventListener('click', () => {
      sfx.click();
      if (kind === 'event') {
        state.pendingEvent = drawEvent(state);
        if (!state.pendingEvent) state.nextNodes = state.nextNodes.filter((n) => n !== 'event');
        return;
      }
      state.nodeChoice = kind;
      lastKey = '';
    });
    picker.appendChild(btn);
  }
}
