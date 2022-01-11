import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';
import restaurants from './restaurants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {restaurants: restaurants(api)},
});
