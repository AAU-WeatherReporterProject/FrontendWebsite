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
    getMeasurements: async function () {
      let weather = '';
      try {
        const response = await api.getMeasurements();
        weather = response;
      } catch (e) {
        weather = 'Weather Data could not be fetched.';
        console.error(e);
      }
      return weather;
    }
  },
  modules: {
  }
})
