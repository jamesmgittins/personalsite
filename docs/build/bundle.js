var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const l="undefined"!=typeof window;let a=l?()=>window.performance.now():()=>Date.now(),c=l?t=>requestAnimationFrame(t):t;const u=new Set;function d(t){u.forEach((e=>{e.c(t)||(u.delete(e),e.f())})),0!==u.size&&c(d)}function m(t){let e;return 0===u.size&&c(d),{promise:new Promise((n=>{u.add(e={c:t,f:n})})),abort(){u.delete(e)}}}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function w(){return b(" ")}function v(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function k(t,e,n){t.classList[n?"add":"remove"](e)}const j=new Set;let S,A=0;function E(t,e,n,o,r,s,i,l=0){const a=16.666/o;let c="{\n";for(let t=0;t<=1;t+=a){const o=e+(n-e)*s(t);c+=100*t+`%{${i(o,1-o)}}\n`}const u=c+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${l}`,m=t.ownerDocument;j.add(m);const f=m.__svelte_stylesheet||(m.__svelte_stylesheet=m.head.appendChild($("style")).sheet),p=m.__svelte_rules||(m.__svelte_rules={});p[d]||(p[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${d} ${o}ms linear ${r}ms 1 both`,A+=1,d}function z(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),A-=r,A||c((()=>{A||(j.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),j.clear())})))}function D(t){S=t}const M=[],C=[],P=[],T=[],L=Promise.resolve();let J=!1;function B(t){P.push(t)}let O=!1;const W=new Set;function G(){if(!O){O=!0;do{for(let t=0;t<M.length;t+=1){const e=M[t];D(e),N(e.$$)}for(D(null),M.length=0;C.length;)C.pop()();for(let t=0;t<P.length;t+=1){const e=P[t];W.has(e)||(W.add(e),e())}P.length=0}while(M.length);for(;T.length;)T.pop()();J=!1,O=!1,W.clear()}}function N(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}let I;function R(){return I||(I=Promise.resolve(),I.then((()=>{I=null}))),I}function q(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const H=new Set;let Q;function F(){Q={r:0,c:[],p:Q}}function K(){Q.r||r(Q.c),Q=Q.p}function V(t,e){t&&t.i&&(H.delete(t),t.i(e))}function X(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),Q.c.push((()=>{H.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const Z={duration:0};function U(n,o,r){let i,l,c=o(n,r),u=!1,d=0;function f(){i&&z(n,i)}function p(){const{delay:o=0,duration:r=300,easing:s=e,tick:p=t,css:g}=c||Z;g&&(i=E(n,0,1,r,o,s,g,d++)),p(0,1);const h=a()+o,$=h+r;l&&l.abort(),u=!0,B((()=>q(n,!0,"start"))),l=m((t=>{if(u){if(t>=$)return p(1,0),q(n,!0,"end"),f(),u=!1;if(t>=h){const e=s((t-h)/r);p(e,1-e)}}return u}))}let g=!1;return{start(){g||(z(n),s(c)?(c=c(),R().then(p)):p())},invalidate(){g=!1},end(){u&&(f(),u=!1)}}}function Y(n,o,i,l){let c=o(n,i),u=l?0:1,d=null,f=null,p=null;function g(){p&&z(n,p)}function h(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function $(o){const{delay:s=0,duration:i=300,easing:l=e,tick:$=t,css:b}=c||Z,w={start:a()+s,b:o};o||(w.group=Q,Q.r+=1),d||f?f=w:(b&&(g(),p=E(n,u,o,i,s,l,b)),o&&$(0,1),d=h(w,i),B((()=>q(n,o,"start"))),m((t=>{if(f&&t>f.start&&(d=h(f,i),f=null,q(n,d.b,"start"),b&&(g(),p=E(n,u,d.b,d.duration,0,l,c.css))),d)if(t>=d.end)$(u=d.b,1-u),q(n,d.b,"end"),f||(d.b?g():--d.group.r||r(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;u=d.a+d.d*l(e/d.duration),$(u,1-u)}return!(!d&&!f)})))}return{run(t){s(c)?R().then((()=>{c=c(),$(t)})):$(t)},end(){g(),d=f=null}}}function tt(t){t&&t.c()}function et(t,e,o){const{fragment:i,on_mount:l,on_destroy:a,after_update:c}=t.$$;i&&i.m(e,o),B((()=>{const e=l.map(n).filter(s);a?a.push(...e):r(e),t.$$.on_mount=[]})),c.forEach(B)}function nt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){-1===t.$$.dirty[0]&&(M.push(t),J||(J=!0,L.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(e,n,s,i,l,a,c=[-1]){const u=S;D(e);const d=n.props||{},m=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:c,skip_bound:!1};let f=!1;if(m.ctx=s?s(e,d,((t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&l(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),f&&ot(e,t)),n})):[],m.update(),f=!0,r(m.before_update),m.fragment=!!i&&i(m.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);m.fragment&&m.fragment.l(t),t.forEach(g)}else m.fragment&&m.fragment.c();n.intro&&V(e.$$.fragment),et(e,n.target,n.anchor),G()}D(u)}class st{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function it(t){const e=t-1;return e*e*e+1}function lt(t){return-.5*(Math.cos(Math.PI*t)-1)}function at(t,{delay:e=0,duration:n=400,easing:o=it,x:r=0,y:s=0,opacity:i=0}){const l=getComputedStyle(t),a=+l.opacity,c="none"===l.transform?"":l.transform,u=a*(1-i);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*r}px, ${(1-t)*s}px);\n\t\t\topacity: ${a-u*e}`}}function ct(e){let n,o,r,s,i;return{c(){n=$("h1"),n.textContent="James Gittins",r=w(),s=$("h2"),s.textContent="Software Developer",y(n,"class","svelte-9fboda"),y(s,"class","svelte-9fboda")},m(t,e){p(t,n,e),p(t,r,e),p(t,s,e)},p(t,e){},i(t){o||B((()=>{o=U(n,at,{x:-500,duration:2e3,easing:lt}),o.start()})),i||B((()=>{i=U(s,at,{x:500,duration:2e3,easing:lt}),i.start()}))},o:t,d(t){t&&g(n),t&&g(r),t&&g(s)}}}function ut(e){let n,o,r=e[0]&&ct();return{c(){n=$("div"),o=$("div"),r&&r.c(),y(o,"class","table-cell svelte-9fboda"),y(n,"class","hero svelte-9fboda")},m(t,e){p(t,n,e),f(n,o),r&&r.m(o,null)},p(t,[e]){t[0]?r?1&e&&V(r,1):(r=ct(),r.c(),V(r,1),r.m(o,null)):r&&(r.d(1),r=null)},i(t){V(r)},o:t,d(t){t&&g(n),r&&r.d()}}}function dt(t,e,n){let o=!1;return setTimeout((()=>n(0,o=!0)),200),[o]}class mt extends st{constructor(t){super(),rt(this,t,dt,ut,i,{})}}function ft(t,e,n){const o=t.slice();return o[9]=e[n],o[11]=n,o}function pt(n){let o,i,l,c;return{c(){o=$("div"),y(o,"class","image svelte-6c9m4t"),_(o,"background-image","url(images/"+n[9]+")")},m(t,e){p(t,o,e),c=!0},p(t,e){(!c||1&e)&&_(o,"background-image","url(images/"+t[9]+")")},i(t){c||(B((()=>{l&&l.end(1),i||(i=U(o,n[3],!0)),i.start()})),c=!0)},o(u){i&&i.invalidate(),l=function(n,o,i){let l,c=o(n,i),u=!0;const d=Q;function f(){const{delay:o=0,duration:s=300,easing:i=e,tick:f=t,css:p}=c||Z;p&&(l=E(n,1,0,s,o,i,p));const g=a()+o,h=g+s;B((()=>q(n,!1,"start"))),m((t=>{if(u){if(t>=h)return f(0,1),q(n,!1,"end"),--d.r||r(d.c),!1;if(t>=g){const e=i((t-g)/s);f(1-e,e)}}return u}))}return d.r+=1,s(c)?R().then((()=>{c=c(),f()})):f(),{end(t){t&&c.tick&&c.tick(1,0),u&&(l&&z(n,l),u=!1)}}}(o,n[3],!1),c=!1},d(t){t&&g(o),t&&l&&l.end()}}}function gt(t){let e,n,o=t[11]==t[2]&&pt(t);return{c(){o&&o.c(),e=b("")},m(t,r){o&&o.m(t,r),p(t,e,r),n=!0},p(t,n){t[11]==t[2]?o?(o.p(t,n),4&n&&V(o,1)):(o=pt(t),o.c(),V(o,1),o.m(e.parentNode,e)):o&&(F(),X(o,1,1,(()=>{o=null})),K())},i(t){n||(V(o),n=!0)},o(t){X(o),n=!1},d(t){o&&o.d(t),t&&g(e)}}}function ht(t){let e,n,o,s,i,l,a,c,u,d;return{c(){e=$("a"),e.innerHTML="<span>&gt;</span>",s=w(),i=$("a"),i.innerHTML="<span>&lt;</span>",y(e,"href",n="javascript:void(0);"),y(e,"class","next svelte-6c9m4t"),y(i,"href",l="javascript:void(0);"),y(i,"class","prev svelte-6c9m4t")},m(n,o){p(n,e,o),p(n,s,o),p(n,i,o),c=!0,u||(d=[v(e,"click",t[5]),v(i,"click",t[6])],u=!0)},p(e,n){t=e},i(t){c||(B((()=>{o||(o=Y(e,at,{x:100,duration:300,easing:lt},!0)),o.run(1)})),B((()=>{a||(a=Y(i,at,{x:-100,duration:300,easing:lt},!0)),a.run(1)})),c=!0)},o(t){o||(o=Y(e,at,{x:100,duration:300,easing:lt},!1)),o.run(0),a||(a=Y(i,at,{x:-100,duration:300,easing:lt},!1)),a.run(0),c=!1},d(t){t&&g(e),t&&o&&o.end(),t&&g(s),t&&g(i),t&&a&&a.end(),u=!1,r(d)}}}function $t(t){let e,n,o,r=t[0],s=[];for(let e=0;e<r.length;e+=1)s[e]=gt(ft(t,r,e));const i=t=>X(s[t],1,1,(()=>{s[t]=null}));let l=t[1]&&ht(t);return{c(){e=$("div");for(let t=0;t<s.length;t+=1)s[t].c();n=w(),l&&l.c(),y(e,"class","images svelte-6c9m4t")},m(t,r){p(t,e,r);for(let t=0;t<s.length;t+=1)s[t].m(e,null);f(e,n),l&&l.m(e,null),o=!0},p(t,[o]){if(5&o){let l;for(r=t[0],l=0;l<r.length;l+=1){const i=ft(t,r,l);s[l]?(s[l].p(i,o),V(s[l],1)):(s[l]=gt(i),s[l].c(),V(s[l],1),s[l].m(e,n))}for(F(),l=r.length;l<s.length;l+=1)i(l);K()}t[1]?l?(l.p(t,o),2&o&&V(l,1)):(l=ht(t),l.c(),V(l,1),l.m(e,null)):l&&(F(),X(l,1,1,(()=>{l=null})),K())},i(t){if(!o){for(let t=0;t<r.length;t+=1)V(s[t]);V(l),o=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)X(s[t]);X(l),o=!1},d(t){t&&g(e),h(s,t),l&&l.d()}}}function bt(t,e,n){let{images:o}=e,{hovered:r}=e,s=0,i=1,l=!0,a=t=>{l&&(l=!1,setTimeout((()=>{l=!0}),700),n(2,s+=t),i=t,s<0&&n(2,s=o.length-1),s>o.length-1&&n(2,s=0))};return t.$$set=t=>{"images"in t&&n(0,o=t.images),"hovered"in t&&n(1,r=t.hovered)},[o,r,s,(t,e)=>at(t,e?{x:700*i,duration:700,opacity:1,easing:lt}:{x:-700*i,duration:700,opacity:1,easing:lt}),a,t=>a(1),t=>a(-1)]}class wt extends st{constructor(t){super(),rt(this,t,bt,$t,i,{images:0,hovered:1})}}function vt(t,e,n){const o=t.slice();return o[4]=e[n],o}function yt(t){let e,n,o,r=t[4].text+"";return{c(){e=$("a"),n=b(r),y(e,"href",o=t[4].url),y(e,"target","_blank"),y(e,"class","svelte-17lz1ik"),k(e,"primary",t[4].primary)},m(t,o){p(t,e,o),f(e,n)},p(t,s){1&s&&r!==(r=t[4].text+"")&&x(n,r),1&s&&o!==(o=t[4].url)&&y(e,"href",o),1&s&&k(e,"primary",t[4].primary)},d(t){t&&g(e)}}}function xt(t){let e,n;return e=new wt({props:{images:t[0].images,hovered:t[1]}}),{c(){tt(e.$$.fragment)},m(t,o){et(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.images=t[0].images),2&n&&(o.hovered=t[1]),e.$set(o)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function _t(t){let e,n,o,s,i,l,a,c,u,d,m,_,k,j=t[0].title+"",S=t[0].description+"",A=t[0].links,E=[];for(let e=0;e<A.length;e+=1)E[e]=yt(vt(t,A,e));let z=t[0].images.length>0&&xt(t);return{c(){e=$("div"),n=$("div"),o=$("h5"),s=b(j),i=w(),l=$("p"),a=b(S),c=w(),u=$("div");for(let t=0;t<E.length;t+=1)E[t].c();d=w(),z&&z.c(),y(o,"class","svelte-17lz1ik"),y(n,"class","panel svelte-17lz1ik"),y(u,"class","links svelte-17lz1ik"),y(e,"class","item svelte-17lz1ik")},m(r,g){p(r,e,g),f(e,n),f(n,o),f(o,s),f(n,i),f(n,l),f(l,a),f(e,c),f(e,u);for(let t=0;t<E.length;t+=1)E[t].m(u,null);f(e,d),z&&z.m(e,null),m=!0,_||(k=[v(e,"mouseenter",t[2]),v(e,"mouseleave",t[3])],_=!0)},p(t,[n]){if((!m||1&n)&&j!==(j=t[0].title+"")&&x(s,j),(!m||1&n)&&S!==(S=t[0].description+"")&&x(a,S),1&n){let e;for(A=t[0].links,e=0;e<A.length;e+=1){const o=vt(t,A,e);E[e]?E[e].p(o,n):(E[e]=yt(o),E[e].c(),E[e].m(u,null))}for(;e<E.length;e+=1)E[e].d(1);E.length=A.length}t[0].images.length>0?z?(z.p(t,n),1&n&&V(z,1)):(z=xt(t),z.c(),V(z,1),z.m(e,null)):z&&(F(),X(z,1,1,(()=>{z=null})),K())},i(t){m||(V(z),m=!0)},o(t){X(z),m=!1},d(t){t&&g(e),h(E,t),z&&z.d(),_=!1,r(k)}}}function kt(t,e,n){let{item:o}=e,r=!1;window.matchMedia("(pointer: coarse)").matches&&(r=!0);return t.$$set=t=>{"item"in t&&n(0,o=t.item)},[o,r,t=>{n(1,r=!0)},t=>{n(1,r=!1)}]}class jt extends st{constructor(t){super(),rt(this,t,kt,_t,i,{item:0})}}class St{constructor(t,e,n){this.text=t,this.url=e,this.primary=n}}class At{constructor(t,e,n,o){this.title=t,this.description=e,this.links=n,this.images=o}}const Et="Site",zt="Github",Dt=[new At("Mandelbrot Wallpaper Generator","A web based mandelbrot wallpaper generator built with Svelte.",[new St(Et,"https://jamesmgittins.github.io/Svelte-Mandelbrot/",!0),new St(zt,"https://github.com/jamesmgittins/Svelte-Mandelbrot",!1)],["mandelbrot.jpg","mandelbrot2.jpg"]),new At("Doodles","A simple social network where users can post and reply to doodles. Built with NodeJS, express and MySQL.",[new St(Et,"https://doodles.gti.nz",!0),new St(zt,"https://github.com/jamesmgittins/pixelswebsite",!1)],["doodles.jpg","doodles2.jpg","doodles3.jpg"]),new At("Walking Simulator","A procedurally generated world created with ThreeJS and TypeScript.",[new St(Et,"https://walking.gti.nz",!0),new St(zt,"https://github.com/jamesmgittins/walking",!1)],["walking.jpg","walking2.jpg"]),new At("Incremancer","Zombie themed browser game using PixiJS and AngularJS.",[new St(Et,"https://incremancer.gti.nz",!0),new St(zt,"https://github.com/jamesmgittins/incremancer",!1)],["incremancer3.png","incremancer2.png","incremancer1.png"]),new At("Doom Live Wallpaper","An android application that simulates a game of Doom running on your wallpaper. Written in Java.",[new St("XDA Developers","https://forum.xda-developers.com/showthread.php?t=827898",!0),new St("Download APK","https://github.com/jamesmgittins/doomlivewallpaper/releases/download/1.41/DoomLiveWallpaper.apk",!1),new St(zt,"https://github.com/jamesmgittins/doomlivewallpaper",!1)],["doomlw.jpg","doomlw2.png"]),new At("Dope Slinger Tycoon","An idle game that runs in the browser. Built with AngularJS.",[new St(Et,"https://dopeslinger.gti.nz",!0),new St(zt,"https://github.com/jamesmgittins/dopeslingertycoon",!1)],["dopeslinger.jpg","dopeslinger2.jpg"]),new At("Shootr","An incremental arcade style game that runs in the browser. Built with PixiJS.",[new St(Et,"https://shootr.gti.nz/beta",!0),new St(zt,"https://github.com/jamesmgittins/shootr",!1)],["shootr.jpg","shootr2.jpg"]),new At("Smartbomb","Interface for Giantbomb's video API that runs on LG WebOS smart TVs. Built with jQuery.",[new St(zt,"https://github.com/jamesmgittins/smartbomb",!0)],["smartbomb.jpg","smartbomb.jpg"])];function Mt(t,e,n){const o=t.slice();return o[0]=e[n],o}function Ct(e){let n,o;return n=new jt({props:{item:e[0]}}),{c(){tt(n.$$.fragment)},m(t,e){et(n,t,e),o=!0},p:t,i(t){o||(V(n.$$.fragment,t),o=!0)},o(t){X(n.$$.fragment,t),o=!1},d(t){nt(n,t)}}}function Pt(t){let e,n,o,r,s=Dt,i=[];for(let e=0;e<s.length;e+=1)i[e]=Ct(Mt(t,s,e));const l=t=>X(i[t],1,1,(()=>{i[t]=null}));return{c(){e=$("h1"),e.textContent="Projects",n=w(),o=$("div");for(let t=0;t<i.length;t+=1)i[t].c();y(e,"class","svelte-1uku37u"),y(o,"class","svelte-1uku37u")},m(t,s){p(t,e,s),p(t,n,s),p(t,o,s);for(let t=0;t<i.length;t+=1)i[t].m(o,null);r=!0},p(t,[e]){if(0&e){let n;for(s=Dt,n=0;n<s.length;n+=1){const r=Mt(t,s,n);i[n]?(i[n].p(r,e),V(i[n],1)):(i[n]=Ct(r),i[n].c(),V(i[n],1),i[n].m(o,null))}for(F(),n=s.length;n<i.length;n+=1)l(n);K()}},i(t){if(!r){for(let t=0;t<s.length;t+=1)V(i[t]);r=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)X(i[t]);r=!1},d(t){t&&g(e),t&&g(n),t&&g(o),h(i,t)}}}class Tt extends st{constructor(t){super(),rt(this,t,null,Pt,i,{})}}function Lt(e){let n,o,r,s;return n=new mt({}),r=new Tt({}),{c(){tt(n.$$.fragment),o=w(),tt(r.$$.fragment)},m(t,e){et(n,t,e),p(t,o,e),et(r,t,e),s=!0},p:t,i(t){s||(V(n.$$.fragment,t),V(r.$$.fragment,t),s=!0)},o(t){X(n.$$.fragment,t),X(r.$$.fragment,t),s=!1},d(t){nt(n,t),t&&g(o),nt(r,t)}}}return new class extends st{constructor(t){super(),rt(this,t,null,Lt,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
