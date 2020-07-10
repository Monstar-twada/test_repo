<template>
  <div class="container">
    <div class="stats d-flex">
      <div class="stats__left">
        <h3 class="mb10">総売上</h3>
        <v-img
          :height="70"
          :width="60"
          contain
          :src="require('~/static/bi/meter.svg')"
        ></v-img>
      </div>
      <div class="stats__right">
        <h1><span>¥</span>8,560,000</h1>
        <div class="stats__right__target">
          <h4>目標金額</h4>
          <h3>9,560,000</h3>
        </div>
        <div class="stats__right__percent d-flex">
          <h4 class="stats__right__percent--label">前年比</h4>
          <Increase content="1.35%" />
        </div>
        <div class="stats__right__percent d-flex">
          <h4 class="stats__right__percent--label">前々年比</h4>
          <Increase content="1.35%" />
        </div>
      </div>
    </div>
    <div class="stats d-flex">
      <div class="stats__left">
        <h3>総粗利</h3>
      </div>
      <div class="stats__right">
        <h1><span>¥</span>3,880,000</h1>
        <div class="stats__right__target">
          <h4>目標金額</h4>
          <h3>4,880,000</h3>
        </div>
        <div class="stats__right__percent d-flex">
          <h4 class="stats__right__percent--label">前年比</h4>
          <Increase content="1.35%" />
        </div>
        <div class="stats__right__percent d-flex">
          <h4 class="stats__right__percent--label">前々年比</h4>
          <Increase content="1.35%" />
        </div>
      </div>
    </div>
    <div class="stats d-flex">
      <div class="stats__left">
        <h3>総顧客数</h3>
      </div>
      <div class="stats__right">
        <h1 class="text-alignR">30,000<span>件</span></h1>
        <div class="stats__right__percent d-flex">
          <h4 class="stats__right__percent--label">前年比</h4>
          <Increase content="1.35%" />
        </div>
        <div class="stats__right__percent d-flex">
          <h4 class="stats__right__percent--label">前々年比</h4>
          <Increase content="1.35%" />
        </div>
      </div>
    </div>
    <SalesCount />
  </div>
</template>
<script>
import Increase from '../common/Increase.vue'
// import Decrease from '../common/decrease.vue'
import SalesCount from '~/components/bi/SalesCount.vue'

export default {
  name: 'SalesStats',
  components: {
    Increase,
    // Decrease,
    SalesCount,
  },
}
</script>
<style lang="scss" scoped>
.container {
  .stats {
    padding: 20px 0px;
    height: 145px;
    border-bottom: 1px solid $gray-100;
    &:nth-child(3) {
      border-bottom: none;
      padding-bottom: 0px;
      height: auto;
    }
    &__left {
      width: 100px;
      h3 {
        margin-left: 15px;
        color: $blue-200;
        font-size: 14px;
        font-weight: 600;
      }
      &__img {
        margin-right: 20px;
      }
    }
    &__right {
      margin-left: 15px;
      width: 80%;
      .text-alignR {
        text-align: right;
      }
      h1 {
        font-size: 30px;
        color: $blue-200;
        font-weight: 800;
        line-height: 28px;
        span {
          font-size: 14px;
          margin-right: 5px;
        }
      }
      &__target {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 30px;
        margin-top: 5px;
        background: $white-100;
        padding: 0px 10px;
        border-radius: 5px;
        h4 {
          color: $gray-400;
          font-size: 10px;
          font-weight: 300;
        }
        h3 {
          color: $blue-500;
          font-size: 15px;
          font-weight: 400;
        }
      }
      &__percent {
        margin-top: 5px;
        justify-content: space-between;
        align-items: center;
        padding-left: 42%;
        &--label {
          font-size: 10px;
          color: $gray-500;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
