(function(e){function t(t){for(var a,n,l=t[0],u=t[1],o=t[2],d=0,k=[];d<l.length;d++)n=l[d],r[n]&&k.push(r[n][0]),r[n]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(t);while(k.length)k.shift()();return s.push.apply(s,o||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],a=!0,l=1;l<i.length;l++){var u=i[l];0!==r[u]&&(a=!1)}a&&(s.splice(t--,1),e=n(n.s=i[0]))}return e}var a={},r={app:0},s=[];function n(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=a,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var c=u;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},1567:function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d");var a=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Header"),i("router-view"),i("Footer")],1)},s=[],n=i("8323"),l=i.n(n),u=i("263c"),o=i.n(u),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("nav",{staticClass:"uk-navbar-container uk-navbar-transparent",attrs:{"uk-navbar":"","uk-sticky":""}},[e._m(0),i("div",{staticClass:"uk-navbar-right uk-visible@l"},[i("ul",{staticClass:"uk-navbar-nav"},e._l(e.menu,function(t){return i("li",{key:t.label},[i("a",{attrs:{href:t.target,"uk-scroll":""}},[e._v(e._s(t.label))])])}),0)]),e._m(1)]),i("div",{attrs:{id:"mobile-nav","uk-offcanvas":"overlay: true; flip:true; mode: push"}},[i("div",{staticClass:"uk-offcanvas-bar uk-flex uk-flex-column"},[i("button",{staticClass:"uk-offcanvas-close",attrs:{type:"button","uk-close":""}}),i("ul",{staticClass:"uk-nav uk-nav-primary uk-margin-auto-vertical"},e._l(e.menu,function(t){return i("li",{key:t.label},[i("a",{attrs:{href:t.target}},[e._v(e._s(t.label))])])}),0)])])])},d=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uk-navbar-left"},[i("a",{staticClass:"uk-navbar-item uk-logo",attrs:{href:"/"}},[i("img",{attrs:{src:"/images/higrow-logo-1024.png",width:"150"}})])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uk-navbar-right uk-hidden@l"},[i("a",{staticClass:"uk-navbar-toggle",attrs:{href:"#","uk-toggle":"target: #mobile-nav"}},[i("div",{staticClass:"hg-hamburger"},[i("div",{staticClass:"hg-hamburger-line"}),i("div",{staticClass:"hg-hamburger-line"})])])])}],k={name:"Header",props:{msg:String},data:function(){return{menu:[{label:"Servizi",target:"/#servizi"},{label:"Contatti",target:"/#contatti"}]}}},m=k,g=(i("b77f"),i("2877")),v=Object(g["a"])(m,c,d,!1,null,"665fbbe1",null);v.options.__file="Header.vue";var f=v.exports,p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uk-container uk-text-center uk-text-small uk-margin"},[i("strong",[e._v("Higrow srl")]),e._v(" ©2019"),i("br"),e._v("sede legale: via Monte Popera 4/7, 30027 San Donà di Piave - sede operativa: via Enrico Fermi 6, 30020 Noventa di Piave"),i("br"),e._v("P.iva/C.f. 04440720276 - email. "),i("a",{attrs:{href:"mailto:info@higrow.it"}},[e._v("info@higrow.it")]),e._v(" / pec. "),i("a",{attrs:{href:"mailto:higrow.srl@legalmail.it"}},[e._v("higrow.srl@legalmail.it")])])}],_={name:"Footer",props:{msg:String},data:function(){return{}}},x=_,b=Object(g["a"])(x,p,h,!1,null,"cbfa1afe",null);b.options.__file="Footer.vue";var C=b.exports;l.a.use(o.a);var w={name:"app",components:{Header:f,Footer:C}},y=w,j=(i("7c55"),Object(g["a"])(y,r,s,!1,null,null,null));j.options.__file="App.vue";var S=j.exports,E=i("8c4f"),P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"uk-section"},[i("div",{staticClass:"uk-container uk-text-center"},[i("img",{attrs:{src:"images/higrow-icona-1024.png",width:"200","uk-img":""}}),i("h1",{staticClass:"uk-heading-hero"},[e._v("creatività\n        "),i("br"),e._v("senza "+e._s(e.ends[e.current])+"\n      ")]),i("a",{staticClass:"uk-button uk-button-text uk-button-large",on:{click:function(t){e.count()}}},[e._v("clicca qui")])])]),e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),i("div",{staticClass:"uk-container uk-text-center"},[i("h2",[e._v("Blog")]),e.loading?i("div",{staticClass:"uk-section uk-flex uk-flex-middle uk-flex-center"},[i("div",{attrs:{"uk-spinner":"ratio: 3"}})]):i("div",{staticClass:"uk-child-width-expand@s",attrs:{"uk-grid":""}},e._l(e.posts,function(t){return i("router-link",{key:t.id,attrs:{to:{name:"Post",params:{id:t.id}}}},[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",style:{"background-image":"url("+t._embedded["wp:featuredmedia"][0].source_url+")"}}),i("div",[i("h5",{domProps:{innerHTML:e._s(t.title.rendered)}})])])}),1)]),e._m(8)])},$=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uk-section"},[i("img",{attrs:{src:"images/table-top-view-creativity.jpg","uk-img":""}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uk-section",attrs:{id:"servizi"}},[i("div",{staticClass:"uk-container uk-text-center"},[i("img",{attrs:{src:"images/higrow-icona-penta-1024.png",width:"100","uk-img":""}}),i("h2",{staticClass:"uk-heading-primary"},[e._v("Brand identity")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[e._v("Naming")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[e._v("Logo")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[e._v("Graphic Design")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[e._v("Twin-set")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[e._v("Packaging")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uk-container uk-text-center"},[i("div",{staticClass:"uk-child-width-expand@s uk-light",attrs:{"uk-grid":""}},[i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/lasportiva.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/globus.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/saiindustry.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/cimento.jpg)"}})])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uk-section"},[i("div",{staticClass:"uk-container uk-text-center"},[i("img",{attrs:{src:"images/higrow-icona-epta-1024.png",width:"100","uk-img":""}}),i("h2",{staticClass:"uk-heading-primary"},[e._v("Web design")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[e._v("Siti web")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[e._v("E-commerce")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[e._v("Web App")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[e._v("Landing Page")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[e._v("iOS&Droid App")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uk-container uk-text-center"},[i("div",{staticClass:"uk-child-width-expand@s uk-light",attrs:{"uk-grid":""}},[i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/stateofart.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/theedgecompany.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/aiprogetti.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/relax.jpg)"}})])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uk-section"},[i("div",{staticClass:"uk-container uk-text-center"},[i("img",{attrs:{src:"images/higrow-icona-enna-1024.png",width:"100","uk-img":""}}),i("h2",{staticClass:"uk-heading-primary"},[e._v("Growth Hacking")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[e._v("Digital marketing")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[e._v("Social media strategy")]),i("p",{staticClass:"uk-text-lead uk-flex-middle"},[e._v("Market acquisition")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uk-container uk-text-center"},[i("div",{staticClass:"uk-child-width-expand@s uk-light",attrs:{"uk-grid":""}},[i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/villaggiomarzotto.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/kibernetes.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/noventavetro.jpg)"}})]),i("div",[i("div",{staticClass:"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle",staticStyle:{"background-image":"url(images/portfolio/ristorantelieto.jpg)"}})])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uk-section uk-flex uk-flex-middle",attrs:{"uk-height-viewport":""}},[i("div",{staticClass:"uk-container uk-text-center"},[i("div",{staticClass:"uk-child-width-expand@s",attrs:{"uk-grid":""}},[i("div",[i("cite",{staticClass:"uk-text-lead uk-panel uk-height-large uk-flex-middle uk-flex-center "},[e._v("“I nostri pregi e i nostri difetti sono inscindibili, "),i("br"),e._v("proprio come la forza e la materia, "),i("br"),e._v("quando si separano l'uomo non è più.”")]),i("p",{staticClass:"uk-h4"},[i("strong",[e._v("Nikola Tesla")])])])])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uk-section uk-flex uk-flex-middle",attrs:{id:"contatti","uk-height-viewport":""}},[i("div",{staticClass:"uk-container uk-text-center"},[i("div",{staticClass:"uk-child-width-expand@s",attrs:{"uk-grid":""}},[i("div",[i("cite",{staticClass:"uk-text-lead uk-panel uk-height-large uk-flex-middle uk-flex-center "},[e._v("“Ogni lungo viaggio inizia con un passo”")]),i("p",{staticClass:"uk-h4"},[i("strong",[e._v("Laozi")])]),i("p",{staticClass:"uk-text-small"},[i("a",{attrs:{href:"mailto:commerciale@higrow.it"}},[e._v("commerciale@higrow.it")]),e._v(" | "),i("a",{attrs:{href:"tel:3339774604"}},[e._v("3339774604")])])])])])])}],O=i("fa6e"),z=new O({endpoint:"https://www.zepfiro.com/wp-json"}),H={name:"Homepage",data:function(){return{loading:!0,posts:{},ends:["regole","pregiudizi","scopo","font","palle","cervello","di te","bottoni","pazienza","click","alberi","penna","fili","altro","odio"],current:0}},mounted:function(){z.posts().perPage(4).embed().then(function(e){this.posts=e,this.loading=!1}.bind(this)).catch(function(e){})},methods:{count:function(){this.current==this.ends.length-1?this.current=0:this.current++}}},M=H,T=Object(g["a"])(M,P,$,!1,null,"52a3ccfa",null);T.options.__file="Homepage.vue";var A=T.exports,F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"uk-container uk-margin"},[e.loading?i("div",{staticClass:"uk-section uk-flex uk-flex-middle uk-flex-center",attrs:{"uk-height-viewport":""}},[i("div",{attrs:{"uk-spinner":"ratio: 3"}})]):i("div",[null!=e.post._embedded?i("img",{attrs:{src:e.post._embedded["wp:featuredmedia"][0].source_url,"uk-img":""}}):e._e(),i("h1",{staticClass:"uk-heading-primary"},[e._v(e._s(e.post.title.rendered))]),i("div",{domProps:{innerHTML:e._s(e.post.content.rendered)}})])])},L=[],D=i("fa6e"),q=new D({endpoint:"https://www.zepfiro.com/wp-json"}),N={name:"Post",data:function(){return{loading:!0,post:{content:{rendered:""},title:{rendered:""},_embedded:null}}},mounted:function(){q.posts().id(this.$route.params.id).embed().then(function(e){this.post=e,this.loading=!1}.bind(this)).catch(function(e){})},methods:{}},B=N,G=Object(g["a"])(B,F,L,!1,null,"1220a833",null);G.options.__file="Post.vue";var J=G.exports;a["a"].use(E["a"]);var W=new E["a"]({mode:"history",routes:[{path:"/",name:"Homepage",component:A},{path:"/news/:id",name:"Post",component:J},{path:"*",redirect:"/"}]}),I=i("0284"),U=i.n(I);a["a"].use(U.a,{id:"UA-51910998-52",router:W,debug:{enabled:!0}}),new a["a"]({router:W,VueAnalytics:U.a,render:function(e){return e(S)}}).$mount("#app")},"5c48":function(e,t,i){},"7c55":function(e,t,i){"use strict";var a=i("5c48"),r=i.n(a);r.a},b77f:function(e,t,i){"use strict";var a=i("1567"),r=i.n(a);r.a}});
//# sourceMappingURL=app.622e1141.js.map