<script setup>

import Profile from "~/components/nav/Profile.vue";

const links = [
  {
    icon: 'i-heroicons-cog',
    to: '/',
    active: 'border-none'
  },
  {
    icon: 'i-heroicons-bell-alert',
    to: '/'
  },
  {
    icon: 'i-heroicons-heart',
    to: '/'
  },
  {
    type: 'profile'
  }
]

const ui = {
  after: '',
  base:'lg:px-4 py-2 md:px-2 hover:text-purple-950 cursor-pointer uppercase ',
  before: ''
}



</script>
<template>
  <div class="flex items-center">
    <UHorizontalNavigation :ui="ui" :links="links" >
      <template #default="{ link }">
        <span class="hover:text-violet-950 hover:after:bg-none relative">{{ link.label }} </span>
      </template>
    </UHorizontalNavigation>
    <Profile/>
  </div>
</template>