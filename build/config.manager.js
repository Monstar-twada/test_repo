/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-12 10:47
 */
import { merge } from 'webpack-merge'
import { baseConfig } from './base'

export default merge(baseConfig, {
  dir: {
    pages: 'pages/manager',
  },
  title: 'Cars Manager' || '',
  // import color css
  styleResources: {
    scss: [
      '~/plugins/first-group-ui/src/assets/scss/theme-blue.scss',
      '~/plugins/first-group-ui/src/assets/scss/index.scss',
    ],
  },
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/manager.ico' }],
  modules: ['@nuxtjs/gtm'],
  gtm: {
    id: 'GTM-N8RJT4T',
  },
  // https://nuxtjs.org/api/configuration-generate
  generate: {
    dir: 'dist/manager',
  },
  // https://nuxtjs.org/guides/directory-structure/nuxt
  buildDir: 'dist/.manager',
  plugins: [
    { src: '~/plugins/global-manager-properties.js', ssr: false },
    '~/plugins/aws',
  ],
})
