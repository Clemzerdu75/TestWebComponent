let t,e,n,l=!1,s=!1,o=!1,r=!1;const c="undefined"!=typeof window?window:{},i=c.CSS,a=c.document||{head:{}},u={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},f=(()=>(a.head.attachShadow+"").indexOf("[native")>-1)(),p=t=>Promise.resolve(t),$=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),m=new WeakMap,d=t=>"sc-"+t.s,b={},h=t=>"object"==(t=typeof t)||"function"===t,w=(t,e,...n)=>{let l=null,s=null,o=!1,r=!1,c=[];const i=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!h(l))&&(l+=""),o&&r?c[c.length-1].o+=l:c.push(o?y(null,l):l),r=o)};if(i(n),e){e.name&&(s=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}const a=y(t,null);return a.u=e,c.length>0&&(a.p=c),a.$=s,a},y=(t,e)=>({t:0,h:t,o:e,_:null,p:null,u:null,$:null}),_={},j=(t,e,n,l,s,o)=>{if(n!==l){let i=nt(t,e),a=e.toLowerCase();if("class"===e){const e=t.classList,s=v(n),o=v(l);e.remove(...s.filter(t=>t&&!o.includes(t))),e.add(...o.filter(t=>t&&!s.includes(t)))}else if(i||"o"!==e[0]||"n"!==e[1]){const c=h(l);if((i||c&&null!==l)&&!s)try{if(t.tagName.includes("-"))t[e]=l;else{let s=null==l?"":l;"list"===e?i=!1:null!=n&&t[e]==s||(t[e]=s)}}catch(r){}null==l||!1===l?t.removeAttribute(e):(!i||4&o||s)&&!c&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):nt(c,a)?a.slice(2):a[2]+e.slice(3),n&&u.rel(t,e,n,!1),l&&u.ael(t,e,l,!1)}},g=/\s/,v=t=>t?t.split(g):[],M=(t,e,n,l)=>{const s=11===e._.nodeType&&e._.host?e._.host:e._,o=t&&t.u||b,r=e.u||b;for(l in o)l in r||j(s,l,o[l],void 0,n,e.t);for(l in r)j(s,l,o[l],r[l],n,e.t)},R=(s,r,c,i)=>{let u,f,p,$=r.p[c],m=0;if(l||(o=!0,"slot"===$.h&&(t&&i.classList.add(t+"-s"),$.t|=$.p?2:1)),null!==$.o)u=$._=a.createTextNode($.o);else if(1&$.t)u=$._=a.createTextNode("");else if(u=$._=a.createElement(2&$.t?"slot-fb":$.h),M(null,$,!1),null!=t&&u["s-si"]!==t&&u.classList.add(u["s-si"]=t),$.p)for(m=0;m<$.p.length;++m)f=R(s,$,m,u),f&&u.appendChild(f);return u["s-hn"]=n,3&$.t&&(u["s-sr"]=!0,u["s-cr"]=e,u["s-sn"]=$.$||"",p=s&&s.p&&s.p[c],p&&p.h===$.h&&s._&&k(s._,!1)),u},k=(t,e)=>{u.t|=1;const l=t.childNodes;for(let s=l.length-1;s>=0;s--){const t=l[s];t["s-hn"]!==n&&t["s-ol"]&&(C(t).insertBefore(t,O(t)),t["s-ol"].remove(),t["s-ol"]=void 0,o=!0),e&&k(t,e)}u.t&=-2},S=(t,e,l,s,o,r)=>{let c,i=t["s-cr"]&&t["s-cr"].parentNode||t;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=R(null,l,o,t),c&&(s[o]._=c,i.insertBefore(c,O(e))))},L=(t,e,n,l,o)=>{for(;e<=n;++e)(l=t[e])&&(s=!0,(o=l._)["s-ol"]?o["s-ol"].remove():k(o,!0),o.remove())},U=(t,e)=>t.h===e.h&&("slot"!==t.h||t.$===e.$),O=t=>t&&t["s-ol"]||t,C=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,P=(t,e)=>{const n=e._=t._,l=t.p,s=e.p,o=e.o;let r;null===o?("slot"===e.h||M(t,e,!1),null!==l&&null!==s?((t,e,n,l)=>{let s,o=0,r=0,c=e.length-1,i=e[0],a=e[c],u=l.length-1,f=l[0],p=l[u];for(;o<=c&&r<=u;)null==i?i=e[++o]:null==a?a=e[--c]:null==f?f=l[++r]:null==p?p=l[--u]:U(i,f)?(P(i,f),i=e[++o],f=l[++r]):U(a,p)?(P(a,p),a=e[--c],p=l[--u]):U(i,p)?("slot"!==i.h&&"slot"!==p.h||k(i._.parentNode,!1),P(i,p),t.insertBefore(i._,a._.nextSibling),i=e[++o],p=l[--u]):U(a,f)?("slot"!==i.h&&"slot"!==p.h||k(a._.parentNode,!1),P(a,f),t.insertBefore(a._,i._),a=e[--c],f=l[++r]):(s=R(e&&e[r],n,r,t),f=l[++r],s&&C(i._).insertBefore(s,O(i._)));o>c?S(t,null==l[u+1]?null:l[u+1]._,n,l,r,u):r>u&&L(e,o,c)})(n,l,e,s):null!==s?(null!==t.o&&(n.textContent=""),S(n,null,e,s,0,s.length-1)):null!==l&&L(l,0,l.length-1)):(r=n["s-cr"])?r.parentNode.textContent=o:t.o!==o&&(n.data=o)},T=t=>{let e,n,l,s,o,r,c=t.childNodes;for(n=0,l=c.length;n<l;n++)if(e=c[n],1===e.nodeType){if(e["s-sr"])for(o=e["s-sn"],e.hidden=!1,s=0;s<l;s++)if(c[s]["s-hn"]!==e["s-hn"])if(r=c[s].nodeType,""!==o){if(1===r&&o===c[s].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==c[s].textContent.trim()){e.hidden=!0;break}T(e)}},x=[],A=t=>{let e,n,l,o,r,c,i=0,a=t.childNodes,u=a.length;for(;i<u;i++){if(e=a[i],e["s-sr"]&&(n=e["s-cr"]))for(l=n.parentNode.childNodes,o=e["s-sn"],c=l.length-1;c>=0;c--)n=l[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||(E(n,o)?(r=x.find(t=>t.j===n),s=!0,n["s-sn"]=n["s-sn"]||o,r?r.g=e:x.push({g:e,j:n}),n["s-sr"]&&x.map(t=>{E(t.j,n["s-sn"])&&(r=x.find(t=>t.j===n),r&&!t.g&&(t.g=r.g))})):x.some(t=>t.j===n)||x.push({j:n}));1===e.nodeType&&A(e)}},E=(t,e)=>1===t.nodeType?null===t.getAttribute("slot")&&""===e||t.getAttribute("slot")===e:t["s-sn"]===e||""===e,W=t=>Z(t).v,F=(t,e,n)=>{const l=W(t);return{emit:t=>N(l,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},N=(t,e,n)=>{const l=new CustomEvent(e,n);return t.dispatchEvent(l),l},q=(t,e)=>{e&&!t.M&&e["s-p"]&&e["s-p"].push(new Promise(e=>t.M=e))},B=(t,e)=>{if(t.t|=16,!(4&t.t))return q(t,t.R),$t(()=>H(t,e));t.t|=512},H=(t,e)=>{const n=t.k;let l;return e&&(l=I(n,"componentWillLoad")),J(l,()=>V(t,n,e))},V=(r,c,i)=>{const p=r.v,$=p["s-rc"];i&&(t=>{const e=t.S,n=t.v,l=e.t,s=((t,e)=>{let n=d(e),l=rt.get(n);if(t=11===t.nodeType?t:a,l)if("string"==typeof l){let e,s=m.get(t=t.head||t);s||m.set(t,s=new Set),s.has(n)||(e=a.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),s&&s.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(f&&n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(r),((r,c)=>{const i=r.v,p=r.S,$=r.L||y(null,null),m=(t=>t&&t.h===_)(c)?c:w(null,null,c);if(n=i.tagName,m.h=null,m.t|=4,r.L=m,m._=$._=i.shadowRoot||i,t=i["s-sc"],e=i["s-cr"],l=f&&0!=(1&p.t),s=!1,P($,m),u.t|=1,o){let t,e,n,l,s,o;A(m._);let r=0;for(;r<x.length;r++)t=x[r],e=t.j,e["s-ol"]||(n=a.createTextNode(""),n["s-nr"]=e,e.parentNode.insertBefore(e["s-ol"]=n,e));for(r=0;r<x.length;r++)if(t=x[r],e=t.j,t.g){for(l=t.g.parentNode,s=t.g.nextSibling,n=e["s-ol"];n=n.previousSibling;)if(o=n["s-nr"],o&&o["s-sn"]===e["s-sn"]&&l===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&l!==e.parentNode||e.nextSibling!==s)&&e!==s&&(!e["s-hn"]&&e["s-ol"]&&(e["s-hn"]=e["s-ol"].parentNode.nodeName),l.insertBefore(e,s))}else 1===e.nodeType&&(e.hidden=!0)}s&&T(m._),u.t&=-2,x.length=0})(r,z(r,c)),$&&($.map(t=>t()),p["s-rc"]=void 0);{const t=p["s-p"],e=()=>D(r);0===t.length?e():(Promise.all(t).then(e),r.t|=4,t.length=0)}},z=(t,e)=>{try{e=e.render(),t.t&=-17,t.t|=2}catch(n){lt(n)}return e},D=t=>{const e=t.v,n=t.R;64&t.t||(t.t|=64,K(e),t.U(e),n||G()),t.M&&(t.M(),t.M=void 0),512&t.t&&pt(()=>B(t,!1)),t.t&=-517},G=()=>{K(a.documentElement),pt(()=>N(c,"appload",{detail:{namespace:"teststencil"}}))},I=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){lt(l)}},J=(t,e)=>t&&t.then?t.then(e):e(),K=t=>t.classList.add("hydrated"),Q=(t,e,n)=>{if(e.O){t.watchers&&(e.C=t.watchers);const l=Object.entries(e.O),s=t.prototype;if(l.map(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,t,{get(){return((t,e)=>Z(this).P.get(e))(0,t)},set(n){((t,e,n,l)=>{const s=Z(this),o=s.P.get(e),r=s.t,c=s.k;if(n=((t,e)=>null==t||h(t)?t:1&e?t+"":t)(n,l.O[e][0]),!(8&r&&void 0!==o||n===o)&&(s.P.set(e,n),c)){if(l.C&&128&r){const t=l.C[e];t&&t.map(t=>{try{c[t](n,o,e)}catch(l){lt(l)}})}2==(18&r)&&B(s,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;s.attributeChangedCallback=function(t,n,l){u.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},X=(t,e={})=>{const n=[],l=e.exclude||[],s=c.customElements,o=a.head,r=o.querySelector("meta[charset]"),i=a.createElement("style"),p=[];let m,b=!0;Object.assign(u,e),u.l=new URL(e.resourcesUrl||"./",a.baseURI).href,t.map(t=>t[1].map(e=>{const o={t:e[0],s:e[1],O:e[2],T:e[3]};o.O=e[2],o.C={},!f&&1&o.t&&(o.t|=8);const r=o.s,c=class extends HTMLElement{constructor(t){super(t),et(t=this,o),1&o.t&&(f?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){m&&(clearTimeout(m),m=null),b?p.push(this):u.jmp(()=>(t=>{if(0==(1&u.t)){const e=Z(t),n=e.S,l=()=>{};if(!(1&e.t)){e.t|=1,12&n.t&&(t=>{const e=t["s-cr"]=a.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)})(t);{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){q(e,e.R=n);break}}n.O&&Object.entries(n.O).map(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),pt(()=>(async(t,e,n,l,s)=>{if(0==(32&e.t)){e.t|=32;{if((s=ot(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(n.C=s.watchers,Q(s,n,2),s.isProxied=!0);const t=()=>{};e.t|=8;try{new s(e)}catch(c){lt(c)}e.t&=-9,e.t|=128,t()}const t=d(n);if(!rt.has(t)&&s.style){const e=()=>{};let l=s.style;8&n.t&&(l=await __sc_import_teststencil("./p-8a8f7b57.js").then(e=>e.scopeCss(l,t,!1))),((t,e,n)=>{let l=rt.get(t);$&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,rt.set(t,l)})(t,l,!!(1&n.t)),e()}}const o=e.R,r=()=>B(e,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,e,n))}l()}})(this))}disconnectedCallback(){u.jmp(()=>{})}forceUpdate(){(()=>{{const t=Z(this);t.v.isConnected&&2==(18&t.t)&&B(t,!1)}})()}componentOnReady(){return Z(this).A}};o.W=t[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,Q(c,o,1)))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),o.insertBefore(i,r?r.nextSibling:o.firstChild),b=!1,p.length?p.map(t=>t.connectedCallback()):u.jmp(()=>m=setTimeout(G,30))},Y=new WeakMap,Z=t=>Y.get(t),tt=(t,e)=>Y.set(e.k=t,e),et=(t,e)=>{const n={t:0,v:t,S:e,P:new Map};return n.A=new Promise(t=>n.U=t),t["s-p"]=[],t["s-rc"]=[],Y.set(t,n)},nt=(t,e)=>e in t,lt=t=>console.error(t),st=new Map,ot=t=>{const e=t.s.replace(/-/g,"_"),n=t.W,l=st.get(n);return l?l[e]:__sc_import_teststencil(`./${n}.entry.js`).then(t=>(st.set(n,t),t[e]),lt)},rt=new Map,ct=[],it=[],at=(t,e)=>n=>{t.push(n),r||(r=!0,e&&4&u.t?pt(ft):u.raf(ft))},ut=t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){lt(e)}t.length=0},ft=()=>{ut(ct),ut(it),(r=ct.length>0)&&u.raf(ft)},pt=t=>p().then(t),$t=at(it,!0),mt=()=>i&&i.supports&&i.supports("color","var(--c)")?p():__sc_import_teststencil("./p-1b2d9a2e.js").then(()=>(u.F=c.__cssshim)?(!1).i():0),dt=()=>{u.F=c.__cssshim;const t=Array.from(a.querySelectorAll("script")).find(t=>/\/teststencil(\.esm)?\.js($|\?|#)/.test(t.src)||"teststencil"===t.getAttribute("data-stencil-namespace")),e=t["data-opts"]||{};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(e.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,c.location.href)).href,bt(e.resourcesUrl,t),c.customElements?p(e):__sc_import_teststencil("./p-2e1bb10c.js").then(()=>e))},bt=(t,e)=>{try{c.__sc_import_teststencil=Function("w","return import(w);//"+Math.random())}catch(n){const l=new Map;c.__sc_import_teststencil=n=>{const s=new URL(n,t).href;let o=l.get(s);if(!o){const t=a.createElement("script");t.type="module",t.crossOrigin=e.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.__sc_import_teststencil.m = m;`],{type:"application/javascript"})),o=new Promise(e=>{t.onload=()=>{e(c.__sc_import_teststencil.m),t.remove()}}),l.set(s,o),a.head.appendChild(t)}return o}}};export{mt as a,X as b,F as c,W as g,w as h,dt as p,tt as r}