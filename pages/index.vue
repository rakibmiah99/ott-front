<template>

  <BHeader/>
  <CategoryWisedSectionMove :data="category" v-for="category in categoryStore"/>

  <div class="py-8">
    <BWatched/>
  </div>

  <Footer/>
</template>

<script setup>
import Footer from "~/components/BFooter.vue";
import {getHomepageData} from "~/composables/api.js";
const categoryStore = useState('category', () => []);
const {headerMovieStore, makeHeaderMovieStore} = useSliderHeaderMovie();

const height = ref(0)
onMounted(
  () => {
    getHomepageData()
    const body = document.getElementsByTagName('body')[0];
    height.value = (body.clientHeight * 75) / 100;
    const {x,y} = useWindowScroll();
    var limit = 5;
    var skip = 0;
    var loaded = false;
    window.addEventListener('scroll', async function(e){
      

      //if scroll height grather than body * 75% height
      if(y.value > height.value){
       
        //if not loaded category movies
        if(!loaded){
          loaded = true;
          //load category movies
          skip = limit;
          limit += 3;
          await getCategoryWiseMovies(limit, skip);
          
        }
        //if body 75% height grater loaded preloaded body height 
        if((body.clientHeight * 75) / 100 > height.value ){
          //set new height 
          height.value = (body.clientHeight * 75) / 100;

          //enable again category movies loaded data avility   
          loaded = false;
        }
        
      }

    })
    

  
  }
)



await getCategoryWiseMovies();

async function getCategoryWiseMovies (limit = null, skip = null)  {
const options = {}
options.method =  'GET';
if(limit && skip){
  options.query = {limit : limit, skip: skip}
}

const response = await callApi('/home', options)
categoryStore.value = categoryStore.value.concat(response.data.sub_category_and_movies);
if(response.data?.slider_movies){
  console.log('slider',response.data.slider_movies)
  headerMovieStore.value = response.data.slider_movies;
}

}

</script>
