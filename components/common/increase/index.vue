<template>
  <div class="d-flex align-center">
    <v-img
      :width="15"
      :height="15"
      contain
      :src="require('./img/arrow-up.svg')"
    ></v-img>
    <h3 class="percentage">{{ content }}</h3>
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
};
</script>
<style lang="scss" scoped>
.percentage {
  font-size: 12px;
  font-weight: 400;
  color: $--color-warning !important;
}
</style>
