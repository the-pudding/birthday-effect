import{S as x,C as B,D as K,F as U,G as P,U as o,I as D,J as q,K as Y,L as C,M as G,N as Z,P as $,O as z,Q as F,u as E,R as J,T as j,V as Q,W as V,X as p}from"./C-KrEM12.js";import{s as y,a as b,m as W}from"./D9u-oKDD.js";import{c as X}from"./CZk5PmJc.js";function R(r,s=null,u){if(typeof r!="object"||r===null||x in r)return r;const f=C(r);if(f!==B&&f!==K)return r;var n=new Map,c=G(r),h=y(0);c&&n.set("length",y(r.length));var w;return new Proxy(r,{defineProperty(l,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&Y();var i=n.get(e);return i===void 0?(i=y(t.value),n.set(e,i)):b(i,R(t.value,w)),!0},deleteProperty(l,e){var t=n.get(e);if(t===void 0)e in l&&n.set(e,y(o));else{if(c&&typeof e=="string"){var i=n.get("length"),a=Number(e);Number.isInteger(a)&&a<i.v&&b(i,a)}b(t,o),M(h)}return!0},get(l,e,t){var _;if(e===x)return r;var i=n.get(e),a=e in l;if(i===void 0&&(!a||(_=D(l,e))!=null&&_.writable)&&(i=y(R(a?l[e]:o,w)),n.set(e,i)),i!==void 0){var v=P(i);return v===o?void 0:v}return Reflect.get(l,e,t)},getOwnPropertyDescriptor(l,e){var t=Reflect.getOwnPropertyDescriptor(l,e);if(t&&"value"in t){var i=n.get(e);i&&(t.value=P(i))}else if(t===void 0){var a=n.get(e),v=a==null?void 0:a.v;if(a!==void 0&&v!==o)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return t},has(l,e){var v;if(e===x)return!0;var t=n.get(e),i=t!==void 0&&t.v!==o||Reflect.has(l,e);if(t!==void 0||q!==null&&(!i||(v=D(l,e))!=null&&v.writable)){t===void 0&&(t=y(i?R(l[e],w):o),n.set(e,t));var a=P(t);if(a===o)return!1}return i},set(l,e,t,i){var O;var a=n.get(e),v=e in l;if(c&&e==="length")for(var _=t;_<a.v;_+=1){var m=n.get(_+"");m!==void 0?b(m,o):_ in l&&(m=y(o),n.set(_+"",m))}a===void 0?(!v||(O=D(l,e))!=null&&O.writable)&&(a=y(void 0),b(a,R(t,w)),n.set(e,a)):(v=a.v!==o,b(a,R(t,w)));var g=Reflect.getOwnPropertyDescriptor(l,e);if(g!=null&&g.set&&g.set.call(i,t),!v){if(c&&typeof e=="string"){var A=n.get("length"),I=Number(e);Number.isInteger(I)&&I>=A.v&&b(A,I+1)}M(h)}return!0},ownKeys(l){P(h);var e=Reflect.ownKeys(l).filter(a=>{var v=n.get(a);return v===void 0||v.v!==o});for(var[t,i]of n)i.v!==o&&!(t in l)&&e.push(t);return e},setPrototypeOf(){U()}})}function M(r,s=1){b(r,r.v+s)}const H={get(r,s){let u=r.props.length;for(;u--;){let f=r.props[u];if(p(f)&&(f=f()),typeof f=="object"&&f!==null&&s in f)return f[s]}},set(r,s,u){let f=r.props.length;for(;f--;){let n=r.props[f];p(n)&&(n=n());const c=D(n,s);if(c&&c.set)return c.set(u),!0}return!1},getOwnPropertyDescriptor(r,s){let u=r.props.length;for(;u--;){let f=r.props[u];if(p(f)&&(f=f()),typeof f=="object"&&f!==null&&s in f){const n=D(f,s);return n&&!n.configurable&&(n.configurable=!0),n}}},has(r,s){if(s===x||s===j)return!1;for(let u of r.props)if(p(u)&&(u=u()),u!=null&&s in u)return!0;return!1},ownKeys(r){const s=[];for(let u of r.props){p(u)&&(u=u());for(const f in u)s.includes(f)||s.push(f)}return s}};function te(...r){return new Proxy({props:r},H)}function ne(r,s,u,f){var T;var n=(u&Q)!==0,c=!0,h=(u&J)!==0,w=(u&V)!==0,l=!1,e;h?[e,l]=X(()=>r[s]):e=r[s];var t=x in r||j in r,i=h&&(((T=D(r,s))==null?void 0:T.set)??(t&&s in r&&(d=>r[s]=d)))||void 0,a=f,v=!0,_=!1,m=()=>(_=!0,v&&(v=!1,w?a=E(f):a=f),a);e===void 0&&f!==void 0&&(i&&c&&Z(),e=m(),i&&i(e));var g;if(g=()=>{var d=r[s];return d===void 0?m():(v=!0,_=!1,d)},(u&$)===0)return g;if(i){var A=r.$$legacy;return function(d,S){return arguments.length>0?((!S||A||l)&&i(S?g():d),d):g()}}var I=!1,O=W(e),N=F(()=>{var d=g(),S=P(O);return I?(I=!1,S):O.v=d});return n||(N.equals=z),function(d,S){if(arguments.length>0){const L=S?P(N):h?R(d):d;return N.equals(L)||(I=!0,b(O,L),_&&a!==void 0&&(a=L),E(()=>P(N))),d}return P(N)}}export{R as a,ne as p,te as s};
