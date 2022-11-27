<template>
    <div class="col">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">
                    {{article.title}}
                </h5>
                <p class="card-text">
                   {{article.body}}
                </p>
                <div class="d-flex justify-content-between align-items-center card-footer">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
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
    }
 }
</script>