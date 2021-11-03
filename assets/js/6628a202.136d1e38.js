"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1981],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=o(),h=f.tabGroupChoices,w=f.setTabGroupChoices,g=(0,r.useState)(a),k=g[0],v=g[1],b=r.Children.toArray(e.children),N=[];if(null!=m){var x=h[m];null!=x&&x!==k&&p.some((function(e){return e.value===x}))&&v(x)}var y=function(e){var t=e.currentTarget,n=N.indexOf(t),r=p[n].value;v(r),null!=m&&(w(m,r),setTimeout((function(){var e,n,r,a,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case u:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case c:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:y,onClick:y},n)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},6900:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=(n(55064),n(58215),{id:"emulation",title:"Emulation"}),l=void 0,s={unversionedId:"emulation",id:"version-1.16/emulation",isDocsHomePage:!1,title:"Emulation",description:"Playwright allows overriding various parameters of the device where the browser is running:",source:"@site/versioned_docs/version-1.16/emulation.mdx",sourceDirName:".",slug:"/emulation",permalink:"/docs/emulation",version:"1.16",frontMatter:{id:"emulation",title:"Emulation"},sidebar:"version-1.16/docs",previous:{title:"Element selectors",permalink:"/docs/selectors"},next:{title:"Events",permalink:"/docs/events"}},c=[{value:"Devices",id:"devices",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"User agent",id:"user-agent",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Viewport",id:"viewport",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Locale &amp; timezone",id:"locale--timezone",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Permissions",id:"permissions",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Geolocation",id:"geolocation",children:[{value:"API reference",id:"api-reference-5",children:[]}]},{value:"Color scheme and media",id:"color-scheme-and-media",children:[{value:"API reference",id:"api-reference-6",children:[]}]}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright allows overriding various parameters of the device where the browser is running:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"viewport size, device scale factor, touch support"),(0,o.kt)("li",{parentName:"ul"},"locale, timezone"),(0,o.kt)("li",{parentName:"ul"},"color scheme"),(0,o.kt)("li",{parentName:"ul"},"geolocation")),(0,o.kt)("p",null,"Most of these parameters are configured during the browser context construction, but some of them such as viewport size can be changed for individual pages."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#devices"},"Devices")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#user-agent"},"User agent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#viewport"},"Viewport")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#locale--timezone"},"Locale & timezone")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#permissions"},"Permissions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#geolocation"},"Geolocation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#color-scheme-and-media"},"Color scheme and media"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"devices"},"Devices"),(0,o.kt)("p",null,"Playwright comes with a registry of device parameters for selected mobile devices. It can be used to simulate browser behavior on a mobile device:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium, devices } = require('playwright');\nconst browser = await chromium.launch();\n\nconst pixel2 = devices['Pixel 2'];\nconst context = await browser.newContext({\n  ...pixel2,\n});\n")),(0,o.kt)("p",null,"All pages created in the context above will share the same device parameters."),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-playwright#playwright-devices"},"playwright.devices")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-browser#browser-new-context"},"browser.newContext([options])"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"user-agent"},"User agent"),(0,o.kt)("p",null,"All pages created in the context above will share the user agent specified:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const context = await browser.newContext({\n  userAgent: 'My user agent'\n});\n")),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-browser#browser-new-context"},"browser.newContext([options])"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"viewport"},"Viewport"),(0,o.kt)("p",null,"Create a context with custom viewport size:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create context with given viewport\nconst context = await browser.newContext({\n  viewport: { width: 1280, height: 1024 }\n});\n\n// Resize viewport for individual page\nawait page.setViewportSize({ width: 1600, height: 1200 });\n\n// Emulate high-DPI\nconst context = await browser.newContext({\n  viewport: { width: 2560, height: 1440 },\n  deviceScaleFactor: 2,\n});\n")),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-browser#browser-new-context"},"browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-set-viewport-size"},"page.setViewportSize(viewportSize)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"locale--timezone"},"Locale & timezone"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Emulate locale and time\nconst context = await browser.newContext({\n  locale: 'de-DE',\n  timezoneId: 'Europe/Berlin',\n});\n")),(0,o.kt)("h3",{id:"api-reference-3"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-browser#browser-new-context"},"browser.newContext([options])"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"Allow all pages in the context to show system notifications:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const context = await browser.newContext({\n  permissions: ['notifications'],\n});\n")),(0,o.kt)("p",null,"Grant all pages in the existing context access to current location:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await context.grantPermissions(['geolocation']);\n")),(0,o.kt)("p",null,"Grant notifications access from a specific domain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await context.grantPermissions(['notifications'], {origin: 'https://skype.com'} );\n")),(0,o.kt)("p",null,"Revoke all permissions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await context.clearPermissions();\n")),(0,o.kt)("h3",{id:"api-reference-4"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-browser#browser-new-context"},"browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-browsercontext#browser-context-grant-permissions"},"browserContext.grantPermissions(permissions[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-browsercontext#browser-context-clear-permissions"},"browserContext.clearPermissions()"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"geolocation"},"Geolocation"),(0,o.kt)("p",null,"Create a context with ",(0,o.kt)("inlineCode",{parentName:"p"},'"geolocation"')," permissions granted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const context = await browser.newContext({\n  geolocation: { longitude: 48.858455, latitude: 2.294474 },\n  permissions: ['geolocation']\n});\n")),(0,o.kt)("p",null,"Change the location later:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await context.setGeolocation({ longitude: 29.979097, latitude: 31.134256 });\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," you can only change geolocation for all pages in the context."),(0,o.kt)("h3",{id:"api-reference-5"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-browser#browser-new-context"},"browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-browsercontext#browser-context-set-geolocation"},"browserContext.setGeolocation(geolocation)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"color-scheme-and-media"},"Color scheme and media"),(0,o.kt)("p",null,"Create a context with dark or light mode. Pages created in this context will follow this color scheme preference."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create context with dark mode\nconst context = await browser.newContext({\n  colorScheme: 'dark' // or 'light'\n});\n\n// Create page with dark mode\nconst page = await browser.newPage({\n  colorScheme: 'dark' // or 'light'\n});\n\n// Change color scheme for the page\nawait page.emulateMedia({ colorScheme: 'dark' });\n\n// Change media for page\nawait page.emulateMedia({ media: 'print' });\n")),(0,o.kt)("h3",{id:"api-reference-6"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-browser#browser-new-context"},"browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-emulate-media"},"page.emulateMedia([options])"))))}p.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);