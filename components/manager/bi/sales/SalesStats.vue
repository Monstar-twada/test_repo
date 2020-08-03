<template>
  <div class="content pa-0">
    <div class="stats d-flex pa-0">
      <div class="stats__left">
        <h3 class="mb10">総売上</h3>
        <v-img
          :height="70"
          :width="60"
          contain
          :src="require('./img/meter.svg')"
        ></v-img>
        <p class="stats__left--percentage">88<span>%</span></p>
      </div>
      <div class="stats__right">
        <h1><span>¥</span>63,301,873</h1>
        <div class="stats__right__target">
          <h4>目標金額</h4>
          <h3>71,350,000</h3>
        </div>
        <div class="stats__right__percent d-flex">
          <h4 class="stats__right__percent--label">前年比</h4>
          <Decrease content="3.2%" />
        </div>
        <div class="stats__right__percent d-flex">
          <h4 class="stats__right__percent--label">前々年比</h4>
          <Increase content="5.8%" />
        </div>
      </div>
    </div>
    <div class="stats d-flex">
      <div class="stats__left">
        <h3>総粗利</h3>
      </div>
      <div class="stats__right">
        <h1><span>¥</span>43,979,928</h1>
        <div class="stats__right__target">
          <h4>目標金額</h4>
          <h3>49,600,000</h3>
        </div>
        <div class="stats__right__percent d-flex">
          <h4 class="stats__right__percent--label">前年比</h4>
          <Decrease content="4.5%" />
        </div>
        <div class="stats__right__percent d-flex">
          <h4 class="stats__right__percent--label">前々年比</h4>
          <Increase content="3.5%" />
        </div>
      </div>
    </div>
    <div class="stats d-flex">
      <div class="stats__left">
        <h3>総顧客数</h3>
      </div>
      <div class="stats__right">
        <h1 class="text-alignR">61,265<span>件</span></h1>
        <div class="stats__right__percent d-flex">
          <h4 class="stats__right__percent--label">前年比</h4>
          <Increase content="2.1%" />
        </div>
        <div class="stats__right__percent d-flex">
          <h4 class="stats__right__percent--label">前々年比</h4>
          <Increase content="3.4%" />
        </div>
      </div>
    </div>
    <SalesCount />
  </div>
</template>
<script>
import SalesCount from './SalesCount.vue'
import Increase from '~/components/common/increase/index'
import Decrease from '~/components/common/decrease/index'

export default {
  name: 'SalesStats',
  components: {
    Increase,
    Decrease,
    SalesCount,
  },
}
</script>
<style lang="scss" scoped>
.content {
  padding: 0px;
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
      width: 35%;
      position: relative;
      h3 {
        margin-left: 15px;
        color: $blue-200;
        font-size: 14px;
        font-weight: 600;
      }
      &__img {
        margin-right: 20px;
      }
      &--percentage {
        position: absolute;
        left: 20px;
        top: 65px;
        font-size: 16px;
        color: #0786bd;
        font-weight: 900;
        position: absolute;
        span {
          font-size: 10px;
        }
      }
    }
    &__right {
      margin-left: 15px;
      width: 80%;
      .text-alignR {
        text-align: right;
      }
      h1 {
        font-size: 36px;
        font-family: 'Yantramanav';
        color: $blue-200;
        font-weight: 900;
        line-height: 28px;
        text-align: right;
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
          font-family: 'Yantramanav';
          color: $blue-500;
          font-size: 17px;
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
