<template>
<NuxtLayout>
  <div class=" w-5/6 mx-auto">
    <h1 class=" font-bold text-2xl/loose">帳號設定</h1>
    <div class="mb-10">
      <h2 class="mb-4 font-bold text-xl/loose">ID</h2>
      <p v-if="loading"><i class='bx bx-loader-circle bx-spin bx-sm' ></i></p>
      <p v-else class="text-xs">{{ profile.id }}</p>
    </div>
    <div class="mb-10">
      <h2 class="mb-4 font-bold text-xl/loose">Email</h2>
      <p v-if="loading"><i class='bx bx-loader-circle bx-spin bx-sm' ></i></p>
      <p v-else>{{ profile.email }}</p>
    </div>
    <div>
      <h2 class="mb-4 font-bold text-xl/loose">目前方案</h2>
      <p>基本會員</p>
    </div>
    <div class="py-20">
      <button class="transition-transform hover:-translate-y-1 bg-main-black/80 text-white p-3 rounded-lg" type="button" @click="logout">登出</button>
    </div>
  </div>
</NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})
const {
  profile,
  loading
} = useProfile()
const client = useSupabaseAuthClient()
const router = useRouter()

const logout = async () => {
  await client.auth.signOut()
  router.push('/')
}
</script>