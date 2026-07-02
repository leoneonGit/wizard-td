import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { assetUrl } from '../engine/assetUrl';
import type { ElementId } from '../game/types';

export interface CharacterAsset {
  scene: THREE.Group;
  clips: THREE.AnimationClip[];
  /** resolved clip names */
  idle: string;
  walk: string;
  attack: string;
  death: string | null;
  cheer: string | null;
  /** uniform scale that normalizes model height to 1 world unit */
  unitScale: number;
}

const MODELS: Record<string, string> = {
  mage: assetUrl('models/Mage.glb'),
  knight: assetUrl('models/Knight.glb'),
  skel_mage: assetUrl('models/Skeleton_Mage.glb'),
  skel_minion: assetUrl('models/Skeleton_Minion.glb'),
  skel_rogue: assetUrl('models/Skeleton_Rogue.glb'),
  skel_warrior: assetUrl('models/Skeleton_Warrior.glb'),
};

const assets = new Map<string, CharacterAsset>();

function pickClip(clips: THREE.AnimationClip[], patterns: RegExp[], fallback: string): string {
  for (const p of patterns) {
    const hit = clips.find((c) => p.test(c.name));
    if (hit) return hit.name;
  }
  return clips[0]?.name ?? fallback;
}

function pickClipOrNull(clips: THREE.AnimationClip[], patterns: RegExp[]): string | null {
  for (const p of patterns) {
    const hit = clips.find((c) => p.test(c.name));
    if (hit) return hit.name;
  }
  return null;
}

export async function loadCharacters(): Promise<void> {
  const loader = new GLTFLoader();
  await Promise.all(
    Object.entries(MODELS).map(async ([key, url]) => {
      const gltf = await loader.loadAsync(url);
      const scene = gltf.scene;
      scene.traverse((o) => {
        if ((o as THREE.Mesh).isMesh) {
          o.castShadow = true;
          o.frustumCulled = false; // skinned meshes misbehave with tight culling
        }
      });
      const box = new THREE.Box3().setFromObject(scene);
      const height = Math.max(0.001, box.max.y - box.min.y);
      const clips = gltf.animations;
      assets.set(key, {
        scene,
        clips,
        idle: pickClip(clips, [/^idle$/i, /idle/i], 'Idle'),
        walk: pickClip(clips, [/^walking_a$/i, /walking/i, /walk/i, /running/i], 'Walking_A'),
        attack: pickClip(
          clips,
          [/spellcast.*shoot/i, /spellcast/i, /cast/i, /attack/i, /melee/i],
          'Attack',
        ),
        death: pickClipOrNull(clips, [/^death_a$/i, /death/i]),
        cheer: pickClipOrNull(clips, [/cheer/i]),
        unitScale: 1 / height,
      });
      console.log(`[3d] ${key}: ${clips.length} clips (idle=${assets.get(key)!.idle}, walk=${assets.get(key)!.walk}, attack=${assets.get(key)!.attack})`);
    }),
  );
}

export function getAsset(key: string): CharacterAsset {
  const a = assets.get(key);
  if (!a) throw new Error(`asset not loaded: ${key}`);
  return a;
}

/** Mage-specific styling: reshape the named Mage_Hat node, toggle held props. */
export interface MageStyle {
  hat: { sx: number; sy: number; sz: number; rotZ?: number; rotX?: number };
  spellbook?: boolean; // show the open spellbook in the left hand
  hatEmissive?: THREE.Color;
}

/** Per-unit model mapping: model key, height (world units), tint. */
export interface UnitLook {
  model: string;
  height: number;
  tint?: THREE.Color;
  tintStrength?: number;
  emissive?: THREE.Color;
  mage?: MageStyle;
}

export const WIZARD_LOOKS: Record<ElementId, UnitLook> = {
  fire: {
    model: 'mage', height: 1.45,
    tint: new THREE.Color('#ff6a1e'), tintStrength: 0.75,
    mage: {
      hat: { sx: 0.78, sy: 1.55, sz: 0.78, rotX: -0.18 }, // tall, narrow, swept back
      hatEmissive: new THREE.Color('#ff5500'),
    },
  },
  ice: {
    model: 'mage', height: 1.45,
    tint: new THREE.Color('#5bc8f5'), tintStrength: 0.55,
    mage: {
      hat: { sx: 1.4, sy: 0.62, sz: 1.4 }, // wide-brimmed, squat
      spellbook: true, // scholarly frost mage reads from an open tome
      hatEmissive: new THREE.Color('#7fd8ff'),
    },
  },
  lightning: {
    model: 'mage', height: 1.45,
    tint: new THREE.Color('#b06bff'), tintStrength: 0.55,
    mage: {
      hat: { sx: 0.92, sy: 1.35, sz: 0.92, rotZ: 0.34 }, // tall and crooked
      hatEmissive: new THREE.Color('#d9a8ff'),
    },
  },
  water: {
    model: 'mage', height: 1.45,
    tint: new THREE.Color('#2f7fd4'), tintStrength: 0.6,
    mage: {
      hat: { sx: 1.15, sy: 0.85, sz: 1.15, rotX: 0.35 }, // brim drooped over the eyes
      hatEmissive: new THREE.Color('#6db4ff'),
    },
  },
  wind: {
    model: 'mage', height: 1.45,
    tint: new THREE.Color('#bcd9ce'), tintStrength: 0.5,
    mage: {
      hat: { sx: 1.22, sy: 1.0, sz: 1.22 }, // puffy, cloud-like
      hatEmissive: new THREE.Color('#eafff5'),
    },
  },
};

export const ENEMY_LOOKS: Record<string, UnitLook> = {
  grunt: { model: 'skel_minion', height: 1.05, tint: new THREE.Color('#7da35c'), tintStrength: 0.35 },
  runner: { model: 'skel_rogue', height: 1.1, tint: new THREE.Color('#d9a648'), tintStrength: 0.35 },
  knight: { model: 'knight', height: 1.25, tint: new THREE.Color('#8d99ae'), tintStrength: 0.25 },
  shade: {
    model: 'skel_mage', height: 1.15,
    tint: new THREE.Color('#b35442'), tintStrength: 0.45,
    emissive: new THREE.Color('#ff5522'),
  },
  golem: { model: 'skel_warrior', height: 2.6, tint: new THREE.Color('#3d2f5e'), tintStrength: 0.6 },
  golemling: { model: 'skel_warrior', height: 1.45, tint: new THREE.Color('#7a68a6'), tintStrength: 0.5 },
};
