import firebase from "../../firebase/firebaseInit";

export default {
  state: {
    userHours: null,
  },

  mutations: {
    SET_HOURS(state, payload) {
      state.userHours = payload;
    },
  },

  actions: {
    getHourFromDb({ commit, getters }) {
      commit("SET_LOADING", true);

      firebase
        .collection("userHoursToMakeUp")
        .where("creatorId", "==", getters.user.userId)
        .onSnapshot((querySnapshot) => {
          let userHours = null;
          querySnapshot.forEach((doc) => {
            console.log;
          });
        });
    },

    setInitialHoursToMakeUp({ commit, getters }) {
      commit("SET_LOADING", true);

      firebase
        .collection("userHoursToMakeUp")
        .add({
          creatorId: getters.user.uid,
          userHours: 0,
        })
        .then(() => {
          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        });
    },

    addHours({ commit, getters }, payload) {
      commit("SET_LOADING", true);

      firebase
        .collection("userHoursToMakeUp")
        .where("creatorId", "==", getters.user.userId)
        .then(() => {
          let hoursToUpdate = "";
          let hoursToAdd = payload;

          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        });
    },

    removeHours({ commit, getters }, payload) {
      firebase
        .collection("userHoursToMakeUp")
        .where("creatorId", "==", getters.user.userId)
        .then(() => {
          let hoursToUpdate = "";
          let hoursToRemove = payload;

          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        });
    },
  },

  getters: {
    userHours(state) {
      return state.userHours;
    },
  },
};
