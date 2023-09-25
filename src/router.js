import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth.js'

const { isAuthenticated } = useAuth()

import MainSite from '@/components/MainSite.vue'
import Login from '@/components/Login.vue'
import Settings from '@/components/Settings.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/', name: 'Home',  component: MainSite },
  { path: '/login', name: 'Login', component: Login },
  { path: '/settings', name: 'Settings', component: Settings, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    return { name: 'Login', query: { redirect: to.fullPath } }
  }
})

export default router