<template>
  <div>
    <v-card class="hours-card text-center" :loading="loading">
      <template slot="progress">
        <v-progress-linear indeterminate color="blue" height="10">
        </v-progress-linear>
      </template>

      <v-card-title class="heading2">
        <v-icon left>mdi-account-circle</v-icon>Hello,
        {{ userProfile.displayName }}
      </v-card-title>

      <v-card-text>
        <h2>Hours remaining: {{ userProfile.hoursToMakeUp }}</h2>
      </v-card-text>

      <v-card-actions>
        <LostPayCalculator :hoursToMakeUp="userProfile.hoursToMakeUp" />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import LostPayCalculator from "./LostPayCalc.vue";

export default {
  name: "HoursDisplay",

  components: {
    LostPayCalculator,
  },

  props: {
    userProfile: {
      type: Object,
      required: true,
    },
  },

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
