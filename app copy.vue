<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
  const {data} = await useFetch(useRuntimeConfig().public.BASE_URL+'/home');
  console.log(data.value)
</script>
