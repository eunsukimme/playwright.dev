"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6763],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=s,m=d["".concat(o,".").concat(h)]||d[h]||c[h]||n;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,l=new Array(n);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:s},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),s=a(9443);var n=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(6010),i="tabItem_1uMI",o="tabItemActive_2DSg";var p=37,u=39;var c=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,c=e.values,d=e.groupId,h=e.className,m=n(),f=m.tabGroupChoices,k=m.setTabGroupChoices,v=(0,r.useState)(s),b=v[0],N=v[1],j=r.Children.toArray(e.children),g=[];if(null!=d){var y=f[d];null!=y&&y!==b&&c.some((function(e){return e.value===y}))&&N(y)}var x=function(e){var t=e.currentTarget,a=g.indexOf(t),r=c[a].value;N(r),null!=d&&(k(d,r),setTimeout((function(){var e,a,r,s,n,l,i,p;(e=t.getBoundingClientRect(),a=e.top,r=e.left,s=e.bottom,n=e.right,l=window,i=l.innerHeight,p=l.innerWidth,a>=0&&n<=p&&s<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},R=function(e){var t,a;switch(e.keyCode){case u:var r=g.indexOf(e.target)+1;a=g[r]||g[0];break;case p:var s=g.indexOf(e.target)-1;a=g[s]||g[g.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},c.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:R,onFocus:x,onClick:x},a)}))),t?(0,r.cloneElement)(j.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,a){var r=(0,a(7294).createContext)(void 0);t.Z=r},7206:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var r=a(2122),s=a(9756),n=(a(7294),a(3905)),l=(a(5064),a(8215),{id:"class-response",title:"Response"}),i=void 0,o={unversionedId:"api/class-response",id:"api/class-response",isDocsHomePage:!1,title:"Response",description:"[Response] class represents responses which are received by page.",source:"@site/docs/api/class-response.mdx",sourceDirName:"api",slug:"/api/class-response",permalink:"/java/docs/next/api/class-response",version:"current",frontMatter:{id:"class-response",title:"Response"},sidebar:"api",previous:{title:"Request",permalink:"/java/docs/next/api/class-request"},next:{title:"Route",permalink:"/java/docs/next/api/class-route"}},p=[{value:"Response.body()",id:"response-body",children:[]},{value:"Response.finished()",id:"response-finished",children:[]},{value:"Response.frame()",id:"response-frame",children:[]},{value:"Response.headers()",id:"response-headers",children:[]},{value:"Response.ok()",id:"response-ok",children:[]},{value:"Response.rawHeaders()",id:"response-raw-headers",children:[]},{value:"Response.request()",id:"response-request",children:[]},{value:"Response.securityDetails()",id:"response-security-details",children:[]},{value:"Response.serverAddr()",id:"response-server-addr",children:[]},{value:"Response.status()",id:"response-status",children:[]},{value:"Response.statusText()",id:"response-status-text",children:[]},{value:"Response.text()",id:"response-text",children:[]},{value:"Response.url()",id:"response-url",children:[]}],u={toc:p};function c(e){var t=e.components,a=(0,s.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-response",title:"Response"},"Response")," class represents responses which are received by page."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-body"},"Response.body()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-finished"},"Response.finished()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-frame"},"Response.frame()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-headers"},"Response.headers()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-ok"},"Response.ok()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-raw-headers"},"Response.rawHeaders()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-request"},"Response.request()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-security-details"},"Response.securityDetails()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-server-addr"},"Response.serverAddr()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-status"},"Response.status()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-status-text"},"Response.statusText()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-text"},"Response.text()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response#response-url"},"Response.url()"))),(0,n.kt)("h2",{id:"response-body"},"Response.body()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-body-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"},"byte","[","]"),">",(0,n.kt)("a",{href:"#response-body-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the buffer with response body."),(0,n.kt)("h2",{id:"response-finished"},"Response.finished()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-finished-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,n.kt)("a",{href:"#response-finished-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Waits for this response to finish, returns failure error if request failed."),(0,n.kt)("h2",{id:"response-frame"},"Response.frame()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-frame-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-frame",title:"Frame"},"Frame"),">",(0,n.kt)("a",{href:"#response-frame-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-frame",title:"Frame"},"Frame")," that initiated this response."),(0,n.kt)("h2",{id:"response-headers"},"Response.headers()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-headers-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",">",(0,n.kt)("a",{href:"#response-headers-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"DEPRECATED"),"  Use ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-response#response-raw-headers"},"Response.rawHeaders()")," instead."),(0,n.kt)("h2",{id:"response-ok"},"Response.ok()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-ok-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">",(0,n.kt)("a",{href:"#response-ok-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Contains a boolean stating whether the response was successful (status in the range 200-299) or not."),(0,n.kt)("h2",{id:"response-raw-headers"},"Response.rawHeaders()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-raw-headers-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-headers",title:"Headers"},"Headers"),">",(0,n.kt)("a",{href:"#response-raw-headers-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"An object with the raw response HTTP headers associated with the request. All headers are as seen in the network stack."),(0,n.kt)("h2",{id:"response-request"},"Response.request()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-request-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request",title:"Request"},"Request"),">",(0,n.kt)("a",{href:"#response-request-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the matching ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-request",title:"Request"},"Request")," object."),(0,n.kt)("h2",{id:"response-security-details"},"Response.securityDetails()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-security-details-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|SecurityDetails",">",(0,n.kt)("a",{href:"#response-security-details-return",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"issuer")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Common Name component of the Issuer field. from the certificate. This should only be used for informational purposes. Optional."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"protocol")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," The specific TLS protocol used. (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"TLS 1.3"),"). Optional."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"subjectName")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Common Name component of the Subject field from the certificate. This should only be used for informational purposes. Optional."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"validFrom")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Unix timestamp (in seconds) specifying when this cert becomes valid. Optional."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"validTo")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Unix timestamp (in seconds) specifying when this cert becomes invalid. Optional.")))),(0,n.kt)("p",null,"Returns SSL and other security information."),(0,n.kt)("h2",{id:"response-server-addr"},"Response.serverAddr()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-server-addr-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|ServerAddr",">",(0,n.kt)("a",{href:"#response-server-addr-return",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ipAddress")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," IPv4 or IPV6 address of the server."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"port")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">")))),(0,n.kt)("p",null,"Returns the IP address and port of the server."),(0,n.kt)("h2",{id:"response-status"},"Response.status()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-status-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">",(0,n.kt)("a",{href:"#response-status-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Contains the status code of the response (e.g., 200 for a success)."),(0,n.kt)("h2",{id:"response-status-text"},"Response.statusText()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-status-text-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,n.kt)("a",{href:"#response-status-text-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,'Contains the status text of the response (e.g. usually an "OK" for a success).'),(0,n.kt)("h2",{id:"response-text"},"Response.text()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-text-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,n.kt)("a",{href:"#response-text-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the text representation of response body."),(0,n.kt)("h2",{id:"response-url"},"Response.url()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-url-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,n.kt)("a",{href:"#response-url-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Contains the URL of the response."))}c.isMDXComponent=!0},6010:function(e,t,a){function r(e){var t,a,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(s&&(s+=" "),s+=a);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function s(){for(var e,t,a=0,s="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(s&&(s+=" "),s+=t);return s}a.d(t,{Z:function(){return s}})}}]);