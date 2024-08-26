(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{843:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(1533)}])},216:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),s=r(7294);let l=s.forwardRef(function(e,t){let{title:r,titleId:n,...l}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},l),r?s.createElement("title",{id:n},r):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"}))}),a=s.forwardRef(function(e,t){let{title:r,titleId:n,...l}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},l),r?s.createElement("title",{id:n},r):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"}))});var o=()=>{let[e,t]=(0,s.useState)("light");return(0,s.useEffect)(()=>{"dark"!==localStorage.theme&&("theme"in localStorage||!window.matchMedia("(prefers-color-scheme: dark)").matches)?(document.documentElement.classList.remove("dark"),t("light")):(document.documentElement.classList.add("dark"),t("dark"))},[]),(0,n.jsx)("button",{onClick:()=>{"dark"===e?(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"),t("light")):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"),t("dark"))},className:"flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 focus:outline-none","aria-label":"Toggle Theme",children:"dark"===e?(0,n.jsx)(l,{className:"w-6 h-6 text-yellow-500"}):(0,n.jsx)(a,{className:"w-6 h-6 text-gray-900"})})};function c(e){let{children:t}=e;return(0,n.jsxs)("div",{className:"min-h-screen",children:[(0,n.jsx)("header",{children:(0,n.jsxs)("div",{className:"flex justify-between items-center p-4 bg-emerald-300 dark:bg-gray-800 fixed",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold mr-4",children:"My Blog"}),(0,n.jsx)(o,{})]})}),(0,n.jsx)("main",{children:t}),(0,n.jsx)("footer",{className:"p-4 text-center",children:(0,n.jsx)("p",{children:"\xa9 2024 My Blog"})})]})}},1533:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return a},default:function(){return o}});var n=r(5893),s=r(216),l=r(7294),a=!0;function o(e){let{post:t}=e;return(0,l.useEffect)(()=>{document.addEventListener("click",function(e){if(e.target.closest(".copy-code")){let t=e.target.closest(".copy-code"),r=t.getAttribute("data-code-id"),n=document.getElementById(r).textContent;navigator.clipboard.writeText(n).then(()=>{t.innerHTML=t.innerHTML='<svg class="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>',setTimeout(()=>{t.innerHTML='<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Edit / Copy"><path id="Vector" d="M9 9V6.2002C9 5.08009 9 4.51962 9.21799 4.0918C9.40973 3.71547 9.71547 3.40973 10.0918 3.21799C10.5196 3 11.0801 3 12.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07967 21.0002 6.19978V11.7998C21.0002 12.9199 21.0002 13.48 20.7822 13.9078C20.5905 14.2841 20.2839 14.5905 19.9076 14.7822C19.4802 15 18.921 15 17.8031 15H15M9 9H6.2002C5.08009 9 4.51962 9 4.0918 9.21799C3.71547 9.40973 3.40973 9.71547 3.21799 10.0918C3 10.5196 3 11.0801 3 12.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H11.8036C12.9215 21 13.4805 21 13.9079 20.7822C14.2842 20.5905 14.5905 20.2839 14.7822 19.9076C15 19.4802 15 18.921 15 17.8031V15M9 9H11.8002C12.9203 9 13.4801 9 13.9079 9.21799C14.2842 9.40973 14.5905 9.71547 14.7822 10.0918C15 10.5192 15 11.079 15 12.1969L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></g></svg>'},2e3)})}})},[]),(0,n.jsx)(s.Z,{children:(0,n.jsxs)("article",{className:"prose prose-lg dark:prose-dark mx-auto p-4",children:[(0,n.jsx)("h1",{className:"text-4xl font-bold mb-4 text-blue-700",children:t.meta.title}),(0,n.jsx)("p",{className:"text-gray-500 mb-8",children:t.meta.date}),t.sections.length>0&&(0,n.jsxs)("nav",{className:"mb-8",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-2",children:"Sections"}),(0,n.jsx)("ul",{className:"list-disc ml-6",children:t.sections.map(e=>(0,n.jsx)("li",{className:"mb-1",children:(0,n.jsx)("a",{href:"#".concat(e.id),className:"text-blue-600 hover:text-blue-800 ".concat("3"===e.level?"ml-4":""),children:e.text})},e.id))})]}),(0,n.jsx)("div",{className:"prose prose-lg dark:prose-dark",dangerouslySetInnerHTML:{__html:t.content}}),(0,n.jsxs)("div",{className:"mt-8",children:[(0,n.jsx)("h4",{className:"text-lg font-semibold",children:"Tags:"}),(0,n.jsx)("ul",{className:"list-none flex space-x-3 mt-2",children:t.meta.tags.map(e=>(0,n.jsx)("li",{className:"text-sm bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded",children:e},e))})]})]})})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=843)}),_N_E=e.O()}]);