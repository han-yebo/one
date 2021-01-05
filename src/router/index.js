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
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/sms_login',
    name: 'Sms_login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sms_login.vue'),
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
      },
      {
        path: 'my',
        name: 'My',
        component: () => import(/* webpackChunkName: "about" */ '../components/my/My.vue'),
      },
      {
        path: 'record',
        name: 'Record',
        component: () => import(/* webpackChunkName: "about" */ '../components/record/Record'),
      }
    ]
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  },
  {
    path: '/mydetail',
    name: 'Mydetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/my/Mydetail'),
  },
  {
    path: '/mycourse',
    name: 'Mycourse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/my/Mycourse'),
  },
  {
    path: '/balance',
    name: 'Balance',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/my/Balance'),
  },
  {
    path: '/follow',
    name: 'Follow',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/my/Follow'),
  },
  {
    path: '/collection',
    name: 'Collection',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/my/Collection'),
  },
  {
    path: '/set-info',
    name: 'Set-info',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/my/Set-info'),
  },
  {
    path: '/gender',
    name: 'Gender',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/my/Gender'),
  },
  {
    path: '/subject',
    name: 'Subject',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/my/Subject'),
  },
  
]

const router = new VueRouter({
  routes
})

export default router
