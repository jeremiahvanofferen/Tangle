"use strict";(self.webpackChunktangle=self.webpackChunktangle||[]).push([[5186],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(v,i(i({ref:n},s),{},{components:t})):o.createElement(v,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9149:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),i=["components"],l={title:"ViewModels",sidebar_label:"ViewModels"},c=void 0,p={unversionedId:"viewModels/viewModels",id:"version-0.11.4/viewModels/viewModels",isDocsHomePage:!1,title:"ViewModels",description:"Once you've added Tangle as a dependency, implementing [ViewModel] injection is easy.",source:"@site/versioned_docs/version-0.11.4/viewModels/viewModels.md",sourceDirName:"viewModels",slug:"/viewModels/viewModels",permalink:"/Tangle/docs/0.11.4/viewModels/viewModels",editUrl:"https://github.com/RBusarow/Tangle/edit/main/website/versioned_docs/version-0.11.4/viewModels/viewModels.md",version:"0.11.4",frontMatter:{title:"ViewModels",sidebar_label:"ViewModels"},sidebar:"version-0.11.4/Docs",previous:{title:"Configuration",permalink:"/Tangle/docs/0.11.4/configuration"},next:{title:"SavedStateHandle Injection",permalink:"/Tangle/docs/0.11.4/viewModels/savedStateHandle"}},s=[{value:"1. Annotate your ViewModels",id:"1-annotate-your-viewmodels",children:[]},{value:"2. Tell Tangle about the AppComponent",id:"2-tell-tangle-about-the-appcomponent",children:[]},{value:"3. Use the <code>tangleViewModel</code> delegate",id:"3-use-the-tangleviewmodel-delegate",children:[]}],d={toc:s};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once you've added Tangle as a dependency, implementing ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/topic/libraries/architecture/viewmodel"},"ViewModel")," injection is easy."),(0,a.kt)("h3",{id:"1-annotate-your-viewmodels"},"1. Annotate your ViewModels"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ViewModel")," injection is done through the ",(0,a.kt)("inlineCode",{parentName:"p"},"@VMInject")," constructor annotation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyViewModel @VMInject constructor(\n  val myRepository: MyRepository\n) : ViewModel() {\n  // ...\n}\n")),(0,a.kt)("h3",{id:"2-tell-tangle-about-the-appcomponent"},"2. Tell Tangle about the AppComponent"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TangleGraph")," must be initialized as early as possible -- typically in ",(0,a.kt)("inlineCode",{parentName:"p"},"Application.onCreate()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyApplication : Application() {\n\n  override fun onCreate() {\n    super.onCreate()\n\n    val appComponent = DaggerMyAppComponent.factory()\n      .create(this)\n\n    TangleGraph.init(appComponent)\n  }\n}\n")),(0,a.kt)("h3",{id:"3-use-the-tangleviewmodel-delegate"},"3. Use the ",(0,a.kt)("inlineCode",{parentName:"h3"},"tangleViewModel")," delegate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyFragment : Fragment() {\n  val viewModel by tangleViewModel<MyViewModel>()\n\n  // ...\n}\n")))}u.isMDXComponent=!0}}]);