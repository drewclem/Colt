exports.ids=[9],exports.modules={46:function(e,t,l){"use strict";l.r(t);var r=l(10),o={name:"signup",data:function(){return{email:"",username:"",password:""}},methods:{register:function(e){r.b.createUserWithEmailAndPassword(this.email,this.password).then(e=>{alert(`Account created for ${e.email}`)},e=>{alert(e.message)}),e.preventDefault()}}},d=l(1),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"md:w-5/12 lg:w-3/12 mx-auto mt-12 p-8 shadow-xl"},[e._ssrNode('<h1 class="text-red text-3xl mb-4">Sign Up</h1> <form class="mb-4"><div class="mb-4"><label for="email" class="block font-bold mb-2">Email</label> <input type="text" id="email" placeholder="jared@piedpiper.com"'+e._ssrAttr("value",e.email)+' class="block w-full p-1 bg-gray rounded border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"></div> <div class="mb-4"><label for="username" class="block font-bold mb-2">Username</label> <input type="text" id="username" placeholder="hailrichard39"'+e._ssrAttr("value",e.username)+' class="block w-full p-1 bg-gray rounded border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"></div> <div class="mb-4"><label for="password" class="block font-bold mb-2">Password</label> <input type="password" id="password" placeholder="pp3876#rh"'+e._ssrAttr("value",e.password)+' class="block w-full p-1 bg-gray rounded border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"></div> <button class="mt-4 bg-red py-1 px-8 shadow-md hover:shadow-lg text-white font-bold">\n      Sign Up\n    </button></form> '),e._ssrNode('<p class="text-xs text-blue-light">',"</p>",[e._ssrNode("Already have an account? Sign in\n    "),l("nuxt-link",{staticClass:"font-bold text-red",attrs:{to:"/signin"}},[e._v("\n      Here.\n    ")])],2)],2)}),[],!1,null,null,"b87a3004");t.default=component.exports}};