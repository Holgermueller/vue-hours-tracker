<template>
  <div>
    <v-form ref="form">
      <h1>Register here:</h1>

      <v-flex xs12 sm12 md12 lg12 xl12
        ><v-text-field
          v-model="RegisterUsername"
          label="Username"
          prepend-icon="mdi-account-circle"
          outlined
        ></v-text-field
      ></v-flex>

      <v-flex xs12 sm12 md12 lg12 xl12
        ><v-text-field
          v-model="RegisterEmail"
          label="Email"
          prepend-icon="mdi-email"
          outlined
        ></v-text-field
      ></v-flex>

      <v-flex xs12 sm12 md12 lg12 xl12
        ><v-text-field
          v-model="RegisterPassword"
          label="Password"
          prepend-icon="mdi-lock"
          outlined
        ></v-text-field
      ></v-flex>

      <v-flex xs12 sm12 md12 lg12 xl12
        ><v-text-field
          v-model="ConfirmPassword"
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
      RegisterUsername: "",
      RegisterEmail: "",
      RegisterPassword: "",
      ConfirmPassword: "",
      error: "",
    };
  },

  methods: {
    checkForm() {},

    clearForm() {
      this.$ref.form.reset();
    },
  },
};
</script>

<style scoped></style>
