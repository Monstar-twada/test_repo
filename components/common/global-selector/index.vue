<template>
  <div
    class="global-selector-wrapper"
    :class="[
      '__' + size,
      '__' + theme,
      disabled ? '' : 'selectable',
      'text-size-' + textSize,
      clearable ? '__clearable' : '',
      isNonEmpty ? 'is-non-empty' : '',
    ]"
    :style="style"
  >
    <div
      ref="result"
      class="result-wrapper"
      @click="toggleList($event)"
      @mouseleave="mouseLeave"
    >
      <keep-alive>
        <span v-if="isNonEmpty" class="text">{{ selectText }}</span>
        <span v-else class="placeholder">{{ placeholder }}</span>
      </keep-alive>
      <i class="__clear" @click="clear($event)"></i>
      <i :class="['__arrow', optionsVisible ? 'is-show' : '']"
        ><ArrowSvgIcon :color="iconColor"
      /></i>
    </div>
    <dl
      v-show="optionsVisible"
      ref="dl"
      :style="style"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
    >
      <template v-for="(item, i) in options">
        <dt v-if="item.title" :key="i">
          <div>{{ item.title }}</div>
        </dt>
        <dd
          v-else
          :key="i"
          :class="[
            selectValue === item.value ? 'selected' : '',
            item.disabled ? '__disabled' : 'cur',
          ]"
          :title="item.text"
          @click="handleSelect(item, $event)"
        >
          <div>{{ addPrefix(item.text) }}</div>
        </dd>
      </template>
    </dl>
  </div>
</template>

<script>
import ArrowSvgIcon from './ArrowSvgIcon'
import { getMaxZIndex } from '~/assets/js/dom'
const ICON_COLORS = {
  transparent: '#fff',
  'light-blue': '$--color-primary-active',
  default: '#1e5199',
}
export default {
  components: {
    ArrowSvgIcon,
  },
  props: {
    value: {
      type: [Number, String],
      default: '',
    },
    placeholder: {
      type: String,
      default: '選択してください',
    },
    options: {
      type: Array,
      default() {
        return []
      },
    },
    size: {
      type: String,
      default: 'small',
    },
    textSize: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'default',
    },
    disabled: Boolean,
    itemPrefix: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    clearable: Boolean,
  },
  data() {
    const item = this.options.find((item) => item.value === this.value) || {}
    return {
      optionsVisible: false,
      selectText: item.text,
      selectValue: this.value,
      clearVisible: true,
    }
  },
  computed: {
    iconColor() {
      return ICON_COLORS[this.theme]
    },
    style() {
      let str = ''
      if (this.width) {
        str += `width:${this.width};`
      }
      return str
    },
    isNonEmpty() {
      return !!this.selectText
    },
  },
  watch: {
    value(val) {
      if (this.selectValue !== val) {
        const item =
          this.options.find((item) => item.value === this.value) || {}
        this.selectValue = val
        this.selectText = item.text
      }
    },
    selectValue(val) {
      this.$emit('input', val)
    },
  },
  beforeDestroy() {
    this.clearTimeout()
    document.removeEventListener('click', this.handleDocClick, false)
  },
  mounted() {
    document.addEventListener('click', this.handleDocClick, false)
    this.resetDlStyle()
  },
  methods: {
    toggleList() {
      if (this.disabled) return
      if (!this.optionsVisible) {
        let timer = setTimeout(() => {
          this.optionsVisible = true
          clearTimeout(timer)
          timer = null
        }, 0)
      }
    },
    handleSelect(item, e) {
      if (item.disabled) {
        e.stopPropagation()
        return
      }
      this.selectText = item.text
      this.selectValue = item.value
    },
    mouseLeave() {
      if (this.optionsVisible) {
        this.timer = setTimeout(() => {
          this.optionsVisible = false
        }, 2000)
      }
    },
    mouseEnter() {
      this.clearTimeout()
    },
    clearTimeout() {
      clearTimeout(this.timer)
      this.timer = null
    },
    handleDocClick() {
      if (!this.optionsVisible) return
      this.optionsVisible = false
      this.clearTimeout()
    },
    resetDlStyle() {
      this.$nextTick(() => {
        const dl = this.$refs.dl
        dl.style.zIndex = getMaxZIndex() + 1
        const selectorHeight = this.$refs.result.offsetHeight
        if (selectorHeight > 0) {
          dl.style.top = selectorHeight + 2 + 'px'
        }
      })
    },
    addPrefix(t) {
      return this.itemPrefix + t
    },
    clear(e) {
      e.stopPropagation()
      this.selectText = null
      this.selectValue = null
    },
  },
}
</script>

