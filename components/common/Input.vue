<template>
  <input
    class="input"
    :type="inputType"
    :name="name"
    :placeholder="placeholderText"
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
    placeholderText: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  width: 250px;
  padding: 0 10px;
  height: 40px;
  border: 2px solid $gray-100;
  border-radius: 5px;
  line-height: 40px;
  clear: both;

  &::-webkit-input-placeholder {
    font-size: 14px;
    color: $blue-100;
  }
}
</style>
