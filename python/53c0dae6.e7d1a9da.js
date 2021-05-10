(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{174:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),c=(a(0),a(392)),b=(a(395),a(396),{id:"actionability",title:"Auto-waiting"}),i={unversionedId:"actionability",id:"version-1.11.0/actionability",isDocsHomePage:!1,title:"Auto-waiting",description:"Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given timeout, action fails with the TimeoutError.",source:"@site/versioned_docs/version-1.11.0/actionability.mdx",slug:"/actionability",permalink:"/python/docs/actionability",version:"1.11.0",sidebar:"version-1.11.0/docs",previous:{title:"Release notes",permalink:"/python/docs/release-notes"},next:{title:"Assertions",permalink:"/python/docs/assertions"}},l=[{value:"Forcing actions",id:"forcing-actions",children:[]},{value:"Assertions",id:"assertions",children:[]},{value:"Attached",id:"attached",children:[]},{value:"Visible",id:"visible",children:[]},{value:"Stable",id:"stable",children:[]},{value:"Enabled",id:"enabled",children:[]},{value:"Editable",id:"editable",children:[]},{value:"Receives Events",id:"receives-events",children:[]}],s={toc:l};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given ",Object(c.b)("inlineCode",{parentName:"p"},"timeout"),", action fails with the ",Object(c.b)("inlineCode",{parentName:"p"},"TimeoutError"),"."),Object(c.b)("p",null,"For example, for ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageclickselector-kwargs"}),"page.click(selector, **kwargs)"),", Playwright will ensure that:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"element is ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#attached",title:"Attached"}),"Attached")," to the DOM"),Object(c.b)("li",{parentName:"ul"},"element is ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#visible",title:"Visible"}),"Visible")),Object(c.b)("li",{parentName:"ul"},"element is ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#stable",title:"Stable"}),"Stable"),", as in not animating or completed animation"),Object(c.b)("li",{parentName:"ul"},"element ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#receives-events",title:"Receives Events"}),"Receives Events"),", as in not obscured by other elements"),Object(c.b)("li",{parentName:"ul"},"element is ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#enabled",title:"Enabled"}),"Enabled"))),Object(c.b)("p",null,"Here is the complete list of actionability checks performed for each action:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"th"},{href:"#attached",title:"Attached"}),"Attached")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"th"},{href:"#visible",title:"Visible"}),"Visible")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"th"},{href:"#stable",title:"Stable"}),"Stable")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"th"},{href:"#receives-events",title:"Receives Events"}),"Receives Events")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"th"},{href:"#enabled",title:"Enabled"}),"Enabled")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"th"},{href:"#editable",title:"Editable"}),"Editable")))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"check"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"click"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dblclick"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tap"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"uncheck"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"hover"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"scrollIntoViewIfNeeded"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"screenshot"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fill"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"selectText"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dispatchEvent"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"focus"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"getAttribute"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"innerText"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"innerHTML"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"press"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setInputFiles"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"selectOption"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"textContent"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"type"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")))),Object(c.b)("br",null),Object(c.b)("h2",{id:"forcing-actions"},"Forcing actions"),Object(c.b)("p",null,"Some actions like ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageclickselector-kwargs"}),"page.click(selector, **kwargs)")," support ",Object(c.b)("inlineCode",{parentName:"p"},"force")," option that disables non-essential actionability checks, for example passing truthy ",Object(c.b)("inlineCode",{parentName:"p"},"force")," to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageclickselector-kwargs"}),"page.click(selector, **kwargs)")," method will not check that the target element actually receives click events."),Object(c.b)("h2",{id:"assertions"},"Assertions"),Object(c.b)("p",null,"You can check the actionability state of the element using one of the following methods as well. This is typically not necessary, but it helps writing assertive tests that ensure that after certain actions, elements reach actionable state:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-elementhandle#element_handleis_checked"}),"element_handle.is_checked()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-elementhandle#element_handleis_disabled"}),"element_handle.is_disabled()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-elementhandle#element_handleis_editable"}),"element_handle.is_editable()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-elementhandle#element_handleis_enabled"}),"element_handle.is_enabled()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-elementhandle#element_handleis_hidden"}),"element_handle.is_hidden()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-elementhandle#element_handleis_visible"}),"element_handle.is_visible()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageis_checkedselector-kwargs"}),"page.is_checked(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageis_disabledselector-kwargs"}),"page.is_disabled(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageis_editableselector-kwargs"}),"page.is_editable(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageis_enabledselector-kwargs"}),"page.is_enabled(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageis_hiddenselector-kwargs"}),"page.is_hidden(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageis_visibleselector-kwargs"}),"page.is_visible(selector, **kwargs)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"attached"},"Attached"),Object(c.b)("p",null,"Element is considered attached when it is ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected"}),"connected")," to a Document or a ShadowRoot."),Object(c.b)("h2",{id:"visible"},"Visible"),Object(c.b)("p",null,"Element is considered visible when it has non-empty bounding box and does not have ",Object(c.b)("inlineCode",{parentName:"p"},"visibility:hidden")," computed style. Note that elements of zero size or with ",Object(c.b)("inlineCode",{parentName:"p"},"display:none")," are not considered visible."),Object(c.b)("h2",{id:"stable"},"Stable"),Object(c.b)("p",null,"Element is considered stable when it has maintained the same bounding box for at least two consecutive animation frames."),Object(c.b)("h2",{id:"enabled"},"Enabled"),Object(c.b)("p",null,"Element is considered enabled when it is not a ",Object(c.b)("inlineCode",{parentName:"p"},"<button>"),", ",Object(c.b)("inlineCode",{parentName:"p"},"<select>"),", ",Object(c.b)("inlineCode",{parentName:"p"},"<input>")," or ",Object(c.b)("inlineCode",{parentName:"p"},"<textarea>")," with a ",Object(c.b)("inlineCode",{parentName:"p"},"disabled")," property set."),Object(c.b)("h2",{id:"editable"},"Editable"),Object(c.b)("p",null,"Element is considered editable when it is ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#enabled",title:"Enabled"}),"enabled")," and does not have ",Object(c.b)("inlineCode",{parentName:"p"},"readonly")," property set."),Object(c.b)("h2",{id:"receives-events"},"Receives Events"),Object(c.b)("p",null,"Element is considered receiving pointer events when it is the hit target of the pointer event at the action point. For example, when clicking at the point ",Object(c.b)("inlineCode",{parentName:"p"},"(10;10)"),", Playwright checks whether some other element (usually an overlay) will instead capture the click at ",Object(c.b)("inlineCode",{parentName:"p"},"(10;10)"),"."),Object(c.b)("p",null,"For example, consider a scenario where Playwright will click ",Object(c.b)("inlineCode",{parentName:"p"},"Sign Up")," button regardless of when the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageclickselector-kwargs"}),"page.click(selector, **kwargs)")," call was made:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"page is checking that user name is unique and ",Object(c.b)("inlineCode",{parentName:"li"},"Sign Up")," button is disabled;"),Object(c.b)("li",{parentName:"ul"},"after checking with the server, the disabled ",Object(c.b)("inlineCode",{parentName:"li"},"Sign Up")," button is replaced with another one that is now enabled.")))}O.isMDXComponent=!0},391:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},392:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),O=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},j=function(e){var t=O(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),j=O(a),o=n,d=j["".concat(b,".").concat(o)]||j[o]||p[o]||c;return a?r.a.createElement(d,i(i({ref:t},s),{},{components:a})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=o;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var s=2;s<c;s++)b[s]=a[s];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},393:function(e,t,a){"use strict";var n=a(0),r=a(394);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},394:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},395:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(393),b=a(391),i=a(53),l=a.n(i),s=37,O=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,j=e.values,p=e.groupId,o=e.className,d=Object(c.a)(),m=d.tabGroupChoices,g=d.setTabGroupChoices,N=Object(n.useState)(i),h=N[0],u=N[1],f=n.Children.toArray(e.children);if(null!=p){var y=m[p];null!=y&&y!==h&&j.some((function(e){return e.value===y}))&&u(y)}var v=function(e){u(e),null!=p&&g(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":a},o)},j.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(b.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case O:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(n.cloneElement)(f.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},396:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);