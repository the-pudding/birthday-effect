import"../chunks/Bg9kRutz.js";import{u as L,r as Q,h as W,p as J,v as y,w as f,ar as d,t as j,G as x,Q as K,o as O,a1 as C}from"../chunks/C-KrEM12.js";import{l as U,d as X,a as b}from"../chunks/CZk5PmJc.js";import{s as A,e as F,r as I,i as B}from"../chunks/C5qbwJMn.js";import{t as M,b as z}from"../chunks/Cc-cUF5S.js";import{p as k,a as Y}from"../chunks/N-cEdp_P.js";import{a as Z,b as $}from"../chunks/D9u-oKDD.js";import{o as ee}from"../chunks/Cfomo3JY.js";import{b as te}from"../chunks/B4DqvJin.js";function se(e,t,s,r){var a=e.__styles??(e.__styles={});a[t]!==s&&(a[t]=s,s==null?e.style.removeProperty(t):e.style.setProperty(t,s,""))}function E(e,t,s=t){U(e,"input",r=>{var a=r?e.defaultValue:e.value;if(a=P(e)?T(a):a,s(a),a!==(a=t())){var c=e.selectionStart,n=e.selectionEnd;e.value=a??"",n!==null&&(e.selectionStart=c,e.selectionEnd=Math.min(n,e.value.length))}}),(W&&e.defaultValue!==e.value||L(t)==null&&e.value)&&s(P(e)?T(e.value):e.value),Q(()=>{var r=t();P(e)&&r===T(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function P(e){var t=e.type;return t==="number"||t==="range"}function T(e){return e===""?null:+e}function re(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}class ae extends Map{constructor(t,s=oe){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:s}}),t!=null)for(const[r,a]of t)this.set(r,a)}get(t){return super.get(G(this,t))}has(t){return super.has(G(this,t))}set(t,s){return super.set(ne(this,t),s)}delete(t){return super.delete(ie(this,t))}}function G({_intern:e,_key:t},s){const r=t(s);return e.has(r)?e.get(r):s}function ne({_intern:e,_key:t},s){const r=t(s);return e.has(r)?e.get(r):(e.set(r,s),s)}function ie({_intern:e,_key:t},s){const r=t(s);return e.has(r)&&(s=e.get(r),e.delete(r)),s}function oe(e){return e!==null&&typeof e=="object"?e.valueOf():e}function le(e){return e}function fe(e,...t){return ce(e,Array.from,le,t)}function ce(e,t,s,r){return function a(c,n){if(n>=r.length)return s(c);const o=new ae,u=r[n++];let p=-1;for(const l of c){const i=u(l,++p,c),v=o.get(i);v?v.push(l):o.set(i,[l])}for(const[l,i]of o)o.set(l,a(i,n));return t(o)}(e,0)}var ue=M('<link rel="external stylesheet">'),ye=M('<div class="svelte-15nxc8l"><h3 class="svelte-15nxc8l"> </h3> <p> </p> <details class="svelte-15nxc8l"><summary class="svelte-15nxc8l">CSS Snippet</summary> <code class="svelte-15nxc8l"> </code></details></div>');function me(e,t){J(t,!0);let s=k(t,"id",3,""),r=k(t,"family",3,""),a=k(t,"size",3,16),c=K(()=>`${a()}px`),n=$("");const o=`${te}/assets/demo/fonts/${s()}.css`;ee(async()=>{const _=await fetch(o);Z(n,Y(await _.text()))});var u=ye();X(_=>{var g=ue();A(g,"href",o),z(_,g)});var p=y(u),l=y(p,!0);f(p);var i=d(p,2),v=y(i,!0);f(i);var m=d(i,2),h=d(y(m),2),w=y(h,!0);f(h),f(m),f(u),j(()=>{A(u,"style",`font-family: '${r()??""}';`),b(l,r()),se(i,"font-size",x(c)),b(v,t.text),b(w,x(n))}),z(e,u),O()}const de=[{id:"atkinson",family:"Atkinson",type:"sans-serif"},{id:"atlas",family:"Atlas Grotesk",type:"sans-serif"},{id:"baloo-bhai",family:"Baloo Bhai",type:"sans-serif"},{id:"canela",family:"Canela",type:"serif"},{id:"computer-modern",family:"Computer Modern",type:"serif"},{id:"cozette",family:"Cozette",type:"other"},{id:"inter",family:"Inter",type:"sans-serif"},{id:"jamboree",family:"Jamboree",type:"other"},{id:"jersey",family:"Jersey M54",type:"other"},{id:"lyon",family:"Lyon Display",type:"serif"},{id:"metropolis",family:"Metropolis",type:"sans-serif"},{id:"national",family:"National 2 Web",type:"sans-serif"},{id:"publico",family:"Publico Text",type:"serif"},{id:"recoleta",family:"Recoleta",type:"serif"},{id:"rubik",family:"Rubik",type:"sans-serif"},{id:"inconsolata",family:"Inconsolata",type:"mono"},{id:"spacemono",family:"Space Mono",type:"mono"},{id:"tiempos",family:"Tiempos Text",type:"serif"}];var pe=M('<h2> </h2> <section class="svelte-1lzc8ku"></section>',1),ve=M('<div id="info" class="svelte-1lzc8ku"><h1>Hosted Fonts on The Pudding</h1> <p><em>Do not use fonts hosted by The Pudding without written permission.</em></p> <form><label for="size" class="svelte-1lzc8ku"> </label> <input id="size" type="range" min="12" max="48"> <label for="text" class="svelte-1lzc8ku">text sample</label> <input id="text" type="text" maxlength="100"></form></div> <article class="svelte-1lzc8ku"></article>',1);function he(e,t){J(t,!0);let s=k(t,"size",7,18),r=k(t,"text",7,"The quick brown fox jumps over the lazy dog.");const a=fe(de,m=>m.type);a.sort((m,h)=>re(m[1].length,h[1].length));var c=ve(),n=C(c),o=d(y(n),4),u=y(o),p=y(u);f(u);var l=d(u,2);I(l);var i=d(l,4);I(i),f(o),f(n);var v=d(n,2);F(v,21,()=>a,B,(m,h)=>{let w=()=>x(h)[0],_=()=>x(h)[1];var g=pe(),S=C(g),R=y(S,!0);f(S);var D=d(S,2);F(D,21,_,B,(V,N)=>{let q=()=>x(N).family,H=()=>x(N).id;me(V,{get id(){return H()},get family(){return q()},get size(){return s()},get text(){return r()}})}),f(D),j(()=>b(R,w())),z(m,g)}),f(v),j(()=>b(p,`font-size: ${s()??""}px`)),E(l,s),E(i,r),z(e,c),O()}function Pe(e){he(e,{})}export{Pe as component};
