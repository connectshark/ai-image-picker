<template>
  <NuxtLayout>
    <article class=" prose mx-auto px-6 pb-6 pt-10">
    <ContentDoc>
      <template #not-found>
        <h2 class=" text-center text-3xl">404</h2>
        <p class=" text-center">無此頁</p>
        <p class=" text-center">
          <NuxtLink to="/">回首頁</NuxtLink>
        </p>
      </template>
      <template #empty>
        <h2 class=" text-center text-3xl">空</h2>
        <p class=" text-center">此頁無內容</p>
        <p class=" text-center">
          <NuxtLink to="/">回首頁</NuxtLink>
        </p>
      </template>
    </ContentDoc>
    </article>
  </NuxtLayout>
</template>