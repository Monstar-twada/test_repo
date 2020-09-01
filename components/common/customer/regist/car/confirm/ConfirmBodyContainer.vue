<template>
  <div class="customer-regist-confirm-form-wrapper">
    <WhiteBox>
      <ColumnTitle>
        <template v-slot:title>
          <h3>車両基本情報</h3>
        </template>
      </ColumnTitle>
      <fg-form
        ref="form"
        :model="form"
        label-width="150px"
        class="ml20"
        split-vertical-line
      >
        <fg-form-item label="車検証">
          <div>
            <fg-image-processor
              :options="{ width: 2000, height: 'auto' }"
              icon="license-front"
              url=""
              readonly
            ></fg-image-processor>
          </div>
        </fg-form-item>
        <fg-form-item label="車検証番号">
          <h4>{{ form.carBase.carId | fmtHyphen }}</h4>
        </fg-form-item>
        <fg-form-item label="メーカー">
          <h4>{{ form.carBase.maker }}</h4>
        </fg-form-item>
        <fg-form-item label="車種">
          <h4>{{ form.carBase.class }}</h4>
        </fg-form-item>
        <fg-form-item label="グレード">
          <h4>{{ form.carBase.grade }}</h4>
        </fg-form-item>
        <fg-form-item label="登録ナンバー">
          <h4>
            {{ form.carBase | fmtCarNumber }}
          </h4>
        </fg-form-item>
        <fg-form-item label="初度登録年月">
          <h4>{{ form.carBase.firstRegistrationDate | fmtDate }}</h4>
        </fg-form-item>
        <fg-form-item label="登録年月日">
          <h4>{{ form.carBase.registrationDate | fmtDate }}</h4>
        </fg-form-item>
        <fg-form-item label="車検満了日">
          <h4>{{ form.carBase.inspectionExpirationDate | fmtDate }}</h4>
        </fg-form-item>
        <fg-form-item label="新中区分">
          <h4>{{ form.carBase.newOldType }}</h4>
        </fg-form-item>
        <fg-form-item label="新中区分">
          <h4>{{ form.intentionToPurchase ? 'あり' : 'なし' }}</h4>
        </fg-form-item>
        <fg-form-item label="走行距離">
          <h4>{{ form.carBase.mileage }} km</h4>
        </fg-form-item>
        <fg-form-item label="走行距離確認日">
          <h4>{{ form.carBase.mileageCheckDate | fmtDate }}</h4>
        </fg-form-item>
      </fg-form>
    </WhiteBox>
    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>売買情報</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="150px" class="ml20" split-vertical-line>
        <fg-form-item label="販売価格">
          <h4>
            {{ form.carTrade.retailPrice | fmtMoney }}
            {{ form.carTrade.salesPriceDate }}
          </h4>
        </fg-form-item>
        <fg-form-item label="査定価格">
          <h4>
            {{ form.carTrade.assessmentAmount | fmtMoney }}
            {{ form.carTrade.assessmentDate }}
          </h4>
        </fg-form-item>
        <fg-form-item label="支払区分">
          <h4>
            {{ form.carTrade.paymentType }}
            {{ form.carTrade.creditCompany }}
            {{ form.carTrade.numberOfPayment }}回
          </h4>
        </fg-form-item>
        <fg-form-item label="月々返済">
          <h4>
            {{ form.carTrade.repaymentMonthly }}
            {{ form.bonusDate | fmtDate }}
          </h4>
        </fg-form-item>
        <fg-form-item label="AI査定">
          <h4>
            {{ form.carTrade.aiAssessmentAmount | fmtMoney }}
            {{ form.aiAssessmentDate | fmtDate }}
          </h4>
        </fg-form-item>
        <fg-form-item label="予想価格(マッチング)">
          <h4>
            {{ form.carTrade.estimatedPrice | fmtMoney }}
            {{ form.expectedDatePriceDate | fmtDate }}
          </h4>
        </fg-form-item>
        <fg-form-item label="支払残債">
          <h4>
            {{ form.balancePayment | fmtMoney }}
            {{ form.payableConfimationDate | fmtDate }}
          </h4>
        </fg-form-item>
      </fg-form>
    </WhiteBox>

    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>税金/諸費用</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="150px" class="ml20" split-vertical-line>
        <fg-form-item label="自動車税">
          <h4>{{ form.carExpense.carTax | fmtMoney }}</h4>
        </fg-form-item>
        <fg-form-item label="自賠責保険">
          <h4>{{ form.liabilityInsurance | fmtMoney }}</h4>
        </fg-form-item>
        <fg-form-item label="重量税">
          <h4>{{ form.weightTax | fmtMoney }}</h4>
        </fg-form-item>
        <fg-form-item label="リサイクル">
          <h4>{{ form.recycle | fmtMoney }}</h4>
        </fg-form-item>
      </fg-form>
    </WhiteBox>

    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>ランニングコスト/月</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="150px" class="ml20" split-vertical-line>
        <fg-form-item label="ガソリン代">
          <h4>{{ form.carCost.gasFee | fmtMoney }}</h4>
        </fg-form-item>
        <fg-form-item label="保険料">
          <h4>{{ form.carCost.insuranceFee | fmtMoney }}</h4>
        </fg-form-item>
        <fg-form-item label="駐車場代">
          <h4>{{ form.carCost.parkingFee | fmtMoney }}</h4>
        </fg-form-item>
      </fg-form>
    </WhiteBox>

    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>車両詳細情報</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="150px" class="ml20" split-vertical-line>
        <fg-form-item label="車台番号">
          <h4>{{ form.carDetail.chassisNumber | fmtHyphen }}</h4>
        </fg-form-item>
        <fg-form-item label="通称型式">
          <h4>{{ form.carDetail.fullModel | fmtHyphen }}</h4>
        </fg-form-item>
        <fg-form-item label="エンジン型式">
          <h4>{{ form.carDetail.engineType | fmtHyphen }}</h4>
        </fg-form-item>
        <fg-form-item label="最大出力">
          <h4>{{ form.carDetail.maxOutput | fmtHyphen }}</h4>
        </fg-form-item>
        <fg-form-item label="最大トルク">
          <h4>{{ form.carDetail.maxTorque | fmtHyphen }}</h4>
        </fg-form-item>
        <fg-form-item label="タイヤサイズ">
          <h4>
            {{ 'フロント : -' + ' / リア : -' }}
          </h4>
        </fg-form-item>
        <fg-form-item label="タイヤ製造">
          <h4>
            -
          </h4>
        </fg-form-item>
        <fg-form-item label="バッテリーサイズ">
          <h4>-</h4>
        </fg-form-item>
        <fg-form-item label="燃料タンク">
          <h4>{{ form.carDetail.fuelTank | fmtHyphen }}L</h4>
        </fg-form-item>
        <fg-form-item label="カラーコード">
          <h4>{{ form.carDetail.colorCode | fmtHyphen }}</h4>
        </fg-form-item>
        <fg-form-item label="トリムコード">
          <h4>{{ form.carDetail.trimCode | fmtHyphen }}</h4>
        </fg-form-item>
        <fg-form-item label="モデル">
          <h4>{{ form.carDetail.model | fmtHyphen }}</h4>
        </fg-form-item>
        <fg-form-item label="発売開始">
          <h4>{{ form.carDetail.salesPeriod | fmtDate }}</h4>
        </fg-form-item>
        <fg-form-item label="保証期間">
          <h4>{{ form.carDetail.warrantyPeriod | fmtDate }}</h4>
        </fg-form-item>
        <fg-form-item label="燃費(JC08モード)">
          <h4>{{ form.carDetail.gasMileage | fmtHyphen }}km/L</h4>
        </fg-form-item>
        <fg-form-item label="車両重量">
          <h4>{{ form.carDetail.weight | fmtCarWeight }}</h4>
        </fg-form-item>
        <fg-form-item label="車両寸法">
          <div class="customer-regist-confirm-form-wrapper__car-info">
            <h4>全長</h4>
            <h4>{{ form.carDetail.length | fmtCarSize }}</h4>
          </div>
          <div class="customer-regist-confirm-form-wrapper__car-info">
            <h4>全幅</h4>
            <h4>{{ form.carDetail.width | fmtCarSize }}</h4>
          </div>
          <div class="customer-regist-confirm-form-wrapper__car-info">
            <h4>全高</h4>
            <h4>{{ form.carDetail.height | fmtCarSize }}</h4>
          </div>
        </fg-form-item>
      </fg-form>
    </WhiteBox>
    <div class="footer-button-wrapper">
      <fg-button width="240px" suffix-icon="arrow-right">保存</fg-button>
      <fg-button
        width="240px"
        suffix-icon="arrow-right"
        white-transparent
        @click="goBack"
        >戻る</fg-button
      >
    </div>
  </div>
