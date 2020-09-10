<template>
  <div class="fg-form-item" :class="[]">
    <label v-if="label || $slots.label" class="__label" :style="labelStyle">
      <slot name="label">{{ label }}</slot>
    </label>
    <div class="__content" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FgFormItem',
  provide() {
    return {
      fgFormItem: this,
    }
  },
  inject: ['fgForm'],
  props: {
    /* eslint-disable */
    label: String,
    labelWidth: String,
    prop: String,
    size: String,
    labelFontSize: String,
    align: String,
    labelAlign: String,
    contentAlign: String,
  },
  computed: {
    labelStyle() {
      const ret = {}
      // font weight
      ret.fontWeight = this.form.labelFontWeight
      // font size
      const labelFontSize = this.labelFontSize || this.form.labelFontSize
      if (labelFontSize) {
        ret.fontSize = labelFontSize
      }
      if (this.labelAlign || this.align) {
        ret.textAlign = this.labelAlign || this.align
      }
      // position
      if (this.form.labelPosition === 'top') return ret
      // width
      const labelWidth = this.labelWidth || this.form.labelWidth
      if (labelWidth) {
        ret.width = labelWidth
      }
      return ret
    },
    contentStyle() {
      const ret = {}
      if (this.contentAlign || this.align) {
        ret.textAlign = this.contentAlign || this.align
      }
      const label = this.label
      if (this.form.labelPosition === 'top' || this.form.inline) return ret
      if (!label && !this.labelWidth && this.isNested) return ret
      const labelWidth = this.labelWidth || this.form.labelWidth
      if (labelWidth) {
        ret.marginLeft = labelWidth
      }
      return ret
    },
    form() {
      let parent = this.$parent
      let parentName = parent.$options.name
      while (parentName !== 'FgForm') {
        if (parentName === 'FgFormItem') {
          this.isNested = true
        }
        parent = parent.$parent
        parentName = parent.$options.name
      }
      return parent
    },
  },
}
</script>

<style lang="scss">
.fg-form-item {
  position: relative;
  margin-bottom: 20px;
}
</style>
