<template>
  <div
    class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom"
  >
    <RouterLink
      :to="{ name: 'home' }"
      class="d-flex align-items-center text-dark text-decoration-none"
    >
      <h3 class="fs-3">Sammi | app</h3>
    </RouterLink>

    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <template v-if="isLoggedIn">

        <RouterLink
          :to="{ name: 'home' }"
          class="me-3 py-2 text-dark text-decoration-none"
        >
          {{user.username}}
        </RouterLink>
      </template>
      <template v-if="!isLoggedIn">
        <RouterLink
          :to="{ name: 'login' }"
          class="me-3 py-2 text-dark text-decoration-none"
        >
        Login
        </RouterLink>
      <RouterLink
        :to="{ name: 'register' }"
        class="me-3 py-2 text-dark text-decoration-none"
      >
        Register
      </RouterLink>

      </template>
    </nav>
  </div>
</template>
<script>
import { logo } from "../constants";
import { RouterLink } from "vue-router";
import {mapState} from 'vuex'
export default {
  data() {
    return {
      logo,
    };
  },
  computed:{
    ...mapState({
      user: state => state.auth.user,
      isLoggedIn: state => state.auth.isLoggedIn
    })
  },
};
</script>
<style></style>
