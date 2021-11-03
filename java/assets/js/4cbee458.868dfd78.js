"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4353],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(r),d=a,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(7294),a=r(9443);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,p=e.values,h=e.groupId,d=e.className,m=o(),f=m.tabGroupChoices,g=m.setTabGroupChoices,w=(0,n.useState)(a),v=w[0],y=w[1],b=n.Children.toArray(e.children),P=[];if(null!=h){var k=f[h];null!=k&&k!==v&&p.some((function(e){return e.value===k}))&&y(k)}var x=function(e){var t=e.currentTarget,r=P.indexOf(t),n=p[r].value;y(n),null!=h&&(g(h,n),setTimeout((function(){var e,r,n,a,o,i,s,c;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,r>=0&&o<=c&&a<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case u:var n=P.indexOf(e.target)+1;r=P[n]||P[0];break;case c:var a=P.indexOf(e.target)-1;r=P[a]||P[P.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":v===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:O,onFocus:x,onClick:x},r)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},613:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=(r(5064),r(8215),{id:"multithreading",title:"Multithreading"}),s=void 0,l={unversionedId:"multithreading",id:"version-1.14/multithreading",isDocsHomePage:!1,title:"Multithreading",description:"Playwright Java is not thread safe, i.e. all its methods as well as methods on all objects created by it (such as [BrowserContext], [Browser], [Page] etc.) are expected to be called on the same thread where the Playwright object was created or proper synchronization should be implemented to ensure only one thread calls Playwright methods at any given time. Having said that it's okay to create multiple Playwright instances each on its own thread.",source:"@site/versioned_docs/version-1.14/threading.mdx",sourceDirName:".",slug:"/multithreading",permalink:"/java/docs/1.14/multithreading",version:"1.14",frontMatter:{id:"multithreading",title:"Multithreading"},sidebar:"version-1.14/docs",previous:{title:"Multi-page scenarios",permalink:"/java/docs/1.14/multi-pages"},next:{title:"Navigations",permalink:"/java/docs/1.14/navigations"}},c=[],u={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright Java is not thread safe, i.e. all its methods as well as methods on all objects created by it (such as ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.14/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),", ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.14/api/class-browser",title:"Browser"},"Browser"),", ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.14/api/class-page",title:"Page"},"Page")," etc.) are expected to be called on the same thread where the Playwright object was created or proper synchronization should be implemented to ensure only one thread calls Playwright methods at any given time. Having said that it's okay to create multiple Playwright instances each on its own thread."),(0,o.kt)("p",null,"Here is an example where three playwright instances are created each on its own thread. Each instance launches its own browser process and runs the test against it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package org.example;\n\nimport com.microsoft.playwright.*;\n\nimport java.nio.file.Paths;\n\nimport static java.util.Arrays.asList;\n\npublic class PlaywrightThread extends Thread {\n  private final String browserName;\n\n  private PlaywrightThread(String browserName) {\n    this.browserName = browserName;\n  }\n\n  public static void main(String[] args) throws InterruptedException {\n    // Create separate playwright thread for each browser.\n    for (String browserName: asList("chromium", "webkit", "firefox")) {\n      Thread thread = new PlaywrightThread(browserName);\n      thread.start();\n    }\n  }\n\n  @Override\n  public void run() {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType browserType = getBrowserType(playwright, browserName);\n      Browser browser = browserType.launch();\n      Page page = browser.newPage();\n      page.navigate("http://whatsmyuseragent.org/");\n      page.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("user-agent-" + browserName + ".png")));\n    }\n  }\n\n  private static BrowserType getBrowserType(Playwright playwright, String browserName) {\n    switch (browserName) {\n      case "chromium":\n        return playwright.chromium();\n      case "webkit":\n        return playwright.webkit();\n      case "firefox":\n        return playwright.firefox();\n      default:\n        throw new IllegalArgumentException();\n    }\n  }\n}\n')))}p.isMDXComponent=!0},6010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);