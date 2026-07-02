/**
 * Resolve a public asset path against Vite's BASE_URL so the game works both at
 * the domain root (dev) and under a subpath (GitHub Pages /wizard-td/).
 */
export function assetUrl(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}
