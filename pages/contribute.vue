<template>
  <div class="container mx-auto p-4">
    <div class="md:flex mb-10 md:mb-20">
      <div class="flex-1 font-bold md:pr-10 mb-10">
        <h1 class="text-2xl lg:text-3xl text-red mb-4">Contribute to Colt</h1>
        <p
          class="text-blue-light font-light text-xl mt-12"
        >The best resources for learning are the ones that have a strong community behind them. That’s why at ColtXP, we encourage everyone to contribute in whatever way fits their lives best. Here you’ll find some quick guides on some of the ways you can help better the ColtXP community.</p>
      </div>
      <div class="flex-1 w-10/12 mx-auto">
        <img src="~/assets/images/mentor.png" class="mb-8 md:pr-12" />
      </div>
    </div>

    <div class="mb-12 lg:w-10/12 lg:mx-auto">
      <h2 class="text-red text-2xl font-bold mb-6">How can you help?</h2>
      <div class="md:flex mb-8">
        <div class="pr-10 mb-8 flex-1">
          <h3 class="font-bold text-blue-dark text-xl mb-4">List Projects as a Mentor</h3>
          <p class="text-blue-light">
            The best way to help us grow is to help others grow in their journey as developers! Have an open source project you're working on you think a junior could jump into and learn a few things? List it here!
            <br />
            <small>All listings are reviewed before being published</small>
          </p>
        </div>

        <div class="flex-1">
          <h3 class="font-bold text-blue-dark text-xl mb-4">Complete Github Issues</h3>
          <p class="text-blue-light">
            We try to stay as self-maintained as possible, but occasionally we'll have open issues anyone is welcome to tackle. See something that needs some tweaking or fixing? Open a
            <a
              href="https://github.com/drewclem/Colt/issues"
              target="_blank"
              class="text-red underline"
            >Github Issue</a> and become a contributor!
          </p>
        </div>
      </div>

      <div class="md:flex">
        <div class="pr-10 mb-8 flex-1">
          <h3 class="font-bold text-blue-dark text-xl mb-4">Contribute through Patreon</h3>
          <p class="text-blue-light">
            Do you feel strongly about the mission of ColtXP but dont' have the time to contribute through listing a project or taking open issues? Consider donating through our
            <a
              href="https://www.patreon.com/coltxp"
              class="text-red underline"
              target="_blank"
            >Patreon</a> to help ColtXP reach as many people as possible!
          </p>
        </div>

        <div class="flex-1">
          <h3 class="font-bold text-blue-dark text-xl mb-4">Spread the word</h3>
          <p
            class="text-blue-light"
          >Tell your friends. Tell your co-workers. Tell your boss. The more people that know ColtXP exists, the more it can help those who need it!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contribute"
};
</script>

<style scoped>
</style>