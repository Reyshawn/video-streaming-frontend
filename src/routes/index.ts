import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'
import { userStore } from '../store/UserStore'
import RegisterPage from '../pages/RegisterPage.vue'

const routes: RouteRecordRaw[] = [
  {
    name: 'Login',
    path: '/login',
    component: LoginPage 
  },
  {
    name: 'Register',
    path: '/register',
    component: RegisterPage 
  }
]

const authRoutes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: HomePage
  }
]

const requireAuth = (path: string) => {
  return !routes.map(i => i.path).includes(path)
}

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes,
    ...authRoutes
  ]
})
 

router.beforeEach((to, from) => {
  const store = userStore()
  const token = store.token


  if (token == null && requireAuth(to.path)) {
    return '/login'
  }

  if (token != null && to.path === '/login') {
    return '/'
  }

  return true
})

