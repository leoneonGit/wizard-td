/** Warden's Grove — permanent meta-progression, persisted OUTSIDE the run save.
 *  Essence is earned at the end of every run (win or lose) and spent on perks.
 *  The sim never reads localStorage itself: perks are snapshotted into a RunPerks
 *  and INJECTED into createGame, so tests (and determinism) stay perk-free by default. */
import type { ElementId } from './types';

const LS_KEY = 'wizardtd.meta';

export type PerkId =
  | 'deep_pockets' | 'thick_roots' | 'founder' | 'reroll'
  | 'bounty' | 'attune' | 'wider_draft' | 'trove';

export interface MetaSave {
  v: 1;
  /** spendable balance */
  essence: number;
  /** total ever earned (display only) */
  lifetimeEssence: number;
  /** perkId -> owned rank */
  perks: Partial<Record<PerkId, number>>;
  /** Elemental Attunement pick (change freely in the Grove) */
  attunedElement: ElementId | null;
}

export interface PerkDef {
  id: PerkId;
  name: string;
  icon: string;
  /** rank-aware description; rank = CURRENTLY owned rank */
  desc: (rank: number) => string;
  /** essence cost per rank; length = max rank */
  costs: number[];
}

/** Flat perk snapshot the sim consumes — frozen at run start. */
export interface RunPerks {
  startGold: number;
  startLives: number;
  rerollTokens: number;
  bountyPct: number;
  founderDiscount: boolean;
  widerDraft: boolean;
  /** treasure waves offer 3 relic choices instead of 2 */
  trove: boolean;
  attuneElement: ElementId | null;
  attunePct: number;
}

export const NO_PERKS: RunPerks = {
  startGold: 0,
  startLives: 0,
  rerollTokens: 0,
  bountyPct: 0,
  founderDiscount: false,
  widerDraft: false,
  trove: false,
  attuneElement: null,
  attunePct: 0,
};

export const PERKS: PerkDef[] = [
  {
    id: 'deep_pockets', name: 'Deep Pockets', icon: '💰',
    desc: (r) => `Start each run with +${(r + 1) * 10} gold`,
    costs: [40, 60, 90],
  },
  {
    id: 'thick_roots', name: 'Thick Roots', icon: '🌱',
    desc: (r) => `Start each run with +${(r + 1) * 2} lives`,
    costs: [40, 60, 90],
  },
  {
    id: 'founder', name: "Founder's Discount", icon: '🏗️',
    desc: () => 'Your first tower each run costs 25% less',
    costs: [50],
  },
  {
    id: 'reroll', name: 'Draft Reroll', icon: '🎲',
    desc: (r) => `Start each run with ${r + 1} draft reroll token${r > 0 ? 's' : ''}`,
    costs: [60, 100],
  },
  {
    id: 'bounty', name: 'Bounty Hunter', icon: '🪙',
    desc: (r) => `+${(r + 1) * 5}% gold from kills`,
    costs: [70, 110],
  },
  {
    id: 'attune', name: 'Elemental Attunement', icon: '✨',
    desc: (r) => `Towers of your attuned element deal +${(r + 1) * 5}% damage`,
    costs: [80, 120],
  },
  {
    id: 'wider_draft', name: 'Wider Draft', icon: '🃏',
    desc: () => 'Card drafts offer 4 choices instead of 3',
    costs: [120],
  },
  {
    id: 'trove', name: 'Treasure Trove', icon: '💎',
    desc: () => 'Treasure waves offer 3 relic choices instead of 2',
    costs: [150],
  },
];

export function freshMeta(): MetaSave {
  return { v: 1, essence: 0, lifetimeEssence: 0, perks: {}, attunedElement: null };
}

export function loadMeta(): MetaSave {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return freshMeta();
    const m = JSON.parse(raw) as MetaSave;
    if (typeof m.essence !== 'number' || !m.perks) return freshMeta();
    return { ...freshMeta(), ...m };
  } catch {
    return freshMeta(); // node / blocked storage — the Grove simply starts empty
  }
}

export function saveMeta(m: MetaSave): void {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(m));
  } catch {
    /* storage full/blocked — non-fatal */
  }
}

/** Bank essence from a finished run (mutates + persists). */
export function addEssence(m: MetaSave, n: number): void {
  m.essence += n;
  m.lifetimeEssence += n;
  saveMeta(m);
}

export function perkRank(m: MetaSave, id: PerkId): number {
  return m.perks[id] ?? 0;
}

/** Next-rank cost, or null when maxed. */
export function perkCost(m: MetaSave, def: PerkDef): number | null {
  const rank = perkRank(m, def.id);
  return rank >= def.costs.length ? null : def.costs[rank];
}

/** Buy the next rank of a perk; false when maxed or unaffordable. */
export function buyPerk(m: MetaSave, id: PerkId): boolean {
  const def = PERKS.find((p) => p.id === id);
  if (!def) return false;
  const cost = perkCost(m, def);
  if (cost === null || m.essence < cost) return false;
  m.essence -= cost;
  m.perks[id] = perkRank(m, id) + 1;
  saveMeta(m);
  return true;
}

/** Snapshot the owned perks into the flat shape the sim consumes. */
export function perksFromMeta(m: MetaSave): RunPerks {
  const r = (id: PerkId) => perkRank(m, id);
  return {
    startGold: r('deep_pockets') * 10,
    startLives: r('thick_roots') * 2,
    rerollTokens: r('reroll'),
    bountyPct: r('bounty') * 5,
    founderDiscount: r('founder') > 0,
    widerDraft: r('wider_draft') > 0,
    trove: r('trove') > 0,
    attuneElement: r('attune') > 0 ? m.attunedElement : null,
    attunePct: r('attune') * 5,
  };
}

/** Essence earned by a finished run: waves ×2, acts reached ×15, +40 for the win. */
export function essenceForRun(stats: { wavesCleared: number }, act: number, won: boolean): number {
  const actsCleared = won ? 3 : act;
  return stats.wavesCleared * 2 + actsCleared * 15 + (won ? 40 : 0);
}
