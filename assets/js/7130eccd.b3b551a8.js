"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3551],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(a),m=n,g=f["".concat(o,".").concat(m)]||f[m]||u[m]||i;return a?r.createElement(g,l(l({ref:t},c),{},{components:a})):r.createElement(g,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},58215:function(e,t,a){var r=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(67294),n=a(79443);var i=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(86010),s="tabItem_1uMI",o="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,u=e.values,f=e.groupId,m=e.className,g=i(),d=g.tabGroupChoices,h=g.setTabGroupChoices,k=(0,r.useState)(n),b=k[0],N=k[1],v=r.Children.toArray(e.children),y=[];if(null!=f){var C=d[f];null!=C&&C!==b&&u.some((function(e){return e.value===C}))&&N(C)}var S=function(e){var t=e.currentTarget,a=y.indexOf(t),r=u[a].value;N(r),null!=f&&(h(f,r),setTimeout((function(){var e,a,r,n,i,l,s,p;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,i=e.right,l=window,s=l.innerHeight,p=l.innerWidth,a>=0&&i<=p&&n<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case c:var r=y.indexOf(e.target)+1;a=y[r]||y[0];break;case p:var n=y.indexOf(e.target)-1;a=y[n]||y[y.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":b===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:S,onClick:S},a)}))),t?(0,r.cloneElement)(v.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,a){var r=(0,a(67294).createContext)(void 0);t.Z=r},28161:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),l=a(55064),s=a(58215),o={id:"class-testconfig",title:"TestConfig"},p=void 0,c={unversionedId:"api/class-testconfig",id:"version-1.15/api/class-testconfig",isDocsHomePage:!1,title:"TestConfig",description:"Playwright Test provides many options to configure how your tests are collected and executed, for example timeout or testDir. These options are described in the TestConfig] object in the [configuration file.",source:"@site/versioned_docs/version-1.15/api/class-testconfig.mdx",sourceDirName:"api",slug:"/api/class-testconfig",permalink:"/docs/1.15/api/class-testconfig",version:"1.15",frontMatter:{id:"class-testconfig",title:"TestConfig"},sidebar:"version-1.15/api",previous:{title:"Playwright Test",permalink:"/docs/1.15/api/class-test"},next:{title:"TestError",permalink:"/docs/1.15/api/class-testerror"}},u=[{value:"testConfig.expect",id:"test-config-expect",children:[]},{value:"testConfig.forbidOnly",id:"test-config-forbid-only",children:[]},{value:"testConfig.globalSetup",id:"test-config-global-setup",children:[]},{value:"testConfig.globalTeardown",id:"test-config-global-teardown",children:[]},{value:"testConfig.globalTimeout",id:"test-config-global-timeout",children:[]},{value:"testConfig.grep",id:"test-config-grep",children:[]},{value:"testConfig.grepInvert",id:"test-config-grep-invert",children:[]},{value:"testConfig.maxFailures",id:"test-config-max-failures",children:[]},{value:"testConfig.metadata",id:"test-config-metadata",children:[]},{value:"testConfig.outputDir",id:"test-config-output-dir",children:[]},{value:"testConfig.preserveOutput",id:"test-config-preserve-output",children:[]},{value:"testConfig.projects",id:"test-config-projects",children:[]},{value:"testConfig.quiet",id:"test-config-quiet",children:[]},{value:"testConfig.repeatEach",id:"test-config-repeat-each",children:[]},{value:"testConfig.reportSlowTests",id:"test-config-report-slow-tests",children:[]},{value:"testConfig.reporter",id:"test-config-reporter",children:[]},{value:"testConfig.retries",id:"test-config-retries",children:[]},{value:"testConfig.shard",id:"test-config-shard",children:[]},{value:"testConfig.testDir",id:"test-config-test-dir",children:[]},{value:"testConfig.testIgnore",id:"test-config-test-ignore",children:[]},{value:"testConfig.testMatch",id:"test-config-test-match",children:[]},{value:"testConfig.timeout",id:"test-config-timeout",children:[]},{value:"testConfig.updateSnapshots",id:"test-config-update-snapshots",children:[]},{value:"testConfig.use",id:"test-config-use",children:[]},{value:"testConfig.workers",id:"test-config-workers",children:[]}],f={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright Test provides many options to configure how your tests are collected and executed, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"testDir"),". These options are described in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-testconfig",title:"TestConfig"},"TestConfig")," object in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/test-configuration"},"configuration file"),"."),(0,i.kt)("p",null,"Playwright Test supports running multiple test projects at the same time. Project-specific options should be put to ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-testconfig#test-config-projects"},"testConfig.projects"),", but top-level ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-testconfig",title:"TestConfig"},"TestConfig")," can also define base options shared between all projects."),(0,i.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  timeout: 30000,\n  globalTimeout: 600000,\n  reporter: 'list',\n  testDir: './tests',\n};\nexport default config;\n"))),(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  timeout: 30000,\n  globalTimeout: 600000,\n  reporter: 'list',\n  testDir: './tests',\n};\n\nmodule.exports = config;\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-expect"},"testConfig.expect")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-forbid-only"},"testConfig.forbidOnly")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-global-setup"},"testConfig.globalSetup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-global-teardown"},"testConfig.globalTeardown")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-global-timeout"},"testConfig.globalTimeout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-grep"},"testConfig.grep")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-grep-invert"},"testConfig.grepInvert")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-max-failures"},"testConfig.maxFailures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-metadata"},"testConfig.metadata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-output-dir"},"testConfig.outputDir")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-preserve-output"},"testConfig.preserveOutput")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-projects"},"testConfig.projects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-quiet"},"testConfig.quiet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-repeat-each"},"testConfig.repeatEach")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-reporter"},"testConfig.reporter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-report-slow-tests"},"testConfig.reportSlowTests")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-retries"},"testConfig.retries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-shard"},"testConfig.shard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-test-dir"},"testConfig.testDir")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-test-ignore"},"testConfig.testIgnore")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-test-match"},"testConfig.testMatch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-timeout"},"testConfig.timeout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-update-snapshots"},"testConfig.updateSnapshots")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-use"},"testConfig.use")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig#test-config-workers"},"testConfig.workers"))),(0,i.kt)("h2",{id:"test-config-expect"},"testConfig.expect"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"toMatchSnapshot")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"threshold")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Image matching threshold between zero (strict) and one (lax).")))))),(0,i.kt)("p",null,"Configuration for the ",(0,i.kt)("inlineCode",{parentName:"p"},"expect")," assertion library."),(0,i.kt)("h2",{id:"test-config-forbid-only"},"testConfig.forbidOnly"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">")),(0,i.kt)("p",null,"Whether to exit with an error if any tests or groups are marked as ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-test#test-only"},"test.only(title, testFunction)")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-test#test-describe-only"},"test.describe.only(title, callback)"),". Useful on CI."),(0,i.kt)("h2",{id:"test-config-global-setup"},"testConfig.globalSetup"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,i.kt)("p",null,"Path to the global setup file. This file will be required and run before all the tests. It must export a single function that takes a ","[",(0,i.kt)("inlineCode",{parentName:"p"},"TestConfig"),"]"," argument."),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/test-advanced#global-setup-and-teardown"},"global setup and teardown"),"."),(0,i.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig, devices } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  globalSetup: './global-setup',\n};\nexport default config;\n"))),(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  globalSetup: './global-setup',\n};\n\nmodule.exports = config;\n")))),(0,i.kt)("h2",{id:"test-config-global-teardown"},"testConfig.globalTeardown"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,i.kt)("p",null,"Path to the global teardown file. This file will be required and run after all the tests. It must export a single function. See also ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-testconfig#test-config-global-setup"},"testConfig.globalSetup"),"."),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/test-advanced#global-setup-and-teardown"},"global setup and teardown"),"."),(0,i.kt)("h2",{id:"test-config-global-timeout"},"testConfig.globalTimeout"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,i.kt)("p",null,"Maximum time in milliseconds the whole test suite can run. Zero timeout (default) disables this behavior. Useful on CI to prevent broken setup from running too long and wasting resources."),(0,i.kt)("h2",{id:"test-config-grep"},"testConfig.grep"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"|",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">",">")),(0,i.kt)("p",null,"Filter to only run tests with a title matching one of the patterns. For example, passing ",(0,i.kt)("inlineCode",{parentName:"p"},"grep: /cart/"),' should only run tests with "cart" in the title. Also available in the ',(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/test-cli"},"command line")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"-g")," option."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"grep")," option is also useful for ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/test-annotations#tag-tests"},"tagging tests"),"."),(0,i.kt)("h2",{id:"test-config-grep-invert"},"testConfig.grepInvert"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"|",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">",">")),(0,i.kt)("p",null,"Filter to only run tests with a title ",(0,i.kt)("strong",{parentName:"p"},"not")," matching one of the patterns. This is the opposite of ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-testconfig#test-config-grep"},"testConfig.grep"),". Also available in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/test-cli"},"command line")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--grep-invert")," option."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"grepInvert")," option is also useful for ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/test-annotations#tag-tests"},"tagging tests"),"."),(0,i.kt)("h2",{id:"test-config-max-failures"},"testConfig.maxFailures"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,i.kt)("p",null,"The maximum number of test failures for the whole test suite run. After reaching this number, testing will stop and exit with an error. Setting to zero (default) disables this behavior."),(0,i.kt)("p",null,"Also available in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/test-cli"},"command line")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--max-failures")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-x")," options."),(0,i.kt)("h2",{id:"test-config-metadata"},"testConfig.metadata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">")),(0,i.kt)("p",null,"Any JSON-serializable metadata that will be put directly to the test report."),(0,i.kt)("h2",{id:"test-config-output-dir"},"testConfig.outputDir"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,i.kt)("p",null,"The output directory for files created during test execution. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"test-results"),"."),(0,i.kt)("p",null,"This directory is cleaned at the start. When running a test, a unique subdirectory inside the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-testconfig#test-config-output-dir"},"testConfig.outputDir")," is created, guaranteeing that test running in parallel do not conflict. This directory can be accessed by ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-testinfo#test-info-output-dir"},"testInfo.outputDir")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-testinfo#test-info-output-path"},"testInfo.outputPath(pathSegments)"),"."),(0,i.kt)("p",null,"Here is an example that uses ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-testinfo#test-info-output-path"},"testInfo.outputPath(pathSegments)")," to create a temporary file."),(0,i.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { test, expect } from '@playwright/test';\nimport fs from 'fs';\n\ntest('example test', async ({}, testInfo) => {\n  const file = testInfo.outputPath('temporary-file.txt');\n  await fs.promises.writeFile(file, 'Put some data to the file', 'utf8');\n});\n"))),(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\nconst fs = require('fs');\n\ntest('example test', async ({}, testInfo) => {\n  const file = testInfo.outputPath('temporary-file.txt');\n  await fs.promises.writeFile(file, 'Put some data to the file', 'utf8');\n});\n")))),(0,i.kt)("h2",{id:"test-config-preserve-output"},"testConfig.preserveOutput"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",'"always"|"never"|"failures-only"',">")),(0,i.kt)("p",null,"Whether to preserve test output in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-testconfig#test-config-output-dir"},"testConfig.outputDir"),". Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"'always'"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'always'")," - preserve output for all tests;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'never'")," - do not preserve output for any tests;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'failures-only'")," - only preserve output for failed tests.")),(0,i.kt)("h2",{id:"test-config-projects"},"testConfig.projects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testproject",title:"TestProject"},"TestProject"),">",">")),(0,i.kt)("p",null,"Playwright Test supports running multiple test projects at the same time. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-testproject",title:"TestProject"},"TestProject")," for more information."),(0,i.kt)("h2",{id:"test-config-quiet"},"testConfig.quiet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">")),(0,i.kt)("p",null,"Whether to suppress stdio and stderr output from the tests."),(0,i.kt)("h2",{id:"test-config-repeat-each"},"testConfig.repeatEach"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,i.kt)("p",null,"The number of times to repeat each test, useful for debugging flaky tests."),(0,i.kt)("h2",{id:"test-config-report-slow-tests"},"testConfig.reportSlowTests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," The maximum number of slow tests to report. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"threshold")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Test duration in milliseconds that is considered slow. Defaults to 15 seconds.")))),(0,i.kt)("p",null,"Whether to report slow tests. Pass ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," to disable this feature."),(0,i.kt)("p",null,"Tests that took more than ",(0,i.kt)("inlineCode",{parentName:"p"},"threshold")," milliseconds are considered slow, and the slowest ones are reported, no more than ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," number of them. Passing zero as ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," reports all slow tests that exceed the threshold."),(0,i.kt)("h2",{id:"test-config-reporter"},"testConfig.reporter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),'>|"list"|"dot"|"line"|"json"|"junit"|"null"',">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Reporter name or module or file path"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," An object with reporter options if any")))),(0,i.kt)("p",null,"The list of reporters to use. Each reporter can be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A builtin reporter name like ",(0,i.kt)("inlineCode",{parentName:"li"},"'list'")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"'json'"),"."),(0,i.kt)("li",{parentName:"ul"},"A module name like ",(0,i.kt)("inlineCode",{parentName:"li"},"'my-awesome-reporter'"),"."),(0,i.kt)("li",{parentName:"ul"},"A relative path to the reporter like ",(0,i.kt)("inlineCode",{parentName:"li"},"'./reporters/my-awesome-reporter.js'"),".")),(0,i.kt)("p",null,"You can pass options to the reporter in a tuple like ",(0,i.kt)("inlineCode",{parentName:"p"},"['json', { outputFile: './report.json' }]"),"."),(0,i.kt)("p",null,"Learn more in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/test-reporters"},"reporters guide"),"."),(0,i.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: 'line',\n};\nexport default config;\n"))),(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: 'line',\n};\n\nmodule.exports = config;\n")))),(0,i.kt)("h2",{id:"test-config-retries"},"testConfig.retries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,i.kt)("p",null,"The maximum number of retry attempts given to failed tests. Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/test-retries#retries"},"test retries"),"."),(0,i.kt)("h2",{id:"test-config-shard"},"testConfig.shard"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"total")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," The total number of shards."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"current")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," The index of the shard to execute, one-based.")))),(0,i.kt)("p",null,"Shard tests and execute only the selected shard. Specify in the one-based form like ",(0,i.kt)("inlineCode",{parentName:"p"},"{ total: 5, current: 2 }"),"."),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/test-parallel"},"parallelism and sharding")," with Playwright Test."),(0,i.kt)("h2",{id:"test-config-test-dir"},"testConfig.testDir"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,i.kt)("p",null,"Directory that will be recursively scanned for test files. Defaults to the directory of the configuration file."),(0,i.kt)("h2",{id:"test-config-test-ignore"},"testConfig.testIgnore"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"|",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">|",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">",">")),(0,i.kt)("p",null,"Files matching one of these patterns are not executed as test files. Matching is performed against the absolute file path. Strings are treated as glob patterns."),(0,i.kt)("p",null,"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"'**/test-assets/**'")," will ignore any files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"test-assets")," directory."),(0,i.kt)("h2",{id:"test-config-test-match"},"testConfig.testMatch"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"|",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">|",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">",">")),(0,i.kt)("p",null,"Only the files matching one of these patterns are executed as test files. Matching is performed against the absolute file path. Strings are treated as glob patterns."),(0,i.kt)("p",null,"By default, Playwright Test looks for files matching ",(0,i.kt)("inlineCode",{parentName:"p"},".*(test|spec)\\.(js|ts|mjs)"),"."),(0,i.kt)("h2",{id:"test-config-timeout"},"testConfig.timeout"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,i.kt)("p",null,"Timeout for each test in milliseconds. Defaults to 30 seconds."),(0,i.kt)("p",null,"This is a base timeout for all tests. In addition, each test can configure its own timeout with ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-test#test-set-timeout"},"test.setTimeout(timeout)"),"."),(0,i.kt)("h2",{id:"test-config-update-snapshots"},"testConfig.updateSnapshots"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",'"all"|"none"|"missing"',">")),(0,i.kt)("p",null,"Whether to update expected snapshots with the actual results produced by the test run. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"'missing'"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'all'")," - All tests that are executed will update snapshots."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'none'")," - No snapshots are updated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'missing'")," - Missing snapshots are created, for example when authoring a new test and running it for the first time. This is the default.")),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/test-snapshots"},"snapshots"),"."),(0,i.kt)("h2",{id:"test-config-use"},"testConfig.use"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testoptions",title:"TestOptions"},"TestOptions"),">")),(0,i.kt)("p",null,"Global options for all tests, for example ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-testoptions#test-options-browser-name"},"testOptions.browserName"),". Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/test-configuration"},"configuration")," and see ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-testoptions",title:"TestOptions"},"available options"),"."),(0,i.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  use: {\n    browserName: 'chromium',\n  },\n};\nexport default config;\n"))),(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    browserName: 'chromium',\n  },\n};\n\nmodule.exports = config;\n")))),(0,i.kt)("h2",{id:"test-config-workers"},"testConfig.workers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,i.kt)("p",null,"The maximum number of concurrent worker processes to use for parallelizing tests."),(0,i.kt)("p",null,"Playwright Test uses worker processes to run tests. There is always at least one worker process, but more can be used to speed up test execution."),(0,i.kt)("p",null,"Defaults to one half of the number of CPU cores. Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/test-parallel"},"parallelism and sharding")," with Playwright Test."))}m.isMDXComponent=!0},86010:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);