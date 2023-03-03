(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function ru(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function iu(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Me(s)?zy(s):iu(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Me(t))return t;if(Te(t))return t}}const qy=/;(?![^(]*\))/g,Hy=/:([^]+)/,Ky=/\/\*.*?\*\//gs;function zy(t){const e={};return t.replace(Ky,"").split(qy).forEach(n=>{if(n){const s=n.split(Hy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ou(t){let e="";if(Me(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=ou(t[n]);s&&(e+=s+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Wy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gy=ru(Wy);function rd(t){return!!t||t===""}const Ei=t=>Me(t)?t:t==null?"":G(t)||Te(t)&&(t.toString===cd||!Y(t.toString))?JSON.stringify(t,id,2):String(t),id=(t,e)=>e&&e.__v_isRef?id(t,e.value):vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:od(e)?{[`Set(${e.size})`]:[...e.values()]}:Te(e)&&!G(e)&&!ud(e)?String(e):e,_e={},ys=[],At=()=>{},Qy=()=>!1,Jy=/^on[^a-z]/,xo=t=>Jy.test(t),au=t=>t.startsWith("onUpdate:"),st=Object.assign,cu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xy=Object.prototype.hasOwnProperty,ae=(t,e)=>Xy.call(t,e),G=Array.isArray,vs=t=>Po(t)==="[object Map]",od=t=>Po(t)==="[object Set]",Y=t=>typeof t=="function",Me=t=>typeof t=="string",uu=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",ad=t=>Te(t)&&Y(t.then)&&Y(t.catch),cd=Object.prototype.toString,Po=t=>cd.call(t),Yy=t=>Po(t).slice(8,-1),ud=t=>Po(t)==="[object Object]",lu=t=>Me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Mi=ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zy=/-(\w)/g,Is=Lo(t=>t.replace(Zy,(e,n)=>n?n.toUpperCase():"")),ev=/\B([A-Z])/g,js=Lo(t=>t.replace(ev,"-$1").toLowerCase()),ld=Lo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ra=Lo(t=>t?`on${ld(t)}`:""),Tr=(t,e)=>!Object.is(t,e),Ui=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},eo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ic=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $l;const tv=()=>$l||($l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ft;class hd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ft,!e&&ft&&(this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ft;try{return ft=this,e()}finally{ft=n}}}on(){ft=this}off(){ft=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function fd(t){return new hd(t)}function nv(t,e=ft){e&&e.active&&e.effects.push(t)}function dd(){return ft}function sv(t){ft&&ft.cleanups.push(t)}const hu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},pd=t=>(t.w&Rn)>0,md=t=>(t.n&Rn)>0,rv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Rn},iv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];pd(r)&&!md(r)?r.delete(t):e[n++]=r,r.w&=~Rn,r.n&=~Rn}e.length=n}},to=new WeakMap;let ir=0,Rn=1;const oc=30;let It;const zn=Symbol(""),ac=Symbol("");class fu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,nv(this,s)}run(){if(!this.active)return this.fn();let e=It,n=_n;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=It,It=this,_n=!0,Rn=1<<++ir,ir<=oc?rv(this):jl(this),this.fn()}finally{ir<=oc&&iv(this),Rn=1<<--ir,It=this.parent,_n=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){It===this?this.deferStop=!0:this.active&&(jl(this),this.onStop&&this.onStop(),this.active=!1)}}function jl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _n=!0;const gd=[];function qs(){gd.push(_n),_n=!1}function Hs(){const t=gd.pop();_n=t===void 0?!0:t}function ct(t,e,n){if(_n&&It){let s=to.get(t);s||to.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=hu()),yd(r)}}function yd(t,e){let n=!1;ir<=oc?md(t)||(t.n|=Rn,n=!pd(t)):n=!t.has(It),n&&(t.add(It),It.deps.push(t))}function Yt(t,e,n,s,r,i){const o=to.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Number(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?lu(n)&&a.push(o.get("length")):(a.push(o.get(zn)),vs(t)&&a.push(o.get(ac)));break;case"delete":G(t)||(a.push(o.get(zn)),vs(t)&&a.push(o.get(ac)));break;case"set":vs(t)&&a.push(o.get(zn));break}if(a.length===1)a[0]&&cc(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);cc(hu(c))}}function cc(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&ql(s);for(const s of n)s.computed||ql(s)}function ql(t,e){(t!==It||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function ov(t,e){var n;return(n=to.get(t))===null||n===void 0?void 0:n.get(e)}const av=ru("__proto__,__v_isRef,__isVue"),vd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(uu)),cv=du(),uv=du(!1,!0),lv=du(!0),Hl=hv();function hv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let i=0,o=this.length;i<o;i++)ct(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ue)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qs();const s=ue(this)[e].apply(this,n);return Hs(),s}}),t}function fv(t){const e=ue(this);return ct(e,"has",t),e.hasOwnProperty(t)}function du(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Rv:Td:e?bd:Ed).get(s))return s;const o=G(s);if(!t){if(o&&ae(Hl,r))return Reflect.get(Hl,r,i);if(r==="hasOwnProperty")return fv}const a=Reflect.get(s,r,i);return(uu(r)?vd.has(r):av(r))||(t||ct(s,"get",r),e)?a:Ce(a)?o&&lu(r)?a:a.value:Te(a)?t?Id(a):Ks(a):a}}const dv=wd(),pv=wd(!0);function wd(t=!1){return function(n,s,r,i){let o=n[s];if(Ss(o)&&Ce(o)&&!Ce(r))return!1;if(!t&&(!no(r)&&!Ss(r)&&(o=ue(o),r=ue(r)),!G(n)&&Ce(o)&&!Ce(r)))return o.value=r,!0;const a=G(n)&&lu(s)?Number(s)<n.length:ae(n,s),c=Reflect.set(n,s,r,i);return n===ue(i)&&(a?Tr(r,o)&&Yt(n,"set",s,r):Yt(n,"add",s,r)),c}}function mv(t,e){const n=ae(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Yt(t,"delete",e,void 0),s}function gv(t,e){const n=Reflect.has(t,e);return(!uu(e)||!vd.has(e))&&ct(t,"has",e),n}function yv(t){return ct(t,"iterate",G(t)?"length":zn),Reflect.ownKeys(t)}const _d={get:cv,set:dv,deleteProperty:mv,has:gv,ownKeys:yv},vv={get:lv,set(t,e){return!0},deleteProperty(t,e){return!0}},wv=st({},_d,{get:uv,set:pv}),pu=t=>t,Mo=t=>Reflect.getPrototypeOf(t);function bi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ue(t),i=ue(e);n||(e!==i&&ct(r,"get",e),ct(r,"get",i));const{has:o}=Mo(r),a=s?pu:n?yu:Ir;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ti(t,e=!1){const n=this.__v_raw,s=ue(n),r=ue(t);return e||(t!==r&&ct(s,"has",t),ct(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ii(t,e=!1){return t=t.__v_raw,!e&&ct(ue(t),"iterate",zn),Reflect.get(t,"size",t)}function Kl(t){t=ue(t);const e=ue(this);return Mo(e).has.call(e,t)||(e.add(t),Yt(e,"add",t,t)),this}function zl(t,e){e=ue(e);const n=ue(this),{has:s,get:r}=Mo(n);let i=s.call(n,t);i||(t=ue(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Tr(e,o)&&Yt(n,"set",t,e):Yt(n,"add",t,e),this}function Wl(t){const e=ue(this),{has:n,get:s}=Mo(e);let r=n.call(e,t);r||(t=ue(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Yt(e,"delete",t,void 0),i}function Gl(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&Yt(t,"clear",void 0,void 0),n}function Si(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ue(o),c=e?pu:t?yu:Ir;return!t&&ct(a,"iterate",zn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function Ci(t,e,n){return function(...s){const r=this.__v_raw,i=ue(r),o=vs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?pu:e?yu:Ir;return!e&&ct(i,"iterate",c?ac:zn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function un(t){return function(...e){return t==="delete"?!1:this}}function _v(){const t={get(i){return bi(this,i)},get size(){return Ii(this)},has:Ti,add:Kl,set:zl,delete:Wl,clear:Gl,forEach:Si(!1,!1)},e={get(i){return bi(this,i,!1,!0)},get size(){return Ii(this)},has:Ti,add:Kl,set:zl,delete:Wl,clear:Gl,forEach:Si(!1,!0)},n={get(i){return bi(this,i,!0)},get size(){return Ii(this,!0)},has(i){return Ti.call(this,i,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:Si(!0,!1)},s={get(i){return bi(this,i,!0,!0)},get size(){return Ii(this,!0)},has(i){return Ti.call(this,i,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:Si(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ci(i,!1,!1),n[i]=Ci(i,!0,!1),e[i]=Ci(i,!1,!0),s[i]=Ci(i,!0,!0)}),[t,n,e,s]}const[Ev,bv,Tv,Iv]=_v();function mu(t,e){const n=e?t?Iv:Tv:t?bv:Ev;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ae(n,r)&&r in s?n:s,r,i)}const Sv={get:mu(!1,!1)},Cv={get:mu(!1,!0)},Av={get:mu(!0,!1)},Ed=new WeakMap,bd=new WeakMap,Td=new WeakMap,Rv=new WeakMap;function kv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ov(t){return t.__v_skip||!Object.isExtensible(t)?0:kv(Yy(t))}function Ks(t){return Ss(t)?t:gu(t,!1,_d,Sv,Ed)}function Nv(t){return gu(t,!1,wv,Cv,bd)}function Id(t){return gu(t,!0,vv,Av,Td)}function gu(t,e,n,s,r){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Ov(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function En(t){return Ss(t)?En(t.__v_raw):!!(t&&t.__v_isReactive)}function Ss(t){return!!(t&&t.__v_isReadonly)}function no(t){return!!(t&&t.__v_isShallow)}function Sd(t){return En(t)||Ss(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function Cs(t){return eo(t,"__v_skip",!0),t}const Ir=t=>Te(t)?Ks(t):t,yu=t=>Te(t)?Id(t):t;function Cd(t){_n&&It&&(t=ue(t),yd(t.dep||(t.dep=hu())))}function Ad(t,e){t=ue(t);const n=t.dep;n&&cc(n)}function Ce(t){return!!(t&&t.__v_isRef===!0)}function wt(t){return Rd(t,!1)}function Dv(t){return Rd(t,!0)}function Rd(t,e){return Ce(t)?t:new xv(t,e)}class xv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Ir(e)}get value(){return Cd(this),this._value}set value(e){const n=this.__v_isShallow||no(e)||Ss(e);e=n?e:ue(e),Tr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ir(e),Ad(this))}}function Ft(t){return Ce(t)?t.value:t}const Pv={get:(t,e,n)=>Ft(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ce(r)&&!Ce(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function kd(t){return En(t)?t:new Proxy(t,Pv)}function Lv(t){const e=G(t)?new Array(t.length):{};for(const n in t)e[n]=Uv(t,n);return e}class Mv{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ov(ue(this._object),this._key)}}function Uv(t,e,n){const s=t[e];return Ce(s)?s:new Mv(t,e,n)}var Od;class Fv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Od]=!1,this._dirty=!0,this.effect=new fu(e,()=>{this._dirty||(this._dirty=!0,Ad(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ue(this);return Cd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Od="__v_isReadonly";function Bv(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=At):(s=t.get,r=t.set),new Fv(s,r,i||!r,n)}function bn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Uo(i,e,n)}return r}function Rt(t,e,n,s){if(Y(t)){const i=bn(t,e,n,s);return i&&ad(i)&&i.catch(o=>{Uo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Rt(t[i],e,n,s));return r}function Uo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){bn(c,null,10,[t,o,a]);return}}Vv(t,n,r,s)}function Vv(t,e,n,s=!0){console.error(t)}let Sr=!1,uc=!1;const Qe=[];let Mt=0;const ws=[];let zt=null,Vn=0;const Nd=Promise.resolve();let vu=null;function wu(t){const e=vu||Nd;return t?e.then(this?t.bind(this):t):e}function $v(t){let e=Mt+1,n=Qe.length;for(;e<n;){const s=e+n>>>1;Cr(Qe[s])<t?e=s+1:n=s}return e}function _u(t){(!Qe.length||!Qe.includes(t,Sr&&t.allowRecurse?Mt+1:Mt))&&(t.id==null?Qe.push(t):Qe.splice($v(t.id),0,t),Dd())}function Dd(){!Sr&&!uc&&(uc=!0,vu=Nd.then(Pd))}function jv(t){const e=Qe.indexOf(t);e>Mt&&Qe.splice(e,1)}function qv(t){G(t)?ws.push(...t):(!zt||!zt.includes(t,t.allowRecurse?Vn+1:Vn))&&ws.push(t),Dd()}function Ql(t,e=Sr?Mt+1:0){for(;e<Qe.length;e++){const n=Qe[e];n&&n.pre&&(Qe.splice(e,1),e--,n())}}function xd(t){if(ws.length){const e=[...new Set(ws)];if(ws.length=0,zt){zt.push(...e);return}for(zt=e,zt.sort((n,s)=>Cr(n)-Cr(s)),Vn=0;Vn<zt.length;Vn++)zt[Vn]();zt=null,Vn=0}}const Cr=t=>t.id==null?1/0:t.id,Hv=(t,e)=>{const n=Cr(t)-Cr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Pd(t){uc=!1,Sr=!0,Qe.sort(Hv);const e=At;try{for(Mt=0;Mt<Qe.length;Mt++){const n=Qe[Mt];n&&n.active!==!1&&bn(n,null,14)}}finally{Mt=0,Qe.length=0,xd(),Sr=!1,vu=null,(Qe.length||ws.length)&&Pd()}}function Kv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||_e;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[l]||_e;f&&(r=n.map(m=>Me(m)?m.trim():m)),h&&(r=n.map(ic))}let a,c=s[a=Ra(e)]||s[a=Ra(Is(e))];!c&&i&&(c=s[a=Ra(js(e))]),c&&Rt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Rt(u,t,6,r)}}function Ld(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=u=>{const l=Ld(u,e,!0);l&&(a=!0,st(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Te(t)&&s.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):st(o,i),Te(t)&&s.set(t,o),o)}function Fo(t,e){return!t||!xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,js(e))||ae(t,e))}let yt=null,Bo=null;function so(t){const e=yt;return yt=t,Bo=t&&t.type.__scopeId||null,e}function Eu(t){Bo=t}function bu(){Bo=null}function lc(t,e=yt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&sh(-1);const i=so(e);let o;try{o=t(...r)}finally{so(i),s._d&&sh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ka(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:m,ctx:g,inheritAttrs:y}=t;let R,C;const D=so(t);try{if(n.shapeFlag&4){const Q=r||s;R=Lt(l.call(Q,Q,h,i,m,f,g)),C=c}else{const Q=e;R=Lt(Q.length>1?Q(i,{attrs:c,slots:a,emit:u}):Q(i,null)),C=e.props?c:zv(c)}}catch(Q){dr.length=0,Uo(Q,t,1),R=He(Xn)}let L=R;if(C&&y!==!1){const Q=Object.keys(C),{shapeFlag:se}=L;Q.length&&se&7&&(o&&Q.some(au)&&(C=Wv(C,o)),L=As(L,C))}return n.dirs&&(L=As(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),R=L,so(D),R}const zv=t=>{let e;for(const n in t)(n==="class"||n==="style"||xo(n))&&((e||(e={}))[n]=t[n]);return e},Wv=(t,e)=>{const n={};for(const s in t)(!au(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Gv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Jl(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==s[f]&&!Fo(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Jl(s,o,u):!0:!!o;return!1}function Jl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Fo(n,i))return!0}return!1}function Qv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Jv=t=>t.__isSuspense;function Xv(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):qv(t)}function Fi(t,e){if(Ne){let n=Ne.provides;const s=Ne.parent&&Ne.parent.provides;s===n&&(n=Ne.provides=Object.create(s)),n[t]=e}}function kt(t,e,n=!1){const s=Ne||yt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s.proxy):e}}const Ai={};function hr(t,e,n){return Md(t,e,n)}function Md(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=_e){const a=dd()===(Ne==null?void 0:Ne.scope)?Ne:null;let c,u=!1,l=!1;if(Ce(t)?(c=()=>t.value,u=no(t)):En(t)?(c=()=>t,s=!0):G(t)?(l=!0,u=t.some(L=>En(L)||no(L)),c=()=>t.map(L=>{if(Ce(L))return L.value;if(En(L))return jn(L);if(Y(L))return bn(L,a,2)})):Y(t)?e?c=()=>bn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Rt(t,a,3,[f])}:c=At,e&&s){const L=c;c=()=>jn(L())}let h,f=L=>{h=C.onStop=()=>{bn(L,a,4)}},m;if(Rr)if(f=At,e?n&&Rt(e,a,3,[c(),l?[]:void 0,f]):c(),r==="sync"){const L=zw();m=L.__watcherHandles||(L.__watcherHandles=[])}else return At;let g=l?new Array(t.length).fill(Ai):Ai;const y=()=>{if(C.active)if(e){const L=C.run();(s||u||(l?L.some((Q,se)=>Tr(Q,g[se])):Tr(L,g)))&&(h&&h(),Rt(e,a,3,[L,g===Ai?void 0:l&&g[0]===Ai?[]:g,f]),g=L)}else C.run()};y.allowRecurse=!!e;let R;r==="sync"?R=y:r==="post"?R=()=>ot(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),R=()=>_u(y));const C=new fu(c,R);e?n?y():g=C.run():r==="post"?ot(C.run.bind(C),a&&a.suspense):C.run();const D=()=>{C.stop(),a&&a.scope&&cu(a.scope.effects,C)};return m&&m.push(D),D}function Yv(t,e,n){const s=this.proxy,r=Me(t)?t.includes(".")?Ud(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Ne;ks(this);const a=Md(r,i.bind(s),n);return o?ks(o):Wn(),a}function Ud(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function jn(t,e){if(!Te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ce(t))jn(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)jn(t[n],e);else if(od(t)||vs(t))t.forEach(n=>{jn(n,e)});else if(ud(t))for(const n in t)jn(t[n],e);return t}function Fd(t){return Y(t)?{setup:t,name:t.name}:t}const Bi=t=>!!t.type.__asyncLoader,Bd=t=>t.type.__isKeepAlive;function Zv(t,e){Vd(t,"a",e)}function ew(t,e){Vd(t,"da",e)}function Vd(t,e,n=Ne){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Vo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Bd(r.parent.vnode)&&tw(s,e,n,r),r=r.parent}}function tw(t,e,n,s){const r=Vo(e,t,s,!0);$d(()=>{cu(s[e],r)},n)}function Vo(t,e,n=Ne,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qs(),ks(n);const a=Rt(e,n,t,o);return Wn(),Hs(),a});return s?r.unshift(i):r.push(i),i}}const rn=t=>(e,n=Ne)=>(!Rr||t==="sp")&&Vo(t,(...s)=>e(...s),n),nw=rn("bm"),sw=rn("m"),rw=rn("bu"),iw=rn("u"),ow=rn("bum"),$d=rn("um"),aw=rn("sp"),cw=rn("rtg"),uw=rn("rtc");function lw(t,e=Ne){Vo("ec",t,e)}function hw(t,e){const n=yt;if(n===null)return t;const s=qo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=_e]=e[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&jn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Mn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(qs(),Rt(c,n,8,[t.el,a,t,e]),Hs())}}const fw=Symbol();function dw(t,e,n,s){let r;const i=n&&n[s];if(G(t)||Me(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Te(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const hc=t=>t?ep(t)?qo(t)||t.proxy:hc(t.parent):null,fr=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hc(t.parent),$root:t=>hc(t.root),$emit:t=>t.emit,$options:t=>Tu(t),$forceUpdate:t=>t.f||(t.f=()=>_u(t.update)),$nextTick:t=>t.n||(t.n=wu.bind(t.proxy)),$watch:t=>Yv.bind(t)}),Oa=(t,e)=>t!==_e&&!t.__isScriptSetup&&ae(t,e),pw={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Oa(s,e))return o[e]=1,s[e];if(r!==_e&&ae(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&ae(u,e))return o[e]=3,i[e];if(n!==_e&&ae(n,e))return o[e]=4,n[e];fc&&(o[e]=0)}}const l=fr[e];let h,f;if(l)return e==="$attrs"&&ct(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==_e&&ae(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ae(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Oa(r,e)?(r[e]=n,!0):s!==_e&&ae(s,e)?(s[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==_e&&ae(t,o)||Oa(e,o)||(a=i[0])&&ae(a,o)||ae(s,o)||ae(fr,o)||ae(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let fc=!0;function mw(t){const e=Tu(t),n=t.proxy,s=t.ctx;fc=!1,e.beforeCreate&&Xl(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:y,deactivated:R,beforeDestroy:C,beforeUnmount:D,destroyed:L,unmounted:Q,render:se,renderTracked:we,renderTriggered:Z,errorCaptured:re,serverPrefetch:De,expose:Be,inheritAttrs:rt,components:mt,directives:cn,filters:lt}=e;if(u&&gw(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ge in o){const pe=o[ge];Y(pe)&&(s[ge]=pe.bind(n))}if(r){const ge=r.call(n,n);Te(ge)&&(t.data=Ks(ge))}if(fc=!0,i)for(const ge in i){const pe=i[ge],_t=Y(pe)?pe.bind(n,n):Y(pe.get)?pe.get.bind(n,n):At,Ln=!Y(pe)&&Y(pe.set)?pe.set.bind(n):At,Et=dt({get:_t,set:Ln});Object.defineProperty(s,ge,{enumerable:!0,configurable:!0,get:()=>Et.value,set:it=>Et.value=it})}if(a)for(const ge in a)jd(a[ge],s,n,ge);if(c){const ge=Y(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(pe=>{Fi(pe,ge[pe])})}l&&Xl(l,t,"c");function Ae(ge,pe){G(pe)?pe.forEach(_t=>ge(_t.bind(n))):pe&&ge(pe.bind(n))}if(Ae(nw,h),Ae(sw,f),Ae(rw,m),Ae(iw,g),Ae(Zv,y),Ae(ew,R),Ae(lw,re),Ae(uw,we),Ae(cw,Z),Ae(ow,D),Ae($d,Q),Ae(aw,De),G(Be))if(Be.length){const ge=t.exposed||(t.exposed={});Be.forEach(pe=>{Object.defineProperty(ge,pe,{get:()=>n[pe],set:_t=>n[pe]=_t})})}else t.exposed||(t.exposed={});se&&t.render===At&&(t.render=se),rt!=null&&(t.inheritAttrs=rt),mt&&(t.components=mt),cn&&(t.directives=cn)}function gw(t,e,n=At,s=!1){G(t)&&(t=dc(t));for(const r in t){const i=t[r];let o;Te(i)?"default"in i?o=kt(i.from||r,i.default,!0):o=kt(i.from||r):o=kt(i),Ce(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Xl(t,e,n){Rt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function jd(t,e,n,s){const r=s.includes(".")?Ud(n,s):()=>n[s];if(Me(t)){const i=e[t];Y(i)&&hr(r,i)}else if(Y(t))hr(r,t.bind(n));else if(Te(t))if(G(t))t.forEach(i=>jd(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&hr(r,i,t)}}function Tu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>ro(c,u,o,!0)),ro(c,e,o)),Te(e)&&i.set(e,c),c}function ro(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ro(t,i,n,!0),r&&r.forEach(o=>ro(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=yw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yw={data:Yl,props:Fn,emits:Fn,methods:Fn,computed:Fn,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:Fn,directives:Fn,watch:ww,provide:Yl,inject:vw};function Yl(t,e){return e?t?function(){return st(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function vw(t,e){return Fn(dc(t),dc(e))}function dc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Fn(t,e){return t?st(st(Object.create(null),t),e):e}function ww(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const s in e)n[s]=tt(t[s],e[s]);return n}function _w(t,e,n,s=!1){const r={},i={};eo(i,jo,1),t.propsDefaults=Object.create(null),qd(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Nv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Ew(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ue(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(Fo(t.emitsOptions,f))continue;const m=e[f];if(c)if(ae(i,f))m!==i[f]&&(i[f]=m,u=!0);else{const g=Is(f);r[g]=pc(c,a,g,m,t,!1)}else m!==i[f]&&(i[f]=m,u=!0)}}}else{qd(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!ae(e,h)&&((l=js(h))===h||!ae(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=pc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ae(e,h))&&(delete i[h],u=!0)}u&&Yt(t,"set","$attrs")}function qd(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Mi(c))continue;const u=e[c];let l;r&&ae(r,l=Is(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Fo(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ue(n),u=a||_e;for(let l=0;l<i.length;l++){const h=i[l];n[h]=pc(r,c,h,u[h],t,!ae(u,h))}}return o}function pc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(ks(r),s=u[n]=c.call(null,e),Wn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===js(n))&&(s=!0))}return s}function Hd(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const l=h=>{c=!0;const[f,m]=Hd(h,e,!0);st(o,f),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return Te(t)&&s.set(t,ys),ys;if(G(i))for(let l=0;l<i.length;l++){const h=Is(i[l]);Zl(h)&&(o[h]=_e)}else if(i)for(const l in i){const h=Is(l);if(Zl(h)){const f=i[l],m=o[h]=G(f)||Y(f)?{type:f}:Object.assign({},f);if(m){const g=nh(Boolean,m.type),y=nh(String,m.type);m[0]=g>-1,m[1]=y<0||g<y,(g>-1||ae(m,"default"))&&a.push(h)}}}const u=[o,a];return Te(t)&&s.set(t,u),u}function Zl(t){return t[0]!=="$"}function eh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function th(t,e){return eh(t)===eh(e)}function nh(t,e){return G(e)?e.findIndex(n=>th(n,t)):Y(e)&&th(e,t)?0:-1}const Kd=t=>t[0]==="_"||t==="$stable",Iu=t=>G(t)?t.map(Lt):[Lt(t)],bw=(t,e,n)=>{if(e._n)return e;const s=lc((...r)=>Iu(e(...r)),n);return s._c=!1,s},zd=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Kd(r))continue;const i=t[r];if(Y(i))e[r]=bw(r,i,s);else if(i!=null){const o=Iu(i);e[r]=()=>o}}},Wd=(t,e)=>{const n=Iu(e);t.slots.default=()=>n},Tw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),eo(e,"_",n)):zd(e,t.slots={})}else t.slots={},e&&Wd(t,e);eo(t.slots,jo,1)},Iw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=_e;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(st(r,e),!n&&a===1&&delete r._):(i=!e.$stable,zd(e,r)),o=e}else e&&(Wd(t,e),o={default:1});if(i)for(const a in r)!Kd(a)&&!(a in o)&&delete r[a]};function Gd(){return{app:null,config:{isNativeTag:Qy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sw=0;function Cw(t,e){return function(s,r=null){Y(s)||(s=Object.assign({},s)),r!=null&&!Te(r)&&(r=null);const i=Gd(),o=new Set;let a=!1;const c=i.app={_uid:Sw++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Ww,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(c,...l)):Y(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=He(s,r);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,qo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function mc(t,e,n,s,r=!1){if(G(t)){t.forEach((f,m)=>mc(f,e&&(G(e)?e[m]:e),n,s,r));return}if(Bi(s)&&!r)return;const i=s.shapeFlag&4?qo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===_e?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Me(u)?(l[u]=null,ae(h,u)&&(h[u]=null)):Ce(u)&&(u.value=null)),Y(c))bn(c,a,12,[o,l]);else{const f=Me(c),m=Ce(c);if(f||m){const g=()=>{if(t.f){const y=f?ae(h,c)?h[c]:l[c]:c.value;r?G(y)&&cu(y,i):G(y)?y.includes(i)||y.push(i):f?(l[c]=[i],ae(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,ae(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(l[t.k]=o))};o?(g.id=-1,ot(g,n)):g()}}}const ot=Xv;function Aw(t){return Rw(t)}function Rw(t,e){const n=tv();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:m=At,insertStaticContent:g}=t,y=(d,p,v,_=null,b=null,k=null,x=!1,A=null,O=!!p.dynamicChildren)=>{if(d===p)return;d&&!tr(d,p)&&(_=N(d),it(d,b,k,!0),d=null),p.patchFlag===-2&&(O=!1,p.dynamicChildren=null);const{type:T,ref:V,shapeFlag:M}=p;switch(T){case $o:R(d,p,v,_);break;case Xn:C(d,p,v,_);break;case Vi:d==null&&D(p,v,_,x);break;case Tt:mt(d,p,v,_,b,k,x,A,O);break;default:M&1?se(d,p,v,_,b,k,x,A,O):M&6?cn(d,p,v,_,b,k,x,A,O):(M&64||M&128)&&T.process(d,p,v,_,b,k,x,A,O,oe)}V!=null&&b&&mc(V,d&&d.ref,k,p||d,!p)},R=(d,p,v,_)=>{if(d==null)s(p.el=a(p.children),v,_);else{const b=p.el=d.el;p.children!==d.children&&u(b,p.children)}},C=(d,p,v,_)=>{d==null?s(p.el=c(p.children||""),v,_):p.el=d.el},D=(d,p,v,_)=>{[d.el,d.anchor]=g(d.children,p,v,_,d.el,d.anchor)},L=({el:d,anchor:p},v,_)=>{let b;for(;d&&d!==p;)b=f(d),s(d,v,_),d=b;s(p,v,_)},Q=({el:d,anchor:p})=>{let v;for(;d&&d!==p;)v=f(d),r(d),d=v;r(p)},se=(d,p,v,_,b,k,x,A,O)=>{x=x||p.type==="svg",d==null?we(p,v,_,b,k,x,A,O):De(d,p,b,k,x,A,O)},we=(d,p,v,_,b,k,x,A)=>{let O,T;const{type:V,props:M,shapeFlag:$,transition:W,dirs:te}=d;if(O=d.el=o(d.type,k,M&&M.is,M),$&8?l(O,d.children):$&16&&re(d.children,O,null,_,b,k&&V!=="foreignObject",x,A),te&&Mn(d,null,_,"created"),Z(O,d,d.scopeId,x,_),M){for(const me in M)me!=="value"&&!Mi(me)&&i(O,me,null,M[me],k,d.children,_,b,P);"value"in M&&i(O,"value",null,M.value),(T=M.onVnodeBeforeMount)&&Pt(T,_,d)}te&&Mn(d,null,_,"beforeMount");const ye=(!b||b&&!b.pendingBranch)&&W&&!W.persisted;ye&&W.beforeEnter(O),s(O,p,v),((T=M&&M.onVnodeMounted)||ye||te)&&ot(()=>{T&&Pt(T,_,d),ye&&W.enter(O),te&&Mn(d,null,_,"mounted")},b)},Z=(d,p,v,_,b)=>{if(v&&m(d,v),_)for(let k=0;k<_.length;k++)m(d,_[k]);if(b){let k=b.subTree;if(p===k){const x=b.vnode;Z(d,x,x.scopeId,x.slotScopeIds,b.parent)}}},re=(d,p,v,_,b,k,x,A,O=0)=>{for(let T=O;T<d.length;T++){const V=d[T]=A?dn(d[T]):Lt(d[T]);y(null,V,p,v,_,b,k,x,A)}},De=(d,p,v,_,b,k,x)=>{const A=p.el=d.el;let{patchFlag:O,dynamicChildren:T,dirs:V}=p;O|=d.patchFlag&16;const M=d.props||_e,$=p.props||_e;let W;v&&Un(v,!1),(W=$.onVnodeBeforeUpdate)&&Pt(W,v,p,d),V&&Mn(p,d,v,"beforeUpdate"),v&&Un(v,!0);const te=b&&p.type!=="foreignObject";if(T?Be(d.dynamicChildren,T,A,v,_,te,k):x||pe(d,p,A,null,v,_,te,k,!1),O>0){if(O&16)rt(A,p,M,$,v,_,b);else if(O&2&&M.class!==$.class&&i(A,"class",null,$.class,b),O&4&&i(A,"style",M.style,$.style,b),O&8){const ye=p.dynamicProps;for(let me=0;me<ye.length;me++){const Re=ye[me],bt=M[Re],cs=$[Re];(cs!==bt||Re==="value")&&i(A,Re,bt,cs,b,d.children,v,_,P)}}O&1&&d.children!==p.children&&l(A,p.children)}else!x&&T==null&&rt(A,p,M,$,v,_,b);((W=$.onVnodeUpdated)||V)&&ot(()=>{W&&Pt(W,v,p,d),V&&Mn(p,d,v,"updated")},_)},Be=(d,p,v,_,b,k,x)=>{for(let A=0;A<p.length;A++){const O=d[A],T=p[A],V=O.el&&(O.type===Tt||!tr(O,T)||O.shapeFlag&70)?h(O.el):v;y(O,T,V,null,_,b,k,x,!0)}},rt=(d,p,v,_,b,k,x)=>{if(v!==_){if(v!==_e)for(const A in v)!Mi(A)&&!(A in _)&&i(d,A,v[A],null,x,p.children,b,k,P);for(const A in _){if(Mi(A))continue;const O=_[A],T=v[A];O!==T&&A!=="value"&&i(d,A,T,O,x,p.children,b,k,P)}"value"in _&&i(d,"value",v.value,_.value)}},mt=(d,p,v,_,b,k,x,A,O)=>{const T=p.el=d?d.el:a(""),V=p.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:$,slotScopeIds:W}=p;W&&(A=A?A.concat(W):W),d==null?(s(T,v,_),s(V,v,_),re(p.children,v,V,b,k,x,A,O)):M>0&&M&64&&$&&d.dynamicChildren?(Be(d.dynamicChildren,$,v,b,k,x,A),(p.key!=null||b&&p===b.subTree)&&Qd(d,p,!0)):pe(d,p,v,V,b,k,x,A,O)},cn=(d,p,v,_,b,k,x,A,O)=>{p.slotScopeIds=A,d==null?p.shapeFlag&512?b.ctx.activate(p,v,_,x,O):lt(p,v,_,b,k,x,O):Ve(d,p,O)},lt=(d,p,v,_,b,k,x)=>{const A=d.component=Fw(d,_,b);if(Bd(d)&&(A.ctx.renderer=oe),Vw(A),A.asyncDep){if(b&&b.registerDep(A,Ae),!d.el){const O=A.subTree=He(Xn);C(null,O,p,v)}return}Ae(A,d,p,v,b,k,x)},Ve=(d,p,v)=>{const _=p.component=d.component;if(Gv(d,p,v))if(_.asyncDep&&!_.asyncResolved){ge(_,p,v);return}else _.next=p,jv(_.update),_.update();else p.el=d.el,_.vnode=p},Ae=(d,p,v,_,b,k,x)=>{const A=()=>{if(d.isMounted){let{next:V,bu:M,u:$,parent:W,vnode:te}=d,ye=V,me;Un(d,!1),V?(V.el=te.el,ge(d,V,x)):V=te,M&&Ui(M),(me=V.props&&V.props.onVnodeBeforeUpdate)&&Pt(me,W,V,te),Un(d,!0);const Re=ka(d),bt=d.subTree;d.subTree=Re,y(bt,Re,h(bt.el),N(bt),d,b,k),V.el=Re.el,ye===null&&Qv(d,Re.el),$&&ot($,b),(me=V.props&&V.props.onVnodeUpdated)&&ot(()=>Pt(me,W,V,te),b)}else{let V;const{el:M,props:$}=p,{bm:W,m:te,parent:ye}=d,me=Bi(p);if(Un(d,!1),W&&Ui(W),!me&&(V=$&&$.onVnodeBeforeMount)&&Pt(V,ye,p),Un(d,!0),M&&ee){const Re=()=>{d.subTree=ka(d),ee(M,d.subTree,d,b,null)};me?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Re()):Re()}else{const Re=d.subTree=ka(d);y(null,Re,v,_,d,b,k),p.el=Re.el}if(te&&ot(te,b),!me&&(V=$&&$.onVnodeMounted)){const Re=p;ot(()=>Pt(V,ye,Re),b)}(p.shapeFlag&256||ye&&Bi(ye.vnode)&&ye.vnode.shapeFlag&256)&&d.a&&ot(d.a,b),d.isMounted=!0,p=v=_=null}},O=d.effect=new fu(A,()=>_u(T),d.scope),T=d.update=()=>O.run();T.id=d.uid,Un(d,!0),T()},ge=(d,p,v)=>{p.component=d;const _=d.vnode.props;d.vnode=p,d.next=null,Ew(d,p.props,_,v),Iw(d,p.children,v),qs(),Ql(),Hs()},pe=(d,p,v,_,b,k,x,A,O=!1)=>{const T=d&&d.children,V=d?d.shapeFlag:0,M=p.children,{patchFlag:$,shapeFlag:W}=p;if($>0){if($&128){Ln(T,M,v,_,b,k,x,A,O);return}else if($&256){_t(T,M,v,_,b,k,x,A,O);return}}W&8?(V&16&&P(T,b,k),M!==T&&l(v,M)):V&16?W&16?Ln(T,M,v,_,b,k,x,A,O):P(T,b,k,!0):(V&8&&l(v,""),W&16&&re(M,v,_,b,k,x,A,O))},_t=(d,p,v,_,b,k,x,A,O)=>{d=d||ys,p=p||ys;const T=d.length,V=p.length,M=Math.min(T,V);let $;for($=0;$<M;$++){const W=p[$]=O?dn(p[$]):Lt(p[$]);y(d[$],W,v,null,b,k,x,A,O)}T>V?P(d,b,k,!0,!1,M):re(p,v,_,b,k,x,A,O,M)},Ln=(d,p,v,_,b,k,x,A,O)=>{let T=0;const V=p.length;let M=d.length-1,$=V-1;for(;T<=M&&T<=$;){const W=d[T],te=p[T]=O?dn(p[T]):Lt(p[T]);if(tr(W,te))y(W,te,v,null,b,k,x,A,O);else break;T++}for(;T<=M&&T<=$;){const W=d[M],te=p[$]=O?dn(p[$]):Lt(p[$]);if(tr(W,te))y(W,te,v,null,b,k,x,A,O);else break;M--,$--}if(T>M){if(T<=$){const W=$+1,te=W<V?p[W].el:_;for(;T<=$;)y(null,p[T]=O?dn(p[T]):Lt(p[T]),v,te,b,k,x,A,O),T++}}else if(T>$)for(;T<=M;)it(d[T],b,k,!0),T++;else{const W=T,te=T,ye=new Map;for(T=te;T<=$;T++){const ht=p[T]=O?dn(p[T]):Lt(p[T]);ht.key!=null&&ye.set(ht.key,T)}let me,Re=0;const bt=$-te+1;let cs=!1,Fl=0;const er=new Array(bt);for(T=0;T<bt;T++)er[T]=0;for(T=W;T<=M;T++){const ht=d[T];if(Re>=bt){it(ht,b,k,!0);continue}let xt;if(ht.key!=null)xt=ye.get(ht.key);else for(me=te;me<=$;me++)if(er[me-te]===0&&tr(ht,p[me])){xt=me;break}xt===void 0?it(ht,b,k,!0):(er[xt-te]=T+1,xt>=Fl?Fl=xt:cs=!0,y(ht,p[xt],v,null,b,k,x,A,O),Re++)}const Bl=cs?kw(er):ys;for(me=Bl.length-1,T=bt-1;T>=0;T--){const ht=te+T,xt=p[ht],Vl=ht+1<V?p[ht+1].el:_;er[T]===0?y(null,xt,v,Vl,b,k,x,A,O):cs&&(me<0||T!==Bl[me]?Et(xt,v,Vl,2):me--)}}},Et=(d,p,v,_,b=null)=>{const{el:k,type:x,transition:A,children:O,shapeFlag:T}=d;if(T&6){Et(d.component.subTree,p,v,_);return}if(T&128){d.suspense.move(p,v,_);return}if(T&64){x.move(d,p,v,oe);return}if(x===Tt){s(k,p,v);for(let M=0;M<O.length;M++)Et(O[M],p,v,_);s(d.anchor,p,v);return}if(x===Vi){L(d,p,v);return}if(_!==2&&T&1&&A)if(_===0)A.beforeEnter(k),s(k,p,v),ot(()=>A.enter(k),b);else{const{leave:M,delayLeave:$,afterLeave:W}=A,te=()=>s(k,p,v),ye=()=>{M(k,()=>{te(),W&&W()})};$?$(k,te,ye):ye()}else s(k,p,v)},it=(d,p,v,_=!1,b=!1)=>{const{type:k,props:x,ref:A,children:O,dynamicChildren:T,shapeFlag:V,patchFlag:M,dirs:$}=d;if(A!=null&&mc(A,null,v,d,!0),V&256){p.ctx.deactivate(d);return}const W=V&1&&$,te=!Bi(d);let ye;if(te&&(ye=x&&x.onVnodeBeforeUnmount)&&Pt(ye,p,d),V&6)E(d.component,v,_);else{if(V&128){d.suspense.unmount(v,_);return}W&&Mn(d,null,p,"beforeUnmount"),V&64?d.type.remove(d,p,v,b,oe,_):T&&(k!==Tt||M>0&&M&64)?P(T,p,v,!1,!0):(k===Tt&&M&384||!b&&V&16)&&P(O,p,v),_&&as(d)}(te&&(ye=x&&x.onVnodeUnmounted)||W)&&ot(()=>{ye&&Pt(ye,p,d),W&&Mn(d,null,p,"unmounted")},v)},as=d=>{const{type:p,el:v,anchor:_,transition:b}=d;if(p===Tt){_i(v,_);return}if(p===Vi){Q(d);return}const k=()=>{r(v),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:x,delayLeave:A}=b,O=()=>x(v,k);A?A(d.el,k,O):O()}else k()},_i=(d,p)=>{let v;for(;d!==p;)v=f(d),r(d),d=v;r(p)},E=(d,p,v)=>{const{bum:_,scope:b,update:k,subTree:x,um:A}=d;_&&Ui(_),b.stop(),k&&(k.active=!1,it(x,d,p,v)),A&&ot(A,p),ot(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},P=(d,p,v,_=!1,b=!1,k=0)=>{for(let x=k;x<d.length;x++)it(d[x],p,v,_,b)},N=d=>d.shapeFlag&6?N(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),B=(d,p,v)=>{d==null?p._vnode&&it(p._vnode,null,null,!0):y(p._vnode||null,d,p,null,null,null,v),Ql(),xd(),p._vnode=d},oe={p:y,um:it,m:Et,r:as,mt:lt,mc:re,pc:pe,pbc:Be,n:N,o:t};let Ie,ee;return e&&([Ie,ee]=e(oe)),{render:B,hydrate:Ie,createApp:Cw(B,Ie)}}function Un({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Qd(t,e,n=!1){const s=t.children,r=e.children;if(G(s)&&G(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=dn(r[i]),a.el=o.el),n||Qd(o,a)),a.type===$o&&(a.el=o.el)}}function kw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Ow=t=>t.__isTeleport,Tt=Symbol(void 0),$o=Symbol(void 0),Xn=Symbol(void 0),Vi=Symbol(void 0),dr=[];let St=null;function at(t=!1){dr.push(St=t?null:[])}function Nw(){dr.pop(),St=dr[dr.length-1]||null}let Ar=1;function sh(t){Ar+=t}function Jd(t){return t.dynamicChildren=Ar>0?St||ys:null,Nw(),Ar>0&&St&&St.push(t),t}function vt(t,e,n,s,r,i){return Jd(fe(t,e,n,s,r,i,!0))}function Xd(t,e,n,s,r){return Jd(He(t,e,n,s,r,!0))}function gc(t){return t?t.__v_isVNode===!0:!1}function tr(t,e){return t.type===e.type&&t.key===e.key}const jo="__vInternal",Yd=({key:t})=>t??null,$i=({ref:t,ref_key:e,ref_for:n})=>t!=null?Me(t)||Ce(t)||Y(t)?{i:yt,r:t,k:e,f:!!n}:t:null;function fe(t,e=null,n=null,s=0,r=null,i=t===Tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yd(e),ref:e&&$i(e),scopeId:Bo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:yt};return a?(Su(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Me(n)?8:16),Ar>0&&!o&&St&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&St.push(c),c}const He=Dw;function Dw(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===fw)&&(t=Xn),gc(t)){const a=As(t,e,!0);return n&&Su(a,n),Ar>0&&!i&&St&&(a.shapeFlag&6?St[St.indexOf(t)]=a:St.push(a)),a.patchFlag|=-2,a}if(Hw(t)&&(t=t.__vccOpts),e){e=xw(e);let{class:a,style:c}=e;a&&!Me(a)&&(e.class=ou(a)),Te(c)&&(Sd(c)&&!G(c)&&(c=st({},c)),e.style=iu(c))}const o=Me(t)?1:Jv(t)?128:Ow(t)?64:Te(t)?4:Y(t)?2:0;return fe(t,e,n,s,r,o,i,!0)}function xw(t){return t?Sd(t)||jo in t?st({},t):t:null}function As(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Lw(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Yd(a),ref:e&&e.ref?n&&r?G(r)?r.concat($i(e)):[r,$i(e)]:$i(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Tt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&As(t.ssContent),ssFallback:t.ssFallback&&As(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Rs(t=" ",e=0){return He($o,null,t,e)}function Pw(t,e){const n=He(Vi,null,t);return n.staticCount=e,n}function Zd(t="",e=!1){return e?(at(),Xd(Xn,null,t)):He(Xn,null,t)}function Lt(t){return t==null||typeof t=="boolean"?He(Xn):G(t)?He(Tt,null,t.slice()):typeof t=="object"?dn(t):He($o,null,String(t))}function dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:As(t)}function Su(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Su(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(jo in e)?e._ctx=yt:r===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),s&64?(n=16,e=[Rs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ou([e.class,s.class]));else if(r==="style")e.style=iu([e.style,s.style]);else if(xo(r)){const i=e[r],o=s[r];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Pt(t,e,n,s=null){Rt(t,e,7,[n,s])}const Mw=Gd();let Uw=0;function Fw(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Mw,i={uid:Uw++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new hd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hd(s,r),emitsOptions:Ld(s,r),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:s.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Kv.bind(null,i),t.ce&&t.ce(i),i}let Ne=null;const Bw=()=>Ne||yt,ks=t=>{Ne=t,t.scope.on()},Wn=()=>{Ne&&Ne.scope.off(),Ne=null};function ep(t){return t.vnode.shapeFlag&4}let Rr=!1;function Vw(t,e=!1){Rr=e;const{props:n,children:s}=t.vnode,r=ep(t);_w(t,n,r,e),Tw(t,s);const i=r?$w(t,e):void 0;return Rr=!1,i}function $w(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Cs(new Proxy(t.ctx,pw));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?qw(t):null;ks(t),qs();const i=bn(s,t,0,[t.props,r]);if(Hs(),Wn(),ad(i)){if(i.then(Wn,Wn),e)return i.then(o=>{rh(t,o,e)}).catch(o=>{Uo(o,t,0)});t.asyncDep=i}else rh(t,i,e)}else tp(t,e)}function rh(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=kd(e)),tp(t,n)}let ih;function tp(t,e,n){const s=t.type;if(!t.render){if(!e&&ih&&!s.render){const r=s.template||Tu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=st(st({isCustomElement:i,delimiters:a},o),c);s.render=ih(r,u)}}t.render=s.render||At}ks(t),qs(),mw(t),Hs(),Wn()}function jw(t){return new Proxy(t.attrs,{get(e,n){return ct(t,"get","$attrs"),e[n]}})}function qw(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=jw(t))},slots:t.slots,emit:t.emit,expose:e}}function qo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(kd(Cs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fr)return fr[n](t)},has(e,n){return n in e||n in fr}}))}function Hw(t){return Y(t)&&"__vccOpts"in t}const dt=(t,e)=>Bv(t,e,Rr);function np(t,e,n){const s=arguments.length;return s===2?Te(e)&&!G(e)?gc(e)?He(t,null,[e]):He(t,e):He(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&gc(n)&&(n=[n]),He(t,e,n))}const Kw=Symbol(""),zw=()=>kt(Kw),Ww="3.2.47",Gw="http://www.w3.org/2000/svg",$n=typeof document<"u"?document:null,oh=$n&&$n.createElement("template"),Qw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?$n.createElementNS(Gw,t):$n.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>$n.createTextNode(t),createComment:t=>$n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{oh.innerHTML=s?`<svg>${t}</svg>`:t;const a=oh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Jw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Xw(t,e,n){const s=t.style,r=Me(n);if(n&&!r){if(e&&!Me(e))for(const i in e)n[i]==null&&yc(s,i,"");for(const i in n)yc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const ah=/\s*!important$/;function yc(t,e,n){if(G(n))n.forEach(s=>yc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Yw(t,e);ah.test(n)?t.setProperty(js(s),n.replace(ah,""),"important"):t[s]=n}}const ch=["Webkit","Moz","ms"],Na={};function Yw(t,e){const n=Na[e];if(n)return n;let s=Is(e);if(s!=="filter"&&s in t)return Na[e]=s;s=ld(s);for(let r=0;r<ch.length;r++){const i=ch[r]+s;if(i in t)return Na[e]=i}return e}const uh="http://www.w3.org/1999/xlink";function Zw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(uh,e.slice(6,e.length)):t.setAttributeNS(uh,e,n);else{const i=Gy(e);n==null||i&&!rd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function e_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=rd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function hs(t,e,n,s){t.addEventListener(e,n,s)}function t_(t,e,n,s){t.removeEventListener(e,n,s)}function n_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=s_(e);if(s){const u=i[e]=o_(s,r);hs(t,a,u,c)}else o&&(t_(t,a,o,c),i[e]=void 0)}}const lh=/(?:Once|Passive|Capture)$/;function s_(t){let e;if(lh.test(t)){e={};let s;for(;s=t.match(lh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):js(t.slice(2)),e]}let Da=0;const r_=Promise.resolve(),i_=()=>Da||(r_.then(()=>Da=0),Da=Date.now());function o_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Rt(a_(s,n.value),e,5,[s])};return n.value=t,n.attached=i_(),n}function a_(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const hh=/^on[a-z]/,c_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Jw(t,s,r):e==="style"?Xw(t,n,s):xo(e)?au(e)||n_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):u_(t,e,s,r))?e_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Zw(t,e,s,r))};function u_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&hh.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||hh.test(e)&&Me(n)?!1:e in t}const fh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Ui(e,n):e};function l_(t){t.target.composing=!0}function dh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const h_={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=fh(r);const i=s||r.props&&r.props.type==="number";hs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ic(a)),t._assign(a)}),n&&hs(t,"change",()=>{t.value=t.value.trim()}),e||(hs(t,"compositionstart",l_),hs(t,"compositionend",dh),hs(t,"change",dh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=fh(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&ic(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},f_=st({patchProp:c_},Qw);let ph;function d_(){return ph||(ph=Aw(f_))}const xa=(...t)=>{const e=d_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=p_(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function p_(t){return Me(t)?document.querySelector(t):t}var m_=!1;/*!
  * pinia v2.0.32
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let sp;const Ho=t=>sp=t,rp=Symbol();function vc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var pr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(pr||(pr={}));function g_(){const t=fd(!0),e=t.run(()=>wt({}));let n=[],s=[];const r=Cs({install(i){Ho(r),r._a=i,i.provide(rp,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!m_?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const ip=()=>{};function mh(t,e,n,s=ip){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&dd()&&sv(r),r}function us(t,...e){t.slice().forEach(n=>{n(...e)})}function wc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];vc(r)&&vc(s)&&t.hasOwnProperty(n)&&!Ce(s)&&!En(s)?t[n]=wc(r,s):t[n]=s}return t}const y_=Symbol();function v_(t){return!vc(t)||!t.hasOwnProperty(y_)}const{assign:pn}=Object;function w_(t){return!!(Ce(t)&&t.effect)}function __(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=r?r():{});const l=Lv(n.state.value[t]);return pn(l,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Cs(dt(()=>{Ho(n);const m=n._s.get(t);return o[f].call(m,m)})),h),{}))}return c=op(t,u,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(f=>{pn(f,h)})},c}function op(t,e,n={},s,r,i){let o;const a=pn({actions:{}},n),c={deep:!0};let u,l,h=Cs([]),f=Cs([]),m;const g=s.state.value[t];!i&&!g&&(s.state.value[t]={}),wt({});let y;function R(Z){let re;u=l=!1,typeof Z=="function"?(Z(s.state.value[t]),re={type:pr.patchFunction,storeId:t,events:m}):(wc(s.state.value[t],Z),re={type:pr.patchObject,payload:Z,storeId:t,events:m});const De=y=Symbol();wu().then(()=>{y===De&&(u=!0)}),l=!0,us(h,re,s.state.value[t])}const C=ip;function D(){o.stop(),h=[],f=[],s._s.delete(t)}function L(Z,re){return function(){Ho(s);const De=Array.from(arguments),Be=[],rt=[];function mt(Ve){Be.push(Ve)}function cn(Ve){rt.push(Ve)}us(f,{args:De,name:Z,store:se,after:mt,onError:cn});let lt;try{lt=re.apply(this&&this.$id===t?this:se,De)}catch(Ve){throw us(rt,Ve),Ve}return lt instanceof Promise?lt.then(Ve=>(us(Be,Ve),Ve)).catch(Ve=>(us(rt,Ve),Promise.reject(Ve))):(us(Be,lt),lt)}}const Q={_p:s,$id:t,$onAction:mh.bind(null,f),$patch:R,$reset:C,$subscribe(Z,re={}){const De=mh(h,Z,re.detached,()=>Be()),Be=o.run(()=>hr(()=>s.state.value[t],rt=>{(re.flush==="sync"?l:u)&&Z({storeId:t,type:pr.direct,events:m},rt)},pn({},c,re)));return De},$dispose:D},se=Ks(Q);s._s.set(t,se);const we=s._e.run(()=>(o=fd(),o.run(()=>e())));for(const Z in we){const re=we[Z];if(Ce(re)&&!w_(re)||En(re))i||(g&&v_(re)&&(Ce(re)?re.value=g[Z]:wc(re,g[Z])),s.state.value[t][Z]=re);else if(typeof re=="function"){const De=L(Z,re);we[Z]=De,a.actions[Z]=re}}return pn(se,we),pn(ue(se),we),Object.defineProperty(se,"$state",{get:()=>s.state.value[t],set:Z=>{R(re=>{pn(re,Z)})}}),s._p.forEach(Z=>{pn(se,o.run(()=>Z({store:se,app:s._a,pinia:s,options:a})))}),g&&i&&n.hydrate&&n.hydrate(se.$state,g),u=!0,l=!0,se}function E_(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const u=Bw();return a=a||u&&kt(rp,null),a&&Ho(a),a=sp,a._s.has(s)||(i?op(s,e,r,a):__(s,r,a)),a._s.get(s)}return o.$id=s,o}function ap(t,e){return function(){return t.apply(e,arguments)}}const{toString:cp}=Object.prototype,{getPrototypeOf:Cu}=Object,Au=(t=>e=>{const n=cp.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),on=t=>(t=t.toLowerCase(),e=>Au(e)===t),Ko=t=>e=>typeof e===t,{isArray:zs}=Array,kr=Ko("undefined");function b_(t){return t!==null&&!kr(t)&&t.constructor!==null&&!kr(t.constructor)&&kn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const up=on("ArrayBuffer");function T_(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&up(t.buffer),e}const I_=Ko("string"),kn=Ko("function"),lp=Ko("number"),Ru=t=>t!==null&&typeof t=="object",S_=t=>t===!0||t===!1,ji=t=>{if(Au(t)!=="object")return!1;const e=Cu(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},C_=on("Date"),A_=on("File"),R_=on("Blob"),k_=on("FileList"),O_=t=>Ru(t)&&kn(t.pipe),N_=t=>{const e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||cp.call(t)===e||kn(t.toString)&&t.toString()===e)},D_=on("URLSearchParams"),x_=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function zr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let s,r;if(typeof t!="object"&&(t=[t]),zs(t))for(s=0,r=t.length;s<r;s++)e.call(null,t[s],s,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(s=0;s<o;s++)a=i[s],e.call(null,t[a],a,t)}}function hp(t,e){e=e.toLowerCase();const n=Object.keys(t);let s=n.length,r;for(;s-- >0;)if(r=n[s],e===r.toLowerCase())return r;return null}const fp=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),dp=t=>!kr(t)&&t!==fp;function _c(){const{caseless:t}=dp(this)&&this||{},e={},n=(s,r)=>{const i=t&&hp(e,r)||r;ji(e[i])&&ji(s)?e[i]=_c(e[i],s):ji(s)?e[i]=_c({},s):zs(s)?e[i]=s.slice():e[i]=s};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&zr(arguments[s],n);return e}const P_=(t,e,n,{allOwnKeys:s}={})=>(zr(e,(r,i)=>{n&&kn(r)?t[i]=ap(r,n):t[i]=r},{allOwnKeys:s}),t),L_=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),M_=(t,e,n,s)=>{t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},U_=(t,e,n,s)=>{let r,i,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),i=r.length;i-- >0;)o=r[i],(!s||s(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Cu(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},F_=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const s=t.indexOf(e,n);return s!==-1&&s===n},B_=t=>{if(!t)return null;if(zs(t))return t;let e=t.length;if(!lp(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},V_=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Cu(Uint8Array)),$_=(t,e)=>{const s=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=s.next())&&!r.done;){const i=r.value;e.call(t,i[0],i[1])}},j_=(t,e)=>{let n;const s=[];for(;(n=t.exec(e))!==null;)s.push(n);return s},q_=on("HTMLFormElement"),H_=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),gh=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),K_=on("RegExp"),pp=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),s={};zr(n,(r,i)=>{e(r,i,t)!==!1&&(s[i]=r)}),Object.defineProperties(t,s)},z_=t=>{pp(t,(e,n)=>{if(kn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=t[n];if(kn(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},W_=(t,e)=>{const n={},s=r=>{r.forEach(i=>{n[i]=!0})};return zs(t)?s(t):s(String(t).split(e)),n},G_=()=>{},Q_=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Pa="abcdefghijklmnopqrstuvwxyz",yh="0123456789",mp={DIGIT:yh,ALPHA:Pa,ALPHA_DIGIT:Pa+Pa.toUpperCase()+yh},J_=(t=16,e=mp.ALPHA_DIGIT)=>{let n="";const{length:s}=e;for(;t--;)n+=e[Math.random()*s|0];return n};function X_(t){return!!(t&&kn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Y_=t=>{const e=new Array(10),n=(s,r)=>{if(Ru(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[r]=s;const i=zs(s)?[]:{};return zr(s,(o,a)=>{const c=n(o,r+1);!kr(c)&&(i[a]=c)}),e[r]=void 0,i}}return s};return n(t,0)},w={isArray:zs,isArrayBuffer:up,isBuffer:b_,isFormData:N_,isArrayBufferView:T_,isString:I_,isNumber:lp,isBoolean:S_,isObject:Ru,isPlainObject:ji,isUndefined:kr,isDate:C_,isFile:A_,isBlob:R_,isRegExp:K_,isFunction:kn,isStream:O_,isURLSearchParams:D_,isTypedArray:V_,isFileList:k_,forEach:zr,merge:_c,extend:P_,trim:x_,stripBOM:L_,inherits:M_,toFlatObject:U_,kindOf:Au,kindOfTest:on,endsWith:F_,toArray:B_,forEachEntry:$_,matchAll:j_,isHTMLForm:q_,hasOwnProperty:gh,hasOwnProp:gh,reduceDescriptors:pp,freezeMethods:z_,toObjectSet:W_,toCamelCase:H_,noop:G_,toFiniteNumber:Q_,findKey:hp,global:fp,isContextDefined:dp,ALPHABET:mp,generateString:J_,isSpecCompliantForm:X_,toJSONObject:Y_};function ce(t,e,n,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r)}w.inherits(ce,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:w.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const gp=ce.prototype,yp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{yp[t]={value:t}});Object.defineProperties(ce,yp);Object.defineProperty(gp,"isAxiosError",{value:!0});ce.from=(t,e,n,s,r,i)=>{const o=Object.create(gp);return w.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),ce.call(o,t.message,e,n,s,r),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Z_=null;function Ec(t){return w.isPlainObject(t)||w.isArray(t)}function vp(t){return w.endsWith(t,"[]")?t.slice(0,-2):t}function vh(t,e,n){return t?t.concat(e).map(function(r,i){return r=vp(r),!n&&i?"["+r+"]":r}).join(n?".":""):e}function eE(t){return w.isArray(t)&&!t.some(Ec)}const tE=w.toFlatObject(w,{},null,function(e){return/^is[A-Z]/.test(e)});function zo(t,e,n){if(!w.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=w.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,R){return!w.isUndefined(R[y])});const s=n.metaTokens,r=n.visitor||l,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&w.isSpecCompliantForm(e);if(!w.isFunction(r))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(w.isDate(g))return g.toISOString();if(!c&&w.isBlob(g))throw new ce("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(g)||w.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function l(g,y,R){let C=g;if(g&&!R&&typeof g=="object"){if(w.endsWith(y,"{}"))y=s?y:y.slice(0,-2),g=JSON.stringify(g);else if(w.isArray(g)&&eE(g)||(w.isFileList(g)||w.endsWith(y,"[]"))&&(C=w.toArray(g)))return y=vp(y),C.forEach(function(L,Q){!(w.isUndefined(L)||L===null)&&e.append(o===!0?vh([y],Q,i):o===null?y:y+"[]",u(L))}),!1}return Ec(g)?!0:(e.append(vh(R,y,i),u(g)),!1)}const h=[],f=Object.assign(tE,{defaultVisitor:l,convertValue:u,isVisitable:Ec});function m(g,y){if(!w.isUndefined(g)){if(h.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));h.push(g),w.forEach(g,function(C,D){(!(w.isUndefined(C)||C===null)&&r.call(e,C,w.isString(D)?D.trim():D,y,f))===!0&&m(C,y?y.concat(D):[D])}),h.pop()}}if(!w.isObject(t))throw new TypeError("data must be an object");return m(t),e}function wh(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function ku(t,e){this._pairs=[],t&&zo(t,this,e)}const wp=ku.prototype;wp.append=function(e,n){this._pairs.push([e,n])};wp.toString=function(e){const n=e?function(s){return e.call(this,s,wh)}:wh;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function nE(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function _p(t,e,n){if(!e)return t;const s=n&&n.encode||nE,r=n&&n.serialize;let i;if(r?i=r(e,n):i=w.isURLSearchParams(e)?e.toString():new ku(e,n).toString(s),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class sE{constructor(){this.handlers=[]}use(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){w.forEach(this.handlers,function(s){s!==null&&e(s)})}}const _h=sE,Ep={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},rE=typeof URLSearchParams<"u"?URLSearchParams:ku,iE=typeof FormData<"u"?FormData:null,oE=typeof Blob<"u"?Blob:null,aE=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),cE=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Bt={isBrowser:!0,classes:{URLSearchParams:rE,FormData:iE,Blob:oE},isStandardBrowserEnv:aE,isStandardBrowserWebWorkerEnv:cE,protocols:["http","https","file","blob","url","data"]};function uE(t,e){return zo(t,new Bt.classes.URLSearchParams,Object.assign({visitor:function(n,s,r,i){return Bt.isNode&&w.isBuffer(n)?(this.append(s,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function lE(t){return w.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function hE(t){const e={},n=Object.keys(t);let s;const r=n.length;let i;for(s=0;s<r;s++)i=n[s],e[i]=t[i];return e}function bp(t){function e(n,s,r,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&w.isArray(r)?r.length:o,c?(w.hasOwnProp(r,o)?r[o]=[r[o],s]:r[o]=s,!a):((!r[o]||!w.isObject(r[o]))&&(r[o]=[]),e(n,s,r[o],i)&&w.isArray(r[o])&&(r[o]=hE(r[o])),!a)}if(w.isFormData(t)&&w.isFunction(t.entries)){const n={};return w.forEachEntry(t,(s,r)=>{e(lE(s),r,n,0)}),n}return null}const fE={"Content-Type":void 0};function dE(t,e,n){if(w.isString(t))try{return(e||JSON.parse)(t),w.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(t)}const Wo={transitional:Ep,adapter:["xhr","http"],transformRequest:[function(e,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,i=w.isObject(e);if(i&&w.isHTMLForm(e)&&(e=new FormData(e)),w.isFormData(e))return r&&r?JSON.stringify(bp(e)):e;if(w.isArrayBuffer(e)||w.isBuffer(e)||w.isStream(e)||w.isFile(e)||w.isBlob(e))return e;if(w.isArrayBufferView(e))return e.buffer;if(w.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(s.indexOf("application/x-www-form-urlencoded")>-1)return uE(e,this.formSerializer).toString();if((a=w.isFileList(e))||s.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return zo(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||r?(n.setContentType("application/json",!1),dE(e)):e}],transformResponse:[function(e){const n=this.transitional||Wo.transitional,s=n&&n.forcedJSONParsing,r=this.responseType==="json";if(e&&w.isString(e)&&(s&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ce.from(a,ce.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Bt.classes.FormData,Blob:Bt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};w.forEach(["delete","get","head"],function(e){Wo.headers[e]={}});w.forEach(["post","put","patch"],function(e){Wo.headers[e]=w.merge(fE)});const Ou=Wo,pE=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),mE=t=>{const e={};let n,s,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),s=o.substring(r+1).trim(),!(!n||e[n]&&pE[n])&&(n==="set-cookie"?e[n]?e[n].push(s):e[n]=[s]:e[n]=e[n]?e[n]+", "+s:s)}),e},Eh=Symbol("internals");function nr(t){return t&&String(t).trim().toLowerCase()}function qi(t){return t===!1||t==null?t:w.isArray(t)?t.map(qi):String(t)}function gE(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(t);)e[s[1]]=s[2];return e}function yE(t){return/^[-_a-zA-Z]+$/.test(t.trim())}function La(t,e,n,s,r){if(w.isFunction(s))return s.call(this,e,n);if(r&&(e=n),!!w.isString(e)){if(w.isString(s))return e.indexOf(s)!==-1;if(w.isRegExp(s))return s.test(e)}}function vE(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,s)=>n.toUpperCase()+s)}function wE(t,e){const n=w.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+n,{value:function(r,i,o){return this[s].call(this,e,r,i,o)},configurable:!0})})}class Go{constructor(e){e&&this.set(e)}set(e,n,s){const r=this;function i(a,c,u){const l=nr(c);if(!l)throw new Error("header name must be a non-empty string");const h=w.findKey(r,l);(!h||r[h]===void 0||u===!0||u===void 0&&r[h]!==!1)&&(r[h||c]=qi(a))}const o=(a,c)=>w.forEach(a,(u,l)=>i(u,l,c));return w.isPlainObject(e)||e instanceof this.constructor?o(e,n):w.isString(e)&&(e=e.trim())&&!yE(e)?o(mE(e),n):e!=null&&i(n,e,s),this}get(e,n){if(e=nr(e),e){const s=w.findKey(this,e);if(s){const r=this[s];if(!n)return r;if(n===!0)return gE(r);if(w.isFunction(n))return n.call(this,r,s);if(w.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=nr(e),e){const s=w.findKey(this,e);return!!(s&&this[s]!==void 0&&(!n||La(this,this[s],s,n)))}return!1}delete(e,n){const s=this;let r=!1;function i(o){if(o=nr(o),o){const a=w.findKey(s,o);a&&(!n||La(s,s[a],a,n))&&(delete s[a],r=!0)}}return w.isArray(e)?e.forEach(i):i(e),r}clear(e){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const i=n[s];(!e||La(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){const n=this,s={};return w.forEach(this,(r,i)=>{const o=w.findKey(s,i);if(o){n[o]=qi(r),delete n[i];return}const a=e?vE(i):String(i).trim();a!==i&&delete n[i],n[a]=qi(r),s[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return w.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=e&&w.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const s=new this(e);return n.forEach(r=>s.set(r)),s}static accessor(e){const s=(this[Eh]=this[Eh]={accessors:{}}).accessors,r=this.prototype;function i(o){const a=nr(o);s[a]||(wE(r,o),s[a]=!0)}return w.isArray(e)?e.forEach(i):i(e),this}}Go.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);w.freezeMethods(Go.prototype);w.freezeMethods(Go);const Jt=Go;function Ma(t,e){const n=this||Ou,s=e||n,r=Jt.from(s.headers);let i=s.data;return w.forEach(t,function(a){i=a.call(n,i,r.normalize(),e?e.status:void 0)}),r.normalize(),i}function Tp(t){return!!(t&&t.__CANCEL__)}function Wr(t,e,n){ce.call(this,t??"canceled",ce.ERR_CANCELED,e,n),this.name="CanceledError"}w.inherits(Wr,ce,{__CANCEL__:!0});function _E(t,e,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):e(new ce("Request failed with status code "+n.status,[ce.ERR_BAD_REQUEST,ce.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const EE=Bt.isStandardBrowserEnv?function(){return{write:function(n,s,r,i,o,a){const c=[];c.push(n+"="+encodeURIComponent(s)),w.isNumber(r)&&c.push("expires="+new Date(r).toGMTString()),w.isString(i)&&c.push("path="+i),w.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const s=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function bE(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function TE(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Ip(t,e){return t&&!bE(e)?TE(t,e):e}const IE=Bt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let s;function r(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=r(window.location.href),function(o){const a=w.isString(o)?r(o):o;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}();function SE(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function CE(t,e){t=t||10;const n=new Array(t),s=new Array(t);let r=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),l=s[i];o||(o=u),n[r]=c,s[r]=u;let h=i,f=0;for(;h!==r;)f+=n[h++],h=h%t;if(r=(r+1)%t,r===i&&(i=(i+1)%t),u-o<e)return;const m=l&&u-l;return m?Math.round(f*1e3/m):void 0}}function bh(t,e){let n=0;const s=CE(50,250);return r=>{const i=r.loaded,o=r.lengthComputable?r.total:void 0,a=i-n,c=s(a),u=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-i)/c:void 0,event:r};l[e?"download":"upload"]=!0,t(l)}}const AE=typeof XMLHttpRequest<"u",RE=AE&&function(t){return new Promise(function(n,s){let r=t.data;const i=Jt.from(t.headers).normalize(),o=t.responseType;let a;function c(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}w.isFormData(r)&&(Bt.isStandardBrowserEnv||Bt.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let u=new XMLHttpRequest;if(t.auth){const m=t.auth.username||"",g=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(m+":"+g))}const l=Ip(t.baseURL,t.url);u.open(t.method.toUpperCase(),_p(l,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function h(){if(!u)return;const m=Jt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),y={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:m,config:t,request:u};_E(function(C){n(C),c()},function(C){s(C),c()},y),u=null}if("onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(h)},u.onabort=function(){u&&(s(new ce("Request aborted",ce.ECONNABORTED,t,u)),u=null)},u.onerror=function(){s(new ce("Network Error",ce.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let g=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const y=t.transitional||Ep;t.timeoutErrorMessage&&(g=t.timeoutErrorMessage),s(new ce(g,y.clarifyTimeoutError?ce.ETIMEDOUT:ce.ECONNABORTED,t,u)),u=null},Bt.isStandardBrowserEnv){const m=(t.withCredentials||IE(l))&&t.xsrfCookieName&&EE.read(t.xsrfCookieName);m&&i.set(t.xsrfHeaderName,m)}r===void 0&&i.setContentType(null),"setRequestHeader"in u&&w.forEach(i.toJSON(),function(g,y){u.setRequestHeader(y,g)}),w.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",bh(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",bh(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=m=>{u&&(s(!m||m.type?new Wr(null,t,u):m),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const f=SE(l);if(f&&Bt.protocols.indexOf(f)===-1){s(new ce("Unsupported protocol "+f+":",ce.ERR_BAD_REQUEST,t));return}u.send(r||null)})},Hi={http:Z_,xhr:RE};w.forEach(Hi,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const kE={getAdapter:t=>{t=w.isArray(t)?t:[t];const{length:e}=t;let n,s;for(let r=0;r<e&&(n=t[r],!(s=w.isString(n)?Hi[n.toLowerCase()]:n));r++);if(!s)throw s===!1?new ce(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(w.hasOwnProp(Hi,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!w.isFunction(s))throw new TypeError("adapter is not a function");return s},adapters:Hi};function Ua(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Wr(null,t)}function Th(t){return Ua(t),t.headers=Jt.from(t.headers),t.data=Ma.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),kE.getAdapter(t.adapter||Ou.adapter)(t).then(function(s){return Ua(t),s.data=Ma.call(t,t.transformResponse,s),s.headers=Jt.from(s.headers),s},function(s){return Tp(s)||(Ua(t),s&&s.response&&(s.response.data=Ma.call(t,t.transformResponse,s.response),s.response.headers=Jt.from(s.response.headers))),Promise.reject(s)})}const Ih=t=>t instanceof Jt?t.toJSON():t;function Os(t,e){e=e||{};const n={};function s(u,l,h){return w.isPlainObject(u)&&w.isPlainObject(l)?w.merge.call({caseless:h},u,l):w.isPlainObject(l)?w.merge({},l):w.isArray(l)?l.slice():l}function r(u,l,h){if(w.isUndefined(l)){if(!w.isUndefined(u))return s(void 0,u,h)}else return s(u,l,h)}function i(u,l){if(!w.isUndefined(l))return s(void 0,l)}function o(u,l){if(w.isUndefined(l)){if(!w.isUndefined(u))return s(void 0,u)}else return s(void 0,l)}function a(u,l,h){if(h in e)return s(u,l);if(h in t)return s(void 0,u)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,l)=>r(Ih(u),Ih(l),!0)};return w.forEach(Object.keys(t).concat(Object.keys(e)),function(l){const h=c[l]||r,f=h(t[l],e[l],l);w.isUndefined(f)&&h!==a||(n[l]=f)}),n}const Sp="1.3.4",Nu={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Nu[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});const Sh={};Nu.transitional=function(e,n,s){function r(i,o){return"[Axios v"+Sp+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return(i,o,a)=>{if(e===!1)throw new ce(r(o," has been removed"+(n?" in "+n:"")),ce.ERR_DEPRECATED);return n&&!Sh[o]&&(Sh[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function OE(t,e,n){if(typeof t!="object")throw new ce("options must be an object",ce.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let r=s.length;for(;r-- >0;){const i=s[r],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new ce("option "+i+" must be "+c,ce.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ce("Unknown option "+i,ce.ERR_BAD_OPTION)}}const bc={assertOptions:OE,validators:Nu},ln=bc.validators;class io{constructor(e){this.defaults=e,this.interceptors={request:new _h,response:new _h}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Os(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:i}=n;s!==void 0&&bc.assertOptions(s,{silentJSONParsing:ln.transitional(ln.boolean),forcedJSONParsing:ln.transitional(ln.boolean),clarifyTimeoutError:ln.transitional(ln.boolean)},!1),r!==void 0&&bc.assertOptions(r,{encode:ln.function,serialize:ln.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&w.merge(i.common,i[n.method]),o&&w.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=Jt.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(c=c&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let l,h=0,f;if(!c){const g=[Th.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,u),f=g.length,l=Promise.resolve(n);h<f;)l=l.then(g[h++],g[h++]);return l}f=a.length;let m=n;for(h=0;h<f;){const g=a[h++],y=a[h++];try{m=g(m)}catch(R){y.call(this,R);break}}try{l=Th.call(this,m)}catch(g){return Promise.reject(g)}for(h=0,f=u.length;h<f;)l=l.then(u[h++],u[h++]);return l}getUri(e){e=Os(this.defaults,e);const n=Ip(e.baseURL,e.url);return _p(n,e.params,e.paramsSerializer)}}w.forEach(["delete","get","head","options"],function(e){io.prototype[e]=function(n,s){return this.request(Os(s||{},{method:e,url:n,data:(s||{}).data}))}});w.forEach(["post","put","patch"],function(e){function n(s){return function(i,o,a){return this.request(Os(a||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}io.prototype[e]=n(),io.prototype[e+"Form"]=n(!0)});const Ki=io;class Du{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const s=this;this.promise.then(r=>{if(!s._listeners)return;let i=s._listeners.length;for(;i-- >0;)s._listeners[i](r);s._listeners=null}),this.promise.then=r=>{let i;const o=new Promise(a=>{s.subscribe(a),i=a}).then(r);return o.cancel=function(){s.unsubscribe(i)},o},e(function(i,o,a){s.reason||(s.reason=new Wr(i,o,a),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Du(function(r){e=r}),cancel:e}}}const NE=Du;function DE(t){return function(n){return t.apply(null,n)}}function xE(t){return w.isObject(t)&&t.isAxiosError===!0}const Tc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Tc).forEach(([t,e])=>{Tc[e]=t});const PE=Tc;function Cp(t){const e=new Ki(t),n=ap(Ki.prototype.request,e);return w.extend(n,Ki.prototype,e,{allOwnKeys:!0}),w.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Cp(Os(t,r))},n}const Ue=Cp(Ou);Ue.Axios=Ki;Ue.CanceledError=Wr;Ue.CancelToken=NE;Ue.isCancel=Tp;Ue.VERSION=Sp;Ue.toFormData=zo;Ue.AxiosError=ce;Ue.Cancel=Ue.CanceledError;Ue.all=function(e){return Promise.all(e)};Ue.spread=DE;Ue.isAxiosError=xE;Ue.mergeConfig=Os;Ue.AxiosHeaders=Jt;Ue.formToJSON=t=>bp(w.isHTMLForm(t)?new FormData(t):t);Ue.HttpStatusCode=PE;Ue.default=Ue;const Ap=Ue;const Qo=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},xu=t=>(Eu("data-v-d8ed176d"),t=t(),bu(),t),LE={class:"mid-screen"},ME={class:"warn-card"},UE=xu(()=>fe("img",{src:"https://i.imgur.com/cvOVRRU.png",class:"lock-icon",alt:"lock"},null,-1)),FE=xu(()=>fe("div",{style:{"padding-top":"1em","padding-bottom":"0.8em"}},[fe("h3",{style:{color:"red"}},"มีบางอย่างผิดปกติ"),fe("p",null," เว็บไซต์นี้ได้รับการปกป้องโดยระบบป้องกันการคัดลอกและต้องใช้รหัสขออนุญาตที่ถูกต้องเพื่อเข้าถึงข้อมูล "),fe("p",null," โปรดอย่าทำซ้ำงานนี้โดยไม่ได้รับอนุญาต หากต้องการขอสิทธิ์เข้าถึงโปรดติดต่อผู้พัฒนาเว็บไซต์ "),fe("p",null,[Rs(" การปกป้องซอร์สโค้ดของมีความสำคัญเนื่องจากทุกอย่างมีการลงทุนทั้ง เวลา ทรัพยากร และความเชี่ยวชาญ "),fe("br"),Rs(" การเข้าถึงซอร์สโค้ดโดยไม่ได้รับอนุญาตอาจทำให้ความสมบูรณ์และคุณค่าของโค้ดลดลง ")])],-1)),BE={key:0},VE={key:1},$E=xu(()=>fe("small",{style:{"font-size":"8pt"}},"CopyKiller alpha 0.2",-1)),jE={__name:"Activation",setup(t){const e=wt(""),n=wt(!1);function s(){n.value=!0,Ap.get(`https://api.codename-t.com/checkKey?key=${e.value}&site=${window.location.hostname}&ac=redeem`).then(r=>{r.data.canRedeem?(alert("ได้รับสิทธ์เข้าถึงแล้ว"),window.location.reload()):(alert("เข้าถึงไม่ได้ โปรดตรวจสอบ Key"),n.value=!1)}).catch(()=>{alert("ติดต่อกับระบบตรวจสอบไม่ได้"),n.value=!1})}return(r,i)=>(at(),vt("div",LE,[fe("div",ME,[UE,FE,n.value?(at(),vt("div",VE,"กำลังตรวจสอบข้อมูล...")):(at(),vt("div",BE,[hw(fe("input",{"onUpdate:modelValue":i[0]||(i[0]=o=>e.value=o),type:"text",placeholder:"Activation Key..."},null,512),[[h_,e.value]]),fe("button",{onClick:s},"ตรวจสอบข้อมูล")])),$E])]))}},qE=Qo(jE,[["__scopeId","data-v-d8ed176d"]]);const HE={},KE={class:"mid-screen"},zE=Pw('<div class="warn-card" data-v-ba48eead><img src="https://sv1.picz.in.th/images/2023/02/13/LP7Sak.png" class="lock-icon" alt="lock" data-v-ba48eead><div style="padding-top:1em;padding-bottom:0.8em;" data-v-ba48eead><h3 style="color:red;" data-v-ba48eead>เกิดปัญหากับระบบตรวจสอบ</h3><p data-v-ba48eead> เว็บไซต์นี้ได้รับการปกป้องโดยระบบป้องกันการคัดลอกและต้องใช้รหัสขออนุญาตที่ถูกต้องเพื่อเข้าถึงข้อมูล </p><p data-v-ba48eead> ในการตรวจสอบความถูกต้องจำเป็นต้องใช้การติดต่อกับฐานข้อมูลในการตรวจสอบสิทธ์เพิ่อมอบการเข้าถึงได้ </p><p data-v-ba48eead> ซึ่งในตอนนี้ไม่สามารถติดต่อกับระบบได้ โปรดลองอีกครั้งภายใน 5 - 10 นาที </p></div><small style="font-size:8pt;" data-v-ba48eead>CopyKiller alpha 0.2</small></div>',1),WE=[zE];function GE(t,e){return at(),vt("div",KE,WE)}const QE=Qo(HE,[["render",GE],["__scopeId","data-v-ba48eead"]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const fs=typeof window<"u";function JE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const de=Object.assign;function Fa(t,e){const n={};for(const s in e){const r=e[s];n[s]=Nt(r)?r.map(t):t(r)}return n}const mr=()=>{},Nt=Array.isArray,XE=/\/$/,YE=t=>t.replace(XE,"");function Ba(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=n0(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function ZE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ch(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function e0(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ns(e.matched[s],n.matched[r])&&Rp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ns(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Rp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!t0(t[n],e[n]))return!1;return!0}function t0(t,e){return Nt(t)?Ah(t,e):Nt(e)?Ah(e,t):t===e}function Ah(t,e){return Nt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function n0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Or;(function(t){t.pop="pop",t.push="push"})(Or||(Or={}));var gr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(gr||(gr={}));function s0(t){if(!t)if(fs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),YE(t)}const r0=/^[^#]+#/;function i0(t,e){return t.replace(r0,"#")+e}function o0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Jo=()=>({left:window.pageXOffset,top:window.pageYOffset});function a0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=o0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Rh(t,e){return(history.state?history.state.position-e:-1)+t}const Ic=new Map;function c0(t,e){Ic.set(t,e)}function u0(t){const e=Ic.get(t);return Ic.delete(t),e}let l0=()=>location.protocol+"//"+location.host;function kp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Ch(c,"")}return Ch(n,t)+s+r}function h0(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const m=kp(t,location),g=n.value,y=e.value;let R=0;if(f){if(n.value=m,e.value=f,o&&o===g){o=null;return}R=y?f.position-y.position:0}else s(m);r.forEach(C=>{C(n.value,g,{delta:R,type:Or.pop,direction:R?R>0?gr.forward:gr.back:gr.unknown})})};function c(){o=n.value}function u(f){r.push(f);const m=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return i.push(m),m}function l(){const{history:f}=window;f.state&&f.replaceState(de({},f.state,{scroll:Jo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function kh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Jo():null}}function f0(t){const{history:e,location:n}=window,s={value:kp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:l0()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),r.value=u}catch(m){console.error(m),n[l?"replace":"assign"](f)}}function o(c,u){const l=de({},e.state,kh(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=de({},r.value,e.state,{forward:c,scroll:Jo()});i(l.current,l,!0);const h=de({},kh(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function d0(t){t=s0(t);const e=f0(t),n=h0(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=de({location:"",base:t,go:s,createHref:i0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function p0(t){return typeof t=="string"||t&&typeof t=="object"}function Op(t){return typeof t=="string"||typeof t=="symbol"}const hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Np=Symbol("");var Oh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Oh||(Oh={}));function Ds(t,e){return de(new Error,{type:t,[Np]:!0},e)}function Kt(t,e){return t instanceof Error&&Np in t&&(e==null||!!(t.type&e))}const Nh="[^/]+?",m0={sensitive:!1,strict:!1,start:!0,end:!0},g0=/[.+*?^${}()[\]/\\]/g;function y0(t,e){const n=de({},m0,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const f=u[h];let m=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(g0,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:y,optional:R,regexp:C}=f;i.push({name:g,repeatable:y,optional:R});const D=C||Nh;if(D!==Nh){m+=10;try{new RegExp(`(${D})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${g}" (${D}): `+Q.message)}}let L=y?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(L=R&&u.length<2?`(?:/${L})`:"/"+L),R&&(L+="?"),r+=L,m+=20,R&&(m+=-8),y&&(m+=-20),D===".*"&&(m+=-50)}l.push(m)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const m=l[f]||"",g=i[f-1];h[g.name]=m&&g.repeatable?m.split("/"):m}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const m of f)if(m.type===0)l+=m.value;else if(m.type===1){const{value:g,repeatable:y,optional:R}=m,C=g in u?u[g]:"";if(Nt(C)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const D=Nt(C)?C.join("/"):C;if(!D)if(R)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);l+=D}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function v0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function w0(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=v0(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Dh(s))return 1;if(Dh(r))return-1}return r.length-s.length}function Dh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _0={type:0,value:""},E0=/[a-zA-Z0-9_]/;function b0(t){if(!t)return[[]];if(t==="/")return[[_0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:E0.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function T0(t,e,n){const s=y0(b0(t.path),n),r=de(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function I0(t,e){const n=[],s=new Map;e=Lh({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,f){const m=!f,g=S0(l);g.aliasOf=f&&f.record;const y=Lh(e,l),R=[g];if("alias"in l){const L=typeof l.alias=="string"?[l.alias]:l.alias;for(const Q of L)R.push(de({},g,{components:f?f.record.components:g.components,path:Q,aliasOf:f?f.record:g}))}let C,D;for(const L of R){const{path:Q}=L;if(h&&Q[0]!=="/"){const se=h.record.path,we=se[se.length-1]==="/"?"":"/";L.path=h.record.path+(Q&&we+Q)}if(C=T0(L,h,y),f?f.alias.push(C):(D=D||C,D!==C&&D.alias.push(C),m&&l.name&&!Ph(C)&&o(l.name)),g.children){const se=g.children;for(let we=0;we<se.length;we++)i(se[we],C,f&&f.children[we])}f=f||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return D?()=>{o(D)}:mr}function o(l){if(Op(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&w0(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Dp(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Ph(l)&&s.set(l.record.name,l)}function u(l,h){let f,m={},g,y;if("name"in l&&l.name){if(f=s.get(l.name),!f)throw Ds(1,{location:l});y=f.record.name,m=de(xh(h.params,f.keys.filter(D=>!D.optional).map(D=>D.name)),l.params&&xh(l.params,f.keys.map(D=>D.name))),g=f.stringify(m)}else if("path"in l)g=l.path,f=n.find(D=>D.re.test(g)),f&&(m=f.parse(g),y=f.record.name);else{if(f=h.name?s.get(h.name):n.find(D=>D.re.test(h.path)),!f)throw Ds(1,{location:l,currentLocation:h});y=f.record.name,m=de({},h.params,l.params),g=f.stringify(m)}const R=[];let C=f;for(;C;)R.unshift(C.record),C=C.parent;return{name:y,path:g,params:m,matched:R,meta:A0(R)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function xh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function S0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:C0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function C0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Ph(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function A0(t){return t.reduce((e,n)=>de(e,n.meta),{})}function Lh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Dp(t,e){return e.children.some(n=>n===t||Dp(t,n))}const xp=/#/g,R0=/&/g,k0=/\//g,O0=/=/g,N0=/\?/g,Pp=/\+/g,D0=/%5B/g,x0=/%5D/g,Lp=/%5E/g,P0=/%60/g,Mp=/%7B/g,L0=/%7C/g,Up=/%7D/g,M0=/%20/g;function Pu(t){return encodeURI(""+t).replace(L0,"|").replace(D0,"[").replace(x0,"]")}function U0(t){return Pu(t).replace(Mp,"{").replace(Up,"}").replace(Lp,"^")}function Sc(t){return Pu(t).replace(Pp,"%2B").replace(M0,"+").replace(xp,"%23").replace(R0,"%26").replace(P0,"`").replace(Mp,"{").replace(Up,"}").replace(Lp,"^")}function F0(t){return Sc(t).replace(O0,"%3D")}function B0(t){return Pu(t).replace(xp,"%23").replace(N0,"%3F")}function V0(t){return t==null?"":B0(t).replace(k0,"%2F")}function oo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function $0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Pp," "),o=i.indexOf("="),a=oo(o<0?i:i.slice(0,o)),c=o<0?null:oo(i.slice(o+1));if(a in e){let u=e[a];Nt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Mh(t){let e="";for(let n in t){const s=t[n];if(n=F0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Nt(s)?s.map(i=>i&&Sc(i)):[s&&Sc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function j0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Nt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const q0=Symbol(""),Uh=Symbol(""),Xo=Symbol(""),Fp=Symbol(""),Cc=Symbol("");function sr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function mn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ds(4,{from:n,to:e})):h instanceof Error?a(h):p0(h)?a(Ds(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Va(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(H0(a)){const u=(a.__vccOpts||a)[e];u&&r.push(mn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=JE(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&mn(f,n,s,i,o)()}))}}return r}function H0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Fh(t){const e=kt(Xo),n=kt(Fp),s=dt(()=>e.resolve(Ft(t.to))),r=dt(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(Ns.bind(null,l));if(f>-1)return f;const m=Bh(c[u-2]);return u>1&&Bh(l)===m&&h[h.length-1].path!==m?h.findIndex(Ns.bind(null,c[u-2])):f}),i=dt(()=>r.value>-1&&W0(n.params,s.value.params)),o=dt(()=>r.value>-1&&r.value===n.matched.length-1&&Rp(n.params,s.value.params));function a(c={}){return z0(c)?e[Ft(t.replace)?"replace":"push"](Ft(t.to)).catch(mr):Promise.resolve()}return{route:s,href:dt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const K0=Fd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fh,setup(t,{slots:e}){const n=Ks(Fh(t)),{options:s}=kt(Xo),r=dt(()=>({[Vh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Vh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:np("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Ac=K0;function z0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function W0(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Nt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Bh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vh=(t,e,n)=>t??e??n,G0=Fd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=kt(Cc),r=dt(()=>t.route||s.value),i=kt(Uh,0),o=dt(()=>{let u=Ft(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=dt(()=>r.value.matched[o.value]);Fi(Uh,dt(()=>o.value+1)),Fi(q0,a),Fi(Cc,r);const c=wt();return hr(()=>[c.value,a.value,t.name],([u,l,h],[f,m,g])=>{l&&(l.instances[h]=u,m&&m!==l&&u&&u===f&&(l.leaveGuards.size||(l.leaveGuards=m.leaveGuards),l.updateGuards.size||(l.updateGuards=m.updateGuards))),u&&l&&(!m||!Ns(l,m)||!f)&&(l.enterCallbacks[h]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,f=h&&h.components[l];if(!f)return $h(n.default,{Component:f,route:u});const m=h.props[l],g=m?m===!0?u.params:typeof m=="function"?m(u):m:null,R=np(f,de({},g,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return $h(n.default,{Component:R,route:u})||R}}});function $h(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Bp=G0;function Q0(t){const e=I0(t.routes,t),n=t.parseQuery||$0,s=t.stringifyQuery||Mh,r=t.history,i=sr(),o=sr(),a=sr(),c=Dv(hn);let u=hn;fs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Fa.bind(null,E=>""+E),h=Fa.bind(null,V0),f=Fa.bind(null,oo);function m(E,P){let N,B;return Op(E)?(N=e.getRecordMatcher(E),B=P):B=E,e.addRoute(B,N)}function g(E){const P=e.getRecordMatcher(E);P&&e.removeRoute(P)}function y(){return e.getRoutes().map(E=>E.record)}function R(E){return!!e.getRecordMatcher(E)}function C(E,P){if(P=de({},P||c.value),typeof E=="string"){const d=Ba(n,E,P.path),p=e.resolve({path:d.path},P),v=r.createHref(d.fullPath);return de(d,p,{params:f(p.params),hash:oo(d.hash),redirectedFrom:void 0,href:v})}let N;if("path"in E)N=de({},E,{path:Ba(n,E.path,P.path).path});else{const d=de({},E.params);for(const p in d)d[p]==null&&delete d[p];N=de({},E,{params:h(E.params)}),P.params=h(P.params)}const B=e.resolve(N,P),oe=E.hash||"";B.params=l(f(B.params));const Ie=ZE(s,de({},E,{hash:U0(oe),path:B.path})),ee=r.createHref(Ie);return de({fullPath:Ie,hash:oe,query:s===Mh?j0(E.query):E.query||{}},B,{redirectedFrom:void 0,href:ee})}function D(E){return typeof E=="string"?Ba(n,E,c.value.path):de({},E)}function L(E,P){if(u!==E)return Ds(8,{from:P,to:E})}function Q(E){return Z(E)}function se(E){return Q(de(D(E),{replace:!0}))}function we(E){const P=E.matched[E.matched.length-1];if(P&&P.redirect){const{redirect:N}=P;let B=typeof N=="function"?N(E):N;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=D(B):{path:B},B.params={}),de({query:E.query,hash:E.hash,params:"path"in B?{}:E.params},B)}}function Z(E,P){const N=u=C(E),B=c.value,oe=E.state,Ie=E.force,ee=E.replace===!0,d=we(N);if(d)return Z(de(D(d),{state:typeof d=="object"?de({},oe,d.state):oe,force:Ie,replace:ee}),P||N);const p=N;p.redirectedFrom=P;let v;return!Ie&&e0(s,B,N)&&(v=Ds(16,{to:p,from:B}),Ln(B,B,!0,!1)),(v?Promise.resolve(v):De(p,B)).catch(_=>Kt(_)?Kt(_,2)?_:_t(_):ge(_,p,B)).then(_=>{if(_){if(Kt(_,2))return Z(de({replace:ee},D(_.to),{state:typeof _.to=="object"?de({},oe,_.to.state):oe,force:Ie}),P||p)}else _=rt(p,B,!0,ee,oe);return Be(p,B,_),_})}function re(E,P){const N=L(E,P);return N?Promise.reject(N):Promise.resolve()}function De(E,P){let N;const[B,oe,Ie]=J0(E,P);N=Va(B.reverse(),"beforeRouteLeave",E,P);for(const d of B)d.leaveGuards.forEach(p=>{N.push(mn(p,E,P))});const ee=re.bind(null,E,P);return N.push(ee),ls(N).then(()=>{N=[];for(const d of i.list())N.push(mn(d,E,P));return N.push(ee),ls(N)}).then(()=>{N=Va(oe,"beforeRouteUpdate",E,P);for(const d of oe)d.updateGuards.forEach(p=>{N.push(mn(p,E,P))});return N.push(ee),ls(N)}).then(()=>{N=[];for(const d of E.matched)if(d.beforeEnter&&!P.matched.includes(d))if(Nt(d.beforeEnter))for(const p of d.beforeEnter)N.push(mn(p,E,P));else N.push(mn(d.beforeEnter,E,P));return N.push(ee),ls(N)}).then(()=>(E.matched.forEach(d=>d.enterCallbacks={}),N=Va(Ie,"beforeRouteEnter",E,P),N.push(ee),ls(N))).then(()=>{N=[];for(const d of o.list())N.push(mn(d,E,P));return N.push(ee),ls(N)}).catch(d=>Kt(d,8)?d:Promise.reject(d))}function Be(E,P,N){for(const B of a.list())B(E,P,N)}function rt(E,P,N,B,oe){const Ie=L(E,P);if(Ie)return Ie;const ee=P===hn,d=fs?history.state:{};N&&(B||ee?r.replace(E.fullPath,de({scroll:ee&&d&&d.scroll},oe)):r.push(E.fullPath,oe)),c.value=E,Ln(E,P,N,ee),_t()}let mt;function cn(){mt||(mt=r.listen((E,P,N)=>{if(!_i.listening)return;const B=C(E),oe=we(B);if(oe){Z(de(oe,{replace:!0}),B).catch(mr);return}u=B;const Ie=c.value;fs&&c0(Rh(Ie.fullPath,N.delta),Jo()),De(B,Ie).catch(ee=>Kt(ee,12)?ee:Kt(ee,2)?(Z(ee.to,B).then(d=>{Kt(d,20)&&!N.delta&&N.type===Or.pop&&r.go(-1,!1)}).catch(mr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),ge(ee,B,Ie))).then(ee=>{ee=ee||rt(B,Ie,!1),ee&&(N.delta&&!Kt(ee,8)?r.go(-N.delta,!1):N.type===Or.pop&&Kt(ee,20)&&r.go(-1,!1)),Be(B,Ie,ee)}).catch(mr)}))}let lt=sr(),Ve=sr(),Ae;function ge(E,P,N){_t(E);const B=Ve.list();return B.length?B.forEach(oe=>oe(E,P,N)):console.error(E),Promise.reject(E)}function pe(){return Ae&&c.value!==hn?Promise.resolve():new Promise((E,P)=>{lt.add([E,P])})}function _t(E){return Ae||(Ae=!E,cn(),lt.list().forEach(([P,N])=>E?N(E):P()),lt.reset()),E}function Ln(E,P,N,B){const{scrollBehavior:oe}=t;if(!fs||!oe)return Promise.resolve();const Ie=!N&&u0(Rh(E.fullPath,0))||(B||!N)&&history.state&&history.state.scroll||null;return wu().then(()=>oe(E,P,Ie)).then(ee=>ee&&a0(ee)).catch(ee=>ge(ee,E,P))}const Et=E=>r.go(E);let it;const as=new Set,_i={currentRoute:c,listening:!0,addRoute:m,removeRoute:g,hasRoute:R,getRoutes:y,resolve:C,options:t,push:Q,replace:se,go:Et,back:()=>Et(-1),forward:()=>Et(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ve.add,isReady:pe,install(E){const P=this;E.component("RouterLink",Ac),E.component("RouterView",Bp),E.config.globalProperties.$router=P,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Ft(c)}),fs&&!it&&c.value===hn&&(it=!0,Q(r.location).catch(oe=>{}));const N={};for(const oe in hn)N[oe]=dt(()=>c.value[oe]);E.provide(Xo,P),E.provide(Fp,Ks(N)),E.provide(Cc,c);const B=E.unmount;as.add(E),E.unmount=function(){as.delete(E),as.size<1&&(u=hn,mt&&mt(),mt=null,c.value=hn,it=!1,Ae=!1),B()}}};return _i}function ls(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function J0(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ns(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ns(u,c))||r.push(c))}return[n,s,r]}function X0(){return kt(Xo)}const Y0=E_("auth",()=>{const t=wt(!1),e=wt("");function n(r){t.value=!0,e.value=r}function s(){t.value=!1,e.value=""}return{setCredentials:n,isLogin:t,clearState:s,email:e}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Z0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(f=64)),s.push(n[l],n[h],n[f],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Z0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),u!==64){const m=a<<4&240|u>>2;if(s.push(m),h!==64){const g=u<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},eb=function(t){const e=Vp(t);return $p.encodeByteArray(e,!0)},ao=function(t){return eb(t).replace(/\./g,"")},jp=function(t){try{return $p.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=()=>tb().__FIREBASE_DEFAULTS__,sb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jp(t[1]);return e&&JSON.parse(e)},Lu=()=>{try{return nb()||sb()||rb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qp=t=>{var e,n;return(n=(e=Lu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ib=t=>{const e=qp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ob=()=>{var t;return(t=Lu())===null||t===void 0?void 0:t.config},Hp=t=>{var e;return(e=Lu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ao(JSON.stringify(n)),ao(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ub(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function lb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fb(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function db(){try{return typeof indexedDB=="object"}catch{return!1}}function pb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="FirebaseError";class an extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=mb,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gr.prototype.create)}}class Gr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?gb(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new an(r,a,s)}}function gb(t,e){return t.replace(yb,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const yb=/\{\$([^}]+)}/g;function vb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function co(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(jh(i)&&jh(o)){if(!co(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function jh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function or(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function ar(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wb(t,e){const n=new _b(t,e);return n.subscribe.bind(n)}class _b{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Eb(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=$a),r.error===void 0&&(r.error=$a),r.complete===void 0&&(r.complete=$a);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Eb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $a(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){return t&&t._delegate?t._delegate:t}class Yn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ab;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ib(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Tb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tb(t){return t===Bn?void 0:t}function Ib(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Cb={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Ab=le.INFO,Rb={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},kb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Rb[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mu{constructor(e){this.name=e,this._logLevel=Ab,this._logHandler=kb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Ob=(t,e)=>e.some(n=>t instanceof n);let qh,Hh;function Nb(){return qh||(qh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Db(){return Hh||(Hh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kp=new WeakMap,Rc=new WeakMap,zp=new WeakMap,ja=new WeakMap,Uu=new WeakMap;function xb(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kp.set(n,t)}).catch(()=>{}),Uu.set(e,t),e}function Pb(t){if(Rc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Rc.set(t,e)}let kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lb(t){kc=t(kc)}function Mb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(qa(this),e,...n);return zp.set(s,e.sort?e.sort():[e]),Tn(s)}:Db().includes(t)?function(...e){return t.apply(qa(this),e),Tn(Kp.get(this))}:function(...e){return Tn(t.apply(qa(this),e))}}function Ub(t){return typeof t=="function"?Mb(t):(t instanceof IDBTransaction&&Pb(t),Ob(t,Nb())?new Proxy(t,kc):t)}function Tn(t){if(t instanceof IDBRequest)return xb(t);if(ja.has(t))return ja.get(t);const e=Ub(t);return e!==t&&(ja.set(t,e),Uu.set(e,t)),e}const qa=t=>Uu.get(t);function Fb(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Tn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Tn(o.result),c.oldVersion,c.newVersion,Tn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Bb=["get","getKey","getAll","getAllKeys","count"],Vb=["put","add","delete","clear"],Ha=new Map;function Kh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ha.get(e))return Ha.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Vb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Bb.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Ha.set(e,i),i}Lb(t=>({...t,get:(e,n,s)=>Kh(e,n)||t.get(e,n,s),has:(e,n)=>!!Kh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function jb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oc="@firebase/app",zh="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Mu("@firebase/app"),qb="@firebase/app-compat",Hb="@firebase/analytics-compat",Kb="@firebase/analytics",zb="@firebase/app-check-compat",Wb="@firebase/app-check",Gb="@firebase/auth",Qb="@firebase/auth-compat",Jb="@firebase/database",Xb="@firebase/database-compat",Yb="@firebase/functions",Zb="@firebase/functions-compat",eT="@firebase/installations",tT="@firebase/installations-compat",nT="@firebase/messaging",sT="@firebase/messaging-compat",rT="@firebase/performance",iT="@firebase/performance-compat",oT="@firebase/remote-config",aT="@firebase/remote-config-compat",cT="@firebase/storage",uT="@firebase/storage-compat",lT="@firebase/firestore",hT="@firebase/firestore-compat",fT="firebase",dT="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="[DEFAULT]",pT={[Oc]:"fire-core",[qb]:"fire-core-compat",[Kb]:"fire-analytics",[Hb]:"fire-analytics-compat",[Wb]:"fire-app-check",[zb]:"fire-app-check-compat",[Gb]:"fire-auth",[Qb]:"fire-auth-compat",[Jb]:"fire-rtdb",[Xb]:"fire-rtdb-compat",[Yb]:"fire-fn",[Zb]:"fire-fn-compat",[eT]:"fire-iid",[tT]:"fire-iid-compat",[nT]:"fire-fcm",[sT]:"fire-fcm-compat",[rT]:"fire-perf",[iT]:"fire-perf-compat",[oT]:"fire-rc",[aT]:"fire-rc-compat",[cT]:"fire-gcs",[uT]:"fire-gcs-compat",[lT]:"fire-fst",[hT]:"fire-fst-compat","fire-js":"fire-js",[fT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new Map,Dc=new Map;function mT(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xs(t){const e=t.name;if(Dc.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;Dc.set(e,t);for(const n of uo.values())mT(n,t);return!0}function Fu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},In=new Gr("app","Firebase",gT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=dT;function Bu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Nc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw In.create("bad-app-name",{appName:String(r)});if(n||(n=ob()),!n)throw In.create("no-options");const i=uo.get(r);if(i){if(co(n,i.options)&&co(s,i.config))return i;throw In.create("duplicate-app",{appName:r})}const o=new Sb(r);for(const c of Dc.values())o.addComponent(c);const a=new yT(n,s,o);return uo.set(r,a),a}function Wp(t=Nc){const e=uo.get(t);if(!e&&t===Nc)return Bu();if(!e)throw In.create("no-app",{appName:t});return e}function Sn(t,e,n){var s;let r=(s=pT[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(a.join(" "));return}xs(new Yn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="firebase-heartbeat-database",wT=1,Nr="firebase-heartbeat-store";let Ka=null;function Gp(){return Ka||(Ka=Fb(vT,wT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Nr)}}}).catch(t=>{throw In.create("idb-open",{originalErrorMessage:t.message})})),Ka}async function _T(t){try{return(await Gp()).transaction(Nr).objectStore(Nr).get(Qp(t))}catch(e){if(e instanceof an)Zn.warn(e.message);else{const n=In.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zn.warn(n.message)}}}async function Wh(t,e){try{const s=(await Gp()).transaction(Nr,"readwrite");return await s.objectStore(Nr).put(e,Qp(t)),s.done}catch(n){if(n instanceof an)Zn.warn(n.message);else{const s=In.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zn.warn(s.message)}}}function Qp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=1024,bT=30*24*60*60*1e3;class TT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ST(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=bT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gh(),{heartbeatsToSend:n,unsentEntries:s}=IT(this._heartbeatsCache.heartbeats),r=ao(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Gh(){return new Date().toISOString().substring(0,10)}function IT(t,e=ET){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Qh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Qh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ST{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return db()?pb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _T(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Qh(t){return ao(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(t){xs(new Yn("platform-logger",e=>new $b(e),"PRIVATE")),xs(new Yn("heartbeat",e=>new TT(e),"PRIVATE")),Sn(Oc,zh,t),Sn(Oc,zh,"esm2017"),Sn("fire-js","")}CT("");function Vu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Jp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AT=Jp,Xp=new Gr("auth","Firebase",Jp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new Mu("@firebase/auth");function zi(t,...e){Jh.logLevel<=le.ERROR&&Jh.error(`Auth (${Jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,...e){throw $u(t,...e)}function Vt(t,...e){return $u(t,...e)}function RT(t,e,n){const s=Object.assign(Object.assign({},AT()),{[e]:n});return new Gr("auth","Firebase",s).create(e,{appName:t.name})}function $u(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Xp.create(t,...e)}function H(t,e,...n){if(!t)throw $u(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zi(e),new Error(e)}function Zt(t,e){t||Wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=new Map;function Gt(t){Zt(t instanceof Function,"Expected a class definition");let e=Xh.get(t);return e?(Zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t,e){const n=Fu(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(co(i,e??{}))return r;Dt(r,"already-initialized")}return n.initialize({options:e})}function OT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function NT(){return Yh()==="http:"||Yh()==="https:"}function Yh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NT()||lb()||"connection"in navigator)?navigator.onLine:!0}function xT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zt(n>e,"Short delay should be less than long delay!"),this.isMobile=ub()||hb()}get(){return DT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t,e){Zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=new Xr(3e4,6e4);function Yr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zr(t,e,n,s,r={}){return Zp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Qr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Yp.fetch()(em(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Zp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},PT),e);try{const r=new MT(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ri(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ri(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ri(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ri(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw RT(t,l,u);Dt(t,l)}}catch(r){if(r instanceof an)throw r;Dt(t,"network-request-failed")}}async function ei(t,e,n,s,r={}){const i=await Zr(t,e,n,s,r);return"mfaPendingCredential"in i&&Dt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function em(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ju(t.config,r):`${t.config.apiScheme}://${r}`}class MT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Vt(this.auth,"network-request-failed")),LT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ri(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Vt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(t,e){return Zr(t,"POST","/v1/accounts:delete",e)}async function FT(t,e){return Zr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BT(t,e=!1){const n=ut(t),s=await n.getIdToken(e),r=qu(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:yr(za(r.auth_time)),issuedAtTime:yr(za(r.iat)),expirationTime:yr(za(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function za(t){return Number(t)*1e3}function qu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return zi("JWT malformed, contained fewer than 3 sections"),null;try{const r=jp(n);return r?JSON.parse(r):(zi("Failed to decode base64 JWT payload"),null)}catch(r){return zi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function VT(t){const e=qu(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof an&&$T(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function $T({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yr(this.lastLoginAt),this.creationTime=yr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Dr(t,FT(n,{idToken:s}));H(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?KT(i.providerUserInfo):[],a=HT(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new tm(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function qT(t){const e=ut(t);await lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HT(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function KT(t){return t.map(e=>{var{providerId:n}=e,s=Vu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zT(t,e){const n=await Zp(t,{},async()=>{const s=Qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=em(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Yp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):VT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await zT(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new xr;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xr,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Vu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Dr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BT(this,e)}reload(){return qT(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await lo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dr(this,UT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(u=n.createdAt)!==null&&u!==void 0?u:void 0,D=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:L,emailVerified:Q,isAnonymous:se,providerData:we,stsTokenManager:Z}=n;H(L&&Z,e,"internal-error");const re=xr.fromJSON(this.name,Z);H(typeof L=="string",e,"internal-error"),fn(h,e.name),fn(f,e.name),H(typeof Q=="boolean",e,"internal-error"),H(typeof se=="boolean",e,"internal-error"),fn(m,e.name),fn(g,e.name),fn(y,e.name),fn(R,e.name),fn(C,e.name),fn(D,e.name);const De=new Gn({uid:L,auth:e,email:f,emailVerified:Q,displayName:h,isAnonymous:se,photoURL:g,phoneNumber:m,tenantId:y,stsTokenManager:re,createdAt:C,lastLoginAt:D});return we&&Array.isArray(we)&&(De.providerData=we.map(Be=>Object.assign({},Be))),R&&(De._redirectEventId=R),De}static async _fromIdTokenResponse(e,n,s=!1){const r=new xr;r.updateFromServerResponse(n);const i=new Gn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await lo(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nm.type="NONE";const Zh=nm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t,e,n){return`firebase:${t}:${e}:${n}`}class _s{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Wi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Wi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new _s(Gt(Zh),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Gt(Zh);const o=Wi(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Gn._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _s(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new _s(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(im(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(am(e))return"Blackberry";if(cm(e))return"Webos";if(Hu(e))return"Safari";if((e.includes("chrome/")||rm(e))&&!e.includes("edge/"))return"Chrome";if(om(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function sm(t=Ze()){return/firefox\//i.test(t)}function Hu(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rm(t=Ze()){return/crios\//i.test(t)}function im(t=Ze()){return/iemobile/i.test(t)}function om(t=Ze()){return/android/i.test(t)}function am(t=Ze()){return/blackberry/i.test(t)}function cm(t=Ze()){return/webos/i.test(t)}function Yo(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WT(t=Ze()){var e;return Yo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GT(){return fb()&&document.documentMode===10}function um(t=Ze()){return Yo(t)||om(t)||cm(t)||am(t)||/windows phone/i.test(t)||im(t)}function QT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t,e=[]){let n;switch(t){case"Browser":n=ef(Ze());break;case"Worker":n=`${ef(Ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tf(this),this.idTokenSubscription=new tf(this),this.beforeStateQueue=new JT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await _s.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ut(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await _s.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function ti(t){return ut(t)}class tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=wb(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function YT(t,e,n){const s=ti(t);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=hm(e),{host:o,port:a}=ZT(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||eI()}function hm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZT(t){const e=hm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:nf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:nf(o)}}}function nf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function tI(t,e){return Zr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(t,e){return ei(t,"POST","/v1/accounts:signInWithPassword",Yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(t,e){return ei(t,"POST","/v1/accounts:signInWithEmailLink",Yr(t,e))}async function rI(t,e){return ei(t,"POST","/v1/accounts:signInWithEmailLink",Yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Ku{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Pr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Pr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return nI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sI(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return tI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rI(e,{idToken:n,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t,e){return ei(t,"POST","/v1/accounts:signInWithIdp",Yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="http://localhost";class es extends Ku{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Vu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new es(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Es(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Es(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Es(e,n)}buildRequest(){const e={requestUri:iI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aI(t){const e=or(ar(t)).link,n=e?or(ar(e)).deep_link_id:null,s=or(ar(t)).deep_link_id;return(s?or(ar(s)).link:null)||s||n||e||t}class zu{constructor(e){var n,s,r,i,o,a;const c=or(ar(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=oI((r=c.mode)!==null&&r!==void 0?r:null);H(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=aI(e);try{return new zu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.providerId=Ws.PROVIDER_ID}static credential(e,n){return Pr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=zu.parseLink(n);return H(s,"argument-error"),Pr._fromEmailAndCode(e,s.code,s.tenantId)}}Ws.PROVIDER_ID="password";Ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends fm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends ni{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return es._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return yn.credential(n,s)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends ni{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends ni{constructor(){super("twitter.com")}static credential(e,n){return es._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return wn.credential(n,s)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cI(t,e){return ei(t,"POST","/v1/accounts:signUp",Yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Gn._fromIdTokenResponse(e,s,r),o=sf(s);return new ts({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=sf(s);return new ts({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function sf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends an{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ho.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new ho(e,n,s,r)}}function dm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ho._fromErrorAndOperation(t,i,e,s):i})}async function uI(t,e,n=!1){const s=await Dr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ts._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Dr(t,dm(s,r,e,t),n);H(i.idToken,s,"internal-error");const o=qu(i.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),ts._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(t,e,n=!1){const s="signIn",r=await dm(t,s,e),i=await ts._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function hI(t,e){return pm(ti(t),e)}async function mO(t,e,n){const s=ti(t),r=await cI(s,{returnSecureToken:!0,email:e,password:n}),i=await ts._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function gO(t,e,n){return hI(ut(t),Ws.credential(e,n))}function fI(t,e,n,s){return ut(t).onIdTokenChanged(e,n,s)}function dI(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}function mm(t,e,n,s){return ut(t).onAuthStateChanged(e,n,s)}function pI(t){return ut(t).signOut()}const fo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fo,"1"),this.storage.removeItem(fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(){const t=Ze();return Hu(t)||Yo(t)}const gI=1e3,yI=10;class ym extends gm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mI()&&QT(),this.fallbackToPolling=um(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);GT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,yI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},gI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ym.type="LOCAL";const vI=ym;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm extends gm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vm.type="SESSION";const wm=vm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Zo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await wI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Wu("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function EI(t){$t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function bI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function II(){return _m()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="firebaseLocalStorageDb",SI=1,po="firebaseLocalStorage",bm="fbase_key";class si{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ea(t,e){return t.transaction([po],e?"readwrite":"readonly").objectStore(po)}function CI(){const t=indexedDB.deleteDatabase(Em);return new si(t).toPromise()}function Pc(){const t=indexedDB.open(Em,SI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(po,{keyPath:bm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(po)?e(s):(s.close(),await CI(),e(await Pc()))})})}async function rf(t,e,n){const s=ea(t,!0).put({[bm]:e,value:n});return new si(s).toPromise()}async function AI(t,e){const n=ea(t,!1).get(e),s=await new si(n).toPromise();return s===void 0?null:s.value}function of(t,e){const n=ea(t,!0).delete(e);return new si(n).toPromise()}const RI=800,kI=3;class Tm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>kI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _m()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zo._getInstance(II()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bI(),!this.activeServiceWorker)return;this.sender=new _I(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pc();return await rf(e,fo,"1"),await of(e,fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>rf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>AI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>of(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ea(r,!1).getAll();return new si(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tm.type="LOCAL";const OI=Tm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function DI(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Vt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",NI().appendChild(s)})}function xI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Xr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t,e){return e?Gt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu extends Ku{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LI(t){return pm(t.auth,new Gu(t),t.bypassAuthState)}function MI(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),lI(n,new Gu(t),t.bypassAuthState)}async function UI(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),uI(n,new Gu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LI;case"linkViaPopup":case"linkViaRedirect":return UI;case"reauthViaPopup":case"reauthViaRedirect":return MI;default:Dt(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=new Xr(2e3,1e4);class ms extends Im{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ms.currentPopupAction&&ms.currentPopupAction.cancel(),ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=Wu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,FI.get())};e()}}ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI="pendingRedirect",Gi=new Map;class VI extends Im{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Gi.get(this.auth._key());if(!e){try{const s=await $I(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Gi.set(this.auth._key(),e)}return this.bypassAuthState||Gi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $I(t,e){const n=HI(e),s=qI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function jI(t,e){Gi.set(t._key(),e)}function qI(t){return Gt(t._redirectPersistence)}function HI(t){return Wi(BI,t.config.apiKey,t.name)}async function KI(t,e,n=!1){const s=ti(t),r=PI(s,e),o=await new VI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=10*60*1e3;class WI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Sm(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zI&&this.cachedEventUids.clear(),this.cachedEventUids.has(af(e))}saveEventToCache(e){this.cachedEventUids.add(af(e)),this.lastProcessedEventTime=Date.now()}}function af(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(t,e={}){return Zr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XI=/^https?/;async function YI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QI(t);for(const n of e)try{if(ZI(n))return}catch{}Dt(t,"unauthorized-domain")}function ZI(t){const e=xc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!XI.test(n))return!1;if(JI.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=new Xr(3e4,6e4);function cf(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tS(t){return new Promise((e,n)=>{var s,r,i;function o(){cf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cf(),n(Vt(t,"network-request-failed"))},timeout:eS.get()})}if(!((r=(s=$t().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=$t().gapi)===null||i===void 0)&&i.load)o();else{const a=xI("iframefcb");return $t()[a]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},DI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Qi=null,e})}let Qi=null;function nS(t){return Qi=Qi||tS(t),Qi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=new Xr(5e3,15e3),rS="__/auth/iframe",iS="emulator/auth/iframe",oS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cS(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ju(e,iS):`https://${t.config.authDomain}/${rS}`,s={apiKey:e.apiKey,appName:t.name,v:Jr},r=aS.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Qr(s).slice(1)}`}async function uS(t){const e=await nS(t),n=$t().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:cS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oS,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),a=$t().setTimeout(()=>{i(o)},sS.get());function c(){$t().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hS=500,fS=600,dS="_blank",pS="http://localhost";class uf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mS(t,e,n,s=hS,r=fS){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},lS),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Ze().toLowerCase();n&&(a=rm(u)?dS:n),sm(u)&&(e=e||pS,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(WT(u)&&a!=="_self")return gS(e||"",a),new uf(null);const h=window.open(e||"",a,l);H(h,t,"popup-blocked");try{h.focus()}catch{}return new uf(h)}function gS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS="__/auth/handler",vS="emulator/auth/handler";function lf(t,e,n,s,r,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Jr,eventId:r};if(e instanceof fm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof ni){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${wS(t)}?${Qr(a).slice(1)}`}function wS({config:t}){return t.emulator?ju(t,vS):`https://${t.authDomain}/${yS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="webStorageSupport";class _S{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wm,this._completeRedirectFn=KI,this._overrideRedirectResult=jI}async _openPopup(e,n,s,r){var i;Zt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=lf(e,n,s,xc(),r);return mS(e,o,Wu())}async _openRedirect(e,n,s,r){return await this._originValidation(e),EI(lf(e,n,s,xc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Zt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await uS(e),s=new WI(e);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wa,{type:Wa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Wa];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return um()||Hu()||Yo()}}const ES=_S;var hf="@firebase/auth",ff="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function IS(t){xs(new Yn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{H(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lm(t)},l=new XT(a,c,u);return OT(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),xs(new Yn("auth-internal",e=>{const n=ti(e.getProvider("auth").getImmediate());return(s=>new bS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(hf,ff,TS(t)),Sn(hf,ff,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=5*60,CS=Hp("authIdTokenMaxAge")||SS;let df=null;const AS=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>CS)return;const r=n==null?void 0:n.token;df!==r&&(df=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Cm(t=Wp()){const e=Fu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kT(t,{popupRedirectResolver:ES,persistence:[OI,vI,wm]}),s=Hp("authTokenSyncURL");if(s){const i=AS(s);dI(n,i,()=>i(n.currentUser)),fI(n,o=>i(o))}const r=qp("auth");return r&&YT(n,`http://${r}`),n}IS("Browser");const ri=t=>(Eu("data-v-f5bddbec"),t=t(),bu(),t),RS={key:0,class:"container",style:{"margin-top":"2em"}},kS=ri(()=>fe("div",null,null,-1)),OS=ri(()=>fe("h3",{class:"web-title"},"Quick Note 🖊",-1)),NS=ri(()=>fe("div",null,null,-1)),DS=ri(()=>fe("div",null,null,-1)),xS=ri(()=>fe("div",null,null,-1)),PS={__name:"App",setup(t){const e=X0(),n=Cm(),s=Y0();mm(n,i=>{i&&s.setCredentials(i.email)});function r(){pI(n).then(()=>{s.clearState(),alert("ออกจากระบบแล้ว"),e.push("/login")}).catch(()=>{alert("An error happened during the sign-out process")})}return(i,o)=>(at(),vt(Tt,null,[fe("header",null,[Ft(s).isLogin?(at(),vt("nav",RS,[He(Ft(Ac),{to:"/"},{default:lc(()=>[Rs("🏠 ทั้งหมด")]),_:1}),He(Ft(Ac),{to:"/add"},{default:lc(()=>[Rs("📖 เพิ่มโน้ตใหม่")]),_:1}),kS,OS,NS,DS,xS,fe("a",{onClick:r},"🚫 ออกจากระบบ")])):Zd("",!0)]),He(Ft(Bp))],64))}},LS=Qo(PS,[["__scopeId","data-v-f5bddbec"]]),MS="modulepreload",US=function(t){return"/"+t},pf={},Ga=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=US(i),i in pf)return;pf[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":MS,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};const FS=t=>(Eu("data-v-fbb2f0b1"),t=t(),bu(),t),BS={class:"col-md-3"},VS={style:{padding:"1em"}},$S={key:0,style:{margin:"0"}},jS={style:{display:"block"}},qS=FS(()=>fe("i",{class:"fa fa-eye","aria-hidden":"true"},null,-1)),HS=[qS],KS=["open"],zS={style:{width:"400px"}},WS={__name:"NotePaper",props:{title:String,content:String},setup(t){const e=t,n=wt(!1),s=()=>n.value=!1,r=()=>n.value=!0;return(i,o)=>(at(),vt("div",BS,[fe("article",VS,[e.title?(at(),vt("h4",$S,Ei(e.title),1)):Zd("",!0),fe("small",jS,Ei(e.content),1),fe("small",{style:{cursor:"pointer"},onClick:r},HS),fe("dialog",{open:n.value},[fe("article",zS,[fe("header",null,[fe("a",{onClick:s,"aria-label":"Close",class:"close"}),Rs(" "+Ei(e.title),1)]),fe("p",null,Ei(e.content),1)])],8,KS)])]))}},GS=Qo(WS,[["__scopeId","data-v-fbb2f0b1"]]);var QS="firebase",JS="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(QS,JS,"app");var XS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,Qu=Qu||{},z=XS||self;function mo(){}function ta(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ii(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function YS(t){return Object.prototype.hasOwnProperty.call(t,Qa)&&t[Qa]||(t[Qa]=++ZS)}var Qa="closure_uid_"+(1e9*Math.random()>>>0),ZS=0;function eC(t,e,n){return t.call.apply(t.bind,arguments)}function tC(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Xe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Xe=eC:Xe=tC,Xe.apply(null,arguments)}function ki(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function xn(){this.s=this.s,this.o=this.o}var nC=0;xn.prototype.s=!1;xn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),nC!=0)&&YS(this)};xn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Am=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ju(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function mf(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ta(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ye(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var sC=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",mo,e),z.removeEventListener("test",mo,e)}catch{}return t}();function go(t){return/^[\s\xa0]*$/.test(t)}var gf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ja(t,e){return t<e?-1:t>e?1:0}function na(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function Ut(t){return na().indexOf(t)!=-1}function Xu(t){return Xu[" "](t),t}Xu[" "]=mo;function rC(t){var e=aC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var iC=Ut("Opera"),Ps=Ut("Trident")||Ut("MSIE"),Rm=Ut("Edge"),Lc=Rm||Ps,km=Ut("Gecko")&&!(na().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge"))&&!(Ut("Trident")||Ut("MSIE"))&&!Ut("Edge"),oC=na().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge");function Om(){var t=z.document;return t?t.documentMode:void 0}var yo;e:{var Xa="",Ya=function(){var t=na();if(km)return/rv:([^\);]+)(\)|;)/.exec(t);if(Rm)return/Edge\/([\d\.]+)/.exec(t);if(Ps)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(oC)return/WebKit\/(\S+)/.exec(t);if(iC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ya&&(Xa=Ya?Ya[1]:""),Ps){var Za=Om();if(Za!=null&&Za>parseFloat(Xa)){yo=String(Za);break e}}yo=Xa}var aC={};function cC(){return rC(function(){let t=0;const e=gf(String(yo)).split("."),n=gf("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ja(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ja(r[2].length==0,i[2].length==0)||Ja(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Mc;if(z.document&&Ps){var yf=Om();Mc=yf||parseInt(yo,10)||void 0}else Mc=void 0;var uC=Mc;function Lr(t,e){if(Ye.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(km){e:{try{Xu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:lC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Lr.X.h.call(this)}}ze(Lr,Ye);var lC={2:"touch",3:"pen",4:"mouse"};Lr.prototype.h=function(){Lr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var oi="closure_listenable_"+(1e6*Math.random()|0),hC=0;function fC(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++hC,this.ba=this.ea=!1}function sa(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Yu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Nm(t){const e={};for(const n in t)e[n]=t[n];return e}const vf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dm(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<vf.length;i++)n=vf[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ra(t){this.src=t,this.g={},this.h=0}ra.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Fc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new fC(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Uc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Am(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(sa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Fc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Zu="closure_lm_"+(1e6*Math.random()|0),ec={};function xm(t,e,n,s,r){if(s&&s.once)return Lm(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)xm(t,e[i],n,s,r);return null}return n=nl(n),t&&t[oi]?t.N(e,n,ii(s)?!!s.capture:!!s,r):Pm(t,e,n,!1,s,r)}function Pm(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ii(r)?!!r.capture:!!r,a=tl(t);if(a||(t[Zu]=a=new ra(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=dC(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)sC||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Um(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function dC(){function t(n){return e.call(t.src,t.listener,n)}const e=pC;return t}function Lm(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Lm(t,e[i],n,s,r);return null}return n=nl(n),t&&t[oi]?t.O(e,n,ii(s)?!!s.capture:!!s,r):Pm(t,e,n,!0,s,r)}function Mm(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Mm(t,e[i],n,s,r);else s=ii(s)?!!s.capture:!!s,n=nl(n),t&&t[oi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Fc(i,n,s,r),-1<n&&(sa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=tl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Fc(e,n,s,r)),(n=-1<t?e[t]:null)&&el(n))}function el(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[oi])Uc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Um(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=tl(e))?(Uc(n,t),n.h==0&&(n.src=null,e[Zu]=null)):sa(t)}}}function Um(t){return t in ec?ec[t]:ec[t]="on"+t}function pC(t,e){if(t.ba)t=!0;else{e=new Lr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&el(t),t=n.call(s,e)}return t}function tl(t){return t=t[Zu],t instanceof ra?t:null}var tc="__closure_events_fn_"+(1e9*Math.random()>>>0);function nl(t){return typeof t=="function"?t:(t[tc]||(t[tc]=function(e){return t.handleEvent(e)}),t[tc])}function je(){xn.call(this),this.i=new ra(this),this.P=this,this.I=null}ze(je,xn);je.prototype[oi]=!0;je.prototype.removeEventListener=function(t,e,n,s){Mm(this,t,e,n,s)};function Ke(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ye(e,t);else if(e instanceof Ye)e.target=e.target||t;else{var r=e;e=new Ye(s,t),Dm(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Oi(o,s,!0,e)&&r}if(o=e.g=t,r=Oi(o,s,!0,e)&&r,r=Oi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Oi(o,s,!1,e)&&r}je.prototype.M=function(){if(je.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)sa(n[s]);delete t.g[e],t.h--}}this.I=null};je.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};je.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Oi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Uc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var sl=z.JSON.stringify;function mC(){var t=Vm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class gC{constructor(){this.h=this.g=null}add(e,n){const s=Fm.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Fm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new yC,t=>t.reset());class yC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function vC(t){z.setTimeout(()=>{throw t},0)}function Bm(t,e){Bc||wC(),Vc||(Bc(),Vc=!0),Vm.add(t,e)}var Bc;function wC(){var t=z.Promise.resolve(void 0);Bc=function(){t.then(_C)}}var Vc=!1,Vm=new gC;function _C(){for(var t;t=mC();){try{t.h.call(t.g)}catch(n){vC(n)}var e=Fm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vc=!1}function ia(t,e){je.call(this),this.h=t||1,this.g=e||z,this.j=Xe(this.lb,this),this.l=Date.now()}ze(ia,je);U=ia.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ke(this,"tick"),this.ca&&(rl(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function rl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){ia.X.M.call(this),rl(this),delete this.g};function il(t,e,n){if(typeof t=="function")n&&(t=Xe(t,n));else if(t&&typeof t.handleEvent=="function")t=Xe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function $m(t){t.g=il(()=>{t.g=null,t.i&&(t.i=!1,$m(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class EC extends xn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$m(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mr(t){xn.call(this),this.h=t,this.g={}}ze(Mr,xn);var wf=[];function jm(t,e,n,s){Array.isArray(n)||(n&&(wf[0]=n.toString()),n=wf);for(var r=0;r<n.length;r++){var i=xm(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function qm(t){Yu(t.g,function(e,n){this.g.hasOwnProperty(n)&&el(e)},t),t.g={}}Mr.prototype.M=function(){Mr.X.M.call(this),qm(this)};Mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function oa(){this.g=!0}oa.prototype.Aa=function(){this.g=!1};function bC(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function TC(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function gs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+SC(t,n)+(s?" "+s:"")})}function IC(t,e){t.info(function(){return"TIMEOUT: "+e})}oa.prototype.info=function(){};function SC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return sl(n)}catch{return e}}var rs={},_f=null;function aa(){return _f=_f||new je}rs.Pa="serverreachability";function Hm(t){Ye.call(this,rs.Pa,t)}ze(Hm,Ye);function Ur(t){const e=aa();Ke(e,new Hm(e))}rs.STAT_EVENT="statevent";function Km(t,e){Ye.call(this,rs.STAT_EVENT,t),this.stat=e}ze(Km,Ye);function nt(t){const e=aa();Ke(e,new Km(e,t))}rs.Qa="timingevent";function zm(t,e){Ye.call(this,rs.Qa,t),this.size=e}ze(zm,Ye);function ai(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var ca={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Wm={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ol(){}ol.prototype.h=null;function Ef(t){return t.h||(t.h=t.i())}function Gm(){}var ci={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function al(){Ye.call(this,"d")}ze(al,Ye);function cl(){Ye.call(this,"c")}ze(cl,Ye);var $c;function ua(){}ze(ua,ol);ua.prototype.g=function(){return new XMLHttpRequest};ua.prototype.i=function(){return{}};$c=new ua;function ui(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Mr(this),this.O=CC,t=Lc?125:void 0,this.T=new ia(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Qm}function Qm(){this.i=null,this.g="",this.h=!1}var CC=45e3,jc={},vo={};U=ui.prototype;U.setTimeout=function(t){this.O=t};function qc(t,e,n){t.K=1,t.v=ha(en(e)),t.s=n,t.P=!0,Jm(t,null)}function Jm(t,e){t.F=Date.now(),li(t),t.A=en(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),rg(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Qm,t.g=Sg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new EC(Xe(t.La,t,t.g),t.N)),jm(t.S,t.g,"readystatechange",t.ib),e=t.H?Nm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ur(),bC(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&Qt(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const l=Qt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Lc||this.g&&(this.h.h||this.g.fa()||Sf(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Ur(3):Ur(2)),la(this);var n=this.g.aa();this.Y=n;t:if(Xm(this)){var s=Sf(this.g);t="";var r=s.length,i=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qn(this),vr(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,TC(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!go(a)){var u=a;break t}}u=null}if(n=u)gs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Hc(this,n);else{this.i=!1,this.o=3,nt(12),qn(this),vr(this);break e}}this.P?(Ym(this,l,o),Lc&&this.i&&l==3&&(jm(this.S,this.T,"tick",this.hb),this.T.start())):(gs(this.j,this.m,o,null),Hc(this,o)),l==4&&qn(this),this.i&&!this.I&&(l==4?Eg(this.l,this):(this.i=!1,li(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),qn(this),vr(this)}}}catch{}finally{}};function Xm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ym(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=AC(t,n),r==vo){e==4&&(t.o=4,nt(14),s=!1),gs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==jc){t.o=4,nt(15),gs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else gs(t.j,t.m,r,null),Hc(t,r);Xm(t)&&r!=vo&&r!=jc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,nt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ml(e),e.K=!0,nt(11))):(gs(t.j,t.m,n,"[Invalid Chunked Response]"),qn(t),vr(t))}U.hb=function(){if(this.g){var t=Qt(this.g),e=this.g.fa();this.C<e.length&&(la(this),Ym(this,t,e),this.i&&t!=4&&li(this))}};function AC(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?vo:(n=Number(e.substring(n,s)),isNaN(n)?jc:(s+=1,s+n>e.length?vo:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,qn(this)};function li(t){t.V=Date.now()+t.O,Zm(t,t.O)}function Zm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ai(Xe(t.gb,t),e)}function la(t){t.B&&(z.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(IC(this.j,this.A),this.K!=2&&(Ur(),nt(17)),qn(this),this.o=2,vr(this)):Zm(this,this.V-t)};function vr(t){t.l.G==0||t.I||Eg(t.l,t)}function qn(t){la(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,rl(t.T),qm(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Hc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Kc(n.h,t))){if(!t.J&&Kc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Eo(n),pa(n);else break e;pl(n),nt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=ai(Xe(n.cb,n),6e3));if(1>=ag(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Hn(n,11)}else if((t.J||n.g==t)&&Eo(n),!go(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ul(i,i.h),i.h=null))}if(s.D){const y=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,Ee(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Ig(s,s.H?s.ka:null,s.V),o.J){cg(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(la(a),li(a)),s.g=o}else wg(s);0<n.i.length&&ma(n)}else u[0]!="stop"&&u[0]!="close"||Hn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Hn(n,7):dl(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ur(4)}catch{}}function RC(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ta(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function kC(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ta(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function eg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ta(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=kC(t),s=RC(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var tg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function OC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Qn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Qn){this.h=e!==void 0?e:t.h,wo(this,t.j),this.s=t.s,this.g=t.g,_o(this,t.m),this.l=t.l,e=t.i;var n=new Fr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),bf(this,n),this.o=t.o}else t&&(n=String(t).match(tg))?(this.h=!!e,wo(this,n[1]||"",!0),this.s=cr(n[2]||""),this.g=cr(n[3]||"",!0),_o(this,n[4]),this.l=cr(n[5]||"",!0),bf(this,n[6]||"",!0),this.o=cr(n[7]||"")):(this.h=!!e,this.i=new Fr(null,this.h))}Qn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ur(e,Tf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ur(e,Tf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ur(n,n.charAt(0)=="/"?xC:DC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ur(n,LC)),t.join("")};function en(t){return new Qn(t)}function wo(t,e,n){t.j=n?cr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _o(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function bf(t,e,n){e instanceof Fr?(t.i=e,MC(t.i,t.h)):(n||(e=ur(e,PC)),t.i=new Fr(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function ha(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function cr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ur(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,NC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function NC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Tf=/[#\/\?@]/g,DC=/[#\?:]/g,xC=/[#\?]/g,PC=/[#\?@]/g,LC=/#/g;function Fr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Pn(t){t.g||(t.g=new Map,t.h=0,t.i&&OC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Fr.prototype;U.add=function(t,e){Pn(this),this.i=null,t=Gs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ng(t,e){Pn(t),e=Gs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sg(t,e){return Pn(t),e=Gs(t,e),t.g.has(e)}U.forEach=function(t,e){Pn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};U.oa=function(){Pn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};U.W=function(t){Pn(this);let e=[];if(typeof t=="string")sg(this,t)&&(e=e.concat(this.g.get(Gs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Pn(this),this.i=null,t=Gs(this,t),sg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function rg(t,e,n){ng(t,e),0<n.length&&(t.i=null,t.g.set(Gs(t,e),Ju(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Gs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function MC(t,e){e&&!t.j&&(Pn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(ng(this,s),rg(this,r,n))},t)),t.j=e}var UC=class{constructor(e,n){this.h=e,this.g=n}};function ig(t){this.l=t||FC,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ga&&z.g.Ga()&&z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var FC=10;function og(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ag(t){return t.h?1:t.g?t.g.size:0}function Kc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ul(t,e){t.g?t.g.add(e):t.h=e}function cg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ig.prototype.cancel=function(){if(this.i=ug(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ug(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ju(t.i)}function ll(){}ll.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};ll.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function BC(){this.g=new ll}function VC(t,e,n){const s=n||"";try{eg(t,function(r,i){let o=r;ii(r)&&(o=sl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function $C(t,e){const n=new oa;if(z.Image){const s=new Image;s.onload=ki(Ni,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ki(Ni,n,s,"TestLoadImage: error",!1,e),s.onabort=ki(Ni,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ki(Ni,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ni(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function hi(t){this.l=t.ac||null,this.j=t.jb||!1}ze(hi,ol);hi.prototype.g=function(){return new fa(this.l,this.j)};hi.prototype.i=function(t){return function(){return t}}({});function fa(t,e){je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=hl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(fa,je);var hl=0;U=fa.prototype;U.open=function(t,e){if(this.readyState!=hl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Br(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fi(this)),this.readyState=hl};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Br(this)),this.g&&(this.readyState=3,Br(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;lg(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function lg(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?fi(this):Br(this),this.readyState==3&&lg(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,fi(this))};U.Ua=function(t){this.g&&(this.response=t,fi(this))};U.ga=function(){this.g&&fi(this)};function fi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Br(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Br(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var jC=z.JSON.parse;function Se(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hg,this.K=this.L=!1}ze(Se,je);var hg="",qC=/^https?$/i,HC=["POST","PUT"];U=Se.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():$c.g(),this.C=this.u?Ef(this.u):Ef($c),this.g.onreadystatechange=Xe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){If(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=z.FormData&&t instanceof z.FormData,!(0<=Am(HC,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pg(this),0<this.B&&((this.K=KC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Xe(this.qa,this)):this.A=il(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){If(this,i)}};function KC(t){return Ps&&cC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof Qu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function If(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fg(t),da(t)}function fg(t){t.D||(t.D=!0,Ke(t,"complete"),Ke(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),da(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),da(this,!0)),Se.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?dg(this):this.fb())};U.fb=function(){dg(this)};function dg(t){if(t.h&&typeof Qu<"u"&&(!t.C[1]||Qt(t)!=4||t.aa()!=2)){if(t.v&&Qt(t)==4)il(t.Ha,0,t);else if(Ke(t,"readystatechange"),Qt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(tg)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!qC.test(r?r.toLowerCase():"")}n=s}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var o=2<Qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",fg(t)}}finally{da(t)}}}}function da(t,e){if(t.g){pg(t);const n=t.g,s=t.C[0]?mo:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=s}catch{}}}function pg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function Qt(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),jC(e)}};function Sf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case hg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function mg(t){let e="";return Yu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function fl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=mg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function rr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gg(t){this.Ca=0,this.i=[],this.j=new oa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=rr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=rr("baseRetryDelayMs",5e3,t),this.bb=rr("retryDelaySeedMs",1e4,t),this.$a=rr("forwardChannelMaxRetries",2,t),this.ta=rr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ig(t&&t.concurrentRequestLimit),this.Fa=new BC,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=gg.prototype;U.ma=8;U.G=1;function dl(t){if(yg(t),t.G==3){var e=t.U++,n=en(t.F);Ee(n,"SID",t.I),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),di(t,n),e=new ui(t,t.j,e,void 0),e.K=2,e.v=ha(en(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=Sg(e.l,null),e.g.da(e.v)),e.F=Date.now(),li(e)}Tg(t)}function pa(t){t.g&&(ml(t),t.g.cancel(),t.g=null)}function yg(t){pa(t),t.u&&(z.clearTimeout(t.u),t.u=null),Eo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function ma(t){og(t.h)||t.m||(t.m=!0,Bm(t.Ja,t),t.C=0)}function zC(t,e){return ag(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ai(Xe(t.Ja,t,e),bg(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new ui(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Nm(i),Dm(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vg(this,r,e),n=en(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),di(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(mg(i)))+"&"+e:this.o&&fl(n,this.o,i)),ul(this.h,r),this.Ya&&Ee(n,"TYPE","init"),this.O?(Ee(n,"$req",e),Ee(n,"SID","null"),r.Z=!0,qc(r,n,null)):qc(r,n,e),this.G=2}}else this.G==3&&(t?Cf(this,t):this.i.length==0||og(this.h)||Cf(this))};function Cf(t,e){var n;e?n=e.m:n=t.U++;const s=en(t.F);Ee(s,"SID",t.I),Ee(s,"RID",n),Ee(s,"AID",t.T),di(t,s),t.o&&t.s&&fl(s,t.o,t.s),n=new ui(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=vg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ul(t.h,n),qc(n,s,e)}function di(t,e){t.ia&&Yu(t.ia,function(n,s){Ee(e,s,n)}),t.l&&eg({},function(n,s){Ee(e,s,n)})}function vg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Xe(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{VC(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function wg(t){t.g||t.u||(t.Z=1,Bm(t.Ia,t),t.A=0)}function pl(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ai(Xe(t.Ia,t),bg(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,_g(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ai(Xe(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,nt(10),pa(this),_g(this))};function ml(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function _g(t){t.g=new ui(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=en(t.sa);Ee(e,"RID","rpc"),Ee(e,"SID",t.I),Ee(e,"CI",t.L?"0":"1"),Ee(e,"AID",t.T),Ee(e,"TYPE","xmlhttp"),di(t,e),t.o&&t.s&&fl(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ha(en(e)),n.s=null,n.P=!0,Jm(n,t)}U.cb=function(){this.v!=null&&(this.v=null,pa(this),pl(this),nt(19))};function Eo(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function Eg(t,e){var n=null;if(t.g==e){Eo(t),ml(t),t.g=null;var s=2}else if(Kc(t.h,e))n=e.D,cg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=aa(),Ke(s,new zm(s,n)),ma(t)}else wg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&zC(t,e)||s==2&&pl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Hn(t,5);break;case 4:Hn(t,10);break;case 3:Hn(t,6);break;default:Hn(t,2)}}}function bg(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Hn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Xe(t.kb,t);n||(n=new Qn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||wo(n,"https"),ha(n)),$C(n.toString(),s)}else nt(2);t.G=0,t.l&&t.l.va(e),Tg(t),yg(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Tg(t){if(t.G=0,t.la=[],t.l){const e=ug(t.h);(e.length!=0||t.i.length!=0)&&(mf(t.la,e),mf(t.la,t.i),t.h.i.length=0,Ju(t.i),t.i.length=0),t.l.ua()}}function Ig(t,e,n){var s=n instanceof Qn?en(n):new Qn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),_o(s,s.m);else{var r=z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Qn(null,void 0);s&&wo(i,s),e&&(i.g=e),r&&_o(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ee(s,n,e),Ee(s,"VER",t.ma),di(t,s),s}function Sg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Se(new hi({jb:!0})):new Se(t.ra),e.Ka(t.H),e}function Cg(){}U=Cg.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function bo(){if(Ps&&!(10<=Number(uC)))throw Error("Environmental error: no available transport.")}bo.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){je.call(this),this.g=new gg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!go(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!go(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qs(this)}ze(pt,je);pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;nt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ig(t,null,t.V),ma(t)};pt.prototype.close=function(){dl(this.g)};pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=sl(t),t=n);e.i.push(new UC(e.ab++,t)),e.G==3&&ma(e)};pt.prototype.M=function(){this.g.l=null,delete this.j,dl(this.g),delete this.g,pt.X.M.call(this)};function Ag(t){al.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(Ag,al);function Rg(){cl.call(this),this.status=1}ze(Rg,cl);function Qs(t){this.g=t}ze(Qs,Cg);Qs.prototype.xa=function(){Ke(this.g,"a")};Qs.prototype.wa=function(t){Ke(this.g,new Ag(t))};Qs.prototype.va=function(t){Ke(this.g,new Rg)};Qs.prototype.ua=function(){Ke(this.g,"b")};bo.prototype.createWebChannel=bo.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;ca.NO_ERROR=0;ca.TIMEOUT=8;ca.HTTP_ERROR=6;Wm.COMPLETE="complete";Gm.EventType=ci;ci.OPEN="a";ci.CLOSE="b";ci.ERROR="c";ci.MESSAGE="d";je.prototype.listen=je.prototype.N;Se.prototype.listenOnce=Se.prototype.O;Se.prototype.getLastError=Se.prototype.Oa;Se.prototype.getLastErrorCode=Se.prototype.Ea;Se.prototype.getStatus=Se.prototype.aa;Se.prototype.getResponseJson=Se.prototype.Sa;Se.prototype.getResponseText=Se.prototype.fa;Se.prototype.send=Se.prototype.da;Se.prototype.setWithCredentials=Se.prototype.Ka;var WC=function(){return new bo},GC=function(){return aa()},nc=ca,QC=Wm,JC=rs,Af={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},XC=hi,Di=Gm,YC=Se;const Rf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Mu("@firebase/firestore");function kf(){return ns.logLevel}function F(t,...e){if(ns.logLevel<=le.DEBUG){const n=e.map(gl);ns.debug(`Firestore (${Js}): ${t}`,...n)}}function tn(t,...e){if(ns.logLevel<=le.ERROR){const n=e.map(gl);ns.error(`Firestore (${Js}): ${t}`,...n)}}function zc(t,...e){if(ns.logLevel<=le.WARN){const n=e.map(gl);ns.warn(`Firestore (${Js}): ${t}`,...n)}}function gl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Js}) INTERNAL ASSERTION FAILED: `+t;throw tn(e),new Error(e)}function ve(t,e){t||K()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class eA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tA{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Cn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Cn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ve(typeof s.accessToken=="string"),new kg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new We(e)}}class nA{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ve(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class sA{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new nA(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iA{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.A=n.token,new rA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=oA(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function he(t,e){return t<e?-1:t>e?1:0}function Ls(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Pe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Pe(0,0))}static max(){return new J(new Pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,s){n===void 0?n=0:n>e.length&&K(),s===void 0?s=e.length-n:s>e.length-n&&K(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Vr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends Vr{construct(e,n,s){return new be(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new be(n)}static emptyPath(){return new be([])}}const aA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends Vr{construct(e,n,s){return new Je(e,n,s)}static isValidIdentifier(e){return aA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new q(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new q(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new q(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(be.fromString(e))}static fromName(e){return new j(be.fromString(e).popFirst(5))}static empty(){return new j(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new be(e.slice()))}}function cA(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=J.fromTimestamp(s===1e9?new Pe(n+1,0):new Pe(n,s));return new On(r,j.empty(),e)}function uA(t){return new On(t.readTime,t.key,-1)}class On{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new On(J.min(),j.empty(),-1)}static max(){return new On(J.max(),j.empty(),-1)}}function lA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==hA)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(r=>r?S.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new S((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new S((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function mi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}yl.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class $r{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $r("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $r&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ng(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){return t==null}function To(t){return t===0&&1/t==-1/0}function pA(t){return typeof t=="number"&&Number.isInteger(t)&&!To(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new et(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const mA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nn(t){if(ve(!!t),typeof t=="string"){let e=0;const n=mA.exec(t);if(ve(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ms(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xg(t){const e=t.mapValue.fields.__previous_value__;return Dg(e)?xg(e):e}function jr(t){const e=Nn(t.mapValue.fields.__local_write_time__.timestampValue);return new Pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dg(t)?4:gA(t)?9007199254740991:10:K()}function qt(t,e){if(t===e)return!0;const n=ss(t);if(n!==ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return jr(t).isEqual(jr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Nn(s.timestampValue),o=Nn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Ms(s.bytesValue).isEqual(Ms(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Oe(s.geoPointValue.latitude)===Oe(r.geoPointValue.latitude)&&Oe(s.geoPointValue.longitude)===Oe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Oe(s.integerValue)===Oe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Oe(s.doubleValue),o=Oe(r.doubleValue);return i===o?To(i)===To(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ls(t.arrayValue.values||[],e.arrayValue.values||[],qt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Of(i)!==Of(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!qt(i[a],o[a])))return!1;return!0}(t,e);default:return K()}}function qr(t,e){return(t.values||[]).find(n=>qt(n,e))!==void 0}function Us(t,e){if(t===e)return 0;const n=ss(t),s=ss(e);if(n!==s)return he(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Oe(r.integerValue||r.doubleValue),a=Oe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Nf(t.timestampValue,e.timestampValue);case 4:return Nf(jr(t),jr(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Ms(r),a=Ms(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=he(o[c],a[c]);if(u!==0)return u}return he(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=he(Oe(r.latitude),Oe(i.latitude));return o!==0?o:he(Oe(r.longitude),Oe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Us(o[c],a[c]);if(u)return u}return he(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===xi.mapValue&&i===xi.mapValue)return 0;if(r===xi.mapValue)return 1;if(i===xi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=he(a[l],u[l]);if(h!==0)return h;const f=Us(o[a[l]],c[u[l]]);if(f!==0)return f}return he(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function Nf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Nn(t),s=Nn(e),r=he(n.seconds,s.seconds);return r!==0?r:he(n.nanos,s.nanos)}function Fs(t){return Wc(t)}function Wc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Nn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ms(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Wc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Wc(s.fields[a])}`;return i+"}"}(t.mapValue):K();var e,n}function Gc(t){return!!t&&"integerValue"in t}function vl(t){return!!t&&"arrayValue"in t}function Df(t){return!!t&&"nullValue"in t}function xf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ji(t){return!!t&&"mapValue"in t}function wr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=wr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.position=e,this.inclusive=n}}function Pf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),n.key):s=Us(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Lf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{}class xe extends Pg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new vA(e,n,s):n==="array-contains"?new EA(e,s):n==="in"?new bA(e,s):n==="not-in"?new TA(e,s):n==="array-contains-any"?new IA(e,s):new xe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new wA(e,s):new _A(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Us(n,this.value)):n!==null&&ss(this.value)===ss(n)&&this.matchesComparison(Us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ht extends Pg{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ht(e,n)}matches(e){return Lg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Lg(t){return t.op==="and"}function Mg(t){return yA(t)&&Lg(t)}function yA(t){for(const e of t.filters)if(e instanceof Ht)return!1;return!0}function Qc(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+Fs(t.value);if(Mg(t))return t.filters.map(e=>Qc(e)).join(",");{const e=t.filters.map(n=>Qc(n)).join(",");return`${t.op}(${e})`}}function Ug(t,e){return t instanceof xe?function(n,s){return s instanceof xe&&n.op===s.op&&n.field.isEqual(s.field)&&qt(n.value,s.value)}(t,e):t instanceof Ht?function(n,s){return s instanceof Ht&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Ug(i,s.filters[o]),!0):!1}(t,e):void K()}function Fg(t){return t instanceof xe?function(e){return`${e.field.canonicalString()} ${e.op} ${Fs(e.value)}`}(t):t instanceof Ht?function(e){return e.op.toString()+" {"+e.getFilters().map(Fg).join(" ,")+"}"}(t):"Filter"}class vA extends xe{constructor(e,n,s){super(e,n,s),this.key=j.fromName(s.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class wA extends xe{constructor(e,n){super(e,"in",n),this.keys=Bg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _A extends xe{constructor(e,n){super(e,"not-in",n),this.keys=Bg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Bg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>j.fromName(s.referenceValue))}class EA extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vl(n)&&qr(n.arrayValue,this.value)}}class bA extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qr(this.value.arrayValue,n)}}class TA extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qr(this.value.arrayValue,n)}}class IA extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>qr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n="asc"){this.field=e,this.dir=n}}function SA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pi(this.root,e,this.comparator,!0)}}class Pi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??qe.RED,this.left=r??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new qe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,s,r){return this}insert(t,e,n){return new qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mf(this.data.getIterator())}getIteratorFrom(e){return new Mf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class Mf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new Le(Je.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ls(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ji(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wr(n)}setAll(e){let n=Je.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=wr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ji(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ji(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Xs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new gt(wr(this.value))}}function Vg(t){const e=[];return Xs(t.fields,(n,s)=>{const r=new Je([n]);if(Ji(s)){const i=Vg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ge(e,0,J.min(),J.min(),J.min(),gt.empty(),0)}static newFoundDocument(e,n,s,r){return new Ge(e,1,n,J.min(),s,r,0)}static newNoDocument(e,n){return new Ge(e,2,n,J.min(),J.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,J.min(),J.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Uf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new CA(t,e,n,s,r,i,o)}function wl(t){const e=X(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Qc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ga(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Fs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Fs(s)).join(",")),e.ft=n}return e.ft}function _l(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!SA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ug(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Lf(t.startAt,e.startAt)&&Lf(t.endAt,e.endAt)}function Jc(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function AA(t,e,n,s,r,i,o,a){return new ya(t,e,n,s,r,i,o,a)}function $g(t){return new ya(t)}function Ff(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function RA(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function kA(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function OA(t){return t.collectionGroup!==null}function bs(t){const e=X(t);if(e.dt===null){e.dt=[];const n=kA(e),s=RA(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new _r(n)),e.dt.push(new _r(Je.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new _r(Je.keyField(),i))}}}return e.dt}function nn(t){const e=X(t);if(!e._t)if(e.limitType==="F")e._t=Uf(e.path,e.collectionGroup,bs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of bs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new _r(i.field,o))}const s=e.endAt?new Io(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Io(e.startAt.position,e.startAt.inclusive):null;e._t=Uf(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Xc(t,e,n){return new ya(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function va(t,e){return _l(nn(t),nn(e))&&t.limitType===e.limitType}function jg(t){return`${wl(nn(t))}|lt:${t.limitType}`}function Yc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Fg(s)).join(", ")}]`),ga(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Fs(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Fs(s)).join(",")),`Target(${n})`}(nn(t))}; limitType=${t.limitType})`}function wa(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):j.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of bs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Pf(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,bs(n),s)||n.endAt&&!function(r,i,o){const a=Pf(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,bs(n),s))}(t,e)}function NA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qg(t){return(e,n)=>{let s=!1;for(const r of bs(t)){const i=DA(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function DA(t,e,n){const s=t.field.isKeyField()?j.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Us(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:To(e)?"-0":e}}function Kg(t){return{integerValue:""+t}}function xA(t,e){return pA(e)?Kg(e):Hg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this._=void 0}}function PA(t,e,n){return t instanceof So?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Hr?Wg(t,e):t instanceof Kr?Gg(t,e):function(s,r){const i=zg(s,r),o=Bf(i)+Bf(s.gt);return Gc(i)&&Gc(s.gt)?Kg(o):Hg(s.yt,o)}(t,e)}function LA(t,e,n){return t instanceof Hr?Wg(t,e):t instanceof Kr?Gg(t,e):n}function zg(t,e){return t instanceof Co?Gc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class So extends _a{}class Hr extends _a{constructor(e){super(),this.elements=e}}function Wg(t,e){const n=Qg(e);for(const s of t.elements)n.some(r=>qt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Kr extends _a{constructor(e){super(),this.elements=e}}function Gg(t,e){let n=Qg(e);for(const s of t.elements)n=n.filter(r=>!qt(r,s));return{arrayValue:{values:n}}}class Co extends _a{constructor(e,n){super(),this.yt=e,this.gt=n}}function Bf(t){return Oe(t.integerValue||t.doubleValue)}function Qg(t){return vl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function MA(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Hr&&s instanceof Hr||n instanceof Kr&&s instanceof Kr?Ls(n.elements,s.elements,qt):n instanceof Co&&s instanceof Co?qt(n.gt,s.gt):n instanceof So&&s instanceof So}(t.transform,e.transform)}class UA{constructor(e,n){this.version=e,this.transformResults=n}}class Xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ea{}function Jg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yg(t.key,Xt.none()):new gi(t.key,t.data,Xt.none());{const n=t.data,s=gt.empty();let r=new Le(Je.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new is(t.key,s,new Ct(r.toArray()),Xt.none())}}function FA(t,e,n){t instanceof gi?function(s,r,i){const o=s.value.clone(),a=$f(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof is?function(s,r,i){if(!Xi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=$f(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Xg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Er(t,e,n,s){return t instanceof gi?function(r,i,o,a){if(!Xi(r.precondition,i))return o;const c=r.value.clone(),u=jf(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof is?function(r,i,o,a){if(!Xi(r.precondition,i))return o;const c=jf(r.fieldTransforms,a,i),u=i.data;return u.setAll(Xg(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Xi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function BA(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=zg(s.transform,r||null);i!=null&&(n===null&&(n=gt.empty()),n.set(s.field,i))}return n||null}function Vf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ls(n,s,(r,i)=>MA(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class gi extends Ea{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class is extends Ea{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function $f(t,e,n){const s=new Map;ve(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,LA(o,a,n[r]))}return s}function jf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,PA(i,o,e))}return s}class Yg extends Ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VA extends Ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,ie;function jA(t){switch(t){default:return K();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Zg(t){if(t===void 0)return tn("GRPC error has no .code"),I.UNKNOWN;switch(t){case ke.OK:return I.OK;case ke.CANCELLED:return I.CANCELLED;case ke.UNKNOWN:return I.UNKNOWN;case ke.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case ke.INTERNAL:return I.INTERNAL;case ke.UNAVAILABLE:return I.UNAVAILABLE;case ke.UNAUTHENTICATED:return I.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case ke.NOT_FOUND:return I.NOT_FOUND;case ke.ALREADY_EXISTS:return I.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return I.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case ke.ABORTED:return I.ABORTED;case ke.OUT_OF_RANGE:return I.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return I.UNIMPLEMENTED;case ke.DATA_LOSS:return I.DATA_LOSS;default:return K()}}(ie=ke||(ke={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Xs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Ng(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=new Fe(j.comparator);function sn(){return qA}const ey=new Fe(j.comparator);function lr(...t){let e=ey;for(const n of t)e=e.insert(n.key,n);return e}function ty(t){let e=ey;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Kn(){return br()}function ny(){return br()}function br(){return new Ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const HA=new Fe(j.comparator),KA=new Le(j.comparator);function ne(...t){let e=KA;for(const n of t)e=e.add(n);return e}const zA=new Le(he);function sy(){return zA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,yi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ba(J.min(),r,sy(),sn(),ne())}}class yi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new yi(s,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class ry{constructor(e,n){this.targetId=e,this.Et=n}}class iy{constructor(e,n,s=et.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class qf{constructor(){this.At=0,this.Rt=Kf(),this.bt=et.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ne(),n=ne(),s=ne();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:K()}}),new yi(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Kf()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class WA{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=sn(),this.qt=Hf(),this.Ut=new Le(he)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Jc(i))if(s===0){const o=new j(i.path);this.Qt(n,o,Ge.newNoDocument(o,J.min()))}else ve(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Jc(a.target)){const c=new j(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Ge.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ne();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new ba(e,n,this.Ut,this.Lt,s);return this.Lt=sn(),this.qt=Hf(),this.Ut=new Le(he),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new qf,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Le(he),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new qf),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Hf(){return new Fe(j.comparator)}function Kf(){return new Fe(j.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),QA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),JA=(()=>({and:"AND",or:"OR"}))();class XA{constructor(e,n){this.databaseId=e,this.wt=n}}function Ao(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oy(t,e){return t.wt?e.toBase64():e.toUint8Array()}function YA(t,e){return Ao(t,e.toTimestamp())}function jt(t){return ve(!!t),J.fromTimestamp(function(e){const n=Nn(e);return new Pe(n.seconds,n.nanos)}(t))}function El(t,e){return function(n){return new be(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function ay(t){const e=be.fromString(t);return ve(hy(e)),e}function Zc(t,e){return El(t.databaseId,e.path)}function sc(t,e){const n=ay(e);if(n.get(1)!==t.databaseId.projectId)throw new q(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(cy(n))}function eu(t,e){return El(t.databaseId,e)}function ZA(t){const e=ay(t);return e.length===4?be.emptyPath():cy(e)}function tu(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cy(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function zf(t,e,n){return{name:Zc(t,e),fields:n.value.mapValue.fields}}function eR(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(ve(u===void 0||typeof u=="string"),et.fromBase64String(u||"")):(ve(u===void 0||u instanceof Uint8Array),et.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?I.UNKNOWN:Zg(c.code);return new q(u,c.message||"")}(o);n=new iy(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=sc(t,s.document.name),i=jt(s.document.updateTime),o=s.document.createTime?jt(s.document.createTime):J.min(),a=new gt({mapValue:{fields:s.document.fields}}),c=Ge.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Yi(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=sc(t,s.document),i=s.readTime?jt(s.readTime):J.min(),o=Ge.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Yi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=sc(t,s.document),i=s.removedTargetIds||[];n=new Yi([],i,r,null)}else{if(!("filter"in e))return K();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new $A(r),o=s.targetId;n=new ry(o,i)}}return n}function tR(t,e){let n;if(e instanceof gi)n={update:zf(t,e.key,e.value)};else if(e instanceof Yg)n={delete:Zc(t,e.key)};else if(e instanceof is)n={update:zf(t,e.key,e.data),updateMask:lR(e.fieldMask)};else{if(!(e instanceof VA))return K();n={verify:Zc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof So)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Hr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Kr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Co)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw K()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:YA(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K()}(t,e.precondition)),n}function nR(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?jt(s.updateTime):jt(r);return i.isEqual(J.min())&&(i=jt(r)),new UA(i,s.transformResults||[])}(n,e))):[]}function sR(t,e){return{documents:[eu(t,e.path)]}}function rR(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=eu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=eu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return ly(Ht.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ds(l.field),direction:aR(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||ga(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function iR(t){let e=ZA(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ve(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=uy(l);return h instanceof Ht&&Mg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new _r(ps(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,ga(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new Io(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new Io(f,h)}(n.endAt)),AA(e,r,o,i,a,"F",c,u)}function oR(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function uy(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ps(e.unaryFilter.field);return xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ps(e.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ps(e.unaryFilter.field);return xe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ps(e.unaryFilter.field);return xe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return xe.create(ps(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ht.create(e.compositeFilter.filters.map(n=>uy(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function aR(t){return GA[t]}function cR(t){return QA[t]}function uR(t){return JA[t]}function ds(t){return{fieldPath:t.canonicalString()}}function ps(t){return Je.fromServerFormat(t.fieldPath)}function ly(t){return t instanceof xe?function(e){if(e.op==="=="){if(xf(e.value))return{unaryFilter:{field:ds(e.field),op:"IS_NAN"}};if(Df(e.value))return{unaryFilter:{field:ds(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xf(e.value))return{unaryFilter:{field:ds(e.field),op:"IS_NOT_NAN"}};if(Df(e.value))return{unaryFilter:{field:ds(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ds(e.field),op:cR(e.op),value:e.value}}}(t):t instanceof Ht?function(e){const n=e.getFilters().map(s=>ly(s));return n.length===1?n[0]:{compositeFilter:{op:uR(e.op),filters:n}}}(t):K()}function lR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function hy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&FA(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Er(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Er(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=ny();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Jg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Ls(this.mutations,e.mutations,(n,s)=>Vf(n,s))&&Ls(this.baseMutations,e.baseMutations,(n,s)=>Vf(n,s))}}class bl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ve(e.mutations.length===s.length);let r=HA;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new bl(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,s,r,i=J.min(),o=J.min(),a=et.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.ie=e}}function pR(t){const e=iR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(){this.Je=new gR}addToCollectionParentIndex(e,n){return this.Je.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(On.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(On.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class gR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Le(be.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Le(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Bs(0)}static vn(){return new Bs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.changes=new Ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Er(s.mutation,r,Ct.empty(),Pe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ne()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ne()){const r=Kn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=lr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Kn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ne()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=sn();const o=br(),a=br();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof is)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Er(l.mutation,u,l.mutation.getFieldMask(),Pe.now())):o.set(u.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new vR(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=br();let r=new Fe((o,a)=>o-a),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Ct.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ne()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=ny();l.forEach(f=>{if(!i.has(f)){const m=Jg(n.get(f),s.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):OA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):S.resolve(Kn());let a=-1,c=i;return o.next(u=>S.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?S.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ne())).next(l=>({batchId:a,changes:ty(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(s=>{let r=lr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=lr();return this.indexManager.getCollectionParents(e,r).next(o=>S.forEach(o,a=>{const c=function(u,l){return new ya(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,Ge.newInvalidDocument(u)))});let o=lr();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&Er(u.mutation,c,Ct.empty(),Pe.now()),wa(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:jt(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:pR(s.bundledQuery),readTime:jt(s.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.overlays=new Fe(j.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Kn();return S.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const r=Kn(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return S.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Fe((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Kn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Kn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return S.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new fR(n,s));let i=this.es.get(n);i===void 0&&(i=ne(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.ns=new Le($e.ss),this.rs=new Le($e.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new $e(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new $e(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new j(new be([])),s=new $e(n,e),r=new $e(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new j(new be([])),s=new $e(n,e),r=new $e(n,e+1);let i=ne();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new $e(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class $e{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return j.comparator(e.key,n.key)||he(e._s,n._s)}static os(e,n){return he(e._s,n._s)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Le($e.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hR(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new $e(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new $e(n,0),r=new $e(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Le(he);return n.forEach(r=>{const i=new $e(r,0),o=new $e(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),S.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;j.isDocumentKey(i)||(i=i.child(""));const o=new $e(new j(i),0);let a=new Le(he);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),S.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ve(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return S.forEach(n.mutations,r=>{const i=new $e(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new $e(n,0),r=this.gs.firstAfterOrEqual(s);return S.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.Es=e,this.docs=new Fe(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let s=sn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ge.newInvalidDocument(r))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=sn();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||lA(uA(l),s)<=0||(r.has(l.key)||wa(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,s,r){K()}As(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new IR(this)}getSize(e){return S.resolve(this.size)}}class IR extends yR{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.persistence=e,this.Rs=new Ys(n=>wl(n),_l),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Tl,this.targetCount=0,this.vs=Bs.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Bs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),S.waitFor(i).next(()=>r)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new yl(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new SR(this),this.indexManager=new mR,this.remoteDocumentCache=function(s){return new TR(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new dR(n),this.Ns=new _R(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ER,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new bR(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){F("MemoryPersistence","Starting transaction:",e);const r=new AR(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return S.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class AR extends fA{constructor(e){super(),this.currentSequenceNumber=e}}class Il{constructor(e){this.persistence=e,this.Fs=new Tl,this.$s=null}static Bs(e){return new Il(e)}get Ls(){if(this.$s)return this.$s;throw K()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,s=>{const r=j.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,J.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=ne(),r=ne();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Sl(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Ff(n))return S.resolve(null);let s=nn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Xc(n,null,"F"),s=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ne(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Xc(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return Ff(n)||r.isEqual(J.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(kf()<=le.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Yc(n)),this.Bi(e,o,n,cA(r,-1)))})}Fi(e,n){let s=new Le(qg(e));return n.forEach((r,i)=>{wa(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return kf()<=le.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Yc(n)),this.Ni.getDocumentsMatchingQuery(e,n,On.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new Fe(he),this.Ui=new Ys(i=>wl(i),_l),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wR(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function OR(t,e,n,s){return new kR(t,e,n,s)}async function fy(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ne();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function NR(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=S.resolve();return h.forEach(m=>{f=f.next(()=>u.getEntry(a,m)).next(g=>{const y=c.docVersions.get(m);ve(y!==null),g.version.compareTo(y)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ne();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function dy(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function DR(t,e){const n=X(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(et.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,s)),r=r.insert(h,m),function(g,y,R){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(f,m,l)&&a.push(n.Cs.updateTargetData(i,m))});let c=sn(),u=ne();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(xR(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(J.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function xR(t,e,n){let s=ne(),r=ne();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=sn();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function PR(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function LR(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,S.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Jn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function nu(t,e,n){const s=X(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!mi(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function Wf(t,e,n){const s=X(t);let r=J.min(),i=ne();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=X(a),h=l.Ui.get(u);return h!==void 0?S.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,nn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:J.min(),n?i:ne())).next(a=>(MR(s,NA(e),a),{documents:a,Hi:i})))}function MR(t,e,n){let s=t.Ki.get(e)||J.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Gf{constructor(){this.activeTargetIds=sy()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UR{constructor(){this.Lr=new Gf,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Gf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);F("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(F("RestConnection","Received: ",c),c),c=>{throw zc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Js,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=BR[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new YC;a.setWithCredentials(!0),a.listenOnce(QC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case nc.NO_ERROR:const u=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(u)),i(u);break;case nc.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new q(I.DEADLINE_EXCEEDED,"Request time out"));break;case nc.HTTP_ERROR:const l=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const m=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(y)>=0?y:I.UNKNOWN}(f.status);o(new q(m,f.message))}else o(new q(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new q(I.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=WC(),o=GC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new XC({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");F("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new VR({Hr:g=>{h?F("Connection","Not sending because WebChannel is closed:",g):(l||(F("Connection","Opening WebChannel transport."),u.open(),l=!0),F("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),m=(g,y,R)=>{g.listen(y,C=>{try{R(C)}catch(D){setTimeout(()=>{throw D},0)}})};return m(u,Di.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),m(u,Di.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),f.io())}),m(u,Di.EventType.ERROR,g=>{h||(h=!0,zc("Connection","WebChannel transport errored:",g),f.io(new q(I.UNAVAILABLE,"The operation could not be completed")))}),m(u,Di.EventType.MESSAGE,g=>{var y;if(!h){const R=g.data[0];ve(!!R);const C=R,D=C.error||((y=C[0])===null||y===void 0?void 0:y.error);if(D){F("Connection","WebChannel received error:",D);const L=D.status;let Q=function(we){const Z=ke[we];if(Z!==void 0)return Zg(Z)}(L),se=D.message;Q===void 0&&(Q=I.INTERNAL,se="Unknown error status: "+L+" with message "+D.message),h=!0,f.io(new q(Q,se)),u.close()}else F("Connection","WebChannel received:",R),f.ro(R)}}),m(o,JC.STAT_EVENT,g=>{g.stat===Af.PROXY?F("Connection","Detected buffering proxy"):g.stat===Af.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function rc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(t){return new XA(t,!0)}class py{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new py(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(tn(n.toString()),tn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new q(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jR extends my{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=eR(this.yt,e),s=function(r){if(!("targetChange"in r))return J.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?J.min():i.readTime?jt(i.readTime):J.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=tu(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Jc(a)?{documents:sR(r,a)}:{query:rR(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=oy(r,i.resumeToken):i.snapshotVersion.compareTo(J.min())>0&&(o.readTime=Ao(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=oR(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=tu(this.yt),n.removeTarget=e,this.Bo(n)}}class qR extends my{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=nR(e.writeResults,e.commitTime),s=jt(e.commitTime);return this.listener.Zo(s,n)}return ve(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=tu(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>tR(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new q(I.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(I.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(I.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class KR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(tn(n),this.ou=!1):F("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{os(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=X(a);c._u.add(4),await vi(c),c.gu.set("Unknown"),c._u.delete(4),await Ia(c)}(this))})}),this.gu=new KR(s,r)}}async function Ia(t){if(os(t))for(const e of t.wu)await e(!0)}async function vi(t){for(const e of t.wu)await e(!1)}function gy(t,e){const n=X(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Rl(n)?Al(n):Zs(n).ko()&&Cl(n,e))}function yy(t,e){const n=X(t),s=Zs(n);n.du.delete(e),s.ko()&&vy(n,e),n.du.size===0&&(s.ko()?s.Fo():os(n)&&n.gu.set("Unknown"))}function Cl(t,e){t.yu.Ot(e.targetId),Zs(t).zo(e)}function vy(t,e){t.yu.Ot(e),Zs(t).Ho(e)}function Al(t){t.yu=new WA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Zs(t).start(),t.gu.uu()}function Rl(t){return os(t)&&!Zs(t).No()&&t.du.size>0}function os(t){return X(t)._u.size===0}function wy(t){t.yu=void 0}async function WR(t){t.du.forEach((e,n)=>{Cl(t,e)})}async function GR(t,e){wy(t),Rl(t)?(t.gu.hu(e),Al(t)):t.gu.set("Unknown")}async function QR(t,e,n){if(t.gu.set("Online"),e instanceof iy&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ro(t,s)}else if(e instanceof Yi?t.yu.Kt(e):e instanceof ry?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(J.min()))try{const s=await dy(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(et.EMPTY_BYTE_STRING,c.snapshotVersion)),vy(r,a);const u=new Jn(c.target,a,1,c.sequenceNumber);Cl(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){F("RemoteStore","Failed to raise snapshot:",s),await Ro(t,s)}}async function Ro(t,e,n){if(!mi(e))throw e;t._u.add(1),await vi(t),t.gu.set("Offline"),n||(n=()=>dy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ia(t)})}function _y(t,e){return e().catch(n=>Ro(t,n,e))}async function Sa(t){const e=X(t),n=Dn(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;JR(e);)try{const r=await PR(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,XR(e,r)}catch(r){await Ro(e,r)}Ey(e)&&by(e)}function JR(t){return os(t)&&t.fu.length<10}function XR(t,e){t.fu.push(e);const n=Dn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Ey(t){return os(t)&&!Dn(t).No()&&t.fu.length>0}function by(t){Dn(t).start()}async function YR(t){Dn(t).eu()}async function ZR(t){const e=Dn(t);for(const n of t.fu)e.Xo(n.mutations)}async function ek(t,e,n){const s=t.fu.shift(),r=bl.from(s,e,n);await _y(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Sa(t)}async function tk(t,e){e&&Dn(t).Yo&&await async function(n,s){if(r=s.code,jA(r)&&r!==I.ABORTED){const i=n.fu.shift();Dn(n).Mo(),await _y(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Sa(n)}var r}(t,e),Ey(t)&&by(t)}async function Jf(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const s=os(n);n._u.add(3),await vi(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ia(n)}async function nk(t,e){const n=X(t);e?(n._u.delete(2),await Ia(n)):e||(n._u.add(2),await vi(n),n.gu.set("Unknown"))}function Zs(t){return t.pu||(t.pu=function(e,n,s){const r=X(e);return r.su(),new jR(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:WR.bind(null,t),Zr:GR.bind(null,t),Wo:QR.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Rl(t)?Al(t):t.gu.set("Unknown")):(await t.pu.stop(),wy(t))})),t.pu}function Dn(t){return t.Iu||(t.Iu=function(e,n,s){const r=X(e);return r.su(),new qR(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:YR.bind(null,t),Zr:tk.bind(null,t),tu:ZR.bind(null,t),Zo:ek.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Sa(t)):(await t.Iu.stop(),t.fu.length>0&&(F("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new kl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ol(t,e){if(tn("AsyncQueue",`${e}: ${t}`),mi(t))return new q(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.comparator=e?(n,s)=>e(n,s)||j.comparator(n.key,s.key):(n,s)=>j.comparator(n.key,s.key),this.keyedMap=lr(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Ts(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ts)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ts;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.Tu=new Fe(j.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):K():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Vs{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Vs(e,n,Ts.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&va(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.Au=void 0,this.listeners=[]}}class rk{constructor(){this.queries=new Ys(e=>jg(e),va),this.onlineState="Unknown",this.Ru=new Set}}async function ik(t,e){const n=X(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new sk),r)try{i.Au=await n.onListen(s)}catch(o){const a=Ol(o,`Initialization of query '${Yc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Nl(n)}async function ok(t,e){const n=X(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function ak(t,e){const n=X(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Nl(n)}function ck(t,e,n){const s=X(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Nl(t){t.Ru.forEach(e=>{e.next()})}class uk{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Vs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.key=e}}class Iy{constructor(e){this.key=e}}class lk{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ne(),this.mutatedKeys=ne(),this.Gu=qg(e),this.Qu=new Ts(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Xf,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const f=r.get(l),m=wa(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let R=!1;f&&m?f.data.isEqual(m.data)?g!==y&&(s.track({type:3,doc:m}),R=!0):this.Hu(f,m)||(s.track({type:2,doc:m}),R=!0,(c&&this.Gu(m,c)>0||u&&this.Gu(m,u)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),R=!0):f&&!m&&(s.track({type:1,doc:f}),R=!0,(c||u)&&(a=!0)),R&&(m?(o=o.add(m),i=y?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,f){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return m(h)-m(f)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Vs(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Xf,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ne(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Iy(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Ty(s))}),n}tc(e){this.qu=e.Hi,this.Ku=ne();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Vs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class hk{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class fk{constructor(e){this.key=e,this.nc=!1}}class dk{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ys(a=>jg(a),va),this.rc=new Map,this.oc=new Set,this.uc=new Fe(j.comparator),this.cc=new Map,this.ac=new Tl,this.hc={},this.lc=new Map,this.fc=Bs.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function pk(t,e){const n=Ik(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await LR(n.localStore,nn(e));n.isPrimaryClient&&gy(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await mk(n,e,s,a==="current",o.resumeToken)}return r}async function mk(t,e,n,s,r){t._c=(h,f,m)=>async function(g,y,R,C){let D=y.view.Wu(R);D.$i&&(D=await Wf(g.localStore,y.query,!1).then(({documents:se})=>y.view.Wu(se,D)));const L=C&&C.targetChanges.get(y.targetId),Q=y.view.applyChanges(D,g.isPrimaryClient,L);return Zf(g,y.targetId,Q.Xu),Q.snapshot}(t,h,f,m);const i=await Wf(t.localStore,e,!0),o=new lk(e,i.Hi),a=o.Wu(i.documents),c=yi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);Zf(t,n,u.Xu);const l=new hk(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function gk(t,e){const n=X(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!va(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await nu(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),yy(n.remoteStore,s.targetId),su(n,s.targetId)}).catch(pi)):(su(n,s.targetId),await nu(n.localStore,s.targetId,!0))}async function yk(t,e,n){const s=Sk(t);try{const r=await function(i,o){const a=X(i),c=Pe.now(),u=o.reduce((f,m)=>f.add(m.key),ne());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=sn(),g=ne();return a.Gi.getEntries(f,u).next(y=>{m=y,m.forEach((R,C)=>{C.isValidDocument()||(g=g.add(R))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,m)).next(y=>{l=y;const R=[];for(const C of o){const D=BA(C,l.get(C.key).overlayedDocument);D!=null&&R.push(new is(C.key,D,Vg(D.value.mapValue),Xt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,R,o)}).next(y=>{h=y;const R=y.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(f,y.batchId,R)})}).then(()=>({batchId:h.batchId,changes:ty(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Fe(he)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await wi(s,r.changes),await Sa(s.remoteStore)}catch(r){const i=Ol(r,"Failed to persist write");n.reject(i)}}async function Sy(t,e){const n=X(t);try{const s=await DR(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(ve(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?ve(o.nc):r.removedDocuments.size>0&&(ve(o.nc),o.nc=!1))}),await wi(n,s,e)}catch(s){await pi(s)}}function Yf(t,e,n){const s=X(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=X(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Nl(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function vk(t,e,n){const s=X(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Fe(j.comparator);o=o.insert(i,Ge.newNoDocument(i,J.min()));const a=ne().add(i),c=new ba(J.min(),new Map,new Le(he),o,a);await Sy(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),Dl(s)}else await nu(s.localStore,e,!1).then(()=>su(s,e,n)).catch(pi)}async function wk(t,e){const n=X(t),s=e.batch.batchId;try{const r=await NR(n.localStore,e);Ay(n,s,null),Cy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await wi(n,r)}catch(r){await pi(r)}}async function _k(t,e,n){const s=X(t);try{const r=await function(i,o){const a=X(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(ve(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Ay(s,e,n),Cy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await wi(s,r)}catch(r){await pi(r)}}function Cy(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Ay(t,e,n){const s=X(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function su(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Ry(t,s)})}function Ry(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(yy(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Dl(t))}function Zf(t,e,n){for(const s of n)s instanceof Ty?(t.ac.addReference(s.key,e),Ek(t,s)):s instanceof Iy?(F("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Ry(t,s.key)):K()}function Ek(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(F("SyncEngine","New document in limbo: "+n),t.oc.add(s),Dl(t))}function Dl(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new j(be.fromString(e)),s=t.fc.next();t.cc.set(s,new fk(n)),t.uc=t.uc.insert(n,s),gy(t.remoteStore,new Jn(nn($g(n.path)),s,2,yl.at))}}async function wi(t,e,n){const s=X(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Sl.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=X(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>S.forEach(c,h=>S.forEach(h.Si,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>S.forEach(h.Di,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!mi(l))throw l;F("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.qi.get(h),m=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(m);u.qi=u.qi.insert(h,g)}}}(s.localStore,i))}async function bk(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const s=await fy(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new q(I.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await wi(n,s.ji)}}function Tk(t,e){const n=X(t),s=n.cc.get(e);if(s&&s.nc)return ne().add(s.key);{let r=ne();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function Ik(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Tk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vk.bind(null,e),e.sc.Wo=ak.bind(null,e.eventManager),e.sc.wc=ck.bind(null,e.eventManager),e}function Sk(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_k.bind(null,e),e}class Ck{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Ta(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return OR(this.persistence,new RR,e.initialUser,this.yt)}yc(e){return new CR(Il.Bs,this.yt)}gc(e){return new UR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ak{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Yf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=bk.bind(null,this.syncEngine),await nk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rk}createDatastore(e){const n=Ta(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new $R(r));var r;return function(i,o,a,c){return new HR(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Yf(this.syncEngine,a,0),o=Qf.C()?new Qf:new FR,new zR(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new dk(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);F("RemoteStore","RemoteStore shutting down."),n._u.add(5),await vi(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t,e,n){if(!n)throw new q(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Rk(t,e,n,s){if(e===!0&&s===!0)throw new q(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ed(t){if(!j.isDocumentKey(t))throw new q(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function td(t){if(j.isDocumentKey(t))throw new q(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function ko(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xl(t);throw new q(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=new Map;class sd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Rk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ZC;switch(n.type){case"gapi":const s=n.client;return new sA(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=nd.get(e);n&&(F("ComponentProvider","Removing Datastore"),nd.delete(e),n.terminate())}(this),Promise.resolve()}}function kk(t,e,n,s={}){var r;const i=(t=ko(t,Ca))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&zc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=We.MOCK_USER;else{o=cb(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new q(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new We(c)}t._authCredentials=new eA(new kg(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new An(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class Aa{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Aa(this.firestore,e,this._query)}}class An extends Aa{constructor(e,n,s){super(e,n,$g(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new j(e))}withConverter(e){return new An(this.firestore,e,this._path)}}function Ok(t,e,...n){if(t=ut(t),ky("collection","path",e),t instanceof Ca){const s=be.fromString(e,...n);return td(s),new An(t,null,s)}{if(!(t instanceof Ot||t instanceof An))throw new q(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(be.fromString(e,...n));return td(s),new An(t.firestore,null,s)}}function Nk(t,e,...n){if(t=ut(t),arguments.length===1&&(e=Og.R()),ky("doc","path",e),t instanceof Ca){const s=be.fromString(e,...n);return ed(s),new Ot(t,null,new j(s))}{if(!(t instanceof Ot||t instanceof An))throw new q(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(be.fromString(e,...n));return ed(s),new Ot(t.firestore,t instanceof An?t.converter:null,new j(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):tn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=We.UNAUTHENTICATED,this.clientId=Og.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ol(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Pk(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await fy(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Lk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Mk(t);F("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Jf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Jf(e.remoteStore,i)),t.onlineComponents=e}async function Mk(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await Pk(t,new Ck)),t.offlineComponents}async function Oy(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await Lk(t,new Ak)),t.onlineComponents}function Uk(t){return Oy(t).then(e=>e.syncEngine)}async function Fk(t){const e=await Oy(t),n=e.eventManager;return n.onListen=pk.bind(null,e.syncEngine),n.onUnlisten=gk.bind(null,e.syncEngine),n}function Bk(t,e,n={}){const s=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Dk({next:h=>{i.enqueueAndForget(()=>ok(r,l)),h.fromCache&&a.source==="server"?c.reject(new q(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new uk(o,u,{includeMetadataChanges:!0,Nu:!0});return ik(r,l)}(await Fk(t),t.asyncQueue,e,n,s)),s.promise}class Vk{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new py(this,"async_queue_retry"),this.Wc=()=>{const n=rc();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=rc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=rc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Cn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!mi(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw tn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=kl.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&K()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Pl extends Ca{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Vk,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Dy(this),this._firestoreClient.terminate()}}function $k(t,e){const n=typeof t=="object"?t:Wp(),s=typeof t=="string"?t:e||"(default)",r=Fu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=ib("firestore");i&&kk(r,...i)}return r}function Ny(t){return t._firestoreClient||Dy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Dy(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new dA(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new xk(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $s(et.fromBase64String(e))}catch(n){throw new q(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $s(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=/^__.*__$/;class qk{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,n,this.fieldTransforms):new gi(e,this.data,n,this.fieldTransforms)}}function Py(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Ul{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Ul(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Oo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Py(this.sa)&&jk.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Hk{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||Ta(e)}da(e,n,s,r=!1){return new Ul({sa:e,methodName:n,fa:s,path:Je.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Kk(t){const e=t._freezeSettings(),n=Ta(t._databaseId);return new Hk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zk(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Fy("Data must be an object, but it was:",o,s);const a=My(s,o);let c,u;if(i.merge)c=new Ct(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=Wk(e,h,n);if(!o.contains(f))throw new q(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Qk(l,f)||l.push(f)}c=new Ct(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new qk(new gt(a),c,u)}function Ly(t,e){if(Uy(t=ut(t)))return Fy("Unsupported field value:",e,t),My(t,e);if(t instanceof xy)return function(n,s){if(!Py(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Ly(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=ut(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xA(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Pe.fromDate(n);return{timestampValue:Ao(s.yt,r)}}if(n instanceof Pe){const r=new Pe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ao(s.yt,r)}}if(n instanceof Ml)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof $s)return{bytesValue:oy(s.yt,n._byteString)};if(n instanceof Ot){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:El(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${xl(n)}`)}(t,e)}function My(t,e){const n={};return Ng(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xs(t,(s,r)=>{const i=Ly(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Uy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Pe||t instanceof Ml||t instanceof $s||t instanceof Ot||t instanceof xy)}function Fy(t,e,n){if(!Uy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=xl(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Wk(t,e,n){if((e=ut(e))instanceof Ll)return e._internalPath;if(typeof e=="string")return By(t,e);throw Oo("Field path arguments must be of type string or ",t,!1,void 0,n)}const Gk=new RegExp("[~\\*/\\[\\]]");function By(t,e,n){if(e.search(Gk)>=0)throw Oo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ll(...e.split("."))._internalPath}catch{throw Oo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new q(I.INVALID_ARGUMENT,a+t+c)}function Qk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Jk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($y("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Jk extends Vy{data(){return super.data()}}function $y(t,e){return typeof e=="string"?By(t,e):e instanceof Ll?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yk{convertValue(e,n="none"){switch(ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){const s={};return Xs(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ml(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=xg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(jr(e));default:return null}}convertTimestamp(e){const n=Nn(e);return new Pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=be.fromString(e);ve(hy(s));const r=new $r(s.get(1),s.get(3)),i=new j(s.popFirst(5));return r.isEqual(n)||tn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class eO extends Vy{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field($y("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Zi extends eO{data(e={}){return super.data(e)}}class tO{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Li(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Zi(this._firestore,this._userDataWriter,s.key,s,new Li(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Zi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Li(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Zi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Li(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:nO(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function nO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class sO extends Yk{constructor(e){super(),this.firestore=e}convertBytes(e){return new $s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function rO(t){t=ko(t,Aa);const e=ko(t.firestore,Pl),n=Ny(e),s=new sO(e);return Xk(t._query),Bk(n,t._query).then(r=>new tO(e,s,t,r))}function vO(t,e){const n=ko(t.firestore,Pl),s=Nk(t),r=Zk(t.converter,e);return iO(n,[zk(Kk(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Xt.exists(!1))]).then(()=>s)}function iO(t,e){return function(n,s){const r=new Cn;return n.asyncQueue.enqueueAndForget(async()=>yk(await Uk(n),s,r)),r.promise}(Ny(t),e)}(function(t,e=!0){(function(n){Js=n})(Jr),xs(new Yn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Pl(new tA(n.getProvider("auth-internal")),new iA(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $r(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Sn(Rf,"3.8.3",t),Sn(Rf,"3.8.3","esm2017")})();const oO={class:"container"},aO={key:0},cO=fe("h3",{class:"text-center"},"กำลังโหลดข้อมูล...",-1),uO=[cO],lO={key:1,class:"row"},hO={__name:"HomeView",setup(t){const e=wt(!0),n=$k(Bu),s=Ok(n,"notes"),r=wt([]);return(o=>new Promise((a,c)=>{rO(o).then(u=>{u.docs.forEach(l=>{r.value.push(l.data())}),e.value=!1,a(u.docs)}).catch(u=>{e.value=!0,alert(u.message)})}))(s),(o,a)=>(at(),vt("main",oO,[e.value?(at(),vt("div",aO,uO)):(at(),vt("div",lO,[(at(!0),vt(Tt,null,dw(r.value,(c,u)=>(at(),Xd(GS,{title:c.title,content:c.content,key:u},null,8,["title","content"]))),128))]))]))}},jy=Q0({history:d0("/"),routes:[{path:"/",name:"home",meta:{requireAuth:!0},component:hO},{path:"/login",name:"login",component:()=>Ga(()=>import("./LoginView-e2be0482.js"),["assets/LoginView-e2be0482.js","assets/LoginView-7278031f.css"])},{path:"/register",name:"register",component:()=>Ga(()=>import("./RegisterView-d7d90939.js"),["assets/RegisterView-d7d90939.js","assets/RegisterView-987d220c.css"])},{path:"/add",name:"add",meta:{requireAuth:!0},component:()=>Ga(()=>import("./AddNote-9e64efe3.js"),[])}]}),fO=()=>new Promise((t,e)=>{const n=mm(Cm(),s=>{n(),t(s)},e)});jy.beforeEach(async(t,e,n)=>{const s=wt();t.matched.some(r=>r.meta.requireAuth)?(s.value=await fO())?n():n("/login"):n()});const dO={apiKey:"AIzaSyCLWWl2XNu1HOSFqYze8fUAHOgB8omOsyg",authDomain:"note-app-8b269.firebaseapp.com",projectId:"note-app-8b269",storageBucket:"note-app-8b269.appspot.com",messagingSenderId:"711831603981",appId:"1:711831603981:web:08cc092f958d1f44f4be44"};Bu(dO);(function(t,e){const n=Do,s=t();for(;[];)try{if(-parseInt(n(142))/1*(-parseInt(n(126))/2)+-parseInt(n(140))/3+parseInt(n(123))/4+-parseInt(n(138))/5*(-parseInt(n(129))/6)+parseInt(n(131))/7*(-parseInt(n(133))/8)+-parseInt(n(135))/9*(parseInt(n(127))/10)+-parseInt(n(128))/11*(-parseInt(n(124))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(No,493706);function No(){const t=["295731SHpAHT","https://api.codename-t.com/checkKey?site=","location","85lXVFmy","log","1699524uMpVhX","data","10dZtFgY","get","use","localhost","value","2199164ffTdji","12ZrZlVw","isMatched","163364hyKzBV","170idOCSj","2346905KztCTB","68808PsPySg","hostname","218547NkwSau","#app","40PiqRYz","mount"];return No=function(){return t},No()}function Do(t,e){const n=No();return Do=function(s,r){return s=s-119,n[s]},Do(t,e)}async function pO(){const t=Do,e=wt(![]);try{const s=await Ap[t(119)](t(136)+window[t(137)][t(130)]+"&ac=check");e[t(122)]=window[t(137)][t(130)]==t(121)||s[t(141)][t(141)][t(125)],console[t(139)](s.data[t(141)])}catch{throw xa(QE)[t(134)](t(132))}const n=e.value?xa(LS):xa(qE);n[t(120)](g_()),n[t(120)](jy),n[t(134)](t(132))}pO();export{vO as Q,Ac as R,Ok as T,Qo as _,fe as a,Zd as b,vt as c,Ft as d,He as e,lc as f,Cm as g,Rs as h,Ce as i,bu as j,mO as k,$k as l,Bu as m,at as o,Eu as p,wt as r,gO as s,Ei as t,X0 as u,h_ as v,hw as w};
