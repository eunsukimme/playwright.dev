(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{150:function(e,t,a){"use strict";function r(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=b(a),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||n;return a?i.a.createElement(m,l(l({ref:t},s),{},{components:a})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<n;s++)c[s]=a[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},152:function(e,t,a){"use strict";var r=a(0),i=a(153);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},153:function(e,t,a){"use strict";var r=a(0),i=Object(r.createContext)(void 0);t.a=i},154:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(152),c=a(150),l=a(55),o=a.n(l),s=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,u=e.values,p=e.groupId,h=e.className,m=Object(n.a)(),j=m.tabGroupChoices,g=m.setTabGroupChoices,O=Object(r.useState)(l),f=O[0],d=O[1],w=r.Children.toArray(e.children);if(null!=p){var y=j[p];null!=y&&y!==f&&u.some((function(e){return e.value===y}))&&d(y)}var N=function(e){d(e),null!=p&&g(p,e)},v=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},h)},u.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(r.cloneElement)(w.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},155:function(e,t,a){"use strict";var r=a(3),i=a(0),n=a.n(i);t.a=function(e){var t=e.children,a=e.hidden,i=e.className;return n.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:a,className:i}),t)}},89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var r=a(3),i=a(7),n=(a(0),a(151)),c=(a(154),a(155),{id:"showcase",title:"Community Showcase"}),l={unversionedId:"showcase",id:"showcase",isDocsHomePage:!1,title:"Community Showcase",description:"Users",source:"@site/docs/showcase.mdx",slug:"/showcase",permalink:"/java/docs/showcase",version:"current"},o=[{value:"Users",id:"users",children:[]},{value:"Unofficial language ports",id:"unofficial-language-ports",children:[]},{value:"Tools",id:"tools",children:[]},{value:"Frameworks",id:"frameworks",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Guides",id:"guides",children:[]},{value:"Contributing",id:"contributing",children:[]}],s={toc:o};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"users"},"Users"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/microsoft/vscode"}),"VS Code"),": Playwright is used to run cross-browser tests on their web builds"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/microsoft/TypeScript"}),"TypeScript"),": Playwright is used test typescript.js across browsers"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/elastic/apm-agent-rum-js"}),"Elastic APM JS agent"),": Playwright is used to run benchmark tests across browsers"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/blockstack/ux"}),"Blockstack"),": Playwright is used to run cross-browser UI tests"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/fredericbonnet/instakittens-react-admin"}),"Instakittens React admin"),": Playwright is used to run end-to-end test scenarios written with Cucumber"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/xtermjs/xterm.js"}),"xterm.js"),": Playwright is used to run cross-browser integration tests"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/microsoft/accessibility-insights-web"}),"Accessibility Insights for Web"),": Playwright is used with Jest and axe-core to run end-to-end functional and accessibility tests of a WebExtension-based browser extension")),Object(n.b)("h2",{id:"unofficial-language-ports"},"Unofficial language ports"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Playwright for Go",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mxschmitt/playwright-go"}),"GitHub repo")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://pkg.go.dev/github.com/mxschmitt/playwright-go?tab=doc"}),"Documentation")))),Object(n.b)("li",{parentName:"ul"},"Playwright for Crystal",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/naqvis/playwright-cr"}),"GitHub repo")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://naqvis.github.io/playwright-cr/"}),"Documentation"))))),Object(n.b)("h2",{id:"tools"},"Tools"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Codeception/CodeceptJS"}),"CodeceptJS"),": Write scenario-driven Playwright tests with synchronous code"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Xiphe/dom-to-playwright"}),"dom-to-playwright")," to copy a JSDOM snapshot into a Playwright page."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/elaichenkov/expected-condition-playwright"}),"expected-condition-playwright"),": Supplies a set of common expected conditions that can wait for certain states and conditions"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://headlesstesting.com/support/start/playwright.html"}),"Headless Testing"),": Run Playwright tests on browsers in the cloud"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/JakePartusch/lumberjack"}),"Lumberjack"),": Automated accessibility scanner to run checks on your entire website"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/HLTech/mockiavelli"}),"mockiavelli")," Request mocking library for Playwright to test SPA in isolation from backend APIs."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/aerokube/moon"}),"Moon"),": Run Playwright tests in parallel in Kubernetes cluster (free up to 4 parallel sessions)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/hugomrdias/playwright-test"}),"playwright-test")," Run unit tests and benchmarks in browsers with Node's seamless experience."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/qawolf/playwright-video"}),"playwright-video"),": Capture a video while executing a Playwright script"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/qawolf/qawolf"}),"QA Wolf"),": Record and create Playwright tests and then run them in CI"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/testimio/root-cause"}),"Root Cause OSS"),": Capture screenshots on every step and display in a viewer with logs for easy troubleshooting."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Xiphe/test-real-styles"}),"test-real-styles"),": Utility to test real styling of virtual DOM elements in a browser"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.testim.io/playground/"}),"Testim Playground"),": Record Playwright UI tests as code"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://try.playwright.tech/"}),"Try Playwright"),": Interactive playground for Playwright to run examples directly from your browser"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://applitools.com"}),"Applitools"),": Add AI-powered visual assertions and run your Playwright tests on all browser, device, and viewport combinations in parallel, without requiring any setup.")),Object(n.b)("h2",{id:"frameworks"},"Frameworks"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mmarkelov/jest-playwright"}),"jest-playwright"),": Jest preset to run Playwright tests with Jest"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Georgegriff/query-selector-shadow-dom"}),"query-selector-shadow-dom"),": Custom selector engine to pierce shadow DOM roots"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/hdorgeval/playwright-fluent"}),"playwright-fluent"),": Fluent API around Playwright"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://robotframework-browser.org/"}),"robotframework-browser")," Robotframework library that uses Playwright to achieve good development ergonomics.")),Object(n.b)("h2",{id:"examples"},"Examples"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/e2e-boilerplate?utf8=%E2%9C%93&q=playwright"}),"e2e Boilerplates"),": Project boilerplates for using Playwright with TypeScript, Cucumber, Jest, and other libraries"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/KyleADay/react-app-playwright"}),"react-app-playwright"),": Using Playwright with a create-react-app project"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/azemetre/playwright-react-typescript-jest-example"}),"playwright-react-typescript-jest-example"),": Using Playwright + Jest with a custom webpack configuration for React + Typescript project"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/roggerfe/playwright-mocha"}),"playwright-mocha"),": Using Playwright with Mocha and Chai"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/apeckham/playwright-cljs"}),"playwright-cljs"),": Playwright examples in ClojureScript"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/arjun27/playwright-azure-functions"}),"playwright-azure-functions"),": Playwright setup on Azure Functions"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/austinkelleher/playwright-aws-lambda"}),"playwright-aws-lambda"),": Playwright setup on AWS Lambda"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/d-shch/playwright-jest-circus-allure"}),"playwright-jest-circus-allure"),": Example how to use allure-report and jest-circus with playwright"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mxschmitt/heroku-playwright-example"}),"Heroku Playwright Example"),": Example using Playwright on Heroku")),Object(n.b)("h2",{id:"guides"},"Guides"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://theheadless.dev"}),"theheadless.dev"),": Practical guides and runnable examples on Playwright (and Puppeteer)")),Object(n.b)("h2",{id:"contributing"},"Contributing"),Object(n.b)("p",null,"Did we miss something in this list? Send us a PR!"))}b.isMDXComponent=!0}}]);