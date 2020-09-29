<template>
  <div class="white-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WhiteBox',
}
</script>

<style lang="scss" scoped>
.white-box {
  background: $--color-white;
  border-radius: 6px;
  overflow: hidden;
  color: $--color-primary;
  padding: 10px 0 20px;
}
</style>
