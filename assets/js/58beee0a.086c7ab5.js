"use strict";(self.webpackChunktangle=self.webpackChunktangle||[]).push([[841],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7294),r=t(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,c=39;var m=function(e){var n=e.lazy,t=e.block,r=e.defaultValue,m=e.values,u=e.groupId,d=e.className,g=o(),f=g.tabGroupChoices,h=g.setTabGroupChoices,v=(0,a.useState)(r),y=v[0],k=v[1],b=a.Children.toArray(e.children),C=[];if(null!=u){var N=f[u];null!=N&&N!==y&&m.some((function(e){return e.value===N}))&&k(N)}var w=function(e){var n=e.currentTarget,t=C.indexOf(n),a=m[t].value;k(a),null!=u&&(h(u,a),setTimeout((function(){var e,t,a,r,o,i,l,p;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,p=i.innerWidth,t>=0&&o<=p&&r<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},F=function(e){var n,t;switch(e.keyCode){case c:var a=C.indexOf(e.target)+1;t=C[a]||C[0];break;case p:var r=C.indexOf(e.target)-1;t=C[r]||C[C.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},d)},m.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":y===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:F,onFocus:w,onClick:w},t)}))),n?(0,a.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},9443:function(e,n,t){var a=(0,t(7294).createContext)(void 0);n.Z=a},256:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return g}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),i=t(5064),l=t(8215),s=["components"],p={title:"Fragments",sidebar_label:"Fragments"},c=void 0,m={unversionedId:"fragments/fragments",id:"version-0.11.2/fragments/fragments",isDocsHomePage:!1,title:"Fragments",description:"Tangle performs Fragment injection using constructor injection, just like the rest of a",source:"@site/versioned_docs/version-0.11.2/fragments/fragments.mdx",sourceDirName:"fragments",slug:"/fragments/fragments",permalink:"/Tangle/docs/0.11.2/fragments/fragments",editUrl:"https://github.com/RBusarow/Tangle/edit/main/website/versioned_docs/version-0.11.2/fragments/fragments.mdx",version:"0.11.2",frontMatter:{title:"Fragments",sidebar_label:"Fragments"},sidebar:"version-0.11.2/Docs",previous:{title:"Compose",permalink:"/Tangle/docs/0.11.2/viewModels/compose"},next:{title:"Bundle Injection",permalink:"/Tangle/docs/0.11.2/fragments/bundles"}},u=[{value:"1. Set up Gradle",id:"1-set-up-gradle",children:[]},{value:"2. Use Anvil for the app-scoped Component",id:"2-use-anvil-for-the-app-scoped-component",children:[]},{value:"3. Set the custom FragmentFactory",id:"3-set-the-custom-fragmentfactory",children:[]},{value:"4. Contribute Fragments to the graph",id:"4-contribute-fragments-to-the-graph",children:[]},{value:"5. Create Fragments with the FragmentManager",id:"5-create-fragments-with-the-fragmentmanager",children:[]},{value:"Next step -- &quot;Assisted&quot; Bundle injection",id:"next-step----assisted-bundle-injection",children:[]}],d={toc:u};function g(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Tangle performs Fragment injection using ",(0,o.kt)("strong",{parentName:"p"},"constructor")," injection, just like the rest of a\ntypical Dagger/Anvil graph. There are several steps to configuration,\nwith two different paths at the end."),(0,o.kt)("h3",{id:"1-set-up-gradle"},"1. Set up Gradle"),(0,o.kt)(i.Z,{groupId:"language",defaultValue:"Anvil Plugin",values:[{label:"Anvil Plugin",value:"Anvil Plugin"},{label:"Kotlin dependencies block",value:"Kotlin dependencies block"},{label:"Groovy dependencies block",value:"Groovy dependencies block"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Anvil Plugin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// any Android module\'s build.gradle.kts\nplugins {\n  id("android-library") // or application, etc.\n  kotlin("android")\n  id("com.squareup.anvil")\n  id("com.rickbusarow.tangle")\n}\n\ntangle {\n  fragmentsEnabled.set(true) // default is true\n}\n'))),(0,o.kt)(l.Z,{value:"Kotlin dependencies block",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// any Android module\'s build.gradle.kts\nplugins {\n  id("android-library") // or application, etc.\n  kotlin("android")\n  id("com.squareup.anvil")\n}\n\ndependencies {\n  api("com.rickbusarow.tangle:tangle-fragment-api:0.11.0")\n  anvil("com.rickbusarow.tangle:tangle-fragment-compiler:0.11.0")\n}\n'))),(0,o.kt)(l.Z,{value:"Groovy dependencies block",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"// any Android module's build.gradle\nplugins {\n  id 'android-library' // or application, etc.\n  kotlin(\"android\")\n  id 'com.squareup.anvil'\n}\n\ndependencies {\n  api 'com.rickbusarow.tangle:tangle-fragment-api:0.11.0'\n  anvil 'com.rickbusarow.tangle:tangle-fragment-compiler:0.11.0'\n}\n")))),(0,o.kt)("h3",{id:"2-use-anvil-for-the-app-scoped-component"},"2. Use Anvil for the app-scoped Component"),(0,o.kt)("p",null,"Tangle uses the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/square/anvil#scopes"},"MergeComponent")," annotation from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/square/anvil"},"Anvil")," to identify the application's Component\nand add its own dependencies to the Dagger graph."),(0,o.kt)("p",null,"For anyone already using Anvil, there's probably nothing to be done here."),(0,o.kt)("p",null,"Anvil uses ",(0,o.kt)("inlineCode",{parentName:"p"},"KClass<T>")," references to define scopes.  A common pattern is to define an ",(0,o.kt)("inlineCode",{parentName:"p"},"AppScope"),"\nclass specifically for this purpose in a low-level shared (Gradle) module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"package myApp.core.anvil\n\nabstract class AppScope private constructor()\n")),(0,o.kt)("p",null,"Then at your application Component, use ",(0,o.kt)("inlineCode",{parentName:"p"},"MergeComponent")," with this scope:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"package myApp.app\n\nimport com.squareup.anvil.annotations.MergeComponent\nimport myApp.core.anvil.AppScope\n\n@MergeComponent(AppScope::class)\ninterface MyAppComponent\n")),(0,o.kt)("h3",{id:"3-set-the-custom-fragmentfactory"},"3. Set the custom FragmentFactory"),(0,o.kt)("p",null,"New Fragment instances are provided by ",(0,o.kt)("a",{parentName:"p",href:"https://rbusarow.github.io/Tangle/api/tangle-fragment-api/tangle.fragment/-tangle-fragment-factory"},"TangleFragmentFactory"),".  This custom factory\nis automatically added to any Dagger graph for any ",(0,o.kt)("inlineCode",{parentName:"p"},"@MergeComponent"),"-annotated Component."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If a requested Fragment is not contained within Tangle's bindings, ",(0,o.kt)("inlineCode",{parentName:"p"},"TangleFragmentFactory")," will\nfall back to using the default initialization with an empty constructor.  This means that large\nprojects can be migrated gradually."),(0,o.kt)("p",{parentName:"div"},"If a project was already doing Fragment constructor injection using vanilla Dagger, they were\nprobably already binding into a\n",(0,o.kt)("inlineCode",{parentName:"p"},"Map<Class<out Fragment>, Provider<@JvmSuppressWildcards Fragment>>"),". That is what Tangle uses,\nso existing multi-bound graphs will often support gradual migrations as well."))),(0,o.kt)("p",null,"Any ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/androidx/fragment/app/FragmentManager"},"FragmentManager")," used within the application will need to have its ",(0,o.kt)("inlineCode",{parentName:"p"},"fragmentFactory"),"\nproperty set to a ",(0,o.kt)("inlineCode",{parentName:"p"},"TangleFragmentFactory")," instance.  This means the\n",(0,o.kt)("inlineCode",{parentName:"p"},"AppCompatActivity.supportFragmentManager"),", and possibly ",(0,o.kt)("inlineCode",{parentName:"p"},"Fragment.childFragmentManager")," as well.\nThis is easiest if your application uses an abstract base class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"abstract class BaseActivity : AppCompatActivity() {\n\n  override fun onCreate(savedInstanceState: Bundle?) {\n    supportFragmentManager.fragmentFactory = Components.get<BaseActivityComponent>()\n                                              .tangleFragmentFactory\n    super.onCreate(savedInstanceState)\n  }\n}\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Click to see how ",(0,o.kt)("code",null,"Components")," works"),(0,o.kt)("p",null,"In a core module, define this singleton."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"package myApp.core.anvil\n\nobject Components {\n  @PublishedApi\n  internal val _components = mutableSetOf<Any>()\n\n  /** Set by Application class after creating app component */\n  fun add(component: Any) {\n    _components.add(component)\n  }\n\n  inline fun <reified T> get(): T = _components\n    .filterIsInstance<T>()\n    .single()\n}\n")),(0,o.kt)("p",null,"In your application, save off the AppComponent instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"package myApp.core.anvil\n\nclass MyApplication : Application() {\n\n  override fun onCreate() {\n    val component = DaggerMyAppComponent.factory()\n                      .create(/*...*/)\n\n    Components.add(component)\n\n    super.onCreate()\n  }\n}\n")),(0,o.kt)("p",null,'Anywhere you need to, create a "component" interface with whatever dependency properties you need,\nand annotate it with ',(0,o.kt)("inlineCode",{parentName:"p"},"@ContributesTo(<some scope definition>)"),".  Your AppComponent will\nautomatically implement this interface,\nwhich means that an implementation of it will be stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"Components"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"import com.squareup.anvil.annotations.ContributesTo\n\n@ContributesTo(AppScope::class)\ninterface BaseActivityComponent {\n  val tangleFragmentFactory: TangleFragmentFactory\n}\n")),(0,o.kt)("p",null,"Now, ",(0,o.kt)("inlineCode",{parentName:"p"},"Components.get<BaseActivityComponent>()")," will return ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAppComponent"),"\nsafely cast to ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseActivityComponent"),", and you can access its properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val fragmentFactory = Components.get<BaseActivityComponent>()\n                                .tangleFragmentFactory\n"))),(0,o.kt)("h3",{id:"4-contribute-fragments-to-the-graph"},"4. Contribute Fragments to the graph"),(0,o.kt)("p",null,"Finally, add the Fragments themselves.  For basic injection, the only difference\nfrom any other constructor-injected class is that you must add the ",(0,o.kt)("a",{parentName:"p",href:"https://rbusarow.github.io/Tangle/api/tangle-fragment-api/tangle.fragment/-contributes-fragment/index.html"},"ContributesFragment")," annotation.\nThis will ensure that the Fragment is included in the ",(0,o.kt)("a",{parentName:"p",href:"https://rbusarow.github.io/Tangle/api/tangle-fragment-api/tangle.fragment/-tangle-fragment-factory"},"TangleFragmentFactory"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"import tangle.fragment.ContributesFragment\n\n@ContributesFragment(AppScope::class)\nclass MyFragment @Inject constructor(\n  val myRepository: MyRepository\n) : Fragment() {\n  // ...\n}\n")),(0,o.kt)("h3",{id:"5-create-fragments-with-the-fragmentmanager"},"5. Create Fragments with the FragmentManager"),(0,o.kt)("p",null,"All the pieces are now in place, and your FragmentManagers are able to create Fragments with Dagger\ndependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyActivity: BaseActivity() {\n\n  override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n    supportFragmentManager.beginTransaction()\n      .add<MyFragment>(R.id.fragmentContainer)\n      .commit()\n  }\n}\n")),(0,o.kt)("h3",{id:"next-step----assisted-bundle-injection"},'Next step -- "Assisted" Bundle injection'),(0,o.kt)("p",null,"Tangle is able to generate type-safe factories for Bundle arguments, similar to ",(0,o.kt)("a",{parentName:"p",href:"https://dagger.dev/dev-guide/assisted-injection"},"AssistedInject"),".\nRead about this more in ",(0,o.kt)("a",{parentName:"p",href:"bundles"},"bundle injection"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@ContributesFragment(AppScope::class)\nclass MyFragment @FragmentInject constructor() : Fragment() {\n\n  val name by arg<String>("name")\n\n  @FragmentInjectFactory\n  interface Factory {\n    fun create(@TangleParam("name") name: String): MyFragment\n  }\n}\n')))}g.isMDXComponent=!0},6010:function(e,n,t){function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})}}]);