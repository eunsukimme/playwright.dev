"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3420],{66682:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return g},default:function(){return u}});var n=t(87462),l=t(63366),o=(t(67294),t(3905)),i=t(26396),r=t(58215),d=["components"],s={id:"dialogs",title:"Dialogs"},p=void 0,c={unversionedId:"dialogs",id:"dialogs",isDocsHomePage:!1,title:"Dialogs",description:"Playwright can interact with the web page dialogs such as alert, confirm, prompt as well as beforeunload confirmation.",source:"@site/docs/dialogs.mdx",sourceDirName:".",slug:"/dialogs",permalink:"/python/docs/next/dialogs",tags:[],version:"current",frontMatter:{id:"dialogs",title:"Dialogs"},sidebar:"docs",previous:{title:"Command line tools",permalink:"/python/docs/next/cli"},next:{title:"Downloads",permalink:"/python/docs/next/downloads"}},g=[{value:"alert(), confirm(), prompt() dialogs",id:"alert-confirm-prompt-dialogs",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"beforeunload dialog",id:"beforeunload-dialog",children:[],level:2}],m={toc:g};function u(e){var a=e.components,t=(0,l.Z)(e,d);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright can interact with the web page dialogs such as ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/alert"},(0,o.kt)("inlineCode",{parentName:"a"},"alert")),", ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm"},(0,o.kt)("inlineCode",{parentName:"a"},"confirm")),", ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt"},(0,o.kt)("inlineCode",{parentName:"a"},"prompt"))," as well as ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event"},(0,o.kt)("inlineCode",{parentName:"a"},"beforeunload"))," confirmation."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#alert-confirm-prompt-dialogs"},"alert(), confirm(), prompt() dialogs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#beforeunload-dialog"},"beforeunload dialog"))),(0,o.kt)("h2",{id:"alert-confirm-prompt-dialogs"},"alert(), confirm(), prompt() dialogs"),(0,o.kt)("p",null,"By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to accept or decline it."),(0,o.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.on("dialog", lambda dialog: dialog.accept())\npage.click("button")\n'))),(0,o.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.on("dialog", lambda dialog: dialog.accept())\nawait page.click("button")\n')))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#page-event-dialog"},'page.on("dialog")')," listener ",(0,o.kt)("strong",{parentName:"p"},"must handle")," the dialog. Otherwise your action will stall, be it ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#page-click"},"page.click(selector, **kwargs)"),", ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#page-evaluate"},"page.evaluate(expression, **kwargs)")," or any other. That's because dialogs in Web are modal and block further page execution until they are handled."))),(0,o.kt)("p",null,"As a result, following snippet will never resolve:"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"WRONG!"))),(0,o.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.on("dialog", lambda dialog: print(dialog.message))\npage.click("button") # Will hang here\n'))),(0,o.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.on("dialog", lambda dialog: print(dialog.message))\nawait page.click("button") # Will hang here\n')))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If there is no listener for ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#page-event-dialog"},'page.on("dialog")'),", all dialogs are automatically dismissed."))),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-dialog",title:"Dialog"},"Dialog")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-dialog#dialog-accept"},"dialog.accept(**kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-dialog#dialog-dismiss"},"dialog.dismiss()"))),(0,o.kt)("h2",{id:"beforeunload-dialog"},"beforeunload dialog"),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#page-close"},"page.close(**kwargs)")," is invoked with the truthy ",(0,o.kt)("inlineCode",{parentName:"p"},"run_before_unload")," value, it page runs its unload handlers. This is the only case when ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#page-close"},"page.close(**kwargs)")," does not wait for the page to actually close, because it might be that the page stays open in the end of the operation."),(0,o.kt)("p",null,"You can register a dialog handler to handle the beforeunload dialog yourself:"),(0,o.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"def handle_dialog(dialog):\n    assert dialog.type == 'beforeunload'\n    dialog.dismiss()\n\npage.on('dialog', lambda: handle_dialog)\npage.close(run_before_unload=True)\n"))),(0,o.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"async def handle_dialog(dialog):\n    assert dialog.type == 'beforeunload'\n    await dialog.dismiss()\n\npage.on('dialog', lambda: handle_dialog)\nawait page.close(run_before_unload=True)\n")))))}u.isMDXComponent=!0}}]);