<template>
  <div class="container mx-auto p-4">
    <div class="md:w-8/12 md:mx-auto">
      <div class="flex justify-between mb-8">
        <h1 class="text-2xl lg:text-3xl text-red">Dashboard</h1>
        <button class="button-base button-red text-xs shadow-md hover:shadow-lg">
          <nuxt-link to="/addproject" class="text-white font-bold">Add a Project</nuxt-link>
        </button>
      </div>

      <div class="md:w-3/4">
        <div v-if="!userPosts.length > 0">
          <p
            class="text-blue-light mb-4"
          >Hey! It looks like you currently don't have any active posts. Click the 'Add a Project' button to add a new active listing.</p>

          <p class="text-blue-light">
            You can also check out active projects from other users
            <nuxt-link to="/projectboard" class="text-red underline">here</nuxt-link>
          </p>
        </div>

        <div class="v-else">
          <ul>
            <li v-for="post in userPosts" :key="post.doc_id">
              <project-card class="mx-auto" :post="post" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { StoreDB } from "@/plugins/firebase.js";
import ProjectCard from "~/components/dashboard/ProjectCard.vue";

export default {
  name: "Dashboard",

  middleware: "authenticated",

  components: {
    ProjectCard
  },

  data() {
    return {
      posts: []
    };
  },

  computed: {
    ...mapState(["user"]),

    userPosts: function() {
      let userPosts = this.posts.filter(post => {
        if (post.user_id === this.user.uid) {
          return post;
        }
      });

      return userPosts;
    }
  },

  async asyncData({ params }) {
    const querySnapshot = await StoreDB.collection("posts").get();

    const posts = querySnapshot.docs.map(documentSnapshot => {
      let doc = documentSnapshot;
      let post = documentSnapshot.data();

      return {
        doc_id: doc.id,
        title: post.title,
        languages: post.languages,
        active: post.active,
        user_id: post.user_id
      };
    });
    return { posts };
  }
};
</script>