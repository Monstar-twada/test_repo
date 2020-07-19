<template>
  <v-row class="data-col mx-0">
    <div class="data-col__item">
      <h4>総広告予算</h4>
      <p class="data">¥755,800</p>
    </div>
    <div class="data-col__item">
      <h4>リーチ数</h4>
      <p class="data">3,779</p>
      <Rate is-up :rate="Number(1.35)" />
    </div>
    <div class="data-col__item">
      <h4>コンタクト数</h4>
      <p class="data">2,447</p>
      <Rate :rate="Number(1.2)" />
    </div>
    <div class="data-col__item">
      <h4>予約件数</h4>
      <p class="data">595</p>
      <Rate is-up :rate="Number(2.0)" />
    </div>
    <div class="data-col__item">
      <h4>予約獲得単価</h4>
      <p class="data">¥1,278</p>
      <Rate :rate="Number(3.5)" />
    </div>
  </v-row>
</template>
<script>
import Rate from '~/components/ma/tab/Rate.vue'
export default {
  name: 'DataCol',
  components: {
    Rate,
  },
  data() {
    return {
      isUp: true,
    }
  },
}
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.data-col {
  height: 100px;
  border: 1px solid $gray-100;
  border-radius: 6px;
  color: $blue-200;
  font-weight: bold;

  &__item {
    width: 20%;
    height: 80px;
    padding: 10px 0;
    text-align: center;
    position: relative;

    &:not(:last-child)::after {
      content: '';
      background-image: url('../img/arrow-bg.svg');
      position: absolute;
      width: 20px;
      height: 100px;
      right: 0;
      top: 0;
      background-size: contain;
      background-repeat: no-repeat;
      vertical-align: middle;
    }

    .data {
      font-size: 22px;
      margin-top: 5px;
      margin-bottom: 5px;
    }

    .rate {
      font-size: 10px;
    }
  }
}
</style>
