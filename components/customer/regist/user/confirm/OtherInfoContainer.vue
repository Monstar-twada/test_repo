<template>
  <div class="bodyContainer__otherInfo otherInfoContainer">
    <h3>その他の情報</h3>
    <div class="otherInfoContainer__content">
      <ConfirmRowContainer
        :title="'ペット'"
        :kind="'base'"
        :value="'猫 タマ2才'"
      />
      <ConfirmRowContainer :title="'実家'" :kind="'base'" :value="'鹿児島'" />
      <ConfirmRowContainer
        :title="'ドリンク'"
        :kind="'base'"
        :value="'コーヒー(ブラック)'"
      />
      <ConfirmRowContainer :title="'趣味'" :kind="'base'" :value="'ドライブ'" />
    </div>
  </div>
</template>

<script>
import ConfirmRowContainer from '~/components/customer/regist/common/ConfirmRowContainer'

export default {
  name: 'OtherInfoContainer',
  components: {
    ConfirmRowContainer,
  },
}
</script>
<style lang="scss" scoped>
.otherInfoContainer {
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
}
</style>
