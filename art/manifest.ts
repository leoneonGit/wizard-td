/**
 * Single source of truth for every generated sprite.
 * key        -> atlas frame name (renderer looks these up)
 * fragment   -> unit-specific prompt text (style prefix/suffix added by the tool)
 * size       -> normalized output size in px (square)
 * anchor     -> pivot within the frame (0..1), where the sprite "stands"
 * seed       -> fixed per-asset for reproducible regeneration
 */
export interface SpriteEntry {
  key: string;
  fragment: string;
  size: number;
  anchor: { x: number; y: number };
  seed: number;
}

export const STYLE_PREFIX =
  'stylized hand-painted cartoon game sprite, 3/4 top-down view, chunky friendly proportions, ' +
  'clean dark brown outlines, soft painterly shading, single light source top-left, vibrant ' +
  'saturated colors, transparent background, single centered subject, mobile tower defense art style, ';

export const STYLE_SUFFIX = ', no text, no watermark, no ground shadow, game asset';

export const MANIFEST: SpriteEntry[] = [
  // ---- wizards ----
  {
    key: 'wizard_fire',
    fragment:
      'small fire mage wizard with oversized pointed crimson-orange hat, orange robe with ember trim, ' +
      'holding a wooden staff topped with a glowing fire orb, warm orange palette (#ff6b35)',
    size: 256,
    anchor: { x: 0.5, y: 0.68 },
    seed: 1101,
  },
  {
    key: 'wizard_ice',
    fragment:
      'small frost mage wizard with oversized pointed icy-blue hat dusted with snow, pale blue robe with ' +
      'fur trim, holding a crystalline staff topped with a glowing ice shard, cool blue palette (#5bc8f5)',
    size: 256,
    anchor: { x: 0.5, y: 0.68 },
    seed: 1102,
  },
  {
    key: 'wizard_lightning',
    fragment:
      'small storm mage wizard with oversized pointed violet hat crackling with static, purple robe with ' +
      'silver trim, holding a twisted staff topped with a glowing lightning orb, violet palette (#c77dff)',
    size: 256,
    anchor: { x: 0.5, y: 0.68 },
    seed: 1103,
  },

  // ---- enemies ----
  {
    key: 'enemy_grunt',
    fragment:
      'small round goblin grunt creature, mossy green skin (#7da35c), stubby legs, tiny underbite fangs, ' +
      'mischievous big eyes, unarmored',
    size: 256,
    anchor: { x: 0.5, y: 0.6 },
    seed: 2101,
  },
  {
    key: 'enemy_runner',
    fragment:
      'small lean jackal-like runner creature, sandy yellow fur (#d9a648), long legs built for sprinting, ' +
      'eager wide eyes, leaning forward',
    size: 256,
    anchor: { x: 0.5, y: 0.6 },
    seed: 2102,
  },
  {
    key: 'enemy_knight',
    fragment:
      'small round knight creature in heavy steel plate armor (#8d99ae), closed bucket helm with narrow ' +
      'eye slit, tiny legs under a huge breastplate',
    size: 256,
    anchor: { x: 0.5, y: 0.6 },
    seed: 2103,
  },
  {
    key: 'enemy_shade',
    fragment:
      'small ember spirit creature, smoldering charcoal body with glowing crack lines (#b35442), wispy ' +
      'flame tufts, hollow glowing eyes, slightly translucent lower body',
    size: 256,
    anchor: { x: 0.5, y: 0.6 },
    seed: 2104,
  },
  {
    key: 'enemy_golem',
    fragment:
      'hulking obsidian golem boss, dark purple crystalline rock body (#5e4b8b), glowing violet runes ' +
      'carved across chest and fists, massive shoulders, small glowing eyes',
    size: 320,
    anchor: { x: 0.5, y: 0.62 },
    seed: 2105,
  },
  {
    key: 'enemy_golemling',
    fragment:
      'small crystalline rock golem creature, purple stone body (#7a68a6), faint glowing runes, ' +
      'stubby heavy fists, curious glowing eyes',
    size: 256,
    anchor: { x: 0.5, y: 0.6 },
    seed: 2106,
  },

  // ---- UI icons ----
  {
    key: 'icon_fire',
    fragment: 'single stylized flame icon, warm orange gradient (#ff6b35), simple bold shape',
    size: 128,
    anchor: { x: 0.5, y: 0.5 },
    seed: 3101,
  },
  {
    key: 'icon_ice',
    fragment: 'single stylized snowflake icon, cool blue gradient (#5bc8f5), simple bold shape',
    size: 128,
    anchor: { x: 0.5, y: 0.5 },
    seed: 3102,
  },
  {
    key: 'icon_lightning',
    fragment: 'single stylized lightning bolt icon, violet gradient (#c77dff), simple bold shape',
    size: 128,
    anchor: { x: 0.5, y: 0.5 },
    seed: 3103,
  },
];

