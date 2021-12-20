"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[30273],{57011:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return m},default:function(){return f}});var r=a(87462),o=a(63366),l=(a(67294),a(3905)),n=(a(26396),a(58215),["components"]),c={id:"class-framelocator",title:"FrameLocator"},i=void 0,s={unversionedId:"api/class-framelocator",id:"api/class-framelocator",isDocsHomePage:!1,title:"FrameLocator",description:"FrameLocator represents a view to the iframe on the page. It captures the logic sufficient to retrieve the iframe and locate elements in that iframe. FrameLocator can be created with either page.frameLocator(selector) or locator.frameLocator(selector) method.",source:"@site/docs/api/class-framelocator.mdx",sourceDirName:"api",slug:"/api/class-framelocator",permalink:"/docs/next/api/class-framelocator",tags:[],version:"current",frontMatter:{id:"class-framelocator",title:"FrameLocator"},sidebar:"api",previous:{title:"Frame",permalink:"/docs/next/api/class-frame"},next:{title:"JSHandle",permalink:"/docs/next/api/class-jshandle"}},m=[{value:"frameLocator.first()",id:"frame-locator-first",children:[],level:2},{value:"frameLocator.frameLocator(selector)",id:"frame-locator-frame-locator",children:[],level:2},{value:"frameLocator.last()",id:"frame-locator-last",children:[],level:2},{value:"frameLocator.locator(selector, options)",id:"frame-locator-locator",children:[],level:2},{value:"frameLocator.nth(index)",id:"frame-locator-nth",children:[],level:2}],p={toc:m};function f(e){var t=e.components,a=(0,o.Z)(e,n);return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"FrameLocator represents a view to the ",(0,l.kt)("inlineCode",{parentName:"p"},"iframe")," on the page. It captures the logic sufficient to retrieve the ",(0,l.kt)("inlineCode",{parentName:"p"},"iframe")," and locate elements in that iframe. FrameLocator can be created with either ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-frame-locator"},"page.frameLocator(selector)")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator#locator-frame-locator"},"locator.frameLocator(selector)")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.frameLocator('#my-frame').locator('text=Submit');\nawait locator.click();\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Strictness")),(0,l.kt)("p",null,"Frame locators are strict. This means that all operations on frame locators will throw if more than one element matches given selector."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Throws if there are several frames in DOM:\nawait page.frameLocator('.result-frame').locator('button').click();\n\n// Works because we explicitly tell locator to pick the first frame:\nawait page.frameLocator('.result-frame').first().locator('button').click();\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Converting Locator to FrameLocator")),(0,l.kt)("p",null,"If you have a ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," object pointing to an ",(0,l.kt)("inlineCode",{parentName:"p"},"iframe")," it can be converted to ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/class-framelocator",title:"FrameLocator"},"FrameLocator")," using ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:scope"},(0,l.kt)("inlineCode",{parentName:"a"},":scope"))," CSS selector:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const frameLocator = locator.frameLocator(':scope');\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-framelocator#frame-locator-first"},"frameLocator.first()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-framelocator#frame-locator-frame-locator"},"frameLocator.frameLocator(selector)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-framelocator#frame-locator-last"},"frameLocator.last()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-framelocator#frame-locator-locator"},"frameLocator.locator(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-framelocator#frame-locator-nth"},"frameLocator.nth(index)"))),(0,l.kt)("h2",{id:"frame-locator-first"},"frameLocator.first()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-first-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,l.kt)("a",{href:"#frame-locator-first-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns locator to the first matching frame."),(0,l.kt)("h2",{id:"frame-locator-frame-locator"},"frameLocator.frameLocator(selector)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"selector"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-option-selector"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," A selector to use when resolving DOM element. See ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/selectors"},"working with selectors")," for more details.",(0,l.kt)("a",{href:"#frame-locator-frame-locator-option-selector",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,l.kt)("a",{href:"#frame-locator-frame-locator-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"When working with iframes, you can create a frame locator that will enter the iframe and allow selecting elements in that iframe."),(0,l.kt)("h2",{id:"frame-locator-last"},"frameLocator.last()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-last-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,l.kt)("a",{href:"#frame-locator-last-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns locator to the last matching frame."),(0,l.kt)("h2",{id:"frame-locator-locator"},"frameLocator.locator(selector","[, options]",")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"selector"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-selector"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," A selector to use when resolving DOM element. See ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/selectors"},"working with selectors")," for more details.",(0,l.kt)("a",{href:"#frame-locator-locator-option-selector",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hasText"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-has-text"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">"," Matches elements containing specified text somewhere inside, possibly in a child or a descendant element. For example, ",(0,l.kt)("inlineCode",{parentName:"li"},'"Playwright"')," matches ",(0,l.kt)("inlineCode",{parentName:"li"},"<article><div>Playwright</div></article>"),".",(0,l.kt)("a",{href:"#frame-locator-locator-option-has-text",class:"list-anchor"},"#")))),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-locator",title:"Locator"},"Locator"),">",(0,l.kt)("a",{href:"#frame-locator-locator-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"The method finds an element matching the specified selector in the FrameLocator's subtree."),(0,l.kt)("h2",{id:"frame-locator-nth"},"frameLocator.nth(index)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"index"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-option-index"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">",(0,l.kt)("a",{href:"#frame-locator-nth-option-index",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,l.kt)("a",{href:"#frame-locator-nth-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns locator to the n-th matching frame."))}f.isMDXComponent=!0}}]);