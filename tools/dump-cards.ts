/** Dump the draft-card pool to JSON (feeds the balancing spreadsheet). */
import { writeFileSync } from 'node:fs';
import { CARDS, RARITY_WEIGHT, SKIP_GOLD } from '../src/data/cards';

writeFileSync(
  new URL('../.cards-dump.json', import.meta.url),
  JSON.stringify({ CARDS, RARITY_WEIGHT, SKIP_GOLD }, null, 2),
);
console.log(`dumped ${CARDS.length} cards`);
