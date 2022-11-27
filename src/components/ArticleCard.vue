<template>
    <div class="col">
            <div class="card shadow-sm" style="border:none;" >
              <div class="card-body">
                <h5 class="card-title">
                    {{article.title.substring(0,20)}}
                </h5>
                <p class="card-text">
                   {{article.body.substring(0,200)}}
                </p>
                <div class="d-flex justify-content-between align-items-center card-footer">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary" @click="navigateHandler">Read article</button>
                        <!-- <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> -->
                    </div>
                    <small class="text-muted">{{new Date(article.createdAt).toLocaleString("us")}}</small>
                </div>
              </div>  
            </div>
        </div>
</template>

<script>
 export default {
    props: {
        article:{
            type: Object,
            required: true
        }
    },
    methods:{
        navigateHandler() {
            return this.$router.push(`/article/${this.article.slug}`)
        }
    }
 }
</script>