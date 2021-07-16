<template>
  <div>
    <v-card class="hours-card text-center" :loading="loading">
      <template slot="progress">
        <v-progress-linear indeterminate color="blue" height="10">
        </v-progress-linear>
      </template>

      <v-card-title class="heading2">
        <v-icon left>mdi-account-circle</v-icon>Hello,
      </v-card-title>

      <v-card-subtitle>
        <h2>Hours remaining:</h2>
      </v-card-subtitle>

      <v-card-text>
        <h1></h1>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "HoursDisplay",

  props: {},

  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>

<style scoped>
.hours-card {
  width: 55%;
  margin: 2% auto;
}
</style>
