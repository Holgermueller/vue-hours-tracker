<template>
  <div id="dashboard">
    <v-layout row v-if="error">
      <app-alert @dismissed="onDismissed" :v-text="error.message"></app-alert>
    </v-layout>

    <DisplayHours :userProfile="userProfile" />

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

  computed: {
    user() {
      return this.$store.getters.user;
    },

    error() {
      return this.$store.getters.error;
    },
  },
};
</script>

<style scoped></style>
