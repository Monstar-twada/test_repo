<template>
  <div class="send-customer-info-container">
    <div class="send-customer-info-container__top">
      <div class="send-customer-info-container__top__left">
        <h2>今月の送客数</h2>
        <div>
          <div>
            <v-img
              :max-width="7"
              :max-height="11"
              :src="require(`./img/send-arrow-left.svg`)"
              class="arrow-left"
            ></v-img>
            <p>2020年1月-2020年6月</p>
            <v-img
              :max-width="7"
              :max-height="11"
              :src="require(`./img/send-arrow-right.svg`)"
              class="arrow-right"
            ></v-img>
          </div>
          <div>
            <fg-select
              v-model="selectedDate"
              :items="selectDateOptions"
              size="small"
              :width="'120px'"
            />
          </div>
        </div>
      </div>
      <div class="send-customer-info-container__top__right">
        <p>送客額合計</p>
        <p>¥</p>
        <p>1,241,000</p>
      </div>
    </div>
    <div class="send-customer-info-container__bottom">
      <CostItem
        v-for="(item, i) in costItems"
        :key="`item-${i}`"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import CostItem from './CostItem.vue'

export default {
  name: 'CustomerInfo',
  components: { CostItem },
  data() {
    return {
      selectedDate: 1,
      selectDateOptions: [{ text: '過去6ヶ月', value: 1 }],
      costItems: [
        {
          title: '購入',
          img: 'send-car-icon',
          count: '12',
          cost: '40,000',
        },
        {
          title: '売却',
          img: 'send-money-icon',
          count: '21',
          cost: '10,000',
        },
        {
          title: '整備',
          img: 'send-wrench-icon',
          count: '55',
          cost: '3,000',
        },
        {
          title: '鈑金',
          img: 'send-hammer-icon',
          count: '14',
          cost: '3,000',
        },
        {
          title: '保険',
          img: 'send-heart-icon',
          count: '4',
          cost: '10,000~',
        },
        {
          title: 'アクセサリー',
          img: 'send-tire-icon',
          count: '34',
          cost: '1,000~',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.send-customer-info-container {
  background-color: $--color-white;
  color: $--color-primary;
  border-radius: 6px;
  padding: 25px 20px;
  &__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 47px;
    &__left {
      display: flex;
      align-items: center;
      h2 {
        margin-right: 40px;
      }
      div {
        display: flex;
        align-items: center;
        div:first-child {
          margin-right: 25px;
          .arrow-left {
            margin-right: 7px;
            cursor: pointer;
          }
          & > p {
            font-size: 12px;
            font-weight: 500;
            margin: 0;
          }
          .arrow-right {
            margin-left: 7px;
            cursor: pointer;
          }
        }
        div:last-child {
          width: 120px;
          height: 28px;
        }
      }
    }
    &__right {
      display: flex;
      align-items: center;
      p:nth-child(1) {
        font-size: 12px;
        font-weight: bold;
        margin-right: 19px;
      }
      p:nth-child(2) {
        font-size: 14px;
        font-weight: bold;
        margin-right: 4px;
      }
      p:nth-child(3) {
        font-size: 26px;
        font-weight: bold;
        font-family: 'Avenir Next';
      }
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-around;
  }
}
</style>