// ---------------------------------------------------------------- UI icons
// Generated as LOOSE PNGs into public/icons/ (DOM <img>, not the atlas).
// Key convention: upg_<wizardId>_<pathIdx>_<tierIdx>, portrait_<wizardId>.

const ICON_PREFIX =
  'fantasy game skill icon, flat stylized vector art on a dark navy circular badge with thin gold rim, ' +
  'bold readable silhouette, centered, ';
const ICON_SUFFIX = ', no text, no watermark, game UI asset';

function icon(key: string, fragment: string, seed: number): SpriteEntry {
  return { key, fragment: ICON_PREFIX + fragment + ICON_SUFFIX, size: 128, anchor: { x: 0.5, y: 0.5 }, seed };
}

export const ICON_MANIFEST: SpriteEntry[] = [
  icon('portrait_fire', 'portrait of a small fire mage wizard with tall orange pointed hat', 4001),
  icon('portrait_ice', 'portrait of a frost mage wizard with wide-brimmed icy blue hat', 4002),
  icon('portrait_lightning', 'portrait of a storm mage wizard with crooked violet hat', 4003),

  icon('upg_fire_0_0', 'a roaring orange flame', 4101),
  icon('upg_fire_0_1', 'a flame dripping burning embers', 4102),
  icon('upg_fire_0_2', 'an explosion with shockwave rings', 4103),
  icon('upg_fire_1_0', 'a fireball with speed lines', 4104),
  icon('upg_fire_1_1', 'a flaming all-seeing eye', 4105),
  icon('upg_fire_1_2', 'three rapid fireballs in a row', 4106),

  icon('upg_ice_0_0', 'a sharp frosty snowflake', 4201),
  icon('upg_ice_0_1', 'a large glistening water droplet', 4202),
  icon('upg_ice_0_2', 'jagged ice crystal spikes', 4203),
  icon('upg_ice_1_0', 'three sharp ice shards', 4204),
  icon('upg_ice_1_1', 'a radial frost burst nova', 4205),
  icon('upg_ice_1_2', 'a glowing icy beam reaching far', 4206),

  icon('upg_lightning_0_0', 'a forked lightning bolt splitting in two', 4301),
  icon('upg_lightning_0_1', 'a charged orb crackling with voltage', 4302),
  icon('upg_lightning_0_2', 'a storm cloud hurling lightning bolts', 4303),
  icon('upg_lightning_1_0', 'crackling static sparks', 4304),
  icon('upg_lightning_1_1', 'a long electric arc between two points', 4305),
  icon('upg_lightning_1_2', 'an overloaded glowing lightning core', 4306),

  icon('portrait_water', 'portrait of a water mage wizard with drooping blue hat over the eyes', 4004),
  icon('portrait_wind', 'portrait of a cloud mage wizard with puffy white cloud-like hat', 4005),

  icon('upg_water_0_0', 'a swirling undertow whirlpool', 4401),
  icon('upg_water_0_1', 'a deep blue soaking wave', 4402),
  icon('upg_water_0_2', 'a violent riptide curl', 4403),
  icon('upg_water_1_0', 'an expanding ring of water', 4404),
  icon('upg_water_1_1', 'a surging fountain of water', 4405),
  icon('upg_water_1_2', 'a towering tsunami wave', 4406),

  icon('upg_wind_0_0', 'curved wind gust lines', 4501),
  icon('upg_wind_0_1', 'a fierce storm squall', 4502),
  icon('upg_wind_0_2', 'a spiraling hurricane vortex', 4503),
  icon('upg_wind_1_0', 'twin swift wind currents', 4504),
  icon('upg_wind_1_1', 'high wind over mountain peaks', 4505),
  icon('upg_wind_1_2', 'a powerful horizontal jetstream', 4506),
];
