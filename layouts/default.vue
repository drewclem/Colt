<template>
  <div id="app" class="text-blue-default antialiased leading-relaxed">
    <div class="wrapper">
      <cxp-header class="absolute w-full" />
      <main class="pt-20 md:pt-24 lg:pt-32">
        <nuxt />
      </main>
      <div class="push"></div>
    </div>
    <cxp-footer />
  </div>
</template>

<script>
import CxpHeader from "~/components/global/CxpHeader.vue";
import CxpFooter from "~/components/global/CxpFooter.vue";

export default {
  components: {
    CxpHeader,
    CxpFooter
  },

  data() {
    return {
      params: {}
    };
  }
};
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
  margin-bottom: -98px;
}

.push {
  height: 70px;
}
</style>
