<script setup>
  import { ref } from 'vue'
    const title = ref('📓 Directory')
</script>

<template>
    <nav>
      <div class = "wrapper">
        <div class = "brand">
          <span class = "brand-title">{{ title }}</span>
        </div>
        <div class = "menu">
          <a href="#" class="menu-item">Departments</a>
          <a href="#" class="menu-item">Settings</a>
          <a href="#" class="menu-login">Logout</a>
        </div>
      </div>
    </nav>
  </template>

<style scoped lang="postcss">
nav {
  @apply flex h-20 bg-cyan-400  text-green-200;
  .wrapper {
    @apply container mx-auto flex w-full items-center justify-between;
    .brand {
      &-title {
        @apply text-2xl font-bold text-fuchsia-200;
      }
    }
    .menu {
      @apply flex gap-2;
      &-item {
        @apply rounded-md px-4 py-2 hover:bg-yellow-400 hover:text-slate-900;
      }
      &-login {
        @apply rounded-md bg-blue-900 px-4 py-2 text-red-100 hover:bg-red-400  hover:text-slate-900;
      }
    }
  }
}
</style>