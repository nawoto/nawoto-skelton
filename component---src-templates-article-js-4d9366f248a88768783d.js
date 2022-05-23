"use strict";(self.webpackChunknawo_to=self.webpackChunknawo_to||[]).push([[886],{4505:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),l=a(1597),n=function(e){var t=e.title;return r.createElement("header",null,r.createElement("div",{className:"hover-style py-6"},r.createElement("h3",{className:"text-center text-6xl font-black tracking-widest md:text-8xl"},r.createElement(l.Link,{to:"/"},t))),r.createElement("nav",null,r.createElement("ul",{className:"grid grid-cols-2 divide-x text-center text-lg uppercase md:grid-cols-4"},r.createElement("li",{className:"hover-style border-y"},r.createElement(l.Link,{to:"/"},"top")),r.createElement("li",{className:"hover-style border-y"},r.createElement(l.Link,{to:"/logs"},"log")),r.createElement("li",{className:"hover-style border-b md:border-y"},r.createElement(l.Link,{to:"/texts"},"texts")),r.createElement("li",{className:"hover-style border-b md:border-y"},r.createElement(l.Link,{to:"/about"},"about")))))},c=a(396),s=a(9519),m=a(8014),i=a(7190),o=function(){var e,t=null===(e=(0,l.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return r.createElement("div",null,r.createElement("h3",{className:"hover-style border-y text-center text-2xl font-medium uppercase tracking-widest md:hidden"},"author"),r.createElement("div",{className:"hover-style h-card flex md:grid md:grid-cols-1"},r.createElement("div",{className:"border md:mx-auto md:border-none md:pt-1"},r.createElement(c.S,{className:"z-10 overflow-hidden rounded-full",imgClassName:"u-photo",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:138,height:138,quality:95,alt:"Profile picture",__imageData:a(1289)})),(null==t?void 0:t.name)&&r.createElement("div",{className:"w-full border-b p-1 md:text-center"},r.createElement("p",{className:"text-lg font-bold"},r.createElement(l.Link,{to:"/",className:"p-name u-url"},t.name)),r.createElement("p",{className:"text-sm md:px-10 md:text-left"},r.createElement("span",{className:"p-name"},"西村直人"),"。 おもに",r.createElement("span",{className:"p-nickname"},"nawoto")," という名前で",r.createElement("span",{className:"p-note"},"いろいろしています")),r.createElement("p",{className:"text-right text-sm md:text-center"},r.createElement(l.Link,{to:"/about",className:"uppercase underline"},"read me")),r.createElement("ul",{className:"flex flex-row justify-end pt-2 text-2xl md:justify-center"},r.createElement("li",{className:"hover-style px-2"},r.createElement("a",{href:"https://twitter.com/nawoto",className:"u-url",target:"_blank",rel:"noopener noreferrer"},r.createElement(s.G,{icon:i.mdU}))),r.createElement("li",{className:"hover-style px-2"},r.createElement("a",{href:"https://github.com/nawoto/",className:"u-url",target:"_blank",rel:"noopener noreferrer"},r.createElement(s.G,{icon:i.zhw}))),r.createElement("li",{className:"hover-style px-2"},r.createElement("a",{href:"https://speakerdeck.com/nawoto",className:"u-url",target:"_blank",rel:"noopener noreferrer"},r.createElement(s.G,{icon:i.Tzp}))),r.createElement("li",{className:"hover-style px-2"},r.createElement("a",{href:"https://www.instagram.com/nawoto/",className:"u-url",target:"_blank",rel:"noopener noreferrer"},r.createElement(s.G,{icon:i.Zzi}))),r.createElement("li",{className:"hover-style pl-2"},r.createElement(l.Link,{to:"/rss.xml"},r.createElement(s.G,{icon:m.mWX})))))))},d=function(e){var t=e.location,a=e.title,l=e.children,c="/"===t.pathname;return r.createElement("div",{"data-is-root-path":c},r.createElement(n,{title:a}),r.createElement("main",null,r.createElement("div",{className:"md:flex md:flex-row"},!c&&r.createElement("div",{className:"md:order-last md:basis-3/4"},l),r.createElement("div",{className:"border-r md:basis-1/4"},r.createElement(o,null)),c&&r.createElement("div",{className:"md:basis-3/4"},l))),r.createElement("footer",{className:"border-t text-center text-sm"},"© ",(new Date).getFullYear(),", NISHIMURA Naoto All Rights Reserved."))}},263:function(e,t,a){a.r(t);var r=a(7294),l=a(1597),n=a(9743),c=a(4838),s=a(8127),m=a(3695),i=a(3734),o=a(4505),d=a(4501),p=a(8180);t.default=function(e){var t,a,u=e.data,f=e.location,E=u.markdownRemark,b=(null===(t=u.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",h=null===(a=u.site.siteMetadata)||void 0===a?void 0:a.siteUrl,x=u.previous,N=u.next,v=E.frontmatter.title+" | "+b,g=""+h+E.fields.slug,w=E.frontmatter.ogimage,y=w&&w.childImageSharp.fixed.src;return r.createElement(o.Z,{location:f,title:b},r.createElement(d.Z,{title:v,description:E.frontmatter.description||E.excerpt,image:y}),r.createElement("article",{itemScope:!0,itemType:"http://schema.org/Article",className:"h-entry"},r.createElement("header",{className:"p-2"},r.createElement("h1",{itemProp:"headline",className:"p-name text-3xl font-bold"},E.frontmatter.title),r.createElement("p",{className:"dt-published"},E.frontmatter.date)),r.createElement("section",{dangerouslySetInnerHTML:{__html:E.html},itemProp:"articleBody",className:"e-content prose px-4 py-3 md:mx-10 md:max-w-fit"}),r.createElement("footer",{className:"md:mx-10"},r.createElement("p",{className:"px-4 text-sm text-gray-400"},r.createElement("a",{href:g,className:"u-url pr-1"},"this article"),"written by",r.createElement("a",{href:"http://nawo.to/about",rel:"author",className:"h-card p-author px-1"},"NISHIMURA Naoto"),"(",r.createElement("span",{className:"p-nickname"},"nawoto"),")"),r.createElement(c.Z,{url:g,title:v,className:"mx-4"},r.createElement(s.Z,{round:!0,size:28})),r.createElement(m.Z,{url:g,title:v},r.createElement(i.Z,{round:!0,size:28})),r.createElement(n.LikeButton,{id:E.id,namespace:E.fields.collection,component:n.LikeButton.templates.Twitter}),r.createElement(p.Z,null))),r.createElement("nav",null,r.createElement("ul",{className:"my-5 grid grid-cols-2 divide-x border-y text-center text-2xl uppercase"},r.createElement("li",{className:"hover-style p-3"},x?r.createElement(l.Link,{to:x.fields.slug,title:x.frontmatter.title,rel:"prev"},"prev"):r.createElement("span",{className:"text-gray-400"},"prev")),r.createElement("li",{className:"hover-style p-3"},N?r.createElement(l.Link,{to:N.fields.slug,title:N.frontmatter.title,rel:"next"},"next"):r.createElement("span",{className:"text-gray-400"},"next")))))}},1289:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#383838","images":{"fallback":{"src":"/static/22a97b9e3e1b207907eaae69036df7fb/2974b/profile-pic.png","srcSet":"/static/22a97b9e3e1b207907eaae69036df7fb/2974b/profile-pic.png 138w,\\n/static/22a97b9e3e1b207907eaae69036df7fb/8ef07/profile-pic.png 276w","sizes":"138px"},"sources":[{"srcSet":"/static/22a97b9e3e1b207907eaae69036df7fb/c7149/profile-pic.avif 138w,\\n/static/22a97b9e3e1b207907eaae69036df7fb/250ea/profile-pic.avif 276w","type":"image/avif","sizes":"138px"},{"srcSet":"/static/22a97b9e3e1b207907eaae69036df7fb/b50cf/profile-pic.webp 138w,\\n/static/22a97b9e3e1b207907eaae69036df7fb/508d5/profile-pic.webp 276w","type":"image/webp","sizes":"138px"}]},"width":138,"height":138}')}}]);
//# sourceMappingURL=component---src-templates-article-js-4d9366f248a88768783d.js.map