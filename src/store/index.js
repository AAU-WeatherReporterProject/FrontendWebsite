import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/services/backend-api';

Vue.use(Vuex)

export default new Vuex.Store({
    data: {

    },
    state: {
        inputMsg: 'Waiting',
        skyWeather: ['Sunny', 'Windy', 'Cloudy', 'Rain', 'Clear']
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

        async getWeatherData({commit}, key) {
            let msg = '';
            try {
                const response = await api.getWeatherData(key);
                msg = response;
            } catch (e) {
                msg = 'Weather Data could not be fetched.';
                console.error(e);
            }
            return msg;
        },

        async sendWeatherData({commit}, weather) {
            commit('saveWeather', weather);
            return this.inputMsg;
        },

        async saveWeather({commit}, weatherinfo) {
            console.log("in saveWeather");
            let key = weatherinfo.key;
            let temperature = weatherinfo.temperature;
            let skyState = weatherinfo.skyState;
            return await api.sendWeatherData({
                    metadata: {key},
                    measurements: [{temperature, skyState}]
                });
        }
    },
    modules: {}
})