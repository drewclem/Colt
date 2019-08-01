<template>
  <div class="md:w-5/12 lg:w-3/12 mx-auto mt-12 p-8 shadow-xl">
    <h1 class="text-red text-3xl mb-4">Sign In</h1>
    <form class="mb-4">
      <div class="mb-4">
        <label 
          class="block font-bold mb-2"
          for="email">Email</label>
        <input
          class="block w-full p-1 bg-gray rounded border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"
          type="text"
          id="email"
          placeholder="gilfoyle@piedpiper.com"
          v-model="email"
        >
      </div>
      <div class="mb-4">
        <label 
          class="block font-bold mb-2"
          for="password">Password</label>
        <input
          class="block w-full p-1 bg-gray rounded border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"
          type="password"
          id="password"
          placeholder="b3tt3rth4nd1n35h"
          v-model="password"
        >
      </div>
      <button
        class="mt-4 bg-red py-1 px-8 shadow-md hover:shadow-lg text-white font-bold"
        v-on:click="emailLogin"
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
import {auth} from '@/plugins/firebase.js'

  export default {
    name: 'signin',

    data: function() {
      return {
        email: '',
        password: '',
      }
    },

    methods: {
      emailLogin: function(e) {
        auth.signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            alert("you're signed in!");
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