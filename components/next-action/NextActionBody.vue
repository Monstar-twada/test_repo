<template>
  <div class="next-action-body-wrapper">
    <h4 class="title">活動支援</h4>
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
    const list1 = [
      {
        title: '車検広告',
        tag: '確認する',
        contents: ['目的：来月車検獲得', '効果：大'],
        count: '192件獲得',
      },
      {
        title: '車販送客',
        tag: '確認する',
        contents: ['目的：売上向上（送客）', '効果：中'],
        count: '132万円獲得',
      },
    ]

    const list2 = [
      {
        title: '車販サービス導入（兼業）',
        tag: '申し込む',
        contents: ['目的：新規顧客獲得', '効果：中'],
        isSmallTile: true,
      },
      {
        title: 'おまかせコンサルティング ',
        tag: '申し込む',
        contents: [
          '2ヶ月間粗利が低いようです。利益率を向上させるために、carsコンサルティング チームに相談してみませんか？',
        ],
        isSmallTile: true,
      },
      {
        title: 'おまかせコンサルティング ',
        tag: '申し込む',
        contents: [
          '2ヶ月間粗利が低いようです。利益率を向上させるために、carsコンサルティング チームに相談してみませんか？',
        ],
        isSmallTile: true,
      },
      {
        title: 'おまかせコンサルティング ',
        tag: '申し込む',
        contents: [
          '2ヶ月間粗利が低いようです。利益率を向上させるために、carsコンサルティング チームに相談してみませんか？',
        ],
        isSmallTile: true,
      },
    ]
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
