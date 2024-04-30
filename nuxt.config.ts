// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/tailwindcss',
    '@nuxt/ui',
    'vue3-carousel-nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    // "@sidebase/nuxt-auth",
  ],
  css: [
    '~/assets/css/vendor/video_js.css',
    '~/assets/css/vendor/plyr.css',
    '~/assets/css/tailwind.css',
    '~/assets/css/style.css',
  ],
  runtimeConfig: {
    public: {
      BASE_URL: 'https://bongtv.nexerb.xyz/public/v1' //process.env.API_BASE_URL
    }
  },
  colorMode: {
    preference: 'light'
  }
})
