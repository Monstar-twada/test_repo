<template>
  <div class="color-checkbox" :style="style"></div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    style() {
      return {
        background: this.color,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.color-checkbox {
  display: inline-block;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 1px solid $--color-border;
  border-radius: 50%;
  vertical-align: middle;
}
</style>
