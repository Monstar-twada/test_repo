<template>
  <div class="aside-selector-wrapper" @mouseleave="mouseLeaved">
    <div class="result" @click="toggleList($event)">
      <span>{{ text }}</span>
      <i :class="optionsVisible ? 'is-show' : ''"></i>
    </div>
    <dl
      v-show="optionsVisible"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeaved"
    >
      <template v-for="(item, i) in list">
        <dt v-if="item.title" :key="i">
          <div>{{ item.title }}</div>
        </dt>
        <dd v-else :key="i" @click="handleSelect(item)">- {{ item.text }}</dd>
      </template>
    </dl>
  </div>
</template>

<script>
// const DEFAULT_TEXT = '選択して下さい'
const DEFAULT_TEXT = 'cars足立'
export default {
  name: 'AsideSelector',
  props: {
    value: {
      type: [Number, String],
      default: '',
    },
    list: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      optionsVisible: false,
      text: DEFAULT_TEXT,
      val: this.value,
    }
  },
  watch: {
    value(val) {
      if (this.val !== val) {
        this.val = val
      }
    },
    val(val) {
      this.$emit('input', val)
    },
  },
  beforeDestroy() {
    this.clearTimeout()
    document.removeEventListener('click', this.handleDocClick, false)
  },
  mounted() {
    document.addEventListener('click', this.handleDocClick, false)
  },
  methods: {
    toggleList(e) {
      e.stopPropagation()
      this.optionsVisible = !this.optionsVisible
    },
    handleSelect(item) {
      // this.text = item.text
      this.val = item.value
    },
    mouseLeaved() {
      if (this.optionsVisible) {
        this.timer = setTimeout(() => {
          this.optionsVisible = false
        }, 3000)
      }
    },
    mouseEnter() {
      this.clearTimeout()
    },
    clearTimeout() {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    },
    handleDocClick() {
      if (!this.optionsVisible) return
      this.optionsVisible = false
      this.clearTimeout()
    },
  },
}
</script>

<style lang="scss">
.aside-selector-wrapper {
  position: relative;
  .result {
    display: flex;
    align-items: center;
    position: relative;
    background: $white-100;
    border-radius: 2px;
    height: 35px;
    cursor: pointer;
    span {
      margin: 0 30px 0 10px;
      font-size: 0.75rem;
      color: $blue-100;
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
      width: 12px;
      height: 12px;
      background: url('./img/selector-arrow.svg') no-repeat center center;
      transition: transform 0.2s ease-in-out;
      &.is-show {
        transform: rotate(-180deg);
      }
    }
  }
  dl {
    position: absolute;
    z-index: 100;
    top: 37px;
    left: 0;
    right: 0;
    background: $white-300;
    box-shadow: 0 2px 5px rgba(7, 134, 189, 0.2);
    min-height: 35px;
    max-height: 300px;
    color: $blue-100;
    padding: 2px 0 10px 0;
    overflow-y: auto;
    dt,
    dd {
      display: flex;
      align-items: center;
      padding: 0 10px;
      div {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    dt {
      margin: 6px 0 6px;
      font-size: 10px;
      line-height: 24px;
      border-bottom: 1px solid #eff6fa;
    }
    dd {
      font-size: 12px;
      line-height: 22px;
      cursor: pointer;
      &:hover {
        background: #eff6fa;
      }
    }
  }
}
</style>
