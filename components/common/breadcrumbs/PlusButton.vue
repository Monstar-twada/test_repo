<template>
  <button
    class="plus-button"
    :class="border ? 'border' : ''"
    @click="$emit('click')"
  >
    <IconPlus />
  </button>
</template>

<script>
import IconPlus from '~/components/common/breadcrumbs/IconPlus'
export default {
  name: 'PlusButton',
  components: {
    IconPlus,
  },
  props: {
    border: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
button.plus-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  background: $--color-white;
  border: 1px solid #fff;
  outline: none;
  &.border {
    border-color: $--color-border;
  }
}
</style>
