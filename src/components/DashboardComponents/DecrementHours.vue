<template>
  <div>
    <v-card class="decrement-hours">
      <v-card-title>
        <v-icon left>mdi-minus</v-icon>
        Remove Hours
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            id="hoursToRemove"
            type="number"
            v-model="hoursToRemove"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn @click.prevent="removeHours" :disabled="tooFewHoursToRemove">
          <v-icon left>mdi-check-bold</v-icon>
          Remove Hours
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "DecrementHoursForm",

  data() {
    return {
      hoursToRemove: 1,
    };
  },

  methods: {
    removeHours() {
      console.log(this.hoursToRemove);
    },
  },
};
</script>

<style scoped>
.decrement-hours {
  width: 55%;
  margin: 2% auto;
}
</style>
