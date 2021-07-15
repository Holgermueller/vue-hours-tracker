<template>
  <v-app>
    <v-app-bar app color="primary" dark class="text-center">
      <h1>
        <v-icon left>mdi-clock</v-icon>

        Hours Tracker
      </h1>

      <v-spacer></v-spacer>

      <v-btn
        v-if="userIsAuthenticated"
        color="primary"
        elevation="0"
        @click.prevent="logout"
        :loading="loading"
        :disabled="loading"
      >
        Log out
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer class="footer text-center">
      &copy; 2021 Holger Mueller
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  computed: {
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },

    user() {
      return this.$store.getters.user;
    },

    loading() {
      return this.$store.getters.loading;
    },
  },

  data: () => ({
    //
  }),

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.footer {
  margin: auto;
}
</style>
