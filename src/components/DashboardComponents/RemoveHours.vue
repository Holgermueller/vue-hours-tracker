<template>
  <div id="removeHoursForm">
    <v-card class="remove-hours-card ">
      <v-card-title>
        <v-icon left>mdi-minus</v-icon>
        Remove Hours:
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            id="hoursToRemoveTextField"
            type="number"
            v-model="hoursToRemove"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          id="removeHoursButton"
          class="remove-hours-button"
          @click.prevent="removeHours"
          :loading="loading"
          :disabled="tooFewHoursToRemove || loading"
          elevation="0"
          color="blue"
          dark
        >
          <v-icon left>mdi-minus</v-icon>
          Remove Hours
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "RemoveHoursForm",

  props: {
    hoursToMakeUp: {
      type: Number,
      required: true,
    },

    userProfileId: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      hoursToRemove: 1,
    };
  },

  computed: {
    tooFewHoursToRemove() {
      return (
        this.hoursToRemove <= 0 ||
        this.hoursToRemove == null ||
        this.hoursToRemove == undefined
      );
    },

    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {
    removeHours() {
      let baseHours = parseInt(this.hoursToMakeUp);

      let hoursToRemove = parseInt(this.hoursToRemove);

      let newHours = baseHours - hoursToRemove;

      let hoursToSubmit = newHours < 0 ? 0 : newHours;

      console.log(hoursToSubmit);

      this.$store.dispatch("removeHours", {
        userProfileId: this.userProfileId,
        hoursToRemove: hoursToSubmit,
      });
    },
  },
};
</script>

<style scoped>
.remove-hours-card {
  width: 55%;
  margin: 2% auto;
}
</style>
