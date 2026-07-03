/** Run persistence: snapshot at build-phase boundaries, restore on boot. */
import { makeRng } from '../engine/rng';
import { CARDS } from '../data/cards';
import { RELICS } from '../data/relics';
import { WIZARDS } from '../data/wizards';
import { loadMap } from './mapio';
import { applyCard, applyRelic, computeStats, createGame, makeWizard, type GameState } from './state';
import type { RunStats, TargetMode } from './types';

const LS_KEY = 'wizardtd.run';

interface WizardSave {
  defId: string;
  cx: number;
  cy: number;
  tiers: [number, number];
  mode: TargetMode;
  invested: number;
}

export interface RunSave {
  mapId: string;
  seed: number;
  gold: number;
  lives: number;
  round: number;
  /** campaign act — the map to restore onto (pre-campaign saves default to 0) */
  act?: number;
  lastEliteRound: number;
  cardIds: string[];
  wizards: WizardSave[];
  stats: RunStats;
  /** Soul Harvest ramp — permanent within the run, so it must survive a reload */
  killStackPct?: number;
  relicIds?: string[];
  seenEvents?: string[];
}

export function saveRun(state: GameState): void {
  if (state.phase === 'won' || state.phase === 'lost') return;
  const save: RunSave = {
    mapId: state.map.id,
    seed: state.seed,
    gold: state.gold,
    lives: state.lives,
    round: state.round,
    act: state.act,
    lastEliteRound: state.lastEliteRound,
    cardIds: state.draftMods.map((c) => c.id),
    wizards: state.wizards.map((w) => ({
      defId: w.def.id,
      cx: w.cx,
      cy: w.cy,
      tiers: [...w.tiers] as [number, number],
      mode: w.mode,
      invested: w.invested,
    })),
    stats: state.stats,
    killStackPct: state.killStackPct,
    relicIds: state.relics.map((r) => r.id),
    seenEvents: [...state.seenEvents],
  };
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(save));
  } catch {
    /* storage full/blocked — non-fatal */
  }
}

export function loadRunSave(): RunSave | null {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    const save = JSON.parse(raw) as RunSave;
    return save.round > 0 || save.wizards.length > 0 ? save : null;
  } catch {
    return null;
  }
}

export function clearRunSave(): void {
  try {
    localStorage.removeItem(LS_KEY);
  } catch {
    /* ignore */
  }
}

/** Rebuild a GameState from a snapshot (same map required). */
export function restoreRun(save: RunSave): GameState | null {
  const map = loadMap(save.mapId);
  if (!map) return null;
  const state = createGame(map, save.seed);

  // replay drafted cards (rebuilds reaction/bounty/discount state)
  for (const id of save.cardIds) {
    const card = CARDS.find((c) => c.id === id);
    if (card) applyCard(state, card);
  }

  // replay relics (pushes their hidden-card payloads too)
  for (const id of save.relicIds ?? []) {
    const relic = RELICS.find((r) => r.id === id);
    if (relic) applyRelic(state, relic);
  }
  state.seenEvents = [...(save.seenEvents ?? [])];

  // rebuild towers
  for (const ws of save.wizards) {
    const def = WIZARDS[ws.defId];
    if (!def) continue;
    const w = makeWizard(state, def, ws.cx, ws.cy);
    w.tiers = ws.tiers;
    w.mode = ws.mode;
    w.invested = ws.invested;
    w.stats = computeStats(def, w.tiers, state.draftMods);
    state.wizards.push(w);
  }

  // authoritative scalars come last (cards may have granted goldNow etc.)
  state.gold = save.gold;
  state.lives = save.lives;
  state.round = save.round;
  state.lastEliteRound = save.lastEliteRound;
  state.stats = save.stats;
  state.killStackPct = save.killStackPct ?? 0;
  state.act = save.act ?? 0;
  // decorrelate future elite/draft rolls from the fresh-boot sequence
  state.rng = makeRng(save.seed + save.round * 101);
  return state;
}
