var I=(s,n)=>()=>(n||s((n={exports:{}}).exports,n),n.exports);var z=(s,n,d)=>{if(!n.has(s))throw TypeError("Cannot "+d)};var R=(s,n,d)=>{if(n.has(s))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(s):n.set(s,d)};var q=(s,n,d)=>(z(s,n,"access private method"),d);var Y=I((k,M)=>{const F=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function d(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=d(t);fetch(t.href,e)}};F();/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(s,n){typeof k=="object"&&typeof M=="object"?M.exports=n():typeof define=="function"&&define.amd?define([],n):typeof k=="object"?k.ClipboardJS=n():s.ClipboardJS=n()})(globalThis,function(){return n={686:function(a,o,e){e.d(o,{default:function(){return H}});var o=e(279),i=e.n(o),o=e(370),m=e.n(o),o=e(817),p=e.n(o);function h(u){try{return document.execCommand(u)}catch{return}}var b=function(u){return u=p()(u),h("cut"),u};function x(y,c){var r,f,y=(r=y,f=document.documentElement.getAttribute("dir")==="rtl",(y=document.createElement("textarea")).style.fontSize="12pt",y.style.border="0",y.style.padding="0",y.style.margin="0",y.style.position="absolute",y.style[f?"right":"left"]="-9999px",f=window.pageYOffset||document.documentElement.scrollTop,y.style.top="".concat(f,"px"),y.setAttribute("readonly",""),y.value=r,y);return c.container.appendChild(y),c=p()(y),h("copy"),y.remove(),c}var g=function(u){var c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof u=="string"?r=x(u,c):u instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(u==null?void 0:u.type)?r=x(u.value,c):(r=p()(u),h("copy")),r};function T(u){return(T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c})(u)}var S=function(){var f=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},r=f.action,u=r===void 0?"copy":r,c=f.container,r=f.target,f=f.text;if(u!=="copy"&&u!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(r!==void 0){if(!r||T(r)!=="object"||r.nodeType!==1)throw new Error('Invalid "target" value, use a valid Element');if(u==="copy"&&r.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(u==="cut"&&(r.hasAttribute("readonly")||r.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}return f?g(f,{container:c}):r?u==="cut"?b(r):g(r,{container:c}):void 0};function w(u){return(w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c})(u)}function A(u,c){for(var r=0;r<c.length;r++){var f=c[r];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(u,f.key,f)}}function C(u,c){return(C=Object.setPrototypeOf||function(r,f){return r.__proto__=f,r})(u,c)}function D(u){var c=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var r,f=O(u);return r=c?(r=O(this).constructor,Reflect.construct(f,arguments,r)):f.apply(this,arguments),f=this,!(r=r)||w(r)!=="object"&&typeof r!="function"?function(y){if(y!==void 0)return y;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(f):r}}function O(u){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(c){return c.__proto__||Object.getPrototypeOf(c)})(u)}function B(u,c){if(u="data-clipboard-".concat(u),c.hasAttribute(u))return c.getAttribute(u)}var H=function(){(function(l,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(v&&v.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),v&&C(l,v)})(y,i());var u,c,r,f=D(y);function y(l,v){var E;return function(L){if(!(L instanceof y))throw new TypeError("Cannot call a class as a function")}(this),(E=f.call(this)).resolveOptions(v),E.listenClick(l),E}return u=y,r=[{key:"copy",value:function(l){var v=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body};return g(l,v)}},{key:"cut",value:function(l){return b(l)}},{key:"isSupported",value:function(){var l=0<arguments.length&&arguments[0]!==void 0?arguments[0]:["copy","cut"],l=typeof l=="string"?[l]:l,v=!!document.queryCommandSupported;return l.forEach(function(E){v=v&&!!document.queryCommandSupported(E)}),v}}],(c=[{key:"resolveOptions",value:function(){var l=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof l.action=="function"?l.action:this.defaultAction,this.target=typeof l.target=="function"?l.target:this.defaultTarget,this.text=typeof l.text=="function"?l.text:this.defaultText,this.container=w(l.container)==="object"?l.container:document.body}},{key:"listenClick",value:function(l){var v=this;this.listener=m()(l,"click",function(E){return v.onClick(E)})}},{key:"onClick",value:function(L){var v=L.delegateTarget||L.currentTarget,E=this.action(v)||"copy",L=S({action:E,container:this.container,target:this.target(v),text:this.text(v)});this.emit(L?"success":"error",{action:E,text:L,trigger:v,clearSelection:function(){v&&v.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(l){return B("action",l)}},{key:"defaultTarget",value:function(l){if(l=B("target",l),l)return document.querySelector(l)}},{key:"defaultText",value:function(l){return B("text",l)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&A(u.prototype,c),r&&A(u,r),y}()},828:function(a){var t;typeof Element>"u"||Element.prototype.matches||((t=Element.prototype).matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector),a.exports=function(e,i){for(;e&&e.nodeType!==9;){if(typeof e.matches=="function"&&e.matches(i))return e;e=e.parentNode}}},438:function(a,t,e){var i=e(828);function m(o,p,h,b,x){var g=function(T,S,w,A){return function(C){C.delegateTarget=i(C.target,S),C.delegateTarget&&A.call(T,C)}}.apply(this,arguments);return o.addEventListener(h,g,x),{destroy:function(){o.removeEventListener(h,g,x)}}}a.exports=function(o,p,h,b,x){return typeof o.addEventListener=="function"?m.apply(null,arguments):typeof h=="function"?m.bind(null,document).apply(null,arguments):(typeof o=="string"&&(o=document.querySelectorAll(o)),Array.prototype.map.call(o,function(g){return m(g,p,h,b,x)}))}},879:function(a,t){t.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},t.nodeList=function(e){var i=Object.prototype.toString.call(e);return e!==void 0&&(i==="[object NodeList]"||i==="[object HTMLCollection]")&&"length"in e&&(e.length===0||t.node(e[0]))},t.string=function(e){return typeof e=="string"||e instanceof String},t.fn=function(e){return Object.prototype.toString.call(e)==="[object Function]"}},370:function(a,t,e){var i=e(879),m=e(438);a.exports=function(o,p,h){if(!o&&!p&&!h)throw new Error("Missing required arguments");if(!i.string(p))throw new TypeError("Second argument must be a String");if(!i.fn(h))throw new TypeError("Third argument must be a Function");if(i.node(o))return S=p,w=h,(T=o).addEventListener(S,w),{destroy:function(){T.removeEventListener(S,w)}};if(i.nodeList(o))return b=o,x=p,g=h,Array.prototype.forEach.call(b,function(A){A.addEventListener(x,g)}),{destroy:function(){Array.prototype.forEach.call(b,function(A){A.removeEventListener(x,g)})}};if(i.string(o))return o=o,p=p,h=h,m(document.body,o,p,h);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var b,x,g,T,S,w}},817:function(a){a.exports=function(t){var e,i=t.nodeName==="SELECT"?(t.focus(),t.value):t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),i=window.getSelection(),(e=document.createRange()).selectNodeContents(t),i.removeAllRanges(),i.addRange(e),i.toString());return i}},279:function(a){function t(){}t.prototype={on:function(e,i,m){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:i,ctx:m}),this},once:function(e,i,m){var o=this;function p(){o.off(e,p),i.apply(m,arguments)}return p._=i,this.on(e,p,m)},emit:function(e){for(var i=[].slice.call(arguments,1),m=((this.e||(this.e={}))[e]||[]).slice(),o=0,p=m.length;o<p;o++)m[o].fn.apply(m[o].ctx,i);return this},off:function(e,i){var m=this.e||(this.e={}),o=m[e],p=[];if(o&&i)for(var h=0,b=o.length;h<b;h++)o[h].fn!==i&&o[h].fn._!==i&&p.push(o[h]);return p.length?m[e]=p:delete m[e],this}},a.exports=t,a.exports.TinyEmitter=t}},d={},s.n=function(a){var t=a&&a.__esModule?function(){return a.default}:function(){return a};return s.d(t,{a:t}),t},s.d=function(a,t){for(var e in t)s.o(t,e)&&!s.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:t[e]})},s.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},s(686).default;function s(a){if(d[a])return d[a].exports;var t=d[a]={exports:{}};return n[a](t,t.exports,s),t.exports}var n,d});const N={\u9E66\u59CB\u9E23:[{name:"\u5982\u68A6\u4EE4",value:"#DDBB99"},{name:"\u82B8\u9EC4",value:"#D2A36A"},{name:"\u91D1\u57D2",value:"#BE9457"},{name:"\u96CC\u9EC4",value:"#B4884D"}],\u53CD\u820C\u65E0\u58F0:[{name:"\u66FE\u9752",value:"#535164"},{name:"\u51A5\u9752",value:"#454659"},{name:"qiu\u7433",value:"#343041"},{name:"\u747E\u745C",value:"#1E2732"}],\u590F\u81F3:[{name:"xi\u70BD",value:"#CB533E"},{name:"\u77F3\u69B4\u88D9",value:"#B13B2E"},{name:"\u6731\u6E5B",value:"#95302E"},{name:"\u5927\u7E4E",value:"#822327"}],\u9E7F\u89D2\u89E3:[{name:"\u6708\u9B42",value:"#B2B6B6"},{name:"\u4E0D\u7682",value:"#A7AAA1"},{name:"\u96F7\u96E8\u5782",value:"#7A7B7B"},{name:"\u77F3\u6D85",value:"#686A67"}],diao\u59CB\u9E23:[{name:"\u6276\u5149",value:"#f0c2a2"},{name:"\u6912\u623F",value:"#db9c5e"},{name:"\u7EA2\u53CB",value:"#d9883d"},{name:"\u5149\u660E\u7802",value:"#cc5d20"}],\u534A\u590F\u751F:[{name:"\u5C71\u77FE",value:"#f5f3f2"},{name:"\u7389\u9829",value:"#eae5e3"},{name:"\u4E8C\u76EE\u9C7C",value:"#dfe0d9"},{name:"\u660E\u6708\u73F0",value:"#d4d3ca"}],\u5C0F\u6691:[{name:"\u9A8D\u521A",value:"#f5b087"},{name:"\u8D6A\u971E",value:"#f18f60"},{name:"\u8D6A\u5C3E",value:"#ef845d"},{name:"\u6731\u67FF",value:"#ed6d46"}],\u6E29\u98CE\u81F3:[{name:"\u5929\u7403",value:"#e0dfc6"},{name:"\u884C\u9999\u5B50",value:"#bfb99c"},{name:"\u7389\u520D",value:"#a99f70"},{name:"\u8369\u7BA7",value:"#877d52"}],\u87CB\u87C0\u5C45\u58C1:[{name:"\u8D64\u7075",value:"#954024"},{name:"\u4E39\u79EB",value:"#873424"},{name:"\u6728\u5170",value:"#662b1f"},{name:"\u9E92\u9E9F\u7AED",value:"#4c1e1a"}],\u9E70\u59CB\u4E4B:[{name:"\u67D4\u84DD",value:"#106898"},{name:"\u78A7\u57CE",value:"#12507b"},{name:"\u84DD\u91C7\u548C",value:"#06436f"},{name:"\u5E1D\u91CA\u9752",value:"#003460"}],\u5927\u6691:[{name:"\u5915\u5C9A",value:"#e3adb9"},{name:"\u96CC\u9713",value:"#cf929e"},{name:"\u7EDB\u7EB1",value:"#b27777"},{name:"\u8339\u85D8",value:"#a35f65"}]};function V(){if(window.AudioContext=window.AudioContext||window.webkitAudioContext,!window.AudioContext)return;const s=[523.25,587.33,659.25,698.46,783.99];let n=0,d=1;for(let a=0;a<54e3;a++)if(a%3e4===0){const t=new AudioContext;let e=s[n];e||(d=-1*d,n=n*2*d,e=s[n]),n=n+d;const i=t.createOscillator(),m=t.createGain();i.connect(m),m.connect(t.destination),i.type="sine",i.frequency.value=e,m.gain.setValueAtTime(0,t.currentTime),m.gain.linearRampToValueAtTime(1,t.currentTime+.01),i.start(t.currentTime),m.gain.exponentialRampToValueAtTime(.01,t.currentTime+1),i.stop(t.currentTime+1)}}var j,_;class J{constructor(n,d){R(this,j);this.name=n,this.colors=d,this.domElement=this.create()}create(){const n=document.createElement("div");n.classList.add("color-box");const d=document.createElement("header");d.innerHTML=this.name;const a=document.createElement("div");return a.classList.add("color-box-main"),this.colors.forEach(t=>{const e=document.createElement("div");e.setAttribute("data-value",t.value),e.classList.add("color-item"),e.style.backgroundColor=t.value,e.innerHTML=t.name,e.setAttribute("title","\u70B9\u51FB\u53EF\u590D\u5236\u989C\u8272\u503C"),this.bindClipEvent(e,t),e.addEventListener("click",q(this,j,_)),a.appendChild(e)}),n.append(d,a),n}bindClipEvent(n,d){const a=new ClipboardJS(n);n.setAttribute("data-clipboard-text",d.value),a.on("success",t=>{n.classList.toggle("copy-done"),setTimeout(()=>{n.classList.remove("copy-done")},1e3),V()})}}j=new WeakSet,_=function(n){const{value:d}=n.target.dataset;document.body.style.backgroundColor=d};const P={"1\u6708":[{title:"\u4E1C\u98CE\u89E3\u51BB",desc:"\u5F31\u67F3\u5343\u6761\u674F\u4E00\u679D\uFF0C\u534A\u542B\u6625\u96E8\u534A\u5782\u4E1D",tag:["\u4E00\u6708","\u5B5F\u6625","\u7ACB\u6625"],colors:[{name:"\u5929\u7F25",pinyin:"ti\u0101n pi\u0101o",hex:"#d5ebe1"},{name:"\u6CA7\u6D6A",pinyin:"c\u0101ng l\xE0ng",hex:"#b1d5c8"},{name:"\u82CD\u7B64",pinyin:"c\u0101ng l\xE1ng",hex:"#99bcac"},{name:"\u7F25\u78A7",pinyin:"pi\u0101o b\xEC",hex:"#80a492"}]},{title:"\u7ACB\u6625",desc:"\u6625\u96E8\u6D17\u6B8B\u96EA\uFF0C\u6625\u98CE\u8F7B\u5E03\u8863",tag:["\u4E00\u6708","\u5B5F\u6625","\u7ACB\u6625"],colors:[{name:"\u9EC4\u767D\u6E38",pinyin:"hu\xE0ng b\xE1i y\xF3u",hex:"#fff799"},{name:"\u677E\u82B1",pinyin:"s\u014Dng hu\u0101",hex:"#ffee6f"},{name:"\u7F03\u53F6",pinyin:"xi\u0101ng y\xE8",hex:"#ecd452"},{name:"\u82CD\u9EC4",pinyin:"c\u0101ng hu\xE0ng",hex:"#b6a014"}]},{title:"\u86F0\u866B\u59CB\u632F",desc:"\u8FCE\u6625\u6B63\u542F\u6D41\u971E\u5E2D\uFF0C\u6682\u5631\u66E6\u8F6E\u52FF\u907D\u659C",tag:["\u4E00\u6708","\u5B5F\u6625","\u7ACB\u6625"],colors:[{name:"\u6D41\u9EC4",pinyin:"li\xFA hu\xE1ng",hex:"#8b7042"},{name:"\u6817\u58F3",pinyin:"l\xEC k\xE9",hex:"#775039"},{name:"\u9F99\u6218",pinyin:"l\xF3ng zh\xE0n",hex:"#5f4321"},{name:"\u9752\u9A8A",pinyin:"q\u012Bng l\xED",hex:"#422517"}]},{title:"\u9C7C\u965F\u8D1F\u51B0",desc:"\u7ACB\u6625\u559C\u5F97\u6674\u7A97\u597D\uFF0C\u4E3A\u7231\u6885\u82B1\u5199\u4E00\u679D",tag:["\u4E00\u6708","\u5B5F\u6625","\u7ACB\u6625"],colors:[{name:"\u6D77\u5929\u971E",pinyin:"h\xE1i ti\u0101n xi\xE1",hex:"#f3a694"},{name:"\u7F19\u4E91",pinyin:"j\xECn y\xFAn",hex:"#ee7959"},{name:"\u7E81\u9EC4",pinyin:"x\u016Bn hu\xE1ng",hex:"#ba5140"},{name:"\u73CA\u745A\u8D6B",pinyin:"sh\u0101n h\xFA h\xE8",hex:"#c12c1f"}]},{title:"\u8349\u6728\u840C\u52A8",desc:"\u5929\u8857\u5C0F\u96E8\u6DA6\u5982\u9165\uFF0C\u8349\u8272\u9065\u770B\u8FD1\u5374\u65E0",tag:["\u4E00\u6708","\u5B5F\u6625","\u96E8\u6C34"],colors:[{name:"\u6B27\u78A7",pinyin:"\u014Du b\xEC",hex:"#C0D695"},{name:"\u6625\u8FB0",pinyin:"ch\u016Bn ch\xE9n",hex:"#a9be7b"},{name:"\u78A7\u5C71",pinyin:"b\xEC sh\u0101n",hex:"#779679"},{name:"\u6B27\u78A7",pinyin:"\u014Du b\xEC",hex:"#C0D695"}]},{title:"\u5019\u96C1\u5317",desc:"\u9E3F\u96C1\u58F0\u58F0\u4F20\u6D88\u606F\uFF0C\u8F7B\u8F6C\u98D8\u6D12\u6EE1\u5929\u6DAF",tag:["\u4E00\u6708","\u5B5F\u6625","\u96E8\u6C34"],colors:[{name:"\u9EC4\u6CB3\u7409\u7483",pinyin:"hu\xE0ng h\xE9 li\xFA l\xED",hex:"#e5a84b"},{name:"\u5E93\u91D1",pinyin:"k\xF9 j\u012Bn",hex:"#e18a3b"},{name:"\u7F0A\u97E8",pinyin:"w\u0113n f\xFA",hex:"#984f31"},{name:"\u7D2B\u74EF",pinyin:"z\xEF \u014Du",hex:"#7c461e"}]},{title:"\u736D\u796D\u9C7C",desc:"\u9CDE\u6B21\u5806\u96C6\u5DE6\u53F3, \u65F6\u8C13\u4E3A\u736D\u796D\u9C7C",tag:["\u4E00\u6708","\u5B5F\u6625","\u96E8\u6C34"],colors:[{name:"\u846D\u7070",pinyin:"ji\u0101 hu\xED",hex:"#beb1aa"},{name:"\u9EC4\u57C3",pinyin:"hu\xE0ng \u0101i",hex:"#b49273"},{name:"\u8001\u50E7\u8863",pinyin:"l\xE2o s\u0113ng y\u012B",hex:"#a45f44"},{name:"\u7384\u5929",pinyin:"xu\xE1n ti\u0101n",hex:"#6b5458"}]},{title:"\u96E8\u6C34",desc:"\u968F\u98CE\u6F5C\u5165\u591C\uFF0C\u6DA6\u7269\u7EC6\u65E0\u58F0",tag:["\u4E00\u6708","\u5B5F\u6625","\u96E8\u6C34"],colors:[{name:"\u76C8\u76C8",pinyin:"y\xEDng y\xEDng",hex:"#f9c3e3"},{name:"\u6C34\u7EA2",pinyin:"shu\xEF h\xF3ng",hex:"#ecb0c1"},{name:"\u82CF\u6885",pinyin:"s\u016B m\xE9i",hex:"#dd7694"},{name:"\u7D2B\u830E\u5C4F\u98CE",pinyin:"z\xEF j\u012Bng p\xEDng f\u0113ng",hex:"#a76283"}]}]};for(let s in P)P[s].forEach(d=>{});for(let s in N){const n=new J(s,N[s]);document.querySelector("#app").appendChild(n.domElement)}});export default Y();