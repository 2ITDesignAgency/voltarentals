"use strict";(self.webpackChunkVolta4you=self.webpackChunkVolta4you||[]).push([[431],{8295:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var n=t(7294),r=t(3986),s=t(2502),c=t(5444),l=t(8591),i=t(7930),o=t(2805),m=function(e){var a=e.post;e.isLast;return n.createElement(n.Fragment,null,n.createElement("article",{className:"post-"+a.databaseId+" post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized article-post",id:"post-"+a.databaseId},n.createElement("div",{className:"article-single-post"},n.createElement(c.Link,{to:a.uri},n.createElement(i.Z,{image:a.featuredImage})),n.createElement("header",{className:"entry-header"},n.createElement("div",{className:"entry-header-inner section-inner medium"},n.createElement(l.Z,{categories:a.categories}),n.createElement("h2",{className:"entry-title heading-size-1 archive-post-title"},n.createElement(c.Link,{to:a.uri,dangerouslySetInnerHTML:{__html:a.title}})))),n.createElement("div",{className:"post-inner thin "},n.createElement("div",{className:"entry-content archive-post"},n.createElement("div",{dangerouslySetInnerHTML:{__html:a.excerpt},className:"card-text"})),n.createElement(o.Z,{color:"btn btn-success btn-block mb-4"},n.createElement(c.Link,{to:a.uri,className:"readMore"},"Read more"))))))},u=t(3366),p=["tag","children"],h=function(e){var a=e.hasPreviousPage,t=e.hasNextPage,r=e.currentPage,s=e.pageCount,l=e.archivePath;return s<=1?null:n.createElement("div",{className:"pagination-wrapper section-inner"},n.createElement("hr",{className:"styled-separator pagination-separator is-style-wide","aria-hidden":"true"}),n.createElement("nav",{className:"navigation pagination",role:"navigation","aria-label":"Posts"},n.createElement("h2",{className:"screen-reader-text"},"Posts navigation"),n.createElement("div",{className:"nav-links"},function(e){var a=e.hasPreviousPage,t=e.currentPage,r=e.archivePath,s=null;return 2===t?s=r:2<t&&(s=r+"page/"+(t-1)),a?n.createElement(c.Link,{className:"prev page-numbers",to:s},n.createElement("span",{"aria-hidden":"true"},"←"),n.createElement("span",{className:"nav-prev-text"},"Newer ",n.createElement("span",{className:"nav-short"},"Posts"))):n.createElement("span",{className:"prev page-numbers placeholder","aria-hidden":"true"},n.createElement("span",{"aria-hidden":"true"},"←"),n.createElement("span",{className:"nav-prev-text"},"Newer ",n.createElement("span",{className:"nav-short"},"Posts")))}({hasPreviousPage:a,currentPage:r,archivePath:l}),function(e){var a=e.currentPage,t=e.pageCount,r=e.archivePath,s=function(e,a,t){if(a)return{tag:"span",children:e,className:"page-numbers"};var n=t?r:r+"page/"+e;return{tag:c.Link,children:e,to:n}},l={tag:"span",children:"…",className:"page-numbers dots"},i=[];if(t>5)if(a<4){for(var o=1;o<=a+1;o++)i.push(s(o,a===o,1===o));i.push(l),i.push(s(t,!1,!1))}else if(a>=t-2){i.push(s(1,!1,!0)),i.push(l);for(var m=a-1;m<t+1;m++)i.push(s(m,a===m,1===m))}else{i.push(s(1,!1,!0)),i.push(l);for(var h=a-1;h<=a+1;h++)i.push(s(h,a===h,1===h));i.push(l),i.push(s(t,!1,!1))}else for(var d=1;d<t+1;d++)i.push(s(d,a===d,1===d));return i.map((function(e,a){var t=e.tag,r=e.children,s=(0,u.Z)(e,p);return n.createElement(t,Object.assign({key:a},s),r)}))}({currentPage:r,pageCount:s,archivePath:l}),function(e){var a=e.hasNextPage,t=e.currentPage,r=e.archivePath;return a?n.createElement(c.Link,{className:"next page-numbers",to:r+"page/"+(t+1)},n.createElement("span",{className:"nav-next-text"},"Older ",n.createElement("span",{className:"nav-short"},"Posts")),"->"):n.createElement("span",{className:"next page-numbers placeholder","aria-hidden":"true"},n.createElement("span",{className:"nav-next-text"},"Older ",n.createElement("span",{className:"nav-short"},"Posts")),"->")}({hasNextPage:t,currentPage:r,archivePath:l}))))},d=t(566),v=t(5495),g=function(e){var a=e.data.allWpPost,t=a.nodes,c=a.pageInfo,l=e.pageContext,i=(l.archiveType,l.archivePath);return n.createElement(r.Z,{bodyClass:"home blog wp-embed-responsive has-no-pagination showing-comments hide-avatars footer-top-visible customize-support"},n.createElement(s.Z,{title:"Home",description:"Welcome to volta4u"}),n.createElement(d.Z,null,n.createElement(v.Z,null,t&&t.map((function(e,a){return n.createElement(m,{key:a,post:e,isLast:a===t.length-1})}))),n.createElement(h,Object.assign({},c,{archivePath:i}))))}}}]);
//# sourceMappingURL=component---src-templates-archive-js-b92dec16b770fd50d74e.js.map