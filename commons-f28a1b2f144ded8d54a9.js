(self.webpackChunknawo_to=self.webpackChunknawo_to||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(!a(e[s],i[s]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!a(s.value[1],i.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!a(e[l[s]],i[l[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},7908:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),o=r(1597),a=function(e){var t=e.title;return n.createElement("header",null,n.createElement("div",{className:"hover-style py-6"},n.createElement("h3",{className:"text-center text-4xl font-black tracking-widest"},n.createElement(o.Link,{to:"/"},t))),n.createElement("nav",null,n.createElement("ul",{className:"grid grid-cols-2 divide-x text-center text-lg md:grid-cols-4"},n.createElement("li",{className:"hover-style border-y"},n.createElement(o.Link,{to:"/"},"TOP")),n.createElement("li",{className:"hover-style border-y"},n.createElement(o.Link,{to:"/logs"},"LOG")),n.createElement("li",{className:"hover-style border-b md:border-y"},n.createElement(o.Link,{to:"/texts"},"TEXTS")),n.createElement("li",{className:"hover-style border-b md:border-y"},n.createElement(o.Link,{to:"/about"},"ABOUT")))))},i=r(396),c=function(){var e,t=null===(e=(0,o.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return n.createElement("div",null,n.createElement("h3",{className:"hover-style border-y text-center text-2xl font-medium uppercase tracking-widest md:hidden"},"author"),n.createElement("div",{className:"hover-style flex md:grid md:grid-cols-1"},n.createElement("div",{className:"h-25 w-25 border md:mx-auto md:border-none"},n.createElement(i.S,{className:"rounded-full",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:100,height:100,quality:95,alt:"Profile picture",__imageData:r(9134)})),(null==t?void 0:t.name)&&n.createElement("div",{className:"max-h-25 w-full border-b p-1 md:text-center"},n.createElement("p",{className:"text-lg font-bold"},t.name),n.createElement("p",{className:"text-sm"},t.summary),n.createElement("p",{className:"text-right text-sm md:text-center"},n.createElement(o.Link,{to:"/about",className:"uppercase underline"},"read more")))),n.createElement("div",null,n.createElement("ul",{className:"text-center text-sm"},n.createElement("li",{className:"hover-style border-b py-2"},n.createElement("a",{href:"https://twitter.com/nawoto"},"Twitter")),n.createElement("li",{className:"hover-style border-b py-2"},n.createElement("a",{href:"https://github.com/nawoto/"},"Github")),n.createElement("li",{className:"hover-style border-b py-2"},n.createElement("a",{href:"https://speakerdeck.com/nawoto"},"SpeakerDeck")),n.createElement("li",{className:"hover-style border-b py-2"},n.createElement("a",{href:"https://www.instagram.com/nawoto/"},"Instagram")))))},s=function(e){var t=e.location,r=e.title,o=e.children,i="/"===t.pathname;return n.createElement("div",{className:"","data-is-root-path":i},n.createElement(a,{title:r}),n.createElement("main",null,n.createElement("div",{className:"md:flex md:flex-row"},n.createElement("div",{className:"md:order-last md:basis-3/4"},o),n.createElement("div",{className:"border-r md:basis-1/4"},n.createElement(c,null)))),n.createElement("footer",{className:"border border-t text-center text-sm"},"© ",(new Date).getFullYear(),", NISHIMURA Naoto All Rights Reserved."))}},262:function(e,t,r){"use strict";r.d(t,{Z:function(){return ve}});var n,o,a,i,c=r(7294),s=r(5697),l=r.n(s),u=r(4839),f=r.n(u),p=r(2993),d=r.n(p),m=r(6494),h=r.n(m),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",E="href",A="http-equiv",O="innerHTML",S="itemprop",C="name",x="property",k="rel",N="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",M="encodeSpecialCharacters",R="onChangeClientState",_="titleTemplate",B=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),D=[w.NOSCRIPT,w.SCRIPT,w.STYLE],H="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=J(e,w.TITLE),r=J(e,_);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=J(e,L);return t||n||void 0},W=function(e){return J(e,R)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},$=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],s=c.toLowerCase();-1===t.indexOf(s)||r===k&&"canonical"===e[r].toLowerCase()||s===k&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==O&&c!==T&&c!==S||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],s=h()({},n[c],o[c]);n[c]=s}return e}),[]).reverse()},J=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;se(w.BODY,n),se(w.HTML,o),ce(f,p);var d={baseTag:le(w.BASE,r),linkTags:le(w.LINK,a),metaTags:le(w.META,i),noscriptTags:le(w.NOSCRIPT,c),scriptTags:le(w.SCRIPT,l),styleTags:le(w.STYLE,u)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(w.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(H),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],l=t[s]||"";r.getAttribute(s)!==l&&r.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var u=a.indexOf(s);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(H):r.getAttribute(H)!==i.join(",")&&r.setAttribute(H,i.join(","))}},le=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(H,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[H]=!0,o=fe(r,n),[c.createElement(w.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=ue(r),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+G(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[H]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===O||r===T){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+G(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(w.BASE,t,n),bodyAttributes:pe(y,r,n),htmlAttributes:pe(b,o,n),link:pe(w.LINK,a,n),meta:pe(w.META,i,n),noscript:pe(w.NOSCRIPT,c,n),script:pe(w.SCRIPT,s,n),style:pe(w.STYLE,l,n),title:pe(w.TITLE,{title:f,titleAttributes:p},n)}},me=f()((function(e){return{baseTag:Z([E,j],e),bodyAttributes:Q(y,e),defer:J(e,I),encode:J(e,M),htmlAttributes:Q(b,e),linkTags:$(w.LINK,[k,E],e),metaTags:$(w.META,[C,g,A,x,S],e),noscriptTags:$(w.NOSCRIPT,[O],e),onChangeClientState:W(e),scriptTags:$(w.SCRIPT,[N,O],e),styleTags:$(w.STYLE,[T],e),title:V(e),titleAttributes:Q(v,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),he=(o=me,i=a=function(e){function t(){return Y(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return U({},n,((t={})[r.type]=[].concat(n[r.type]||[],[U({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case w.TITLE:return U({},o,((t={})[n.type]=i,t.titleAttributes=U({},a),t));case w.BODY:return U({},o,{bodyAttributes:U({},a)});case w.HTML:return U({},o,{htmlAttributes:U({},a)})}return U({},o,((r={})[n.type]=U({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=U({},t);return Object.keys(e).forEach((function(t){var n;r=U({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)}(z(o,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=z(e,["children"]),n=U({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var ye=r(1597),be=function(e){var t,r,n,o=e.description,a=e.lang,i=e.meta,s=e.title,l=e.link,u=(0,ye.useStaticQuery)("2841359383").site,f=o||u.siteMetadata.description,p=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(he,{htmlAttributes:{lang:a},title:s,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:f},{property:"og:title",content:s},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=u.siteMetadata)||void 0===r||null===(n=r.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:f}].concat(i),link:[{rel:"me",href:'https://twitter.com/nawoto"'},{rel:"me",href:"https://github.com/nawoto/"},{rel:"me",href:"https://speakerdeck.com/nawoto"},{rel:"me",href:"https://www.instagram.com/nawoto/"},{rel:"me",href:"https://www.facebook.com/nishimura.nawoto"},{rel:"me",href:"https://www.amazon.co.jp/~/e/B00B46MLPG"}].concat(l)})};be.defaultProps={lang:"ja",meta:[],link:[],description:""};var ve=be},9134:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#383838","images":{"fallback":{"src":"/static/22a97b9e3e1b207907eaae69036df7fb/e9b55/profile-pic.png","srcSet":"/static/22a97b9e3e1b207907eaae69036df7fb/e9b55/profile-pic.png 100w,\\n/static/22a97b9e3e1b207907eaae69036df7fb/fa9a2/profile-pic.png 200w","sizes":"100px"},"sources":[{"srcSet":"/static/22a97b9e3e1b207907eaae69036df7fb/ee81f/profile-pic.avif 100w,\\n/static/22a97b9e3e1b207907eaae69036df7fb/3f23b/profile-pic.avif 200w","type":"image/avif","sizes":"100px"},{"srcSet":"/static/22a97b9e3e1b207907eaae69036df7fb/6a679/profile-pic.webp 100w,\\n/static/22a97b9e3e1b207907eaae69036df7fb/c0761/profile-pic.webp 200w","type":"image/webp","sizes":"100px"}]},"width":100,"height":100}')}}]);
//# sourceMappingURL=commons-f28a1b2f144ded8d54a9.js.map