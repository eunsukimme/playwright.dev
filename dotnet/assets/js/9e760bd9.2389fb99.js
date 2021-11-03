"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5868],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),r=a(9443);var l=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(6010),o="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,d=39;var p=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,p=e.values,u=e.groupId,m=e.className,h=l(),f=h.tabGroupChoices,g=h.setTabGroupChoices,y=(0,n.useState)(r),v=y[0],k=y[1],b=n.Children.toArray(e.children),N=[];if(null!=u){var w=f[u];null!=w&&w!==v&&p.some((function(e){return e.value===w}))&&k(w)}var H=function(e){var t=e.currentTarget,a=N.indexOf(t),n=p[a].value;k(n),null!=u&&(g(u,n),setTimeout((function(){var e,a,n,r,l,s,o,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,s=window,o=s.innerHeight,c=s.innerWidth,a>=0&&l<=c&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},A=function(e){var t,a;switch(e.keyCode){case d:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case c:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,s.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:A,onFocus:H,onClick:H},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},6074:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),s=(a(5064),a(8215),{id:"handles",title:"Handles"}),o=void 0,i={unversionedId:"handles",id:"version-1.14/handles",isDocsHomePage:!1,title:"Handles",description:"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:",source:"@site/versioned_docs/version-1.14/handles.mdx",sourceDirName:".",slug:"/handles",permalink:"/dotnet/docs/1.14/handles",version:"1.14",frontMatter:{id:"handles",title:"Handles"},sidebar:"version-1.14/docs",previous:{title:"Extensibility",permalink:"/dotnet/docs/1.14/extensibility"},next:{title:"Input",permalink:"/dotnet/docs/1.14/input"}},c=[{value:"API reference",id:"api-reference",children:[]},{value:"Element Handles",id:"element-handles",children:[]},{value:"Handles as parameters",id:"handles-as-parameters",children:[]},{value:"Handle Lifecycle",id:"handle-lifecycle",children:[{value:"API reference",id:"api-reference-1",children:[]}]}],d={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-jshandle",title:"JSHandle"},"JSHandle")," to reference any JavaScript objects in the page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," to reference DOM elements in the page, it has extra methods that allow performing actions on the elements and asserting their properties.")),(0,l.kt)("p",null,"Since any DOM element in the page is also a JavaScript object, any ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is a ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-jshandle",title:"JSHandle"},"JSHandle")," as well."),(0,l.kt)("p",null,"Handles are used to perform operations on those actual objects in the page. You can evaluate on a handle, get handle properties, pass handle as an evaluation parameter, serialize page object into JSON etc. See the ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-jshandle",title:"JSHandle"},"JSHandle")," class API for these and methods."),(0,l.kt)("h3",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"))),(0,l.kt)("p",null,"Here is the easiest way to obtain a ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var jsHandle = await page.EvaluateHandleAsync("window");\n//  Use jsHandle for evaluations.\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var ulElementHandle = await page.WaitForSelectorAsync("ul");\n//  Use ulElementHandle for actions and evaluation.\n')),(0,l.kt)("h2",{id:"element-handles"},"Element Handles"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"It is recommended to use selector-based actions like ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-page#page-click"},"Page.ClickAsync(selector, options)")," rather than using the ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," for input actions, unless your use case specifically requires the use of handles."))),(0,l.kt)("p",null,"When ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is required, it is recommended to fetch it with the ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-page#page-wait-for-selector"},"Page.WaitForSelectorAsync(selector, options)")," or ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-frame#frame-wait-for-selector"},"Frame.WaitForSelectorAsync(selector, options)")," methods. These APIs wait for the element to be attached and visible."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'// Get the element handle\nvar jsHandle = await page.WaitForSelectorAsync("#box");\nvar elementHandle = jsHandle as ElementHandle;\n\n// Assert bounding box for the element\nvar boundingBox = await elementHandle.BoundingBoxAsync();\nAssert.Equal(100, boundingBox.Width);\n\n// Assert attribute for the element\nvar classNames = await elementHandle.GetAttributeAsync("class");\nAssert.True(classNames.Contains("highlighted"));\n')),(0,l.kt)("h2",{id:"handles-as-parameters"},"Handles as parameters"),(0,l.kt)("p",null,"Handles can be passed into the ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-page#page-evaluate"},"Page.EvaluateAsync(expression, arg)")," and similar methods. The following snippet creates a new array in the page, initializes it with data and returns a handle to this array into Playwright. It then uses the handle in subsequent evaluations:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'// Create new array in page.\nvar myArrayHandle = await page.EvaluateHandleAsync(@"() => {\n    window.myArray = [1];\n    return myArray;\n}");\n\n// Get the length of the array.\nvar length = await page.EvaluateAsync<int>("a => a.length", myArrayHandle);\n\n// Add one more element to the array using the handle\nawait page.EvaluateAsync("arg => arg.myArray.add(arg.newElement)",\n    new { myArray = myArrayHandle, newElement = 2 });\n\n// Release the object when it is no longer needed.\nawait myArrayHandle.DisposeAsync();\n')),(0,l.kt)("h2",{id:"handle-lifecycle"},"Handle Lifecycle"),(0,l.kt)("p",null,"Handles can be acquired using the page methods such as ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-page#page-evaluate-handle"},"Page.EvaluateHandleAsync(expression, arg)"),", ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-page#page-query-selector"},"Page.QuerySelectorAsync(selector, options)")," or ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-page#page-query-selector-all"},"Page.QuerySelectorAllAsync(selector)")," or their frame counterparts ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-frame#frame-evaluate-handle"},"Frame.EvaluateHandleAsync(expression, arg)"),", ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-frame#frame-query-selector"},"Frame.QuerySelectorAsync(selector, options)")," or ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-frame#frame-query-selector-all"},"Frame.QuerySelectorAllAsync(selector)"),". Once created, handles will retain object from ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"},"garbage collection")," unless page navigates or the handle is manually disposed via the ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-jshandle#js-handle-dispose"},"JsHandle.DisposeAsync()")," method."),(0,l.kt)("h3",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-elementhandle#element-handle-bounding-box"},"ElementHandle.BoundingBoxAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-elementhandle#element-handle-get-attribute"},"ElementHandle.GetAttributeAsync(name)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-elementhandle#element-handle-inner-text"},"ElementHandle.InnerTextAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-elementhandle#element-handle-inner-html"},"ElementHandle.InnerHTMLAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-elementhandle#element-handle-text-content"},"ElementHandle.TextContentAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-jshandle#js-handle-evaluate"},"JsHandle.EvaluateAsync(expression, arg)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-page#page-evaluate-handle"},"Page.EvaluateHandleAsync(expression, arg)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-page#page-query-selector"},"Page.QuerySelectorAsync(selector, options)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-page#page-query-selector-all"},"Page.QuerySelectorAllAsync(selector)"))))}p.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);