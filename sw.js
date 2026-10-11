// Generato dalla build: tutti gli asset sono locali e precache.
const CACHE = "lorenzo-health-b9279d0c5eb685c8";
const FILES = ["assets/index-DlGClgHb.css","assets/index-Dq9FUEMc.js","icon-192.png","icon-512.png","icon-maskable-512.png","icon.svg","index.html","manifest.webmanifest","third-party-licenses.txt"];
const ROOT = new URL('./', self.location.href);
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES.map(file => new URL(file, ROOT).href))));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('lorenzo-health-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== ROOT.origin || !url.pathname.startsWith(ROOT.pathname)) return;
  const page = new URL('index.html', ROOT).href;
  if (event.request.mode === 'navigate') {
    event.respondWith(caches.open(CACHE).then(cache => cache.match(page)).then(cached => cached || fetch(event.request)));
    return;
  }
  if (!FILES.some(file => new URL(file, ROOT).pathname === url.pathname)) return;
  event.respondWith(caches.open(CACHE).then(cache => cache.match(event.request, { ignoreSearch: true })).then(cached => cached || fetch(event.request)));
});
