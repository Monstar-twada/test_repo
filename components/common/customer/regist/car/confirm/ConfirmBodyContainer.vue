<template>
  <div class="bodyContainer">
    <ConfirmBasicInfo />
    <ConfirmVehicleInfo />
    <ConfirmTaxInfo />
    <ConfirmRunningCost />
    <ConfirmVehicleDetail />
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
import ConfirmBasicInfo from './ConfirmBasicInfo'
import ConfirmVehicleInfo from './ConfirmVehicleInfo'
import ConfirmTaxInfo from './ConfirmTaxInfo'
import ConfirmRunningCost from './ConfirmRunningCost'
import ConfirmVehicleDetail from './ConfirmVehicleDetail'
export default {
  name: 'ConfirmBodyContainer',
  components: {
    ConfirmBasicInfo,
    ConfirmVehicleInfo,
    ConfirmTaxInfo,
    ConfirmRunningCost,
    ConfirmVehicleDetail,
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
