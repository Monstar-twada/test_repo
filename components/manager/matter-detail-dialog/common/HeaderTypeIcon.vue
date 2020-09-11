<template>
  <div class="type-item" :style="style">
    <div class="icon" :class="type"></div>
    <div class="text">{{ item.text }}</div>
  </div>
</template>

<script>
import { SEND_TYPES } from './constants'
export default {
  props: {
    type: {
      type: String,
      default: 'buy',
    },
  },
  computed: {
    item() {
      return SEND_TYPES[this.type] || {}
    },
    style() {
      return {
        color: this.item.color,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.type-item {
  border-radius: 50%;
  border: 1px solid $--color-border;
  width: 52px;
  height: 52px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  .icon {
    width: 24px;
    height: 24px;
    &.buy {
      background-image: url('./img/type-buy.svg');
    }
    &.sale {
      background-image: url('./img/type-sale.svg');
    }
    &.inspection {
      background-image: url('./img/type-inspection.svg');
    }
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .text {
    margin-top: -2px;
    font-size: 14px;
    transform: scale(0.5);
  }
}
</style>
