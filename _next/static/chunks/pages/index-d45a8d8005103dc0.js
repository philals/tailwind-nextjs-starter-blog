(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3678)}])},8968:function(e,t,r){"use strict";r.d(t,{w:function(){return u}});var n=r(5666),a=r.n(n),i=r(7320),c=r(1720),l=r(7059),o=r.n(l);function s(e,t,r,n,a,i,c){try{var l=e[i](c),o=l.value}catch(s){return void r(s)}l.done?t(o):Promise.resolve(o).then(n,a)}var d=function(e){var t,r=e.title,n=void 0===r?"Subscribe to the newsletter":r,l=(0,c.useRef)(null),d=(0,c.useState)(!1),u=d[0],m=d[1],p=(0,c.useState)(""),f=p[0],g=p[1],h=(0,c.useState)(!1),y=h[0],v=h[1],x=(t=a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/".concat(o().newsletter.provider),{body:JSON.stringify({email:l.current.value}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return r=e.sent,e.next=6,r.json();case 6:if(!e.sent.error){e.next=11;break}return m(!0),g("Your e-mail address is invalid or you are already subscribed!"),e.abrupt("return");case 11:l.current.value="",m(!1),v(!0),g("Successfully! \ud83c\udf89 You are now subscribed.");case 15:case"end":return e.stop()}}),e)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function c(e){s(i,n,a,c,l,"next",e)}function l(e){s(i,n,a,c,l,"throw",e)}c(void 0)}))});return(0,i.BX)("div",{children:[(0,i.tZ)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:n}),(0,i.BX)("form",{className:"flex flex-col sm:flex-row",onSubmit:x,children:[(0,i.BX)("div",{children:[(0,i.tZ)("label",{className:"sr-only",htmlFor:"email-input",children:"Email address"}),(0,i.tZ)("input",{autoComplete:"email",className:"px-4 rounded-md w-72 dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary-600",id:"email-input",name:"email",placeholder:y?"You're subscribed !  \ud83c\udf89":"Enter your email",ref:l,required:!0,type:"email",disabled:y})]}),(0,i.tZ)("div",{className:"flex w-full mt-2 rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,i.tZ)("button",{className:"py-2 sm:py-0 w-full bg-primary-500 px-4 rounded-md font-medium text-white ".concat(y?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 dark:ring-offset-black"),type:"submit",disabled:y,children:y?"Thank you!":"Sign up"})})]}),u&&(0,i.tZ)("div",{className:"pt-2 text-sm text-red-500 w-72 sm:w-96 dark:text-red-400",children:f})]})};t.Z=d;var u=function(e){var t=e.title;return(0,i.tZ)("div",{className:"flex items-center justify-center",children:(0,i.tZ)("div",{className:"p-6 bg-gray-100 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,i.tZ)(d,{title:t})})})}},8590:function(e,t,r){"use strict";r.d(t,{TQ:function(){return s},$t:function(){return d},Uy:function(){return u}});var n=r(7320),a=r(9008),i=r(1163),c=r(7059),l=r.n(c),o=function(e){var t=e.title,r=e.description,c=e.ogType,o=e.ogImage,s=e.twImage,d=(0,i.useRouter)();return(0,n.BX)(a.default,{children:[(0,n.tZ)("title",{children:t}),(0,n.tZ)("meta",{name:"robots",content:"follow, index"}),(0,n.tZ)("meta",{name:"description",content:r}),(0,n.tZ)("meta",{property:"og:url",content:"".concat(l().siteUrl).concat(d.asPath)}),(0,n.tZ)("meta",{property:"og:type",content:c}),(0,n.tZ)("meta",{property:"og:site_name",content:l().title}),(0,n.tZ)("meta",{property:"og:description",content:r}),(0,n.tZ)("meta",{property:"og:title",content:t}),"Array"===o.constructor.name?o.map((function(e){var t=e.url;return(0,n.tZ)("meta",{property:"og:image",content:t},t)})):(0,n.tZ)("meta",{property:"og:image",content:o},o),(0,n.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.tZ)("meta",{name:"twitter:site",content:l().twitter}),(0,n.tZ)("meta",{name:"twitter:title",content:t}),(0,n.tZ)("meta",{name:"twitter:description",content:r}),(0,n.tZ)("meta",{name:"twitter:image",content:s})]})},s=function(e){var t=e.title,r=e.description,a=l().siteUrl+l().socialBanner,i=l().siteUrl+l().socialBanner;return(0,n.tZ)(o,{title:t,description:r,ogType:"website",ogImage:a,twImage:i})},d=function(e){var t=e.title,r=e.description,c=l().siteUrl+l().socialBanner,s=l().siteUrl+l().socialBanner,d=(0,i.useRouter)();return(0,n.BX)(n.HY,{children:[(0,n.tZ)(o,{title:t,description:r,ogType:"website",ogImage:c,twImage:s}),(0,n.tZ)(a.default,{children:(0,n.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(r," - RSS feed"),href:"".concat(l().siteUrl).concat(d.asPath,"/feed.xml")})})]})},u=function(e){var t=e.authorDetails,r=e.title,c=e.summary,s=e.date,d=e.lastmod,u=e.url,m=e.images,p=void 0===m?[]:m,f=(0,i.useRouter)(),g=new Date(s).toISOString(),h=new Date(d||s).toISOString(),y=(0===p.length?[l().socialBanner]:"string"===typeof p?[p]:p).map((function(e){return{"@type":"ImageObject",url:"".concat(l().siteUrl).concat(e)}})),v={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":u},headline:r,image:y,datePublished:g,dateModified:h,author:t?t.map((function(e){return{"@type":"Person",name:e.name}})):{"@type":"Person",name:l().author},publisher:{"@type":"Organization",name:l().author,logo:{"@type":"ImageObject",url:"".concat(l().siteUrl).concat(l().siteLogo)}},description:c},x=y[0].url;return(0,n.BX)(n.HY,{children:[(0,n.tZ)(o,{title:r,description:c,ogType:"article",ogImage:y,twImage:x}),(0,n.BX)(a.default,{children:[s&&(0,n.tZ)("meta",{property:"article:published_time",content:g}),d&&(0,n.tZ)("meta",{property:"article:modified_time",content:h}),(0,n.tZ)("link",{rel:"canonical",href:"".concat(l().siteUrl).concat(f.asPath)}),(0,n.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(v,null,2)}})]})]})}},2917:function(e,t,r){"use strict";var n=r(7320),a=r(1664),i=r(7836);t.Z=function(e){var t=e.text;return(0,n.tZ)(a.default,{href:"/tags/".concat((0,i.Z)(t)),children:(0,n.tZ)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t.split(" ").join("-")})})}},811:function(e,t,r){"use strict";var n=r(7059),a=r.n(n);t.Z=function(e){return new Date(e).toLocaleDateString(a().locale,{year:"numeric",month:"long",day:"numeric"})}},7836:function(e,t,r){"use strict";var n=r(9671);t.Z=function(e){return(0,n.slug)(e)}},3678:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return u},default:function(){return m}});var n=r(7320),a=r(4373),i=r(8590),c=r(2917),l=r(7059),o=r.n(l),s=r(811),d=r(8968),u=!0;function m(e){var t=e.posts;return(0,n.BX)(n.HY,{children:[(0,n.tZ)(i.TQ,{title:o().title,description:o().description}),(0,n.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,n.BX)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:[(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"Latest"}),(0,n.tZ)("p",{className:"text-lg leading-7 text-gray-500 dark:text-gray-400",children:o().description})]}),(0,n.BX)("ul",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[!t.length&&"No posts found.",t.slice(0,5).map((function(e){var t=e.slug,r=e.date,i=e.title,l=e.summary,o=e.tags;return(0,n.tZ)("li",{className:"py-12",children:(0,n.tZ)("article",{children:(0,n.BX)("div",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",children:[(0,n.BX)("dl",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.tZ)("time",{dateTime:r,children:(0,s.Z)(r)})})]}),(0,n.BX)("div",{className:"space-y-5 xl:col-span-3",children:[(0,n.BX)("div",{className:"space-y-6",children:[(0,n.BX)("div",{children:[(0,n.tZ)("h2",{className:"text-2xl font-bold leading-8 tracking-tight",children:(0,n.tZ)(a.Z,{href:"/blog/".concat(t),className:"text-gray-900 dark:text-gray-100",children:i})}),(0,n.tZ)("div",{className:"flex flex-wrap",children:o.map((function(e){return(0,n.tZ)(c.Z,{text:e},e)}))})]}),(0,n.tZ)("div",{className:"prose text-gray-500 max-w-none dark:text-gray-400",children:l})]}),(0,n.tZ)("div",{className:"text-base font-medium leading-6",children:(0,n.tZ)(a.Z,{href:"/blog/".concat(t),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":'Read "'.concat(i,'"'),children:"Read more \u2192"})})]})]})})},t)}))]})]}),t.length>5&&(0,n.tZ)("div",{className:"flex justify-end text-base font-medium leading-6",children:(0,n.tZ)(a.Z,{href:"/blog",className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":"all posts",children:"All Posts \u2192"})}),""!==o().newsletter.provider&&(0,n.tZ)("div",{className:"flex items-center justify-center pt-4",children:(0,n.tZ)(d.Z,{})})]})}}},function(e){e.O(0,[429,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);