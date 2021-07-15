import Vue from "vue";
import Vuex from "vuex";

import User from "./user";
import Profiles from "./profiles";
import Shared from "./shared";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    User,
    Profiles,
    Shared,
  },
});
