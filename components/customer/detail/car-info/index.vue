<template>
  <div class="customer-detail-car-info-wrapper pb20">
    <ColumnTitle title="車両情報" border>
      <v-img
        class="change-car-icon mr10"
        width="90"
        :src="require('~/static/customer/car-more.svg')"
        @click="selectCarVisible = true"
      />
      <PlusButton border />
    </ColumnTitle>

    <v-row no-gutters>
      <v-col cols="8" class="p20">
        <div class="mt10 ml20">
          <SubTitle sub-title="プリウス" />
        </div>
        <v-row no-gutters class="customer-car__owner p20">
          <v-col cols="3" class="">
            <h4>所有者</h4>
            <v-avatar size="24" class="ml10">
              <v-img :src="require('~/static/customer/profile-edit.svg')" />
            </v-avatar>
          </v-col>
          <v-col cols="3" class="px-0">
            <h4>意思決定者</h4>
            <v-avatar size="24" class="ml10">
              <v-img :src="require('~/static/customer/profile-edit.svg')" />
            </v-avatar>
          </v-col>
          <v-col cols="3" class="px-0">
            <h4>利用者</h4>
            <v-avatar size="24" class="ml10">
              <v-img :src="require('~/static/customer/profile-edit.svg')" />
            </v-avatar>
            <v-avatar size="24">
              <v-img :src="require('~/static/customer/profile-edit.svg')" />
            </v-avatar>
          </v-col>
        </v-row>

        <v-row no-gutters class="customer-car__owner pl20 pr20">
          <v-col cols="2" class="px-0">
            <h4>主な利用目的</h4>
          </v-col>
          <v-col cols="10" class="px-0">
            <v-chip text-color="#436AA3" color="#DFE6F0" outlined label small
              >車出勤</v-chip
            >
            <v-chip text-color="#436AA3" color="#DFE6F0" outlined label small
              >買い物</v-chip
            >
            <v-chip text-color="#436AA3" color="#DFE6F0" outlined label small
              >部活送迎</v-chip
            >
            <v-chip text-color="#436AA3" color="#DFE6F0" outlined label small
              >習い事送迎</v-chip
            >
          </v-col>
        </v-row>

        <v-row no-gutters class="customer-car__owner p20">
          <v-col cols="2" class="px-0">
            <h4>取引種別</h4>
          </v-col>
          <v-col cols="10" class="px-0">
            <v-chip
              small
              text-color="white"
              :color="carSummary.tradeSales | fmtTransactionType"
              >車販</v-chip
            >
            <v-chip
              small
              text-color="white"
              :color="carSummary.tradeMaintenance | fmtTransactionType"
              >整備</v-chip
            >
            <v-chip
              small
              text-color="white"
              :color="carSummary.tradeInspection | fmtTransactionType"
              >車検</v-chip
            >
            <v-chip
              small
              text-color="white"
              :color="carSummary.tradeSheetMetal | fmtTransactionType"
              >鈑金</v-chip
            >
            <v-chip
              small
              text-color="white"
              :color="carSummary.tradeInsurance | fmtTransactionType"
              >保険</v-chip
            >
          </v-col>
        </v-row>

        <div class="mt20 ml20">
          <SubTitle sub-title="車両基本情報" />
        </div>

        <v-row no-gutters>
          <v-col cols="6">
            <div class="right-border pt10 pl20 pr20">
              <TextContent
                label="メーカー"
                :content="carBase.maker | fmtHyphen"
              />
              <TextContent label="車種" :content="carBase.class | fmtHyphen" />
              <TextContent
                label="登録ナンバー"
                :content="carBase | fmtCarNumber"
              />
              <TextContent
                label="登録年月日"
                :content="carBase.registrationDate | fmtHyphen"
              />
              <TextContent
                label="新中区分"
                :content="carBase.newOldType | fmtHyphen"
              />
              <TextContent
                label="保険情報有無"
                :content="carBase.insuranceNumber"
                copyable
                high-light
              >
                <v-chip
                  v-if="carBase.insuranceType"
                  x-small
                  text-color="white"
                  color="#1E5199"
                  class="ml5"
                  >{{ carBase.insuranceType }}</v-chip
                >
              </TextContent>
              <TextContent label="その他" sub-label="システムID">
                <div v-if="carBase.otherSystemId">
                  車両管理番号: {{ carBase.otherSystemId }}
                </div>
                <div v-if="carBase.otherSystemIdRelation">
                  得意先コード: {{ carBase.otherSystemIdRelation }}
                </div>
              </TextContent>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="pt10 pl20 pr20">
              <TextContent
                label="グレード"
                :content="carBase.grade | fmtHyphen"
              />
              <TextContent
                label="初度登録年月"
                :content="carBase.firstRegistrationDate | fmtHyphen"
              />
              <TextContent
                label="車検満了日"
                :content="carBase.inspectionExpirationDate | fmtHyphen"
                flex
              >
                <RoundBorderButton
                  icon="calendar"
                  class="ml5"
                  text="予約・入庫状況"
                  @click="reservationVisible = true"
                />
              </TextContent>
              <TextContent
                label="車検証有無"
                :content="carBase.inspectionCertificate | fmtHyphen"
                :copyable="!!carBase.inspectionCertificate"
                high-light
              />
              <TextContent
                label="代替対象"
                :content="carBase.alternativeTarget | fmtAlternative"
                custom-font-weight="normal"
              />
              <TextContent
                label="代替反応"
                :content="carBase.alternativeReaction"
                custom-font-weight="normal"
              />
            </div>
          </v-col>
        </v-row>

        <div class="mt20 ml20">
          <SubTitle sub-title="売買情報" />
        </div>

        <v-row no-gutters>
          <v-col cols="6">
            <div class="right-border pt10 pl20 pr20">
              <TextContent
                label="小売価格"
                :content="carTrade.retailPrice | fmtHyphen"
              />
              <TextContent
                label="本査定額"
                :content="carTrade.assessmentAmount | fmtHyphen"
              />
              <TextContent
                label="支払区分"
                :content="carTrade.paymentType | fmtHyphen"
              />
              <TextContent
                label="月々返済"
                :content="carTrade.repaymentMonthly | fmtHyphen"
              />
            </div>
          </v-col>
          <v-col cols="6">
            <div class="pt10 pl20 pr20">
              <TextContent
                label="AI査定額"
                :content="carTrade.aiAssessmentAmount | fmtHyphen"
              />
              <TextContent
                label="予想価格"
                sub-label="(マッチング)"
                is-small-sub-label
                :content="carTrade.estimatedPrice | fmtHyphen"
              />
              <TextContent
                label="支払残債"
                :content="carTrade.remainingAmount | fmtHyphen"
              />
            </div>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="6">
            <div class="mt20 ml20">
              <SubTitle sub-title="税金/諸費用" />
            </div>
            <div class="pt10 pl20 pr20">
              <TextContent
                label="自動車税"
                :content="carExpense.carTax | fmtMoney"
              />
              <TextContent
                label="自賠責保険"
                :content="carExpense.carInsurance | fmtMoney"
              />
              <TextContent
                label="重量税"
                :content="carExpense.weightTax | fmtMoney"
              />
              <TextContent
                label="リサイクル"
                :content="carExpense.recycleFee | fmtMoney"
              />
            </div>
          </v-col>
          <v-col cols="6">
            <div class="mt20 ml20">
              <SubTitle sub-title="ランニングコスト/月" />
            </div>
            <div class="pt10 pl20 pr20">
              <TextContent
                label="ガソリン代"
                :content="carCost.gasFee | fmtMoney"
              />
              <TextContent
                label="保険料"
                :content="carCost.insuranceFee | fmtMoney"
              />
              <TextContent
                label="駐車場代"
                :content="carCost.parkingFee | fmtMoney"
              />
              <div class="double-line mt10 mb5"></div>
              <TextContent label="月間コスト" :content="carCost | sumCost" />
            </div>
          </v-col>
        </v-row>

        <div class="mt20 ml20">
          <SubTitle sub-title="車両詳細情報">
            <button class="car-info-arrow-down-button">
              <img src="../../img/arr-down.svg" alt="" />
            </button>
          </SubTitle>
        </div>

        <v-row no-gutters>
          <v-col cols="6">
            <div class="right-border pt10 pl20 pr20 pb20">
              <TextContent
                label="車台番号"
                :content="carDetail.chassisNumber | fmtHyphen"
              />
              <TextContent
                label="通称型式"
                :content="carDetail.fullModel | fmtHyphen"
              />
              <TextContent
                label="エンジン型式"
                :content="carDetail.engineType | fmtHyphen"
              />
              <TextContent
                label="最大出力"
                :content="carDetail.maxOutput | fmtHyphen"
              />
              <TextContent
                label="最大トルク"
                :content="carDetail.maxTorque | fmtHyphen"
              />
              <TextContent
                label="タイヤサイズ"
                :content="carDetail.tireSize | fmtHyphen"
              />
              <TextContent
                label="バッテリーサイズ"
                :content="carDetail.batterySize | fmtHyphen"
              />
              <TextContent
                label="燃料タンク"
                :content="carDetail.fuelTank | fmtHyphen"
              />
            </div>
          </v-col>
          <v-col cols="6">
            <div class="pt10 pl20 pr20">
              <TextContent
                label="カラーコード"
                :content="carDetail.colorCode | fmtHyphen"
              />
              <TextContent
                label="トリムコード"
                :content="carDetail.trimCode | fmtHyphen"
              />
              <TextContent
                label="モデル"
                :content="carDetail.model | fmtHyphen"
              />
              <TextContent
                label="販売期間"
                :content="carDetail.salesPeriod | fmtHyphen"
              />
              <TextContent
                label="保証期間"
                :content="carDetail.warrantyPeriod | fmtHyphen"
              />
              <TextContent
                label="燃費"
                sub-label="(JC08モード)"
                is-small-sub-label
                :content="carDetail.gasMileage | fmtHyphen"
              />
              <TextContent
                label="車両重量"
                :content="carDetail.weight | fmtCarWeight"
              />
              <TextContent label="車両寸法"
                >全長 {{ carDetail.length | fmtCarSize }}<br />全幅
                {{ carDetail.width | fmtCarSize }}<br />全高
                {{ carDetail.height | fmtCarSize }}</TextContent
              >
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="customer-car__matching">
        <div class="top-edit-button-wrapper">
          <RoundBorderButton />
        </div>
        <CarInfoSide :car-summary="carSummary" />
      </v-col>
      <SelectCarDialog
        v-model="selectCarVisible"
        :data="carListData"
        :current-car="currentCarItem"
        @change="changeCar"
      />
      <EditReservationDialog v-model="reservationVisible" />
    </v-row>
  </div>
