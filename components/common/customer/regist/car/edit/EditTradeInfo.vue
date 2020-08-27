<template>
  <div class="edit-vehicle-wrapper">
    <h3 class="mb20">売買情報</h3>
    <fg-form ref="form" :model="form" label-width="150px" class="ml20">
      <fg-form-item label="販売価格">
        <fg-input v-model="form.selling" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="販売価格確認日">
        <fg-calendar
          v-model="form.salesPriceDate"
          width="160px"
          writable
          clearable
        />
      </fg-form-item>
      <fg-form-item label="査定価格">
        <fg-input v-model="form.assessmentPrice" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="査定価格確認日">
        <fg-calendar
          v-model="form.assessmentDate"
          width="160px"
          writable
          clearable
        />
      </fg-form-item>
      <fg-form-item label="支払区分">
        <div class="edit-vehicle-wrapper__car-box">
          <fg-input
            v-model="form.loanType"
            width="110px"
            placeholder="ローン種別"
          ></fg-input>
          <fg-input
            v-model="form.creditCompany"
            width="110px"
            placeholder="信販会社名"
          ></fg-input>
          <fg-input
            v-model="form.numberOfPayment"
            width="110px"
            placeholder="支払回数"
            suffix-text-outside="回"
          ></fg-input>
        </div>
      </fg-form-item>
      <fg-form-item label="月々返済">
        <fg-input v-model="form.monthlyPayment" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="ボーナス時">
        <fg-input v-model="form.bonusDate" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="AI査定">
        <fg-input v-model="form.aiAssessment" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="AI査定確認日">
        <fg-calendar
          v-model="form.aiAssessmentDate"
          width="160px"
          writable
          clearable
        />
      </fg-form-item>
      <fg-form-item label="予想価格(マッチング)">
        <fg-input v-model="form.expectedDatePrice" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="予想価格確認日">
        <fg-calendar
          v-model="form.expectedDatePriceDate"
          width="160px"
          writable
          clearable
        />
      </fg-form-item>
      <fg-form-item label="支払残債">
        <fg-input v-model="form.balancePayment" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="支払残債確認日">
        <fg-calendar
          v-model="form.payableConfimationDate"
          width="160px"
          writable
          clearable
        />
      </fg-form-item>
    </fg-form>
  </div>
</template>

<script>
export default {
  name: 'EditTradeInfo',

  data() {
    return {
      form: {
        selling: ' ',
        salesPriceDate: ' ',
        assessmentPrice: ' ',
        assessmentDate: ' ',
        loanType: '',
        creditCompany: '',
        numberOfPayment: '',
        monthlyPayment: ' ',
        bonusDate: ' ',
        aiAssessment: ' ',
        aiAssessmentDate: ' ',
        expectedDatePrice: ' ',
        expectedDatePriceDate: ' ',
        balancePayment: ' ',
        payableConfimationDate: ' ',
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
  &__item {
    display: flex;
    align-items: flex-end;
  }
  &__car-box {
    display: flex;
    .fg-input {
      margin-right: 10px;
    }
  }
}
</style>
