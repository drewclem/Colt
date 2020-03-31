<template>
  <div>
    <ul class="text-xs container mx-auto flex justify-end mt-2 px-4" v-if="$store.state.user">
      <li class="inline cursor-none text-blue-light hover:text-blue-dark mr-6">
        <nuxt-link to="/me" class="flex justify-between">
          <span v-html="userIcon" class="user-icon-wrapper fill-current text-red mr-2" />
          {{$store.state.user.email}}
        </nuxt-link>
      </li>
      <li class="inline text-blue-light hover:text-blue-dark cursor-pointer">
        <a @click="signout">Sign Out</a>
      </li>
    </ul>

    <ul class="text-xs container mx-auto flex justify-end mt-2 px-4" v-else>
      <li class="inline text-blue-light hover:text-blue-dark mr-6">
        <nuxt-link to="/signin">Sign In</nuxt-link>
      </li>
      <li class="inline text-blue-light hover:text-blue-dark">
        <nuxt-link to="/signup">Register</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "CxpUserIndicator",

  props: {
    user: {
      type: Object,
      required: true
    }
  },

  computed: {
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
.user-icon-wrapper > :first-child {
  width: 20px;
  height: 20px;
}
</style>