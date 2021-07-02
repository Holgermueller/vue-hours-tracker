<template>
  <div>
    <v-form ref="form">
      <h1>Register here:</h1>
      <v-text-field v-model="RegisterUsername" label="Username"></v-text-field>
      <v-text-field v-model="RegisterEmail" label="Email"></v-text-field>
      <v-text-field v-model="RegisterPassword" label="Password"></v-text-field>
      <v-btn>Cancel</v-btn>

      <v-btn>Submit</v-btn>
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
    };
  },
};
</script>

<style scoped></style>
