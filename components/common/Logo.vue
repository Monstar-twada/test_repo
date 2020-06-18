<template>
  <v-img class="logo" :src="require('~/static/logo.svg')" :width="logoWidth" />
</template>
<script>
export default {
  name: 'Logo',
  props: {
    logoWidth: {
      type: Number,
      default: 160,
    },
  },
}
</script>
<style lang="scss" scoped>
.logo {
  width: 100%;
  margin: 0 auto;
}
</style>
