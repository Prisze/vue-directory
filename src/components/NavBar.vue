<script setup>
  import { ref } from 'vue'

  import { useAuth } from '@/composables/useAuth'
  const { isAuthenticated, logout, user } = useAuth()

    const title = ref('📓 Vue Directory')
</script>

<template>
    <nav>
      <div class="wrapper">
        <RouterLink :to="{ name: 'Home' }" class="brand">
          <span class="brand-title">{{ title }}</span>
        </RouterLink>
        <div class="menu">
          <p v-show="isAuthenticated" class="px-2 py-4">
            Welcome
            <strong
              ><i>{{ user.name }}</i></strong
            >
          </p>
          <div v-if="isAuthenticated">
            <RouterLink :to="{ name: 'Settings' }" href="#" class="menu-item">Settings</RouterLink>
            <button class="menu-logout" @click="logout">Logout</button>
          </div>
          <div v-else>
            <RouterLink :to="{ name: 'Login' }" href="#" class="menu-login">Login</RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </template>

<style scoped lang="postcss">
nav {
  @apply flex h-20 bg-cyan-400  text-purple-500;
  .wrapper {
    @apply container mx-auto flex w-full items-center justify-between;
    .brand {
      &-title {
        @apply text-2xl font-serif font-semibold text-fuchsia-200;
      }
    }
    .menu {
      @apply flex gap-2 font-bold font-mono;
      & div {
        @apply py-2;
      }
      &-item {
        @apply rounded-full px-2 py-1 hover:bg-blue-800 hover:text-slate-200;
      }
      &-login {
        @apply rounded-md bg-blue-500 px-1 py-1 text-white hover:bg-red-500  hover:text-yellow-900;
      }
      &-logout {
        @apply rounded-md bg-blue-500  px-1 py-1 text-red-100 hover:bg-red-700;
      }
    }
  }
}
</style>