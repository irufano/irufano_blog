(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[288],{8580:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/insight/[page]",function(){return n(2787)}])},671:function(e,t){"use strict";t.Z={title:"Irufano Insight - Tech Knowledge Docs",description:"Insights, ideas, stories, tutorials and technical documentations about technology, software development and other IT matters.",canonical:"https://irufano.github.io/insight",openGraph:{type:"website",locale:"en_US",url:"https://irufano.github.io/insight",site_name:"Irufano Insight",title:"Irufano Insight",description:"Insights, ideas, stories, tutorials and technical documentations about technology, software development and other IT matters.",images:[{url:"hhttps://irufano.github.io/og-irufano-insight-01.png",width:800,height:600,alt:"Irufano Insight",type:"image/png"},{url:"https://irufano.github.io/og-irufano-insight-02.png",width:900,height:800,alt:"Irufano Insight",type:"image/png"}]},twitter:{handle:"@handle",site:"@site",cardType:"summary_large_image"}}},2684:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(5893),s=n(7294),a=n(9794),r=n(2999),l=()=>{let[e,t]=(0,s.useState)("light");return(0,s.useEffect)(()=>{"dark"!==localStorage.theme&&("theme"in localStorage||!window.matchMedia("(prefers-color-scheme: dark)").matches)?(document.documentElement.classList.remove("dark"),t("light")):(document.documentElement.classList.add("dark"),t("dark"))},[]),(0,i.jsx)("button",{onClick:()=>{"dark"===e?(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"),t("light")):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"),t("dark"))},className:"flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 focus:outline-none","aria-label":"Toggle Theme",children:"dark"===e?(0,i.jsx)(a.Z,{className:"w-6 h-6 text-yellow-500"}):(0,i.jsx)(r.Z,{className:"w-6 h-6 text-gray-900"})})};function o(e){let{children:t}=e;return(0,i.jsxs)("div",{className:"min-h-screen",children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{className:"flex justify-between items-center p-4 bg-emerald-300 dark:bg-gray-800 fixed",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold mr-4",children:"My Blog"}),(0,i.jsx)(l,{})]})}),(0,i.jsx)("main",{children:t}),(0,i.jsx)("footer",{className:"p-4 text-center",children:(0,i.jsx)("p",{children:"\xa9 2024 My Blog"})})]})}},4571:function(e,t,n){"use strict";var i=n(5893),s=n(2962);t.Z=e=>{let{title:t,description:n,url:a="https://irufano.github.io",ogSiteName:r="Irufano",ogImages:l=[{url:"hhttps://irufano.github.io/og-irufano-01.png",width:800,height:600,alt:"Irufano",type:"image/png"}]}=e;return(0,i.jsx)(s.PB,{title:t,description:n,canonical:a,type:"website",locale:"en_US",openGraph:{title:t,description:n,url:a,siteName:r,images:l},twitter:{handle:"@handle",site:"@site",cardType:"summary_large_image"}})}},2787:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return a},default:function(){return r}});var i=n(5893),s=n(7789),a=!0;function r(e){return(0,i.jsx)(s.default,{...e})}},7789:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return u}});var i=n(5893),s=n(2684),a=n(4571),r=n(1664),l=n.n(r),o=n(671),c=!0;function u(e){let{posts:t,currentPage:n,totalPages:r}=e;return(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(a.Z,{title:o.Z.title,description:o.Z.description,ogSiteName:o.Z.openGraph.site_name,url:o.Z.openGraph.url,images:o.Z.openGraph.images}),(0,i.jsxs)("div",{className:"container mx-auto p-4 pt-32",children:[(0,i.jsx)("h1",{className:"text-4xl font-bold mb-8",children:"Blog Posts"}),(0,i.jsx)("ul",{children:t.map(e=>(0,i.jsxs)("li",{children:[(0,i.jsx)(l(),{href:"/insight/posts/".concat(e.slug),children:(0,i.jsx)("p",{className:"text-2xl font-semibold text-blue-600 hover:underline",children:e.meta.title})}),(0,i.jsx)("p",{className:"text-gray-600",children:e.meta.date})]},e.slug))}),(0,i.jsxs)("div",{className:"mt-8 flex justify-between",children:[n>1&&(0,i.jsx)(l(),{href:"/insight/".concat(n-1),children:(0,i.jsx)("p",{className:"text-blue-600 hover:underline",children:"Previous"})}),n<r&&(0,i.jsx)(l(),{href:"/insight/".concat(n+1),children:(0,i.jsx)("p",{className:"text-blue-600 hover:underline",children:"Next"})})]})]})]})}}},function(e){e.O(0,[747,888,774,179],function(){return e(e.s=8580)}),_N_E=e.O()}]);