// Service worker de La Cueva del Narrador
// Al cambiar archivos importantes, sube el número de versión para forzar la actualización.
const VERSION = 'cueva-v3';
const ARCHIVOS = [
  './',
  'index.html',
  'calendario.html',
  'biblioteca.html',
  'libros.js',
  'styles.css',
  'eventos.js',
  'manifest.webmanifest',
  'img/logo-arco.png',
  'img/icon-192.png',
  'img/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ARCHIVOS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(claves =>
      Promise.all(claves.filter(k => k !== VERSION).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Primero red (para ver siempre lo último); si no hay conexión, usa lo guardado.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(r => {
        const copia = r.clone();
        caches.open(VERSION).then(c => c.put(e.request, copia));
        return r;
      })
      .catch(() => caches.match(e.request))
  );
});
