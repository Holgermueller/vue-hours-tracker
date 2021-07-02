<template>
  <div id="dashboard">
    <DisplayHours />

    <IncrementHoursForm />

    <DecrementHoursForm />
  </div>
</template>

<script>
import DisplayHours from "./DashboardComponents/DisplayHours.vue";
import IncrementHoursForm from "./DashboardComponents/IncrementHours.vue";
import DecrementHoursForm from "./DashboardComponents/DecrementHours.vue";

export default {
  name: "DashboardPage",

  components: {
    IncrementHoursForm,
    DisplayHours,
    DecrementHoursForm,
  },
};
</script>

<style scoped></style>
