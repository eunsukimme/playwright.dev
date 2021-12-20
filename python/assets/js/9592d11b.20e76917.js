"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1143],{14729:function(t,a,e){e.r(a),e.d(a,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return g},default:function(){return d}});var n=e(87462),r=e(63366),s=(e(67294),e(3905)),i=e(26396),o=e(58215),l=["components"],c={id:"class-tracing",title:"Tracing"},p=void 0,h={unversionedId:"api/class-tracing",id:"version-1.14/api/class-tracing",isDocsHomePage:!1,title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened using the Playwright CLI after Playwright script runs.",source:"@site/versioned_docs/version-1.14/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/python/docs/1.14/api/class-tracing",tags:[],version:"1.14",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"version-1.14/api",previous:{title:"Touchscreen",permalink:"/python/docs/1.14/api/class-touchscreen"},next:{title:"Video",permalink:"/python/docs/1.14/api/class-video"}},g=[{value:"tracing.start(**kwargs)",id:"tracing-start",children:[],level:2},{value:"tracing.stop(**kwargs)",id:"tracing-stop",children:[],level:2}],u={toc:g};function d(t){var a=t.components,e=(0,r.Z)(t,l);return(0,s.kt)("wrapper",(0,n.Z)({},u,e,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened using the Playwright CLI after Playwright script runs."),(0,s.kt)("p",null,"Start with specifying the folder traces will be stored in:"),(0,s.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'browser = chromium.launch()\ncontext = browser.new_context()\ncontext.tracing.start(screenshots=True, snapshots=True)\npage.goto("https://playwright.dev")\ncontext.tracing.stop(path = "trace.zip")\n'))),(0,s.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'browser = await chromium.launch()\ncontext = await browser.new_context()\nawait context.tracing.start(screenshots=True, snapshots=True)\nawait page.goto("https://playwright.dev")\nawait context.tracing.stop(path = "trace.zip")\n')))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-tracing#tracing-start"},"tracing.start(**kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-tracing#tracing-stop"},"tracing.stop(**kwargs)"))),(0,s.kt)("h2",{id:"tracing-start"},"tracing.start(**kwargs)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-name"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,s.kt)("inlineCode",{parentName:"li"},"traces_dir")," folder specified in ",(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browsertype#browser-type-launch"},"browser_type.launch(**kwargs)"),".",(0,s.kt)("a",{href:"#tracing-start-option-name",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"screenshots"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-screenshots"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.",(0,s.kt)("a",{href:"#tracing-start-option-screenshots",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"snapshots"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-snapshots"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether to capture DOM snapshot on every action.",(0,s.kt)("a",{href:"#tracing-start-option-snapshots",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,s.kt)("a",{href:"#tracing-start-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Start tracing."),(0,s.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'context.tracing.start(name="trace", screenshots=True, snapshots=True)\npage.goto("https://playwright.dev")\ncontext.tracing.stop()\ncontext.tracing.stop(path = "trace.zip")\n'))),(0,s.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'await context.tracing.start(name="trace", screenshots=True, snapshots=True)\nawait page.goto("https://playwright.dev")\nawait context.tracing.stop()\nawait context.tracing.stop(path = "trace.zip")\n')))),(0,s.kt)("h2",{id:"tracing-stop"},"tracing.stop(**kwargs)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"path"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-option-path"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,s.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]",">"," Export trace into the file with the given name.",(0,s.kt)("a",{href:"#tracing-stop-option-path",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,s.kt)("a",{href:"#tracing-stop-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Stop tracing."))}d.isMDXComponent=!0}}]);