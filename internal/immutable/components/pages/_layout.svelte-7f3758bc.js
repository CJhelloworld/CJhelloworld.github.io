import{S as We,i as Be,s as Ce,a as U,e as oe,c as F,b as Q,f as G,g as ie,t as X,d as le,h as c,E as $,F as Ye,o as He,k as p,q as x,l as m,m as y,r as ee,n as s,p as te,G as l,H as ce,A as de,C as Ke,I as Qe,u as Xe,J as Ie,K as Ze,L as Le,v as be,M as $e,w as ge,N as se,x as we,O as xe,y as ve,P as pe,Q as et,R as tt,T as at,U as rt,V as ot}from"../../chunks/index-504fd5ff.js";import{_ as k}from"../../chunks/preload-helper-176e53da.js";import{D as st,k as nt}from"../../chunks/runtime.esm-09dcc7a6.js";import{p as it}from"../../chunks/stores-d89f990d.js";import{w as lt}from"../../chunks/index-24ef85ad.js";import{a as ct,i as Ee,m as ne,b as ut,c as Ae,v as De,d as Pe}from"../../chunks/app-stores-e4e3b006.js";import{H as dt,_ as pt,m as mt,a as ft}from"../../chunks/mobileDetect-ac55386b.js";import{o as Ue,l as _t,r as ht,g as bt,a as gt,s as ke,b as Fe,f as ue}from"../../chunks/index-9fd67b91.js";import{g as wt,o as vt,d as Et,a as yt}from"../../chunks/weapons-daf21159.js";import{H as re,D as me,K as It,A as fe}from"../../chunks/env-ea3f5f2d.js";import{I as ze}from"../../chunks/Iklan-152c3159.js";function kt(a={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:n}=a;let d,g,O,L;const M=async(S=!0)=>{await O,S&&d?.addEventListener("controlling",b=>{b.isUpdate&&window.location.reload()}),await L?.()};async function C(){if("serviceWorker"in navigator){const{Workbox:S,messageSW:b}=await k(()=>import("../../chunks/workbox-window.prod.es5-9f0a6626.js"),[],import.meta.url);L=async()=>{g&&g.waiting&&await b(g.waiting,{type:"SKIP_WAITING"})},d=new S("./sw.js",{scope:"./",type:"classic"}),d.addEventListener("activated",w=>{w.isUpdate||r?.()});{const w=()=>{t?.()};d.addEventListener("waiting",w),d.addEventListener("externalwaiting",w)}d.register({immediate:e}).then(w=>{g=w,i?i("./sw.js",w):o?.(w)}).catch(w=>{n?.(w)})}}return O=C(),M}const{getListByBanner:qe,addHistory:Je}=dt,Lt=async()=>{const a=await qe("weapons");a.length<1||a.map(e=>{e.banner="weapon-event",Ue.put({name:e.name}),Je(e)})},At=async()=>{const a=await qe("events");a.length<1||a.map(e=>{e.banner="character-event",Ue.put({name:e.name}),Je(e)})},Dt=()=>{const a={"pity4-character-event":"events4sPity","pity5-character-event":"events5sPity","pity4-weapon-event":"weapons4sPity","pity5-weapon-event":"weapons5sPity","pity4-beginner":"beginner4sPity","pity5-beginner":"beginner5sPity","pity4-standard":"standard4sPity","pity5-standard":"standard5sPity"};Object.keys(a).forEach(e=>{const t=localStorage.getItem(a[e]);localStorage.removeItem(a[e]),t&&_t.set(e,parseInt(t))})},Pt=()=>{const a=localStorage.getItem("beginnerRoll");localStorage.removeItem("beginnerRoll"),a&&ht.set("beginner",parseInt(a))},Tt=()=>{const a={beginner:"beginner",events4Star:"character-event-4star",events:"character-event-5star",weapons4Star:"weapon-event-4star",weapons:"weapon-event-5star"},e=localStorage.getItem("guaranteedStatus");if(!e)return;localStorage.removeItem("guaranteedStatus");const{status:t}=JSON.parse(e);Object.keys(t).forEach(r=>{const o=t[r];bt.set(a[r],o)})},Ot=()=>{["primogem","genesis","intertwined","acquaint","starglitter","stardust"].forEach(e=>{const t=localStorage.getItem(e);localStorage.removeItem(e),t&&gt.set(e,parseInt(t))})},St=()=>{const a=localStorage.getItem("fatepoint");if(localStorage.removeItem("fatepoint"),!a)return;const{data:e}=JSON.parse(a),t=e.map(({patch:r,phase:o,selected:i,point:n})=>({version:r,phase:o,selected:i,point:n}));ke.set("fatepoint",t)},Rt=()=>{const a=localStorage.getItem("welkin");if(localStorage.removeItem("welkin"),!a)return;const{latestCheckIn:e,remaining:t}=JSON.parse(a),r={latestCheckIn:e,remaining:t};ke.set("welkin",r)},jt=()=>{const a=localStorage.getItem("outfits");if(localStorage.removeItem("outfits"),!a)return;const{outfits:e}=JSON.parse(a),t=e.map(({isSet:r,name:o})=>{const{name:i}=wt(o);return{isSet:r,name:o,characterName:i}});ke.set("ownedOutfits",t)},Vt=()=>{const a=localStorage.getItem("config");if(localStorage.removeItem("config"),!a)return;const{config:e}=JSON.parse(a),t={adKey:"adKey",wishAmount:"wishAmount",topupBonus:"topupBonus",animatedBG:"animatedBG"};Object.keys(t).forEach(r=>{const o=e[r];o!=null&&Fe.set(t[r],o)})},Mt=()=>{const a=localStorage.getItem("firstshare");localStorage.removeItem("firstshare"),a&&Fe.set("firstTimeShare",a==="yes")},Nt=async()=>{localStorage.removeItem("storageVersion"),localStorage.removeItem("version"),Dt(),Pt(),Ot(),Tt(),St(),Rt(),jt(),Vt(),Mt(),await Lt(),await At()};let _e;const he=async({release:a=!1}={})=>{try{if(!a){_e=await navigator.wakeLock.request("screen");return}await _e.release(),_e=null}catch{}},Wt=()=>{"wakeLock"in navigator&&(he(),window.addEventListener("focus",()=>he()),window.addEventListener("blur",()=>he({release:!0})))};const Bt=[{dir:"background",paths:["constellation.webp","detailbg.webp","element-anemo-bg.webp","element-cryo-bg.webp","element-dendro-bg.webp","element-electro-bg.webp","element-geo-bg.webp","element-hydro-bg.webp","element-pyro-bg.webp","wish-background.webp"]},{dir:"utility",paths:["3star-bg.webp","4star-bg.webp","5star-bg.webp","acquaint-fate.webp","bg-bonus.webp","book.webp","book-select-bg.webp","brand.png","button.webp","fatepointbook-half.webp","fatepointbook.webp","genesis-60.webp","genesis-300.webp","genesis-980.webp","genesis-1980.webp","genesis-3280.webp","genesis-6480.webp","genesis-bg.webp","genesis.webp","history-select-bg.webp","imbroke.webp","intertwined-fate.webp","menu-active.png","modal-bg-icon.png","payment-childe.webp","payment-tears.webp","payment-wakaranai.webp","primogem.webp","shop-nav-bg.webp","welkin-card.webp","welkin-moon-girl.webp","welkin.webp"]}],Te=[{dir:"background",paths:["outfit-background.webp","splash-background.webp"]},{dir:"utility",paths:["bg-bow.webp","bg-catalyst.webp","bg-claymore.webp","bg-polearm.webp","bg-sword.webp","genshin-logo-cn.webp","genshin-logo.webp","masterless-stardust.webp","masterless-starglitter.webp","resultcard-bg.svg","stella-fortuna-4star.webp","stella-fortuna-5star.webp"]}],Ct=()=>{const a=[];for(let e=0;e<20;e++)a.push(`bg${e+1}.webp`);return{dir:"background",paths:a}},Ht=async()=>{const a={};vt.forEach(({name:e})=>{a[`face/${e}`]=`/images/outfits/face/${e}.webp`,a[`splash-art/${e}`]=`/images/outfits/splash-art/${e}.webp`,a[`thumbnail/${e}`]=`/images/outfits/thumbnail/${e}.webp`}),Et.forEach(({name:e,rarity:t})=>{a[`face/${e}`]=`/images/characters/face/${t}star/${e}.webp`,a[`splash-art/${e}`]=`/images/characters/splash-art/${t}star/${e}.webp`}),yt.forEach(({name:e,weaponType:t,rarity:r})=>{a[e]=`/images/weapons/${t}/${r}star/${e}.webp`});for await(const e of ct){const t=await pt(Object.assign({"../data/banners/events/1.0.json":()=>k(()=>import("../../chunks/1.0-1c054612.js"),[],import.meta.url),"../data/banners/events/1.1.json":()=>k(()=>import("../../chunks/1.1-3cf30f8b.js"),[],import.meta.url),"../data/banners/events/1.2.json":()=>k(()=>import("../../chunks/1.2-aaf0e2fb.js"),[],import.meta.url),"../data/banners/events/1.3.json":()=>k(()=>import("../../chunks/1.3-6b0b0d5d.js"),[],import.meta.url),"../data/banners/events/1.4.json":()=>k(()=>import("../../chunks/1.4-ad0ba199.js"),[],import.meta.url),"../data/banners/events/1.5.json":()=>k(()=>import("../../chunks/1.5-d00419ea.js"),[],import.meta.url),"../data/banners/events/1.6.json":()=>k(()=>import("../../chunks/1.6-5d274b2f.js"),[],import.meta.url),"../data/banners/events/2.0.json":()=>k(()=>import("../../chunks/2.0-d9400515.js"),[],import.meta.url),"../data/banners/events/2.1.json":()=>k(()=>import("../../chunks/2.1-b1e02588.js"),[],import.meta.url),"../data/banners/events/2.2.json":()=>k(()=>import("../../chunks/2.2-a8d9f452.js"),[],import.meta.url),"../data/banners/events/2.3.json":()=>k(()=>import("../../chunks/2.3-63f68053.js"),[],import.meta.url),"../data/banners/events/2.4.json":()=>k(()=>import("../../chunks/2.4-36c15b7f.js"),[],import.meta.url),"../data/banners/events/2.5.json":()=>k(()=>import("../../chunks/2.5-5d57feac.js"),[],import.meta.url),"../data/banners/events/2.6.json":()=>k(()=>import("../../chunks/2.6-0570e3ed.js"),[],import.meta.url),"../data/banners/events/2.7.json":()=>k(()=>import("../../chunks/2.7-1162b8cf.js"),[],import.meta.url),"../data/banners/events/2.8.json":()=>k(()=>import("../../chunks/2.8-c43df701.js"),[],import.meta.url),"../data/banners/events/3.0.json":()=>k(()=>import("../../chunks/3.0-3ac6ff72.js"),[],import.meta.url),"../data/banners/events/3.1.json":()=>k(()=>import("../../chunks/3.1-9f559463.js"),[],import.meta.url),"../data/banners/events/3.2.json":()=>k(()=>import("../../chunks/3.2-deb84a02.js"),[],import.meta.url),"../data/banners/events/3.3.json":()=>k(()=>import("../../chunks/3.3-60e982e0.js"),[],import.meta.url),"../data/banners/events/3.4.json":()=>k(()=>import("../../chunks/3.4-0159422c.js"),[],import.meta.url),"../data/banners/events/3.5.json":()=>k(()=>import("../../chunks/3.5-0e9eadf4.js"),[],import.meta.url),"../data/banners/events/3.6.json":()=>k(()=>import("../../chunks/3.6-2d1ccd10.js"),[],import.meta.url),"../data/banners/events/3.7.json":()=>k(()=>import("../../chunks/3.7-dfc781bc.js"),[],import.meta.url),"../data/banners/events/3.8.json":()=>k(()=>import("../../chunks/3.8-cab116ac.js"),[],import.meta.url),"../data/banners/events/4.0.json":()=>k(()=>import("../../chunks/4.0-b6f7811b.js"),[],import.meta.url),"../data/banners/events/4.1.json":()=>k(()=>import("../../chunks/4.1-a7933656.js"),[],import.meta.url),"../data/banners/events/4.2.json":()=>k(()=>import("../../chunks/4.2-f39dde5d.js"),[],import.meta.url)}),`../data/banners/events/${e.toFixed(1)}.json`),{data:r}=t.default;r.forEach(({banners:o})=>{const{bannerName:i}=o.weapons;a[i]=`/images/banner/weapons/${i}.webp`,o.events.featured.forEach(({bannerName:d})=>{a[d]=`/images/banner/character-events/${d}.webp`})})}return a["wanderlust-invocation-1"]="/images/banner/standard/wanderlust-invocation-1.webp",a["wanderlust-invocation-2"]="/images/banner/standard/wanderlust-invocation-2.webp",a.beginner="/images/banner/beginner/beginner.webp",a},Oe=a=>{const e=[],t=[Ct(),...Te,...Bt];return(a==="preview"?Te:t).forEach(({dir:o,paths:i})=>{i.forEach(n=>{const g={path:`/images/${o}/${n}`,asset:n};e.push(g)})}),e},Kt=async a=>{try{const e=await fetch(a);if(e.headers.get("Content-Type")==="text/html")throw new Error("Failed to load Assets");const r=await e.blob();return(window.URL||window.webkitURL).createObjectURL(r)}catch(e){return console.error(e),"error"}};function Se(a){let e,t,r,o,i,n,d,g,O,L,M,C,S,b,w,N,R,A,I,K,B;return{c(){e=p("div"),t=p("div"),r=p("div"),o=x(`An error occurred while trying to load some assets, this may affect your wish experience.
				`),i=p("br"),n=U(),d=p("small"),g=p("small"),O=x(`If you think this is a mistake, please contact me on
						`),L=p("a"),M=x(`Discord
						`),C=x("!"),S=U(),b=p("div"),w=p("button"),N=x("Reload"),R=U(),A=p("button"),I=x("Open Anyway"),this.h()},l(T){e=m(T,"DIV",{class:!0});var W=y(e);t=m(W,"DIV",{class:!0});var D=y(t);r=m(D,"DIV",{class:!0});var h=y(r);o=ee(h,`An error occurred while trying to load some assets, this may affect your wish experience.
				`),i=m(h,"BR",{}),n=F(h),d=m(h,"SMALL",{});var Y=y(d);g=m(Y,"SMALL",{});var H=y(g);O=ee(H,`If you think this is a mistake, please contact me on
						`),L=m(H,"A",{href:!0,style:!0});var J=y(L);M=ee(J,`Discord
						`),J.forEach(c),C=ee(H,"!"),H.forEach(c),Y.forEach(c),h.forEach(c),S=F(D),b=m(D,"DIV",{class:!0});var _=y(b);w=m(_,"BUTTON",{class:!0});var P=y(w);N=ee(P,"Reload"),P.forEach(c),R=F(_),A=m(_,"BUTTON",{class:!0});var Z=y(A);I=ee(Z,"Open Anyway"),Z.forEach(c),_.forEach(c),D.forEach(c),W.forEach(c),this.h()},h(){s(L,"href","https://discord.com/users/523179264116523018"),te(L,"color","#7289da"),s(r,"class","msg"),s(w,"class","reload svelte-o4a6oh"),s(A,"class","open svelte-o4a6oh"),s(b,"class","btn svelte-o4a6oh"),s(t,"class","modal-content svelte-o4a6oh"),s(e,"class","modal svelte-o4a6oh")},m(T,W){Q(T,e,W),l(e,t),l(t,r),l(r,o),l(r,i),l(r,n),l(r,d),l(d,g),l(g,O),l(g,L),l(L,M),l(g,C),l(t,S),l(t,b),l(b,w),l(w,N),l(b,R),l(b,A),l(A,I),K||(B=[ce(w,"click",a[8]),ce(A,"click",a[7])],K=!0)},p:de,d(T){T&&c(e),K=!1,Ke(B)}}}function Re(a){let e,t,r,o,i,n,d,g,O,L,M,C,S,b,w,N,R,A,I,K,B,T,W,D,h,Y,H,J;const _=[Ft,Ut],P=[];function Z(v,q){return v[4]<0?0:1}D=Z(a),h=P[D]=_[D](a);let z=a[5]&&!a[6]&&je();return{c(){e=p("div"),t=p("div"),r=p("div"),o=p("div"),i=p("i"),n=U(),d=p("i"),g=U(),O=p("i"),L=U(),M=p("i"),C=U(),S=p("i"),b=U(),w=p("i"),N=U(),R=p("i"),A=U(),I=p("div"),K=p("div"),B=U(),T=p("div"),W=U(),h.c(),Y=U(),z&&z.c(),this.h()},l(v){e=m(v,"DIV",{class:!0});var q=y(e);t=m(q,"DIV",{class:!0});var E=y(t);r=m(E,"DIV",{class:!0});var j=y(r);o=m(j,"DIV",{class:!0});var u=y(o);i=m(u,"I",{class:!0}),y(i).forEach(c),n=F(u),d=m(u,"I",{class:!0}),y(d).forEach(c),g=F(u),O=m(u,"I",{class:!0}),y(O).forEach(c),L=F(u),M=m(u,"I",{class:!0}),y(M).forEach(c),C=F(u),S=m(u,"I",{class:!0}),y(S).forEach(c),b=F(u),w=m(u,"I",{class:!0}),y(w).forEach(c),N=F(u),R=m(u,"I",{class:!0}),y(R).forEach(c),u.forEach(c),A=F(j),I=m(j,"DIV",{class:!0});var f=y(I);K=m(f,"DIV",{class:!0}),y(K).forEach(c),B=F(f),T=m(f,"DIV",{class:!0,style:!0}),y(T).forEach(c),f.forEach(c),j.forEach(c),W=F(E),h.l(E),Y=F(E),z&&z.l(E),E.forEach(c),q.forEach(c),this.h()},h(){s(i,"class","gi-pyro"),s(d,"class","gi-hydro"),s(O,"class","gi-anemo"),s(M,"class","gi-electro"),s(S,"class","gi-dendro"),s(w,"class","gi-cryo"),s(R,"class","gi-geo"),s(o,"class","icon"),s(K,"class","unfilled svelte-o4a6oh"),s(T,"class","filled animate svelte-o4a6oh"),te(T,"width",a[4].toFixed(2)+"%"),s(I,"class","blend svelte-o4a6oh"),s(r,"class","progress svelte-o4a6oh"),s(t,"class","content svelte-o4a6oh"),s(e,"class","loader svelte-o4a6oh")},m(v,q){Q(v,e,q),l(e,t),l(t,r),l(r,o),l(o,i),l(o,n),l(o,d),l(o,g),l(o,O),l(o,L),l(o,M),l(o,C),l(o,S),l(o,b),l(o,w),l(o,N),l(o,R),l(r,A),l(r,I),l(I,K),l(I,B),l(I,T),l(t,W),P[D].m(t,null),l(t,Y),z&&z.m(t,null),J=!0},p(v,q){(!J||q&16)&&te(T,"width",v[4].toFixed(2)+"%");let E=D;D=Z(v),D===E?P[D].p(v,q):(ie(),X(P[E],1,1,()=>{P[E]=null}),le(),h=P[D],h?h.p(v,q):(h=P[D]=_[D](v),h.c()),G(h,1),h.m(t,Y)),v[5]&&!v[6]?z||(z=je(),z.c(),z.m(t,null)):z&&(z.d(1),z=null)},i(v){J||(G(h),H&&H.end(1),J=!0)},o(v){X(h),H=Qe(e,ue,{duration:500,delay:1e3}),J=!1},d(v){v&&c(e),P[D].d(),z&&z.d(),v&&H&&H.end()}}}function Ut(a){let e,t=(a[4]>99?100:a[4].toFixed())+"",r,o,i;return{c(){e=p("div"),r=x(t),o=x("%"),this.h()},l(n){e=m(n,"DIV",{class:!0});var d=y(e);r=ee(d,t),o=ee(d,"%"),d.forEach(c),this.h()},h(){s(e,"class","text svelte-o4a6oh")},m(n,d){Q(n,e,d),l(e,r),l(e,o)},p(n,d){d&16&&t!==(t=(n[4]>99?100:n[4].toFixed())+"")&&Xe(r,t)},i(n){i||Ie(()=>{i=Ze(e,ue,{}),i.start()})},o:de,d(n){n&&c(e)}}}function Ft(a){let e,t,r,o;return{c(){e=p("div"),t=x("Connecting"),this.h()},l(i){e=m(i,"DIV",{class:!0});var n=y(e);t=ee(n,"Connecting"),n.forEach(c),this.h()},h(){s(e,"class","text connecting svelte-o4a6oh")},m(i,n){Q(i,e,n),l(e,t),o=!0},p:de,i(i){o||(Ie(()=>{r||(r=Le(e,ue,{},!0)),r.run(1)}),o=!0)},o(i){r||(r=Le(e,ue,{},!1)),r.run(0),o=!1},d(i){i&&c(e),i&&r&&r.end()}}}function je(a){let e,t,r,o,i;return{c(){e=p("div"),t=p("i"),r=U(),o=p("span"),i=x("Rotate for better experience"),this.h()},l(n){e=m(n,"DIV",{class:!0});var d=y(e);t=m(d,"I",{class:!0}),y(t).forEach(c),r=F(d),o=m(d,"SPAN",{class:!0});var g=y(o);i=ee(g,"Rotate for better experience"),g.forEach(c),d.forEach(c),this.h()},h(){s(t,"class","gi-rotate-phone svelte-o4a6oh"),s(o,"class","svelte-o4a6oh"),s(e,"class","rotate svelte-o4a6oh")},m(n,d){Q(n,e,d),l(e,t),l(e,r),l(e,o),l(o,i)},d(n){n&&c(e)}}}function zt(a){let e,t,r,o=a[2]&&!a[3]&&Se(a),i=!((a[0]||a[1])&&a[3]&&a[4]>=100)&&Re(a);return{c(){o&&o.c(),e=U(),i&&i.c(),t=oe()},l(n){o&&o.l(n),e=F(n),i&&i.l(n),t=oe()},m(n,d){o&&o.m(n,d),Q(n,e,d),i&&i.m(n,d),Q(n,t,d),r=!0},p(n,[d]){n[2]&&!n[3]?o?o.p(n,d):(o=Se(n),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),(n[0]||n[1])&&n[3]&&n[4]>=100?i&&(ie(),X(i,1,1,()=>{i=null}),le()):i?(i.p(n,d),d&27&&G(i,1)):(i=Re(n),i.c(),G(i,1),i.m(t.parentNode,t))},i(n){r||(G(i),r=!0)},o(n){X(i),r=!1},d(n){o&&o.d(n),n&&c(e),i&&i.d(n),n&&c(t)}}}function qt(a,e,t){let r,o;$(a,Ee,b=>t(5,r=b)),$(a,ne,b=>t(6,o=b));let{isBannerLoaded:i=!1}=e,{directLoad:n=!1}=e,d=!1,g=!1,O=-1;const L=Ye("loaded"),M=()=>{L(),t(3,g=!0)},C=async b=>{const w=b==="preview",N=[];let R=0;const A=w?Oe("preview"):Oe();for await(const B of A){R++;const{path:T,asset:W}=B,D=await Kt(T);D==="error"&&t(2,d=!0),N.push({url:D,name:W}),t(4,O=R/A.length*100)}const I=await Promise.all(N),K=await Ht();ut.update(B=>(B={},I.forEach(({url:T,name:W})=>B[W]=T),{...B,...K})),d===!1&&M()};He(()=>{C(n?"preview":"")});const S=()=>window.location.reload();return a.$$set=b=>{"isBannerLoaded"in b&&t(0,i=b.isBannerLoaded),"directLoad"in b&&t(1,n=b.directLoad)},[i,n,d,g,O,r,o,M,S]}class Jt extends We{constructor(e){super(),Be(this,e,qt,zt,Ce,{isBannerLoaded:0,directLoad:1})}}const{document:V,window:ye}=et;function Ve(a){let e;return{c(){e=p("link"),this.h()},l(t){e=m(t,"LINK",{rel:!0,href:!0}),this.h()},h(){s(e,"rel","canonical"),s(e,"href",re)},m(t,r){Q(t,e,r)},p:de,d(t){t&&c(e)}}}function Gt(a){let e;return{c(){e=p("link"),this.h()},l(t){e=m(t,"LINK",{rel:!0,href:!0}),this.h()},h(){s(e,"rel","manifest"),s(e,"href","/appmanifest.json")},m(t,r){Q(t,e,r)},d(t){t&&c(e)}}}function Me(a){let e,t;return e=new ze({props:{head:!0}}),{c(){be(e.$$.fragment)},l(r){ge(e.$$.fragment,r)},m(r,o){we(e,r,o),t=!0},i(r){t||(G(e.$$.fragment,r),t=!0)},o(r){X(e.$$.fragment,r),t=!1},d(r){ve(e,r)}}}function Ne(a){let e;const t=a[18].default,r=tt(t,a,a[17],null);return{c(){r&&r.c()},l(o){r&&r.l(o)},m(o,i){r&&r.m(o,i),e=!0},p(o,i){r&&r.p&&(!e||i&131072)&&at(r,t,o,o[17],e?ot(t,o[17],i,null):rt(o[17]),null)},i(o){e||(G(r,o),e=!0)},o(o){X(r,o),e=!1},d(o){r&&r.d(o)}}}function Yt(a){let e,t,r,o,i,n,d,g,O,L,M,C,S,b,w,N,R,A,I,K,B,T,W,D,h,Y,H,J,_,P,Z,z;Ie(a[19]);let v=a[2][1]&&!a[7]&&Ve(),q=Gt(),E=a[5]&&a[10]&&Me();W=new Jt({props:{isBannerLoaded:a[4],directLoad:a[9]}});let j=!a[14]&&a[5]&&Ne(a);return _=new ze({props:{type:"pop"}}),{c(){e=p("meta"),t=p("meta"),r=p("meta"),o=p("link"),i=p("meta"),n=p("meta"),d=p("meta"),g=p("meta"),O=p("meta"),L=p("meta"),M=p("meta"),C=p("meta"),S=p("meta"),b=p("meta"),w=p("meta"),v&&v.c(),N=p("link"),R=p("link"),A=p("link"),I=p("link"),q&&q.c(),K=oe(),E&&E.c(),B=oe(),T=U(),be(W.$$.fragment),D=U(),h=p("main"),j&&j.c(),Y=U(),H=p("a"),J=U(),be(_.$$.fragment),this.h()},l(u){const f=$e('[data-svelte="svelte-2jakzh"]',V.head);e=m(f,"META",{name:!0,content:!0}),t=m(f,"META",{name:!0,content:!0}),r=m(f,"META",{property:!0,content:!0}),o=m(f,"LINK",{rel:!0,href:!0,title:!0}),i=m(f,"META",{property:!0,content:!0}),n=m(f,"META",{property:!0,content:!0}),d=m(f,"META",{property:!0,content:!0}),g=m(f,"META",{property:!0,content:!0}),O=m(f,"META",{property:!0,content:!0}),L=m(f,"META",{name:!0,content:!0}),M=m(f,"META",{property:!0,content:!0}),C=m(f,"META",{property:!0,content:!0}),S=m(f,"META",{name:!0,content:!0}),b=m(f,"META",{name:!0,content:!0}),w=m(f,"META",{name:!0,content:!0}),v&&v.l(f),N=m(f,"LINK",{rel:!0,href:!0,as:!0,type:!0,crossorigin:!0}),R=m(f,"LINK",{rel:!0,href:!0,as:!0,type:!0,crossorigin:!0}),A=m(f,"LINK",{rel:!0,href:!0,as:!0,type:!0,crossorigin:!0}),I=m(f,"LINK",{rel:!0,href:!0,as:!0,type:!0,crossorigin:!0}),q&&q.l(f),K=oe(),E&&E.l(f),B=oe(),f.forEach(c),T=F(u),ge(W.$$.fragment,u),D=F(u),h=m(u,"MAIN",{class:!0,style:!0});var ae=y(h);j&&j.l(ae),Y=F(ae),H=m(ae,"A",{href:!0,class:!0,title:!0});var Ge=y(H);Ge.forEach(c),ae.forEach(c),J=F(u),ge(_.$$.fragment,u),this.h()},h(){s(e,"name","description"),s(e,"content",me),s(t,"name","keywords"),s(t,"content",It),s(r,"property","al:web:url"),s(r,"content",re),s(o,"rel","fluid-icon"),s(o,"href",re+"/meta-picture.jpg"),s(o,"title",fe),s(i,"property","og:url"),s(i,"content",re),s(n,"property","og:type"),s(n,"content","website"),s(d,"property","og:title"),s(d,"content",fe),s(g,"property","og:description"),s(g,"content",me),s(O,"property","og:image"),s(O,"content",re+"/meta-picture.jpg"),s(L,"name","twitter:card"),s(L,"content","summary_large_image"),s(M,"property","twitter:domain"),s(M,"content",re.replace("https://","").replace("http://","")),s(C,"property","twitter:url"),s(C,"content",re),s(S,"name","twitter:title"),s(S,"content",fe),s(b,"name","twitter:description"),s(b,"content",me),s(w,"name","twitter:image"),s(w,"content",re+"/meta-picture.jpg"),s(N,"rel","preload"),s(N,"href","/fonts/optimized_global_web.woff2"),s(N,"as","font"),s(N,"type","font/woff2"),s(N,"crossorigin",""),s(R,"rel","preload"),s(R,"href","/fonts/optimized_th_web.woff2"),s(R,"as","font"),s(R,"type","font/woff2"),s(R,"crossorigin",""),s(A,"rel","preload"),s(A,"href","/fonts/optimized_jp_web.woff2"),s(A,"as","font"),s(A,"type","font/woff2"),s(A,"crossorigin",""),s(I,"rel","preload"),s(I,"href","/fonts/optimized_zh_web.woff2"),s(I,"as","font"),s(I,"type","font/woff2"),s(I,"crossorigin",""),s(H,"href","/"),s(H,"class","uid"),s(H,"title","Try Your Luck by this Simulator"),s(h,"class",a[3]),te(h,"--screen-height",a[12]?`${a[12]}px`:"100vh"),te(h,"--screen-width",a[13]+"px"),te(h,"--genshin-font","var(--gi-"+a[6]+"-font)"),se(h,"mobile",a[11]),se(h,"preview",a[8])},m(u,f){l(V.head,e),l(V.head,t),l(V.head,r),l(V.head,o),l(V.head,i),l(V.head,n),l(V.head,d),l(V.head,g),l(V.head,O),l(V.head,L),l(V.head,M),l(V.head,C),l(V.head,S),l(V.head,b),l(V.head,w),v&&v.m(V.head,null),l(V.head,N),l(V.head,R),l(V.head,A),l(V.head,I),q&&q.m(V.head,null),l(V.head,K),E&&E.m(V.head,null),l(V.head,B),Q(u,T,f),we(W,u,f),Q(u,D,f),Q(u,h,f),j&&j.m(h,null),l(h,Y),l(h,H),Q(u,J,f),we(_,u,f),P=!0,Z||(z=[ce(ye,"resize",a[19]),ce(H,"click",xe(a[20]))],Z=!0)},p(u,[f]){u[2][1]&&!u[7]?v?v.p(u,f):(v=Ve(),v.c(),v.m(N.parentNode,N)):v&&(v.d(1),v=null),u[5]&&u[10]?E?f&1056&&G(E,1):(E=Me(),E.c(),G(E,1),E.m(B.parentNode,B)):E&&(ie(),X(E,1,1,()=>{E=null}),le());const ae={};f&16&&(ae.isBannerLoaded=u[4]),f&512&&(ae.directLoad=u[9]),W.$set(ae),!u[14]&&u[5]?j?(j.p(u,f),f&16416&&G(j,1)):(j=Ne(u),j.c(),G(j,1),j.m(h,Y)):j&&(ie(),X(j,1,1,()=>{j=null}),le()),(!P||f&8)&&s(h,"class",u[3]),(!P||f&4096)&&te(h,"--screen-height",u[12]?`${u[12]}px`:"100vh"),(!P||f&8192)&&te(h,"--screen-width",u[13]+"px"),(!P||f&64)&&te(h,"--genshin-font","var(--gi-"+u[6]+"-font)"),f&2056&&se(h,"mobile",u[11]),f&264&&se(h,"preview",u[8])},i(u){P||(G(E),G(W.$$.fragment,u),G(j),G(_.$$.fragment,u),P=!0)},o(u){X(E),X(W.$$.fragment,u),X(j),X(_.$$.fragment,u),P=!1},d(u){c(e),c(t),c(r),c(o),c(i),c(n),c(d),c(g),c(O),c(L),c(M),c(C),c(S),c(b),c(w),v&&v.d(u),c(N),c(R),c(A),c(I),q&&q.d(u),c(K),E&&E.d(u),c(B),u&&c(T),ve(W,u),u&&c(D),u&&c(h),j&&j.d(),u&&c(J),ve(_,u),Z=!1,Ke(z)}}}function Qt(a,e,t){let r,o,i,n,d,g,O,L,M,C,S,b,w;$(a,Ee,_=>t(21,d=_)),$(a,it,_=>t(16,g=_)),$(a,Ae,_=>t(22,O=_)),$(a,st,_=>t(3,L=_)),$(a,ne,_=>t(11,C=_)),$(a,Pe,_=>t(12,S=_)),$(a,De,_=>t(13,b=_)),$(a,nt,_=>t(14,w=_));let{$$slots:N={},$$scope:R}=e,A,I,K=!1,B=!1;const T=lt(!1);$(a,T,_=>t(10,M=_)),pe("bannerLoaded",()=>t(4,K=!0)),pe("loaded",()=>t(5,B=!0)),pe("showAd",T);let W="";const D=()=>{if(O)return ne.set(!0);const _=screen.orientation?.angle||0,P=_===90||_===270;ne.set(P)},h=["adkey","install","privacy-policy","screen"],Y=()=>{if(g.url.host.includes("cdn."))return window.location.replace("https://wishsimulator.app/");if(r[1]&&!n)return window.location.replace("/")};mt(),He(()=>{Y();const _=new URL(window.location.href),P=new URLSearchParams(_.search);Ae.set(P.get("pwa")==="true"||!!P.get("pwasc")),kt(),Wt(),Nt(),Ee.set(ft()||I<601),d&&D(),window.addEventListener("orientationchange",()=>{d&&D()}),document.addEventListener("contextmenu",Z=>Z.preventDefault())});function H(){t(0,A=ye.innerHeight),t(1,I=ye.innerWidth)}const J=()=>window.location.replace("/");return a.$$set=_=>{"$$scope"in _&&t(17,R=_.$$scope)},a.$$.update=()=>{if(a.$$.dirty&8){const _=L?.toLowerCase()||"",P=_.match(/(cn|ja)/);t(6,W=P||_.includes("th")?_.split("-")[0]:"global")}a.$$.dirty&2&&De.set(I),a.$$.dirty&1&&Pe.set(A),a.$$.dirty&65536&&t(2,r=g.url.pathname.split("/")),a.$$.dirty&4&&t(9,o=r[1]!==""),a.$$.dirty&4&&t(8,i=r[1]==="screen"),a.$$.dirty&4&&t(7,n=h.includes(r[1].toLowerCase()))},[A,I,r,L,K,B,W,n,i,o,M,C,S,b,w,T,g,R,N,H,J]}class ia extends We{constructor(e){super(),Be(this,e,Qt,Yt,Ce,{})}}export{ia as default};
