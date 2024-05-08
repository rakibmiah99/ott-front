<template>
    <UContainer>
      <BuyPackageInMovie v-show="movie.play_mode == 'paid'"/>
      <div v-show="movie.play_mode == 'free'">
        <div class="player  w-full bg-gray-100 overflow-hidden">
            <BPlayer/>
        </div>

  <!--      Buy Now Section-->
        <div class="flex bg-violet-100 p-4 justify-between">
          <div class="">
            <h1 class="text-xl text-violet-900 font-bold">Starting from $100</h1>
            <p class="text-sm mt-1">Enjoy premium experience without any ads</p>
          </div>
          <div class="">
            <UButton label="Remove Ads" size="xl" color="violet"/>
          </div>
        </div>

  <!--      Movie Details-->
        <div class="py-6 space-y-3">
          <div  class="flex space-y-3  lg:space-y-0 justify-between flex-col lg:flex-row">
            <h1 class="text-3xl font-bold">{{movie.name ?? 'When I See Your Face - Chena Chena Lage - S1 E1'}}</h1>
            <div class="social flex space-x-3">
              <UButton icon="i-heroicons-hand-thumb-up" class="text-violet-500 hover:text-white hover:bg-violet-500 bg-violet-50 rounded"/>
              <UButton icon="i-heroicons-hand-thumb-down" class="text-violet-500 hover:text-white hover:bg-violet-500 bg-violet-50 rounded"/>
              <UButton icon="i-heroicons-plus" class="text-violet-500 hover:text-white hover:bg-violet-500 bg-violet-50 rounded" label="My List"/>
              <UButton icon="i-heroicons-share" class="text-violet-500 hover:text-white hover:bg-violet-500 bg-violet-50 rounded" label="Share"/>
            </div>
          </div>

  <!--        description-->
          <p class="text-gray-700">2023 • TV Series • 28 Min 27 Sec </p>
          <div class="flex space-y-3 md:space-y-0 flex-col md:flex-row  flex-wrap justify-between text-gray-700">
            <div class="celebrities basis-1 space-y-3 md:basis-6/12 lg:basis-8/12 ">
                <p class="text-justify">{{movie.description ?? 'Lumina and Lianju meet for the first time. But can Lumina remember him?'}}</p>
                <div>
                  <NuxtLink class="d-flex flex-wrap" to="/" v-for="item in movie.celebrities">
                  <UAvatar
                    class="mr-1"
                    :src="item.image"
                    :alt="item.name"
                    size="lg"
                  />
                </NuxtLink>
                </div>
              </div>
            <div class="basis-1 text-left md:basis-6/12 lg:basis-4/12 md:text-right">
              <div>
                Genres: <NuxtLink v-for="item in movie.generics" to="/"><UBadge color="white" class="mr-1 rounded-none" variant="solid">{{ item.name }}</UBadge></NuxtLink>
              </div>
            </div>
          </div>
          
          <div v-show="movie.seasons.length > 0 && seasons.length > 0 ? true : false">
            <USelectMenu 
              color="violet"
              v-model="selected" 
              :options="seasons" 
              value-attribute="slug"
              option-attribute="name"
            />
          </div>
          

  <!--        tabs-->
          <div class="" v-show="items.length > 0 ? true : false">
            <UTabs :items="items" :default-index="0" :ui="uiConfig">
              <template #default="{ item, index, selected }">
                <div class="flex gap-2 relative">
                  <span class="truncate text-left">{{ item.label }}</span>
  <!--                <span v-if="selected" class="text-violet-900" />-->
                </div>
              </template>
              <template #episod="{item}">
                <div>
                  <NuxtLink :to="`/play/`+movie.slug" v-for="movie in tabEpisodesStore" class="flex space-x-3 border-b p-3 even:bg-violet-50">
                    <NuxtImg class="w-[150px] sm:w-[150px] md:w-[200px] object-cover aspect-[6/4]" :src="movie.thumbnail ?? 'https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/79e519c5-47e0-4a29-916b-c2032f225ad7/fdc1fe99-82c1-4987-8127-dc1bd19bbbe5.jpg'"/>
                    <div class="flex flex-col space-y-1">
                      <h1 class="text-md md:text-lg lg:text-xl font-bold">{{movie.name ?? 'When I See Your Face - Chena Chena Lage - S1 E1'}}</h1>
                      <p class="text-sm sm:text-md text-gray-700 line-clamp-3">{{ movie.description ?? 'Lumina and Lianju meet for the first time. But can Lumina remember him?' }}</p>
                      <!-- <p class="text-2xl">{{item.content}}</p> -->
                    </div>
                  </NuxtLink>
                </div>
              </template>


              <template #more>
                <div class="flex flex-wrap">
                  <NuxtLink class="basis-1/3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 rounded-sm hover:opacity-70 p-2">
                    <NuxtImg class="bg-violet-50 p-1 rounded-sm" src="https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/79e519c5-47e0-4a29-916b-c2032f225ad7/fdc1fe99-82c1-4987-8127-dc1bd19bbbe5.jpg"/>
                  </NuxtLink>
                  <NuxtLink class="basis-1/3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 rounded-sm hover:opacity-70 p-2">
                    <NuxtImg class="bg-violet-50 p-1 rounded-sm" src="https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/79e519c5-47e0-4a29-916b-c2032f225ad7/fdc1fe99-82c1-4987-8127-dc1bd19bbbe5.jpg"/>
                  </NuxtLink>
                  <NuxtLink class="basis-1/3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 rounded-sm hover:opacity-70 p-2">
                    <NuxtImg class="bg-violet-50 p-1 rounded-sm" src="https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/79e519c5-47e0-4a29-916b-c2032f225ad7/fdc1fe99-82c1-4987-8127-dc1bd19bbbe5.jpg"/>
                  </NuxtLink>
                  <NuxtLink class="basis-1/3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 rounded-sm hover:opacity-70 p-2">
                    <NuxtImg class="bg-violet-50 p-1 rounded-sm" src="https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/79e519c5-47e0-4a29-916b-c2032f225ad7/fdc1fe99-82c1-4987-8127-dc1bd19bbbe5.jpg"/>
                  </NuxtLink>
                  <NuxtLink class="basis-1/3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 rounded-sm hover:opacity-70 p-2">
                    <NuxtImg class="bg-violet-50 p-1 rounded-sm" src="https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/79e519c5-47e0-4a29-916b-c2032f225ad7/fdc1fe99-82c1-4987-8127-dc1bd19bbbe5.jpg"/>
                  </NuxtLink>
                </div>
              </template>
            </UTabs>
          </div>
        </div>
      </div>

    </UContainer>
