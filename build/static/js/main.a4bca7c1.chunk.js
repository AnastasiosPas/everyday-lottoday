(this["webpackJsonpeveryday-lottoday"]=this["webpackJsonpeveryday-lottoday"]||[]).push([[0],{22:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(15),l=n.n(i),a=(n(22),n(4)),o=n(8),r=n(2),j=(n(9),n(0)),h=function(e){var t=e.title,n=e.subtitle1,c=e.subtitle2;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{style:{fontSize:"2em"},children:t}),Object(j.jsx)("p",{children:n}),Object(j.jsx)("p",{children:c}),Object(j.jsx)("p",{children:"- Every day live draw at 19:00 -"})]})},u=function(e){var t=e.checkLogin,n=Object(c.useState)(""),s=Object(a.a)(n,2),i=s[0],l=s[1],o=Object(c.useState)(""),u=Object(a.a)(o,2),b=u[0],d=u[1],p=Object(c.useState)(""),O=Object(a.a)(p,2),x=O[0],g=O[1],f=Object(c.useState)(""),y=Object(a.a)(f,2),m=y[0],v=y[1],w=Object(r.f)();return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{subtitle2:"Please fill in your details to register"}),Object(j.jsxs)("form",{className:"register",children:[Object(j.jsx)("input",{type:"text",placeholder:"name",name:"name",id:"regField1",className:"inputField ",onChange:function(e){l(e.target.value)}}),Object(j.jsx)("input",{type:"email",placeholder:"email",name:"email",id:"regField2",className:"inputField ",onChange:function(e){d(e.target.value)}}),Object(j.jsx)("input",{type:"text",placeholder:"username",name:"user",id:"regField3",className:"inputField ",onChange:function(e){g(e.target.value)}}),Object(j.jsx)("input",{type:"password",placeholder:"password",name:"password",id:"regField4",className:"inputField ",onChange:function(e){v(e.target.value)}}),Object(j.jsx)("input",{type:"button",value:"Register",className:"loginBtn",onClick:function(){fetch("http://localhost:3002/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:m,username:x,name:i,email:b})}).then((function(e){return e.json()})).then((function(e){e&&(w.push("/play"),t())}))},disabled:!(i.length>0&&m.length>0&&b.length>0&&x.length>0)})]})]})},b=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(h,{title:"Every-Day Lotto-Day",subtitle1:"90% return in prizes",subtitle2:"\u20ac10 per lot"})})},d=function(){return Object(j.jsx)("div",{className:"footer",children:Object(j.jsx)("p",{children:"EVERY-DAY  LOTTO-DAY    ------   Copyright \xa9 2021"})})},p=function(e){var t=e.checkLogin,n=Object(c.useState)(""),s=Object(a.a)(n,2),i=s[0],l=s[1],o=Object(c.useState)(""),u=Object(a.a)(o,2),b=u[0],d=u[1],p=Object(r.f)();return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{subtitle2:"Please log in with your credentials:"}),Object(j.jsxs)("div",{className:"login",children:[Object(j.jsx)("input",{type:"text",placeholder:"username",name:"user",className:"inputField",onChange:function(e){l(e.target.value)}}),Object(j.jsx)("input",{type:"password",placeholder:"password",name:"password",className:"inputField",onChange:function(e){d(e.target.value)}}),Object(j.jsx)("input",{type:"button",value:"Login",onClick:function(){fetch("http://localhost:3002/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i,password:b})}).then((function(e){return e.json()})).then((function(e){e.id&&(p.push("/play"),t())}))},className:"loginBtn",disabled:!(i.length>0&&b.length>0)})]})]})},O=function(e){var t=e.loginCheck,n=Object(c.useState)(0),s=Object(a.a)(n,2),i=s[0],l=s[1],o=Object(c.useState)([]),r=Object(a.a)(o,2),u=r[0],b=r[1];return Object(j.jsxs)("div",{className:"play",children:[Object(j.jsx)(h,{subtitle1:"Please choose the number of lots you wish to play today with:"}),Object(j.jsx)("input",{type:"number",onChange:function(e){return l(e.target.value),i},min:"1",className:"inputField",id:"lotsField"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"button",value:"Pay with PayPal",onClick:function(){t()?(fetch("http://localhost:3002/play",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({lots:i,lotNrs:0})}).then((function(e){return e.json()})).then((function(){var e=0;fetch("http://localhost:3002/").then((function(e){return e.json()})).then((function(t){console.log("data of Play",t),t.forEach((function(t){e=Number(t.lots)+e,console.log(e)}))})).then((function(){for(var t=[],n=1;n<=i;n++)t.push(e-i+n," ");b(t),console.log("result",t)}))})),i>0&&(alert("Thank you for your  payment :)"),document.getElementById("lotsField").value=0,l(0),console.log("let's see the lotsBought",i),console.log("let's see the playing Lots",u))):alert("Please, first log-in or register in order to be able to play.")},className:"playBtn",disabled:!i>0}),Object(j.jsxs)("p",{children:["You will play with ",i," lots"]}),Object(j.jsxs)("p",{children:["The total cost is \u20ac",10*i]}),u>"0"?Object(j.jsxs)("p",{children:["Your are playing with the following lots: ",u]}):Object(j.jsx)("p",{})]})},x=function(){return Object(j.jsxs)("div",{className:"rules",children:[Object(j.jsx)("p",{children:"Hi there"}),Object(j.jsx)("p",{children:" To enjoy and play \u201cEvery-day Lotto-day\u201d you need to subscribe or log in if you are already subscribed and then click on Play."}),Object(j.jsx)("p",{children:"Choose the amount of lots you wish to play with and then go further with the payment. The rest will happen automatically."}),Object(j.jsx)("p",{children:"At 19:00 o\u2019clock the winning numbers will be announced on the live-draw page and the winners will also be notified by email. "}),Object(j.jsx)("p",{children:"The winning amounts will be paid by PayPal within one day of the draw. "}),Object(j.jsx)("p",{children:"Good luck!"})]})},g=function(){return Object(j.jsxs)("div",{className:"about",children:[Object(j.jsx)("p",{children:"Hi there"}),Object(j.jsx)("p",{children:" This is a test app to practice my coding skills with React.js but also a fun project."}),Object(j.jsx)("p",{children:"Most possibly, I will turn this to a real lotto website/app, it could be fun and... profitable...haha"}),Object(j.jsx)("p",{children:"Good luck!!!!"})]})},f=function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(0),l=Object(a.a)(i,2),o=l[0],r=l[1];return Object(c.useEffect)((function(){var e=0;fetch("http://localhost:3002/").then((function(e){return e.json()})).then((function(t){t.forEach((function(t){e+=Number(t.lots)})),r(e)})),setInterval((function(){var e=new Date;19===e.getHours()&&0===e.getMinutes()&&0===e.getSeconds()&&s(Math.floor(Math.random()*o+1))}),100)}),[o,n]),Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{subtitle2:"The daily draw will take place at exactly 19:00 CET"}),Object(j.jsx)("br",{}),Object(j.jsxs)("p",{children:["The total number of lots today is: ",o]}),Object(j.jsxs)("p",{children:["The winning lot of today is number: ",n]})]})};var y=function(){var e=localStorage.getItem("isLoggedIn"),t=Object(c.useState)(!e||!e),n=Object(a.a)(t,2),s=n[0],i=n[1];Object(c.useEffect)((function(){localStorage.setItem("isLoggedIn",Boolean(s))}),[s]);var l=function(){i(!s)};return Object(j.jsx)("div",{children:Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("ul",{className:"header",children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/register",children:"Register"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/login",onClick:function(){s&&i(!s)},children:s?"Log-out":"Log-in"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/play",className:"playBtn",children:"PLAY"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/rules",children:"Rules"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/about",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/livedraw",className:"playBtn",children:"Live Draw"})})]}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",children:Object(j.jsx)(b,{})}),Object(j.jsx)(r.a,{exact:!0,path:"/register",children:Object(j.jsx)(u,{checkLogin:l})}),Object(j.jsx)(r.a,{exact:!0,path:"/login",children:Object(j.jsx)(p,{checkLogin:l})}),Object(j.jsx)(r.a,{exact:!0,path:"/play",children:Object(j.jsx)(O,{loginCheck:function(){return s}})}),Object(j.jsx)(r.a,{path:"/rules",children:Object(j.jsx)(x,{})}),Object(j.jsx)(r.a,{path:"/about",children:Object(j.jsx)(g,{})}),Object(j.jsx)(r.a,{path:"/livedraw",children:Object(j.jsx)(f,{})})]}),Object(j.jsx)(d,{})]})})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),c(e),s(e),i(e),l(e)}))};l.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),m()},9:function(e,t,n){}},[[32,1,2]]]);
//# sourceMappingURL=main.a4bca7c1.chunk.js.map