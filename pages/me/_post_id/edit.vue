<template>
  <div class="container mx-auto p-4">
    <div class="md:w-8/12 md:mx-auto">
      <h1 class="text-2xl lg:text-3xl text-red mb-8">Edit</h1>

      <div class="lg:flex">
        <form
          class="lg:w-6/12 lg:mr-8 mb-8"
          name="edit-project"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          @submit="updateProject"
        >
          <div class="mb-4">
            <label class="block text-blue-dark mb-2 font-bold" for="title">Project Title</label>
            <input
              v-model="post.title"
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
                v-model="post.difficulty"
                class="appearance-none block rounded-none p-1 bg-gray w-full border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"
                name="difficulty"
                required
              >
                <option value disabled selected>Select One</option>
                <option value="Easy">Easy</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div class="mb-4 w-full md:w-1/2">
              <label class="block text-blue-dark font-bold mb-2" for="languages">Tech Languages</label>
              <input
                v-model="post.languages"
                type="text"
                class="block p-1 bg-gray w-full border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"
                name="languages"
                required
              />
            </div>
          </div>

          <div class="mb-4 w-full">
            <label class="block text-blue-dark -mb-1 font-bold mb-2" for="url">Github Link</label>
            <p class="text-blue-lightest mb-2">
              <small>Your github projects full ur, e.g. https://github.com/coltxp</small>
            </p>
            <input
              v-model="post.url"
              type="text"
              class="block w-full p-1 bg-gray border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"
              name="url"
              required
            />
          </div>

          <div class="mb-8 w-full">
            <label class="block text-blue-dark font-bold mb-2" for="description">Description</label>
            <textarea
              v-model="post.description"
              class="block p-1 w-full bg-gray border border-gray focus:outline-none focus:bg-white focus:border-blue-lightest"
              rows="8"
              name="description"
              required
            ></textarea>
          </div>

          <p class="hidden">
            <label>
              Don’t fill this out if you're human:
              <input name="bot-field" />
            </label>
          </p>

          <button
            type="submit"
            class="button-base button-red shadow-md hover:shadow-lg"
          >Update Project</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { StoreDB } from "@/plugins/firebase.js";
import { ValidationProvider } from "vee-validate";

export default {
  name: "PostEdit",

  components: {
    ValidationProvider
  },

  methods: {
    updateProject: function(e) {
      StoreDB.collection("posts")
        .doc(this.doc)
        .update({
          title: this.post.title,
          difficulty: this.post.difficulty,
          languages: this.post.languages,
          url: this.post.url,
          description: this.post.description
        })
        .then(() => {
          alert("Your project has been updated!");
          this.$router.push("/me");
        })
        .catch(err => {
          alert("Oops, something went wrong!", err);
        });

      e.preventDefault();
    }
  },

  async asyncData({ params }) {
    const postRef = await StoreDB.collection("posts").doc(`${params.post_id}`);

    const post = postRef.get().then(function(documentSnapshot) {
      let doc = documentSnapshot.id;
      let post = documentSnapshot.data();

      return { post, doc };
    });

    return post;
  }
};
</script>
