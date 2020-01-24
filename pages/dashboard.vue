<template>
  <div class="container mx-auto p-4 mt-12">
    <div class="md:w-8/12 md:mx-auto">
      <h1 class="text-2xl lg:text-3xl text-red mb-8">Dashboard</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",

  middleware: "authenticated",

  computed: {
    ...mapGetters({
      user: "user"
    })
  }
};
</script>

<style scoped>
</style>