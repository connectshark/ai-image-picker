<template>
<NuxtLayout name="full">
<div class=" bg-white/80 p-8 rounded-xl text-center">
  <NuxtLink to="/" class=" w-10 inline-block">
    <img class=" aspect-square" src="../assets/svg/logo.svg" alt="logo">
  </NuxtLink>
  <h1 class=" text-2xl/loose font-bold mb-4">登入/註冊</h1>
  <div class="mb-6">
    <button @click="login('google')" type="button" class=" bg-white px-4 py-2 rounded-lg shadow hover:shadow-xl transition-shadow">
      <i class='bx bxl-google'></i>
      <span class="ml-4">使用Google帳號繼續操作</span>
    </button>
  </div>
  <p>
    <NuxtLink class=" text-sm underline" to="/">回首頁</NuxtLink>
  </p>
</div>
</NuxtLayout>
</template>

<script setup>
const client = useSupabaseAuthClient()
const login = async (provider) => {
  const { error } = await client.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: location.origin + '/callback'
    }
  })
  if (error) {
    return alert('Something went wrong !')
  }
}


definePageMeta({
  title: 'Login'
})
</script>