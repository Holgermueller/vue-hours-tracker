<template>
  <div id="ForgotPassword">
    <v-card class="forgot-password-card">
      <v-card-title> <v-icon left>?</v-icon>Forgot Password ?</v-card-title>

      <v-card-text>
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
              type="email"
              v-model="confirmEmail"
              label="Confirm email"
              prepend-icon="mdi-email"
              outlined
            ></v-text-field
          ></v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <p v-if="errorFromDom" id="errorFromDom" class="error-from-dom">
              {{ errorFromDom }}
            </p>
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <p v-if="error" id="errorFromDom" class="error-from-dom">
              {{ error }}
            </p>
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <p v-if="success" id="success" class="success-message">
              {{ success }}
            </p>
          </v-flex>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn
          id="returnHome"
          to="/"
          elevation="0"
          @click.prevent="clearForm"
          color="primary"
        >
          <v-icon left>mdi-home</v-icon>
          Back to home page
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          id="submitEmail"
          elevation="0"
          @click.prevent="checkForm"
          :loading="loading"
          :disabled="loading"
          color="primary"
          dark
        >
          Reset Password
          <v-icon right>mdi-login</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ForgotPasswordPage",

  data() {
    return {
      email: "",
      confirmEmail: "",
      errorFromDom: "",
      success: "",
    };
  },

  computed: {
    loading() {
      return this.$store.getters.loading;
    },

    error() {
      return this.$store.getters.error;
    },
  },

  methods: {
    checkForm() {
      if (!this.email && !this.confirmEmail) {
        this.errorFromDom = "Please fill out both fields";
      } else if (!this.email) {
        this.errorFromDom = "Please provide your email";
      } else if (!this.confirmEmail) {
        this.errorFromDom = "Please confirm your email";
      } else if (this.email !== this.confirmEmail) {
        this.errorFromDom = "The emails you provided do not match";
      } else {
        this.resetPassword();
        this.clearForm();
      }
    },

    resetPassword() {
      this.success =
        "If the email you submitted corresponds to one in our records, you will receive an email to reset your password.";

      this.$store.dispatch("resetPassword", {
        email: this.email,
      });
    },

    clearForm() {
      this.$refs.form.reset();
    },

    onDismissed() {
      this.$store.dispatch("clearError");
    },
  },
};
</script>

<style scoped>
.forgot-password-card {
  width: 65%;
  margin: 7% auto;
}

.error-from-dom {
  color: red;
}

.success-message {
  color: blue;
}
</style>
