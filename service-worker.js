self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('calc-v1').then((cache) =>
      cache.addAll([
        'index.html',
        'manifest.json',
        'service-worker.js',
        'Icon1.png',
        'Icon2.png'
      ])
    )
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});