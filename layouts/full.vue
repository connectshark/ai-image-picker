<template>
<div class=" bg-gradient-to-b from-secondary-button/30 to-primary/20 min-h-screen grid place-items-center">
  <slot/>
</div>
</template>

<script setup>
const app = useAppConfig()
const route = useRoute()
useHead({
  titleTemplate: () => `${route.meta.title} | ${app.site.name}`
})
</script>