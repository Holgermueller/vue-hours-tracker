<template>
  <div>
    <v-card class="increment-card">
      <v-card-title>
        <v-icon left>mdi-plus</v-icon>
        Add hours: {{ userHours }}
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
          :loading="loading"
          :disabled="tooFewHoursToAdd || loading"
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

  props: {
    userHours: {
      type: Number,
      required: true,
    },

    hoursId: {
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
      let baseHours = parseInt(this.userHours);

      let newHours = baseHours + parseInt(this.hoursToAdd);
      console.log(newHours);

      this.$store.dispatch("addHours", {
        hoursId: this.hoursId,
        hoursToAdd: newHours,
      });
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
