require('dotenv').config()

// development
let isDevelopment = process.env.NODE_ENV === 'development'

export const baseConfig = {
  // we need to have universal
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name || '',
    // title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Yantramanav:wght@100;300;400;500;700;900&display=swap',
      },
    ],
    script: [
      // { src: 'https://cdn.jsdelivr.net/npm/vue', async: true },
      // { src: '/plugins/first-group-ui/first-group-ui.min.js', async: true, defer: true }
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  // loading: { color: '$--color-background' },
  loading: '~/components/common/loading/index.vue',
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/_main.scss'],
  styleResources: {
    scss: [
      // '~/assets/scss/_colors.scss',
      // '~/assets/scss/*.scss',
      // '~/assets/scss/_main.scss', // use underscore "_" & also file extension ".scss"
    ],
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    //   { src: '~/plugins/first-group-ui.js', ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/gtm',
    '@nuxtjs/axios',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    ['@nuxtjs/eslint-module', { fix: true }],
  ],
  env: {
    //   APIServer: process.env.API_URL,
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    useMockData: process.env.MOCK_DATA === '1',
    NODE_ENV: process.env.NODE_ENV,
  },
  router: {
    base: process.env.BASE_URL,
    trailingSlash: true,
    extendRoutes(routes, resolve) {
      for (const route of routes) {
        route.alias = resolve(route.path, 'index.html')
      }
    },
  },
  // vuetify: {
  //   customVariables: ['~/assets/scss/variables.scss'],
  //   treeShake: true,
  //   theme: {
  //     dark: false,
  //   },
  // },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },
  // ? 'https://manager.cars-enjoy.com'
  // : 'https://manager.cars-enjoy.com',
  proxy: {
    '/api/': isDevelopment
      ? 'https://manager.cars-enjoy.com'
      : 'https://manager.cars-enjoy.com',
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  // vuetify: {
  //   customVariables: ["~/assets/scss/variables.scss"],
  //   treeShake: true
  // },

  // gtm: {
  //   enabled: true,
  //   id: 'GTM-N8RJT4T',
  //   autoInit: true,
  //   respectDoNotTrack: true,
  //   noscript: true,
  //   noscriptId: 'gtm-noscript',
  //   noscriptURL: 'https://www.googletagmanager.com/ns.html'
  // },
  /*
   ** Build configuration
   */
  build: {
    // test another for caching
    publicPath: process.env.PUBLIC_PATH || '/_nuxt/',
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
      config.externals = {
        // vue: 'Vue',
      }
    },
  },
}
