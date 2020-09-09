<template>
  <div class="search-bar-wrapper">
    <slot></slot>
    <fg-button
      circle
      size="small"
      type="primary"
      icon="magnifier"
      @click="$emit('click')"
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.search-bar-wrapper {
  position: relative;
  padding: 0 70px 20px 20px;
  background: $--color-white;
  border-radius: 6px;
  .fg-button {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
}
</style>
