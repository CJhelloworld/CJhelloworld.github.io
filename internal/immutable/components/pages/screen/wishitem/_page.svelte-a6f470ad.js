import{S as O,i as $,s as P,k as d,a as S,M as W,l as h,h as f,c as q,m as C,n as p,G as E,b as w,f as g,t as v,d as I,E as A,o as N,v as R,w as G,x as L,y as Y,g as j}from"../../../../chunks/index-8ff577af.js";import{p as z}from"../../../../chunks/stores-1e117fec.js";import{g as B}from"../../../../chunks/navigation-5f123662.js";import{Y as F}from"../../../../chunks/runtime.esm-f9803d38.js";import{A as b}from"../../../../chunks/env-ea3f5f2d.js";import{d as H,a as J}from"../../../../chunks/weapons-a2aa16e8.js";import{W as K,d as Q}from"../../../../chunks/WishResult-45eb73b6.js";function D(l){let n,a;return n=new K({props:{list:l[0],isOutfit:l[2],skip:!0,standalone:!0}}),{c(){R(n.$$.fragment)},l(t){G(n.$$.fragment,t)},m(t,o){L(n,t,o),a=!0},p(t,o){const c={};o&1&&(c.list=t[0]),o&4&&(c.isOutfit=t[2]),n.$set(c)},i(t){a||(g(n.$$.fragment,t),a=!0)},o(t){v(n.$$.fragment,t),a=!1},d(t){Y(n,t)}}}function U(l){let n,a,t,o,c,m,u;document.title=n=`
		`+l[3](`${l[1]}.name`)+" | "+l[3]("title")+`
	`;let e=l[0].length>0&&D(l);return{c(){a=d("meta"),t=d("meta"),o=d("meta"),c=S(),m=d("section"),e&&e.c(),this.h()},l(s){const i=W('[data-svelte="svelte-h0ssec"]',document.head);a=h(i,"META",{name:!0,content:!0}),t=h(i,"META",{property:!0,content:!0}),o=h(i,"META",{property:!0,content:!0}),i.forEach(f),c=q(s),m=h(s,"SECTION",{class:!0});var r=C(m);e&&e.l(r),r.forEach(f),this.h()},h(){p(a,"name","title"),p(a,"content",b),p(t,"property","og:title"),p(t,"content",b),p(o,"property","twitter:title"),p(o,"content",b),p(m,"class","svelte-1bfm8fx")},m(s,i){E(document.head,a),E(document.head,t),E(document.head,o),w(s,c,i),w(s,m,i),e&&e.m(m,null),u=!0},p(s,[i]){(!u||i&10)&&n!==(n=`
		`+s[3](`${s[1]}.name`)+" | "+s[3]("title")+`
	`)&&(document.title=n),s[0].length>0?e?(e.p(s,i),i&1&&g(e,1)):(e=D(s),e.c(),g(e,1),e.m(m,null)):e&&(j(),v(e,1,1,()=>{e=null}),I())},i(s){u||(g(e),u=!0)},o(s){v(e),u=!1},d(s){f(a),f(t),f(o),s&&f(c),s&&f(m),e&&e.d()}}}function V(l,n,a){let t,o;A(l,z,r=>a(4,t=r)),A(l,F,r=>a(3,o=r));let c=[],m="",u=!1;const{url:e}=t,s=r=>{const{name:_,type:y,useOutfit:M}=r;a(1,m=_),a(2,u=M);const T=(y==="character"?H:J).find(k=>k.name===_);return{...r,...T}};return N(()=>{try{const r=e.searchParams.get("a");if(!r)throw new Error("no Data");const _=Q.single(r),y=s(_);a(0,c=[y])}catch{console.error("something Wrong"),B("/")}}),[c,m,u,o]}class ot extends O{constructor(n){super(),$(this,n,V,U,P,{})}}export{ot as default};
