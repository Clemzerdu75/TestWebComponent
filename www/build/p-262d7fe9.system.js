var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function o(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="teststencil";var a;var i;var s;var o=false;var l=false;var f=false;var $=false;var u=false;var c=typeof window!=="undefined"?window:{};var v=c.CSS;var d=c.document||{head:{}};var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var m=function(){return(d.head.attachShadow+"").indexOf("[native")>-1}();var p=function(e){return Promise.resolve(e)};var g=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var y=function(e,r,t,n){if(t){t.map((function(t){var n=t[0],a=t[1],i=t[2];var s=w(e,n);var o=b(r,i);var l=R(n);h.ael(s,a,o,l);(r.$rmListeners$=r.$rmListeners$||[]).push((function(){return h.rel(s,a,o,l)}))}))}};var b=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([r,t])}}}};var w=function(e,r){if(r&8)return c;return e};var R=function(e){return(e&2)!==0};var N="{visibility:hidden}.hydrated{visibility:inherit}";var S=function(e,r){if(r===void 0){r=""}{return function(){return}}};var _=function(e,r){{return function(){return}}};var x=new WeakMap;var L=function(e,r,t){var n=Pe.get(e);if(g&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}Pe.set(e,n)};var j=function(e,r,t,n){var a=T(r);var i=Pe.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var s=x.get(e);var o=void 0;if(!s){x.set(e,s=new Set)}if(!s.has(a)){{if(h.$cssShim$){o=h.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=d.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var C=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=S("attachStyles",r.$tagName$);var i=j(m&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h")}a()};var T=function(e,r){return"sc-"+e.$tagName$};var E={};var A="http://www.w3.org/2000/svg";var M="http://www.w3.org/1999/xhtml";var O=function(e){return e!=null};var k=function(e){e=typeof e;return e==="object"||e==="function"};var U=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var P=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=false;var o=false;var l=[];var f=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!k(a)){a=String(a)}if(s&&o){l[l.length-1].$text$+=a}else{l.push(s?B(null,a):a)}o=s}}};f(t);if(r){if(r.name){i=r.name}{var $=r.className||r.class;if($){r.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}var u=B(e,null);u.$attrs$=r;if(l.length>0){u.$children$=l}{u.$name$=i}return u}));var B=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$name$=null}return t};var q=e("H",{});var I=function(e){return e&&e.$tag$===q};var z=function(e,r,t,n,a,i){if(t!==n){var s=Me(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var f=V(t);var $=V(n);l.remove.apply(l,f.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(Me(c,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(t){h.rel(e,r,t,false)}if(n){h.ael(e,r,n,false)}}else{var u=k(n);if((s||u&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var v=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=v){e[r]=v}}else{e[r]=n}}catch(d){}}if(n==null||n===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!u){n=n===true?"":n;{e.setAttribute(r,n)}}}}};var H=/\s/;var V=function(e){return!e?[]:e.split(H)};var D=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||E;var s=r.$attrs$||E;{for(n in i){if(!(n in s)){z(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){z(a,n,i[n],s[n],t,r.$flags$)}};var F=function(e,r,t,n){var l=r.$children$[t];var u=0;var c;var v;var h;if(!o){f=true;if(l.$tag$==="slot"){if(a){n.classList.add(a+"-s")}l.$flags$|=l.$children$?2:1}}if(l.$text$!==null){c=l.$elm$=d.createTextNode(l.$text$)}else if(l.$flags$&1){c=l.$elm$=d.createTextNode("")}else{if(!$){$=l.$tag$==="svg"}c=l.$elm$=d.createElementNS($?A:M,l.$flags$&2?"slot-fb":l.$tag$);if($&&l.$tag$==="foreignObject"){$=false}{D(null,l,$)}if(O(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(l.$children$){for(u=0;u<l.$children$.length;++u){v=F(e,l,u,c);if(v){c.appendChild(v)}}}{if(l.$tag$==="svg"){$=false}else if(c.tagName==="foreignObject"){$=true}}}{c["s-hn"]=s;if(l.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=l.$name$||"";h=e&&e.$children$&&e.$children$[t];if(h&&h.$tag$===l.$tag$&&e.$elm$){W(e.$elm$,false)}}}return c};var W=function(e,r){h.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==s&&a["s-ol"]){Y(a).insertBefore(a,X(a));a["s-ol"].remove();a["s-ol"]=undefined;f=true}if(r){W(a,r)}}h.$flags$&=~1};var G=function(e,r,t,n,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if(o.shadowRoot&&o.tagName===s){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){l=F(null,t,a,e);if(l){n[a].$elm$=l;o.insertBefore(l,X(r))}}}};var J=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;ae(n);{l=true;if(a["s-ol"]){a["s-ol"].remove()}else{W(a,true)}}a.remove()}}};var K=function(e,r,t,n){var a=0;var i=0;var s=r.length-1;var o=r[0];var l=r[s];var f=n.length-1;var $=n[0];var u=n[f];var c;while(a<=s&&i<=f){if(o==null){o=r[++a]}else if(l==null){l=r[--s]}else if($==null){$=n[++i]}else if(u==null){u=n[--f]}else if(Q(o,$)){Z(o,$);o=r[++a];$=n[++i]}else if(Q(l,u)){Z(l,u);l=r[--s];u=n[--f]}else if(Q(o,u)){if(o.$tag$==="slot"||u.$tag$==="slot"){W(o.$elm$.parentNode,false)}Z(o,u);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=r[++a];u=n[--f]}else if(Q(l,$)){if(o.$tag$==="slot"||u.$tag$==="slot"){W(l.$elm$.parentNode,false)}Z(l,$);e.insertBefore(l.$elm$,o.$elm$);l=r[--s];$=n[++i]}else{{c=F(r&&r[i],t,i,e);$=n[++i]}if(c){{Y(o.$elm$).insertBefore(c,X(o.$elm$))}}}}if(a>s){G(e,n[f+1]==null?null:n[f+1].$elm$,t,n,i,f)}else if(i>f){J(r,a,s)}};var Q=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}return true}return false};var X=function(e){return e&&e["s-ol"]||e};var Y=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var Z=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var s=r.$text$;var o;if(s===null){{$=i==="svg"?true:i==="foreignObject"?false:$}{if(i==="slot");else{D(e,r,$)}}if(n!==null&&a!==null){K(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}G(t,null,r,a,0,a.length-1)}else if(n!==null){J(n,0,n.length-1)}if($&&i==="svg"){$=false}}else if(o=t["s-cr"]){o.parentNode.textContent=s}else if(e.$text$!==s){t.data=s}};var ee=function(e){var r=e.childNodes;var t;var n;var a;var i;var s;var o;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}ee(t)}}};var re=[];var te=function(e){var r;var t;var n;var a;var i;var s;var o=0;var f=e.childNodes;var $=f.length;for(;o<$;o++){r=f[o];if(r["s-sr"]&&(t=r["s-cr"])){n=t.parentNode.childNodes;a=r["s-sn"];for(s=n.length-1;s>=0;s--){t=n[s];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(ne(t,a)){i=re.find((function(e){return e.$nodeToRelocate$===t}));l=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{re.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){re.map((function(e){if(ne(e.$nodeToRelocate$,t["s-sn"])){i=re.find((function(e){return e.$nodeToRelocate$===t}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!re.some((function(e){return e.$nodeToRelocate$===t}))){re.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){te(r)}}};var ne=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var ae=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(ae)}};var ie=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var $=e.$vnode$||B(null,null);var u=I(r)?r:P(null,null,r);s=t.tagName;u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=$.$elm$=t.shadowRoot||t;{a=t["s-sc"]}{i=t["s-cr"];o=m&&(n.$flags$&1)!==0;l=false}Z($,u);{h.$flags$|=1;if(f){te(u.$elm$);var c=void 0;var v=void 0;var p=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<re.length;w++){c=re[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){p=d.createTextNode("");p["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=p,v)}}for(w=0;w<re.length;w++){c=re[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;p=v["s-ol"];while(p=p.previousSibling){b=p["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(l){ee(u.$elm$)}h.$flags$&=~1;re.length=0}};var se=function(e){return Te(e).$hostElement$};var oe=e("c",(function(e,r,t){var n=se(e);return{emit:function(e){return le(n,r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e})}}}));var le=function(e,r,t){var n=new CustomEvent(r,t);e.dispatchEvent(n);return n};var fe=function(e,r){if(r&&!e.$onRenderResolve$&&r["s-p"]){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var $e=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}fe(e,e.$ancestorComponent$);var t=function(){return ue(e,r)};return De(t)};var ue=function(e,r){var t=S("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(r){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var r=e[0],t=e[1];return pe(n,r,t)}));e.$queuedListeners$=null}}}t();return ge(a,(function(){return ce(e,n,r)}))};var ce=function(e,r,t){var n=e.$hostElement$;var a=S("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){C(e)}var s=S("render",e.$cmpMeta$.$tagName$);{{ie(e,ve(e,r))}}if(h.$cssShim$){h.$cssShim$.updateHost(n)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var o=n["s-p"];var l=function(){return de(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}};var ve=function(e,r){try{r=r.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(t){Oe(t)}return r};var de=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=S("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;{pe(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{ye(t)}{pe(a,"componentDidLoad")}n();{e.$onReadyResolve$(t);if(!i){me()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ve((function(){return $e(e,false)}))}e.$flags$&=~(4|512)}};var he=function(e){{var r=Te(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){$e(r,false)}return t}};var me=function(e){{ye(d.documentElement)}Ve((function(){return le(c,"appload",{detail:{namespace:n}})}))};var pe=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){Oe(n)}}return undefined};var ge=function(e,r){return e&&e.then?e.then(r):r()};var ye=function(e){return e.classList.add("hydrated")};var be=function(e,r){if(e!=null&&!k(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&1){return String(e)}return e}return e};var we=function(e,r){return Te(e).$instanceValues$.get(r)};var Re=function(e,r,t,n){var a=Te(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;t=be(t,n.$members$[r][0]);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(o){if(n.$watchers$&&s&128){var l=n.$watchers$[r];if(l){l.map((function(e){try{o[e](t,i,r)}catch(n){Oe(n)}}))}}if((s&(2|16))===2){$e(a,false)}}}};var Ne=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return we(this,n)},set:function(e){Re(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;h.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var r=e[0],t=e[1];var n=t[1]||r;i.set(n,r);return n}))}}return e};var Se=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var e,t,i,o,l,f,$;return __generator(this,(function(u){switch(u.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=Ue(a);if(!s.then)return[3,2];e=_();return[4,s];case 1:s=u.sent();e();u.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}Ne(s,a,2);s.isProxied=true}t=S("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(c){Oe(c)}{n.$flags$&=~8}{n.$flags$|=128}t();i=T(a);if(!(!Pe.has(i)&&s.style))return[3,5];o=S("registerStyles",a.$tagName$);l=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-cb0bfb69.system.js").then((function(e){return e.scopeCss(l,i,false)}))];case 3:l=u.sent();u.label=4;case 4:L(i,l,!!(a.$flags$&1));o();u.label=5;case 5:f=n.$ancestorComponent$;$=function(){return $e(n,true)};if(f&&f["s-rc"]){f["s-rc"].push($)}else{$()}return[2]}}))}))};var _e=function(e){if((h.$flags$&1)===0){var r=Te(e);var t=r.$cmpMeta$;var n=S("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){xe(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){fe(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{Ve((function(){return Se(e,r,t)}))}}else{y(e,r,t.$listeners$)}n()}};var xe=function(e){var r=e["s-cr"]=d.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var Le=function(e){if((h.$flags$&1)===0){var r=Te(e);{if(r.$rmListeners$){r.$rmListeners$.map((function(e){return e()}));r.$rmListeners$=undefined}}if(h.$cssShim$){h.$cssShim$.removeHost(e)}}};var je=e("b",(function(e,r){if(r===void 0){r={}}var t=S();var n=[];var a=r.exclude||[];var i=c.customElements;var s=d.head;var o=s.querySelector("meta[charset]");var l=d.createElement("style");var f=[];var $;var u=true;Object.assign(h,r);h.$resourcesUrl$=new URL(r.resourcesUrl||"./",d.baseURI).href;e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}{t.$watchers$={}}if(!m&&t.$flags$&1){t.$flags$|=8}var s=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;Ae(r,t);if(t.$flags$&1){if(m){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{h.jmp((function(){return _e(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return Le(e)}))};r.prototype.forceUpdate=function(){he(this)};r.prototype.componentOnReady=function(){return Te(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,Ne(o,t,1))}}))}));{l.innerHTML=n+N;l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild)}u=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{h.jmp((function(){return $=setTimeout(me,30)}))}}t()}));var Ce=new WeakMap;var Te=function(e){return Ce.get(e)};var Ee=e("r",(function(e,r){return Ce.set(r.$lazyInstance$=e,r)}));var Ae=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}y(e,t,r.$listeners$);return Ce.set(e,t)};var Me=function(e,r){return r in e};var Oe=function(e){return console.error(e)};var ke=new Map;var Ue=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=ke.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{ke.set(i,e)}return e[a]}),Oe)};var Pe=new Map;var Be=[];var qe=[];var Ie=function(e,r){return function(t){e.push(t);if(!u){u=true;if(r&&h.$flags$&4){Ve(He)}else{h.raf(He)}}}};var ze=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){Oe(t)}}e.length=0};var He=function(){ze(Be);{ze(qe);if(u=Be.length>0){h.raf(He)}}};var Ve=function(e){return p().then(e)};var De=Ie(qe,true);var Fe=e("a",(function(){if(!(v&&v.supports&&v.supports("color","var(--c)"))){return r.import("./p-b2525e42.system.js").then((function(){if(h.$cssShim$=c.__cssshim){return h.$cssShim$.i()}else{return 0}}))}return p()}));var We=e("p",(function(){{h.$cssShim$=c.__cssshim}var e=Array.from(d.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,c.location.href)).href;{Ge(t.resourcesUrl,e)}if(!c.customElements){return r.import("./p-67940bdc.system.js").then((function(){return t}))}}return p(t)}));var Ge=function(e,r){var t=U(n);try{c[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;c[t]=function(n){var i=new URL(n,e).href;var s=a.get(i);if(!s){var o=d.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(c[t].m);o.remove()}}));a.set(i,s);d.head.appendChild(o)}return s}}}}}}));