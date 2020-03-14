<template>
  <div>
    <div class="bg-gray">
      <header class="container mx-auto text-sm md:text-lg font-display py-2 px-4">
        <nav class="flex justify-between">
          <div>
            <nuxt-link to="/" class="text-blue-dark font-bold">ColtXP</nuxt-link>
          </div>

          <div>
            <nuxt-link
              to="/projectboard"
              class="text-blue-light hover:text-blue-dark p-2 md:mr-8"
            >Project Board</nuxt-link>

            <nuxt-link
              to="/contribute"
              class="text-blue-light hover:text-blue-dark p-2 md:mr-8"
            >Contribute</nuxt-link>

            <nuxt-link to="/contact" class="text-blue-light hover:text-blue-dark py-2 pl-2">Contact</nuxt-link>
          </div>
        </nav>
      </header>
    </div>

    <cxp-user-indicator :user="user" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CxpUserIndicator from "~/components/global/CxpUserIndicator.vue";

export default {
  name: "CxpHeader",

  components: {
    CxpUserIndicator
  },

  computed: {
    ...mapGetters({
      user: "user"
    })
  }
};
</script>

<style scoped>
nav a {
  transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>