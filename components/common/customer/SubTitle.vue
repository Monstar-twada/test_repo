<template>
  <div class="sub-title">
    <h3>{{ subTitle }}</h3>
    <span class="sub-title__line"></span>
    <div class="right-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SubTitle',
  props: {
    subTitle: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.sub-title {
  width: 100%;
  height: 40px;
  position: relative;
  border-bottom: 1px $gray-100 solid;
  h3 {
    color: $blue-200;
    font-weight: bold;
    line-height: 40px;
  }

  &__line {
    width: 56px;
    height: 1px;
    display: block;
    position: absolute;
    background-color: $blue-200;
    left: 0;
    bottom: -1px;
  }
  .right-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    height: 40px;
    display: flex;
    align-items: center;
  }
}
</style>
