(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{207:function(t,e,o){"use strict";o.r(e);o(3),o(4),o(5),o(6);var r={name:"signin",components:{ValidationProvider:o(67).a},data:function(){return{email:"",password:"",error:null,value:""}},methods:{emailLogin:function(t){var e=this;this.error=null,this.$store.dispatch("signInWithEmail",{email:this.email,password:this.password}).then((function(){e.email="",e.password="",e.$router.push("/me")})).catch((function(t){var o=t.message;o&&(e.error=o)}))}}},l=o(18),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"md:w-5/12 lg:w-3/12 -mt-10 mx-auto p-8 sm:shadow-xl"},[o("h1",{staticClass:"text-red text-3xl mb-4"},[t._v("Sign In")]),t._v(" "),o("form",{staticClass:"mb-4",on:{submit:function(e){return e.preventDefault(),t.emailLogin(e)}}},[o("div",{staticClass:"mb-4"},[o("label",{staticClass:"block text-blue-dark font-bold mb-2",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),o("validation-provider",{attrs:{name:"email",rules:"email",mode:"lazy"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"block w-full p-1 bg-gray border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest",attrs:{type:"text",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),o("span",{staticClass:"text-xs text-red"},[t._v(t._s(r[0]))])]}}])})],1),t._v(" "),o("div",{staticClass:"mb-4"},[o("label",{staticClass:"block text-blue-dark font-bold mb-2",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"block w-full p-1 bg-gray border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest",attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),t.error?o("div",{staticClass:"mb-2"},[o("p",{staticClass:"text-red text-xs",domProps:{textContent:t._s(t.error)}})]):t._e(),t._v(" "),o("button",{staticClass:"mt-4 button-base button-red w-full shadow-md hover:shadow-lg"},[t._v("Sign In")])]),t._v(" "),o("div",{staticClass:"text-xs text-blue-light"},[o("p",[t._v("\n      Don't have an account? Create one\n      "),o("nuxt-link",{staticClass:"text-red font-bold",attrs:{to:"/signup"}},[t._v("Here")])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);