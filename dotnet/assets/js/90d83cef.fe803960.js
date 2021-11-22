"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[368],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(7294),n=a(9443);var o=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,u=e.values,d=e.groupId,m=e.className,h=o(),k=h.tabGroupChoices,g=h.setTabGroupChoices,f=(0,r.useState)(n),N=f[0],w=f[1],v=r.Children.toArray(e.children),y=[];if(null!=d){var b=k[d];null!=b&&b!==N&&u.some((function(e){return e.value===b}))&&w(b)}var x=function(e){var t=e.currentTarget,a=y.indexOf(t),r=u[a].value;w(r),null!=d&&(g(d,r),setTimeout((function(){var e,a,r,n,o,l,i,p;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,o=e.right,l=window,i=l.innerHeight,p=l.innerWidth,a>=0&&o<=p&&n<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},A=function(e){var t,a;switch(e.keyCode){case c:var r=y.indexOf(e.target)+1;a=y[r]||y[0];break;case p:var n=y.indexOf(e.target)-1;a=y[n]||y[y.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":N===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:A,onFocus:x,onClick:x},a)}))),t?(0,r.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,a){var r=(0,a(7294).createContext)(void 0);t.Z=r},4519:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),l=(a(5064),a(8215),{id:"release-notes",title:"Release notes"}),i=void 0,s={unversionedId:"release-notes",id:"release-notes",isDocsHomePage:!1,title:"Release notes",description:"- Version 1.17",source:"@site/docs/release-notes.mdx",sourceDirName:".",slug:"/release-notes",permalink:"/dotnet/docs/next/release-notes",version:"current",frontMatter:{id:"release-notes",title:"Release notes"},sidebar:"docs",previous:{title:"Debugging tools",permalink:"/dotnet/docs/next/debug"},next:{title:"Test Runners",permalink:"/dotnet/docs/next/test-runners"}},p=[{value:"Version 1.17",id:"version-117",children:[{value:"Frame Locators",id:"frame-locators",children:[]},{value:"Trace Viewer Update",id:"trace-viewer-update",children:[]},{value:"HTML Report Update",id:"html-report-update",children:[]}]},{value:"Ubuntu ARM64 support + more",id:"ubuntu-arm64-support--more",children:[{value:"New APIs",id:"new-apis",children:[]}]},{value:"Version 1.16",id:"version-116",children:[{value:"\ud83c\udfad Playwright Library",id:"-playwright-library",children:[]},{value:"\ud83c\udfad Playwright Trace Viewer",id:"-playwright-trace-viewer",children:[]},{value:"Browser Versions",id:"browser-versions",children:[]}]},{value:"Version 1.15",id:"version-115",children:[{value:"\ud83d\uddb1\ufe0f Mouse Wheel",id:"\ufe0f-mouse-wheel",children:[]},{value:"\ud83d\udcdc New Headers API",id:"-new-headers-api",children:[]},{value:"\ud83c\udf08 Forced-Colors emulation",id:"-forced-colors-emulation",children:[]},{value:"New APIs",id:"new-apis-1",children:[]},{value:"Important \u26a0",id:"important-",children:[]},{value:"Browser Versions",id:"browser-versions-1",children:[]}]},{value:"Version 1.14",id:"version-114",children:[{value:"Browser Versions",id:"browser-versions-2",children:[]}]},{value:"Version 1.13",id:"version-113",children:[]},{value:"Version 1.12",id:"version-112",children:[]}],c={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#version-117"},"Version 1.17")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#ubuntu-arm64-support--more"},"Ubuntu ARM64 support + more")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#version-116"},"Version 1.16")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#version-115"},"Version 1.15")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#version-114"},"Version 1.14")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#version-113"},"Version 1.13")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#version-112"},"Version 1.12"))),(0,o.kt)("h2",{id:"version-117"},"Version 1.17"),(0,o.kt)("h3",{id:"frame-locators"},"Frame Locators"),(0,o.kt)("p",null,"Playwright 1.17 introduces ",(0,o.kt)("a",{parentName:"p",href:"./api/class-framelocator"},"frame locators")," - a locator to the iframe on the page. Frame locators capture the logic sufficient to retrieve the ",(0,o.kt)("inlineCode",{parentName:"p"},"iframe")," and then locate elements in that iframe. Frame locators are strict by default, will wait for ",(0,o.kt)("inlineCode",{parentName:"p"},"iframe")," to appear and can be used in Web-First assertions."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/746130/142082759-2170db38-370d-43ec-8d41-5f9941f57d83.png",alt:"Graphics"})),(0,o.kt)("p",null,"Frame locators can be created with either ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page#page-frame-locator"},"Page.FrameLocator(selector)")," or ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-locator#locator-frame-locator"},"Locator.FrameLocator(selector)")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var locator = page.FrameLocator("#my-frame").Locator("text=Submit");\nawait locator.ClickAsync();\n')),(0,o.kt)("p",null,"Read more at ",(0,o.kt)("a",{parentName:"p",href:"./api/class-framelocator"},"our documentation"),"."),(0,o.kt)("h3",{id:"trace-viewer-update"},"Trace Viewer Update"),(0,o.kt)("p",null,"Playwright Trace Viewer is now ",(0,o.kt)("strong",{parentName:"p"},"available online")," at ",(0,o.kt)("a",{parentName:"p",href:"https://trace.playwright.dev"},"https://trace.playwright.dev"),"! Just drag-and-drop your ",(0,o.kt)("inlineCode",{parentName:"p"},"trace.zip")," file to inspect its contents."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE"),": trace files are not uploaded anywhere; ",(0,o.kt)("a",{parentName:"p",href:"https://trace.playwright.dev"},"trace.playwright.dev")," is a ",(0,o.kt)("a",{parentName:"p",href:"https://web.dev/progressive-web-apps/"},"progressive web application")," that processes traces locally."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Playwright Test traces now include sources by default (these could be turned off with tracing option)"),(0,o.kt)("li",{parentName:"ul"},"Trace Viewer now shows test name"),(0,o.kt)("li",{parentName:"ul"},"New trace metadata tab with browser details"),(0,o.kt)("li",{parentName:"ul"},"Snapshots now have URL bar"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/746130/141877831-29e37cd1-e574-4bd9-aab5-b13a463bb4ae.png",alt:"image"})),(0,o.kt)("h3",{id:"html-report-update"},"HTML Report Update"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HTML report now supports dynamic filtering"),(0,o.kt)("li",{parentName:"ul"},"Report is now a ",(0,o.kt)("strong",{parentName:"li"},"single static HTML file")," that could be sent by e-mail or as a slack attachment.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/746130/141877402-e486643d-72c7-4db3-8844-ed2072c5d676.png",alt:"image"})),(0,o.kt)("h2",{id:"ubuntu-arm64-support--more"},"Ubuntu ARM64 support + more"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Playwright now supports ",(0,o.kt)("strong",{parentName:"p"},"Ubuntu 20.04 ARM64"),". You can now run Playwright tests inside Docker on Apple M1 and on Raspberry Pi.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can now use Playwright to install stable version of Edge on Linux:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright install msedge\n")))),(0,o.kt)("h3",{id:"new-apis"},"New APIs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tracing now supports a ",(0,o.kt)("a",{parentName:"li",href:"./api/class-tracing#tracing-start-option-title"},(0,o.kt)("inlineCode",{parentName:"a"},"'title'"))," option"),(0,o.kt)("li",{parentName:"ul"},"Page navigations support a new ",(0,o.kt)("a",{parentName:"li",href:"./api/class-page#page-goto"},(0,o.kt)("inlineCode",{parentName:"a"},"'commit'"))," waiting option")),(0,o.kt)("h2",{id:"version-116"},"Version 1.16"),(0,o.kt)("h3",{id:"-playwright-library"},"\ud83c\udfad Playwright Library"),(0,o.kt)("h4",{id:"locatorwaitforasync"},"Locator.WaitForAsync"),(0,o.kt)("p",null,"Wait for a locator to resolve to a single element with a given state. Defaults to the ",(0,o.kt)("inlineCode",{parentName:"p"},"state: 'visible'"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var orderSent = page.Locator("#order-sent");\norderSent.WaitForAsync();\n')),(0,o.kt)("p",null,"Read more about ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-locator#locator-wait-for"},"Locator.WaitForAsync(options)"),"."),(0,o.kt)("h3",{id:"-playwright-trace-viewer"},"\ud83c\udfad Playwright Trace Viewer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"run trace viewer with ",(0,o.kt)("inlineCode",{parentName:"li"},"npx playwright show-trace")," and drop trace files to the trace viewer PWA"),(0,o.kt)("li",{parentName:"ul"},"better visual attribution of action targets")),(0,o.kt)("p",null,"Read more about ",(0,o.kt)("a",{parentName:"p",href:"./trace-viewer"},"Trace Viewer"),"."),(0,o.kt)("h3",{id:"browser-versions"},"Browser Versions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chromium 97.0.4666.0"),(0,o.kt)("li",{parentName:"ul"},"Mozilla Firefox 93.0"),(0,o.kt)("li",{parentName:"ul"},"WebKit 15.4")),(0,o.kt)("p",null,"This version of Playwright was also tested against the following stable channels:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Google Chrome 94"),(0,o.kt)("li",{parentName:"ul"},"Microsoft Edge 94")),(0,o.kt)("h2",{id:"version-115"},"Version 1.15"),(0,o.kt)("h3",{id:"\ufe0f-mouse-wheel"},"\ud83d\uddb1\ufe0f Mouse Wheel"),(0,o.kt)("p",null,"By using ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/dotnet/docs/next/api/class-mouse#mouse-wheel"},(0,o.kt)("inlineCode",{parentName:"a"},"Page.Mouse.WheelAsync"))," you are now able to scroll vertically or horizontally."),(0,o.kt)("h3",{id:"-new-headers-api"},"\ud83d\udcdc New Headers API"),(0,o.kt)("p",null,"Previously it was not possible to get multiple header values of a response. This is now possible and additional helper functions are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-request#request-all-headers"},"Request.AllHeadersAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-request#request-headers-array"},"Request.HeadersArrayAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-request#request-header-value"},"Request.HeaderValueAsync(name: string)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-response#response-all-headers"},"Response.AllHeadersAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-response#response-headers-array"},"Response.HeadersArrayAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-response#response-header-value"},"Response.HeaderValueAsync(name: string)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-response/#response-header-values"},"Response.HeaderValuesAsync(name: string)"))),(0,o.kt)("h3",{id:"-forced-colors-emulation"},"\ud83c\udf08 Forced-Colors emulation"),(0,o.kt)("p",null,"Its now possible to emulate the ",(0,o.kt)("inlineCode",{parentName:"p"},"forced-colors")," CSS media feature by passing it in the ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/dotnet/docs/next/api/class-browser#browser-new-context-option-forced-colors"},"context options")," or calling ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/dotnet/docs/next/api/class-page#page-emulate-media"},"Page.EmulateMediaAsync()"),"."),(0,o.kt)("h3",{id:"new-apis-1"},"New APIs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-page#page-route"},"Page.RouteAsync()")," accepts new ",(0,o.kt)("inlineCode",{parentName:"li"},"times")," option to specify how many times this route should be matched."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-page#page-set-checked"},"Page.SetCheckedAsync(selector: string, checked: Boolean)")," and ",(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-locator#locator-set-checked"},"Locator.SetCheckedAsync(selector: string, checked: Boolean)")," was introduced to set the checked state of a checkbox."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-request#request-sizes"},"Request.SizesAsync()")," Returns resource size information for given http request."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-tracing#tracing-start-chunk"},"Tracing.StartChunkAsync()")," - Start a new trace chunk."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-tracing#tracing-stop-chunk"},"Tracing.StopChunkAsync()")," - Stops a new trace chunk.")),(0,o.kt)("h3",{id:"important-"},"Important \u26a0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2b06 .NET Core Apps 2.1 are ",(0,o.kt)("strong",{parentName:"li"},"no longer")," supported for our CLI tooling. As of August 31st, 2021, .NET Core 2.1 is no ",(0,o.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/dotnet/net-core-2-1-will-reach-end-of-support-on-august-21-2021/"},"longer supported")," and will not receive any security updates. We've decided to move the CLI forward and require .NET Core 3.1 as a minimum. ")),(0,o.kt)("h3",{id:"browser-versions-1"},"Browser Versions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chromium 96.0.4641.0"),(0,o.kt)("li",{parentName:"ul"},"Mozilla Firefox 92.0"),(0,o.kt)("li",{parentName:"ul"},"WebKit 15.0")),(0,o.kt)("h2",{id:"version-114"},"Version 1.14"),(0,o.kt)("h4",{id:"\ufe0f-new-strict-mode"},'\u26a1\ufe0f New "strict" mode'),(0,o.kt)("p",null,"Selector ambiguity is a common problem in automation testing. ",(0,o.kt)("strong",{parentName:"p"},'"strict" mode')," ensures that your selector points to a single element and throws otherwise."),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"setStrict(true)")," in your action calls to opt in."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// This will throw if you have more than one button!\nawait page.ClickAsync("button", new Page.ClickOptions().setStrict(true));\n')),(0,o.kt)("h4",{id:"-new-locators-api"},"\ud83d\udccd New ",(0,o.kt)("a",{parentName:"h4",href:"./api/class-locator"},(0,o.kt)("strong",{parentName:"a"},"Locators API"))),(0,o.kt)("p",null,"Locator represents a view to the element(s) on the page. It captures the logic sufficient to retrieve the element at any given moment."),(0,o.kt)("p",null,"The difference between the ",(0,o.kt)("a",{parentName:"p",href:"./api/class-locator"},"Locator")," and ",(0,o.kt)("a",{parentName:"p",href:"./api/class-elementhandle"},"ElementHandle")," is that the latter points to a particular element, while ",(0,o.kt)("a",{parentName:"p",href:"./api/class-locator"},"Locator")," captures the logic of how to retrieve that element."),(0,o.kt)("p",null,"Also, locators are ",(0,o.kt)("strong",{parentName:"p"},'"strict" by default'),"!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var locator = page.Locator("button");\nawait locator.ClickAsync();\n')),(0,o.kt)("p",null,"Learn more in the ",(0,o.kt)("a",{parentName:"p",href:"./api/class-locator"},"documentation"),"."),(0,o.kt)("h4",{id:"\ud83e\udde9-experimental-react-and-vue-selector-engines"},"\ud83e\udde9 Experimental ",(0,o.kt)("a",{parentName:"h4",href:"./selectors#react-selectors"},(0,o.kt)("strong",{parentName:"a"},"React"))," and ",(0,o.kt)("a",{parentName:"h4",href:"./selectors#vue-selectors"},(0,o.kt)("strong",{parentName:"a"},"Vue"))," selector engines"),(0,o.kt)("p",null,"React and Vue selectors allow selecting elements by its component name and/or property values. The syntax is very similar to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"},"attribute selectors")," and supports all attribute selector operators."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.ClickAsync("_react=SubmitButton[enabled=true]");\nawait page.ClickAsync("_vue=submit-button[enabled=true]");\n')),(0,o.kt)("p",null,"Learn more in the ",(0,o.kt)("a",{parentName:"p",href:"./selectors#react-selectors"},"react selectors documentation")," and the ",(0,o.kt)("a",{parentName:"p",href:"./selectors#vue-selectors"},"vue selectors documentation"),"."),(0,o.kt)("h4",{id:"-new-nth-and-visible-selector-engines"},"\u2728 New ",(0,o.kt)("a",{parentName:"h4",href:"./selectors#n-th-element-selector"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"nth")))," and ",(0,o.kt)("a",{parentName:"h4",href:"./selectors#selecting-visible-elements"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"visible")))," selector engines"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./selectors#n-th-element-selector"},(0,o.kt)("inlineCode",{parentName:"a"},"nth"))," selector engine is equivalent to the ",(0,o.kt)("inlineCode",{parentName:"li"},":nth-match")," pseudo class, but could be combined with other selector engines."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./selectors#selecting-visible-elements"},(0,o.kt)("inlineCode",{parentName:"a"},"visible"))," selector engine is equivalent to the ",(0,o.kt)("inlineCode",{parentName:"li"},":visible")," pseudo class, but could be combined with other selector engines.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// select the first button among all buttons\nawait button.ClickAsync("button >> nth=0");\n// or if you are using locators, you can use First, Nth() and Last\nawait page.Locator("button").First.ClickAsync();\n\n// click a visible button\nawait button.ClickAsync("button >> visible=true");\n')),(0,o.kt)("h3",{id:"browser-versions-2"},"Browser Versions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chromium 94.0.4595.0"),(0,o.kt)("li",{parentName:"ul"},"Mozilla Firefox 91.0"),(0,o.kt)("li",{parentName:"ul"},"WebKit 15.0")),(0,o.kt)("h2",{id:"version-113"},"Version 1.13"),(0,o.kt)("h4",{id:"playwright"},"Playwright"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\ud83d\udd96 Programmatic drag-and-drop support")," via the ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-drag-and-drop"},"Page.DragAndDropAsync(source, target, options)")," API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\ud83d\udd0e Enhanced HAR")," with body sizes for requests and responses. Use via ",(0,o.kt)("inlineCode",{parentName:"li"},"recordHar")," option in ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)"),".")),(0,o.kt)("h4",{id:"tools"},"Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Playwright Trace Viewer now shows parameters, returned values and ",(0,o.kt)("inlineCode",{parentName:"li"},"console.log()")," calls.")),(0,o.kt)("h4",{id:"new-and-overhauled-guides"},"New and Overhauled Guides"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/intro"},"Intro")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/auth"},"Authentication"))),(0,o.kt)("h4",{id:"browser-versions-3"},"Browser Versions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chromium 93.0.4576.0"),(0,o.kt)("li",{parentName:"ul"},"Mozilla Firefox 90.0"),(0,o.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,o.kt)("h4",{id:"new-playwright-apis"},"New Playwright APIs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"new ",(0,o.kt)("inlineCode",{parentName:"li"},"baseURL")," option in ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")," and ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-browser#browser-new-page"},"Browser.NewPageAsync(options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-response#response-security-details"},"Response.SecurityDetailsAsync()")," and ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-response#response-server-addr"},"Response.ServerAddrAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-drag-and-drop"},"Page.DragAndDropAsync(source, target, options)")," and ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-frame#frame-drag-and-drop"},"Frame.DragAndDropAsync(source, target, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-download#download-cancel"},"Download.CancelAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-input-value"},"Page.InputValueAsync(selector, options)"),", ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-frame#frame-input-value"},"Frame.InputValueAsync(selector, options)")," and ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-input-value"},"ElementHandle.InputValueAsync(options)")),(0,o.kt)("li",{parentName:"ul"},"new ",(0,o.kt)("inlineCode",{parentName:"li"},"force")," option in ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-fill"},"Page.FillAsync(selector, value, options)"),", ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-frame#frame-fill"},"Frame.FillAsync(selector, value, options)"),", and ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-fill"},"ElementHandle.FillAsync(value, options)")),(0,o.kt)("li",{parentName:"ul"},"new ",(0,o.kt)("inlineCode",{parentName:"li"},"force")," option in ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-select-option"},"Page.SelectOptionAsync(selector, values, options)"),", ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-frame#frame-select-option"},"Frame.SelectOptionAsync(selector, values, options)"),", and ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-select-option"},"ElementHandle.SelectOptionAsync(values, options)"))),(0,o.kt)("h2",{id:"version-112"},"Version 1.12"),(0,o.kt)("h4",{id:"highlights"},"Highlights"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Playwright for .NET v1.12 is now stable!"),(0,o.kt)("li",{parentName:"ul"},"Ships with the ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/cli#generate-code"},"codegen")," and ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/trace-viewer"},"trace viewer")," tools out-of-the-box")),(0,o.kt)("h4",{id:"browser-versions-4"},"Browser Versions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chromium 93.0.4530.0"),(0,o.kt)("li",{parentName:"ul"},"Mozilla Firefox 89.0"),(0,o.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,o.kt)("p",null,"This version of Playwright was also tested against the following stable channels:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Google Chrome 91"),(0,o.kt)("li",{parentName:"ul"},"Microsoft Edge 91")))}u.isMDXComponent=!0},6010:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);