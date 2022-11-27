<template>
    <Loader v-if="isLoading" class="text-center"/>
  <ArticleDetail v-else/>

</template>
<script>
import { mapState } from "vuex";
import ArticleDetail from "../components/ArticleDetail.vue";
export default {
  components: {
    ArticleDetail,
  },
  mounted() {
    this.$store.dispatch("articleDetail", this.$route.params.slug);
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.articles.isLoading,
    }),
  },
};
</script>
<style></style>
