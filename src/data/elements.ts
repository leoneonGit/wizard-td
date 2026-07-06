import type { ElementId } from '../game/types';

export interface ElementInfo {
  id: ElementId;
  name: string;
  color: string;      // primary
  glow: string;       // particle/glow tint
}

export const ELEMENTS: Record<ElementId, ElementInfo> = {
  fire: { id: 'fire', name: 'Fire', color: '#ff6b35', glow: '#ffb163' },
  ice: { id: 'ice', name: 'Ice', color: '#5bc8f5', glow: '#b3ecff' },
  lightning: { id: 'lightning', name: 'Lightning', color: '#c77dff', glow: '#e8c3ff' },
  water: { id: 'water', name: 'Water', color: '#3a86ff', glow: '#8fc0ff' },
  wind: { id: 'wind', name: 'Wind', color: '#b8d8d0', glow: '#e6f7f1' },
  // goblin damage type: always unresisted (no enemy ever sets resist.physical)
  physical: { id: 'physical', name: 'Physical', color: '#a08060', glow: '#d4b896' },
  // from beyond the sky: no reactions, no resists — but armor still shrugs it off
  void: { id: 'void', name: 'Void', color: '#e5383b', glow: '#ff7b8a' },
};
