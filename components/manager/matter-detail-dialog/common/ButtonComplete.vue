<template>
  <fg-button
    type="warning"
    size="mini"
    width="63px"
    :disabled="disabled"
    @click="$emit('click')"
    >完了</fg-button
  >
</template>

<script>
export default {
  props: {
    disabled: Boolean,
  },
}
</script>
