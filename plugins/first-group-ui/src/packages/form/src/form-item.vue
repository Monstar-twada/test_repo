<template>
  <div
    class="fg-form-item"
    :class="[
      {
        'fg-form-item--feedback': FgForm && FgForm.statusIcon,
        'is-error': validateState === 'error',
        'is-validating': validateState === 'validating',
        'is-success': validateState === 'success',
        'is-required': isRequired || required,
        'is-no-asterisk': FgForm && FgForm.hideRequiredAsterisk,
      },
      sizeClass ? 'fg-form-item--' + sizeClass : '',
      sizeClass ? '__' + sizeClass : '',
    ]"
    :style="itemStyle"
  >
    <LabelWrap
      :is-auto-width="labelStyle && labelStyle.width === 'auto'"
      :update-all="form.labelWidth === 'auto'"
    >
      <label
        v-if="label || $slots.label"
        :for="labelFor"
        class="fg-form-item__label"
        :style="labelStyle"
      >
        <slot name="label">{{ label + form.labelSuffix }}</slot>
        <span v-if="isRequired || required" class="is-required-icon">
          <fg-icon name="hook" color="#fff"></fg-icon>
        </span>
      </label>
    </LabelWrap>
    <div class="fg-form-item__content" :style="contentStyle">
      <slot></slot>
      <transition name="fg-zoom-in-top">
        <slot
          v-if="validateState === 'error' && showMessage && form.showMessage"
          name="error"
          :error="validateMessage"
        >
          <div
            class="fg-form-item__error"
            :class="{
              'fg-form-item__error--inline':
                typeof inlineMessage === 'boolean'
                  ? inlineMessage
                  : (FgForm && FgForm.inlineMessage) || false,
            }"
          >
            {{ validateMessage }}
          </div>
        </slot>
      </transition>
    </div>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator'
import { merge, noop, getPropByPath, isNumberLike } from '../../../libs/index'
import Broadcaster from '../../../assets/js/broadcaster'
import LabelWrap from './label-wrap'

