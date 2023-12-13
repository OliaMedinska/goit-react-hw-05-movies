"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[878],{687:function(n,e,r){r.d(e,{SU:function(){return o},dq:function(){return l},fh:function(){return u},kE:function(){return p},z1:function(){return c}});var t=r(861),a=r(757),i=r.n(a),s=r(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3";s.Z.defaults.params={api_key:"bbb80e56ba11955520e995839df2240b",language:"en-US"};var c=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/search/movie?query=".concat(e,"&include_adult=false&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/trending/all/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},513:function(n,e,r){r.r(e),r.d(e,{default:function(){return O}});var t,a,i,s,c,o,u,l,p=r(861),d=r(439),f=r(757),h=r.n(f),x=r(689),v=r(687),m=r(791),g=r(630),w=r(168),Z=r(867),j=r(87),b=Z.ZP.img(t||(t=(0,w.Z)(["\n    max-width: 400px;\n"]))),y=Z.ZP.div(a||(a=(0,w.Z)(["\n    display: flex;\n    flex-direction: row;\n    gap: 30px;\n    margin-left: 30px;\n    margin-bottom: 60px;\n"]))),k=Z.ZP.div(i||(i=(0,w.Z)(["\n    display: flex;\n    flex-direction: column;\n"]))),_=Z.ZP.p(s||(s=(0,w.Z)(["\n    max-width: 700px;\n"]))),E=Z.ZP.h2(c||(c=(0,w.Z)(["\n    margin-left: 30px;\n"]))),P=Z.ZP.ul(o||(o=(0,w.Z)(["\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n"]))),S=(0,Z.ZP)(j.OL)(u||(u=(0,w.Z)(["\ntext-decoration: none;\ncolor: #333;\nfont-weight: bold;\n\n&.active {\n    color: #9EBC9E;\n  }\n\n  &: hover {\n    color: #9EBC9E;\n  }\n"]))),C=(0,Z.ZP)(j.OL)(l||(l=(0,w.Z)(["\n  display: block;\n  text-decoration: none;\n  color: #333;\n  font-weight: bold;\n  padding: 20px;\n\n  &:hover {\n    color: #9EBC9E;\n}\n"]))),U=r(184);function O(){var n,e,r,t=(0,m.useState)(!1),a=(0,d.Z)(t,2),i=a[0],s=a[1],c=(0,m.useState)(!1),o=(0,d.Z)(c,2),u=o[0],l=o[1],f=(0,m.useState)([]),w=(0,d.Z)(f,2),Z=w[0],j=w[1],O=(0,x.UO)().movieId,q=(0,x.TH)();(0,m.useEffect)((function(){function n(){return(n=(0,p.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.fh)(O);case 3:e=n.sent,s(!0),j(e),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),l(!0),console.log("Something wrong...");case 12:return n.prev=12,s(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,8,12,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[O]);var B=(0,m.useRef)(null!==(n=null===(e=q.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(C,{to:B.current,children:"Go back"}),(0,U.jsxs)(y,{children:[(0,U.jsx)(b,{src:Z.poster_path?"https://www.themoviedb.org/t/p/w1280".concat(Z.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"poster",width:350}),(0,U.jsxs)(k,{children:[(0,U.jsx)("h1",{children:Z.title||Z.name}),(0,U.jsxs)("p",{children:["User score: ",Number.parseInt(Z.popularity)]}),(0,U.jsx)("h2",{children:"Overview"}),(0,U.jsx)(_,{children:Z.overview}),(null===Z||void 0===Z||null===(r=Z.genres)||void 0===r?void 0:r.length)>0&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("h2",{children:"Genres"}),(0,U.jsx)("ul",{children:Z.genres.map((function(n){var e=n.name,r=n.id;return(0,U.jsx)("li",{children:(0,U.jsx)("p",{children:e})},r)}))})]})]})]}),(0,U.jsxs)("div",{children:[(0,U.jsx)(E,{children:"Additional information"}),(0,U.jsx)("nav",{children:(0,U.jsxs)(P,{children:[(0,U.jsx)("li",{children:(0,U.jsx)(S,{to:"cast",children:"Cast"})}),(0,U.jsx)("li",{children:(0,U.jsx)(S,{to:"reviews",children:"Reviews"})})]})})]}),i&&(0,U.jsx)(g.a,{}),u&&(0,U.jsx)("p",{children:"Something wrong..."}),(0,U.jsx)(x.j3,{})]})}}}]);
//# sourceMappingURL=878.90ee6986.chunk.js.map