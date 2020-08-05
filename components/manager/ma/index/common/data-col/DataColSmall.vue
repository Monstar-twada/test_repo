<template>
  <v-row class="data-col mx-0">
    <div class="data-col__item">
      <h4>リーチ数</h4>
      <p class="data">
        {{ reach.value ? reach.value.toLocaleString() : 'ー' }}
      </p>
      <Rate :is-up="reach.isUp" :rate="Number(reach.rate)" />
    </div>
    <div class="data-col__item">
      <h4>コンタクト数</h4>
      <p class="data">
        {{ contacts.value ? contacts.value.toLocaleString() : 'ー' }}
      </p>
      <Rate :is-up="contacts.isUp" :rate="Number(contacts.rate)" />
    </div>
    <div class="data-col__item">
      <h4>予約件数</h4>
      <p class="data">
        {{ order.value ? order.value.toLocaleString() : 'ー' }}
      </p>
      <Rate :is-up="order.isUp" :rate="Number(order.rate)" />
    </div>
  </v-row>
</template>
<script>
import Rate from '~/components/manager/ma/index/common/rate/index'
export default {
  name: 'DataCol',
  components: {
    Rate,
  },
  props: {
    reach: {
      type: Object,
      default: null,
    },
    contacts: {
      type: Object,
      default: null,
    },
    order: {
      type: Object,
      default: null,
    },
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
  height: 80px;
  border: 1px solid $gray-100;
  border-radius: 6px;
  color: $blue-200;
  font-weight: bold;

  &__item {
    width: 33%;
    //padding: 10px 0;
    text-align: center;
    position: relative;

    &:not(:last-child)::after {
      content: '';
      background-image: url('./img/arrow-bg.svg');
      position: absolute;
      width: 18px;
      height: 80px;
      right: 0;
      top: 0;
      background-size: contain;
      background-repeat: no-repeat;
      vertical-align: middle;
    }
    h4 {
      margin-top: 5px;
    }

    .data {
      font-size: 24px;
      font-weight: 900;
      margin-top: 0px;
      margin-bottom: 0px;
      font-family: 'Yantramanav';
    }
  }
}
</style>
