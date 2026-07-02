# Wizard TD — Style Bible

The single source of truth for all generated art. Every sprite prompt is built as
`STYLE_PREFIX + <unit fragment> + STYLE_SUFFIX` (see `manifest.ts`). Do not deviate
per-asset; consistency across the roster is the whole point.

## Locked style
**Stylized hand-painted cartoon** — Kingdom Rush / BTD6-adjacent.

- **View:** 3/4 top-down (≈30° from vertical), subject facing slightly down-right.
- **Proportions:** chunky and friendly; heads/hats oversized (~40% of height for wizards).
- **Line:** clean dark outlines (not black — deep warm brown `#2a1f1a`), consistent weight.
- **Shading:** soft painterly, 2–3 tones per material, single light source top-left.
- **Saturation:** high but not neon; magical glows may bloom slightly.
- **Background:** fully transparent. Single centered subject, no ground shadow
  (the game renders shadows procedurally), no text, no frame.
- **Silhouette first:** every unit must read at 40px. If it needs detail to read, redesign.

## Element palettes
| Element | Primary | Accent / glow |
|---|---|---|
| Fire | `#ff6b35` | `#ffb163` |
| Ice | `#5bc8f5` | `#b3ecff` |
| Lightning | `#c77dff` | `#e8c3ff` |

Enemy palette anchors: grunt `#7da35c`, runner `#d9a648`, knight `#8d99ae`,
shade `#b35442`, golem `#5e4b8b`.

## Prompt template
- **STYLE_PREFIX:** `"stylized hand-painted cartoon game sprite, 3/4 top-down view,
  chunky friendly proportions, clean dark brown outlines, soft painterly shading,
  single light source top-left, vibrant saturated colors, transparent background,
  single centered subject, mobile tower defense art style, "`
- **STYLE_SUFFIX:** `", no text, no watermark, no ground shadow, game asset"`

## Animation contract (art must respect this)
Sprites are **static**; all motion is code (idle bob, cast recoil, hit flash, death
dissolve). Therefore: neutral idle pose, both feet planted, staff held at rest angle,
no motion blur, no action poses.

## Reproducibility
- One **fixed seed per asset** (stored in `manifest.ts`) — regeneration is stable.
- `art/style-ref.png` is the approved master reference. Providers that accept a
  style/reference image must always pass it.
- Regenerate everything with `npm run gen-art`; pack-only with `npm run gen-art -- --pack-only`.
