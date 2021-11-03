"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9122],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,v=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),a=n(9443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,d=e.groupId,f=e.className,v=i(),m=v.tabGroupChoices,g=v.setTabGroupChoices,h=(0,r.useState)(a),y=h[0],w=h[1],b=r.Children.toArray(e.children),k=[];if(null!=d){var O=m[d];null!=O&&O!==y&&p.some((function(e){return e.value===O}))&&w(O)}var E=function(e){var t=e.currentTarget,n=k.indexOf(t),r=p[n].value;w(r),null!=d&&(g(d,r),setTimeout((function(){var e,n,r,a,i,o,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,s=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case u:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:x,onFocus:E,onClick:E},n)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},4022:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=(n(5064),n(8215),{id:"events",title:"Events"}),s=void 0,l={unversionedId:"events",id:"events",isDocsHomePage:!1,title:"Events",description:"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:",source:"@site/docs/events.mdx",sourceDirName:".",slug:"/events",permalink:"/dotnet/docs/next/events",version:"current",frontMatter:{id:"events",title:"Events"},sidebar:"docs",previous:{title:"Emulation",permalink:"/dotnet/docs/next/emulation"},next:{title:"Extensibility",permalink:"/dotnet/docs/next/extensibility"}},u=[{value:"Waiting for event",id:"waiting-for-event",children:[]},{value:"Adding/removing event listener",id:"addingremoving-event-listener",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#waiting-for-event"},"Waiting for event")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#addingremoving-event-listener"},"Adding/removing event listener"))),(0,i.kt)("h2",{id:"waiting-for-event"},"Waiting for event"),(0,i.kt)("p",null,"Most of the time, scripts will need to wait for a particular event to happen. Below are some of the typical event awaiting patterns."),(0,i.kt)("p",null,"Wait for a request with the specified url:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var waitForRequestTask = page.WaitForRequestAsync("**/*logo*.png");\nawait page.GotoAsync("https://wikipedia.org");\nvar request = await waitForRequestTask;\nConsole.WriteLine(request.Url);\n')),(0,i.kt)("p",null,"Wait for popup window:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var popup = await page.RunAndWaitForPopupAsync(async =>\n{\n    await page.EvaluateAsync("window.open()");\n});\nawait popup.GotoAsync("https://wikipedia.org");\n')),(0,i.kt)("h2",{id:"addingremoving-event-listener"},"Adding/removing event listener"),(0,i.kt)("p",null,"Sometimes, events happen in random time and instead of waiting for them, they need to be handled. Playwright supports traditional language mechanisms for subscribing and unsubscribing from the events:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'page.Request += (_, request) => Console.WriteLine("Request sent: " + request.Url);\nvoid listener(object sender, IRequest request)\n{\n    Console.WriteLine("Request finished: " + request.Url);\n};\npage.RequestFinished += listener;\nawait page.GotoAsync("https://wikipedia.org");\n\n// Remove previously added listener.\npage.RequestFinished -= listener;\nawait page.GotoAsync("https://www.openstreetmap.org/");\n')))}p.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);