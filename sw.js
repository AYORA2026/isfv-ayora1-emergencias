const CACHE='isfv-ayora1-v13';
const ASSETS=['./', './index.html','./manifest.json','./icon-192.png','./icon-512.png','./header-seal-new.png','./eiffage-logo.png','./img-actuacion-emergencias.jpg','./plano-real-satelite.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).catch(()=>caches.match('./index.html'))));});
