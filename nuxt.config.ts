export default defineNuxtConfig({
  compatibilityDate: '2025-05-21',
  devtools: { enabled: true },

  ssr: true,

  site: {
    url: 'https://www.chilixin.com.tw',
    name: '錡利鑫實業有限公司',
  },

  nitro: {
    preset: 'github-pages',
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: [
        '/services/hydraulic-piping',
        '/services/hydraulic-flushing',
        '/services/hydraulic-maintenance',
        '/services/door-fabrication',
        '/services/welding-engineering',
        '/services/piping-engineering',
        '/projects/steel-plant-flushing-2024',
        '/projects/hydraulic-press-overhaul',
        '/projects/factory-welding-project',
      ],
    },
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL ?? '/',
    head: {
      htmlAttrs: { lang: 'zh-TW' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'theme-color', content: '#0D1117' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap',
        },
      ],
    },
  },

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-schema-org',
  ],

  content: {
    highlight: {
      theme: 'github-dark',
    },
  },

  image: {
    formats: ['webp', 'avif'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },

  sitemap: {
    siteUrl: 'https://www.chilixin.com.tw',
  },

  robots: {
    disallow: [],
  },

  css: ['~/assets/css/main.css'],

  typescript: {
    strict: true,
    typeCheck: false,
  },

  routeRules: {
    '/': { prerender: true },
    '/services': { prerender: true },
    '/services/**': { prerender: true },
    '/projects': { prerender: true },
    '/projects/**': { prerender: true },
    '/about': { prerender: true },
    '/contact': { prerender: true },
  },
})
