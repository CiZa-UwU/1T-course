(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function zo(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Go(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Te(s)?_d(s):Go(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Te(t))return t;if(ce(t))return t}}const Ed=/;(?![^(]*\))/g,Td=/:([^]+)/,bd=/\/\*.*?\*\//gs;function _d(t){const e={};return t.replace(bd,"").split(Ed).forEach(n=>{if(n){const s=n.split(Td);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function In(t){let e="";if(Te(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=In(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Id="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cd=zo(Id);function Yu(t){return!!t||t===""}const Sd=t=>Te(t)?t:t==null?"":$(t)||ce(t)&&(t.toString===el||!H(t.toString))?JSON.stringify(t,Xu,2):String(t),Xu=(t,e)=>e&&e.__v_isRef?Xu(t,e.value):Sn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Ju(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!$(e)&&!tl(e)?String(e):e,ie={},Cn=[],rt=()=>{},Ad=()=>!1,Dd=/^on[^a-z]/,$r=t=>Dd.test(t),Wo=t=>t.startsWith("onUpdate:"),Fe=Object.assign,Qo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xd=Object.prototype.hasOwnProperty,Q=(t,e)=>xd.call(t,e),$=Array.isArray,Sn=t=>qr(t)==="[object Map]",Ju=t=>qr(t)==="[object Set]",H=t=>typeof t=="function",Te=t=>typeof t=="string",Yo=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",Zu=t=>ce(t)&&H(t.then)&&H(t.catch),el=Object.prototype.toString,qr=t=>el.call(t),Nd=t=>qr(t).slice(8,-1),tl=t=>qr(t)==="[object Object]",Xo=t=>Te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,lr=zo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},kd=/-(\w)/g,On=jr(t=>t.replace(kd,(e,n)=>n?n.toUpperCase():"")),Rd=/\B([A-Z])/g,Kn=jr(t=>t.replace(Rd,"-$1").toLowerCase()),nl=jr(t=>t.charAt(0).toUpperCase()+t.slice(1)),xi=jr(t=>t?`on${nl(t)}`:""),gs=(t,e)=>!Object.is(t,e),hr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},wr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Zi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let vc;const Od=()=>vc||(vc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let tt;class Md{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=tt,!e&&tt&&(this.index=(tt.scopes||(tt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=tt;try{return tt=this,e()}finally{tt=n}}}on(){tt=this}off(){tt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ld(t,e=tt){e&&e.active&&e.effects.push(t)}function Fd(){return tt}const Jo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},sl=t=>(t.w&Pt)>0,rl=t=>(t.n&Pt)>0,Pd=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pt},Vd=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];sl(r)&&!rl(r)?r.delete(t):e[n++]=r,r.w&=~Pt,r.n&=~Pt}e.length=n}},eo=new WeakMap;let rs=0,Pt=1;const to=30;let nt;const rn=Symbol(""),no=Symbol("");class Zo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ld(this,s)}run(){if(!this.active)return this.fn();let e=nt,n=kt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=nt,nt=this,kt=!0,Pt=1<<++rs,rs<=to?Pd(this):wc(this),this.fn()}finally{rs<=to&&Vd(this),Pt=1<<--rs,nt=this.parent,kt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){nt===this?this.deferStop=!0:this.active&&(wc(this),this.onStop&&this.onStop(),this.active=!1)}}function wc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let kt=!0;const il=[];function zn(){il.push(kt),kt=!1}function Gn(){const t=il.pop();kt=t===void 0?!0:t}function He(t,e,n){if(kt&&nt){let s=eo.get(t);s||eo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Jo()),ol(r)}}function ol(t,e){let n=!1;rs<=to?rl(t)||(t.n|=Pt,n=!sl(t)):n=!t.has(nt),n&&(t.add(nt),nt.deps.push(t))}function bt(t,e,n,s,r,i){const o=eo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const c=Number(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Xo(n)&&a.push(o.get("length")):(a.push(o.get(rn)),Sn(t)&&a.push(o.get(no)));break;case"delete":$(t)||(a.push(o.get(rn)),Sn(t)&&a.push(o.get(no)));break;case"set":Sn(t)&&a.push(o.get(rn));break}if(a.length===1)a[0]&&so(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);so(Jo(c))}}function so(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&Ec(s);for(const s of n)s.computed||Ec(s)}function Ec(t,e){(t!==nt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ud=zo("__proto__,__v_isRef,__isVue"),al=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yo)),Bd=ea(),$d=ea(!1,!0),qd=ea(!0),Tc=jd();function jd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Y(this);for(let i=0,o=this.length;i<o;i++)He(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Y)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){zn();const s=Y(this)[e].apply(this,n);return Gn(),s}}),t}function Hd(t){const e=Y(this);return He(e,"has",t),e.hasOwnProperty(t)}function ea(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?op:fl:e?hl:ll).get(s))return s;const o=$(s);if(!t){if(o&&Q(Tc,r))return Reflect.get(Tc,r,i);if(r==="hasOwnProperty")return Hd}const a=Reflect.get(s,r,i);return(Yo(r)?al.has(r):Ud(r))||(t||He(s,"get",r),e)?a:Oe(a)?o&&Xo(r)?a:a.value:ce(a)?t?dl(a):sa(a):a}}const Kd=cl(),zd=cl(!0);function cl(t=!1){return function(n,s,r,i){let o=n[s];if(Mn(o)&&Oe(o)&&!Oe(r))return!1;if(!t&&(!Er(r)&&!Mn(r)&&(o=Y(o),r=Y(r)),!$(n)&&Oe(o)&&!Oe(r)))return o.value=r,!0;const a=$(n)&&Xo(s)?Number(s)<n.length:Q(n,s),c=Reflect.set(n,s,r,i);return n===Y(i)&&(a?gs(r,o)&&bt(n,"set",s,r):bt(n,"add",s,r)),c}}function Gd(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&bt(t,"delete",e,void 0),s}function Wd(t,e){const n=Reflect.has(t,e);return(!Yo(e)||!al.has(e))&&He(t,"has",e),n}function Qd(t){return He(t,"iterate",$(t)?"length":rn),Reflect.ownKeys(t)}const ul={get:Bd,set:Kd,deleteProperty:Gd,has:Wd,ownKeys:Qd},Yd={get:qd,set(t,e){return!0},deleteProperty(t,e){return!0}},Xd=Fe({},ul,{get:$d,set:zd}),ta=t=>t,Hr=t=>Reflect.getPrototypeOf(t);function Js(t,e,n=!1,s=!1){t=t.__v_raw;const r=Y(t),i=Y(e);n||(e!==i&&He(r,"get",e),He(r,"get",i));const{has:o}=Hr(r),a=s?ta:n?ia:ms;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Zs(t,e=!1){const n=this.__v_raw,s=Y(n),r=Y(t);return e||(t!==r&&He(s,"has",t),He(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function er(t,e=!1){return t=t.__v_raw,!e&&He(Y(t),"iterate",rn),Reflect.get(t,"size",t)}function bc(t){t=Y(t);const e=Y(this);return Hr(e).has.call(e,t)||(e.add(t),bt(e,"add",t,t)),this}function _c(t,e){e=Y(e);const n=Y(this),{has:s,get:r}=Hr(n);let i=s.call(n,t);i||(t=Y(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?gs(e,o)&&bt(n,"set",t,e):bt(n,"add",t,e),this}function Ic(t){const e=Y(this),{has:n,get:s}=Hr(e);let r=n.call(e,t);r||(t=Y(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&bt(e,"delete",t,void 0),i}function Cc(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&bt(t,"clear",void 0,void 0),n}function tr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Y(o),c=e?ta:t?ia:ms;return!t&&He(a,"iterate",rn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function nr(t,e,n){return function(...s){const r=this.__v_raw,i=Y(r),o=Sn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?ta:e?ia:ms;return!e&&He(i,"iterate",c?no:rn),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[l(f[0]),l(f[1])]:l(f),done:p}},[Symbol.iterator](){return this}}}}function xt(t){return function(...e){return t==="delete"?!1:this}}function Jd(){const t={get(i){return Js(this,i)},get size(){return er(this)},has:Zs,add:bc,set:_c,delete:Ic,clear:Cc,forEach:tr(!1,!1)},e={get(i){return Js(this,i,!1,!0)},get size(){return er(this)},has:Zs,add:bc,set:_c,delete:Ic,clear:Cc,forEach:tr(!1,!0)},n={get(i){return Js(this,i,!0)},get size(){return er(this,!0)},has(i){return Zs.call(this,i,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:tr(!0,!1)},s={get(i){return Js(this,i,!0,!0)},get size(){return er(this,!0)},has(i){return Zs.call(this,i,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:tr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=nr(i,!1,!1),n[i]=nr(i,!0,!1),e[i]=nr(i,!1,!0),s[i]=nr(i,!0,!0)}),[t,n,e,s]}const[Zd,ep,tp,np]=Jd();function na(t,e){const n=e?t?np:tp:t?ep:Zd;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Q(n,r)&&r in s?n:s,r,i)}const sp={get:na(!1,!1)},rp={get:na(!1,!0)},ip={get:na(!0,!1)},ll=new WeakMap,hl=new WeakMap,fl=new WeakMap,op=new WeakMap;function ap(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cp(t){return t.__v_skip||!Object.isExtensible(t)?0:ap(Nd(t))}function sa(t){return Mn(t)?t:ra(t,!1,ul,sp,ll)}function up(t){return ra(t,!1,Xd,rp,hl)}function dl(t){return ra(t,!0,Yd,ip,fl)}function ra(t,e,n,s,r){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=cp(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function An(t){return Mn(t)?An(t.__v_raw):!!(t&&t.__v_isReactive)}function Mn(t){return!!(t&&t.__v_isReadonly)}function Er(t){return!!(t&&t.__v_isShallow)}function pl(t){return An(t)||Mn(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function gl(t){return wr(t,"__v_skip",!0),t}const ms=t=>ce(t)?sa(t):t,ia=t=>ce(t)?dl(t):t;function ml(t){kt&&nt&&(t=Y(t),ol(t.dep||(t.dep=Jo())))}function yl(t,e){t=Y(t);const n=t.dep;n&&so(n)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function Sc(t){return lp(t,!1)}function lp(t,e){return Oe(t)?t:new hp(t,e)}class hp{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:ms(e)}get value(){return ml(this),this._value}set value(e){const n=this.__v_isShallow||Er(e)||Mn(e);e=n?e:Y(e),gs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ms(e),yl(this))}}function fp(t){return Oe(t)?t.value:t}const dp={get:(t,e,n)=>fp(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Oe(r)&&!Oe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function vl(t){return An(t)?t:new Proxy(t,dp)}var wl;class pp{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[wl]=!1,this._dirty=!0,this.effect=new Zo(e,()=>{this._dirty||(this._dirty=!0,yl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Y(this);return ml(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}wl="__v_isReadonly";function gp(t,e,n=!1){let s,r;const i=H(t);return i?(s=t,r=rt):(s=t.get,r=t.set),new pp(s,r,i||!r,n)}function Rt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Kr(i,e,n)}return r}function Je(t,e,n,s){if(H(t)){const i=Rt(t,e,n,s);return i&&Zu(i)&&i.catch(o=>{Kr(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Je(t[i],e,n,s));return r}function Kr(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Rt(c,null,10,[t,o,a]);return}}mp(t,n,r,s)}function mp(t,e,n,s=!0){console.error(t)}let ys=!1,ro=!1;const ke=[];let ft=0;const Dn=[];let wt=null,Xt=0;const El=Promise.resolve();let oa=null;function yp(t){const e=oa||El;return t?e.then(this?t.bind(this):t):e}function vp(t){let e=ft+1,n=ke.length;for(;e<n;){const s=e+n>>>1;vs(ke[s])<t?e=s+1:n=s}return e}function aa(t){(!ke.length||!ke.includes(t,ys&&t.allowRecurse?ft+1:ft))&&(t.id==null?ke.push(t):ke.splice(vp(t.id),0,t),Tl())}function Tl(){!ys&&!ro&&(ro=!0,oa=El.then(_l))}function wp(t){const e=ke.indexOf(t);e>ft&&ke.splice(e,1)}function Ep(t){$(t)?Dn.push(...t):(!wt||!wt.includes(t,t.allowRecurse?Xt+1:Xt))&&Dn.push(t),Tl()}function Ac(t,e=ys?ft+1:0){for(;e<ke.length;e++){const n=ke[e];n&&n.pre&&(ke.splice(e,1),e--,n())}}function bl(t){if(Dn.length){const e=[...new Set(Dn)];if(Dn.length=0,wt){wt.push(...e);return}for(wt=e,wt.sort((n,s)=>vs(n)-vs(s)),Xt=0;Xt<wt.length;Xt++)wt[Xt]();wt=null,Xt=0}}const vs=t=>t.id==null?1/0:t.id,Tp=(t,e)=>{const n=vs(t)-vs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function _l(t){ro=!1,ys=!0,ke.sort(Tp);const e=rt;try{for(ft=0;ft<ke.length;ft++){const n=ke[ft];n&&n.active!==!1&&Rt(n,null,14)}}finally{ft=0,ke.length=0,bl(),ys=!1,oa=null,(ke.length||Dn.length)&&_l()}}function bp(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ie;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[l]||ie;p&&(r=n.map(m=>Te(m)?m.trim():m)),f&&(r=n.map(Zi))}let a,c=s[a=xi(e)]||s[a=xi(On(e))];!c&&i&&(c=s[a=xi(Kn(e))]),c&&Je(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Je(u,t,6,r)}}function Il(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!H(t)){const c=u=>{const l=Il(u,e,!0);l&&(a=!0,Fe(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ce(t)&&s.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):Fe(o,i),ce(t)&&s.set(t,o),o)}function zr(t,e){return!t||!$r(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,Kn(e))||Q(t,e))}let Xe=null,Cl=null;function Tr(t){const e=Xe;return Xe=t,Cl=t&&t.type.__scopeId||null,e}function _p(t,e=Xe,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Fc(-1);const i=Tr(e);let o;try{o=t(...r)}finally{Tr(i),s._d&&Fc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ni(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:f,data:p,setupState:m,ctx:C,inheritAttrs:b}=t;let L,j;const Z=Tr(t);try{if(n.shapeFlag&4){const ee=r||s;L=ht(l.call(ee,ee,f,i,m,p,C)),j=c}else{const ee=e;L=ht(ee.length>1?ee(i,{attrs:c,slots:a,emit:u}):ee(i,null)),j=e.props?c:Ip(c)}}catch(ee){ls.length=0,Kr(ee,t,1),L=on(Tt)}let V=L;if(j&&b!==!1){const ee=Object.keys(j),{shapeFlag:fe}=V;ee.length&&fe&7&&(o&&ee.some(Wo)&&(j=Cp(j,o)),V=Vt(V,j))}return n.dirs&&(V=Vt(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),L=V,Tr(Z),L}const Ip=t=>{let e;for(const n in t)(n==="class"||n==="style"||$r(n))&&((e||(e={}))[n]=t[n]);return e},Cp=(t,e)=>{const n={};for(const s in t)(!Wo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Sp(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Dc(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let f=0;f<l.length;f++){const p=l[f];if(o[p]!==s[p]&&!zr(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Dc(s,o,u):!0:!!o;return!1}function Dc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!zr(n,i))return!0}return!1}function Ap({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Dp=t=>t.__isSuspense;function xp(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Ep(t)}function Np(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function fr(t,e,n=!1){const s=ye||Xe;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&H(e)?e.call(s.proxy):e}}const sr={};function ki(t,e,n){return Sl(t,e,n)}function Sl(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ie){const a=Fd()===(ye==null?void 0:ye.scope)?ye:null;let c,u=!1,l=!1;if(Oe(t)?(c=()=>t.value,u=Er(t)):An(t)?(c=()=>t,s=!0):$(t)?(l=!0,u=t.some(V=>An(V)||Er(V)),c=()=>t.map(V=>{if(Oe(V))return V.value;if(An(V))return en(V);if(H(V))return Rt(V,a,2)})):H(t)?e?c=()=>Rt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Je(t,a,3,[p])}:c=rt,e&&s){const V=c;c=()=>en(V())}let f,p=V=>{f=j.onStop=()=>{Rt(V,a,4)}},m;if(Es)if(p=rt,e?n&&Je(e,a,3,[c(),l?[]:void 0,p]):c(),r==="sync"){const V=Dg();m=V.__watcherHandles||(V.__watcherHandles=[])}else return rt;let C=l?new Array(t.length).fill(sr):sr;const b=()=>{if(j.active)if(e){const V=j.run();(s||u||(l?V.some((ee,fe)=>gs(ee,C[fe])):gs(V,C)))&&(f&&f(),Je(e,a,3,[V,C===sr?void 0:l&&C[0]===sr?[]:C,p]),C=V)}else j.run()};b.allowRecurse=!!e;let L;r==="sync"?L=b:r==="post"?L=()=>$e(b,a&&a.suspense):(b.pre=!0,a&&(b.id=a.uid),L=()=>aa(b));const j=new Zo(c,L);e?n?b():C=j.run():r==="post"?$e(j.run.bind(j),a&&a.suspense):j.run();const Z=()=>{j.stop(),a&&a.scope&&Qo(a.scope.effects,j)};return m&&m.push(Z),Z}function kp(t,e,n){const s=this.proxy,r=Te(t)?t.includes(".")?Al(s,t):()=>s[t]:t.bind(s,s);let i;H(e)?i=e:(i=e.handler,n=e);const o=ye;Ln(this);const a=Sl(r,i.bind(s),n);return o?Ln(o):an(),a}function Al(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function en(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))en(t.value,e);else if($(t))for(let n=0;n<t.length;n++)en(t[n],e);else if(Ju(t)||Sn(t))t.forEach(n=>{en(n,e)});else if(tl(t))for(const n in t)en(t[n],e);return t}function Rp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ca(()=>{t.isMounted=!0}),kl(()=>{t.isUnmounting=!0}),t}const Qe=[Function,Array],Op={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qe,onEnter:Qe,onAfterEnter:Qe,onEnterCancelled:Qe,onBeforeLeave:Qe,onLeave:Qe,onAfterLeave:Qe,onLeaveCancelled:Qe,onBeforeAppear:Qe,onAppear:Qe,onAfterAppear:Qe,onAppearCancelled:Qe},setup(t,{slots:e}){const n=Eg(),s=Rp();let r;return()=>{const i=e.default&&xl(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const b of i)if(b.type!==Tt){o=b;break}}const a=Y(t),{mode:c}=a;if(s.isLeaving)return Ri(o);const u=xc(o);if(!u)return Ri(o);const l=io(u,a,s,n);oo(u,l);const f=n.subTree,p=f&&xc(f);let m=!1;const{getTransitionKey:C}=u.type;if(C){const b=C();r===void 0?r=b:b!==r&&(r=b,m=!0)}if(p&&p.type!==Tt&&(!Jt(u,p)||m)){const b=io(p,a,s,n);if(oo(p,b),c==="out-in")return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ri(o);c==="in-out"&&u.type!==Tt&&(b.delayLeave=(L,j,Z)=>{const V=Dl(s,p);V[String(p.key)]=p,L._leaveCb=()=>{j(),L._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=Z})}return o}}},Mp=Op;function Dl(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function io(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:C,onBeforeAppear:b,onAppear:L,onAfterAppear:j,onAppearCancelled:Z}=e,V=String(t.key),ee=Dl(n,t),fe=(K,_e)=>{K&&Je(K,s,9,_e)},Dt=(K,_e)=>{const ue=_e[1];fe(K,_e),$(K)?K.every(Ke=>Ke.length<=1)&&ue():K.length<=1&&ue()},Ze={mode:i,persisted:o,beforeEnter(K){let _e=a;if(!n.isMounted)if(r)_e=b||a;else return;K._leaveCb&&K._leaveCb(!0);const ue=ee[V];ue&&Jt(t,ue)&&ue.el._leaveCb&&ue.el._leaveCb(),fe(_e,[K])},enter(K){let _e=c,ue=u,Ke=l;if(!n.isMounted)if(r)_e=L||c,ue=j||u,Ke=Z||l;else return;let at=!1;const yt=K._enterCb=ts=>{at||(at=!0,ts?fe(Ke,[K]):fe(ue,[K]),Ze.delayedLeave&&Ze.delayedLeave(),K._enterCb=void 0)};_e?Dt(_e,[K,yt]):yt()},leave(K,_e){const ue=String(t.key);if(K._enterCb&&K._enterCb(!0),n.isUnmounting)return _e();fe(f,[K]);let Ke=!1;const at=K._leaveCb=yt=>{Ke||(Ke=!0,_e(),yt?fe(C,[K]):fe(m,[K]),K._leaveCb=void 0,ee[ue]===t&&delete ee[ue])};ee[ue]=t,p?Dt(p,[K,at]):at()},clone(K){return io(K,e,n,s)}};return Ze}function Ri(t){if(Gr(t))return t=Vt(t),t.children=null,t}function xc(t){return Gr(t)?t.children?t.children[0]:void 0:t}function oo(t,e){t.shapeFlag&6&&t.component?oo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function xl(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ye?(o.patchFlag&128&&r++,s=s.concat(xl(o.children,e,a))):(e||o.type!==Tt)&&s.push(a!=null?Vt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}const dr=t=>!!t.type.__asyncLoader,Gr=t=>t.type.__isKeepAlive;function Lp(t,e){Nl(t,"a",e)}function Fp(t,e){Nl(t,"da",e)}function Nl(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Wr(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Gr(r.parent.vnode)&&Pp(s,e,n,r),r=r.parent}}function Pp(t,e,n,s){const r=Wr(e,t,s,!0);Rl(()=>{Qo(s[e],r)},n)}function Wr(t,e,n=ye,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;zn(),Ln(n);const a=Je(e,n,t,o);return an(),Gn(),a});return s?r.unshift(i):r.push(i),i}}const At=t=>(e,n=ye)=>(!Es||t==="sp")&&Wr(t,(...s)=>e(...s),n),Vp=At("bm"),ca=At("m"),Up=At("bu"),Bp=At("u"),kl=At("bum"),Rl=At("um"),$p=At("sp"),qp=At("rtg"),jp=At("rtc");function Hp(t,e=ye){Wr("ec",t,e)}function Kp(t,e){const n=Xe;if(n===null)return t;const s=Xr(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=ie]=e[i];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&en(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Gt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(zn(),Je(c,n,8,[t.el,a,t,e]),Gn())}}const zp=Symbol();function Gp(t,e,n,s){let r;const i=n&&n[s];if($(t)||Te(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ce(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const ao=t=>t?jl(t)?Xr(t)||t.proxy:ao(t.parent):null,us=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ao(t.parent),$root:t=>ao(t.root),$emit:t=>t.emit,$options:t=>ua(t),$forceUpdate:t=>t.f||(t.f=()=>aa(t.update)),$nextTick:t=>t.n||(t.n=yp.bind(t.proxy)),$watch:t=>kp.bind(t)}),Oi=(t,e)=>t!==ie&&!t.__isScriptSetup&&Q(t,e),Wp={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Oi(s,e))return o[e]=1,s[e];if(r!==ie&&Q(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&Q(u,e))return o[e]=3,i[e];if(n!==ie&&Q(n,e))return o[e]=4,n[e];co&&(o[e]=0)}}const l=us[e];let f,p;if(l)return e==="$attrs"&&He(t,"get",e),l(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ie&&Q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Q(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Oi(r,e)?(r[e]=n,!0):s!==ie&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ie&&Q(t,o)||Oi(e,o)||(a=i[0])&&Q(a,o)||Q(s,o)||Q(us,o)||Q(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let co=!0;function Qp(t){const e=ua(t),n=t.proxy,s=t.ctx;co=!1,e.beforeCreate&&Nc(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:f,mounted:p,beforeUpdate:m,updated:C,activated:b,deactivated:L,beforeDestroy:j,beforeUnmount:Z,destroyed:V,unmounted:ee,render:fe,renderTracked:Dt,renderTriggered:Ze,errorCaptured:K,serverPrefetch:_e,expose:ue,inheritAttrs:Ke,components:at,directives:yt,filters:ts}=e;if(u&&Yp(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const ne=o[le];H(ne)&&(s[le]=ne.bind(n))}if(r){const le=r.call(n,n);ce(le)&&(t.data=sa(le))}if(co=!0,i)for(const le in i){const ne=i[le],Kt=H(ne)?ne.bind(n,n):H(ne.get)?ne.get.bind(n,n):rt,Ys=!H(ne)&&H(ne.set)?ne.set.bind(n):rt,zt=Sg({get:Kt,set:Ys});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>zt.value,set:ct=>zt.value=ct})}if(a)for(const le in a)Ol(a[le],s,n,le);if(c){const le=H(c)?c.call(n):c;Reflect.ownKeys(le).forEach(ne=>{Np(ne,le[ne])})}l&&Nc(l,t,"c");function Ve(le,ne){$(ne)?ne.forEach(Kt=>le(Kt.bind(n))):ne&&le(ne.bind(n))}if(Ve(Vp,f),Ve(ca,p),Ve(Up,m),Ve(Bp,C),Ve(Lp,b),Ve(Fp,L),Ve(Hp,K),Ve(jp,Dt),Ve(qp,Ze),Ve(kl,Z),Ve(Rl,ee),Ve($p,_e),$(ue))if(ue.length){const le=t.exposed||(t.exposed={});ue.forEach(ne=>{Object.defineProperty(le,ne,{get:()=>n[ne],set:Kt=>n[ne]=Kt})})}else t.exposed||(t.exposed={});fe&&t.render===rt&&(t.render=fe),Ke!=null&&(t.inheritAttrs=Ke),at&&(t.components=at),yt&&(t.directives=yt)}function Yp(t,e,n=rt,s=!1){$(t)&&(t=uo(t));for(const r in t){const i=t[r];let o;ce(i)?"default"in i?o=fr(i.from||r,i.default,!0):o=fr(i.from||r):o=fr(i),Oe(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Nc(t,e,n){Je($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ol(t,e,n,s){const r=s.includes(".")?Al(n,s):()=>n[s];if(Te(t)){const i=e[t];H(i)&&ki(r,i)}else if(H(t))ki(r,t.bind(n));else if(ce(t))if($(t))t.forEach(i=>Ol(i,e,n,s));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&ki(r,i,t)}}function ua(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>br(c,u,o,!0)),br(c,e,o)),ce(e)&&i.set(e,c),c}function br(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&br(t,i,n,!0),r&&r.forEach(o=>br(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Xp[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Xp={data:kc,props:Qt,emits:Qt,methods:Qt,computed:Qt,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:Qt,directives:Qt,watch:Zp,provide:kc,inject:Jp};function kc(t,e){return e?t?function(){return Fe(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Jp(t,e){return Qt(uo(t),uo(e))}function uo(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ue(t,e){return t?[...new Set([].concat(t,e))]:e}function Qt(t,e){return t?Fe(Fe(Object.create(null),t),e):e}function Zp(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const s in e)n[s]=Ue(t[s],e[s]);return n}function eg(t,e,n,s=!1){const r={},i={};wr(i,Yr,1),t.propsDefaults=Object.create(null),Ml(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:up(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function tg(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Y(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let f=0;f<l.length;f++){let p=l[f];if(zr(t.emitsOptions,p))continue;const m=e[p];if(c)if(Q(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const C=On(p);r[C]=lo(c,a,C,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{Ml(t,e,r,i)&&(u=!0);let l;for(const f in a)(!e||!Q(e,f)&&((l=Kn(f))===f||!Q(e,l)))&&(c?n&&(n[f]!==void 0||n[l]!==void 0)&&(r[f]=lo(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!Q(e,f))&&(delete i[f],u=!0)}u&&bt(t,"set","$attrs")}function Ml(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(lr(c))continue;const u=e[c];let l;r&&Q(r,l=On(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:zr(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Y(n),u=a||ie;for(let l=0;l<i.length;l++){const f=i[l];n[f]=lo(r,c,f,u[f],t,!Q(u,f))}}return o}function lo(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Ln(r),s=u[n]=c.call(null,e),an())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Kn(n))&&(s=!0))}return s}function Ll(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const l=f=>{c=!0;const[p,m]=Ll(f,e,!0);Fe(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return ce(t)&&s.set(t,Cn),Cn;if($(i))for(let l=0;l<i.length;l++){const f=On(i[l]);Rc(f)&&(o[f]=ie)}else if(i)for(const l in i){const f=On(l);if(Rc(f)){const p=i[l],m=o[f]=$(p)||H(p)?{type:p}:Object.assign({},p);if(m){const C=Lc(Boolean,m.type),b=Lc(String,m.type);m[0]=C>-1,m[1]=b<0||C<b,(C>-1||Q(m,"default"))&&a.push(f)}}}const u=[o,a];return ce(t)&&s.set(t,u),u}function Rc(t){return t[0]!=="$"}function Oc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Mc(t,e){return Oc(t)===Oc(e)}function Lc(t,e){return $(e)?e.findIndex(n=>Mc(n,t)):H(e)&&Mc(e,t)?0:-1}const Fl=t=>t[0]==="_"||t==="$stable",la=t=>$(t)?t.map(ht):[ht(t)],ng=(t,e,n)=>{if(e._n)return e;const s=_p((...r)=>la(e(...r)),n);return s._c=!1,s},Pl=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Fl(r))continue;const i=t[r];if(H(i))e[r]=ng(r,i,s);else if(i!=null){const o=la(i);e[r]=()=>o}}},Vl=(t,e)=>{const n=la(e);t.slots.default=()=>n},sg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),wr(e,"_",n)):Pl(e,t.slots={})}else t.slots={},e&&Vl(t,e);wr(t.slots,Yr,1)},rg=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ie;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Fe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Pl(e,r)),o=e}else e&&(Vl(t,e),o={default:1});if(i)for(const a in r)!Fl(a)&&!(a in o)&&delete r[a]};function Ul(){return{app:null,config:{isNativeTag:Ad,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ig=0;function og(t,e){return function(s,r=null){H(s)||(s=Object.assign({},s)),r!=null&&!ce(r)&&(r=null);const i=Ul(),o=new Set;let a=!1;const c=i.app={_uid:ig++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:xg,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(c,...l)):H(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,f){if(!a){const p=on(s,r);return p.appContext=i,l&&e?e(p,u):t(p,u,f),a=!0,c._container=u,u.__vue_app__=c,Xr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function ho(t,e,n,s,r=!1){if($(t)){t.forEach((p,m)=>ho(p,e&&($(e)?e[m]:e),n,s,r));return}if(dr(s)&&!r)return;const i=s.shapeFlag&4?Xr(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===ie?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==c&&(Te(u)?(l[u]=null,Q(f,u)&&(f[u]=null)):Oe(u)&&(u.value=null)),H(c))Rt(c,a,12,[o,l]);else{const p=Te(c),m=Oe(c);if(p||m){const C=()=>{if(t.f){const b=p?Q(f,c)?f[c]:l[c]:c.value;r?$(b)&&Qo(b,i):$(b)?b.includes(i)||b.push(i):p?(l[c]=[i],Q(f,c)&&(f[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else p?(l[c]=o,Q(f,c)&&(f[c]=o)):m&&(c.value=o,t.k&&(l[t.k]=o))};o?(C.id=-1,$e(C,n)):C()}}}const $e=xp;function ag(t){return cg(t)}function cg(t,e){const n=Od();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:f,nextSibling:p,setScopeId:m=rt,insertStaticContent:C}=t,b=(h,d,g,w=null,v=null,I=null,A=!1,_=null,S=!!d.dynamicChildren)=>{if(h===d)return;h&&!Jt(h,d)&&(w=Xs(h),ct(h,v,I,!0),h=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:E,ref:O,shapeFlag:x}=d;switch(E){case Qr:L(h,d,g,w);break;case Tt:j(h,d,g,w);break;case Mi:h==null&&Z(d,g,w,A);break;case Ye:at(h,d,g,w,v,I,A,_,S);break;default:x&1?fe(h,d,g,w,v,I,A,_,S):x&6?yt(h,d,g,w,v,I,A,_,S):(x&64||x&128)&&E.process(h,d,g,w,v,I,A,_,S,vn)}O!=null&&v&&ho(O,h&&h.ref,I,d||h,!d)},L=(h,d,g,w)=>{if(h==null)s(d.el=a(d.children),g,w);else{const v=d.el=h.el;d.children!==h.children&&u(v,d.children)}},j=(h,d,g,w)=>{h==null?s(d.el=c(d.children||""),g,w):d.el=h.el},Z=(h,d,g,w)=>{[h.el,h.anchor]=C(h.children,d,g,w,h.el,h.anchor)},V=({el:h,anchor:d},g,w)=>{let v;for(;h&&h!==d;)v=p(h),s(h,g,w),h=v;s(d,g,w)},ee=({el:h,anchor:d})=>{let g;for(;h&&h!==d;)g=p(h),r(h),h=g;r(d)},fe=(h,d,g,w,v,I,A,_,S)=>{A=A||d.type==="svg",h==null?Dt(d,g,w,v,I,A,_,S):_e(h,d,v,I,A,_,S)},Dt=(h,d,g,w,v,I,A,_)=>{let S,E;const{type:O,props:x,shapeFlag:M,transition:U,dirs:z}=h;if(S=h.el=o(h.type,I,x&&x.is,x),M&8?l(S,h.children):M&16&&K(h.children,S,null,w,v,I&&O!=="foreignObject",A,_),z&&Gt(h,null,w,"created"),Ze(S,h,h.scopeId,A,w),x){for(const te in x)te!=="value"&&!lr(te)&&i(S,te,null,x[te],I,h.children,w,v,vt);"value"in x&&i(S,"value",null,x.value),(E=x.onVnodeBeforeMount)&&lt(E,w,h)}z&&Gt(h,null,w,"beforeMount");const se=(!v||v&&!v.pendingBranch)&&U&&!U.persisted;se&&U.beforeEnter(S),s(S,d,g),((E=x&&x.onVnodeMounted)||se||z)&&$e(()=>{E&&lt(E,w,h),se&&U.enter(S),z&&Gt(h,null,w,"mounted")},v)},Ze=(h,d,g,w,v)=>{if(g&&m(h,g),w)for(let I=0;I<w.length;I++)m(h,w[I]);if(v){let I=v.subTree;if(d===I){const A=v.vnode;Ze(h,A,A.scopeId,A.slotScopeIds,v.parent)}}},K=(h,d,g,w,v,I,A,_,S=0)=>{for(let E=S;E<h.length;E++){const O=h[E]=_?Nt(h[E]):ht(h[E]);b(null,O,d,g,w,v,I,A,_)}},_e=(h,d,g,w,v,I,A)=>{const _=d.el=h.el;let{patchFlag:S,dynamicChildren:E,dirs:O}=d;S|=h.patchFlag&16;const x=h.props||ie,M=d.props||ie;let U;g&&Wt(g,!1),(U=M.onVnodeBeforeUpdate)&&lt(U,g,d,h),O&&Gt(d,h,g,"beforeUpdate"),g&&Wt(g,!0);const z=v&&d.type!=="foreignObject";if(E?ue(h.dynamicChildren,E,_,g,w,z,I):A||ne(h,d,_,null,g,w,z,I,!1),S>0){if(S&16)Ke(_,d,x,M,g,w,v);else if(S&2&&x.class!==M.class&&i(_,"class",null,M.class,v),S&4&&i(_,"style",x.style,M.style,v),S&8){const se=d.dynamicProps;for(let te=0;te<se.length;te++){const de=se[te],et=x[de],wn=M[de];(wn!==et||de==="value")&&i(_,de,et,wn,v,h.children,g,w,vt)}}S&1&&h.children!==d.children&&l(_,d.children)}else!A&&E==null&&Ke(_,d,x,M,g,w,v);((U=M.onVnodeUpdated)||O)&&$e(()=>{U&&lt(U,g,d,h),O&&Gt(d,h,g,"updated")},w)},ue=(h,d,g,w,v,I,A)=>{for(let _=0;_<d.length;_++){const S=h[_],E=d[_],O=S.el&&(S.type===Ye||!Jt(S,E)||S.shapeFlag&70)?f(S.el):g;b(S,E,O,null,w,v,I,A,!0)}},Ke=(h,d,g,w,v,I,A)=>{if(g!==w){if(g!==ie)for(const _ in g)!lr(_)&&!(_ in w)&&i(h,_,g[_],null,A,d.children,v,I,vt);for(const _ in w){if(lr(_))continue;const S=w[_],E=g[_];S!==E&&_!=="value"&&i(h,_,E,S,A,d.children,v,I,vt)}"value"in w&&i(h,"value",g.value,w.value)}},at=(h,d,g,w,v,I,A,_,S)=>{const E=d.el=h?h.el:a(""),O=d.anchor=h?h.anchor:a("");let{patchFlag:x,dynamicChildren:M,slotScopeIds:U}=d;U&&(_=_?_.concat(U):U),h==null?(s(E,g,w),s(O,g,w),K(d.children,g,O,v,I,A,_,S)):x>0&&x&64&&M&&h.dynamicChildren?(ue(h.dynamicChildren,M,g,v,I,A,_),(d.key!=null||v&&d===v.subTree)&&Bl(h,d,!0)):ne(h,d,g,O,v,I,A,_,S)},yt=(h,d,g,w,v,I,A,_,S)=>{d.slotScopeIds=_,h==null?d.shapeFlag&512?v.ctx.activate(d,g,w,A,S):ts(d,g,w,v,I,A,S):fc(h,d,S)},ts=(h,d,g,w,v,I,A)=>{const _=h.component=wg(h,w,v);if(Gr(h)&&(_.ctx.renderer=vn),Tg(_),_.asyncDep){if(v&&v.registerDep(_,Ve),!h.el){const S=_.subTree=on(Tt);j(null,S,d,g)}return}Ve(_,h,d,g,v,I,A)},fc=(h,d,g)=>{const w=d.component=h.component;if(Sp(h,d,g))if(w.asyncDep&&!w.asyncResolved){le(w,d,g);return}else w.next=d,wp(w.update),w.update();else d.el=h.el,w.vnode=d},Ve=(h,d,g,w,v,I,A)=>{const _=()=>{if(h.isMounted){let{next:O,bu:x,u:M,parent:U,vnode:z}=h,se=O,te;Wt(h,!1),O?(O.el=z.el,le(h,O,A)):O=z,x&&hr(x),(te=O.props&&O.props.onVnodeBeforeUpdate)&&lt(te,U,O,z),Wt(h,!0);const de=Ni(h),et=h.subTree;h.subTree=de,b(et,de,f(et.el),Xs(et),h,v,I),O.el=de.el,se===null&&Ap(h,de.el),M&&$e(M,v),(te=O.props&&O.props.onVnodeUpdated)&&$e(()=>lt(te,U,O,z),v)}else{let O;const{el:x,props:M}=d,{bm:U,m:z,parent:se}=h,te=dr(d);if(Wt(h,!1),U&&hr(U),!te&&(O=M&&M.onVnodeBeforeMount)&&lt(O,se,d),Wt(h,!0),x&&Di){const de=()=>{h.subTree=Ni(h),Di(x,h.subTree,h,v,null)};te?d.type.__asyncLoader().then(()=>!h.isUnmounted&&de()):de()}else{const de=h.subTree=Ni(h);b(null,de,g,w,h,v,I),d.el=de.el}if(z&&$e(z,v),!te&&(O=M&&M.onVnodeMounted)){const de=d;$e(()=>lt(O,se,de),v)}(d.shapeFlag&256||se&&dr(se.vnode)&&se.vnode.shapeFlag&256)&&h.a&&$e(h.a,v),h.isMounted=!0,d=g=w=null}},S=h.effect=new Zo(_,()=>aa(E),h.scope),E=h.update=()=>S.run();E.id=h.uid,Wt(h,!0),E()},le=(h,d,g)=>{d.component=h;const w=h.vnode.props;h.vnode=d,h.next=null,tg(h,d.props,w,g),rg(h,d.children,g),zn(),Ac(),Gn()},ne=(h,d,g,w,v,I,A,_,S=!1)=>{const E=h&&h.children,O=h?h.shapeFlag:0,x=d.children,{patchFlag:M,shapeFlag:U}=d;if(M>0){if(M&128){Ys(E,x,g,w,v,I,A,_,S);return}else if(M&256){Kt(E,x,g,w,v,I,A,_,S);return}}U&8?(O&16&&vt(E,v,I),x!==E&&l(g,x)):O&16?U&16?Ys(E,x,g,w,v,I,A,_,S):vt(E,v,I,!0):(O&8&&l(g,""),U&16&&K(x,g,w,v,I,A,_,S))},Kt=(h,d,g,w,v,I,A,_,S)=>{h=h||Cn,d=d||Cn;const E=h.length,O=d.length,x=Math.min(E,O);let M;for(M=0;M<x;M++){const U=d[M]=S?Nt(d[M]):ht(d[M]);b(h[M],U,g,null,v,I,A,_,S)}E>O?vt(h,v,I,!0,!1,x):K(d,g,w,v,I,A,_,S,x)},Ys=(h,d,g,w,v,I,A,_,S)=>{let E=0;const O=d.length;let x=h.length-1,M=O-1;for(;E<=x&&E<=M;){const U=h[E],z=d[E]=S?Nt(d[E]):ht(d[E]);if(Jt(U,z))b(U,z,g,null,v,I,A,_,S);else break;E++}for(;E<=x&&E<=M;){const U=h[x],z=d[M]=S?Nt(d[M]):ht(d[M]);if(Jt(U,z))b(U,z,g,null,v,I,A,_,S);else break;x--,M--}if(E>x){if(E<=M){const U=M+1,z=U<O?d[U].el:w;for(;E<=M;)b(null,d[E]=S?Nt(d[E]):ht(d[E]),g,z,v,I,A,_,S),E++}}else if(E>M)for(;E<=x;)ct(h[E],v,I,!0),E++;else{const U=E,z=E,se=new Map;for(E=z;E<=M;E++){const ze=d[E]=S?Nt(d[E]):ht(d[E]);ze.key!=null&&se.set(ze.key,E)}let te,de=0;const et=M-z+1;let wn=!1,gc=0;const ns=new Array(et);for(E=0;E<et;E++)ns[E]=0;for(E=U;E<=x;E++){const ze=h[E];if(de>=et){ct(ze,v,I,!0);continue}let ut;if(ze.key!=null)ut=se.get(ze.key);else for(te=z;te<=M;te++)if(ns[te-z]===0&&Jt(ze,d[te])){ut=te;break}ut===void 0?ct(ze,v,I,!0):(ns[ut-z]=E+1,ut>=gc?gc=ut:wn=!0,b(ze,d[ut],g,null,v,I,A,_,S),de++)}const mc=wn?ug(ns):Cn;for(te=mc.length-1,E=et-1;E>=0;E--){const ze=z+E,ut=d[ze],yc=ze+1<O?d[ze+1].el:w;ns[E]===0?b(null,ut,g,yc,v,I,A,_,S):wn&&(te<0||E!==mc[te]?zt(ut,g,yc,2):te--)}}},zt=(h,d,g,w,v=null)=>{const{el:I,type:A,transition:_,children:S,shapeFlag:E}=h;if(E&6){zt(h.component.subTree,d,g,w);return}if(E&128){h.suspense.move(d,g,w);return}if(E&64){A.move(h,d,g,vn);return}if(A===Ye){s(I,d,g);for(let x=0;x<S.length;x++)zt(S[x],d,g,w);s(h.anchor,d,g);return}if(A===Mi){V(h,d,g);return}if(w!==2&&E&1&&_)if(w===0)_.beforeEnter(I),s(I,d,g),$e(()=>_.enter(I),v);else{const{leave:x,delayLeave:M,afterLeave:U}=_,z=()=>s(I,d,g),se=()=>{x(I,()=>{z(),U&&U()})};M?M(I,z,se):se()}else s(I,d,g)},ct=(h,d,g,w=!1,v=!1)=>{const{type:I,props:A,ref:_,children:S,dynamicChildren:E,shapeFlag:O,patchFlag:x,dirs:M}=h;if(_!=null&&ho(_,null,g,h,!0),O&256){d.ctx.deactivate(h);return}const U=O&1&&M,z=!dr(h);let se;if(z&&(se=A&&A.onVnodeBeforeUnmount)&&lt(se,d,h),O&6)wd(h.component,g,w);else{if(O&128){h.suspense.unmount(g,w);return}U&&Gt(h,null,d,"beforeUnmount"),O&64?h.type.remove(h,d,g,v,vn,w):E&&(I!==Ye||x>0&&x&64)?vt(E,d,g,!1,!0):(I===Ye&&x&384||!v&&O&16)&&vt(S,d,g),w&&dc(h)}(z&&(se=A&&A.onVnodeUnmounted)||U)&&$e(()=>{se&&lt(se,d,h),U&&Gt(h,null,d,"unmounted")},g)},dc=h=>{const{type:d,el:g,anchor:w,transition:v}=h;if(d===Ye){vd(g,w);return}if(d===Mi){ee(h);return}const I=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(h.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:_}=v,S=()=>A(g,I);_?_(h.el,I,S):S()}else I()},vd=(h,d)=>{let g;for(;h!==d;)g=p(h),r(h),h=g;r(d)},wd=(h,d,g)=>{const{bum:w,scope:v,update:I,subTree:A,um:_}=h;w&&hr(w),v.stop(),I&&(I.active=!1,ct(A,h,d,g)),_&&$e(_,d),$e(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},vt=(h,d,g,w=!1,v=!1,I=0)=>{for(let A=I;A<h.length;A++)ct(h[A],d,g,w,v)},Xs=h=>h.shapeFlag&6?Xs(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),pc=(h,d,g)=>{h==null?d._vnode&&ct(d._vnode,null,null,!0):b(d._vnode||null,h,d,null,null,null,g),Ac(),bl(),d._vnode=h},vn={p:b,um:ct,m:zt,r:dc,mt:ts,mc:K,pc:ne,pbc:ue,n:Xs,o:t};let Ai,Di;return e&&([Ai,Di]=e(vn)),{render:pc,hydrate:Ai,createApp:og(pc,Ai)}}function Wt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Bl(t,e,n=!1){const s=t.children,r=e.children;if($(s)&&$(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Nt(r[i]),a.el=o.el),n||Bl(o,a)),a.type===Qr&&(a.el=o.el)}}function ug(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const lg=t=>t.__isTeleport,Ye=Symbol(void 0),Qr=Symbol(void 0),Tt=Symbol(void 0),Mi=Symbol(void 0),ls=[];let st=null;function Li(t=!1){ls.push(st=t?null:[])}function hg(){ls.pop(),st=ls[ls.length-1]||null}let ws=1;function Fc(t){ws+=t}function fg(t){return t.dynamicChildren=ws>0?st||Cn:null,hg(),ws>0&&st&&st.push(t),t}function Fi(t,e,n,s,r,i){return fg(ge(t,e,n,s,r,i,!0))}function dg(t){return t?t.__v_isVNode===!0:!1}function Jt(t,e){return t.type===e.type&&t.key===e.key}const Yr="__vInternal",$l=({key:t})=>t??null,pr=({ref:t,ref_key:e,ref_for:n})=>t!=null?Te(t)||Oe(t)||H(t)?{i:Xe,r:t,k:e,f:!!n}:t:null;function ge(t,e=null,n=null,s=0,r=null,i=t===Ye?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$l(e),ref:e&&pr(e),scopeId:Cl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xe};return a?(ha(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Te(n)?8:16),ws>0&&!o&&st&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&st.push(c),c}const on=pg;function pg(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===zp)&&(t=Tt),dg(t)){const a=Vt(t,e,!0);return n&&ha(a,n),ws>0&&!i&&st&&(a.shapeFlag&6?st[st.indexOf(t)]=a:st.push(a)),a.patchFlag|=-2,a}if(Cg(t)&&(t=t.__vccOpts),e){e=gg(e);let{class:a,style:c}=e;a&&!Te(a)&&(e.class=In(a)),ce(c)&&(pl(c)&&!$(c)&&(c=Fe({},c)),e.style=Go(c))}const o=Te(t)?1:Dp(t)?128:lg(t)?64:ce(t)?4:H(t)?2:0;return ge(t,e,n,s,r,o,i,!0)}function gg(t){return t?pl(t)||Yr in t?Fe({},t):t:null}function Vt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?mg(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&$l(a),ref:e&&e.ref?n&&r?$(r)?r.concat(pr(e)):[r,pr(e)]:pr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vt(t.ssContent),ssFallback:t.ssFallback&&Vt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ql(t=" ",e=0){return on(Qr,null,t,e)}function ht(t){return t==null||typeof t=="boolean"?on(Tt):$(t)?on(Ye,null,t.slice()):typeof t=="object"?Nt(t):on(Qr,null,String(t))}function Nt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vt(t)}function ha(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ha(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Yr in e)?e._ctx=Xe:r===3&&Xe&&(Xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Xe},n=32):(e=String(e),s&64?(n=16,e=[ql(e)]):n=8);t.children=e,t.shapeFlag|=n}function mg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=In([e.class,s.class]));else if(r==="style")e.style=Go([e.style,s.style]);else if($r(r)){const i=e[r],o=s[r];o&&i!==o&&!($(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function lt(t,e,n,s=null){Je(t,e,7,[n,s])}const yg=Ul();let vg=0;function wg(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||yg,i={uid:vg++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Md(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ll(s,r),emitsOptions:Il(s,r),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:s.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=bp.bind(null,i),t.ce&&t.ce(i),i}let ye=null;const Eg=()=>ye||Xe,Ln=t=>{ye=t,t.scope.on()},an=()=>{ye&&ye.scope.off(),ye=null};function jl(t){return t.vnode.shapeFlag&4}let Es=!1;function Tg(t,e=!1){Es=e;const{props:n,children:s}=t.vnode,r=jl(t);eg(t,n,r,e),sg(t,s);const i=r?bg(t,e):void 0;return Es=!1,i}function bg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=gl(new Proxy(t.ctx,Wp));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Ig(t):null;Ln(t),zn();const i=Rt(s,t,0,[t.props,r]);if(Gn(),an(),Zu(i)){if(i.then(an,an),e)return i.then(o=>{Pc(t,o,e)}).catch(o=>{Kr(o,t,0)});t.asyncDep=i}else Pc(t,i,e)}else Hl(t,e)}function Pc(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=vl(e)),Hl(t,n)}let Vc;function Hl(t,e,n){const s=t.type;if(!t.render){if(!e&&Vc&&!s.render){const r=s.template||ua(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Fe(Fe({isCustomElement:i,delimiters:a},o),c);s.render=Vc(r,u)}}t.render=s.render||rt}Ln(t),zn(),Qp(t),Gn(),an()}function _g(t){return new Proxy(t.attrs,{get(e,n){return He(t,"get","$attrs"),e[n]}})}function Ig(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=_g(t))},slots:t.slots,emit:t.emit,expose:e}}function Xr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(vl(gl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in us)return us[n](t)},has(e,n){return n in e||n in us}}))}function Cg(t){return H(t)&&"__vccOpts"in t}const Sg=(t,e)=>gp(t,e,Es),Ag=Symbol(""),Dg=()=>fr(Ag),xg="3.2.47",Ng="http://www.w3.org/2000/svg",Zt=typeof document<"u"?document:null,Uc=Zt&&Zt.createElement("template"),kg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Zt.createElementNS(Ng,t):Zt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Zt.createTextNode(t),createComment:t=>Zt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Uc.innerHTML=s?`<svg>${t}</svg>`:t;const a=Uc.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Rg(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Og(t,e,n){const s=t.style,r=Te(n);if(n&&!r){if(e&&!Te(e))for(const i in e)n[i]==null&&fo(s,i,"");for(const i in n)fo(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Bc=/\s*!important$/;function fo(t,e,n){if($(n))n.forEach(s=>fo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Mg(t,e);Bc.test(n)?t.setProperty(Kn(s),n.replace(Bc,""),"important"):t[s]=n}}const $c=["Webkit","Moz","ms"],Pi={};function Mg(t,e){const n=Pi[e];if(n)return n;let s=On(e);if(s!=="filter"&&s in t)return Pi[e]=s;s=nl(s);for(let r=0;r<$c.length;r++){const i=$c[r]+s;if(i in t)return Pi[e]=i}return e}const qc="http://www.w3.org/1999/xlink";function Lg(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(qc,e.slice(6,e.length)):t.setAttributeNS(qc,e,n);else{const i=Cd(e);n==null||i&&!Yu(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Fg(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Yu(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function En(t,e,n,s){t.addEventListener(e,n,s)}function Pg(t,e,n,s){t.removeEventListener(e,n,s)}function Vg(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Ug(e);if(s){const u=i[e]=qg(s,r);En(t,a,u,c)}else o&&(Pg(t,a,o,c),i[e]=void 0)}}const jc=/(?:Once|Passive|Capture)$/;function Ug(t){let e;if(jc.test(t)){e={};let s;for(;s=t.match(jc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kn(t.slice(2)),e]}let Vi=0;const Bg=Promise.resolve(),$g=()=>Vi||(Bg.then(()=>Vi=0),Vi=Date.now());function qg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Je(jg(s,n.value),e,5,[s])};return n.value=t,n.attached=$g(),n}function jg(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Hc=/^on[a-z]/,Hg=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Rg(t,s,r):e==="style"?Og(t,n,s):$r(e)?Wo(e)||Vg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Kg(t,e,s,r))?Fg(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Lg(t,e,s,r))};function Kg(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Hc.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Hc.test(e)&&Te(n)?!1:e in t}const zg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Mp.props;const Kc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>hr(e,n):e};function Gg(t){t.target.composing=!0}function zc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wg={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Kc(r);const i=s||r.props&&r.props.type==="number";En(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Zi(a)),t._assign(a)}),n&&En(t,"change",()=>{t.value=t.value.trim()}),e||(En(t,"compositionstart",Gg),En(t,"compositionend",zc),En(t,"change",zc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Kc(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Zi(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Qg=["ctrl","shift","alt","meta"],Yg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Qg.some(n=>t[`${n}Key`]&&!e.includes(n))},Xg=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Yg[e[r]];if(i&&i(n,e))return}return t(n,...s)},Jg=Fe({patchProp:Hg},kg);let Gc;function Zg(){return Gc||(Gc=ag(Jg))}const em=(...t)=>{const e=Zg().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=tm(s);if(!r)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function tm(t){return Te(t)?document.querySelector(t):t}/**
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
 */const Kl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},nm=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},zl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(p=64)),s.push(n[l],n[f],n[p],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||f==null)throw Error();const p=i<<2|a>>4;if(s.push(p),u!==64){const m=a<<4&240|u>>2;if(s.push(m),f!==64){const C=u<<6&192|f;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},sm=function(t){const e=Kl(t);return zl.encodeByteArray(e,!0)},_r=function(t){return sm(t).replace(/\./g,"")},rm=function(t){try{return zl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function im(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const om=()=>im().__FIREBASE_DEFAULTS__,am=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rm(t[1]);return e&&JSON.parse(e)},Gl=()=>{try{return om()||am()||cm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},um=t=>{var e,n;return(n=(e=Gl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lm=t=>{const e=um(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},hm=()=>{var t;return(t=Gl())===null||t===void 0?void 0:t.config};/**
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
 */class fm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function dm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[_r(JSON.stringify(n)),_r(JSON.stringify(o)),a].join(".")}function pm(){try{return typeof indexedDB=="object"}catch{return!1}}function gm(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const mm="FirebaseError";class Wn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=mm,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wl.prototype.create)}}class Wl{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?ym(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Wn(r,a,s)}}function ym(t,e){return t.replace(vm,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const vm=/\{\$([^}]+)}/g;function po(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Wc(i)&&Wc(o)){if(!po(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Wc(t){return t!==null&&typeof t=="object"}/**
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
 */function gt(t){return t&&t._delegate?t._delegate:t}class Ts{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class wm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new fm;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tm(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Em(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Em(t){return t===Yt?void 0:t}function Tm(t){return t.instantiationMode==="EAGER"}/**
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
 */class bm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const _m={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Im=X.INFO,Cm={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Sm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Cm[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ql{constructor(e){this.name=e,this._logLevel=Im,this._logHandler=Sm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_m[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Am=(t,e)=>e.some(n=>t instanceof n);let Qc,Yc;function Dm(){return Qc||(Qc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xm(){return Yc||(Yc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yl=new WeakMap,go=new WeakMap,Xl=new WeakMap,Ui=new WeakMap,fa=new WeakMap;function Nm(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ot(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yl.set(n,t)}).catch(()=>{}),fa.set(e,t),e}function km(t){if(go.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});go.set(t,e)}let mo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return go.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ot(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rm(t){mo=t(mo)}function Om(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Bi(this),e,...n);return Xl.set(s,e.sort?e.sort():[e]),Ot(s)}:xm().includes(t)?function(...e){return t.apply(Bi(this),e),Ot(Yl.get(this))}:function(...e){return Ot(t.apply(Bi(this),e))}}function Mm(t){return typeof t=="function"?Om(t):(t instanceof IDBTransaction&&km(t),Am(t,Dm())?new Proxy(t,mo):t)}function Ot(t){if(t instanceof IDBRequest)return Nm(t);if(Ui.has(t))return Ui.get(t);const e=Mm(t);return e!==t&&(Ui.set(t,e),fa.set(e,t)),e}const Bi=t=>fa.get(t);function Lm(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Ot(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ot(o.result),c.oldVersion,c.newVersion,Ot(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Fm=["get","getKey","getAll","getAllKeys","count"],Pm=["put","add","delete","clear"],$i=new Map;function Xc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($i.get(e))return $i.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Pm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Fm.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return $i.set(e,i),i}Rm(t=>({...t,get:(e,n,s)=>Xc(e,n)||t.get(e,n,s),has:(e,n)=>!!Xc(e,n)||t.has(e,n)}));/**
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
 */class Vm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Um(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Um(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yo="@firebase/app",Jc="0.9.3";/**
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
 */const hn=new Ql("@firebase/app"),Bm="@firebase/app-compat",$m="@firebase/analytics-compat",qm="@firebase/analytics",jm="@firebase/app-check-compat",Hm="@firebase/app-check",Km="@firebase/auth",zm="@firebase/auth-compat",Gm="@firebase/database",Wm="@firebase/database-compat",Qm="@firebase/functions",Ym="@firebase/functions-compat",Xm="@firebase/installations",Jm="@firebase/installations-compat",Zm="@firebase/messaging",ey="@firebase/messaging-compat",ty="@firebase/performance",ny="@firebase/performance-compat",sy="@firebase/remote-config",ry="@firebase/remote-config-compat",iy="@firebase/storage",oy="@firebase/storage-compat",ay="@firebase/firestore",cy="@firebase/firestore-compat",uy="firebase",ly="9.17.1";/**
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
 */const vo="[DEFAULT]",hy={[yo]:"fire-core",[Bm]:"fire-core-compat",[qm]:"fire-analytics",[$m]:"fire-analytics-compat",[Hm]:"fire-app-check",[jm]:"fire-app-check-compat",[Km]:"fire-auth",[zm]:"fire-auth-compat",[Gm]:"fire-rtdb",[Wm]:"fire-rtdb-compat",[Qm]:"fire-fn",[Ym]:"fire-fn-compat",[Xm]:"fire-iid",[Jm]:"fire-iid-compat",[Zm]:"fire-fcm",[ey]:"fire-fcm-compat",[ty]:"fire-perf",[ny]:"fire-perf-compat",[sy]:"fire-rc",[ry]:"fire-rc-compat",[iy]:"fire-gcs",[oy]:"fire-gcs-compat",[ay]:"fire-fst",[cy]:"fire-fst-compat","fire-js":"fire-js",[uy]:"fire-js-all"};/**
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
 */const Ir=new Map,wo=new Map;function fy(t,e){try{t.container.addComponent(e)}catch(n){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cr(t){const e=t.name;if(wo.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;wo.set(e,t);for(const n of Ir.values())fy(n,t);return!0}function dy(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const py={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mt=new Wl("app","Firebase",py);/**
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
 */class gy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
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
 */const my=ly;function Jl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:vo,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Mt.create("bad-app-name",{appName:String(r)});if(n||(n=hm()),!n)throw Mt.create("no-options");const i=Ir.get(r);if(i){if(po(n,i.options)&&po(s,i.config))return i;throw Mt.create("duplicate-app",{appName:r})}const o=new bm(r);for(const c of wo.values())o.addComponent(c);const a=new gy(n,s,o);return Ir.set(r,a),a}function yy(t=vo){const e=Ir.get(t);if(!e&&t===vo)return Jl();if(!e)throw Mt.create("no-app",{appName:t});return e}function xn(t,e,n){var s;let r=(s=hy[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}Cr(new Ts(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const vy="firebase-heartbeat-database",wy=1,bs="firebase-heartbeat-store";let qi=null;function Zl(){return qi||(qi=Lm(vy,wy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bs)}}}).catch(t=>{throw Mt.create("idb-open",{originalErrorMessage:t.message})})),qi}async function Ey(t){try{return(await Zl()).transaction(bs).objectStore(bs).get(eh(t))}catch(e){if(e instanceof Wn)hn.warn(e.message);else{const n=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(n.message)}}}async function Zc(t,e){try{const s=(await Zl()).transaction(bs,"readwrite");return await s.objectStore(bs).put(e,eh(t)),s.done}catch(n){if(n instanceof Wn)hn.warn(n.message);else{const s=Mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hn.warn(s.message)}}}function eh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ty=1024,by=30*24*60*60*1e3;class _y{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=eu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=by}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=eu(),{heartbeatsToSend:n,unsentEntries:s}=Iy(this._heartbeatsCache.heartbeats),r=_r(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function eu(){return new Date().toISOString().substring(0,10)}function Iy(t,e=Ty){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),tu(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),tu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Cy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pm()?gm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ey(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function tu(t){return _r(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Sy(t){Cr(new Ts("platform-logger",e=>new Vm(e),"PRIVATE")),Cr(new Ts("heartbeat",e=>new _y(e),"PRIVATE")),xn(yo,Jc,t),xn(yo,Jc,"esm2017"),xn("fire-js","")}Sy("");var Ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,da=da||{},P=Ay||self;function Sr(){}function Jr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ms(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Dy(t){return Object.prototype.hasOwnProperty.call(t,ji)&&t[ji]||(t[ji]=++xy)}var ji="closure_uid_"+(1e9*Math.random()>>>0),xy=0;function Ny(t,e,n){return t.call.apply(t.bind,arguments)}function ky(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Me(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Me=Ny:Me=ky,Me.apply(null,arguments)}function rr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function De(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function qt(){this.s=this.s,this.o=this.o}var Ry=0;qt.prototype.s=!1;qt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ry!=0)&&Dy(this)};qt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const th=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function pa(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function nu(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Jr(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var Oy=function(){if(!P.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{P.addEventListener("test",Sr,e),P.removeEventListener("test",Sr,e)}catch{}return t}();function Ar(t){return/^[\s\xa0]*$/.test(t)}var su=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Hi(t,e){return t<e?-1:t>e?1:0}function Zr(){var t=P.navigator;return t&&(t=t.userAgent)?t:""}function dt(t){return Zr().indexOf(t)!=-1}function ga(t){return ga[" "](t),t}ga[" "]=Sr;function My(t){var e=Py;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Ly=dt("Opera"),Fn=dt("Trident")||dt("MSIE"),nh=dt("Edge"),Eo=nh||Fn,sh=dt("Gecko")&&!(Zr().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge"))&&!(dt("Trident")||dt("MSIE"))&&!dt("Edge"),Fy=Zr().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge");function rh(){var t=P.document;return t?t.documentMode:void 0}var Dr;e:{var Ki="",zi=function(){var t=Zr();if(sh)return/rv:([^\);]+)(\)|;)/.exec(t);if(nh)return/Edge\/([\d\.]+)/.exec(t);if(Fn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Fy)return/WebKit\/(\S+)/.exec(t);if(Ly)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(zi&&(Ki=zi?zi[1]:""),Fn){var Gi=rh();if(Gi!=null&&Gi>parseFloat(Ki)){Dr=String(Gi);break e}}Dr=Ki}var Py={};function Vy(){return My(function(){let t=0;const e=su(String(Dr)).split("."),n=su("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Hi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Hi(r[2].length==0,i[2].length==0)||Hi(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var To;if(P.document&&Fn){var ru=rh();To=ru||parseInt(Dr,10)||void 0}else To=void 0;var Uy=To;function _s(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(sh){e:{try{ga(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:By[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_s.X.h.call(this)}}De(_s,Le);var By={2:"touch",3:"pen",4:"mouse"};_s.prototype.h=function(){_s.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ls="closure_listenable_"+(1e6*Math.random()|0),$y=0;function qy(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++$y,this.ba=this.ea=!1}function ei(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ma(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ih(t){const e={};for(const n in t)e[n]=t[n];return e}const iu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oh(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<iu.length;i++)n=iu[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ti(t){this.src=t,this.g={},this.h=0}ti.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=_o(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new qy(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function bo(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=th(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ei(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _o(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var ya="closure_lm_"+(1e6*Math.random()|0),Wi={};function ah(t,e,n,s,r){if(s&&s.once)return uh(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ah(t,e[i],n,s,r);return null}return n=Ea(n),t&&t[Ls]?t.N(e,n,Ms(s)?!!s.capture:!!s,r):ch(t,e,n,!1,s,r)}function ch(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ms(r)?!!r.capture:!!r,a=wa(t);if(a||(t[ya]=a=new ti(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=jy(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Oy||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(hh(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jy(){function t(n){return e.call(t.src,t.listener,n)}const e=Hy;return t}function uh(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)uh(t,e[i],n,s,r);return null}return n=Ea(n),t&&t[Ls]?t.O(e,n,Ms(s)?!!s.capture:!!s,r):ch(t,e,n,!0,s,r)}function lh(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)lh(t,e[i],n,s,r);else s=Ms(s)?!!s.capture:!!s,n=Ea(n),t&&t[Ls]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=_o(i,n,s,r),-1<n&&(ei(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=wa(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_o(e,n,s,r)),(n=-1<t?e[t]:null)&&va(n))}function va(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ls])bo(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(hh(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=wa(e))?(bo(n,t),n.h==0&&(n.src=null,e[ya]=null)):ei(t)}}}function hh(t){return t in Wi?Wi[t]:Wi[t]="on"+t}function Hy(t,e){if(t.ba)t=!0;else{e=new _s(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&va(t),t=n.call(s,e)}return t}function wa(t){return t=t[ya],t instanceof ti?t:null}var Qi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ea(t){return typeof t=="function"?t:(t[Qi]||(t[Qi]=function(e){return t.handleEvent(e)}),t[Qi])}function Ce(){qt.call(this),this.i=new ti(this),this.P=this,this.I=null}De(Ce,qt);Ce.prototype[Ls]=!0;Ce.prototype.removeEventListener=function(t,e,n,s){lh(this,t,e,n,s)};function Ae(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Le(e,t);else if(e instanceof Le)e.target=e.target||t;else{var r=e;e=new Le(s,t),oh(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=ir(o,s,!0,e)&&r}if(o=e.g=t,r=ir(o,s,!0,e)&&r,r=ir(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=ir(o,s,!1,e)&&r}Ce.prototype.M=function(){if(Ce.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ei(n[s]);delete t.g[e],t.h--}}this.I=null};Ce.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ce.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ir(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&bo(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Ta=P.JSON.stringify;function Ky(){var t=ph;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class zy{constructor(){this.h=this.g=null}add(e,n){const s=fh.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var fh=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Gy,t=>t.reset());class Gy{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Wy(t){P.setTimeout(()=>{throw t},0)}function dh(t,e){Io||Qy(),Co||(Io(),Co=!0),ph.add(t,e)}var Io;function Qy(){var t=P.Promise.resolve(void 0);Io=function(){t.then(Yy)}}var Co=!1,ph=new zy;function Yy(){for(var t;t=Ky();){try{t.h.call(t.g)}catch(n){Wy(n)}var e=fh;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Co=!1}function ni(t,e){Ce.call(this),this.h=t||1,this.g=e||P,this.j=Me(this.lb,this),this.l=Date.now()}De(ni,Ce);N=ni.prototype;N.ca=!1;N.R=null;N.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ae(this,"tick"),this.ca&&(ba(this),this.start()))}};N.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ba(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}N.M=function(){ni.X.M.call(this),ba(this),delete this.g};function _a(t,e,n){if(typeof t=="function")n&&(t=Me(t,n));else if(t&&typeof t.handleEvent=="function")t=Me(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:P.setTimeout(t,e||0)}function gh(t){t.g=_a(()=>{t.g=null,t.i&&(t.i=!1,gh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Xy extends qt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gh(this)}M(){super.M(),this.g&&(P.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Is(t){qt.call(this),this.h=t,this.g={}}De(Is,qt);var ou=[];function mh(t,e,n,s){Array.isArray(n)||(n&&(ou[0]=n.toString()),n=ou);for(var r=0;r<n.length;r++){var i=ah(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function yh(t){ma(t.g,function(e,n){this.g.hasOwnProperty(n)&&va(e)},t),t.g={}}Is.prototype.M=function(){Is.X.M.call(this),yh(this)};Is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function si(){this.g=!0}si.prototype.Aa=function(){this.g=!1};function Jy(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var f=l.split("_");o=2<=f.length&&f[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Zy(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function _n(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+tv(t,n)+(s?" "+s:"")})}function ev(t,e){t.info(function(){return"TIMEOUT: "+e})}si.prototype.info=function(){};function tv(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Ta(n)}catch{return e}}var pn={},au=null;function ri(){return au=au||new Ce}pn.Pa="serverreachability";function vh(t){Le.call(this,pn.Pa,t)}De(vh,Le);function Cs(t){const e=ri();Ae(e,new vh(e))}pn.STAT_EVENT="statevent";function wh(t,e){Le.call(this,pn.STAT_EVENT,t),this.stat=e}De(wh,Le);function Be(t){const e=ri();Ae(e,new wh(e,t))}pn.Qa="timingevent";function Eh(t,e){Le.call(this,pn.Qa,t),this.size=e}De(Eh,Le);function Fs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return P.setTimeout(function(){t()},e)}var ii={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Th={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ia(){}Ia.prototype.h=null;function cu(t){return t.h||(t.h=t.i())}function bh(){}var Ps={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ca(){Le.call(this,"d")}De(Ca,Le);function Sa(){Le.call(this,"c")}De(Sa,Le);var So;function oi(){}De(oi,Ia);oi.prototype.g=function(){return new XMLHttpRequest};oi.prototype.i=function(){return{}};So=new oi;function Vs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Is(this),this.O=nv,t=Eo?125:void 0,this.T=new ni(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _h}function _h(){this.i=null,this.g="",this.h=!1}var nv=45e3,Ao={},xr={};N=Vs.prototype;N.setTimeout=function(t){this.O=t};function Do(t,e,n){t.K=1,t.v=ci(_t(e)),t.s=n,t.P=!0,Ih(t,null)}function Ih(t,e){t.F=Date.now(),Us(t),t.A=_t(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Rh(n.i,"t",s),t.C=0,n=t.l.H,t.h=new _h,t.g=Zh(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Xy(Me(t.La,t,t.g),t.N)),mh(t.S,t.g,"readystatechange",t.ib),e=t.H?ih(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Cs(),Jy(t.j,t.u,t.A,t.m,t.U,t.s)}N.ib=function(t){t=t.target;const e=this.L;e&&Et(t)==3?e.l():this.La(t)};N.La=function(t){try{if(t==this.g)e:{const l=Et(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>l)&&(l!=3||Eo||this.g&&(this.h.h||this.g.fa()||fu(this.g)))){this.I||l!=4||e==7||(e==8||0>=f?Cs(3):Cs(2)),ai(this);var n=this.g.aa();this.Y=n;t:if(Ch(this)){var s=fu(this.g);t="";var r=s.length,i=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tn(this),hs(this);var o="";break t}this.h.i=new P.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Zy(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ar(a)){var u=a;break t}}u=null}if(n=u)_n(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,xo(this,n);else{this.i=!1,this.o=3,Be(12),tn(this),hs(this);break e}}this.P?(Sh(this,l,o),Eo&&this.i&&l==3&&(mh(this.S,this.T,"tick",this.hb),this.T.start())):(_n(this.j,this.m,o,null),xo(this,o)),l==4&&tn(this),this.i&&!this.I&&(l==4?Qh(this.l,this):(this.i=!1,Us(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Be(12)):(this.o=0,Be(13)),tn(this),hs(this)}}}catch{}finally{}};function Ch(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Sh(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=sv(t,n),r==xr){e==4&&(t.o=4,Be(14),s=!1),_n(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Ao){t.o=4,Be(15),_n(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else _n(t.j,t.m,r,null),xo(t,r);Ch(t)&&r!=xr&&r!=Ao&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Be(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Oa(e),e.K=!0,Be(11))):(_n(t.j,t.m,n,"[Invalid Chunked Response]"),tn(t),hs(t))}N.hb=function(){if(this.g){var t=Et(this.g),e=this.g.fa();this.C<e.length&&(ai(this),Sh(this,t,e),this.i&&t!=4&&Us(this))}};function sv(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?xr:(n=Number(e.substring(n,s)),isNaN(n)?Ao:(s+=1,s+n>e.length?xr:(e=e.substr(s,n),t.C=s+n,e)))}N.cancel=function(){this.I=!0,tn(this)};function Us(t){t.V=Date.now()+t.O,Ah(t,t.O)}function Ah(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Fs(Me(t.gb,t),e)}function ai(t){t.B&&(P.clearTimeout(t.B),t.B=null)}N.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(ev(this.j,this.A),this.K!=2&&(Cs(),Be(17)),tn(this),this.o=2,hs(this)):Ah(this,this.V-t)};function hs(t){t.l.G==0||t.I||Qh(t.l,t)}function tn(t){ai(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ba(t.T),yh(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function xo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||No(n.h,t))){if(!t.J&&No(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Rr(n),hi(n);else break e;Ra(n),Be(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Fs(Me(n.cb,n),6e3));if(1>=Lh(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else nn(n,11)}else if((t.J||n.g==t)&&Rr(n),!Ar(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const f=u[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const C=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(C){var i=s.h;i.g||C.indexOf("spdy")==-1&&C.indexOf("quic")==-1&&C.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Aa(i,i.h),i.h=null))}if(s.D){const b=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.za=b,ae(s.F,s.D,b))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Jh(s,s.H?s.ka:null,s.V),o.J){Fh(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ai(a),Us(a)),s.g=o}else Gh(s);0<n.i.length&&fi(n)}else u[0]!="stop"&&u[0]!="close"||nn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?nn(n,7):ka(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Cs(4)}catch{}}function rv(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Jr(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function iv(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Jr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Dh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Jr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=iv(t),s=rv(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var xh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ov(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function cn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof cn){this.h=e!==void 0?e:t.h,Nr(this,t.j),this.s=t.s,this.g=t.g,kr(this,t.m),this.l=t.l,e=t.i;var n=new Ss;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),uu(this,n),this.o=t.o}else t&&(n=String(t).match(xh))?(this.h=!!e,Nr(this,n[1]||"",!0),this.s=is(n[2]||""),this.g=is(n[3]||"",!0),kr(this,n[4]),this.l=is(n[5]||"",!0),uu(this,n[6]||"",!0),this.o=is(n[7]||"")):(this.h=!!e,this.i=new Ss(null,this.h))}cn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(os(e,lu,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(os(e,lu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(os(n,n.charAt(0)=="/"?uv:cv,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",os(n,hv)),t.join("")};function _t(t){return new cn(t)}function Nr(t,e,n){t.j=n?is(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function kr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function uu(t,e,n){e instanceof Ss?(t.i=e,fv(t.i,t.h)):(n||(e=os(e,lv)),t.i=new Ss(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function ci(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function is(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function os(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,av),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function av(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var lu=/[#\/\?@]/g,cv=/[#\?:]/g,uv=/[#\?]/g,lv=/[#\?@]/g,hv=/#/g;function Ss(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function jt(t){t.g||(t.g=new Map,t.h=0,t.i&&ov(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Ss.prototype;N.add=function(t,e){jt(this),this.i=null,t=Qn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Nh(t,e){jt(t),e=Qn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function kh(t,e){return jt(t),e=Qn(t,e),t.g.has(e)}N.forEach=function(t,e){jt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};N.oa=function(){jt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};N.W=function(t){jt(this);let e=[];if(typeof t=="string")kh(this,t)&&(e=e.concat(this.g.get(Qn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return jt(this),this.i=null,t=Qn(this,t),kh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Rh(t,e,n){Nh(t,e),0<n.length&&(t.i=null,t.g.set(Qn(t,e),pa(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Qn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function fv(t,e){e&&!t.j&&(jt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Nh(this,s),Rh(this,r,n))},t)),t.j=e}var dv=class{constructor(e,n){this.h=e,this.g=n}};function Oh(t){this.l=t||pv,P.PerformanceNavigationTiming?(t=P.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(P.g&&P.g.Ga&&P.g.Ga()&&P.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var pv=10;function Mh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Lh(t){return t.h?1:t.g?t.g.size:0}function No(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Aa(t,e){t.g?t.g.add(e):t.h=e}function Fh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Oh.prototype.cancel=function(){if(this.i=Ph(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ph(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return pa(t.i)}function Da(){}Da.prototype.stringify=function(t){return P.JSON.stringify(t,void 0)};Da.prototype.parse=function(t){return P.JSON.parse(t,void 0)};function gv(){this.g=new Da}function mv(t,e,n){const s=n||"";try{Dh(t,function(r,i){let o=r;Ms(r)&&(o=Ta(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function yv(t,e){const n=new si;if(P.Image){const s=new Image;s.onload=rr(or,n,s,"TestLoadImage: loaded",!0,e),s.onerror=rr(or,n,s,"TestLoadImage: error",!1,e),s.onabort=rr(or,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=rr(or,n,s,"TestLoadImage: timeout",!1,e),P.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function or(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Bs(t){this.l=t.ac||null,this.j=t.jb||!1}De(Bs,Ia);Bs.prototype.g=function(){return new ui(this.l,this.j)};Bs.prototype.i=function(t){return function(){return t}}({});function ui(t,e){Ce.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=xa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(ui,Ce);var xa=0;N=ui.prototype;N.open=function(t,e){if(this.readyState!=xa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,As(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||P).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$s(this)),this.readyState=xa};N.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,As(this)),this.g&&(this.readyState=3,As(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof P.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vh(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Vh(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}N.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?$s(this):As(this),this.readyState==3&&Vh(this)}};N.Va=function(t){this.g&&(this.response=this.responseText=t,$s(this))};N.Ua=function(t){this.g&&(this.response=t,$s(this))};N.ga=function(){this.g&&$s(this)};function $s(t){t.readyState=4,t.l=null,t.j=null,t.A=null,As(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function As(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var vv=P.JSON.parse;function he(t){Ce.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Uh,this.K=this.L=!1}De(he,Ce);var Uh="",wv=/^https?$/i,Ev=["POST","PUT"];N=he.prototype;N.Ka=function(t){this.L=t};N.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():So.g(),this.C=this.u?cu(this.u):cu(So),this.g.onreadystatechange=Me(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){hu(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=P.FormData&&t instanceof P.FormData,!(0<=th(Ev,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{qh(this),0<this.B&&((this.K=Tv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Me(this.qa,this)):this.A=_a(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){hu(this,i)}};function Tv(t){return Fn&&Vy()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.qa=function(){typeof da<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function hu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Bh(t),li(t)}function Bh(t){t.D||(t.D=!0,Ae(t,"complete"),Ae(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ae(this,"complete"),Ae(this,"abort"),li(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),li(this,!0)),he.X.M.call(this)};N.Ha=function(){this.s||(this.F||this.v||this.l?$h(this):this.fb())};N.fb=function(){$h(this)};function $h(t){if(t.h&&typeof da<"u"&&(!t.C[1]||Et(t)!=4||t.aa()!=2)){if(t.v&&Et(t)==4)_a(t.Ha,0,t);else if(Ae(t,"readystatechange"),Et(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(xh)[1]||null;if(!r&&P.self&&P.self.location){var i=P.self.location.protocol;r=i.substr(0,i.length-1)}s=!wv.test(r?r.toLowerCase():"")}n=s}if(n)Ae(t,"complete"),Ae(t,"success");else{t.m=6;try{var o=2<Et(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Bh(t)}}finally{li(t)}}}}function li(t,e){if(t.g){qh(t);const n=t.g,s=t.C[0]?Sr:null;t.g=null,t.C=null,e||Ae(t,"ready");try{n.onreadystatechange=s}catch{}}}function qh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(P.clearTimeout(t.A),t.A=null)}function Et(t){return t.g?t.g.readyState:0}N.aa=function(){try{return 2<Et(this)?this.g.status:-1}catch{return-1}};N.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),vv(e)}};function fu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Uh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Ea=function(){return this.m};N.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jh(t){let e="";return ma(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Na(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=jh(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function ss(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Hh(t){this.Ca=0,this.i=[],this.j=new si,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ss("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ss("baseRetryDelayMs",5e3,t),this.bb=ss("retryDelaySeedMs",1e4,t),this.$a=ss("forwardChannelMaxRetries",2,t),this.ta=ss("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Oh(t&&t.concurrentRequestLimit),this.Fa=new gv,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}N=Hh.prototype;N.ma=8;N.G=1;function ka(t){if(Kh(t),t.G==3){var e=t.U++,n=_t(t.F);ae(n,"SID",t.I),ae(n,"RID",e),ae(n,"TYPE","terminate"),qs(t,n),e=new Vs(t,t.j,e,void 0),e.K=2,e.v=ci(_t(n)),n=!1,P.navigator&&P.navigator.sendBeacon&&(n=P.navigator.sendBeacon(e.v.toString(),"")),!n&&P.Image&&(new Image().src=e.v,n=!0),n||(e.g=Zh(e.l,null),e.g.da(e.v)),e.F=Date.now(),Us(e)}Xh(t)}function hi(t){t.g&&(Oa(t),t.g.cancel(),t.g=null)}function Kh(t){hi(t),t.u&&(P.clearTimeout(t.u),t.u=null),Rr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&P.clearTimeout(t.m),t.m=null)}function fi(t){Mh(t.h)||t.m||(t.m=!0,dh(t.Ja,t),t.C=0)}function bv(t,e){return Lh(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Fs(Me(t.Ja,t,e),Yh(t,t.C)),t.C++,!0)}N.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Vs(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=ih(i),oh(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=zh(this,r,e),n=_t(this.F),ae(n,"RID",t),ae(n,"CVER",22),this.D&&ae(n,"X-HTTP-Session-Id",this.D),qs(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(jh(i)))+"&"+e:this.o&&Na(n,this.o,i)),Aa(this.h,r),this.Ya&&ae(n,"TYPE","init"),this.O?(ae(n,"$req",e),ae(n,"SID","null"),r.Z=!0,Do(r,n,null)):Do(r,n,e),this.G=2}}else this.G==3&&(t?du(this,t):this.i.length==0||Mh(this.h)||du(this))};function du(t,e){var n;e?n=e.m:n=t.U++;const s=_t(t.F);ae(s,"SID",t.I),ae(s,"RID",n),ae(s,"AID",t.T),qs(t,s),t.o&&t.s&&Na(s,t.o,t.s),n=new Vs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=zh(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Aa(t.h,n),Do(n,s,e)}function qs(t,e){t.ia&&ma(t.ia,function(n,s){ae(e,s,n)}),t.l&&Dh({},function(n,s){ae(e,s,n)})}function zh(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Me(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{mv(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Gh(t){t.g||t.u||(t.Z=1,dh(t.Ia,t),t.A=0)}function Ra(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Fs(Me(t.Ia,t),Yh(t,t.A)),t.A++,!0)}N.Ia=function(){if(this.u=null,Wh(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Fs(Me(this.eb,this),t)}};N.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Be(10),hi(this),Wh(this))};function Oa(t){t.B!=null&&(P.clearTimeout(t.B),t.B=null)}function Wh(t){t.g=new Vs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=_t(t.sa);ae(e,"RID","rpc"),ae(e,"SID",t.I),ae(e,"CI",t.L?"0":"1"),ae(e,"AID",t.T),ae(e,"TYPE","xmlhttp"),qs(t,e),t.o&&t.s&&Na(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ci(_t(e)),n.s=null,n.P=!0,Ih(n,t)}N.cb=function(){this.v!=null&&(this.v=null,hi(this),Ra(this),Be(19))};function Rr(t){t.v!=null&&(P.clearTimeout(t.v),t.v=null)}function Qh(t,e){var n=null;if(t.g==e){Rr(t),Oa(t),t.g=null;var s=2}else if(No(t.h,e))n=e.D,Fh(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ri(),Ae(s,new Eh(s,n)),fi(t)}else Gh(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&bv(t,e)||s==2&&Ra(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:nn(t,5);break;case 4:nn(t,10);break;case 3:nn(t,6);break;default:nn(t,2)}}}function Yh(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function nn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Me(t.kb,t);n||(n=new cn("//www.google.com/images/cleardot.gif"),P.location&&P.location.protocol=="http"||Nr(n,"https"),ci(n)),yv(n.toString(),s)}else Be(2);t.G=0,t.l&&t.l.va(e),Xh(t),Kh(t)}N.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function Xh(t){if(t.G=0,t.la=[],t.l){const e=Ph(t.h);(e.length!=0||t.i.length!=0)&&(nu(t.la,e),nu(t.la,t.i),t.h.i.length=0,pa(t.i),t.i.length=0),t.l.ua()}}function Jh(t,e,n){var s=n instanceof cn?_t(n):new cn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),kr(s,s.m);else{var r=P.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new cn(null,void 0);s&&Nr(i,s),e&&(i.g=e),r&&kr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ae(s,n,e),ae(s,"VER",t.ma),qs(t,s),s}function Zh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new he(new Bs({jb:!0})):new he(t.ra),e.Ka(t.H),e}function ef(){}N=ef.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Ra=function(){};function Or(){if(Fn&&!(10<=Number(Uy)))throw Error("Environmental error: no available transport.")}Or.prototype.g=function(t,e){return new We(t,e)};function We(t,e){Ce.call(this),this.g=new Hh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ar(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ar(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Yn(this)}De(We,Ce);We.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Be(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Jh(t,null,t.V),fi(t)};We.prototype.close=function(){ka(this.g)};We.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ta(t),t=n);e.i.push(new dv(e.ab++,t)),e.G==3&&fi(e)};We.prototype.M=function(){this.g.l=null,delete this.j,ka(this.g),delete this.g,We.X.M.call(this)};function tf(t){Ca.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}De(tf,Ca);function nf(){Sa.call(this),this.status=1}De(nf,Sa);function Yn(t){this.g=t}De(Yn,ef);Yn.prototype.xa=function(){Ae(this.g,"a")};Yn.prototype.wa=function(t){Ae(this.g,new tf(t))};Yn.prototype.va=function(t){Ae(this.g,new nf)};Yn.prototype.ua=function(){Ae(this.g,"b")};Or.prototype.createWebChannel=Or.prototype.g;We.prototype.send=We.prototype.u;We.prototype.open=We.prototype.m;We.prototype.close=We.prototype.close;ii.NO_ERROR=0;ii.TIMEOUT=8;ii.HTTP_ERROR=6;Th.COMPLETE="complete";bh.EventType=Ps;Ps.OPEN="a";Ps.CLOSE="b";Ps.ERROR="c";Ps.MESSAGE="d";Ce.prototype.listen=Ce.prototype.N;he.prototype.listenOnce=he.prototype.O;he.prototype.getLastError=he.prototype.Oa;he.prototype.getLastErrorCode=he.prototype.Ea;he.prototype.getStatus=he.prototype.aa;he.prototype.getResponseJson=he.prototype.Sa;he.prototype.getResponseText=he.prototype.fa;he.prototype.send=he.prototype.da;he.prototype.setWithCredentials=he.prototype.Ka;var _v=function(){return new Or},Iv=function(){return ri()},Yi=ii,Cv=Th,Sv=pn,pu={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Av=Bs,ar=bh,Dv=he;const gu="@firebase/firestore";/**
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
 */class xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");/**
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
 */let Xn="9.17.1";/**
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
 */const fn=new Ql("@firebase/firestore");function mu(){return fn.logLevel}function k(t,...e){if(fn.logLevel<=X.DEBUG){const n=e.map(Ma);fn.debug(`Firestore (${Xn}): ${t}`,...n)}}function It(t,...e){if(fn.logLevel<=X.ERROR){const n=e.map(Ma);fn.error(`Firestore (${Xn}): ${t}`,...n)}}function ko(t,...e){if(fn.logLevel<=X.WARN){const n=e.map(Ma);fn.warn(`Firestore (${Xn}): ${t}`,...n)}}function Ma(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function F(t="Unexpected state"){const e=`FIRESTORE (${Xn}) INTERNAL ASSERTION FAILED: `+t;throw It(e),new Error(e)}function re(t,e){t||F()}function q(t,e){return t}/**
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
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class sf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xe.UNAUTHENTICATED))}shutdown(){}}class Nv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kv{constructor(e){this.t=e,this.currentUser=xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new un,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string"),new sf(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new xe(e)}}class Rv{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=xe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(re(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Ov{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Rv(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lv{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.A=n.token,new Mv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Fv(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class rf{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Fv(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function J(t,e){return t<e?-1:t>e?1:0}function Pn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class we{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new we(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new we(0,0))}static max(){return new B(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ds{constructor(e,n,s){n===void 0?n=0:n>e.length&&F(),s===void 0?s=e.length-n:s>e.length-n&&F(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ds.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ds?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends Ds{construct(e,n,s){return new oe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new D(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const Pv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends Ds{construct(e,n,s){return new Re(e,n,s)}static isValidIdentifier(e){return Pv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Re(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new D(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new D(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new D(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(n)}static emptyPath(){return new Re([])}}/**
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
 */class R{constructor(e){this.path=e}static fromPath(e){return new R(oe.fromString(e))}static fromName(e){return new R(oe.fromString(e).popFirst(5))}static empty(){return new R(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new R(new oe(e.slice()))}}function Vv(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=B.fromTimestamp(s===1e9?new we(n+1,0):new we(n,s));return new Ut(r,R.empty(),e)}function Uv(t){return new Ut(t.readTime,t.key,-1)}class Ut{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ut(B.min(),R.empty(),-1)}static max(){return new Ut(B.max(),R.empty(),-1)}}function Bv(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=R.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
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
 */const $v="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function js(t){if(t.code!==y.FAILED_PRECONDITION||t.message!==$v)throw t;k("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Hs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class La{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}La.at=-1;/**
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
 */class jv{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class xs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function yu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function of(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function di(t){return t==null}function Mr(t){return t===0&&1/t==-1/0}function Hv(t){return typeof t=="number"&&Number.isInteger(t)&&!Mr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Pe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Pe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const Kv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bt(t){if(re(!!t),typeof t=="string"){let e=0;const n=Kv.exec(t);if(re(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vn(t){return typeof t=="string"?Pe.fromBase64String(t):Pe.fromUint8Array(t)}/**
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
 */function af(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cf(t){const e=t.mapValue.fields.__previous_value__;return af(e)?cf(e):e}function Ns(t){const e=Bt(t.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
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
 */const cr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function dn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?af(t)?4:zv(t)?9007199254740991:10:F()}function mt(t,e){if(t===e)return!0;const n=dn(t);if(n!==dn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ns(t).isEqual(Ns(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Bt(s.timestampValue),o=Bt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Vn(s.bytesValue).isEqual(Vn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return me(s.geoPointValue.latitude)===me(r.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return me(s.integerValue)===me(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=me(s.doubleValue),o=me(r.doubleValue);return i===o?Mr(i)===Mr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Pn(t.arrayValue.values||[],e.arrayValue.values||[],mt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(yu(i)!==yu(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!mt(i[a],o[a])))return!1;return!0}(t,e);default:return F()}}function ks(t,e){return(t.values||[]).find(n=>mt(n,e))!==void 0}function Un(t,e){if(t===e)return 0;const n=dn(t),s=dn(e);if(n!==s)return J(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=me(r.integerValue||r.doubleValue),a=me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return vu(t.timestampValue,e.timestampValue);case 4:return vu(Ns(t),Ns(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Vn(r),a=Vn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=J(o[c],a[c]);if(u!==0)return u}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=J(me(r.latitude),me(i.latitude));return o!==0?o:J(me(r.longitude),me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Un(o[c],a[c]);if(u)return u}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===cr.mapValue&&i===cr.mapValue)return 0;if(r===cr.mapValue)return 1;if(i===cr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const f=J(a[l],u[l]);if(f!==0)return f;const p=Un(o[a[l]],c[u[l]]);if(p!==0)return p}return J(a.length,u.length)}(t.mapValue,e.mapValue);default:throw F()}}function vu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=Bt(t),s=Bt(e),r=J(n.seconds,s.seconds);return r!==0?r:J(n.nanos,s.nanos)}function Bn(t){return Ro(t)}function Ro(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Bt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Vn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,R.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ro(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ro(s.fields[a])}`;return i+"}"}(t.mapValue):F();var e,n}function wu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Oo(t){return!!t&&"integerValue"in t}function Fa(t){return!!t&&"arrayValue"in t}function Eu(t){return!!t&&"nullValue"in t}function Tu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gr(t){return!!t&&"mapValue"in t}function fs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=fs(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zv(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Lr{constructor(e,n){this.position=e,this.inclusive=n}}function bu(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=R.comparator(R.fromName(o.referenceValue),n.key):s=Un(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function _u(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class uf{}class ve extends uf{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Wv(e,n,s):n==="array-contains"?new Xv(e,s):n==="in"?new Jv(e,s):n==="not-in"?new Zv(e,s):n==="array-contains-any"?new ew(e,s):new ve(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Qv(e,s):new Yv(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Un(n,this.value)):n!==null&&dn(this.value)===dn(n)&&this.matchesComparison(Un(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ot extends uf{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ot(e,n)}matches(e){return lf(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function lf(t){return t.op==="and"}function hf(t){return Gv(t)&&lf(t)}function Gv(t){for(const e of t.filters)if(e instanceof ot)return!1;return!0}function Mo(t){if(t instanceof ve)return t.field.canonicalString()+t.op.toString()+Bn(t.value);if(hf(t))return t.filters.map(e=>Mo(e)).join(",");{const e=t.filters.map(n=>Mo(n)).join(",");return`${t.op}(${e})`}}function ff(t,e){return t instanceof ve?function(n,s){return s instanceof ve&&n.op===s.op&&n.field.isEqual(s.field)&&mt(n.value,s.value)}(t,e):t instanceof ot?function(n,s){return s instanceof ot&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&ff(i,s.filters[o]),!0):!1}(t,e):void F()}function df(t){return t instanceof ve?function(e){return`${e.field.canonicalString()} ${e.op} ${Bn(e.value)}`}(t):t instanceof ot?function(e){return e.op.toString()+" {"+e.getFilters().map(df).join(" ,")+"}"}(t):"Filter"}class Wv extends ve{constructor(e,n,s){super(e,n,s),this.key=R.fromName(s.referenceValue)}matches(e){const n=R.comparator(e.key,this.key);return this.matchesComparison(n)}}class Qv extends ve{constructor(e,n){super(e,"in",n),this.keys=pf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Yv extends ve{constructor(e,n){super(e,"not-in",n),this.keys=pf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>R.fromName(s.referenceValue))}class Xv extends ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fa(n)&&ks(n.arrayValue,this.value)}}class Jv extends ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ks(this.value.arrayValue,n)}}class Zv extends ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(ks(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ks(this.value.arrayValue,n)}}class ew extends ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ks(this.value.arrayValue,s))}}/**
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
 */class Nn{constructor(e,n="asc"){this.field=e,this.dir=n}}function tw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class be{constructor(e,n){this.comparator=e,this.root=n||Se.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ur(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ur(this.root,e,this.comparator,!1)}getReverseIterator(){return new ur(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ur(this.root,e,this.comparator,!0)}}class ur{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Se.RED,this.left=r??Se.EMPTY,this.right=i??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Se(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Se.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Se(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ee{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Iu(this.data.getIterator())}getIteratorFrom(e){return new Iu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ee(this.comparator);return n.data=e,n}}class Iu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ge{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new Ge([])}unionWith(e){let n=new Ee(Re.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ge(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Pn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!gr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fs(n)}setAll(e){let n=Re.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=fs(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());gr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];gr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){gn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new qe(fs(this.value))}}function gf(t){const e=[];return gn(t.fields,(n,s)=>{const r=new Re([n]);if(gr(s)){const i=gf(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ge(e)}/**
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
 */class Ne{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ne(e,0,B.min(),B.min(),B.min(),qe.empty(),0)}static newFoundDocument(e,n,s,r){return new Ne(e,1,n,B.min(),s,r,0)}static newNoDocument(e,n){return new Ne(e,2,n,B.min(),B.min(),qe.empty(),0)}static newUnknownDocument(e,n){return new Ne(e,3,n,B.min(),B.min(),qe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nw{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Cu(t,e=null,n=[],s=[],r=null,i=null,o=null){return new nw(t,e,n,s,r,i,o)}function Pa(t){const e=q(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Mo(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),di(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Bn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Bn(s)).join(",")),e.ft=n}return e.ft}function Va(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ff(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_u(t.startAt,e.startAt)&&_u(t.endAt,e.endAt)}function Lo(t){return R.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Jn{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function sw(t,e,n,s,r,i,o,a){return new Jn(t,e,n,s,r,i,o,a)}function Ua(t){return new Jn(t)}function Su(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ba(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function pi(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function mf(t){return t.collectionGroup!==null}function kn(t){const e=q(t);if(e.dt===null){e.dt=[];const n=pi(e),s=Ba(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Nn(n)),e.dt.push(new Nn(Re.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Nn(Re.keyField(),i))}}}return e.dt}function Ct(t){const e=q(t);if(!e._t)if(e.limitType==="F")e._t=Cu(e.path,e.collectionGroup,kn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of kn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Nn(i.field,o))}const s=e.endAt?new Lr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Lr(e.startAt.position,e.startAt.inclusive):null;e._t=Cu(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Fo(t,e){e.getFirstInequalityField(),pi(t);const n=t.filters.concat([e]);return new Jn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Po(t,e,n){return new Jn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gi(t,e){return Va(Ct(t),Ct(e))&&t.limitType===e.limitType}function yf(t){return`${Pa(Ct(t))}|lt:${t.limitType}`}function Vo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>df(s)).join(", ")}]`),di(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Bn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Bn(s)).join(",")),`Target(${n})`}(Ct(t))}; limitType=${t.limitType})`}function mi(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):R.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of kn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=bu(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,kn(n),s)||n.endAt&&!function(r,i,o){const a=bu(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,kn(n),s))}(t,e)}function rw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vf(t){return(e,n)=>{let s=!1;for(const r of kn(t)){const i=iw(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function iw(t,e,n){const s=t.field.isKeyField()?R.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Un(a,c):F()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return F()}}/**
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
 */function wf(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mr(e)?"-0":e}}function Ef(t){return{integerValue:""+t}}function ow(t,e){return Hv(e)?Ef(e):wf(t,e)}/**
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
 */class yi{constructor(){this._=void 0}}function aw(t,e,n){return t instanceof Fr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Rs?bf(t,e):t instanceof Os?_f(t,e):function(s,r){const i=Tf(s,r),o=Au(i)+Au(s.gt);return Oo(i)&&Oo(s.gt)?Ef(o):wf(s.yt,o)}(t,e)}function cw(t,e,n){return t instanceof Rs?bf(t,e):t instanceof Os?_f(t,e):n}function Tf(t,e){return t instanceof Pr?Oo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Fr extends yi{}class Rs extends yi{constructor(e){super(),this.elements=e}}function bf(t,e){const n=If(e);for(const s of t.elements)n.some(r=>mt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Os extends yi{constructor(e){super(),this.elements=e}}function _f(t,e){let n=If(e);for(const s of t.elements)n=n.filter(r=>!mt(r,s));return{arrayValue:{values:n}}}class Pr extends yi{constructor(e,n){super(),this.yt=e,this.gt=n}}function Au(t){return me(t.integerValue||t.doubleValue)}function If(t){return Fa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function uw(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Rs&&s instanceof Rs||n instanceof Os&&s instanceof Os?Pn(n.elements,s.elements,mt):n instanceof Pr&&s instanceof Pr?mt(n.gt,s.gt):n instanceof Fr&&s instanceof Fr}(t.transform,e.transform)}class lw{constructor(e,n){this.version=e,this.transformResults=n}}class it{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new it}static exists(e){return new it(void 0,e)}static updateTime(e){return new it(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vi{}function Cf(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $a(t.key,it.none()):new Ks(t.key,t.data,it.none());{const n=t.data,s=qe.empty();let r=new Ee(Re.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ht(t.key,s,new Ge(r.toArray()),it.none())}}function hw(t,e,n){t instanceof Ks?function(s,r,i){const o=s.value.clone(),a=xu(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ht?function(s,r,i){if(!mr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=xu(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Sf(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function ds(t,e,n,s){return t instanceof Ks?function(r,i,o,a){if(!mr(r.precondition,i))return o;const c=r.value.clone(),u=Nu(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ht?function(r,i,o,a){if(!mr(r.precondition,i))return o;const c=Nu(r.fieldTransforms,a,i),u=i.data;return u.setAll(Sf(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return mr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function fw(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Tf(s.transform,r||null);i!=null&&(n===null&&(n=qe.empty()),n.set(s.field,i))}return n||null}function Du(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Pn(n,s,(r,i)=>uw(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ks extends vi{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ht extends vi{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sf(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function xu(t,e,n){const s=new Map;re(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,cw(o,a,n[r]))}return s}function Nu(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,aw(i,o,e))}return s}class $a extends vi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dw extends vi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pw{constructor(e){this.count=e}}/**
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
 */var pe,W;function gw(t){switch(t){default:return F();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function Af(t){if(t===void 0)return It("GRPC error has no .code"),y.UNKNOWN;switch(t){case pe.OK:return y.OK;case pe.CANCELLED:return y.CANCELLED;case pe.UNKNOWN:return y.UNKNOWN;case pe.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case pe.INTERNAL:return y.INTERNAL;case pe.UNAVAILABLE:return y.UNAVAILABLE;case pe.UNAUTHENTICATED:return y.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case pe.NOT_FOUND:return y.NOT_FOUND;case pe.ALREADY_EXISTS:return y.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return y.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case pe.ABORTED:return y.ABORTED;case pe.OUT_OF_RANGE:return y.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return y.UNIMPLEMENTED;case pe.DATA_LOSS:return y.DATA_LOSS;default:return F()}}(W=pe||(pe={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Zn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){gn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return of(this.inner)}size(){return this.innerSize}}/**
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
 */const mw=new be(R.comparator);function St(){return mw}const Df=new be(R.comparator);function as(...t){let e=Df;for(const n of t)e=e.insert(n.key,n);return e}function xf(t){let e=Df;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function sn(){return ps()}function Nf(){return ps()}function ps(){return new Zn(t=>t.toString(),(t,e)=>t.isEqual(e))}const yw=new be(R.comparator),vw=new Ee(R.comparator);function G(...t){let e=vw;for(const n of t)e=e.add(n);return e}const ww=new Ee(J);function kf(){return ww}/**
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
 */class wi{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,zs.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new wi(B.min(),r,kf(),St(),G())}}class zs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new zs(s,n,G(),G(),G())}}/**
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
 */class yr{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Rf{constructor(e,n){this.targetId=e,this.Et=n}}class Of{constructor(e,n,s=Pe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ku{constructor(){this.At=0,this.Rt=Ou(),this.bt=Pe.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=G(),n=G(),s=G();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:F()}}),new zs(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Ou()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Ew{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=St(),this.qt=Ru(),this.Ut=new Ee(J)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Lo(i))if(s===0){const o=new R(i.path);this.Qt(n,o,Ne.newNoDocument(o,B.min()))}else re(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Lo(a.target)){const c=new R(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Ne.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=G();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new wi(e,n,this.Ut,this.Lt,s);return this.Lt=St(),this.qt=Ru(),this.Ut=new Ee(J),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new ku,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ee(J),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||k("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new ku),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Ru(){return new be(R.comparator)}function Ou(){return new be(R.comparator)}/**
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
 */const Tw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),_w=(()=>({and:"AND",or:"OR"}))();class Iw{constructor(e,n){this.databaseId=e,this.wt=n}}function Vr(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mf(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Cw(t,e){return Vr(t,e.toTimestamp())}function pt(t){return re(!!t),B.fromTimestamp(function(e){const n=Bt(e);return new we(n.seconds,n.nanos)}(t))}function qa(t,e){return function(n){return new oe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Lf(t){const e=oe.fromString(t);return re(Uf(e)),e}function Uo(t,e){return qa(t.databaseId,e.path)}function Xi(t,e){const n=Lf(e);if(n.get(1)!==t.databaseId.projectId)throw new D(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new R(Ff(n))}function Bo(t,e){return qa(t.databaseId,e)}function Sw(t){const e=Lf(t);return e.length===4?oe.emptyPath():Ff(e)}function $o(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ff(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Mu(t,e,n){return{name:Uo(t,e),fields:n.value.mapValue.fields}}function Aw(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(re(u===void 0||typeof u=="string"),Pe.fromBase64String(u||"")):(re(u===void 0||u instanceof Uint8Array),Pe.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?y.UNKNOWN:Af(c.code);return new D(u,c.message||"")}(o);n=new Of(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Xi(t,s.document.name),i=pt(s.document.updateTime),o=s.document.createTime?pt(s.document.createTime):B.min(),a=new qe({mapValue:{fields:s.document.fields}}),c=Ne.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new yr(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Xi(t,s.document),i=s.readTime?pt(s.readTime):B.min(),o=Ne.newNoDocument(r,i),a=s.removedTargetIds||[];n=new yr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Xi(t,s.document),i=s.removedTargetIds||[];n=new yr([],i,r,null)}else{if(!("filter"in e))return F();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new pw(r),o=s.targetId;n=new Rf(o,i)}}return n}function Dw(t,e){let n;if(e instanceof Ks)n={update:Mu(t,e.key,e.value)};else if(e instanceof $a)n={delete:Uo(t,e.key)};else if(e instanceof Ht)n={update:Mu(t,e.key,e.data),updateMask:Pw(e.fieldMask)};else{if(!(e instanceof dw))return F();n={verify:Uo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Fr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Rs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Os)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Pr)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw F()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Cw(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:F()}(t,e.precondition)),n}function xw(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?pt(s.updateTime):pt(r);return i.isEqual(B.min())&&(i=pt(r)),new lw(i,s.transformResults||[])}(n,e))):[]}function Nw(t,e){return{documents:[Bo(t,e.path)]}}function kw(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Bo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Bo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Vf(ot.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Tn(l.field),direction:Mw(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||di(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Rw(t){let e=Sw(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){re(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const f=Pf(l);return f instanceof ot&&hf(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(f){return new Nn(bn(f.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(l)));let a=null;n.limit&&(a=function(l){let f;return f=typeof l=="object"?l.value:l,di(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(l){const f=!!l.before,p=l.values||[];return new Lr(p,f)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const f=!l.before,p=l.values||[];return new Lr(p,f)}(n.endAt)),sw(e,r,o,i,a,"F",c,u)}function Ow(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return F()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Pf(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=bn(e.unaryFilter.field);return ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=bn(e.unaryFilter.field);return ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=bn(e.unaryFilter.field);return ve.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=bn(e.unaryFilter.field);return ve.create(i,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(e){return ve.create(bn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ot.create(e.compositeFilter.filters.map(n=>Pf(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(t):F()}function Mw(t){return Tw[t]}function Lw(t){return bw[t]}function Fw(t){return _w[t]}function Tn(t){return{fieldPath:t.canonicalString()}}function bn(t){return Re.fromServerFormat(t.fieldPath)}function Vf(t){return t instanceof ve?function(e){if(e.op==="=="){if(Tu(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NAN"}};if(Eu(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Tu(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NOT_NAN"}};if(Eu(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tn(e.field),op:Lw(e.op),value:e.value}}}(t):t instanceof ot?function(e){const n=e.getFilters().map(s=>Vf(s));return n.length===1?n[0]:{compositeFilter:{op:Fw(e.op),filters:n}}}(t):F()}function Pw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Uf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Vw{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&hw(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ds(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ds(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Nf();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Cf(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(B.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),G())}isEqual(e){return this.batchId===e.batchId&&Pn(this.mutations,e.mutations,(n,s)=>Du(n,s))&&Pn(this.baseMutations,e.baseMutations,(n,s)=>Du(n,s))}}class ja{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){re(e.mutations.length===s.length);let r=yw;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ja(e,n,s,r)}}/**
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
 */class Uw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ln{constructor(e,n,s,r,i=B.min(),o=B.min(),a=Pe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Bw{constructor(e){this.ie=e}}function $w(t){const e=Rw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Po(e,e.limit,"L"):e}/**
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
 */class qw{constructor(){this.Je=new jw}addToCollectionParentIndex(e,n){return this.Je.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Ut.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Ut.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class jw{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ee(oe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ee(oe.comparator)).toArray()}}/**
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
 */class $n{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new $n(0)}static vn(){return new $n(-1)}}/**
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
 */class Hw{constructor(){this.changes=new Zn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Kw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zw{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&ds(s.mutation,r,Ge.empty(),we.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,G()).next(()=>s))}getLocalViewOfDocuments(e,n,s=G()){const r=sn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=as();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=sn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,G()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=St();const o=ps(),a=ps();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Ht)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),ds(l.mutation,u,l.mutation.getFieldMask(),we.now())):o.set(u.key,Ge.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var f;return a.set(u,new Kw(l,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ps();let r=new be((o,a)=>o-a),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Ge.empty();l=a.applyToLocalView(u,l),s.set(c,l);const f=(r.get(a.batchId)||G()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,f=Nf();l.forEach(p=>{if(!i.has(p)){const m=Cf(n.get(p),s.get(p));m!==null&&f.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return R.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(sn());let a=-1,c=i;return o.next(u=>T.forEach(u,(l,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(l)?T.resolve():this.remoteDocumentCache.getEntry(e,l).next(p=>{c=c.insert(l,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,G())).next(l=>({batchId:a,changes:xf(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new R(n)).next(s=>{let r=as();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=as();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(u,l){return new Jn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,f)=>{i=i.insert(l,f)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,Ne.newInvalidDocument(u)))});let o=as();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&ds(u.mutation,c,Ge.empty(),we.now()),mi(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class Gw{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:pt(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:$w(s.bundledQuery),readTime:pt(s.readTime)}}(n)),T.resolve()}}/**
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
 */class Ww{constructor(){this.overlays=new be(R.comparator),this.es=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=sn();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=sn(),i=n.length+1,o=new R(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new be((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=sn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=sn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return T.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Uw(n,s));let i=this.es.get(n);i===void 0&&(i=G(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class Ha{constructor(){this.ns=new Ee(Ie.ss),this.rs=new Ee(Ie.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Ie(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Ie(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new R(new oe([])),s=new Ie(n,e),r=new Ie(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new R(new oe([])),s=new Ie(n,e),r=new Ie(n,e+1);let i=G();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ie(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ie{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return R.comparator(e.key,n.key)||J(e._s,n._s)}static os(e,n){return J(e._s,n._s)||R.comparator(e.key,n.key)}}/**
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
 */class Qw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ee(Ie.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Vw(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Ie(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ie(n,0),r=new Ie(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ee(J);return n.forEach(r=>{const i=new Ie(r,0),o=new Ie(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),T.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;R.isDocumentKey(i)||(i=i.child(""));const o=new Ie(new R(i),0);let a=new Ee(J);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){re(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return T.forEach(n.mutations,r=>{const i=new Ie(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Ie(n,0),r=this.gs.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Yw{constructor(e){this.Es=e,this.docs=new be(R.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():Ne.newInvalidDocument(n))}getEntries(e,n){let s=St();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ne.newInvalidDocument(r))}),T.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=St();const o=n.path,a=new R(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Bv(Uv(l),s)<=0||(r.has(l.key)||mi(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,s,r){F()}As(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Xw(this)}getSize(e){return T.resolve(this.size)}}class Xw extends Hw{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class Jw{constructor(e){this.persistence=e,this.Rs=new Zn(n=>Pa(n),Va),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ha,this.targetCount=0,this.vs=$n.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),T.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new $n(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Dn(n),T.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.Ps.containsKey(n))}}/**
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
 */class Zw{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new La(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Jw(this),this.indexManager=new qw,this.remoteDocumentCache=function(s){return new Yw(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new Bw(n),this.Ns=new Gw(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ww,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Qw(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){k("MemoryPersistence","Starting transaction:",e);const r=new e0(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return T.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class e0 extends qv{constructor(e){super(),this.currentSequenceNumber=e}}class Ka{constructor(e){this.persistence=e,this.Fs=new Ha,this.$s=null}static Bs(e){return new Ka(e)}get Ls(){if(this.$s)return this.$s;throw F()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),T.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,s=>{const r=R.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,B.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return T.or([()=>T.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class za{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=G(),r=G();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new za(e,n.fromCache,s,r)}}/**
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
 */class t0{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Su(n))return T.resolve(null);let s=Ct(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Po(n,null,"F"),s=Ct(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=G(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Po(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return Su(n)||r.isEqual(B.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(mu()<=X.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Vo(n)),this.Bi(e,o,n,Vv(r,-1)))})}Fi(e,n){let s=new Ee(vf(e));return n.forEach((r,i)=>{mi(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return mu()<=X.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Vo(n)),this.Ni.getDocumentsMatchingQuery(e,n,Ut.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class n0{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new be(J),this.Ui=new Zn(i=>Pa(i),Va),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zw(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function s0(t,e,n,s){return new n0(t,e,n,s)}async function Bf(t,e){const n=q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=G();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function r0(t,e){const n=q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,f=l.keys();let p=T.resolve();return f.forEach(m=>{p=p.next(()=>u.getEntry(a,m)).next(C=>{const b=c.docVersions.get(m);re(b!==null),C.version.compareTo(b)<0&&(l.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),u.addEntry(C)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=G();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function $f(t){const e=q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function i0(t,e){const n=q(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((l,f)=>{const p=r.get(f);if(!p)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,f)));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(f)?m=m.withResumeToken(Pe.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,s)),r=r.insert(f,m),function(C,b,L){return C.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(p,m,l)&&a.push(n.Cs.updateTargetData(i,m))});let c=St(),u=G();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(o0(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(B.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(f=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function o0(t,e,n){let s=G(),r=G();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=St();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(B.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function a0(t,e){const n=q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function c0(t,e){const n=q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new ln(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function qo(t,e,n){const s=q(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Hs(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function Lu(t,e,n){const s=q(t);let r=B.min(),i=G();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=q(a),f=l.Ui.get(u);return f!==void 0?T.resolve(l.qi.get(f)):l.Cs.getTargetData(c,u)}(s,o,Ct(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:B.min(),n?i:G())).next(a=>(u0(s,rw(e),a),{documents:a,Hi:i})))}function u0(t,e,n){let s=t.Ki.get(e)||B.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Fu{constructor(){this.activeTargetIds=kf()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class l0{constructor(){this.Lr=new Fu,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Fu,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class h0{Ur(e){}shutdown(){}}/**
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
 */class Pu{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const f0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class d0{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class p0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);k("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(k("RestConnection","Received: ",c),c),c=>{throw ko("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Xn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=f0[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new Dv;a.setWithCredentials(!0),a.listenOnce(Cv.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Yi.NO_ERROR:const u=a.getResponseJson();k("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Yi.TIMEOUT:k("Connection",'RPC "'+e+'" timed out'),o(new D(y.DEADLINE_EXCEEDED,"Request time out"));break;case Yi.HTTP_ERROR:const l=a.getStatus();if(k("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let f=a.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const m=function(C){const b=C.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(b)>=0?b:y.UNKNOWN}(p.status);o(new D(m,p.message))}else o(new D(y.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new D(y.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{k("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=_v(),o=Iv(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Av({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");k("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,f=!1;const p=new d0({Hr:C=>{f?k("Connection","Not sending because WebChannel is closed:",C):(l||(k("Connection","Opening WebChannel transport."),u.open(),l=!0),k("Connection","WebChannel sending:",C),u.send(C))},Jr:()=>u.close()}),m=(C,b,L)=>{C.listen(b,j=>{try{L(j)}catch(Z){setTimeout(()=>{throw Z},0)}})};return m(u,ar.EventType.OPEN,()=>{f||k("Connection","WebChannel transport opened.")}),m(u,ar.EventType.CLOSE,()=>{f||(f=!0,k("Connection","WebChannel transport closed"),p.io())}),m(u,ar.EventType.ERROR,C=>{f||(f=!0,ko("Connection","WebChannel transport errored:",C),p.io(new D(y.UNAVAILABLE,"The operation could not be completed")))}),m(u,ar.EventType.MESSAGE,C=>{var b;if(!f){const L=C.data[0];re(!!L);const j=L,Z=j.error||((b=j[0])===null||b===void 0?void 0:b.error);if(Z){k("Connection","WebChannel received error:",Z);const V=Z.status;let ee=function(Dt){const Ze=pe[Dt];if(Ze!==void 0)return Af(Ze)}(V),fe=Z.message;ee===void 0&&(ee=y.INTERNAL,fe="Unknown error status: "+V+" with message "+Z.message),f=!0,p.io(new D(ee,fe)),u.close()}else k("Connection","WebChannel received:",L),p.ro(L)}}),m(o,Sv.STAT_EVENT,C=>{C.stat===pu.PROXY?k("Connection","Detected buffering proxy"):C.stat===pu.NOPROXY&&k("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}function Ji(){return typeof document<"u"?document:null}/**
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
 */function Ei(t){return new Iw(t,!0)}class qf{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&k("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class jf{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new qf(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(It(n.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new D(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class g0 extends jf{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=Aw(this.yt,e),s=function(r){if(!("targetChange"in r))return B.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?B.min():i.readTime?pt(i.readTime):B.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=$o(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Lo(a)?{documents:Nw(r,a)}:{query:kw(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Mf(r,i.resumeToken):i.snapshotVersion.compareTo(B.min())>0&&(o.readTime=Vr(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=Ow(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=$o(this.yt),n.removeTarget=e,this.Bo(n)}}class m0 extends jf{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=xw(e.writeResults,e.commitTime),s=pt(e.commitTime);return this.listener.Zo(s,n)}return re(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=$o(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Dw(this.yt,s))};this.Bo(n)}}/**
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
 */class y0 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new D(y.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new D(y.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(y.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class v0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(It(n),this.ou=!1):k("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class w0{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{mn(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=q(a);c._u.add(4),await Gs(c),c.gu.set("Unknown"),c._u.delete(4),await Ti(c)}(this))})}),this.gu=new v0(s,r)}}async function Ti(t){if(mn(t))for(const e of t.wu)await e(!0)}async function Gs(t){for(const e of t.wu)await e(!1)}function Hf(t,e){const n=q(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Qa(n)?Wa(n):es(n).ko()&&Ga(n,e))}function Kf(t,e){const n=q(t),s=es(n);n.du.delete(e),s.ko()&&zf(n,e),n.du.size===0&&(s.ko()?s.Fo():mn(n)&&n.gu.set("Unknown"))}function Ga(t,e){t.yu.Ot(e.targetId),es(t).zo(e)}function zf(t,e){t.yu.Ot(e),es(t).Ho(e)}function Wa(t){t.yu=new Ew({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),es(t).start(),t.gu.uu()}function Qa(t){return mn(t)&&!es(t).No()&&t.du.size>0}function mn(t){return q(t)._u.size===0}function Gf(t){t.yu=void 0}async function E0(t){t.du.forEach((e,n)=>{Ga(t,e)})}async function T0(t,e){Gf(t),Qa(t)?(t.gu.hu(e),Wa(t)):t.gu.set("Unknown")}async function b0(t,e,n){if(t.gu.set("Online"),e instanceof Of&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ur(t,s)}else if(e instanceof yr?t.yu.Kt(e):e instanceof Rf?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(B.min()))try{const s=await $f(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Pe.EMPTY_BYTE_STRING,c.snapshotVersion)),zf(r,a);const u=new ln(c.target,a,1,c.sequenceNumber);Ga(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){k("RemoteStore","Failed to raise snapshot:",s),await Ur(t,s)}}async function Ur(t,e,n){if(!Hs(e))throw e;t._u.add(1),await Gs(t),t.gu.set("Offline"),n||(n=()=>$f(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ti(t)})}function Wf(t,e){return e().catch(n=>Ur(t,n,e))}async function bi(t){const e=q(t),n=$t(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;_0(e);)try{const r=await a0(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,I0(e,r)}catch(r){await Ur(e,r)}Qf(e)&&Yf(e)}function _0(t){return mn(t)&&t.fu.length<10}function I0(t,e){t.fu.push(e);const n=$t(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Qf(t){return mn(t)&&!$t(t).No()&&t.fu.length>0}function Yf(t){$t(t).start()}async function C0(t){$t(t).eu()}async function S0(t){const e=$t(t);for(const n of t.fu)e.Xo(n.mutations)}async function A0(t,e,n){const s=t.fu.shift(),r=ja.from(s,e,n);await Wf(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await bi(t)}async function D0(t,e){e&&$t(t).Yo&&await async function(n,s){if(r=s.code,gw(r)&&r!==y.ABORTED){const i=n.fu.shift();$t(n).Mo(),await Wf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await bi(n)}var r}(t,e),Qf(t)&&Yf(t)}async function Vu(t,e){const n=q(t);n.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const s=mn(n);n._u.add(3),await Gs(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ti(n)}async function x0(t,e){const n=q(t);e?(n._u.delete(2),await Ti(n)):e||(n._u.add(2),await Gs(n),n.gu.set("Unknown"))}function es(t){return t.pu||(t.pu=function(e,n,s){const r=q(e);return r.su(),new g0(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:E0.bind(null,t),Zr:T0.bind(null,t),Wo:b0.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Qa(t)?Wa(t):t.gu.set("Unknown")):(await t.pu.stop(),Gf(t))})),t.pu}function $t(t){return t.Iu||(t.Iu=function(e,n,s){const r=q(e);return r.su(),new m0(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:C0.bind(null,t),Zr:D0.bind(null,t),tu:S0.bind(null,t),Zo:A0.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await bi(t)):(await t.Iu.stop(),t.fu.length>0&&(k("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Ya{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ya(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xa(t,e){if(It("AsyncQueue",`${e}: ${t}`),Hs(t))return new D(y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Rn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||R.comparator(n.key,s.key):(n,s)=>R.comparator(n.key,s.key),this.keyedMap=as(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new Rn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Rn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Uu{constructor(){this.Tu=new be(R.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):F():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class qn{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qn(e,n,Rn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class N0{constructor(){this.Au=void 0,this.listeners=[]}}class k0{constructor(){this.queries=new Zn(e=>yf(e),gi),this.onlineState="Unknown",this.Ru=new Set}}async function R0(t,e){const n=q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new N0),r)try{i.Au=await n.onListen(s)}catch(o){const a=Xa(o,`Initialization of query '${Vo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Ja(n)}async function O0(t,e){const n=q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function M0(t,e){const n=q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Ja(n)}function L0(t,e,n){const s=q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ja(t){t.Ru.forEach(e=>{e.next()})}class F0{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new qn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=qn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class Xf{constructor(e){this.key=e}}class Jf{constructor(e){this.key=e}}class P0{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=G(),this.mutatedKeys=G(),this.Gu=vf(e),this.Qu=new Rn(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Uu,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,f)=>{const p=r.get(l),m=mi(this.query,f)?f:null,C=!!p&&this.mutatedKeys.has(p.key),b=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let L=!1;p&&m?p.data.isEqual(m.data)?C!==b&&(s.track({type:3,doc:m}),L=!0):this.Hu(p,m)||(s.track({type:2,doc:m}),L=!0,(c&&this.Gu(m,c)>0||u&&this.Gu(m,u)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),L=!0):p&&!m&&(s.track({type:1,doc:p}),L=!0,(c||u)&&(a=!0)),L&&(m?(o=o.add(m),i=b?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(f,p){const m=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return m(f)-m(p)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new qn(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Uu,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=G(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Jf(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Xf(s))}),n}tc(e){this.qu=e.Hi,this.Ku=G();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return qn.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class V0{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class U0{constructor(e){this.key=e,this.nc=!1}}class B0{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Zn(a=>yf(a),gi),this.rc=new Map,this.oc=new Set,this.uc=new be(R.comparator),this.cc=new Map,this.ac=new Ha,this.hc={},this.lc=new Map,this.fc=$n.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function $0(t,e){const n=X0(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await c0(n.localStore,Ct(e));n.isPrimaryClient&&Hf(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await q0(n,e,s,a==="current",o.resumeToken)}return r}async function q0(t,e,n,s,r){t._c=(f,p,m)=>async function(C,b,L,j){let Z=b.view.Wu(L);Z.$i&&(Z=await Lu(C.localStore,b.query,!1).then(({documents:fe})=>b.view.Wu(fe,Z)));const V=j&&j.targetChanges.get(b.targetId),ee=b.view.applyChanges(Z,C.isPrimaryClient,V);return $u(C,b.targetId,ee.Xu),ee.snapshot}(t,f,p,m);const i=await Lu(t.localStore,e,!0),o=new P0(e,i.Hi),a=o.Wu(i.documents),c=zs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);$u(t,n,u.Xu);const l=new V0(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function j0(t,e){const n=q(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!gi(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await qo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Kf(n.remoteStore,s.targetId),jo(n,s.targetId)}).catch(js)):(jo(n,s.targetId),await qo(n.localStore,s.targetId,!0))}async function H0(t,e,n){const s=J0(t);try{const r=await function(i,o){const a=q(i),c=we.now(),u=o.reduce((p,m)=>p.add(m.key),G());let l,f;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=St(),C=G();return a.Gi.getEntries(p,u).next(b=>{m=b,m.forEach((L,j)=>{j.isValidDocument()||(C=C.add(L))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,m)).next(b=>{l=b;const L=[];for(const j of o){const Z=fw(j,l.get(j.key).overlayedDocument);Z!=null&&L.push(new Ht(j.key,Z,gf(Z.value.mapValue),it.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,L,o)}).next(b=>{f=b;const L=b.applyToLocalDocumentSet(l,C);return a.documentOverlayCache.saveOverlays(p,b.batchId,L)})}).then(()=>({batchId:f.batchId,changes:xf(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new be(J)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ws(s,r.changes),await bi(s.remoteStore)}catch(r){const i=Xa(r,"Failed to persist write");n.reject(i)}}async function Zf(t,e){const n=q(t);try{const s=await i0(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(re(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?re(o.nc):r.removedDocuments.size>0&&(re(o.nc),o.nc=!1))}),await Ws(n,s,e)}catch(s){await js(s)}}function Bu(t,e,n){const s=q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=q(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const f of l.listeners)f.bu(o)&&(c=!0)}),c&&Ja(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function K0(t,e,n){const s=q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new be(R.comparator);o=o.insert(i,Ne.newNoDocument(i,B.min()));const a=G().add(i),c=new wi(B.min(),new Map,new Ee(J),o,a);await Zf(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),Za(s)}else await qo(s.localStore,e,!1).then(()=>jo(s,e,n)).catch(js)}async function z0(t,e){const n=q(t),s=e.batch.batchId;try{const r=await r0(n.localStore,e);td(n,s,null),ed(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ws(n,r)}catch(r){await js(r)}}async function G0(t,e,n){const s=q(t);try{const r=await function(i,o){const a=q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(re(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);td(s,e,n),ed(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ws(s,r)}catch(r){await js(r)}}function ed(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function td(t,e,n){const s=q(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function jo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||nd(t,s)})}function nd(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Kf(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Za(t))}function $u(t,e,n){for(const s of n)s instanceof Xf?(t.ac.addReference(s.key,e),W0(t,s)):s instanceof Jf?(k("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||nd(t,s.key)):F()}function W0(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(k("SyncEngine","New document in limbo: "+n),t.oc.add(s),Za(t))}function Za(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new R(oe.fromString(e)),s=t.fc.next();t.cc.set(s,new U0(n)),t.uc=t.uc.insert(n,s),Hf(t.remoteStore,new ln(Ct(Ua(n.path)),s,2,La.at))}}async function Ws(t,e,n){const s=q(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=za.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>T.forEach(c,f=>T.forEach(f.Si,p=>u.persistence.referenceDelegate.addReference(l,f.targetId,p)).next(()=>T.forEach(f.Di,p=>u.persistence.referenceDelegate.removeReference(l,f.targetId,p)))))}catch(l){if(!Hs(l))throw l;k("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const f=l.targetId;if(!l.fromCache){const p=u.qi.get(f),m=p.snapshotVersion,C=p.withLastLimboFreeSnapshotVersion(m);u.qi=u.qi.insert(f,C)}}}(s.localStore,i))}async function Q0(t,e){const n=q(t);if(!n.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const s=await Bf(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new D(y.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ws(n,s.ji)}}function Y0(t,e){const n=q(t),s=n.cc.get(e);if(s&&s.nc)return G().add(s.key);{let r=G();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function X0(t){const e=q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Y0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=K0.bind(null,e),e.sc.Wo=M0.bind(null,e.eventManager),e.sc.wc=L0.bind(null,e.eventManager),e}function J0(t){const e=q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=z0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=G0.bind(null,e),e}class Z0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Ei(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return s0(this.persistence,new t0,e.initialUser,this.yt)}yc(e){return new Zw(Ka.Bs,this.yt)}gc(e){return new l0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class eE{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Bu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Q0.bind(null,this.syncEngine),await x0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new k0}createDatastore(e){const n=Ei(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new p0(r));var r;return function(i,o,a,c){return new y0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Bu(this.syncEngine,a,0),o=Pu.C()?new Pu:new h0,new w0(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new B0(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=q(e);k("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Gs(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function sd(t,e,n){if(!n)throw new D(y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tE(t,e,n,s){if(e===!0&&s===!0)throw new D(y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qu(t){if(!R.isDocumentKey(t))throw new D(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ju(t){if(R.isDocumentKey(t))throw new D(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _i(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function Lt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_i(t);throw new D(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Hu=new Map;class Ku{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new D(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,tE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ii{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ku({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ku(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new xv;switch(n.type){case"gapi":const s=n.client;return new Ov(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Hu.get(e);n&&(k("ComponentProvider","Removing Datastore"),Hu.delete(e),n.terminate())}(this),Promise.resolve()}}function nE(t,e,n,s={}){var r;const i=(t=Lt(t,Ii))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&ko("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=xe.MOCK_USER;else{o=dm(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new D(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new xe(c)}t._authCredentials=new Nv(new sf(o,a))}}/**
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
 */class je{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}}class yn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new yn(this.firestore,e,this._query)}}class Ft extends yn{constructor(e,n,s){super(e,n,Ua(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new R(e))}withConverter(e){return new Ft(this.firestore,e,this._path)}}function sE(t,e,...n){if(t=gt(t),sd("collection","path",e),t instanceof Ii){const s=oe.fromString(e,...n);return ju(s),new Ft(t,null,s)}{if(!(t instanceof je||t instanceof Ft))throw new D(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(oe.fromString(e,...n));return ju(s),new Ft(t.firestore,null,s)}}function Ho(t,e,...n){if(t=gt(t),arguments.length===1&&(e=rf.R()),sd("doc","path",e),t instanceof Ii){const s=oe.fromString(e,...n);return qu(s),new je(t,null,new R(s))}{if(!(t instanceof je||t instanceof Ft))throw new D(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(oe.fromString(e,...n));return qu(s),new je(t.firestore,t instanceof Ft?t.converter:null,new R(s))}}/**
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
 */class rE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):It("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class iE{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=xe.UNAUTHENTICATED,this.clientId=rf.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{k("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(k("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Xa(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function oE(t,e){t.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Bf(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function aE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cE(t);k("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Vu(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Vu(e.remoteStore,i)),t.onlineComponents=e}async function cE(t){return t.offlineComponents||(k("FirestoreClient","Using default OfflineComponentProvider"),await oE(t,new Z0)),t.offlineComponents}async function rd(t){return t.onlineComponents||(k("FirestoreClient","Using default OnlineComponentProvider"),await aE(t,new eE)),t.onlineComponents}function uE(t){return rd(t).then(e=>e.syncEngine)}async function zu(t){const e=await rd(t),n=e.eventManager;return n.onListen=$0.bind(null,e.syncEngine),n.onUnlisten=j0.bind(null,e.syncEngine),n}class lE{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new qf(this,"async_queue_retry"),this.Wc=()=>{const n=Ji();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Ji();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Ji();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new un;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Hs(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw It("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Ya.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&F()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Gu(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class jn extends Ii{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new lE,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||od(this),this._firestoreClient.terminate()}}function hE(t,e){const n=typeof t=="object"?t:yy(),s=typeof t=="string"?t:e||"(default)",r=dy(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=lm("firestore");i&&nE(r,...i)}return r}function id(t){return t._firestoreClient||od(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function od(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new jv(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new iE(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class Hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hn(Pe.fromBase64String(e))}catch(n){throw new D(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hn(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ci{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ec{constructor(e){this._methodName=e}}/**
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
 */class tc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
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
 */const fE=/^__.*__$/;class dE{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ht(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ks(e,this.data,n,this.fieldTransforms)}}class ad{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ht(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function cd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class nc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new nc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Br(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(cd(this.sa)&&fE.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class pE{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||Ei(e)}da(e,n,s,r=!1){return new nc({sa:e,methodName:n,fa:s,path:Re.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function sc(t){const e=t._freezeSettings(),n=Ei(t._databaseId);return new pE(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gE(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);rc("Data must be an object, but it was:",o,s);const a=ud(s,o);let c,u;if(i.merge)c=new Ge(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const f of i.mergeFields){const p=Ko(e,f,n);if(!o.contains(p))throw new D(y.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);hd(l,p)||l.push(p)}c=new Ge(l),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new dE(new qe(a),c,u)}class Si extends ec{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Si}}function mE(t,e,n,s){const r=t.da(1,e,n);rc("Data must be an object, but it was:",r,s);const i=[],o=qe.empty();gn(s,(c,u)=>{const l=ic(e,c,n);u=gt(u);const f=r.ca(l);if(u instanceof Si)i.push(l);else{const p=Qs(u,f);p!=null&&(i.push(l),o.set(l,p))}});const a=new Ge(i);return new ad(o,a,r.fieldTransforms)}function yE(t,e,n,s,r,i){const o=t.da(1,e,n),a=[Ko(e,s,n)],c=[r];if(i.length%2!=0)throw new D(y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Ko(e,i[p])),c.push(i[p+1]);const u=[],l=qe.empty();for(let p=a.length-1;p>=0;--p)if(!hd(u,a[p])){const m=a[p];let C=c[p];C=gt(C);const b=o.ca(m);if(C instanceof Si)u.push(m);else{const L=Qs(C,b);L!=null&&(u.push(m),l.set(m,L))}}const f=new Ge(u);return new ad(l,f,o.fieldTransforms)}function vE(t,e,n,s=!1){return Qs(n,t.da(s?4:3,e))}function Qs(t,e){if(ld(t=gt(t)))return rc("Unsupported field value:",e,t),ud(t,e);if(t instanceof ec)return function(n,s){if(!cd(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Qs(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=gt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ow(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=we.fromDate(n);return{timestampValue:Vr(s.yt,r)}}if(n instanceof we){const r=new we(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Vr(s.yt,r)}}if(n instanceof tc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Hn)return{bytesValue:Mf(s.yt,n._byteString)};if(n instanceof je){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:qa(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${_i(n)}`)}(t,e)}function ud(t,e){const n={};return of(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gn(t,(s,r)=>{const i=Qs(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function ld(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof tc||t instanceof Hn||t instanceof je||t instanceof ec)}function rc(t,e,n){if(!ld(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=_i(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Ko(t,e,n){if((e=gt(e))instanceof Ci)return e._internalPath;if(typeof e=="string")return ic(t,e);throw Br("Field path arguments must be of type string or ",t,!1,void 0,n)}const wE=new RegExp("[~\\*/\\[\\]]");function ic(t,e,n){if(e.search(wE)>=0)throw Br(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ci(...e.split("."))._internalPath}catch{throw Br(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Br(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new D(y.INVALID_ARGUMENT,a+t+c)}function hd(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class fd{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(oc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class EE extends fd{data(){return super.data()}}function oc(t,e){return typeof e=="string"?ic(t,e):e instanceof Ci?e._internalPath:e._delegate._internalPath}/**
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
 */function TE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ac{}class dd extends ac{}function bE(t,e,...n){let s=[];e instanceof ac&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof uc).length,o=r.filter(a=>a instanceof cc).length;if(i>1||i>0&&o>0)throw new D(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class cc extends dd{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new cc(e,n,s)}_apply(e){const n=this._parse(e);return pd(e._query,n),new yn(e.firestore,e.converter,Fo(e._query,n))}_parse(e){const n=sc(e.firestore);return function(r,i,o,a,c,u,l){let f;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new D(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Qu(l,u);const p=[];for(const m of l)p.push(Wu(a,r,m));f={arrayValue:{values:p}}}else f=Wu(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Qu(l,u),f=vE(o,i,l,u==="in"||u==="not-in");return ve.create(c,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class uc extends ac{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new uc(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:ot.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)pd(i,a),i=Fo(i,a)}(e._query,n),new yn(e.firestore,e.converter,Fo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lc extends dd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new lc(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new D(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Nn(r,i);return function(a,c){if(Ba(a)===null){const u=pi(a);u!==null&&gd(a,u,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new yn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Jn(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function _E(t,e="asc"){const n=e,s=oc("orderBy",t);return lc._create(s,n)}function Wu(t,e,n){if(typeof(n=gt(n))=="string"){if(n==="")throw new D(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mf(e)&&n.indexOf("/")!==-1)throw new D(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(oe.fromString(n));if(!R.isDocumentKey(s))throw new D(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return wu(t,new R(s))}if(n instanceof je)return wu(t,n._key);throw new D(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_i(n)}.`)}function Qu(t,e){if(!Array.isArray(t)||t.length===0)throw new D(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new D(y.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function pd(t,e){if(e.isInequality()){const s=pi(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new D(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Ba(t);i!==null&&gd(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function gd(t,e,n){if(!n.isEqual(e))throw new D(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class IE{convertValue(e,n="none"){switch(dn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){const s={};return gn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new tc(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=cf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ns(e));default:return null}}convertTimestamp(e){const n=Bt(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=oe.fromString(e);re(Uf(s));const r=new xs(s.get(1),s.get(3)),i=new R(s.popFirst(5));return r.isEqual(n)||It(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function CE(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class cs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class md extends fd{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(oc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class vr extends md{data(e={}){return super.data(e)}}class SE{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new cs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new vr(this._firestore,this._userDataWriter,s.key,s,new cs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new vr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new cs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new vr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new cs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:AE(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function AE(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}class yd extends IE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function DE(t,e,n,...s){t=Lt(t,je);const r=Lt(t.firestore,jn),i=sc(r);let o;return o=typeof(e=gt(e))=="string"||e instanceof Ci?yE(i,"updateDoc",t._key,e,n,s):mE(i,"updateDoc",t._key,e),hc(r,[o.toMutation(t._key,it.exists(!0))])}function xE(t){return hc(Lt(t.firestore,jn),[new $a(t._key,it.none())])}function NE(t,e){const n=Lt(t.firestore,jn),s=Ho(t),r=CE(t.converter,e);return hc(n,[gE(sc(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,it.exists(!1))]).then(()=>s)}function kE(t,...e){var n,s,r;t=gt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Gu(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Gu(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,u,l;if(t instanceof je)u=Lt(t.firestore,jn),l=Ua(t._key.path),c={next:f=>{e[o]&&e[o](RE(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Lt(t,yn);u=Lt(f.firestore,jn),l=f._query;const p=new yd(u);c={next:m=>{e[o]&&e[o](new SE(u,p,f,m))},error:e[o+1],complete:e[o+2]},TE(t._query)}return function(f,p,m,C){const b=new rE(C),L=new F0(p,b,m);return f.asyncQueue.enqueueAndForget(async()=>R0(await zu(f),L)),()=>{b.bc(),f.asyncQueue.enqueueAndForget(async()=>O0(await zu(f),L))}}(id(u),l,a,c)}function hc(t,e){return function(n,s){const r=new un;return n.asyncQueue.enqueueAndForget(async()=>H0(await uE(n),s,r)),r.promise}(id(t),e)}function RE(t,e,n){const s=n.docs.get(e._key),r=new yd(t);return new md(t,r,e._key,s,new cs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Xn=n})(my),Cr(new Ts("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new jn(new kv(n.getProvider("auth-internal")),new Lv(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new D(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xs(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),xn(gu,"3.8.3",t),xn(gu,"3.8.3","esm2017")})();var OE="firebase",ME="9.17.1";/**
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
 */xn(OE,ME,"app");const LE={apiKey:"AIzaSyCil1Ls_GvGdxdgqBdUWjIgp9VtGmJwn04",authDomain:"mytodolist-70f86.firebaseapp.com",projectId:"mytodolist-70f86",storageBucket:"mytodolist-70f86.appspot.com",messagingSenderId:"626678402204",appId:"1:626678402204:web:f1a4134382546c3466f159"},FE=Jl(LE),PE=hE(FE);const VE=ge("div",{class:"text-end"},[ge("a",null,"Войдите"),ql(" или "),ge("a",null," зарегестрируйтесь ")],-1),UE={class:"wrapper-todo"},BE=["onSubmit"],$E=ge("div",{class:"title has-text-centered"},"My ToDo list!",-1),qE={class:"field has-addons mb-5"},jE={class:"control"},HE={class:"control"},KE=["disabled"],zE={class:"card-content"},GE={class:"content"},WE={class:"columns is-mobile is-vcentered"},QE={class:"column has-text-right my-5 is-6"},YE=["onClick"],XE=["onClick"],JE={__name:"App",setup(t){const e=sE(PE,"todos"),n=bE(e,_E("date","desc")),s=Sc([]);ca(()=>{kE(n,c=>{const u=[];c.forEach(l=>{const f={id:l.id,content:l.data().content,done:l.data().done};u.push(f)}),s.value=u})});const r=Sc(""),i=()=>{NE(e,{content:r.value,done:!1,date:Date.now()}),r.value=""},o=c=>{xE(Ho(e,c))},a=c=>{const u=s.value.findIndex(l=>l.id===c);DE(Ho(e,c),{done:!s.value[u].done})};return(c,u)=>(Li(),Fi(Ye,null,[VE,ge("div",UE,[ge("form",{onSubmit:Xg(i,["prevent"])},[$E,ge("div",qE,[ge("div",jE,[Kp(ge("input",{"onUpdate:modelValue":u[0]||(u[0]=l=>r.value=l),class:"input",type:"text",placeholder:"Add a ToDo"},null,512),[[Wg,r.value]])]),ge("div",HE,[ge("button",{disabled:!r.value,class:"button is-info ml-2"}," Add ",8,KE)])])],40,BE),(Li(!0),Fi(Ye,null,Gp(s.value,l=>(Li(),Fi("div",{key:l.id,class:In(["card mb-5",{"has-background-success-light":l.done}])},[ge("div",zE,[ge("div",GE,[ge("div",WE,[ge("div",{class:In(["column",{"has-text-success line-throught":l.done}])},Sd(l.content),3),ge("div",QE,[ge("button",{class:In([l.done?"is-success":"is-light","button"]),onClick:f=>a(l.id)},"✓",10,YE),ge("button",{onClick:f=>o(l.id),class:"button is-danger ml-2"},"✗",8,XE)])])])])],2))),128))])],64))}};em(JE).mount("#app");
