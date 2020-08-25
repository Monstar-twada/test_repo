<template>
  <div class="edit-vehicle-wrapper">
    <h3 class="mb20">税金/諸費用</h3>
    <fg-form ref="form" :model="form" label-width="150px" class="ml20">
      <fg-form-item label="自動車税">
        <fg-input v-model="form.gasoline" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="自賠責保険">
        <fg-input v-model="form.liabilityInsurance" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="重量税">
        <fg-input v-model="form.weightTax" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="リサイクル">
        <fg-input v-model="form.recycle" width="440px"></fg-input>
      </fg-form-item>
    </fg-form>
  </div>
</template>

<script>
export default {
  name: 'EditTaxInfo',
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
.edit-vehicle-wrapper {
  width: 715px;
  height: auto;
  border-radius: 6px;
  background-color: $white-300;
  padding: 24px 23.5px 10px;
  margin-bottom: 30px;
}
</style>
