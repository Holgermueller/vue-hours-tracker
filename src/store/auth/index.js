import firebase from "firebase/app";
import db from "../../firebase/firebaseInit";

export default {
  state: {
    user: null,
  },

  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
  },

  actions: {
    registerUser({ commit }) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");
    },

    loginUser({ commit }) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");
    },

    autoSignIn() {},

    logout({ commit }) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");
    },

    removeUser() {},
  },

  getters: {
    user(state) {
      return state.user;
    },
  },
};
