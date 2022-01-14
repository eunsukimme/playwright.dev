"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[47747],{19306:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var t=n(87462),o=n(63366),l=(n(67294),n(3905)),r=(n(26396),n(58215),["components"]),i={id:"verification",title:"Verification"},s=void 0,p={unversionedId:"verification",id:"version-1.17/verification",isDocsHomePage:!1,title:"Verification",description:"- Console logs",source:"@site/versioned_docs/version-1.17/verification.mdx",sourceDirName:".",slug:"/verification",permalink:"/docs/1.17/verification",tags:[],version:"1.17",frontMatter:{id:"verification",title:"Verification"},sidebar:"version-1.17/docs",previous:{title:"Screenshots",permalink:"/docs/1.17/screenshots"},next:{title:"Videos",permalink:"/docs/1.17/videos"}},c=[{value:"Console logs",id:"console-logs",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Page errors",id:"page-errors",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Page events",id:"page-events",children:[{value:"<code>&quot;requestfailed&quot;</code>",id:"requestfailed",children:[],level:4},{value:"<code>&quot;dialog&quot;</code> - handle alert, confirm, prompt",id:"dialog---handle-alert-confirm-prompt",children:[],level:4},{value:"<code>&quot;popup&quot;</code> - handle popup windows",id:"popup---handle-popup-windows",children:[],level:4},{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2}],g={toc:c};function u(e){var a=e.components,n=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,t.Z)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#console-logs"},"Console logs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#page-errors"},"Page errors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#page-events"},"Page events"))),(0,l.kt)("h2",{id:"console-logs"},"Console logs"),(0,l.kt)("p",null,"Console messages logged in the page can be brought into the Playwright context."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Listen for all console logs\npage.on('console', msg => console.log(msg.text()))\n\n// Listen for all console events and handle errors\npage.on('console', msg => {\n  if (msg.type() === 'error')\n    console.log(`Error text: \"${msg.text()}\"`);\n});\n\n// Get the next console log\nconst [msg] = await Promise.all([\n  page.waitForEvent('console'),\n  // Issue console.log inside the page\n  page.evaluate(() => {\n    console.log('hello', 42, { foo: 'bar' });\n  }),\n]);\n\n// Deconstruct console log arguments\nawait msg.args[0].jsonValue() // hello\nawait msg.args[1].jsonValue() // 42\n")),(0,l.kt)("h3",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-consolemessage",title:"ConsoleMessage"},"ConsoleMessage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-page",title:"Page"},"Page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-page#page-event-console"},"page.on('console')"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"page-errors"},"Page errors"),(0,l.kt)("p",null,"Listen for uncaught exceptions in the page with the ",(0,l.kt)("inlineCode",{parentName:"p"},"pagerror")," event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Log all uncaught errors to the terminal\npage.on('pageerror', exception => {\n  console.log(`Uncaught exception: \"${exception}\"`);\n});\n\n// Navigate to a page with an exception.\nawait page.goto('data:text/html,<script>throw new Error(\"Test\")<\/script>');\n")),(0,l.kt)("h3",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-page",title:"Page"},"Page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-page#page-event-page-error"},"page.on('pageerror')"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"page-events"},"Page events"),(0,l.kt)("h4",{id:"requestfailed"},(0,l.kt)("inlineCode",{parentName:"h4"},'"requestfailed"')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n")),(0,l.kt)("h4",{id:"dialog---handle-alert-confirm-prompt"},(0,l.kt)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"page.on('dialog', dialog => {\n  dialog.accept();\n});\n")),(0,l.kt)("h4",{id:"popup---handle-popup-windows"},(0,l.kt)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('#open')\n]);\n")),(0,l.kt)("h3",{id:"api-reference-2"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-page",title:"Page"},"Page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-page#page-event-request-failed"},"page.on('requestfailed')")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-page#page-event-dialog"},"page.on('dialog')")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.17/api/class-page#page-event-popup"},"page.on('popup')"))))}u.isMDXComponent=!0}}]);