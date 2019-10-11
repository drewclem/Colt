<template>
  <div id="app" class="text-blue-default antialiased leading-relaxed pb-20 relative">
    <cxp-header />
      <main>
        <nuxt />
      </main>
    <cxp-footer />
  </div>
</template>

<script>
import CxpHeader from '~/components/global/CxpHeader.vue'
import CxpFooter from '~/components/global/CxpFooter.vue'

export default {
  components: {
    CxpHeader,
    CxpFooter
  },

  data() {
    return {
      params: {},
    }
  }
}
</script>
