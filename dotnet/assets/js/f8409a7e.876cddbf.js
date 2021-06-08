(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3206],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";n(7294)},1395:function(e,t,n){"use strict";n(7294),n(944)},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1046:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=(n(1395),n(8215),{id:"intro",title:"Getting Started"}),s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Getting Started",description:"- Installation",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/dotnet/docs/intro",version:"current",frontMatter:{id:"intro",title:"Getting Started"},sidebar:"docs",previous:{title:"Why Playwright?",permalink:"/dotnet/docs/why-playwright"},next:{title:"Core concepts",permalink:"/dotnet/docs/core-concepts"}},l=[{value:"Installation",id:"installation",children:[]},{value:"First project",id:"first-project",children:[]},{value:"First test",id:"first-test",children:[]},{value:"Record scripts",id:"record-scripts",children:[]},{value:"System requirements",id:"system-requirements",children:[{value:"Windows",id:"windows",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Linux",id:"linux",children:[]}]}],c={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#first-project"},"First project")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#first-test"},"First test")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#record-scripts"},"Record scripts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#system-requirements"},"System requirements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/release-notes"},"Release notes"))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Start with installing ",(0,i.kt)("inlineCode",{parentName:"p"},"playwright")," dotnet tool globally. This only needs to be done once. Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/cli"},"Playwright CLI")," tool."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet tool install --global Microsoft.Playwright.CLI\n")),(0,i.kt)("h2",{id:"first-project"},"First project"),(0,i.kt)("p",null,"Create a console project and add the Playwright dependency."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Create project\ndotnet new console -n PlaywrightDemo\ncd PlaywrightDemo\n\n# Install dependencies, build project and download necessary browsers.\ndotnet add package Microsoft.Playwright\ndotnet build\nplaywright install\n")),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," that will navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://playwright.dev/dotnet")," and take a screenshot in Chromium."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        var page = await browser.NewPageAsync();\n        await page.GotoAsync("https://playwright.dev/dotnet");\n        await page.ScreenshotAsync(new PageScreenshotOptions { Path = "screenshot.png" });\n    }\n}\n')),(0,i.kt)("p",null,"Now run it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet run\n")),(0,i.kt)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"Headless = false")," flag while launching the browser. You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"slowMo")," to slow down execution. Learn more in the debugging tools ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/debug"},"section"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"await playwright.Firefox.LaunchAsync(new BrowserTypeLaunchOptions { Headless = false, SlowMo = 50 });\n")),(0,i.kt)("h2",{id:"first-test"},"First test"),(0,i.kt)("p",null,"You can choose to use NUnit test fixtures that come bundled with Playwright. These fixtures support running tests on multiple browser engines in parallel, out of the box. Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/test-runners"},"Playwright with NUnit"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Create new project.\ndotnet new nunit -n PlaywrightTests\ncd PlaywrightTests\n")),(0,i.kt)("p",null,"Install dependencies, build project and download necessary browsers. This is only done once per project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Microsoft.Playwright\ndotnet build\nplaywright install\n")),(0,i.kt)("p",null,"Edit UnitTest1.cs file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Threading.Tasks;\nusing Microsoft.Playwright.NUnit;\nusing NUnit.Framework;\n\nnamespace PlaywrightTests\n{\n    [Parallelizable(ParallelScope.Self)]\n    public class Tests : PageTest\n    {\n        [Test]\n        public async Task ShouldAdd()\n        {\n            int result = await Page.EvaluateAsync<int>("() => 7 + 3");\n            Assert.AreEqual(10, result);\n        }\n\n        [Test]\n        public async Task ShouldMultiply()\n        {\n            int result = await Page.EvaluateAsync<int>("() => 7 * 3");\n            Assert.AreEqual(21, result);\n        }\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet test -- NUnit.NumberOfTestWorkers=5\n")),(0,i.kt)("h2",{id:"record-scripts"},"Record scripts"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/cli"},"Command Line Interface")," can be used to record user interactions and generate C# code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"playwright codegen\n")),(0,i.kt)("h2",{id:"system-requirements"},"System requirements"),(0,i.kt)("p",null,"The browser binaries for Chromium, Firefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("p",null,"Works with Windows and Windows Subsystem for Linux (WSL)."),(0,i.kt)("h3",{id:"macos"},"macOS"),(0,i.kt)("p",null,"Requires 10.14 (Mojave) or above."),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("p",null,"Depending on your Linux distribution, you might need to install additional dependencies to run the browsers."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only Ubuntu 18.04 and Ubuntu 20.04 are officially supported."))),(0,i.kt)("p",null,"See also in the ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/cli#install-system-dependencies"},"Command Line Interface")," which has a command to install all necessary dependencies automatically for Ubuntu LTS releases."))}u.isMDXComponent=!0}}]);