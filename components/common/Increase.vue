<template>
  <div class="d-flex align-center">
    <v-img
      :width="15"
      :height="15"
      contain
      :src="require('~/static/bi/arrowup.svg')"
    ></v-img>
    <h3 class="text">{{ content }}</h3>
  </div>
</template>
<script>
export default {
  name: 'Increase',
  props: {
    content: {
      type: [String, Number],
      default: '1.10%',
    },
  },
}
</script>
<style lang="scss">
.text {
  font-size: 12px;
  font-weight: 400;
  color: $pink-100;
}
</style>
