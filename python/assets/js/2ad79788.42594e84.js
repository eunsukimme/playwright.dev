"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[454],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=r.createContext({}),u=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,n=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),h=u(a),m=i,g=h["".concat(s,".").concat(m)]||h[m]||p[m]||n;return a?r.createElement(g,l(l({ref:e},c),{},{components:a})):r.createElement(g,l({ref:e},c))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=a.length,l=new Array(n);l[0]=h;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8215:function(t,e,a){var r=a(7294);e.Z=function(t){var e=t.children,a=t.hidden,i=t.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:i},e)}},5064:function(t,e,a){a.d(e,{Z:function(){return p}});var r=a(7294),i=a(9443);var n=function(){var t=(0,r.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},l=a(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var p=function(t){var e=t.lazy,a=t.block,i=t.defaultValue,p=t.values,h=t.groupId,m=t.className,g=n(),d=g.tabGroupChoices,f=g.setTabGroupChoices,w=(0,r.useState)(i),y=w[0],k=w[1],b=r.Children.toArray(t.children),N=[];if(null!=h){var v=d[h];null!=v&&v!==y&&p.some((function(t){return t.value===v}))&&k(v)}var P=function(t){var e=t.currentTarget,a=N.indexOf(e),r=p[a].value;k(r),null!=h&&(f(h,r),setTimeout((function(){var t,a,r,i,n,l,o,u;(t=e.getBoundingClientRect(),a=t.top,r=t.left,i=t.bottom,n=t.right,l=window,o=l.innerHeight,u=l.innerWidth,a>=0&&n<=u&&i<=o&&r>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(s),setTimeout((function(){return e.classList.remove(s)}),2e3))}),150))},x=function(t){var e,a;switch(t.keyCode){case c:var r=N.indexOf(t.target)+1;a=N[r]||N[0];break;case u:var i=N.indexOf(t.target)-1;a=N[i]||N[N.length-1]}null==(e=a)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},p.map((function(t){var e=t.value,a=t.label;return r.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":y===e}),key:e,ref:function(t){return N.push(t)},onKeyDown:x,onFocus:P,onClick:P},a)}))),e?(0,r.cloneElement)(b.filter((function(t){return t.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==y})}))))}},9443:function(t,e,a){var r=(0,a(7294).createContext)(void 0);e.Z=r},4207:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=a(2122),i=a(9756),n=(a(7294),a(3905)),l=(a(5064),a(8215),{id:"showcase",title:"Community Showcase"}),o=void 0,s={unversionedId:"showcase",id:"showcase",isDocsHomePage:!1,title:"Community Showcase",description:"Users",source:"@site/docs/showcase.mdx",sourceDirName:".",slug:"/showcase",permalink:"/python/docs/next/showcase",version:"current",frontMatter:{id:"showcase",title:"Community Showcase"}},u=[{value:"Users",id:"users",children:[]},{value:"Unofficial language ports",id:"unofficial-language-ports",children:[]},{value:"Tools",id:"tools",children:[]},{value:"Frameworks",id:"frameworks",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Guides",id:"guides",children:[]},{value:"Contributing",id:"contributing",children:[]}],c={toc:u};function p(t){var e=t.components,a=(0,i.Z)(t,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"users"},"Users"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/vscode"},"VS Code"),": Playwright is used to run cross-browser tests on their web builds"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/TypeScript"},"TypeScript"),": Playwright is used to test typescript.js across browsers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/elastic/apm-agent-rum-js"},"Elastic APM JS agent"),": Playwright is used to run benchmark tests across browsers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/blockstack/ux"},"Blockstack"),": Playwright is used to run cross-browser UI tests"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fredericbonnet/instakittens-react-admin"},"Instakittens React admin"),": Playwright is used to run end-to-end test scenarios written with Cucumber"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/xtermjs/xterm.js"},"xterm.js"),": Playwright is used to run cross-browser integration tests"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/accessibility-insights-web"},"Accessibility Insights for Web"),": Playwright is used with Jest and axe-core to run end-to-end functional and accessibility tests of a WebExtension-based browser extension")),(0,n.kt)("h2",{id:"unofficial-language-ports"},"Unofficial language ports"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Playwright for Go",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mxschmitt/playwright-go"},"GitHub repo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/mxschmitt/playwright-go?tab=doc"},"Documentation")))),(0,n.kt)("li",{parentName:"ul"},"Playwright for Crystal",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/naqvis/playwright-cr"},"GitHub repo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://naqvis.github.io/playwright-cr/"},"Documentation"))))),(0,n.kt)("h2",{id:"tools"},"Tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://applitools.com"},"Applitools"),": Add AI-powered visual assertions and run your Playwright tests on all browser, device, and viewport combinations in parallel, without requiring any setup."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.browserstack.com/docs/automate/playwright"},"BrowserStack"),": Run cross-browser Playwright tests in parallel on the BrowserStack cloud"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://checklyhq.com"},"Checkly"),": Run Playwright checks on a schedule or on demand to monitor and test your web application."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Codeception/CodeceptJS"},"CodeceptJS"),": Write scenario-driven Playwright tests with synchronous code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Xiphe/dom-to-playwright"},"dom-to-playwright")," to copy a JSDOM snapshot into a Playwright page."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/elaichenkov/expected-condition-playwright"},"expected-condition-playwright"),": Supplies a set of common expected conditions that can wait for certain states and conditions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://headlesstesting.com/support/start/playwright.html"},"Headless Testing"),": Run Playwright tests on browsers in the cloud"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Widen/lariat"},"Lariat"),": Simplify page object construction for your Playwright tests"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JakePartusch/lumberjack"},"Lumberjack"),": Automated accessibility scanner to run checks on your entire website"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/HLTech/mockiavelli"},"mockiavelli")," Request mocking library for Playwright to test SPA in isolation from backend APIs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/aerokube/moon"},"Moon"),": Run Playwright tests in parallel in Kubernetes cluster (free up to 4 parallel sessions)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hugomrdias/playwright-test"},"playwright-test")," Run unit tests and benchmarks in browsers with Node's seamless experience."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/qawolf/playwright-video"},"playwright-video"),": Capture a video while executing a Playwright script"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/qawolf/qawolf"},"QA Wolf"),": Record and create Playwright tests and then run them in CI"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/testimio/root-cause"},"Root Cause OSS"),": Capture screenshots on every step and display in a viewer with logs for easy troubleshooting."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://saucelabs.com/platform/automation-tools/playwright"},"Sauce Labs"),": Run Playwright tests in parallel in the cloud or your own docker environment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://seleniumbox.com"},"Selenium Box - Enterprise Test Grid"),": Execute Playwright tests securely inside your firewall at scale"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Xiphe/test-real-styles"},"test-real-styles"),": Utility to test real styling of virtual DOM elements in a browser"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.testim.io/playground/"},"Testim Playground"),": Record Playwright UI tests as code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://try.playwright.tech/"},"Try Playwright"),": Interactive playground for Playwright to run examples directly from your browser")),(0,n.kt)("h2",{id:"frameworks"},"Frameworks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Onslip/karma-playwright-launcher"},"karma-playwright-launcher"),": Playwright powered browser support for Karma"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Georgegriff/query-selector-shadow-dom"},"query-selector-shadow-dom"),": Custom selector engine to pierce shadow DOM roots"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hdorgeval/playwright-fluent"},"playwright-fluent"),": Fluent API around Playwright"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://robotframework-browser.org/"},"robotframework-browser")," Robotframework library that uses Playwright to achieve good development ergonomics.")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/e2e-boilerplate?utf8=%E2%9C%93&q=playwright"},"e2e Boilerplates"),": Project boilerplates for using Playwright with TypeScript, Cucumber, Jest, and other libraries"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/KyleADay/react-app-playwright"},"react-app-playwright"),": Using Playwright with a create-react-app project"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/azemetre/playwright-react-typescript-jest-example"},"playwright-react-typescript-jest-example"),": Using Playwright + Jest with a custom webpack configuration for React + TypeScript project"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/roggerfe/playwright-mocha"},"playwright-mocha"),": Using Playwright with Mocha and Chai"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apeckham/playwright-cljs"},"playwright-cljs"),": Playwright examples in ClojureScript"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/arjun27/playwright-azure-functions"},"playwright-azure-functions"),": Playwright setup on Azure Functions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/austinkelleher/playwright-aws-lambda"},"playwright-aws-lambda"),": Playwright setup on AWS Lambda"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/d-shch/playwright-jest-circus-allure"},"playwright-jest-circus-allure"),": Example how to use allure-report and jest-circus with playwright"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mxschmitt/heroku-playwright-example"},"Heroku Playwright Example"),": Example using Playwright on Heroku"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/saucelabs/saucectl-playwright-example"},"Sauce Labs Playwright Example"),": Example using Playwright on Sauce Labs"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/browserstack/playwright-browserstack"},"BrowserStack Playwright Samples"),": Playwright sample tests to run on BrowserStack"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/PauloGoncalvesBH/running-playwright-on-aws-lambda"},"Playwright - Parallel execution on AWS Lambda"),": Running hundreds of Playwright tests in a few seconds with AWS Lambda")),(0,n.kt)("h2",{id:"guides"},"Guides"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://theheadless.dev"},"theheadless.dev"),": Practical guides and runnable examples on Playwright (and Puppeteer)")),(0,n.kt)("h2",{id:"contributing"},"Contributing"),(0,n.kt)("p",null,"Did we miss something in this list? Send us a PR!"))}p.isMDXComponent=!0},6010:function(t,e,a){function r(t){var e,a,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(a=r(t[e]))&&(i&&(i+=" "),i+=a);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}function i(){for(var t,e,a=0,i="";a<arguments.length;)(t=arguments[a++])&&(e=r(t))&&(i&&(i+=" "),i+=e);return i}a.d(e,{Z:function(){return i}})}}]);