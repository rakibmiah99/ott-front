<template>
  <div class="mt-5 py-8 odd:bg-violet-50">
    <UContainer>
      <div class="mb-6 flex justify-between items-center">
        <h1 class="text-2xl">{{props.data.name}}</h1>
        <UButton :to="'/category/'+props.category_data.slug+'/' +props.data.slug" icon="i-heroicons-queue-list" color="violet" variant="soft">Show All</UButton>
      </div>
      <Carousel v-bind="settings" :breakpoints="breakpoints" >
        <Slide v-for="(movie, index) in props.data.movies" :key="index">
          <BMovieCart :movie="movie"/>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </UContainer>
  </div>
</template>
<script setup>
import BMovieCart from "~/components/utility/BMovieCart.vue";
const props = defineProps(['data', 'category_data'])
const settings =  {
  itemsToShow: 2,
  snapAlign: 'center',
}

const breakpoints = {
  // 700px and up
  640: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  768: {
    itemsToShow: 4,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: 'start',
  },
}


</script>
