<template >
    <h2>
        Article Details   </h2>
</template>
<script>
export default {
    mounted() {
        this.$store.dipatch('articleDetail', this.$route.params.slug)
    }
}
</script>
<style >
    
</style>