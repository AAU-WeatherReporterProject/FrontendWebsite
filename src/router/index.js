import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeInstruction.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkWeather',
    name: 'CheckWeather',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CheckWeather.vue')
  },
  {
    path: '/inputWeather',
    name: 'InputWeather',
    component: () => import(/* webpackChunkName: "about" */ '../views/InputWeather.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
