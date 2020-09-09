<template>
  <div class="customer-info-cost-item-container">
    <div class="customer-info-cost-item-container__top">
      <p class="customer-info-cost-item-container__top--title">
        {{ item.title }}
      </p>
      <v-img
        :max-width="48"
        :max-height="48"
        :src="require(`./img/${item.img}.svg`)"
        class="customer-info-cost-item-container__top--img"
      ></v-img>
      <p class="customer-info-cost-item-container__top--num">
        {{ item.count }}
        <span>件</span>
      </p>
    </div>
    <div class="customer-info-cost-item-container__bottom">
      <p>
        <span>¥</span>
        <span>{{ item.cost }}</span>
        <span>/件</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CostItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.customer-info-cost-item-container {
  border: 1px solid $--color-border;
  margin: 0;
  width: 123px;
  height: 190px;
  border-radius: 6px;
  &__top {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7px 6px;
    height: 150px;
    &--title {
      font-weight: bold;
      width: 100%;
      text-align: center;
      border-radius: 4px;
      background-color: $--color-background;
      font-size: 14px;
      font-weight: bold;
      padding: 5px 0;
    }
    &--img {
      margin-bottom: 5px;
    }
    &--num {
      font-size: 22px;
      font-weight: bold;
      & > span {
        font-size: 14px;
      }
    }
  }
  &__bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: solid 1px $--color-border;
    height: 40px;
    p {
      font-size: 14px;
      font-weight: bold;
      margin: 0;
      span:nth-child(1),
      span:nth-child(2) {
        font-family: 'Avenir Next';
      }
      span:nth-child(3) {
        font-size: 12px;
      }
    }
  }
}
</style>
