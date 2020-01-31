<template>
  <div class="md:w-5/12 lg:w-3/12 -mt-10 mx-auto p-8 sm:shadow-xl">
    <h1 class="text-red text-3xl mb-4">Sign In</h1>
    <form class="mb-4" @submit.prevent="emailLogin">
      <div class="mb-4">
        <label class="block text-blue-dark font-bold mb-2" for="email">Email</label>
        <validation-provider name="email" rules="email" v-slot="{errors}" mode="lazy">
          <input
            class="block w-full p-1 bg-gray border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"
            type="text"
            id="email"
            v-model="email"
          />
          <span class="text-xs text-red">{{ errors[0] }}</span>
        </validation-provider>
      </div>
      <div class="mb-4">
        <label class="block text-blue-dark font-bold mb-2" for="password">Password</label>
        <input
          class="block w-full p-1 bg-gray border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"
          type="password"
          id="password"
          v-model="password"
        />
      </div>
      <div v-if="error" class="mb-2">
        <p v-text="error" class="text-red text-xs" />
      </div>
      <button class="mt-4 button-base button-red w-full shadow-md hover:shadow-lg">Sign In</button>
    </form>

    <div class="text-xs text-blue-light">
      <p>
        Don't have an account? Create one
        <nuxt-link to="/signup" class="text-red font-bold">Here</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  name: "signin",

  components: {
    ValidationProvider
  },

  data: function() {
    return {
      email: "",
      password: "",
      error: null,
      value: ""
    };
  },

  methods: {
    emailLogin: function(e) {
      this.error = null;

      this.$store
        .dispatch("signInWithEmail", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.email = "";
          this.password = "";
          this.$router.push("/me");
        })
        .catch(e => {
          let error = e.message;

          if (error) {
            this.error = error;
          }
        });
    }
  }
};
</script>