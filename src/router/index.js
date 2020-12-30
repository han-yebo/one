import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/home',
        redirect:'/home/index'
      },
      {
        path: 'index',
        name: 'Index',
        component: () => import(/* webpackChunkName: "about" */ '../components/Index.vue')
      },
      {
        path: 'culum',
        name: 'Culum',
        component: () => import(/* webpackChunkName: "about" */ '../components/Culum/Culum.vue')
      }
    ]
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
