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

    <div class="p-12 shadow-lg hover:shadow-xl project-card mb-8">
      <nuxt-link to="/">
        <h2 class="text-blue-dark text-xl mb-2">Fix mobile header</h2>
        <ul class="text-red list-none mb-2">
          <li class="inline-block mr-2">GatsbyJS</li>
          <li class="inline-block mr-2">Tailwind CSS</li>
        </ul>
        <p class="text-blue-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet id donec ultrices tincidunt arcu. Etiam dignissim diam quis enim lobortis scelerisque. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Lorem ipsum dolor sit amet consectetur adipiscing elit. Vitae aliquet nec ullamcorper sit amet risus nullam eget. </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProjectBoard'
  }
</script>

<style scoped>
.project-card{
  transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)
}
.project-card:hover{
  transform: scale(1.01)
}

</style>