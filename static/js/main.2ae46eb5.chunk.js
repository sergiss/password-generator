(this["webpackJsonppassword-generator"]=this["webpackJsonppassword-generator"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(6),r=n.n(a),o=(n(11),n(2)),l=n(5),i=n(0);var b=function(){return Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:"Password Generator"})})},j=n(3);var u=function(e){var t=e.options,n=e.setOptions,c=function(e){n(Object(o.a)(Object(o.a)({},t),{},Object(j.a)({},e.target.name,e.target.checked)))},s=function(e){e.target.value<1?e.target.value=1:e.target.value>50?e.target.value=50:n(Object(o.a)(Object(o.a)({},t),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(i.jsxs)("div",{className:"form",children:[Object(i.jsx)("h2",{className:"border-bottom",children:"Configuration"}),Object(i.jsxs)("div",{className:"column",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("label",{style:{width:"75%"},children:"Length"}),Object(i.jsx)("input",{type:"number",value:t.length,onChange:s,name:"length",style:{width:"25%"}})]}),Object(i.jsx)("input",{type:"range",min:"1",max:"50",value:t.length,onChange:s,name:"length"})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"column",children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{type:"checkbox",checked:t.lowercase,name:"lowercase",onChange:c}),"Lowercase"]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{type:"checkbox",checked:t.uppercase,name:"uppercase",onChange:c}),"Uppercase"]})]}),Object(i.jsxs)("div",{className:"column",children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{type:"checkbox",checked:t.numbers,name:"numbers",onChange:c}),"Numbers"]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{type:"checkbox",checked:t.symbols,name:"symbols",onChange:c}),"Symbols"]})]})]})]})};var h=function(e){var t=e.password,n=e.score,s=e.generate;return Object(i.jsx)(c.Fragment,{children:Object(i.jsxs)("div",{className:"pwd-container",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("h2",{className:"password",children:t}),Object(i.jsxs)("div",{className:"row buttons",children:[window.isSecureContext?Object(i.jsx)("button",{className:"btn btn-red",onClick:function(e){try{navigator.clipboard.writeText(t)}catch(e){alert("Function not allowed")}},children:"Copy"}):null,Object(i.jsx)("button",{className:"btn btn-blue",onClick:function(e){s()},children:"Generate"})]})]}),Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:function(e){return"progress-bar ".concat(e>75?"bg-green":e>50?"bg-blue":e>25?"bg-yellow":"bg-red")}(n),style:{width:"".concat(n,"%")}})})]})})},d="abcdefghijklmnopqrstuvwxyz",m="0123456789",p="~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/",O=function(e,t){for(var n=0;n<t.length;++n)if(e.includes(t.charAt(n)))return!0;return!1},g=function(e,t){return!(t.lowercase&&!O(e,d))&&(!(t.uppercase&&!O(e,d.toUpperCase()))&&(!(t.numbers&&!O(e,m))&&!(t.symbols&&!O(e,p))))};var x=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)((function(){var e=localStorage.getItem("password_options");return e?JSON.parse(e):{length:25,uppercase:!0,lowercase:!0,numbers:!0,symbols:!0}})),r=Object(l.a)(a,2),j=r[0],O=r[1];return Object(c.useEffect)((function(){var e=j.length,t=j.uppercase,n=j.lowercase,c=j.numbers,a=j.symbols;if(t||n||c||a){var r="";t&&(r+=d.toUpperCase()),n&&(r+=d),c&&(r+=m),a&&(r+=p);var l="";if(r.length>0)do{l="";for(var i,b=0;b<e;++b)i=Math.floor(Math.random()*r.length),l+=r.charAt(i)}while(l.length>3&&!g(l,j));s(l),window.localStorage.setItem("password_options",JSON.stringify(j))}else O(Object(o.a)(Object(o.a)({},j),{},{lowercase:!0}))}),[j]),Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(b,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(h,{password:n,score:function(e,t){var n=9/((t.lowercase?.33:0)+(t.uppercase?.33:0)+(t.numbers?.33:0)+(t.symbols?.33:0));return 100*Math.max(0,Math.min(e.length-3,n))/n}(n,j),generate:function(){O(Object(o.a)({},j))}}),Object(i.jsx)(u,{options:j,setOptions:O})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),v()}},[[13,1,2]]]);
//# sourceMappingURL=main.2ae46eb5.chunk.js.map