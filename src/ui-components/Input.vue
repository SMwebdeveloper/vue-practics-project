<template >
     <div class="form-floating mt-2">
          <input
            :type="type"
            class="form-control"
            id="floatingPassword"
            :placeholder="label"
          />
          <label for="floatingInput">{{label}}</label>
        </div>
</template>
<script>
export default {
    name: 'Input',
    props:{
        label: String,
        type: String,
    }
}
</script>
<style >
    
</style>