import{J as le,g as K,r as C,K as T,L as Ue,w as B,G as Te,p as R,C as Ge,M as Xe,N as Ke,c as h,i as Be,O as ee,P as q,Q as Ze,R as de,S as F,T as Je,b as P,U as De,V as Qe,W as ye,k as et,t as j,X as $e,Y as tt,Z as be,$ as Fe,a0 as ve,a1 as pe,a2 as nt,o as ot,a as Me,d as at,a3 as Ne,m as rt,l as it,u as lt,q as st,F as He,s as _,a4 as te,a5 as ct,a6 as ut,a7 as ft,a8 as dt,a9 as We,aa as vt,ab as me,B as we}from"./index-66a6ad39.js";const Ie=["top","bottom"],mt=["start","end","left","right"];function se(e,t){let[n,o]=e.split(" ");return o||(o=le(Ie,n)?"start":le(mt,n)?"top":"center"),{side:xe(n,t),align:xe(o,t)}}function xe(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function ne(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function oe(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Se(e){return{side:e.align,align:e.side}}function ke(e){return le(Ie,e.side)?"y":"x"}class z{constructor(t){let{x:n,y:o,width:a,height:r}=t;this.x=n,this.y=o,this.width=a,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Ee(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function gt(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),o=n.transform;if(o){let a,r,i,l,s;if(o.startsWith("matrix3d("))a=o.slice(9,-1).split(/, /),r=+a[0],i=+a[5],l=+a[12],s=+a[13];else if(o.startsWith("matrix("))a=o.slice(7,-1).split(/, /),r=+a[0],i=+a[3],l=+a[4],s=+a[5];else return new z(t);const f=n.transformOrigin,u=t.x-l-(1-r)*parseFloat(f),d=t.y-s-(1-i)*parseFloat(f.slice(f.indexOf(" ")+1)),v=r?t.width/r:e.offsetWidth+1,x=i?t.height/i:e.offsetHeight+1;return new z({x:u,y:d,width:v,height:x})}else return new z(t)}function ht(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};const o=e.animate(t,n);return typeof o.finished>"u"&&(o.finished=new Promise(a=>{o.onfinish=()=>{a(o)}})),o}function Ve(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const yt="cubic-bezier(0.4, 0, 0.2, 1)",ln="cubic-bezier(0.0, 0, 0.2, 1)",sn="cubic-bezier(0.4, 0, 1, 1)";function bt(e){for(;e;){if(ge(e))return e;e=e.parentElement}return document.scrollingElement}function J(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(ge(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function ge(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function pt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function wt(e){const t=K("useRender");t.render=e}function cn(e){const t=C(),n=C();if(T){const o=new ResizeObserver(a=>{e==null||e(a,o),a.length&&(n.value=a[0].contentRect)});Ue(()=>{o.disconnect()}),B(t,(a,r)=>{r&&(o.unobserve(r),n.value=void 0),a&&o.observe(a)},{flush:"post"})}return{resizeRef:t,contentRect:Te(n)}}const un=R({tag:{type:String,default:"div"}},"tag"),fn=Ge({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:n}=t;const{defaults:o,reset:a,root:r,scoped:i}=Xe(e);return Ke(o,{reset:a,root:r,scoped:i}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}});const xt=R({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function St(e,t){const n={},o=a=>()=>{if(!T)return Promise.resolve(!0);const r=a==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(i=>{const l=parseInt(e[a]??0,10);n[a]=window.setTimeout(()=>{t==null||t(r),i(r)},l)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const kt=Symbol.for("vuetify:v-menu"),Et=R({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...xt()},"v-overlay-activator");function Ot(e,t){let{isActive:n,isTop:o}=t;const a=C();let r=!1,i=!1,l=!0;const s=h(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=h(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!s.value),{runOpenDelay:u,runCloseDelay:d}=St(e,c=>{c===(e.openOnHover&&r||s.value&&i)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==c&&(l=!0),n.value=c)}),v={click:c=>{c.stopPropagation(),a.value=c.currentTarget||c.target,n.value=!n.value},mouseenter:c=>{r=!0,a.value=c.currentTarget||c.target,u()},mouseleave:c=>{r=!1,d()},focus:c=>{Je&&!c.target.matches(":focus-visible")||(i=!0,c.stopPropagation(),a.value=c.currentTarget||c.target,u())},blur:c=>{i=!1,c.stopPropagation(),d()}},x=h(()=>{const c={};return f.value&&(c.click=v.click),e.openOnHover&&(c.mouseenter=v.mouseenter,c.mouseleave=v.mouseleave),s.value&&(c.focus=v.focus,c.blur=v.blur),c}),b=h(()=>{const c={};if(e.openOnHover&&(c.mouseenter=()=>{r=!0,u()},c.mouseleave=()=>{r=!1,d()}),e.closeOnContentClick){const N=Be(kt,null);c.click=()=>{n.value=!1,N==null||N.closeParents()}}return c}),m=h(()=>{const c={};return e.openOnHover&&(c.mouseenter=()=>{l&&(r=!0,l=!1,u())},c.mouseleave=()=>{r=!1,d()}),c});B(o,c=>{c&&(e.openOnHover&&!r&&(!s.value||!i)||s.value&&!i&&(!e.openOnHover||!r))&&(n.value=!1)});const A=C();ee(()=>{A.value&&q(()=>{const c=A.value;a.value=Ze(c)?c.$el:c})});const O=K("useActivator");let S;return B(()=>!!e.activator,c=>{c&&T?(S=de(),S.run(()=>{Pt(e,O,{activatorEl:a,activatorEvents:x})})):S&&S.stop()},{flush:"post",immediate:!0}),F(()=>{var c;(c=S)==null||c.stop()}),{activatorEl:a,activatorRef:A,activatorEvents:x,contentEvents:b,scrimEvents:m}}function Pt(e,t,n){let{activatorEl:o,activatorEvents:a}=n;B(()=>e.activator,(s,f)=>{if(f&&s!==f){const u=l(f);u&&i(u)}s&&q(()=>r())},{immediate:!0}),B(()=>e.activatorProps,()=>{r()}),F(()=>{i()});function r(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;s&&(Object.entries(a.value).forEach(u=>{let[d,v]=u;s.addEventListener(d,v)}),Object.keys(f).forEach(u=>{f[u]==null?s.removeAttribute(u):s.setAttribute(u,f[u])}))}function i(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;s&&(Object.entries(a.value).forEach(u=>{let[d,v]=u;s.removeEventListener(d,v)}),Object.keys(f).forEach(u=>{s.removeAttribute(u)}))}function l(){var s;let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,u;if(f)if(f==="parent"){var d,v;let x=t==null||(d=t.proxy)==null||(v=d.$el)==null?void 0:v.parentNode;for(;x.hasAttribute("data-no-activator");)x=x.parentNode;u=x}else typeof f=="string"?u=document.querySelector(f):"$el"in f?u=f.$el:u=f;return o.value=((s=u)==null?void 0:s.nodeType)===Node.ELEMENT_NODE?u:null,o.value}}const Ct=R({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Rt(e){return{dimensionStyles:h(()=>({height:P(e.height),maxHeight:P(e.maxHeight),maxWidth:P(e.maxWidth),minHeight:P(e.minHeight),minWidth:P(e.minWidth),width:P(e.width)}))}}const At=R({eager:Boolean},"lazy");function Lt(e,t){const n=C(!1),o=h(()=>n.value||e.eager||t.value);B(t,()=>n.value=!0);function a(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:o,onAfterLeave:a}}function ae(e,t){return{x:e.x+t.x,y:e.y+t.y}}function _t(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Oe(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,r=n==="top"?0:n==="bottom"?t.height:n;return ae({x:a,y:r},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,r=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return ae({x:a,y:r},t)}return ae({x:t.width/2,y:t.height/2},t)}const je={static:Dt,connected:Ft},Tt=R({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in je},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function Bt(e,t){const n=C({}),o=C();let a;ee(async()=>{var i;(i=a)==null||i.stop(),o.value=void 0,T&&t.isActive.value&&e.locationStrategy&&(a=de(),e.locationStrategy!=="connected"&&await q(),a.run(()=>{if(typeof e.locationStrategy=="function"){var l;o.value=(l=e.locationStrategy(t,e,n))==null?void 0:l.updateLocation}else{var s;o.value=(s=je[e.locationStrategy](t,e,n))==null?void 0:s.updateLocation}}))}),T&&window.addEventListener("resize",r,{passive:!0}),F(()=>{var i;T&&window.removeEventListener("resize",r),o.value=void 0,(i=a)==null||i.stop()});function r(i){var l;(l=o.value)==null||l.call(o,i)}return{contentStyles:n,updateLocation:o}}function Dt(){}function $t(e){const t=gt(e);return t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Ft(e,t,n){const o=pt(e.activatorEl.value);o&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:a,preferredOrigin:r}=De(()=>{const b=se(t.location,e.isRtl.value),m=t.origin==="overlap"?b:t.origin==="auto"?ne(b):se(t.origin,e.isRtl.value);return b.side===m.side&&b.align===oe(m).align?{preferredAnchor:Se(b),preferredOrigin:Se(m)}:{preferredAnchor:b,preferredOrigin:m}}),[i,l,s,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(b=>h(()=>{const m=parseFloat(t[b]);return isNaN(m)?1/0:m})),u=h(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const b=t.offset.split(" ").map(parseFloat);return b.length<2&&b.push(0),b}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let d=!1;const v=new ResizeObserver(()=>{d&&x()});B([e.activatorEl,e.contentEl],(b,m)=>{let[A,O]=b,[S,c]=m;S&&v.unobserve(S),A&&v.observe(A),c&&v.unobserve(c),O&&v.observe(O)},{immediate:!0}),F(()=>{v.disconnect()});function x(){if(d=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>d=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const b=e.activatorEl.value.getBoundingClientRect(),m=$t(e.contentEl.value),A=J(e.contentEl.value),O=12;A.length||(A.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(m.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),m.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const S=A.reduce((k,w)=>{const g=w.getBoundingClientRect(),p=new z({x:w===document.documentElement?0:g.x,y:w===document.documentElement?0:g.y,width:w.clientWidth,height:w.clientHeight});return k?new z({x:Math.max(k.left,p.left),y:Math.max(k.top,p.top),width:Math.min(k.right,p.right)-Math.max(k.left,p.left),height:Math.min(k.bottom,p.bottom)-Math.max(k.top,p.top)}):p},void 0);S.x+=O,S.y+=O,S.width-=O*2,S.height-=O*2;let c={anchor:a.value,origin:r.value};function N(k){const w=new z(m),g=Oe(k.anchor,b),p=Oe(k.origin,w);let{x:L,y:D}=_t(g,p);switch(k.anchor.side){case"top":D-=u.value[0];break;case"bottom":D+=u.value[0];break;case"left":L-=u.value[0];break;case"right":L+=u.value[0];break}switch(k.anchor.align){case"top":D-=u.value[1];break;case"bottom":D+=u.value[1];break;case"left":L-=u.value[1];break;case"right":L+=u.value[1];break}return w.x+=L,w.y+=D,w.width=Math.min(w.width,s.value),w.height=Math.min(w.height,f.value),{overflows:Ee(w,S),x:L,y:D}}let H=0,W=0;const I={x:0,y:0},Y={x:!1,y:!1};let U=-1;for(;;){if(U++>10){Qe("Infinite loop detected in connectedLocationStrategy");break}const{x:k,y:w,overflows:g}=N(c);H+=k,W+=w,m.x+=k,m.y+=w;{const p=ke(c.anchor),L=g.x.before||g.x.after,D=g.y.before||g.y.after;let V=!1;if(["x","y"].forEach(E=>{if(E==="x"&&L&&!Y.x||E==="y"&&D&&!Y.y){const y={anchor:{...c.anchor},origin:{...c.origin}},$=E==="x"?p==="y"?oe:ne:p==="y"?ne:oe;y.anchor=$(y.anchor),y.origin=$(y.origin);const{overflows:Z}=N(y);(Z[E].before<=g[E].before&&Z[E].after<=g[E].after||Z[E].before+Z[E].after<(g[E].before+g[E].after)/2)&&(c=y,V=Y[E]=!0)}}),V)continue}g.x.before&&(H+=g.x.before,m.x+=g.x.before),g.x.after&&(H-=g.x.after,m.x-=g.x.after),g.y.before&&(W+=g.y.before,m.y+=g.y.before),g.y.after&&(W-=g.y.after,m.y-=g.y.after);{const p=Ee(m,S);I.x=S.width-p.x.before-p.x.after,I.y=S.height-p.y.before-p.y.after,H+=p.x.before,m.x+=p.x.before,W+=p.y.before,m.y+=p.y.before}break}const M=ke(c.anchor);Object.assign(n.value,{"--v-overlay-anchor-origin":`${c.anchor.side} ${c.anchor.align}`,transformOrigin:`${c.origin.side} ${c.origin.align}`,top:P(Pe(W)),left:P(Pe(H)),minWidth:P(M==="y"?Math.min(i.value,b.width):i.value),maxWidth:P(Ce(ye(I.x,i.value===1/0?0:i.value,s.value))),maxHeight:P(Ce(ye(I.y,l.value===1/0?0:l.value,f.value)))})}return B(()=>[a.value,r.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>x(),{immediate:!o}),o&&q(()=>x()),requestAnimationFrame(()=>{n.value.maxHeight&&x()}),{updateLocation:x}}function Pe(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ce(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ce=!0;const Q=[];function Mt(e){!ce||Q.length?(Q.push(e),ue()):(ce=!1,e(),ue())}let Re=-1;function ue(){cancelAnimationFrame(Re),Re=requestAnimationFrame(()=>{const e=Q.shift();e&&e(),Q.length?ue():ce=!0})}const fe={none:null,close:Wt,block:It,reposition:Vt},Nt=R({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in fe}},"v-overlay-scroll-strategies");function Ht(e,t){if(!T)return;let n;ee(async()=>{var o;(o=n)==null||o.stop(),t.isActive.value&&e.scrollStrategy&&(n=de(),await q(),n.run(()=>{if(typeof e.scrollStrategy=="function")e.scrollStrategy(t,e);else{var a;(a=fe[e.scrollStrategy])==null||a.call(fe,t,e)}}))}),F(()=>{var o;(o=n)==null||o.stop()})}function Wt(e){function t(n){e.isActive.value=!1}ze(e.activatorEl.value??e.contentEl.value,t)}function It(e,t){var n;const o=(n=e.root.value)==null?void 0:n.offsetParent,a=[...new Set([...J(e.activatorEl.value,t.contained?o:void 0),...J(e.contentEl.value,t.contained?o:void 0)])].filter(l=>!l.classList.contains("v-overlay-scroll-blocked")),r=window.innerWidth-document.documentElement.offsetWidth,i=(l=>ge(l)&&l)(o||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((l,s)=>{l.style.setProperty("--v-body-scroll-x",P(-l.scrollLeft)),l.style.setProperty("--v-body-scroll-y",P(-l.scrollTop)),l.style.setProperty("--v-scrollbar-offset",P(r)),l.classList.add("v-overlay-scroll-blocked")}),F(()=>{a.forEach((l,s)=>{const f=parseFloat(l.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(l.style.getPropertyValue("--v-body-scroll-y"));l.style.removeProperty("--v-body-scroll-x"),l.style.removeProperty("--v-body-scroll-y"),l.style.removeProperty("--v-scrollbar-offset"),l.classList.remove("v-overlay-scroll-blocked"),l.scrollLeft=-f,l.scrollTop=-u}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Vt(e){let t=!1,n=-1;function o(a){Mt(()=>{var r,i;const l=performance.now();(r=(i=e.updateLocation).value)==null||r.call(i,a),t=(performance.now()-l)/(1e3/60)>2})}ze(e.activatorEl.value??e.contentEl.value,a=>{t?(cancelAnimationFrame(n),n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{o(a)})})):o(a)})}function ze(e,t){const n=[document,...J(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),F(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}const jt=R({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),zt=(e,t)=>{let{slots:n}=t;const{transition:o,...a}=e,{component:r=$e,...i}=typeof o=="object"?o:{};return et(r,j(typeof o=="string"?{name:o}:i,a),n)};function qt(){var e,t;return(e=K("useRouter"))==null||(t=e.proxy)==null?void 0:t.$router}function dn(e,t){const n=tt("RouterLink"),o=h(()=>!!(e.href||e.to)),a=h(()=>(o==null?void 0:o.value)||be(t,"click")||be(e,"click"));if(typeof n=="string")return{isLink:o,isClickable:a,href:Fe(e,"href")};const r=e.to?n.useLink(e):void 0;return{isLink:o,isClickable:a,route:r==null?void 0:r.route,navigate:r==null?void 0:r.navigate,isActive:r&&h(()=>{var i,l;return e.exact?(i=r.isExactActive)==null?void 0:i.value:(l=r.isActive)==null?void 0:l.value}),href:h(()=>e.to?r==null?void 0:r.route.value.href:e.href)}}const vn=R({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let re=!1;function Yt(e,t){let n=!1,o,a;T&&(q(()=>{window.addEventListener("popstate",r),o=e==null?void 0:e.beforeEach((i,l,s)=>{re?n?t(s):s():setTimeout(()=>n?t(s):s()),re=!0}),a=e==null?void 0:e.afterEach(()=>{re=!1})}),F(()=>{var i,l;window.removeEventListener("popstate",r),(i=o)==null||i(),(l=a)==null||l()}));function r(i){var l;(l=i.state)!=null&&l.replaced||(n=!0,setTimeout(()=>n=!1))}}function he(e){return De(()=>{const t=[],n={};return e.value.background&&(pe(e.value.background)?n.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(pe(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function mn(e,t){const n=h(()=>({text:ve(e)?e.value:t?e[t]:null})),{colorClasses:o,colorStyles:a}=he(n);return{textColorClasses:o,textColorStyles:a}}function Ut(e,t){const n=h(()=>({background:ve(e)?e.value:t?e[t]:null})),{colorClasses:o,colorStyles:a}=he(n);return{backgroundColorClasses:o,backgroundColorStyles:a}}function Gt(){if(!T)return C(!1);const{ssr:e}=nt();if(e){const t=C(!1);return ot(()=>{t.value=!0}),t}else return C(!0)}function Xt(){const t=K("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const Ae=Symbol.for("vuetify:stack"),G=Me([]);function Kt(e,t,n){const o=K("useStack"),a=!n,r=Be(Ae,void 0),i=Me({activeChildren:new Set});at(Ae,i);const l=C(+t.value);Ne(e,()=>{var u;const d=(u=G.at(-1))==null?void 0:u[1];l.value=d?d+10:+t.value,a&&G.push([o.uid,l.value]),r==null||r.activeChildren.add(o.uid),F(()=>{if(a){const v=G.findIndex(x=>x[0]===o.uid);G.splice(v,1)}r==null||r.activeChildren.delete(o.uid)})});const s=C(!0);a&&ee(()=>{var u;const d=((u=G.at(-1))==null?void 0:u[0])===o.uid;setTimeout(()=>s.value=d)});const f=h(()=>!i.activeChildren.size);return{globalTop:Te(s),localTop:f,stackStyles:h(()=>({zIndex:l.value}))}}function X(e){return{teleportTarget:h(()=>{const n=e.value;if(n===!0||!T)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o!=null){if(!X.cache.has(o)){const a=document.createElement("div");a.className="v-overlay-container",o.appendChild(a),X.cache.set(o,a)}return X.cache.get(o)}})}}X.cache=new WeakMap;function Zt(){return!0}function qe(e,t,n){if(!e||Ye(e,n)===!1)return!1;const o=Ve(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(r=>r==null?void 0:r.contains(e.target))}function Ye(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Zt)(e)}function Jt(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&qe(e,t,n)&&setTimeout(()=>{Ye(e,n)&&o&&o(e)},0)}function Le(e,t){const n=Ve(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Qt={mounted(e,t){const n=a=>Jt(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=qe(a,e,t)};Le(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(Le(e,n=>{var o;if(!n||!((o=e._clickOutside)!=null&&o[t.instance.$.uid]))return;const{onClick:a,onMousedown:r}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",a,!0),n.removeEventListener("mousedown",r,!0)}),delete e._clickOutside[t.instance.$.uid])}};function en(e){const{modelValue:t,color:n,...o}=e;return _($e,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&_("div",j({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const tn=R({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...Et(),...Ct(),...At(),...Tt(),...Nt(),...rt(),...jt()},"v-overlay"),nn=it()({name:"VOverlay",directives:{ClickOutside:Qt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...tn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const r=lt(e,"modelValue"),i=h({get:()=>r.value,set:y=>{y&&e.disabled||(r.value=y)}}),{teleportTarget:l}=X(h(()=>e.attach||e.contained)),{themeClasses:s}=st(e),{rtlClasses:f,isRtl:u}=He(),{hasContent:d,onAfterLeave:v}=Lt(e,i),x=Ut(h(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:b,localTop:m,stackStyles:A}=Kt(i,Fe(e,"zIndex"),e._disableGlobalStack),{activatorEl:O,activatorRef:S,activatorEvents:c,contentEvents:N,scrimEvents:H}=Ot(e,{isActive:i,isTop:m}),{dimensionStyles:W}=Rt(e),I=Gt(),{scopeId:Y}=Xt();B(()=>e.disabled,y=>{y&&(i.value=!1)});const U=C(),M=C(),{contentStyles:k,updateLocation:w}=Bt(e,{isRtl:u,contentEl:M,activatorEl:O,isActive:i});Ht(e,{root:U,contentEl:M,activatorEl:O,isActive:i,updateLocation:w});function g(y){a("click:outside",y),e.persistent?E():i.value=!1}function p(){return i.value&&b.value}T&&B(i,y=>{y?window.addEventListener("keydown",L):window.removeEventListener("keydown",L)},{immediate:!0});function L(y){y.key==="Escape"&&b.value&&(e.persistent?E():i.value=!1)}const D=qt();Ne(()=>e.closeOnBack,()=>{Yt(D,y=>{b.value&&i.value?(y(!1),e.persistent?E():i.value=!1):y()})});const V=C();B(()=>i.value&&(e.absolute||e.contained)&&l.value==null,y=>{if(y){const $=bt(U.value);$&&$!==document.scrollingElement&&(V.value=$.scrollTop)}});function E(){e.noClickAnimation||M.value&&ht(M.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:yt})}return wt(()=>{var y,$;return _(We,null,[(y=n.activator)==null?void 0:y.call(n,{isActive:i.value,props:j({ref:S},te(c.value),e.activatorProps)}),I.value&&_(ct,{disabled:!l.value,to:l.value},{default:()=>[d.value&&_("div",j({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},s.value,f.value],style:[A.value,{top:P(V.value)}],ref:U},Y,o),[_(en,j({color:x,modelValue:i.value&&!!e.scrim},te(H.value)),null),_(zt,{appear:!0,persisted:!0,transition:e.transition,target:O.value,onAfterLeave:()=>{v(),a("afterLeave")}},{default:()=>[ut(_("div",j({ref:M,class:["v-overlay__content",e.contentClass],style:[W.value,k.value]},te(N.value),e.contentProps),[($=n.default)==null?void 0:$.call(n,{isActive:i})]),[[ft,i.value],[dt("click-outside"),{handler:g,closeConditional:p,include:()=>[O.value]}]])]})])]})])}),{activatorEl:O,animateClick:E,contentEl:M,globalTop:b,localTop:m,updateLocation:w}}});function gn(e){return vt(e,Object.keys(nn.props))}const on=["elevated","flat","tonal","outlined","text","plain"];function hn(e,t){return _(We,null,[e&&_("span",{key:"overlay",class:`${t}__overlay`},null),_("span",{key:"underlay",class:`${t}__underlay`},null)])}const yn=R({color:String,variant:{type:String,default:"elevated",validator:e=>on.includes(e)}},"variant");function bn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:me();const n=h(()=>{const{variant:r}=we(e);return`${t}--variant-${r}`}),{colorClasses:o,colorStyles:a}=he(h(()=>{const{variant:r,color:i}=we(e);return{[["elevated","flat"].includes(r)?"background":"text"]:i}}));return{colorClasses:o,colorStyles:a,variantClasses:n}}const _e={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},pn=R({location:String},"location");function wn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:o}=He();return{locationStyles:h(()=>{if(!e.location)return{};const{side:r,align:i}=se(e.location.split(" ").length>1?e.location:`${e.location} center`,o.value);function l(f){return n?n(f):0}const s={};return r!=="center"&&(t?s[_e[r]]=`calc(100% - ${l(r)}px)`:s[r]=0),i!=="center"?t?s[_e[i]]=`calc(100% - ${l(i)}px)`:s[i]=0:(r==="center"?s.top=s.left="50%":s[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",s.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),s})}}const an=["static","relative","fixed","absolute","sticky"],xn=R({position:{type:String,validator:e=>an.includes(e)}},"position");function Sn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:me();return{positionClasses:h(()=>e.position?`${t}--${e.position}`:void 0)}}const kn=R({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function En(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:me();return{roundedClasses:h(()=>{const o=ve(e)?e.value:e.rounded,a=[];if(o===!0||o==="")a.push(`${t}--rounded`);else if(typeof o=="string"||o===0)for(const r of String(o).split(" "))a.push(`rounded-${r}`);return a})}}const ie=Symbol("Forwarded refs");function On(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return e[ie]=n,new Proxy(e,{get(a,r){if(Reflect.has(a,r))return Reflect.get(a,r);for(const i of n)if(i.value&&Reflect.has(i.value,r)){const l=Reflect.get(i.value,r);return typeof l=="function"?l.bind(i.value):l}},getOwnPropertyDescriptor(a,r){const i=Reflect.getOwnPropertyDescriptor(a,r);if(i)return i;if(!(typeof r=="symbol"||r.startsWith("__"))){for(const l of n){if(!l.value)continue;const s=Reflect.getOwnPropertyDescriptor(l.value,r);if(s)return s;if("_"in l.value&&"setupState"in l.value._){const f=Reflect.getOwnPropertyDescriptor(l.value._.setupState,r);if(f)return f}}for(const l of n){let s=l.value&&Object.getPrototypeOf(l.value);for(;s;){const f=Reflect.getOwnPropertyDescriptor(s,r);if(f)return f;s=Object.getPrototypeOf(s)}}for(const l of n){const s=l.value&&l.value[ie];if(!s)continue;const f=s.slice();for(;f.length;){const u=f.shift(),d=Reflect.getOwnPropertyDescriptor(u.value,r);if(d)return d;const v=u.value&&u.value[ie];v&&f.push(...v)}}}}})}export{sn as A,gt as B,jt as C,kt as D,zt as M,fn as V,pn as a,xn as b,kn as c,yn as d,tn as e,wn as f,Sn as g,Xt as h,bn as i,En as j,wt as k,gn as l,un as m,hn as n,nn as o,On as p,mn as q,Ut as r,Ct as s,vn as t,cn as u,Rt as v,dn as w,ht as x,ln as y,yt as z};
