import { findWizard, type GameState } from '../game/state';
import { sellValue } from '../game/economy';
import { assetUrl } from '../engine/assetUrl';
import type { TargetMode, Wizard } from '../game/types';

const MODES: TargetMode[] = ['first', 'last', 'strong', 'close'];
const MODE_LABELS: Record<TargetMode, string> = {
  first: 'First',
  last: 'Last',
  strong: 'Strong',
  close: 'Close',
};

let panel: HTMLElement;
let builtKey = '';
let onUpgrade: (w: Wizard, path: 0 | 1) => void;
let onSell: (w: Wizard) => void;
let onMode: (w: Wizard, mode: TargetMode) => void;

export function initTowerPanel(handlers: {
  upgrade: (w: Wizard, path: 0 | 1) => void;
  sell: (w: Wizard) => void;
  mode: (w: Wizard, mode: TargetMode) => void;
}): void {
  panel = document.getElementById('tower-panel')!;
  onUpgrade = handlers.upgrade;
  onSell = handlers.sell;
  onMode = handlers.mode;
}

export function updateTowerPanel(state: GameState): void {
  const w = findWizard(state, state.selectedWizardId);
  if (!w || w.pendingSpecialize) {
    if (builtKey !== '') {
      panel.classList.add('hidden');
      builtKey = '';
    }
    return;
  }

  const key = `${w.id}|${w.tiers[0]}|${w.tiers[1]}|${w.mode}|${affordKey(state, w)}`;
  if (key === builtKey) return;
  builtKey = key;
  panel.classList.remove('hidden');
  build(state, w);
}

function affordKey(state: GameState, w: Wizard): string {
  // re-render only when affordability of next tiers flips, not on every gold change
  return ([0, 1] as const)
    .map((p) => {
      const next = w.def.upgrades[p].tiers[w.tiers[p]];
      return next ? (state.gold >= next.cost ? 'y' : 'n') : 'x';
    })
    .join('');
}

function build(state: GameState, w: Wizard): void {
  const s = w.stats;
  const statBits = [
    `Dmg <b>${Math.round(s.damage)}</b>`,
    `Rate <b>${s.rate.toFixed(2)}s</b>`,
    `Range <b>${Math.round(s.range)}</b>`,
  ];
  if (s.splash > 0) statBits.push(`Splash <b>${Math.round(s.splash)}</b>`);
  if (s.chains > 0) statBits.push(`Chains <b>${s.chains}</b>`);
  if (s.burnDps > 0) statBits.push(`Burn <b>${s.burnDps}/s × ${s.burnDuration.toFixed(0)}s</b>`);
  if (s.chillPct > 0) statBits.push(`Chill <b>${Math.round(s.chillPct * 100)}%</b>`);

  panel.innerHTML = `
    <div class="tp-title">${w.def.icon} ${w.def.name}</div>
    <div class="tp-stats">${statBits.join(' · ')}</div>
    <div class="tp-modes">${MODES.map(
      (m) => `<button class="tp-mode${w.mode === m ? ' active' : ''}" data-mode="${m}">${MODE_LABELS[m]}</button>`,
    ).join('')}</div>
    <div id="tp-upgrades"></div>
    <button class="tp-sell">Sell for ${sellValue(w)} ◉</button>
  `;

  panel.querySelectorAll<HTMLButtonElement>('.tp-mode').forEach((btn) => {
    btn.addEventListener('click', () => onMode(w, btn.dataset.mode as TargetMode));
  });
  panel.querySelector<HTMLButtonElement>('.tp-sell')!.addEventListener('click', () => onSell(w));

  const upgWrap = panel.querySelector('#tp-upgrades')!;
  ([0, 1] as const).forEach((p) => {
    const path = w.def.upgrades[p];
    const tier = w.tiers[p];
    const next = path.tiers[tier];
    const row = document.createElement('div');
    row.className = 'tp-upgrade';
    const iconTier = next ? tier : path.tiers.length - 1;
    const iconImg = `<img class="tp-upg-icon" src="${assetUrl(`icons/upg_${w.def.id}_${p}_${iconTier}.png`)}" onerror="this.style.display='none'" alt="" />`;
    if (!next) {
      row.classList.add('maxed');
      row.innerHTML = `
        ${iconImg}<div><div class="tp-upg-name">${path.name} ★MAX</div>
        <div class="tp-upg-desc">All ${path.tiers.length} tiers owned</div></div>`;
    } else {
      const afford = state.gold >= next.cost;
      if (!afford) row.classList.add('unaffordable');
      row.innerHTML = `
        ${iconImg}<div style="flex:1"><div class="tp-upg-name">${path.name} ${tier + 1}/${path.tiers.length}: ${next.name}</div>
        <div class="tp-upg-desc">${next.desc}</div></div>
        <div class="tp-upg-cost">${next.cost}</div>`;
      if (afford) row.addEventListener('click', () => onUpgrade(w, p));
    }
    upgWrap.appendChild(row);
    upgWrap.appendChild(document.createTextNode(' '));
  });
}
