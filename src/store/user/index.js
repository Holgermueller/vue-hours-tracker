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
            email: user.email,
            userId: user.uid,
          };

          commit("SET_USER", newUser);

          db.collection("userProfiles")
            .add({
              displayName: payload.username,
              email: payload.email,
              userId: user.uid,
              hoursToMakeUp: 0,
            })
            .then(() => {
              commit("SET_LOADING", false);
              console.log("Profile created");
            })
            .catch((err) => {
              commit("SET_LOADING", false);
              commit("SET_ERROR", err);
            });

          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        });
    },

    loginUser({ commit }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const signedInUser = {
            email: user.user.email,
            id: user.user.uid,
          };
          commit("SET_USER", signedInUser);
          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        });
    },

    autoSignIn({ commit }, payload) {
      commit("SET_LOADING", false);

      commit("SET_USER", {
        userId: payload.uid,
        email: payload.email,
      });
    },

    logout({ commit }) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");
    },
  },

  getters: {
    user(state) {
      return state.user;
    },
  },
};