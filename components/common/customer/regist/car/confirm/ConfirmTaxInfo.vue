<template>
  <div class="vehicle-wrapper">
    <h3 class="mb20">税金/諸費用</h3>
    <fg-form
      ref="form"
      :model="form"
      label-width="150px"
      class="ml20"
      split-vertical-line
    >
      <fg-form-item label="自動車税">
        <h4>{{ form.gasoline }}</h4>
      </fg-form-item>
      <fg-form-item label="自賠責保険">
        <h4>{{ form.liabilityInsurance }}</h4>
      </fg-form-item>
      <fg-form-item label="重量税">
        <h4>{{ form.weightTax }}</h4>
      </fg-form-item>
      <fg-form-item label="リサイクル">
        <h4>{{ form.recycle }}</h4>
      </fg-form-item>
    </fg-form>
  </div>
</template>

<script>
export default {
  name: 'ConfirmTaxInfo',
  data() {
    return {
      form: {
        gasoline: '36,000',
        liabilityInsurance: '27,840',
        weightTax: '24,600',
        recycle: '11,350',
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.vehicle-wrapper {
  width: 715px;
  height: auto;
  border-radius: 6px;
  background-color: $white-300;
  padding: 24px 23.5px 10px;
  margin-bottom: 30px;
}
</style>
