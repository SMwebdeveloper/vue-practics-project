<template>
  <main class="form-signin w-25 m-auto mt-5">
    <form>
      <h1 class="h3 mb-3 fw-normal text-center">Register</h1>
      <Input :label="'Name'" :type="'text'" />
      <Input :label="'Email address'" :type="'email'" />
      <Input :label="'Password'" :type="'password'" />
      <Button type="submit" :disabled="isLoading" @click="submitHanlder">Register</Button>
    </form>
  </main>
</template>
<script>
export default {
    computed:{
        isLoading(){
            return this.$store.state.auth.isLoading
        }
    },
    methods:{
       submitHanlder(e) {
        e.preventDefault();
        const data = {
          username:'sammdmnnhnbmifd',
          email:'samsdn@mfdnnnmjkmmmfff.adx',
          password:'ffdhfhkkf'
        }
        this.$store.dispatch('register', data).then(user => console.log("USER", user)).catch(err => console.log("ERROR", err))
       }
    }
}; 
</script>
<style></style>
