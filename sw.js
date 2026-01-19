// ===================================================================
//  SERVICE WORKER Z-FLEX (V2.1 - GRADE PRODUCTION)
// ===================================================================

const CACHE_NAME = "zflex-cache-v2.1"; // Incrémenter la version pour forcer la mise à jour
const OFFLINE_URL = "offline.html";

// Les assets critiques pour que l'app fonctionne hors ligne.
const CORE_ASSETS = [
  OFFLINE_URL,
  "/assets/app-C9zx4mvT.css",
  "/assets/app-BY73wLkG.js",
  "/manifest.json", // Essentiel pour l'expérience PWA
  // On pourrait ajouter ici le logo principal ou des icônes critiques.
];

/**
 * À l'installation, on met en cache le coeur de l'app et notre page de fallback.
 */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Mise en cache des assets de base");
      return cache.addAll(CORE_ASSETS);
    })
  );
  self.skipWaiting(); // Force le nouveau SW à devenir actif immédiatement
});

/**
 * À l'activation, on nettoie les anciens caches pour libérer de l'espace.
 */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log(
                "[Service Worker] Nettoyage de l'ancien cache:",
                cacheName
              );
              return caches.delete(cacheName);
            }
          })
        )
      )
      .then(() => self.clients.claim()) // Prend le contrôle de toutes les pages ouvertes
  );
});

/**
 * À chaque requête, on applique une stratégie "Cache, falling back to Network".
 * CRITIQUE : On ne traite que les requêtes GET locales pour éviter les doublons sur les trackers/API.
 */
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // 1. On ignore tout ce qui n'est pas GET (POST, PUT, etc. => direct réseau)
  if (event.request.method !== "GET") return;

  // 2. On ignore les appels API
  if (url.pathname.includes("/api/")) return;

  // 3. On ignore les domaines tiers (trackers google-analytics, etc. => direct réseau)
  if (url.origin !== self.location.origin) return;

  // On applique la stratégie pour les assets locaux (HTML, CSS, JS, images, fonts)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request).catch(() => {
        // Fallback offline uniquement pour la navigation
        if (event.request.mode === "navigate") {
          console.log(
            "[Service Worker] Réseau indisponible, fallback offline."
          );
          return caches.match(OFFLINE_URL);
        }
      });
    })
  );
});
