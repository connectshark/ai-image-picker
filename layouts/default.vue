<template>
<header>
  <div class=" w-5/6 mx-auto py-6 flex items-center justify-between">
    <NuxtLink to="/">
      <img class="w-10" src="../assets/svg/logo.svg" alt="logo">
    </NuxtLink>
    <nav>
      <ul>
        <li>
          <NuxtLink v-if="user.id" to="/account"><i class='bx bx-user bx-sm'></i></NuxtLink>
          <NuxtLink v-else class="hover:underline" to="/login">登入</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</header>
  <main>
    <slot></slot>
  </main>
  <footer class=" py-10 bg-secondary-button/40">
    <div class="w-5/6 mx-auto grid gap-10 lg:grid-cols-3">
      <div>
        <p>
          <NuxtLink to="/"><i class='bx bx-copyright'></i>2023{{ app.site.name }}</NuxtLink>
        </p>
      </div>
      <div class=" space-x-4">
        <NuxtLink class=" hover:underline" to="/terms">使用者條款</NuxtLink>
        <NuxtLink class=" hover:underline" to="/disclaimer">免責聲明</NuxtLink>
      </div>
      <div class=" space-x-4 lg:text-right">
        <a href="https://github.com/connectshark/ai-image-picker" target="_blank">
          <i class='bx bxl-github bx-sm'></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const user = useUser()
const app = useAppConfig()
const route = useRoute()
if (route.meta.title) {
  useHead({
    titleTemplate: () => `${route.meta.title} | ${app.site.name}`
  })
}

</script>