<template>
  <div class="bodyContainer">
    <!-- <EditBasicInfo /> -->
    <EditVehicleInfo />
    <!-- <EditTradeInfo /> -->
    <!-- <EditTaxInfo /> -->
    <!-- <EditRunningCost />
    <EditVehicleDetail /> -->
  </div>
</template>

<script>
// import EditBasicInfo from './EditBasicInfo'
import EditVehicleInfo from './EditVehicleInfo'
// import EditTradeInfo from './EditTradeInfo'
// import EditTaxInfo from './EditTaxInfo'
// import EditRunningCost from './EditRunningCost'
// import EditVehicleDetail from './EditVehicleDetail'
export default {
  name: 'EditBodyContainer',
  components: {
    // EditBasicInfo,
    EditVehicleInfo,
    // EditTradeInfo,
    // EditTaxInfo,
    // EditRunningCost,
    // EditVehicleDetail,
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
}
</style>
