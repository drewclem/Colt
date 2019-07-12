<template>
  <div class="md:w-5/12 lg:w-3/12 mx-auto mt-12 p-8 shadow-xl">
    <h1 class="text-red text-3xl mb-4">Sign Up</h1>
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
          for="username">Username</label>
        <input
          class="border border-blue-lightest rounded w-full p-1"
          type="text"
          id="username"
          placeholder="username"
          v-model="username"
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
        v-on:click="register"
      >
        Sign Up
      </button>
    </form>

    <p class="text-xs text-blue-light">Already have an account? Sign in
      <nuxt-link
        to="/signin"
        class="font-bold text-red"
      >
        Here.
      </nuxt-link>
    </p>
  </div>
</template>

<script>
  import { auth } from '~/plugins/firebase'

  export default {
    name: 'signup',

    data: function() {
      return {
        email: '',
        username: '',
        password:'',
      };
    },
    
    methods: {
      register: function(e) {
        auth.createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            alert(`Account created for ${user.email}`);
          },
          err => {
            alert(err.message);
          })

        e.preventDefault();
      }
    }
  }
</script>