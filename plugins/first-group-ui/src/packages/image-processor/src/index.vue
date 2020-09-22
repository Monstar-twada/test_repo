<template>
  <div class="fg-image-processor">
    <div class="__view-wrapper" :style="viewStyle" :class="bgIconClass">
      <fg-image
        v-if="picUrl"
        :src="picUrl"
        :width="width"
        :height="height"
        :view-mode="viewMode"
      ></fg-image>
      <div class="placeholder">
        <slot name="placeholder"></slot>
      </div>
    </div>
    <div v-if="!readonly" class="__tool-wrapper">
      <fg-button
        icon="edit"
        border
        circle
        size="mini"
        @click="edit"
      ></fg-button>
      <fg-button
        class="ml5"
        icon="trash"
        border
        circle
        size="mini"
        :disabled="!picUrl"
        @click="del"
      ></fg-button>
    </div>
    <input
      ref="input"
      :accept="accept"
      type="file"
      style="display: none;"
      @change="inputChange"
    />
    <Cropper
      v-model="cropperVisible"
      :title="cropperTitle"
      :url="blobUrl"
      @change="cropChange"
    />
  </div>
</template>

<script>
import { handleMediaFile, utils } from 'image-process'
import { isFunction, isNumberLike, isUndefined } from '../../../libs/index'
import Cropper from './cropper/index'

export default {
  name: 'FgImageProcessor',
  components: {
    Cropper,
  },
  props: {
    accept: {
      type: String,
      default: 'image/*',
    },
    readonly: Boolean,
    url: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '150px',
    },
    height: {
      type: String,
      default: '100px',
    },
    icon: {
      type: String,
      default: '',
    },
    options: {
      type: Object,
      default() {
        return {}
      },
    },
    viewMode: {
      type: String,
      default: 'fill',
    },
    cropperTitle: {
      type: String,
      default: '顔写真を編集',
    },
    validate: {
      type: Function,
      default: undefined,
    },
  },
  data() {
    return {
      data: {
        url: this.url,
      },
      cropperVisible: false,
      blobUrl: null,
      file: null,
    }
  },
  computed: {
    picUrl() {
      return this.data.url || this.data.base64
    },
    viewStyle() {
      const ret = {}
      if (this.width) {
        ret.width = this.width + (isNumberLike(this.width) ? 'px' : '')
      }
      if (this.height) {
        ret.height = this.height + (isNumberLike(this.height) ? 'px' : '')
      }
      return ret
    },
    bgIconClass() {
      // pdf
      if (/application\/pdf/i.test(this.data.type)) {
        return '__icon-pdf'
      }
      const flg =
        this.icon &&
        ['car', 'license-back', 'license-front', 'pdf'].includes(this.icon)
      return flg ? `__icon-${this.icon}` : ''
    },
    input() {
      return this.$refs.input
    },
  },
  watch: {
    data: {
      deep: true,
      handler(val) {
        if (isUndefined(val.url)) {
          const { base64, raw } = val
          const blob = base64 ? utils.base64ToBlob(base64) : raw ? raw.file : ''
          if (blob) {
            val.url = utils.toBlobUrl(blob)
          }
        }
        this.$emit('change', { ...val })
      },
    },
    url(val) {
      if (this.data.url !== val) {
        this.data = {
          url: val,
        }
      }
    },
  },
  methods: {
    del() {
      this.data = {}
    },
    edit() {
      this.input.click()
    },
    inputChange(e) {
      const file = e.target.files[0]
      if (isFunction(this.validate)) {
        this.validate(file, () => {
          this.handleFile(file)
        })
      } else {
        this.handleFile(file)
      }
      e.target.value = ''
    },
    handleFile(file) {
      this.file = file
      const url = utils.toBlobUrl(file)
      // image file
      const { type, size } = file
      if (!/^image\/\w+/i.test(type)) {
        this.data = {
          type,
          size,
          name,
          url,
          raw: {
            file,
          },
        }
        return
      }
      const { width, height } = this.options
      if (width && height) {
        this.blobUrl = url
        this.cropperVisible = true
      } else {
        handleMediaFile(file, this.options)
          .then((res) => {
            res.raw.file = file
            this.data = res
          })
          .catch((err) => {
            this.$emit('error', err)
          })
      }
    },
    cropChange(cropInfo) {
      this.cropperVisible = false
      handleMediaFile(this.file, { ...this.options, cropInfo })
        .then((res) => {
          res.raw.file = this.file
          this.data = res
        })
        .catch((err) => {
          this.$emit('error', err)
        })
    },
  },
}
</script>

<style lang="scss">
@mixin placeholderBg($icon) {
  background: $--color-background url('./img/' + $icon + '.svg') no-repeat
    center center;
}
.fg-image-processor {
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-right: 20px;
  font-size: 0;
  &:last-child {
    margin-right: 0;
  }
  .__view-wrapper {
    position: relative;
    background: $--color-background;
    border-radius: 4px;
    &.__icon-car {
      @include placeholderBg('car');
    }
    &.__icon-license-back {
      @include placeholderBg('license-back');
    }
    &.__icon-license-front {
      @include placeholderBg('license-front');
    }
    &.__icon-pdf {
      @include placeholderBg('pdf');
    }
    .fg-image,
    .placeholder {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .fg-image {
      z-index: 1;
    }
    .placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .__tool-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    vertical-align: bottom;
    .fg-button {
      margin-left: 5px;
    }
  }
}
</style>
