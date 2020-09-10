<template>
  <div class="fg-image" :style="elStyle" :class="'__view-mode-' + viewMode">
    <img :src="src" alt="" />
  </div>
</template>

<script>
import { isNumberLike } from '../../../libs'

export default {
  name: 'FgImage',
  props: {
    src: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
    viewMode: {
      type: String,
      default: 'fill',
    },
  },
  computed: {
    elStyle() {
      const ret = {}
      if (this.width) {
        ret.width = this.width + (isNumberLike(this.width) ? 'px' : '')
      }
      if (this.height) {
        ret.height = this.height + (isNumberLike(this.height) ? 'px' : '')
      }
      return ret
    },
  },
}
</script>

<style lang="scss">
.fg-image {
  overflow: hidden;
  &.__view-mode-fill {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
