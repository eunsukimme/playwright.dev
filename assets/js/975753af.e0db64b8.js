"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9244],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=i(n),m=r,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||s;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(79443);var s=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),l="tabItem_1uMI",p="tabItemActive_2DSg";var i=37,c=39;var u=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,u=e.values,h=e.groupId,m=e.className,d=s(),g=d.tabGroupChoices,f=d.setTabGroupChoices,y=(0,a.useState)(r),v=y[0],w=y[1],b=a.Children.toArray(e.children),x=[];if(null!=h){var k=g[h];null!=k&&k!==v&&u.some((function(e){return e.value===k}))&&w(k)}var N=function(e){var t=e.currentTarget,n=x.indexOf(t),a=u[n].value;w(a),null!=h&&(f(h,a),setTimeout((function(){var e,n,a,r,s,o,l,i;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,s=e.right,o=window,l=o.innerHeight,i=o.innerWidth,n>=0&&s<=i&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case c:var a=x.indexOf(e.target)+1;n=x[a]||x[0];break;case i:var r=x.indexOf(e.target)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":v===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:T,onFocus:N,onClick:N},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},22297:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(22122),r=n(19756),s=(n(67294),n(3905)),o=n(55064),l=n(58215),p={id:"test-snapshots",title:"Visual comparisons"},i=void 0,c={unversionedId:"test-snapshots",id:"test-snapshots",isDocsHomePage:!1,title:"Visual comparisons",description:"Playwright Test includes the ability to produce and visually compare screenshots using expect(value).toMatchSnapshot(snapshotName). On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference.",source:"@site/docs/test-snapshots.mdx",sourceDirName:".",slug:"/test-snapshots",permalink:"/docs/next/test-snapshots",version:"current",frontMatter:{id:"test-snapshots",title:"Visual comparisons"},sidebar:"docs",previous:{title:"Test retry",permalink:"/docs/next/test-retries"},next:{title:"Advanced: configuration",permalink:"/docs/next/test-advanced"}},u=[],h={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Playwright Test includes the ability to produce and visually compare screenshots using ",(0,s.kt)("inlineCode",{parentName:"p"},"expect(value).toMatchSnapshot(snapshotName)"),". On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.screenshot()).toMatchSnapshot('landing.png');\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.screenshot()).toMatchSnapshot('landing.png');\n});\n")))),(0,s.kt)("p",null,"When you run above for the first time, test runner will say:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Error: example.spec.ts-snapshots/landing-chromium-darwin.png is missing in snapshots, writing actual.\n")),(0,s.kt)("p",null,"That's because there was no golden file for your ",(0,s.kt)("inlineCode",{parentName:"p"},"landing.png")," snapshot. It is now created and is ready to be added to the repository. The name of the folder with the golden expectations starts with the name of your test file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"drwxr-xr-x  5 user  group  160 Jun  4 11:46 .\ndrwxr-xr-x  6 user  group  192 Jun  4 11:45 ..\n-rw-r--r--  1 user  group  231 Jun  4 11:16 example.spec.ts\ndrwxr-xr-x  3 user  group   96 Jun  4 11:46 example.spec.ts-snapshots\n")),(0,s.kt)("p",null,"Note the ",(0,s.kt)("inlineCode",{parentName:"p"},"chromium-darwin")," in the generated snapshot file name - it contains the browser name and the platform. Screenshots differ between browsers and platforms due to different rendering, fonts and more, so you will need different snapshots for them. If you use multiple projects in your ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/test-configuration"},"configuration file"),", project name will be used instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"chromium"),"."),(0,s.kt)("p",null,"If you are not on the same operating system as your CI system, you can use Docker to generate/update the screenshots:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.12.3-focal /bin/bash\nnpm install\nnpx playwright test --update-snapshots\n")),(0,s.kt)("p",null,"Sometimes you need to update the reference screenshot, for example when the page has changed. Do this with the  ",(0,s.kt)("inlineCode",{parentName:"p"},"--update-snapshots")," flag."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --update-snapshots\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note that ",(0,s.kt)("inlineCode",{parentName:"p"},"snapshotName")," also accepts an array of path segments to the snapshot file such as ",(0,s.kt)("inlineCode",{parentName:"p"},"expect(value).toMatchSnapshot(['relative', 'path', 'to', 'snapshot.png'])"),".\nHowever, this path must stay within the snapshots directory for each test file (i.e. ",(0,s.kt)("inlineCode",{parentName:"p"},"a.spec.js-snapshots"),"), otherwise it will throw.")),(0,s.kt)("p",null,"Playwright Test uses the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mapbox/pixelmatch"},"pixelmatch")," library. You can pass comparison ",(0,s.kt)("inlineCode",{parentName:"p"},"threshold")," as an option."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.screenshot()).toMatchSnapshot('home.png', { threshold: 0.2 });\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.screenshot()).toMatchSnapshot('home.png', { threshold: 0.2 });\n});\n")))),(0,s.kt)("p",null,"If you'd like to share the default value among all the tests in the project, you can specify it in the playwright config, either globally or per project:"),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  expect: {\n    toMatchSnapshot: { threshold: 0.1 },\n  },\n};\nexport default config;\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  expect: {\n    toMatchSnapshot: { threshold: 0.1 },\n  },\n};\n")))),(0,s.kt)("p",null,"Apart from screenshots, ",(0,s.kt)("inlineCode",{parentName:"p"},"expect(value).toMatchSnapshot(snapshotName)")," can also be used to compare text, png and jpeg images, or arbitrary binary data. Playwright Test auto-detects the content type and uses the appropriate comparison algorithm."),(0,s.kt)("p",null,"Here we compare text content against the reference."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');\n});\n")))),(0,s.kt)("p",null,"Snapshots are stored next to the test file, in a separate directory. For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"my.spec.ts")," file will produce and store snapshots in the ",(0,s.kt)("inlineCode",{parentName:"p"},"my.spec.ts-snapshots")," directory. You should commit this directory to your version control (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"git"),"), and review any changes to it."))}m.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);