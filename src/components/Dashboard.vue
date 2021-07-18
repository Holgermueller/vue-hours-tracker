<template>
  <div id="dashboard">
    <v-layout row v-if="error">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <app-alert @dismissed="onDismissed" :v-text="error.message"></app-alert>
      </v-flex>
    </v-layout>

    {{ userProfile[0].id }}

    <DisplayHours :userProfile="userProfile[0]" />

    <AddHoursForm
      :hoursToMakeUp="userProfile[0].hoursToMakeUp"
      :userProfileId="userProfile[0].userProfileId"
    />

    <RemoveHoursForm
      :hoursToMakeUp="userProfile[0].hoursToMakeUp"
      :userProfileId="userProfile[0].userProfileId"
    />
  </div>
</template>

<script>
import DisplayHours from "./DashboardComponents/DisplayHours.vue";
import AddHoursForm from "./DashboardComponents/AddHours.vue";
import RemoveHoursForm from "./DashboardComponents/RemoveHours.vue";

export default {
  name: "DashboardPage",

  components: {
    AddHoursForm,
    DisplayHours,
    RemoveHoursForm,
  },

  created() {
    return this.$store.dispatch("getUserProfile");
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

  methods: {
    onDismissed() {
      this.$store.dispatch("clearError");
    },
  },
};
</script>

<style scoped></style>
