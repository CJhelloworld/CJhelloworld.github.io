import{A as b,B as y,C as m,s as q,D as A}from"./index-504fd5ff.js";const o=[];function w(n,i){return{subscribe:z(n,i).subscribe}}function z(n,i=b){let u;const t=new Set;function f(e){if(q(n,e)&&(n=e,u)){const r=!o.length;for(const s of t)s[1](),o.push(s,n);if(r){for(let s=0;s<o.length;s+=2)o[s][0](o[s+1]);o.length=0}}}function l(e){f(e(n))}function a(e,r=b){const s=[e,r];return t.add(s),t.size===1&&(u=i(f)||b),e(n),()=>{t.delete(s),t.size===0&&(u(),u=null)}}return{set:f,update:l,subscribe:a}}function B(n,i,u){const t=!Array.isArray(n),f=t?[n]:n,l=i.length<2;return w(u,a=>{let e=!1;const r=[];let s=0,d=b;const g=()=>{if(s)return;d();const c=i(t?r[0]:r,a);l?a(c):d=A(c)?c:b},_=f.map((c,p)=>y(c,h=>{r[p]=h,s&=~(1<<p),e&&g()},()=>{s|=1<<p}));return e=!0,g(),function(){m(_),d()}})}export{B as d,z as w};
