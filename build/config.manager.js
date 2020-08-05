/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-12 10:47
 */
import { baseConfig } from './base'

export default {
  ...baseConfig,
  dir: {
    pages: 'pages/manager',
  },
  // https://nuxtjs.org/api/configuration-generate
  generate: {
    dir: 'dist/manager'
  },
  plugins: [
    ...baseConfig.plugins,
    { src: '~/plugins/global-manager-properties.js', ssr: false }
  ],
}
