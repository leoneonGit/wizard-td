import { ELEMENTS } from '../data/elements';
import { WIZARDS, SHOP_ORDER } from '../data/wizards';
import type { GameState } from '../game/state';

const cards = new Map<string, HTMLElement>();

export function initShop(onPick: (typeId: string) => void): void {
  const shop = document.getElementById('shop')!;
  shop.innerHTML = '';
  for (const id of SHOP_ORDER) {
    const def = WIZARDS[id];
    const el = ELEMENTS[def.element];
    const card = document.createElement('div');
    card.className = 'shop-card';
    card.innerHTML = `
      <div class="shop-icon" style="background:${el.color}22;border:2px solid ${el.color}">
        <img src="/icons/portrait_${def.id}.png" onerror="this.remove()" alt="" /><span>${def.icon}</span>
      </div>
      <div class="shop-info">
        <div class="shop-name">${def.name}</div>
        <div class="shop-desc">${def.desc}</div>
      </div>
      <div class="shop-cost">${def.cost}</div>
    `;
    card.addEventListener('click', () => onPick(id));
    shop.appendChild(card);
    cards.set(id, card);
  }
}

export function updateShop(state: GameState): void {
  for (const [id, card] of cards) {
    const def = WIZARDS[id];
    card.classList.toggle('unaffordable', state.gold < def.cost);
    card.classList.toggle('selected', state.placingType === id);
  }
}
