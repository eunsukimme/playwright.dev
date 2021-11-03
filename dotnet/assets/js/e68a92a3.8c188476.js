"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6521],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return w}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(r),w=a,y=h["".concat(s,".").concat(w)]||h[w]||u[w]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function w(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7294),a=r(9443);var i=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=r(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,u=e.values,h=e.groupId,w=e.className,y=i(),d=y.tabGroupChoices,m=y.setTabGroupChoices,f=(0,n.useState)(a),g=f[0],v=f[1],b=n.Children.toArray(e.children),k=[];if(null!=h){var N=d[h];null!=N&&N!==g&&u.some((function(e){return e.value===N}))&&v(N)}var P=function(e){var t=e.currentTarget,r=k.indexOf(t),n=u[r].value;v(n),null!=h&&(m(h,n),setTimeout((function(){var e,r,n,a,i,o,l,c;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,r>=0&&i<=c&&a<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case p:var n=k.indexOf(e.target)+1;r=k[n]||k[0];break;case c:var a=k.indexOf(e.target)-1;r=k[a]||k[k.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},w)},u.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:x,onFocus:P,onClick:P},r)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},1226:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=(r(5064),r(8215),{id:"class-playwright",title:"Playwright"}),l=void 0,s={unversionedId:"api/class-playwright",id:"version-1.16/api/class-playwright",isDocsHomePage:!1,title:"Playwright",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/versioned_docs/version-1.16/api/class-playwright.mdx",sourceDirName:"api",slug:"/api/class-playwright",permalink:"/dotnet/docs/api/class-playwright",version:"1.16",frontMatter:{id:"class-playwright",title:"Playwright"},sidebar:"version-1.16/api",next:{title:"Browser",permalink:"/dotnet/docs/api/class-browser"}},c=[{value:"Playwright.Chromium",id:"playwright-chromium",children:[]},{value:"Playwright.Devices",id:"playwright-devices",children:[]},{value:"Playwright.Firefox",id:"playwright-firefox",children:[]},{value:"Playwright.Selectors",id:"playwright-selectors",children:[]},{value:"Playwright.Webkit",id:"playwright-webkit",children:[]}],p={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass PlaywrightExample\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        var page = await browser.NewPageAsync();\n\n        await page.GotoAsync("https://www.microsoft.com");\n        // other actions...\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-playwright#playwright-chromium"},"Playwright.Chromium")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-playwright#playwright-devices"},"Playwright.Devices")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-playwright#playwright-firefox"},"Playwright.Firefox")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-playwright#playwright-selectors"},"Playwright.Selectors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-playwright#playwright-webkit"},"Playwright.Webkit"))),(0,i.kt)("h2",{id:"playwright-chromium"},"Playwright.Chromium"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,i.kt)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-browser",title:"Browser"},"Browser"),"."),(0,i.kt)("h2",{id:"playwright-devices"},"Playwright.Devices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ireadonlydictionary-2",title:"IReadOnlyDictionary"},"IReadOnlyDictionary"),"<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),", ","[BrowserNewContextOptions]",">",">")),(0,i.kt)("p",null,"Returns a dictionary of devices to be used with ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")," or ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-browser#browser-new-page"},"Browser.NewPageAsync(options)"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass PlaywrightExample\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Webkit.LaunchAsync();\n        await using var context = await browser.NewContextAsync(playwright.Devices["iPhone 6"]);\n\n        var page = await context.NewPageAsync();\n        await page.GotoAsync("https://www.theverge.com");\n        // other actions...\n    }\n}\n')),(0,i.kt)("h2",{id:"playwright-firefox"},"Playwright.Firefox"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,i.kt)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-browser",title:"Browser"},"Browser"),"."),(0,i.kt)("h2",{id:"playwright-selectors"},"Playwright.Selectors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-selectors",title:"Selectors"},"Selectors"),">")),(0,i.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/selectors"},"Working with selectors")," for more information."),(0,i.kt)("h2",{id:"playwright-webkit"},"Playwright.Webkit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,i.kt)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-browser",title:"Browser"},"Browser"),"."))}u.isMDXComponent=!0},6010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);