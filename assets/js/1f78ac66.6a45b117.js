"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9687],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),h=s,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||n;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){var a=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:s},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(7294),s=r(9443);var n=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(6010),i="tabItem_1uMI",o="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var t=e.lazy,r=e.block,s=e.defaultValue,u=e.values,d=e.groupId,h=e.className,m=n(),k=m.tabGroupChoices,f=m.setTabGroupChoices,b=(0,a.useState)(s),v=b[0],N=b[1],g=a.Children.toArray(e.children),S=[];if(null!=d){var y=k[d];null!=y&&y!==v&&u.some((function(e){return e.value===y}))&&N(y)}var _=function(e){var t=e.currentTarget,r=S.indexOf(t),a=u[r].value;N(a),null!=d&&(f(d,a),setTimeout((function(){var e,r,a,s,n,l,i,p;(e=t.getBoundingClientRect(),r=e.top,a=e.left,s=e.bottom,n=e.right,l=window,i=l.innerHeight,p=l.innerWidth,r>=0&&n<=p&&s<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case c:var a=S.indexOf(e.target)+1;r=S[a]||S[0];break;case p:var s=S.indexOf(e.target)-1;r=S[s]||S[S.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},h)},u.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":v===t}),key:t,ref:function(e){return S.push(e)},onKeyDown:O,onFocus:_,onClick:_},r)}))),t?(0,a.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,r){var a=(0,r(7294).createContext)(void 0);t.Z=a},4427:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var a=r(2122),s=r(9756),n=(r(7294),r(3905)),l=(r(5064),r(8215),{id:"class-response",title:"Response"}),i=void 0,o={unversionedId:"api/class-response",id:"version-1.15/api/class-response",isDocsHomePage:!1,title:"Response",description:"[Response] class represents responses which are received by page.",source:"@site/versioned_docs/version-1.15/api/class-response.mdx",sourceDirName:"api",slug:"/api/class-response",permalink:"/docs/api/class-response",version:"1.15",frontMatter:{id:"class-response",title:"Response"},sidebar:"version-1.15/api",previous:{title:"Request",permalink:"/docs/api/class-request"},next:{title:"Route",permalink:"/docs/api/class-route"}},p=[{value:"response.allHeaders()",id:"response-all-headers",children:[]},{value:"response.body()",id:"response-body",children:[]},{value:"response.finished()",id:"response-finished",children:[]},{value:"response.frame()",id:"response-frame",children:[]},{value:"response.headerValue(name)",id:"response-header-value",children:[]},{value:"response.headerValues(name)",id:"response-header-values",children:[]},{value:"response.headers()",id:"response-headers",children:[]},{value:"response.headersArray()",id:"response-headers-array",children:[]},{value:"response.json()",id:"response-json",children:[]},{value:"response.ok()",id:"response-ok",children:[]},{value:"response.request()",id:"response-request",children:[]},{value:"response.securityDetails()",id:"response-security-details",children:[]},{value:"response.serverAddr()",id:"response-server-addr",children:[]},{value:"response.status()",id:"response-status",children:[]},{value:"response.statusText()",id:"response-status-text",children:[]},{value:"response.text()",id:"response-text",children:[]},{value:"response.url()",id:"response-url",children:[]}],c={toc:p};function u(e){var t=e.components,r=(0,s.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-response",title:"Response"},"Response")," class represents responses which are received by page."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-response#response-all-headers"},"response.allHeaders()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-response#response-body"},"response.body()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-response#response-finished"},"response.finished()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-response#response-frame"},"response.frame()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-response#response-headers"},"response.headers()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-response#response-headers-array"},"response.headersArray()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-response#response-header-value"},"response.headerValue(name)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-response#response-header-values"},"response.headerValues(name)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-response#response-json"},"response.json()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-response#response-ok"},"response.ok()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-response#response-request"},"response.request()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-response#response-security-details"},"response.securityDetails()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-response#response-server-addr"},"response.serverAddr()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-response#response-status"},"response.status()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-response#response-status-text"},"response.statusText()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-response#response-text"},"response.text()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-response#response-url"},"response.url()"))),(0,n.kt)("h2",{id:"response-all-headers"},"response.allHeaders()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-all-headers-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),", ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">>",">",(0,n.kt)("a",{href:"#response-all-headers-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"An object with all the response HTTP headers associated with this response."),(0,n.kt)("h2",{id:"response-body"},"response.body()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-body-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">",">",(0,n.kt)("a",{href:"#response-body-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the buffer with response body."),(0,n.kt)("h2",{id:"response-finished"},"response.finished()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-finished-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://nodejs.org/api/errors.html#errors_class_error",title:"Error"},"Error"),">",">",(0,n.kt)("a",{href:"#response-finished-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Waits for this response to finish, returns always ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,n.kt)("h2",{id:"response-frame"},"response.frame()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-frame-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-frame",title:"Frame"},"Frame"),">",(0,n.kt)("a",{href:"#response-frame-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-frame",title:"Frame"},"Frame")," that initiated this response."),(0,n.kt)("h2",{id:"response-header-value"},"response.headerValue(name)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-header-value-option-name"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Name of the header.",(0,n.kt)("a",{href:"#response-header-value-option-name",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-header-value-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">",(0,n.kt)("a",{href:"#response-header-value-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the value of the header matching the name. The name is case insensitive. If multiple headers have the same name (except ",(0,n.kt)("inlineCode",{parentName:"p"},"set-cookie"),"), they are returned as a list separated by ",(0,n.kt)("inlineCode",{parentName:"p"},", "),". For ",(0,n.kt)("inlineCode",{parentName:"p"},"set-cookie"),", the ",(0,n.kt)("inlineCode",{parentName:"p"},"\\n")," separator is used. If no headers are found, ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," is returned."),(0,n.kt)("h2",{id:"response-header-values"},"response.headerValues(name)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-header-values-option-name"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Name of the header.",(0,n.kt)("a",{href:"#response-header-values-option-name",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-header-values-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">>",">",(0,n.kt)("a",{href:"#response-header-values-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns all values of the headers matching the name, for example ",(0,n.kt)("inlineCode",{parentName:"p"},"set-cookie"),". The name is case insensitive."),(0,n.kt)("h2",{id:"response-headers"},"response.headers()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-headers-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),", ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">",(0,n.kt)("a",{href:"#response-headers-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"DEPRECATED")," Incomplete list of headers as seen by the rendering engine. Use ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-response#response-all-headers"},"response.allHeaders()")," instead."),(0,n.kt)("h2",{id:"response-headers-array"},"response.headersArray()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-headers-array-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">>",">",(0,n.kt)("a",{href:"#response-headers-array-return",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Name of the header."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Value of the header.")))),(0,n.kt)("p",null,"An array with all the request HTTP headers associated with this response. Unlike ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-response#response-all-headers"},"response.allHeaders()"),", header names are NOT lower-cased. Headers with multiple entries, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),", appear in the array multiple times."),(0,n.kt)("h2",{id:"response-json"},"response.json()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-json-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">",">",(0,n.kt)("a",{href:"#response-json-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the JSON representation of response body."),(0,n.kt)("p",null,"This method will throw if the response body is not parsable via ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON.parse"),"."),(0,n.kt)("h2",{id:"response-ok"},"response.ok()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-ok-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">",(0,n.kt)("a",{href:"#response-ok-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Contains a boolean stating whether the response was successful (status in the range 200-299) or not."),(0,n.kt)("h2",{id:"response-request"},"response.request()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-request-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/api/class-request",title:"Request"},"Request"),">",(0,n.kt)("a",{href:"#response-request-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the matching ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/class-request",title:"Request"},"Request")," object."),(0,n.kt)("h2",{id:"response-security-details"},"response.securityDetails()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-security-details-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,n.kt)("a",{href:"#response-security-details-return",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"issuer")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Common Name component of the Issuer field. from the certificate. This should only be used for informational purposes. Optional."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"protocol")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," The specific TLS protocol used. (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"TLS 1.3"),"). Optional."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"subjectName")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Common Name component of the Subject field from the certificate. This should only be used for informational purposes. Optional."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"validFrom")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Unix timestamp (in seconds) specifying when this cert becomes valid. Optional."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"validTo")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Unix timestamp (in seconds) specifying when this cert becomes invalid. Optional.")))),(0,n.kt)("p",null,"Returns SSL and other security information."),(0,n.kt)("h2",{id:"response-server-addr"},"response.serverAddr()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-server-addr-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,n.kt)("a",{href:"#response-server-addr-return",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ipAddress")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," IPv4 or IPV6 address of the server."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"port")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")))),(0,n.kt)("p",null,"Returns the IP address and port of the server."),(0,n.kt)("h2",{id:"response-status"},"response.status()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-status-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">",(0,n.kt)("a",{href:"#response-status-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Contains the status code of the response (e.g., 200 for a success)."),(0,n.kt)("h2",{id:"response-status-text"},"response.statusText()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-status-text-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,n.kt)("a",{href:"#response-status-text-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,'Contains the status text of the response (e.g. usually an "OK" for a success).'),(0,n.kt)("h2",{id:"response-text"},"response.text()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-text-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">",(0,n.kt)("a",{href:"#response-text-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the text representation of response body."),(0,n.kt)("h2",{id:"response-url"},"response.url()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-url-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,n.kt)("a",{href:"#response-url-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Contains the URL of the response."))}u.isMDXComponent=!0},6010:function(e,t,r){function a(e){var t,r,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(s&&(s+=" "),s+=r);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function s(){for(var e,t,r=0,s="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(s&&(s+=" "),s+=t);return s}r.d(t,{Z:function(){return s}})}}]);