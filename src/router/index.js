import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/results',
      name: 'result',
      component: () => import('../views/Resulst.vue')
    },
    {
      path: '/candidate',
      name: 'candidate',
      component: () => import('../views/Candidate.vue')
    }
  ]
})

export default router
