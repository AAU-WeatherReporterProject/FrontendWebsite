import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/services/backend-api';

Vue.use(Vuex)

export default new Vuex.Store({
    data: {
        inputMsg: 'Waiting'
    },
    state: {},
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
        }
    },
    mutations: {
        async saveWeather(state, weatherinfo) {
            let key = weatherinfo.key;
            let temperature = weatherinfo.temperature;
            let skyState = weatherinfo.skyState;
            if (isNaN(temperature)) {
                throw this.inputMsg = 'Invalid temperature';
            } else if (isNaN(skyState) || skyState < 0 || skyState > 4) {
                throw this.inputMsg =   'Invalid sky state';
            } else {
                try {
                    await api.sendWeatherData({
                        metadata: {key},
                        measurements: [{temperature, skyState}]
                    });
                    this.inputMsg = 'Data send';
                } catch (e) {
                    throw this.inputMsg = 'Error while sending data';
                    // console.error(e);
                }
            }
            return this.inputMsg;
        }
    },
    modules: {}
})