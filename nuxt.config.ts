export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/', '/terms', '/disclaimer']
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase'
  ],
  devtools: { enabled: true },
  app: {
    rootId: 'app',
    head: {
      title: 'AIPicker',
      meta: [
        { name: 'description' , content: 'Nuxt Content for starter'},
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: 'AI' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@latest/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Ubuntu:wght@400;500;700&display=swap' }
      ]
    }
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true
      }
    }
  },
  runtimeConfig: {
    API_KEY: import.meta.env.API_KEY,
    API_DOMAIN: import.meta.env.API_DOMAIN,
    API_VERSION: import.meta.env.API_VERSION,
    KOFI_TOKEN: import.meta.env.KOFI_TOKEN,
    public: {
      HOST_NAME: ''
    }
  },
  tailwindcss: {
    viewer: false,
    cssPath: '~/assets/main.css'
  }
})
