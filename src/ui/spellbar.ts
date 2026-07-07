/** Warden Spell bar — floating buttons over the board. Buttons exist only while
 *  their spell is unlocked by the current board; cooldowns darken them; a fresh
 *  unlock pops with a fanfare (once per run). */
import { SPELLS, distinctSpecs, spellUnlocked } from '../game/spells';
import { fx } from '../render/effects';
import { sfx } from '../audio/sfx';
import type { GameState } from '../game/state';

const HOTKEYS = ['Q', 'W', 'E', 'R', 'T'];

let bar: HTMLElement;
let buttons: HTMLButtonElement[] = [];
let onPick: (id: string) => void;
let lastKey = '';
// unlock fanfare bookkeeping — reset when a new run's state object appears
let announcedState: GameState | null = null;
let announced = new Set<string>();
let lastPreviewT = 0;

export function initSpellbar(pick: (id: string) => void): void {
  onPick = pick;
  bar = document.getElementById('spell-bar')!;
  bar.innerHTML = '';
  buttons = SPELLS.map((def, i) => {
    const btn = document.createElement('button');
    btn.className = 'spell-btn';
    btn.innerHTML = `<span class="sp-key">${HOTKEYS[i]}</span>${def.icon}<span class="sp-cd hidden"></span>`;
    btn.addEventListener('click', () => onPick(def.id));
    bar.appendChild(btn);
    return btn;
  });
}

export function updateSpellbar(state: GameState): void {
  if (state !== announcedState) {
    announcedState = state;
    announced = new Set();
  }

  // targeting preview: a pulsing ring under the cursor (render-layer only)
  if (state.castingSpell && state.mouseOnBoard) {
    const def = SPELLS.find((s) => s.id === state.castingSpell);
    const now = performance.now();
    if (def && def.radius > 0 && now - lastPreviewT > 150) {
      lastPreviewT = now;
      fx.ring(state.mouseX, state.mouseY, def.color, def.radius);
    }
  }

  const key = SPELLS.map((def) => {
    const unlocked = spellUnlocked(state, def);
    const cd = Math.ceil(state.spellCds[def.id] ?? 0);
    return `${unlocked ? 1 : 0}${cd}`;
  }).join('|') + `|${state.castingSpell}|${state.phase}`;
  if (key === lastKey) return;
  lastKey = key;

  let any = false;
  SPELLS.forEach((def, i) => {
    const btn = buttons[i];
    const unlocked = spellUnlocked(state, def);
    btn.style.display = unlocked ? '' : 'none';
    if (!unlocked) return;
    any = true;

    if (!announced.has(def.id)) {
      announced.add(def.id);
      btn.classList.add('pop');
      setTimeout(() => btn.classList.remove('pop'), 700);
      fx.floater(480, 150, `${def.icon} ${def.name} unlocked!`, def.color, 16);
      sfx.upgrade();
    }

    const cd = state.spellCds[def.id] ?? 0;
    const usable = cd <= 0 && state.phase === 'wave';
    const cdEl = btn.querySelector('.sp-cd') as HTMLElement;
    cdEl.classList.toggle('hidden', cd <= 0);
    cdEl.style.display = cd > 0 ? '' : 'none';
    if (cd > 0) cdEl.textContent = String(Math.ceil(cd));
    btn.disabled = !usable;
    btn.classList.toggle('ready', usable);
    btn.classList.toggle('casting', state.castingSpell === def.id);
    btn.title = `${def.name} [${HOTKEYS[i]}] — ${def.desc}` +
      (usable ? '' : cd > 0 ? ` (recharging ${Math.ceil(cd)}s)` : state.phase !== 'wave' ? ' (casts during waves)' : '') +
      ` · needs ${def.needed} different ${def.family} towers (have ${distinctSpecs(state, def.family)})`;
  });
  bar.classList.toggle('hidden', !any);
}
