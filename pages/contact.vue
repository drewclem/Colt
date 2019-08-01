<template>
  <div class="container mx-auto p-4 mt-12">
    <div class="md:w-8/12 md:mx-auto">

      <h1 class="text-3xl text-red mb-8">Contact Us</h1>

    <div class="lg:flex">
      <form class="lg:w-6/12 lg:mr-8 mb-8" name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true" netlify-honeypot="bot-field" action="/contact-thanks">
        <div class="mb-4">
          <label class="block text-blue-dark font-bold mb-2" for="name">Name</label>
          <input type="text" class="block p-1 bg-gray rounded w-full border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest" name="name" placeholder="Dinesh Chungtai" required>
        </div>

        <div class="mb-4">
          <label class="block text-blue-dark font-bold mb-2" for="email">Email</label>
          <input type="text" class="block p-1 bg-gray rounded w-full border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest" name="email" placeholder="dinesh@piedpiper.com" required>
        </div>

        <div class="mb-8">
          <label class="block text-blue-dark font-bold mb-2" for="comments">Comments</label>
          <textarea rows="8" class="block p-1 bg-gray rounded w-full border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest" name="comments" placeholder="I love this app! I can finally find other developers to work with other than Gilfoyle. He still won't turn that bitcoin notification off!" required></textarea>
        </div>
          
        <p class="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>

        <button type="submit" class="bg-red py-1 px-8 shadow-md hover:shadow-lg text-white font-bold">Send</button>
      </form>
      <div class="lg:w-6/12">
        <h2 class="text-red mb-2">Feedback, Suggestions, Comments</h2>
        <p class="text-blue-light mb-2">I want to make ColtXP the absolute best that it can be. If you have any feedback or input that you feel will improve the user experience please do not hesitate to send it over! See a bug happening? Send it over! Want to contribute to ColtXP? I am absolutely open to allowing others to help build ColtXP with me.
        </p>
        <p class="text-blue-light">ColtXP started as a small project to learn building in React, but the more I built it the more invested I became in its core mission. I am not an expert React developer and in fact, this is my first React app, so please keep this in mind when sending any feedback, suggestions, or comments.
        </p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contact'
  }
</script>

<style scoped>

</style>