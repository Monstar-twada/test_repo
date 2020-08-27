<template>
  <div class="runningcost-wrapper">
    <h3 class="mb20">ランニングコスト/月</h3>
    <fg-form
      ref="form"
      :model="form"
      label-width="150px"
      class="ml20"
      split-vertical-line
    >
      <fg-form-item label="ガソリン代">
        <h4>{{ '￥' + form.gasoline }}</h4>
      </fg-form-item>
      <fg-form-item label="保険料">
        <h4>{{ '￥' + form.insuranceFee }}</h4>
      </fg-form-item>
      <fg-form-item label="駐車場代">
        <h4>{{ '￥' + form.parkingFee }}</h4>
      </fg-form-item>
    </fg-form>
  </div>
</template>

<script>
export default {
  name: 'ConfirmRunningCost',
  data() {
    return {
      form: {
        gasoline: '10,000',
        insuranceFee: '8,540',
        parkingFee: '12,000',
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
  .fg-form-item {
    margin-bottom: 0px;
  }
  h4 {
    font-weight: 400;
  }
}
</style>
