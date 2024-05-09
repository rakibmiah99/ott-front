<template>

  <BHeader/>
  <CategoryWisedSectionMove :category_data="categoryData" :data="category" v-for="category in categoryStore"/>

  <div class="py-8">
    <BWatched/>
  </div>

  <Footer/>
</template>

<script setup>
  import Footer from "~/components/BFooter.vue";
  const categoryStore = ref([]);
  const categoryData = ref(null);
  const {headerMovieStore, makeHeaderMovieStore } = useSliderHeaderMovie();
  const {bodyLoaderStore, onMountedCall, whenReloadPageScrollTop} = useUtility();
  whenReloadPageScrollTop();
  categoryStore.value = [];
  await getCategoryWiseMovies()
  // onMountedCall(getCategoryWiseMovies)

  async function getCategoryWiseMovies (limit = null, skip = null)  {
    const options = {}
    options.method =  'GET';
    if(limit && skip){
      options.query = {limit : limit, skip: skip}
    }
    bodyLoaderStore.value = true;
    const response = await callApi('/home', options)
    bodyLoaderStore.value = false;
    if(response.data){
      categoryStore.value = categoryStore.value.concat(response.data.sub_category_and_movies);
      if(response.data?.slider_movies){
        categoryData.value = response.data.category;
        headerMovieStore.value = response.data.slider_movies;
      }
  }
}

</script>
