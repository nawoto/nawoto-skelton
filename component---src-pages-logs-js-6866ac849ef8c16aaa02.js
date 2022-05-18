"use strict";(self.webpackChunknawo_to=self.webpackChunknawo_to||[]).push([[329],{4505:function(e,t,a){a.d(t,{Z:function(){return d}});var l=a(7294),r=a(1597),c=function(e){var t=e.title;return l.createElement("header",null,l.createElement("div",{className:"hover-style py-6"},l.createElement("h3",{className:"text-center text-6xl font-black tracking-widest md:text-8xl"},l.createElement(r.Link,{to:"/"},t))),l.createElement("nav",null,l.createElement("ul",{className:"grid grid-cols-2 divide-x text-center text-lg uppercase md:grid-cols-4"},l.createElement("li",{className:"hover-style border-y"},l.createElement(r.Link,{to:"/"},"top")),l.createElement("li",{className:"hover-style border-y"},l.createElement(r.Link,{to:"/logs"},"log")),l.createElement("li",{className:"hover-style border-b md:border-y"},l.createElement(r.Link,{to:"/texts"},"texts")),l.createElement("li",{className:"hover-style border-b md:border-y"},l.createElement(r.Link,{to:"/about"},"about")))))},n=a(396),s=a(9519),m=a(8014),i=a(7190),o=function(){var e,t=null===(e=(0,r.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return l.createElement("div",{className:"h-card"},l.createElement("h3",{className:"hover-style border-y text-center text-2xl font-medium uppercase tracking-widest md:hidden"},"author"),l.createElement("div",{className:"hover-style flex md:grid md:grid-cols-1"},l.createElement("div",{className:"border md:mx-auto md:border-none md:pt-1"},l.createElement(n.S,{className:"z-10 overflow-hidden rounded-full",imgClassName:"u-photo",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:138,height:138,quality:95,alt:"Profile picture",__imageData:a(1289)})),(null==t?void 0:t.name)&&l.createElement("div",{className:"w-full border-b p-1 md:text-center"},l.createElement("p",{className:"text-lg font-bold"},l.createElement(r.Link,{to:"/",className:"p-name u-url"},t.name)),l.createElement("p",{className:"text-sm md:px-10 md:text-left"},t.summary),l.createElement("p",{className:"text-right text-sm md:text-center"},l.createElement(r.Link,{to:"/about",className:"uppercase underline"},"read me")),l.createElement("ul",{className:"flex flex-row justify-end pt-2 text-2xl md:justify-center"},l.createElement("li",{className:"hover-style px-2"},l.createElement("a",{href:"https://twitter.com/nawoto"},l.createElement(s.G,{icon:i.mdU}))),l.createElement("li",{className:"hover-style px-2"},l.createElement("a",{href:"https://github.com/nawoto/"},l.createElement(s.G,{icon:i.zhw}))),l.createElement("li",{className:"hover-style px-2"},l.createElement("a",{href:"https://speakerdeck.com/nawoto"},l.createElement(s.G,{icon:i.Tzp}))),l.createElement("li",{className:"hover-style px-2"},l.createElement("a",{href:"https://www.instagram.com/nawoto/"},l.createElement(s.G,{icon:i.Zzi}))),l.createElement("li",{className:"hover-style pl-2"},l.createElement(r.Link,{to:"/rss.xml"},l.createElement(s.G,{icon:m.mWX})))))))},d=function(e){var t=e.location,a=e.title,r=e.children,n="/"===t.pathname;return l.createElement("div",{"data-is-root-path":n},l.createElement(c,{title:a}),l.createElement("main",null,l.createElement("div",{className:"md:flex md:flex-row"},!n&&l.createElement("div",{className:"md:order-last md:basis-3/4"},r),l.createElement("div",{className:"border-r md:basis-1/4"},l.createElement(o,null)),n&&l.createElement("div",{className:"md:basis-3/4"},r))),l.createElement("footer",{className:"border-t text-center text-sm"},"© ",(new Date).getFullYear(),", NISHIMURA Naoto All Rights Reserved."))}},5154:function(e,t,a){a.r(t);var l=a(7294),r=a(1597),c=a(4505),n=a(4501);t.default=function(e){var t,a=e.data,s=e.location,m=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",i=a.allMarkdownRemark.nodes;return 0===i.length?l.createElement(c.Z,{location:s,title:m},l.createElement(n.Z,{title:"LOG | "+m}),l.createElement("p",null,"No contents found.")):l.createElement(c.Z,{location:s,title:m},l.createElement(n.Z,{title:"LOG | "+m}),l.createElement("div",{className:"hover-style py-4 text-center"},l.createElement("h1",{className:"text-4xl font-semibold uppercase tracking-widest"},"log"),l.createElement("p",{className:"text-sm text-gray-500"},"日々のなんとなくを書き留めてます✍️")),l.createElement("ol",{style:{listStyle:"none"}},i.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug,className:"hover-style border-y border-solid py-2"},l.createElement("article",{className:"mx-auto w-5/6",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",{className:"py-4"},l.createElement("h2",{className:"text-2xl font-medium"},l.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}),l.createElement("div",{className:"my-2 border py-2 text-center uppercase"},l.createElement(r.Link,{to:e.fields.slug},"read more")))))}))))}},1289:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#383838","images":{"fallback":{"src":"/static/22a97b9e3e1b207907eaae69036df7fb/2974b/profile-pic.png","srcSet":"/static/22a97b9e3e1b207907eaae69036df7fb/2974b/profile-pic.png 138w,\\n/static/22a97b9e3e1b207907eaae69036df7fb/8ef07/profile-pic.png 276w","sizes":"138px"},"sources":[{"srcSet":"/static/22a97b9e3e1b207907eaae69036df7fb/c7149/profile-pic.avif 138w,\\n/static/22a97b9e3e1b207907eaae69036df7fb/250ea/profile-pic.avif 276w","type":"image/avif","sizes":"138px"},{"srcSet":"/static/22a97b9e3e1b207907eaae69036df7fb/b50cf/profile-pic.webp 138w,\\n/static/22a97b9e3e1b207907eaae69036df7fb/508d5/profile-pic.webp 276w","type":"image/webp","sizes":"138px"}]},"width":138,"height":138}')}}]);
//# sourceMappingURL=component---src-pages-logs-js-6866ac849ef8c16aaa02.js.map