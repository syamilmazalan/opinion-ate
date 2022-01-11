const restaurants = (api, stateOverrides) => ({
  namespaced: true,
  state: {
    records: [],
    loading: false,
    loadError: false,
    ...stateOverrides,
  },
  actions: {
    load({commit}) {
      commit('startLoading');
      api
        .loadRestaurants()
        .then(records => {
          commit('storeRecords', records);
        })
        .catch(() => {
          commit('recordLoadingError');
        });
    },
  },
  mutations: {
    startLoading(state) {
      state.loadError = false;
      state.loading = true;
    },
    storeRecords(state, records) {
      state.records = records;
      state.loading = false;
    },
    recordLoadingError(state) {
      state.loading = false;
      state.loadError = true;
    },
  },
});

export default restaurants;
