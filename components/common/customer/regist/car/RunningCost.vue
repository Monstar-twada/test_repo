<template>
  <div class="runningcost-wrapper">
    <h3 class="mb20">ランニングコスト/月</h3>
    <fg-form ref="form" :model="form" label-width="150px" class="ml20">
      <fg-form-item label="ガソリン代">
        <fg-input v-model="form.gasoline" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="保険料">
        <fg-input v-model="form.insuranceFee" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="駐車場代">
        <fg-input v-model="form.parkingFee" width="440px"></fg-input>
      </fg-form-item>
    </fg-form>
  </div>
</template>

<script>
export default {
  name: 'RunningCost',
  data() {
    return {
      form: {
        gasoline: ' ',
        insuranceFee: ' ',
        parkingFee: ' ',
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.runningcost-wrapper {
  width: 715px;
  height: auto;
  border-radius: 6px;
  background-color: $white-300;
  padding: 24px 23.5px 10px;
  margin-bottom: 30px;
}
</style>
