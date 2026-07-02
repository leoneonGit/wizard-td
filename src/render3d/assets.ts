import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { assetUrl } from '../engine/assetUrl';

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
  goblin: assetUrl('models/Barbarian.glb'), // stocky build reads well as goblin-sized once tinted
  ranger: assetUrl('models/Rogue_Hooded.glb'), // hooded archer — elf longbow + archer recruits
  skel_mage: assetUrl('models/Skeleton_Mage.glb'),
  skel_minion: assetUrl('models/Skeleton_Minion.glb'),
  skel_rogue: assetUrl('models/Skeleton_Rogue.glb'),
  skel_warrior: assetUrl('models/Skeleton_Warrior.glb'),
};

/** Static prop pieces grafted onto rigged characters (ent canopies, thrown rock). */
const ATTACH_MODELS: Record<string, string> = {
  canopy_a: assetUrl('models/props/tree_single_A.gltf'),
  canopy_b: assetUrl('models/props/tree_single_B.gltf'),
  rock: assetUrl('models/props/rock_single_A.gltf'),
};

/** Per-model attack-clip search order. Default favors the mage's spellcast gesture;
 *  the goblin model shares the same shared KayKit anim library but reads better
 *  throwing/swinging than "casting a spell"; archers should draw and loose. */
const ATTACK_CLIP_PRIORITY: Record<string, RegExp[]> = {
  default: [/spellcast.*shoot/i, /spellcast/i, /cast/i, /attack/i, /melee/i],
  goblin: [/^throw$/i, /throw/i, /melee.*attack/i, /attack/i],
  ranger: [/2h_ranged.*shoot/i, /ranged.*shoot/i, /ranged/i, /shoot/i, /throw/i, /attack/i],
  knight: [/1h_ranged.*shoot/i, /ranged.*shoot/i, /ranged/i, /shoot/i, /throw/i, /attack/i],
};

const assets = new Map<string, CharacterAsset>();
const attachments = new Map<string, { scene: THREE.Group; rawHeight: number }>();

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
          ATTACK_CLIP_PRIORITY[key] ?? ATTACK_CLIP_PRIORITY.default,
          'Attack',
        ),
        death: pickClipOrNull(clips, [/^death_a$/i, /death/i]),
        cheer: pickClipOrNull(clips, [/cheer/i]),
        unitScale: 1 / height,
      });
      console.log(`[3d] ${key}: ${clips.length} clips (idle=${assets.get(key)!.idle}, walk=${assets.get(key)!.walk}, attack=${assets.get(key)!.attack})`);
    }),
  );
  // attachment props (non-fatal if any fails — units just render without the garnish)
  await Promise.all(
    Object.entries(ATTACH_MODELS).map(async ([key, url]) => {
      try {
        const gltf = await loader.loadAsync(url);
        gltf.scene.traverse((o) => {
          if ((o as THREE.Mesh).isMesh) o.castShadow = true;
        });
        const box = new THREE.Box3().setFromObject(gltf.scene);
        attachments.set(key, { scene: gltf.scene, rawHeight: Math.max(0.001, box.max.y - box.min.y) });
      } catch (err) {
        console.warn(`attachment prop failed to load: ${key}`, err);
      }
    }),
  );
}

export function getAsset(key: string): CharacterAsset {
  const a = assets.get(key);
  if (!a) throw new Error(`asset not loaded: ${key}`);
  return a;
}

export function getAttachment(key: string): { scene: THREE.Group; rawHeight: number } | undefined {
  return attachments.get(key);
}

/** Mage-specific styling: reshape the named Mage_Hat node, toggle held props. */
export interface MageStyle {
  hat: { sx: number; sy: number; sz: number; rotZ?: number; rotX?: number };
  spellbook?: boolean; // show the open spellbook in the left hand
  hatEmissive?: THREE.Color;
}

/** Goblin-specific styling: the Barbarian rig's round shield doubles nicely as a gong. */
export interface GoblinStyle {
  showShield?: boolean; // Gong Goblin only — the shield reads as a hand-carried gong
  hatEmissive?: THREE.Color;
}

/** Ent styling: a rigged character turned walking tree — LotR-style tree-folk.
 *  All gear is stripped, the body is tinted bark, and a leafy canopy is grafted
 *  onto the head bone so it sways with the idle animation. */
export interface EntStyle {
  canopy: 'canopy_a' | 'canopy_b'; // which tree crown to graft on
  canopyTint?: THREE.Color; // foliage color per subtype
  canopyScale?: number; // canopy height as a fraction of unit height (default 0.9)
  rock?: boolean; // Boulder Ent carries a rock, ready to hurl
}

