"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2909],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=u(a),d=n,m=f["".concat(l,".").concat(d)]||f[d]||c[d]||s;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),n=a(9443);var s=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,p=39;var c=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,c=e.values,f=e.groupId,d=e.className,m=s(),x=m.tabGroupChoices,h=m.setTabGroupChoices,g=(0,r.useState)(n),k=g[0],b=g[1],v=r.Children.toArray(e.children),w=[];if(null!=f){var y=x[f];null!=y&&y!==k&&c.some((function(e){return e.value===y}))&&b(y)}var N=function(e){var t=e.currentTarget,a=w.indexOf(t),r=c[a].value;b(r),null!=f&&(h(f,r),setTimeout((function(){var e,a,r,n,s,i,o,u;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,s=e.right,i=window,o=i.innerHeight,u=i.innerWidth,a>=0&&s<=u&&n<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,a;switch(e.keyCode){case p:var r=w.indexOf(e.target)+1;a=w[r]||w[0];break;case u:var n=w.indexOf(e.target)-1;a=w[n]||w[w.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},c.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:N,onClick:N},a)}))),t?(0,r.cloneElement)(v.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,a){var r=(0,a(7294).createContext)(void 0);t.Z=r},3497:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=a(2122),n=a(9756),s=(a(7294),a(3905)),i=a(5064),o=a(8215),l={id:"class-fixtures",title:"Fixtures"},u=void 0,p={unversionedId:"api/class-fixtures",id:"api/class-fixtures",isDocsHomePage:!1,title:"Fixtures",description:"Playwright Test is based on the concept of the test fixtures. Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else.",source:"@site/docs/api/class-fixtures.mdx",sourceDirName:"api",slug:"/api/class-fixtures",permalink:"/docs/next/api/class-fixtures",version:"current",frontMatter:{id:"class-fixtures",title:"Fixtures"},sidebar:"api",previous:{title:"Worker",permalink:"/docs/next/api/class-worker"},next:{title:"Playwright Test",permalink:"/docs/next/api/class-test"}},c=[{value:"fixtures.browser",id:"fixtures-browser",children:[]},{value:"fixtures.browserName",id:"fixtures-browser-name",children:[]},{value:"fixtures.context",id:"fixtures-context",children:[]},{value:"fixtures.page",id:"fixtures-page",children:[]},{value:"fixtures.request",id:"fixtures-request",children:[]}],f={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Playwright Test is based on the concept of the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/test-fixtures"},"test fixtures"),". Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else."),(0,s.kt)("p",null,"Playwright Test looks at each test declaration, analyses the set of fixtures the test needs and prepares those fixtures specifically for the test. Values prepared by the fixtures are merged into a single object that is available to the ",(0,s.kt)("inlineCode",{parentName:"p"},"test"),", hooks, annotations and other fixtures as a first parameter."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  // ...\n});\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  // ...\n});\n")))),(0,s.kt)("p",null,"Given the test above, Playwright Test will set up the ",(0,s.kt)("inlineCode",{parentName:"p"},"page")," fixture before running the test, and tear it down after the test has finished. ",(0,s.kt)("inlineCode",{parentName:"p"},"page")," fixture provides a ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-page",title:"Page"},"Page")," object that is available to the test."),(0,s.kt)("p",null,"Playwright Test comes with builtin fixtures listed below, and you can add your own fixtures as well. Playwright Test also ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-testoptions",title:"TestOptions"},"provides options")," to  configure ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-fixtures#fixtures-browser"},"fixtures.browser"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-fixtures#fixtures-context"},"fixtures.context")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-fixtures#fixtures-page"},"fixtures.page"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-fixtures#fixtures-browser"},"fixtures.browser")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-fixtures#fixtures-browser-name"},"fixtures.browserName")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-fixtures#fixtures-context"},"fixtures.context")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-fixtures#fixtures-page"},"fixtures.page")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-fixtures#fixtures-request"},"fixtures.request"))),(0,s.kt)("h2",{id:"fixtures-browser"},"fixtures.browser"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-browser",title:"Browser"},"Browser"),">")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-browser",title:"Browser"},"Browser")," instance is shared between all tests in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/test-parallel"},"same worker")," - this makes testing efficient. However, each test runs in an isolated ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),"  and gets a fresh environment."),(0,s.kt)("p",null,"Learn how to ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/test-configuration"},"configure browser")," and see ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-testoptions",title:"TestOptions"},"available options"),"."),(0,s.kt)("h2",{id:"fixtures-browser-name"},"fixtures.browserName"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",'"chromium"|"firefox"|"webkit"',">")),(0,s.kt)("p",null,"Name of the browser that runs tests. Defaults to ",(0,s.kt)("inlineCode",{parentName:"p"},"'chromium'"),". Useful to ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/test-annotations"},"annotate tests")," based on the browser."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"test('skip this test in Firefox', async ({ page, browserName }) => {\n  test.skip(browserName === 'firefox', 'Still working on it');\n  // ...\n});\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"test('skip this test in Firefox', async ({ page, browserName }) => {\n  test.skip(browserName === 'firefox', 'Still working on it');\n  // ...\n});\n")))),(0,s.kt)("h2",{id:"fixtures-context"},"fixtures.context"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),">")),(0,s.kt)("p",null,"Isolated ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," instance, created for each test. Since contexts are isolated between each other, every test gets a fresh environment, even when multiple tests run in a single ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-browser",title:"Browser"},"Browser")," for maximum efficiency."),(0,s.kt)("p",null,"Learn how to ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/test-configuration"},"configure context")," and see ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-testoptions",title:"TestOptions"},"available options"),"."),(0,s.kt)("p",null,"Default ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-fixtures#fixtures-page"},"fixtures.page")," belongs to this context."),(0,s.kt)("h2",{id:"fixtures-page"},"fixtures.page"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-page",title:"Page"},"Page"),">")),(0,s.kt)("p",null,"Isolated ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-page",title:"Page"},"Page")," instance, created for each test. Pages are isolated between tests due to ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-fixtures#fixtures-context"},"fixtures.context")," isolation."),(0,s.kt)("p",null,"This is the most common fixture used in a test."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  await page.goto('/signin');\n  await page.fill('#username', 'User');\n  await page.fill('#password', 'pwd');\n  await page.click('text=Sign in');\n  // ...\n});\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  await page.goto('/signin');\n  await page.fill('#username', 'User');\n  await page.fill('#password', 'pwd');\n  await page.click('text=Sign in');\n  // ...\n});\n")))),(0,s.kt)("h2",{id:"fixtures-request"},"fixtures.request"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-apirequestcontext",title:"ApiRequestContext"},"ApiRequestContext"),">")),(0,s.kt)("p",null,"Isolated ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-apirequestcontext",title:"ApiRequestContext"},"ApiRequestContext")," instance for each test."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ request }) => {\n  await request.post('/signin', {\n    data: {\n      username: 'user',\n      password: 'password'\n    }\n  });\n  // ...\n});\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ request }) => {\n  await request.post('/signin', {\n    data: {\n      username: 'user',\n      password: 'password'\n    }\n  });\n});\n")))))}d.isMDXComponent=!0},6010:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);