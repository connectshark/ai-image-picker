<template>
<header>
  <div class=" w-5/6 mx-auto py-6 flex items-center justify-between">
    <NuxtLink to="/">
      <img class=" inline-block w-8 mr-2" src="../assets/svg/logo.svg" alt="logo">
      <span class=" font-bold inline-block">AIPicker</span>
    </NuxtLink>
    <nav>
      <ul>
        <li>
          <NuxtLink v-if="isLogin" to="/account"><i class='bx bx-user bx-sm'></i></NuxtLink>
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
    <div class="w-5/6 mx-auto grid gap-10">
      <div>
        <p>
          <NuxtLink to="/">2023<i class='bx bx-copyright'></i>AIPicker</NuxtLink>
        </p>
      </div>
      <div>
        <NuxtLink class=" hover:underline" to="/terms">使用者條款</NuxtLink>
        <NuxtLink class=" hover:underline" to="/disclaimer">免責聲明</NuxtLink>
      </div>
      <div>
        <a href="https://www.instagram.com/nose_gates/">
          <i class='bx bxl-instagram bx-sm'></i>
        </a>
        <a href="javascript:;">
          <i class='bx bxl-facebook bx-sm'></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const user = useSupabaseUser()
const isLogin = ref(user.value?.id !== undefined)

</script>