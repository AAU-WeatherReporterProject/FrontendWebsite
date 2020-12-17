import AXIOS from 'axios';
// import store from '@/store/index';

const axios = AXIOS.create({
  baseURL: `/api`
});

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
    test(){
        return axios.get('/test');
    }
}