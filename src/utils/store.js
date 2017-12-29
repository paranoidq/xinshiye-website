import Vue from 'vue';
import Vuex from 'vuex'

import types from './types';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  mutations: {
    [types.LOADING]: (state, data) => {
      state.isLoading = true;
    },
    [types.LOADED]: (state, data) => {
      state.isLoading = false;
    },
  }
});
