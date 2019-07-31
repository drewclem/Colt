<template>
  <div class="container mx-auto p-4 mt-12">
    <div class="md:w-8/12 mx-auto">

      <h1 class="text-3xl text-red mb-8">Add a Project</h1>

      <form class="md:w-7/12">
        <div class="mb-4">
          <label class="block text-blue-dark font-bold mb-2" for="name">Project Title</label>
          <input type="text" class="border p-1 border-blue-lightest rounded w-full" name="project-title">
        </div>

        <div class="mb-4">
          <label class="block text-blue-dark font-bold mb-2" for="name">Difficulty</label>
          <select
            class="border p-1 border-blue-lightest rounded"
            name="difficulty">
            <option value="easy">Easy</option>
            <option value="intermediate">Intermediate</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div class="mb-4">
          <label class="block text-blue-dark font-bold mb-2" for="name">Languages Used</label>
          <input type="text" class="border p-1 border-blue-lightest rounded" name="languages-used">
        </div>

        <button type="submit" class="bg-red py-1 px-8 shadow-md hover:shadow-lg text-white font-bold">Send</button>
      </form>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddProject'
  }
</script>

<style scoped>

</style>