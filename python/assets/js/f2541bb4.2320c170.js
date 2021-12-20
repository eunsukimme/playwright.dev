"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3083],{393:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return h},default:function(){return d}});var n=a(87462),s=a(63366),l=(a(67294),a(3905)),r=a(26396),c=a(58215),o=["components"],p={id:"screenshots",title:"Screenshots"},u=void 0,i={unversionedId:"screenshots",id:"version-1.15/screenshots",isDocsHomePage:!1,title:"Screenshots",description:"Here is a quick way to capture a screenshot and save it into a file:",source:"@site/versioned_docs/version-1.15/screenshots.mdx",sourceDirName:".",slug:"/screenshots",permalink:"/python/docs/1.15/screenshots",tags:[],version:"1.15",frontMatter:{id:"screenshots",title:"Screenshots"},sidebar:"version-1.15/docs",previous:{title:"Page Object Models",permalink:"/python/docs/1.15/pom"},next:{title:"Trace Viewer",permalink:"/python/docs/1.15/trace-viewer"}},h=[{value:"Full page screenshots",id:"full-page-screenshots",children:[],level:2},{value:"Capture into buffer",id:"capture-into-buffer",children:[],level:2},{value:"Element screenshot",id:"element-screenshot",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2}],m={toc:h};function d(e){var t=e.components,a=(0,s.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Here is a quick way to capture a screenshot and save it into a file:"),(0,l.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'page.screenshot(path="screenshot.png")\n'))),(0,l.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'await page.screenshot(path="screenshot.png")\n')))),(0,l.kt)("p",null,"Screenshots API accepts many parameters for image format, clip area, quality, etc. Make sure to check them out."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#full-page-screenshots"},"Full page screenshots")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#capture-into-buffer"},"Capture into buffer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#element-screenshot"},"Element screenshot"))),(0,l.kt)("h2",{id:"full-page-screenshots"},"Full page screenshots"),(0,l.kt)("p",null,"Full page screenshot is a screenshot of a full scrollable page, as if you had a very tall screen and the page could fit it entirely."),(0,l.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'page.screenshot(path="screenshot.png", full_page=True)\n'))),(0,l.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'await page.screenshot(path="screenshot.png", full_page=True)\n')))),(0,l.kt)("h2",{id:"capture-into-buffer"},"Capture into buffer"),(0,l.kt)("p",null,"Rather than writing into a file, you can get a buffer with the image and post-process it or pass it to a third party pixel diff facility."),(0,l.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"screenshot_bytes = page.screenshot()\nimage = Image.open(io.BytesIO(screenshot_bytes))\n"))),(0,l.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# Capture into Image\nscreenshot_bytes = await page.screenshot()\nimage = Image.open(io.BytesIO(screenshot_bytes))\n")))),(0,l.kt)("h2",{id:"element-screenshot"},"Element screenshot"),(0,l.kt)("p",null,"Sometimes it is useful to take a screenshot of a single element."),(0,l.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'element_handle = page.query_selector(".header")\nelement_handle.screenshot(path="screenshot.png")\n'))),(0,l.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'element_handle = await page.query_selector(".header")\nawait element_handle.screenshot(path="screenshot.png")\n')))),(0,l.kt)("h3",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-page#page-screenshot"},"page.screenshot(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.15/api/class-elementhandle#element-handle-screenshot"},"element_handle.screenshot(**kwargs)"))))}d.isMDXComponent=!0}}]);