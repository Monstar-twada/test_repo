<template>
  <div class="formContainer">
    <div class="formContainer__top">
      <h3>送客依頼フォーム</h3>
    </div>
    <div class="formContainer__bottom">
      <CustomerPart />
      <RequestKindPart />
      <TextAreaInfo
        :title="row3.title"
        :value="row3.value"
        :placeholder="row3.placeholder"
        :customborderbottom="'none'"
      />
      <SubmitButton :title="'依頼する'" />
    </div>
  </div>
</template>

<script>
import CustomerPart from '~/components/send/common/CustomerPart.vue'
import RequestKindPart from '~/components/send/common/RequestKindPart.vue'
import TextAreaInfo from '~/components/send/common/TextAreaInfo.vue'
import SubmitButton from '~/components/send/common/SubmitButton.vue'

export default {
  name: 'FormContainer',
  components: {
    CustomerPart,
    RequestKindPart,
    TextAreaInfo,
    SubmitButton,
  },
  data: () => ({
    row3: {
      title: '依頼詳細',
      value: '',
      placeholder:
        '・日時場所などの取り決めがある場合は記載してください\n・対応車両のメーカー・車種・ナンバー等の特徴はお書きください\n・対応してほしい作業内容',
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
    h3 {
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
