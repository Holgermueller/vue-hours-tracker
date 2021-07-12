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
    getUserProfile({ commit, getters }) {
      commit("SET_LOADING", true);

      firebase
        .collection("usersProfiles")
        .where("creatorId", "==", getters.user.userId)
        .onSnapshot(
          (querySnapshot) => {
            let userProfile = [];
            querySnapshot.forEach((doc) => {
              let userInfo = {
                userId: doc.id,
                username: doc.data().username,
                email: doc.data().email,
                creatorId: doc.data().creatorId,
                userHours: doc.data().userHours,
              };
              userProfile.push(userInfo);
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
        .collection("usersProfiles")
        .doc(payload.userId)
        .update({
          userHours: payload.hoursToAdd,
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
        .collection("usersProfiles")
        .doc(payload.userId)
        .update({
          userHours: payload.hoursToRemove,
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
