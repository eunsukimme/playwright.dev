"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9514,2965],{63616:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var r=n(67294),a=n(3905),u=n(52263),i=n(46291),o=n(28258),s=n(22122),l=n(19756),c=n(86010),d=n(39306),m=n(31839),p=n(93783),h=n(77898),f=n(36742),v=n(13919),g=n(55537),D=function(e){return r.createElement("svg",(0,s.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},b=n(84478),F=n(18617),C=n(24973),E="sidebar_15mo",_="sidebarWithHideableNavbar_267A",k="sidebarHidden_2kNb",A="sidebarLogo_3h0W",x="menu_Bmed",Z="menuLinkText_2aKo",w="menuWithAnnouncementBar_2WvA",y="collapseSidebarButton_1CGd",N="collapseSidebarButtonIcon_3E-R",I="sidebarMenuIcon_fgN0",S="sidebarMenuCloseIcon_1lpH",B=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},R=(0,r.memo)((function(e){var t=e.items,n=(0,l.Z)(e,["items"]);return t.map((function(e,t){return r.createElement(L,(0,s.Z)({key:t,item:e},n))}))}));function L(e){switch(e.item.type){case"category":return r.createElement(M,e);case"link":default:return r.createElement(T,e)}}function M(e){var t,n=e.item,a=e.onItemClick,u=e.collapsible,i=e.activePath,o=(0,l.Z)(e,["item","onItemClick","collapsible","activePath"]),m=n.items,p=n.label,h=B(n,i),f=(0,d.D9)(h),v=(0,r.useState)((function(){return!!u&&(!h&&n.collapsed)})),g=v[0],D=v[1],b=(0,r.useRef)(null),F=(0,r.useState)(void 0),C=F[0],E=F[1],_=function(e){var t;void 0===e&&(e=!0),E(e?(null==(t=b.current)?void 0:t.scrollHeight)+"px":void 0)};(0,r.useEffect)((function(){h&&!f&&g&&D(!1)}),[h,f,g]);var k=(0,r.useCallback)((function(e){e.preventDefault(),C||_(),setTimeout((function(){return D((function(e){return!e}))}),100)}),[C]);return 0===m.length?null:r.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":g})},r.createElement("a",(0,s.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":u,"menu__link--active":u&&h},t[Z]=!u,t)),onClick:u?k:void 0,href:u?"#":void 0},o),p),r.createElement("ul",{className:"menu__list",ref:b,style:{height:C},onTransitionEnd:function(){g||_(!1)}},r.createElement(R,{items:m,tabIndex:g?"-1":"0",onItemClick:a,collapsible:u,activePath:i})))}function T(e){var t=e.item,n=e.onItemClick,a=e.activePath,u=(e.collapsible,(0,l.Z)(e,["item","onItemClick","activePath","collapsible"])),i=t.href,o=t.label,d=B(t,a);return r.createElement("li",{className:"menu__list-item",key:o},r.createElement(f.Z,(0,s.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":d}),to:i},(0,v.Z)(i)&&{isNavLink:!0,exact:!0,onClick:n},u),(0,v.Z)(i)?o:r.createElement("span",null,o,r.createElement(F.Z,null))))}function z(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,C.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",y),onClick:t},r.createElement(D,{className:N}))}function H(e){var t=e.responsiveSidebarOpened,n=e.onClick;return r.createElement("button",{"aria-label":t?(0,C.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,C.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?r.createElement("span",{className:(0,c.Z)(I,S)},"\xd7"):r.createElement(b.Z,{className:I,height:24,width:24}))}var P=function(e){var t,n,a=e.path,u=e.sidebar,i=e.sidebarCollapsible,o=void 0===i||i,s=e.onCollapse,l=e.isHidden,f=function(){var e=(0,d.nT)().isClosed,t=(0,r.useState)(!e),n=t[0],a=t[1];return(0,h.Z)((function(t){var n=t.scrollY;e||a(0===n)})),n}(),v=(0,d.LU)(),D=v.navbar.hideOnScroll,b=v.hideableSidebar,F=(0,d.nT)().isClosed,Z=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];(0,m.Z)(t);var a=(0,p.Z)();return(0,r.useEffect)((function(){a===p.D.desktop&&n(!1)}),[a]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,r.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,r.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),y=Z.showResponsiveSidebar,N=Z.closeResponsiveSidebar,I=Z.toggleResponsiveSidebar;return r.createElement("div",{className:(0,c.Z)(E,(t={},t[_]=D,t[k]=l,t))},D&&r.createElement(g.Z,{tabIndex:-1,className:A}),r.createElement("nav",{className:(0,c.Z)("menu","menu--responsive","thin-scrollbar",x,(n={"menu--show":y},n[w]=!F&&f,n)),"aria-label":(0,C.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},r.createElement(H,{responsiveSidebarOpened:y,onClick:I}),r.createElement("ul",{className:"menu__list"},r.createElement(R,{items:u,onItemClick:N,collapsible:o,activePath:a}))),b&&r.createElement(z,{onClick:s}))},W=n(87277),j=n(84204),O=n(5977),U={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainer:"docSidebarContainer_3Kbt",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function K(e){var t,n,i,s,l,m=e.currentDocRoute,p=e.versionMetadata,h=e.children,f=(0,u.Z)(),v=f.siteConfig,g=f.isClient,b=p.pluginId,F=p.version,E=function(e){var t,n=e.versionMetadata,r=e.currentDocRoute,a=n.permalinkToSidebar,u=n.docsSidebars,i=a[r.path]||a[(t=r.path,t.endsWith("/")?t:t+"/")]||a[function(e){return e.endsWith("/")?e.slice(0,-1):e}(r.path)];return{sidebar:u[i],sidebarName:i}}({versionMetadata:p,currentDocRoute:m}),_=E.sidebarName,k=E.sidebar,A=(0,r.useState)(!1),x=A[0],Z=A[1],w=(0,r.useState)(!1),y=w[0],N=w[1],I=(0,r.useCallback)((function(){y&&N(!1),Z(!x)}),[y]);return r.createElement(o.Z,{key:g,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:F,tag:(0,d.os)(b,F)}},r.createElement("div",{className:U.docPage},k&&r.createElement("aside",{className:(0,c.Z)(U.docSidebarContainer,(t={},t[U.docSidebarContainerHidden]=x,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(U.docSidebarContainer)&&x&&N(!0)}},r.createElement(P,{key:_,sidebar:k,path:m.path,sidebarCollapsible:null==(n=null==(i=v.themeConfig)?void 0:i.sidebarCollapsible)||n,onCollapse:I,isHidden:y}),y&&r.createElement("div",{className:U.collapsedDocSidebar,title:(0,C.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:I,onClick:I},r.createElement(D,{className:U.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,c.Z)(U.docMainContainer,(s={},s[U.docMainContainerEnhanced]=x||!k,s))},r.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",U.docItemWrapper,(l={},l[U.docItemWrapperEnhanced]=x,l))},r.createElement(a.Zo,{components:W.Z},h)))))}var Q=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,u=t.find((function(e){return(0,O.LX)(a.pathname,e)}));return u?r.createElement(K,{currentDocRoute:u,versionMetadata:n},(0,i.Z)(t,{versionMetadata:n})):r.createElement(j.default,e)}},48219:function(e,t,n){var r=n(22122),a=n(19756),u=n(67294),i=n(86010),o=n(36742),s=n(44996),l=n(5977),c=n(39306),d=n(18617),m=n(13919),p="dropdown__link--active";function h(e){var t=e.activeBasePath,n=e.activeBaseRegex,i=e.to,c=e.href,h=e.label,f=e.activeClassName,v=void 0===f?"navbar__link--active":f,g=e.prependBaseUrlToHref,D=e["data-language-prefix"],b=(0,a.Z)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref","data-language-prefix"]),F=(0,s.Z)(i),C=(0,s.Z)(t),E=(0,s.Z)(c,{forcePrependBaseUrl:!0}),_=h&&c&&!(0,m.Z)(c),k=v===p,A=(0,l.TH)();if(D){c="pathname://"+D+A.pathname.replace(/^(\/(java|dotnet|python))?\/(.*)/,"$3")+A.hash,b.autoAddBaseUrl=!1,b.target="_self";var x=["java","dotnet","python"].some((function(e){return A.pathname.startsWith("/"+e)}));(A.pathname.startsWith(D)&&x&&D.length>1||1===D.length&&!x)&&(b.className+=" "+v)}return u.createElement(o.Z,(0,r.Z)({},c?{href:g?E:c}:Object.assign({isNavLink:!0,activeClassName:v,to:F},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(C)}}:null),b),_?u.createElement("span",null,h,u.createElement(d.Z,k&&{width:12,height:12})):h)}function f(e){var t,n=e.items,o=e.position,s=e.className,l=(0,a.Z)(e,["items","position","className"]),c=(0,u.useRef)(null),d=(0,u.useRef)(null),m=(0,u.useState)(!1),f=m[0],v=m[1];(0,u.useEffect)((function(){var e=function(e){c.current&&!c.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[c]);var g=function(e,t){return void 0===t&&(t=!1),(0,i.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?u.createElement("div",{ref:c,className:(0,i.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===o,"dropdown--right":"right"===o,"dropdown--show":f})},u.createElement(h,(0,r.Z)({className:g(s)},l,{onClick:l.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),v(!f))}}),null!=(t=l.children)?t:l.label),u.createElement("ul",{ref:d,className:"dropdown__menu"},n.map((function(e,t){var i=e.className,o=(0,a.Z)(e,["className"]);return u.createElement("li",{key:t},u.createElement(h,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);var r=c.current.nextElementSibling;r&&r.focus()}},activeClassName:p,className:g(i,!0)},o)))})))):u.createElement(h,(0,r.Z)({className:g(s)},l))}function v(e){var t,n,o,s=e.items,d=e.className,m=(e.position,(0,a.Z)(e,["items","className","position"])),p=(0,u.useRef)(null),f=(0,l.TH)().pathname,v=(0,u.useState)((function(){var e;return null==(e=!(null!=s&&s.some((function(e){return(0,c.Mg)(e.to,f)}))))||e})),g=v[0],D=v[1],b=function(e,t){return void 0===t&&(t=!1),(0,i.Z)("menu__link",{"menu__link--sublist":t},e)};if(!s)return u.createElement("li",{className:"menu__list-item"},u.createElement(h,(0,r.Z)({className:b(d)},m)));var F=null!=(t=p.current)&&t.scrollHeight?(null==(n=p.current)?void 0:n.scrollHeight)+"px":void 0;return u.createElement("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":g})},u.createElement(h,(0,r.Z)({role:"button",className:b(d,!0)},m,{onClick:function(e){e.preventDefault(),D((function(e){return!e}))}}),null!=(o=m.children)?o:m.label),u.createElement("ul",{className:"menu__list",ref:p,style:{height:g?void 0:F}},s.map((function(e,t){var n=e.className,i=(0,a.Z)(e,["className"]);return u.createElement("li",{className:"menu__list-item",key:t},u.createElement(h,(0,r.Z)({activeClassName:"menu__link--active",className:b(n)},i,{onClick:m.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,["mobile"]),i=n?v:f;return u.createElement(i,r)}},84204:function(e,t,n){n.r(t);var r=n(67294),a=n(28258),u=n(52263);t.default=function(){var e=(0,u.Z)().siteConfig.customFields.languageName;return r.createElement(a.Z,{title:"Page Not Found"},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},"This page is not available for ",e,"."),r.createElement("p",null,"We could not find what you were looking for.")))))}},14535:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(78695),u="loadingRing_3atr";function i(e){var t=e.className;return r.createElement("div",{className:(0,a.Z)(u,t)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,t,n){n.d(t,{w:function(){return c}});var r=n(38173),a=n(92137),u=n(87757),i=n.n(u),o=n(35850),s=n.n(o),l=n(8141);function c(e){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(i().mark((function e(t){var n,a,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+l.rx);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,a=n.map((function(e,t){var n=e.documents,r=e.index;return{type:t,documents:n,index:s().Index.load(r)}})),u=n.reduce((function(e,t){for(var n,a=(0,r.Z)(t.index.invertedIndex);!(n=a()).done;){var u=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(u[0][0])&&e.add(u[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:a,zhDictionary:Array.from(u)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},83636:function(e,t,n){n.d(t,{Z:function(){return K}});var r=n(8141),a=n(38173),u=n(92137),i=n(87757),o=n.n(i),s=n(67294),l=n(78695),c=n(52263),d=n(10412),m=n(5977),p=n(3551),h=n(88938),f=n(86092),v=n(55401),g=n(85579),D="searchBar_2moK",b="dropdownMenu_17SC",F="suggestion_1kAZ",C="cursor_6rPN",E="hitTree_2sUa",_="hitIcon_3jP2",k="hitPath_3Lax",A="noResultsIcon_1rmk",x="hitFooter_1JML",Z="hitWrapper_4Hzp",w="hitTitle_2AMl",y="hitAction_2kg3",N="noResults_1vI5",I="searchBarContainer_2P1H",S="searchBarLoadingRing_1FtX",B="searchIndexLoading_1eRR",R="input_1tay",L="hint_1WuO",M="suggestions_1cWc",T="dataset_3Xc2",z="empty_2isC";function H(e){var t=e.document,n=e.type,r=e.page,a=e.metadata,u=e.tokens,i=e.isInterOfTree,o=e.isLastOfTree,s=0===n,l=1===n,c=[];i?c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):o&&c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var d=c.map((function(e){return'<span class="'+E+'">'+e+"</span>"})),m='<span class="'+_+'">'+(s?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':l?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",p=['<span class="'+w+'">'+(0,v.o)(t.t,(0,g.m)(a,"t"),u)+"</span>"];return s||p.push('<span class="'+k+'">'+(0,f.C)(r.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),u)+"</span>"),[].concat(d,[m,'<span class="'+Z+'">'],p,["</span>",'<span class="'+y+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function P(){return'<span class="'+N+'"><span class="'+A+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var W=n(14535);function j(){return O.apply(this,arguments)}function O(){return(O=(0,u.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(4485),n.e(213)]).then(n.t.bind(n,24485,23));case 2:return t=e.sent,(r=t.default).noConflict?r.noConflict():t.noConflict&&t.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U="_highlight";var K=function(e){var t,n=e.handleSearchBarToggle,i=(0,c.Z)().siteConfig.baseUrl,f=(0,m.k6)(),v=(0,m.TH)(),g=(0,s.useRef)(null),E=(0,s.useRef)("empty"),_=(0,s.useRef)(!1),k=(0,s.useState)(!1),A=k[0],Z=k[1],w=(0,s.useState)(!1),y=w[0],N=w[1],O=(0,s.useCallback)((0,u.Z)(o().mark((function e(){var t,n,u,s,l,c,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===E.current){e.next=2;break}return e.abrupt("return");case 2:return E.current="loading",Z(!0),e.next=6,Promise.all([(0,p.w)(i),j()]);case 6:t=e.sent,n=t[0],u=n.wrappedIndexes,s=n.zhDictionary,l=t[1],c=l(g.current,{hint:!1,autoselect:!0,cssClasses:{root:D,noPrefix:!0,dropdownMenu:b,input:R,hint:L,suggestions:M,suggestion:F,cursor:C,dataset:T,empty:z}},[{source:(0,h.v)(u,s,r.qo),templates:{suggestion:H,empty:P,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),a=i+"search?q="+encodeURIComponent(t);n.href=a,n.textContent=r.Iz.see_all_results,n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),c.autocomplete.close(),f.push(a))}));var u=document.createElement("div");return u.className=x,u.appendChild(n),u}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,u=n.u,i=n.h,o=t.tokens,s=u;if(r.vc&&o.length>0){for(var l,c=new URLSearchParams,d=(0,a.Z)(o);!(l=d()).done;){var m=l.value;c.append(U,m)}s+="?"+c.toString()}i&&(s+=i),f.push(s)})),E.current="done",Z(!1),_.current&&((d=g.current).value&&c.autocomplete.open(),d.focus());case 15:case"end":return e.stop()}}),e)}))),[i,f]);(0,s.useEffect)((function(){if(r.vc){var e=d.Z.canUseDOM?new URLSearchParams(v.search).getAll(U):[];0!==e.length&&setTimeout((function(){var t=document.querySelector("article");if(t){var n=new r.vc(t);n.unmark(),n.mark(e)}}))}}),[v.search]);var K=(0,s.useCallback)((function(){_.current=!0,O(),null==n||n(!0)}),[n,O]),Q=(0,s.useCallback)((function(){null==n||n(!1)}),[n]),X=(0,s.useCallback)((function(){O()}),[O]),q=(0,s.useCallback)((function(e){e.target.value&&N(!0)}),[]);return s.createElement("div",{className:(0,l.Z)("navbar__search",I,(t={},t[B]=A&&y,t))},s.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:X,onFocus:K,onBlur:Q,onChange:q,ref:g}),s.createElement(W.Z,{className:S}))}},88938:function(e,t,n){n.d(t,{v:function(){return c}});var r=n(38173),a=n(35850),u=n.n(a);function i(e,t){var n=[];return function e(a,u){if(0!==a.length){var i=a[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(i))for(var o,s=function(e,t){var n=[];return function e(a,u){for(var i,o=0,s=!1,l=(0,r.Z)(t);!(i=l()).done;){var c=i.value;if(a.substr(0,c.length)===c){var d={missed:u.missed,term:u.term.concat({value:c})};a.length>c.length?e(a.substr(c.length),d):n.push(d),s=!0}else for(var m=c.length-1;m>o;m-=1){var p=c.substr(0,m);if(a.substr(0,m)===p){o=m;var h={missed:u.missed,term:u.term.concat({value:p,trailing:!0})};a.length>m?e(a.substr(m),h):n.push(h),s=!0;break}}}s||(a.length>0?e(a.substr(1),{missed:u.missed+1,term:u.term}):u.term.length>0&&n.push(u))}(e,{missed:0,term:[]}),n.sort((function(e,t){var n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((function(e){return e.term}))}(i,t),l=(0,r.Z)(s);!(o=l()).done;){var c=o.value,d=u.concat.apply(u,c);e(a.slice(1),d)}else{var m=u.concat({value:i});e(a.slice(1),m)}}else n.push(u)}(e,[]),n}var o=n(8141);function s(e){return l(e).concat(l(e.filter((function(e){var t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function l(e,t){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:u().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?u().Query.wildcard.TRAILING:u().Query.wildcard.NONE}}))}}))}function c(e,t,n){return function(a,l){var c=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return u()[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(a,o.dK);if(0!==c.length){var d=function(e,t){var n=i(e,t);if(0===n.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:u().Query.presence.REQUIRED,wildcard:u().Query.wildcard.LEADING|u().Query.wildcard.TRAILING}}))}];for(var a,l=(0,r.Z)(n);!(a=l()).done;){var c=a.value;c[c.length-1].maybeTyping=!0}for(var d,m,p=[],h=(0,r.Z)(o.dK);!(d=h()).done;){var f=d.value;if("en"===f)o._k||p.unshift(u().stopWordFilter);else{var v=u()[f];v.stopWordFilter&&p.unshift(v.stopWordFilter)}}if(p.length>0){var g=function(e){return p.reduce((function(e,t){return e.filter((function(e){return t(e.value)}))}),e)};m=[];for(var D,b=[],F=(0,r.Z)(n);!(D=F()).done;){var C=D.value,E=g(C);m.push(E),E.length<C.length&&E.length>0&&b.push(E)}n.push.apply(n,b)}else m=n.slice();for(var _,k=[],A=(0,r.Z)(m);!(_=A()).done;){var x=_.value;if(x.length>2)for(var Z=x.length-1;Z>=0;Z-=1)k.push(x.slice(0,Z).concat(x.slice(Z+1)))}return s(n).concat(s(k))}(c,t),m=[],p=function(){for(var t,a=h.value,u=a.term,i=a.tokens,o=function(){var a=t.value,o=a.documents,s=a.index,l=a.type;if(m.push.apply(m,s.query((function(e){for(var t,n=(0,r.Z)(u);!(t=n()).done;){var a=t.value;e.term(a.value,{wildcard:a.wildcard,presence:a.presence})}})).slice(0,n).filter((function(e){return!m.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-m.length).map((function(t){var n=o.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:l,page:0!==l&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:i,score:t.score}}))),m.length>=n)return{v:"break|search"}},s=(0,r.Z)(e);!(t=s()).done;){var l=o();if("object"==typeof l)return l.v}};e:for(var h,f=(0,r.Z)(d);!(h=f()).done;){if("break|search"===p())break e}!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var r=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,a=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===r&&(r=t.index),-1===a&&(a=n.index),r===a?0===t.type?-1:0===n.type?1:t.index-n.index:r-a}))}(m),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(m),l(m)}else l([])}}},98740:function(e,t,n){function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,{X:function(){return r}})},85579:function(e,t,n){function r(e,t){for(var n=[],r=0,a=Object.values(e);r<a.length;r++){var u=a[r];u[t]&&n.push.apply(n,u[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,{m:function(){return r}})},86092:function(e,t,n){n.d(t,{C:function(){return u}});var r=n(38173),a=n(98740);function u(e,t,n){for(var i,o=[],s=(0,r.Z)(t);!(i=s()).done;){var l=i.value,c=e.toLowerCase().indexOf(l);if(c>=0){c>0&&o.push(u(e.substr(0,c),t)),o.push("<mark>"+(0,a.X)(e.substr(c,l.length))+"</mark>");var d=c+l.length;d<e.length&&o.push(u(e.substr(d),t));break}}return 0===o.length?n?"<mark>"+(0,a.X)(e)+"</mark>":(0,a.X)(e):o.join("")}},55401:function(e,t,n){n.d(t,{o:function(){return s}});var r=n(98740),a=n(86092),u=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function i(e){for(var t=[],n=0,r=e;r.length>0;){var a=r.match(u);if(!a){t.push(r);break}a.index>0&&t.push(r.substr(0,a.index)),t.push(a[0]),n+=a.index+a[0].length,r=e.substr(n)}return t}var o=n(8141);function s(e,t,n,r){void 0===r&&(r=o.Hk);for(var a={chunkIndex:-1},u=l(e,t,n,0,0,a),i=u.slice(0,a.chunkIndex),s=u[a.chunkIndex],c=[s.html],d=u.slice(a.chunkIndex+1),m=s.textLength,p=0,h=0,f=!1,v=!1;m<r;)if((p<=h||0===d.length)&&i.length>0){var g=i.pop();m+g.textLength<=r?(c.unshift(g.html),p+=g.textLength,m+=g.textLength):(f=!0,i.length=0)}else{if(!(d.length>0))break;var D=d.shift();m+D.textLength<=r?(c.push(D.html),h+=D.textLength,m+=D.textLength):(v=!0,d.length=0)}return(f||i.length>0)&&c.unshift("\u2026"),(v||d.length>0)&&c.push("\u2026"),c.join("")}function l(e,t,n,u,o,s){var c=[],d=t[u],m=d[0],p=d[1];if(m<o)(u+=1)<t.length&&c.push.apply(c,l(e,t,n,u,o));else{m>o&&c.push.apply(c,i(e.substring(o,m)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),s&&(s.chunkIndex=c.length),c.push({html:(0,a.C)(e.substr(m,p),n,!0),textLength:p});var h=m+p;(u+=1)<t.length?c.push.apply(c,l(e,t,n,u,h)):h<e.length&&c.push.apply(c,i(e.substr(h)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return c}},8141:function(e,t,n){n.d(t,{vc:function(){return o},rx:function(){return s},dK:function(){return u},_k:function(){return i},Hk:function(){return c},qo:function(){return l},Iz:function(){return d}});var r=n(35850),a=n.n(r);n(88465)(a()),n(64376).w(a()),n(93609)(a());var u=["en","zh"],i=!1,o=null,s="c48cae8b",l=10,c=50,d={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},64376:function(e,t,n){function r(e){var t=new RegExp("^[^"+e+"]+","u"),n=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(t,"").replace(n,"")}))}}function a(e,t){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),t&&(this.tokenizer=t)},t&&(e.zh.tokenizer=t),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}n.d(t,{w:function(){return a}})}}]);