<template>
  <h1 class="text-center display-2">Create article</h1>
  <ArticleForm
    :initialValue="initialValue"
    :onSubmitHandler="createArticleHandler"
    :clickText="'Create article'"
  />
</template>
<script>
import ArticleForm from "../components/ArticleForm.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      title: "",
      description: "",
      body: "",
    };
  },
  components: {
    ArticleForm,
  },
  methods: {
    createArticleHandler(article) {
      this.$store.dispatch("createArticle", article);
      this.$router.push("/");
    },
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.control.isLoading,
    }),
    initialValue() {
      return {
        title: "",
        description: "",
        body: "",
      };
    },
  },
};
</script>
<style></style>
