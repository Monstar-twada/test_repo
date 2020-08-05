<template>
  <i :class="['icon-plus', white ? '__white' : '']"></i>
</template>

<script>
export default {
  name: 'IconPlus',
  props: {
    white: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
i.icon-plus {
  position: relative;
  display: inline-block;
  width: 12px;
  height: 12px;
  &:before,
  &:after {
    position: absolute;
    display: inline-block;
    content: '';
    background: $blue-100;
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
  &.__white {
    &:before,
    &:after {
      background: $white-300;
    }
  }
}
</style>
