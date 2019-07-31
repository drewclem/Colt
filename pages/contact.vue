<template>
  <div class="container mx-auto p-4 mt-12">
    <div class="md:w-8/12 md:mx-auto">

      <h1 class="text-3xl text-red mb-8">Contact Us</h1>

      <form class="md:w-5/12">
        <div class="mb-4">
          <label class="block text-blue-dark font-bold mb-2" for="name">Name</label>
          <input type="text" class="border p-1 border-blue-lightest rounded w-full" name="name">
        </div>

        <div class="mb-4">
          <label class="block text-blue-dark font-bold mb-2" for="email">Email</label>
          <input type="text" class="border p-1 border-blue-lightest rounded w-full" name="email">
        </div>

        <div class="mb-4">
          <label class="block text-blue-dark font-bold mb-2" for="comments">Comments</label>
          <textarea row="8" class="border p-1 border-blue-lightest rounded w-full" name="comments"></textarea>
        </div>

        <button type="submit" class="bg-red py-1 px-8 shadow-md hover:shadow-lg text-white font-bold">Send</button>
      </form>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contact'
  }
</script>

<style scoped>

</style>