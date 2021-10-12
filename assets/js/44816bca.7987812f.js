"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[960],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),d=r,m=g["".concat(l,".").concat(d)]||g[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,u=e.values,g=e.groupId,d=e.className,m=o(),v=m.tabGroupChoices,f=m.setTabGroupChoices,y=(0,a.useState)(r),h=y[0],w=y[1],b=a.Children.toArray(e.children),k=[];if(null!=g){var x=v[g];null!=x&&x!==h&&u.some((function(e){return e.value===x}))&&w(x)}var P=function(e){var t=e.currentTarget,n=k.indexOf(t),a=u[n].value;w(a),null!=g&&(f(g,a),setTimeout((function(){var e,n,a,r,o,i,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case p:var a=k.indexOf(e.target)+1;n=k[a]||k[0];break;case c:var r=k.indexOf(e.target)-1;n=k[r]||k[k.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":h===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:C,onFocus:P,onClick:P},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},1114:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=n(5064),s=n(8215),l={id:"test-pom",title:"Page Object Model"},c=void 0,p={unversionedId:"test-pom",id:"version-1.15/test-pom",isDocsHomePage:!1,title:"Page Object Model",description:"Page Object Model is a common pattern that introduces abstractions over web app pages to simplify interactions with them in multiple tests. It is best explained by an example.",source:"@site/versioned_docs/version-1.15/test-pom.mdx",sourceDirName:".",slug:"/test-pom",permalink:"/docs/test-pom",version:"1.15",frontMatter:{id:"test-pom",title:"Page Object Model"},sidebar:"version-1.15/docs",previous:{title:"Configuration",permalink:"/docs/test-configuration"},next:{title:"Parallelism and sharding",permalink:"/docs/test-parallel"}},u=[],g={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Page Object Model is a common pattern that introduces abstractions over web app pages to simplify interactions with them in multiple tests. It is best explained by an example."),(0,o.kt)("p",null,"We will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"PlaywrightDevPage")," helper class to encapsulate common operations on the ",(0,o.kt)("inlineCode",{parentName:"p"},"playwright.dev")," page. Internally, it will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," object."),(0,o.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright-dev-page.ts\nimport { expect, Locator, Page } from '@playwright/test';\n\nexport class PlaywrightDevPage {\n  readonly page: Page;\n  readonly getStartedLink: Locator;\n  readonly coreConceptsLink: Locator;\n  readonly tocList: Locator;\n\n  constructor(page: Page) {\n    this.page = page;\n    this.getStartedLink = page.locator('text=Get started');\n    this.coreConceptsLink = page.locator('text=Core concepts');\n    this.tocList = page.locator('article ul > li > a');\n  }\n\n  async goto() {\n    await this.page.goto('https://playwright.dev');\n  }\n\n  async getStarted() {\n    await this.getStartedLink.first().click();\n    await expect(this.coreConceptsLink).toBeVisible();\n  }\n\n  async coreConcepts() {\n    await this.getStarted();\n    await this.page.click('text=Guides');\n    await this.coreConceptsLink.click();\n    await expect(this.page.locator('h1').locator(\"text=Core concepts\")).toBeVisible();\n  }\n}\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright-dev-page.js\nconst { expect } = require('@playwright/test');\n\nexports.PlaywrightDevPage = class PlaywrightDevPage {\n\n  /**\n   * @param {import('@playwright/test').Page} page\n   */\n  constructor(page) {\n    this.page = page;\n    this.getStartedLink = page.locator('text=Get started');\n    this.coreConceptsLink = page.locator('text=Core concepts');\n    this.tocList = page.locator('article ul > li > a');\n  }\n\n  async goto() {\n    await this.page.goto('https://playwright.dev');\n  }\n\n  async getStarted() {\n    await this.getStartedLink.first().click();\n    await expect(this.coreConceptsLink).toBeVisible();\n  }\n\n  async coreConcepts() {\n    await this.getStarted();\n    await this.page.click('text=Guides');\n    await this.coreConceptsLink.click();\n    await expect(this.page.locator('h1').locator(\"text=Core concepts\")).toBeVisible();\n  }\n}\n")))),(0,o.kt)("p",null,"Now we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"PlaywrightDevPage")," class in our tests."),(0,o.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\nimport { PlaywrightDevPage } from './playwright-dev-page';\n\ntest('Get Started table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.getStarted();\n  await expect(playwrightDev.tocList).toHaveText([\n    'Installation',\n    'First test',\n    'Writing assertions',\n    'Using test fixtures',\n    'Using test hooks',\n    'Learning the command line',\n    'Creating a configuration file',\n    'Release notes',\n  ]);\n});\n\ntest('Core Concepts table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.coreConcepts();\n  await expect(playwrightDev.tocList.first()).toHaveText('Browser');\n});\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\nconst { PlaywrightDevPage } = require('./playwright-dev-page');\n\ntest('Get Started table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.getStarted();\n  await expect(playwrightDev.tocList).toHaveText([\n    'Installation',\n    'First test',\n    'Writing assertions',\n    'Using test fixtures',\n    'Using test hooks',\n    'Learning the command line',\n    'Creating a configuration file',\n    'Release notes',\n  ]);\n});\n\ntest('Core Concepts table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.coreConcepts();\n  await expect(playwrightDev.tocList.first()).toHaveText('Browser');\n});\n")))))}d.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);