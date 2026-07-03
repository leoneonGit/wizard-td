export type ElementId = 'fire' | 'ice' | 'lightning' | 'water' | 'wind' | 'physical';
export type TowerFamily = 'wizard' | 'goblin' | 'archer' | 'tree';
export type StatusId = 'burn' | 'wet' | 'chill' | 'frozen' | 'shock';
export type TargetMode = 'first' | 'last' | 'strong' | 'close';
export type Phase = 'build' | 'wave' | 'draft' | 'relic' | 'actClear' | 'won' | 'lost';

/** Branching wave map: what kind of node the player picks for the next wave. */
export type NodeKind = 'normal' | 'elite' | 'treasure' | 'event';

/** Hooks the hidden-card payload can't express — checked at specific engine sites. */
export type RelicSpecial = 'spawnChill' | 'draft4' | 'hasteEnemies' | 'killLives';

/** Run-wide artifact (Slay-the-Spire relic). `payload` is a hidden card pushed into
 *  draftMods so the whole card engine (mods/fx/reaction/econ) works for free. */
export interface RelicDef {
  id: string;
  name: string;
  desc: string;
  icon: string;
  rarity: 'uncommon' | 'rare';
  payload?: CardDef;
  special?: RelicSpecial[];
}

/** Between-wave choice vignette. `effect` ids are resolved in game/events logic. */
export interface EventChoice {
  label: string;
  desc: string;
  effect: string;
}

export interface EventDef {
  id: string;
  name: string;
  desc: string;
  icon: string;
  choices: EventChoice[];
}

/** Tunable reaction numbers — defaults live in state, buffed by drafted cards. */
export interface ReactionMods {
  conductMult: number;
  shatterMult: number;
  chainBonus: number; // extra chain hops granted by Conduct
  freezeDuration: number;
  evaporateBurst: number;
}

export type Rarity = 'common' | 'uncommon' | 'rare';

/** Slay-the-Spire / Vampire-Survivors style triggered abilities granted by cards. */
export interface ProcFx {
  /** every Nth attack from matching towers deals mult x damage */
  critEveryN?: { n: number; mult: number };
  /** periodic global rhythm: for `duration`s out of every `period`s, matching towers fire at rate*rateMul */
  frenzy?: { period: number; duration: number; rateMul: number };
  /** kills detonate: physical AoE at the corpse */
  onKillExplode?: { damage: number; radius: number };
  /** kills sometimes drop bonus gold */
  onKillGold?: { chance: number; amount: number };
  /** every kill permanently ramps ALL damage this run (capped) */
  onKillStackDamage?: { pct: number; capPct: number };
  /** a burning enemy passes its Burn to a nearby enemy when it dies */
  spreadBurnOnDeath?: boolean;
  /** matching-element damage amplified vs enemies carrying a status */
  bonusVsStatus?: { status: 'rattled' | 'wet' | 'chill' | 'frozen' | 'burn' | 'entangled'; mult: number };
  /** matching-element damage amplified vs near-full-health enemies */
  bonusVsHealthy?: { threshold: number; mult: number };
  /** wave-end interest on held gold: +1 per `per` held, capped */
  interest?: { per: number; cap: number };
}

export interface CardDef {
  id: string;
  name: string;
  desc: string;
  icon: string;
  element: ElementId | 'all';
  /** optional extra scope: card only applies to towers of this family */
  family?: TowerFamily;
  rarity: Rarity;
  /** removed from the pool once picked */
  unique?: boolean;
  /** element/family-wide stat boost */
  mod?: StatMods;
  reaction?: Partial<ReactionMods>;
  econ?: { goldNow?: number; bountyBonus?: number; towerDiscountPct?: number };
  /** triggered ability */
  fx?: ProcFx;
}

export interface RunStats {
  kills: number;
  leaks: number;
  wavesCleared: number;
  dmgByElement: Record<ElementId, number>;
  reactions: { conduct: number; shatter: number; evaporate: number; frozen: number };
  cardIds: string[];
}

