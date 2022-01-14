"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4356],{13522:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return m},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=t(87462),n=t(63366),s=(t(67294),t(3905)),i=(t(26396),t(58215),["components"]),m={id:"frames",title:"Frames"},o=void 0,l={unversionedId:"frames",id:"version-1.17/frames",isDocsHomePage:!1,title:"Frames",description:"- Frames",source:"@site/versioned_docs/version-1.17/frames.mdx",sourceDirName:".",slug:"/frames",permalink:"/docs/1.17/frames",tags:[],version:"1.17",frontMatter:{id:"frames",title:"Frames"},sidebar:"version-1.17/docs",previous:{title:"Extensibility",permalink:"/docs/1.17/extensibility"},next:{title:"Handles",permalink:"/docs/1.17/handles"}},c=[{value:"Frames",id:"frames",children:[],level:2},{value:"Frame objects",id:"frame-objects",children:[],level:2}],f={toc:c};function p(e){var a=e.components,t=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#frames"},"Frames")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#frame-objects"},"Frame objects"))),(0,s.kt)("h2",{id:"frames"},"Frames"),(0,s.kt)("p",null,"A ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-page",title:"Page"},"Page")," can have one or more ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-frame",title:"Frame"},"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",(0,s.kt)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),(0,s.kt)("p",null,"A page can have additional frames attached with the ",(0,s.kt)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// Locate element inside frame\nconst username = await page.frameLocator('.frame-class').locator('#username-input');\nawait username.fill('John');\n")),(0,s.kt)("h2",{id:"frame-objects"},"Frame objects"),(0,s.kt)("p",null,"One can access frame objects using the ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-page#page-frame"},"page.frame(frameSelector)")," API:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// Get frame using the frame's name attribute\nconst frame = page.frame('frame-login');\n\n// Get frame using frame's URL\nconst frame = page.frame({ url: /.*domain.*/ });\n\n// Interact with the frame\nawait frame.fill('#username-input', 'John');\n")))}p.isMDXComponent=!0}}]);