<script>
export default {
  name: 'FgRow',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    /* eslint-disable */
    gutter: [String, Number],
    type: String,
    justify: {
      type: String,
      default: 'start',
    },
    align: {
      type: String,
      default: 'top',
    },
  },

  computed: {
    style() {
      const ret = {}
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }
      return ret
    },
  },
  render(h) {
    return h(
      this.tag,
      {
        class: [
          'fg-row',
          this.justify !== 'start' ? `is-justify-${this.justify}` : '',
          this.align !== 'top' ? `is-align-${this.align}` : '',
          { 'fg-row--flex': this.type === 'flex' },
        ],
        style: this.style,
      },
      this.$slots.default
    )
  },
}
</script>

<style lang="scss">
.fg-row {
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  &:before,
  &:after {
    display: table;
    content: '';
  }
  &:after {
    clear: both;
  }
}
</style>
