(this["webpackJsonptest-react"]=this["webpackJsonptest-react"]||[]).push([[0],{33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var c,a,r,i,s=n(0),b=n.n(s),u=n(20),j=n.n(u),o=(n(28),n(5)),O={helperFunctionForTimer:function(t){return(1===t.toString().length?"0":"")+t}},l=n(7),f=n(9),h=f.a.div(c||(c=Object(l.a)(["\n  height: 50vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),m=f.a.h3(a||(a=Object(l.a)(["\n  font-size: 10rem;\n"]))),v=n(1),x=function(t){var e=t.timePast,n=Object(s.useState)(0),c=Object(o.a)(n,2),a=c[0],r=c[1],i=Object(s.useState)(0),b=Object(o.a)(i,2),u=b[0],j=b[1],l=Object(s.useState)(0),f=Object(o.a)(l,2),x=f[0],d=f[1];return Object(s.useEffect)((function(){var t=Math.floor(e/3600);r(O.helperFunctionForTimer(t));var n=Math.floor(e%3600/60);j(O.helperFunctionForTimer(n));var c=e%60;d(O.helperFunctionForTimer(c))}),[e]),Object(v.jsx)(h,{children:Object(v.jsxs)(m,{children:[a,":",u,":",x]})})},d=n(42),p=n(38),S=function(t){var e=t.onClick,n=t.variant,c=t.btnName;return Object(v.jsx)(d.a,{type:"button",onClick:e,as:p.a,variant:n,className:"mx-2",children:c})},g=f.a.h1(r||(r=Object(l.a)(["\n  font-size: 6rem;\n  color: #03a9f4;\n  text-align: center;\n"]))),F=function(t){var e=t.title;return Object(v.jsx)(g,{children:e})},k=f.a.div(i||(i=Object(l.a)(["\n  padding: 50px 100px;\n"]))),T=n(40),N=n(41),C=n(39),w=function(){var t=Object(s.useState)(0),e=Object(o.a)(t,2),n=e[0],c=e[1],a=Object(s.useState)(0),r=Object(o.a)(a,2),i=r[0],b=r[1],u=Object(s.useState)(""),j=Object(o.a)(u,2),O=j[0],l=j[1],f=Object(s.useState)(!0),h=Object(o.a)(f,2),m=h[0],d=h[1];return Object(v.jsxs)(k,{children:[Object(v.jsx)(F,{title:"Timer"}),Object(v.jsx)(x,{timePast:n||i}),Object(v.jsxs)(C.a,{className:"mx-0",children:[Object(v.jsx)(S,{onClick:function(){if(O)O.unsubscribe(),c(0),b(0),l("");else{var t=Object(T.a)(1e3).pipe(Object(N.a)((function(t){return t+1}))).subscribe((function(t){c(t+i)}));l(t)}},variant:"success",btnName:"Start/Stop"}),Object(v.jsx)(S,{onClick:function(){if(m){d(!1);var t=setTimeout((function(){d(!0),clearTimeout(t)}),300)}else O&&O.unsubscribe(),b(n),l("")},variant:"warning",btnName:"Wait"}),Object(v.jsx)(S,{onClick:function(){b(0),O&&O.unsubscribe();var t=Object(T.a)(1e3).subscribe((function(t){c(t)}));l(t)},variant:"danger",btnName:"Reset"})]})]})};n(33);var y=function(){return Object(v.jsx)(w,{})};n(34);j.a.render(Object(v.jsx)(b.a.StrictMode,{children:Object(v.jsx)(y,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ab8dc4e7.chunk.js.map