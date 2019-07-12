<template>
  <div class="md:w-5/12 lg:w-3/12 mx-auto mt-12 p-8 shadow-xl">
    <h1 class="text-red text-3xl mb-4">Sign In</h1>
    <form class="mb-4">
      <div class="mb-4">
        <label 
          class="block font-bold mb-2"
          for="email">Email</label>
        <input
          class="border border-blue-lightest rounded w-full p-1"
          type="text"
          id="email"
          placeholder="email"
          v-model="email"
        >
      </div>
      <div class="mb-4">
        <label 
          class="block font-bold mb-2"
          for="password">Password</label>
        <input
          class="border border-blue-lightest rounded w-full p-1"
          type="password"
          id="password"
          placeholder="password"
          v-model="password"
        >
      </div>
      <button
        class="mt-4 bg-red py-1 px-8 shadow-md hover:shadow-lg text-white font-bold"
        v-on:click="signin"
      >
        Sign In
      </button>
    </form>

    <div class="text-xs text-blue-light">
      <p>Don't have an account? Create one
        <nuxt-link
          to="/signup"
          class="text-red font-bold"
        >
          Here
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
  import { auth } from '~/plugins/firebase'

  export default {
    name: 'signin',

    data: function() {
      return {
        email: '',
        password: '',
      }
    },

    methods: {
      signin: function(e) {
        auth.signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            alert("You're signed in!");
          },
          err => {
            alert(err.message);
          })
        e.preventDefault();
      }
    }
  }
</script>

<style scoped>

</style>