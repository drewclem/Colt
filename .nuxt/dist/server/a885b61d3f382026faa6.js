exports.ids=[6],exports.modules={44:function(t,e,o){"use strict";o.r(e);var l=o(10),r={name:"AddProject",data:function(){return{active:"",title:"",difficulty:"",languages:"",url:"",description:"",email:""}},methods:{submitProject:function(t){l.a.collection("posts").add({active:!1,title:this.title,difficulty:this.difficulty,languages:this.languages,url:this.url,description:this.description,email:this.email}).then((function(t){console.log(t.id)})),t.preventDefault()}}},n=o(1);var component=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"container mx-auto p-4 mt-12"},[this._ssrNode('<div class="md:w-8/12 md:mx-auto" data-v-1091751a><h1 class="text-2xl lg:text-3xl text-red mb-8" data-v-1091751a>Thanks for listing your project!</h1> <div class="lg:flex" data-v-1091751a><div class="lg:w-6/12" data-v-1091751a><h2 class="text-xl text-blue-dark mb-4 md:mr-4" data-v-1091751a>We\'ll review your project listing and notify you when it becomes active.</h2></div> <div class="lg:w-6/12" data-v-1091751a><div class="mb-8" data-v-1091751a><h2 class="font-bold text-red mb-2" data-v-1091751a>Your role</h2> <p class="text-blue-light" data-v-1091751a>\n            As the senior developer, there are some expectations that you\'ll be available (within windows specified by you at the beginning of each project), maintain an encouraging and professional attitude, and generally just be a good person to the junior developer you\'re working with. It\'s important to have a thorough conversation before any work begins to determine the junior developer\'s skill level and ability to complete the task. You are in no way required to work with everyone that requests your listing. If you feel there will be some personality or work ethic conflicts during the initial conversation, it is completely ok and expected for you to say \'I appreciate your interest, but I don\'t feel we\'ll be a good pair to work together,\' or something to that effect.\n          </p></div> <h2 class="font-bold text-red mb-2" data-v-1091751a>Topics to Cover upfront</h2> <ul class="list-disc text-blue-light ml-6" data-v-1091751a><li data-v-1091751a>Milestones and goals of the project</li> <li data-v-1091751a>Timeline and due dates</li> <li data-v-1091751a>Windows to pair program</li> <li data-v-1091751a>Blackout dates (travel, busy, etc...)</li></ul></div></div></div>')])}),[],!1,(function(t){}),"1091751a","5a58333a");e.default=component.exports}};