<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
  const {data} = await useFetch('https://bongtv.nexerb.xyz/public/v1/home');
  console.log(data.value)
</script>
