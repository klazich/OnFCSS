!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/js/",n(n.s=0)}([function(e,t){{let e=0;const t=document.querySelector("header");window.addEventListener("scroll",function(e){let t,n=!1;const o=()=>{n=!1,e(t)};return e=>{t=e,n||(n=!0,requestAnimationFrame(o))}}(()=>{const n=window.scrollY-e;n>0&&(t.style="transform: translateY(-200%);"),n<0&&(t.style="transform: translateY(0%);"),e=window.scrollY}))}const n=document.querySelectorAll("figure.css, figure.html");["/* Start of reusable styles here */",".homepage-promos .grid-50 {\n    width: 100%\n}\n.homepage-promos .grid-33 {\n    width: 100%\n}\n.homepage-promos .grid-34 {\n    width: 100%\n}","#seo-container {\n    display: none;\n}",".product-tab {\n    height: 530px;\n    width: 99.7%;\n}",".container-inner.promo-status {\n    float: center;\n}",".left {\n    float: left !important;\n}",".left-max-scr1,\n.left-max-scr2,\n.left-max-scr3,\n.left-only-scr1 {\n    float: left;\n}",".left-min-scr2,\n.left-min-scr3,\n.left-max-scr3,\n.left-only-scr3 {\n    float: left;\n}",".header-nav-container .header-nav-list {\n    float: left;\n}\n\n.CA .header-nav-list.second {\n    float: left;\n}\n\n#nav.challenger-a .submenu-3col li,\n#nav.challenger-a .submenu-3col li {\n    float: left;\n}",".ie6 #footer-content .flex-control-nav li a,\n.ie7 #footer-content .flex-control-nav li a,\n.ie8 #footer-content .flex-control-nav li a {\n    float: left;\n}\n\n#nav.challenger-a li.menu-products {\n    float: left;\n}",".container-inner.promo-status",".red {\n    color: #FF4136;\n}","&lt;div class=“red”&gt;Some text&lt;/div&gt;"].map(e=>`<code class="black-70 lh-copy fw3">${e}</code>`).map(e=>`\n    <pre class="pa4 f7 f6-m f5-l overflow-x-auto">${e}</pre>\n`).forEach((e,t)=>n[t].insertAdjacentHTML("afterbegin",e));const o=e=>{e.classList.toggle("dn"),e.classList.toggle("flex")},l=[...document.querySelectorAll(".js-std"),...document.querySelectorAll(".js-alt")];[document.querySelector(".js-alt .js-toggle"),document.querySelector(".js-std .js-toggle")].forEach(e=>{e.addEventListener("click",()=>{l.forEach(o)})});const r=["#loggedOut","#loggedIn"].map(e=>document.querySelector(e));r.map(e=>e.querySelector(".js-toggle")).forEach(e=>{e.addEventListener("click",()=>{r.forEach(o)})}),document.querySelector("#search>a").addEventListener("click",e=>{e.currentTarget.nextElementSibling.focus()});const c=document.querySelector(".js-modal"),a=document.querySelector(".js-wrap"),s=document.body;[document.querySelector(".js-modal-toggle"),document.querySelector(".js-modal-bttn")].forEach(e=>{e.addEventListener("click",()=>{a.classList.toggle("blur"),a.classList.toggle("mr-scrollbar-width"),c.classList.toggle("hide"),s.classList.toggle("noscroll")})})}]);
//# sourceMappingURL=bundle.js.map