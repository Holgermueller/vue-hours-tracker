<template>
  <div>
    <v-card class="decrement-hours">
      <v-card-title>
        Remove Hours
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field type="number"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn>
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
    return {};
  },
};
</script>

<style scoped>
.decrement-hours {
  width: 55%;
  margin: 2% auto;
}
</style>
