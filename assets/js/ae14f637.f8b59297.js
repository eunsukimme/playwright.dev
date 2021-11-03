"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8882],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=s,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:s},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),s=n(79443);var r=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,u=39;var c=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,c=e.values,m=e.groupId,d=e.className,f=r(),k=f.tabGroupChoices,h=f.setTabGroupChoices,g=(0,a.useState)(s),y=g[0],v=g[1],b=a.Children.toArray(e.children),N=[];if(null!=m){var T=k[m];null!=T&&T!==y&&c.some((function(e){return e.value===T}))&&v(T)}var w=function(e){var t=e.currentTarget,n=N.indexOf(t),a=c[n].value;v(a),null!=m&&(h(m,a),setTimeout((function(){var e,n,a,s,r,o,i,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,s=e.bottom,r=e.right,o=window,i=o.innerHeight,p=o.innerWidth,n>=0&&r<=p&&s<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case p:var s=N.indexOf(e.target)-1;n=N[s]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:w,onClick:w},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},23277:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(22122),s=n(19756),r=(n(67294),n(3905)),o=n(55064),i=n(58215),l={id:"test-annotations",title:"Annotations"},p=void 0,u={unversionedId:"test-annotations",id:"version-1.16/test-annotations",isDocsHomePage:!1,title:"Annotations",description:"- Annotations",source:"@site/versioned_docs/version-1.16/test-annotations.mdx",sourceDirName:".",slug:"/test-annotations",permalink:"/docs/test-annotations",version:"1.16",frontMatter:{id:"test-annotations",title:"Annotations"},sidebar:"version-1.16/docs",previous:{title:"Release notes",permalink:"/docs/release-notes"},next:{title:"API testing",permalink:"/docs/test-api-testing"}},c=[{value:"Annotations",id:"annotations",children:[]},{value:"Focus a test",id:"focus-a-test",children:[]},{value:"Skip a test",id:"skip-a-test",children:[]},{value:"Conditionally skip a test",id:"conditionally-skip-a-test",children:[]},{value:"Group tests",id:"group-tests",children:[]},{value:"Tag tests",id:"tag-tests",children:[]},{value:"Conditionally skip a group of tests",id:"conditionally-skip-a-group-of-tests",children:[]},{value:"Use fixme in <code>beforeEach</code> hook",id:"use-fixme-in-beforeeach-hook",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#annotations"},"Annotations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#focus-a-test"},"Focus a test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#skip-a-test"},"Skip a test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#conditionally-skip-a-test"},"Conditionally skip a test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#group-tests"},"Group tests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tag-tests"},"Tag tests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#conditionally-skip-a-group-of-tests"},"Conditionally skip a group of tests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#use-fixme-in-beforeeach-hook"},"Use fixme in ",(0,r.kt)("inlineCode",{parentName:"a"},"beforeEach")," hook"))),(0,r.kt)("h2",{id:"annotations"},"Annotations"),(0,r.kt)("p",null,"Playwright Test supports test annotations to deal with failures, flakiness, skip, focus and tag tests:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"skip")," marks the test as irrelevant. Playwright Test does not run such a test. Use this annotation when the test is not applicable in some configuration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fail")," marks the test as failing. Playwright Test will run this test and ensure it does indeed fail. If the test does not fail, Playwright Test will complain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fixme")," marks the test as failing. Playwright Test will not run this test, as opposite to the ",(0,r.kt)("inlineCode",{parentName:"li"},"fail")," annotation. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"fixme")," when running the test is slow or crashy."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"slow")," marks the test as slow and triples the test timeout.")),(0,r.kt)("p",null,"Annotations can be used on a single test or a group of tests. Annotations can be conditional, in which case they apply when the condition is truthy. Annotations may depend on test fixtures. There could be multiple annotations on the same test, possibly in different configurations."),(0,r.kt)("h2",{id:"focus-a-test"},"Focus a test"),(0,r.kt)("p",null,"You can focus some tests. When there are focused tests, only these tests run."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"test.only('focus this test', async ({ page }) => {\n  // Run only focused tests in the entire project.\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"test.only('focus this test', async ({ page }) => {\n  // Run only focused tests in the entire project.\n});\n")))),(0,r.kt)("h2",{id:"skip-a-test"},"Skip a test"),(0,r.kt)("p",null,"Mark a test as skipped."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"test.skip('skip this test', async ({ page }) => {\n  // This test is not run\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"test.skip('skip this test', async ({ page }) => {\n  // This test is not run\n});\n")))),(0,r.kt)("h2",{id:"conditionally-skip-a-test"},"Conditionally skip a test"),(0,r.kt)("p",null,"You can skip certain test based on the condition."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"test('skip this test', async ({ page, browserName }) => {\n  test.skip(browserName === 'firefox', 'Still working on it');\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"test('skip this test', async ({ page, browserName }) => {\n  test.skip(browserName === 'firefox', 'Still working on it');\n});\n")))),(0,r.kt)("h2",{id:"group-tests"},"Group tests"),(0,r.kt)("p",null,"You can group tests to give them a logical name or to scope before/after hooks to the group."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest.describe('two tests', () => {\n  test('one', async ({ page }) => {\n    // ...\n  });\n\n  test('two', async ({ page }) => {\n    // ...\n  });\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest.describe('two tests', () => {\n  test('one', async ({ page }) => {\n    // ...\n  });\n\n  test('two', async ({ page }) => {\n    // ...\n  });\n});\n")))),(0,r.kt)("h2",{id:"tag-tests"},"Tag tests"),(0,r.kt)("p",null,"Sometimes you want to tag your tests as ",(0,r.kt)("inlineCode",{parentName:"p"},"@fast")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@slow")," and only run the tests that have the certain tag. We recommend that you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--grep")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--grep-invert")," command line flags for that:"),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest('Test login page @fast', async ({ page }) => {\n  // ...\n});\n\ntest('Test full report @slow', async ({ page }) => {\n  // ...\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest('Test login page @fast', async ({ page }) => {\n  // ...\n});\n\ntest('Test full report @slow', async ({ page }) => {\n  // ...\n});\n")))),(0,r.kt)("p",null,"You will then be able to run only that test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --grep @fast\n")),(0,r.kt)("p",null,"Or if you want the opposite, you can skip the tests with a certain tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --grep-invert @slow\n")),(0,r.kt)("h2",{id:"conditionally-skip-a-group-of-tests"},"Conditionally skip a group of tests"),(0,r.kt)("p",null,"For example, you can run a group of tests just in Chromium by passing a callback."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\n\ntest.describe('chromium only', () => {\n  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');\n\n  test.beforeAll(async () => {\n    // This hook is only run in Chromium.\n  });\n\n  test('test 1', async ({ page }) => {\n    // This test is only run in Chromium.\n  });\n\n  test('test 2', async ({ page }) => {\n    // This test is only run in Chromium.\n  });\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\n\ntest.describe('chromium only', () => {\n  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');\n\n  test.beforeAll(async () => {\n    // This hook is only run in Chromium.\n  });\n\n  test('test 1', async ({ page }) => {\n    // This test is only run in Chromium.\n  });\n\n  test('test 2', async ({ page }) => {\n    // This test is only run in Chromium.\n  });\n});\n")))),(0,r.kt)("h2",{id:"use-fixme-in-beforeeach-hook"},"Use fixme in ",(0,r.kt)("inlineCode",{parentName:"h2"},"beforeEach")," hook"),(0,r.kt)("p",null,"To avoid running ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach")," hooks, you can put annotations in the hook itself."),(0,r.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\n\ntest.beforeEach(async ({ page }) => {\n  test.fixme(isMobile, 'Settings page does not work in mobile yet');\n\n  await page.goto('http://localhost:3000/settings');\n});\n\ntest('user profile', async ({ page }) => {\n  await page.click('text=My Profile');\n  // ...\n});\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\n\ntest.beforeEach(async ({ page, isMobile }) => {\n  test.fixme(isMobile, 'Settings page does not work in mobile yet');\n\n  await page.goto('http://localhost:3000/settings');\n});\n\ntest('user profile', async ({ page }) => {\n  await page.click('text=My Profile');\n  // ...\n});\n")))))}d.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function s(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(s&&(s+=" "),s+=t);return s}n.d(t,{Z:function(){return s}})}}]);