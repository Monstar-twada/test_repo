/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-12 10:47
 */
import { merge } from 'webpack-merge'
import { baseConfig } from './base'

export default merge(baseConfig, {
  dir: {
    pages: 'pages/dashboard',
  },
  // import color css
  styleResources: {
    scss: [
      '~/plugins/first-group-ui/src/assets/scss/theme-blue.scss',
      '~/plugins/first-group-ui/src/assets/scss/index.scss',
    ],
  },
  // https://nuxtjs.org/api/configuration-generate
  generate: {
    dir: 'dist/dashboard',
  },
  // https://nuxtjs.org/guides/directory-structure/nuxt
  buildDir: 'dist/.dashboard',
  plugins: [
    { src: '~/plugins/global-dashboard-properties.js', ssr: false },
  ],
})
