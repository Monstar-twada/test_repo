<template>
  <div class="bodyContainer">
    <!-- <EditBasicInfo /> -->
    <EditVehicleInfo />
    <EditTradeInfo />
    <EditTaxInfo />
    <EditRunningCost />
    <EditVehicleDetail />
    <fg-button
      type="primary"
      suffix-icon="arrow-right"
      border
      bold
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
    <!-- <fg-button
      class="bodyContainer__buttons mt20"
      type="primary"
      line
      round
      bold
      width="240px"
      >削除</fg-button
    > -->
  </div>
</template>

<script>
// import EditBasicInfo from './EditBasicInfo'
import EditVehicleInfo from './EditVehicleInfo'
import EditTradeInfo from './EditTradeInfo'
import EditTaxInfo from './EditTaxInfo'
import EditRunningCost from './EditRunningCost'
import EditVehicleDetail from './EditVehicleDetail'
export default {
  name: 'EditBodyContainer',
  components: {
    // EditBasicInfo,
    EditVehicleInfo,
    EditTradeInfo,
    EditTaxInfo,
    EditRunningCost,
    EditVehicleDetail,
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
