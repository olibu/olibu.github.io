if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let f={};const a=e=>i(e,r),l={module:{uri:r},exports:f,require:a};n[r]=Promise.all(s.map((e=>l[e]||a(e)))).then((e=>(o(...e),f)))}}define(["./workbox-958fa2bd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"agenda192.png",revision:"a96bd46ef4a70357a06001ab4df761b1"},{url:"agenda512.png",revision:"5624a19b7619e73f81777554554df6da"},{url:"apple-touch-icon.png",revision:"687b3e7bd0e9e09fb49bfced0cc9a8bf"},{url:"assets/apple-touch-icon.51166f67.png",revision:null},{url:"assets/index.029027ca.js",revision:null},{url:"assets/index.b6f95a31.css",revision:null},{url:"assets/materialdesignicons-webfont.8bded8f4.woff",revision:null},{url:"assets/materialdesignicons-webfont.9bdfaf27.eot",revision:null},{url:"assets/materialdesignicons-webfont.c14484cf.ttf",revision:null},{url:"assets/materialdesignicons-webfont.da7fba3c.woff2",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"bell-melodic-sound-effect.mp3",revision:"0c4e4a7278044f1056f5051d48cb046e"},{url:"Ding-sound-effect.mp3",revision:"fce0c8033c5fcd21f5a6fcef75452e49"},{url:"favicon.ico",revision:"76aa82798dbd7820ef449f9d705d09b4"},{url:"index.html",revision:"eb06b90473a102d12e566dff63f8e0d0"},{url:"favicon.ico",revision:"76aa82798dbd7820ef449f9d705d09b4"},{url:"agenda192.png",revision:"a96bd46ef4a70357a06001ab4df761b1"},{url:"agenda512.png",revision:"5624a19b7619e73f81777554554df6da"},{url:"manifest.webmanifest",revision:"24b5e5829baed56a8ac5c1881eb63105"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
