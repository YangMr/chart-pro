import { createRouter, createWebHistory } from 'vue-router'
import Screen from '../views/screen/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/screen'
    },
    {
      path: '/screen',
      name: 'screen',
      component: Screen
    }
  ]
})

export default router
