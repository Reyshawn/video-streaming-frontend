import { createRouter, createWebHistory, NavigationGuardWithThis, RouteRecordRaw } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'

const routes: RouteRecordRaw[] = [
  {
    name: 'Login',
    path: '/login',
    component: LoginPage 
  },
  {
    name: 'Home',
    path: '/',
    component: HomePage
  }
]


export const router = createRouter({
  history: createWebHistory(),
  routes
})
 

router.beforeEach((to, from) => {

  const token = localStorage.getItem('token')

  if (to.path === '/login' && token != null) {
    return '/'
  }

  if (to.path !== '/login' && token == null) {
    return '/login'
  }

  return true
})

