<template>
<div class=" font-ubuntu bg-background text-main-black">
  <NuxtPage />
</div>
</template>

<script setup>
const client = useSupabaseClient()
onMounted(() => {
  client.auth.onAuthStateChange((_, session) => {
    const user = useUser()
    user.value.id = session !== null ? session.user.id : ''
  })
})
</script>