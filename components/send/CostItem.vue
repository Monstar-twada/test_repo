<template>
  <div class="costItem">
    <div class="costItem__top">
      <p class="costItem__top--title">{{ item.title }}</p>
      <v-img
        :max-width="48"
        :max-height="48"
        :src="require(`~/static/send/${item.img}.svg`)"
        class="costItem__top--img"
      ></v-img>
      <p class="costItem__top--num">
        {{ item.count }}
        <span>件</span>
      </p>
    </div>
    <div class="costItem__bottom">
      <p>
        {{ item.cost }}
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
.costItem {
  border: 1px solid $gray-100;
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
      background-color: $white-100;
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
    border-top: solid 1px $gray-100;
    height: 40px;
    p {
      font-size: 14px;
      font-weight: bold;
      margin: 0;
      & > span {
        font-size: 12px;
      }
    }
  }
}
</style>
