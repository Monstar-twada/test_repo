<template>
  <div class="send-detail">
    <CustomerInfo />
    <SendStatusItem
      :status-category-icon="progressItem1.categoryIcon"
      :title="progressItem1.title"
      :bar="progressItem1.bar"
      :progress="progressItem1.progress"
    />
    <SendStatusItem
      :status-category-icon="progressItem2.categoryIcon"
      :title="progressItem2.title"
      :bar="progressItem2.bar"
      :progress="progressItem2.progress"
    />
  </div>
</template>

<script>
import CustomerInfo from '~/components/manager/send/detail/customer-info/index'
import SendStatusItem from '~/components/manager/send/detail/send-status/index'
export default {
  name: 'DetailContainer',
  components: {
    CustomerInfo,
    SendStatusItem,
  },
  data() {
    return {
      progressItem1: {
        categoryIcon: 'main',
        title: {
          statusIcon: 'buy',
          id: 'No.xxxxxx',
          name: '米田智彦',
          maker: 'トヨタ',
          type: 'プリウス',
          sendPrice: 40000,
          sendDestination: '〇〇〇〇株式会社　車検の速太郎 武蔵小杉店',
          sendDate: '2020/09/29　12:32',
        },
        bar: {
          carInfo: {
            img: 'car',
            maker: 'ランボルギーニウラカン',
          },
          statusIcon: {
            statusIconIndex: 1,
            statusIconDate: [
              '2020/09/17',
              '2020/09/19',
              '2020/09/20',
              '2020/09/21',
            ],
          },
        },
        progress: [],
      },
      progressItem2: {
        categoryIcon: 'plus',
        title: {
          statusIcon: 'buy',
          id: 'No.xxxxxx',
          name: '米田智彦',
          maker: 'トヨタ',
          type: 'プリウス',
          sendPrice: 40000,
          sendDestination: '〇〇〇〇株式会社　車検の速太郎 武蔵小杉店',
          sendDate: '2020/09/29　12:32',
        },
        bar: {
          carInfo: {
            img: 'car',
            maker: 'ランボルギーニウラカン',
          },
          statusIcon: {
            statusIconIndex: 1,
            statusIconDate: [
              '2020/09/17',
              '2020/09/19',
              '2020/09/20',
              '2020/09/21',
            ],
          },
        },
        progress: [],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.send-detail-detail-conatiner {
  width: 100%;
  background-color: $--color-white;
  border-radius: 6px;
  color: $--color-primary;
  &__top {
    padding: 25px 20px;
    border-bottom: 1px solid $--color-background-hover;
    display: flex;
    justify-content: space-between;
    h3 {
      font-size: 18px;
      font-weight: bold;
    }
    &__right {
      display: flex;
      &--date {
        display: flex;
        margin: 0 5px;
        p:first-child {
          font-size: 12px;
          font-weight: bold;
          margin-right: 15px;
        }
        p:last-child {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
