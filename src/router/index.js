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
      path: '/results1',
      name: 'result1',
      component: () => import('../views/Results1.vue')
    },
    {
      path: '/results2',
      name: 'result2',
      component: () => import('../views/Result2.vue')
    },
    {
      path: '/candidate',
      name: 'candidate',
      component: () => import('../views/Candidate.vue')
    },
    {
      path: '/candidate1',
      name: 'candidate1',
      component: () => import('../views/Candidate1.vue')
    },
    {
      path: '/candidate2',
      name: 'candidate2',
      component: () => import('../views/Candidate2.vue')
    }
  ]
})

export default router
