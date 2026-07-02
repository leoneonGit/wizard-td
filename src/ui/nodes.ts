/** Branching wave map: pick what the next wave IS before starting it. */
import { drawEvent, ensureNodes, type GameState } from '../game/state';
import { sfx } from '../audio/sfx';
import type { NodeKind } from '../game/types';

const NODE_INFO: Record<NodeKind, { icon: string; label: string; hint: string }> = {
  normal: { icon: '⚔️', label: 'Normal', hint: 'A standard wave.' },
  elite: { icon: '★', label: 'Elite', hint: 'Modified wave — clear it for a RARE draft.' },
  treasure: { icon: '💎', label: 'Treasure', hint: 'Tougher (+25% HP) — clear it to claim a RELIC.' },
  event: { icon: '❓', label: 'Event', hint: 'Something is happening on the road...' },
};

let picker: HTMLElement;
let lastKey = '';

export function initNodes(): void {
  picker = document.getElementById('node-picker')!;
}

export function updateNodes(state: GameState): void {
  if (state.phase === 'build') ensureNodes(state);

  const visible = state.phase === 'build' && state.nextNodes.length > 1;
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
        // events fire immediately — the wave itself then runs as normal
        state.pendingEvent = drawEvent(state);
        if (!state.pendingEvent) state.nextNodes = state.nextNodes.filter((n) => n !== 'event');
        return;
      }
      state.nodeChoice = kind;
      lastKey = ''; // re-render active highlight
    });
    picker.appendChild(btn);
  }
}
