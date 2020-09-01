<template>
  <div class="send-detail-detail-conatiner">
    <div class="send-detail-detail-conatiner__top">
      <h3>送客依頼詳細</h3>
      <div class="send-detail-detail-conatiner__top__right">
        <div class="send-detail-detail-conatiner__top__right--date">
          <p>依頼日時：</p>
          <p>R02/06/01 16:30</p>
        </div>
        <div class="send-detail-detail-conatiner__top__right--date">
          <p>完了日時：</p>
          <p>R02/07/01 16:30</p>
        </div>
      </div>
    </div>
    <div class="send-detail-detail-conatiner__bottom">
      <CustomerPart />
      <RequestKindPart />
      <TextAreaInfo
        :title="row3.title"
        :value="row3.value"
        :placeholder="row3.placeholder"
      />
      <TextAreaInfo
        :title="row4.title"
        :value="row4.value"
        :placeholder="row4.placeholder"
      />
      <StatusPart
        :selected="row5.selectedValue"
        :list="row5.list"
        :placeholder="row5.placeholder"
      />
      <SubmitButton :title="'更新'" />
    </div>
  </div>
</template>

<script>
import CustomerPart from '~/components/manager/send/common/CustomerPart.vue'
import RequestKindPart from '~/components/manager/send/common/RequestKindPart.vue'
import TextAreaInfo from '~/components/manager/send/common/TextAreaInfo.vue'
import SubmitButton from '~/components/manager/send/common/SubmitButton.vue'
import StatusPart from '~/components/manager/send/common/StatusPart.vue'

export default {
  name: 'DetailContainer',
  components: {
    CustomerPart,
    RequestKindPart,
    TextAreaInfo,
    SubmitButton,
    StatusPart,
  },
  data: () => ({
    row3: {
      title: '依頼詳細',
      value:
        '乗り換えを希望していて、コンパクトカーまたはSUVを考えています。\n最寄りのcars杉並には来店出来るそうです。（土日）',
      placeholder: '',
    },
    row4: {
      title: '対応状況',
      value: '6月2日14時に電話しましたが、出られませんでした。留守電に伝言。',
      placeholder: '',
    },
    row5: {
      selectedValue: 0,
      placeholder: '送客中',
      list: [
        {
          value: 0,
          text: '送客中',
        },
        {
          value: 1,
          text: '対応中',
        },
        {
          value: 2,
          text: '成約済',
        },
        {
          value: 3,
          text: '見送済',
        },
      ],
    },
  }),
}
</script>

<style lang="scss" scoped>
.send-detail-detail-conatiner {
  width: 100%;
  background-color: $white-300;
  border-radius: 6px;
  color: $blue-200;
  &__top {
    padding: 25px 20px;
    border-bottom: 1px solid $gray-600;
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
