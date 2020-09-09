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
  },
  computed: {
    InputStyle() {
      return {
        '--width': this.customwidth + 'px',
        '--height': this.customheight + 'px',
        '--fontsize': this.customfontsize + 'px',
        '--textalign': this.customtextalign,
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
  border: 1px solid $--color-border;
  border-radius: 5px;
  line-height: 40px;
  clear: both;
  font-size: var(--fontsize);
  color: $--color-primary;
  &::placeholder {
    font-size: var(--fontsize);
    color: $--color-primary-placeholder;
    text-align: var(--textalign);
  }
}
</style>
