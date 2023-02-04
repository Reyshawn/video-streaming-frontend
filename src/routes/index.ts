import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'


const routes: RouteRecordRaw[] = [
  { path: '/login', component: LoginPage },
  { path: '/', component: HomePage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

