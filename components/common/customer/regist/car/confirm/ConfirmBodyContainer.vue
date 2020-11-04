<template>
  <div class="customer-regist-confirm-form-wrapper">
    <WhiteBox>
      <ColumnTitle>
        <template v-slot:title>
          <h3>車両基本情報</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="150px" split-vertical-line item-spacing="0">
        <fg-form-item label="車検証">
          <div>
            <fg-image-processor
              icon="license-front"
              :url="registrationImage"
              readonly
            ></fg-image-processor>
          </div>
        </fg-form-item>
        <fg-form-item label="車検証番号">
          {{ form.registrationNumber | fmtHyphen }}
        </fg-form-item>
        <fg-form-item label="メーカー">
          {{ form.maker | fmtHyphen }}
        </fg-form-item>
        <fg-form-item label="車種">
          {{ form.carType | fmtHyphen }}
        </fg-form-item>
        <fg-form-item label="グレード">
          {{ form.grade | fmtHyphen }}
        </fg-form-item>
        <fg-form-item label="登録ナンバー">
          {{ form | fmtCarNumber }}
        </fg-form-item>
        <fg-form-item label="初度登録年月">
          {{ form.registrationFirstDate | fmtDate }}
        </fg-form-item>
        <fg-form-item label="登録年月日">
          {{ form.registrationStartDate | fmtDate }}
        </fg-form-item>
        <fg-form-item label="車検満了日">
          {{ form.registrationEndDate | fmtDate }}
        </fg-form-item>
        <fg-form-item label="新中区分">
          {{ saleNewOldCarType }}
        </fg-form-item>
        <fg-form-item label="買換意向">
          {{ form.purchaseIntention === '1' ? 'あり' : 'なし' }}
        </fg-form-item>
        <fg-form-item label="走行距離"> {{ form.carMileage }} km </fg-form-item>
        <fg-form-item label="走行距離確認日">
          {{ form.carMileageRegistrationDate | fmtDate }}
        </fg-form-item>
      </fg-form>
    </WhiteBox>

    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>売買情報</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="150px" item-spacing="0" split-vertical-line>
        <fg-form-item label="販売価格">
          {{ form.retailPrice | fmtMoney }}
          {{ form.salesPriceDate }}
        </fg-form-item>
        <fg-form-item label="査定価格">
          {{ form.assessmentAmount | fmtMoney }}
          {{ form.assessmentDate }}
        </fg-form-item>
        <fg-form-item label="支払区分">
          {{ form.paymentType }}
          {{ form.creditCompany }}
          {{ form.numberOfPayment }}回
        </fg-form-item>
        <fg-form-item label="月々返済">
          {{ form.repaymentMonthly }}
          {{ form.bonusDate | fmtDate }}
        </fg-form-item>
        <fg-form-item label="AI査定">
          {{ form.aiAssessmentAmount | fmtMoney }}
          {{ form.aiAssessmentDate | fmtDate }}
        </fg-form-item>
        <fg-form-item>
          <template v-slot:label>
            <h4 style="line-height: 1.2">予想価格<br />(マッチング)</h4>
          </template>
          {{ form.estimatedPrice | fmtMoney }}
          {{ form.expectedDatePriceDate | fmtDate }}
        </fg-form-item>
        <fg-form-item label="支払残債">
          {{ form.balancePayment | fmtMoney }}
          {{ form.payableConfimationDate | fmtDate }}
        </fg-form-item>
      </fg-form>
    </WhiteBox>

    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>税金/諸費用</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="150px" item-spacing="0" split-vertical-line>
        <fg-form-item label="自動車税">
          {{ form.carTax | fmtMoney }}
        </fg-form-item>
        <fg-form-item label="自賠責保険">
          {{ form.libilityInsurance | fmtMoney }}
        </fg-form-item>
        <fg-form-item label="重量税">
          {{ form.weightTax | fmtMoney }}
        </fg-form-item>
        <fg-form-item label="リサイクル">
          {{ form.recycleFee | fmtMoney }}
        </fg-form-item>
      </fg-form>
    </WhiteBox>

    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>ランニングコスト/月</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="150px" item-spacing="0" split-vertical-line>
        <fg-form-item label="ガソリン代">
          {{ form.monthlyGasolineCost | fmtMoney }}
        </fg-form-item>
        <fg-form-item label="保険料">
          {{ form.carInsuranceFee | fmtMoney }}
        </fg-form-item>
        <fg-form-item label="駐車場代">
          {{ form.monthlyParkingFee | fmtMoney }}
        </fg-form-item>
      </fg-form>
    </WhiteBox>

    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>車両詳細情報</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="150px" item-spacing="0" split-vertical-line>
        <fg-form-item label="車台番号">
          {{ form.chassisNumber | fmtHyphen }}
        </fg-form-item>
        <fg-form-item label="型式">
          {{ form.carInspectionType | fmtHyphen }}
        </fg-form-item>
        <fg-form-item label="エンジン型式">
          {{ form.engineType | fmtHyphen }}
        </fg-form-item>
        <fg-form-item label="最大出力">
          {{ form.engineMaximumOutput | fmtHyphen }}
        </fg-form-item>
        <fg-form-item label="最大トルク">
          {{ form.engineTorque | fmtHyphen }}
        </fg-form-item>
        <fg-form-item label="タイヤサイズ">
          {{ tireSize }}
        </fg-form-item>
        <fg-form-item label="タイヤ製造">
          {{ tireCreateDate }}
        </fg-form-item>
        <fg-form-item label="バッテリーサイズ">
          {{ batterySize }}
        </fg-form-item>
        <fg-form-item label="燃料タンク">
          {{ form.fuelTankSize | fmtHyphen }}L
        </fg-form-item>
        <fg-form-item label="カラーコード">
          {{ form.colorCodeType | fmtHyphen }}
        </fg-form-item>
        <fg-form-item label="トリムコード">
          {{ form.colorTrimCode | fmtHyphen }}
        </fg-form-item>
        <fg-form-item label="モデル">
          {{ form.model | fmtHyphen }}
        </fg-form-item>
        <fg-form-item label="発売開始">
          {{ form.salesPeriodStart | fmtDate }}
        </fg-form-item>
        <fg-form-item label="保証期間">
          {{ form.warrantyPeriodEnd | fmtDate }}
        </fg-form-item>
        <fg-form-item label="燃費(JC08モード)">
          {{ form.fuelEconomy | fmtHyphen }}km/L
        </fg-form-item>
        <fg-form-item label="車両重量">
          {{ form.carWeight | fmtCarWeight }}
        </fg-form-item>
        <fg-form-item label="車両寸法">
          <div class="line-height">
            <span class="mr30">全長</span>
            {{ form.carFullLength | fmtCarSizeMm }}
          </div>
          <div class="line-height">
            <span class="mr30">全幅</span>
            {{ form.carFullWidth | fmtCarSizeMm }}
          </div>
          <div class="line-height">
            <span class="mr30">全高</span>
            {{ form.carTotalHeight | fmtCarSizeMm }}
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
import WhiteBox from '~/components/common/customer/common/WhiteBox';
import ColumnTitle from '~/components/common/customer/common/ColumnTitle';
import { customerMixin } from '~/mixins/customer';

