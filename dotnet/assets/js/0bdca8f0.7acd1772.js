"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5178],{5691:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return c},default:function(){return h}});var n=t(7462),l=t(3366),s=(t(7294),t(3905)),r=(t(6396),t(8215),["components"]),i={id:"handles",title:"Handles"},o=void 0,d={unversionedId:"handles",id:"version-1.17/handles",isDocsHomePage:!1,title:"Handles",description:"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:",source:"@site/versioned_docs/version-1.17/handles.mdx",sourceDirName:".",slug:"/handles",permalink:"/dotnet/docs/handles",tags:[],version:"1.17",frontMatter:{id:"handles",title:"Handles"},sidebar:"version-1.17/docs",previous:{title:"Frames",permalink:"/dotnet/docs/frames"},next:{title:"Input",permalink:"/dotnet/docs/input"}},c=[{value:"API reference",id:"api-reference",children:[],level:3},{value:"Element Handles",id:"element-handles",children:[],level:2},{value:"Handles as parameters",id:"handles-as-parameters",children:[],level:2},{value:"Handle Lifecycle",id:"handle-lifecycle",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2}],p={toc:c};function h(e){var a=e.components,t=(0,l.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"},"JSHandle")," to reference any JavaScript objects in the page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," to reference DOM elements in the page, it has extra methods that allow performing actions on the elements and asserting their properties.")),(0,s.kt)("p",null,"Since any DOM element in the page is also a JavaScript object, any ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is a ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"},"JSHandle")," as well."),(0,s.kt)("p",null,"Handles are used to perform operations on those actual objects in the page. You can evaluate on a handle, get handle properties, pass handle as an evaluation parameter, serialize page object into JSON etc. See the ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"},"JSHandle")," class API for these and methods."),(0,s.kt)("h3",{id:"api-reference"},"API reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"))),(0,s.kt)("p",null,"Here is the easiest way to obtain a ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'var jsHandle = await page.EvaluateHandleAsync("window");\n//  Use jsHandle for evaluations.\n')),(0,s.kt)("h2",{id:"element-handles"},"Element Handles"),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Discouraged")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The use of ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is discouraged, use ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-locator",title:"Locator"},"Locator")," objects and web-first assertions instead."))),(0,s.kt)("p",null,"When ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is required, it is recommended to fetch it with the ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-wait-for-selector"},"Page.WaitForSelectorAsync(selector, options)")," or ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-frame#frame-wait-for-selector"},"Frame.WaitForSelectorAsync(selector, options)")," methods. These APIs wait for the element to be attached and visible."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'// Get the element handle\nvar jsHandle = await page.WaitForSelectorAsync("#box");\nvar elementHandle = jsHandle as ElementHandle;\n\n// Assert bounding box for the element\nvar boundingBox = await elementHandle.BoundingBoxAsync();\nAssert.Equal(100, boundingBox.Width);\n\n// Assert attribute for the element\nvar classNames = await elementHandle.GetAttributeAsync("class");\nAssert.True(classNames.Contains("highlighted"));\n')),(0,s.kt)("h2",{id:"handles-as-parameters"},"Handles as parameters"),(0,s.kt)("p",null,"Handles can be passed into the ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-evaluate"},"Page.EvaluateAsync(expression, arg)")," and similar methods. The following snippet creates a new array in the page, initializes it with data and returns a handle to this array into Playwright. It then uses the handle in subsequent evaluations:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'// Create new array in page.\nvar myArrayHandle = await page.EvaluateHandleAsync(@"() => {\n    window.myArray = [1];\n    return myArray;\n}");\n\n// Get the length of the array.\nvar length = await page.EvaluateAsync<int>("a => a.length", myArrayHandle);\n\n// Add one more element to the array using the handle\nawait page.EvaluateAsync("arg => arg.myArray.add(arg.newElement)",\n    new { myArray = myArrayHandle, newElement = 2 });\n\n// Release the object when it is no longer needed.\nawait myArrayHandle.DisposeAsync();\n')),(0,s.kt)("h2",{id:"handle-lifecycle"},"Handle Lifecycle"),(0,s.kt)("p",null,"Handles can be acquired using the page methods such as ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-evaluate-handle"},"Page.EvaluateHandleAsync(expression, arg)"),", ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-query-selector"},"Page.QuerySelectorAsync(selector, options)")," or ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-query-selector-all"},"Page.QuerySelectorAllAsync(selector)")," or their frame counterparts ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-frame#frame-evaluate-handle"},"Frame.EvaluateHandleAsync(expression, arg)"),", ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-frame#frame-query-selector"},"Frame.QuerySelectorAsync(selector, options)")," or ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-frame#frame-query-selector-all"},"Frame.QuerySelectorAllAsync(selector)"),". Once created, handles will retain object from ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"},"garbage collection")," unless page navigates or the handle is manually disposed via the ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-jshandle#js-handle-dispose"},"JsHandle.DisposeAsync()")," method."),(0,s.kt)("h3",{id:"api-reference-1"},"API reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-bounding-box"},"ElementHandle.BoundingBoxAsync()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-get-attribute"},"ElementHandle.GetAttributeAsync(name)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-inner-text"},"ElementHandle.InnerTextAsync()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-inner-html"},"ElementHandle.InnerHTMLAsync()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-text-content"},"ElementHandle.TextContentAsync()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle#js-handle-evaluate"},"JsHandle.EvaluateAsync(expression, arg)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-evaluate-handle"},"Page.EvaluateHandleAsync(expression, arg)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-query-selector"},"Page.QuerySelectorAsync(selector, options)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-query-selector-all"},"Page.QuerySelectorAllAsync(selector)"))))}h.isMDXComponent=!0}}]);