import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wmeimob',
    name: 'wmeimob',
    component: () => import('@/views/wmeimob/index.vue')
  },
  {
    path: '/gj',
    name: 'gj',
    component: () => import('@/views/gj/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
