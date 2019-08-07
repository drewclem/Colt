<template>
  <div>
    <li
      v-for="post in posts"
      :key="post.title"
      class="project-card p-6 md:p-12 shadow-md hover:shadow-lg mb-8 cursor-pointer"
    >
      <a :href="post.url">
        <h2 class="text-blue-dark text-xl mb-3">{{post.title}}</h2>
        <ul class="text-red list-none mb-3">
          <li class="inline-block mr-2">{{post.languages}}</li>
        </ul>
        <p class="text-blue-light">{{post.description}} </p>
      </a>
    </li>
  </div>
</template>

<script>
  export default {
    name: 'ProjectCard',

    props: [
      'posts'
    ]
  }
</script>

<style scoped>
.project-card{
  transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)
}
.project-card:hover{
  transform: scale(1.005)
}

</style>