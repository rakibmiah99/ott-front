// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/tailwindcss',
    '@nuxt/ui',
    'vue3-carousel-nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    "@sidebase/nuxt-auth",
    // '@nuxtjs/axios'
  ],
  
  css: [
    '~/assets/css/vendor/video_js.css',
    '~/assets/css/vendor/plyr.css',
    '~/assets/css/tailwind.css',
    '~/assets/css/style.css',
  ],
  runtimeConfig: {
    public: {
      // BASE_URL: 'https://bongtv.nexerb.xyz/public/v1', //process.env.API_BASE_URL
      BASE_URL: 'http://127.0.0.1:8000/v1',
      // BASE_URL: 'http://192.168.0.191:8000'
    }
  },
  colorMode: {
    preference: 'light'
  },
  auth: {
    origin: 'https://ott-front.vercel.app/',
    baseURL: 'api/auth',//process.env.API_BASE_URL,
    provider: {      
      type: 'authjs',      
    }
  },
})
