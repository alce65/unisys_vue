import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Formulario from "../components/Formulario.vue";
import Demo from '../views/Demo.vue'
import Mensajes from '../components/Mensajes/Mensajes.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: Formulario
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/tareas',
    name: 'Tareas',
    component: () =>{
      return import('../views/Tareas.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  { path: '/mensajes', name: 'Mensajes', component: Mensajes },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
