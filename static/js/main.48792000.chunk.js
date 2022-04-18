(this.webpackJsonpmovieapp=this.webpackJsonpmovieapp||[]).push([[0],{16:function(n,e,t){},30:function(n,e,t){"use strict";t.r(e);var r,c,i,a=t(0),o=t.n(a),s=t(15),d=t.n(s),p=t(3),x=t(4),j=t(16),b=t.n(j),l=Object(p.b)(r||(r=Object(x.a)(["\n  ",";\n  \n  ","\n"])),b.a,(function(n){var e=n.theme;return"\n      body{\n        background-color: ".concat(e.backgroundColor,";\n      }\n    ")})),m=t(7),g=t(2),u=t(8),h=t.n(u),O=t(9),f=t(6),v=t(1),y=p.c.div(c||(c=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 300px 0 300px;\n"]))),w=p.c.button(i||(i=Object(x.a)(["\n  padding: 10px 20px 10px 20px;\n  background-color: tomato;\n  border: solid 1px tomato;\n  border-radius: 15px;\n  margin-bottom: 20px;\n\n  a{\n    color: white;\n    font-weight: bold;\n    text-decoration: none;\n  }\n"])));var k=function(n){var e=n.title,t=n.year,r=n.genres,c=n.description,i=n.coverImg;return Object(v.jsxs)(y,{children:[Object(v.jsx)(w,{children:Object(v.jsx)(m.b,{to:"/movie-app-react-frontend",children:"back"})}),Object(v.jsx)("img",{src:i,alt:"cover image"}),Object(v.jsx)("div",{children:e}),Object(v.jsx)("span",{children:t}),Object(v.jsxs)("div",{children:["Genres : ",r]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("strong",{children:"SUMMARY"}),": ",c]})]})};var _,I,S,z,E,M=function(){var n=Object(g.g)().id,e=Object(a.useState)([]),t=Object(f.a)(e,2),r=t[0],c=t[1],i=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(n));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,c(t.data.movie);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()})),Object(v.jsx)(k,{title:r.title,year:r.year,genres:r.genres,description:r.description_full,coverImg:r.large_cover_image})},C=p.c.div(_||(_=Object(x.a)(["\n  background-color: white;\n  margin-bottom: 70px;\n  font-weight: 300;\n  padding: 20px;\n  border-radius: 5px;\n  color: #adaeb9;\n  display: grid;\n  grid-template-columns: minmax(150px, 1fr) 2fr;\n  grid-gap: 20px;\n  text-decoration: none;\n  color: inherit;\n  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),\n    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);\n"]))),J=p.c.img(I||(I=Object(x.a)(["\n  position: relative;\n  top: -50px;\n  max-width: 150px;\n  width: 100%;\n  margin-right: 30px;\n  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),\n    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);\n"]))),A=p.c.h2(S||(S=Object(x.a)(["\n  margin: 0;\n  font-weight: 300;\n  text-decoration: none;\n\n  a{\n    margin-bottom: 5px;\n    font-size: 24px;\n    color: #2c2c2c;\n    text-decoration: none;\n  }\n"]))),B=p.c.ul(z||(z=Object(x.a)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 5px 0px;\n\n  li{\n    margin-right: 10px;\n    font-size: 14px;\n  }\n"]))),G=p.c.h3(E||(E=Object(x.a)(["\n  margin: 0;\n  font-weight: 300;\n  text-decoration: none;\n  margin-right: 10px;\n  font-size: 14px;\n"])));var L,R,U,Y=function(n){var e=n.id,t=n.coverImage,r=n.title,c=n.year,i=n.summary,a=n.genres;return Object(v.jsxs)(C,{children:[Object(v.jsx)(J,{src:t,alt:r}),Object(v.jsxs)("div",{children:[Object(v.jsx)(A,{children:Object(v.jsx)(m.b,{to:"/movie/"+e,children:r})}),Object(v.jsx)(G,{children:c}),Object(v.jsx)("p",{children:i.length>235?"".concat(i.slice(0,235),"..."):i}),Object(v.jsx)(B,{children:a.map((function(n){return Object(v.jsx)("li",{children:n},n)}))})]})]})},q=p.c.div(L||(L=Object(x.a)(["\n    height: 100%;\n  display: flex;\n  justify-content: center;\n  "]))),D=p.c.div(R||(R=Object(x.a)(["\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 300;\n  "]))),F=p.c.div(U||(U=Object(x.a)(["\n    display: grid;\n    grid-template-columns: repeat(2, minmax(400px, 1fr));\n    grid-gap: 100px;\n    padding: 50px;\n    width: 80%;\n    padding-top: 70px;\n\n    @media screen and (max-width: 1090px) {\n      grid-template-columns: 1fr;\n      width: 100%;\n    }\n"])));var H=function(){var n=Object(a.useState)(!0),e=Object(f.a)(n,2),t=e[0],r=e[1],c=Object(a.useState)([]),i=Object(f.a)(c,2),o=i[0],s=i[1],d=function(){var n=Object(O.a)(h.a.mark((function n(){var e;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return n.next=4,n.sent.json();case 4:e=n.sent,s(e.data.movies),r(!1);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){d()}),[]),Object(v.jsx)(q,{children:t?Object(v.jsx)(D,{children:Object(v.jsx)("span",{children:"Loading..."})}):Object(v.jsx)("div",{children:Object(v.jsx)(F,{children:o.map((function(n){return Object(v.jsx)(Y,{id:n.id,coverImage:n.medium_cover_image,title:n.title,year:n.year,summary:n.summary,genres:n.genres},n.id)}))})})})};var K=function(){return Object(v.jsx)(m.a,{children:Object(v.jsxs)(g.c,{children:[Object(v.jsx)(g.a,{path:"/movie/:id",element:Object(v.jsx)(M,{})}),Object(v.jsx)(g.a,{path:"/movie-app-react-frontend/",element:Object(v.jsx)(H,{})})]})})};d.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsxs)(p.a,{theme:{backgroundColor:"#eff3f7"},children:[Object(v.jsx)(l,{}),Object(v.jsx)(K,{})]})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.48792000.chunk.js.map