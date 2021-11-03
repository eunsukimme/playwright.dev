"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3524],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(67294),a=r(79443);var s=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=r(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,u=e.values,d=e.groupId,h=e.className,f=s(),k=f.tabGroupChoices,m=f.setTabGroupChoices,b=(0,n.useState)(a),g=b[0],v=b[1],N=n.Children.toArray(e.children),T=[];if(null!=d){var y=k[d];null!=y&&y!==g&&u.some((function(e){return e.value===y}))&&v(y)}var w=function(e){var t=e.currentTarget,r=T.indexOf(t),n=u[r].value;v(n),null!=d&&(m(d,n),setTimeout((function(){var e,r,n,a,s,o,i,p;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,s=e.right,o=window,i=o.innerHeight,p=o.innerWidth,r>=0&&s<=p&&a<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},S=function(e){var t,r;switch(e.keyCode){case c:var n=T.indexOf(e.target)+1;r=T[n]||T[0];break;case p:var a=T.indexOf(e.target)-1;r=T[a]||T[T.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},h)},u.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:S,onFocus:w,onClick:w},r)}))),t?(0,n.cloneElement)(N.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n},38315:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var n=r(22122),a=r(19756),s=(r(67294),r(3905)),o=r(55064),i=r(58215),l={id:"class-reporter",title:"Reporter"},p=void 0,c={unversionedId:"api/class-reporter",id:"version-1.15/api/class-reporter",isDocsHomePage:!1,title:"Reporter",description:"Test runner notifies the reporter about various events during test execution. All methods of the reporter are optional.",source:"@site/versioned_docs/version-1.15/api/class-reporter.mdx",sourceDirName:"api",slug:"/api/class-reporter",permalink:"/docs/1.15/api/class-reporter",version:"1.15",frontMatter:{id:"class-reporter",title:"Reporter"},sidebar:"version-1.15/api",previous:{title:"Location",permalink:"/docs/1.15/api/class-location"},next:{title:"Suite",permalink:"/docs/1.15/api/class-suite"}},u=[{value:"reporter.onBegin(config, suite)",id:"reporter-on-begin",children:[]},{value:"reporter.onEnd(result)",id:"reporter-on-end",children:[]},{value:"reporter.onError(error)",id:"reporter-on-error",children:[]},{value:"reporter.onStdErr(chunk, test, result)",id:"reporter-on-std-err",children:[]},{value:"reporter.onStdOut(chunk, test, result)",id:"reporter-on-std-out",children:[]},{value:"reporter.onStepBegin(test, result, step)",id:"reporter-on-step-begin",children:[]},{value:"reporter.onStepEnd(test, result, step)",id:"reporter-on-step-end",children:[]},{value:"reporter.onTestBegin(test, result)",id:"reporter-on-test-begin",children:[]},{value:"reporter.onTestEnd(test, result)",id:"reporter-on-test-end",children:[]}],d={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Test runner notifies the reporter about various events during test execution. All methods of the reporter are optional."),(0,s.kt)("p",null,"You can create a custom reporter by implementing a class with some of the reporter methods. Make sure to export this class as default."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// my-awesome-reporter.ts\nimport { Reporter } from '@playwright/test/reporter';\n\nclass MyReporter implements Reporter {\n  onBegin(config, suite) {\n    console.log(`Starting the run with ${suite.allTests().length} tests`);\n  }\n\n  onTestBegin(test) {\n    console.log(`Starting test ${test.title}`);\n  }\n\n  onTestEnd(test, result) {\n    console.log(`Finished test ${test.title}: ${result.status}`);\n  }\n\n  onEnd(result) {\n    console.log(`Finished the run: ${result.status}`);\n  }\n}\nexport default MyReporter;\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// my-awesome-reporter.js\n// @ts-check\n\n/** @implements {import('@playwright/test/reporter').Reporter} */\nclass MyReporter {\n  onBegin(config, suite) {\n    console.log(`Starting the run with ${suite.allTests().length} tests`);\n  }\n\n  onTestBegin(test) {\n    console.log(`Starting test ${test.title}`);\n  }\n\n  onTestEnd(test, result) {\n    console.log(`Finished test ${test.title}: ${result.status}`);\n  }\n\n  onEnd(result) {\n    console.log(`Finished the run: ${result.status}`);\n  }\n}\n\nmodule.exports = MyReporter;\n")))),(0,s.kt)("p",null,"Now use this reporter with ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-testconfig#test-config-reporter"},"testConfig.reporter"),". Learn more about ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.15/test-reporters"},"using reporters"),"."),(0,s.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: './my-awesome-reporter.ts',\n};\nexport default config;\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: './my-awesome-reporter.js',\n};\n\nmodule.exports = config;\n")))),(0,s.kt)("p",null,"Here is a typical order of reporter calls:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-reporter#reporter-on-begin"},"reporter.onBegin(config, suite)")," is called once with a root suite that contains all other suites and tests. Learn more about ",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-suite",title:"Suite"},"suites hierarchy"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-reporter#reporter-on-test-begin"},"reporter.onTestBegin(test, result)")," is called for each test run. It is given a ",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testcase",title:"TestCase"},"TestCase")," that is executed, and a ",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testresult",title:"TestResult"},"TestResult")," that is almost empty. Test result will be populated while the test runs (for example, with steps and stdio) and will get final ",(0,s.kt)("inlineCode",{parentName:"li"},"status")," once the test finishes."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-reporter#reporter-on-step-begin"},"reporter.onStepBegin(test, result, step)")," and ",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-reporter#reporter-on-step-end"},"reporter.onStepEnd(test, result, step)")," are called for each executed step inside the test. When steps are executed, test run has not finished yet."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-reporter#reporter-on-test-end"},"reporter.onTestEnd(test, result)")," is called when test run has finished. By this time, ",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testresult",title:"TestResult"},"TestResult")," is complete and you can use ",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testresult#test-result-status"},"testResult.status"),", ",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testresult#test-result-error"},"testResult.error")," and more."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-reporter#reporter-on-end"},"reporter.onEnd(result)")," is called once after all tests that should run had finished.")),(0,s.kt)("p",null,"Additionally, ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-reporter#reporter-on-std-out"},"reporter.onStdOut(chunk, test, result)")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-reporter#reporter-on-std-err"},"reporter.onStdErr(chunk, test, result)")," are called when standard output is produced in the worker process, possibly during a test execution, and ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-reporter#reporter-on-error"},"reporter.onError(error)")," is called when something went wrong outside of the test execution."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-reporter#reporter-on-begin"},"reporter.onBegin(config, suite)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-reporter#reporter-on-end"},"reporter.onEnd(result)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-reporter#reporter-on-error"},"reporter.onError(error)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-reporter#reporter-on-std-err"},"reporter.onStdErr(chunk, test, result)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-reporter#reporter-on-std-out"},"reporter.onStdOut(chunk, test, result)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-reporter#reporter-on-step-begin"},"reporter.onStepBegin(test, result, step)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-reporter#reporter-on-step-end"},"reporter.onStepEnd(test, result, step)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-reporter#reporter-on-test-begin"},"reporter.onTestBegin(test, result)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-reporter#reporter-on-test-end"},"reporter.onTestEnd(test, result)"))),(0,s.kt)("h2",{id:"reporter-on-begin"},"reporter.onBegin(config, suite)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"config"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-begin-option-config"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testconfig",title:"TestConfig"},"TestConfig"),">"," Resolved configuration.",(0,s.kt)("a",{href:"#reporter-on-begin-option-config",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"suite"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-begin-option-suite"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-suite",title:"Suite"},"Suite"),">"," The root suite that contains all projects, files and test cases.",(0,s.kt)("a",{href:"#reporter-on-begin-option-suite",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-begin-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#reporter-on-begin-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Called once before running tests. All tests have been already discovered and put into a hierarchy of ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-suite",title:"Suite"},"Suite"),"s."),(0,s.kt)("h2",{id:"reporter-on-end"},"reporter.onEnd(result)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"result"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-end-option-result"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," Result of the full test run.",(0,s.kt)("a",{href:"#reporter-on-end-option-result",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"status")," ","<",'"passed"|"failed"|"timedout"|"interrupted"',">"))),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-end-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,s.kt)("a",{href:"#reporter-on-end-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Called after all tests has been run, or testing has been interrupted. Note that this method may return a ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise")," and Playwright Test will await it."),(0,s.kt)("h2",{id:"reporter-on-error"},"reporter.onError(error)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"error"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-error-option-error"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testerror",title:"TestError"},"TestError"),">"," The error.",(0,s.kt)("a",{href:"#reporter-on-error-option-error",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-error-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#reporter-on-error-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Called on some global error, for example unhandled exception in the worker process."),(0,s.kt)("h2",{id:"reporter-on-std-err"},"reporter.onStdErr(chunk, test, result)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"chunk"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-err-option-chunk"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">"," Output chunk.",(0,s.kt)("a",{href:"#reporter-on-std-err-option-chunk",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-err-option-test"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testcase",title:"TestCase"},"TestCase"),">"," Test that was running. Note that output may happen when to test is running, in which case this will be ",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),".",(0,s.kt)("a",{href:"#reporter-on-std-err-option-test",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"result"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-err-option-result"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testresult",title:"TestResult"},"TestResult"),">"," Result of the test run, this object gets populated while the test runs.",(0,s.kt)("a",{href:"#reporter-on-std-err-option-result",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-err-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#reporter-on-std-err-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Called when something has been written to the standard error in the worker process."),(0,s.kt)("h2",{id:"reporter-on-std-out"},"reporter.onStdOut(chunk, test, result)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"chunk"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-out-option-chunk"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">"," Output chunk.",(0,s.kt)("a",{href:"#reporter-on-std-out-option-chunk",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-out-option-test"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testcase",title:"TestCase"},"TestCase"),">"," Test that was running. Note that output may happen when to test is running, in which case this will be ",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),".",(0,s.kt)("a",{href:"#reporter-on-std-out-option-test",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"result"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-out-option-result"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testresult",title:"TestResult"},"TestResult"),">"," Result of the test run, this object gets populated while the test runs.",(0,s.kt)("a",{href:"#reporter-on-std-out-option-result",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-out-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#reporter-on-std-out-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Called when something has been written to the standard output in the worker process."),(0,s.kt)("h2",{id:"reporter-on-step-begin"},"reporter.onStepBegin(test, result, step)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-begin-option-test"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testcase",title:"TestCase"},"TestCase"),">"," Test that has been started.",(0,s.kt)("a",{href:"#reporter-on-step-begin-option-test",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"result"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-begin-option-result"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testresult",title:"TestResult"},"TestResult"),">"," Result of the test run, this object gets populated while the test runs.",(0,s.kt)("a",{href:"#reporter-on-step-begin-option-result",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"step"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-begin-option-step"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-teststep",title:"TestStep"},"TestStep"),">"," Test step instance.",(0,s.kt)("a",{href:"#reporter-on-step-begin-option-step",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-begin-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#reporter-on-step-begin-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Called when a test step started in the worker process."),(0,s.kt)("h2",{id:"reporter-on-step-end"},"reporter.onStepEnd(test, result, step)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-end-option-test"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testcase",title:"TestCase"},"TestCase"),">"," Test that has been finished.",(0,s.kt)("a",{href:"#reporter-on-step-end-option-test",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"result"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-end-option-result"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testresult",title:"TestResult"},"TestResult"),">"," Result of the test run.",(0,s.kt)("a",{href:"#reporter-on-step-end-option-result",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"step"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-end-option-step"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-teststep",title:"TestStep"},"TestStep"),">"," Test step instance.",(0,s.kt)("a",{href:"#reporter-on-step-end-option-step",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-end-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#reporter-on-step-end-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Called when a test step finished in the worker process."),(0,s.kt)("h2",{id:"reporter-on-test-begin"},"reporter.onTestBegin(test, result)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-begin-option-test"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testcase",title:"TestCase"},"TestCase"),">"," Test that has been started.",(0,s.kt)("a",{href:"#reporter-on-test-begin-option-test",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"result"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-begin-option-result"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testresult",title:"TestResult"},"TestResult"),">"," Result of the test run, this object gets populated while the test runs.",(0,s.kt)("a",{href:"#reporter-on-test-begin-option-result",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-begin-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#reporter-on-test-begin-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Called after a test has been started in the worker process."),(0,s.kt)("h2",{id:"reporter-on-test-end"},"reporter.onTestEnd(test, result)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-end-option-test"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testcase",title:"TestCase"},"TestCase"),">"," Test that has been finished.",(0,s.kt)("a",{href:"#reporter-on-test-end-option-test",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"result"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-end-option-result"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-testresult",title:"TestResult"},"TestResult"),">"," Result of the test run.",(0,s.kt)("a",{href:"#reporter-on-test-end-option-result",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-end-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#reporter-on-test-end-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Called after a test has been finished in the worker process."))}h.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);