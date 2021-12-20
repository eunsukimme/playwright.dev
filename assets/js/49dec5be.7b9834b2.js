"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[44739],{75336:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return h}});var n=s(87462),a=s(63366),r=(s(67294),s(3905)),l=(s(26396),s(58215),["components"]),o={id:"screenshots",title:"Screenshots"},c=void 0,i={unversionedId:"screenshots",id:"screenshots",isDocsHomePage:!1,title:"Screenshots",description:"Here is a quick way to capture a screenshot and save it into a file:",source:"@site/docs/screenshots.mdx",sourceDirName:".",slug:"/screenshots",permalink:"/docs/next/screenshots",tags:[],version:"current",frontMatter:{id:"screenshots",title:"Screenshots"},sidebar:"docs",previous:{title:"Page Object Models",permalink:"/docs/next/pom"},next:{title:"Selectors",permalink:"/docs/next/selectors"}},u=[{value:"Full page screenshots",id:"full-page-screenshots",children:[],level:2},{value:"Capture into buffer",id:"capture-into-buffer",children:[],level:2},{value:"Element screenshot",id:"element-screenshot",children:[],level:2}],p={toc:u};function h(e){var t=e.components,s=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here is a quick way to capture a screenshot and save it into a file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await page.screenshot({ path: 'screenshot.png' });\n")),(0,r.kt)("p",null,"Screenshots API accepts many parameters for image format, clip area, quality, etc. Make sure to check them out."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#full-page-screenshots"},"Full page screenshots")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#capture-into-buffer"},"Capture into buffer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#element-screenshot"},"Element screenshot"))),(0,r.kt)("h2",{id:"full-page-screenshots"},"Full page screenshots"),(0,r.kt)("p",null,"Full page screenshot is a screenshot of a full scrollable page, as if you had a very tall screen and the page could fit it entirely."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await page.screenshot({ path: 'screenshot.png', fullPage: true });\n")),(0,r.kt)("h2",{id:"capture-into-buffer"},"Capture into buffer"),(0,r.kt)("p",null,"Rather than writing into a file, you can get a buffer with the image and post-process it or pass it to a third party pixel diff facility."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const buffer = await page.screenshot();\nconsole.log(buffer.toString('base64'));\n")),(0,r.kt)("h2",{id:"element-screenshot"},"Element screenshot"),(0,r.kt)("p",null,"Sometimes it is useful to take a screenshot of a single element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await page.locator('.header').screenshot({ path: 'screenshot.png' });\n")))}h.isMDXComponent=!0}}]);