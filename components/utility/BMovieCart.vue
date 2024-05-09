<script setup lang="ts">
import BIMDB from "~/components/utility/BIMDB.vue";
const props = defineProps(['movie']);
const image = "https://m.media-amazon.com/images/M/MV5BZTc1NDFlN2MtOWFjZi00ZWNmLTk1MmEtYThjNDgxNjY2YjU2XkEyXkFqcGdeQXVyNjQxNDYyODI@._V1_.jpg";
const is_favourite = ref(props.movie?.like_dislike?.is_favourite ? true : false)

async function favouriteAction (content_id: any)  {
  const response = await callApi('/account/favourite/action', {
    method: 'POST',
    params: {
      content_id: content_id,
      action: 'favourite'
    }
  });
  console.log(is_favourite.value)
  const status = response.data?.like_dislike?.is_favourite ;
  is_favourite.value = status ? true : false;

  console.log(is_favourite.value)
}

</script>

<template>
  <NuxtLink :to="'/play/'+props.movie.slug" class="hover:opacity-80 rounded-lg cursor-pointer relative">
    <UBadge v-show="props.movie.play_mode == 'paid'" class="absolute rounded-none right-[0px] top-1" color="black" variant="solid">Premium</UBadge>
    <NuxtImg class="rounded-lg mt-1 h-[300px] object-cover w-[230px]" :src="props.movie.thumbnail"/>
    <div class="p-2">
      <p class="text-lg font-bold mt-1 line-clamp-1 text-left">{{props.movie.name}}</p>
      <p class="text-violet-950 mt-1 text-left">{{props.movie.year}}</p>
      <div class="mt-1 flex justify-between">
        <BIMDB :rating="props.movie.rating"></BIMDB>
        <div class="icons flex">
          <UButton class="p-2" color="violet" variant="ghost">
            <UIcon name="i-heroicons-eye"></UIcon>
          </UButton>
          <UButton @click.stop.prevent="favouriteAction(props.movie.content_id)" class="p-2" :color="is_favourite ? 'rose' : 'violet'" variant="ghost">
            <UIcon  name="i-heroicons-heart"></UIcon>
          </UButton>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