export default {
  name: 'FgFormItem',
  components: {
    LabelWrap,
  },
  mixins: [Broadcaster],
  provide() {
    return {
      FgFormItem: this,
    }
  },
  inject: ['FgForm'],
  props: {
    label: {
      type: String,
      default: '',
    },
    labelWidth: {
      type: String,
      default: '',
    },
    labelFontSize: {
      type: String,
      default: '',
    },
    labelFontWeight: {
      type: String,
      default: '',
    },
    itemSpacing: {
      type: [String, Number],
      default: '',
    },
    prop: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: undefined,
    },
    rules: {
      type: [Object, Array],
      default() {
        return []
      },
    },
    error: {
      type: String,
      default: '',
    },
    validateStatus: {
      type: String,
      default: '',
    },
    for: {
      type: String,
      default: '',
    },
    inlineMessage: {
      type: [String, Boolean],
      default: '',
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      validateState: '',
      validateMessage: '',
      validateDisabled: false,
      validator: {},
      computedLabelWidth: '',
    }
  },
  computed: {
    labelFor() {
      return this.for || this.prop
    },
    itemStyle() {
      const ret = {}
      const itemSpacing = this.itemSpacing || this.form.itemSpacing
      if (itemSpacing) {
        ret.marginBottom = itemSpacing + (isNumberLike(itemSpacing) ? 'px' : '')
      }
      return ret
    },
    labelStyle() {
      const ret = {}
      const labelFontSize = this.labelFontSize || this.form.labelFontSize
      if (labelFontSize) {
        ret.fontSize = labelFontSize + (isNumberLike(labelFontSize) ? 'px' : '')
      }
      const labelFontWeight = this.labelFontWeight || this.form.labelFontWeight
      if (labelFontWeight) {
        ret.fontWeight =
          labelFontWeight + (isNumberLike(labelFontWeight) ? 'px' : '')
      }
      if (this.form.labelPosition === 'top') return ret
      const labelWidth = this.labelWidth || this.form.labelWidth
      if (labelWidth) {
        ret.width = labelWidth + (isNumberLike(labelWidth) ? 'px' : '')
      }
      return ret
    },
    contentStyle() {
      const ret = {}
      const label = this.label
      if (this.form.labelPosition === 'top' || this.form.inline) return ret
      if (!label && !this.labelWidth && this.isNested) return ret
      const labelWidth = this.labelWidth || this.form.labelWidth
      if (labelWidth === 'auto') {
        if (this.labelWidth === 'auto') {
          ret.marginLeft = this.computedLabelWidth
        } else if (this.form.labelWidth === 'auto') {
          ret.marginLeft = this.FgForm.autoLabelWidth
        }
      } else {
        ret.marginLeft = labelWidth
      }
      return ret
    },
    isNested() {
      let parent = this.$parent
      let parentName = parent.$options.name
      while (parentName !== 'FgForm') {
        if (parentName === 'FgFormItem') {
          return true
        }
        parent = parent.$parent
        parentName = parent.$options.name
      }
      return false
    },
    form() {
      let parent = this.$parent
      let parentName = parent.$options.name
      while (parentName !== 'FgForm') {
        parent = parent.$parent
        parentName = parent.$options.name
      }
      return parent
    },
    fieldValue() {
      const model = this.form.model
      if (!model || !this.prop) {
        return
      }

      let path = this.prop
      if (path.includes(':')) {
        path = path.replace(/:/, '.')
      }

      return getPropByPath(model, path, true).v
    },
    isRequired() {
      const rules = this.getRules()
      let isRequired = false

      if (rules && rules.length) {
        rules.every((rule) => {
          if (rule.required) {
            isRequired = true
            return false
          }
          return true
        })
      }
      return isRequired
    },
    formItemSize() {
      return this.size || this.FgForm.size
    },
    sizeClass() {
      return this.formItemSize
    },
  },
  watch: {
    error: {
      immediate: true,
      handler(value) {
        this.validateMessage = value
        this.validateState = value ? 'error' : ''
      },
    },
    validateStatus(value) {
      this.validateState = value
    },
  },
  mounted() {
    if (this.prop) {
      this.dispatch('FgForm', 'fg.form.addField', [this])

      let initialValue = this.fieldValue
      if (Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue)
      }
      Object.defineProperty(this, 'initialValue', {
        value: initialValue,
      })

      this.addValidateEvents()
    }
  },
  beforeDestroy() {
    this.dispatch('FgForm', 'fg.form.removeField', [this])
  },
  methods: {
    validate(trigger, callback = noop) {
      this.validateDisabled = false
      const rules = this.getFilteredRule(trigger)
      if ((!rules || rules.length === 0) && this.required === undefined) {
        callback()
        return true
      }

      this.validateState = 'validating'

      const descriptor = {}
      if (rules && rules.length > 0) {
        rules.forEach((rule) => {
          delete rule.trigger
        })
      }
      descriptor[this.prop] = rules

      const validator = new AsyncValidator(descriptor)
      const model = {}

      model[this.prop] = this.fieldValue

      validator.validate(
        model,
        { firstFields: true },
        (errors, invalidFields) => {
          this.validateState = !errors ? 'success' : 'error'
          this.validateMessage = errors ? errors[0].message : ''

          callback(this.validateMessage, invalidFields)
          this.FgForm &&
            this.FgForm.$emit(
              'validate',
              this.prop,
              !errors,
              this.validateMessage || null
            )
        }
      )
    },
    clearValidate() {
      this.validateState = ''
      this.validateMessage = ''
      this.validateDisabled = false
    },
    resetField() {
      this.validateState = ''
      this.validateMessage = ''

      const model = this.form.model
      const value = this.fieldValue
      let path = this.prop
      if (path.includes(':')) {
        path = path.replace(/:/, '.')
      }

      const prop = getPropByPath(model, path, true)

      this.validateDisabled = true
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(this.initialValue)
      } else {
        prop.o[prop.k] = this.initialValue
      }

      // reset validateDisabled after onFieldChange triggered
      this.$nextTick(() => {
        this.validateDisabled = false
      })

      // this.broadcast('ElTimeSelect', 'fieldReset', this.initialValue)
    },
    getRules() {
      let formRules = this.form.rules
      const selfRules = this.rules
      const requiredRule =
        this.required !== undefined ? { required: !!this.required } : []

      const prop = getPropByPath(formRules, this.prop || '')
      formRules = formRules ? prop.o[this.prop || ''] || prop.v : []

      return [].concat(selfRules || formRules || []).concat(requiredRule)
    },
    getFilteredRule(trigger) {
      const rules = this.getRules()

      return rules
        .filter((rule) => {
          if (!rule.trigger || trigger === '') return true
          if (Array.isArray(rule.trigger)) {
            return rule.trigger.includes(trigger)
          } else {
            return rule.trigger === trigger
          }
        })
        .map((rule) => merge({}, rule))
    },
    onFieldBlur() {
      this.validate('blur')
    },
    onFieldChange() {
      if (this.validateDisabled) {
        this.validateDisabled = false
        return
      }

      this.validate('change')
    },
    updateComputedLabelWidth(width) {
      this.computedLabelWidth = width ? `${width}px` : ''
    },
    addValidateEvents() {
      const rules = this.getRules()

      if (rules.length || this.required !== undefined) {
        this.$on('fg.form.blur', this.onFieldBlur)
        this.$on('fg.form.change', this.onFieldChange)
      }
    },
    removeValidateEvents() {
      this.$off()
    },
  },
}
</script>

<style lang="scss">
.fg-form-item {
  .fg-form-item__label {
    .is-required-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-left: 4px;
      width: 14px;
      height: 14px;
      background: $--color-warning;
      border-radius: 50%;
      .fg-icon {
        margin-top: 1px;
      }
    }
  }
}
</style>
