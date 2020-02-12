<template>
  <div>
    <a :href="post.url">
      <div class="flex justify-between mb-2">
        <h2 class="text-blue-dark text-xl">{{post.title}}</h2>
        <p class="text-red text-sm">{{post.difficulty}}</p>
      </div>
      <ul class="text-blue-lightest list-none mb-2">
        <li class="inline-block mr-2">{{post.languages}}</li>
      </ul>
      <p class="text-blue-light">{{post.description}}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",

  props: {
    post: {
      type: Object,
      required: true
    }
  }
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