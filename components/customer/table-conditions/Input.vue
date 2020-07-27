<template>
  <div
    class="table-conditions-input-wrapper"
    :class="[
      clearable ? 'clearable' : '',
      'text-size-' + textSize,
      disabled ? '' : 'cur',
      isCalendar ? 'is-calendar' : '',
      isNonEmpty ? 'is-non-empty' : '',
    ]"
    @click="handleClick"
  >
    <input
      ref="input"
      :type="type"
      :placeholder="placeholder"
      :value="text"
      :readonly="readonly"
      @input="handleInput"
    />
    <i class="__clear" @click="handleClear($event)"></i>
    <i class="__calendar"></i>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    clearable: Boolean,
    textSize: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    readonly: Boolean,
    isCalendar: Boolean,
  },
  data() {
    return {
      text: this.value,
    }
  },
  computed: {
    input() {
      return this.$refs.input
    },
    isNonEmpty() {
      return !!this.value
    },
  },
  watch: {
    text(val) {
      this.$emit('input', val)
    },
    value(val) {
      if (this.text !== val) {
        this.text = val
      }
    },
  },
  methods: {
    handleClear(e) {
      e.stopPropagation()
      this.input.value = ''
      this.text = ''
      this.$nextTick(() => {
        this.input.focus()
      })
    },
    handleClick() {
      if (!this.readonly || !this.disabled) {
        this.input.focus()
      }
      this.$emit('click')
    },
    handleInput() {
      this.text = this.input.value
      if (!this.clearVisible) {
        this.clearVisible = true
      }
    },
  },
}
</script>

<style lang="scss">
.table-conditions-input-wrapper {
  position: relative;
  border: 1px solid #dfe6f0;
  border-radius: 4px;
  padding: 0 10px;
  overflow: hidden;
  &.cur,
  &.cur input {
    cursor: pointer;
  }
  input {
    display: block;
    width: 100%;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
    color: #748eb7;
    outline: none;
    border: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    &::placeholder {
      color: #748eb7;
    }
  }

  &.clearable {
    padding-right: 30px;
    .__clear {
      position: absolute;
      z-index: 1;
      right: 13px;
      top: 50%;
      margin-top: -6px;
      display: none;
      text-align: center;
      width: 12px;
      height: 12px;
      transition: transform 0.2s ease-in-out;
      font-size: 0;
      cursor: pointer;
      transform: rotate(45deg);
      &:before,
      &:after {
        position: absolute;
        display: inline-block;
        content: '';
        background: $blue-200;
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
    .__calendar {
      display: none;
      position: absolute;
      z-index: 1;
      right: 13px;
      top: 50%;
      margin-top: -6px;
      text-align: center;
      width: 12px;
      height: 12px;
      background: url('./img/calendar.svg') no-repeat center center;
    }
  }

  // is-calendar
  &.is-calendar {
    .__calendar {
      display: block;
    }
  }

  // clearable
  &.clearable.is-non-empty {
    &:hover {
      .__clear {
        display: block;
      }
      &.is-calendar {
        .__calendar {
          display: none;
        }
      }
    }
  }

  &.text-size-mini {
    input {
      font-size: 10px;
    }
  }
}
</style>
