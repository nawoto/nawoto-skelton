"use strict";(self.webpackChunknawo_to=self.webpackChunknawo_to||[]).push([[678],{4505:function(e,t,l){l.d(t,{Z:function(){return d}});var a=l(7294),r=l(1597),n=function(e){var t=e.title;return a.createElement("header",null,a.createElement("div",{className:"hover-style py-6"},a.createElement("h3",{className:"text-center text-6xl font-black tracking-widest md:text-8xl"},a.createElement(r.Link,{to:"/"},t))),a.createElement("nav",null,a.createElement("ul",{className:"grid grid-cols-2 divide-x text-center text-lg uppercase md:grid-cols-4"},a.createElement("li",{className:"hover-style border-y"},a.createElement(r.Link,{to:"/"},"top")),a.createElement("li",{className:"hover-style border-y"},a.createElement(r.Link,{to:"/logs"},"log")),a.createElement("li",{className:"hover-style border-b md:border-y"},a.createElement(r.Link,{to:"/texts"},"texts")),a.createElement("li",{className:"hover-style border-b md:border-y"},a.createElement(r.Link,{to:"/about"},"about")))))},m=l(396),c=l(9519),s=l(8014),o=l(7190),i=function(){var e,t=null===(e=(0,r.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return a.createElement("div",null,a.createElement("h3",{className:"hover-style border-y text-center text-2xl font-medium uppercase tracking-widest md:hidden"},"author"),a.createElement("div",{className:"hover-style flex md:grid md:grid-cols-1"},a.createElement("div",{className:"border md:mx-auto md:border-none md:pt-1"},a.createElement(m.S,{className:"z-10 overflow-hidden rounded-full",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:138,height:138,quality:95,alt:"Profile picture",__imageData:l(1289)})),(null==t?void 0:t.name)&&a.createElement("div",{className:"w-full border-b p-1 md:text-center"},a.createElement("p",{className:"text-lg font-bold"},t.name),a.createElement("p",{className:"text-sm md:px-10 md:text-left"},t.summary),a.createElement("p",{className:"text-right text-sm md:text-center"},a.createElement(r.Link,{to:"/about",className:"uppercase underline"},"read me")),a.createElement("ul",{className:"flex flex-row justify-end pt-2 text-2xl md:justify-center"},a.createElement("li",{className:"hover-style px-2"},a.createElement("a",{href:"https://twitter.com/nawoto"},a.createElement(c.G,{icon:o.mdU}))),a.createElement("li",{className:"hover-style px-2"},a.createElement("a",{href:"https://github.com/nawoto/"},a.createElement(c.G,{icon:o.zhw}))),a.createElement("li",{className:"hover-style px-2"},a.createElement("a",{href:"https://speakerdeck.com/nawoto"},a.createElement(c.G,{icon:o.Tzp}))),a.createElement("li",{className:"hover-style px-2"},a.createElement("a",{href:"https://www.instagram.com/nawoto/"},a.createElement(c.G,{icon:o.Zzi}))),a.createElement("li",{className:"hover-style pl-2"},a.createElement(r.Link,{to:"/rss.xml"},a.createElement(c.G,{icon:s.mWX})))))))},d=function(e){var t=e.location,l=e.title,r=e.children,m="/"===t.pathname;return a.createElement("div",{"data-is-root-path":m},a.createElement(n,{title:l}),a.createElement("main",null,a.createElement("div",{className:"md:flex md:flex-row"},!m&&a.createElement("div",{className:"md:order-last md:basis-3/4"},r),a.createElement("div",{className:"border-r md:basis-1/4"},a.createElement(i,null)),m&&a.createElement("div",{className:"md:basis-3/4"},r))),a.createElement("footer",{className:"border-t text-center text-sm"},"© ",(new Date).getFullYear(),", NISHIMURA Naoto All Rights Reserved."))}},6558:function(e,t,l){l.r(t);var a=l(7294),r=l(1597),n=l(4505),m=l(4501);t.default=function(e){var t,l=e.data,c=e.location,s=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",o=l.allMarkdownRemark.nodes.filter((function(e){return"blog"===e.fields.collection})),i=l.allMarkdownRemark.nodes.filter((function(e){return"article"===e.fields.collection}));return 0===o.length||0===i.length?a.createElement(n.Z,{location:c,title:s},a.createElement(m.Z,{title:s}),a.createElement("p",null,"No contents found.")):a.createElement(n.Z,{location:c,title:s},a.createElement(m.Z,{title:s}),a.createElement("div",{className:"hover-style"},a.createElement("h1",{className:"border-y py-4 text-center text-4xl font-semibold uppercase tracking-widest md:border-none"},a.createElement(r.Link,{to:"/logs"},"log"))),a.createElement("ol",{style:{listStyle:"none"}},o.map((function(e){var t=e.frontmatter.title||e.fields.slug;return a.createElement("li",{key:e.fields.slug,className:"hover-style border-y border-solid py-2"},a.createElement("article",{className:"mx-auto w-5/6",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",{className:"py-4"},a.createElement("h2",{className:"text-2xl font-bold"},a.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},t))),a.createElement("small",null,e.frontmatter.date)),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}),a.createElement("div",{className:"my-2 border py-2 text-center uppercase"},a.createElement(r.Link,{to:e.fields.slug},"read more")))))}))),a.createElement("div",{className:"hover-style"},a.createElement("h1",{className:"border-y py-4 text-center text-4xl font-semibold uppercase tracking-widest"},a.createElement(r.Link,{to:"/texts"},"texts"))),a.createElement("ol",{style:{listStyle:"none"}},i.map((function(e){var t=e.frontmatter.title||e.fields.slug;return a.createElement("li",{key:e.fields.slug,className:"hover-style border-y border-solid py-2"},a.createElement("article",{className:"mx-auto w-5/6",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",{className:"py-4"},a.createElement("h2",{className:"text-2xl font-medium"},a.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},t))),a.createElement("small",null,e.frontmatter.date)),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}),a.createElement("div",{className:"my-2 border py-2 text-center uppercase"},a.createElement(r.Link,{to:e.fields.slug},"read more")))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a6207428eef9b9931b57.js.map