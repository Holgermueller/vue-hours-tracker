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
              type="password"
              v-model="password"
              label="Password"
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
          @click.prevent="checkLoginForm"
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
  name: "LoginForm",

  data() {
    return {
      email: "",
      password: "",
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
      this.$store.dispatch("loginUser", {
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
