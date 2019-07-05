<template>
  <div class="bg-gray">
    <header class="container text-sm md:text-lg mx-auto font-display py-2 px-4">
        <nav
          class="flex justify-between"
        >
          <div>
            <nuxt-link
              to="/"
              class="font-bold"
            >
              ColtXP
            </nuxt-link>
          </div>

          <div>
            <nuxt-link
              to="/projectboard"
              class="text-blue-light hover:text-blue-dark p-2 md:mr-3"
            >
              Project Board
            </nuxt-link>

            <nuxt-link
              to="/addproject"
              class="text-blue-light hover:text-blue-dark p-2 md:mr-3"
            >
              Add a Project
            </nuxt-link>

            <nuxt-link
              to="/contribute"
              class="text-blue-light hover:text-blue-dark p-2 md:mr-3"
            >
              Contribute
            </nuxt-link>

            <nuxt-link
              to="/contact"
              class="text-blue-light hover:text-blue-dark p-2"
            >
              Contact
            </nuxt-link>
          </div>
        </nav>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'CxpHeader'
  }
</script>

<style scoped>
nav a {
  transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)
}
</style>