"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{687:function(t,n,e){e.d(n,{SU:function(){return i},dq:function(){return f},fh:function(){return o},kE:function(){return p},z1:function(){return s}});var r=e(861),a=e(757),u=e.n(a),c=e(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";c.Z.defaults.params={api_key:"bbb80e56ba11955520e995839df2240b",language:"en-US"};var s=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?query=".concat(n,"&include_adult=false&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/all/day");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},681:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var r=e(861),a=e(439),u=e(757),c=e.n(u),s=e(689),i=e(687),o=e(791),f=e(630),p=e(184);function h(){var t=(0,o.useState)(!1),n=(0,a.Z)(t,2),e=n[0],u=n[1],h=(0,o.useState)(!1),v=(0,a.Z)(h,2),d=v[0],l=v[1],x=(0,o.useState)([]),m=(0,a.Z)(x,2),w=m[0],g=m[1],Z=(0,s.UO)().movieId;return(0,o.useEffect)((function(){function t(){return(t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.kE)(Z);case 3:n=t.sent,u(!0),g(n),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),l(!0),console.log("Something wrong...");case 12:return t.prev=12,u(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[Z]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("ul",{children:w.map((function(t){var n=t.author,e=t.content,r=t.id;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h2",{children:["Author: ",n]}),(0,p.jsx)("p",{children:e})]},r)}))}),e&&(0,p.jsx)(f.a,{}),d&&(0,p.jsx)("p",{children:"Something wrong..."})]})}}}]);
//# sourceMappingURL=681.910790fe.chunk.js.map