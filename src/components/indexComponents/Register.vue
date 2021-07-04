<template>
  <div id="register">
    <v-layout row v-if="error">
      <app-alert @dismissed="onDismissed" :v-text="error.message"></app-alert>
    </v-layout>

    <v-form ref="form">
      <h1>Register here:</h1>

      <v-flex xs12 sm12 md12 lg12 xl12
        ><v-text-field
          v-model="username"
          label="Username"
          prepend-icon="mdi-account-circle"
          outlined
        ></v-text-field
      ></v-flex>

      <v-flex xs12 sm12 md12 lg12 xl12
        ><v-text-field
          v-model="email"
          label="Email"
          prepend-icon="mdi-email"
          outlined
        ></v-text-field
      ></v-flex>

      <v-flex xs12 sm12 md12 lg12 xl12
        ><v-text-field
          v-model="password"
          label="Password"
          prepend-icon="mdi-lock"
          outlined
        ></v-text-field
      ></v-flex>

      <v-flex xs12 sm12 md12 lg12 xl12
        ><v-text-field
          v-model="confirmPassword"
          label="Confirm Password"
          prepend-icon="mdi-lock"
          outlined
        ></v-text-field
      ></v-flex>

      <v-btn @click.prevent="clearForm">Cancel</v-btn>

      <v-btn @click.prevent="checkForm">Submit</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",

  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },

    error() {
      return this.$store.getters.error;
    },
  },

  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("./dashboard");
      }
    },
  },

  methods: {
    checkForm() {
      this.$store.dispatch("registerUser", {
        email: this.email,
        password: this.password,
        username: this.username,
      });
    },

    clearForm() {
      this.$ref.form.reset();
    },

    onDismissed() {
      this.$store.dispatch("clearError");
    },
  },
};
</script>

<style scoped></style>
