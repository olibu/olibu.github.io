if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>i(e,o),a={module:{uri:o},exports:l,require:c};s[o]=Promise.all(n.map((e=>a[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"fd770546c637705a459b970cee6e6aad"},{url:"assets/apple-touch-icon-13775d73.png",revision:null},{url:"assets/canvas_bg-998d646c.png",revision:null},{url:"assets/index-1a3ce558.js",revision:null},{url:"assets/index-80b65e2a.css",revision:null},{url:"assets/materialdesignicons-webfont-6d5e4be4.woff",revision:null},{url:"assets/materialdesignicons-webfont-739dc70d.woff2",revision:null},{url:"assets/materialdesignicons-webfont-c02d41ce.ttf",revision:null},{url:"assets/materialdesignicons-webfont-f5966bae.eot",revision:null},{url:"assets/WebClipGenerator-a76e25ce.js",revision:null},{url:"assets/WebClipGenerator-f9489d19.css",revision:null},{url:"assets/webfontloader-2a4655c2.js",revision:null},{url:"assets/workbox-window.prod.es5-295a6886.js",revision:null},{url:"favicon.ico",revision:"333b91e48db74a7b3969e949264a1cec"},{url:"index.html",revision:"cc0995b13a4ea7c65264f88835b4cb64"},{url:"wcg192.png",revision:"dd3fd7bf4cf1bc34a00043adaf1ced68"},{url:"wcg512.png",revision:"fd770546c637705a459b970cee6e6aad"},{url:"favicon.ico",revision:"333b91e48db74a7b3969e949264a1cec"},{url:"wcg192.png",revision:"dd3fd7bf4cf1bc34a00043adaf1ced68"},{url:"wcg512.png",revision:"fd770546c637705a459b970cee6e6aad"},{url:"manifest.webmanifest",revision:"fdd8d4dd54f7448e7f63d0f14ac2c2ed"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
