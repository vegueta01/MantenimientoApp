import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Usuarios',
      name: 'usuarios',
      component: () => import('./views/Usuarios.vue')
    },
    {
      path: '/ingresoAMantenimineto',
      name: 'IngresoAMantenimineto',
      component: () => import( './views/IngresoAMantenimineto.vue')
    },
    {
      path: '/ingresoMantenimineto',
      name: 'IngresoMantenimineto',
      component: () => import( './views/IngresoMantenimineto.vue')
    },
    {
      path: '/estados',
      name: 'Estados',
      component: () => import( './views/Estados.vue')
    }
    
  ]
})
