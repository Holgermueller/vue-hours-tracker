<template>
  <div id="dashboard">
    <v-layout row v-if="error">
      <app-alert @dismissed="onDismissed" :v-text="error.message"></app-alert>
    </v-layout>

    <DisplayHours :userProfile="userProfile" />

    <h1>
      {{ user }}
    </h1>

    <IncrementHoursForm />

    <DecrementHoursForm />
  </div>
</template>

<script>
import DisplayHours from "./DashboardComponents/DisplayHours.vue";
import IncrementHoursForm from "./DashboardComponents/IncrementHours.vue";
import DecrementHoursForm from "./DashboardComponents/DecrementHours.vue";

export default {
  name: "DashboardPage",

  components: {
    IncrementHoursForm,
    DisplayHours,
    DecrementHoursForm,
  },

  mounted() {
    this.$store.dispatch("getUserProfile");
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },

    userProfile() {
      return this.$store.getters.userProfile;
    },

    error() {
      return this.$store.getters.error;
    },
  },
};
</script>

<style scoped></style>
