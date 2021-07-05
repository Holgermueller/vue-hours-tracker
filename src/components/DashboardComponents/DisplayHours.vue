<template>
  <div>
    <v-card class="hours-card text-center">
      <v-card-title>
        <h1>Hello, {{ userProfile }}</h1>
      </v-card-title>

      <v-card-subtitle>
        <h2>
          Hours remaining:
        </h2>
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

  updated() {
    this.$store.dispatch("getUserProfile");
  },

  computed: {
    userProfile() {
      return this.$store.getters.userProfile;
    },
  },

  // {
  //   userProfile: {
  //     type: Array,
  //     required: true,
  //   },
  // },
};
</script>

<style scoped>
.hours-card {
  width: 55%;
  margin: 2% auto;
}
</style>
