<template>
  <div class="md:w-5/12 lg:w-3/12 -mt-10 mx-auto p-8 sm:shadow-xl">
    <h1 class="text-red text-3xl mb-4">Sign Up</h1>

    <form class="mb-4">
      <div class="mb-4">
        <label class="block font-bold mb-2" for="email">Email</label>
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
        <label class="block font-bold mb-2" for="username">Username</label>
        <validation-provider name="username" rules="required" v-slot="{errors}" mode="lazy">
          <input
            class="block w-full p-1 bg-gray border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"
            type="text"
            id="username"
            v-model="username"
          />
          <span class="text-xs text-red">{{ errors[0] }}</span>
        </validation-provider>
      </div>

      <div class="mb-4">
        <label class="block font-bold mb-2" for="password">Password</label>
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
      <button
        class="mt-4 button-base button-red shadow-md hover:shadow-lg w-full"
        v-on:click="register"
      >Sign Up</button>
    </form>

    <p class="text-xs text-blue-light">
      Already have an account? Sign in
      <nuxt-link to="/signin" class="font-bold text-red">Here.</nuxt-link>
    </p>
  </div>
</template>

<script>
import { auth } from "~/plugins/firebase";
import { ValidationProvider } from "vee-validate";

export default {
  name: "signup",

  components: {
    ValidationProvider
  },

  data: function() {
    return {
      email: "",
      username: "",
      password: "",
      error: null
    };
  },

  methods: {
    register: function(e) {
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(data => {
          data.user.updateProfile({
            displayName: this.username
          });
        })
        .then(() => {
          this.$router.push("/me");
        })
        .catch(e => {
          let error = e.message;

          if (error) {
            this.error = error;
          }
        });

      e.preventDefault();
    }
  }
};
</script>