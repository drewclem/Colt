<template>
  <div class="container mx-auto p-4 mt-12">
    <div class="md:w-8/12 md:mx-auto">
      <h1 class="text-2xl lg:text-3xl text-red mb-8">Add a Project</h1>

      <div class="lg:flex">
        <form
          class="lg:w-6/12 lg:mr-8 mb-8"
          name="project"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          v-on:submit="submitProject"
        >
          <input name="form-name" value="project" hidden />

          <div class="mb-4">
            <label class="block text-blue-dark mb-2 font-bold" for="title">Project Title</label>
            <input
              v-model="title"
              type="text"
              class="block p-1 bg-gray w-full border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"
              name="title"
              required
            />
          </div>

          <div class="flex flex-wrap">
            <div class="mb-4 w-full md:w-1/2 pr-3">
              <label class="block text-blue-dark font-bold mb-2" for="name">Difficulty</label>
              <select
                v-model="difficulty"
                class="appearance-none block p-1 bg-gray w-full border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"
                name="difficulty"
                required
              >
                <option value disabled selected>Select One</option>
                <option value="easy">Easy</option>
                <option value="intermediate">Intermediate</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div class="mb-4 w-full md:w-1/2">
              <label class="block text-blue-dark font-bold mb-2" for="languages">Tech Languages</label>
              <input
                v-model="languages"
                type="text"
                class="block p-1 bg-gray w-full border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"
                name="languages"
                required
              />
            </div>
          </div>

          <div class="mb-4 w-full">
            <label class="block text-blue-dark -mb-1 font-bold mb-2" for="url">Github Link</label>
            <p class="text-blue-light mb-2">
              <small>We use this to link your posting to your project.</small>
            </p>
            <input
              v-model="url"
              type="text"
              class="block w-full p-1 bg-gray border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"
              name="url"
              required
            />
          </div>

          <div class="mb-4 w-full">
            <label class="block text-blue-dark font-bold mb-2" for="description">Description</label>
            <textarea
              v-model="description"
              class="block p-1 w-full bg-gray border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"
              rows="8"
              name="description"
              required
            ></textarea>
          </div>

          <div class="mb-8 md:w-8/12">
            <label class="block text-blue-dark font-bold mb-2" for="email">Email</label>
            <input
              v-model="email"
              type="email"
              class="block w-full p-1 bg-gray border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"
              name="email"
              required
            />
          </div>

          <p class="hidden">
            <label>
              Don’t fill this out if you're human:
              <input name="bot-field" />
            </label>
          </p>

          <button type="submit" class="button-base button-red shadow-md hover:shadow-lg">Send</button>
        </form>
        <div class="lg:w-6/12">
          <div class="mb-8">
            <h2 class="font-bold text-red mb-2">Your role</h2>
            <p
              class="text-blue-light"
            >As the senior developer, there are some expectations that you'll be available (within windows specified by you at the beginning of each project), maintain an encouraging and professional attitude, and generally just be a good person to the junior developer you're working with. It's important to have a thorough conversation before any work begins to determine the junior developer's skill level and ability to complete the task. You are in no way required to work with everyone that requests your listing. If you feel there will be some personality or work ethic conflicts during the initial conversation, it is completely ok and expected for you to say 'I appreciate your interest, but I don't feel we'll be a good pair to work together,' or something to that effect.</p>
          </div>
          <h2 class="font-bold text-red mb-2">Topics to Cover upfront</h2>
          <ul class="list-disc text-blue-light ml-6">
            <li>Milestones and goals of the project</li>
            <li>Timeline and due dates</li>
            <li>Windows to pair program</li>
            <li>Blackout dates (travel, busy, etc...)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { StoreDB } from "@/plugins/firebase.js";

export default {
  name: "AddProject",

  middleware: "authenticated",

  data: function() {
    return {
      active: "",
      title: "",
      difficulty: "",
      languages: "",
      url: "",
      description: "",
      email: ""
    };
  },

  methods: {
    submitProject: function(e) {
      StoreDB.collection("posts")
        .add({
          active: false,
          title: this.title,
          difficulty: this.difficulty,
          languages: this.languages,
          url: this.url,
          description: this.description,
          email: this.email
        })
        .then(function() {
          window.location.replace("/project-thanks");
        });

      e.preventDefault();
    }
  }
};
</script>

<style scoped>
</style>