(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[83718],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return a?i.createElement(h,l(l({ref:t},p),{},{components:a})):i.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<n;c++)l[c]=a[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var i=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var i=a(67294),r=a(80944),n=a(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,c=39;var p=function(e){var t=e.lazy,a=e.block,p=e.defaultValue,u=e.values,d=e.groupId,m=e.className,h=(0,r.Z)(),f=h.tabGroupChoices,b=h.setTabGroupChoices,v=(0,i.useState)(p),k=v[0],g=v[1],N=i.Children.toArray(e.children),y=[];if(null!=d){var S=f[d];null!=S&&S!==k&&u.some((function(e){return e.value===S}))&&g(S)}var _=function(e){var t=e.currentTarget,a=y.indexOf(t),i=u[a].value;g(i),null!=d&&(b(d,i),setTimeout((function(){var e,a,i,r,n,l,s,c;(e=t.getBoundingClientRect(),a=e.top,i=e.left,r=e.bottom,n=e.right,l=window,s=l.innerHeight,c=l.innerWidth,a>=0&&n<=c&&r<=s&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case c:var i=y.indexOf(e.target)+1;a=y[i]||y[0];break;case s:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return i.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,n.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:_,onClick:_},a)}))),t?(0,i.cloneElement)(N.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,a){"use strict";var i=(0,a(67294).createContext)(void 0);t.Z=i},80944:function(e,t,a){"use strict";var i=a(67294),r=a(79443);t.Z=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},86962:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var i=a(22122),r=a(19756),n=(a(67294),a(3905)),l=(a(41395),a(58215),{id:"class-accessibility",title:"Accessibility"}),o={unversionedId:"api/class-accessibility",id:"version-1.12.0/api/class-accessibility",isDocsHomePage:!1,title:"Accessibility",description:"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as screen readers or switches.",source:"@site/versioned_docs/version-1.12.0/api/class-accessibility.mdx",sourceDirName:"api",slug:"/api/class-accessibility",permalink:"/docs/1.12.0/api/class-accessibility",version:"1.12.0",frontMatter:{id:"class-accessibility",title:"Accessibility"},sidebar:"version-1.12.0/api",previous:{title:"Playwright",permalink:"/docs/1.12.0/api/class-playwright"},next:{title:"Browser",permalink:"/docs/1.12.0/api/class-browser"}},s=[{value:"accessibility.snapshot(options)",id:"accessibility-snapshot",children:[]}],c={toc:s};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Screen_reader"},"screen readers")," or ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Switch_access"},"switches"),"."),(0,n.kt)("p",null,"Accessibility is a very platform-specific thing. On different platforms, there are different screen readers that might have wildly different output."),(0,n.kt)("p",null,'Rendering engines of Chromium, Firefox and WebKit have a concept of "accessibility tree", which is then translated into different platform-specific APIs. Accessibility namespace gives access to this Accessibility Tree.'),(0,n.kt)("p",null,'Most of the accessibility tree gets filtered out when converting from internal browser AX Tree to Platform-specific AX-Tree or by assistive technologies themselves. By default, Playwright tries to approximate this filtering, exposing only the "interesting" nodes of the tree.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-accessibility#accessibility-snapshot"},"accessibility.snapshot([options])"))),(0,n.kt)("h2",{id:"accessibility-snapshot"},"accessibility.snapshot(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"interestingOnly")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Prune uninteresting nodes from the tree. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"root")," ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">"," The root DOM element for the snapshot. Defaults to the whole page."))),(0,n.kt)("li",{parentName:"ul"},"returns: ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"role")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," The ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria/#usage_intro"},"role"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," A human readable name for the node."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," The current value of the node, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"description")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," An additional human readable description of the node, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"keyshortcuts")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Keyboard shortcuts associated with this node, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"roledescription")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," A human readable alternative to the role, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"valuetext")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," A description of the current value, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"disabled")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether the node is disabled, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"expanded")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether the node is expanded or collapsed, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"focused")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether the node is focused, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"modal")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether the node is ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Modal_window"},"modal"),", if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"multiline")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether the node text input supports multiline, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"multiselectable")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether more than one child can be selected, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"readonly")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether the node is read only, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"required")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether the node is required, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"selected")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether the node is selected in its parent node, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"checked")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),'|"mixed"',">",' Whether the checkbox is checked, or "mixed", if applicable.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pressed")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),'|"mixed"',">",' Whether the toggle button is checked, or "mixed", if applicable.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"level")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," The level of a heading, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"valuemin")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," The minimum value in a node, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"valuemax")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," The maximum value in a node, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"autocomplete")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," What kind of autocomplete is supported by a control, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"haspopup")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," What kind of popup is currently being shown for a node, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"invalid")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Whether and in what way this node's value is invalid, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"orientation")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Whether the node is oriented horizontally or vertically, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"children")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">"," Child nodes, if any, if applicable.")))),(0,n.kt)("p",null,"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"The Chromium accessibility tree contains nodes that go unused on most platforms and by most screen readers. Playwright will discard them as well for an easier to process tree, unless ",(0,n.kt)("inlineCode",{parentName:"p"},"interestingOnly")," is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."))),(0,n.kt)("p",null,"An example of dumping the entire accessibility tree:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const snapshot = await page.accessibility.snapshot();\nconsole.log(snapshot);\n")),(0,n.kt)("p",null,"An example of logging the focused node's name:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const snapshot = await page.accessibility.snapshot();\nconst node = findFocusedNode(snapshot);\nconsole.log(node && node.name);\n\nfunction findFocusedNode(node) {\n  if (node.focused)\n    return node;\n  for (const child of node.children || []) {\n    const foundNode = findFocusedNode(child);\n    return foundNode;\n  }\n  return null;\n}\n")))}p.isMDXComponent=!0},86010:function(e,t,a){"use strict";function i(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=i(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);