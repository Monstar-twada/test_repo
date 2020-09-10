<template>
  <fg-button
    type="primary"
    size="mini"
    width="63px"
    :disabled="disabled"
    @click="$emit('click')"
    >保存</fg-button
  >
</template>

<script>
export default {
  props: {
    disabled: Boolean,
  },
}
</script>
