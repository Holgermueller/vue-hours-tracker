<template>
  <div id="register">
    <v-card elevation="0">
      <v-card-text>
        <v-layout row v-if="error">
          <app-alert
            @dismissed="onDismissed"
            :v-text="error.message"
          ></app-alert>
        </v-layout>

        <v-form ref="form">
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
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn @click.prevent="clearForm" elevation="0">
          <v-icon left>mdi-cancel</v-icon>
          Cancel</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn
          @click.prevent="checkForm"
          :loading="loading"
          :disabled="loading"
          elevation="0"
          >Submit
          <v-icon right>mdi-login</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
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

    loading() {
      return this.$store.getters.loading;
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
