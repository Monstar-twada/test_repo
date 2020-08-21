<template>
  <div class="customer-column-title-wrapper" :class="border ? 'border' : ''">
    <h2>{{ title }}</h2>
    <div class="right-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.customer-column-title-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 57px;
  &.border {
    border-bottom: 1px solid #e5edf6;
  }
  h2 {
    margin-left: 20px;
    color: $blue-200;
  }
  .right-wrapper {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
}
</style>
