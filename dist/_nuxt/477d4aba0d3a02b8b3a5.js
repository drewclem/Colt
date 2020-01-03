(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{180:function(e,t,o){"use strict";o.r(t);o(73),o(4),o(6),o(7),o(8);var l=o(56),r={name:"AddProject",data:function(){return{active:"",title:"",difficulty:"",languages:"",url:"",description:"",email:""}},methods:{submitProject:function(e){l.a.collection("posts").add({active:!1,title:this.title,difficulty:this.difficulty,languages:this.languages,url:this.url,description:this.description,email:this.email}).then(function(){window.location.replace("/project-thanks")}),e.preventDefault()}}},n=o(14),component=Object(n.a)(r,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container mx-auto p-4 mt-12"},[o("div",{staticClass:"md:w-8/12 md:mx-auto"},[o("h1",{staticClass:"text-2xl lg:text-3xl text-red mb-8"},[e._v("Add a Project")]),e._v(" "),o("div",{staticClass:"lg:flex"},[o("form",{staticClass:"lg:w-6/12 lg:mr-8 mb-8",attrs:{name:"project",method:"POST","data-netlify":"true","netlify-honeypot":"bot-field"},on:{submit:e.submitProject}},[o("input",{attrs:{name:"form-name",value:"project",hidden:""}}),e._v(" "),o("div",{staticClass:"mb-4"},[o("label",{staticClass:"block text-blue-dark font-bold mb-2",attrs:{for:"title"}},[e._v("Project Title")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"block p-1 bg-gray rounded w-full border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest",attrs:{type:"text",name:"title",placeholder:"Add middle out compression",required:""},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"flex flex-wrap"},[o("div",{staticClass:"mb-4 w-full md:w-1/2 pr-3"},[o("label",{staticClass:"block text-blue-dark font-bold mb-2",attrs:{for:"name"}},[e._v("Difficulty")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.difficulty,expression:"difficulty"}],staticClass:"appearance-none block p-1 bg-gray rounded w-full border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest",attrs:{name:"difficulty",required:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.difficulty=t.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Select One")]),e._v(" "),o("option",{attrs:{value:"easy"}},[e._v("Easy")]),e._v(" "),o("option",{attrs:{value:"intermediate"}},[e._v("Intermediate")]),e._v(" "),o("option",{attrs:{value:"hard"}},[e._v("Hard")])])]),e._v(" "),o("div",{staticClass:"mb-4 w-full md:w-1/2"},[o("label",{staticClass:"block text-blue-dark font-bold mb-2",attrs:{for:"languages"}},[e._v("Languages Used")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.languages,expression:"languages"}],staticClass:"block p-1 bg-gray rounded w-full border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest",attrs:{type:"text",name:"languages",placeholder:"HTML, CSS, JS",required:""},domProps:{value:e.languages},on:{input:function(t){t.target.composing||(e.languages=t.target.value)}}})])]),e._v(" "),o("div",{staticClass:"mb-4 w-full"},[o("label",{staticClass:"block text-blue-dark font-bold mb-2",attrs:{for:"url"}},[e._v("Github Link")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],staticClass:"block w-full p-1 bg-gray rounded border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest",attrs:{type:"text",name:"url",placeholder:"https://github.com/helpmebuildthis",required:""},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"mb-4 w-full"},[o("label",{staticClass:"block text-blue-dark font-bold mb-2",attrs:{for:"description"}},[e._v("Description")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"block p-1 w-full bg-gray rounded border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest",attrs:{rows:"8",name:"description",placeholder:"Building a world-changing middle out compression company. Need help implementing the neural net.",required:""},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"mb-8 md:w-8/12"},[o("label",{staticClass:"block text-blue-dark font-bold mb-2",attrs:{for:"email"}},[e._v("Email")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"block w-full p-1 bg-gray rounded border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest",attrs:{type:"email",name:"email",placeholder:"richard@piedpiper.com",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),e._m(0),e._v(" "),o("button",{staticClass:"bg-red py-1 px-8 shadow-md hover:shadow-lg text-white font-bold",attrs:{type:"submit"}},[e._v("\n          Send\n        ")])]),e._v(" "),e._m(1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"hidden"},[t("label",[this._v("Don’t fill this out if you're human: "),t("input",{attrs:{name:"bot-field"}})])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"lg:w-6/12"},[o("div",{staticClass:"mb-8"},[o("h2",{staticClass:"font-bold text-red mb-2"},[e._v("Your role")]),e._v(" "),o("p",{staticClass:"text-blue-light"},[e._v("\n            As the senior developer, there are some expectations that you'll be available (within windows specified by you at the beginning of each project), maintain an encouraging and professional attitude, and generally just be a good person to the junior developer you're working with. It's important to have a thorough conversation before any work begins to determine the junior developer's skill level and ability to complete the task. You are in no way required to work with everyone that requests your listing. If you feel there will be some personality or work ethic conflicts during the initial conversation, it is completely ok and expected for you to say 'I appreciate your interest, but I don't feel we'll be a good pair to work together,' or something to that effect.\n          ")])]),e._v(" "),o("h2",{staticClass:"font-bold text-red mb-2"},[e._v("Topics to Cover upfront")]),e._v(" "),o("ul",{staticClass:"list-disc text-blue-light ml-6"},[o("li",[e._v("Milestones and goals of the project")]),e._v(" "),o("li",[e._v("Timeline and due dates")]),e._v(" "),o("li",[e._v("Windows to pair program")]),e._v(" "),o("li",[e._v("Blackout dates (travel, busy, etc...)")])])])}],!1,null,"0388be61",null);t.default=component.exports}}]);