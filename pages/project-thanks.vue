<template>
  <div class="container mx-auto p-4 mt-12">
    <div class="md:w-8/12 md:mx-auto">
      <h1 class="text-3xl text-red mb-8">Thanks for listing!</h1>

      <div class="lg:flex">
        <div class="lg:w-6/12">
          <h2 class="text-xl text-blue-dark">We'll review your project listing and notify you when it becomes active</h2>
        </div>
        <div class="lg:w-6/12">
          <div class="mb-8">
            <h2 class="font-bold text-red mb-2">Your role</h2>
            <p class="text-blue-light">
              As the senior developer, there are some expectations that you'll be available (within windows specified by you at the beginning of each project), maintain an encouraging and professional attitude, and generally just be a good person to the junior developer you're working with. It's important to have a thorough conversation before any work begins to determine the junior developer's skill level and ability to complete the task. You are in no way required to work with everyone that requests your listing. If you feel there will be some personality or work ethic conflicts during the initial conversation, it is completely ok and expected for you to say 'I appreciate your interest, but I don't feel we'll be a good pair to work together,' or something to that effect.
            </p>
          </div>
          <h2 class="font-bold text-red mb-2">Topics to Cover upfront</h2>
          <ul class="list-disc text-blue-light ml-6">
            <li>Milestones and goals of the project</li>
            <li>Timeline and due dates</li>
            <li>Windows to pair program</li>
            <li>Blackout dates (travel, busy, etc...)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {StoreDB} from '@/plugins/firebase.js'

  export default {
    name: 'AddProject',

    data: function() {
      return {
        active: '',
        title: '',
        difficulty: '',
        languages: '',
        url: '',
        description: '',
        email: ''
      }
    },

    methods: {
      submitProject: function(e) {
        StoreDB.collection('posts').add({
          active: false,
          title: this.title,
          difficulty: this.difficulty,
          languages: this.languages,
          url: this.url,
          description: this.description,
          email: this.email
        })
        .then(function(docRef) {
          console.log(docRef.id)
        })

        e.preventDefault();
      }
    }
  }
</script>

<style scoped>

</style>