<template>
  <div
    class="matter-detail-dialog__item"
    :style="itemStyle"
    :class="{ 'is-bold': bold, 'is-inline': inline }"
  >
    <div v-if="label" class="label" :style="labelStyle">{{ label }}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    labelTop: {
      type: [String, Number],
      default: '',
    },
    labelLineHeight: {
      type: [String, Number],
      default: '',
    },
    bold: Boolean,
    left: {
      type: String,
      default: '',
    },
    right: {
      type: String,
      default: '',
    },
    labelWidth: {
      type: String,
      default: '',
    },
    fontSize: {
      type: String,
      default: '',
    },
    align: {
      type: String,
      default: '',
    },
    inline: Boolean,
  },
  computed: {
    itemStyle() {
      const { isNumberLike } = this.$ui
      const ret = {}
      if (this.align) {
        ret.alignItems = this.align
      }
      if (this.left) {
        ret.paddingLeft = this.left + (isNumberLike(this.left) ? 'px' : '')
      }
      if (this.right) {
        ret.paddingRight = this.right + (isNumberLike(this.right) ? 'px' : '')
      }
      return ret
    },
    labelStyle() {
      const { isNumberLike } = this.$ui
      const ret = {}
      if (this.labelWidth) {
        const width =
          this.labelWidth + (isNumberLike(this.labelWidth) ? 'px' : '')
        ret.width = width
        ret.flex = `0 0 ${width}`
      }
      if (this.fontSize) {
        ret.fontSize = this.fontSize + (isNumberLike(this.fontSize) ? 'px' : '')
      }
      if (this.labelTop) {
        ret.marginTop =
          this.labelTop + (isNumberLike(this.labelTop) ? 'px' : '')
      }
      if (this.labelLineHeight) {
        ret.lineHeight =
          this.labelLineHeight +
          (isNumberLike(this.labelLineHeight) ? 'px' : '')
      }
      return ret
    },
  },
}
</script>

<style lang="scss">
.matter-detail-dialog__item {
  display: flex;
  padding: 0;
  align-items: center;
  overflow: hidden;
  .label {
    font-size: 12px;
    margin-right: 10px;
  }
  .content {
    font-size: 12px;
    flex: 1;
  }

  &.is-bold {
    .label {
      font-weight: bold;
    }
  }

  &.is-inline {
    display: inline-flex;
  }

  &.is-label-justify {
    .label {
      text-align: justify;
      &:after {
        content: '';
        display: inline-block;
        padding-left: 100%;
      }
    }
  }
}
</style>
