(this.webpackJsonpgeeksdata_test=this.webpackJsonpgeeksdata_test||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),a=n.n(s),i=n(21),r=n.n(i),o=(n(29),n(30),n(12)),j=n(3),u=function(){return Object(c.jsx)("div",{children:"Error PAGE"})},b=n(7),d=n(22),l=n(17),h=(n(31),{apiKey:"AIzaSyCv9OZGSEdUSQE_HWW5AgIkjLunxAqPG1g",authDomain:"geeksdata-test.firebaseapp.com",databaseURL:"https://geeksdata-test.firebaseio.com",projectId:"geeksdata-test",storageBucket:"geeksdata-test.appspot.com",messagingSenderId:"1065746394956",appId:"1:1065746394956:web:c7f430e45745be274ea9e9"}),O=function e(){var t=this;Object(d.a)(this,e),this.loginUser=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.signoutUser=function(){return t.auth.signOut()},this.passwordReset=function(e){return t.auth.sendPasswordResetEmail(e)},l.a.initializeApp(h),this.auth=l.a.auth()},x=a.a.createContext(null),p=O,f=function(){var e=Object(s.useContext)(x),t=Object(s.useState)(!1),n=Object(b.a)(t,2),a=n[0],i=n[1];return Object(s.useEffect)((function(){a&&e.signoutUser()}),[a,e]),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Logout"}),Object(c.jsx)("input",{onChange:function(e){i(e.target.checked)},type:"checkbox",checked:a})]})},m=function(e){var t=Object(s.useContext)(x),n=Object(s.useState)(null),a=Object(b.a)(n,2),i=a[0],r=a[1];return Object(s.useEffect)((function(){var n=t.auth.onAuthStateChanged((function(t){t?r(t):e.history.push("/")}));return function(){n()}}),[]),null===i?Object(c.jsx)("p",{children:"Please whait..."}):Object(c.jsxs)("div",{children:[Object(c.jsx)("header",{children:"header"}),Object(c.jsx)(f,{}),Object(c.jsx)("main",{children:"Main"}),Object(c.jsx)("footer",{children:"Footer"})]})},g=function(e){var t=Object(s.useContext)(x),n=Object(s.useState)(""),a=Object(b.a)(n,2),i=a[0],r=a[1],j=Object(s.useState)(""),u=Object(b.a)(j,2),d=u[0],l=u[1],h=Object(s.useState)(!1),O=Object(b.a)(h,2),p=O[0],f=O[1],m=Object(s.useState)(""),g=Object(b.a)(m,2),v=g[0],w=g[1];Object(s.useEffect)((function(){""!==d&&""!==i?f(!0):p&&f(!1)}),[d,i,p]);return Object(c.jsxs)("div",{children:[""!==v&&Object(c.jsx)("span",{children:v.message}),Object(c.jsx)("h2",{children:"Connexion"}),Object(c.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t.loginUser(i,d).then((function(t){r(""),l(""),e.history.push("/landing")})).catch((function(e){w(e),r(""),l("")}))},children:[Object(c.jsxs)("div",{className:"",children:[Object(c.jsx)("label",{htmlFor:"email",children:"Login"}),Object(c.jsx)("input",{onChange:function(e){return r(e.target.value)},value:i,type:"text",autoComplete:"off",required:!0})]}),Object(c.jsxs)("div",{className:"",children:[Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{onChange:function(e){return l(e.target.value)},value:d,type:"password",autoComplete:"off",required:!0})]}),Object(c.jsx)("div",{children:Object(c.jsx)(o.b,{to:"/password",children:"I forget my password // my first connexion"})}),p?Object(c.jsx)("button",{children:"Connexion"}):Object(c.jsx)("button",{disabled:!0,children:"Connexion"})]})]})},v=function(e){var t=Object(s.useContext)(x),n=Object(s.useState)(""),a=Object(b.a)(n,2),i=a[0],r=a[1],j=Object(s.useState)(null),u=Object(b.a)(j,2),d=u[0],l=u[1],h=Object(s.useState)(null),O=Object(b.a)(h,2),p=O[0],f=O[1];return Object(c.jsxs)("div",{children:[null!==p?Object(c.jsx)("span",{children:p.message}):Object(c.jsx)("span",{children:d}),Object(c.jsx)("h2",{children:"Forgot password"}),Object(c.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t.passwordReset(i).then((function(){f(""),l("Check your email please."),r(""),setTimeout((function(){e.history.push("/")}),3e3)})).catch((function(e){f(e),r("")}))},children:[Object(c.jsxs)("div",{className:"",children:[Object(c.jsx)("label",{htmlFor:"email",children:"Login"}),Object(c.jsx)("input",{onChange:function(e){return r(e.target.value)},value:i,type:"text",autoComplete:"off",required:!0})]}),Object(c.jsx)("button",{disabled:!i,children:"Send"})]}),Object(c.jsx)(o.b,{to:"/",children:"I know my password."})]})};var w=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(o.a,{children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/",component:g}),Object(c.jsx)(j.a,{path:"/password",component:v}),Object(c.jsx)(j.a,{path:"/landing",component:m}),Object(c.jsx)(j.a,{component:u})]})})})};r.a.render(Object(c.jsx)(x.Provider,{value:new p,children:Object(c.jsx)(w,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.75b8766c.chunk.js.map