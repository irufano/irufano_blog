(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5989)}])},6541:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let i=r(8754),s=r(1757),l=r(5893),a=s._(r(7294)),n=i._(r(3935)),o=i._(r(7828)),d=r(7367),c=r(7903),u=r(4938);r(1997);let m=r(9953),g=i._(r(6663)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e,t,r,i,s,l,a){let n=null==e?void 0:e.src;e&&e["data-loaded-src"]!==n&&(e["data-loaded-src"]=n,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&s(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,s=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function x(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}let p=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:s,height:n,width:o,decoding:d,className:c,style:u,fetchPriority:m,placeholder:g,loading:h,unoptimized:p,fill:v,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:j,setShowAltText:y,sizesInput:N,onLoad:k,onError:S,..._}=e;return(0,l.jsx)("img",{..._,...x(m),loading:h,width:o,height:n,decoding:d,"data-nimg":v?"fill":"1",className:c,style:u,sizes:s,srcSet:i,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&f(e,g,b,w,j,p,N))},[r,g,b,w,j,S,p,N,t]),onLoad:e=>{f(e.currentTarget,g,b,w,j,p,N)},onError:e=>{y(!0),"empty"!==g&&j(!0),S&&S(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...x(r.fetchPriority)};return t&&n.default.preload?(n.default.preload(r.src,i),null):(0,l.jsx)(o.default,{children:(0,l.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(m.RouterContext),i=(0,a.useContext)(u.ImageConfigContext),s=(0,a.useMemo)(()=>{let e=h||i||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:n,onLoadingComplete:o}=e,f=(0,a.useRef)(n);(0,a.useEffect)(()=>{f.current=n},[n]);let x=(0,a.useRef)(o);(0,a.useEffect)(()=>{x.current=o},[o]);let[b,w]=(0,a.useState)(!1),[j,y]=(0,a.useState)(!1),{props:N,meta:k}=(0,d.getImgProps)(e,{defaultLoader:g.default,imgConf:s,blurComplete:b,showAltText:j});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{...N,unoptimized:k.unoptimized,placeholder:k.placeholder,fill:k.fill,onLoadRef:f,onLoadingCompleteRef:x,setBlurComplete:w,setShowAltText:y,sizesInput:e.sizes,ref:t}),k.priority?(0,l.jsx)(v,{isAppRouter:!r,imgAttributes:N}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return n}}),r(1997);let i=r(9919),s=r(7903);function l(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function n(e,t){var r;let n,o,d,{src:c,sizes:u,unoptimized:m=!1,priority:g=!1,loading:h,className:f,quality:x,width:p,height:v,fill:b=!1,style:w,overrideSrc:j,onLoad:y,onLoadingComplete:N,placeholder:k="empty",blurDataURL:S,fetchPriority:_,layout:C,objectFit:z,objectPosition:E,lazyBoundary:P,lazyRoot:I,...O}=e,{imgConf:R,showAltText:M,blurComplete:A,defaultLoader:q}=t,G=R||s.imageConfigDefault;if("allSizes"in G)n=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);n={...G,allSizes:e,deviceSizes:t}}if(void 0===q)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let D=O.loader||q;delete O.loader,delete O.srcSet;let L="__next_img_default"in D;if(L){if("custom"===n.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...i}=t;return e(i)}}if(C){"fill"===C&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!u&&(u=t)}let T="",W=a(p),B=a(v);if("object"==typeof(r=c)&&(l(r)||void 0!==r.src)){let e=l(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(o=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,T=e.src,!b){if(W||B){if(W&&!B){let t=W/e.width;B=Math.round(e.height*t)}else if(!W&&B){let t=B/e.height;W=Math.round(e.width*t)}}else W=e.width,B=e.height}}let F=!g&&("lazy"===h||void 0===h);(!(c="string"==typeof c?c:T)||c.startsWith("data:")||c.startsWith("blob:"))&&(m=!0,F=!1),n.unoptimized&&(m=!0),L&&c.endsWith(".svg")&&!n.dangerouslyAllowSVG&&(m=!0),g&&(_="high");let K=a(x),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:E}:{},M?{}:{color:"transparent"},w),U=A||"empty"===k?null:"blur"===k?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:W,heightInt:B,blurWidth:o,blurHeight:d,blurDataURL:S||"",objectFit:H.objectFit})+'")':'url("'+k+'")',V=U?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:U}:{},J=function(e){let{config:t,src:r,unoptimized:i,width:s,quality:l,sizes:a,loader:n}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:o,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:s}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,a),c=o.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:o.map((e,i)=>n({config:t,src:r,quality:l,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:n({config:t,src:r,quality:l,width:o[c]})}}({config:n,src:c,unoptimized:m,width:W,quality:K,sizes:u,loader:D});return{props:{...O,loading:F?"lazy":h,fetchPriority:_,width:W,height:B,decoding:"async",className:f,style:{...H,...V},sizes:J.sizes,srcSet:J.srcSet,src:j||J.src},meta:{unoptimized:m,priority:g,placeholder:k,fill:b}}}},9919:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:s,blurDataURL:l,objectFit:a}=e,n=i?40*i:t,o=s?40*s:r,d=n&&o?"viewBox='0 0 "+n+" "+o+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5666:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return o},getImageProps:function(){return n}});let i=r(8754),s=r(7367),l=r(6541),a=i._(r(6663));function n(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let o=l.Image},6663:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:s}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},5989:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return v},default:function(){return b}});var i=r(5893),s=r(3743),l=r(5062),a=r.n(l),n=r(7294);let o=()=>{let e=new Date().getHours();return e<12?"Good Morning":e<18?"Good Afternoon":"Good Evening"},d=[{quote:"Knowledge enlivens the soul.",author:"Al-Kindi"},{quote:"The cure for ignorance is inquiry.",author:"Ibn Khaldun"},{quote:"Seek knowledge, gain wisdom.",author:"Muhammad SAW"},{quote:"Knowledge is power.",author:"Imam Ali"},{quote:"Patience leads to victory.",author:"Al-Ghazali"},{quote:"Knowledge enlivens the soul.",author:"Ibn Sina"},{quote:"Knowledge is true wealth.",author:"Ibn Khaldun"},{quote:"Learning enhances human dignity.",author:"Al-Ghazali"}];var c=()=>{let[e,t]=(0,n.useState)(""),[r,s]=(0,n.useState)(0),[l,c]=(0,n.useState)(0);return(0,n.useEffect)(()=>{t(o());let e=setInterval(()=>{s(e=>(e+1)%d.length),c(0)},5e3);return()=>clearInterval(e)},[]),(0,n.useEffect)(()=>{let e=setInterval(()=>{c(e=>e+2)},100);return()=>clearInterval(e)},[r]),(0,i.jsx)("div",{className:"bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-lg shadow-lg p-6 max-w-full md:max-w-md w-full",children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"flex items-center justify-between",children:[(0,i.jsx)("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200",children:e}),(null==e?void 0:e.toLowerCase())==="good morning"?(0,i.jsx)(a(),{icon:"cloud",size:"30",className:"text-yellow-500"}):(null==e?void 0:e.toLowerCase())==="good afternoon"?(0,i.jsx)(a(),{icon:"sun",size:"30",className:"text-yellow-500"}):(0,i.jsx)(a(),{icon:"moon",size:"30",className:"text-yellow-500"})]}),(0,i.jsxs)("div",{className:"mt-3",children:[(0,i.jsx)("p",{className:" text-gray-600 dark:text-gray-300",children:d[r].quote}),(0,i.jsx)("span",{className:"mt-2 text-xs text-gray-500 dark:text-gray-200 ",children:d[r].author})]},r),(0,i.jsx)("div",{className:"w-full  flex-1 flex items-center justify-center",children:(0,i.jsx)("div",{className:"w-1/4 h-2 mt-4 bg-gray-300 dark:bg-gray-600 rounded",children:(0,i.jsx)("div",{className:"h-2 bg-primary rounded",style:{width:"".concat(l,"%"),transition:"width 0.1s linear"}})})})]})})},u=r(1664),m=r.n(u),g=e=>{let{posts:t,bg:r="bg-surface dark:bg-surface-dark"}=e;return(0,i.jsx)("div",{className:"cursor-pointer rounded-lg shadow-md ".concat(r),children:(0,i.jsx)("ul",{className:"space-y-0 divide-y divide-slate-100 dark:divide-slate-900",children:t.map(e=>{var t,r,s,l,n;return(0,i.jsx)("li",{children:(0,i.jsx)(m(),{href:"/insight/posts/".concat(e.slug),children:(0,i.jsxs)("div",{className:"hover:bg-gray-50 hover:dark:bg-neutral-900 rounded-md p-6 flex items-center justify-between",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:null!==(l=null==e?void 0:null===(t=e.meta)||void 0===t?void 0:t.title)&&void 0!==l?l:"-"}),(0,i.jsxs)("p",{className:"flex items-center mt-2 text-sm text-gray-700 dark:text-gray-300",children:[(0,i.jsx)("span",{children:(0,i.jsx)(a(),{icon:"calendar",size:14,className:"mr-2 text-primary"})}),null!==(n=null==e?void 0:null===(r=e.meta)||void 0===r?void 0:r.date)&&void 0!==n?n:"-"]}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("ul",{className:"list-none flex space-x-3 mt-2",children:null==e?void 0:null===(s=e.meta)||void 0===s?void 0:s.tags.map(e=>(0,i.jsx)("li",{className:"text-xs bg-blue-300 dark:bg-blue-600 text-white px-2 py-1 rounded-lg",children:e},e))})})]}),(0,i.jsx)("div",{className:"ml-2",children:(0,i.jsx)("div",{className:"inline-block bg-primary rounded-lg shadow-md p-2 ",children:(0,i.jsx)(a(),{icon:"book-open",className:"text-white",size:30,strokeWidth:2})})})]})})},e.slug)})})})},h=e=>{let{title:t,subTitle:r,icon:s="tool",onClicked:l=()=>{},bg:n="bg-surface dark:bg-surface-dark",hover:o="hover:bg-gray-50 hover:dark:bg-neutral-900"}=e;return(0,i.jsxs)("div",{className:"cursor-pointer rounded-lg shadow-md p-6 hover:bg-gray-50 hover:dark:bg-neutral-900 ".concat(n," ").concat(o),onClick:l,children:[(0,i.jsx)("div",{className:"inline-block bg-primary rounded-lg shadow-md p-2 ",children:(0,i.jsx)(a(),{icon:s,className:"text-white",strokeWidth:3})}),(0,i.jsx)("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mt-2",children:t}),(0,i.jsx)("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:r})]})},f=r(5675),x=r.n(f),p={src:"https://irufano.github.io/_next/static/media/irufano-square-logo.e74a10f7.svg",height:309,width:301,blurWidth:0,blurHeight:0},v=!0;function b(e){let{posts:t}=e;return(0,i.jsx)(s.Z,{children:(0,i.jsxs)("div",{className:"relative w-full h-auto bg-emerald-50 dark:bg-background-dark",children:[(0,i.jsx)("div",{className:"absolute top-[10%] -left-[15%] md:-left-[5%]",children:(0,i.jsx)("div",{className:"relative",children:(0,i.jsx)(x(),{src:p,className:"w-40 md:w-72 2xl:w-[20rem]  h-auto"})})}),(0,i.jsx)("div",{className:"absolute top-[15%] right-[5%]",children:(0,i.jsx)("div",{className:"relative",style:{filter:"blur(100px)"},children:(0,i.jsx)(x(),{src:p,className:"w-30 md:w-72 h-auto"})})}),(0,i.jsx)("div",{className:"absolute top-[30%] right-[40%]",children:(0,i.jsx)("div",{className:"relative",style:{filter:"blur(100px)"},children:(0,i.jsx)(x(),{src:p,className:"w-30 md:w-80 h-auto"})})}),(0,i.jsx)("div",{className:" relative flex items-center justify-center py-24",children:(0,i.jsxs)("div",{className:"container mx-auto p-4",children:[(0,i.jsxs)("div",{className:"md:flex justify-center",children:[(0,i.jsx)("div",{className:"inline-block md:hidden w-full",children:(0,i.jsx)(c,{})}),(0,i.jsx)("div",{className:"bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-lg shadow-lg p-6 w-full mr-0 md:mr-6 mt-4 md:mt-0",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"flex items-center justify-between",children:(0,i.jsx)("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200",children:"Developer Portal"})}),(0,i.jsx)("p",{className:"mt-3 text-gray-600 dark:text-gray-300",children:"A tech docs, insights about the software development and also provides several tools for anyone who need it"})]})}),(0,i.jsx)("div",{className:"hidden md:inline-block max-w-full md:max-w-md w-full",children:(0,i.jsx)(c,{})})]}),(0,i.jsx)("div",{className:"mt-8",children:(0,i.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[(0,i.jsx)(h,{title:"AES Encryption",subTitle:"Encrypt and decrypt text",icon:"shield",onClicked:()=>{alert("Coming soon")}}),(0,i.jsx)(h,{title:"Roulette",subTitle:"Digital spinner tool",icon:"target",onClicked:()=>{alert("Coming soon")}}),(0,i.jsx)(h,{title:"Calendar",subTitle:"Holiday event viewer",icon:"calendar",onClicked:()=>{alert("Coming soon")}}),(0,i.jsx)(h,{title:"See more tools",subTitle:"→",icon:"box",bg:"bg-teal-100 dark:bg-teal-900",hover:"hover:bg-primary/50 hover:dark:bg-teal-950",onClicked:()=>{alert("Coming soon")}})]})}),(0,i.jsx)("div",{className:"mt-8",children:(0,i.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[(0,i.jsx)("div",{className:"lg:col-span-2",children:(0,i.jsx)(g,{posts:t})}),(0,i.jsx)("div",{className:"bg-blue-200/40 dark:bg-blue-700/30 backdrop-blur-md rounded-lg shadow-lg p-6 w-full mr-0 md:mr-6 mt-4 md:mt-0 flex items-center justify-between",children:(0,i.jsx)(m(),{href:"/insight",className:"w-full flex items-center justify-between",children:(0,i.jsxs)("div",{className:"w-full text-center ",children:[(0,i.jsx)("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200",children:"See more insights"}),(0,i.jsx)(a(),{icon:"arrow-right",size:30,strokeWidth:4,className:"w-full text-text dark:text-text-dark text-start"})]})})})]})})]})})]})})}},5675:function(e,t,r){e.exports=r(5666)}},function(e){e.O(0,[972,743,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);