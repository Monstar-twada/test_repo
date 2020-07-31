<template>
  <div class="formContainer">
    <div class="formContainer__top">
      <h3>送客依頼詳細</h3>
      <div class="formContainer__top__right">
        <div class="formContainer__top__right--date">
          <p>依頼日時：</p>
          <p>R02/06/01 16:30</p>
        </div>
        <div class="formContainer__top__right--date">
          <p>完了日時：</p>
          <p>R02/07/01 16:30</p>
        </div>
      </div>
    </div>
    <div class="formContainer__bottom">
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
      <StatusPart :list="row5.list" :placeholder="row5.placeholder" />
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
      placeholder: '送客中',
      list: ['送客中', '対応中', '成約済', '見送済'],
    },
  }),
}
</script>

<style lang="scss" scoped>
.formContainer {
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
