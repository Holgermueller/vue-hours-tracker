<template>
  <div>
    <v-card class="hours-card text-center">
      <v-card-title class="heading2">
        <v-icon left>mdi-account-circle</v-icon>Hello,
        {{ userProfile[0].username }}
      </v-card-title>

      <v-card-subtitle>
        <h2>Hours remaining:</h2>
      </v-card-subtitle>

      <v-card-text>
        <h1>
          {{ hoursToTrack }}
        </h1>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "HoursDisplay",

  props: {
    userProfile: {
      type: Array,
      required: true,
    },
  },

  computed: {
    hoursToTrack() {
      return this.$store.getters.hoursToTrack;
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
