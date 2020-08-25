<template>
  <div class="bodyContainer">
    <BasicInfo />
    <VehicleInfo />
    <TaxInfo />
    <RunningCost />
    <VehicleDetail />
    <fg-button
      type="primary"
      suffix-icon="arrow-right"
      border
      bold
      disabled
      width="240px"
      >更新</fg-button
    >
    <fg-button
      class="bodyContainer__buttons mt20"
      type="primary"
      line
      round
      bold
      width="240px"
      >戻る</fg-button
    >
    <fg-button
      class="bodyContainer__buttons mt20"
      type="primary"
      line
      round
      bold
      width="240px"
      >削除</fg-button
    >
  </div>
</template>

<script>
import BasicInfo from './BasicInfo'
import VehicleInfo from './VehicleInfo'
import TaxInfo from './TaxInfo'
import RunningCost from './RunningCost'
import VehicleDetail from './VehicleDetail'
export default {
  name: 'BodyContainer',
  components: {
    BasicInfo,
    VehicleInfo,
    TaxInfo,
    RunningCost,
    VehicleDetail,
  },
}
</script>
<style lang="scss" scoped>
.bodyContainer {
  width: 100%;
  color: $blue-200;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__buttons {
    border: 1px solid white;
  }
}
</style>
