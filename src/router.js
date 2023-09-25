import { createRouter, createWebHistory } from 'vue-router'

import MainSite from '@/components/MainSite.vue'
import Login from '@/components/Login.vue'

import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/',  component: MainSite },
  { path: '/login',  component: Login },

  { path: '/:pathMatch(.*)*',  component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router


