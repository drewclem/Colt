<template>
  <div class="bg-gray p-4 mt-6 md:mt-10">
    <p class="text-center text-blue-light">Copyright © {{year}} ColtXP</p>
  </div>
</template>

<script>
export default {
  name: "CxpFooter",
  data() {
    return { year: new Date().getFullYear() };
  }
};
</script>

<style scoped>
</style>