<template>
  <input
    class="input"
    :type="inputType"
    :name="name"
    :placeholder="placeholder"
    :style="InputStyle"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    inputType: {
      type: String,
      default: 'input',
    },
    name: {
      type: String,
      default: '',
    },
    customwidth: {
      type: Number,
      default: 100,
    },
    customheight: {
      type: Number,
      default: 40,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  computed: {
    InputStyle() {
      return {
        '--width': this.customwidth + 'px',
        '--height': this.customheight + 'px',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  width: 250px;
  padding: 0 10px;
  height: var(--height);
  width: var(--width);
  border: 1px solid $gray-100;
  border-radius: 5px;
  line-height: 40px;
  clear: both;
  &::-webkit-input-placeholder {
    font-size: 14px;
    color: $blue-100;
  }
}
</style>
