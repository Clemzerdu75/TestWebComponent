/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "96476fa996ffaf84d6b9d89f54c60745"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-04f0fb52.js"
  },
  {
    "url": "build/p-1b2d9a2e.js"
  },
  {
    "url": "build/p-1f09d1ad.entry.js"
  },
  {
    "url": "build/p-2c816ff5.entry.js"
  },
  {
    "url": "build/p-2e1bb10c.js"
  },
  {
    "url": "build/p-8a8f7b57.js"
  },
  {
    "url": "build/p-db53e438.entry.js"
  },
  {
    "url": "build/p-fda66867.entry.js"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
