import firebase from "../../firebase/firebaseInit";

export default {
  state: {
    userHours: null,
  },

  mutations: {
    SET_HOURS(state, payload) {
      state.userHours = payload;
    },

    ADD_HOURS(state, payload) {
      const hoursToEdit = state.userHours.find((theseHours) => {
        return theseHours.id === payload.hoursId;
      });

      if (payload.hoursToAdd) {
        hoursToEdit.userHours = payload.hoursToAdd;
      }
    },

    REMOVE_HOURS(state, payload) {
      const hoursToEdit = state.userHours.find((theseHours) => {
        return theseHours.id === payload.hoursId;
      });

      if (payload.hoursToRemove) {
        hoursToEdit.userHours = payload.hoursToRemove;
      }
    },
  },

  actions: {
    getHourFromDb({ commit, getters }) {
      commit("SET_LOADING", true);

      firebase
        .collection("userHoursToMakeUp")
        .where("creatorId", "==", getters.user.userId)
        .onSnapshot(
          (querySnapshot) => {
            let userHours = [];
            querySnapshot.forEach((doc) => {
              console.log(doc.data());

              let hoursToDom = {
                hoursId: doc.id,
                hoursLeft: doc.data().userHours,
                creatorId: doc.data().creatorId,
              };
              userHours.push(hoursToDom);
            });
            commit("SET_HOURS", userHours);
            commit("SET_LOADING", false);
          },
          (err) => {
            commit("SET_LOADING", true);
            commit("SET_ERROR", err);
          }
        );
    },

    setInitialHoursToMakeUp({ commit, getters }) {
      commit("SET_LOADING", true);

      firebase
        .collection("userHoursToMakeUp")
        .add({
          creatorId: getters.user.userId,
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

    addHours({ commit }, payload) {
      commit("SET_LOADING", true);

      firebase
        .collection("userHoursToMakeUp")
        .doc(payload.hoursId)
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
        .collection("userHoursToMakeUp")
        .doc(payload.hoursId)
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
  },

  getters: {
    userHours(state) {
      return state.userHours;
    },
  },
};
