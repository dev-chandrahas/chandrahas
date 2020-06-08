var CACHE_DYNAMIC_NAME = "deancasalena";

//as yet unsolvable: https://cloud.typography.com/7987016/7509192/css/fonts.css
var assetsToCache = [
/*  "https://d2b2t64apeuv0x.cloudfront.net/assets/css/late.css",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/dean-photo.jpg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/icons/angle-up.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/icons/pause.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/icons/play.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/icons/volume-off.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/icons/volume-up.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/aaa.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/addy.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/audi.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/clio.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/coca-cola.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/constellation.png",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/doritos.png",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/doubletree.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/gig.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/head-shoulders.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/health-ade.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/hp.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/ihop.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/judgey.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/netflix.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/oitnb.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/one-show.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/p-g.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/seismic.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/logos/time.svg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/projects/aaa-branch-photo.jpg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/projects/aaa-sprite.jpg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/projects/audi-cms-screenshots.jpg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/projects/bottle-collective-screenshot.jpg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/projects/doubletree-screenshot.jpg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/projects/grammasters-screenshot-1.png",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/projects/grammasters-screenshot-2.jpg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/projects/judgey-tweets.jpg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/img/projects/test-troys-hair-screenshot.jpg",
  "https://d2b2t64apeuv0x.cloudfront.net/assets/js/mechanics.min.js",*/
  "https://dean.casa",
  "https://dean.casa/",
  "https://dean.casa/?utm_source=homescreen",
  "https://dean.casa/about",
  "https://dean.casa/about/",
  "https://dean.casa/contact",
  "https://dean.casa/contact/",
  "https://dean.casa/work",
  "https://dean.casa/work/",
  "https://dean.casa/android-chrome-192x192.png",
  "https://dean.casa/android-chrome-512x512.png",
  "https://dean.casa/apple-touch-icon.png",
  "https://dean.casa/favicon-16x16.png",
  "https://dean.casa/favicon-32x32.png",
  "https://dean.casa/browserconfig.xml",
  "https://dean.casa/favicon.ico"
  //"https://dean.casa/site.webmanifest"
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_DYNAMIC_NAME).then(function (cache) {
      //return cache.addAll(["https://dean.casa","https://dean.casa/","https://dean.casa/?utm_source=homescreen"]);
      return cache.addAll( assetsToCache );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response; //if valid response is found in cache return it
        } else {
          return fetch(event.request) //fetch from internet
            .then(function (res) {
              return caches.open(CACHE_DYNAMIC_NAME)
                .then(function (cache) {
                  cache.put(event.request.url, res.clone()); //save the response for future
                  return res; //return the fetched data
                })
            })
        }
      })
  );
});
