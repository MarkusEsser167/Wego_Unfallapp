// Neuer Cache-Name loest auf den Geraeten das Update aus: die App laedt
// index.html cache-zuerst, ohne geaenderte sw.js kaeme eine neue Fassung
// nie an.
const CACHE = 'wego-unfallapp-v3';
// Nur eigene Altbestaende aufraeumen. Die Testversion liegt auf derselben
// Origin (Caches 'wego-unfallapp-test-...') und darf nicht mitgeloescht werden.
const CACHE_PREFIX = 'wego-unfallapp-v';
const FILES = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './ndl.json',
  './stapler.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k.indexOf(CACHE_PREFIX) === 0 && k !== CACHE)
                      .map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Stammdaten immer zuerst aus dem Netz holen, damit Aenderungen an
  // ndl.json und stapler.json ohne neue App-Version ankommen; offline
  // aus dem Cache. Die App selbst bleibt cache-zuerst (schneller Start,
  // offline nutzbar).
  if (e.request.url.indexOf('ndl.json') !== -1 ||
      e.request.url.indexOf('stapler.json') !== -1) {
    e.respondWith(
      fetch(e.request).then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return r;
      }).catch(() => caches.match(e.request))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
