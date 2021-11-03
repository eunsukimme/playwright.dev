"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9361],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),o=n(9443);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),r="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,d=e.groupId,m=e.className,k=i(),h=k.tabGroupChoices,f=k.setTabGroupChoices,v=(0,a.useState)(o),b=v[0],N=v[1],y=a.Children.toArray(e.children),C=[];if(null!=d){var g=h[d];null!=g&&g!==b&&p.some((function(e){return e.value===g}))&&N(g)}var w=function(e){var t=e.currentTarget,n=C.indexOf(t),a=p[n].value;N(a),null!=d&&(f(d,a),setTimeout((function(){var e,n,a,o,i,l,r,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,i=e.right,l=window,r=l.innerHeight,u=l.innerWidth,n>=0&&i<=u&&o<=r&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case u:var o=C.indexOf(e.target)-1;n=C[o]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",r,{"tabs__item--active":b===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:w,onClick:w},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},1080:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),l=(n(5064),n(8215),{id:"class-mouse",title:"Mouse"}),r=void 0,s={unversionedId:"api/class-mouse",id:"version-1.14/api/class-mouse",isDocsHomePage:!1,title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/versioned_docs/version-1.14/api/class-mouse.mdx",sourceDirName:"api",slug:"/api/class-mouse",permalink:"/dotnet/docs/1.14/api/class-mouse",version:"1.14",frontMatter:{id:"class-mouse",title:"Mouse"},sidebar:"version-1.14/api",previous:{title:"Locator",permalink:"/dotnet/docs/1.14/api/class-locator"},next:{title:"Page",permalink:"/dotnet/docs/1.14/api/class-page"}},u=[{value:"Mouse.ClickAsync(x, y, options)",id:"mouse-click",children:[]},{value:"Mouse.DblClickAsync(x, y, options)",id:"mouse-dblclick",children:[]},{value:"Mouse.DownAsync(options)",id:"mouse-down",children:[]},{value:"Mouse.MoveAsync(x, y, options)",id:"mouse-move",children:[]},{value:"Mouse.UpAsync(options)",id:"mouse-up",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),(0,i.kt)("p",null,"Every ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-page#page-mouse"},"Page.Mouse"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"await Page.Mouse.MoveAsync(0, 0);\nawait Page.Mouse.DownAsync();\nawait Page.Mouse.MoveAsync(0, 100);\nawait Page.Mouse.MoveAsync(100, 100);\nawait Page.Mouse.MoveAsync(100, 0);\nawait Page.Mouse.MoveAsync(0, 0);\nawait Page.Mouse.UpAsync();\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-mouse#mouse-click"},"Mouse.ClickAsync(x, y, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-mouse#mouse-dblclick"},"Mouse.DblClickAsync(x, y, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-mouse#mouse-move"},"Mouse.MoveAsync(x, y, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"))),(0,i.kt)("h2",{id:"mouse-click"},"Mouse.ClickAsync(x, y, options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-x"})," ","<","[double]",">",(0,i.kt)("a",{href:"#mouse-click-option-x",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-y"})," ","<","[double]",">",(0,i.kt)("a",{href:"#mouse-click-option-y",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"MouseClickOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Button"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),".",(0,i.kt)("a",{href:"#mouse-click-option-button",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ClickCount"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-click-count"})," ","<","[int]","?",">"," defaults to 1. See ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,i.kt)("a",{href:"#mouse-click-option-click-count",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Delay"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-delay"})," ","<","[double]","?",">"," Time to wait between ",(0,i.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,i.kt)("a",{href:"#mouse-click-option-delay",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,i.kt)("a",{href:"#mouse-click-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Shortcut for ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-mouse#mouse-move"},"Mouse.MoveAsync(x, y, options)"),", ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)"),", ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"),"."),(0,i.kt)("h2",{id:"mouse-dblclick"},"Mouse.DblClickAsync(x, y, options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-x"})," ","<","[double]",">",(0,i.kt)("a",{href:"#mouse-dblclick-option-x",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-y"})," ","<","[double]",">",(0,i.kt)("a",{href:"#mouse-dblclick-option-y",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"MouseDblClickOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Button"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),".",(0,i.kt)("a",{href:"#mouse-dblclick-option-button",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Delay"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-delay"})," ","<","[double]","?",">"," Time to wait between ",(0,i.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,i.kt)("a",{href:"#mouse-dblclick-option-delay",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,i.kt)("a",{href:"#mouse-dblclick-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Shortcut for ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-mouse#mouse-move"},"Mouse.MoveAsync(x, y, options)"),", ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)"),", ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"),", ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)")," and ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"),"."),(0,i.kt)("h2",{id:"mouse-down"},"Mouse.DownAsync(options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"MouseDownOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Button"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),".",(0,i.kt)("a",{href:"#mouse-down-option-button",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ClickCount"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-click-count"})," ","<","[int]","?",">"," defaults to 1. See ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,i.kt)("a",{href:"#mouse-down-option-click-count",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,i.kt)("a",{href:"#mouse-down-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"mousedown")," event."),(0,i.kt)("h2",{id:"mouse-move"},"Mouse.MoveAsync(x, y, options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-x"})," ","<","[double]",">",(0,i.kt)("a",{href:"#mouse-move-option-x",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-y"})," ","<","[double]",">",(0,i.kt)("a",{href:"#mouse-move-option-y",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"MouseMoveOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Steps"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-steps"})," ","<","[int]","?",">"," defaults to 1. Sends intermediate ",(0,i.kt)("inlineCode",{parentName:"li"},"mousemove")," events.",(0,i.kt)("a",{href:"#mouse-move-option-steps",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,i.kt)("a",{href:"#mouse-move-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove")," event."),(0,i.kt)("h2",{id:"mouse-up"},"Mouse.UpAsync(options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"MouseUpOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Button"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),".",(0,i.kt)("a",{href:"#mouse-up-option-button",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ClickCount"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-click-count"})," ","<","[int]","?",">"," defaults to 1. See ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,i.kt)("a",{href:"#mouse-up-option-click-count",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,i.kt)("a",{href:"#mouse-up-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," event."))}p.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);