</template>
<script setup>

import BFixedNav from "~/components/nav/BFixedNav.vue";
import BPlayer from "~/components/BPlayer.vue";
import {definePageMeta} from "#imports";
const route = useRoute();
const {bodyLoaderStore, tabEpisodesStore} = useUtility();

definePageMeta({
  layout: 'fixed-nav-layout'
})
const uiConfig = {
  wrapper: 'relative space-y-2',
  container: 'relative w-full py-5',
  base: 'focus:outline-none',
  list: {
    base: 'relative',
    background: 'bg-white dark:bg-gray-800',
    rounded: 'rounded-lg',
    shadow: '',
    padding: 'p-0',
    height: 'h-10',
    width: 'w-1/3',
    marker: {
      wrapper: 'absolute top-[4px] h-[42px!important] left-[4px] duration-200 ease-out focus:outline-none',
      base: 'w-full font-bold h-full border-b-4 border-violet-500',
      background: 'bg-violet-50',
      rounded: 'rounded-none',
      shadow: 'shadow-sm',
    },
    tab: {
      base: 'relative pl-3 inline-flex justify-start flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
      background: '',
      active: 'text-violet-500 font-fold',
      inactive: 'text-gray-500 dark:text-gray-400',
      height: 'h-8',
      padding: 'px-3',
      size: 'text-md',
      font: 'font-medium',
      rounded: 'rounded-none',
      shadow: '',
    },
  },
}
var items = reactive([]);
var moreLikes = {
      slot: 'more',
      label: 'More Like This',
      content: 'And, this is the content for Tab2'
    }

// {name: 'Wade Cooper', slug: 'Wade-Cooper'}, {name: 'Arlene Mccoy', slug: 'Arlene-Mccoy'}
var seasons = reactive([]);
const selected = ref('')
var movie = reactive({
  id: null,
  slug: null,
  name: null,
  description: null,
  play_mode: null,
  rating: null,
  visibility: null,
  trailer_youtube_link: null,
  video_path: null,
  like_dislike: [],
  categories: [],
  sub_categories: [],
  film_industry: null,
  celebrities: [],
  seasons: [],
  generics: [],
  episodes: []
}); 

watch(selected, async (currentValue, oldValue) => {
  if(oldValue != ""){
    bodyLoaderStore.value = true;
    const response = await callApi('/season/'+currentValue)
    const data = response.data;
    tabEpisodesStore.value = data.episodes;
    bodyLoaderStore.value = false;
  }
});


bodyLoaderStore.value = true;
const response = await callApi('/movies/'+route.params.movie_name);
movie  = response.data;
//for season dropdown menu 
var seasonData = [];
var activeSeasonData = null;
movie.seasons.forEach(function(season){
  seasonData.push({name: season.name, slug: season.slug});
  if(season.is_active == true){
    activeSeasonData = season.slug;
  }
})
seasons = seasonData;
selected.value = activeSeasonData ?? seasonData[0]?.slug

tabEpisodesStore.value = movie.episodes;
if(movie.episodes.length > 0 || movie.seasons.length > 0){
  var episodes = {
      slot: 'episod',
      label: 'Episode',
      // movies: movie.episodes
    };

  items = [episodes, moreLikes]
}
else{
  items = [moreLikes];
}

bodyLoaderStore.value = false;

</script>