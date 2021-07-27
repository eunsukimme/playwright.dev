(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2651],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),u=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(r,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(k,l(l({ref:t},c),{},{components:n})):o.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";n(7294)},1395:function(e,t,n){"use strict";n(7294),n(944)},9443:function(e,t,n){"use strict";var o=(0,n(7294).createContext)(void 0);t.Z=o},944:function(e,t,n){"use strict";var o=n(7294),a=n(9443);t.Z=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2173:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return r},default:function(){return c}});var o=n(2122),a=n(9756),i=(n(7294),n(3905)),l=(n(1395),n(8215),{id:"class-mouse",title:"Mouse"}),s={unversionedId:"api/class-mouse",id:"api/class-mouse",isDocsHomePage:!1,title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/docs/api/class-mouse.mdx",sourceDirName:"api",slug:"/api/class-mouse",permalink:"/dotnet/docs/next/api/class-mouse",version:"current",frontMatter:{id:"class-mouse",title:"Mouse"},sidebar:"api",previous:{title:"Keyboard",permalink:"/dotnet/docs/next/api/class-keyboard"},next:{title:"Page",permalink:"/dotnet/docs/next/api/class-page"}},r=[{value:"Mouse.ClickAsync(x, y, options)",id:"mouse-click",children:[]},{value:"Mouse.DblClickAsync(x, y, options)",id:"mouse-dblclick",children:[]},{value:"Mouse.DownAsync(options)",id:"mouse-down",children:[]},{value:"Mouse.MoveAsync(x, y, options)",id:"mouse-move",children:[]},{value:"Mouse.UpAsync(options)",id:"mouse-up",children:[]}],u={toc:r};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),(0,i.kt)("p",null,"Every ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-page#page-mouse"},"Page.Mouse"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"await Page.Mouse.MoveAsync(0, 0);\nawait Page.Mouse.DownAsync();\nawait Page.Mouse.MoveAsync(0, 100);\nawait Page.Mouse.MoveAsync(100, 100);\nawait Page.Mouse.MoveAsync(100, 0);\nawait Page.Mouse.MoveAsync(0, 0);\nawait Page.Mouse.UpAsync();\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-mouse#mouse-click"},"Mouse.ClickAsync(x, y, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-mouse#mouse-dblclick"},"Mouse.DblClickAsync(x, y, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-mouse#mouse-move"},"Mouse.MoveAsync(x, y, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"))),(0,i.kt)("h2",{id:"mouse-click"},"Mouse.ClickAsync(x, y, options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-x"})," ","<","[double]",">",(0,i.kt)("a",{href:"#mouse-click-option-x",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-y"})," ","<","[double]",">",(0,i.kt)("a",{href:"#mouse-click-option-y",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"MouseClickOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Button"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),".",(0,i.kt)("a",{href:"#mouse-click-option-button",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ClickCount"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-click-count"})," ","<","[int]","?",">"," defaults to 1. See ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,i.kt)("a",{href:"#mouse-click-option-click-count",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Delay"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-delay"})," ","<","[double]","?",">"," Time to wait between ",(0,i.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,i.kt)("a",{href:"#mouse-click-option-delay",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,i.kt)("a",{href:"#mouse-click-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Shortcut for ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-mouse#mouse-move"},"Mouse.MoveAsync(x, y, options)"),", ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)"),", ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"),"."),(0,i.kt)("h2",{id:"mouse-dblclick"},"Mouse.DblClickAsync(x, y, options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-x"})," ","<","[double]",">",(0,i.kt)("a",{href:"#mouse-dblclick-option-x",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-y"})," ","<","[double]",">",(0,i.kt)("a",{href:"#mouse-dblclick-option-y",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"MouseDblClickOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Button"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),".",(0,i.kt)("a",{href:"#mouse-dblclick-option-button",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Delay"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-delay"})," ","<","[double]","?",">"," Time to wait between ",(0,i.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,i.kt)("a",{href:"#mouse-dblclick-option-delay",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,i.kt)("a",{href:"#mouse-dblclick-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Shortcut for ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-mouse#mouse-move"},"Mouse.MoveAsync(x, y, options)"),", ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)"),", ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"),", ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-mouse#mouse-down"},"Mouse.DownAsync(options)")," and ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/next/api/class-mouse#mouse-up"},"Mouse.UpAsync(options)"),"."),(0,i.kt)("h2",{id:"mouse-down"},"Mouse.DownAsync(options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"MouseDownOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Button"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),".",(0,i.kt)("a",{href:"#mouse-down-option-button",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ClickCount"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-click-count"})," ","<","[int]","?",">"," defaults to 1. See ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,i.kt)("a",{href:"#mouse-down-option-click-count",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,i.kt)("a",{href:"#mouse-down-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"mousedown")," event."),(0,i.kt)("h2",{id:"mouse-move"},"Mouse.MoveAsync(x, y, options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-x"})," ","<","[double]",">",(0,i.kt)("a",{href:"#mouse-move-option-x",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-y"})," ","<","[double]",">",(0,i.kt)("a",{href:"#mouse-move-option-y",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"MouseMoveOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Steps"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-steps"})," ","<","[int]","?",">"," defaults to 1. Sends intermediate ",(0,i.kt)("inlineCode",{parentName:"li"},"mousemove")," events.",(0,i.kt)("a",{href:"#mouse-move-option-steps",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,i.kt)("a",{href:"#mouse-move-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove")," event."),(0,i.kt)("h2",{id:"mouse-up"},"Mouse.UpAsync(options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"MouseUpOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Button"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-button"})," ","<",'"left"|"right"|"middle"',">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),".",(0,i.kt)("a",{href:"#mouse-up-option-button",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ClickCount"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-click-count"})," ","<","[int]","?",">"," defaults to 1. See ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,i.kt)("a",{href:"#mouse-up-option-click-count",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,i.kt)("a",{href:"#mouse-up-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," event."))}c.isMDXComponent=!0}}]);