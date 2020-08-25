<template>
  <div class="">
    <p
      class="rate"
      :class="isUp ? 'rate-red' : rate == 0 ? 'rate-gray' : 'rate-blue'"
    >
      <v-img
        v-if="isUp"
        class="d-inline-block rate-img"
        :max-width="10"
        :max-height="10"
        :src="require(`./img/arrow-up.svg`)"
      ></v-img>
      <v-img
        v-else-if="rate !== 0"
        class="d-inline-block rate-img"
        :max-width="10"
        :max-height="10"
        :src="require(`./img/arrow-down.svg`)"
      ></v-img>
      <span class="d-inline">{{ rate !== 0 ? `${rate}%` : 'ー' }}</span>
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
      type: Number,
      default: 0,
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

.rate-gray {
  color: $gray-500;
}
</style>
