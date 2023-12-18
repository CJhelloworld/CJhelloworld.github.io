import{b as E}from"./index-dbf9cf2f.js";import{S as H,i as N,s as U,k as g,a as V,l as k,m as v,c as I,h as f,n as b,N as B,b as K,G as M,H as O,O as q,f as T,t as j,E as z,$ as C,W as S,af as A,q as F,r as G,u as L,A as w,R as P,T as R,U as W,V as Y}from"./index-8ff577af.js";import{Y as J}from"./runtime.esm-f9803d38.js";const Q=async i=>{const t=new TextEncoder().encode(i),e=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")},X=async()=>{const i=new Date().toISOString(),t=await fetch(`https://gist.githubusercontent.com/AguzzTN54/3816708e01827a5c64f4903242ede7b0/raw?date=${i}`),{hash:e,previousKey:s}=await t.json();return{baseKey:e,previousKey:s}},D=async i=>{const{baseKey:t,previousKey:e}=await X(),s=await Q(i?.trim()),a=t===s,n=a?"none":e[s]||null;return{isKeyValid:a,expiryDate:n}},lt={_set(i){const t=i.trim().split("").reverse().join("");E.set("adKey",t)},clear(){return E.set("adKey",null)},async checkLocal(){const i=E.get("adKey"),t=i?.split("").reverse().join("");try{if(!i)return{validity:!1,storedKey:t,status:"ok"};const{isKeyValid:e,expiryDate:s}=await D(t);return{validity:e,expiryDate:s,storedKey:t,status:"ok"}}catch{return{validity:!1,storedKey:t,status:"offline"}}},async verify(i){try{const{isKeyValid:t,expiryDate:e}=await D(i);return t&&this._set(i),{validity:t,msg:t?"success":e&&e!=="none"?"menu.keyExpired1":"menu.invalidKey"}}catch{return{validity:!1,msg:"connectionFailed"}}}};function Z(i){let t;return{c(){t=g("i"),this.h()},l(e){t=k(e,"I",{class:!0}),v(t).forEach(f),this.h()},h(){b(t,"class","gi-times svelte-1dm3a6l")},m(e,s){K(e,t,s)},d(e){e&&f(t)}}}function x(i){let t;return{c(){t=g("i"),this.h()},l(e){t=k(e,"I",{class:!0}),v(t).forEach(f),this.h()},h(){b(t,"class","gi-circle-o svelte-1dm3a6l")},m(e,s){K(e,t,s)},d(e){e&&f(t)}}}function $(i){let t,e=(i[1]||(i[0]==="confirm"?i[5]("confirmButton"):i[5]("cancelButton")))+"",s;return{c(){t=g("span"),s=F(e)},l(a){t=k(a,"SPAN",{});var n=v(t);s=G(n,e),n.forEach(f)},m(a,n){K(a,t,n),M(t,s)},p(a,n){n&35&&e!==(e=(a[1]||(a[0]==="confirm"?a[5]("confirmButton"):a[5]("cancelButton")))+"")&&L(s,e)},i:w,o:w,d(a){a&&f(t)}}}function tt(i){let t;const e=i[9].default,s=P(e,i,i[8],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,n){s&&s.m(a,n),t=!0},p(a,n){s&&s.p&&(!t||n&256)&&R(s,e,a,a[8],t?Y(e,a[8],n,null):W(a[8]),null)},i(a){t||(T(s,a),t=!0)},o(a){j(s,a),t=!1},d(a){s&&s.d(a)}}}function et(i){let t,e,s,a,n,u,h,y;function _(l,o){return l[0]==="confirm"?x:Z}let d=_(i),r=d(i);const p=[tt,$],m=[];function c(l,o){return l[6]?0:1}return s=c(i),a=m[s]=p[s](i),{c(){t=g("button"),r.c(),e=V(),a.c(),this.h()},l(l){t=k(l,"BUTTON",{style:!0,class:!0});var o=v(t);r.l(o),e=I(o),a.l(o),o.forEach(f),this.h()},h(){t.disabled=i[2],b(t,"style",n=i[4]?`width:${i[4]}`:""),b(t,"class","svelte-1dm3a6l"),B(t,"light",i[3])},m(l,o){K(l,t,o),r.m(t,null),M(t,e),m[s].m(t,null),u=!0,h||(y=O(t,"click",q(i[7])),h=!0)},p(l,[o]){d!==(d=_(l))&&(r.d(1),r=d(l),r&&(r.c(),r.m(t,e))),a.p(l,o),(!u||o&4)&&(t.disabled=l[2]),(!u||o&16&&n!==(n=l[4]?`width:${l[4]}`:""))&&b(t,"style",n),o&8&&B(t,"light",l[3])},i(l){u||(T(a),u=!0)},o(l){j(a),u=!1},d(l){l&&f(t),r.d(),m[s].d(),h=!1,y()}}}function st(i,t,e){let s;z(i,J,c=>e(5,s=c));let{$$slots:a={},$$scope:n}=t;const u=t.$$slots;let{type:h="confirm"}=t,{text:y=""}=t,{disabled:_=!1}=t,{light:d=!1}=t,{width:r=""}=t;const p=C(),m=()=>p("click");return i.$$set=c=>{e(11,t=S(S({},t),A(c))),"type"in c&&e(0,h=c.type),"text"in c&&e(1,y=c.text),"disabled"in c&&e(2,_=c.disabled),"light"in c&&e(3,d=c.light),"width"in c&&e(4,r=c.width),"$$scope"in c&&e(8,n=c.$$scope)},t=A(t),[h,y,_,d,r,s,u,m,n,a]}class ct extends H{constructor(t){super(),N(this,t,st,et,U,{type:0,text:1,disabled:2,light:3,width:4})}}export{ct as B,lt as a};
