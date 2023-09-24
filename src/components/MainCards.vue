<script setup>
  import MainSegments from '@/components/MainSegments.vue'
</script>

<template>
  <div class="sub-wrapper">
    <MainCardsSingle  />
  </div>
</template>

<style scoped lang="postcss">
  .sub-wrapper {
    @apply grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
  }
</style>