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
              class="text-blue-light hover:text-blue-dark p-2 md:mr-3"
            >Project Board</nuxt-link>

            <nuxt-link
              to="/contribute"
              class="text-blue-light hover:text-blue-dark p-2 md:mr-3"
            >Contribute</nuxt-link>

            <nuxt-link to="/contact" class="text-blue-light hover:text-blue-dark py-2 pl-2">Contact</nuxt-link>
          </div>
        </nav>
      </header>
    </div>
    <ul class="text-xs container mx-auto flex justify-end mt-2 px-4">
      <template v-if="$store.state.user">
        <nuxt-link to="/me">
          <li
            class="inline cursor-none text-blue-light hover:text-blue-dark flex justify-between mr-6"
          >
            <span v-html="userIcon" class="user-icon-wrapper fill-current text-red mr-2" />
            <span>{{$store.state.user.email}}</span>
          </li>
        </nuxt-link>
        <li class="inline text-blue-light hover:text-blue-dark cursor-pointer">
          <a @click="signout">Sign Out</a>
        </li>
      </template>
      <template v-else>
        <li class="inline text-blue-light hover:text-blue-dark mr-6">
          <nuxt-link to="/signin">Sign In</nuxt-link>
        </li>
        <li class="inline text-blue-light hover:text-blue-dark">
          <nuxt-link to="/signup">Register</nuxt-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";

export default {
  name: "CxpHeader",

  computed: {
    ...mapGetters({
      user: "user"
    }),

    userIcon() {
      return require("~/assets/images/icons/person-24px.svg");
    }
  },

  methods: {
    signout: function(e) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        });

      e.preventDefault();
    }
  }
};
</script>

<style scoped>
nav a {
  transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.user-icon-wrapper > :first-child {
  width: 20px;
  height: 20px;
}
</style>