</template>

<script>
import { storage } from '~/assets/js/storage'
import WhiteBox from '~/components/common/customer/common/WhiteBox'
import ColumnTitle from '~/components/common/customer/common/ColumnTitle'
import {
  fmtHyphen,
  fmtCarNumber,
  fmtAlternative,
  fmtTransactionType,
  fmtMoney,
  sumCost,
  fmtCarSize,
  fmtCarWeight,
  fmtDate,
} from '~/components/common/customer/common/helper'
export default {
  name: 'ConfirmBodyContainer',
  filters: {
    fmtHyphen,
    fmtCarNumber,
    fmtAlternative,
    fmtTransactionType,
    fmtMoney,
    sumCost,
    fmtCarSize,
    fmtCarWeight,
    fmtDate,
  },
  components: {
    WhiteBox,
    ColumnTitle,
  },
  data() {
    return {
      query: {
        ...this.$route.query,
      },
      form: storage.get('registCarEdit'),
    }
  },
  methods: {
    goBack() {
      this.$router.push(`/customer/regist/car/edit?id=${this.query.id}&edit=1`)
    },
  },
}
</script>
<style lang="scss" scoped>
.customer-regist-confirm-form-wrapper {
  &__car-info {
    display: flex;
    margin-bottom: 0px;
    h4 {
      margin-right: 20px;
    }
  }
  .footer-button-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin-top: 10px;
    .fg-button {
      display: flex;
      margin-top: 20px;
    }
  }
}
</style>
