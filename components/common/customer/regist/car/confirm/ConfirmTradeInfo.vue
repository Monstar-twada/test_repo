<template>
  <div class="edit-vehicle-wrapper">
    <h3 class="mb20">売買情報</h3>
    <fg-form
      ref="form"
      :model="form"
      label-width="150px"
      class="ml20"
      split-vertical-line
    >
      <fg-form-item label="販売価格">
        <h4>{{ form.selling + '  ' }} {{ '(' + form.salesPriceDate + ')' }}</h4>
      </fg-form-item>
      <fg-form-item label="査定価格">
        <h4>
          {{ form.assessmentPrice + '  ' }}
          {{ '(' + form.assessmentDate + ')' }}
        </h4>
      </fg-form-item>
      <fg-form-item label="支払区分">
        <h4>
          {{ form.loanType }}{{ '  ' }}{{ form.creditCompany }}{{ '  '
          }}{{ form.numberOfPayment + '回' }}
        </h4>
      </fg-form-item>
      <fg-form-item label="月々返済">
        <h4>
          {{ form.monthlyPayment + '  ' }} {{ '(' + form.bonusDate + ')' }}
        </h4>
      </fg-form-item>
      <fg-form-item label="AI査定">
        <h4>
          {{ form.aiAssessment + '  ' }} {{ '(' + form.aiAssessmentDate + ')' }}
        </h4>
      </fg-form-item>
      <fg-form-item label="予想価格(マッチング)">
        <h4>
          {{ form.expectedDatePrice + '  ' }}
          {{ '(' + form.expectedDatePriceDate + ')' }}
        </h4>
      </fg-form-item>
      <fg-form-item label="支払残債">
        <h4>
          {{ form.balancePayment + '  ' }}
          {{ '(' + form.payableConfimationDate + ')' }}
        </h4>
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
        selling: '¥2,340,000',
        salesPriceDate: '2019/1/1時点',
        assessmentPrice: '¥910,000',
        assessmentDate: '2019/12/12時点',
        loanType: 'ローン',
        creditCompany: 'オリコ',
        numberOfPayment: '72',
        monthlyPayment: '¥30,000',
        bonusDate: 'ボーナス時 ¥100,000',
        aiAssessment: '¥1,594,000',
        aiAssessmentDate: '2019/1/1時点',
        expectedDatePrice: '1,900,000',
        expectedDatePriceDate: '2019/12/12時点',
        balancePayment: '510,000',
        payableConfimationDate: '2019/12/12時点',
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
  .fg-form-item {
    margin-bottom: 0px;
  }
  h4 {
    font-weight: 400;
  }
}
</style>
