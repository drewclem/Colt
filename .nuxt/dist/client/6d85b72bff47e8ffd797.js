(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{174:function(t,e,r){var content=r(178);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("d6e754b4",content,!0,{sourceMap:!1})},177:function(t,e,r){"use strict";var n=r(174);r.n(n).a},178:function(t,e,r){(e=r(34)(!1)).push([t.i,".project-card[data-v-56f68e02]{-webkit-transition:.25s cubic-bezier(.175,.885,.32,1.275);transition:.25s cubic-bezier(.175,.885,.32,1.275)}.project-card[data-v-56f68e02]:hover{-webkit-transform:scale(1.005);transform:scale(1.005)}",""]),t.exports=e},184:function(t,e,r){"use strict";r.r(e);r(44);var n,c=r(10),o=(r(4),r(5),r(6),r(7),r(61)),l={name:"ProjectCard",props:["posts"]},d=(r(177),r(14)),f={name:"ProjectBoard",components:{ProjectCard:Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.posts,(function(e){return r("li",{key:e.title,staticClass:"project-card p-6 md:p-12 shadow-md hover:shadow-lg mb-8 cursor-pointer"},[r("a",{attrs:{href:e.url}},[r("h2",{staticClass:"text-blue-dark text-xl mb-3"},[t._v(t._s(e.title))]),t._v(" "),r("ul",{staticClass:"text-red list-none mb-3"},[r("li",{staticClass:"inline-block mr-2"},[t._v(t._s(e.languages))])]),t._v(" "),r("p",{staticClass:"text-blue-light"},[t._v(t._s(e.description)+" ")])])])})),0)}),[],!1,null,"56f68e02",null).exports},data:function(){return{posts:[]}},asyncData:(n=Object(c.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,t.next=3,o.a.collection("posts").where("active","==",!0).get();case 3:return r=t.sent,n=r.docs.map((function(t){var e=t.data();return{title:e.title,description:e.description,difficulty:e.difficulty,languages:e.languages,url:e.url,active:e.active}})),t.abrupt("return",{posts:n});case 6:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)})},v=Object(d.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mx-auto p-4 mt-12"},[e("div",{staticClass:"flex justify-between mb-8"},[e("h1",{staticClass:"text-2xl lg:text-3xl text-red"},[this._v("Available Projects")]),this._v(" "),e("button",{staticClass:"bg-red px-2 text-xs shadow-md hover:shadow-lg"},[e("nuxt-link",{staticClass:"text-white font-bold",attrs:{to:"/addproject"}},[this._v("Add a Project\n      ")])],1)]),this._v(" "),e("ul",[e("project-card",{staticClass:"mx-auto",attrs:{posts:this.posts}})],1)])}),[],!1,null,null,null);e.default=v.exports}}]);