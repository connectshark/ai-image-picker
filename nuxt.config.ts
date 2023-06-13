// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  devtools: { enabled: true },
  app: {
    rootId: 'app',
    head: {
      title: 'AI',
      meta: [
        { name: 'description' , content: 'Nuxt Content for starter'},
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: 'AI' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/nosegates.jpg' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@latest/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Ubuntu:wght@400;500;700&display=swap' }
      ],
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', defer: true }]
    }
  },
  runtimeConfig: {
    API_KEY: import.meta.env.API_KEY,
    API_DOMAIN: import.meta.env.API_DOMAIN,
    API_VERSION: import.meta.env.API_VERSION
  },
  tailwindcss: {
    viewer: false,
  }
})
