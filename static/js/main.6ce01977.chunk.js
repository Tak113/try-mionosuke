(this["webpackJsonpgoogle-translate"]=this["webpackJsonpgoogle-translate"]||[]).push([[0],{36:function(t,e,n){},40:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var a,c,o,i,r,s,b,l=n(0),j=n.n(l),u=n(26),d=n.n(u),p=(n(36),n(5)),f=n(9),g=n(12),h=n(3),m=n(4),O=n.p+"static/media/KouzanGyoushoOTF.7685a634.woff",x=Object(m.a)(a||(a=Object(h.a)(["\n\t@font-face {\n\t\tfont-family: 'Font Name';\n\t\tsrc: local('Font Name'), local('FontName'),\n\t\turl(",") format('woff');\n\t\tfont-weight: 300;\n\t\tfont-style: normal;\n\t}\n"])),O),v=(n(40),n(30)),y=n.n(v),k=n(31),w=n.n(k),S=m.b.span(c||(c=Object(h.a)(["\n\tletter-spacing: -22px;\n"]))),F=m.b.span(o||(o=Object(h.a)(["\n\t// background-color: red;\n"]))),N=m.b.img(i||(i=Object(h.a)(["\n\tmargin-left: -50px;\n"]))),T=n(1),C=function(t){var e=t.name;return Object(T.jsxs)(F,{children:[w()(e,/(\u30c3|\u30e3|\u30e5|\u30e7|\u30a1|\u30a3|\u30a5|\u30a7|\u30a9|\u3063|\u3083|\u3085|\u3087|\u3041|\u3043|\u3045|\u3047|\u3049)/g,(function(t,e){return Object(T.jsx)(S,{children:t},e)})),Object(T.jsx)(N,{src:"https://firebasestorage.googleapis.com/v0/b/mionosuke-db.appspot.com/o/translate%2Flabel.png?alt=media&token=391a1dab-bff4-482e-95b4-acdcb64cdd6c",alt:"label"})]})},z=function(t){var e=t.name,n=t.fontType,a=Object(l.useState)(""),c=Object(p.a)(a,2),o=c[0],i=c[1],r={app_id:"dcf54043fb0990e955af41260a0bf2f3d903186cb106b627c0173e1d39fc3cdc",sentence:"".concat(e),output_type:"".concat(n)};return Object(l.useEffect)((function(){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};fetch("https://labs.goo.ne.jp/api/hiragana",t).then((function(t){return t.json()})).then((function(t){return i(t.converted)}))}),[e,n]),Object(T.jsx)(C,{name:o})},P=m.b.div(r||(r=Object(h.a)(["\n\theight: 300px;\n\tposition: absolute;\n\tmargin: 120px auto 0 auto;\n"]))),J=m.b.div(s||(s=Object(h.a)(["\n\twidth: 500px;\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\theight: 500px;\n\tfont-size: 50px;\n\tfont-family: 'Font Name';\n\t-ms-writing-mode: tb-rl;\n\twriting-mode: vertical-rl;\n\tletter-spacing: -5px;\n\tworkd-wrap: break-word;\n\tmargin: 0 auto 0 auto;\n"]))),K=m.b.div(b||(b=Object(h.a)(['\n\twidth: 100%;\n\theight: 100%;\n\tbackground-position: center;\n\tbackground-size: cover;\n\tbackground-image: url("https://firebasestorage.googleapis.com/v0/b/mionosuke-db.appspot.com/o/translate%2Ftshirt.png?alt=media&token=912fd175-2686-4bc9-b7d0-4ad096bec23a");\n']))),E=function(t){var e=t.text,n=t.language,a=t.fontType,c=Object(l.useState)(""),o=Object(p.a)(c,2),i=o[0],r=o[1],s="https://script.google.com/macros/s/";return s+="".concat("AKfycbzSMySCPJSxxCDzglgPsMelqqXzuX_zRLm7Qvv-Ol8Li2QP-fMGTb4gGA"),s+="/exec?text=".concat(e,"&from=").concat(n,"&to=ja"),Object(l.useEffect)((function(){y.a.get(s).then((function(t){r(t.data.text)})).catch((function(t){console.log("rest api error",t)}))}),[e,n]),Object(T.jsxs)(J,{children:[Object(T.jsx)(K,{}),Object(T.jsx)(P,{children:Object(T.jsx)(z,{name:i,fontType:a})})]})},L=function(t,e){return Object(g.a)(Object(g.a)({},t),{},Object(f.a)({},e.name,e.value))},M={name:"Ken",font:"katakana"};var D=function(){var t=Object(l.useReducer)(L,M),e=Object(p.a)(t,2),n=e[0],a=e[1],c=Object(l.useState)("Ken"),o=Object(p.a)(c,2),i=o[0],r=o[1],s=Object(l.useState)("katakana"),b=Object(p.a)(s,2),j=b[0],u=b[1],d=function(t){a({name:t.target.name,value:t.target.value})};return Object(T.jsxs)("div",{className:"wrapper",children:[Object(T.jsx)(x,{}),Object(T.jsx)("h1",{children:"Your Name in Japanese Calligraphy Tshirt"}),Object(T.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r(n.name),u(n.font)},children:[Object(T.jsx)("fieldset",{children:Object(T.jsxs)("label",{children:[Object(T.jsx)("p",{children:"Your English Name :"}),Object(T.jsx)("input",{type:"text",name:"name",value:n.name,onChange:d})]})}),Object(T.jsx)("fieldset",{children:Object(T.jsxs)("label",{children:[Object(T.jsx)("p",{children:"Font Type"}),Object(T.jsxs)("div",{className:"radio-container",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{children:"Katakana : "}),Object(T.jsx)("input",{type:"radio",name:"font",value:"katakana",onChange:d,checked:"katakana"===n.font,className:"radio-button"})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{children:"Hiragana : "}),Object(T.jsx)("input",{type:"radio",name:"font",value:"hiragana",onChange:d,checked:"hiragana"===n.font,className:"radio-button"})]})]})]})}),Object(T.jsx)("button",{type:"submit",children:"Submit"})]}),Object(T.jsx)(E,{text:i,language:"en",fontType:j}),Object(T.jsx)("a",{href:"http://www.goo.ne.jp/",children:Object(T.jsx)("img",{className:"goo-image",src:"//u.xgoo.jp/img/sgoo.png",alt:"supported by goo",title:"supported by goo"})})]})},G=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),o(t),i(t)}))};d.a.render(Object(T.jsx)(j.a.StrictMode,{children:Object(T.jsx)(D,{})}),document.getElementById("root")),G()}},[[80,1,2]]]);
//# sourceMappingURL=main.6ce01977.chunk.js.map