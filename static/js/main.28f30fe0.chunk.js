(this["webpackJsonptest-react"]=this["webpackJsonptest-react"]||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var c,i,a,r,o,s=n(0),j=n(13),b=(n(22),n(4)),u=n(16),l=n(1),O=function(t){var e=t.onClick,n=t.buttonName,c=t.variant;return Object(l.jsx)(u.a,{style:{minWidth:150},onClick:e,variant:c,children:n})},d=function(t){return(1===t.toString().length?"0":"").concat(t)},f=n(32),h=n(33),x={OnHandlerClick:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",c=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=Object(s.useState)(t),a=Object(b.a)(i,2),r=a[0],o=a[1],j=Object(s.useState)(e),u=Object(b.a)(j,2),l=u[0],O=u[1],d=Object(s.useState)(n),x=Object(b.a)(d,2),m=x[0],v=x[1],p=Object(s.useState)(c),k=Object(b.a)(p,2),S=k[0],g=k[1],C=1e3,H=function(){if(m)m.unsubscribe(),o(0),O(0),v("");else{var t=Object(f.a)(C).pipe(Object(h.a)((function(t){return t+1}))).subscribe((function(t){o(t+l)}));v(t)}},N=function(){if(S){g(!1);var t=setTimeout((function(){g(!0),clearTimeout(t)}),300)}else m&&m.unsubscribe(),O(r),v("")},y=function(){O(0),m&&m.unsubscribe();var t=Object(f.a)(C).subscribe((function(t){o(t)}));v(t)};return{timer:r,diff:l,onStartHandlerClick:H,onWaitHandlerClick:N,onResetHandlerClick:y}}},m=n(6),v=n(7),p=v.a.div(c||(c=Object(m.a)(["\n  margin: 0 auto;\n  max-width: 700px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),k=v.a.div(i||(i=Object(m.a)(["\n  height: 50vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),S=v.a.span(a||(a=Object(m.a)(["\n  font-size: 10rem;\n"]))),g=function(t){var e=t.ButtonsGroup,n=Object(s.useState)(0),c=Object(b.a)(n,2),i=c[0],a=c[1],r=Object(s.useState)(0),o=Object(b.a)(r,2),j=o[0],u=o[1],f=Object(s.useState)(0),h=Object(b.a)(f,2),m=h[0],v=h[1],g=x.OnHandlerClick(),C=g.timer,H=g.diff,N=g.onStartHandlerClick,y=g.onWaitHandlerClick,w=g.onResetHandlerClick,W=C||H;return Object(s.useEffect)((function(){var t=Math.floor(W/3600);a(d(t));var e=Math.floor(W%3600/60);u(d(e)),v(d(W%60))}),[W]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(k,{children:Object(l.jsxs)(S,{children:[i,":",j,":",m]})}),Object(l.jsx)(p,{children:1===e?Object(l.jsx)(O,{onClick:N,buttonName:"Start/Stop"}):2===e?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{onClick:N,buttonName:"Start/Stop"}),Object(l.jsx)(O,{onClick:y,buttonName:"Wait"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{onClick:N,buttonName:"Start/Stop"}),Object(l.jsx)(O,{onClick:y,buttonName:"Wait"}),Object(l.jsx)(O,{onClick:w,buttonName:"Reset"})]})})]})},C=v.a.h1(r||(r=Object(m.a)(["\n  font-size: 6rem;\n  color: #0d6efd;\n  text-align: center;\n"]))),H=function(t){var e=t.title;return Object(l.jsx)(C,{children:e})},N=v.a.div(o||(o=Object(m.a)(["\n  padding: 50px 100px;\n"]))),y=function(){return Object(l.jsxs)(N,{children:[Object(l.jsx)(H,{title:"Timer"}),Object(l.jsx)(g,{ButtonsGroup:3})]})};n(27);var w=function(){return Object(l.jsx)(y,{})};n(28);Object(j.render)(Object(l.jsx)(s.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.28f30fe0.chunk.js.map