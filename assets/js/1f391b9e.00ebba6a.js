"use strict";(self.webpackChunktangle=self.webpackChunktangle||[]).push([[3085],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,p=f["".concat(o,".").concat(d)]||f[d]||m[d]||c;return t?r.createElement(p,l(l({ref:n},s),{},{components:t})):r.createElement(p,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=f;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<c;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6159:function(e,n,t){t.d(n,{N:function(){return f},Z:function(){return d}});var r=t(9756),a=t(2122),c=t(7294),l=t(6010),i=t(4973),o=t(3018),u="enhancedAnchor_2LWZ",s="h1Heading_27L5",m=["id"],f=function(e){var n=Object.assign({},e);return c.createElement("header",null,c.createElement("h1",(0,a.Z)({},n,{id:void 0,className:s}),n.children))},d=function(e){return"h1"===e?f:(n=e,function(e){var t,a=e.id,s=(0,r.Z)(e,m),f=(0,o.LU)().navbar.hideOnScroll;return a?c.createElement(n,s,c.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",(t={},t[u]=!f,t)),id:a}),s.children,c.createElement("a",{className:"hash-link",href:"#"+a,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):c.createElement(n,s)});var n}},2238:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(2122),a=t(7294),c=t(6742),l=t(1756),i=t(6159),o=t(6010),u=t(3018),s="details_1VDD";function m(e){var n=Object.assign({},e);return a.createElement(u.PO,(0,r.Z)({},n,{className:(0,o.Z)("alert alert--info",s,n.className)}))}var f={code:function(e){var n=e.children;return(0,a.isValidElement)(n)?n:n.includes("\n")?a.createElement(l.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(c.Z,e)},pre:function(e){var n,t=e.children;return(0,a.isValidElement)(null==t||null==(n=t.props)?void 0:n.children)?null==t?void 0:t.props.children:a.createElement(l.Z,(0,a.isValidElement)(t)?null==t?void 0:t.props:Object.assign({},e))},details:function(e){var n=a.Children.toArray(e.children),t=n.find((function(e){var n;return"summary"===(null==e||null==(n=e.props)?void 0:n.mdxType)})),c=a.createElement(a.Fragment,null,n.filter((function(e){return e!==t})));return a.createElement(m,(0,r.Z)({},e,{summary:t}),c)},h1:(0,i.Z)("h1"),h2:(0,i.Z)("h2"),h3:(0,i.Z)("h3"),h4:(0,i.Z)("h4"),h5:(0,i.Z)("h5"),h6:(0,i.Z)("h6")}},7979:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(7294),a=t(6010),c=t(2273),l=t(3905),i=t(2238),o=t(571),u=t(3018),s="mdxPageWrapper_3qD3";var m=function(e){var n=e.content,t=n.frontMatter,m=n.metadata,f=t.title,d=t.description,p=t.wrapperClassName,v=t.hide_table_of_contents,h=m.permalink;return r.createElement(c.Z,{title:f,description:d,permalink:h,wrapperClassName:null!=p?p:u.kM.wrapper.mdxPages,pageClassName:u.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",s)},r.createElement("div",{className:(0,a.Z)("col",!v&&"col--8")},r.createElement(l.Zo,{components:i.Z},r.createElement(n,null))),!v&&n.toc&&r.createElement("div",{className:"col col--2"},r.createElement(o.Z,{toc:n.toc})))))}},571:function(e,n,t){t.d(n,{r:function(){return o},Z:function(){return u}});var r=t(7294),a=t(6010);var c=function(e,n,t){var a=(0,r.useState)(void 0),c=a[0],l=a[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),n=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(n){if(n.getBoundingClientRect().top>=t){var r=e[e.indexOf(n)-1];return null!=r?r:n}return n}return e[e.length-1]}();if(r)for(var a=0,i=!1,o=document.getElementsByClassName(e);a<o.length&&!i;){var u=o[a],s=u.href,m=decodeURIComponent(s.substring(s.indexOf("#")+1));r.id===m&&(c&&c.classList.remove(n),u.classList.add(n),l(u),i=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},l="tableOfContents_35-E",i="table-of-contents__link";function o(e){var n=e.toc,t=e.isChild;return n.length?r.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},n.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:i,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children}))}))):null}var u=function(e){var n=e.toc;return c(i,"table-of-contents__link--active",100),r.createElement("div",{className:(0,a.Z)(l,"thin-scrollbar")},r.createElement(o,{toc:n}))}}}]);