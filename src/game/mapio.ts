import { COLS, ROWS } from '../engine/grid';
import { MAPS } from '../data/maps';
import { assetUrl } from '../engine/assetUrl';
import type { MapDef } from './types';

/** Prop model registry — files under public/models/props/. height = world units tall. */
export const PROP_MODELS: Record<string, { file: string; height: number; label: string }> = {
  tree_a: { file: assetUrl('models/props/tree_single_A.gltf'), height: 1.6, label: 'Tree' },
  tree_b: { file: assetUrl('models/props/tree_single_B.gltf'), height: 1.9, label: 'Pine' },
  rock_a: { file: assetUrl('models/props/rock_single_A.gltf'), height: 0.6, label: 'Rock' },
  rock_c: { file: assetUrl('models/props/rock_single_C.gltf'), height: 0.8, label: 'Boulder' },
  barrel: { file: assetUrl('models/props/barrel_large.glb'), height: 0.9, label: 'Barrel' },
  crates: { file: assetUrl('models/props/box_stacked.glb'), height: 1.1, label: 'Crates' },
  chest: { file: assetUrl('models/props/chest.glb'), height: 0.7, label: 'Chest' },
  barrels: { file: assetUrl('models/props/barrel_small_stack.glb'), height: 0.9, label: 'Barrels' },
};

const LS_KEY = 'wizardtd.maps';

function customMaps(): Record<string, MapDef> {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) ?? '{}') as Record<string, MapDef>;
  } catch {
    return {};
  }
}

export function listMaps(): { id: string; name: string; custom: boolean }[] {
  const builtin = Object.values(MAPS).map((m) => ({ id: m.id, name: m.name, custom: false }));
  const custom = Object.values(customMaps()).map((m) => ({ id: m.id, name: m.name, custom: true }));
  return [...builtin, ...custom];
}

export function loadMap(id: string): MapDef | undefined {
  return MAPS[id] ?? customMaps()[id];
}

export function saveCustomMap(map: MapDef): void {
  const all = customMaps();
  all[map.id] = map;
  localStorage.setItem(LS_KEY, JSON.stringify(all));
}

export function deleteCustomMap(id: string): void {
  const all = customMaps();
  delete all[id];
  localStorage.setItem(LS_KEY, JSON.stringify(all));
}

/** Returns a list of problems; empty = valid. */
export function validateMap(map: MapDef): string[] {
  const issues: string[] = [];
  if (!map.name?.trim()) issues.push('Map needs a name.');
  if (!map.waypoints || map.waypoints.length < 2) {
    issues.push('Road needs at least 2 waypoints.');
    return issues;
  }
  const [sx] = map.waypoints[0];
  const [ex, ey] = map.waypoints[map.waypoints.length - 1];
  const offBoard = (x: number, y: number) => x < 0 || y < 0 || x > COLS || y > ROWS;
  if (!offBoard(sx, map.waypoints[0][1])) issues.push('Road must START off the board edge.');
  if (!offBoard(ex, ey)) issues.push('Road must END off the board edge.');

  // water may not sit under the road ribbon
  const water = new Set((map.water ?? []).map(([cx, cy]) => `${cx},${cy}`));
  if (water.size > 0) {
    for (let i = 1; i < map.waypoints.length; i++) {
      const [ax, ay] = map.waypoints[i - 1];
      const [bx, by] = map.waypoints[i];
      const steps = Math.ceil(Math.hypot(bx - ax, by - ay) * 4);
      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const cx = Math.floor(ax + (bx - ax) * t);
        const cy = Math.floor(ay + (by - ay) * t);
        if (water.has(`${cx},${cy}`)) {
          issues.push('Road crosses water — move the road or erase that water.');
          return issues;
        }
      }
    }
  }
  for (const path of map.cloudPaths ?? []) {
    if (path.length < 2) issues.push('A cloud path needs at least 2 points.');
  }
  for (const p of map.props ?? []) {
    if (!PROP_MODELS[p.model]) issues.push(`Unknown prop model "${p.model}".`);
  }
  return issues;
}

export function exportMapJson(map: MapDef): string {
  return JSON.stringify(map, null, 2);
}

export function importMapJson(json: string): MapDef {
  const map = JSON.parse(json) as MapDef;
  if (!map.id) map.id = `custom_${Date.now().toString(36)}`;
  const issues = validateMap(map);
  if (issues.length > 0) throw new Error('Invalid map: ' + issues.join(' '));
  return map;
}
