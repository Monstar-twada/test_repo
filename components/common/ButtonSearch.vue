<template>
  <button class="button" @click="$emit('clickEvent')">
    <v-img :src="require('~/static/common/search.svg')" />
  </button>
</template>

<script>
export default {
  name: 'ButtonSearch',
}
</script>

<style lang="scss">
button {
  outline: none;
}
</style>
