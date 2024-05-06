export const useUtility = () => {
    const isSidebarOpenStore = useState('is_sidebar_open', () => false)
    const bodyLoaderStore = useState('body_loader', () => true);

    const tabEpisodesStore = useState('tab_episode', () => []);


    const onMountedCall = (callApi) => {
        onMounted(
            () => {
              const {x,y} = useWindowScroll();
              const body = document.documentElement;
              const height = ref(0);
              var loaded = false;
              var limit = 5;
              var skip = 0;
              height.value = (0.75 * body.scrollHeight) - window.innerHeight;
              window.addEventListener('scroll', async function(e){
                //if scroll height grather than body * 75% height
                if(y.value > height.value){
                  console.log(y.value + ' > '+height.value)
          
                  //if not loaded category movies
                  if(!loaded){
                    loaded = true;
                    //load category movies
                    skip = limit;
                    limit += 3;
                    await callApi();
                    // await getCategoryWiseMovies(limit, skip);
                    
                  }
                  //if body 75% height grater loaded preloaded body height 
                  if((0.75 * body.scrollHeight) - this.window.innerHeight > height.value ){
                    //set new height 
                    height.value = (0.75 * body.scrollHeight) - this.window.innerHeight;
          
                    //enable again category movies loaded data avility   
                    loaded = false;
                  }
                  
                }
          
              })
              
          
            
            }
          )
    }

    const whenReloadPageScrollTop = () => {
        const nuxtApp = useNuxtApp();
        nuxtApp.hook("page:finish", () => {
          window.scrollTo(0, 0)
        })
    }



    return {
        isSidebarOpenStore,
        bodyLoaderStore,
        tabEpisodesStore,
        onMountedCall,
        whenReloadPageScrollTop
    }
}