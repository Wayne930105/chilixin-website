export default defineNuxtConfig({
  compatibilityDate: '2025-05-21',
  devtools: { enabled: true },

  ssr: true,

  site: {
    url: 'https://chilixin.com',
    name: '錡利鑫實業有限公司',
    // GitHub Pages 會把 /about 301 導向 /about/，canonical 與 sitemap 需一致
    trailingSlash: true,
  },

  experimental: {
    defaults: {
      nuxtLink: { trailingSlash: 'append' },
    },
  },

  // 全站共用的企業資訊（LocalBusiness），各頁 Schema 以 @id 引用
  schemaOrg: {
    identity: {
      type: 'LocalBusiness',
      name: '錡利鑫實業有限公司',
      alternateName: 'Chilixin Industrial Co., Ltd.',
      foundingDate: '2021',
      description: '台灣專業液壓工程公司，提供油壓高壓配管、管路油洗、液壓設備維護、液壓機械門製作、焊接工程與配管工程服務。',
      logo: '/images/logo/logo-icon.png',
      image: '/images/og-image.jpg',
      telephone: '+886-4-26996011',
      faxNumber: '+886-4-26996221',
      email: 'qilixin17@gmail.com',
      address: {
        streetAddress: '博愛街52巷17號',
        addressLocality: '大肚區',
        addressRegion: '台中市',
        postalCode: '432',
        addressCountry: 'TW',
      },
      areaServed: 'TW',
      openingHoursSpecification: [
        {
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:30',
        },
      ],
    },
  },

  nitro: {
    preset: 'github-pages',
    // 從首頁沿著連結爬取所有頁面；有壞掉的連結時讓建置失敗，避免部署出錯的網站
    prerender: {
      failOnError: true,
      crawlLinks: true,
    },
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL ?? '/',
    head: {
      htmlAttrs: { lang: 'zh-TW' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'theme-color', content: '#FFFFFF' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
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

  content: {},

  image: {
    format: ['webp', 'avif'],
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

  robots: {
    disallow: [],
  },

  css: ['~/assets/css/main.css'],

  typescript: {
    strict: true,
    typeCheck: false,
  },
})
