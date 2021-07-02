<template>
  <div>
    <v-form ref="form">
      <h1>Log in here:</h1>
      <v-text-field
        type="email"
        v-model="loginEmail"
        label="Email"
      ></v-text-field>
      <v-text-field
        type="password"
        v-model="loginPassword"
        label="Password"
      ></v-text-field>
      <v-btn>Cancel</v-btn>

      <v-btn>Submit</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",

  data() {
    return {
      loginEmail: "",
      loginPassword: "",
    };
  },
};
</script>

<style scoped></style>
