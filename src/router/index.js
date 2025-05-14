import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import HbdChat from '@/views/HbdChat.vue'

const history = createWebHashHistory(import.meta.env.BASE_URL || '/')

const routes = [
  {
    path: '/',
    redirect: { name: 'welcome' }
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome,
  },
  {
    path: '/HbdMama',
    name: 'hbdChat',
    component: HbdChat,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'welcome' }
  }
]

const router = createRouter({
  history,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router