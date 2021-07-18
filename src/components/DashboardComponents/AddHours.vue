<template>
  <div id="addHoursForm">
    <v-card class="add-hours-card">
      <v-card-title>
        <v-icon left>mdi-plus</v-icon>
        Add hours:
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            id="hoursToAddTextField"
            type="number"
            v-model="hoursToAdd"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          id="addHoursButton"
          class="add-hours-button"
          @click.prevent="addHours"
          :loading="loading"
          :disabled="tooFewHoursToAdd || loading"
          elevation="0"
          color="blue"
          dark
        >
          <v-icon left>+</v-icon>
          Add Hours
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AddHoursForm",

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
      hoursToAdd: 1,
    };
  },

  computed: {
    tooFewHoursToAdd() {
      return (
        this.hoursToAdd <= 0 ||
        this.hoursToAdd == undefined ||
        this.hoursToAdd == null
      );
    },

    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {
    addHours() {
      let baseHours = parseInt(this.hoursToMakeUp);

      let newHours = baseHours + parseInt(this.hoursToAdd);

      this.$store.dispatch("addHours", {
        userProfileId: this.userProfileId,
        hoursToAdd: newHours,
      });
    },
  },
};
</script>

<style scoped>
.add-hours-card {
  width: 55%;
  margin: 2% auto;
}
</style>
