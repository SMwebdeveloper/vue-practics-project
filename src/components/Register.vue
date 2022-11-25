<template>
  <main class="form-signin w-25 m-auto mt-5">
    <form>
      <h1 class="h3 mb-3 fw-normal text-center">Register</h1>
      <Input :label="'Name'" :type="'text'" v-model="username" />
      <Input :label="'Email address'" :type="'email'" v-model="email" />
      <Input :label="'Password'" :type="'password'" v-model="password" />
      <Button type="submit" :disabled="isLoading" @click="submitHanlder"
        >Register</Button
      >
    </form>
  </main>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading;
    },
  },
  methods: {
    submitHanlder(e) {
      e.preventDefault();
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("register", data)
        .then((user) => {
          console.log("USER", user);
          this.$router.push({name:'home'});
        })
        .catch((err) => console.log("ERROR", err));
    },
  },
};
</script>
<style></style>
