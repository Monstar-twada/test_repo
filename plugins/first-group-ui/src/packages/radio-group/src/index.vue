<template>
  <component
    :is="_fgTag"
    class="fg-radio-group"
    role="radioGroup"
    @keydown="handleKeydown"
  >
    <slot></slot>
  </component>
</template>
<script>
import Broadcaster from '../../../assets/js/broadcaster'

const keyCode = Object.freeze({
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
})
export default {
  name: 'FgRadioGroup',
  mixins: [Broadcaster],
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    fill: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    size: {
      type: String,
      default: '',
    },
  },
  computed: {
    _fgTag() {
      return (this.$vnode.data || {}).tag || 'div'
    },
  },
  created() {
    this.$on('handleChange', (value) => {
      this.$emit('change', value)
    })
  },
  mounted() {
    const radios = this.$el.querySelectorAll('[type=radio]')
    const firstLabel = this.$el.querySelectorAll('[role=radio]')[0]
    if (![].some.call(radios, (radio) => radio.checked) && firstLabel) {
      firstLabel.tabIndex = 0
    }
  },
  methods: {
    handleKeydown(e) {
      const target = e.target
      const className =
        target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]'
      const radios = this.$el.querySelectorAll(className)
      const length = radios.length
      const index = [].indexOf.call(radios, target)
      const roleRadios = this.$el.querySelectorAll('[role=radio]')
      switch (e.keyCode) {
        case keyCode.LEFT:
        case keyCode.UP:
          e.stopPropagation()
          e.preventDefault()
          if (index === 0) {
            roleRadios[length - 1].click()
            roleRadios[length - 1].focus()
          } else {
            roleRadios[index - 1].click()
            roleRadios[index - 1].focus()
          }
          break
        case keyCode.RIGHT:
        case keyCode.DOWN:
          if (index === length - 1) {
            e.stopPropagation()
            e.preventDefault()
            roleRadios[0].click()
            roleRadios[0].focus()
          } else {
            roleRadios[index + 1].click()
            roleRadios[index + 1].focus()
          }
          break
        default:
          break
      }
    },
  },
}
</script>

<style lang="scss">
.fg-radio-group {
  /*
  .fg-radio {
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }
  */
}
</style>
