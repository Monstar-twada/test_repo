/**
 * Date: 2020-09-02 15:00
 */
import { baseConfig } from './base'

export default {
  ...baseConfig,
  dir: {
    pages: 'pages/console',
  },
  // https://nuxtjs.org/api/configuration-generate
  generate: {
    dir: 'dist/console',
  },
  // https://nuxtjs.org/guides/directory-structure/nuxt
  buildDir: 'dist/.console',
  plugins: [
    ...baseConfig.plugins,
    { src: '~/plugins/global-console-properties.js', ssr: false },
  ],
}
