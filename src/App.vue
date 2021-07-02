<template>
  <v-app>
    <v-app-bar app color="primary" dark class="text-center">
      <h1>Hours Tracker</h1>

      <v-spacer></v-spacer>

      <v-btn>
        Log out
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

  data: () => ({
    //
  }),
};
</script>

<style scoped></style>
