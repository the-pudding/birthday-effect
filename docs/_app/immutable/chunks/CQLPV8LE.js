import{ah as O,b as $,ai as j,h as _,aj as C,g as T,p as c,s as b,f,j as L,ak as N,H as E,d as M,al as k,i as F,am as U,an as V,ao as W,ap as q,e as P,W as z,c as B,I as G,Y as J,aq as K,ar as Q,$ as H,a4 as X}from"./kVce9_WL.js";import{a as Z,r as I,h as y,i as x}from"./CX6udphu.js";import{a as ee}from"./C_DYl3DK.js";import{s as ae,g as re}from"./BlDgxy93.js";import{m as ne,a as te}from"./DufL9Zy8.js";let s;function se(){s=void 0}function ce(e){let a=null,r=_;var n;if(_){for(a=f,s===void 0&&(s=L(document.head));s!==null&&(s.nodeType!==8||s.data!==C);)s=T(s);s===null?c(!1):s=b(T(s))}_||(n=document.head.appendChild(O()));try{$(()=>e(n),j)}finally{r&&(c(!0),s=f,b(a))}}function _e(e,a){var r=a==null?"":typeof a=="object"?a+"":a;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function ie(e,a){return S(e,a)}function he(e,a){N(),a.intro=a.intro??!1;const r=a.target,n=_,u=f;try{for(var t=L(r);t&&(t.nodeType!==8||t.data!==C);)t=T(t);if(!t)throw E;c(!0),b(t),M();const h=S(e,{...a,anchor:t});if(f===null||f.nodeType!==8||f.data!==k)throw F(),E;return c(!1),h}catch(h){if(h===E)return a.recover===!1&&U(),N(),V(r),c(!1),ie(e,a);throw h}finally{c(n),b(u),se()}}const l=new Map;function S(e,{target:a,anchor:r,props:n={},events:u,context:t,intro:h=!0}){N();var g=new Set,m=d=>{for(var i=0;i<d.length;i++){var o=d[i];if(!g.has(o)){g.add(o);var p=x(o);a.addEventListener(o,y,{passive:p});var A=l.get(o);A===void 0?(document.addEventListener(o,y,{passive:p}),l.set(o,1)):l.set(o,A+1)}}};m(W(Z)),I.add(m);var w=void 0,Y=q(()=>{var d=r??a.appendChild(O());return P(()=>{if(t){z({});var i=B;i.c=t}u&&(n.$$events=u),_&&ee(d,null),w=e(d,n)||{},_&&(G.nodes_end=f),t&&J()}),()=>{var p;for(var i of g){a.removeEventListener(i,y);var o=l.get(i);--o===0?(document.removeEventListener(i,y),l.delete(i)):l.set(i,o)}I.delete(m),d!==r&&((p=d.parentNode)==null||p.removeChild(d))}});return R.set(w,Y),w}let R=new WeakMap;function pe(e,a){const r=R.get(e);return r?(R.delete(e),r(a)):Promise.resolve()}let v=!1,D=Symbol();function ye(e,a,r){const n=r[a]??(r[a]={store:null,source:ne(void 0),unsubscribe:H});if(n.store!==e&&!(D in r))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=H;else{var u=!0;n.unsubscribe=ae(e,t=>{u?n.source.v=t:te(n.source,t)}),u=!1}return e&&D in r?re(e):X(n.source)}function ve(){const e={};function a(){K(()=>{for(var r in e)e[r].unsubscribe();Q(e,D,{enumerable:!1,value:!0})})}return[e,a]}function be(e){var a=v;try{return v=!1,[e(),v]}finally{v=a}}export{_e as a,ye as b,be as c,ce as d,he as h,ie as m,ve as s,pe as u};
