import { ENEMIES } from '../data/enemies';
import { wavesForAct, wavesInAct } from '../data/waves';
import { isCampaign, type GameState } from '../game/state';

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
  const key = `${state.gold}|${state.lives}|${state.round}|${state.act}|${state.phase}|${state.waveModifier?.id ?? ''}|${state.nodeChoice}|${state.nodePicked}`;
  if (key === lastKey) return;
  lastKey = key;

  // drives the per-act mood vignette on #board-wrap (styles.css)
  document.body.dataset.act = String(state.act);

  const waveCount = wavesInAct(state.act);
  const actTag = isCampaign(state) ? `Act ${['I', 'II', 'III'][state.act] ?? state.act + 1} · ` : '';
  elGold.textContent = String(state.gold);
  elLives.textContent = String(state.lives);
  elRound.textContent = `${actTag}${Math.min(state.round + 1, waveCount)}/${waveCount}`;

  const isBossRound = state.round === waveCount - 1;
  if (state.phase === 'build' && state.round < waveCount) {
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
    case 'warlord': return ' <i>(BOSS — armor breaks to PHYSICAL only, lobs tower-stunning grenades!)</i>';
    case 'pyretitan': return ' <i>(BOSS — fire-immune, periodically SHIELDS: pelt it with fast attacks!)</i>';
    case 'colossus': return ' <i>(THE BOSS — armored, fire-hardened, plants healing Heartstones: snipe them!)</i>';
    case 'aetherwyrm': return ' <i>(THE BOSS — its ROAR polymorphs half your towers at the first bend. Kill it fast or adapt!)</i>';
    case 'heartstone': return ' <i>(heal-crystal — destroy it fast!)</i>';
    case 'frostshaman': return ' <i>(his cold SLOWS your towers — kill him first!)</i>';
    case 'burrower': return ' <i>(tunnels underground — untargetable and fast below!)</i>';
    case 'mirrorslime': return ' <i>(magic kills SPLIT it — finish with physical!)</i>';
    case 'orcbrute': return ' <i>(armored — physical!)</i>';
    case 'troll': return ' <i>(armored + REGENERATES — crack, then burst!)</i>';
    case 'warwagon': return ' <i>(carrier — kill it EARLY, leaks -8!)</i>';
    case 'siegetower': return ' <i>(unloads orcs as it rolls, leaks -10!)</i>';
    case 'orcshaman': return ' <i>(HEALER — focus him first!)</i>';
    case 'wardrummer': return ' <i>(hastens the horde — silence the drums)</i>';
    case 'wraith': return ' <i>(phases out — spread your damage)</i>';
    case 'gargoyle': return ' <i>(FLIES straight across — archers ready!)</i>';
    case 'drake': return ' <i>(fast FLYER, burn-proof — arrows up!)</i>';
    case 'hexer': return ' <i>(SILENCES towers — kill him first!)</i>';
    case 'banshee': return ' <i>(death-wail silences — kill her at range!)</i>';
    case 'slime_big': return ' <i>(splits, and splits again)</i>';
    case 'necromancer': return ' <i>(raises the dead as he walks)</i>';
    case 'thief': return ' <i>(steals GOLD and runs — catch him!)</i>';
    case 'shieldbearer': return ' <i>(ward caps your big hits)</i>';
    default: return '';
  }
}
