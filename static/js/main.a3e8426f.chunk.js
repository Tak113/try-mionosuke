(this["webpackJsonpgoogle-translate"]=this["webpackJsonpgoogle-translate"]||[]).push([[0],{124:function(t,e,n){"use strict";n.r(e);var a,c,o,i,r,s,l,b,d,j,u,g,p,f,h,m,O,x=n(0),y=n.n(x),v=n(10),w=n.n(v),k=(n(79),n(14)),T=n(15),S=n(45),F=n(11),C=n(12),z=n.p+"static/media/KouzanGyoushoOTF.7685a634.woff",N=Object(C.a)(a||(a=Object(F.a)(["\n\t@font-face {\n\t\tfont-family: 'Font Name';\n\t\tsrc: local('Font Name'), local('FontName'),\n\t\turl(",") format('woff');\n\t\tfont-weight: 300;\n\t\tfont-style: normal;\n\t}\n"])),z),P=n(155),E=n(162),J=n(164),G=n(159),L=(C.b.fieldset(c||(c=Object(F.a)(["\n\tmargin: 20px 0;\n\tpadding-bottom: 20px;\n"]))),C.b.div(o||(o=Object(F.a)(["\n\tdisplay:flex;\n\t// justify-content: space-between;\n"]))),C.b.input(i||(i=Object(F.a)(["\n\tvertical-align: middle;\n\tmargin-top: -1px;\n"]))),C.b.img(r||(r=Object(F.a)(["\n\twidth: 150px;\n"])))),M=Object(C.b)(P.a)(s||(s=Object(F.a)(["\n\t&& {\n\t\twidth: 100%;\n\t\theight: 45px;\n\t\tmargin:20px 0 20px 0;\n\t\tcolor: white;\n\t\tbackground-color: black;\n\t\t&:hover: {\n\t\t\tbackground-color: gray;\n\t\t}\n\t}\n"]))),A=Object(C.b)(E.a)(l||(l=Object(F.a)(["\n\t&& {\n\t\twidth: 100%;\n\t}\n"]))),D=Object(C.b)(J.a)(b||(b=Object(F.a)(["\n\t&& {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t}\n"]))),I=Object(C.b)(G.a)(d||(d=Object(F.a)(["\n\t&& {\n\t\tmargin-top: 30px;\n\t}\n"]))),K=C.b.div(j||(j=Object(F.a)(["\n\tdisplay:flex;\n\tflex-direction: row;\n\twidth:100%;\n\n\t@media screen and (max-width: 800px) {\n  \t\tflex-direction: column;\n  \t\talign-items: center;\n  \t\twidth: 100%;\n  \t}\n"]))),Y=C.b.div(u||(u=Object(F.a)(["\n\tdisplay:flex;\n\tflex-direction: column;\n\twidth:100%;\n\tmargin:20px;\n"]))),_=n(65),q=n.n(_),B=n(66),Q=n.n(B),R=C.b.span(g||(g=Object(F.a)(["\n\tletter-spacing: -22px;\n"]))),X=C.b.span(p||(p=Object(F.a)(["\n\t// background-color: red;\n"]))),H=C.b.img(f||(f=Object(F.a)(["\n\tmargin-left: -50px;\n"]))),W=n(6),U=function(t){var e=t.name;return Object(W.jsxs)(X,{children:[Q()(e,/(\u30c3|\u30e3|\u30e5|\u30e7|\u30a1|\u30a3|\u30a5|\u30a7|\u30a9|\u3063|\u3083|\u3085|\u3087|\u3041|\u3043|\u3045|\u3047|\u3049)/g,(function(t,e){return Object(W.jsx)(R,{children:t},e)})),Object(W.jsx)(H,{src:"https://firebasestorage.googleapis.com/v0/b/mionosuke-db.appspot.com/o/translate%2Flabel.png?alt=media&token=391a1dab-bff4-482e-95b4-acdcb64cdd6c",alt:"label"})]})},V=function(t){var e=t.name,n=t.fontType,a=Object(x.useState)(""),c=Object(k.a)(a,2),o=c[0],i=c[1],r={app_id:"dcf54043fb0990e955af41260a0bf2f3d903186cb106b627c0173e1d39fc3cdc",sentence:"".concat(e),output_type:"".concat(n)};return Object(x.useEffect)((function(){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};fetch("https://labs.goo.ne.jp/api/hiragana",t).then((function(t){return t.json()})).then((function(t){return i(t.converted)}))}),[e,n]),Object(W.jsx)(U,{name:o})},Z=C.b.div(h||(h=Object(F.a)(["\n\theight: 300px;\n\tposition: absolute;\n\tmargin: 120px auto 0 auto;\n"]))),$=C.b.div(m||(m=Object(F.a)(["\n\twidth: 500px;\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\theight: 500px;\n\tfont-size: 50px;\n\tfont-family: 'Font Name';\n\t-ms-writing-mode: tb-rl;\n\twriting-mode: vertical-rl;\n\tletter-spacing: -5px;\n\tworkd-wrap: break-word;\n\tmargin: 0 auto 0 auto;\n"]))),tt=C.b.div(O||(O=Object(F.a)(['\n\twidth: 100%;\n\theight: 100%;\n\tbackground-position: center;\n\tbackground-size: cover;\n\tbackground-image: url("https://firebasestorage.googleapis.com/v0/b/mionosuke-db.appspot.com/o/translate%2Ftshirt.png?alt=media&token=912fd175-2686-4bc9-b7d0-4ad096bec23a");\n']))),et=function(t){var e=t.text,n=t.language,a=t.fontType,c=Object(x.useState)(""),o=Object(k.a)(c,2),i=o[0],r=o[1],s="https://script.google.com/macros/s/";return s+="".concat("AKfycbzSMySCPJSxxCDzglgPsMelqqXzuX_zRLm7Qvv-Ol8Li2QP-fMGTb4gGA"),s+="/exec?text=".concat(e,"&from=").concat(n,"&to=ja"),Object(x.useEffect)((function(){q.a.get(s).then((function(t){r(t.data.text)})).catch((function(t){console.log("rest api error",t)}))}),[e,n]),Object(W.jsxs)($,{children:[Object(W.jsx)(tt,{}),Object(W.jsx)(Z,{children:Object(W.jsx)(V,{name:i,fontType:a})})]})},nt=n(160),at=n(161),ct=n(165),ot=n(163),it=function(t,e){return Object(S.a)(Object(S.a)({},t),{},Object(T.a)({},e.name,e.value))},rt={name:"Edward",font:"hiragana"};Object(nt.a)((function(t){return{root:{flexGrow:1}}}));var st=function(){var t=Object(x.useReducer)(it,rt),e=Object(k.a)(t,2),n=e[0],a=e[1],c=Object(x.useState)("Edward"),o=Object(k.a)(c,2),i=o[0],r=o[1],s=Object(x.useState)("hiragana"),l=Object(k.a)(s,2),b=l[0],d=l[1],j=function(t){a({name:t.target.name,value:t.target.value})};return Object(W.jsxs)(at.a,{maxWidth:"lg",children:[Object(W.jsx)(N,{}),Object(W.jsx)("h1",{children:"Your Name in Japanese Calligraphy Tshirt"}),Object(W.jsxs)(K,{children:[Object(W.jsxs)(Y,{children:[Object(W.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r(n.name),d(n.font)},children:[Object(W.jsx)(A,{id:"standard-secondary",label:"Your English Name",color:"secondary",name:"name",value:n.name,onChange:j}),Object(W.jsx)(I,{component:"legend",children:"Font Type"}),Object(W.jsxs)(D,{"aria-label":"fonttype",name:"fonttype",children:[Object(W.jsx)(ct.a,{value:"katakana",label:"Katakana",control:Object(W.jsx)(ot.a,{name:"font",value:"katakana",onChange:j,checked:"katakana"===n.font})}),Object(W.jsx)(ct.a,{value:"hiragana",label:"Hiragana",control:Object(W.jsx)(ot.a,{name:"font",value:"hiragana",onChange:j,checked:"hiragana"==n.font})})]}),Object(W.jsx)(M,{type:"submit",variant:"contained",color:"default",size:"large",children:"Submit"})]}),Object(W.jsx)("p",{children:"Put your english name, select japanese font type, and submit. You will see your name in japanese calligraphy on Tshirt!"}),Object(W.jsx)("p",{children:"*This is not a final version, but is based on google and goo translate API. Once we receive your order we will manually confirm to make sure we translate correctly."}),Object(W.jsx)("p",{children:"*There are few translation bugs and we don't gurantee the translation used in the app"})]}),Object(W.jsxs)(Y,{children:[Object(W.jsx)(et,{text:i,language:"en",fontType:b}),Object(W.jsx)("a",{href:"http://www.goo.ne.jp/",children:Object(W.jsx)(L,{className:"goo-image",src:"//u.xgoo.jp/img/sgoo.png",alt:"supported by goo",title:"supported by goo"})})]})]})]})},lt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,167)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),o(t),i(t)}))};w.a.render(Object(W.jsx)(y.a.StrictMode,{children:Object(W.jsx)(st,{})}),document.getElementById("root")),lt()},79:function(t,e,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.a3e8426f.chunk.js.map