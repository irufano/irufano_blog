(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o(6932)}])},6932:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return v}});var a=o(5893),r=o(7294),n=o(9008),i=o.n(n);function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}var h=["keyOverride"],c=["crossOrigin"],s={templateTitle:"",noindex:!1,nofollow:!1,norobots:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},d=function(e,t,o){void 0===t&&(t=[]);var a=void 0===o?{}:o,n=a.defaultWidth,i=a.defaultHeight;return t.reduce(function(t,o,a){return t.push(r.createElement("meta",{key:"og:"+e+":0"+a,property:"og:"+e,content:o.url})),o.alt&&t.push(r.createElement("meta",{key:"og:"+e+":alt0"+a,property:"og:"+e+":alt",content:o.alt})),o.secureUrl&&t.push(r.createElement("meta",{key:"og:"+e+":secure_url0"+a,property:"og:"+e+":secure_url",content:o.secureUrl.toString()})),o.type&&t.push(r.createElement("meta",{key:"og:"+e+":type0"+a,property:"og:"+e+":type",content:o.type.toString()})),o.width?t.push(r.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:o.width.toString()})):n&&t.push(r.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:n.toString()})),o.height?t.push(r.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:o.height.toString()})):i&&t.push(r.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:i.toString()})),t},[])},u=function(e){var t,o,a,n,i,u=[];e.titleTemplate&&(s.templateTitle=e.titleTemplate);var m="";e.title?(m=e.title,s.templateTitle&&(m=s.templateTitle.replace(/%s/g,function(){return m}))):e.defaultTitle&&(m=e.defaultTitle),m&&u.push(r.createElement("title",{key:"title"},m));var g=void 0===e.noindex?s.noindex||e.dangerouslySetAllPagesToNoIndex:e.noindex,f=void 0===e.nofollow?s.nofollow||e.dangerouslySetAllPagesToNoFollow:e.nofollow,y=e.norobots||s.norobots,G="";if(e.robotsProps){var k=e.robotsProps,v=k.nosnippet,E=k.maxSnippet,b=k.maxImagePreview,w=k.maxVideoPreview,O=k.noarchive,_=k.noimageindex,T=k.notranslate,x=k.unavailableAfter;G=(v?",nosnippet":"")+(E?",max-snippet:"+E:"")+(b?",max-image-preview:"+b:"")+(O?",noarchive":"")+(x?",unavailable_after:"+x:"")+(_?",noimageindex":"")+(w?",max-video-preview:"+w:"")+(T?",notranslate":"")}if(e.norobots&&(s.norobots=!0),g||f?(e.dangerouslySetAllPagesToNoIndex&&(s.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(s.nofollow=!0),u.push(r.createElement("meta",{key:"robots",name:"robots",content:(g?"noindex":"index")+","+(f?"nofollow":"follow")+G}))):(!y||G)&&u.push(r.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+G})),e.description&&u.push(r.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&u.push(r.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&u.push(r.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){u.push(r.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&u.push(r.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&u.push(r.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&u.push(r.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&u.push(r.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||m)&&u.push(r.createElement("meta",{key:"og:title",property:"og:title",content:(null==(n=e.openGraph)?void 0:n.title)||m})),(null!=(o=e.openGraph)&&o.description||e.description)&&u.push(r.createElement("meta",{key:"og:description",property:"og:description",content:(null==(i=e.openGraph)?void 0:i.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&u.push(r.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var I=e.openGraph.type.toLowerCase();u.push(r.createElement("meta",{key:"og:type",property:"og:type",content:I})),"profile"===I&&e.openGraph.profile?(e.openGraph.profile.firstName&&u.push(r.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&u.push(r.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&u.push(r.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&u.push(r.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===I&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){u.push(r.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&u.push(r.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&u.push(r.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){u.push(r.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===I&&e.openGraph.article?(e.openGraph.article.publishedTime&&u.push(r.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&u.push(r.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&u.push(r.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){u.push(r.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&u.push(r.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){u.push(r.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===I||"video.episode"===I||"video.tv_show"===I||"video.other"===I)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&u.push(r.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&u.push(r.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){u.push(r.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){u.push(r.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&u.push(r.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&u.push(r.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){u.push(r.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&u.push(r.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(s.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(s.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&u.push.apply(u,d("image",e.openGraph.images,{defaultWidth:s.defaultOpenGraphImageWidth,defaultHeight:s.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(s.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(s.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&u.push.apply(u,d("video",e.openGraph.videos,{defaultWidth:s.defaultOpenGraphVideoWidth,defaultHeight:s.defaultOpenGraphVideoHeight})),e.openGraph.audio&&u.push.apply(u,d("audio",e.openGraph.audio)),e.openGraph.locale&&u.push(r.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&u.push(r.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&u.push(r.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,o,a=e.keyOverride,n=l(e,h);u.push(r.createElement("meta",p({key:"meta:"+(null!=(t=null!=(o=null!=a?a:n.name)?o:n.property)?t:n.httpEquiv)},n)))}),null!=(a=e.additionalLinkTags)&&a.length&&e.additionalLinkTags.forEach(function(e){var t,o=e.crossOrigin,a=l(e,c);u.push(r.createElement("link",p({key:"link"+(null!=(t=a.keyOverride)?t:a.href)+a.rel},a,{crossOrigin:"anonymous"===o||"use-credentials"===o||""===o?o:void 0})))}),u},m=function(e){return r.createElement(i(),null,u(e))},g=function(e){var t=e.title,o=e.titleTemplate,a=e.defaultTitle,n=e.themeColor,i=e.dangerouslySetAllPagesToNoIndex,p=e.dangerouslySetAllPagesToNoFollow,l=e.description,h=e.canonical,c=e.facebook,s=e.openGraph,d=e.additionalMetaTags,u=e.twitter,g=e.defaultOpenGraphImageWidth,f=e.defaultOpenGraphImageHeight,y=e.defaultOpenGraphVideoWidth,G=e.defaultOpenGraphVideoHeight,k=e.mobileAlternate,v=e.languageAlternates,E=e.additionalLinkTags,b=e.robotsProps,w=e.norobots;return r.createElement(m,{title:t,titleTemplate:o,defaultTitle:a,themeColor:n,dangerouslySetAllPagesToNoIndex:void 0!==i&&i,dangerouslySetAllPagesToNoFollow:void 0!==p&&p,description:l,canonical:h,facebook:c,openGraph:s,additionalMetaTags:d,twitter:u,defaultOpenGraphImageWidth:g,defaultOpenGraphImageHeight:f,defaultOpenGraphVideoWidth:y,defaultOpenGraphVideoHeight:G,mobileAlternate:k,languageAlternates:v,additionalLinkTags:E,robotsProps:b,norobots:w})};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g");var f={title:"Irufano Insight",description:"Insights, ideas, stories and tutorials from irufano",openGraph:{type:"website",locale:"en_US",url:"https://www.my-static-blog.com/",site_name:"irufano insight"}},y=o(4298),G=o.n(y),k=o(1163);function v(e){let{Component:t,pageProps:o}=e,n=(0,k.useRouter)(),i="G-787PK2XJ06";return(0,r.useEffect)(()=>{{let e=e=>{window.gtag("config",'"'.concat(i,'"'),{page_path:e})};return n.events.on("routeChangeComplete",e),()=>{n.events.off("routeChangeComplete",e)}}},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(G(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=".concat(i)}),(0,a.jsx)(G(),{id:"google-analytics",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n\n                gtag('config', '".concat(i,"');\n              ")}})," "]}),(0,a.jsx)(g,{...f}),(0,a.jsx)(t,{...o})]})}o(1784),o(1587)},1587:function(){},1784:function(){},9008:function(e,t,o){e.exports=o(7828)},1163:function(e,t,o){e.exports=o(9090)},4298:function(e,t,o){e.exports=o(2892)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(9090)}),_N_E=e.O()}]);