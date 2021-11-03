"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4013],{5601:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7294),u=n(6010),a=n(6742),i="sidebar_2ahu",s="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",l="sidebarItem_2UVv",c="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",h=n(4973);function m(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,u.Z)(i,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,u.Z)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:l},r.createElement(a.Z,{isNavLink:!0,to:e.permalink,className:c,activeClassName:d},e.title))}))))}},94:function(e,t,n){n.r(t);var r=n(7294),u=n(8258),a=n(6742),i=n(5601),s=n(4973),o=n(9306);t.default=function(e){var t=e.tags,n=e.sidebar,l=(0,s.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"}),c={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);c[t]=c[t]||[],c[t].push(e)}));var d=Object.entries(c).sort((function(e,t){var n=e[0],r=t[0];return n.localeCompare(r)})).map((function(e){var n=e[0],u=e[1];return r.createElement("article",{key:n},r.createElement("h2",null,n),u.map((function(e){return r.createElement(a.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),r.createElement("hr",null))})).filter((function(e){return null!=e}));return r.createElement(u.Z,{title:l,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("aside",{className:"col col--3"},r.createElement(i.Z,{sidebar:n})),r.createElement("main",{className:"col col--7"},r.createElement("h1",null,l),r.createElement("section",{className:"margin-vert--lg"},d)))))}},8219:function(e,t,n){var r=n(2122),u=n(9756),a=n(7294),i=n(6010),s=n(6742),o=n(4996),l=n(5977),c=n(9306),d=n(8617),h=n(3919),m="dropdown__link--active";function p(e){var t=e.activeBasePath,n=e.activeBaseRegex,i=e.to,c=e.href,p=e.label,f=e.activeClassName,v=void 0===f?"navbar__link--active":f,g=e.prependBaseUrlToHref,D=e["data-language-prefix"],F=(0,u.Z)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref","data-language-prefix"]),E=(0,o.Z)(i),k=(0,o.Z)(t),C=(0,o.Z)(c,{forcePrependBaseUrl:!0}),A=p&&c&&!(0,h.Z)(c),_=v===m,b=(0,l.TH)();if(D){c="pathname://"+D+b.pathname.replace(/^(\/(java|dotnet|python))?\/(.*)/,"$3")+b.hash,F.autoAddBaseUrl=!1,F.target="_self";var w=["java","dotnet","python"].some((function(e){return b.pathname.startsWith("/"+e)}));(b.pathname.startsWith(D)&&w&&D.length>1||1===D.length&&!w)&&(F.className+=" "+v)}return a.createElement(s.Z,(0,r.Z)({},c?{href:g?C:c}:Object.assign({isNavLink:!0,activeClassName:v,to:E},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(k)}}:null),F),A?a.createElement("span",null,p,a.createElement(d.Z,_&&{width:12,height:12})):p)}function f(e){var t,n=e.items,s=e.position,o=e.className,l=(0,u.Z)(e,["items","position","className"]),c=(0,a.useRef)(null),d=(0,a.useRef)(null),h=(0,a.useState)(!1),f=h[0],v=h[1];(0,a.useEffect)((function(){var e=function(e){c.current&&!c.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[c]);var g=function(e,t){return void 0===t&&(t=!1),(0,i.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?a.createElement("div",{ref:c,className:(0,i.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===s,"dropdown--right":"right"===s,"dropdown--show":f})},a.createElement(p,(0,r.Z)({className:g(o)},l,{onClick:l.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),v(!f))}}),null!=(t=l.children)?t:l.label),a.createElement("ul",{ref:d,className:"dropdown__menu"},n.map((function(e,t){var i=e.className,s=(0,u.Z)(e,["className"]);return a.createElement("li",{key:t},a.createElement(p,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);var r=c.current.nextElementSibling;r&&r.focus()}},activeClassName:m,className:g(i,!0)},s)))})))):a.createElement(p,(0,r.Z)({className:g(o)},l))}function v(e){var t,n,s,o=e.items,d=e.className,h=(e.position,(0,u.Z)(e,["items","className","position"])),m=(0,a.useRef)(null),f=(0,l.TH)().pathname,v=(0,a.useState)((function(){var e;return null==(e=!(null!=o&&o.some((function(e){return(0,c.Mg)(e.to,f)}))))||e})),g=v[0],D=v[1],F=function(e,t){return void 0===t&&(t=!1),(0,i.Z)("menu__link",{"menu__link--sublist":t},e)};if(!o)return a.createElement("li",{className:"menu__list-item"},a.createElement(p,(0,r.Z)({className:F(d)},h)));var E=null!=(t=m.current)&&t.scrollHeight?(null==(n=m.current)?void 0:n.scrollHeight)+"px":void 0;return a.createElement("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":g})},a.createElement(p,(0,r.Z)({role:"button",className:F(d,!0)},h,{onClick:function(e){e.preventDefault(),D((function(e){return!e}))}}),null!=(s=h.children)?s:h.label),a.createElement("ul",{className:"menu__list",ref:m,style:{height:g?void 0:E}},o.map((function(e,t){var n=e.className,i=(0,u.Z)(e,["className"]);return a.createElement("li",{className:"menu__list-item",key:t},a.createElement(p,(0,r.Z)({activeClassName:"menu__link--active",className:F(n)},i,{onClick:h.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,u.Z)(e,["mobile"]),i=n?v:f;return a.createElement(i,r)}},4535:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),u=n(8695),a="loadingRing_3atr";function i(e){var t=e.className;return r.createElement("div",{className:(0,u.Z)(a,t)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,t,n){n.d(t,{w:function(){return c}});var r=n(8173),u=n(2137),a=n(7757),i=n.n(a),s=n(5850),o=n.n(s),l=n(8141);function c(e){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)(i().mark((function e(t){var n,u,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+l.rx);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,u=n.map((function(e,t){var n=e.documents,r=e.index;return{type:t,documents:n,index:o().Index.load(r)}})),a=n.reduce((function(e,t){for(var n,u=(0,r.Z)(t.index.invertedIndex);!(n=u()).done;){var a=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(a[0][0])&&e.add(a[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:u,zhDictionary:Array.from(a)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3636:function(e,t,n){n.d(t,{Z:function(){return K}});var r=n(8141),u=n(8173),a=n(2137),i=n(7757),s=n.n(i),o=n(7294),l=n(8695),c=n(2263),d=n(412),h=n(5977),m=n(3551),p=n(8938),f=n(6092),v=n(5401),g=n(5579),D="searchBar_2moK",F="dropdownMenu_17SC",E="suggestion_1kAZ",k="cursor_6rPN",C="hitTree_2sUa",A="hitIcon_3jP2",_="hitPath_3Lax",b="noResultsIcon_1rmk",w="hitFooter_1JML",x="hitWrapper_4Hzp",y="hitTitle_2AMl",N="hitAction_2kg3",Z="noResults_1vI5",I="searchBarContainer_2P1H",B="searchBarLoadingRing_1FtX",L="searchIndexLoading_1eRR",z="input_1tay",R="hint_1WuO",T="suggestions_1cWc",M="dataset_3Xc2",S="empty_2isC";function j(e){var t=e.document,n=e.type,r=e.page,u=e.metadata,a=e.tokens,i=e.isInterOfTree,s=e.isLastOfTree,o=0===n,l=1===n,c=[];i?c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):s&&c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var d=c.map((function(e){return'<span class="'+C+'">'+e+"</span>"})),h='<span class="'+A+'">'+(o?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':l?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",m=['<span class="'+y+'">'+(0,v.o)(t.t,(0,g.m)(u,"t"),a)+"</span>"];return o||m.push('<span class="'+_+'">'+(0,f.C)(r.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),a)+"</span>"),[].concat(d,[h,'<span class="'+x+'">'],m,["</span>",'<span class="'+N+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function H(){return'<span class="'+Z+'"><span class="'+b+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var P=n(4535);function W(){return U.apply(this,arguments)}function U(){return(U=(0,a.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(4485),n.e(213)]).then(n.t.bind(n,4485,23));case 2:return t=e.sent,(r=t.default).noConflict?r.noConflict():t.noConflict&&t.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="_highlight";var K=function(e){var t,n=e.handleSearchBarToggle,i=(0,c.Z)().siteConfig.baseUrl,f=(0,h.k6)(),v=(0,h.TH)(),g=(0,o.useRef)(null),C=(0,o.useRef)("empty"),A=(0,o.useRef)(!1),_=(0,o.useState)(!1),b=_[0],x=_[1],y=(0,o.useState)(!1),N=y[0],Z=y[1],U=(0,o.useCallback)((0,a.Z)(s().mark((function e(){var t,n,a,o,l,c,d;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===C.current){e.next=2;break}return e.abrupt("return");case 2:return C.current="loading",x(!0),e.next=6,Promise.all([(0,m.w)(i),W()]);case 6:t=e.sent,n=t[0],a=n.wrappedIndexes,o=n.zhDictionary,l=t[1],c=l(g.current,{hint:!1,autoselect:!0,cssClasses:{root:D,noPrefix:!0,dropdownMenu:F,input:z,hint:R,suggestions:T,suggestion:E,cursor:k,dataset:M,empty:S}},[{source:(0,p.v)(a,o,r.qo),templates:{suggestion:j,empty:H,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),u=i+"search?q="+encodeURIComponent(t);n.href=u,n.textContent=r.Iz.see_all_results,n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),c.autocomplete.close(),f.push(u))}));var a=document.createElement("div");return a.className=w,a.appendChild(n),a}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,a=n.u,i=n.h,s=t.tokens,o=a;if(r.vc&&s.length>0){for(var l,c=new URLSearchParams,d=(0,u.Z)(s);!(l=d()).done;){var h=l.value;c.append(O,h)}o+="?"+c.toString()}i&&(o+=i),f.push(o)})),C.current="done",x(!1),A.current&&((d=g.current).value&&c.autocomplete.open(),d.focus());case 15:case"end":return e.stop()}}),e)}))),[i,f]);(0,o.useEffect)((function(){if(r.vc){var e=d.Z.canUseDOM?new URLSearchParams(v.search).getAll(O):[];0!==e.length&&setTimeout((function(){var t=document.querySelector("article");if(t){var n=new r.vc(t);n.unmark(),n.mark(e)}}))}}),[v.search]);var K=(0,o.useCallback)((function(){A.current=!0,U(),null==n||n(!0)}),[n,U]),Q=(0,o.useCallback)((function(){null==n||n(!1)}),[n]),X=(0,o.useCallback)((function(){U()}),[U]),q=(0,o.useCallback)((function(e){e.target.value&&Z(!0)}),[]);return o.createElement("div",{className:(0,l.Z)("navbar__search",I,(t={},t[L]=b&&N,t))},o.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:X,onFocus:K,onBlur:Q,onChange:q,ref:g}),o.createElement(P.Z,{className:B}))}},8938:function(e,t,n){n.d(t,{v:function(){return c}});var r=n(8173),u=n(5850),a=n.n(u);function i(e,t){var n=[];return function e(u,a){if(0!==u.length){var i=u[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(i))for(var s,o=function(e,t){var n=[];return function e(u,a){for(var i,s=0,o=!1,l=(0,r.Z)(t);!(i=l()).done;){var c=i.value;if(u.substr(0,c.length)===c){var d={missed:a.missed,term:a.term.concat({value:c})};u.length>c.length?e(u.substr(c.length),d):n.push(d),o=!0}else for(var h=c.length-1;h>s;h-=1){var m=c.substr(0,h);if(u.substr(0,h)===m){s=h;var p={missed:a.missed,term:a.term.concat({value:m,trailing:!0})};u.length>h?e(u.substr(h),p):n.push(p),o=!0;break}}}o||(u.length>0?e(u.substr(1),{missed:a.missed+1,term:a.term}):a.term.length>0&&n.push(a))}(e,{missed:0,term:[]}),n.sort((function(e,t){var n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((function(e){return e.term}))}(i,t),l=(0,r.Z)(o);!(s=l()).done;){var c=s.value,d=a.concat.apply(a,c);e(u.slice(1),d)}else{var h=a.concat({value:i});e(u.slice(1),h)}}else n.push(a)}(e,[]),n}var s=n(8141);function o(e){return l(e).concat(l(e.filter((function(e){var t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function l(e,t){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:a().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?a().Query.wildcard.TRAILING:a().Query.wildcard.NONE}}))}}))}function c(e,t,n){return function(u,l){var c=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return a()[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(u,s.dK);if(0!==c.length){var d=function(e,t){var n=i(e,t);if(0===n.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:a().Query.presence.REQUIRED,wildcard:a().Query.wildcard.LEADING|a().Query.wildcard.TRAILING}}))}];for(var u,l=(0,r.Z)(n);!(u=l()).done;){var c=u.value;c[c.length-1].maybeTyping=!0}for(var d,h,m=[],p=(0,r.Z)(s.dK);!(d=p()).done;){var f=d.value;if("en"===f)s._k||m.unshift(a().stopWordFilter);else{var v=a()[f];v.stopWordFilter&&m.unshift(v.stopWordFilter)}}if(m.length>0){var g=function(e){return m.reduce((function(e,t){return e.filter((function(e){return t(e.value)}))}),e)};h=[];for(var D,F=[],E=(0,r.Z)(n);!(D=E()).done;){var k=D.value,C=g(k);h.push(C),C.length<k.length&&C.length>0&&F.push(C)}n.push.apply(n,F)}else h=n.slice();for(var A,_=[],b=(0,r.Z)(h);!(A=b()).done;){var w=A.value;if(w.length>2)for(var x=w.length-1;x>=0;x-=1)_.push(w.slice(0,x).concat(w.slice(x+1)))}return o(n).concat(o(_))}(c,t),h=[],m=function(){for(var t,u=p.value,a=u.term,i=u.tokens,s=function(){var u=t.value,s=u.documents,o=u.index,l=u.type;if(h.push.apply(h,o.query((function(e){for(var t,n=(0,r.Z)(a);!(t=n()).done;){var u=t.value;e.term(u.value,{wildcard:u.wildcard,presence:u.presence})}})).slice(0,n).filter((function(e){return!h.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-h.length).map((function(t){var n=s.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:l,page:0!==l&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:i,score:t.score}}))),h.length>=n)return{v:"break|search"}},o=(0,r.Z)(e);!(t=o()).done;){var l=s();if("object"==typeof l)return l.v}};e:for(var p,f=(0,r.Z)(d);!(p=f()).done;){if("break|search"===m())break e}!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var r=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,u=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===r&&(r=t.index),-1===u&&(u=n.index),r===u?0===t.type?-1:0===n.type?1:t.index-n.index:r-u}))}(h),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(h),l(h)}else l([])}}},8740:function(e,t,n){function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,{X:function(){return r}})},5579:function(e,t,n){function r(e,t){for(var n=[],r=0,u=Object.values(e);r<u.length;r++){var a=u[r];a[t]&&n.push.apply(n,a[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,{m:function(){return r}})},6092:function(e,t,n){n.d(t,{C:function(){return a}});var r=n(8173),u=n(8740);function a(e,t,n){for(var i,s=[],o=(0,r.Z)(t);!(i=o()).done;){var l=i.value,c=e.toLowerCase().indexOf(l);if(c>=0){c>0&&s.push(a(e.substr(0,c),t)),s.push("<mark>"+(0,u.X)(e.substr(c,l.length))+"</mark>");var d=c+l.length;d<e.length&&s.push(a(e.substr(d),t));break}}return 0===s.length?n?"<mark>"+(0,u.X)(e)+"</mark>":(0,u.X)(e):s.join("")}},5401:function(e,t,n){n.d(t,{o:function(){return o}});var r=n(8740),u=n(6092),a=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function i(e){for(var t=[],n=0,r=e;r.length>0;){var u=r.match(a);if(!u){t.push(r);break}u.index>0&&t.push(r.substr(0,u.index)),t.push(u[0]),n+=u.index+u[0].length,r=e.substr(n)}return t}var s=n(8141);function o(e,t,n,r){void 0===r&&(r=s.Hk);for(var u={chunkIndex:-1},a=l(e,t,n,0,0,u),i=a.slice(0,u.chunkIndex),o=a[u.chunkIndex],c=[o.html],d=a.slice(u.chunkIndex+1),h=o.textLength,m=0,p=0,f=!1,v=!1;h<r;)if((m<=p||0===d.length)&&i.length>0){var g=i.pop();h+g.textLength<=r?(c.unshift(g.html),m+=g.textLength,h+=g.textLength):(f=!0,i.length=0)}else{if(!(d.length>0))break;var D=d.shift();h+D.textLength<=r?(c.push(D.html),p+=D.textLength,h+=D.textLength):(v=!0,d.length=0)}return(f||i.length>0)&&c.unshift("\u2026"),(v||d.length>0)&&c.push("\u2026"),c.join("")}function l(e,t,n,a,s,o){var c=[],d=t[a],h=d[0],m=d[1];if(h<s)(a+=1)<t.length&&c.push.apply(c,l(e,t,n,a,s));else{h>s&&c.push.apply(c,i(e.substring(s,h)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),o&&(o.chunkIndex=c.length),c.push({html:(0,u.C)(e.substr(h,m),n,!0),textLength:m});var p=h+m;(a+=1)<t.length?c.push.apply(c,l(e,t,n,a,p)):p<e.length&&c.push.apply(c,i(e.substr(p)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return c}},8141:function(e,t,n){n.d(t,{vc:function(){return s},rx:function(){return o},dK:function(){return a},_k:function(){return i},Hk:function(){return c},qo:function(){return l},Iz:function(){return d}});var r=n(5850),u=n.n(r);n(8465)(u()),n(4376).w(u()),n(3609)(u());var a=["en","zh"],i=!1,s=null,o="c48cae8b",l=10,c=50,d={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},4376:function(e,t,n){function r(e){var t=new RegExp("^[^"+e+"]+","u"),n=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(t,"").replace(n,"")}))}}function u(e,t){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),t&&(this.tokenizer=t)},t&&(e.zh.tokenizer=t),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}n.d(t,{w:function(){return u}})}}]);