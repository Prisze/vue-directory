import { createRouter, createWebHistory } from 'vue-router'

import MainSite from '@/components/MainSite.vue'
import Login from '@/components/Login.vue'

import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/', name: 'Home',  component: MainSite },
  { path: '/login', name: 'Login', component: Login },

  { path: '/:pathMatch(.*)*', name: 'NotFound',  component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router


