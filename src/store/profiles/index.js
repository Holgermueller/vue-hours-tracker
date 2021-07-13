import firebase from "../../firebase/firebaseInit";

export default {
  state: {
    userProfile: null,
  },

  mutations: {
    SET_USER_PROFILE(state, payload) {
      state.userProfile = payload;
    },

    ADD_HOURS(state, payload) {
      const hoursToEdit = state.userHours.find((theseHours) => {
        return theseHours.id === payload.creatorId;
      });

      if (payload.hoursToAdd) {
        hoursToEdit.userHours = payload.hoursToAdd;
      }
    },

    REMOVE_HOURS(state, payload) {
      const hoursToEdit = state.userHours.find((theseHours) => {
        return theseHours.id === payload.creatorId;
      });

      if (payload.hoursToRemove) {
        hoursToEdit.userHours = payload.hoursToRemove;
      }
    },
  },

  actions: {
    getUserProfile({ commit }) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");
    },

    addHours({ commit }) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");
    },

    removeHours({ commit }) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");
    },

    deleteUserProfile() {},
  },

  getters: {
    userProfile(state) {
      return state.userProfile;
    },
  },
};
