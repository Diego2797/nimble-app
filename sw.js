// Service Worker for Nimble Companion PWA
// Strategy: stale-while-revalidate
//   - Serves cached version instantly (fast, offline-capable)
//   - Simultaneously fetches fresh from network, updates cache for next time
//   - Next visit always sees the latest version (or a version <= 1 visit behind)
// Bump CACHE_NAME to force all clients to wipe old caches immediately.
const CACHE_NAME = 'nimble-companion-v6';
const ASSETS = [
  './',
  './index.html',
  './gamedata.js',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Only handle GETs; let POSTs and others bypass the cache
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(event.request).then(cached => {
        // Kick off a network fetch in the background to refresh the cache
        const networkFetch = fetch(event.request).then(response => {
          // Only cache successful, same-origin responses
          if (response && response.ok && response.type === 'basic') {
            cache.put(event.request, response.clone());
          }
          return response;
        }).catch(() => cached); // If offline, fall back to cache (may be undefined)

        // Stale-while-revalidate: return cached immediately if we have it, else wait for network
        return cached || networkFetch;
      })
    )
  );
});
