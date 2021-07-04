<template>
  <div>
    <v-form ref="form">
      <h1>Log in here:</h1>
      <v-flex xs12 sm12 md12 lg12 xl12
        ><v-text-field
          type="email"
          v-model="email"
          label="Email"
          prepend-icon="mdi-email"
          outlined
        ></v-text-field
      ></v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12
        ><v-text-field
          type="password"
          v-model="password"
          label="Password"
          prepend-icon="mdi-lock"
          outlined
        ></v-text-field
      ></v-flex>

      <v-btn @click.prevent="clearForm">Cancel</v-btn>

      <v-btn @click.prevent="checkLoginForm">Submit</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",

  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },

  methods: {
    checkLoginForm() {
      this.$store.dispatch("", {
        email: this.email,
        password: this.password,
      });
      this.clearForm();
    },

    clearForm() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped></style>
