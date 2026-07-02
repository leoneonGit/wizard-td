export type ElementId = 'fire' | 'ice' | 'lightning' | 'water' | 'wind';
export type StatusId = 'burn' | 'wet' | 'chill' | 'frozen' | 'shock';
export type TargetMode = 'first' | 'last' | 'strong' | 'close';
export type Phase = 'build' | 'wave' | 'won' | 'lost';

// ---------- data definitions (content, not engine) ----------

export interface EnemyDef {
  id: string;
  name: string;
  hp: number;
  speed: number; // px/s
  radius: number;
  bounty: number;
  color: string;
  /** damage multiplier per element; missing = 1.0 */
  resist: Partial<Record<ElementId, number>>;
  boss?: boolean;
}

export interface StatMods {
  damage?: number;       // flat add
  rateMul?: number;      // attack interval multiplier (<1 = faster)
  range?: number;        // flat add
  splash?: number;       // flat add to splash radius
  chains?: number;       // flat add to chain count
  burnDps?: number;      // flat add
  burnDuration?: number; // flat add
  chillPct?: number;     // flat add (0.3 -> 0.45 etc)
  wetDuration?: number;  // flat add
  projSpeed?: number;    // flat add
  soakSlow?: number;     // flat add
  knockback?: number;    // flat add (px)
}

export interface UpgradeTier {
  name: string;
  cost: number;
  desc: string;
  mod: StatMods;
}

export interface UpgradePath {
  name: string;
  tiers: UpgradeTier[];
}

export interface WizardDef {
  id: string;
  name: string;
  element: ElementId;
  cost: number;
  desc: string;
  range: number;
  rate: number; // seconds between attacks
  damage: number;
  projSpeed: number; // px/s; 0 = instant (beam or aura)
  splash: number;    // 0 = single target
  chains: number;    // lightning: extra targets
  chainFalloff: number; // damage multiplier per hop
  color: string;
  icon: string;
  /** terrain rule: ground wizards can't stand in water and vice versa */
  placement: 'ground' | 'water';
  /** only attacks while a drifting cloud is within CLOUD_RANGE */
  needsCloud?: boolean;
  upgrades: [UpgradePath, UpgradePath];
}

export interface WaveGroup {
  type: string;   // EnemyDef id
  count: number;
  gap: number;    // seconds between spawns
  delay: number;  // seconds after wave start
}

export type WaveDef = WaveGroup[];

export interface PropDef {
  model: string; // key into the prop model registry
  x: number; // board px
  y: number;
  rot: number; // radians
  scale: number;
}

export interface MapDef {
  id: string;
  name: string;
  /** waypoints in CELL coordinates; first/last should sit off-board for clean entry/exit */
  waypoints: [number, number][];
  /** water cells (cx, cy) — only water wizards may build here */
  water?: [number, number][];
  /** cloud drift loops, CELL coordinates; one cloud spawns per path */
  cloudPaths?: [number, number][][];
  /** decorative props */
  props?: PropDef[];
}

// ---------- runtime entities ----------

export interface Statuses {
  burn?: { t: number; dps: number };
  wet?: { t: number };
  chill?: { t: number; pct: number; stacks: number };
  frozen?: { t: number };
  shock?: { t: number };
}

export interface Enemy {
  id: number;
  def: EnemyDef;
  hp: number;
  maxHp: number;
  dist: number; // distance traveled along track (px)
  x: number;
  y: number;
  statuses: Statuses;
  wobble: number; // cosmetic phase offset
  animT: number; // animation clock (sec), advances with movement speed factor
  angle: number; // current path heading (radians)
  hitFlash: number; // seconds of white flash remaining after taking a hit
  /** wind-gust immunity window (sec remaining) — prevents knockback stunlock */
  gustCd?: number;
}

export interface WizardStats {
  range: number;
  rate: number;
  damage: number;
  projSpeed: number;
  splash: number;
  chains: number;
  chainFalloff: number;
  burnDps: number;
  burnDuration: number;
  chillPct: number;
  wetDuration: number;
  soakSlow: number; // water tide slow strength
  knockback: number; // wind gust pushback (px)
}

export interface Wizard {
  id: number;
  def: WizardDef;
  cx: number; // cell
  cy: number;
  x: number; // pixel center
  y: number;
  cooldown: number;
  mode: TargetMode;
  aim: number; // radians, current facing
  tiers: [number, number]; // owned tiers per upgrade path
  invested: number; // total gold spent (for sell refund)
  stats: WizardStats; // cached, recomputed on upgrade
  recoil: number; // cast animation timer
  /** cloud mage with no cloud in range — cannot attack, shown grayed */
  becalmed?: boolean;
}

/** A drifting cloud (sim entity — cloud mages only work near one). */
export interface Cloud {
  pathIdx: number;
  dist: number;
  x: number;
  y: number;
}

export interface Projectile {
  id: number;
  element: ElementId;
  x: number;
  y: number;
  speed: number;
  damage: number;
  splash: number;
  targetId: number;
  tx: number; // last known target pos
  ty: number;
  wizardId: number;
}
