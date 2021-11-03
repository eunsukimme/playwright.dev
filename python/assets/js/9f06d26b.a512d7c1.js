"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7544],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return g}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),l=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},p=function(t){var e=l(t.components);return n.createElement(o.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(a),g=r,d=u["".concat(o,".").concat(g)]||u[g]||h[g]||i;return a?n.createElement(d,c(c({ref:e},p),{},{components:a})):n.createElement(d,c({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,c=new Array(i);c[0]=u;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,c[1]=s;for(var l=2;l<i;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8215:function(t,e,a){var n=a(7294);e.Z=function(t){var e=t.children,a=t.hidden,r=t.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},e)}},5064:function(t,e,a){a.d(e,{Z:function(){return h}});var n=a(7294),r=a(9443);var i=function(){var t=(0,n.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},c=a(6010),s="tabItem_1uMI",o="tabItemActive_2DSg";var l=37,p=39;var h=function(t){var e=t.lazy,a=t.block,r=t.defaultValue,h=t.values,u=t.groupId,g=t.className,d=i(),k=d.tabGroupChoices,m=d.setTabGroupChoices,y=(0,n.useState)(r),f=y[0],b=y[1],w=n.Children.toArray(t.children),v=[];if(null!=u){var x=k[u];null!=x&&x!==f&&h.some((function(t){return t.value===x}))&&b(x)}var N=function(t){var e=t.currentTarget,a=v.indexOf(e),n=h[a].value;b(n),null!=u&&(m(u,n),setTimeout((function(){var t,a,n,r,i,c,s,l;(t=e.getBoundingClientRect(),a=t.top,n=t.left,r=t.bottom,i=t.right,c=window,s=c.innerHeight,l=c.innerWidth,a>=0&&i<=l&&r<=s&&n>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(o),setTimeout((function(){return e.classList.remove(o)}),2e3))}),150))},T=function(t){var e,a;switch(t.keyCode){case p:var n=v.indexOf(t.target)+1;a=v[n]||v[0];break;case l:var r=v.indexOf(t.target)-1;a=v[r]||v[v.length-1]}null==(e=a)||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":a},g)},h.map((function(t){var e=t.value,a=t.label;return n.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":f===e}),key:e,ref:function(t){return v.push(t)},onKeyDown:T,onFocus:N,onClick:N},a)}))),e?(0,n.cloneElement)(w.filter((function(t){return t.props.value===f}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==f})}))))}},9443:function(t,e,a){var n=(0,a(7294).createContext)(void 0);e.Z=n},2591:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return h},default:function(){return g}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),c=a(5064),s=a(8215),o={id:"class-tracing",title:"Tracing"},l=void 0,p={unversionedId:"api/class-tracing",id:"api/class-tracing",isDocsHomePage:!1,title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened in Trace Viewer after Playwright script runs.",source:"@site/docs/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/python/docs/next/api/class-tracing",version:"current",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"api",previous:{title:"Touchscreen",permalink:"/python/docs/next/api/class-touchscreen"},next:{title:"Video",permalink:"/python/docs/next/api/class-video"}},h=[{value:"tracing.start(**kwargs)",id:"tracing-start",children:[]},{value:"tracing.start_chunk(**kwargs)",id:"tracing-start-chunk",children:[]},{value:"tracing.stop(**kwargs)",id:"tracing-stop",children:[]},{value:"tracing.stop_chunk(**kwargs)",id:"tracing-stop-chunk",children:[]}],u={toc:h};function g(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened in ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/trace-viewer"},"Trace Viewer")," after Playwright script runs."),(0,i.kt)("p",null,"Start recording a trace before performing actions. At the end, stop tracing and save it to a file."),(0,i.kt)(c.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'browser = chromium.launch()\ncontext = browser.new_context()\ncontext.tracing.start(screenshots=True, snapshots=True)\npage = context.new_page()\npage.goto("https://playwright.dev")\ncontext.tracing.stop(path = "trace.zip")\n'))),(0,i.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'browser = await chromium.launch()\ncontext = await browser.new_context()\nawait context.tracing.start(screenshots=True, snapshots=True)\npage = await context.new_page()\nawait page.goto("https://playwright.dev")\nawait context.tracing.stop(path = "trace.zip")\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-tracing#tracing-start"},"tracing.start(**kwargs)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-tracing#tracing-start-chunk"},"tracing.start_chunk(**kwargs)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-tracing#tracing-stop"},"tracing.stop(**kwargs)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-tracing#tracing-stop-chunk"},"tracing.stop_chunk(**kwargs)"))),(0,i.kt)("h2",{id:"tracing-start"},"tracing.start(**kwargs)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-name"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"traces_dir")," folder specified in ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsertype#browser-type-launch"},"browser_type.launch(**kwargs)"),".",(0,i.kt)("a",{href:"#tracing-start-option-name",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screenshots"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-screenshots"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.",(0,i.kt)("a",{href:"#tracing-start-option-screenshots",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snapshots"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-snapshots"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether to capture DOM snapshot on every action.",(0,i.kt)("a",{href:"#tracing-start-option-snapshots",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-title"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Trace name to be shown in the Trace Viewer.",(0,i.kt)("a",{href:"#tracing-start-option-title",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,i.kt)("a",{href:"#tracing-start-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Start tracing."),(0,i.kt)(c.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'context.tracing.start(name="trace", screenshots=True, snapshots=True)\npage = context.new_page()\npage.goto("https://playwright.dev")\ncontext.tracing.stop(path = "trace.zip")\n'))),(0,i.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'await context.tracing.start(name="trace", screenshots=True, snapshots=True)\npage = await context.new_page()\nawait page.goto("https://playwright.dev")\nawait context.tracing.stop(path = "trace.zip")\n')))),(0,i.kt)("h2",{id:"tracing-start-chunk"},"tracing.start_chunk(**kwargs)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-option-title"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Trace name to be shown in the Trace Viewer.",(0,i.kt)("a",{href:"#tracing-start-chunk-option-title",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,i.kt)("a",{href:"#tracing-start-chunk-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Start a new trace chunk. If you'd like to record multiple traces on the same ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),", use ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-tracing#tracing-start"},"tracing.start(**kwargs)")," once, and then create multiple trace chunks with ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-tracing#tracing-start-chunk"},"tracing.start_chunk(**kwargs)")," and ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-tracing#tracing-stop-chunk"},"tracing.stop_chunk(**kwargs)"),"."),(0,i.kt)(c.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'context.tracing.start(name="trace", screenshots=True, snapshots=True)\npage = context.new_page()\npage.goto("https://playwright.dev")\n\ncontext.tracing.start_chunk()\npage.click("text=Get Started")\n# Everything between start_chunk and stop_chunk will be recorded in the trace.\ncontext.tracing.stop_chunk(path = "trace1.zip")\n\ncontext.tracing.start_chunk()\npage.goto("http://example.com")\n# Save a second trace file with different actions.\ncontext.tracing.stop_chunk(path = "trace2.zip")\n'))),(0,i.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'await context.tracing.start(name="trace", screenshots=True, snapshots=True)\npage = await context.new_page()\nawait page.goto("https://playwright.dev")\n\nawait context.tracing.start_chunk()\nawait page.click("text=Get Started")\n# Everything between start_chunk and stop_chunk will be recorded in the trace.\nawait context.tracing.stop_chunk(path = "trace1.zip")\n\nawait context.tracing.start_chunk()\nawait page.goto("http://example.com")\n# Save a second trace file with different actions.\nawait context.tracing.stop_chunk(path = "trace2.zip")\n')))),(0,i.kt)("h2",{id:"tracing-stop"},"tracing.stop(**kwargs)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-option-path"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,i.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]",">"," Export trace into the file with the given path.",(0,i.kt)("a",{href:"#tracing-stop-option-path",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,i.kt)("a",{href:"#tracing-stop-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Stop tracing."),(0,i.kt)("h2",{id:"tracing-stop-chunk"},"tracing.stop_chunk(**kwargs)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-option-path"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,i.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]",">"," Export trace collected since the last ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-tracing#tracing-start-chunk"},"tracing.start_chunk(**kwargs)")," call into the file with the given path.",(0,i.kt)("a",{href:"#tracing-stop-chunk-option-path",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,i.kt)("a",{href:"#tracing-stop-chunk-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Stop the trace chunk. See ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-tracing#tracing-start-chunk"},"tracing.start_chunk(**kwargs)")," for more details about multiple trace chunks."))}g.isMDXComponent=!0},6010:function(t,e,a){function n(t){var e,a,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(a=n(t[e]))&&(r&&(r+=" "),r+=a);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,a=0,r="";a<arguments.length;)(t=arguments[a++])&&(e=n(t))&&(r&&(r+=" "),r+=e);return r}a.d(e,{Z:function(){return r}})}}]);