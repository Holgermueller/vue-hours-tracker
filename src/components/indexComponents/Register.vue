<template>
  <div id="register">
    <v-card elevation="0">
      <v-card-text>
        <v-layout row v-if="error">
          <v-flex xs12 sm12 md12 lg12 xl12>
            <app-alert
              @dismissed="onDismissed"
              :v-text="error.message"
            ></app-alert>
          </v-flex>
        </v-layout>

        <v-form ref="form">
          <v-flex xs12 sm12 md12 lg12 xl12
            ><v-text-field
              type="text"
              v-model="username"
              label="Username"
              prepend-icon="mdi-account-circle"
              outlined
            ></v-text-field
          ></v-flex>

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
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="password"
              label="Password"
              prepend-icon="mdi-lock"
              outlined
            ></v-text-field
          ></v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12
            ><v-text-field
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="confirmPassword"
              label="Confirm Password"
              prepend-icon="mdi-lock"
              outlined
            ></v-text-field
          ></v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <p v-if="errorFromDOM" id="errorFromDom" class="error-from-dom">
              {{ errorFromDOM }}
            </p>
          </v-flex>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn @click.prevent="clearForm" elevation="0" color="red" dark>
          <v-icon left>mdi-cancel</v-icon>
          Cancel</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn
          @click.prevent="checkForm"
          :loading="loading"
          :disabled="loading"
          elevation="0"
          color="blue"
          dark
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
      showPassword: false,
      currentUser: false,
      userId: null,
      errorFromDOM: "",
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
      if (
        !this.username &&
        !this.email &&
        !this.password &&
        !this.confirmPassword
      ) {
        this.errorFromDOM = "You must fill out all the fields";
      } else if (!this.username) {
        this.errorFromDOM = "Please provide a username to register";
      } else if (!this.email) {
        this.errorFromDOM = "Please provide an email to register";
      } else if (!this.password) {
        this.errorFromDOM = "Please provide a password to register";
      } else if (!this.confirmPassword) {
        this.errorFromDOM = "Please confirm your password to log in";
      } else if (!this.password !== this.confirmPassword) {
        this.errorFromDOM = "Passwords do not match";
      } else {
        this.registerUser();
        this.clearForm();
      }
    },

    registerUser() {
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

<style scoped>
.error-from-dom {
  color: red;
}
</style>
