"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9354],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<s;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){var a=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(67294),n=r(79443);var s=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var u=37,p=39;var c=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,c=e.values,d=e.groupId,m=e.className,h=s(),f=h.tabGroupChoices,k=h.setTabGroupChoices,b=(0,a.useState)(n),v=b[0],N=b[1],q=a.Children.toArray(e.children),g=[];if(null!=d){var y=f[d];null!=y&&y!==v&&c.some((function(e){return e.value===y}))&&N(y)}var S=function(e){var t=e.currentTarget,r=g.indexOf(t),a=c[r].value;N(a),null!=d&&(k(d,a),setTimeout((function(){var e,r,a,n,s,i,l,u;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,s=e.right,i=window,l=i.innerHeight,u=i.innerWidth,r>=0&&s<=u&&n<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},_=function(e){var t,r;switch(e.keyCode){case p:var a=g.indexOf(e.target)+1;r=g[a]||g[0];break;case u:var n=g.indexOf(e.target)-1;r=g[n]||g[g.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},c.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":v===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:_,onFocus:S,onClick:S},r)}))),t?(0,a.cloneElement)(q.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},q.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,r){var a=(0,r(67294).createContext)(void 0);t.Z=a},94884:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return c}});var a=r(22122),n=r(19756),s=(r(67294),r(3905)),i=(r(55064),r(58215),{id:"class-request",title:"Request"}),l=void 0,o={unversionedId:"api/class-request",id:"version-1.16/api/class-request",isDocsHomePage:!1,title:"Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/versioned_docs/version-1.16/api/class-request.mdx",sourceDirName:"api",slug:"/api/class-request",permalink:"/docs/api/class-request",version:"1.16",frontMatter:{id:"class-request",title:"Request"},sidebar:"version-1.16/api",previous:{title:"Page",permalink:"/docs/api/class-page"},next:{title:"Response",permalink:"/docs/api/class-response"}},u=[{value:"request.allHeaders()",id:"request-all-headers",children:[]},{value:"request.failure()",id:"request-failure",children:[]},{value:"request.frame()",id:"request-frame",children:[]},{value:"request.headerValue(name)",id:"request-header-value",children:[]},{value:"request.headers()",id:"request-headers",children:[]},{value:"request.headersArray()",id:"request-headers-array",children:[]},{value:"request.isNavigationRequest()",id:"request-is-navigation-request",children:[]},{value:"request.method()",id:"request-method",children:[]},{value:"request.postData()",id:"request-post-data",children:[]},{value:"request.postDataBuffer()",id:"request-post-data-buffer",children:[]},{value:"request.postDataJSON()",id:"request-post-data-json",children:[]},{value:"request.redirectedFrom()",id:"request-redirected-from",children:[]},{value:"request.redirectedTo()",id:"request-redirected-to",children:[]},{value:"request.resourceType()",id:"request-resource-type",children:[]},{value:"request.response()",id:"request-response",children:[]},{value:"request.sizes()",id:"request-sizes",children:[]},{value:"request.timing()",id:"request-timing",children:[]},{value:"request.url()",id:"request-url",children:[]}],p={toc:u};function c(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-page",title:"Page"},"Page"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-event-request"},"page.on('request')")," emitted when the request is issued by the page."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-event-response"},"page.on('response')")," emitted when/if the response status and headers are received for the request."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-page#page-event-request-finished"},"page.on('requestfinished')")," emitted when the response body is downloaded and the request is complete.")),(0,s.kt)("p",null,"If request fails at some point, then instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-page#page-event-request-failed"},"page.on('requestfailed')")," event is emitted."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,s.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event."))),(0,s.kt)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-all-headers"},"request.allHeaders()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-failure"},"request.failure()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-frame"},"request.frame()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-headers"},"request.headers()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-headers-array"},"request.headersArray()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-header-value"},"request.headerValue(name)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-is-navigation-request"},"request.isNavigationRequest()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-method"},"request.method()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-post-data"},"request.postData()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-post-data-buffer"},"request.postDataBuffer()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-post-data-json"},"request.postDataJSON()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-redirected-from"},"request.redirectedFrom()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-redirected-to"},"request.redirectedTo()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-resource-type"},"request.resourceType()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-response"},"request.response()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-sizes"},"request.sizes()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-timing"},"request.timing()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request#request-url"},"request.url()"))),(0,s.kt)("h2",{id:"request-all-headers"},"request.allHeaders()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-all-headers-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),", ",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">>",">",(0,s.kt)("a",{href:"#request-all-headers-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"An object with all the request HTTP headers associated with this request. The header names are lower-cased."),(0,s.kt)("h2",{id:"request-failure"},"request.failure()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-failure-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,s.kt)("a",{href:"#request-failure-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"errorText")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Human-readable error message, e.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"'net::ERR_FAILED'"),".")))),(0,s.kt)("p",null,"The method returns ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by ",(0,s.kt)("inlineCode",{parentName:"p"},"requestfailed")," event."),(0,s.kt)("p",null,"Example of logging of all the failed requests:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n")),(0,s.kt)("h2",{id:"request-frame"},"request.frame()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-frame-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-frame",title:"Frame"},"Frame"),">",(0,s.kt)("a",{href:"#request-frame-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-frame",title:"Frame"},"Frame")," that initiated this request."),(0,s.kt)("h2",{id:"request-header-value"},"request.headerValue(name)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-header-value-option-name"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Name of the header.",(0,s.kt)("a",{href:"#request-header-value-option-name",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-header-value-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">",(0,s.kt)("a",{href:"#request-header-value-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the value of the header matching the name. The name is case insensitive."),(0,s.kt)("h2",{id:"request-headers"},"request.headers()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-headers-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),", ",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">",(0,s.kt)("a",{href:"#request-headers-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"DEPRECATED")," Incomplete list of headers as seen by the rendering engine. Use ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-request#request-all-headers"},"request.allHeaders()")," instead."),(0,s.kt)("h2",{id:"request-headers-array"},"request.headersArray()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-headers-array-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">>",">",(0,s.kt)("a",{href:"#request-headers-array-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Name of the header."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Value of the header.")))),(0,s.kt)("p",null,"An array with all the request HTTP headers associated with this request. Unlike ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-request#request-all-headers"},"request.allHeaders()"),", header names are NOT lower-cased. Headers with multiple entries, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),", appear in the array multiple times."),(0,s.kt)("h2",{id:"request-is-navigation-request"},"request.isNavigationRequest()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-is-navigation-request-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">",(0,s.kt)("a",{href:"#request-is-navigation-request-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Whether this request is driving frame's navigation."),(0,s.kt)("h2",{id:"request-method"},"request.method()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-method-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,s.kt)("a",{href:"#request-method-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Request's method (GET, POST, etc.)"),(0,s.kt)("h2",{id:"request-post-data"},"request.postData()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,s.kt)("a",{href:"#request-post-data-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Request's post body, if any."),(0,s.kt)("h2",{id:"request-post-data-buffer"},"request.postDataBuffer()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-buffer-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">",(0,s.kt)("a",{href:"#request-post-data-buffer-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Request's post body in a binary form, if any."),(0,s.kt)("h2",{id:"request-post-data-json"},"request.postDataJSON()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-json-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">",(0,s.kt)("a",{href:"#request-post-data-json-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns parsed request's body for ",(0,s.kt)("inlineCode",{parentName:"p"},"form-urlencoded")," and JSON as a fallback if any."),(0,s.kt)("p",null,"When the response is ",(0,s.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," then a key/value object of the values will be returned. Otherwise it will be parsed as JSON."),(0,s.kt)("h2",{id:"request-redirected-from"},"request.redirectedFrom()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-from-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request",title:"Request"},"Request"),">",(0,s.kt)("a",{href:"#request-redirected-from-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Request that was redirected by the server to this one, if any."),(0,s.kt)("p",null,"When the server responds with a redirect, Playwright creates a new ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-request",title:"Request"},"Request")," object. The two requests are connected by ",(0,s.kt)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",(0,s.kt)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),(0,s.kt)("p",null,"For example, if the website ",(0,s.kt)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",(0,s.kt)("inlineCode",{parentName:"p"},"https://example.com"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const response = await page.goto('http://example.com');\nconsole.log(response.request().redirectedFrom().url()); // 'http://example.com'\n")),(0,s.kt)("p",null,"If the website ",(0,s.kt)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const response = await page.goto('https://google.com');\nconsole.log(response.request().redirectedFrom()); // null\n")),(0,s.kt)("h2",{id:"request-redirected-to"},"request.redirectedTo()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-to-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-request",title:"Request"},"Request"),">",(0,s.kt)("a",{href:"#request-redirected-to-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"New request issued by the browser if the server responded with redirect."),(0,s.kt)("p",null,"This method is the opposite of ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-request#request-redirected-from"},"request.redirectedFrom()"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"console.log(request.redirectedFrom().redirectedTo() === request); // true\n")),(0,s.kt)("h2",{id:"request-resource-type"},"request.resourceType()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-resource-type-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,s.kt)("a",{href:"#request-resource-type-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Contains the request's resource type as it was perceived by the rendering engine. ResourceType will be one of the following: ",(0,s.kt)("inlineCode",{parentName:"p"},"document"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"stylesheet"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"media"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"font"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"texttrack"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"xhr"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"eventsource"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"websocket"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"manifest"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"other"),"."),(0,s.kt)("h2",{id:"request-response"},"request.response()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-response-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/api/class-response",title:"Response"},"Response"),">",">",(0,s.kt)("a",{href:"#request-response-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the matching ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-response",title:"Response"},"Response")," object, or ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," if the response was not received due to error."),(0,s.kt)("h2",{id:"request-sizes"},"request.sizes()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-sizes-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,s.kt)("a",{href:"#request-sizes-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"requestBodySize")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Size of the request body (POST data payload) in bytes. Set to 0 if there was no body."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"requestHeadersSize")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Total number of bytes from the start of the HTTP request message until (and including) the double CRLF before the body."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"responseBodySize")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Size of the received response body (encoded) in bytes."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"responseHeadersSize")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Total number of bytes from the start of the HTTP response message until (and including) the double CRLF before the body.")))),(0,s.kt)("p",null,"Returns resource size information for given request."),(0,s.kt)("h2",{id:"request-timing"},"request.timing()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-timing-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,s.kt)("a",{href:"#request-timing-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"startTime")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"domainLookupStart")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"domainLookupEnd")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"connectStart")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"secureConnectionStart")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"connectEnd")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"requestStart")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"responseStart")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"responseEnd")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.")))),(0,s.kt)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response, ",(0,s.kt)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"},"Resource Timing API"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const [request] = await Promise.all([\n  page.waitForEvent('requestfinished'),\n  page.goto('http://example.com')\n]);\nconsole.log(request.timing());\n")),(0,s.kt)("h2",{id:"request-url"},"request.url()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-url-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,s.kt)("a",{href:"#request-url-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"URL of the request."))}c.isMDXComponent=!0},86010:function(e,t,r){function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);