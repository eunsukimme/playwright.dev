(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3991],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,v=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(944),i=n(6010),o="tabItem_1uMI",c="tabItemActive_2DSg";var l=37,s=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,f=e.groupId,m=e.className,v=(0,a.Z)(),d=v.tabGroupChoices,y=v.setTabGroupChoices,g=(0,r.useState)(u),h=g[0],b=g[1],w=r.Children.toArray(e.children),x=[];if(null!=f){var O=d[f];null!=O&&O!==h&&p.some((function(e){return e.value===O}))&&b(O)}var E=function(e){var t=e.currentTarget,n=x.indexOf(t),r=p[n].value;b(r),null!=f&&(y(f,r),setTimeout((function(){var e,n,r,a,i,o,l,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,s=o.innerWidth,n>=0&&i<=s&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},k=function(e){var t,n;switch(e.keyCode){case s:var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case l:var a=x.indexOf(e.target)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:k,onFocus:E,onClick:E},n)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6170:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=(n(1395),n(8215),{id:"class-playwrightexception",title:"PlaywrightException"}),c={unversionedId:"api/class-playwrightexception",id:"version-1.13.0/api/class-playwrightexception",isDocsHomePage:!1,title:"PlaywrightException",description:"* extends: [RuntimeException]",source:"@site/versioned_docs/version-1.13.0/api/class-playwrightexception.mdx",sourceDirName:"api",slug:"/api/class-playwrightexception",permalink:"/java/docs/api/class-playwrightexception",version:"1.13.0",frontMatter:{id:"class-playwrightexception",title:"PlaywrightException"},sidebar:"version-1.13.0/api",previous:{title:"Page",permalink:"/java/docs/api/class-page"},next:{title:"Request",permalink:"/java/docs/api/class-request"}},l=[],s={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"extends: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/RuntimeException.html",title:"RuntimeException"},"RuntimeException"))),(0,i.kt)("p",null,"PlaywrightException is thrown whenever certain operations are terminated abnormally, e.g. browser closes while ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-page#page-evaluate"},"Page.evaluate(expression[, arg])")," is running. All Playwright exceptions inherit from this class."))}u.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);