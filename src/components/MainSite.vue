<script setup>
 import MainSearch from '@/components/MainSearch.vue'

</script>

<template>
  <div class="wrapper">
  <MainSearch />
  <h1>mainsite</h1>
  </div>
</template>

<style scoped lang="postcss">
  .wrapper {
    @apply container mx-auto flex flex-col gap-2 py-2;
  }
</style>