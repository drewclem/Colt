(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{190:function(t,e,o){"use strict";o.r(e);o(4),o(5),o(6),o(7);var n=o(61),l={name:"signin",data:function(){return{email:"",password:""}},methods:{emailLogin:function(t){n.b.signInWithEmailAndPassword(this.email,this.password).then((function(t){alert("you're signed in!")}),(function(t){alert(t.message)})),t.preventDefault()}}},r=o(14),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"md:w-5/12 lg:w-3/12 mx-auto mt-12 p-8 shadow-xl"},[o("h1",{staticClass:"text-red text-3xl mb-4"},[t._v("Sign In")]),t._v(" "),o("form",{staticClass:"mb-4"},[o("div",{staticClass:"mb-4"},[o("label",{staticClass:"block font-bold mb-2",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"block w-full p-1 bg-gray rounded border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest",attrs:{type:"text",id:"email",placeholder:"gilfoyle@piedpiper.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"mb-4"},[o("label",{staticClass:"block font-bold mb-2",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"block w-full p-1 bg-gray rounded border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest",attrs:{type:"password",id:"password",placeholder:"b3tt3rth4nd1n35h"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),o("button",{staticClass:"mt-4 bg-red py-1 px-8 shadow-md hover:shadow-lg text-white font-bold",on:{click:t.emailLogin}},[t._v("\n      Sign In\n    ")])]),t._v(" "),o("div",{staticClass:"text-xs text-blue-light"},[o("p",[t._v("Don't have an account? Create one\n      "),o("nuxt-link",{staticClass:"text-red font-bold",attrs:{to:"/signup"}},[t._v("\n        Here\n      ")])],1)])])}),[],!1,null,"142de20e",null);e.default=component.exports}}]);