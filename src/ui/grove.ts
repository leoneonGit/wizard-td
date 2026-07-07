/** Warden's Grove — the between-runs perk shop. Event-driven (renders on open/purchase),
 *  never per-frame. Purchases persist immediately but only shape the NEXT run:
 *  the live run keeps its frozen state.perks snapshot. */
import { ELEMENTS } from '../data/elements';
import {
  PERKS, buyPerk, loadMeta, perkCost, perkRank, saveMeta, type MetaSave,
} from '../game/meta';
import { sfx } from '../audio/sfx';
import type { ElementId } from '../game/types';

const ATTUNABLE: ElementId[] = ['fire', 'ice', 'lightning', 'water', 'wind', 'physical', 'void'];

let modal: HTMLElement;

export function initGrove(): void {
  modal = document.getElementById('grove-modal')!;
  document.getElementById('btn-grove')?.addEventListener('click', openGrove);
  document.getElementById('btn-grove-over')?.addEventListener('click', openGrove);
}

export function openGrove(): void {
  render(loadMeta());
  modal.classList.remove('hidden');
  sfx.click();
}

function render(meta: MetaSave): void {
  const cards = PERKS.map((def) => {
    const rank = perkRank(meta, def.id);
    const max = def.costs.length;
    const cost = perkCost(meta, def);
    const pips = Array.from({ length: max }, (_, i) => (i < rank ? '●' : '○')).join('');
    const descRank = Math.min(rank, max - 1); // maxed -> show the final effect
    const buy = cost === null
      ? `<span class="gv-maxed">MAXED</span>`
      : `<button class="gv-buy" data-perk="${def.id}" ${meta.essence < cost ? 'disabled' : ''}>${cost} ✦</button>`;
    const attunePicker = def.id === 'attune' && rank > 0 ? attuneHtml(meta) : '';
    return `
      <div class="gv-perk">
        <div class="gv-icon">${def.icon}</div>
        <div class="gv-info">
          <div class="gv-name">${def.name} <span class="gv-pips">${pips}</span></div>
          <div class="gv-desc">${def.desc(descRank)}</div>
          ${attunePicker}
        </div>
        ${buy}
      </div>`;
  }).join('');

  modal.innerHTML = `
    <div id="grove-inner">
      <h2>🌳 Warden's Grove</h2>
      <div id="gv-balance">✦ <b>${meta.essence}</b> essence <span id="gv-lifetime">· ${meta.lifetimeEssence} lifetime</span></div>
      <div id="gv-perks">${cards}</div>
      <div id="gv-note">Every run earns essence — win or lose. New perks take effect on your next run.</div>
      <button id="gv-close">Back</button>
    </div>`;

  modal.querySelector('#gv-close')!.addEventListener('click', () => {
    modal.classList.add('hidden');
    sfx.click();
  });
  modal.querySelectorAll<HTMLButtonElement>('.gv-buy').forEach((btn) => {
    btn.addEventListener('click', () => {
      const m = loadMeta();
      if (buyPerk(m, btn.dataset.perk as (typeof PERKS)[number]['id'])) {
        sfx.upgrade();
        render(m); // re-render with the new balance/ranks
      }
    });
  });
  modal.querySelectorAll<HTMLButtonElement>('.gv-el').forEach((btn) => {
    btn.addEventListener('click', () => {
      const m = loadMeta();
      m.attunedElement = btn.dataset.el as ElementId;
      saveMeta(m);
      sfx.click();
      render(m);
    });
  });
}

function attuneHtml(meta: MetaSave): string {
  const chips = ATTUNABLE.map((el) => {
    const e = ELEMENTS[el];
    const active = meta.attunedElement === el;
    return `<button class="gv-el ${active ? 'active' : ''}" data-el="${el}"
      style="border-color:${e.color};${active ? `background:${e.color}33` : ''}" title="${e.name}">${e.name}</button>`;
  }).join('');
  return `<div class="gv-attune">${chips}</div>`;
}
