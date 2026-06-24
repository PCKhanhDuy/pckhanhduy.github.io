// ⬆️ Tăng số version mỗi lần deploy để buộc trình duyệt lấy bản mới (tránh kẹt cache cũ).
const CACHE = "pckd-portfolio-v2";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./assets/logo.png",
        "./assets/avt-2.png"
      ]);
    })
  );
  self.skipWaiting();
});

// Xoá các cache phiên bản cũ khi service worker mới kích hoạt.
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
