import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConvertBase64 from '@/views/ConvertBase64'
import ThankYou from '@/views/ThankYou'
import Login from '@/views/admin/Login'
import AdminVue from '@/views/admin/AdminVue'
import SideVue from '@/views/SideVue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'friendOfSide',
    component: SideVue
  },
  {
    path: '/ngoc-toan',
    alias: ['/toan-ngoc'],
    name: 'home',
    component: HomeView
  },
  {
    path: '/base64',
    name: 'base64',
    component: ConvertBase64
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: ThankYou
  },
  {
    path: '/my-login',
    name: 'Login',
    component: Login
  },
  {
    path: '/my-admin',
    name: 'Admin',
    component: AdminVue
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.fullPath.includes('my-admin')) {
    const accounts = ['ductoan110397', 'nhungoc121197']
    if (!accounts.includes(window.$cookies.get('account'))) {
      return next('/my-login')
    }
  }
  if (to.fullPath.includes('my-login')) {
    window.$cookies.remove('account')
  }
  return next()
})

export default router
