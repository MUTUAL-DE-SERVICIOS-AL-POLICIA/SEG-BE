import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../components/main'
import Info from '../components/info'

Vue.use(VueRouter)

const routes = [
 {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /*webpackChunkName: "about" */ '../views/About.vue')
  }, 
  
  {
    name: 'inicio',
    path: '/',
    component: Main
  }, {
    path: '/info',
    name: 'info',
    component: Info,

  }
]



const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router
