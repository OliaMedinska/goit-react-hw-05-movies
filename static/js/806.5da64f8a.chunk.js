"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[806],{687:function(n,t,e){e.d(t,{SU:function(){return i},dq:function(){return f},fh:function(){return o},kE:function(){return p},z1:function(){return s}});var r=e(861),a=e(757),u=e.n(a),c=e(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";c.Z.defaults.params={api_key:"bbb80e56ba11955520e995839df2240b",language:"en-US"};var s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(t,"&include_adult=false&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/all/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},174:function(n,t,e){e.d(t,{O:function(){return l}});var r,a,u=e(168),c=e(867),s=e(87),i=c.ZP.ul(r||(r=(0,u.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\n"]))),o=(0,c.ZP)(s.OL)(a||(a=(0,u.Z)(["\ntext-decoration: none;\ncolor: #333;\nfont-weight: bold;\n\n&:hover {\n    color: #9EBC9E;\n}\n"]))),f=e(689),p=e(184),l=function(n){var t=n.items,e=(0,f.TH)();return(0,p.jsx)(i,{children:t.map((function(n){var t=n.title,r=n.name,a=n.id;return(0,p.jsx)("li",{children:(0,p.jsx)(o,{state:{from:e},to:"/movies/".concat(a),children:t||r})},a)}))})}},806:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(861),a=e(439),u=e(757),c=e.n(u),s=e(687),i=e(791),o=e(630),f=e(174),p=e(184);function l(){var n=(0,i.useState)(!1),t=(0,a.Z)(n,2),e=t[0],u=t[1],l=(0,i.useState)(!1),d=(0,a.Z)(l,2),v=d[0],h=d[1],x=(0,i.useState)([]),m=(0,a.Z)(x,2),g=m[0],Z=m[1];return(0,i.useEffect)((function(){function n(){return(n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.SU)();case 3:t=n.sent,u(!0),Z(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),h(!0);case 11:return n.prev=11,u(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,p.jsxs)(p.Fragment,{children:[g.length>0&&(0,p.jsx)("h1",{children:"Trending today"}),g.length>0&&(0,p.jsx)(f.O,{items:g}),e&&(0,p.jsx)(o.a,{}),v&&(0,p.jsx)("p",{children:"Something wrong..."})]})}}}]);
//# sourceMappingURL=806.5da64f8a.chunk.js.map