<template>
  <div class="bodyContainer__RunningCost runningCostContainer">
    <h3>ランニングコスト/月</h3>
    <div>
      <ConfirmRowContainer
        :title="'ガソリン代'"
        :kind="'base'"
        :value="'¥10,000'"
      />
      <ConfirmRowContainer :title="'保険料'" :kind="'base'" :value="'¥8,540'" />
      <ConfirmRowContainer
        :title="'駐車場代'"
        :kind="'base'"
        :value="'¥12,000'"
      />
    </div>
  </div>
</template>

<script>
import ConfirmRowContainer from '~/components/customer/regist/car/confirm/ConfirmRowContainer'

export default {
  name: 'TexInfoContainer',
  components: {
    ConfirmRowContainer,
  },
}
</script>
<style lang="scss" scoped>
.runningCostContainer {
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
