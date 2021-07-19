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
            <p v-if="success" id="success" class="success-message">
              {{ success }}
            </p>
          </v-flex>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn
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
      this.success = "Success!! Check your email to reset password!";
    },

    clearForm() {
      this.$ref.form.reset();
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
  color: green;
}
</style>
