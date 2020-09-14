<template>
  <Item
    bold
    left="30"
    right="56"
    label-width="66"
    class="matter-detail-dialog__principal"
    label="担当者"
  >
    <fg-avatar v-for="(item, i) in list" :key="i" size="24" :data="item" />
  </Item>
</template>

<script>
import Item from '../common/Item'
export default {
  components: { Item },
  data() {
    return {
      list: [
        {
          url: '/common/person_default.svg',
          name: '岡田俊平',
        },
        {
          url: '/common/person_default.svg',
          name: '浅井健太',
        },
        {
          url: '/common/person_default.svg',
          name: '谷口広大',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '../common/mixins';
.matter-detail-dialog__principal {
  position: relative;
  height: 60px;
  @include borderBottom();
  .fg-avatar {
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
    .avatar-wrapper {
      background: $--color-border;
    }
  }
}
</style>
