import AXIOS from 'axios';
import { withVersioning, VersioningStrategy } from 'axios-api-versioning';
// import store from '@/store/index';

const axiosClient = AXIOS.create({
  baseURL: `/api/v{apiVersion}`
});0

// Make Versioning over URL possible
const axios = withVersioning(axiosClient, {
    apiVersion: '1',
    versioningStrategy: VersioningStrategy.UrlPath
});

const options = {
    headers:{
        'Content-Type': 'application/json'
    }
};

// axios.interceptors.request.use(config => {
//     if(store.getters.token){
//         config.headers.Authorization = `Bearer ${store.getters.token}`;
//     }
//     return config;
// });

// axios.interceptors.response.use(config =>{
//     if(config.status === 401){
//         store.dispatch('logout', true);
//     }
//     return config;
// });

export default {
    // POST - send Data
    sendWeatherData(data){
        return axios.post(`/ingest`,data, options);
    },

    addMeasurementPoint(data){
        return axios.post(`/measurementPoint`, data, options);
    },

    // GET - fetch Data
    getMeasurements(){
        return axios.get(`/measurementPoints`);
    },

    getWeatherData(key, from, to){
        return axios.get(`/dataPoints`, {params: {key, from, to}});
    }
}