<style lang="scss">
$mediumHeight: 35px;
$smallHeight: 28px;
.global-selector-wrapper {
  position: relative;
  .cur {
    cursor: pointer;
  }
  .result-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 2px;
    height: 28px;
    span {
      margin: 0 30px 0 10px;
      font-size: 0.75rem;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }
    i {
      position: absolute;
      right: 13px;
      top: 50%;
      margin-top: -6px;
      display: inline-block;
      text-align: center;
      width: 12px;
      height: 12px;
      transition: transform 0.2s ease-in-out;
      font-size: 0;
      &.is-show {
        transform: rotate(-180deg);
      }
      svg {
        display: inline-block;
        margin-top: 3px;
        vertical-align: top;
      }
      &.__clear {
        cursor: pointer;
        transform: rotate(45deg);
        display: none;
        &:before,
        &:after {
          position: absolute;
          display: inline-block;
          content: '';
          background: $--color-primary;
        }
        &:before {
          top: 5px;
          left: 0;
          width: 12px;
          height: 2px;
        }
        &:after {
          top: 0;
          left: 5px;
          width: 2px;
          height: 12px;
        }
      }
    }
  }
  dl {
    position: absolute;
    z-index: 100;
    top: 37px;
    left: 0;
    min-width: 100%;
    background: $--color-white;
    box-shadow: 0 5px 10px rgba(7, 134, 189, 0.3);
    min-height: 35px;
    max-height: 300px;
    padding: 5px 0;
    overflow-y: auto;
    border-radius: 4px;
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: $--color-background;
      cursor: pointer;
      border-radius: 2px;
      border: 1px solid $--color-white;
    }
    dt,
    dd {
      display: flex;
      align-items: center;
      padding: 0 10px;
      white-space: nowrap;
      div {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    dt {
      margin: 6px 0;
      font-size: 10px;
      line-height: 24px;
      border-bottom: 1px solid #eff6fa;
    }
    dd {
      font-size: 12px;
      line-height: 24px;
      &.__disabled {
        opacity: 0.5;
      }
    }
  }

  &.selectable {
    .result-wrapper {
      cursor: pointer;
    }
  }

  // theme
  &.__light-blue {
    .result-wrapper {
      background: $--color-background;
      span {
        &.text {
          color: $--color-primary-active;
        }
        &.placeholder {
          color: $--color-primary-active;
        }
      }
      i.__clear {
        &:before,
        &:after {
          background: $--color-primary-active;
        }
      }
    }
    dl {
      dt {
        color: $--color-primary-active;
      }
      dd {
        color: $--color-primary-active;
        &:hover {
          background: #eff6fa;
        }
        &.selected {
          background: #eff6fa;
          font-weight: bold;
        }
      }
    }
  }

  &.__default {
    .result-wrapper {
      border: 1px solid $--color-border;
      border-radius: 4px;
      span {
        &.text {
          color: $--color-primary-placeholder;
        }
        &.placeholder {
          color: $--color-primary-placeholder;
        }
      }
    }
    dl {
      dt {
        color: $--color-primary-placeholder;
      }
      dd {
        color: $--color-primary-placeholder;
        &:hover {
          background: #eff6fa;
        }
        &.selected {
          background: $--color-border;
          font-weight: bold;
        }
      }
    }
  }

  &.__transparent {
    .result-wrapper {
      border: 1px solid $--color-border;
      border-radius: 4px;
      span {
        &.text {
          color: $--color-white;
        }
        &.placeholder {
          color: $--color-white;
          opacity: 0.5;
        }
      }
      i.__clear {
        &:before,
        &:after {
          background: $--color-white;
        }
      }
    }
    dl {
      dt {
        color: $--color-primary-active;
      }
      dd {
        color: $--color-primary-active;
        &:hover {
          background: #eff6fa;
        }
        &.selected {
          background: #eff6fa;
          font-weight: bold;
        }
      }
    }
  }

  // size
  &.__medium {
    .result-wrapper {
      height: $mediumHeight;
    }
  }

  &.__small {
    .result-wrapper {
      height: $smallHeight;
    }
  }

  // text/font size
  &.text-size-mini {
    .result-wrapper {
      span {
        font-size: 10px;
      }
    }
    dl {
      dt,
      dd {
        font-size: 10px;
      }
    }
  }

  &.__clearable.selectable.is-non-empty {
    .result-wrapper {
      &:hover {
        .__arrow {
          display: none;
        }
        .__clear {
          display: block;
        }
      }
    }
  }
}
</style>
