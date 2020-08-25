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
  background: $white-300;
  border-radius: 6px;
  overflow: hidden;
  color: $blue-200;
  padding: 10px 0;
}
</style>
