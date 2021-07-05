<template>
  <div>
    <v-expansion-panels class="login-register" elevation="3">
      <v-expansion-panel
        v-for="(panelData, index) in expansionPanelData"
        :key="index"
      >
        <v-expansion-panel-header id="panelData.id">
          {{ panelData.panelHeader }}</v-expansion-panel-header
        >

        <v-expansion-panel-content
          v-if="panelData.panelHeader === 'Log In Here:'"
        >
          <LoginForm />
        </v-expansion-panel-content>
        <v-expansion-panel-content v-else>
          <RegisterForm />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import LoginForm from "./indexComponents/Login.vue";
import RegisterForm from "./indexComponents/Register.vue";

export default {
  name: "HomePage",

  components: {
    LoginForm,
    RegisterForm,
  },

  data() {
    return {
      expansionPanelData: [
        {
          id: 1,
          panelHeader: "Log In Here:",
        },
        {
          id: 2,
          panelHeader: "Register Here:",
        },
      ],
    };
  },
};
</script>

<style scoped>
.login-register {
  width: 75%;
  margin: 5% auto;
  padding: 4px;
}
</style>