export interface WaveModifier {
  id: string;
  name: string;
  desc: string;
  speedMult?: number;
  hpMult?: number;
  immune?: StatusId[];
  gustImmune?: boolean;
  /** bounty multiplier for kills during this wave (Storm Blessing event) */
  bountyMult?: number;
}

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
  /** boss armor: only PHYSICAL damage chips it; all other damage is ~nothing until it breaks */
  armor?: number;
  /** statuses this enemy is simply born immune to (merged with elite immunities at spawn) */
  innateImmune?: StatusId[];
  /** enemy ids spawned when this boss's armor shatters */
  armorBreakSpawns?: string[];
  /** carrier: enemy ids released at the corpse when this unit dies (War Wagon bursts) */
  deathSpawns?: string[];
  /** carrier: units dropped periodically WHILE rolling (Siege Tower drip) */
  dropSpawns?: { type: string; count: number; period: number };
  /** self-heal, as a fraction of maxHp per second (Troll) — chip damage stops working */
  regen?: number;
  /** support aura: heal pulses or a haste field for nearby allies */
  aura?: { kind: 'heal' | 'haste'; radius: number; power: number; period?: number };
  /** Wraith: untargetable for `duration`s out of every `period`s */
  phase?: { period: number; duration: number };
  /** lives lost if this reaches the gate (default: boss 5, else 1) — carriers hurt */
  leakCost?: number;
  /** rendered as a procedural vehicle instead of a rigged character */
  vehicle?: 'wagon' | 'tower';
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
  rattlePct?: number;    // flat add (0.25 -> 0.35 etc)
  entangleDur?: number;  // flat add (sec)
  rootSlow?: number;     // flat add (rootgrasp slow strength)
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
  /** terrain rule: ground wizards can't stand in water and vice versa. 'any' (generic
   *  shells only) may be placed on either — where you stand gates the specialize draw. */
  placement: 'ground' | 'water' | 'any';
  /** only attacks while a drifting cloud is within CLOUD_RANGE */
  needsCloud?: boolean;
  /** which tower family this specialization belongs to (Wizard/Goblin/...) */
  family: TowerFamily;
  /** true for the shop-purchasable "unspecialized" shell — never actually fires */
  isGeneric?: boolean;
  /** radial support pulse instead of a normal targeted attack (Water/Wind/Gong) */
  auraKind?: 'tide' | 'gust' | 'rattle';
  /** Ballesta: bolts fly in a straight line, hitting every enemy they pass through */
  pierce?: boolean;
  /** Orc Trapper: hits root the target in place (entangled status) */
  entangles?: boolean;
  /** Rootgrasp Tree: instant eruption at the target's feet (no projectile), small area */
  groundAttack?: boolean;
  /** evolved super-form: excluded from specialize draws, reached via Evolve only */
  isEvolved?: boolean;
  /** built-in triggered ability (evolved forms) — scanned by the proc engine like a card */
  innateFx?: ProcFx;
  /** flat stat tweaks applied on top of the element/aura bases (evolved-form tuning) */
  baseMods?: StatMods;
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

/** Per-map look: ground palette + lighting/atmosphere. All colors are CSS hex strings. */
export interface MapTheme {
  grassA: string;
  grassB: string;
  road: string;
  roadEdge: string;
  water: string;
  shore: string;
  /** small decorative scatter painted on the ground */
  scatter: 'flowers' | 'reeds' | 'ash';
  fog: string;
  hemiSky: string;
  hemiGround: string;
  sun: string;
  sunIntensity: number;
  exposure: number;
}

export interface MapDef {
  id: string;
  name: string;
  /** ground palette + lighting mood; falls back to the vale look when absent */
  theme?: MapTheme;
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
  /** Gong Goblin debuff: extra % damage taken from ALL sources */
  rattled?: { t: number; pct: number };
  /** Orc Trapper bolas: rooted in place — pure CC, does NOT interact with Freeze/Shatter */
  entangled?: { t: number };
  /** Rootgrasp Tree: plain physical slow — deliberately separate from Chill (no Freeze/Shatter feed) */
  snared?: { t: number; pct: number };
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
  /** entangle immunity window (sec remaining) — prevents permanent rooting */
  entangleCd?: number;
  /** remaining boss armor — see EnemyDef.armor */
  armorHp?: number;
  /** carrier drip: seconds until the next dropSpawns release */
  dropCd?: number;
  /** wraith phase clock (sec, cycles def.phase.period) */
  phaseT?: number;
  /** true while untargetable — towers skip this enemy entirely */
  phased?: boolean;
  /** shaman heal-pulse cooldown */
  auraCd?: number;
  /** transient drummer haste (recomputed every tick; 1 = no drummer nearby) */
  hasteMul?: number;
  /** elite-wave status immunities */
  immunities?: StatusId[];
  gustImmune?: boolean;
  /** elite-wave speed multiplier */
  speedMult?: number;
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
  rattlePct: number; // gong: extra damage-taken debuff strength
  entangleDur: number; // bolas root duration (sec)
  rootSlow: number; // rootgrasp slow strength
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
  /** lifetime attack counter — drives "every Nth attack" proc cards */
  attackCount: number;
  /** cloud mage with no cloud in range — cannot attack, shown grayed */
  becalmed?: boolean;
  /** true until the player chooses a specialization; def is a zero-stat generic shell */
  pendingSpecialize?: boolean;
  /** which family this slot belongs to (persists across the def swap on specialize) */
  family: TowerFamily;
  /** pre-rolled at placement time so the modal is deterministic/seeded */
  specializeOptions?: WizardDef[];
}

/** A drifting cloud (sim entity — cloud mages only work near one). */
export interface Cloud {
  pathIdx: number;
  dist: number;
  x: number;
  y: number;
}

/** What a projectile LOOKS like — purely cosmetic, set at fire time. */
export type ProjectileVisual = 'orb' | 'rock' | 'stick' | 'arrow' | 'bolt' | 'needle';

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
  /** renderer mesh kind; defaults to 'orb' (mage bolts) */
  visual?: ProjectileVisual;
  /** thrown projectiles (rock/stick) lob in a parabola — spawn point for arc progress */
  sx?: number;
  sy?: number;
  /** ballesta bolt: flies a fixed line, damaging each enemy it passes exactly once */
  pierce?: {
    dirX: number;
    dirY: number;
    traveled: number;
    maxDist: number;
    hitIds: number[];
  };
}
