<template>
  <div
    class="global-input-wrapper"
    :class="[
      '__' + theme,
      disabled ? '__disabled' : '',
      clearable ? '__clearable' : '',
    ]"
  >
    <input
      :type="inputType"
      :name="name"
      :placeholder="placeholder"
      :style="InputStyle"
      :value="inputVal"
      :disabled="disabled"
      @input="handleInput($event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    />
    <i class="__clear" @click="clear()"></i>
  </div>
</template>

<script>
export default {
  name: 'GlobalInput',
  props: {
    value: {
      type: [Number, String],
      default: '',
    },
    inputType: {
      type: String,
      default: 'input',
    },
    name: {
      type: String,
      default: '',
    },
    customheight: {
      type: Number,
      default: 40,
    },
    customfontsize: {
      type: Number,
      default: 14,
    },
    customtextalign: {
      type: String,
      default: 'left',
    },
    placeholder: {
      type: String,
      default: '',
    },
    placeholdersize: {
      type: Number,
      default: 10,
    },
    theme: {
      type: String,
      default: 'blue',
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputVal: this.value,
    }
  },
  computed: {
    InputStyle() {
      return {
        '--height': this.customheight + 'px',
        '--fontsize': this.customfontsize + 'px',
        '--placeholdersize': this.placeholdersize + 'px',
        '--textalign': this.customtextalign,
      }
    },
  },
  watch: {
    value(val) {
      this.inputVal = val
    },
    inputVal(val) {
      this.$emit('input', val)
    },
  },
  methods: {
    handleInput(e) {
      this.inputVal = e.target.value
    },
    clear() {
      this.inputVal = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.global-input-wrapper {
  position: relative;
  input {
    display: flex;
    padding: 0 10px;
    outline: none;
    width: 100%;
    height: var(--height);
    line-height: var(--height);
    border-radius: 5px;
    font-size: var(--fontsize);
    &::placeholder {
      font-size: var(--placeholdersize);
      text-align: var(--textalign);
    }
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
    &.__clear {
      cursor: pointer;
      display: none;
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
  }
  // theme
  &.__blue {
    input {
      border: 1px solid $gray-100;
      color: $blue-200;
      &::placeholder {
        color: $blue-500;
      }
    }
  }
  // theme
  &.__disabled {
    input {
      background: #ccc;
    }
  }
  //clear
  &.__clearable {
    &:hover {
      .__clear {
        display: block;
      }
    }
  }
}
</style>
