<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between mb-8">
      <h1 class="text-2xl lg:text-3xl text-red">Available Projects</h1>
      <button class="button-base button-red text-xs shadow-md hover:shadow-lg">
        <nuxt-link to="/addproject" class="text-white font-bold">Add a Project</nuxt-link>
      </button>
    </div>

    <ul>
      <li
        v-for="post in posts"
        :key="post.doc_id"
        class="project-card p-6 md:p-12 shadow-md hover:shadow-lg mb-8 cursor-pointer"
      >
        <project-card :post="post" />
      </li>
    </ul>
  </div>
</template>

<script>
import { StoreDB } from "@/plugins/firebase.js";
import ProjectCard from "~/components/ProjectCard.vue";

export default {
  name: "ProjectBoard",

  components: {
    ProjectCard
  },

  data() {
    return {
      posts: []
    };
  },

  async asyncData({ params }) {
    const querySnapshot = await StoreDB.collection("posts")
      .where("active", "==", true)
      .get();

    const posts = querySnapshot.docs.map(documentSnapshot => {
      let doc = documentSnapshot;
      let post = documentSnapshot.data();

      return {
        doc_id: doc.id,
        title: post.title,
        description: post.description,
        difficulty: post.difficulty,
        languages: post.languages,
        url: post.url,
        active: post.active
      };
    });

    return { posts };
  }
};
</script>