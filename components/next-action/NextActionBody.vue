<template>
  <div class="next-action-body-wrapper">
    <h4 class="title">新規顧客獲得</h4>
    <Item v-for="(item, i) in list1" :key="'new' + i" :item="item" />

    <h4 class="title">オプションサービス</h4>
    <Item v-for="(item, i) in list2" :key="'service' + i" :item="item" />
  </div>
</template>

<script>
import Item from './item'
export default {
  name: 'NextActionBody',
  components: {
    Item,
  },
  data() {
    const tempItem1 = {
      title: 'リスティング広告',
      tag: '¥3000',
      contents: ['目的：リピート率向上', '効果：中'],
      count: 20,
    }
    const tempItem2 = {
      title: '車販サービス導入（兼業）',
      tag: '申し込む',
      contents: [
        '2ヶ月間粗利が低いようです。利益率を向上させるために、carsコンサルティング チームに相談してみませんか？',
      ],
      isSmallTile: true,
    }
    const list1 = []
    for (let i = 0; i < 5; i++) {
      list1.push({
        ...tempItem1,
      })
    }
    const list2 = []
    for (let i = 0; i < 5; i++) {
      list2.push({
        ...tempItem2,
      })
    }
    return {
      list1,
      list2,
    }
  },
}
</script>

<style lang="scss">
.next-action-body-wrapper {
  position: absolute;
  top: 100px;
  left: 8px;
  right: 8px;
  bottom: 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar-track {
    background-color: #f2f5f7;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: $blue-100;
    cursor: pointer;
    border-radius: 2px;
  }
  h4.title {
    margin: 15px 8px 0 12px;
    font-size: 14px !important;
    color: $blue-200;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
