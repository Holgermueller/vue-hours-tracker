<template>
  <div>
    <v-card class="hours-card text-center">
      <v-card-title class="heading2">
        <v-icon left>mdi-account-circle</v-icon>Hello,
        {{ userProfile[0].username }}
      </v-card-title>

      <v-card-subtitle>
        <h2>Hours remaining: {{ hoursToTrack }}</h2>
      </v-card-subtitle>

      <v-card-text>
        <h1>0</h1>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "HoursDisplay",

  props: {
    userProfile: {
      type: Object,
      required: true,
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
