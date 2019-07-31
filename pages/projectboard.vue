<template>
  <div class="container mx-auto p-4 mt-12">
    <div class="flex justify-between mb-8">
      <h1 class="text-3xl text-red">Available Projects</h1>
      <button class="bg-red py-0 px-4 text-xs shadow-md hover:shadow-lg"> 
        <nuxt-link
          to="/addproject"
          class="text-white font-bold">Add a Project
        </nuxt-link>
      </button>
    </div>

    <ul>
      <project-card
        :posts="posts"
        class="mx-auto"
        >
      </project-card>
    </ul>
  </div>
</template>

<script>
  import {StoreDB} from '@/plugins/firebase.js'
  import ProjectCard from '~/components/ProjectCard.vue'
  
  export default {
    name: 'ProjectBoard',

    components: {
      ProjectCard
    },

    data() {
      return {
        posts: []
      }
    },

    async asyncData({params}) {
      const querySnapshot = await StoreDB.collection("posts").get()
      
      const posts = querySnapshot.docs.map(documentSnapshot => {
        let post = documentSnapshot.data()

        return {
          title: post.title,
          description: post.description,
          difficulty: post.difficulty,
          languages: post.languages,
          url: post.url,
          active: post.active
        }
      })

      return { posts }
    }
  }
</script>