(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9684)}])},9684:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return a},default:function(){return i}});var l=n(5893),s=n(7294),r=n(1664),o=n.n(r);function u(e){let{posts:t}=e,[n,r]=(0,s.useState)(""),[u,a]=(0,s.useState)(t);return(0,l.jsxs)("div",{className:"container mx-auto p-4",children:[(0,l.jsx)("input",{type:"text",value:n,onChange:e=>{r(e.target.value),a(t.filter(t=>{var n,l,s;return(null==t?void 0:null===(l=t.meta)||void 0===l?void 0:null===(n=l.title)||void 0===n?void 0:n.toLowerCase().includes(e.target.value.toLowerCase()))||(null==t?void 0:null===(s=t.content)||void 0===s?void 0:s.toLowerCase().includes(e.target.value.toLowerCase()))}))},placeholder:"Search posts...",className:"w-full p-2 border border-gray-300 rounded"}),(0,l.jsx)("ul",{className:"mt-4",children:u.length>0?u.map(e=>{var t,n;return(0,l.jsx)("li",{className:"mb-2",children:(0,l.jsx)(o(),{href:"/posts/".concat(e.slug),children:null!==(n=null==e?void 0:null===(t=e.meta)||void 0===t?void 0:t.title)&&void 0!==n?n:"-"})},e.slug)}):(0,l.jsx)("li",{children:"No posts found"})})]})}var a=!0;function i(e){let{posts:t}=e;return(0,l.jsxs)("div",{className:"container mx-auto p-4 py-16",children:[(0,l.jsx)("h1",{className:"text-4xl font-extrabold text-emerald-500",children:"IRUFANO INSIGHT"}),(0,l.jsx)(u,{posts:t}),(0,l.jsx)("ul",{children:t.map(e=>(0,l.jsx)("li",{children:(0,l.jsx)(o(),{href:"/posts/".concat(e.slug),children:e.meta.title})},e.slug))})]})}}},function(e){e.O(0,[664,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);