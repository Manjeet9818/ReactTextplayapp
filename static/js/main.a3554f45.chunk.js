(this.webpackJsonptuttiles=this.webpackJsonptuttiles||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(6),l=a.n(s),r=(a(11),a(2)),i=(a(12),a(0));function o(e){var t=Object(c.useState)("Enter text here"),a=Object(r.a)(t,2),n=a[0],s=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"\"container\" style={{color:props.mode==='dark'?'white':'rgb(195 179 179)'}}",children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsxs)("div",{className:"mb-3","my-2":!0,children:[Object(i.jsx)("textarea",{className:"form-control",style:{backgroundcolor:"light"===e.mode?"rgb(195 179 179)":"light"},onChange:function(e){console.log("changed in text clicked"),s(e.target.value)},value:n,id:"mybox",rows:"8"}),Object(i.jsx)("button",{className:"btn-primary  my-2 ",onClick:function(){console.log("uppercase was clicked"+n);var t=n.toUpperCase();s(t),e.showAlert("you changed word in uppercase","success")},children:"Convert to upper case"}),Object(i.jsx)("button",{className:"btn-primary my-2 mx-3",onClick:function(){console.log("lowercase was clicked"+n);var t=n.toLowerCase();s(t),e.showAlert("you changed word in lowercase","success"),document.title="textutils-Lowercase change"},children:"Convert to lower  case"}),Object(i.jsx)("button",{className:"btn-primary my-2 mx-3",onClick:function(){console.log("remove space is clicked");var e=document.getElementById("mybox");e.select(),e.setSelectionRange(0,99999),navigator.clipboard.writeText(e.value)},children:"copy"}),Object(i.jsx)("button",{className:"btn-primary my-2 mx-3",onClick:function(){var e=n.split(/[  ]+/);s(e.join(" "))},children:"remove extra spaces  "})]})]}),Object(i.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(i.jsx)("h1",{children:"your text summary"}),Object(i.jsxs)("p",{children:[n.split(" ").length," word,",n.length," character"]}),Object(i.jsxs)("p",{children:[.008*n.split(" ").length," Minute read"]}),Object(i.jsx)("h2",{children:"preview"}),Object(i.jsx)("p",{children:n.length>0?n:"Enter something in textarea"})]})]})}var d=a(4),b=a.n(d);function j(e){return Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:[Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarText",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"HOME"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"/about",children:e.fun})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"/",children:"Pricing"})})]}),Object(i.jsx)("span",{className:"navbar-text",children:"Navbar text with an inline element"})]})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlfor:"flexSwitchCheckDefault",children:"Enable Light Mode"})]})]})}function h(e){return e.alert&&Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.Success," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:e.alert.type}),":",e.alert.msg]})})}j.prototype={title:b.a.string.isRequired,fun:b.a.string};var m=a(5);var u=function(){var e=Object(m.useState)("dark"),t=Object(r.a)(e,2),a=t[0],c=t[1],n=Object(m.useState)("null"),s=Object(r.a)(n,2),l=s[0],d=s[1],b=function(e,t){d({msg:e,type:t})};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{title:"textutils",fun:"About",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="rgb(25 79 132)",b("dark mode has enable","success")):(c("light"),document.body.style.backgroundColor="#f8f9fa",b("light mode has enable","success"))}}),Object(i.jsx)(h,{alert:l}),Object(i.jsx)("div",{className:"container","my-3":!0,children:Object(i.jsx)(o,{showAlert:b,heading:"Enter the text to analyize"})})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),s(e),l(e)}))};l.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.a3554f45.chunk.js.map