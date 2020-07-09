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
          <h4>前年比</h4>
          <div class="d-flex align-center">
            <ArrowUp />
            <h3>1.35%</h3>
          </div>
        </div>
        <div class="stats__right__percent d-flex">
          <h4>前々年比</h4>
          <div class="d-flex align-center">
            <ArrowDown />
            <h3>1.35%</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="stats d-flex">
      <div class="stats__left">
        <h3>総粗利</h3>
      </div>
    </div>
    <div class="stats d-flex">
      <div class="stats__left">
        <h3>総顧客数</h3>
      </div>
    </div>
  </div>
</template>
<script>
import ArrowUp from '~components/common/ArrowUp.vue'
import ArrowDown from '~components/common/ArrowDown.vue'
export default {
  name: 'SalesStats',
  components: {
    ArrowUp,
    ArrowDown,
  },
}
</script>
<style lang="scss" scoped>
.container {
  .stats {
    padding: 20px 0px;
    height: 145px;
    border-bottom: 1px solid $gray-100;
    &:last-child {
      border-bottom: none;
    }
    &__left {
      width: 80px;
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
        justify-content: right;
        h3 {
          font-size: 12px;
          font-weight: 400;
          color: #db3394;
        }
      }
    }
  }
}
</style>
