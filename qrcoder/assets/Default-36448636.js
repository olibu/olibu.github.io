import{u as wt,m as ke,p as Ve,f as ve,a as me,b as $e,B as ye,g as Te,c as Ie,n as St,d as kt,e as xt,h as _t,i as Et,j as Ct,k as Ot,l as Pt,s as Lt,o as le,M as At,q as Rt,r as Vt,t as $t,v as Tt,w as It,x as Nt,y as Bt,z as Mt,A as jt,V as Ft,C as Dt,D as Wt}from"./forwardRefs-f3d8d136.js";import{p as Y,i as se,c as g,r as $,a as U,g as ie,o as re,b as I,d as Ye,f as Ht,e as xe,h as ue,j as Ze,I as H,w as N,k as ce,n as ne,l as zt,m as _e,q,S as qt,s as Ut,t as Gt,u as Ne,v as Yt,x as Ke,y as Xe,z as Ee,A as Je,B as Qe,C as Ce,D as et,E as Zt,F as O,G,H as ge,T as Kt,J as Xt,K as Jt,L as Qt,M as en,N as tn,O as nn,P as on,Q as K,R as Q,U as ee,V as an,W as ln,X as z,_ as sn,Y as rn,Z as Be,$ as Me,a0 as un,a1 as cn}from"./index-510d296b.js";function tt(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function fn(e){for(;e;){if(Oe(e))return e;e=e.parentElement}return document.scrollingElement}function oe(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(Oe(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function Oe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function dn(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const pe=Symbol.for("vuetify:layout"),vn=Symbol.for("vuetify:layout-item"),je=1e3,mn=Y({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function yn(){const e=se(pe);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}const gn=(e,t,n,o)=>{let a={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...a}}];for(const s of e){const l=t.get(s),c=n.get(s),d=o.get(s);if(!l||!c||!d)continue;const u={...a,[l.value]:parseInt(a[l.value],10)+(d.value?parseInt(c.value,10):0)};i.push({id:s,layer:u}),a=u}return i};function hn(e){const t=se(pe,null),n=g(()=>t?t.rootZIndex.value-100:je),o=$([]),a=U(new Map),i=U(new Map),s=U(new Map),l=U(new Map),c=U(new Map),{resizeRef:d,contentRect:u}=wt(),b=g(()=>{const w=new Map,V=e.overlaps??[];for(const S of V.filter(A=>A.includes(":"))){const[A,E]=S.split(":");if(!o.value.includes(A)||!o.value.includes(E))continue;const _=a.get(A),k=a.get(E),y=i.get(A),h=i.get(E);!_||!k||!y||!h||(w.set(E,{position:_.value,amount:parseInt(y.value,10)}),w.set(A,{position:k.value,amount:-parseInt(h.value,10)}))}return w}),v=g(()=>{const w=[...new Set([...s.values()].map(S=>S.value))].sort((S,A)=>S-A),V=[];for(const S of w){const A=o.value.filter(E=>{var _;return((_=s.get(E))==null?void 0:_.value)===S});V.push(...A)}return gn(V,a,i,l)}),x=g(()=>!Array.from(c.values()).some(w=>w.value)),f=g(()=>v.value[v.value.length-1].layer),m=g(()=>({"--v-layout-left":I(f.value.left),"--v-layout-right":I(f.value.right),"--v-layout-top":I(f.value.top),"--v-layout-bottom":I(f.value.bottom),...x.value?void 0:{transition:"none"}})),C=g(()=>v.value.slice(1).map((w,V)=>{let{id:S}=w;const{layer:A}=v.value[V],E=i.get(S),_=a.get(S);return{id:S,...A,size:Number(E.value),position:_.value}})),L=w=>C.value.find(V=>V.id===w),P=ie("createLayout"),r=$(!1);re(()=>{r.value=!0}),Ye(pe,{register:(w,V)=>{let{id:S,order:A,position:E,layoutSize:_,elementSize:k,active:y,disableTransitions:h,absolute:T}=V;s.set(S,A),a.set(S,E),i.set(S,_),l.set(S,y),h&&c.set(S,h);const W=Ht(vn,P==null?void 0:P.vnode).indexOf(w);W>-1?o.value.splice(W,0,S):o.value.push(S);const R=g(()=>C.value.findIndex(X=>X.id===S)),p=g(()=>n.value+v.value.length*2-R.value*2),M=g(()=>{const X=E.value==="left"||E.value==="right",fe=E.value==="right",bt=E.value==="bottom",Re={[E.value]:0,zIndex:p.value,transform:`translate${X?"X":"Y"}(${(y.value?0:-110)*(fe||bt?-1:1)}%)`,position:T.value||n.value!==je?"absolute":"fixed",...x.value?void 0:{transition:"none"}};if(!r.value)return Re;const j=C.value[R.value];if(!j)throw new Error(`[Vuetify] Could not find layout item "${S}"`);const de=b.value.get(S);return de&&(j[de.position]+=de.amount),{...Re,height:X?`calc(100% - ${j.top}px - ${j.bottom}px)`:k.value?`${k.value}px`:void 0,left:fe?void 0:`${j.left}px`,right:fe?`${j.right}px`:void 0,top:E.value!=="bottom"?`${j.top}px`:void 0,bottom:E.value!=="top"?`${j.bottom}px`:void 0,width:X?k.value?`${k.value}px`:void 0:`calc(100% - ${j.left}px - ${j.right}px)`}}),Z=g(()=>({zIndex:p.value-1}));return{layoutItemStyles:M,layoutItemScrimStyles:Z,zIndex:p}},unregister:w=>{s.delete(w),a.delete(w),i.delete(w),l.delete(w),c.delete(w),o.value=o.value.filter(V=>V!==w)},mainRect:f,mainStyles:m,getLayoutItem:L,items:C,layoutRect:u,rootZIndex:n});const F=g(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),D=g(()=>({zIndex:n.value,position:t?"relative":void 0,overflow:t?"hidden":void 0}));return{layoutClasses:F,layoutStyles:D,getLayoutItem:L,items:C,layoutRect:u,layoutRef:d}}const Pe=["sm","md","lg","xl","xxl"],nt=(()=>Pe.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),ot=(()=>Pe.reduce((e,t)=>(e["offset"+xe(t)]={type:[String,Number],default:null},e),{}))(),at=(()=>Pe.reduce((e,t)=>(e["order"+xe(t)]={type:[String,Number],default:null},e),{}))(),Fe={col:Object.keys(nt),offset:Object.keys(ot),order:Object.keys(at)};function pn(e,t,n){let o=e;if(!(n==null||n===!1)){if(t){const a=t.replace(e,"");o+=`-${a}`}return e==="col"&&(o="v-"+o),e==="col"&&(n===""||n===!0)||(o+=`-${n}`),o.toLowerCase()}}const bn=["auto","start","end","center","baseline","stretch"],wn=ue({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...nt,offset:{type:[String,Number],default:null},...ot,order:{type:[String,Number],default:null},...at,alignSelf:{type:String,default:null,validator:e=>bn.includes(e)},...ke()},setup(e,t){let{slots:n}=t;const o=g(()=>{const a=[];let i;for(i in Fe)Fe[i].forEach(l=>{const c=e[l],d=pn(i,l,c);d&&a.push(d)});const s=a.some(l=>l.startsWith("v-col-"));return a.push({"v-col":!s||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return Ze(e.tag,{class:o.value},(a=n.default)==null?void 0:a.call(n))}}}),Sn=["sm","md","lg","xl","xxl"],Le=["start","end","center"],lt=["space-between","space-around","space-evenly"];function Ae(e,t){return Sn.reduce((n,o)=>(n[e+xe(o)]=t(),n),{})}const kn=[...Le,"baseline","stretch"],st=e=>kn.includes(e),it=Ae("align",()=>({type:String,default:null,validator:st})),xn=[...Le,...lt],rt=e=>xn.includes(e),ut=Ae("justify",()=>({type:String,default:null,validator:rt})),_n=[...Le,...lt,"stretch"],ct=e=>_n.includes(e),ft=Ae("alignContent",()=>({type:String,default:null,validator:ct})),De={align:Object.keys(it),justify:Object.keys(ut),alignContent:Object.keys(ft)},En={align:"align",justify:"justify",alignContent:"align-content"};function Cn(e,t,n){let o=En[e];if(n!=null){if(t){const a=t.replace(e,"");o+=`-${a}`}return o+=`-${n}`,o.toLowerCase()}}const On=ue({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:st},...it,justify:{type:String,default:null,validator:rt},...ut,alignContent:{type:String,default:null,validator:ct},...ft,...ke()},setup(e,t){let{slots:n}=t;const o=g(()=>{const a=[];let i;for(i in De)De[i].forEach(s=>{const l=e[s],c=Cn(i,s,l);c&&a.push(c)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return Ze(e.tag,{class:["v-row",o.value]},(a=n.default)==null?void 0:a.call(n))}}});const Pn=Y({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Ln(e,t){const n={},o=a=>()=>{if(!H)return Promise.resolve(!0);const i=a==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(s=>{const l=parseInt(e[a]??0,10);n[a]=window.setTimeout(()=>{t==null||t(i),s(i)},l)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const An=Symbol.for("vuetify:v-menu"),Rn=Y({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Pn()},"v-overlay-activator");function Vn(e,t){let{isActive:n,isTop:o}=t;const a=$();let i=!1,s=!1,l=!0;const c=g(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),d=g(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:u,runCloseDelay:b}=Ln(e,r=>{r===(e.openOnHover&&i||c.value&&s)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==r&&(l=!0),n.value=r)}),v={click:r=>{r.stopPropagation(),a.value=r.currentTarget||r.target,n.value=!n.value},mouseenter:r=>{i=!0,a.value=r.currentTarget||r.target,u()},mouseleave:r=>{i=!1,b()},focus:r=>{qt&&!r.target.matches(":focus-visible")||(s=!0,r.stopPropagation(),a.value=r.currentTarget||r.target,u())},blur:r=>{s=!1,r.stopPropagation(),b()}},x=g(()=>{const r={};return d.value&&(r.click=v.click),e.openOnHover&&(r.mouseenter=v.mouseenter,r.mouseleave=v.mouseleave),c.value&&(r.focus=v.focus,r.blur=v.blur),r}),f=g(()=>{const r={};if(e.openOnHover&&(r.mouseenter=()=>{i=!0,u()},r.mouseleave=()=>{i=!1,b()}),e.closeOnContentClick){const F=se(An,null);r.click=()=>{n.value=!1,F==null||F.closeParents()}}return r}),m=g(()=>{const r={};return e.openOnHover&&(r.mouseenter=()=>{l&&(i=!0,l=!1,u())},r.mouseleave=()=>{i=!1,b()}),r});N(o,r=>{r&&(e.openOnHover&&!i&&(!c.value||!s)||c.value&&!s&&(!e.openOnHover||!i))&&(n.value=!1)});const C=$();ce(()=>{C.value&&ne(()=>{const r=C.value;a.value=zt(r)?r.$el:r})});const L=ie("useActivator");let P;return N(()=>!!e.activator,r=>{r&&H?(P=_e(),P.run(()=>{$n(e,L,{activatorEl:a,activatorEvents:x})})):P&&P.stop()},{flush:"post",immediate:!0}),q(()=>{var r;(r=P)==null||r.stop()}),{activatorEl:a,activatorRef:C,activatorEvents:x,contentEvents:f,scrimEvents:m}}function $n(e,t,n){let{activatorEl:o,activatorEvents:a}=n;N(()=>e.activator,(c,d)=>{if(d&&c!==d){const u=l(d);u&&s(u)}c&&ne(()=>i())},{immediate:!0}),N(()=>e.activatorProps,()=>{i()}),q(()=>{s()});function i(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&(Object.entries(a.value).forEach(u=>{let[b,v]=u;c.addEventListener(b,v)}),Object.keys(d).forEach(u=>{d[u]==null?c.removeAttribute(u):c.setAttribute(u,d[u])}))}function s(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&(Object.entries(a.value).forEach(u=>{let[b,v]=u;c.removeEventListener(b,v)}),Object.keys(d).forEach(u=>{c.removeAttribute(u)}))}function l(){var c;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,u;if(d)if(d==="parent"){var b,v;let x=t==null||(b=t.proxy)==null||(v=b.$el)==null?void 0:v.parentNode;for(;x.hasAttribute("data-no-activator");)x=x.parentNode;u=x}else typeof d=="string"?u=document.querySelector(d):"$el"in d?u=d.$el:u=d;return o.value=((c=u)==null?void 0:c.nodeType)===Node.ELEMENT_NODE?u:null,o.value}}const Tn=Y({eager:Boolean},"lazy");function In(e,t){const n=$(!1),o=g(()=>n.value||e.eager||t.value);N(t,()=>n.value=!0);function a(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:o,onAfterLeave:a}}function he(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Nn(e,t){return{x:e.x-t.x,y:e.y-t.y}}function We(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,i=n==="top"?0:n==="bottom"?t.height:n;return he({x:a,y:i},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,i=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return he({x:a,y:i},t)}return he({x:t.width/2,y:t.height/2},t)}const dt={static:jn,connected:Dn},Bn=Y({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in dt},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function Mn(e,t){const n=$({}),o=$();let a;ce(async()=>{var s;(s=a)==null||s.stop(),o.value=void 0,H&&t.isActive.value&&e.locationStrategy&&(a=_e(),e.locationStrategy!=="connected"&&await ne(),a.run(()=>{if(typeof e.locationStrategy=="function"){var l;o.value=(l=e.locationStrategy(t,e,n))==null?void 0:l.updateLocation}else{var c;o.value=(c=dt[e.locationStrategy](t,e,n))==null?void 0:c.updateLocation}}))}),H&&window.addEventListener("resize",i,{passive:!0}),q(()=>{var s;H&&window.removeEventListener("resize",i),o.value=void 0,(s=a)==null||s.stop()});function i(s){var l;(l=o.value)==null||l.call(o,s)}return{contentStyles:n,updateLocation:o}}function jn(){}function Fn(e){const t=St(e);return t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Dn(e,t,n){const o=dn(e.activatorEl.value);o&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:a,preferredOrigin:i}=Ut(()=>{const f=Ve(t.location,e.isRtl.value),m=t.origin==="overlap"?f:t.origin==="auto"?ve(f):Ve(t.origin,e.isRtl.value);return f.side===m.side&&f.align===me(m).align?{preferredAnchor:$e(f),preferredOrigin:$e(m)}:{preferredAnchor:f,preferredOrigin:m}}),[s,l,c,d]=["minWidth","minHeight","maxWidth","maxHeight"].map(f=>g(()=>{const m=parseFloat(t[f]);return isNaN(m)?1/0:m})),u=g(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const f=t.offset.split(" ").map(parseFloat);return f.length<2&&f.push(0),f}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let b=!1;const v=new ResizeObserver(()=>{b&&x()});N([e.activatorEl,e.contentEl],(f,m)=>{let[C,L]=f,[P,r]=m;P&&v.unobserve(P),C&&v.observe(C),r&&v.unobserve(r),L&&v.observe(L)},{immediate:!0}),q(()=>{v.disconnect()});function x(){if(b=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>b=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const f=e.activatorEl.value.getBoundingClientRect(),m=Fn(e.contentEl.value),C=oe(e.contentEl.value),L=12;C.length||(C.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(m.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),m.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const P=C.reduce((_,k)=>{const y=k.getBoundingClientRect(),h=new ye({x:k===document.documentElement?0:y.x,y:k===document.documentElement?0:y.y,width:k.clientWidth,height:k.clientHeight});return _?new ye({x:Math.max(_.left,h.left),y:Math.max(_.top,h.top),width:Math.min(_.right,h.right)-Math.max(_.left,h.left),height:Math.min(_.bottom,h.bottom)-Math.max(_.top,h.top)}):h},void 0);P.x+=L,P.y+=L,P.width-=L*2,P.height-=L*2;let r={anchor:a.value,origin:i.value};function F(_){const k=new ye(m),y=We(_.anchor,f),h=We(_.origin,k);let{x:T,y:B}=Nn(y,h);switch(_.anchor.side){case"top":B-=u.value[0];break;case"bottom":B+=u.value[0];break;case"left":T-=u.value[0];break;case"right":T+=u.value[0];break}switch(_.anchor.align){case"top":B-=u.value[1];break;case"bottom":B+=u.value[1];break;case"left":T-=u.value[1];break;case"right":T+=u.value[1];break}return k.x+=T,k.y+=B,k.width=Math.min(k.width,c.value),k.height=Math.min(k.height,d.value),{overflows:Ie(k,P),x:T,y:B}}let D=0,w=0;const V={x:0,y:0},S={x:!1,y:!1};let A=-1;for(;;){if(A++>10){Gt("Infinite loop detected in connectedLocationStrategy");break}const{x:_,y:k,overflows:y}=F(r);D+=_,w+=k,m.x+=_,m.y+=k;{const h=Te(r.anchor),T=y.x.before||y.x.after,B=y.y.before||y.y.after;let W=!1;if(["x","y"].forEach(R=>{if(R==="x"&&T&&!S.x||R==="y"&&B&&!S.y){const p={anchor:{...r.anchor},origin:{...r.origin}},M=R==="x"?h==="y"?me:ve:h==="y"?ve:me;p.anchor=M(p.anchor),p.origin=M(p.origin);const{overflows:Z}=F(p);(Z[R].before<=y[R].before&&Z[R].after<=y[R].after||Z[R].before+Z[R].after<(y[R].before+y[R].after)/2)&&(r=p,W=S[R]=!0)}}),W)continue}y.x.before&&(D+=y.x.before,m.x+=y.x.before),y.x.after&&(D-=y.x.after,m.x-=y.x.after),y.y.before&&(w+=y.y.before,m.y+=y.y.before),y.y.after&&(w-=y.y.after,m.y-=y.y.after);{const h=Ie(m,P);V.x=P.width-h.x.before-h.x.after,V.y=P.height-h.y.before-h.y.after,D+=h.x.before,m.x+=h.x.before,w+=h.y.before,m.y+=h.y.before}break}const E=Te(r.anchor);Object.assign(n.value,{"--v-overlay-anchor-origin":`${r.anchor.side} ${r.anchor.align}`,transformOrigin:`${r.origin.side} ${r.origin.align}`,top:I(He(w)),left:I(He(D)),minWidth:I(E==="y"?Math.min(s.value,f.width):s.value),maxWidth:I(ze(Ne(V.x,s.value===1/0?0:s.value,c.value))),maxHeight:I(ze(Ne(V.y,l.value===1/0?0:l.value,d.value)))})}return N(()=>[a.value,i.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>x(),{immediate:!o}),o&&ne(()=>x()),requestAnimationFrame(()=>{n.value.maxHeight&&x()}),{updateLocation:x}}function He(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function ze(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let be=!0;const ae=[];function Wn(e){!be||ae.length?(ae.push(e),we()):(be=!1,e(),we())}let qe=-1;function we(){cancelAnimationFrame(qe),qe=requestAnimationFrame(()=>{const e=ae.shift();e&&e(),ae.length?we():be=!0})}const Se={none:null,close:qn,block:Un,reposition:Gn},Hn=Y({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in Se}},"v-overlay-scroll-strategies");function zn(e,t){if(!H)return;let n;ce(async()=>{var o;(o=n)==null||o.stop(),t.isActive.value&&e.scrollStrategy&&(n=_e(),await ne(),n.run(()=>{if(typeof e.scrollStrategy=="function")e.scrollStrategy(t,e);else{var a;(a=Se[e.scrollStrategy])==null||a.call(Se,t,e)}}))}),q(()=>{var o;(o=n)==null||o.stop()})}function qn(e){function t(n){e.isActive.value=!1}vt(e.activatorEl.value??e.contentEl.value,t)}function Un(e,t){var n;const o=(n=e.root.value)==null?void 0:n.offsetParent,a=[...new Set([...oe(e.activatorEl.value,t.contained?o:void 0),...oe(e.contentEl.value,t.contained?o:void 0)])].filter(l=>!l.classList.contains("v-overlay-scroll-blocked")),i=window.innerWidth-document.documentElement.offsetWidth,s=(l=>Oe(l)&&l)(o||document.documentElement);s&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((l,c)=>{l.style.setProperty("--v-body-scroll-x",I(-l.scrollLeft)),l.style.setProperty("--v-body-scroll-y",I(-l.scrollTop)),l.style.setProperty("--v-scrollbar-offset",I(i)),l.classList.add("v-overlay-scroll-blocked")}),q(()=>{a.forEach((l,c)=>{const d=parseFloat(l.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(l.style.getPropertyValue("--v-body-scroll-y"));l.style.removeProperty("--v-body-scroll-x"),l.style.removeProperty("--v-body-scroll-y"),l.style.removeProperty("--v-scrollbar-offset"),l.classList.remove("v-overlay-scroll-blocked"),l.scrollLeft=-d,l.scrollTop=-u}),s&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Gn(e){let t=!1,n=-1;function o(a){Wn(()=>{var i,s;const l=performance.now();(i=(s=e.updateLocation).value)==null||i.call(s,a),t=(performance.now()-l)/(1e3/60)>2})}vt(e.activatorEl.value??e.contentEl.value,a=>{t?(cancelAnimationFrame(n),n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{o(a)})})):o(a)})}function vt(e,t){const n=[document,...oe(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),q(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}function Yn(){if(!H)return $(!1);const{ssr:e}=Yt();if(e){const t=$(!1);return re(()=>{t.value=!0}),t}else return $(!0)}function mt(){const t=ie("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const Ue=Symbol.for("vuetify:stack"),J=U([]);function Zn(e,t,n){const o=ie("useStack"),a=!n,i=se(Ue,void 0),s=U({activeChildren:new Set});Ye(Ue,s);const l=$(+t.value);Ke(e,()=>{var u;const b=(u=J.at(-1))==null?void 0:u[1];l.value=b?b+10:+t.value,a&&J.push([o.uid,l.value]),i==null||i.activeChildren.add(o.uid),q(()=>{if(a){const v=J.findIndex(x=>x[0]===o.uid);J.splice(v,1)}i==null||i.activeChildren.delete(o.uid)})});const c=$(!0);a&&ce(()=>{var u;const b=((u=J.at(-1))==null?void 0:u[0])===o.uid;setTimeout(()=>c.value=b)});const d=g(()=>!s.activeChildren.size);return{globalTop:Xe(c),localTop:d,stackStyles:g(()=>({zIndex:l.value}))}}function te(e){return{teleportTarget:g(()=>{const n=e.value;if(n===!0||!H)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o!=null){if(!te.cache.has(o)){const a=document.createElement("div");a.className="v-overlay-container",o.appendChild(a),te.cache.set(o,a)}return te.cache.get(o)}})}}te.cache=new WeakMap;function Kn(){return!0}function yt(e,t,n){if(!e||gt(e,n)===!1)return!1;const o=tt(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(i=>i==null?void 0:i.contains(e.target))}function gt(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Kn)(e)}function Xn(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&yt(e,t,n)&&setTimeout(()=>{gt(e,n)&&o&&o(e)},0)}function Ge(e,t){const n=tt(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Jn={mounted(e,t){const n=a=>Xn(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=yt(a,e,t)};Ge(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(Ge(e,n=>{var o;if(!n||!((o=e._clickOutside)!=null&&o[t.instance.$.uid]))return;const{onClick:a,onMousedown:i}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",a,!0),n.removeEventListener("mousedown",i,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Qn(e){const{modelValue:t,color:n,...o}=e;return O(nn,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&O("div",G({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const ht=Y({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...Rn(),...kt(),...Tn(),...Bn(),...Hn(),...Ee(),...xt()},"v-overlay"),pt=Je()({name:"VOverlay",directives:{ClickOutside:Jn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...ht()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const i=Qe(e,"modelValue"),s=g({get:()=>i.value,set:p=>{p&&e.disabled||(i.value=p)}}),{teleportTarget:l}=te(g(()=>e.attach||e.contained)),{themeClasses:c}=Ce(e),{rtlClasses:d,isRtl:u}=et(),{hasContent:b,onAfterLeave:v}=In(e,s),x=_t(g(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:f,localTop:m,stackStyles:C}=Zn(s,Zt(e,"zIndex"),e._disableGlobalStack),{activatorEl:L,activatorRef:P,activatorEvents:r,contentEvents:F,scrimEvents:D}=Vn(e,{isActive:s,isTop:m}),{dimensionStyles:w}=Et(e),V=Yn(),{scopeId:S}=mt();N(()=>e.disabled,p=>{p&&(s.value=!1)});const A=$(),E=$(),{contentStyles:_,updateLocation:k}=Mn(e,{isRtl:u,contentEl:E,activatorEl:L,isActive:s});zn(e,{root:A,contentEl:E,activatorEl:L,isActive:s,updateLocation:k});function y(p){a("click:outside",p),e.persistent?R():s.value=!1}function h(){return s.value&&f.value}H&&N(s,p=>{p?window.addEventListener("keydown",T):window.removeEventListener("keydown",T)},{immediate:!0});function T(p){p.key==="Escape"&&f.value&&(e.persistent?R():s.value=!1)}const B=Ct();Ke(()=>e.closeOnBack,()=>{Ot(B,p=>{f.value&&s.value?(p(!1),e.persistent?R():s.value=!1):p()})});const W=$();N(()=>s.value&&(e.absolute||e.contained)&&l.value==null,p=>{if(p){const M=fn(A.value);M&&M!==document.scrollingElement&&(W.value=M.scrollTop)}});function R(){e.noClickAnimation||E.value&&Pt(E.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Lt})}return le(()=>{var p,M;return O(en,null,[(p=n.activator)==null?void 0:p.call(n,{isActive:s.value,props:G({ref:P},ge(r.value),e.activatorProps)}),V.value&&O(Kt,{disabled:!l.value,to:l.value},{default:()=>[b.value&&O("div",G({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},c.value,d.value],style:[C.value,{top:I(W.value)}],ref:A},S,o),[O(Qn,G({color:x,modelValue:s.value&&!!e.scrim},ge(D.value)),null),O(At,{appear:!0,persisted:!0,transition:e.transition,target:L.value,onAfterLeave:()=>{v(),a("afterLeave")}},{default:()=>[Xt(O("div",G({ref:E,class:["v-overlay__content",e.contentClass],style:[w.value,_.value]},ge(F.value),e.contentProps),[(M=n.default)==null?void 0:M.call(n,{isActive:s})]),[[Jt,s.value],[Qt("click-outside"),{handler:y,closeConditional:h,include:()=>[L.value]}]])]})])]})])}),{activatorEl:L,animateClick:R,contentEl:E,globalTop:f,localTop:m,updateLocation:k}}});function eo(e){return tn(e,Object.keys(pt.props))}const to=Je()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Rt({location:"bottom"}),...Vt(),...$t(),...Tt(),...Ee(),...on(ht({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const o=Qe(e,"modelValue"),{locationStyles:a}=It(e),{positionClasses:i}=Nt(e),{scopeId:s}=mt(),{themeClasses:l}=Ce(e),{colorClasses:c,colorStyles:d,variantClasses:u}=Bt(e),{roundedClasses:b}=Mt(e),v=$();N(o,f),N(()=>e.timeout,f),re(()=>{o.value&&f()});let x=-1;function f(){window.clearTimeout(x);const C=Number(e.timeout);!o.value||C===-1||(x=window.setTimeout(()=>{o.value=!1},C))}function m(){window.clearTimeout(x)}return le(()=>{const[C]=eo(e);return O(pt,G({ref:v,class:["v-snackbar",{"v-snackbar--active":o.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},i.value]},C,{modelValue:o.value,"onUpdate:modelValue":L=>o.value=L,contentProps:G({style:a.value},C.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none"},s),{default:()=>[O("div",{class:["v-snackbar__wrapper",l.value,c.value,b.value,u.value],style:[d.value],onPointerenter:m,onPointerleave:f},[jt(!1,"v-snackbar"),n.default&&O("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[n.default()]),n.actions&&O(Ft,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[O("div",{class:"v-snackbar__actions"},[n.actions()])]})])],activator:n.activator})}),Dt({},v)}}),no={class:"text-center"},oo={__name:"SnackbarCmp",setup(e){const t=Wt();return(n,o)=>(K(),Q("div",no,[O(to,{modelValue:z(t).snackbar.show,"onUpdate:modelValue":o[0]||(o[0]=a=>z(t).snackbar.show=a),color:"red",timeout:2e3},{default:ee(()=>[O(On,null,{default:ee(()=>[O(wn,{col:"8",align:"center"},{default:ee(()=>[an(ln(z(t).snackbar.text),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};function ao(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:o,onRegistered:a,onRegisteredSW:i,onRegisterError:s}=e;let l,c,d,u;const b=async(x=!0)=>{await d,await(u==null?void 0:u())};async function v(){if("serviceWorker"in navigator){const{Workbox:x}=await sn(()=>import("./workbox-window.prod.es5-295a6886.js"),[]);l=new x("/qrcoder/sw.js",{scope:"/qrcoder/",type:"classic"}),u=async()=>{c&&c.waiting&&await(l==null?void 0:l.messageSkipWaiting())},l.addEventListener("activated",f=>{!f.isUpdate&&f.isExternal?window.location.reload():f.isUpdate||o==null||o()});{const f=()=>{l==null||l.addEventListener("controlling",m=>{m.isUpdate&&window.location.reload()}),n==null||n()};l.addEventListener("waiting",f),l.addEventListener("externalwaiting",f)}l.register({immediate:t}).then(f=>{c=f,i?i("/qrcoder/sw.js",f):a==null||a(f)}).catch(f=>{s==null||s(f)})}}return d=v(),b}function lo(e={}){const{immediate:t=!0,onNeedRefresh:n,onOfflineReady:o,onRegistered:a,onRegisteredSW:i,onRegisterError:s}=e,l=$(!1),c=$(!1);return{updateServiceWorker:ao({immediate:t,onNeedRefresh(){l.value=!0,n==null||n()},onOfflineReady(){c.value=!0,o==null||o()},onRegistered:a,onRegisteredSW:i,onRegisterError:s}),offlineReady:c,needRefresh:l}}const so={key:0,class:"pwa-toast",role:"alert"},io={class:"message"},ro={key:0},uo={key:1},co=rn({__name:"ReloadPrompt",setup(e){const{offlineReady:t,needRefresh:n,updateServiceWorker:o}=lo(),a=async()=>{t.value=!1,n.value=!1};return(i,s)=>z(t)||z(n)?(K(),Q("div",so,[Be("div",io,[z(t)?(K(),Q("span",ro," App ready to work offline ")):(K(),Q("span",uo," New version available! "))]),z(n)?(K(),Q("button",{key:0,onClick:s[0]||(s[0]=l=>z(o)())}," Update ")):Me("",!0),Be("button",{onClick:a}," Close ")])):Me("",!0)}});const fo=ue({name:"VApp",props:{...mn({fullHeight:!0}),...Ee()},setup(e,t){let{slots:n}=t;const o=Ce(e),{layoutClasses:a,layoutStyles:i,getLayoutItem:s,items:l,layoutRef:c}=hn(e),{rtlClasses:d}=et();return le(()=>{var u;return O("div",{ref:c,class:["v-application",o.themeClasses.value,a.value,d.value],style:i.value},[O("div",{class:"v-application__wrap"},[(u=n.default)==null?void 0:u.call(n)])])}),{getLayoutItem:s,items:l,theme:o}}});function vo(){const e=$(!1);return re(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:g(()=>e.value?void 0:{transition:"none !important"}),isBooted:Xe(e)}}const mo=ue({name:"VMain",props:{scrollable:Boolean,...ke({tag:"main"})},setup(e,t){let{slots:n}=t;const{mainStyles:o}=yn(),{ssrBootStyles:a}=vo();return le(()=>{var i,s;return O(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[o.value,a.value]},{default:()=>[e.scrollable?O("div",{class:"v-main__scroller"},[(i=n.default)==null?void 0:i.call(n)]):(s=n.default)==null?void 0:s.call(n)]})}),{}}}),ho={__name:"Default",setup(e){return(t,n)=>{const o=un("router-view");return K(),cn(fo,null,{default:ee(()=>[O(mo,null,{default:ee(()=>[O(o),O(oo),O(co)]),_:1})]),_:1})}}};export{ho as default};