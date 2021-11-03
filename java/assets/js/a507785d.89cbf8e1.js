"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5737],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(9443);var i=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,u=e.values,m=e.groupId,d=e.className,h=i(),k=h.tabGroupChoices,g=h.setTabGroupChoices,N=(0,n.useState)(r),f=N[0],w=N[1],v=n.Children.toArray(e.children),b=[];if(null!=m){var y=k[m];null!=y&&y!==f&&u.some((function(e){return e.value===y}))&&w(y)}var j=function(e){var t=e.currentTarget,a=b.indexOf(t),n=u[a].value;w(n),null!=m&&(g(m,n),setTimeout((function(){var e,a,n,r,i,l,o,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,p=l.innerWidth,a>=0&&i<=p&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},P=function(e){var t,a;switch(e.keyCode){case c:var n=b.indexOf(e.target)+1;a=b[n]||b[0];break;case p:var r=b.indexOf(e.target)-1;a=b[r]||b[b.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":f===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:P,onFocus:j,onClick:j},a)}))),t?(0,n.cloneElement)(v.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},9349:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=(a(5064),a(8215),{id:"release-notes",title:"Release notes"}),o=void 0,s={unversionedId:"release-notes",id:"version-1.14/release-notes",isDocsHomePage:!1,title:"Release notes",description:"- Version 1.14",source:"@site/versioned_docs/version-1.14/release-notes.mdx",sourceDirName:".",slug:"/release-notes",permalink:"/java/docs/1.14/release-notes",version:"1.14",frontMatter:{id:"release-notes",title:"Release notes"},sidebar:"version-1.14/docs",previous:{title:"Supported languages",permalink:"/java/docs/1.14/languages"},next:{title:"Test Runners",permalink:"/java/docs/1.14/test-runners"}},p=[{value:"Version 1.14",id:"version-114",children:[{value:"Browser Versions",id:"browser-versions",children:[]}]},{value:"Version 1.13",id:"version-113",children:[]},{value:"Version 1.12",id:"version-112",children:[]},{value:"Version 1.11",id:"version-111",children:[]},{value:"Version 1.10",id:"version-110",children:[]},{value:"Version 1.9",id:"version-19",children:[]},{value:"Version 1.8",id:"version-18",children:[]},{value:"Version 1.7",id:"version-17",children:[]}],c={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-114"},"Version 1.14")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-113"},"Version 1.13")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-112"},"Version 1.12")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-111"},"Version 1.11")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-110"},"Version 1.10")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-19"},"Version 1.9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-18"},"Version 1.8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-17"},"Version 1.7"))),(0,i.kt)("h2",{id:"version-114"},"Version 1.14"),(0,i.kt)("h4",{id:"\ufe0f-new-strict-mode"},'\u26a1\ufe0f New "strict" mode'),(0,i.kt)("p",null,"Selector ambiguity is a common problem in automation testing. ",(0,i.kt)("strong",{parentName:"p"},'"strict" mode')," ensures that your selector points to a single element and throws otherwise."),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"setStrict(true)")," in your action calls to opt in."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// This will throw if you have more than one button!\npage.click("button", new Page.ClickOptions().setStrict(true));\n')),(0,i.kt)("h4",{id:"-new-locators-api"},"\ud83d\udccd New ",(0,i.kt)("a",{parentName:"h4",href:"./api/class-locator"},(0,i.kt)("strong",{parentName:"a"},"Locators API"))),(0,i.kt)("p",null,"Locator represents a view to the element(s) on the page. It captures the logic sufficient to retrieve the element at any given moment."),(0,i.kt)("p",null,"The difference between the ",(0,i.kt)("a",{parentName:"p",href:"./api/class-locator"},"Locator")," and ",(0,i.kt)("a",{parentName:"p",href:"./api/class-elementhandle"},"ElementHandle")," is that the latter points to a particular element, while ",(0,i.kt)("a",{parentName:"p",href:"./api/class-locator"},"Locator")," captures the logic of how to retrieve that element."),(0,i.kt)("p",null,"Also, locators are ",(0,i.kt)("strong",{parentName:"p"},'"strict" by default'),"!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Locator locator = page.locator("button");\nlocator.click();\n')),(0,i.kt)("p",null,"Learn more in the ",(0,i.kt)("a",{parentName:"p",href:"./api/class-locator"},"documentation"),"."),(0,i.kt)("h4",{id:"\ud83e\udde9-experimental-react-and-vue-selector-engines"},"\ud83e\udde9 Experimental ",(0,i.kt)("a",{parentName:"h4",href:"./selectors#react-selectors"},(0,i.kt)("strong",{parentName:"a"},"React"))," and ",(0,i.kt)("a",{parentName:"h4",href:"./selectors#vue-selectors"},(0,i.kt)("strong",{parentName:"a"},"Vue"))," selector engines"),(0,i.kt)("p",null,"React and Vue selectors allow selecting elements by its component name and/or property values. The syntax is very similar to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"},"attribute selectors")," and supports all attribute selector operators."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'page.click("_react=SubmitButton[enabled=true]");\npage.click("_vue=submit-button[enabled=true]");\n')),(0,i.kt)("p",null,"Learn more in the ",(0,i.kt)("a",{parentName:"p",href:"./selectors#react-selectors"},"react selectors documentation")," and the ",(0,i.kt)("a",{parentName:"p",href:"./selectors#vue-selectors"},"vue selectors documentation"),"."),(0,i.kt)("h4",{id:"-new-nth-and-visible-selector-engines"},"\u2728 New ",(0,i.kt)("a",{parentName:"h4",href:"./selectors#n-th-element-selector"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"nth")))," and ",(0,i.kt)("a",{parentName:"h4",href:"./selectors#selecting-visible-elements"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"visible")))," selector engines"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./selectors#n-th-element-selector"},(0,i.kt)("inlineCode",{parentName:"a"},"nth"))," selector engine is equivalent to the ",(0,i.kt)("inlineCode",{parentName:"li"},":nth-match")," pseudo class, but could be combined with other selector engines."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./selectors#selecting-visible-elements"},(0,i.kt)("inlineCode",{parentName:"a"},"visible"))," selector engine is equivalent to the ",(0,i.kt)("inlineCode",{parentName:"li"},":visible")," pseudo class, but could be combined with other selector engines.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// select the first button among all buttons\nbutton.click("button >> nth=0");\n// or if you are using locators, you can use first(), nth() and last()\npage.locator("button").first().click();\n\n// click a visible button\nbutton.click("button >> visible=true");\n')),(0,i.kt)("h3",{id:"browser-versions"},"Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 94.0.4595.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 91.0"),(0,i.kt)("li",{parentName:"ul"},"WebKit 15.0")),(0,i.kt)("h2",{id:"version-113"},"Version 1.13"),(0,i.kt)("h4",{id:"playwright"},"Playwright"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\ud83d\udd96 Programmatic drag-and-drop support")," via the ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-drag-and-drop"},"Page.dragAndDrop(source, target[, options])")," API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\ud83d\udd0e Enhanced HAR")," with body sizes for requests and responses. Use via ",(0,i.kt)("inlineCode",{parentName:"li"},"recordHar")," option in ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browser#browser-new-context"},"Browser.newContext([options])"),".")),(0,i.kt)("h4",{id:"tools"},"Tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Playwright Trace Viewer now shows parameters, returned values and ",(0,i.kt)("inlineCode",{parentName:"li"},"console.log()")," calls.")),(0,i.kt)("h4",{id:"new-and-overhauled-guides"},"New and Overhauled Guides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/intro"},"Intro")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/auth"},"Authentication"))),(0,i.kt)("h4",{id:"browser-versions-1"},"Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 93.0.4576.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 90.0"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,i.kt)("h4",{id:"new-playwright-apis"},"New Playwright APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"new ",(0,i.kt)("inlineCode",{parentName:"li"},"baseURL")," option in ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browser#browser-new-context"},"Browser.newContext([options])")," and ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browser#browser-new-page"},"Browser.newPage([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-response#response-security-details"},"Response.securityDetails()")," and ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-response#response-server-addr"},"Response.serverAddr()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-drag-and-drop"},"Page.dragAndDrop(source, target[, options])")," and ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-frame#frame-drag-and-drop"},"Frame.dragAndDrop(source, target[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-download#download-cancel"},"Download.cancel()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-input-value"},"Page.inputValue(selector[, options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-frame#frame-input-value"},"Frame.inputValue(selector[, options])")," and ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-elementhandle#element-handle-input-value"},"ElementHandle.inputValue([options])")),(0,i.kt)("li",{parentName:"ul"},"new ",(0,i.kt)("inlineCode",{parentName:"li"},"force")," option in ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-fill"},"Page.fill(selector, value[, options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-frame#frame-fill"},"Frame.fill(selector, value[, options])"),", and ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-elementhandle#element-handle-fill"},"ElementHandle.fill(value[, options])")),(0,i.kt)("li",{parentName:"ul"},"new ",(0,i.kt)("inlineCode",{parentName:"li"},"force")," option in ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-select-option"},"Page.selectOption(selector, values[, options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-frame#frame-select-option"},"Frame.selectOption(selector, values[, options])"),", and ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-elementhandle#element-handle-select-option"},"ElementHandle.selectOption(values[, options])"))),(0,i.kt)("h2",{id:"version-112"},"Version 1.12"),(0,i.kt)("h4",{id:"\ud83e\udddf\u2642\ufe0f-introducing-playwright-trace-viewer"},"\ud83e\udddf\u200d\u2642\ufe0f Introducing Playwright Trace Viewer"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.14/trace-viewer"},"Playwright Trace Viewer")," is a new GUI tool that helps exploring recorded Playwright traces after the script ran. Playwright traces let you examine:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"page DOM before and after each Playwright action"),(0,i.kt)("li",{parentName:"ul"},"page rendering before and after each Playwright action"),(0,i.kt)("li",{parentName:"ul"},"browser network during script execution")),(0,i.kt)("p",null,"Traces are recorded using the new ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.14/api/class-browsercontext#browser-context-tracing"},"BrowserContext.tracing()")," API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Browser browser = chromium.launch();\nBrowserContext context = browser.newContext();\n\n// Start tracing before creating / navigating a page.\ncontext.tracing.start(new Tracing.StartOptions()\n  .setScreenshots(true)\n  .setSnapshots(true);\n\nPage page = context.newPage();\npage.goto("https://playwright.dev");\n\n// Stop tracing and export it into a zip archive.\ncontext.tracing.stop(new Tracing.StopOptions()\n  .setPath(Paths.get("trace.zip")));\n')),(0,i.kt)("p",null,"Traces are examined later with the Playwright CLI:"),(0,i.kt)("p",null,"That will open the following GUI:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/746130/121109654-d66c4480-c7c0-11eb-8d4d-eb70d2b03811.png",alt:"image"})),(0,i.kt)("p",null,"\ud83d\udc49 Read more in ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.14/trace-viewer"},"trace viewer documentation"),"."),(0,i.kt)("h4",{id:"browser-versions-2"},"Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 93.0.4530.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 89.0"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,i.kt)("p",null,"This version of Playwright was also tested against the following stable channels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Google Chrome 91"),(0,i.kt)("li",{parentName:"ul"},"Microsoft Edge 91")),(0,i.kt)("h4",{id:"new-apis"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reducedMotion")," option in ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-emulate-media"},"Page.emulateMedia([options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browsertype#browser-type-launch-persistent-context"},"BrowserType.launchPersistentContext(userDataDir[, options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browser#browser-new-context"},"Browser.newContext([options])")," and ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browser#browser-new-page"},"Browser.newPage([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browsercontext#browser-context-event-request"},"BrowserContext.onRequest(handler)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browsercontext#browser-context-event-request-failed"},"BrowserContext.onRequestFailed(handler)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browsercontext#browser-context-event-request-finished"},"BrowserContext.onRequestFinished(handler)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browsercontext#browser-context-event-response"},"BrowserContext.onResponse(handler)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tracesDir")," option in ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browsertype#browser-type-launch"},"BrowserType.launch([options])")," and ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browsertype#browser-type-launch-persistent-context"},"BrowserType.launchPersistentContext(userDataDir[, options])")),(0,i.kt)("li",{parentName:"ul"},"new ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browsercontext#browser-context-tracing"},"BrowserContext.tracing()")," API namespace"),(0,i.kt)("li",{parentName:"ul"},"new ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-download#download-page"},"Download.page()")," method")),(0,i.kt)("h2",{id:"version-111"},"Version 1.11"),(0,i.kt)("p",null,"\ud83c\udfa5  New video: ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/_Jla6DyuEu4"},"Playwright: A New Test Automation Framework for the Modern Web")," (",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1xFhZIJrdHkVe2CuMKOrni92HoG2SWslo0DhJJQMR1DI/edit?usp=sharing"},"slides"),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We talked about Playwright"),(0,i.kt)("li",{parentName:"ul"},"Showed engineering work behind the scenes"),(0,i.kt)("li",{parentName:"ul"},"Did live demos with new features \u2728"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Special thanks")," to ",(0,i.kt)("a",{parentName:"li",href:"http://applitools.com/"},"applitools")," for hosting the event and inviting us!")),(0,i.kt)("h4",{id:"browser-versions-3"},"Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 92.0.4498.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 89.0b6"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,i.kt)("h4",{id:"new-apis-1"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"support for ",(0,i.kt)("strong",{parentName:"li"},"async predicates")," across the API in methods such as ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-wait-for-request"},"Page.waitForRequest(urlOrPredicate[, options], callback)")," and others"),(0,i.kt)("li",{parentName:"ul"},"new ",(0,i.kt)("strong",{parentName:"li"},"emulation devices"),": Galaxy S8, Galaxy S9+, Galaxy Tab S4, Pixel 3, Pixel 4"),(0,i.kt)("li",{parentName:"ul"},"new methods:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-wait-for-url"},"Page.waitForURL(url[, options])")," to await navigations to URL"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-video#video-delete"},"Video.delete()")," and ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-video#video-save-as"},"Video.saveAs(path)")," to manage screen recording"))),(0,i.kt)("li",{parentName:"ul"},"new options:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screen")," option in the ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browser#browser-new-context"},"Browser.newContext([options])")," method to emulate ",(0,i.kt)("inlineCode",{parentName:"li"},"window.screen")," dimensions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"position")," option in ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-check"},"Page.check(selector[, options])")," and ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-uncheck"},"Page.uncheck(selector[, options])")," methods"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trial")," option to dry-run actions in ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-check"},"Page.check(selector[, options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-uncheck"},"Page.uncheck(selector[, options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-click"},"Page.click(selector[, options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-dblclick"},"Page.dblclick(selector[, options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-hover"},"Page.hover(selector[, options])")," and ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-tap"},"Page.tap(selector[, options])"))))),(0,i.kt)("h2",{id:"version-110"},"Version 1.10"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-java"},"Playwright for Java v1.10")," is ",(0,i.kt)("strong",{parentName:"li"},"now stable"),"!"),(0,i.kt)("li",{parentName:"ul"},"Run Playwright against ",(0,i.kt)("strong",{parentName:"li"},"Google Chrome")," and ",(0,i.kt)("strong",{parentName:"li"},"Microsoft Edge")," stable channels with the ",(0,i.kt)("a",{parentName:"li",href:"./browsers"},"new channels API"),"."),(0,i.kt)("li",{parentName:"ul"},"Chromium screenshots are ",(0,i.kt)("strong",{parentName:"li"},"fast")," on Mac & Windows.")),(0,i.kt)("h4",{id:"bundled-browser-versions"},"Bundled Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 90.0.4430.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 87.0b10"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,i.kt)("p",null,"This version of Playwright was also tested against the following stable channels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Google Chrome 89"),(0,i.kt)("li",{parentName:"ul"},"Microsoft Edge 89")),(0,i.kt)("h4",{id:"new-apis-2"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./api/class-browsertype#browsertypelaunchoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"browserType.launch()"))," now accepts the new ",(0,i.kt)("inlineCode",{parentName:"li"},"'channel'")," option. Read more in ",(0,i.kt)("a",{parentName:"li",href:"./browsers"},"our documentation"),".")),(0,i.kt)("h2",{id:"version-19"},"Version 1.9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/inspector"},"Playwright Inspector")," is a ",(0,i.kt)("strong",{parentName:"li"},"new GUI tool")," to author and debug your tests.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Line-by-line debugging")," of your Playwright scripts, with play, pause and step-through."),(0,i.kt)("li",{parentName:"ul"},"Author new scripts by ",(0,i.kt)("strong",{parentName:"li"},"recording user actions"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Generate element selectors")," for your script by hovering over elements."),(0,i.kt)("li",{parentName:"ul"},"Set the ",(0,i.kt)("inlineCode",{parentName:"li"},"PWDEBUG=1")," environment variable to launch the Inspector"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pause script execution")," with ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-pause"},"Page.pause()")," in headed mode. Pausing the page launches ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/inspector"},"Playwright Inspector")," for debugging."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New has-text pseudo-class")," for CSS selectors. ",(0,i.kt)("inlineCode",{parentName:"li"},':has-text("example")')," matches any element containing ",(0,i.kt)("inlineCode",{parentName:"li"},'"example"')," somewhere inside, possibly in a child or a descendant element. See ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/selectors#text-selector"},"more examples"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Page dialogs are now auto-dismissed")," during execution, unless a listener for ",(0,i.kt)("inlineCode",{parentName:"li"},"dialog")," event is configured. ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/dialogs"},"Learn more")," about this."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-python"},"Playwright for Python")," is ",(0,i.kt)("strong",{parentName:"li"},"now stable")," with an idiomatic snake case API and pre-built ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/docker"},"Docker image")," to run tests in CI/CD.")),(0,i.kt)("h4",{id:"browser-versions-4"},"Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 90.0.4421.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 86.0b10"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.1")),(0,i.kt)("h4",{id:"new-apis-3"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-pause"},"Page.pause()"),".")),(0,i.kt)("h2",{id:"version-18"},"Version 1.8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/selectors#selecting-elements-based-on-layout"},"Selecting elements based on layout")," with ",(0,i.kt)("inlineCode",{parentName:"li"},":left-of()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},":right-of()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},":above()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},":below()"),"."),(0,i.kt)("li",{parentName:"ul"},"Playwright now includes ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/cli"},"command line interface"),", former playwright-cli."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-select-option"},"Page.selectOption(selector, values[, options])")," now waits for the options to be present."),(0,i.kt)("li",{parentName:"ul"},"New methods to ",(0,i.kt)("a",{parentName:"li",href:"./actionability#assertions"},"assert element state")," like ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-is-editable"},"Page.isEditable(selector[, options])"),".")),(0,i.kt)("h4",{id:"new-apis-4"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-elementhandle#element-handle-is-checked"},"ElementHandle.isChecked()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-elementhandle#element-handle-is-disabled"},"ElementHandle.isDisabled()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-elementhandle#element-handle-is-editable"},"ElementHandle.isEditable()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-elementhandle#element-handle-is-enabled"},"ElementHandle.isEnabled()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-elementhandle#element-handle-is-hidden"},"ElementHandle.isHidden()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-elementhandle#element-handle-is-visible"},"ElementHandle.isVisible()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-is-checked"},"Page.isChecked(selector[, options])"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-is-disabled"},"Page.isDisabled(selector[, options])"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-is-editable"},"Page.isEditable(selector[, options])"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-is-enabled"},"Page.isEnabled(selector[, options])"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-is-hidden"},"Page.isHidden(selector[, options])"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-page#page-is-visible"},"Page.isVisible(selector[, options])"),"."),(0,i.kt)("li",{parentName:"ul"},"New option ",(0,i.kt)("inlineCode",{parentName:"li"},"'editable'")," in ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-elementhandle#element-handle-wait-for-element-state"},"ElementHandle.waitForElementState(state[, options])"),".")),(0,i.kt)("h4",{id:"browser-versions-5"},"Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 90.0.4392.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 85.0b5"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.1")),(0,i.kt)("h2",{id:"version-17"},"Version 1.7"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New Java SDK"),": ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-java"},"Playwright for Java")," is now on par with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright"},"JavaScript"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-python"},"Python")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-dotnet"},".NET bindings"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Browser storage API"),": New convenience APIs to save and load browser storage state (cookies, local storage) to simplify automation scenarios with authentication."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New CSS selectors"),": We heard your feedback for more flexible selectors and have revamped the selectors implementation. Playwright 1.7 introduces ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/selectors"},"new CSS extensions")," and there's more coming soon."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New website"),": The docs website at ",(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/"},"playwright.dev")," has been updated and is now built with ",(0,i.kt)("a",{parentName:"li",href:"https://v2.docusaurus.io/"},"Docusaurus"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Support for Apple Silicon"),": Playwright browser binaries for WebKit and Chromium are now built for Apple Silicon.")),(0,i.kt)("h4",{id:"new-apis-5"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browsercontext#browser-context-storage-state"},"BrowserContext.storageState([options])")," to get current state for later reuse."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storageState")," option in ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browser#browser-new-context"},"Browser.newContext([options])")," and ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browser#browser-new-page"},"Browser.newPage([options])")," to setup browser context state.")),(0,i.kt)("h4",{id:"browser-versions-6"},"Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 89.0.4344.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 84.0b9"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.1")))}u.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);