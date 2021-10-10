<template>
  <div id="login">
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

          <v-flex xs12 sm12 md12 lg12 xl12>
            <p v-if="errorFromDom" id="errorFromDom" class="error-from-dom">
              {{ errorFromDom }}
            </p>
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <p id="forgotPasswordLink">
              <a href="/forgotPassword" class="forgot-password-link"
                >Forgot password?</a
              >
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
          @click.prevent="checkLoginForm"
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
  name: "LoginForm",

  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      currentUser: false,
      userId: null,
      errorFromDom: "",
    };
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },

    error() {
      return this.$store.getters.error;
    },

    loading() {
      return this.$store.getters.loading;
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
    checkLoginForm() {
      if (!this.email && !this.password) {
        this.errorFromDom = "Please fill out both of the fields";
      } else if (!this.email) {
        this.errorFromDom = "Please provide your email to log in.";
      } else if (!this.password) {
        this.errorFromDom = "Please provide your password to log in.";
      } else {
        this.logInUser();
        this.clearForm();
      }
    },

    logInUser() {
      this.$store.dispatch("loginUser", {
        email: this.email,
        password: this.password,
      });
    },

    clearForm() {
      this.$refs.form.reset();
      this.email = "";
      this.password = "";
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

.forgot-password-link {
  color: blue;
  text-decoration: none;
}
</style>
