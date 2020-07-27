<template>
  <div ref="wrapper" class="global-calendar-wrapper">
    <Input
      v-model="currentDate"
      :placeholder="placeholder"
      :text-size="textSize"
      :clearable="clearable"
      :readonly="readonly"
      is-calendar
      @click="handleToggle"
    />
    <div v-show="popVisible" ref="pop" class="global-calendar-pop-wrapper">
      <v-date-picker
        v-model="currentDate"
        locale="ja-jp"
        :type="type"
        no-title
        scrollable
      >
      </v-date-picker>
    </div>
    <i v-if="showDash" class="__dash"></i>
  </div>
</template>

<script>
import Input from '~/components/customer/table-conditions/Input'
import { getMaxZIndex } from '~/assets/js/dom'

export default {
  components: {
    Input,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    textSize: {
      type: String,
      default: '',
    },
    clearable: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: 'date',
    },
    showDash: Boolean,
  },
  data() {
    return {
      popVisible: false,
      currentDate: this.value,
    }
  },
  computed: {
    pop() {
      return this.$refs.pop
    },
    wrapper() {
      return this.$refs.wrapper
    },
  },
  watch: {
    currentDate(val) {
      this.$emit('input', val)
    },
    value(val) {
      if (this.currentDate !== val) {
        this.currentDate = val
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.pop.style.zIndex = getMaxZIndex()
      document.querySelector('body').append(this.pop)
    })
    window.addEventListener('scroll', this.handleWinScroll, false)
    document.addEventListener('click', this.handleDocClick, false)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleWinScroll, false)
    document.removeEventListener('click', this.handleDocClick, false)
  },
  methods: {
    handleToggle() {
      if (!this.popVisible) {
        let timer = setTimeout(() => {
          this.popVisible = true
          this.resetPopPosition()
          clearTimeout(timer)
          timer = null
        }, 0)
      }
    },
    handleSelect() {},
    resetPopPosition() {
      this.$nextTick(() => {
        const popWidth = this.pop.offsetWidth
        const {
          top,
          left,
          height,
          width,
          right,
        } = this.wrapper.getBoundingClientRect()
        // check right offset
        if (popWidth - width > right) {
          this.pop.style.right = right + 'px'
        } else {
          this.pop.style.left = left + 'px'
        }
        this.pop.style.top = top + height + 'px'
      })
    },
    handleWinScroll() {
      if (this.popVisible) {
        this.popVisible = false
      }
    },
    handleDocClick() {
      if (this.popVisible) {
        this.popVisible = false
      }
    },
  },
}
</script>

<style lang="scss">
.global-calendar-wrapper {
  position: relative;
  .__dash {
    display: block;
    position: absolute;
    z-index: 1;
    top: 50%;
    right: -5px;
    margin-top: -5px;
    transform: translateX(100%);
    width: 10px;
    height: 10px;
    background: url('./img/dash.svg') no-repeat center center;
  }
}
.global-calendar-pop-wrapper {
  position: fixed;
  box-shadow: 0 5px 10px rgba(7, 134, 189, 0.3);
  border-radius: 4px;
  /*overflow: hidden;*/
  font-family: 'Noto Sans CJK JP', 'Helvetica', Arial;
  color: $blue-200;
  .v-btn__content i,
  .accent--text button {
    color: $blue-200 !important;
  }
  .v-date-picker-table {
    font-family: 'Noto Sans CJK JP', 'Helvetica', Arial;
    .v-btn--active {
      background: $blue-100 !important;
    }
    .v-date-picker-table__current {
      color: $blue-100 !important;
      font-weight: bold;
      &.v-btn--outlined {
        border-color: transparent;
      }
    }
  }
}
</style>
