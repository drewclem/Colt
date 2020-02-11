<template>
  <div class="flex project-card p-2 shadow-md mb-8">
    <div class="mr-4 mt-6">
      <div>
        <label class="active-switch round" :for="post.doc_id">
          <input type="checkbox" :id="post.doc_id" v-model="post.active" />
          <span class="publish-dot round"></span>
        </label>
      </div>
    </div>

    <div>
      <h2 class="text-blue-dark text-lg lg:text-xl">{{post.title}}</h2>
      <ul class="text-red list-none text-sm md:mb-2">
        <li class="inline-block mr-2">{{post.languages}}</li>
      </ul>
    </div>

    <div class="flex justify-between ml-auto">
      <nuxt-link :to="`/me/${post.doc_id}/edit`" class="mr-4 cursor-pointer my-auto" :post="post">
        <span v-html="editIcon" class="fill-current text-darkgray hover:text-red" />
      </nuxt-link>
      <button @click="deletePostForever">
        <span v-html="deleteIcon" class="fill-current text-darkgray hover:text-red cursor-pointer" />
      </button>
    </div>
  </div>
</template>

<script>
import { StoreDB } from "@/plugins/firebase.js";

export default {
  name: "ProjectCard",

  data() {
    return {
      active: "",
      post: null
    };
  },

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  watch: {
    active: function(newVal, initialVal) {
      this.active = newVal;
      this.updateActiveStatus();
    }
  },

  computed: {
    set: function() {
      return (this.active = this.post.active);
    },

    editIcon() {
      return require("~/assets/images/icons/edit-24px.svg");
    },

    deleteIcon() {
      return require("~/assets/images/icons/delete_forever-24px.svg");
    }
  },

  methods: {
    updateActiveStatus: function() {
      const post = this.post;
      // console.log("this part is working");
      let docRef = StoreDB.collection("posts").doc(post.doc_id);

      return docRef
        .update({
          active: post.active
        })
        .then(() => {
          console.log("success");
        })
        .catch(err => {
          console.err("Error updating document", error);
        });
    },

    deletePostForever: function() {
      const post = this.post;

      let docDeleteRef = StoreDB.collection("posts").doc(post.doc_id);

      return docDeleteRef
        .delete()
        .then(() => {
          alert("Your post has been successfully deleted.");
          window.location.reload(true);
        })
        .catch(err => {
          console.log("Oops! Looks like something went wrong", err);
        });
    }
  }
};
</script>

<style scoped>
.active-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 14px;
}

.active-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.publish-dot {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f0f0f0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.publish-dot:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: -6px;
  background-color: #c4c4c4;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

:before {
  background-color: #df4141;
}

.publish-dot.round {
  border-radius: 34px;
}

.publish-dot.round:before {
  border-radius: 50%;
}

input:checked + .publish-dot:before {
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
  background-color: #df4141;
}
</style>