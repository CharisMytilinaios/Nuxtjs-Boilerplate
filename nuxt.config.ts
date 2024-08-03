// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@': '<rootDir>',
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel:'apple-touch-icon', sizes:'180x180', href:'/apple-touch-icon.png' },
        { rel:'icon', type:'image/png', sizes:'32x32', href:'/favicon-32x32.png' },
        { rel:'icon', type:'image/png', sizes:'16x16', href:'/favicon-16x16.png' },
        { rel:'manifest', href:'/site.webmanifest' },
        { rel:'mask-icon', href:'/safari-pinned-tab.svg', color:'#010816' }
      ],
      meta: [
        { name: 'msapplication-TileColor', content:'#010816' },
        { name:'theme-color', content:'#010816' }
      ]
    }
  },
  colorMode: {
    classSuffix: ''
  },
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  fonts: {
    provider: 'google'
  },
  i18n: {
    detectBrowserLanguage: {
      cookieCrossOrigin: true,
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'en',
      cookieSecure: 'production' === process.env.NODE_ENV
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.ts'
      },
      {
        code: 'el',
        iso: 'el-GR',
        file: 'el-GR.ts'
      },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/eslint',
    'shadcn-nuxt',
    '@nuxt/fonts',
    '@nuxtjs/color-mode'
  ],
  plugins: [
    '~/plugins/capitalize/capitalize.ts'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'Base',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
});
