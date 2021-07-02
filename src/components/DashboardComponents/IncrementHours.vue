<template>
  <div>
    <v-card class="increment-card">
      <v-card-title>
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

  computed: {
    tooFewHoursToAdd() {
      return this.hoursToAdd <= 0;
    },
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
