import firebase from "../../firebase/firebaseInit";

export default {
  state: {
    userProfile: null,
  },

  mutations: {
    SET_USER_PROFILE(state, payload) {
      state.userProfile = payload;
    },
  },

  actions: {
    createUserProfile({ commit, getters }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      firebase
        .collection("userProfiles")
        .add({
          creatorId: getters.user.userId,
          username: payload.username,
          email: payload.email,
        })
        .then(() => {
          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        });
    },

    getUserProfile() {},

    deleteUserProfile() {},
  },

  getters: {
    userProfile(state) {
      return state.userProfile;
    },
  },
};
