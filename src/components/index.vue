<template>
  <div>
    <v-sheet class="login-register" elevation="3">
      <LoginForm />
      <v-divider> </v-divider>

      <RegisterForm />
    </v-sheet>
  </div>
</template>

<script>
import LoginForm from "./indexComponents/Login.vue";
import RegisterForm from "./indexComponents/Register.vue";

export default {
  name: "HomePage",

  components: {
    LoginForm,
    RegisterForm,
  },
};
</script>

<style scoped>
.login-register {
  width: 75%;
  margin: 7px auto;
  padding: 4px;
}
</style>
