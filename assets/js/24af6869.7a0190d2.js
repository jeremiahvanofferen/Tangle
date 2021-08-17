"use strict";(self.webpackChunktangle=self.webpackChunktangle||[]).push([[5606],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7294),a=t(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6010),l="tabItem_1uMI",u="tabItemActive_2DSg";var c=37,s=39;var d=function(e){var n=e.lazy,t=e.block,a=e.defaultValue,d=e.values,p=e.groupId,f=e.className,m=o(),g=m.tabGroupChoices,v=m.setTabGroupChoices,b=(0,r.useState)(a),y=b[0],k=b[1],h=r.Children.toArray(e.children),O=[];if(null!=p){var w=g[p];null!=w&&w!==y&&d.some((function(e){return e.value===w}))&&k(w)}var N=function(e){var n=e.currentTarget,t=O.indexOf(n),r=d[t].value;k(r),null!=p&&(v(p,r),setTimeout((function(){var e,t,r,a,o,i,l,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,t>=0&&o<=c&&a<=l&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(u),setTimeout((function(){return n.classList.remove(u)}),2e3))}),150))},x=function(e){var n,t;switch(e.keyCode){case s:var r=O.indexOf(e.target)+1;t=O[r]||O[0];break;case c:var a=O.indexOf(e.target)-1;t=O[a]||O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},f)},d.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":y===n}),key:n,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:N,onClick:N},t)}))),n?(0,r.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},9443:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},7888:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=t(5064),l=t(8215),u=["components"],c={id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start",slug:"/"},s=void 0,d={unversionedId:"quickstart",id:"version-0.10.0/quickstart",isDocsHomePage:!1,title:"Quick Start",description:"Dependencies",source:"@site/versioned_docs/version-0.10.0/quickstart.mdx",sourceDirName:".",slug:"/",permalink:"/Tangle/docs/0.10.0/",editUrl:"https://github.com/RBusarow/Tangle/edit/main/website/versioned_docs/version-0.10.0/quickstart.mdx",version:"0.10.0",frontMatter:{id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start",slug:"/"},sidebar:"version-0.10.0/Docs",next:{title:"Configuration",permalink:"/Tangle/docs/0.10.0/configuration"}},p=[{value:"Dependencies",id:"dependencies",children:[]}],f={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)(i.Z,{groupId:"language",defaultValue:"Kotlin",values:[{label:"Kotlin",value:"Kotlin"},{label:"Groovy",value:"Groovy"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"// settings.gradle.kts\n\npluginManagement {\n  repositories {\n    gradlePluginPortal()\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// top-level build.gradle.kts\n\nplugins {\n  id("com.rickbusarow.tangle") version "0.10.0"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// any Android module\'s build.gradle.kts\n\nplugins {\n  id("android-library") // or application, etc.\n  kotlin("android")\n  id("com.squareup.anvil")\n  id("com.rickbusarow.tangle")\n}\n\n// optional\ntangle {\n  composeEnabled.set(true) // default is false\n}\n'))),(0,o.kt)(l.Z,{value:"Groovy",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"// settings.gradle\n\npluginManagement {\n  repositories {\n    gradlePluginPortal()\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'// top-level build.gradle\n\nplugins {\n  id "com.rickbusarow.module-check" version "0.10.0"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"// any Android module's build.gradle\n\nplugins {\n  id 'android-library' // or application, etc.\n  kotlin(\"android\")\n  id 'com.squareup.anvil'\n  id 'com.rickbusarow.tangle'\n}\n\n// optional\ntangle {\n  composeEnabled = true // default is false\n}\n")))))}m.isMDXComponent=!0},6010:function(e,n,t){function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);