import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/services/backend-api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    test({commit}) {
      return api.test();
    }
  },
  modules: {
  }
})
