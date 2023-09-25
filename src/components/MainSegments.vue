<script setup>
import { faker } from '@faker-js/faker'

    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const fullName = `${firstName} ${lastName}`

    const selectCard = () => {
        console.log(`${fullName} selected`)
  }

</script>

<template>
    <div class="card" @click="selectCard">
        <div class="card-image">
        <img :src="faker.internet.avatar()" alt="" srcset="" />
        </div>
        <div class="card-details">
        <p class="card-details-name">{{ fullName }}</p>
        <p class="card-details-job">{{ faker.name.jobTitle() }}, {{ faker.name.jobArea() }}</p>
        <p class="card-details-quote">"{{ faker.lorem.paragraph() }}"</p>
        </div>
    </div>

</template>


<style scoped lang="postcss">
  .card {
    @apply cursor-pointer overflow-hidden rounded-full bg-yellow-100 p-8 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-300;
    &-image {
      img {
        @apply mx-auto rounded-t-3xl object-contain;
      }
    }
    &-details {
      @apply flex flex-col gap-2  pt-6 text-center;
      &-name {
        @apply text-3xl font-thin font-serif tracking-wider text-cyan-700;
      }
      &-job {
        @apply -mt-2 text-xs font-bold text-orange-700;
      }
      &-quote {
        @apply pt-4 text-lg italic text-violet-900;
      }
    }
  }
</style>