"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{135:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(861),i=t(439),s=t(757),a=t.n(s),c=t(791),o=t(689),l=t(87),h=t(162),u="MovieDetails_BackLink__SWxG4",d="MovieDetails_Content__3T3BC",v="MovieDetails_Container__QCT7y",f="MovieDetails_Genres__HsSnt",p="MovieDetails_Genre__to4sk",x=t(184),_=function(){var e=(0,o.UO)().id,n=(0,c.useState)(""),t=(0,i.Z)(n,2),s=t[0],_=t[1],j=(0,o.TH)(),m=(0,c.useRef)(j.state?j.state.from:"/");return(0,c.useEffect)((function(){var n=function(){var n=(0,r.Z)(a().mark((function n(){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=99cb9f567734a9ee5f2d74055523eb10"));case 3:return t=n.sent,n.next=6,t.json();case 6:r=n.sent,_(r),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,x.jsxs)("div",{children:[(0,x.jsx)(l.rU,{className:u,to:m.current,children:"Go back"}),(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)("img",{src:s.poster_path?"https://image.tmdb.org/t/p/w500".concat(s.poster_path,"?api_key=99cb9f567734a9ee5f2d74055523eb10"):h,alt:"movieporster",width:"300",height:"420"}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{children:s.name||s.title}),(0,x.jsxs)("p",{children:[" User Score ",s.vote_average>1?Math.round(10*s.vote_average):0,"%"]}),(0,x.jsx)("h2",{children:"Overview"}),(0,x.jsxs)("p",{children:[s.overview," "]}),(0,x.jsx)("h2",{children:"Genres"}),(0,x.jsx)("ul",{className:f,children:s.genres&&s.genres.map((function(e){return(0,x.jsx)("li",{className:p,children:e.name},e.id)}))})]})]}),(0,x.jsx)("h2",{children:"Additional information"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(l.rU,{to:"Cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(l.rU,{to:"Reviews",children:"Reviews"})})]}),(0,x.jsx)("div",{className:v,children:(0,x.jsx)(c.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading..."}),children:(0,x.jsx)(o.j3,{})})})]})}},162:function(e,n,t){e.exports=t.p+"static/media/movie.3f9715169e330b10feb4.jpg"},861:function(e,n,t){function r(e,n,t,r,i,s,a){try{var c=e[s](a),o=c.value}catch(l){return void t(l)}c.done?n(o):Promise.resolve(o).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,s){var a=e.apply(n,t);function c(e){r(a,i,s,c,o,"next",e)}function o(e){r(a,i,s,c,o,"throw",e)}c(void 0)}))}}t.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=135.bd6b8dea.chunk.js.map