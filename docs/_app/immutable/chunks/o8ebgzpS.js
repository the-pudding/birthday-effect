import{ao as r,u as a,ap as p,aq as _,ar as d,al as g}from"./DfDtd3Lu.js";function h(n,e,s){if(n==null)return e(void 0),r;const u=a(()=>n.subscribe(e,s));return u.unsubscribe?()=>u.unsubscribe():u}const i=[];function q(n,e=r){let s=null;const u=new Set;function c(o){if(p(n,o)&&(n=o,s)){const f=!i.length;for(const t of u)t[1](),i.push(t,n);if(f){for(let t=0;t<i.length;t+=2)i[t][0](i[t+1]);i.length=0}}}function b(o){c(o(n))}function l(o,f=r){const t=[o,f];return u.add(t),u.size===1&&(s=e(c,b)||r),o(n),()=>{u.delete(t),u.size===0&&s&&(s(),s=null)}}return{set:c,update:b,subscribe:l}}function w(n){let e;return h(n,s=>e=s)(),e}function x(n){g===null&&_(),d(()=>{const e=a(n);if(typeof e=="function")return e})}export{w as g,x as o,h as s,q as w};
