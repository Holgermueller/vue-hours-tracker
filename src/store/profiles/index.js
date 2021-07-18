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
      const hoursToEdit = state.userProfile.find((thisProfile) => {
        return thisProfile.id === payload.userProfileId;
      });

      if (payload.hoursToMakeUp) {
        hoursToEdit.hoursToMakeUp = payload.hoursToAdd;
      }
    },

    REMOVE_HOURS(state, payload) {
      const hoursToEdit = state.userProfile.find((thisProfile) => {
        return thisProfile.id === payload.userProfileId;
      });

      if (payload.hoursToMakeUp) {
        hoursToEdit.hoursToMakeUp = payload.hoursToRemove;
      }
    },
  },

  actions: {
    getUserProfile({ commit, getters }) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      firebase
        .collection("userProfiles")
        .where("profileId", "==", getters.user.userId)
        .onSnapshot(
          (querySnapshot) => {
            let userProfile = [];

            querySnapshot.forEach((doc) => {
              const profileData = {
                userProfileId: doc.id,
                profileId: doc.data().profileId,
                displayName: doc.data().displayName,
                hoursToMakeUp: doc.data().hoursToMakeUp,
              };
              userProfile.push(profileData);
            });

            commit("SET_USER_PROFILE", userProfile);
            commit("SET_LOADING", false);
          },
          (err) => {
            commit("SET_LOADING", true);
            commit("SET_ERROR", err);
          }
        );
    },

    addHours({ commit }, payload) {
      commit("SET_LOADING", true);

      firebase
        .collection("userProfiles")
        .doc(payload.userProfileId)
        .update({
          hoursToMakeUp: payload.hoursToAdd,
        })
        .then(() => {
          commit("ADD_HOURS", payload);
          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        });
    },

    removeHours({ commit }, payload) {
      commit("SET_LOADING", true);

      firebase
        .collection("userProfiles")
        .doc(payload.userProfileId)
        .update({
          hoursToMakeUp: payload.hoursToRemove,
        })
        .then(() => {
          commit("REMOVE_HOURS", payload);
          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        });
    },

    deleteUserProfile() {},
  },

  getters: {
    userProfile(state) {
      return state.userProfile;
    },
  },
};
