(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1852)}])},6691:function(e,t){"use strict";var n,r,o,l;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_FAST_REFRESH:function(){return f},ACTION_NAVIGATE:function(){return u},ACTION_PREFETCH:function(){return s},ACTION_REFRESH:function(){return a},ACTION_RESTORE:function(){return c},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return i},PrefetchCacheEntryStatus:function(){return r},PrefetchKind:function(){return n},isThenable:function(){return p}});let a="refresh",u="navigate",c="restore",i="server-patch",s="prefetch",f="fast-refresh",d="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=n||(n={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(l=r||(r={})).fresh="fresh",l.reusable="reusable",l.expired="expired",l.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let r=n(8754),o=n(5893),l=r._(n(7294)),a=n(1401),u=n(2045),c=n(7420),i=n(7201),s=n(1443),f=n(9953),d=n(5320),p=n(2905),h=n(4318),m=n(953),b=n(6691),g=new Set;function y(e,t,n,r,o,l){if(l||(0,u.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(g.has(o))return;g.add(o)}(async()=>l?e.prefetch(t,o):e.prefetch(t,n,r))().catch(e=>{})}}function x(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let v=l.default.forwardRef(function(e,t){let n,r;let{href:c,as:g,children:v,prefetch:j=null,passHref:_,replace:k,shallow:E,scroll:C,locale:O,onClick:w,onMouseEnter:M,onTouchStart:N,legacyBehavior:P=!1,...T}=e;n=v,P&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let R=l.default.useContext(f.RouterContext),L=l.default.useContext(d.AppRouterContext),A=null!=R?R:L,S=!R,I=!1!==j,U=null===j?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:H,as:K}=l.default.useMemo(()=>{if(!R){let e=x(c);return{href:e,as:g?x(g):e}}let[e,t]=(0,a.resolveHref)(R,c,!0);return{href:e,as:g?(0,a.resolveHref)(R,g):t||e}},[R,c,g]),B=l.default.useRef(H),F=l.default.useRef(K);P&&(r=l.default.Children.only(n));let D=P?r&&"object"==typeof r&&r.ref:t,[V,Z,G]=(0,p.useIntersection)({rootMargin:"200px"}),W=l.default.useCallback(e=>{(F.current!==K||B.current!==H)&&(G(),F.current=K,B.current=H),V(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[K,D,H,G,V]);l.default.useEffect(()=>{A&&Z&&I&&y(A,H,K,{locale:O},{kind:U},S)},[K,H,Z,O,I,null==R?void 0:R.locale,A,S,U]);let X={ref:W,onClick(e){P||"function"!=typeof w||w(e),P&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,n,r,o,a,c,i,s){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,u.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==c||c;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};s?l.default.startTransition(d):d()}(e,A,H,K,k,E,C,O,S)},onMouseEnter(e){P||"function"!=typeof M||M(e),P&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&(I||!S)&&y(A,H,K,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:U},S)},onTouchStart:function(e){P||"function"!=typeof N||N(e),P&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&(I||!S)&&y(A,H,K,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:U},S)}};if((0,i.isAbsoluteUrl)(K))X.href=K;else if(!P||_||"a"===r.type&&!("href"in r.props)){let e=void 0!==O?O:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,h.getDomainLocale)(K,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);X.href=t||(0,m.addBasePath)((0,s.addLocale)(K,e,null==R?void 0:R.defaultLocale))}return P?l.default.cloneElement(r,X):(0,o.jsx)("a",{...T,...X,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let r=n(7294),o=n(3815),l="function"==typeof IntersectionObserver,a=new Map,u=[];function c(e){let{rootRef:t,rootMargin:n,disabled:c}=e,i=c||!l,[s,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(l){if(i||s)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},u.push(n),a.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(r);let e=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,n,t,s,d.current]),[p,s,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},216:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),o=n(7294);let l=o.forwardRef(function(e,t){let{title:n,titleId:r,...l}=e;return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},l),n?o.createElement("title",{id:r},n):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"}))}),a=o.forwardRef(function(e,t){let{title:n,titleId:r,...l}=e;return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},l),n?o.createElement("title",{id:r},n):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"}))});var u=()=>{let[e,t]=(0,o.useState)("light");return(0,o.useEffect)(()=>{"dark"!==localStorage.theme&&("theme"in localStorage||!window.matchMedia("(prefers-color-scheme: dark)").matches)?(document.documentElement.classList.remove("dark"),t("light")):(document.documentElement.classList.add("dark"),t("dark"))},[]),(0,r.jsx)("button",{onClick:()=>{"dark"===e?(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"),t("light")):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"),t("dark"))},className:"flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 focus:outline-none","aria-label":"Toggle Theme",children:"dark"===e?(0,r.jsx)(l,{className:"w-6 h-6 text-yellow-500"}):(0,r.jsx)(a,{className:"w-6 h-6 text-gray-900"})})};function c(e){let{children:t}=e;return(0,r.jsxs)("div",{className:"min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100",children:[(0,r.jsx)("header",{children:(0,r.jsxs)("div",{className:"flex justify-between items-center p-4 bg-emerald-300 dark:bg-gray-800 fixed",children:[(0,r.jsx)("h1",{className:"text-2xl font-bold mr-4",children:"My Blog"}),(0,r.jsx)(u,{})]})}),(0,r.jsx)("main",{children:t}),(0,r.jsx)("footer",{className:"p-4 text-center",children:(0,r.jsx)("p",{children:"\xa9 2024 My Blog"})})]})}},1852:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u},default:function(){return c}});var r=n(5893),o=n(1664),l=n.n(o),a=n(216),u=!0;function c(e){let{allPosts:t}=e;return(0,r.jsx)(a.Z,{children:(0,r.jsxs)("div",{className:"container mx-auto p-4 py-16",children:[(0,r.jsx)("h1",{className:"text-3xl font-extrabold py-4",children:"Blog Posts"}),(0,r.jsx)("ul",{children:t.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/posts/".concat(e.slug),className:"p-6",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-xl font-semibold",children:e.meta.title}),(0,r.jsx)("p",{className:"text-base",children:e.meta.date}),(0,r.jsx)("p",{className:"text-sm",children:e.meta.tags.join(", ")})]})})},e.slug))})]})})}},1664:function(e,t,n){e.exports=n(9577)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);