import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/testing',
      name: 'testing',
      component: () => import('../views/TestingView.vue'),
    },
    {
      path: '/test/:id',
      name: 'test-detail',
      component: () => import('../views/TestDetailView.vue'),
    },
    {
      path: '/fs',
      name: 'fbview',
      component: () => import('../views/FSView.vue'),
    },
    {
      path: '/login',
      name: 'Logging',
      component: () => import('../views/Logging.vue'),
    }
  ],
})

export default router
