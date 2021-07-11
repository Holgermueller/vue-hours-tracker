<template>
  <div>
    <v-card class="increment-card">
      <v-card-title>
        <v-icon left>mdi-plus</v-icon>
        Add hours:
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field type="number" v-model="hoursToAdd"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          id="addHoursButton"
          class="add-hours-button"
          @click.prevent="addHours"
          :disabled="tooFewHoursToAdd"
        >
          <v-icon left>mdi-check-bold</v-icon>
          Add Hours
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "HoursIncrementForm",

  data() {
    return {
      hoursToAdd: 1,
    };
  },

  methods: {
    addHours() {
      console.log(this.hoursToAdd);
    },
  },
};
</script>

<style scoped>
.increment-card {
  width: 55%;
  margin: 2% auto;
}
</style>
