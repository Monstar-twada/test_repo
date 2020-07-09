<template>
  <button class="plus-button" @click="$emit('click')">
    <IconPlus />
  </button>
</template>

<script>
import IconPlus from '~/components/breadcrumbs/IconPlus'
export default {
  name: 'PlusButton',
  components: {
    IconPlus,
  },
}
</script>

<style lang="scss">
button.plus-button {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  background: $white-300;
  border: 0;
  outline: none;
}
</style>
