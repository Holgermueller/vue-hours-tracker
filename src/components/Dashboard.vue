<template>
  <div id="dashboard">
    <v-layout row v-if="error">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <app-alert @dismissed="onDismissed" :v-text="error.message"></app-alert>
      </v-flex>
    </v-layout>

    <h1>{{ user }}</h1>

    <DisplayHours />

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

  beforeCreate() {
    this.$store
      .dispatch("getUserProfile")
      .then(() => {
        console.log("Profile fetched!");
      })
      .catch((err) => {
        console.log(err);
      });
  },

  computed: {
    user() {
      return this.$store.getters.user.userId;
    },

    userProfile() {
      return this.$store.getters.userProfile;
    },

    error() {
      return this.$store.getters.error;
    },
  },

  methods: {
    onDismissed() {
      this.$store.dispatch("clearError");
    },
  },
};
</script>

<style scoped></style>
