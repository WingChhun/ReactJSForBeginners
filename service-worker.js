"use strict";var precacheConfig=[["/ReactJSForBeginners/index.html","490226ddbaf02bab7ad2b75d48f0be5c"],["/ReactJSForBeginners/static/css/main.8abfd65f.css","14ea528145795787ec890be7b4dc2588"],["/ReactJSForBeginners/static/js/main.6531adca.js","994c38ad4cf0c09219d4eea16a83771d"],["/ReactJSForBeginners/static/media/anchor.d2f8799a.svg","d2f8799a13e6db2022d9a7de22776705"],["/ReactJSForBeginners/static/media/blanch_caps_inline-webfont.1461f8e9.woff","1461f8e9d2084c70c00830348efe1766"],["/ReactJSForBeginners/static/media/blanch_caps_inline-webfont.73a576a8.eot","73a576a8254aeafebcdc66fe9fd41ac8"],["/ReactJSForBeginners/static/media/blanch_caps_inline-webfont.8345e1b3.ttf","8345e1b3362c1d640f0f11b5aae1d5bc"],["/ReactJSForBeginners/static/media/blanch_caps_inline-webfont.c175fe49.svg","c175fe49ca6c599199a81c6791490344"],["/ReactJSForBeginners/static/media/haymaker-webfont.47e26dee.svg","47e26dee9b053b540478750bdf7a87d5"],["/ReactJSForBeginners/static/media/haymaker-webfont.4c3fb584.eot","4c3fb584d3f63821357c8a9cff97f360"],["/ReactJSForBeginners/static/media/haymaker-webfont.751e5627.woff","751e56274d3ea1c651ea824f902bb987"],["/ReactJSForBeginners/static/media/haymaker-webfont.e9535f20.ttf","e9535f20ca175cc3fdfe2816f7c47168"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="/ReactJSForBeginners/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});