let t,e,n,l=!1,s=!1,o=!1,r=!1,i=!1;const c="undefined"!=typeof window?window:{},a=c.CSS,f=c.document||{head:{}},u={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},p=(()=>(f.head.attachShadow+"").indexOf("[native")>-1)(),d=t=>Promise.resolve(t),m=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),$=(t,e,n)=>{n&&n.map(([n,l,s])=>{const o=b(t,n),r=w(e,s),i=h(n);u.ael(o,l,r,i),(e.s=e.s||[]).push(()=>u.rel(o,l,r,i))})},w=(t,e)=>n=>{256&t.t?t.o[e](n):(t.u=t.u||[]).push([e,n])},b=(t,e)=>8&e?c:t,h=t=>0!=(2&t),y=new WeakMap,_=t=>"sc-"+t.p,g={},v=t=>"object"==(t=typeof t)||"function"===t,j=(t,e,...n)=>{let l=null,s=null,o=!1,r=!1,i=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!v(l))&&(l+=""),o&&r?i[i.length-1].$+=l:i.push(o?M(null,l):l),r=o)};if(c(n),e){e.name&&(s=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}const a=M(t,null);return a.h=e,i.length>0&&(a._=i),a.g=s,a},M=(t,e)=>({t:0,v:t,$:e,j:null,_:null,h:null,g:null}),R={},k=(t,e,n,l,s,o)=>{if(n!==l){let i=it(t,e),a=e.toLowerCase();if("class"===e){const e=t.classList,s=S(n),o=S(l);e.remove(...s.filter(t=>t&&!o.includes(t))),e.add(...o.filter(t=>t&&!s.includes(t)))}else if("ref"===e)l&&l(t);else if(i||"o"!==e[0]||"n"!==e[1]){const c=v(l);if((i||c&&null!==l)&&!s)try{if(t.tagName.includes("-"))t[e]=l;else{let s=null==l?"":l;"list"===e?i=!1:null!=n&&t[e]==s||(t[e]=s)}}catch(r){}null==l||!1===l?t.removeAttribute(e):(!i||4&o||s)&&!c&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):it(c,a)?a.slice(2):a[2]+e.slice(3),n&&u.rel(t,e,n,!1),l&&u.ael(t,e,l,!1)}},O=/\s/,S=t=>t?t.split(O):[],L=(t,e,n,l)=>{const s=11===e.j.nodeType&&e.j.host?e.j.host:e.j,o=t&&t.h||g,r=e.h||g;for(l in o)l in r||k(s,l,o[l],void 0,n,e.t);for(l in r)k(s,l,o[l],r[l],n,e.t)},U=(s,i,c,a)=>{let u,p,d,m=i._[c],$=0;if(l||(o=!0,"slot"===m.v&&(t&&a.classList.add(t+"-s"),m.t|=m._?2:1)),null!==m.$)u=m.j=f.createTextNode(m.$);else if(1&m.t)u=m.j=f.createTextNode("");else{if(r||(r="svg"===m.v),u=m.j=f.createElementNS(r?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&m.t?"slot-fb":m.v),r&&"foreignObject"===m.v&&(r=!1),L(null,m,r),null!=t&&u["s-si"]!==t&&u.classList.add(u["s-si"]=t),m._)for($=0;$<m._.length;++$)p=U(s,m,$,u),p&&u.appendChild(p);"svg"===m.v?r=!1:"foreignObject"===u.tagName&&(r=!0)}return u["s-hn"]=n,3&m.t&&(u["s-sr"]=!0,u["s-cr"]=e,u["s-sn"]=m.g||"",d=s&&s._&&s._[c],d&&d.v===m.v&&s.j&&C(s.j,!1)),u},C=(t,e)=>{u.t|=1;const l=t.childNodes;for(let s=l.length-1;s>=0;s--){const t=l[s];t["s-hn"]!==n&&t["s-ol"]&&(E(t).insertBefore(t,A(t)),t["s-ol"].remove(),t["s-ol"]=void 0,o=!0),e&&C(t,e)}u.t&=-2},P=(t,e,l,s,o,r)=>{let i,c=t["s-cr"]&&t["s-cr"].parentNode||t;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);o<=r;++o)s[o]&&(i=U(null,l,o,t),i&&(s[o].j=i,c.insertBefore(i,A(e))))},T=(t,e,n,l,o)=>{for(;e<=n;++e)(l=t[e])&&(o=l.j,D(l),s=!0,o["s-ol"]?o["s-ol"].remove():C(o,!0),o.remove())},x=(t,e)=>t.v===e.v&&("slot"!==t.v||t.g===e.g),A=t=>t&&t["s-ol"]||t,E=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,F=(t,e)=>{const n=e.j=t.j,l=t._,s=e._,o=e.v,i=e.$;let c;null===i?(r="svg"===o||"foreignObject"!==o&&r,"slot"===o||L(t,e,r),null!==l&&null!==s?((t,e,n,l)=>{let s,o=0,r=0,i=e.length-1,c=e[0],a=e[i],f=l.length-1,u=l[0],p=l[f];for(;o<=i&&r<=f;)null==c?c=e[++o]:null==a?a=e[--i]:null==u?u=l[++r]:null==p?p=l[--f]:x(c,u)?(F(c,u),c=e[++o],u=l[++r]):x(a,p)?(F(a,p),a=e[--i],p=l[--f]):x(c,p)?("slot"!==c.v&&"slot"!==p.v||C(c.j.parentNode,!1),F(c,p),t.insertBefore(c.j,a.j.nextSibling),c=e[++o],p=l[--f]):x(a,u)?("slot"!==c.v&&"slot"!==p.v||C(a.j.parentNode,!1),F(a,u),t.insertBefore(a.j,c.j),a=e[--i],u=l[++r]):(s=U(e&&e[r],n,r,t),u=l[++r],s&&E(c.j).insertBefore(s,A(c.j)));o>i?P(t,null==l[f+1]?null:l[f+1].j,n,l,r,f):r>f&&T(e,o,i)})(n,l,e,s):null!==s?(null!==t.$&&(n.textContent=""),P(n,null,e,s,0,s.length-1)):null!==l&&T(l,0,l.length-1),r&&"svg"===o&&(r=!1)):(c=n["s-cr"])?c.parentNode.textContent=i:t.$!==i&&(n.data=i)},N=t=>{let e,n,l,s,o,r,i=t.childNodes;for(n=0,l=i.length;n<l;n++)if(e=i[n],1===e.nodeType){if(e["s-sr"])for(o=e["s-sn"],e.hidden=!1,s=0;s<l;s++)if(i[s]["s-hn"]!==e["s-hn"])if(r=i[s].nodeType,""!==o){if(1===r&&o===i[s].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==i[s].textContent.trim()){e.hidden=!0;break}N(e)}},W=[],q=t=>{let e,n,l,o,r,i,c=0,a=t.childNodes,f=a.length;for(;c<f;c++){if(e=a[c],e["s-sr"]&&(n=e["s-cr"]))for(l=n.parentNode.childNodes,o=e["s-sn"],i=l.length-1;i>=0;i--)n=l[i],n["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||(B(n,o)?(r=W.find(t=>t.M===n),s=!0,n["s-sn"]=n["s-sn"]||o,r?r.R=e:W.push({R:e,M:n}),n["s-sr"]&&W.map(t=>{B(t.M,n["s-sn"])&&(r=W.find(t=>t.M===n),r&&!t.R&&(t.R=r.R))})):W.some(t=>t.M===n)||W.push({M:n}));1===e.nodeType&&q(e)}},B=(t,e)=>1===t.nodeType?null===t.getAttribute("slot")&&""===e||t.getAttribute("slot")===e:t["s-sn"]===e||""===e,D=t=>{t.h&&t.h.ref&&t.h.ref(null),t._&&t._.map(D)},H=(t,e,n)=>{const l=(t=>st(t).k)(t);return{emit:t=>V(l,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},V=(t,e,n)=>{const l=new CustomEvent(e,n);return t.dispatchEvent(l),l},z=(t,e)=>{e&&!t.O&&e["s-p"]&&e["s-p"].push(new Promise(e=>t.O=e))},G=(t,e)=>{if(t.t|=16,!(4&t.t))return z(t,t.S),ht(()=>I(t,e));t.t|=512},I=(t,e)=>{const n=t.o;return e&&(t.t|=256,t.u&&(t.u.map(([t,e])=>Y(n,t,e)),t.u=null)),Z(void 0,()=>J(t,n,e))},J=(r,i,c)=>{const a=r.k,d=a["s-rc"];c&&(t=>{const e=t.L,n=t.k,l=e.t,s=((t,e)=>{let n=_(e),l=ut.get(n);if(t=11===t.nodeType?t:f,l)if("string"==typeof l){let e,s=y.get(t=t.head||t);s||y.set(t,s=new Set),s.has(n)||(e=f.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),s&&s.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(p&&n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(r),((r,i)=>{const c=r.k,a=r.L,d=r.U||M(null,null),m=(t=>t&&t.v===R)(i)?i:j(null,null,i);if(n=c.tagName,m.v=null,m.t|=4,r.U=m,m.j=d.j=c.shadowRoot||c,t=c["s-sc"],e=c["s-cr"],l=p&&0!=(1&a.t),s=!1,F(d,m),u.t|=1,o){let t,e,n,l,s,o;q(m.j);let r=0;for(;r<W.length;r++)t=W[r],e=t.M,e["s-ol"]||(n=f.createTextNode(""),n["s-nr"]=e,e.parentNode.insertBefore(e["s-ol"]=n,e));for(r=0;r<W.length;r++)if(t=W[r],e=t.M,t.R){for(l=t.R.parentNode,s=t.R.nextSibling,n=e["s-ol"];n=n.previousSibling;)if(o=n["s-nr"],o&&o["s-sn"]===e["s-sn"]&&l===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&l!==e.parentNode||e.nextSibling!==s)&&e!==s&&(!e["s-hn"]&&e["s-ol"]&&(e["s-hn"]=e["s-ol"].parentNode.nodeName),l.insertBefore(e,s))}else 1===e.nodeType&&(e.hidden=!0)}s&&N(m.j),u.t&=-2,W.length=0})(r,K(r,i)),d&&(d.map(t=>t()),a["s-rc"]=void 0);{const t=a["s-p"],e=()=>Q(r);0===t.length?e():(Promise.all(t).then(e),r.t|=4,t.length=0)}},K=(t,e)=>{try{e=e.render(),t.t&=-17,t.t|=2}catch(n){ct(n)}return e},Q=t=>{const e=t.k,n=t.o,l=t.S;64&t.t||(t.t|=64,tt(e),Y(n,"componentDidLoad"),t.C(e),l||X()),t.O&&(t.O(),t.O=void 0),512&t.t&&bt(()=>G(t,!1)),t.t&=-517},X=()=>{tt(f.documentElement),bt(()=>V(c,"appload",{detail:{namespace:"teststencil"}}))},Y=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){ct(l)}},Z=(t,e)=>t&&t.then?t.then(e):e(),tt=t=>t.classList.add("hydrated"),et=(t,e,n)=>{if(e.P){const l=Object.entries(e.P),s=t.prototype;if(l.map(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,t,{get(){return((t,e)=>st(this).T.get(e))(0,t)},set(n){((t,e,n,l)=>{const s=st(this),o=s.T.get(e),r=s.t,i=s.o;n=((t,e)=>null==t||v(t)?t:4&e?"false"!==t&&(""===t||!!t):t)(n,l.P[e][0]),8&r&&void 0!==o||n===o||(s.T.set(e,n),i&&2==(18&r)&&G(s,!1))})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;s.attributeChangedCallback=function(t,n,l){u.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},nt=(t,e={})=>{const n=[],l=e.exclude||[],s=c.customElements,o=f.head,r=o.querySelector("meta[charset]"),i=f.createElement("style"),a=[];let d,w=!0;Object.assign(u,e),u.l=new URL(e.resourcesUrl||"./",f.baseURI).href,t.map(t=>t[1].map(e=>{const o={t:e[0],p:e[1],P:e[2],A:e[3]};o.P=e[2],o.A=e[3],!p&&1&o.t&&(o.t|=8);const r=o.p,i=class extends HTMLElement{constructor(t){super(t),rt(t=this,o),1&o.t&&(p?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){d&&(clearTimeout(d),d=null),w?a.push(this):u.jmp(()=>(t=>{if(0==(1&u.t)){const e=st(t),n=e.L,l=()=>{};if(1&e.t)$(t,e,n.A);else{e.t|=1,12&n.t&&(t=>{const e=t["s-cr"]=f.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)})(t);{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){z(e,e.S=n);break}}n.P&&Object.entries(n.P).map(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),bt(()=>(async(t,e,n,l,s)=>{if(0==(32&e.t)){e.t|=32;{if((s=ft(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(et(s,n,2),s.isProxied=!0);const t=()=>{};e.t|=8;try{new s(e)}catch(i){ct(i)}e.t&=-9,t()}const t=_(n);if(!ut.has(t)&&s.style){const e=()=>{};let l=s.style;8&n.t&&(l=await __sc_import_teststencil("./p-8a8f7b57.js").then(e=>e.scopeCss(l,t,!1))),((t,e,n)=>{let l=ut.get(t);m&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,ut.set(t,l)})(t,l,!!(1&n.t)),e()}}const o=e.S,r=()=>G(e,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,e,n))}l()}})(this))}disconnectedCallback(){u.jmp(()=>(()=>{if(0==(1&u.t)){const t=st(this);t.s&&(t.s.map(t=>t()),t.s=void 0)}})())}forceUpdate(){(()=>{{const t=st(this);t.k.isConnected&&2==(18&t.t)&&G(t,!1)}})()}componentOnReady(){return st(this).F}};o.N=t[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,et(i,o,1)))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),o.insertBefore(i,r?r.nextSibling:o.firstChild),w=!1,a.length?a.map(t=>t.connectedCallback()):u.jmp(()=>d=setTimeout(X,30))},lt=new WeakMap,st=t=>lt.get(t),ot=(t,e)=>lt.set(e.o=t,e),rt=(t,e)=>{const n={t:0,k:t,L:e,T:new Map};return n.F=new Promise(t=>n.C=t),t["s-p"]=[],t["s-rc"]=[],$(t,n,e.A),lt.set(t,n)},it=(t,e)=>e in t,ct=t=>console.error(t),at=new Map,ft=t=>{const e=t.p.replace(/-/g,"_"),n=t.N,l=at.get(n);return l?l[e]:__sc_import_teststencil(`./${n}.entry.js`).then(t=>(at.set(n,t),t[e]),ct)},ut=new Map,pt=[],dt=[],mt=(t,e)=>n=>{t.push(n),i||(i=!0,e&&4&u.t?bt(wt):u.raf(wt))},$t=t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){ct(e)}t.length=0},wt=()=>{$t(pt),$t(dt),(i=pt.length>0)&&u.raf(wt)},bt=t=>d().then(t),ht=mt(dt,!0),yt=()=>a&&a.supports&&a.supports("color","var(--c)")?d():__sc_import_teststencil("./p-1b2d9a2e.js").then(()=>(u.W=c.__cssshim)?(!1).i():0),_t=()=>{u.W=c.__cssshim;const t=Array.from(f.querySelectorAll("script")).find(t=>/\/teststencil(\.esm)?\.js($|\?|#)/.test(t.src)||"teststencil"===t.getAttribute("data-stencil-namespace")),e=t["data-opts"]||{};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(e.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,c.location.href)).href,gt(e.resourcesUrl,t),c.customElements?d(e):__sc_import_teststencil("./p-2e1bb10c.js").then(()=>e))},gt=(t,e)=>{try{c.__sc_import_teststencil=Function("w","return import(w);//"+Math.random())}catch(n){const l=new Map;c.__sc_import_teststencil=n=>{const s=new URL(n,t).href;let o=l.get(s);if(!o){const t=f.createElement("script");t.type="module",t.crossOrigin=e.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.__sc_import_teststencil.m = m;`],{type:"application/javascript"})),o=new Promise(e=>{t.onload=()=>{e(c.__sc_import_teststencil.m),t.remove()}}),l.set(s,o),f.head.appendChild(t)}return o}}};export{yt as a,nt as b,H as c,j as h,_t as p,ot as r}