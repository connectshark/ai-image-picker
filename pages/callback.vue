<template>
<NuxtLayout name="full">
<div class=" bg-white/80 p-8 rounded-xl text-center">
  <h1>讀取<i class='bx bx-loader-circle bx-spin' ></i></h1>
</div>
</NuxtLayout>
</template>

<script setup>
const router = useRouter()
const user = useSupabaseUser()
watch(user, value => {
  if (value.id && value.aud === 'authenticated') {
    router.replace('/ai')
  }
})
</script>