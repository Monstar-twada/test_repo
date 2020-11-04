<template>
  <div class="dialog-header-wrapper" :class="noBorder ? '' : 'border'">
    <h2>{{ title }}</h2>
    <slot></slot>
    <CloseButton @click="$emit('close')" />
  </div>
</template>

<script>
import CloseButton from './CloseButton';
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
    noBorder: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.dialog-header-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &.border {
    border-bottom: 1px solid $--color-border;
  }
  height: 58px;
  overflow: hidden;
  h2 {
    margin-left: 24px;
    color: $--color-primary;
    max-width: calc(100% - 78px);
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
