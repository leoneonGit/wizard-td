import { ENEMIES } from '../data/enemies';
import { wavesForAct, WAVES_PER_ACT } from '../data/waves';
import { isCampaign, type GameState } from '../game/state';

let elGold: HTMLElement;
let elLives: HTMLElement;
let elRound: HTMLElement;
let btnStart: HTMLButtonElement;
let elWavePreview: HTMLElement;
// quickbar mirrors (mobile sticky strip)
let qbGold: HTMLElement;
let qbLives: HTMLElement;
let qbRound: HTMLElement;
let qbStart: HTMLButtonElement;

let lastKey = '';

export function initHud(onStart: () => void): void {
  elGold = document.getElementById('hud-gold')!;
  elLives = document.getElementById('hud-lives')!;
  elRound = document.getElementById('hud-round')!;
  btnStart = document.getElementById('btn-start') as HTMLButtonElement;
  elWavePreview = document.getElementById('wave-preview')!;
  btnStart.addEventListener('click', onStart);
  qbGold = document.getElementById('qb-gold')!;
  qbLives = document.getElementById('qb-lives')!;
  qbRound = document.getElementById('qb-round')!;
  qbStart = document.getElementById('qb-start') as HTMLButtonElement;
  qbStart.addEventListener('click', onStart);
}

export function updateHud(state: GameState): void {
  const key = `${state.gold}|${state.lives}|${state.round}|${state.act}|${state.phase}|${state.waveModifier?.id ?? ''}|${state.nodeChoice}|${state.nodePicked}`;
  if (key === lastKey) return;
  lastKey = key;

  const actTag = isCampaign(state) ? `Act ${['I', 'II', 'III'][state.act] ?? state.act + 1} · ` : '';
  elGold.textContent = String(state.gold);
  elLives.textContent = String(state.lives);
  elRound.textContent = `${actTag}${Math.min(state.round + 1, WAVES_PER_ACT)}/${WAVES_PER_ACT}`;
  qbGold.textContent = String(state.gold);
  qbLives.textContent = String(state.lives);
  qbRound.textContent = elRound.textContent;

  const isBossRound = state.round === WAVES_PER_ACT - 1;
  if (state.phase === 'build' && state.round < WAVES_PER_ACT) {
    const choiceDue = !state.nodePicked && state.nextNodes.length > 1;
    btnStart.disabled = choiceDue;
    const tag = isBossRound ? ' 👹 BOSS' : state.nodeChoice === 'elite' ? ' ★' : state.nodeChoice === 'treasure' ? ' 💎' : '';
    btnStart.textContent = choiceDue ? 'Choose your path…' : `Start Wave ${state.round + 1}${tag}`;
    elWavePreview.innerHTML = previewWave(state);
  } else if (state.phase === 'wave') {
    btnStart.disabled = true;
    btnStart.textContent = state.waveModifier
      ? `W${state.round + 1} ★ ${state.waveModifier.name} (${state.waveModifier.desc})`
      : isBossRound
        ? `👹 BOSS — hold the line!`
        : `Wave ${state.round + 1} — Defend!`;
  } else if (state.phase === 'draft') {
    btnStart.disabled = true;
    btnStart.textContent = 'Choose a card…';
  } else if (state.phase === 'relic') {
    btnStart.disabled = true;
    btnStart.textContent = 'Claim your relic…';
  } else if (state.phase === 'actClear') {
    btnStart.disabled = true;
    btnStart.textContent = `Act ${['I', 'II', 'III'][state.act]} complete!`;
  } else {
    btnStart.disabled = true;
    btnStart.textContent = state.phase === 'won' ? 'Victory!' : 'Defeat';
  }

  // quickbar start mirrors the main button, abbreviated for the strip
  qbStart.disabled = btnStart.disabled;
  if (state.phase === 'build') {
    const choiceDue = !state.nodePicked && state.nextNodes.length > 1;
    const tag = isBossRound ? ' 👹' : state.nodeChoice === 'elite' ? ' ★' : state.nodeChoice === 'treasure' ? ' 💎' : '';
    qbStart.textContent = choiceDue ? '🗺️ path…' : `▶ Wave ${state.round + 1}${tag}`;
  } else if (state.phase === 'wave') {
    qbStart.textContent = isBossRound ? '👹 BOSS!' : `⚔ Wave ${state.round + 1}`;
  } else if (state.phase === 'draft') {
    qbStart.textContent = '🃏 pick a card';
  } else if (state.phase === 'relic') {
    qbStart.textContent = '💎 pick a relic';
  } else if (state.phase === 'actClear') {
    qbStart.textContent = '🏰 act complete';
  } else {
    qbStart.textContent = state.phase === 'won' ? '🏆' : '💀';
  }
}

function previewWave(state: GameState): string {
  const wave = wavesForAct(state.act)[state.round];
  if (!wave) return '';
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
    case 'warlord': return ' <i>(BOSS — armor breaks to PHYSICAL only!)</i>';
    case 'pyretitan': return ' <i>(BOSS — fire-immune, cannot be chilled!)</i>';
    case 'colossus': return ' <i>(THE BOSS — armored, fire-hardened, cold-proof)</i>';
    case 'orcbrute': return ' <i>(armored — physical!)</i>';
    case 'troll': return ' <i>(armored + REGENERATES — crack, then burst!)</i>';
    case 'warwagon': return ' <i>(carrier — kill it EARLY, leaks -8!)</i>';
    case 'siegetower': return ' <i>(unloads orcs as it rolls, leaks -10!)</i>';
    case 'orcshaman': return ' <i>(HEALER — focus him first!)</i>';
    case 'wardrummer': return ' <i>(hastens the horde — silence the drums)</i>';
    case 'wraith': return ' <i>(phases out — spread your damage)</i>';
    default: return '';
  }
}
