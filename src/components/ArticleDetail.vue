<template>
    <div v-if="article">
      {{article.title}}  
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed:{
     ...mapState({
        article: state => state.articles.articleDetail
     })
    }
}
</script>
<style>
    
</style>