try{self["workbox:core:6.5.3"]&&_()}catch{}const M=(a,...e)=>{let t=a;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t},I=M;class l extends Error{constructor(e,t){const s=I(e,t);super(s),this.name=e,this.details=t}}const S=new Set,f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration<"u"?registration.scope:""},P=a=>[f.prefix,a,f.suffix].filter(e=>e&&e.length>0).join("-"),W=a=>{for(const e of Object.keys(f))a(e)},R={updateDetails:a=>{W(e=>{typeof a[e]=="string"&&(f[e]=a[e])})},getGoogleAnalyticsName:a=>a||P(f.googleAnalytics),getPrecacheName:a=>a||P(f.precache),getPrefix:()=>f.prefix,getRuntimeName:a=>a||P(f.runtime),getSuffix:()=>f.suffix};function K(a,e){const t=new URL(a);for(const s of e)t.searchParams.delete(s);return t.href}async function D(a,e,t,s){const n=K(e.url,t);if(e.url===n)return a.match(e,s);const r=Object.assign(Object.assign({},s),{ignoreSearch:!0}),c=await a.keys(e,r);for(const i of c){const o=K(i.url,t);if(n===o)return a.match(i,s)}}let w;function A(){if(w===void 0){const a=new Response("");if("body"in a)try{new Response(a.body),w=!0}catch{w=!1}w=!1}return w}class j{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}async function F(){for(const a of S)await a()}const q=a=>new URL(String(a),location.href).href.replace(new RegExp(`^${location.origin}`),"");function H(a){return new Promise(e=>setTimeout(e,a))}function x(a,e){const t=e();return a.waitUntil(t),t}async function $(a,e){let t=null;if(a.url&&(t=new URL(a.url).origin),t!==self.location.origin)throw new l("cross-origin-copy-response",{origin:t});const s=a.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},r=e?e(n):n,c=A()?s.body:await s.blob();return new Response(c,r)}function B(){self.addEventListener("activate",()=>self.clients.claim())}function V(a){R.updateDetails(a)}function G(){self.skipWaiting()}try{self["workbox:precaching:6.5.3"]&&_()}catch{}const Q="__WB_REVISION__";function z(a){if(!a)throw new l("add-to-cache-list-unexpected-type",{entry:a});if(typeof a=="string"){const r=new URL(a,location.href);return{cacheKey:r.href,url:r.href}}const{revision:e,url:t}=a;if(!t)throw new l("add-to-cache-list-unexpected-type",{entry:a});if(!e){const r=new URL(t,location.href);return{cacheKey:r.href,url:r.href}}const s=new URL(t,location.href),n=new URL(t,location.href);return s.searchParams.set(Q,e),{cacheKey:s.href,url:n.href}}class J{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){const n=t.originalRequest.url;s?this.notUpdatedURLs.push(n):this.updatedURLs.push(n)}return s}}}class X{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:s})=>{const n=s?.cacheKey||this._precacheController.getCacheKeyForURL(t.url);return n?new Request(n,{headers:t.headers}):t},this._precacheController=e}}try{self["workbox:strategies:6.5.3"]&&_()}catch{}function b(a){return typeof a=="string"?new Request(a):a}class Y{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new j,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=b(e);if(s.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const c=await t.preloadResponse;if(c)return c}const n=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const c of this.iterateCallbacks("requestWillFetch"))s=await c({request:s.clone(),event:t})}catch(c){if(c instanceof Error)throw new l("plugin-error-request-will-fetch",{thrownErrorMessage:c.message})}const r=s.clone();try{let c;c=await fetch(s,s.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const i of this.iterateCallbacks("fetchDidSucceed"))c=await i({event:t,request:r,response:c});return c}catch(c){throw n&&await this.runCallbacks("fetchDidFail",{error:c,event:t,originalRequest:n.clone(),request:r.clone()}),c}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=b(e);let s;const{cacheName:n,matchOptions:r}=this._strategy,c=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},r),{cacheName:n});s=await caches.match(c,i);for(const o of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await o({cacheName:n,matchOptions:r,cachedResponse:s,request:c,event:this.event})||void 0;return s}async cachePut(e,t){const s=b(e);await H(0);const n=await this.getCacheKey(s,"write");if(!t)throw new l("cache-put-with-no-response",{url:q(n.url)});const r=await this._ensureResponseSafeToCache(t);if(!r)return!1;const{cacheName:c,matchOptions:i}=this._strategy,o=await self.caches.open(c),h=this.hasCallback("cacheDidUpdate"),g=h?await D(o,n.clone(),["__WB_REVISION__"],i):null;try{await o.put(n,h?r.clone():r)}catch(u){if(u instanceof Error)throw u.name==="QuotaExceededError"&&await F(),u}for(const u of this.iterateCallbacks("cacheDidUpdate"))await u({cacheName:c,oldResponse:g,newResponse:r.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let n=e;for(const r of this.iterateCallbacks("cacheKeyWillBeUsed"))n=b(await r({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const s=this._pluginStateMap.get(t);yield r=>{const c=Object.assign(Object.assign({},r),{state:s});return t[e](c)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const n of this.iterateCallbacks("cacheWillUpdate"))if(t=await n({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&t.status!==200&&(t=void 0),t}}class T{constructor(e={}){this.cacheName=R.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s=typeof e.request=="string"?new Request(e.request):e.request,n="params"in e?e.params:void 0,r=new Y(this,{event:t,request:s,params:n}),c=this._getResponse(r,s,t),i=this._awaitComplete(c,r,s,t);return[c,i]}async _getResponse(e,t,s){await e.runCallbacks("handlerWillStart",{event:s,request:t});let n;try{if(n=await this._handle(t,e),!n||n.type==="error")throw new l("no-response",{url:t.url})}catch(r){if(r instanceof Error){for(const c of e.iterateCallbacks("handlerDidError"))if(n=await c({error:r,event:s,request:t}),n)break}if(!n)throw r}for(const r of e.iterateCallbacks("handlerWillRespond"))n=await r({event:s,request:t,response:n});return n}async _awaitComplete(e,t,s,n){let r,c;try{r=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:r}),await t.doneWaiting()}catch(i){i instanceof Error&&(c=i)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:r,error:c}),t.destroy(),c)throw c}}class d extends T{constructor(e={}){e.cacheName=R.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(d.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const n=t.params||{};if(this._fallbackToNetwork){const r=n.integrity,c=e.integrity,i=!c||c===r;s=await t.fetch(new Request(e,{integrity:e.mode!=="no-cors"?c||r:void 0})),r&&i&&e.mode!=="no-cors"&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}else throw new l("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new l("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==d.copyRedirectedCacheableResponsesPlugin&&(n===d.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);t===0?this.plugins.push(d.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}d.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:a}){return!a||a.status>=400?null:a}};d.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:a}){return a.redirected?await $(a):a}};class Z{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new d({cacheName:R.getPrecacheName(e),plugins:[...t,new X({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){typeof s=="string"?t.push(s):s&&s.revision===void 0&&t.push(s.url);const{cacheKey:n,url:r}=z(s),c=typeof s!="string"&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(r)&&this._urlsToCacheKeys.get(r)!==n)throw new l("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(r),secondEntry:n});if(typeof s!="string"&&s.integrity){if(this._cacheKeysToIntegrities.has(n)&&this._cacheKeysToIntegrities.get(n)!==s.integrity)throw new l("add-to-cache-list-conflicting-integrities",{url:r});this._cacheKeysToIntegrities.set(n,s.integrity)}if(this._urlsToCacheKeys.set(r,n),this._urlsToCacheModes.set(r,c),t.length>0){const i=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(i)}}}install(e){return x(e,async()=>{const t=new J;this.strategy.plugins.push(t);for(const[r,c]of this._urlsToCacheKeys){const i=this._cacheKeysToIntegrities.get(c),o=this._urlsToCacheModes.get(r),h=new Request(r,{integrity:i,cache:o,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:c},request:h,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}})}activate(e){return x(e,async()=>{const t=await self.caches.open(this.strategy.cacheName),s=await t.keys(),n=new Set(this._urlsToCacheKeys.values()),r=[];for(const c of s)n.has(c.url)||(await t.delete(c),r.push(c.url));return{deletedURLs:r}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new l("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let L;const E=()=>(L||(L=new Z),L);try{self["workbox:routing:6.5.3"]&&_()}catch{}const v="GET",U=a=>a&&typeof a=="object"?a:{handle:a};class m{constructor(e,t,s=v){this.handler=U(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=U(e)}}class ee extends m{constructor(e,t,s){const n=({url:r})=>{const c=e.exec(r.href);if(!!c&&!(r.origin!==location.origin&&c.index!==0))return c.slice(1)};super(n,t,s)}}class te{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(n=>{typeof n=="string"&&(n=[n]);const r=new Request(...n);return this.handleRequest({request:r,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:r,route:c}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=c&&c.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return;let h;try{h=i.handle({url:s,request:e,event:t,params:r})}catch(u){h=Promise.reject(u)}const g=c&&c.catchHandler;return h instanceof Promise&&(this._catchHandler||g)&&(h=h.catch(async u=>{if(g)try{return await g.handle({url:s,request:e,event:t,params:r})}catch(N){N instanceof Error&&(u=N)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw u})),h}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const r=this._routes.get(s.method)||[];for(const c of r){let i;const o=c.match({url:e,sameOrigin:t,request:s,event:n});if(o)return i=o,(Array.isArray(i)&&i.length===0||o.constructor===Object&&Object.keys(o).length===0||typeof o=="boolean")&&(i=void 0),{route:c,params:i}}return{}}setDefaultHandler(e,t=v){this._defaultHandlerMap.set(t,U(e))}setCatchHandler(e){this._catchHandler=U(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new l("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new l("unregister-route-route-not-registered")}}let y;const se=()=>(y||(y=new te,y.addFetchListener(),y.addCacheListener()),y);function p(a,e,t){let s;if(typeof a=="string"){const r=new URL(a,location.href),c=({url:i})=>i.href===r.href;s=new m(c,e,t)}else if(a instanceof RegExp)s=new ee(a,e,t);else if(typeof a=="function")s=new m(a,e,t);else if(a instanceof m)s=a;else throw new l("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return se().registerRoute(s),s}function ae(a,e=[]){for(const t of[...a.searchParams.keys()])e.some(s=>s.test(t))&&a.searchParams.delete(t);return a}function*ne(a,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={}){const r=new URL(a,location.href);r.hash="",yield r.href;const c=ae(r,e);if(yield c.href,t&&c.pathname.endsWith("/")){const i=new URL(c.href);i.pathname+=t,yield i.href}if(s){const i=new URL(c.href);i.pathname+=".html",yield i.href}if(n){const i=n({url:r});for(const o of i)yield o.href}}class re extends m{constructor(e,t){const s=({request:n})=>{const r=e.getURLsToCacheKeys();for(const c of ne(n.url,t)){const i=r.get(c);if(i){const o=e.getIntegrityForCacheKey(i);return{cacheKey:i,integrity:o}}}};super(s,e.strategy)}}function ce(a){const e=E(),t=new re(e,a);p(t)}const ie="-precache-",oe=async(a,e=ie)=>{const s=(await self.caches.keys()).filter(n=>n.includes(e)&&n.includes(self.registration.scope)&&n!==a);return await Promise.all(s.map(n=>self.caches.delete(n))),s};function le(){self.addEventListener("activate",a=>{const e=R.getPrecacheName();a.waitUntil(oe(e).then(t=>{}))})}function he(a){E().precache(a)}function ue(a,e){he(a),ce(e)}class fe extends T{async _handle(e,t){let s=await t.cacheMatch(e),n;if(!s)try{s=await t.fetchAndCachePut(e)}catch(r){r instanceof Error&&(n=r)}if(!s)throw new l("no-response",{url:e.url,error:n});return s}}const de={cacheWillUpdate:async({response:a})=>a.status===200||a.status===0?a:null};class k extends T{constructor(e={}){super(e),this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift(de),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const s=[],n=[];let r;if(this._networkTimeoutSeconds){const{id:o,promise:h}=this._getTimeoutPromise({request:e,logs:s,handler:t});r=o,n.push(h)}const c=this._getNetworkPromise({timeoutId:r,request:e,logs:s,handler:t});n.push(c);const i=await t.waitUntil((async()=>await t.waitUntil(Promise.race(n))||await c)());if(!i)throw new l("no-response",{url:e.url});return i}_getTimeoutPromise({request:e,logs:t,handler:s}){let n;return{promise:new Promise(c=>{n=setTimeout(async()=>{c(await s.cacheMatch(e))},this._networkTimeoutSeconds*1e3)}),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:n}){let r,c;try{c=await n.fetchAndCachePut(t)}catch(i){i instanceof Error&&(r=i)}return e&&clearTimeout(e),(r||!c)&&(c=await n.cacheMatch(t)),c}}try{self["workbox:cacheable-response:6.5.3"]&&_()}catch{}class pe{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some(s=>e.headers.get(s)===this._headers[s])),t}}class ge{constructor(e){this.cacheWillUpdate=async({response:t})=>this._cacheableResponse.isResponseCacheable(t)?t:null,this._cacheableResponse=new pe(e)}}const C="v1";B();G();le();V({prefix:"WishSim",precache:"Core",suffix:C});let O=[{"revision":"afb9cf42f1ea74deaeeef4599834329c","url":"adkey.html"},{"revision":"a0a9932bef6090037a1239149cca85b0","url":"google77966abbed90508f.html"},{"revision":"a22c13e5cea3c90fe2a22086ff1d1118","url":"icons.css"},{"revision":"75074543f70c0fff0236e165792a0b97","url":"index.html"},{"revision":"2d68412a22921fbfdaf466b550720a3f","url":"install.html"},{"revision":"3e3ebd667ba62aa57320237503448960","url":"internal/immutable/assets/_error-bd9d867e.css"},{"revision":"216946789526836e2c1b9414bf717427","url":"internal/immutable/assets/_layout-d8bca03c.css"},{"revision":"c6021c470124781dd19dc434a11670b2","url":"internal/immutable/assets/_modal-balance-4f630c28.css"},{"revision":"dd86eaa1e1cf8a55c2ae1936a9c522c8","url":"internal/immutable/assets/_page-38811b6b.css"},{"revision":"c2e2da842b770c3a709ec40a036b0880","url":"internal/immutable/assets/_page-3c659a81.css"},{"revision":"93756d8efbeb015ff93b5a547179be61","url":"internal/immutable/assets/_page-41952c63.css"},{"revision":"d91693786f1bc49dc6c02bf0948de3e1","url":"internal/immutable/assets/_page-c70f6bd1.css"},{"revision":"082d054c41e4f4660fcc55eec05aa792","url":"internal/immutable/assets/_page-c955f7fd.css"},{"revision":"6bae0d3a2f432670619e36cb211697d9","url":"internal/immutable/assets/ButtonModal-a45f7e67.css"},{"revision":"6f512a9bafe602555281031197e4d185","url":"internal/immutable/assets/index-3d9a7568.css"},{"revision":"247361e225ea1dd841369e32de614cc3","url":"internal/immutable/assets/index-69eb2ab3.css"},{"revision":"2ed7a752fd538388e4cce29deae991dc","url":"internal/immutable/assets/index-72738b38.css"},{"revision":"3bb60d8456ca2e6d77c661c20d8bade2","url":"internal/immutable/assets/index-95d80854.css"},{"revision":"9b1ddd8e3674099dbb68fa273ee39499","url":"internal/immutable/assets/index-9c6a6554.css"},{"revision":"4c837c3608c7c0534fe97aba708e6fca","url":"internal/immutable/assets/index-f0ee7e4a.css"},{"revision":"0ec10572699394d94060bd03ad967ee1","url":"internal/immutable/assets/ModalConvert-1cf56ccf.css"},{"revision":"4b27328128106f233f8a7735b30c4cb9","url":"internal/immutable/assets/ObtainedItem-64c93daf.css"},{"revision":"d368103db4e277e1448de4fd2d62b30a","url":"internal/immutable/assets/WishResult-b5aac2dc.css"},{"revision":"9f05b2536f35f6a9ea39f545b9ea3d2b","url":"internal/immutable/chunks/_layout-0ebf6292.js"},{"revision":"018f1398139c5d07406c3ffd4ba62eff","url":"internal/immutable/chunks/_modal-balance-1a26fc36.js"},{"revision":"9f464a48aff396a9bb8304e9f6fb65f1","url":"internal/immutable/chunks/_modal-balance-c0611654.js"},{"revision":"b486cca0862411ce437848744380fc0b","url":"internal/immutable/chunks/_page-751e378c.js"},{"revision":"1f864c3e3cbfa4b19b5f1132e45785b4","url":"internal/immutable/chunks/_page-939fbe0c.js"},{"revision":"6017938e874b22bbd5877f5a0d9a7294","url":"internal/immutable/chunks/0-244e2e82.js"},{"revision":"d85d7b8b6a8997922c521fb0e4e52b9b","url":"internal/immutable/chunks/0-f39d31b5.js"},{"revision":"ef6e440e14cb8b874d163db1b6fe4f08","url":"internal/immutable/chunks/1-086c38a2.js"},{"revision":"72791581f43d74e70b4a46315ea2accb","url":"internal/immutable/chunks/1-e9f40308.js"},{"revision":"cd406bb4cfc4a1f77ecff989dec3f268","url":"internal/immutable/chunks/1-e9fbe59c.js"},{"revision":"1386d8aa062fe1c91593508cd8de5912","url":"internal/immutable/chunks/1.0-1c054612.js"},{"revision":"c35b142ed7eee443c075ade0794af07e","url":"internal/immutable/chunks/1.1-3cf30f8b.js"},{"revision":"fffb827ff57cc864c1afd3af0c88ae2d","url":"internal/immutable/chunks/1.2-aaf0e2fb.js"},{"revision":"d32e54833435ae06c0f17b4ff9dbccf2","url":"internal/immutable/chunks/1.3-6b0b0d5d.js"},{"revision":"e9c25c0251fec0f200487007caaebe86","url":"internal/immutable/chunks/1.4-ad0ba199.js"},{"revision":"8a9173ece12f102ccc15cbf9a7a3ec53","url":"internal/immutable/chunks/1.5-d00419ea.js"},{"revision":"8c3f45de545fa9d367d6bf62d147f156","url":"internal/immutable/chunks/1.6-5d274b2f.js"},{"revision":"2d7147f56655a6eee3c510b48cea27a1","url":"internal/immutable/chunks/2-3bc0d859.js"},{"revision":"a86e0543391e8e8bb084be5e3b8684b0","url":"internal/immutable/chunks/2-585f595f.js"},{"revision":"47d802e1445d38c7614bfaa5b9f7b1bd","url":"internal/immutable/chunks/2-9a2547ec.js"},{"revision":"e65d404870d99e2ff0983f7e04d4f10d","url":"internal/immutable/chunks/2.0-d9400515.js"},{"revision":"56febe715719c51b384d2ba09ddd9b47","url":"internal/immutable/chunks/2.1-b1e02588.js"},{"revision":"52f2d96fd564b887a4b751d278f56fc6","url":"internal/immutable/chunks/2.2-a8d9f452.js"},{"revision":"522777874cf72382caadec8d2ddcd35d","url":"internal/immutable/chunks/2.3-63f68053.js"},{"revision":"d5571a6cd8a15d5544ca37c7f80164f8","url":"internal/immutable/chunks/2.4-36c15b7f.js"},{"revision":"9ff141aa4d4ac3d7a095a2f745a86eb4","url":"internal/immutable/chunks/2.5-5d57feac.js"},{"revision":"df767eb8a8f73eee131000ea994c2cbe","url":"internal/immutable/chunks/2.6-0570e3ed.js"},{"revision":"caa2181c3af07cf6cd4a85a67ccd5a8f","url":"internal/immutable/chunks/2.7-1162b8cf.js"},{"revision":"61a66ae469f9076eb61f3539061dd039","url":"internal/immutable/chunks/2.8-c43df701.js"},{"revision":"65ac42ccefaed6ce95c97ba13828b8b7","url":"internal/immutable/chunks/3-08fe2784.js"},{"revision":"0ee0d02b813d89088b08321117509ef8","url":"internal/immutable/chunks/3-db4861fc.js"},{"revision":"42fdae4922a7edaec69ab88117ad0924","url":"internal/immutable/chunks/3.0-3ac6ff72.js"},{"revision":"8f31adeed13e07b2e6737cc386311847","url":"internal/immutable/chunks/3.1-9f559463.js"},{"revision":"388b746da4cedbf04022465767d49ec7","url":"internal/immutable/chunks/3.2-deb84a02.js"},{"revision":"56a724c63b368780df9de7124d42d137","url":"internal/immutable/chunks/3.3-60e982e0.js"},{"revision":"da4de9a6ac750b07619ece8ad2cbe7fb","url":"internal/immutable/chunks/3.4-0159422c.js"},{"revision":"5b40898c5cb50f7847e423f5b8ffc9a4","url":"internal/immutable/chunks/3.5-0e9eadf4.js"},{"revision":"02b401d07d046fac2fd2db3b86e110bb","url":"internal/immutable/chunks/3.6-2d1ccd10.js"},{"revision":"9d1403d894370d68acd2731f04b418dd","url":"internal/immutable/chunks/3.7-dfc781bc.js"},{"revision":"bd71b088c7876a02a740ef2eedea8d3f","url":"internal/immutable/chunks/3.8-cab116ac.js"},{"revision":"ef1bc178cc3aeafc22195c25ab81229a","url":"internal/immutable/chunks/4-6d3e21f9.js"},{"revision":"dae5371f4f76edda3d1a9ddb4f4efb24","url":"internal/immutable/chunks/4-a3f54d70.js"},{"revision":"745f136f1e3466dd1e27dab61a49a929","url":"internal/immutable/chunks/4.0-b6f7811b.js"},{"revision":"963e254c53d69285aab3642a2acd2a84","url":"internal/immutable/chunks/4.1-a7933656.js"},{"revision":"bd3793d4cb602c3a38ea968d00635f0e","url":"internal/immutable/chunks/4.2-f39dde5d.js"},{"revision":"deab04545986323373bcdd4aa3a6a43a","url":"internal/immutable/chunks/5-df500087.js"},{"revision":"b83d342e5186ae4bcc80b2ff88d2cc72","url":"internal/immutable/chunks/6-77825a34.js"},{"revision":"c0709709a6e64bc7a109ef402baf9caa","url":"internal/immutable/chunks/7-f0b4298c.js"},{"revision":"9a5e30c128c9d11ab4c59b180a8f10c4","url":"internal/immutable/chunks/7-ff5ebcba.js"},{"revision":"364d0152bd47e88ba1acc62084c3508c","url":"internal/immutable/chunks/8-0e3bb5ea.js"},{"revision":"66ba7e4f658a6e5ffe63d6cf76ee84a3","url":"internal/immutable/chunks/8-7e443e83.js"},{"revision":"13b0336905d22c6432a214a4e3d848f4","url":"internal/immutable/chunks/9-6a4435cb.js"},{"revision":"cc4a97ed0c54e9cbb54c5eabb447ce3b","url":"internal/immutable/chunks/9-dfd52068.js"},{"revision":"6bc4b6def3ad07a6e0d9a30dbdda7020","url":"internal/immutable/chunks/app-stores-e4e3b006.js"},{"revision":"b09fea70c95e93f468ba36d9eeab4037","url":"internal/immutable/chunks/audio-f580eebb.js"},{"revision":"eaab97f48922c49e1c29e5153d46104f","url":"internal/immutable/chunks/ButtonModal-e1cd505b.js"},{"revision":"3bc30f1af2927b797b604aef733f8af6","url":"internal/immutable/chunks/de-DE-115accc9.js"},{"revision":"7befba8b3df28bde84e01545a4f6ff28","url":"internal/immutable/chunks/en-US-32833987.js"},{"revision":"d2f570bf6521f3e0b698add1ccbf3888","url":"internal/immutable/chunks/en-US-e1895e7b.js"},{"revision":"50955ea6373a52ae9cf7f1f49c83274f","url":"internal/immutable/chunks/env-ea3f5f2d.js"},{"revision":"70df017cc46f8e094975cfcdc487def5","url":"internal/immutable/chunks/fr-FR-1c63fae4.js"},{"revision":"6ee6634f398cc7f47ec515eb417c80e3","url":"internal/immutable/chunks/id-ID-f75ab10a.js"},{"revision":"98aa171b0959c0c25abbad4d01b1192c","url":"internal/immutable/chunks/Iklan-152c3159.js"},{"revision":"4ae79edb69e98a6feb1468713a0d75d8","url":"internal/immutable/chunks/Iklan-d2329058.js"},{"revision":"2fd8174e13968b4f9deecb637535b70a","url":"internal/immutable/chunks/index-24ef85ad.js"},{"revision":"29df32e0cbee9f691d3bb20087129776","url":"internal/immutable/chunks/index-2665d35a.js"},{"revision":"9c00f367ca7f14e6c370436c852156ef","url":"internal/immutable/chunks/index-4082e041.js"},{"revision":"b032cb4525bc574f2c60c614d608c01d","url":"internal/immutable/chunks/index-504fd5ff.js"},{"revision":"c08deedfdf8631afb403f169d4af33dd","url":"internal/immutable/chunks/index-535325e2.js"},{"revision":"4e6656f3c5271c934c06d3a95de60c63","url":"internal/immutable/chunks/index-57d87f54.js"},{"revision":"b07beaba7b350f39a4a8bd4947b6ea40","url":"internal/immutable/chunks/index-5f3585d6.js"},{"revision":"2dd466ea190825a98f0c00d8b63c0f24","url":"internal/immutable/chunks/index-66471021.js"},{"revision":"65bcb58bee0d0f97b30e8d416d9d10e6","url":"internal/immutable/chunks/index-6aee2778.js"},{"revision":"12f0511c6ee6f9b66ab7c8bb11f31706","url":"internal/immutable/chunks/index-70e97de8.js"},{"revision":"87e352224a131e125692e818c6d00dcb","url":"internal/immutable/chunks/index-7dd1829b.js"},{"revision":"4e36468d59c28cb448927ae141d6f42d","url":"internal/immutable/chunks/index-9fd67b91.js"},{"revision":"ffba90789137c80740edd606097d65f2","url":"internal/immutable/chunks/index-b2dbc4bd.js"},{"revision":"be8164a549e7ca8c2b6d291593b244fa","url":"internal/immutable/chunks/index-d4f601b9.js"},{"revision":"e823712d3f15716423953bcac8aba8e7","url":"internal/immutable/chunks/index-db1ec0d9.js"},{"revision":"10e66b428933dc35ec4499ce98a6fbfc","url":"internal/immutable/chunks/it-IT-1b7e7208.js"},{"revision":"aaf62768bd8ba71d0a0bb2af75762a59","url":"internal/immutable/chunks/it-IT-468a82f3.js"},{"revision":"42b1dbf629c2de0e203b1cc1a920ac6e","url":"internal/immutable/chunks/ja-JP-28879c5e.js"},{"revision":"35f217c734461ba1187a8d39c7779279","url":"internal/immutable/chunks/ja-JP-74e2602c.js"},{"revision":"b2656bee80db869d0360ea1aeff01e25","url":"internal/immutable/chunks/mobileDetect-028fb7ea.js"},{"revision":"572dcc8024aa5505e99e99dac478cccb","url":"internal/immutable/chunks/mobileDetect-ac55386b.js"},{"revision":"fa568f902aea4d4abe795dd55e8521af","url":"internal/immutable/chunks/ModalConvert-d3863a9d.js"},{"revision":"970e7a62c9ca3d568a0af17760b66cfb","url":"internal/immutable/chunks/ModalConvert-f46c086b.js"},{"revision":"0d799f87ebe80b08f1e35edc9c8e14ee","url":"internal/immutable/chunks/navigation-10ef48e9.js"},{"revision":"f128a680234036eeb05b0ef9fc2c6cae","url":"internal/immutable/chunks/navigation-6ffd89b8.js"},{"revision":"72aa3350110646978643a4f6121b7468","url":"internal/immutable/chunks/ObtainedItem-a53f08ce.js"},{"revision":"d16bb9c8158c60c81074b989368e3dae","url":"internal/immutable/chunks/ObtainedItem-ca91c87a.js"},{"revision":"02c605681ba12e962421711edcf214c4","url":"internal/immutable/chunks/preload-helper-176e53da.js"},{"revision":"047988c2c75705ebaa15d68d75356c25","url":"internal/immutable/chunks/pt-BR-00c3e408.js"},{"revision":"2699afab4c655cbcf46ad23fb4f13ad9","url":"internal/immutable/chunks/pt-BR-6e079c91.js"},{"revision":"6a1b5183a65fd71db548a9239a867adb","url":"internal/immutable/chunks/ru-RU-4576a3fc.js"},{"revision":"2d80549b8023527af6ab12b6c7550738","url":"internal/immutable/chunks/ru-RU-9a488087.js"},{"revision":"30f02bd933b12ebac344ffd6470a5d1f","url":"internal/immutable/chunks/runtime.esm-09dcc7a6.js"},{"revision":"9e98ffbe3b9bdc2850cfedb83df46e1e","url":"internal/immutable/chunks/singletons-96f58496.js"},{"revision":"6ee768e1a5377abafe25443a43ac5ca0","url":"internal/immutable/chunks/singletons-f64a7082.js"},{"revision":"f4c5a9d7b030e46f8438cf91628e9ae7","url":"internal/immutable/chunks/stores-c1d13f3c.js"},{"revision":"bf8b24bac73798e482ba729365a607fe","url":"internal/immutable/chunks/stores-d89f990d.js"},{"revision":"553c0f49ee37ad16971ac5e118a87162","url":"internal/immutable/chunks/th-TH-818f125d.js"},{"revision":"07aae6cf592ae300abd60634d99d10cd","url":"internal/immutable/chunks/vi-VN-15abacaa.js"},{"revision":"a63472933c5368d3fe4fdeffa30e5018","url":"internal/immutable/chunks/vi-VN-a46e5be0.js"},{"revision":"c1aac0b7611cb10f4c28fb8a2e1017d9","url":"internal/immutable/chunks/weapons-c47b0ca3.js"},{"revision":"21c4ec784f915b38e983d4d26263df29","url":"internal/immutable/chunks/weapons-daf21159.js"},{"revision":"1528895153ff93f941866036e176e969","url":"internal/immutable/chunks/WishResult-1411fe4a.js"},{"revision":"87c1b3fb4e1a5c66144708bfeb3ccfd2","url":"internal/immutable/chunks/WishResult-f1e07bce.js"},{"revision":"b8c9397a5a7bdb9aee024d2c57d41845","url":"internal/immutable/chunks/workbox-window.prod.es5-9f0a6626.js"},{"revision":"925e9e746f394d6f100d53bcc314f8cc","url":"internal/immutable/chunks/zh-CN-66cfad54.js"},{"revision":"03f6012a2a038d7dc9e04d16906afd18","url":"internal/immutable/chunks/zh-CN-786d8711.js"},{"revision":"ace6572c3c910c66f309d206e60458e1","url":"internal/immutable/chunks/zh-CN-ef5233a2.js"},{"revision":"f1e244bee29e5aef9db390e76a6be8a3","url":"internal/immutable/chunks/zh-TW-8771daa8.js"},{"revision":"639c3dfcf3e2bed2a5ca9320e69ba722","url":"internal/immutable/chunks/zh-TW-aded2d42.js"},{"revision":"6015fdbfff472536d87f9d27cb69ef0d","url":"internal/immutable/components/pages/_error.svelte-37d6d10b.js"},{"revision":"f6182257f2e8f204f435b753df6671da","url":"internal/immutable/components/pages/_error.svelte-db5f9d33.js"},{"revision":"f8d10a836a71a31faa16ef742214ab41","url":"internal/immutable/components/pages/_layout.svelte-2da55057.js"},{"revision":"cf29eedf650cfa74c0d4e475fad6c5dd","url":"internal/immutable/components/pages/_layout.svelte-7f3758bc.js"},{"revision":"41663c6b238a0890026bccce7ee3e29b","url":"internal/immutable/components/pages/_page.svelte-205d6ac6.js"},{"revision":"9abf2d597119f08b8708b2045d646405","url":"internal/immutable/components/pages/_page.svelte-d149436f.js"},{"revision":"7df71ef7a4db5a097d7bb41e0e9c75cd","url":"internal/immutable/components/pages/adkey/_page.svelte-e2104f11.js"},{"revision":"fb12a24a720a92856f8c4c3e23aea518","url":"internal/immutable/components/pages/install/_page.svelte-9b10aa18.js"},{"revision":"a5883be458d60c65399dceeecf48a895","url":"internal/immutable/components/pages/privacy-policy/_page.svelte-c8c3ccba.js"},{"revision":"ee232af61e24b627f8818753d837e1e6","url":"internal/immutable/components/pages/screen/_page.svelte-dc0e6048.js"},{"revision":"8e4c7818cc057a18da0c49187ecdabcb","url":"internal/immutable/components/pages/screen/chars/_page.svelte-0724a453.js"},{"revision":"90c7882eab733a1363d48cb1fa6d99df","url":"internal/immutable/components/pages/screen/chars/_page.svelte-a030de84.js"},{"revision":"6521741b63d94f87ddeae4f450f591d8","url":"internal/immutable/components/pages/screen/wishitem/_page.svelte-c6038260.js"},{"revision":"d65d00630fb2591236f602b3119b7848","url":"internal/immutable/components/pages/screen/wishitem/_page.svelte-f37c559d.js"},{"revision":"b97644c1f0b221a7fff38125e68f0a31","url":"internal/immutable/components/pages/screen/wishlist/_page.svelte-956562a1.js"},{"revision":"a22a3f0c523dedefc7234d12501aa135","url":"internal/immutable/components/pages/screen/wishlist/_page.svelte-f8514af5.js"},{"revision":"bb21119a8f9a8941139a7a1e7bb4e73b","url":"internal/immutable/modules/pages/_layout.js-04cad6c0.js"},{"revision":"4fd5f13644a9b1e8db2dc24682db1c6c","url":"internal/immutable/start-151dddb7.js"},{"revision":"506b79c6560ab97fb40927f9e1fe4d16","url":"internal/immutable/start-a82f0a7c.js"},{"revision":"91596e75a806de97641be6ecc6d57f3e","url":"privacy-policy.html"},{"revision":"1bd178d49287f7d7c4babd86c9799276","url":"screen.html"},{"revision":"9e69fac2ee975df5dc78b32d78b8c349","url":"screen/chars.html"},{"revision":"53eddc99074c39b2d320df0b1d8caf2e","url":"screen/wishitem.html"},{"revision":"574cd76fb80226ab33cf70f4fef4e789","url":"screen/wishlist.html"},{"revision":"8c963b2682677bc062bf302c70578a56","url":"./icons/icon-16x16.png"},{"revision":"2a64a39d90420e3be4ce3327f07cdb72","url":"./icons/icon-32x32.png"},{"revision":"4ead7560331331e4312bc253a979d2e7","url":"./icons/icon-72x72.png"},{"revision":"10ede533a31ab3ed07ad5e7bf718c5fd","url":"./icons/icon-96x96.png"},{"revision":"5a38603e311a289095450ec62f1f516d","url":"./icons/icon-128x128.png"},{"revision":"3fac8e1ae6fcb0db38ebe268a3812c40","url":"./icons/icon-144x144.png"},{"revision":"de4fc1e20e059eb961f1916873bed171","url":"./icons/icon-152x152.png"},{"revision":"4f5b19ddc351130a8bd37714cf5ac566","url":"./icons/icon-192x192.png"},{"revision":"e1c1b158f9777394ed646d875ef51692","url":"./icons/icon-256x256.png"},{"revision":"81070905639d4fd45c2d74a5cc7a41e5","url":"./icons/icon-384x384.png"},{"revision":"2220c3e385820520b7e291e385dbe9cb","url":"./icons/icon-512x512.png"},{"revision":"6a2f151959c4681c46fd35d06a2a3eb3","url":"appmanifest.json"}];O=[];ue(O,{ignoreURLParametersMatching:[/.*/]});p("/",new k({cacheName:`Static-${C}`}));p(new RegExp(".(?:/?pwa=true|/?pwasc)"),new k({cacheName:`Static-${C}`,plugins:[{cachedResponseWillBeUsed:({cachedResponse:a})=>a||caches.match("/"),cacheWillUpdate:()=>null}]}));p(({url:a})=>a.href.includes("videos")||a.href.includes("images")||a.href.includes("sfx"),new fe({cacheName:`Static-${C}`}));p(({url:a})=>(a.href.match(new RegExp(".(?:woff|woff2|ttf)$"))||[]).length>0,new k({cacheName:`Static-${C}`,plugins:[new ge({statuses:[0,200]})]}));p(new RegExp(".(?:css|js|json)$"),new k({cacheName:"Chunks"}));
