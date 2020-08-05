<template>
  <div class="bodyContainer__CostInfo costInfoContainer">
    <h3>車両詳細情報</h3>
    <div>
      <ContentRowContainer
        v-for="(item, i) in rows"
        :key="`item-${i}`"
        :title="item.title"
        :kind="'input'"
        :placeholder="item.placeholder"
      />
      <ContentRowContainer :title="'車両寸法'">
        <template>
          <div class="row--body--length">
            <div class="row--body--length--item">
              <p>全長</p>
              <input type="text" placeholder="4,575mm" />
            </div>
            <div class="row--body--length--item">
              <p>全幅</p>
              <input type="text" placeholder="1,760mm" />
            </div>
            <div class="row--body--length--item">
              <p>全高</p>
              <input type="text" placeholder="1,470mm" />
            </div>
          </div>
        </template>
      </ContentRowContainer>
    </div>
  </div>
</template>

<script>
import ContentRowContainer from '~/components/common/customer/regist/car/ContentRowContainer'

export default {
  name: 'CostInfoContainer',
  components: {
    ContentRowContainer,
  },
  data: () => ({
    rows: [
      {
        title: '車台番号',
        placeholder: 'ZVW51-0123456',
      },
      {
        title: '通称型式',
        placeholder: 'ZVW51-AHXGB(T)',
      },
      {
        title: 'エンジン型式',
        placeholder: '2ZR-1NM',
      },
      {
        title: '最大出力',
        placeholder: '72kW(98PS)',
      },
      {
        title: '最大トルク',
        placeholder: '142N･m',
      },
      {
        title: 'タイヤサイズ',
        placeholder: '215/45R17',
      },
      {
        title: 'バッテリーサイズ',
        placeholder: 'LN1',
      },
      {
        title: '燃料タンク',
        placeholder: '43L',
      },
      {
        title: 'カラーコード',
        placeholder: '3T7(エモーショナルレッド)',
      },
      {
        title: 'トリムコード',
        placeholder: 'FA22(ブラック)',
      },
      {
        title: 'モデル',
        placeholder: '後期型',
      },
      {
        title: '販売期間',
        placeholder: '2018/12~',
      },
      {
        title: '保証期間',
        placeholder: '~R4/2/24',
      },
      {
        title: '燃費(JC08モード)',
        placeholder: '37.2km/L',
      },
      {
        title: '車両重量',
        placeholder: '1,360Kg',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
.costInfoContainer {
  width: 100%;
  border-radius: 6px;
  background-color: $white-300;
  padding: 24px 23.5px;
  margin-bottom: 30px;
  h3 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .row--body--length {
    &--item {
      display: grid;
      grid-template-columns: 50px 1fr;
      align-items: center;
      margin-bottom: 20px;
      p {
        margin: 0;
        font-size: 12px;
        color: $blue-200;
      }
      input {
        width: 100%;
        height: 40px;
      }
    }
  }
}
</style>
