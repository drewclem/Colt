<template>
  <div class="container mx-auto p-4 mt-12">
    <div class="md:w-8/12 md:mx-auto">
      <h1 class="text-2xl lg:text-3xl text-red mb-8">Dashboard</h1>
      <ul>
        <project-card :user-posts="userPosts" class="mx-auto" />
      </ul>
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
    const querySnapshot = await StoreDB.collection("posts")
      .where("active", "==", true)
      .get();

    const posts = querySnapshot.docs.map(documentSnapshot => {
      let post = documentSnapshot.data();

      return {
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