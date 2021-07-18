<template>
  <div id="lost-pay-calculator" class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="green" dark v-bind="attrs" v-on="on" elevation="0" block>
          <v-icon left>$</v-icon>
          Calculate lost wages</v-btn
        >
      </template>

      <v-card>
        <v-card-title class="lost-wages-display"
          >You're losing: <v-icon left>$</v-icon>
          <div id="lostWagesDisplay">
            {{ productToDisplay }}
          </div>
          <v-icon right>!!</v-icon>
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-flex xs12 sm12 md12 lg12 xl12
              ><v-text-field
                type="text"
                v-model="hourlyWage"
                label="Enter hourly wage here..."
                outlined
              ></v-text-field
            ></v-flex>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn @click.prevent="onClose" elevation="0" dark>
            <v-icon left>mdi-cancel</v-icon>
            Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn @click.prevent="calcWagesLost" elevation="0" dark>
            <v-icon left>mdi-calculator</v-icon>
            Calculate</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "PayLostCalcDialog",

  data() {
    return {
      dialog: false,
      hourlyWage: "",
      productToDisplay: 0,
    };
  },

  props: {
    hoursToMakeUp: {
      type: Number,
      required: true,
    },
  },

  methods: {
    onClose() {
      this.dialog = false;
      this.clearForm();
    },

    clearForm() {
      this.$refs.form.reset();
    },

    calcWagesLost() {
      let hourlyWage = parseFloat(this.hourlyWage).toFixed(2);

      let productToDisplay = hourlyWage * this.hoursToMakeUp;

      document.getElementById("lostWagesDisplay").innerHTML = productToDisplay;
    },
  },
};
</script>

<style scoped></style>