export default {
  name: 'ConfirmBodyContainer',
  components: {
    WhiteBox,
    ColumnTitle,
  },
  mixins: [customerMixin],
  data() {
    return {
      query: {
        ...this.$route.query,
      },
      form: this.$ui.getCache('carEditCacheData'),
      registrationImage: '',
    };
  },
  computed: {
    saleNewOldCarType() {
      const classes = this.$ui.getBasicData('sale_new_old_car_type', true);
      return classes[this.form.saleNewOldCarType];
    },
    tireSize() {
      const arr = [];
      const { tireSizeFront, tireSizeRear } = this.form;
      if (tireSizeFront) {
        arr.push(`フロント : ${tireSizeFront}`);
      }
      if (tireSizeRear) {
        arr.push(`リア : ${tireSizeRear}`);
      }
      return arr.join(' / ');
    },
    tireCreateDate() {
      const { tireCreateYear, tireCreateWeek } = this.form;
      return `${tireCreateYear || '-'}年${tireCreateWeek || '-'}週目`;
    },
    batterySize() {
      const { batterySize, batteryCreateDate } = this.form;
      return `${batterySize} 製造：${batteryCreateDate}`;
    },
  },
  created() {
    // 車検証画像取得
    const { customerCode, carCode } = this.query;
    this.$api
      .get(`/v1/customers/${customerCode}/cars/${carCode}/registrationImage`)
      .then((res) => {
        this.registrationImage = res.url;
      })
      .catch(console.error);
  },
  methods: {
    goBack() {
      const { carCode, customerCode } = this.query;
      this.$router.push(
        `/customer/regist/car/edit/?customerCode=${customerCode}&carCode=${carCode}&edit=1`
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.customer-regist-confirm-form-wrapper {
  margin: 0 auto;
  padding: 20px 0;
  width: 712px;
  .fg-form {
    margin-left: 40px;
  }
  .line-height {
    line-height: 30px;
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
