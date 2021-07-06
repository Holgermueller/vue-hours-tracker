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
    getUserProfile({ commit, getters }) {
      commit("SET_LOADING", true);

      firebase
        .collection("usersProfiles")
        .where("creatorId", "==", getters.user.userId)
        .onSnapshot(
          (querySnapshot) => {
            let userProfile = [];
            querySnapshot.forEach((doc) => {
              console.log(doc.data());
              let userInfo = {
                userId: doc.id,
                username: doc.data().username,
                email: doc.data().email,
                creatorId: doc.data().creatorId,
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

    deleteUserProfile() {},
  },

  getters: {
    userProfile(state) {
      return state.userProfile;
    },
  },
};
