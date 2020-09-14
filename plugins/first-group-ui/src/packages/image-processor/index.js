/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-24 15:55
 */
import ImageProcessor from './src/index'

ImageProcessor.install = function (Vue) {
  Vue.component(ImageProcessor.name, ImageProcessor)
}
export default ImageProcessor
