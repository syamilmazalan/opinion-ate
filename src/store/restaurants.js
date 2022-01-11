const restaurants = api => ({
  namespaced: true,
  state: {
    records: [],
    loading: false,
    loadError: false,
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
      state.loading = true;
    },
    storeRecords(state, records) {
      state.records = records;
      state.loading = false;
    },
    recordLoadingError(state) {
      state.loadError = true;
    },
  },
});

export default restaurants;
