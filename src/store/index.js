import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/services/backend-api';

Vue.use(Vuex)

export default new Vuex.Store({
  data:{
    inputMsg: 'Waiting'
  },
  state: {
  },
  actions: {
    getMeasurements: async function () {
      let msg;
      try {
        const response = await api.getMeasurements();
        msg = response;
      } catch (e) {
        msg = 'Weather Data could not be fetched.';
        console.error(e);
      }
      return msg;
    },

    async getWeatherData([key, from, to]){
      let msg = '';
      try{
        const response = await api.getMeasurements();
        // for(let measurement of response.data){
        //   message += `\nname: ${measurement.name}; \nlocation: ${measurement.location}; \nkey: ${measurement.measurementKey}`;
        // }
        // weather = response;
        msg = key;
      }
      catch(e){
        msg = 'Weather Data could not be fetched.';
        console.error(e);
      }
      return msg;
    },

    async sendWeatherData({commit}, weather){
      commit('saveWeather', weather);
      return this.inputMsg;
    }
  },

  mutations:{
    async saveWeather(state, weatherinfo) {
     let key = weatherinfo.key;
     let temperature = weatherinfo.temperature;
     let skyState = weatherinfo.skyState;
      try {
        await api.sendWeatherData({
          metadata: {key},
          measurements: [{temperature, skyState}]
        });
        this.inputMsg = 'Data send';
      } catch (e) {
        this.inputMsg = 'Error while sending data';
        console.error(e);
      }
      return this.inputMsg;
    }
  },
  modules: {
  }
})
// async sendWeatherData([key, temperature, skyState]){
//   let weather = '';
//   temperature = +temperature;//.replace(',', '.');
//   skyState = +skyState;
//   if(isNaN(temperature)){
//     weather = 'Invalid temperature';
//   }
//   else if(isNaN(skyState) || skyState < 0 || skyState > 4){
//     weather = 'Invalid sky state';
//   }
//   else{
//     try{
//       await api.sendWeatherData({
//         metadata: {key},
//         measurements: [{temperature, skyState}]
//       });
//       weather = 'Data send';
//     }
//     catch(e){
//       weather = 'Error while sending data';
//       console.error(e);
//     }
//   }
//   return weather;
// },