<template>
  <div class="w-50 mx-auto">
    <form @submit.prevent>
			<Input type="text" label="Title" v-model="title" />
			<TextArea type="text" label="Description" v-model="description" />
			<TextArea type="text" label="Body" v-model="body" />
			<Button @click="editArticle" :disabled="islLoading">{{clickText}}</Button>
		</form>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
   initialValue:{
    type:Object,
    required:true,
   },
    onSubmitHandler:{
      type:Function,
      required:true,
    },
    clickText:{
      type:String,
      required:true,
    }
    
  },
  data() {
    return {
      title: this.initialValue.title,
			description: this.initialValue.description,
			body: this.initialValue.body,
      isEdit: false,
		}
  },
  computed:{
    ...mapState({
      islLoading: state => state.control.islLoading
    }),
    edit() {
     if (this.$route.params.slug) {
      this.isEdit = true
     } else {
      this.isEdit = false
     }
    }
  },
methods:{
  editArticle() {
    const article = {
      title: this.title,
      body:this.body,
      description: this.description,
      tagList: [],
    }
    this.onSubmitHandler(article)
  }
}
}
</script>
