import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'
import { userStore } from '../store/UserStore'

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
  const store = userStore()
  const token = store.token

  if (to.path === '/login' && token != null) {
    return '/'
  }

  if (to.path !== '/login' && token == null) {
    return '/login'
  }

  return true
})

