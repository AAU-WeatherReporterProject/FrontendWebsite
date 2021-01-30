import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/services/backend-api';
import weatherChartData from '@/weather-chart';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        inputMsg: 'Waiting',
        skyWeather: ['Sunny', 'Windy', 'Cloudy', 'Rain', 'Clear'],
        weatherChartData : weatherChartData
    },
    actions: {
        getMeasurements: async function () {
            let msg;
            try {
                msg = await api.getMeasurements();
            } catch (e) {
                msg = 'Weather Data could not be fetched.';
                console.error(e);
            }
            return msg;
        },

        async getWeatherData({commit}, key) {
            let msg = '';
            try {
               msg = await api.getWeatherData(key);
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
            let key = weatherinfo.key;
            let temperature = weatherinfo.temperature;
            let skyState = weatherinfo.skyState;
            let humidity = weatherinfo.humidity;
            let pressure = weatherinfo.pressure;
            return await api.sendWeatherData({
                    metadata: {key},
                    measurements: [{temperature, skyState, humidity, pressure}]
                });
        }
    },
    modules: {}
})

// Vue.use(weatherChartData);
