import{q as j,as as T,at as S,a2 as H,J as M,ao as W,M as G,Z as B,b as J,au as X,h as g,av as q,g as N,z as b,s as k,c as p,j as x,aw as R,H as L,f as Z,ax as K,i as Q,ay as ee,az as te,aA as re,aB as ae,a as ne,p as ie,m as oe,o as se,aC as ue,n as V,G as le}from"./C-KrEM12.js";import{a as ce}from"./Cc-cUF5S.js";import{m as fe,c as de,g as _e,a as pe}from"./D9u-oKDD.js";function Ae(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const he=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Le(e){return he.includes(e)}const ve={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ne(e){return e=e.toLowerCase(),ve[e]??e}const ye=["touchstart","touchmove"];function be(e){return ye.includes(e)}const ge=["textarea","script","style","title"];function Re(e){return ge.includes(e)}function De(e,t){if(t){const r=document.body;e.autofocus=!0,j(()=>{document.activeElement===r&&e.focus()})}}let C=!1;function me(){C||(C=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function z(e){var t=H,r=M;T(null),S(null);try{return e()}finally{T(t),S(r)}}function Ie(e,t,r,n=r){e.addEventListener(t,()=>z(r));const i=e.__on_r;i?e.__on_r=()=>{i(),n(!0)}:e.__on_r=()=>n(!0),me()}const F=new Set,D=new Set;function Oe(e,t,r,n={}){function i(a){if(n.capture||m.call(t,a),!a.cancelBubble)return z(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?j(()=>{t.addEventListener(e,i,n)}):t.addEventListener(e,i,n),i}function Me(e){for(var t=0;t<e.length;t++)F.add(e[t]);for(var r of D)r(e)}function m(e){var P;var t=this,r=t.ownerDocument,n=e.type,i=((P=e.composedPath)==null?void 0:P.call(e))||[],a=i[0]||e.target,f=0,h=e.__root;if(h){var d=i.indexOf(h);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var v=i.indexOf(t);if(v===-1)return;d<=v&&(f=d)}if(a=i[f]||e.target,a!==t){W(e,"currentTarget",{configurable:!0,get(){return a||r}});var A=H,l=M;T(null),S(null);try{for(var o,s=[];a!==null;){var c=a.assignedSlot||a.parentNode||a.host||null;try{var _=a["__"+n];if(_!==void 0&&(!a.disabled||e.target===a))if(G(_)){var[Y,...$]=_;Y.apply(a,[e,...$])}else _.call(a,e)}catch(E){o?s.push(E):o=E}if(e.cancelBubble||c===t||c===null)break;a=c}if(o){for(let E of s)queueMicrotask(()=>{throw E});throw o}}finally{e.__root=t,delete e.currentTarget,T(A),S(l)}}}let u;function Ee(){u=void 0}function Pe(e){let t=null,r=g;var n;if(g){for(t=p,u===void 0&&(u=x(document.head));u!==null&&(u.nodeType!==8||u.data!==q);)u=N(u);u===null?b(!1):u=k(N(u))}g||(n=document.head.appendChild(B()));try{J(()=>e(n),X)}finally{r&&(b(!0),u=p,k(t))}}function Ve(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function we(e,t){return U(e,t)}function Ce(e,t){R(),t.intro=t.intro??!1;const r=t.target,n=g,i=p;try{for(var a=x(r);a&&(a.nodeType!==8||a.data!==q);)a=N(a);if(!a)throw L;b(!0),k(a),Z();const f=U(e,{...t,anchor:a});if(p===null||p.nodeType!==8||p.data!==K)throw Q(),L;return b(!1),f}catch(f){if(f===L)return t.recover===!1&&ee(),R(),te(r),b(!1),we(e,t);throw f}finally{b(n),k(i),Ee()}}const y=new Map;function U(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:f=!0}){R();var h=new Set,d=l=>{for(var o=0;o<l.length;o++){var s=l[o];if(!h.has(s)){h.add(s);var c=be(s);t.addEventListener(s,m,{passive:c});var _=y.get(s);_===void 0?(document.addEventListener(s,m,{passive:c}),y.set(s,1)):y.set(s,_+1)}}};d(re(F)),D.add(d);var v=void 0,A=ae(()=>{var l=r??t.appendChild(B());return ne(()=>{if(a){ie({});var o=oe;o.c=a}i&&(n.$$events=i),g&&ce(l,null),v=e(l,n)||{},g&&(M.nodes_end=p),a&&se()}),()=>{var c;for(var o of h){t.removeEventListener(o,m);var s=y.get(o);--s===0?(document.removeEventListener(o,m),y.delete(o)):y.set(o,s)}D.delete(d),l!==r&&((c=l.parentNode)==null||c.removeChild(l))}});return I.set(v,A),v}let I=new WeakMap;function je(e,t){const r=I.get(e);return r?(I.delete(e),r(t)):Promise.resolve()}let w=!1,O=Symbol();function He(e,t,r){const n=r[t]??(r[t]={store:null,source:fe(void 0),unsubscribe:V});if(n.store!==e&&!(O in r))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=V;else{var i=!0;n.unsubscribe=de(e,a=>{i?n.source.v=a:pe(n.source,a)}),i=!1}return e&&O in r?_e(e):le(n.source)}function We(){const e={};function t(){ue(()=>{for(var r in e)e[r].unsubscribe();W(e,O,{enumerable:!1,value:!0})})}return[e,t]}function Be(e){var t=w;try{return w=!1,[e(),w]}finally{w=t}}export{Ve as a,He as b,Be as c,Pe as d,Me as e,me as f,Ae as g,Ce as h,Re as i,Oe as j,De as k,Ie as l,we as m,Ne as n,Le as o,We as s,je as u};
