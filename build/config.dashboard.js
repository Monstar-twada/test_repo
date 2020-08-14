/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-12 10:47
 */
import { baseConfig } from './base'

export default {
  ...baseConfig,
  dir: {
    pages: 'pages/dashboard',
  },
  // https://nuxtjs.org/api/configuration-generate
  generate: {
    dir: 'dist/dashboard'
  },
  // https://nuxtjs.org/guides/directory-structure/nuxt
  buildDir: 'dist/.dashboard',
  plugins: [
    ...baseConfig.plugins,
    { src: '~/plugins/global-dashboard-properties.js', ssr: false }
  ],
}
