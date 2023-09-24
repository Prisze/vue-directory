<script setup>
  import MainSearch from '@/components/MainSearch.vue'
  import MainCards from '@/components/MainCards.vue'

</script>

<template>
  <div class="wrapper">
  <MainSearch />
  <MainCards />
  <h1>mainsite</h1>
  </div>
</template>

<style scoped lang="postcss">
  .wrapper {
    @apply container mx-auto flex flex-col gap-2 py-2;
  }
</style>