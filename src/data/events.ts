import type { EventDef } from '../game/types';

/**
 * Between-wave choice vignettes (Slay-the-Spire events). Picked seeded, each fires
 * at most once per run. `effect` ids are resolved in game/events.ts.
 */
export const EVENTS: EventDef[] = [
  {
    id: 'cursed_chest', name: 'The Cursed Chest', icon: '🗝️',
    desc: 'A chest hums with power in the treeline. The lock is warm to the touch, and something out there noticed you noticing it.',
    choices: [
      { label: 'Open it', desc: 'Gain a random relic — but the next wave becomes an ELITE.', effect: 'chest_open' },
      { label: 'Leave it', desc: 'Walk away. Nothing happens.', effect: 'skip' },
    ],
  },
  {
    id: 'blood_pact', name: 'The Blood Pact', icon: '🩸',
    desc: 'A hooded figure offers power for pain. "The realm remembers sacrifice," it whispers.',
    choices: [
      { label: 'Sign the pact', desc: 'Lose 3 lives → choose from a RARE card draft.', effect: 'blood_pact' },
      { label: 'Refuse', desc: 'Keep your blood where it is.', effect: 'skip' },
    ],
  },
  {
    id: 'merchant', name: 'The Wandering Merchant', icon: '🧳',
    desc: 'A cart rattles up the road, sagging under trinkets. "Artifacts! Genuine! Mostly."',
    choices: [
      { label: 'Buy a relic (130 ◉)', desc: 'Pay 130 gold for a random relic.', effect: 'merchant_buy' },
      { label: 'Decline', desc: 'His prices are theft anyway.', effect: 'skip' },
    ],
  },
  {
    id: 'training', name: 'The Training Grounds', icon: '🎯',
    desc: 'A veteran drillmaster sizes up your towers. "Give me one of them for an hour and 60 gold."',
    choices: [
      { label: 'Pay 60 ◉', desc: 'A random tower gains a free upgrade tier.', effect: 'training' },
      { label: 'Skip', desc: 'They train themselves. Probably.', effect: 'skip' },
    ],
  },
  {
    id: 'gambler', name: "The Gambler's Coin", icon: '🪙',
    desc: 'A grinning imp flips a coin that never seems to land the same way twice. "Double or... well. You know."',
    choices: [
      { label: 'Flip it', desc: '50%: DOUBLE your gold. 50%: lose half.', effect: 'gamble' },
      { label: 'Walk away', desc: 'Your gold stays boring and safe.', effect: 'skip' },
    ],
  },
  {
    id: 'storm_blessing', name: 'The Storm Blessing', icon: '⛈️',
    desc: 'A sky-spirit offers to drench the next wave in glory: slower, tougher foes — worth twice the bounty.',
    choices: [
      { label: 'Accept', desc: 'Next wave: enemies 20% slower, +30% HP, 2x bounty.', effect: 'blessing' },
      { label: 'Decline', desc: 'The spirit shrugs and drifts off.', effect: 'skip' },
    ],
  },
];