</template>
<script>
import SelectCarDialog from './select-car-dialog/index'
import CarInfoSide from './CarInfoSide'
import SubTitle from '~/components/customer/SubTitle.vue'
import TextContent from '~/components/customer/TextContent.vue'
import ColumnTitle from '~/components/customer/ColumnTitle'
import PlusButton from '~/components/breadcrumbs/PlusButton'
import RoundBorderButton from '~/components/customer/detail/button/RoundBorderButton'
import EditReservationDialog from '~/components/customer/detail/car-info/edit-reservation-dialog'
import {
  fmtHyphen,
  fmtCarNumber,
  fmtAlternative,
  fmtTransactionType,
  fmtMoney,
  sumCost,
  fmtCarSize,
  fmtCarWeight,
} from '~/components/customer/helper'

export default {
  filters: {
    fmtHyphen,
    fmtCarNumber,
    fmtAlternative,
    fmtTransactionType,
    fmtMoney,
    sumCost,
    fmtCarSize,
    fmtCarWeight,
  },
  components: {
    SubTitle,
    TextContent,
    SelectCarDialog,
    ColumnTitle,
    PlusButton,
    RoundBorderButton,
    EditReservationDialog,
    CarInfoSide,
  },
  props: {
    customerId: {
      type: [String, Number],
      default: 0,
    },
  },
  data: () => ({
    selectCarVisible: false,
    reservationVisible: false,
    carListData: {},
    currentCarItem: {},
    carBase: {},
    carSummary: {},
    carTrade: {},
    carExpense: {},
    carCost: {},
    carDetail: {},
  }),
  created() {
    this.getCarList()
  },
  methods: {
    async getCarList() {
      const params = {
        limit: 500,
        offset: 0,
      }
      try {
        const res = await this.$api.get(
          `/v1/customer/${this.customerId}/car`,
          params
        )
        // console.log('getCarList', res)
        this.carListData = res || {}
        const carList = this.carListData.results || []
        this.currentCarItem = carList[0] || {}
        await this.getCarInfo()
      } catch (e) {
        console.error(e)
      }
    },
    async getCarInfo() {
      try {
        const res = await this.$api.get(
          `/v1/customer/${this.customerId}/car/${this.currentCarItem.carId}`
        )
        // console.log('getCarInfo', res)
        this.carBase = res.customer.base || {}
        this.carSummary = res.customer.summary || {}
        this.carTrade = res.customer.trade || {}
        this.carExpense = res.customer.expense || {}
        this.carCost = res.customer.cost || {}
        this.carDetail = res.customer.detail || {}
      } catch (e) {
        console.error(e)
      }
    },
    changeCar(item) {
      this.currentCarItem = {
        ...item,
      }
      this.getCarInfo()
    },
  },
}
</script>

