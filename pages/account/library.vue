<template>
  <h1 class="px-4 text-sm">Showing All Your Libraries</h1>
  <div v-show="movies.length > 0">
        <ul role="list" class="mt-3">
        <li v-for="movie in movies" class=" ">
          <NuxtLink class="group/item hover:bg-slate-100 space-x-3 flex p-4 rounded-md">
            <img class="w-[230px] h-[80px] rounded-md" :src="movie.thumbnail" alt="" />
            <div style="" class="pr-[70px]">
              <h1 class="text-2xl font-bold">{{ movie.name }}</h1>
              <p class="line-clamp-2 mt-1 text-xs">When the Russian Prime Minister's children are abducted and Chernobyl's nuclear plant is seized by terrorists, a team of four Universal Soldiers is di.... </p>
            </div>
            <div class="flex justify-center items-center">
              <UButton size="xs" icon="i-heroicons-trash" color="red"></UButton>
            </div>
          </NuxtLink>
        </li>
      </ul>
      <div>
        <UPagination
            :active-button="{ variant: 'solid', color: 'violet' }"
            :inactive-button="{ color: 'gray' }"
            v-model="page"
            :page-count="1"
            size="xs"
            :total="links.length"
            class="justify-start mt-5"
        />
      </div>
  </div>

  <UserItemNotFound v-show="movies.length == 0"/>
</template>
<script setup>
  import {definePageMeta} from "#imports";
  const {bodyLoaderStore} = useUtility();
  const page = ref(1)
  const movies = ref([])
  const links = ref([])

  watch(page, async (active, old) => {
    await getHistory(active);
    // console.log('ddd', active +'-'+old);
  })

  definePageMeta({
    // layout: 'user-profile-layout'
    layout: 'user-profile-layout'
  })

  onMounted(async() => {
    await getHistory();
  })




  async function getHistory(page = 1){
    bodyLoaderStore.value = true;
    const response = await callApi('/account/play-list-movies?page='+page);
    bodyLoaderStore.value = false;
    var data = response.data;
    movies.value = data.data;
    var urls = data.links;
    urls.shift();
    urls.pop();
    links.value = urls;
  }
</script>