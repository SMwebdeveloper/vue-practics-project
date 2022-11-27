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
          {{currentUser.username}}
        </RouterLink>
        <a href="#" class="me-3 py-2 text-dark text-decoration-none" @click="logout">Logout</a>
      </template>
      <template v-if="isAnonymous">
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
import {mapGetters} from 'vuex'
import {gettersTypes} from '@/modules/types'
export default {
  data() {
    return {
      logo,
    };
  },
  computed:{
    ...mapGetters({
      currentUser:gettersTypes.currentUser,
      isLoggedIn:gettersTypes.isLoggedIn,
      isAnonymous:gettersTypes.isAnonymous,
    }),
  },
  methods:{
    toHomeHandler() {
      return this.$router.push({name:'home'})
    },
    logout() {
      return this.$store.dispatch('logout')
    }
  }
};
</script>
<style></style>
