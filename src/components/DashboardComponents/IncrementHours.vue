<template>
  <div>
    <v-card class="increment-card">
      <v-card-title>
        Add hours:
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field type="number"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn>
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
    return {};
  },
};
</script>

<style scoped>
.increment-card {
  width: 55%;
  margin: 2% auto;
}
</style>
