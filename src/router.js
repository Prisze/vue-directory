import { createRouter, createWebHistory } from 'vue-router'

import MainSite from '@/components/MainSite.vue'
import LoginPage from '@/components/LoginPage.vue'

import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/',  component: MainSite },
  { path: '/login',  component: LoginPage },

  { path: '/:pathMatch(.*)*',  component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router


