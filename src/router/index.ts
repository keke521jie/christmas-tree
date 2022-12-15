import { createRouter, createWebHistory } from 'vue-router'
import Home from '../page/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/draw',
      name: 'draw',
      component: () => import('../page/Draw.vue')
    },
    {
      path: '/celebrate',
      name: 'celebrate',
      component: () => import('../page/Celebrate.vue')
    }
  ]
})

export default router
