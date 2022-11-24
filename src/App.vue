<template>
  <div>
    <div class="container">
      <Navbar />
    </div>
  </div>

  <RouterView/>
</template>
<script>
import { Navbar } from "@/components/index.js";
import { RouterView } from "vue-router";
export default {
  components: {
    Navbar,
  },
};
</script>
<style></style>
