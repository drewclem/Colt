<template>
  <div class="hero-wrapper pt-12 -mt-24">
    <div class="container mx-auto text-blue-dark p-4">
      <div
        class="relative text-center md:text-left xl:w-11/12 xl:mx-auto md:flex mb-12 md:mb-24 mt-4 md:mt-8"
      >
        <div class="md:w-3/4 mt-6 mb-12 lg:mt-12">
          <h1 class="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Guided Open
            <br />Source Learning
          </h1>
          <p
            class="text-blue-lightest md:w-3/4"
          >Gain real-world experience working through open source issues with senior developers. Sign up and grab your next OS project!</p>
          <button class="button-base mt-6 button-red shadow-md hover:shadow-lg">
            <nuxt-link to="/signup">Create an Account</nuxt-link>
          </button>
        </div>
        <div class="w-full sm:w-8/12 mx-auto px-8">
          <img class src="~/assets/images/coltInfo.png" />
        </div>
      </div>

      <div class="md:flex">
        <div class="pr-8 md:w-5/12 text-left md:text-right md:mt-12 mb-12 md:mb-12">
          <h2 class="text-2xl md:text-4xl font-bold mb-6 md:mb-8">
            Check out the
            <span class="text-red">Project Board</span>
            and get started on your open source journey.
          </h2>
          <button class="button-base button-red shadow-md hover:shadow-lg">
            <nuxt-link to="/projectboard">View Projects</nuxt-link>
          </button>
        </div>

        <div class="flex-1 font-body mb-12">
          <h3 class="font-display text-2xl text-red font-bold mb-4">Why ColtXP?</h3>
          <div class="text-blue-light">
            <p
              class="mb-2"
            >One of the definitions of a colt is a 'young or inexperienced person.' Historically, and still in some trades today, the only way to gain experience and graduate from being a 'colt' was to work with an already skilled tradesman. The mentor/apprentice relationship was and is important.</p>
            <p
              class="mb-2"
            >One thing about the dev community that is truly inspirational, is the willingness of other developers to extend a helping hand to people who are passionate and determined to learn their craft. From this relationship between mentor and apprentice my goal became building a place for those eager to learn and those willing to teach, to meet.</p>
            <p
              class="mb-2"
            >That was the birth of ColtXP. A place for new and aspiring developers to join forces with senior developers to work on live real-world applications! You will no longer have to turn in resumes with blank experience fields. Now you can link up with senior developers, or list a project as a senior developer, and build a true one-on-one learning experience in the world of open source!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero-wrapper {
  background-image: url(../assets/images/headerbg.png);
  background-size: contain;
  background-repeat: no-repeat;
}

@media (max-width: 768px) {
  .hero-wrapper {
    background-size: cover;
    background-position-y: -600px;
  }
}
</style>