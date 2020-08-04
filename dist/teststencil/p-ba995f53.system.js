var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,o){function s(e){try{l(n.next(e))}catch(r){o(r)}}function i(e){try{l(n["throw"](e))}catch(r){o(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,i)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,a,o,s;return s={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function i(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(o=s[0]&2?a["return"]:s[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,s[1])).done)return o;if(a=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(o=t.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){t.label=s[1];break}if(s[0]===6&&t.label<o[1]){t.label=o[1];o=s;break}if(o&&t.label<o[2]){t.label=o[2];t.ops.push(s);break}if(o[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(i){s=[6,i];a=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var o=arguments[r],s=0,i=o.length;s<i;s++,a++)n[a]=o[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="teststencil";var a;var o;var s;var i=false;var l=false;var f=false;var u=false;var c=false;var $=typeof window!=="undefined"?window:{};var v=$.CSS;var d=$.document||{head:{}};var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var p=function(){return(d.head.attachShadow+"").indexOf("[native")>-1}();var m=function(e){return Promise.resolve(e)};var g=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var y="{visibility:hidden}.hydrated{visibility:inherit}";var b=function(e,r){if(r===void 0){r=""}{return function(){return}}};var w=function(e,r){{return function(){return}}};var R=new WeakMap;var N=function(e,r,t){var n=Se.get(e);if(g&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}Se.set(e,n)};var S=function(e,r,t,n){var a=x(r);var o=Se.get(a);e=e.nodeType===11?e:d;if(o){if(typeof o==="string"){e=e.head||e;var s=R.get(e);var i=void 0;if(!s){R.set(e,s=new Set)}if(!s.has(a)){{if(h.$cssShim$){i=h.$cssShim$.createHostStyle(n,a,o,!!(r.$flags$&10));var l=i["s-sc"];if(l){a=l;s=null}}else{i=d.createElement("style");i.innerHTML=o}e.insertBefore(i,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[o])}}return a};var _=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=b("attachStyles",r.$tagName$);var o=S(p&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=o;t.classList.add(o+"-h")}a()};var x=function(e,r){return"sc-"+e.$tagName$};var T={};var j="http://www.w3.org/2000/svg";var C="http://www.w3.org/1999/xhtml";var E=function(e){return e!=null};var A=function(e){e=typeof e;return e==="object"||e==="function"};var M=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var L=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var o=null;var s=false;var i=false;var l=[];var f=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!A(a)){a=String(a)}if(s&&i){l[l.length-1].$text$+=a}else{l.push(s?k(null,a):a)}i=s}}};f(t);if(r){if(r.name){o=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}var c=k(e,null);c.$attrs$=r;if(l.length>0){c.$children$=l}{c.$name$=o}return c}));var k=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$name$=null}return t};var U={};var O=function(e){return e&&e.$tag$===U};var B=function(e,r,t,n,a,o){if(t!==n){var s=be(e,r);var i=r.toLowerCase();if(r==="class"){var l=e.classList;var f=H(t);var u=H(n);l.remove.apply(l,f.filter((function(e){return e&&!u.includes(e)})));l.add.apply(l,u.filter((function(e){return e&&!f.includes(e)})))}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(be($,i)){r=i.slice(2)}else{r=i[2]+r.slice(3)}if(t){h.rel(e,r,t,false)}if(n){h.ael(e,r,n,false)}}else{var c=A(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var v=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=v){e[r]=v}}else{e[r]=n}}catch(d){}}if(n==null||n===false){{e.removeAttribute(r)}}else if((!s||o&4||a)&&!c){n=n===true?"":n;{e.setAttribute(r,n)}}}}};var P=/\s/;var H=function(e){return!e?[]:e.split(P)};var I=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var o=e&&e.$attrs$||T;var s=r.$attrs$||T;for(n in s){B(a,n,o[n],s[n],t,r.$flags$)}};var q=function(e,r,t,n){var l=r.$children$[t];var c=0;var $;var v;var h;if(!i){f=true;if(l.$tag$==="slot"){if(a){n.classList.add(a+"-s")}l.$flags$|=l.$children$?2:1}}if(l.$text$!==null){$=l.$elm$=d.createTextNode(l.$text$)}else if(l.$flags$&1){$=l.$elm$=d.createTextNode("")}else{if(!u){u=l.$tag$==="svg"}$=l.$elm$=d.createElementNS(u?j:C,l.$flags$&2?"slot-fb":l.$tag$);if(u&&l.$tag$==="foreignObject"){u=false}{I(null,l,u)}if(E(a)&&$["s-si"]!==a){$.classList.add($["s-si"]=a)}if(l.$children$){for(c=0;c<l.$children$.length;++c){v=q(e,l,c,$);if(v){$.appendChild(v)}}}{if(l.$tag$==="svg"){u=false}else if($.tagName==="foreignObject"){u=true}}}{$["s-hn"]=s;if(l.$flags$&(2|1)){$["s-sr"]=true;$["s-cr"]=o;$["s-sn"]=l.$name$||"";h=e&&e.$children$&&e.$children$[t];if(h&&h.$tag$===l.$tag$&&e.$elm$){z(e.$elm$,false)}}}return $};var z=function(e,r){h.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==s&&a["s-ol"]){G(a).insertBefore(a,W(a));a["s-ol"].remove();a["s-ol"]=undefined;f=true}if(r){z(a,r)}}h.$flags$&=~1};var F=function(e,r,t,n,a,o){var i=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if(i.shadowRoot&&i.tagName===s){i=i.shadowRoot}for(;a<=o;++a){if(n[a]){l=q(null,t,a,e);if(l){n[a].$elm$=l;i.insertBefore(l,W(r))}}}};var W=function(e){return e&&e["s-ol"]||e};var G=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var V=function(e,r){var t=r.$elm$=e.$elm$;var n=r.$children$;var a=r.$tag$;var o=r.$text$;var s;if(o===null){{u=a==="svg"?true:a==="foreignObject"?false:u}{if(a==="slot");else{I(e,r,u)}}if(n!==null){F(t,null,r,n,0,n.length-1)}if(u&&a==="svg"){u=false}}else if(s=t["s-cr"]){s.parentNode.textContent=o}else if(e.$text$!==o){t.data=o}};var D=function(e){var r=e.childNodes;var t;var n;var a;var o;var s;var i;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(o=0;o<a;o++){if(r[o]["s-hn"]!==t["s-hn"]){i=r[o].nodeType;if(s!==""){if(i===1&&s===r[o].getAttribute("slot")){t.hidden=true;break}}else{if(i===1||i===3&&r[o].textContent.trim()!==""){t.hidden=true;break}}}}}D(t)}}};var J=[];var K=function(e){var r;var t;var n;var a;var o;var s;var i=0;var f=e.childNodes;var u=f.length;for(;i<u;i++){r=f[i];if(r["s-sr"]&&(t=r["s-cr"])){n=t.parentNode.childNodes;a=r["s-sn"];for(s=n.length-1;s>=0;s--){t=n[s];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(Q(t,a)){o=J.find((function(e){return e.$nodeToRelocate$===t}));l=true;t["s-sn"]=t["s-sn"]||a;if(o){o.$slotRefNode$=r}else{J.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){J.map((function(e){if(Q(e.$nodeToRelocate$,t["s-sn"])){o=J.find((function(e){return e.$nodeToRelocate$===t}));if(o&&!e.$slotRefNode$){e.$slotRefNode$=o.$slotRefNode$}}}))}}else if(!J.some((function(e){return e.$nodeToRelocate$===t}))){J.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){K(r)}}};var Q=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var X=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var u=e.$vnode$||k(null,null);var c=O(r)?r:L(null,null,r);s=t.tagName;c.$tag$=null;c.$flags$|=4;e.$vnode$=c;c.$elm$=u.$elm$=t.shadowRoot||t;{a=t["s-sc"]}{o=t["s-cr"];i=p&&(n.$flags$&1)!==0;l=false}V(u,c);{h.$flags$|=1;if(f){K(c.$elm$);var $=void 0;var v=void 0;var m=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<J.length;w++){$=J[w];v=$.$nodeToRelocate$;if(!v["s-ol"]){m=d.createTextNode("");m["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=m,v)}}for(w=0;w<J.length;w++){$=J[w];v=$.$nodeToRelocate$;if($.$slotRefNode$){g=$.$slotRefNode$.parentNode;y=$.$slotRefNode$.nextSibling;m=v["s-ol"];while(m=m.previousSibling){b=m["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(l){D(c.$elm$)}h.$flags$&=~1;J.length=0}};var Y=function(e){return me(e).$hostElement$};var Z=e("c",(function(e,r,t){var n=Y(e);return{emit:function(e){return ee(n,r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e})}}}));var ee=function(e,r,t){var n=new CustomEvent(r,t);e.dispatchEvent(n);return n};var re=function(e,r){if(r&&!e.$onRenderResolve$&&r["s-p"]){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var te=function(e,r){if(e.$flags$&4){e.$flags$|=512;return}re(e,e.$ancestorComponent$);var t=function(){return ne(e,r)};return Ae(t)};var ne=function(e,r){var t=b("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;t();return le(a,(function(){return ae(e,n,r)}))};var ae=function(e,r,t){var n=e.$hostElement$;var a=b("update",e.$cmpMeta$.$tagName$);var o=n["s-rc"];if(t){_(e)}var s=b("render",e.$cmpMeta$.$tagName$);{{X(e,oe(e,r))}}if(h.$cssShim$){h.$cssShim$.updateHost(n)}if(o){o.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var i=n["s-p"];var l=function(){return se(e)};if(i.length===0){l()}else{Promise.all(i).then(l);e.$flags$|=4;i.length=0}}};var oe=function(e,r){try{r=r.render();{e.$flags$|=2}}catch(t){we(t)}return r};var se=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=b("postUpdate",r);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{fe(t)}n();{e.$onReadyResolve$(t);if(!a){ie()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ee((function(){return te(e,false)}))}e.$flags$&=~(4|512)}};var ie=function(e){{fe(d.documentElement)}Ee((function(){return ee($,"appload",{detail:{namespace:n}})}))};var le=function(e,r){return e&&e.then?e.then(r):r()};var fe=function(e){return e.classList.add("hydrated")};var ue=function(e,r,t){return e};var ce=function(e,n,a,o,s){return __awaiter(t,void 0,void 0,(function(){var e,t,o,i,l,f,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=Ne(a);if(!s.then)return[3,2];e=w();return[4,s];case 1:s=c.sent();e();c.label=2;case 2:t=b("createInstance",a.$tagName$);try{new s(n)}catch($){we($)}t();o=x(a);if(!(!Se.has(o)&&s.style))return[3,5];i=b("registerStyles",a.$tagName$);l=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-cb0bfb69.system.js").then((function(e){return e.scopeCss(l,o,false)}))];case 3:l=c.sent();c.label=4;case 4:N(o,l,!!(a.$flags$&1));i();c.label=5;case 5:f=n.$ancestorComponent$;u=function(){return te(n,true)};if(f&&f["s-rc"]){f["s-rc"].push(u)}else{u()}return[2]}}))}))};var $e=function(e){if((h.$flags$&1)===0){var r=me(e);var t=r.$cmpMeta$;var n=b("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){ve(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){re(r,r.$ancestorComponent$=a);break}}}{Ee((function(){return ce(e,r,t)}))}}n()}};var ve=function(e){var r=e["s-cr"]=d.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var de=function(e){if((h.$flags$&1)===0){var r=me(e);if(h.$cssShim$){h.$cssShim$.removeHost(e)}}};var he=e("b",(function(e,r){if(r===void 0){r={}}var t=b();var n=[];var a=r.exclude||[];var o=$.customElements;var s=d.head;var i=s.querySelector("meta[charset]");var l=d.createElement("style");var f=[];var u;var c=true;Object.assign(h,r);h.$resourcesUrl$=new URL(r.resourcesUrl||"./",d.baseURI).href;e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};if(!p&&t.$flags$&1){t.$flags$|=8}var s=t.$tagName$;var i=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;ye(r,t);if(t.$flags$&1){if(p){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if(c){f.push(this)}else{h.jmp((function(){return $e(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return de(e)}))};r.prototype.forceUpdate=function(){};r.prototype.componentOnReady=function(){return me(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(s)&&!o.get(s)){n.push(s);o.define(s,ue(i))}}))}));{l.innerHTML=n+y;l.setAttribute("data-styles","");s.insertBefore(l,i?i.nextSibling:s.firstChild)}c=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{h.jmp((function(){return u=setTimeout(ie,30)}))}}t()}));var pe=new WeakMap;var me=function(e){return pe.get(e)};var ge=e("r",(function(e,r){return pe.set(r.$lazyInstance$=e,r)}));var ye=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return pe.set(e,t)};var be=function(e,r){return r in e};var we=function(e){return console.error(e)};var Re=new Map;var Ne=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var o=e.$lazyBundleIds$;var s=Re.get(o);if(s){return s[a]}return r.import("./"+o+".entry.js"+"").then((function(e){{Re.set(o,e)}return e[a]}),we)};var Se=new Map;var _e=[];var xe=[];var Te=function(e,r){return function(t){e.push(t);if(!c){c=true;if(r&&h.$flags$&4){Ee(Ce)}else{h.raf(Ce)}}}};var je=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){we(t)}}e.length=0};var Ce=function(){je(_e);{je(xe);if(c=_e.length>0){h.raf(Ce)}}};var Ee=function(e){return m().then(e)};var Ae=Te(xe,true);var Me=e("a",(function(){if(!(v&&v.supports&&v.supports("color","var(--c)"))){return r.import("./p-b2525e42.system.js").then((function(){if(h.$cssShim$=$.__cssshim){return h.$cssShim$.i()}else{return 0}}))}return m()}));var Le=e("p",(function(){{h.$cssShim$=$.__cssshim}var e=Array.from(d.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,$.location.href)).href;{ke(t.resourcesUrl,e)}if(!$.customElements){return r.import("./p-67940bdc.system.js").then((function(){return t}))}}return m(t)}));var ke=function(e,r){var t=M(n);try{$[t]=new Function("w","return import(w);//"+Math.random())}catch(o){var a=new Map;$[t]=function(n){var o=new URL(n,e).href;var s=a.get(o);if(!s){var i=d.createElement("script");i.type="module";i.crossOrigin=r.crossOrigin;i.src=URL.createObjectURL(new Blob(["import * as m from '"+o+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){i.onload=function(){e($[t].m);i.remove()}}));a.set(o,s);d.head.appendChild(i)}return s}}}}}}));