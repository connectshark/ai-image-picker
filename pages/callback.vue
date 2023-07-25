<template>
<NuxtLayout name="full">
<div class=" bg-white/80 p-8 rounded-xl text-center">
  <NuxtLink to="/" class=" w-10 inline-block">
    <img class=" aspect-square" src="../assets/svg/logo.svg" alt="logo">
  </NuxtLink>
  <h1>讀取<i class='bx bx-loader-circle bx-spin' ></i></h1>
</div>
</NuxtLayout>
</template>

<script setup>
definePageMeta({
  title: 'Loading'
})
</script>