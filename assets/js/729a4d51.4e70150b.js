"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6107],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),f=i,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||s;return a?r.createElement(m,n(n({ref:t},c),{},{components:a})):r.createElement(m,n({ref:t},c))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,n=new Array(s);n[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var u=2;u<s;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7294),i=a(9443);var s=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},n=a(6010),l="tabItem_1uMI",o="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,p=e.values,d=e.groupId,f=e.className,m=s(),h=m.tabGroupChoices,k=m.setTabGroupChoices,v=(0,r.useState)(i),b=v[0],y=v[1],N=r.Children.toArray(e.children),g=[];if(null!=d){var O=h[d];null!=O&&O!==b&&p.some((function(e){return e.value===O}))&&y(O)}var T=function(e){var t=e.currentTarget,a=g.indexOf(t),r=p[a].value;y(r),null!=d&&(k(d,r),setTimeout((function(){var e,a,r,i,s,n,l,u;(e=t.getBoundingClientRect(),a=e.top,r=e.left,i=e.bottom,s=e.right,n=window,l=n.innerHeight,u=n.innerWidth,a>=0&&s<=u&&i<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},S=function(e){var t,a;switch(e.keyCode){case c:var r=g.indexOf(e.target)+1;a=g[r]||g[0];break;case u:var i=g.indexOf(e.target)-1;a=g[i]||g[g.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},f)},p.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,n.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:S,onFocus:T,onClick:T},a)}))),t?(0,r.cloneElement)(N.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,a){var r=(0,a(7294).createContext)(void 0);t.Z=r},4346:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return n},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var r=a(2122),i=a(9756),s=(a(7294),a(3905)),n=(a(5064),a(8215),{id:"class-suite",title:"Suite"}),l=void 0,o={unversionedId:"api/class-suite",id:"version-1.15/api/class-suite",isDocsHomePage:!1,title:"Suite",description:"Suite is a group of tests. All tests in Playwright Test form the following hierarchy:",source:"@site/versioned_docs/version-1.15/api/class-suite.mdx",sourceDirName:"api",slug:"/api/class-suite",permalink:"/docs/api/class-suite",version:"1.15",frontMatter:{id:"class-suite",title:"Suite"},sidebar:"version-1.15/api",previous:{title:"Reporter",permalink:"/docs/api/class-reporter"},next:{title:"TestCase",permalink:"/docs/api/class-testcase"}},u=[{value:"suite.allTests()",id:"suite-all-tests",children:[]},{value:"suite.titlePath()",id:"suite-title-path",children:[]},{value:"suite.location",id:"suite-location",children:[]},{value:"suite.suites",id:"suite-suites",children:[]},{value:"suite.tests",id:"suite-tests",children:[]},{value:"suite.title",id:"suite-title",children:[]}],c={toc:u};function p(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Suite")," is a group of tests. All tests in Playwright Test form the following hierarchy:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Root suite has a child suite for each ",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testproject",title:"TestProject"},"TestProject"),".",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Project suite #1. Has a child suite for each test file in the project.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"File suite #1",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testcase",title:"TestCase"},"TestCase")," #1"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testcase",title:"TestCase"},"TestCase")," #2"),(0,s.kt)("li",{parentName:"ul"},"Suite corresponding to a ",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-test#test-describe"},"test.describe(title, callback)")," group",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testcase",title:"TestCase"},"TestCase")," #1 in a group"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testcase",title:"TestCase"},"TestCase")," #2 in a group"))),(0,s.kt)("li",{parentName:"ul"},"< more test cases ... >"))),(0,s.kt)("li",{parentName:"ul"},"File suite #2"),(0,s.kt)("li",{parentName:"ul"},"< more file suites ... >"))),(0,s.kt)("li",{parentName:"ul"},"Project suite #2"),(0,s.kt)("li",{parentName:"ul"},"< more project suites ... >")))),(0,s.kt)("p",null,"Reporter is given a root suite in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-reporter#reporter-on-begin"},"reporter.onBegin(config, suite)")," method."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-suite#suite-all-tests"},"suite.allTests()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-suite#suite-title-path"},"suite.titlePath()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-suite#suite-location"},"suite.location")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-suite#suite-suites"},"suite.suites")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-suite#suite-tests"},"suite.tests")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-suite#suite-title"},"suite.title"))),(0,s.kt)("h2",{id:"suite-all-tests"},"suite.allTests()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"suite-all-tests-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testcase",title:"TestCase"},"TestCase"),">",">",(0,s.kt)("a",{href:"#suite-all-tests-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the list of all test cases in this suite and its descendants, as opposite to ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-suite#suite-tests"},"suite.tests"),"."),(0,s.kt)("h2",{id:"suite-title-path"},"suite.titlePath()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"suite-title-path-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">",(0,s.kt)("a",{href:"#suite-title-path-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns a list of titles from the root down to this suite."),(0,s.kt)("h2",{id:"suite-location"},"suite.location"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-location",title:"Location"},"Location"),">")),(0,s.kt)("p",null,"Location in the source where the suite is defined. Missing for root and project suites."),(0,s.kt)("h2",{id:"suite-suites"},"suite.suites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-suite",title:"Suite"},"Suite"),">",">")),(0,s.kt)("p",null,"Child suites. See ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-suite",title:"Suite"},"Suite")," for the hierarchy of suites."),(0,s.kt)("h2",{id:"suite-tests"},"suite.tests"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-testcase",title:"TestCase"},"TestCase"),">",">")),(0,s.kt)("p",null,"Test cases in the suite. Note that only test cases defined directly in this suite are in the list. Any test cases defined in nested ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-test#test-describe"},"test.describe(title, callback)")," groups are listed in the child ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-suite#suite-suites"},"suite.suites"),"."),(0,s.kt)("h2",{id:"suite-title"},"suite.title"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,s.kt)("p",null,"Suite title."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Empty for root suite."),(0,s.kt)("li",{parentName:"ul"},"Project name for project suite."),(0,s.kt)("li",{parentName:"ul"},"File path for file suite."),(0,s.kt)("li",{parentName:"ul"},"Title passed to ",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-test#test-describe"},"test.describe(title, callback)")," for a group suite.")))}p.isMDXComponent=!0},6010:function(e,t,a){function r(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}a.d(t,{Z:function(){return i}})}}]);