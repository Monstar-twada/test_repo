<template>
  <div
    class="common-border-box"
    :class="{ 'is-column': column }"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    column: Boolean,
    align: {
      type: String,
      default: '',
    },
  },
  computed: {
    style() {
      const ret = {}
      if (this.align) {
        ret.alignItems = this.align
      }
      return ret
    },
  },
}
</script>

<style lang="scss">
.common-border-box {
  border: 2px solid $--color-border;
  padding: 10px 20px;
  display: inline-flex;
  align-items: center;
  background: $--color-white;
  border-radius: 8px;
  font-size: 12px;
  &.is-column {
    flex-direction: column;
  }
}
</style>
