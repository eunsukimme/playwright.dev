(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9411],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},1395:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(7294),n=a(944),o=a(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var c=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,p=e.values,d=e.groupId,h=e.className,m=(0,n.Z)(),f=m.tabGroupChoices,k=m.setTabGroupChoices,v=(0,r.useState)(c),N=v[0],b=v[1],g=r.Children.toArray(e.children),y=[];if(null!=d){var j=f[d];null!=j&&j!==N&&p.some((function(e){return e.value===j}))&&b(j)}var C=function(e){var t=e.currentTarget,a=y.indexOf(t),r=p[a].value;b(r),null!=d&&(k(d,r),setTimeout((function(){var e,a,r,n,o,i,s,u;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,o=e.right,i=window,s=i.innerHeight,u=i.innerWidth,a>=0&&o<=u&&n<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case u:var r=y.indexOf(e.target)+1;a=y[r]||y[0];break;case s:var n=y.indexOf(e.target)-1;a=y[n]||y[y.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},h)},p.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":N===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:C,onClick:C},a)}))),t?(0,r.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,a){"use strict";var r=(0,a(7294).createContext)(void 0);t.Z=r},944:function(e,t,a){"use strict";var r=a(7294),n=a(9443);t.Z=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},206:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i=(a(1395),a(8215),{id:"class-route",title:"Route"}),l={unversionedId:"api/class-route",id:"version-1.13.0/api/class-route",isDocsHomePage:!1,title:"Route",description:"Whenever a network route is set up with Page.route(url, handler) or BrowserContext.route(url, handler), the Route object allows to handle the route.",source:"@site/versioned_docs/version-1.13.0/api/class-route.mdx",sourceDirName:"api",slug:"/api/class-route",permalink:"/java/docs/api/class-route",version:"1.13.0",frontMatter:{id:"class-route",title:"Route"},sidebar:"version-1.13.0/api",previous:{title:"Response",permalink:"/java/docs/api/class-response"},next:{title:"Selectors",permalink:"/java/docs/api/class-selectors"}},s=[{value:"Route.abort(errorCode)",id:"route-abort",children:[]},{value:"Route.fulfill(options)",id:"route-fulfill",children:[]},{value:"Route.request()",id:"route-request",children:[]},{value:"Route.resume(options)",id:"route-continue",children:[]}],u={toc:s};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Whenever a network route is set up with ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/api/class-page#page-route"},"Page.route(url, handler)")," or ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/api/class-browsercontext#browser-context-route"},"BrowserContext.route(url, handler)"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"Route")," object allows to handle the route."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-route#route-abort"},"Route.abort([errorCode])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-route#route-fulfill"},"Route.fulfill([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-route#route-request"},"Route.request()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-route#route-continue"},"Route.resume([options])"))),(0,o.kt)("h2",{id:"route-abort"},"Route.abort(","[errorCode]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"errorCode"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-param-error-code"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Optional error code. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"failed"),", could be one of the following:",(0,o.kt)("a",{href:"#route-abort-param-error-code",class:"list-anchor"},"#"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'aborted'")," - An operation was aborted (due to user action)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'accessdenied'")," - Permission to access a resource, other than the network, was denied"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'addressunreachable'")," - The IP address is unreachable. This usually means that there is no route to the specified host or network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'blockedbyclient'")," - The client chose to block the request."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'blockedbyresponse'")," - The request failed because the response was delivered along with requirements which are not met ('X-Frame-Options' and 'Content-Security-Policy' ancestor checks, for instance)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'connectionaborted'")," - A connection timed out as a result of not receiving an ACK for data sent."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'connectionclosed'")," - A connection was closed (corresponding to a TCP FIN)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'connectionfailed'")," - A connection attempt failed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'connectionrefused'")," - A connection attempt was refused."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'connectionreset'")," - A connection was reset (corresponding to a TCP RST)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'internetdisconnected'")," - The Internet connection has been lost."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'namenotresolved'")," - The host name could not be resolved."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'timedout'")," - An operation timed out."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'failed'")," - A generic failure occurred."))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,o.kt)("a",{href:"#route-abort-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Aborts the route's request."),(0,o.kt)("h2",{id:"route-fulfill"},"Route.fulfill(","[options]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"Route.FulfillOptions"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setBody"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-body"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Optional response body as text.",(0,o.kt)("a",{href:"#route-fulfill-option-body",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setBodyBytes"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-body-bytes"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"},"byte","[","]"),">"," Optional response body as raw bytes.",(0,o.kt)("a",{href:"#route-fulfill-option-body-bytes",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setContentType"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-content-type"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," If set, equals to setting ",(0,o.kt)("inlineCode",{parentName:"li"},"Content-Type")," response header.",(0,o.kt)("a",{href:"#route-fulfill-option-content-type",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setHeaders"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-headers"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",">"," Response headers. Header values will be converted to a string.",(0,o.kt)("a",{href:"#route-fulfill-option-headers",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setPath"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-path"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),">"," File path to respond with. The content type will be inferred from file extension. If ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to the current working directory.",(0,o.kt)("a",{href:"#route-fulfill-option-path",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setStatus"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-status"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">"," Response status code, defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"200"),".",(0,o.kt)("a",{href:"#route-fulfill-option-status",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,o.kt)("a",{href:"#route-fulfill-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Fulfills route's request with given response."),(0,o.kt)("p",null,"An example of fulfilling all requests with 404 responses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'page.route("**/*", route -> {\n  route.fulfill(new Route.FulfillOptions()\n    .setStatus(404)\n    .setContentType("text/plain")\n    .setBody("Not Found!"));\n});\n')),(0,o.kt)("p",null,"An example of serving static file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'page.route("**/xhr_endpoint", route -> route.fulfill(\n  new Route.FulfillOptions().setPath(Paths.get("mock_data.json")));\n')),(0,o.kt)("h2",{id:"route-request"},"Route.request()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-request-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-request",title:"Request"},"Request"),">",(0,o.kt)("a",{href:"#route-request-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"A request to be routed."),(0,o.kt)("h2",{id:"route-continue"},"Route.resume(","[options]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"Route.ResumeOptions"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setHeaders"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-headers"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",">"," If set changes the request HTTP headers. Header values will be converted to a string.",(0,o.kt)("a",{href:"#route-continue-option-headers",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setMethod"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-method"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," If set changes the request method (e.g. GET or POST)",(0,o.kt)("a",{href:"#route-continue-option-method",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setPostData"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-post-data"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),"|",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"},"byte","[","]"),">"," If set changes the post data of request",(0,o.kt)("a",{href:"#route-continue-option-post-data",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setUrl"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-url"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," If set changes the request URL. New URL must have same protocol as original one.",(0,o.kt)("a",{href:"#route-continue-option-url",class:"list-anchor"},"#")))),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,o.kt)("a",{href:"#route-continue-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Continues route's request with optional overrides."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'page.route("**/*", route -> {\n  // Override headers\n  Map<String, String> headers = new HashMap<>(route.request().headers());\n  headers.put("foo", "bar"); // set "foo" header\n  headers.remove("origin"); // remove "origin" header\n  route.resume(new Route.ResumeOptions().setHeaders(headers));\n});\n')))}c.isMDXComponent=!0},6010:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);