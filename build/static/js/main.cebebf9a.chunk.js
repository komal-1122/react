(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(5),o=t.n(c),r=(t(15),t(16),t(3));function s(e){return n.a.createElement("nav",{className:"navbar navbar-expand navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(r.b,{className:"navbar-brand",to:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(r.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(r.b,{className:"nav-link",to:"/about"},e.TextLink)),n.a.createElement("li",{className:"nav-item"},n.a.createElement(r.b,{className:"nav-link",to:"/card"},"Cards")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"https://example.com",className:"nav-link disabled","aria-disabled":"true"},"Disable"))),n.a.createElement("div",{className:"form-check form-switch"},n.a.createElement("input",{onClick:e.toggleMode,className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label ",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode")))))}function i(){const[e,a]=Object(l.useState)({color:"black",backgroundColor:"white"}),[t,c]=Object(l.useState)("Enable Dark Mode");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container mt-5",style:e},n.a.createElement("h1",null,"About Us"),n.a.createElement("div",{class:"accordion",id:"accordionExample"},n.a.createElement("div",{class:"accordion-item"},n.a.createElement("h2",{class:"accordion-header"},n.a.createElement("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:e},"Accordion Item #1")),n.a.createElement("div",{id:"collapseOne",class:"accordion-collapse collapse show","data-bs-parent":"#accordionExample"},n.a.createElement("div",{class:"accordion-body",style:e},n.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{class:"accordion-item",style:e},n.a.createElement("h2",{class:"accordion-header"},n.a.createElement("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:e},"Accordion Item #2")),n.a.createElement("div",{id:"collapseTwo",class:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},n.a.createElement("div",{class:"accordion-body",style:e},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{class:"accordion-item",style:e},n.a.createElement("h2",{class:"accordion-header"},n.a.createElement("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:e},"Accordion Item #3")),n.a.createElement("div",{id:"collapseThree",class:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},n.a.createElement("div",{class:"accordion-body",style:e},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),n.a.createElement("button",{onClick:()=>{"black"===e.color?(a({color:"white",backgroundColor:"black"}),c("Enable Light Mode")):(a({color:"black",backgroundColor:"white"}),c("Enable Dark Mode"))},className:"btn btn-primary my-4"},t)))}function m(e){const[a,t]=Object(l.useState)("Type Text here");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"mb-3"},n.a.createElement("h1",null,e.heading),n.a.createElement("textarea",{className:"form-control",id:"textArea",value:a,rows:"5",onChange:e=>{t(e.target.value)}})),n.a.createElement("button",{className:"btn btn-primary",onClick:()=>{console.log("This is text"+a);let l=a.toUpperCase();t(l),e.showAlert("Convert to UpperCase","Success")}},"Convert to UPPER case"),n.a.createElement("button",{className:"btn btn-primary mx-4",onClick:()=>{let l=a.toLowerCase();t(l),e.showAlert("Convert to LowerCase","Success")}},"Convert to lower case")),n.a.createElement("br",null),n.a.createElement("div",{className:"container"},n.a.createElement("h3",null,"Text Summery"),n.a.createElement("p",null,a.split(" ").length," words, ",a.length," Characters"),n.a.createElement("p",null,.008*a.split(" ").length,"Minute Read"),n.a.createElement("h4",null,"Preview"),n.a.createElement("p",null,a)))}function d(e){const[a,t]=Object(l.useState)({color:"black",backgroundColor:"white"}),[c,o]=Object(l.useState)("Enable Dark mode");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container mt-4 py-4 "},n.a.createElement("h1",null,"Cards"),n.a.createElement("div",{className:"card my-4 mx-4",style:a},n.a.createElement("img",{src:"...",className:"card-img-top",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Card title"),n.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."))),n.a.createElement("div",{className:"card my-4 mx-4",style:a},n.a.createElement("img",{src:"...",className:"card-img-top",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Card title"),n.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."))),n.a.createElement("button",{onClick:()=>{"black"===a.color?(t({color:"White",backgroundColor:"black"}),o("Enable Dark Mode")):(t({color:"black",backgroundColor:"white"}),o("Enable Light Mode"))},className:"btn btn-dark mx-4 "},c)))}function u(e){return e.alert&&n.a.createElement("div",{className:"alert alert-success alert-dismissible fade show",role:"alert"},n.a.createElement("strong",null,e.alert.type,":")," ",e.alert.message)}var h=t(2);var b=function(){const[e,a]=Object(l.useState)(null),t=(e,t)=>{a({message:e,type:t}),setTimeout(()=>{a(null)},2e3)},[c,o]=Object(l.useState)("light"),b=()=>{"light"===c?(o("dark"),document.body.style.backgroundColor="gray",t("Dark mode is Enable","Sucsess")):(o("light"),document.body.style.backgroundColor="white",t("Light mode is Enable","Sucsess"))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(r.a,null,n.a.createElement(s,{title:"Check Text",TextLink:"About",mode:c,toggleMode:b}),n.a.createElement(u,{alert:e}),n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:"/",element:n.a.createElement(m,{showAlert:t,heading:"Write the text to Analyze:"})}),n.a.createElement(h.a,{exact:!0,path:"/about",element:n.a.createElement(i,null)}),n.a.createElement(h.a,{exactpath:"/card",element:n.a.createElement(d,{mode:c,toggleMode:b})}))))};var p=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:c,getTTFB:o}=a;t(e),l(e),n(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null))),p()},6:function(e,a,t){e.exports=t(17)}},[[6,1,2]]]);
//# sourceMappingURL=main.cebebf9a.chunk.js.map