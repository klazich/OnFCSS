!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/js/",n(n.s=0)}([function(e,t){let n=0,o=!1;const l=()=>{const e=window.scrollY-n;e>0&&(e=>{const t=document.querySelector(e);t.classList.remove("js-pinned"),t.classList.add("js-unpinned")})("header"),e<0&&(e=>{const t=document.querySelector(e);t.classList.remove("js-unpinned"),t.classList.add("js-pinned")})("header"),n=window.scrollY,o=!1};document.addEventListener("scroll",()=>{o||requestAnimationFrame(l),o=!0},!1);const r=document.querySelectorAll("figure.css, figure.html");["/* Start of reusable styles here */",".homepage-promos .grid-50 {\n    width: 100%\n}\n.homepage-promos .grid-33 {\n    width: 100%\n}\n.homepage-promos .grid-34 {\n    width: 100%\n}","#seo-container {\n    display: none;\n}",".product-tab {\n    height: 530px;\n    width: 99.7%;\n}",".container-inner.promo-status {\n    float: center;\n}",".left {\n    float: left !important;\n}",".left-max-scr1,\n.left-max-scr2,\n.left-max-scr3,\n.left-only-scr1 {\n    float: left;\n}",".left-min-scr2,\n.left-min-scr3,\n.left-max-scr3,\n.left-only-scr3 {\n    float: left;\n}",".header-nav-container .header-nav-list {\n    float: left;\n}\n\n.CA .header-nav-list.second {\n    float: left;\n}\n\n#nav.challenger-a .submenu-3col li,\n#nav.challenger-a .submenu-3col li {\n    float: left;\n}",".ie6 #footer-content .flex-control-nav li a,\n.ie7 #footer-content .flex-control-nav li a,\n.ie8 #footer-content .flex-control-nav li a {\n    float: left;\n}\n\n#nav.challenger-a li.menu-products {\n    float: left;\n}",".container-inner.promo-status",".red {\n    color: #FF4136;\n}","&lt;div class=“red”&gt;Some text&lt;/div&gt;"].map(e=>`<code class="black-70 lh-copy fw3">${e}</code>`).map(e=>`\n    <pre class="pa4 f7 f6-m f5-l overflow-x-auto">${e}</pre>\n`).forEach((e,t)=>r[t].insertAdjacentHTML("afterbegin",e));const c=e=>{e.classList.toggle("dn"),e.classList.toggle("flex")},s=[...document.querySelectorAll(".js-std"),...document.querySelectorAll(".js-alt")];[document.querySelector(".js-alt .js-toggle"),document.querySelector(".js-std .js-toggle")].forEach(e=>{e.addEventListener("click",()=>{s.forEach(c)})});const a=[document.querySelector("#loggedOut"),document.querySelector("#loggedIn")];a.map(e=>e.querySelector(".js-toggle")).forEach(e=>{e.addEventListener("click",()=>{a.forEach(c)})}),document.querySelector("#search>a").addEventListener("click",e=>{e.currentTarget.nextElementSibling.focus()});const i=document.querySelector(".js-modal"),d=document.querySelector(".js-wrap"),u=document.body;[document.querySelector(".js-modal-toggle"),document.querySelector(".js-modal-bttn")].forEach(e=>{e.addEventListener("click",()=>{d.classList.toggle("blur"),d.classList.toggle("mr-scrollbar-width"),i.classList.toggle("hide"),u.classList.toggle("noscroll")})})}]);
//# sourceMappingURL=bundle.js.map