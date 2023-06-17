<template>
<Teleport to="body">
<div class=" fixed inset-0 bg-black/50 grid place-items-center" @click="show = false">
  <div class="w-4/5 max-w-md bg-white overflow-hidden rounded-xl" @click.stop>
    <slot/>
  </div>
</div>
</Teleport>
</template>

<script setup>
const show = defineModel('show')
</script>