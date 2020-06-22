<template>
  <input
    class="input"
    :type="inputType"
    :name="name"
<<<<<<< HEAD
    :placeholder="placeholder"
    :style="InputStyle"
=======
    :placeholder="placeholderText"
>>>>>>> 96bd11555c679a82bece25332cf943b965fc26b6
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
<<<<<<< HEAD
    customwidth: {
      type: Number,
      default: 100,
    },
    customheight: {
      type: Number,
      default: 40,
    },
    placeholder: {
=======
    placeholderText: {
>>>>>>> 96bd11555c679a82bece25332cf943b965fc26b6
      type: String,
      default: '',
    },
  },
<<<<<<< HEAD
  computed: {
    InputStyle() {
      return {
        '--width': this.customwidth + 'px',
        '--height': this.customheight + 'px',
      }
    },
  },
=======
>>>>>>> 96bd11555c679a82bece25332cf943b965fc26b6
}
</script>

<style lang="scss" scoped>
.input {
  width: 250px;
  padding: 0 10px;
<<<<<<< HEAD
  height: var(--height);
  width: var(--width);
  border: 1px solid $gray-100;
  border-radius: 5px;
  line-height: 40px;
  clear: both;
=======
  height: 40px;
  border: 2px solid $gray-100;
  border-radius: 5px;
  line-height: 40px;
  clear: both;

>>>>>>> 96bd11555c679a82bece25332cf943b965fc26b6
  &::-webkit-input-placeholder {
    font-size: 14px;
    color: $blue-100;
  }
}
</style>
