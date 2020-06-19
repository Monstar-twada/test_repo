<template>
  <button class="button" :class="[isWhite ? 'white_style' : 'blue_style']">
    {{ content }}
  </button>
</template>

<script>
export default {
  name: 'ButtonLarge',
  props: {
    content: {
      type: String,
      default: '',
    },
    isWhite: {
      type: Boolean,
      default: false,
    },
    isSize: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.button {
  width: 220px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  font-weight: bold;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 15px;
    right: 20px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
}

.blue_style {
  background: $blue-100;
  border: 1px solid $blue-100;
  color: $white-100;
  &::after {
    border-top: 2px solid $white-100;
    border-right: 2px solid $white-100;
  }
}

.white_style {
  border: 1px solid $blue-100;
  color: $blue-100;
  &::after {
    border-top: 2px solid $blue-100;
    border-right: 2px solid $blue-100;
  }
}
</style>
