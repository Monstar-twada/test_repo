<template>
  <div>
    <span v-if="flg">○</span>
    <span v-else>ー</span>
  </div>
</template>
<script>
export default {
  name: 'BooleanFlg',
  props: {
    flg: {
      type: Boolean,
      default: false,
    },
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
