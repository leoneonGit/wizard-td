import { ENEMIES } from '../data/enemies';
import { WAVES } from '../data/waves';
import type { GameState } from '../game/state';

let elGold: HTMLElement;
let elLives: HTMLElement;
let elRound: HTMLElement;
let btnStart: HTMLButtonElement;
let elWavePreview: HTMLElement;

let lastKey = '';

export function initHud(onStart: () => void): void {
  elGold = document.getElementById('hud-gold')!;
  elLives = document.getElementById('hud-lives')!;
  elRound = document.getElementById('hud-round')!;
  btnStart = document.getElementById('btn-start') as HTMLButtonElement;
  elWavePreview = document.getElementById('wave-preview')!;
  btnStart.addEventListener('click', onStart);
}

export function updateHud(state: GameState): void {
  const key = `${state.gold}|${state.lives}|${state.round}|${state.phase}|${state.waveModifier?.id ?? ''}|${state.nodeChoice}|${state.nodePicked}`;
  if (key === lastKey) return;
  lastKey = key;

  elGold.textContent = String(state.gold);
  elLives.textContent = String(state.lives);
  elRound.textContent = `${Math.min(state.round + (state.phase === 'wave' ? 1 : 1), WAVES.length)}/${WAVES.length}`;

  if (state.phase === 'build' && state.round < WAVES.length) {
    const choiceDue = !state.nodePicked && state.nextNodes.length > 1;
    btnStart.disabled = choiceDue;
    const tag = state.nodeChoice === 'elite' ? ' ★' : state.nodeChoice === 'treasure' ? ' 💎' : '';
    btnStart.textContent = choiceDue ? 'Choose your path…' : `Start Wave ${state.round + 1}${tag}`;
    elWavePreview.innerHTML = previewWave(state.round);
  } else if (state.phase === 'wave') {
    btnStart.disabled = true;
    btnStart.textContent = state.waveModifier
      ? `W${state.round + 1} ★ ${state.waveModifier.name} (${state.waveModifier.desc})`
      : `Wave ${state.round + 1} — Defend!`;
  } else if (state.phase === 'draft') {
    btnStart.disabled = true;
    btnStart.textContent = 'Choose a card…';
  } else if (state.phase === 'relic') {
    btnStart.disabled = true;
    btnStart.textContent = 'Claim your relic…';
  } else {
    btnStart.disabled = true;
    btnStart.textContent = state.phase === 'won' ? 'Victory!' : 'Defeat';
  }
}

function previewWave(round: number): string {
  const wave = WAVES[round];
  const counts = new Map<string, number>();
  for (const g of wave) counts.set(g.type, (counts.get(g.type) ?? 0) + g.count);
  const parts: string[] = [];
  for (const [type, n] of counts) {
    const def = ENEMIES[type];
    parts.push(`${n}× ${def.name}${hintFor(type)}`);
  }
  return `<b>Next wave:</b> ${parts.join(', ')}`;
}

function hintFor(type: string): string {
  switch (type) {
    case 'knight': return ' <i>(armored — burn them!)</i>';
    case 'shade': return ' <i>(fire-immune!)</i>';
    case 'runner': return ' <i>(fast — chill them!)</i>';
    case 'golem': return ' <i>(BOSS)</i>';
    case 'golemling': return ' <i>(mini-boss)</i>';
    default: return '';
  }
}
