<template>
  <div id="dashboard">
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

  created() {
    this.$store.dispatch("getUserProfile");
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },

    userProfile() {
      return this.$store.getters.userProfile;
    },
  },
};
</script>

<style scoped></style>
