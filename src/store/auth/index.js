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
    registerUser({ commit }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((userCredential) => {
          let user = userCredential.user;

          let newUser = {
            displayName: payload.displayName,
            email: user.email,
            userId: user.uid,
          };

          commit("SET_USER", newUser);
          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        });
    },

    loginUser({ commit }) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");
    },

    autoSignIn({ commit }, payload) {
      commit("SET_LOADING", false);

      commit("SET_USER", {
        userId: payload.uid,
        email: payload.email,
        displayName: payload.displayName,
      });
    },

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
