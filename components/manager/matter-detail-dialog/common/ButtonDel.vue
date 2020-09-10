<template>
  <fg-button border circle :size="size" @click="$emit('click')">
    <fg-icon :size="iconSize" name="trash" :color="color"></fg-icon>
  </fg-button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#0786BD',
    },
    size: {
      type: String,
      default: 'mini',
    },
    iconSize: {
      type: String,
      default: '8',
    },
  },
}
</script>

<style lang="scss"></style>
