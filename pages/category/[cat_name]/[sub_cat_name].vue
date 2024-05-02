<template>
  <BFixedNav/>
  <UContainer class=" mt-5 ">
    <UBreadcrumb :links="links" :ui="{ ol: 'gap-x-3', li: 'gap-x-3' }" class="p-2">
      <template #divider>
        <span class="w-8 h-1 rounded-full bg-violet-600 dark:bg-gray-700" />
      </template>
      <template #default="{ link, isActive, index }">
        <UBadge :color="isActive ? 'gray' : 'violet'" class="rounded-sm px-3 py-2 uppercase">
          {{ link.label }}
        </UBadge>
      </template>
    </UBreadcrumb>
    <div class="flex mt-5 flex-wrap">
      
      <BMovieCart v-for="movie in movies" class="p-2  basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 border-b " :movie="movie"></BMovieCart>
      <!-- <BMovieCart class="p-2  basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2  basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2  basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2  basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2  basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2  basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2  basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 border-b " :movie="movie"></BMovieCart> -->
    </div>
  </UContainer>

  <BFooter/>
</template>
<script setup>
  import BFixedNav from "~/components/nav/BFixedNav.vue";
  import BMovieCart from "~/components/utility/BMovieCart.vue";
  const route = useRoute();

  const movies = ref([]);
  

  const height = ref(0)
  onMounted(
    () => {
      const body = document.getElementsByTagName('body')[0];
      height.value = (body.clientHeight * 75) / 100;
      const {x,y} = useWindowScroll();
      var limit = 15;
      var skip = 0;
      var loaded = false;
      window.addEventListener('scroll', async function(e){
        height.value = (body.clientHeight * 75) / 100;

        //if scroll height grather than body * 75% height
        if(y.value > height.value){
          
          //if not loaded category movies
          if(!loaded){
            loaded = true;
            //load category movies
            skip = limit;
            limit += 15;
            await getMovies(limit, skip);
            
          }
          //if body 75% height grater loaded preloaded body height 
          if((body.clientHeight * 75) / 100 > height.value ){
            console.log(y.value + ' > '+height.value)
            //set new height 
            height.value = (body.clientHeight * 75) / 100;

            //enable again category movies loaded data avility   
            loaded = false;
          }
          
        }

      })
      

    
    }
  )



  await getMovies();
  async function getMovies(limit = 15 , skip = 0){
    const response = await callApi('/category/'+route.params.cat_name+'/'+route.params.sub_cat_name, {
      params: {
        limit: limit,
        skip: skip
      }
    });
    const data = response.data;
    movies.value= movies.value.concat(data.movies);
  }


  const links = [{
    label: 'Home',
    to: '/'
  }, {
    label: route.params.cat_name,
    to: '/category/'+route.params.cat_name,
  }, {
    label: route.params.sub_cat_name,
  }]
  console.log(route.params)
</script>