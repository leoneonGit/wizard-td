/* Wildguard TD service worker: offline play + fast repeat visits.
 * - navigations: network-first, falling back to the cached shell
 * - hashed bundles (/assets/): cache-first (immutable by filename)
 * - models/icons/etc: stale-while-revalidate (serve cache, refresh behind)
 * Bump CACHE to invalidate everything after a breaking deploy. */
const CACHE = 'wildguard-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(['./'])));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    (async () => {
      for (const key of await caches.keys()) {
        if (key !== CACHE) await caches.delete(key);
      }
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;

  if (e.request.mode === 'navigate') {
    e.respondWith(
      (async () => {
        try {
          const res = await fetch(e.request);
          const cache = await caches.open(CACHE);
          cache.put('./', res.clone());
          return res;
        } catch {
          return (await caches.match('./')) ?? Response.error();
        }
      })(),
    );
    return;
  }

  e.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(e.request);
      const immutable = url.pathname.includes('/assets/');
      const refresh = fetch(e.request)
        .then((res) => {
          if (res.ok) cache.put(e.request, res.clone());
          return res;
        })
        .catch(() => undefined);
      if (cached) {
        if (!immutable) refresh.catch(() => {}); // revalidate in the background
        return cached;
      }
      return (await refresh) ?? new Response('offline', { status: 503 });
    })(),
  );
});
