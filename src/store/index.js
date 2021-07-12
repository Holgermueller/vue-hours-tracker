import Vue from "vue";
import Vuex from "vuex";

import Auth from "./auth";
import Profiles from "./profiles";
import Shared from "./shared";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Auth,
    Profiles,
    Shared,
  },
});
