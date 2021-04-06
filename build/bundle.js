var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(n)}function s(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function u(e){return null==e?"":e}const a="undefined"!=typeof window;let c=a?()=>window.performance.now():()=>Date.now(),i=a?e=>requestAnimationFrame(e):e;const p=new Set;function h(e){p.forEach((t=>{t.c(e)||(p.delete(t),t.f())})),0!==p.size&&i(h)}function d(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function f(e){e.parentNode.removeChild(e)}function g(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function b(e){return document.createTextNode(e)}function v(){return b(" ")}function $(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function w(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function C(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function k(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}const _=new Set;let x,S=0;function G(e,t,n,o,r,s,l,u=0){const a=16.666/o;let c="{\n";for(let e=0;e<=1;e+=a){const o=t+(n-t)*s(e);c+=100*e+`%{${l(o,1-o)}}\n`}const i=c+`100% {${l(n,1-n)}}\n}`,p=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(i)}_${u}`,h=e.ownerDocument;_.add(h);const d=h.__svelte_stylesheet||(h.__svelte_stylesheet=h.head.appendChild(y("style")).sheet),m=h.__svelte_rules||(h.__svelte_rules={});m[p]||(m[p]=!0,d.insertRule(`@keyframes ${p} ${i}`,d.cssRules.length));const f=e.style.animation||"";return e.style.animation=`${f?`${f}, `:""}${p} ${o}ms linear ${r}ms 1 both`,S+=1,p}function A(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-o.length;r&&(e.style.animation=o.join(", "),S-=r,S||i((()=>{S||(_.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),_.clear())})))}function P(e){x=e}function M(e){(function(){if(!x)throw new Error("Function called outside component initialization");return x})().$$.on_mount.push(e)}const R=[],B=[],E=[],F=[],j=Promise.resolve();let O=!1;function z(e){E.push(e)}let D=!1;const q=new Set;function L(){if(!D){D=!0;do{for(let e=0;e<R.length;e+=1){const t=R[e];P(t),N(t.$$)}for(P(null),R.length=0;B.length;)B.pop()();for(let e=0;e<E.length;e+=1){const t=E[e];q.has(t)||(q.add(t),t())}E.length=0}while(R.length);for(;F.length;)F.pop()();O=!1,D=!1,q.clear()}}function N(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}let T;function W(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const Y=new Set;let H;function J(){H={r:0,c:[],p:H}}function V(){H.r||r(H.c),H=H.p}function Z(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function I(e,t,n,o){if(e&&e.o){if(Y.has(e))return;Y.add(e),H.c.push((()=>{Y.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}const K={duration:0};function Q(n,o,l,u){let a=o(n,l),d=u?0:1,m=null,f=null,g=null;function y(){g&&A(n,g)}function b(e,t){const n=e.b-d;return t*=Math.abs(n),{a:d,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function v(o){const{delay:s=0,duration:l=300,easing:u=t,tick:v=e,css:$}=a||K,w={start:c()+s,b:o};o||(w.group=H,H.r+=1),m||f?f=w:($&&(y(),g=G(n,d,o,l,s,u,$)),o&&v(0,1),m=b(w,l),z((()=>W(n,o,"start"))),function(e){let t;0===p.size&&i(h),new Promise((n=>{p.add(t={c:e,f:n})}))}((e=>{if(f&&e>f.start&&(m=b(f,l),f=null,W(n,m.b,"start"),$&&(y(),g=G(n,d,m.b,m.duration,0,u,a.css))),m)if(e>=m.end)v(d=m.b,1-d),W(n,m.b,"end"),f||(m.b?y():--m.group.r||r(m.group.c)),m=null;else if(e>=m.start){const t=e-m.start;d=m.a+m.d*u(t/m.duration),v(d,1-d)}return!(!m&&!f)})))}return{run(e){s(a)?(T||(T=Promise.resolve(),T.then((()=>{T=null}))),T).then((()=>{a=a(),v(e)})):v(e)},end(){y(),m=f=null}}}function U(e){e&&e.c()}function X(e,t,o,l){const{fragment:u,on_mount:a,on_destroy:c,after_update:i}=e.$$;u&&u.m(t,o),l||z((()=>{const t=a.map(n).filter(s);c?c.push(...t):r(t),e.$$.on_mount=[]})),i.forEach(z)}function ee(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function te(e,t){-1===e.$$.dirty[0]&&(R.push(e),O||(O=!0,j.then(L)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ne(t,n,s,l,u,a,c=[-1]){const i=x;P(t);const p=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:o(),dirty:c,skip_bound:!1};let h=!1;if(p.ctx=s?s(t,n.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&u(p.ctx[e],p.ctx[e]=r)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](r),h&&te(t,e)),n})):[],p.update(),h=!0,r(p.before_update),p.fragment=!!l&&l(p.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);p.fragment&&p.fragment.l(e),e.forEach(f)}else p.fragment&&p.fragment.c();n.intro&&Z(t.$$.fragment),X(t,n.target,n.anchor,n.customElement),L()}P(i)}class oe{$destroy(){ee(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var re=[{produce:"Apples",type:"fruit",months:[0,1,2,3,4,5,7,8,9,10,11]},{produce:"Apricots",type:"fruit",months:[6,7]},{produce:"Blueberries",type:"fruit",months:[6,7,8]},{produce:"Cherries",type:"fruit",months:[5,6]},{produce:"Crabapples",type:"fruit",months:[8,9,10]},{produce:"Cranberries",type:"fruit",months:[7,8,9]},{produce:"Currants",type:"fruit",months:[6,7]},{produce:"Gooseberries",type:"fruit",months:[6,7]},{produce:"Grapes",type:"fruit",months:[7,8]},{produce:"Muskmelon",type:"fruit",months:[7,8]},{produce:"Nectarines",type:"fruit",months:[7,8]},{produce:"Peaches",type:"fruit",months:[6,7,8]},{produce:"Pears",type:"fruit",months:[7,8,9,10,11]},{produce:"Plums",type:"fruit",months:[6,7,8,9]},{produce:"Raspberries",type:"fruit",months:[6,7,8,9]},{produce:"Rhubarb",type:"fruit",months:[0,1,2,3,4,5]},{produce:"Strawberries (Field)",type:"fruit",months:[4,5,6,7,8,9]},{produce:"Strawberries (Greenhouse)",type:"fruit",months:[0,1,2,3,4,5,9,10,11]},{produce:"Watermelon",type:"fruit",months:[6,7,8]},{produce:"Artichoke",type:"vegetable",months:[7,8,9]},{produce:"Asian Vegetables",type:"vegetable",months:[5,6,7,8,9,10]},{produce:"Asparagus",type:"vegetable",months:[4,5]},{produce:"Beans (Green/Yellow)",type:"vegetable",months:[5,6,7,8,9]},{produce:"Beets",type:"vegetable",months:[0,1,2,3,6,7,8,9,10,11]},{produce:"Bitter Melon/Fuzzy Squash",type:"vegetable",months:[7,8,9]},{produce:"Bok Choy",type:"vegetable",months:[5,6,7,8,9,10]},{produce:"Broccoli",type:"vegetable",months:[5,6,7,8,9]},{produce:"Brussels Sprouts",type:"vegetable",months:[8,9,10]},{produce:"Cabbage",type:"vegetable",months:[0,1,2,3,5,6,7,8,9,10,11]},{produce:"Carrots",type:"vegetable",months:[0,1,2,3,4,6,7,8,9,10,11]},{produce:"Cauliflower",type:"vegetable",months:[5,6,7,8,9,10]},{produce:"Celery",type:"vegetable",months:[6,7,8,9]},{produce:"Chinese Broccoli (White Flower)",type:"vegetable",months:[5,6,7,8,9,10]},{produce:"Corn",type:"vegetable",months:[6,7,8,9]},{produce:"Cucumber (Field)",type:"vegetable",months:[5,6,7,8,9]},{produce:"Cucumber (Greenhouse)",type:"vegetable",months:[0,1,2,3,4,5,6,7,8,9,10,11]},{produce:"Daikon Radish",type:"vegetable",months:[5,6,7,8,9,10]},{produce:"Edible Amaranth (Hinn Choy)",type:"vegetable",months:[5,6,7,8,9]},{produce:"Eggplant",type:"vegetable",months:[7,8,9]},{produce:"Garlic",type:"vegetable",months:[0,1,6,7,8,9,10,11]},{produce:"Leeks",type:"vegetable",months:[0,1,7,8,9,10,11]},{produce:"Lettuce (Assorted)",type:"vegetable",months:[5,6,7,8,9]},{produce:"Lettuce (Greenhouse)",type:"vegetable",months:[0,1,2,3,4,5,6,7,8,9,10,11]},{produce:"Mushrooms",type:"vegetable",months:[0,1,2,3,4,5,6,7,8,9,10,11]},{produce:"Mustard Greens (Gai Choy)",type:"vegetable",months:[5,6,7,8,9]},{produce:"Napa Cabbage",type:"vegetable",months:[5,6,7,8,9,10]},{produce:"Onions (Cooking)",type:"vegetable",months:[0,1,2,3,4,5,6,7,8,9,10,11]},{produce:"Onions (Green)",type:"vegetable",months:[5,6,7,8,9,10]},{produce:"Onions (Red)",type:"vegetable",months:[0,1,2,3,8,9,10,11]},{produce:"Parsnips",type:"vegetable",months:[0,1,2,3,7,8,9,10,11]},{produce:"Peas (Green)",type:"vegetable",months:[5,6,7,8,9]},{produce:"Peas (Snow)",type:"vegetable",months:[5,6,7,8]},{produce:"Peppers (Field)",type:"vegetable",months:[6,7,8,9]},{produce:"Peppers (Greenhouse)",type:"vegetable",months:[1,2,3,4,5,6,7,8,9,10,11]},{produce:"Potatoes",type:"vegetable",months:[0,1,2,3,4,5,6,7,8,9,10,11]},{produce:"Pumpkin",type:"vegetable",months:[8,9]},{produce:"Radicchio",type:"vegetable",months:[5,6,7]},{produce:"Radishes",type:"vegetable",months:[4,5,6,7,8,9,10]},{produce:"Rapini",type:"vegetable",months:[6,7,8,9]},{produce:"Rutabaga",type:"vegetable",months:[0,1,2,3,4,5,6,7,8,9,10,11]},{produce:"Snow Pea Shoots (Dow Miu)",type:"vegetable",months:[4,5,6,7,8,9]},{produce:"Spinach",type:"vegetable",months:[4,5,6,7,8,9]},{produce:"Sprouts",type:"vegetable",months:[0,1,2,3,4,5,6,7,8,9,10,11]},{produce:"Squash",type:"vegetable",months:[0,1,2,7,8,9,10,11]},{produce:"Summer squash",type:"vegetable",months:[5,6,7,8,9]},{produce:"Sweet potatoes",type:"vegetable",months:[0,1,2,3,4,5,6,7,8,9,10,11]},{produce:"Tomatoes (Field)",type:"vegetable",months:[6,7,8,9]},{produce:"Tomatoes (Greenhouse)",type:"vegetable",months:[1,2,3,4,5,6,7,8,9,10,11]},{produce:"Water Spinach (Tung Choy)",type:"vegetable",months:[5,6,7,8,9,10]},{produce:"Yow Choy (Yellow Flower)",type:"vegetable",months:[5,6,7,8,9,10]},{produce:"Zucchini",type:"vegetable",months:[6,7,8,9]}];const se={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"};const le={Apples:["🍎","🍏"],Apricots:"🍊",Blueberries:"🫐",Cherries:"🍒",Crabapples:null,Cranberries:null,Currants:null,Gooseberries:null,Grapes:"🍇",Muskmelon:"🍈",Nectarines:"🍊",Peaches:"🍑",Pears:"🍐",Plums:null,Raspberries:null,Rhubarb:null,"Strawberries (Field)":"🍓","Strawberries (Greenhouse)":"🍓",Watermelon:"🍉",Artichoke:null,"Asian Vegetables":["🥦","🥬"],Asparagus:null,"Beans (Green/Yellow)":null,Beets:null,"Bitter Melon/Fuzzy Squash":null,"Bok Choy":null,Broccoli:"🥦","Brussels Sprouts":null,Cabbage:null,Carrots:"🥕",Cauliflower:null,Celery:null,"Chinese Broccoli (White Flower)":"🥦",Corn:"🌽","Cucumber (Field)":"🥒","Cucumber (Greenhouse)":"🥒","Daikon Radish":null,"Edible Amaranth (Hinn Choy)":null,Eggplant:"🍆",Garlic:"🧄",Leeks:null,"Lettuce (Assorted)":"🥬","Lettuce (Greenhouse)":"🥬",Mushrooms:"🍄","Mustard Greens (Gai Choy)":"🌿","Napa Cabbage":"🥬","Onions (Cooking)":"🧅","Onions (Green)":"🧅","Onions (Red)":"🧅",Parsnips:null,"Peas (Green)":null,"Peas (Snow)":null,"Peppers (Field)":["🫑","🌶️"],"Peppers (Greenhouse)":["🫑","🌶️"],Potatoes:"🥔",Pumpkin:"🎃",Radicchio:null,Radishes:null,Rapini:"🥬",Rutabaga:null,"Snow Pea Shoots (Dow Miu)":null,Spinach:"🥬",Sprouts:null,Squash:null,"Summer squash":null,"Sweet potatoes":"🥔","Tomatoes (Field)":"🍅","Tomatoes (Greenhouse)":"🍅","Water Spinach (Tung Choy)":null,"Yow Choy (Yellow Flower)":null,Zucchini:null},ue=e=>e.flatMap((e=>le[e.produce])).filter((e=>!!e));function ae(e){const t=e-1;return t*t*t+1}function ce(e,{delay:t=0,duration:n=400,easing:o=ae,x:r=0,y:s=0,opacity:l=0}={}){const u=getComputedStyle(e),a=+u.opacity,c="none"===u.transform?"":u.transform,i=a*(1-l);return{delay:t,duration:n,easing:o,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*r}px, ${(1-e)*s}px);\n\t\t\topacity: ${a-i*t}`}}function ie(t){let n,o,s,l,a,c,i,p,h;return{c(){n=y("li"),o=y("button"),s=y("input"),l=v(),a=b(t[0]),w(s,"type","checkbox"),w(s,"class","svelte-sehz4j"),w(o,"class",c=u(t[1]?"checked":"")+" svelte-sehz4j"),w(o,"style",`text-decoration-color: var(${t[3]});`),w(o,"aria-label",i=`${t[1]?"uncheck":"check"} ${t[0]}`)},m(e,r){m(e,n,r),d(n,o),d(o,s),s.checked=t[1],d(o,l),d(o,a),p||(h=[$(s,"change",t[4]),$(o,"click",t[2])],p=!0)},p(e,[t]){2&t&&(s.checked=e[1]),1&t&&C(a,e[0]),2&t&&c!==(c=u(e[1]?"checked":"")+" svelte-sehz4j")&&w(o,"class",c),3&t&&i!==(i=`${e[1]?"uncheck":"check"} ${e[0]}`)&&w(o,"aria-label",i)},i:e,o:e,d(e){e&&f(n),p=!1,r(h)}}}function pe(e,t,n){let{item:o}=t,r=!1;const s=["--purple","--blue","--violet","--green","--lightGreen"],l=s[Math.floor(Math.random()*(s.length+1))];return e.$$set=e=>{"item"in e&&n(0,o=e.item)},[o,r,function(){n(1,r=!r)},l,function(){r=this.checked,n(1,r)}]}class he extends oe{constructor(e){super(),ne(this,e,pe,ie,l,{item:0})}}function de(e,t,n){const o=e.slice();return o[5]=t[n],o}function me(e){let t,n,o,r=e[0],s=[];for(let t=0;t<r.length;t+=1)s[t]=fe(de(e,r,t));const l=e=>I(s[e],1,1,(()=>{s[e]=null}));return{c(){t=y("ul");for(let e=0;e<s.length;e+=1)s[e].c();w(t,"class","svelte-yhguov")},m(e,n){m(e,t,n);for(let e=0;e<s.length;e+=1)s[e].m(t,null);o=!0},p(e,n){if(1&n){let o;for(r=e[0],o=0;o<r.length;o+=1){const l=de(e,r,o);s[o]?(s[o].p(l,n),Z(s[o],1)):(s[o]=fe(l),s[o].c(),Z(s[o],1),s[o].m(t,null))}for(J(),o=r.length;o<s.length;o+=1)l(o);V()}},i(e){if(!o){for(let e=0;e<r.length;e+=1)Z(s[e]);z((()=>{n||(n=Q(t,ce,{y:-50,duration:500},!0)),n.run(1)})),o=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)I(s[e]);n||(n=Q(t,ce,{y:-50,duration:500},!1)),n.run(0),o=!1},d(e){e&&f(t),g(s,e),e&&n&&n.end()}}}function fe(e){let t,n;return t=new he({props:{item:e[5].produce}}),{c(){U(t.$$.fragment)},m(e,o){X(t,e,o),n=!0},p(e,n){const o={};1&n&&(o.item=e[5].produce),t.$set(o)},i(e){n||(Z(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){ee(t,e)}}}function ge(e){let t,n,o,r,s,l,u,a=e[1]&&me(e);return{c(){t=y("button"),n=y("h3"),n.textContent=`${e[2]}`,o=v(),a&&a.c(),r=b(""),w(n,"class","svelte-yhguov"),w(t,"type","button"),w(t,"class","svelte-yhguov")},m(c,i){m(c,t,i),d(t,n),m(c,o,i),a&&a.m(c,i),m(c,r,i),s=!0,l||(u=$(t,"click",e[3]),l=!0)},p(e,[t]){e[1]?a?(a.p(e,t),2&t&&Z(a,1)):(a=me(e),a.c(),Z(a,1),a.m(r.parentNode,r)):a&&(J(),I(a,1,1,(()=>{a=null})),V())},i(e){s||(Z(a),s=!0)},o(e){I(a),s=!1},d(e){e&&f(t),e&&f(o),a&&a.d(e),e&&f(r),l=!1,u()}}}function ye(e,t,n){let{produce:o}=t;const r=o[1].type,s="vegetable"===r?"vegetables":r;let l=!0;return e.$$set=e=>{"produce"in e&&n(0,o=e.produce)},[o,l,s,function(){n(1,l=!l)}]}class be extends oe{constructor(e){super(),ne(this,e,ye,ge,l,{produce:0})}}function ve(e,t,n){const o=e.slice();return o[3]=t[n],o}function $e(e){let t,n,o,r=e[3].character+"";return{c(){t=y("span"),n=b(r),o=v(),k(t,"left",e[3].x+"%"),k(t,"top",e[3].y+"%"),k(t,"transform","scale("+e[3].r+")"),w(t,"class","svelte-3i1pw0")},m(e,r){m(e,t,r),d(t,n),d(t,o)},p(e,o){1&o&&r!==(r=e[3].character+"")&&C(n,r),1&o&&k(t,"left",e[3].x+"%"),1&o&&k(t,"top",e[3].y+"%"),1&o&&k(t,"transform","scale("+e[3].r+")")},d(e){e&&f(t)}}}function we(t){let n,o=t[0],r=[];for(let e=0;e<o.length;e+=1)r[e]=$e(ve(t,o,e));return{c(){n=y("div");for(let e=0;e<r.length;e+=1)r[e].c();w(n,"role","presentation"),w(n,"class","svelte-3i1pw0")},m(e,t){m(e,n,t);for(let e=0;e<r.length;e+=1)r[e].m(n,null)},p(e,[t]){if(1&t){let s;for(o=e[0],s=0;s<o.length;s+=1){const l=ve(e,o,s);r[s]?r[s].p(l,t):(r[s]=$e(l),r[s].c(),r[s].m(n,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=o.length}},i:e,o:e,d(e){e&&f(n),g(r,e)}}}function Ce(e,t,n){let{produce:o}=t,r=ue(o),s=new Array(2*r.length).fill().map(((e,t)=>({character:r[t%r.length],x:94*Math.random(),y:-20-100*Math.random(),r:.1+1*Math.random()}))).sort(((e,t)=>e.r-t.r));return M((()=>{let e;return function t(){e=requestAnimationFrame(t),n(0,s=s.map((e=>(e.y+=.2*e.r,e.y>140&&(e.y=-20),e))))}(),()=>cancelAnimationFrame(e)})),e.$$set=e=>{"produce"in e&&n(1,o=e.produce)},[s,o]}class ke extends oe{constructor(e){super(),ne(this,e,Ce,we,l,{produce:1})}}function _e(t){let n,o,r,s,l,u,a,c,i,p,h;return{c(){n=y("footer"),o=y("div"),r=y("a"),r.textContent="Built",s=b("\n    with\n    "),l=y("span"),l.textContent="❤️",u=b("\n    and\n    "),a=y("span"),a.textContent=`${t[0]}`,c=b("\n    by "),i=y("a"),i.textContent="Andrei Dobrinski",p=v(),h=y("div"),h.innerHTML='Data from\n    <a href="https://www.ontario.ca/foodland/page/availability-guide" class="svelte-a0rnka">Ontario.ca</a>',w(r,"href","https://github.com/andreidobrinski/produce-in-season"),w(r,"class","svelte-a0rnka"),w(l,"role","img"),w(l,"aria-label","love"),w(a,"role","img"),w(a,"aria-label","produce"),w(i,"href","https://andreidobrinski.com"),w(i,"class","svelte-a0rnka"),w(o,"class","svelte-a0rnka"),w(h,"class","svelte-a0rnka"),w(n,"class","svelte-a0rnka")},m(e,t){m(e,n,t),d(n,o),d(o,r),d(o,s),d(o,l),d(o,u),d(o,a),d(o,c),d(o,i),d(n,p),d(n,h)},p:e,i:e,o:e,d(e){e&&f(n)}}}function xe(e,t,n){let{produce:o}=t;const r=(e=>{const t=ue(e);return t[Math.floor(Math.random()*t.length)]})(o);return e.$$set=e=>{"produce"in e&&n(1,o=e.produce)},[r,o]}class Se extends oe{constructor(e){super(),ne(this,e,xe,_e,l,{produce:1})}}function Ge(t){let n,o,r,s,l,u,a,c,i,p,h,g,$,C,k,_;return n=new ke({props:{produce:t[1]}}),h=new be({props:{produce:t[2].fruit}}),$=new be({props:{produce:t[2].vegetable}}),k=new Se({props:{produce:t[1]}}),{c(){U(n.$$.fragment),o=v(),r=y("main"),s=y("h1"),s.textContent="What's in season, Ontario?",l=v(),u=y("h2"),a=b("It's "),c=y("span"),c.textContent=`${t[0]}`,i=b(", so try:"),p=v(),U(h.$$.fragment),g=v(),U($.$$.fragment),C=v(),U(k.$$.fragment),w(s,"class","svelte-1p6vjjn"),w(c,"class","month svelte-1p6vjjn"),w(u,"class","svelte-1p6vjjn"),w(r,"class","svelte-1p6vjjn")},m(e,t){X(n,e,t),m(e,o,t),m(e,r,t),d(r,s),d(r,l),d(r,u),d(u,a),d(u,c),d(u,i),d(r,p),X(h,r,null),d(r,g),X($,r,null),m(e,C,t),X(k,e,t),_=!0},p:e,i(e){_||(Z(n.$$.fragment,e),Z(h.$$.fragment,e),Z($.$$.fragment,e),Z(k.$$.fragment,e),_=!0)},o(e){I(n.$$.fragment,e),I(h.$$.fragment,e),I($.$$.fragment,e),I(k.$$.fragment,e),_=!1},d(e){ee(n,e),e&&f(o),e&&f(r),ee(h),ee($),e&&f(C),ee(k,e)}}}function Ae(e){const t=(new Date).getMonth(),n=se[t];const o=re.filter((e=>e.months.includes(t))),r=o.reduce(((e,t)=>({...e,[t.type]:[...e[t.type],{...t}]})),{fruit:[],vegetable:[]});return[n,o,r]}return new class extends oe{constructor(e){super(),ne(this,e,Ae,Ge,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
