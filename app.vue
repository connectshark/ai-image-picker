<template>
<div class=" font-ubuntu bg-background text-main-black">
  <NuxtPage />
</div>
</template>

<script setup>
const supabase = useSupabaseClient()
const route = useRoute()
const router = useRouter()
onMounted(() => {
  supabase.auth.onAuthStateChange((_, session) => {
    if (session && session.user) {
      const user = useUser()
      user.value.id = session.user.id
      if (route.path === '/callback') {
        router.replace('/ai')
      }
    }
  })
})
</script>