/** Per-unit model mapping: model key, height (world units), tint. */
export interface UnitLook {
  model: string;
  height: number;
  tint?: THREE.Color;
  tintStrength?: number;
  emissive?: THREE.Color;
  mage?: MageStyle;
  goblin?: GoblinStyle;
  ent?: EntStyle;
  /** hide any node whose name matches (strip held weapons the kit doesn't use) */
  hideRe?: RegExp;
  /** translucent, glossy "made of water" materials (Water Mage) */
  watery?: boolean;
}

/** Keyed by WizardDef id (not element — multiple defs, e.g. goblins, can share an element). */
export const WIZARD_LOOKS: Record<string, UnitLook> = {
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
    tint: new THREE.Color('#26c2e8'), tintStrength: 0.55,
    watery: true, // translucent liquid look — clearly distinct from opaque Frost
    mage: {
      hat: { sx: 1.15, sy: 0.85, sz: 1.15, rotX: 0.35 }, // brim drooped over the eyes
      hatEmissive: new THREE.Color('#7fe8ff'),
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
  // unspecialized shells — neutral, no styling (a pending-icon overlay marks them in 3D)
  generic_wizard: { model: 'mage', height: 1.45, tint: new THREE.Color('#8a8494'), tintStrength: 0.5 },
  generic_goblin: { model: 'goblin', height: 1.15, tint: new THREE.Color('#8a8494'), tintStrength: 0.55 },

  // goblins — stocky Barbarian rig, green-tinted, differentiated by accent color + props
  slingshot: {
    model: 'goblin', height: 1.15,
    tint: new THREE.Color('#7da35c'), tintStrength: 0.6,
    goblin: { hatEmissive: new THREE.Color('#c9e08a') },
  },
  dynamite: {
    model: 'goblin', height: 1.15,
    tint: new THREE.Color('#8a9c4a'), tintStrength: 0.6,
    emissive: new THREE.Color('#ff6a1e'), // faint ember glow — always sitting on a lit fuse
    goblin: { hatEmissive: new THREE.Color('#ffb163') },
  },
  gong: {
    model: 'goblin', height: 1.15,
    tint: new THREE.Color('#6a9c6a'), tintStrength: 0.6,
    goblin: { showShield: true, hatEmissive: new THREE.Color('#f4d98a') }, // shield doubles as the gong
  },

  // archers — hooded ranger rig for the elves, knight for the human arbalist,
  // war-painted Barbarian for the orc trapper
  generic_archer: {
    model: 'ranger', height: 1.4,
    tint: new THREE.Color('#8a8494'), tintStrength: 0.5,
    hideRe: /knife|dagger|sword|crossbow/i,
  },
  longbow: {
    model: 'ranger', height: 1.5,
    tint: new THREE.Color('#4e8f4e'), tintStrength: 0.55, // forest-green elf
    emissive: new THREE.Color('#3fae5a'),
    hideRe: /knife|dagger|sword|crossbow/i,
  },
  ballesta: {
    model: 'knight', height: 1.35,
    tint: new THREE.Color('#5b7fc9'), tintStrength: 0.5, // indigo man-at-arms
    hideRe: /sword|shield/i,
  },
  bolas: {
    model: 'goblin', height: 1.3,
    tint: new THREE.Color('#4a5548'), tintStrength: 0.65, // dark slate war-paint orc
    goblin: { hatEmissive: new THREE.Color('#c8d6b0') },
  },

  // trees — ENTS: bark-tinted rigged bodies with grafted canopies. They sway,
  // turn to face their prey, and hurl with a full arm swing.
  generic_tree: {
    model: 'goblin', height: 1.1,
    tint: new THREE.Color('#6d6357'), tintStrength: 0.8,
    ent: { canopy: 'canopy_a', canopyScale: 0.75, canopyTint: new THREE.Color('#7a8a6a') },
  },
  rootgrasp: {
    model: 'goblin', height: 1.7,
    tint: new THREE.Color('#5e4630'), tintStrength: 0.85, // dark ancient bark
    ent: { canopy: 'canopy_a', canopyTint: new THREE.Color('#3f6b33') },
  },
  boulder: {
    model: 'goblin', height: 1.95,
    tint: new THREE.Color('#6b543c'), tintStrength: 0.85, // broad old-growth trunk
    ent: { canopy: 'canopy_a', canopyScale: 1.0, canopyTint: new THREE.Color('#556b3a'), rock: true },
  },
  thornspitter: {
    model: 'goblin', height: 1.35,
    tint: new THREE.Color('#55663d'), tintStrength: 0.8, // green sappy young wood
    ent: { canopy: 'canopy_b', canopyScale: 0.8, canopyTint: new THREE.Color('#6fcf5f') },
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