<style lang="scss">
.customer-detail-car-info-wrapper {
  .change-car-icon {
    cursor: pointer;
  }
  .customer-car {
    &__owner {
      h4 {
        display: inline-block;
        color: $blue-200;
      }
    }
    &__matching {
      .top-edit-button-wrapper {
        margin-right: 20px;
        height: 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      h3 {
        margin: 30px 0 10px;
        color: $blue-200;
      }
      h4 {
        color: $blue-200;
        margin: 10px 0;
        font-weight: normal;
      }
      .v-card {
        padding: 10px;
        background: $white-100;
        border: none !important;
        font-weight: normal;
        dl {
          position: relative;
          padding-bottom: 1px;
          padding-top: 1px;
          &:after {
            position: absolute;
            top: 0;
            bottom: 0;
            content: '';
            width: 1px;
            background: #dfe6f0;
            left: 80px;
          }
          dd {
            padding-left: 15px;
          }
        }
      }
    }
  }
  .profile {
    color: $blue-200;
  }
  .line {
    width: 100%;
    height: 1px;
    background: $gray-100;
  }
  .double-line {
    width: 100%;
    height: 3px;
    border-top: 1px solid $gray-100;
    border-bottom: 1px solid $gray-100;
  }
  .car-info-arrow-down-button {
    height: 40px;
    padding: 0 5px;
    outline: none;
  }
}
</style>
