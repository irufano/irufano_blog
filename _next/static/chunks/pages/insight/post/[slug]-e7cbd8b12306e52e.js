(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{2705:function(e,t,r){var n=r(5639).Symbol;e.exports=n},4239:function(e,t,r){var n=r(2705),i=r(9607),o=r(2333),a=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?i(e):o(e)}},7561:function(e,t,r){var n=r(7990),i=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(i,""):e}},1957:function(e,t,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},9607:function(e,t,r){var n=r(2705),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,s=n?n.toStringTag:void 0;e.exports=function(e){var t=o.call(e,s),r=e[s];try{e[s]=void 0;var n=!0}catch(e){}var i=a.call(e);return n&&(t?e[s]=r:delete e[s]),i}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,r){var n=r(1957),i="object"==typeof self&&self&&self.Object===Object&&self,o=n||i||Function("return this")();e.exports=o},7990:function(e){var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},3279:function(e,t,r){var n=r(3218),i=r(7771),o=r(4841),a=Math.max,s=Math.min;e.exports=function(e,t,r){var l,c,d,u,m,p,h=0,x=!1,f=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function v(t){var r=l,n=c;return l=c=void 0,h=t,u=e.apply(n,r)}function y(e){var r=e-p,n=e-h;return void 0===p||r>=t||r<0||f&&n>=d}function b(){var e,r,n,o=i();if(y(o))return j(o);m=setTimeout(b,(e=o-p,r=o-h,n=t-e,f?s(n,d-r):n))}function j(e){return(m=void 0,g&&l)?v(e):(l=c=void 0,u)}function w(){var e,r=i(),n=y(r);if(l=arguments,c=this,p=r,n){if(void 0===m)return h=e=p,m=setTimeout(b,t),x?v(e):u;if(f)return clearTimeout(m),m=setTimeout(b,t),v(p)}return void 0===m&&(m=setTimeout(b,t)),u}return t=o(t)||0,n(r)&&(x=!!r.leading,d=(f="maxWait"in r)?a(o(r.maxWait)||0,t):d,g="trailing"in r?!!r.trailing:g),w.cancel=function(){void 0!==m&&clearTimeout(m),h=0,l=p=c=m=void 0},w.flush=function(){return void 0===m?u:j(i())},w}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,r){var n=r(4239),i=r(7005);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==n(e)}},7771:function(e,t,r){var n=r(5639);e.exports=function(){return n.Date.now()}},3493:function(e,t,r){var n=r(3279),i=r(3218);e.exports=function(e,t,r){var o=!0,a=!0;if("function"!=typeof e)throw TypeError("Expected a function");return i(r)&&(o="leading"in r?!!r.leading:o,a="trailing"in r?!!r.trailing:a),n(e,t,{leading:o,maxWait:t,trailing:a})}},4841:function(e,t,r){var n=r(7561),i=r(3218),o=r(3448),a=0/0,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return a;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=l.test(e);return r||c.test(e)?d(e.slice(2),r?2:8):s.test(e)?a:+e}},4844:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/insight/post/[slug]",function(){return r(6652)}])},671:function(e,t){"use strict";t.Z={title:"Irufano Insight - Tech Knowledge Docs",description:"Insights, ideas, stories, tutorials and technical documentations about technology, software development and other IT matters.",canonical:"https://irufano.github.io/insight",openGraph:{type:"website",locale:"en_US",url:"https://irufano.github.io/insight",site_name:"Irufano Insight",title:"Irufano Insight",description:"Insights, ideas, stories, tutorials and technical documentations about technology, software development and other IT matters.",images:[{url:"hhttps://irufano.github.io/og-irufano-insight-01.png",width:800,height:600,alt:"Irufano Insight",type:"image/png"},{url:"https://irufano.github.io/og-irufano-insight-02.png",width:900,height:800,alt:"Irufano Insight",type:"image/png"}]},twitter:{handle:"@handle",site:"@site",cardType:"summary_large_image"}}},4528:function(e,t,r){"use strict";var n=r(5893),i=r(2962);t.Z=e=>{let{title:t,description:r,url:o="https://irufano.github.io",ogSiteName:a="Irufano",ogImages:s=[{url:"hhttps://irufano.github.io/og-irufano-01.png",width:800,height:600,alt:"Irufano",type:"image/png"}]}=e;return(0,n.jsx)(i.PB,{title:t,description:r,canonical:o,type:"website",locale:"en_US",openGraph:{title:t,description:r,url:o,siteName:a,images:s},twitter:{handle:"@handle",site:"@site",cardType:"summary_large_image"}})}},6652:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return f},default:function(){return g}});var n=r(5893),i=r(7294),o=r(4528),a=r(671),s=r(1874),l=r(5062),c=r.n(l),d=r(3493),u=r.n(d),m=r(1664),p=r.n(m),h=e=>{let{title:t,children:r}=e,[o,a]=(0,i.useState)(!1);return(0,n.jsxs)("div",{className:"shadow-sm rounded-md border-2 border-gray-200 dark:border-gray-700",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center px-4 py-2 cursor-pointer",onClick:()=>a(!o),children:[(0,n.jsx)("div",{className:"text-base font-medium text-gray-500 dark:text-gray-400",children:t}),(0,n.jsx)("svg",{className:"w-5 h-5 transform transition-transform duration-300 ".concat(o?"rotate-180":""),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),o&&(0,n.jsx)("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700",children:r})]})},x=()=>(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"absolute inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center rounded-lg p-4",children:(0,n.jsx)("span",{className:"text-white text-xl font-semibold text-center",children:"Sorry, comment is under maintenance"})}),(0,n.jsxs)("div",{className:"opacity-20 p-4",children:[(0,n.jsx)("input",{type:"text",placeholder:"Your email...",className:"w-full p-2 mb-4 border-2 border-gray-400 rounded dark:bg-gray-700 placeholder-gray-500 dark:border-gray-700",disabled:!0}),(0,n.jsx)("input",{type:"text",placeholder:"Write a comment...",className:"w-full h-24 p-2 mb-4 border-2 border-gray-400 rounded dark:bg-gray-700 placeholder-gray-500 dark:border-gray-700",disabled:!0}),(0,n.jsx)("button",{className:"w-full text-white py-2 rounded transition-all bg-primary dark:bg-primary-dark hover:bg-primary/80 dark:hover:bg-primary/80",disabled:!0,children:"Submit"})]})]}),f=!0;function g(e){var t,r,l,d,m,f,g;let{post:v}=e,y=null===(t=v.meta)||void 0===t?void 0:t.title,b=null===(r=v.meta)||void 0===r?void 0:r.description,j=null===(l=v.meta)||void 0===l?void 0:l.date,w=null!==(f=v.sections)&&void 0!==f?f:[],k=v.content,N=null!==(g=null===(d=v.meta)||void 0===d?void 0:d.tags)&&void 0!==g?g:[],T=v.readingTime,C=null===(m=v.meta)||void 0===m?void 0:m.author,[_,I]=(0,i.useState)(null);return(0,i.useEffect)(()=>{let e=()=>{let e=document.querySelector("header");return e?e.offsetHeight:0},t=u()(()=>{let t=e(),r=v.sections.map(e=>{let t=document.getElementById(e.id);return t?{id:e.id,offsetTop:t.offsetTop}:{id:e.id,offsetTop:0}}),n=window.innerHeight,i=window.scrollY+t+.75*n,o=r.find((e,t)=>{let n=r[t+1];return n?i>=e.offsetTop&&i<n.offsetTop:i>=e.offsetTop});o&&I(o.id)},100);return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[v.sections]),(0,i.useEffect)(()=>{document.addEventListener("click",function(e){if(e.target.closest(".copy-code")){let t=e.target.closest(".copy-code"),r=t.getAttribute("data-code-id"),n=document.getElementById(r).textContent;navigator.clipboard.writeText(n).then(()=>{t.innerHTML=t.innerHTML='<svg class="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>',setTimeout(()=>{t.innerHTML='<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Edit / Copy"><path id="Vector" d="M9 9V6.2002C9 5.08009 9 4.51962 9.21799 4.0918C9.40973 3.71547 9.71547 3.40973 10.0918 3.21799C10.5196 3 11.0801 3 12.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07967 21.0002 6.19978V11.7998C21.0002 12.9199 21.0002 13.48 20.7822 13.9078C20.5905 14.2841 20.2839 14.5905 19.9076 14.7822C19.4802 15 18.921 15 17.8031 15H15M9 9H6.2002C5.08009 9 4.51962 9 4.0918 9.21799C3.71547 9.40973 3.40973 9.71547 3.21799 10.0918C3 10.5196 3 11.0801 3 12.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H11.8036C12.9215 21 13.4805 21 13.9079 20.7822C14.2842 20.5905 14.5905 20.2839 14.7822 19.9076C15 19.4802 15 18.921 15 17.8031V15M9 9H11.8002C12.9203 9 13.4801 9 13.9079 9.21799C14.2842 9.40973 14.5905 9.71547 14.7822 10.0918C15 10.5192 15 11.079 15 12.1969L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></g></svg>'},2e3)})}})},[]),(0,n.jsxs)(s.Z,{type:s.m.INSIGHT,children:[(0,n.jsx)(o.Z,{title:y,description:b,ogSiteName:a.Z.openGraph.site_name,url:a.Z.openGraph.url,images:a.Z.openGraph.images}),(0,n.jsxs)("div",{className:"container mx-auto pt-20 md:pt-24 lg:flex lg:flex-row",children:[(0,n.jsx)("div",{className:"mx-auto p-4",children:(0,n.jsxs)("article",{className:"prose prose-lg dark:prose-dark mx-auto",children:[(0,n.jsx)("h1",{className:"text-4xl font-bold mb-4 text-text: dark:text-text-dark",children:y}),(0,n.jsxs)("div",{className:"flex space-x-4",children:[(0,n.jsxs)("p",{className:"flex items-center mt-2 text-xs md:text-sm text-gray-700 dark:text-gray-300",children:[(0,n.jsx)("span",{children:(0,n.jsx)(c(),{icon:"calendar",size:14,className:"mr-2 text-primary"})}),j]}),(0,n.jsxs)("p",{className:"flex items-center mt-2 text-xs md:text-sm text-gray-700 dark:text-gray-300",children:[(0,n.jsx)("span",{children:(0,n.jsx)(c(),{icon:"clock",size:14,className:"mr-2 text-primary"})}),T]}),(0,n.jsxs)("p",{className:"flex items-center mt-2 text-xs md:text-sm",children:[(0,n.jsx)("span",{children:(0,n.jsx)(c(),{icon:"user",size:14,className:"mr-2 text-primary"})}),(0,n.jsx)(p(),{href:"https://github.com/irufano",className:"text-gray-700 dark:text-gray-300 no-underline font-normal hover:text-primary dark:hover:text-primary-dark",children:C})]})]}),w.length>0&&(0,n.jsx)("div",{className:"block lg:hidden mb-8 lg:mb-0",children:(0,n.jsxs)(h,{title:"Content",children:[(0,n.jsx)("div",{className:"list-none",children:v.sections.map(e=>(0,n.jsx)("div",{className:"mb-1",children:(0,n.jsx)("a",{href:"#".concat(null==e?void 0:e.id),className:"text-sm text-gray-500 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary no-underline ".concat((null==e?void 0:e.level)==="3"?"ml-4":""),children:null==e?void 0:e.text})},null==e?void 0:e.id))})," "]})}),(0,n.jsx)("div",{className:"prose prose-lg dark:prose-dark",dangerouslySetInnerHTML:{__html:k}}),(0,n.jsxs)("div",{className:"my-8",children:[(0,n.jsx)("h4",{className:"text-lg font-semibold text-text dark:text-text-dark",children:"Tags:"}),(0,n.jsx)("div",{className:"list-none flex flex-wrap gap-2 mt-2",children:N.map(e=>(0,n.jsx)(p(),{href:"/insight/tags/".concat(e),className:"no-underline",children:(0,n.jsx)("div",{className:"text-sm bg-accent dark:bg-accent-dark text-white  px-2 py-1 rounded-md hover:bg-accent/70 dark:hover:bg-accent-dark/70",children:e},e)},e))})]}),(0,n.jsx)("div",{className:"my-8",children:(0,n.jsx)(x,{})})]})}),w.length>0&&(0,n.jsx)("aside",{className:"lg:w-1/4 sticky top-24 self-start hidden lg:block",children:(0,n.jsx)("div",{className:"p-4 border-l-2 border-l-gray-200 dark:border-l-gray-800",children:(0,n.jsx)("nav",{className:"mb-8",children:(0,n.jsx)("ul",{className:"list-none ml-6",children:v.sections.map(e=>(0,n.jsx)("li",{className:"mb-1",children:(0,n.jsx)("a",{href:"#".concat(null==e?void 0:e.id),className:"text-xs text-gray-500 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary ".concat((null==e?void 0:e.level)==="3"?"ml-4":"","\n                        ").concat(_===(null==e?void 0:e.id)?"text-primary dark:text-primary":"","\n                        "),children:null==e?void 0:e.text})},null==e?void 0:e.id))})})})})]})]})}}},function(e){e.O(0,[155,874,888,774,179],function(){return e(e.s=4844)}),_N_E=e.O()}]);