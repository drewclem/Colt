<template>
  <div>
    <li
      v-for="post in posts"
      :key="post.title"
      class="project-card p-6 md:p-12 shadow-md hover:shadow-lg mb-8 cursor-pointer"
    >
      <a :href="post.url">
        <div class="flex justify-between mb-2">
          <h2 class="text-blue-dark text-xl">{{post.title}}</h2>
          <p class="text-red text-sm my-auto">{{post.difficulty}}</p>
        </div>
        <ul class="text-blue-lightest list-none mb-2">
          <li class="inline-block mr-2">{{post.languages}}</li>
        </ul>
        <p class="text-blue-light">{{post.description}}</p>
      </a>
    </li>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",

  props: ["posts"]
};
</script>

<style scoped>
.project-card {
  transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.project-card:hover {
  transform: scale(1.005);
}
</style>