<script setup>
  import { ref } from 'vue'

  import { useAuth } from '@/composables/useAuth'
  const { isAuthenticated, logout, user } = useAuth()
  
    const title = ref('📓 Vue Directory')
</script>

<template>
    <nav>
      <div class = "wrapper">
        <RouterLink :to="{ name: 'Home' }" class="brand">
          <span class ="brand-title">{{ title }}</span>
        </RouterLink> 
        
        <div class="menu">
          <a href="#" class="menu-item">Departments</a>
          <a href="#" class="menu-item">Settings</a>
          <a href="#" class="menu-login">Exit</a>
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
      &-item {
        @apply rounded-full px-2 py-1 hover:bg-blue-800 hover:text-slate-200;
      }
      &-login {
        @apply rounded-full bg-blue-500 px-1 py-1 text-white hover:bg-red-500  hover:text-yellow-900;
      }
    }
  }
}
</style>