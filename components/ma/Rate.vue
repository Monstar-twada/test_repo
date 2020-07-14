<template>
  <div class="">
    <p class="rate" :class="isUp ? 'rate-red' : 'rate-blue'">
      <v-img
        v-if="isUp"
        class="d-inline-block rate-img"
        :max-width="10"
        :max-height="10"
        :src="require(`./img/arrow-up.svg`)"
      ></v-img>
      <v-img
        v-else
        class="d-inline-block rate-img"
        :max-width="10"
        :max-height="10"
        :src="require(`./img/arrow-down.svg`)"
      ></v-img>
      <span class="d-inline">{{ rate }}%</span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'Rate',
  props: {
    isUp: {
      type: Boolean,
      default: false,
    },
    rate: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.rate {
  font-size: 10px;
}
.rate-red {
  color: #db3394;
  .rate-img {
    transform: rotate(45deg);
  }
}
.rate-blue {
  color: #2f95cb;
  .rate-img {
    transform: rotate(135deg);
  }
}
</style>
