import { resolve } from 'path'

export default defineNuxtConfig({
  router: {
    options: {
      sensitive: true
    }
  },
  routeRules: {
    '/': { prerender: true },
    '/*': { cors: true }
  },
  app: {
    head: {
      charset: 'utf-8',
      title: 'Car Rental App',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Car Rental App' },
        { name: 'title', content: 'Car Rental App' },

        { property: 'og:title', content: 'Car Rent Platform' },
        { property: 'og:description', content: 'Describe the Car Rent Platform' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://website.com' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:image', content: 'https://website.com/social.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://website.com' }
      ]
    }
  },
  modules: [
    '@pinia/nuxt',
  ],
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/')
  },
  css: [
    'assets/scss/global.scss',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
