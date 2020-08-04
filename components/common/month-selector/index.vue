<template>
  <div
    :class="['month-selector-wrapper', disabled ? '' : 'selectable']"
    :style="{ width }"
  >
    <div class="result-wrapper" @click="handleClick">
      <keep-alive>
        <span v-if="selectText" class="text">{{ selectText }}</span>
        <span v-else class="placeholder">{{ placeholder }}</span>
      </keep-alive>
      <i></i>
    </div>
    <dl v-show="listVisible" class="options-wrapper">
      <dd @click="handleSelect"></dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
      default: '',
    },
    items: {
      type: Array,
      default() {
        return []
      },
    },
    placeholder: {
      type: String,
      default: '選択して下さい',
    },
    width: {
      type: String,
      default: '120px',
    },
    disabled: Boolean,
  },
  data() {
    console.error(
      'This common/month-selector will be removed, please use "~/components/common/global-selector/index" component instead'
    )
    const item = this.items.find((item) => item.value === this.value) || {}
    return {
      selectValue: this.value,
      selectText: item.text,
      listVisible: false,
    }
  },
  watch: {
    value(val) {
      if (this.selectValue !== val) {
        this.selectValue = val
      }
    },
    selectValue(val) {
      this.$emit('input', val)
    },
  },
  methods: {
    handleClick() {
      if (this.disabled) return
      this.listVisible = !this.listVisible
    },
    handleSelect(item) {
      this.selectValue = item.value
      this.selectText = item.text
    },
  },
}
</script>

<style lang="scss">
.month-selector-wrapper {
  position: relative;
  .result-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    height: 28px;
    padding: 0 30px 0 10px;
    span {
      display: flex;
      align-items: center;
      font-size: 10px;
      max-width: calc(100% - 30);
      text-overflow: ellipsis;
      white-space: nowrap;
      color: $white-300;
      line-height: 1;
      &.placeholder {
        opacity: 0.5;
      }
      &.text {
        white-space: nowrap;
      }
    }
    i {
      position: absolute;
      right: 10px;
      display: inline-block;
      width: 12px;
      height: 7px;
      background: url('./img/arrow-down.svg') no-repeat center center;
      background-size: auto 100%;
    }
  }
  &.selectable {
    .result-wrapper {
      cursor: pointer;
    }
  }
}
</style>
