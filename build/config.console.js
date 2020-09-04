/**
 * Date: 2020-09-02 15:00
 */
import { merge } from 'webpack-merge'
import { baseConfig } from './base'

export default merge(baseConfig, {
  dir: {
    pages: 'pages/console',
  },
  // import color css
  styleResources: {
    scss: [ 'first-group-ui/dist/red.scss' ],
  },
  // https://nuxtjs.org/api/configuration-generate
  generate: {
    dir: 'dist/console',
  },
  // https://nuxtjs.org/guides/directory-structure/nuxt
  buildDir: 'dist/.console',
  plugins: [
    { src: '~/plugins/global-console-properties.js', ssr: false },
  ],
})
