"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6707],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(67294),a=r(79443);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,p=e.values,d=e.groupId,h=e.className,m=o(),w=m.tabGroupChoices,f=m.setTabGroupChoices,g=(0,n.useState)(a),b=g[0],y=g[1],k=n.Children.toArray(e.children),v=[];if(null!=d){var N=w[d];null!=N&&N!==b&&p.some((function(e){return e.value===N}))&&y(N)}var P=function(e){var t=e.currentTarget,r=v.indexOf(t),n=p[r].value;y(n),null!=d&&(f(d,n),setTimeout((function(){var e,r,n,a,o,i,s,c;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,r>=0&&o<=c&&a<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case u:var n=v.indexOf(e.target)+1;r=v[n]||v[0];break;case c:var a=v.indexOf(e.target)-1;r=v[a]||v[v.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},h)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":b===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:O,onFocus:P,onClick:P},r)}))),t?(0,n.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n},87299:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=r(55064),s=r(58215),l={id:"browsers",title:"Browsers"},c=void 0,u={unversionedId:"browsers",id:"version-1.14/browsers",isDocsHomePage:!1,title:"Browsers",description:"Each version of Playwright needs specific versions of browser binaries to operate. Depending on the language you use, Playwright will either download these browsers at package install time for you, or you will need to use Playwright CLI to install these browsers.",source:"@site/versioned_docs/version-1.14/browsers.mdx",sourceDirName:".",slug:"/browsers",permalink:"/docs/1.14/browsers",version:"1.14",frontMatter:{id:"browsers",title:"Browsers"},sidebar:"version-1.14/docs",previous:{title:"Authentication",permalink:"/docs/1.14/auth"},next:{title:"Chrome Extensions",permalink:"/docs/1.14/chrome-extensions"}},p=[{value:"Chromium",id:"chromium",children:[]},{value:"Firefox",id:"firefox",children:[]},{value:"WebKit",id:"webkit",children:[]},{value:"Google Chrome &amp; Microsoft Edge",id:"google-chrome--microsoft-edge",children:[{value:"When to use Google Chrome &amp; Microsoft Edge and when not to?",id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to",children:[]}]},{value:"Installing browsers",id:"installing-browsers",children:[]},{value:"Managing browser binaries",id:"managing-browser-binaries",children:[{value:"Managing browser binaries",id:"managing-browser-binaries-1",children:[]}]},{value:"Install behind a firewall or a proxy",id:"install-behind-a-firewall-or-a-proxy",children:[]},{value:"Download from artifact repository",id:"download-from-artifact-repository",children:[]},{value:"Skip browser downloads",id:"skip-browser-downloads",children:[]},{value:"Stale browser removal",id:"stale-browser-removal",children:[]}],d={toc:p};function h(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. Depending on the language you use, Playwright will either download these browsers at package install time for you, or you will need to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.14/cli"},"Playwright CLI")," to install these browsers."),(0,o.kt)("p",null,"With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment. It means that every time you update playwright, you might need to re-run the ",(0,o.kt)("inlineCode",{parentName:"p"},"install")," CLI command."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#chromium"},"Chromium")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#firefox"},"Firefox")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#webkit"},"WebKit")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#google-chrome--microsoft-edge"},"Google Chrome & Microsoft Edge")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installing-browsers"},"Installing browsers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#managing-browser-binaries"},"Managing browser binaries")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#install-behind-a-firewall-or-a-proxy"},"Install behind a firewall or a proxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#download-from-artifact-repository"},"Download from artifact repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#skip-browser-downloads"},"Skip browser downloads")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#stale-browser-removal"},"Stale browser removal"))),(0,o.kt)("h2",{id:"chromium"},"Chromium"),(0,o.kt)("p",null,"For Google Chrome, Microsoft Edge and other Chromium-based browsers, by default, Playwright uses open source Chromium builds. Since Chromium project is ahead of the branded browsers, when the world is on Google Chrome N, Playwright already supports Chromium N+1 that will be released in Google Chrome and Microsoft Edge in a few weeks."),(0,o.kt)("p",null,"There is also a way to opt into using Google Chrome's or Microsoft Edge's branded builds for testing. For details on when to opt into stable channels, refer to the ",(0,o.kt)("a",{parentName:"p",href:"#google-chrome--microsoft-edge"},"Google Chrome & Microsoft Edge")," section below."),(0,o.kt)("h2",{id:"firefox"},"Firefox"),(0,o.kt)("p",null,"Playwright's Firefox version matches the recent ",(0,o.kt)("a",{parentName:"p",href:"https://www.mozilla.org/en-US/firefox/new/"},"Firefox Stable")," build."),(0,o.kt)("h2",{id:"webkit"},"WebKit"),(0,o.kt)("p",null,"Playwright's WebKit version matches the recent WebKit trunk build, before it is used in Apple Safari and other WebKit-based browsers. This gives a lot of lead time to react on the potential browser update issues."),(0,o.kt)("h2",{id:"google-chrome--microsoft-edge"},"Google Chrome & Microsoft Edge"),(0,o.kt)("p",null,"While Playwright can download and use the recent Chromium build, it can operate against the stock Google Chrome and Microsoft Edge browsers available on the machine. In particular, current Playwright version will support Stable and Beta channels of these browsers. Here is how you can opt into using the stock browser:"),(0,o.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Library",value:"library"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  use: {\n    channel: 'chrome',\n  },\n};\nexport default config;\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    channel: 'chrome',\n  },\n};\n\nmodule.exports = config;\n"))),(0,o.kt)(s.Z,{value:"library",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');\nconst browser = await chromium.launch({\n  channel: 'chrome' // or 'msedge', 'chrome-beta', 'msedge-beta', 'msedge-dev', etc.\n});\n")))),(0,o.kt)("h3",{id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to"},"When to use Google Chrome & Microsoft Edge and when not to?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Defaults")),(0,o.kt)("p",null,"Using default Playwright configuration with the latest Chromium is a good idea most of the time. Since Playwright is ahead of Stable channels for the browsers, it gives peace of mind that the upcoming Google Chrome or Microsoft Edge releases won't break your site. You catch breakage early and have a lot of time to fix it before the official Chrome update."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Regression testing")),(0,o.kt)("p",null,"Having said that, testing policies often require regression testing to be performed against the current publicly available browsers. In this case, you can opt into one of the stable channels, ",(0,o.kt)("inlineCode",{parentName:"p"},'"chrome"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'"msedge"'),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Media codecs")),(0,o.kt)("p",null,"Another reason for testing using official binaries is to test functionality related to media codecs. Chromium does not have all the codecs that Google Chrome or Microsoft Edge are bundling due to various licensing considerations and agreements. If your site relies on this kind of codecs (which is rarely the case), you also want to use official channel."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enterprise policy")),(0,o.kt)("p",null,"Google Chrome and Microsoft Edge respect enterprise policies, which include limitations to the capabilities, network proxy, mandatory extensions that stand in the way of testing. So if you are a part of the organization that uses such policies, it is the easiest to use bundled Chromium for your local testing, you can still opt into stable channels on the bots that are typically free of such restrictions."),(0,o.kt)("h2",{id:"installing-browsers"},"Installing browsers"),(0,o.kt)("h2",{id:"managing-browser-binaries"},"Managing browser binaries"),(0,o.kt)("p",null,"Playwright downloads Chromium, WebKit and Firefox browsers into the OS-specific cache folders:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),(0,o.kt)("p",null,"These browsers will take a few hundred megabytes of disk space when installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"du -hs ~/Library/Caches/ms-playwright/*\n281M  chromium-XXXXXX\n187M  firefox-XXXX\n180M  webkit-XXXX\n")),(0,o.kt)("p",null,"You can override default behavior using environment variables. When installing Playwright, ask it to download browsers into a specific location:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\nPLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers npx playwright install\n\n# Windows with cmd.exe\nset PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\nnpx playwright install\n\n# Windows with PowerShell\n$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\nnpx playwright install\n')),(0,o.kt)("p",null,"When running Playwright scripts, ask it to search for browsers in a shared location."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\nPLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers npx playwright test\n\n# Windows with cmd.exe\nset PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\nnpx playwright test\n\n# Windows with PowerShell\n$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\nnpx playwright test\n')),(0,o.kt)("p",null,"Playwright keeps track of packages that need those browsers and will garbage collect them as you update Playwright to the newer versions."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Developers can opt-in in this mode via exporting ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers")," in their ",(0,o.kt)("inlineCode",{parentName:"p"},".bashrc"),"."))),(0,o.kt)("h3",{id:"managing-browser-binaries-1"},"Managing browser binaries"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"lang: js")),(0,o.kt)("p",null,"You can opt into the hermetic install and place binaries in the local folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Linux/macOS\n# Places binaries to node_modules/@playwright/test\nPLAYWRIGHT_BROWSERS_PATH=0 npx playwright install\n\n# Windows with cmd.exe\n# Places binaries to node_modules\\@playwright\\test\nset PLAYWRIGHT_BROWSERS_PATH=0\nnpx playwright install\n\n# Windows with PowerShell\n# Places binaries to node_modules\\@playwright\\test\n$env:PLAYWRIGHT_BROWSERS_PATH=0\nnpx playwright install\n")),(0,o.kt)("h2",{id:"install-behind-a-firewall-or-a-proxy"},"Install behind a firewall or a proxy"),(0,o.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,o.kt)("p",null,"Sometimes companies maintain an internal proxy that blocks direct access to the public resources. In this case, Playwright can be configured to download browsers via a proxy server."),(0,o.kt)("h2",{id:"download-from-artifact-repository"},"Download from artifact repository"),(0,o.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,o.kt)("p",null,"Sometimes companies maintain an internal artifact repository to host browser binaries. In this case, Playwright can be configured to download from a custom location using the ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST")," env variable."),(0,o.kt)("p",null,"It is also possible to use a per-browser download hosts using ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," env variables that take precedence over ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST"),"."),(0,o.kt)("h2",{id:"skip-browser-downloads"},"Skip browser downloads"),(0,o.kt)("p",null,"In certain cases, it is desired to avoid browser downloads altogether because browser binaries are managed separately."),(0,o.kt)("p",null,"This can be done by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD")," variable before installation."),(0,o.kt)("h2",{id:"stale-browser-removal"},"Stale browser removal"),(0,o.kt)("p",null,"Playwright keeps track of the clients that use its browsers. When there are no more clients that require particular version of the browser, that version is deleted from the system. That way you can safely use Playwright instances of different versions and at the same time, you don't waste disk space for the browsers that are no longer in use."),(0,o.kt)("p",null,"To opt-out from the unused browser removal, you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_GC=1")," environment variable."))}h.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);