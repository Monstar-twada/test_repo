<template>
  <button class="dialog-close-button" @click="$emit('click')">
    <IconPlus />
  </button>
</template>

<script>
import IconPlus from '~/components/breadcrumbs/IconPlus'
export default {
  name: 'CloseButton',
  components: {
    IconPlus,
  },
}
</script>

<style lang="scss">
button.dialog-close-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $white-300;
  border-radius: 50%;
  border: 1px solid $gray-100;
  width: 30px;
  height: 30px;
  outline: none;
  i {
    vertical-align: middle;
    transform: rotate(45deg);
  }
}
</style>
