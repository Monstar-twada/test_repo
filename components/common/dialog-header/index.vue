<template>
  <div class="dialog-header-wrapper">
    <h2>{{ title }}</h2>
    <CloseButton @click="$emit('close')" />
  </div>
</template>

<script>
import CloseButton from './CloseButton'
export default {
  name: 'DialogHeader',
  components: {
    CloseButton,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.dialog-header-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  height: 58px;
  border-bottom: 1px solid $gray-100;
  h2 {
    margin-left: 24px;
    color: $blue-200;
    width: calc(100% - 78px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .dialog-close-button {
    position: absolute;
    top: 14px;
    right: 24px;
  }
}
</style>
