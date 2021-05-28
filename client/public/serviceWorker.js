const APP_PREFIX = 'TarobleCards-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

const files_to_cache = [
    './index.html'
]

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache')
            return cache.addAll(files_to_cache)
        })
    )
    self.skipWaiting()
})

// activate service worker
self.addEventListener('activate', function(e) {
  e.waitUntil(
      // keys return an array of all cache names we're calling keyList
    caches.keys().then(function(keyList) {
        // then filter out caches that have the app prefix
      let cacheKeeplist = keyList.filter(function(key) {
        return key.indexOf(APP_PREFIX);
      });
      // add current cache to keeplist
      cacheKeeplist.push(CACHE_NAME);

      return Promise.all(
        keyList.map(function(key, i) {
          if (cacheKeeplist.indexOf(key) === -1) {
            console.log('deleting cache : ' + keyList[i]);
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
});

// tell app how to retrieve info from the cache to handle offline requests
self.addEventListener('fetch', function (e) {
  console.log('fetch request : ' + e.request.url)
  // if request is stored in the cache, deliver resource directly from the cache
  // otherwise get resource normally
  e.respondWith(
      // use match to determine if resource exists in chaches
      caches.match(e.request).then(function (request) {
          // if it does...
          if (request) {
            console.log('responding with cache : ' + e.request.url)
            return request
            // if it doesn't... allow it to be retrieved from the online network as usual
          } else {
            console.log('file is not cached, fetching : ' + e.request.url)
            return fetch(e.request)
      }
        
      // You can omit if/else for console.log & put one line below like this too.
      // return request || fetch(e.request)
      })
  )
})
