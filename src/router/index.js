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
      path: '/results3',
      name: 'result3',
      component: () => import('../views/Result3.vue')
    },
    {
      path: '/result4',
      name: 'result4',
      component: () => import('../views/Result4.vue')
    },
    {
      path: '/result5',
      name: 'result5',
      component: () => import('../views/Result5.vue')
    },
    {
      path: '/result6',
      name: 'result6',
      component: () => import('../views/Result6.vue')
    },
    {
      path: '/result7',
      name: 'result7',
      component: () => import('../views/Result7.vue')
    },
    {
      path: '/result8',
      name: 'result8',
      component: () => import('../views/Result8.vue')
    },
    {
      path: '/result9',
      name: 'result9',
      component: () => import('../views/Result9.vue')
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
    },
    {
      path: '/candidate3',
      name: 'candidate3',
      component: () => import('../views/Candidate3.vue')
    },
    {
      path: '/candidate4',
      name: 'candidate4',
      component: () => import('../views/Candidate4.vue')
    },
    {
      path: '/candidate5',
      name: 'candidate5',
      component: () => import('../views/Candidate5.vue')
    },
    {
      path: '/candidate6',
      name: 'candidate6',
      component: () => import('../views/Candidate6.vue')
    },
    {
      path: '/candidate7',
      name: 'candidate7',
      component: () => import('../views/Candidate7.vue')
    },
    {
      path: '/candidate8',
      name: 'candidate8',
      component: () => import('../views/Candidate8.vue')
    },
    {
      path: '/candidate9',
      name: 'candidate9',
      component: () => import('../views/Candidate9.vue')
    },
  ]
})

export default router
