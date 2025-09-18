// Enhanced service worker for SmartSpeak SPA
const CACHE_NAME = 'smartspeak-cache-v2';
const urlsToCache = [
  '/',
  'index.html',
  'assets/smartspeak-logo.svg',
  'assets/smartspeak-logo-advanced.svg',
  'styles/tailwind.css',
  'scripts/app.js',
  'manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
];

// Cache lessons API responses
self.addEventListener('fetch', event => {
  if (event.request.url.includes('/api/lessons')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return fetch(event.request).then(response => {
          cache.put(event.request, response.clone());
          return response;
        }).catch(() => cache.match(event.request));
      })
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
});

// Push notification event
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'SmartSpeak';
  const options = {
    body: data.body || 'Keep learning Nigerian languages!',
    icon: 'assets/smartspeak-logo.svg',
    badge: 'assets/smartspeak-logo.svg'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
