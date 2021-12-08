"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5338],{2994:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),l=(n(6396),n(8215),["components"]),a={id:"extensibility",title:"Extensibility"},s=void 0,c={unversionedId:"extensibility",id:"version-1.17/extensibility",isDocsHomePage:!1,title:"Extensibility",description:"- Custom selector engines",source:"@site/versioned_docs/version-1.17/extensibility.mdx",sourceDirName:".",slug:"/extensibility",permalink:"/dotnet/docs/extensibility",tags:[],version:"1.17",frontMatter:{id:"extensibility",title:"Extensibility"},sidebar:"version-1.17/docs",previous:{title:"Events",permalink:"/dotnet/docs/events"},next:{title:"Frames",permalink:"/dotnet/docs/frames"}},u=[{value:"Custom selector engines",id:"custom-selector-engines",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-selector-engines"},"Custom selector engines"))),(0,r.kt)("h2",{id:"custom-selector-engines"},"Custom selector engines"),(0,r.kt)("p",null,"Playwright supports custom selector engines, registered with ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-selectors#selectors-register"},"Selectors.RegisterAsync(name, options)"),"."),(0,r.kt)("p",null,"Selector engine should have the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create")," function to create a relative selector from ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," (root is either a ",(0,r.kt)("inlineCode",{parentName:"li"},"Document"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ShadowRoot")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Element"),") to a ",(0,r.kt)("inlineCode",{parentName:"li"},"target")," element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query")," function to query first element matching ",(0,r.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,r.kt)("inlineCode",{parentName:"li"},"root"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queryAll")," function to query all elements matching ",(0,r.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,r.kt)("inlineCode",{parentName:"li"},"root"),".")),(0,r.kt)("p",null,"By default the engine is run directly in the frame's JavaScript context and, for example, can call an application-defined function. To isolate the engine from any JavaScript in the frame, but leave access to the DOM, register the engine with ",(0,r.kt)("inlineCode",{parentName:"p"},"{contentScript: true}")," option. Content script engine is safer because it is protected from any tampering with the global objects, for example altering ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.prototype")," methods. All built-in selector engines run as content scripts. Note that running as a content script is not guaranteed when the engine is used together with other custom engines."),(0,r.kt)("p",null,"An example of registering selector engine that queries elements based on a tag name:"))}m.isMDXComponent=!0}}]);