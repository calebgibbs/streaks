import { createRouter, createWebHistory } from 'vue-router'
import Streaks from '../views/Streaks.vue'
import Authentication from '../views/Authentication.vue'

const routes = [
 {
   path: '/', 
   name: 'Streaks', 
   component: Streaks
 }, 
 {
    path: '/login',
    name: 'Login', 
    component: Authentication 
 }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
