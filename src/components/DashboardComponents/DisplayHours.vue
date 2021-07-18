<template>
  <div id="hoursDisplay">
    <v-card
      class="hours-display-card text-center"
      :class="setDisplayColors()"
      :loading="loading"
    >
      <template slot="progress">
        <v-progress-linear indeterminate color="blue" height="10">
        </v-progress-linear>
      </template>

      <v-card-title class="heading2">
        <v-icon left>mdi-account-circle</v-icon>Hello,
        {{ userProfile.displayName }}
      </v-card-title>

      <v-card-text>
        <h2>
          Hours remaining:
        </h2>
        <h2 :class="setDisplayColors()">
          {{ userProfile.hoursToMakeUp }}
        </h2>
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

  methods: {
    setDisplayColors() {
      let colorDeterminate = this.userProfile.hoursToMakeUp;

      if (colorDeterminate > 3) {
        return "not-going-to-make-it";
      } else if (colorDeterminate == 3 || colorDeterminate >= 1) {
        return "can-see-the-light";
      } else {
        return "made-it";
      }
    },
  },
};
</script>

<style scoped>
.hours-display-card {
  width: 55%;
  margin: 2% auto;
  border-width: 3px;
  border-style: solid;
}

.not-going-to-make-it {
  border-color: red;
  color: red;
}

.can-see-the-light {
  border-color: green;
  color: green;
}

.made-it {
  border-color: skyblue;
  color: skyblue;
}
</style>
