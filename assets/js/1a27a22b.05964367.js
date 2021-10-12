"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7085],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(7294),o=t(9443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6010),s="tabItem_1uMI",c="tabItemActive_2DSg";var l=37,u=39;var m=function(e){var n=e.lazy,t=e.block,o=e.defaultValue,m=e.values,p=e.groupId,d=e.className,f=a(),v=f.tabGroupChoices,h=f.setTabGroupChoices,g=(0,r.useState)(o),b=g[0],y=g[1],x=r.Children.toArray(e.children),w=[];if(null!=p){var k=v[p];null!=k&&k!==b&&m.some((function(e){return e.value===k}))&&y(k)}var O=function(e){var n=e.currentTarget,t=w.indexOf(n),r=m[t].value;y(r),null!=p&&(h(p,r),setTimeout((function(){var e,t,r,o,a,i,s,l;(e=n.getBoundingClientRect(),t=e.top,r=e.left,o=e.bottom,a=e.right,i=window,s=i.innerHeight,l=i.innerWidth,t>=0&&a<=l&&o<=s&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c),setTimeout((function(){return n.classList.remove(c)}),2e3))}),150))},C=function(e){var n,t;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;t=w[r]||w[0];break;case l:var o=w.indexOf(e.target)-1;t=w[o]||w[w.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},d)},m.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":b===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:O,onClick:O},t)}))),n?(0,r.cloneElement)(x.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},x.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==b})}))))}},9443:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},6123:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=(t(5064),t(8215),{id:"chrome-extensions",title:"Chrome Extensions"}),s=void 0,c={unversionedId:"chrome-extensions",id:"chrome-extensions",isDocsHomePage:!1,title:"Chrome Extensions",description:"Extensions only work in Chrome / Chromium in non-headless mode.",source:"@site/docs/chrome-extensions.mdx",sourceDirName:".",slug:"/chrome-extensions",permalink:"/docs/next/chrome-extensions",version:"current",frontMatter:{id:"chrome-extensions",title:"Chrome Extensions"},sidebar:"docs",previous:{title:"Browsers",permalink:"/docs/next/browsers"},next:{title:"Command line tools",permalink:"/docs/next/cli"}},l=[],u={toc:l};function m(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Extensions only work in Chrome / Chromium in non-headless mode."))),(0,a.kt)("p",null,"The following is code for getting a handle to the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.chrome.com/extensions/background_pages"},"background page")," of an extension whose source is located in ",(0,a.kt)("inlineCode",{parentName:"p"},"./my-extension"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');\n\n(async () => {\n  const pathToExtension = require('path').join(__dirname, 'my-extension');\n  const userDataDir = '/tmp/test-user-data-dir';\n  const browserContext = await chromium.launchPersistentContext(userDataDir,{\n    headless: false,\n    args: [\n      `--disable-extensions-except=${pathToExtension}`,\n      `--load-extension=${pathToExtension}`\n    ]\n  });\n  const backgroundPage = browserContext.backgroundPages()[0];\n  // Test the background page as you would any other page.\n  await browserContext.close();\n})();\n")))}m.isMDXComponent=!0},6010:function(e,n,t){function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})}}]);