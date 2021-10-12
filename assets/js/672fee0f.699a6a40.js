"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4171],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,h=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,m=e.groupId,f=e.className,h=o(),w=h.tabGroupChoices,d=h.setTabGroupChoices,g=(0,r.useState)(a),y=g[0],b=g[1],v=r.Children.toArray(e.children),k=[];if(null!=m){var x=w[m];null!=x&&x!==y&&p.some((function(e){return e.value===x}))&&b(x)}var N=function(e){var t=e.currentTarget,n=k.indexOf(t),r=p[n].value;b(r),null!=m&&(d(m,r),setTimeout((function(){var e,n,r,a,o,i,s,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case u:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case c:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:O,onFocus:N,onClick:N},n)}))),t?(0,r.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},3376:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=(n(5064),n(8215),{id:"test-runners",title:"Third party runners"}),s=void 0,l={unversionedId:"test-runners",id:"test-runners",isDocsHomePage:!1,title:"Third party runners",description:"With a few lines of code, you can hook up Playwright to your existing JavaScript test runner.",source:"@site/docs/test-runners.mdx",sourceDirName:".",slug:"/test-runners",permalink:"/docs/next/test-runners",version:"current",frontMatter:{id:"test-runners",title:"Third party runners"},sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/docs/next/ci"},next:{title:"Supported languages",permalink:"/docs/next/languages"}},c=[{value:"Playwright Test",id:"playwright-test",children:[]},{value:"Jest / Jasmine",id:"jest--jasmine",children:[]},{value:"AVA",id:"ava",children:[]},{value:"Mocha",id:"mocha",children:[]},{value:"Multiple Browsers",id:"multiple-browsers",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With a few lines of code, you can hook up Playwright to your existing JavaScript test runner."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#playwright-test"},"Playwright Test")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#jest--jasmine"},"Jest / Jasmine")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#ava"},"AVA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#mocha"},"Mocha")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-browsers"},"Multiple Browsers"))),(0,o.kt)("h2",{id:"playwright-test"},"Playwright Test"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/intro"},"Playwright Test")," is our first-party recommended test runner to be used with Playwright. Learn more about it ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/intro"},"here"),"."),(0,o.kt)("h2",{id:"jest--jasmine"},"Jest / Jasmine"),(0,o.kt)("p",null,"For Jest, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/playwright-community/jest-playwright"},"jest-playwright")," can be used. However for a light-weight solution, requiring playwright directly works fine. Jest shares it's syntax with Jasmine, so this applies to Jasmine as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {chromium} = require('playwright');\nconst expect = require('expect');\nlet browser;\nlet page;\nbeforeAll(async () => {\n  browser = await chromium.launch();\n});\nafterAll(async () => {\n  await browser.close();\n});\nbeforeEach(async () => {\n  page = await browser.newPage();\n});\nafterEach(async () => {\n  await page.close();\n});\n\nit('should work', async () => {\n  await page.goto('https://www.example.com/');\n  expect(await page.title()).toBe('Example Domain');\n});\n")),(0,o.kt)("h2",{id:"ava"},"AVA"),(0,o.kt)("p",null,"Tests run concurrently in AVA, so a single page variable cannot be shared between tests. Instead, create new pages with a macro function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {chromium} = require('playwright');\nconst test = require('ava').default;\nconst browserPromise = chromium.launch();\n\nasync function pageMacro(t, callback) {\n  const browser = await browserPromise;\n  const page = await browser.newPage();\n  try {\n    await callback(t, page);\n  } finally {\n    await page.close();\n  }\n}\n\ntest('should work', pageMacro, async (t, page) => {\n  await page.goto('https://www.example.com/');\n  t.is(await page.title(), 'Example Domain');\n});\n")),(0,o.kt)("h2",{id:"mocha"},"Mocha"),(0,o.kt)("p",null,"Mocha looks very similar to the Jest/Jasmine setup, and functions in the same way."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {chromium} = require('playwright');\nconst assert = require('assert');\nlet browser;\nbefore(async() => {\n  browser = await chromium.launch();\n});\nafter(async () => {\n  await browser.close();\n});\nlet page;\nbeforeEach(async() => {\n  page = await browser.newPage();\n});\nafterEach(async () => {\n  await page.close();\n});\n\nit('should work', async () => {\n  await page.goto('https://www.example.com/');\n  assert.equal(await page.title(), 'Example Domain');\n});\n")),(0,o.kt)("h2",{id:"multiple-browsers"},"Multiple Browsers"),(0,o.kt)("p",null,"These simple examples can be extended to support multiple browsers using an environment variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {chromium, webkit, firefox} = require('playwright');\nconst browserName = process.env.BROWSER || 'webkit';\nlet browser;\nbeforeAll(async() => {\n  browser = await {chromium, webkit, firefox}[browserName].launch();\n});\n")),(0,o.kt)("p",null,"Then set ",(0,o.kt)("inlineCode",{parentName:"p"},"BROWSER=firefox")," to run your tests with firefox, or any other browser."))}p.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);