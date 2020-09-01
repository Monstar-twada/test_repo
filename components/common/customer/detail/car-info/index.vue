<template>
  <div>
    <div class="customer-info mt30 customer-detail-car-info-wrapper pb20">
      <ColumnTitle title="車両情報" border>
        <fg-button
          prefix-icon="change"
          size="mini"
          border
          width="90px"
          justify="center"
          @click="selectCarVisible = true"
          >車両切替</fg-button
        >
      </ColumnTitle>

      <v-row no-gutters>
        <v-col cols="8" class="p20">
          <div class="mt10 ml20">
            <SubTitle :sub-title="carSummary.name | fmtHyphen" />
          </div>

          <v-row no-gutters class="customer-car__owner p20">
            <v-col cols="3" class="">
              <h4>所有者</h4>
              <v-avatar v-if="carSummary.owner" size="24" class="ml10">
                <v-img :src="require('./img/profile-edit.svg')" />
              </v-avatar>
              <template v-else>-</template>
            </v-col>
            <v-col cols="3" class="px-0">
              <h4>意思決定者</h4>
              <v-avatar v-if="carSummary.payer" size="24" class="ml10">
                <v-img :src="require('./img/profile-edit.svg')" />
              </v-avatar>
              <template v-else>-</template>
            </v-col>
            <v-col cols="3" class="px-0">
              <h4>利用者</h4>
              <v-avatar v-if="carSummary.user" size="24" class="ml10">
                <v-img :src="require('./img/profile-edit.svg')" />
              </v-avatar>
              <template v-else>-</template>
            </v-col>
          </v-row>

          <v-row no-gutters class="customer-car__owner pl20 pr20">
            <v-col cols="2" class="px-0">
              <h4>カーライフ</h4>
            </v-col>
            <v-col cols="10" class="px-0 selection-points-wrapper">
              <fg-tag
                v-for="(item, i) in carLives"
                :key="i"
                size="small"
                :selected="item.active"
                >{{ item.text }}</fg-tag
              >
            </v-col>
          </v-row>

          <v-row no-gutters class="customer-car__owner p20">
            <v-col cols="2" class="px-0">
              <h4>取引種別</h4>
            </v-col>
            <v-col cols="10" class="px-0">
              <fg-tag
                v-for="(item, i) in transactionTypes"
                :key="i"
                round
                size="small"
                no-border
                color="#fff"
                :bold="false"
                :bg-color="carSummary[item.key] | fmtTransactionType"
                >{{ item.text }}</fg-tag
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
                <TextContent
                  label="車種"
                  :content="carBase.class | fmtHyphen"
                />
                <TextContent
                  label="登録ナンバー"
                  :content="carBase | fmtCarNumber"
                />
                <TextContent
                  label="登録年月日"
                  :content="carBase.registrationDate | fmtDate"
                />
                <TextContent
                  label="新中区分"
                  :content="carBase.newOldType | fmtHyphen"
                />
                <TextContent
                  label="保険情報有無"
                  :content="
                    (carBase.insuranceNumber || '839294813493') | fmtHyphen
                  "
                  :copyable="!!carBase.insuranceNumber || true"
                  high-light
                  @click="insuranceVisible = true"
                >
                  <fg-tag
                    v-if="carBase.insuranceType"
                    size="mini"
                    class="ml5"
                    >{{ carBase.insuranceType }}</fg-tag
                  >
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
                  :content="carBase.firstRegistrationDate | fmtDate"
                />
                <TextContent
                  label="車検満了日"
                  :content="carBase.inspectionExpirationDate | fmtDate"
                  flex
                ></TextContent>
                <TextContent
                  label="走行距離"
                  content="90,000km (2020/09/07時点)"
                ></TextContent>
                <TextContent
                  label="車検証有無"
                  :content="
                    (carBase.inspectionCertificate || 'test') | fmtHyphen
                  "
                  :copyable="!carBase.inspectionCertificate"
                  high-light
                  @click="vicVisible = true"
                />
                <TextContent
                  label="乗換対象"
                  :content="carBase.alternativeTarget | fmtAlternative"
                />
                <TextContent
                  label="買換意向"
                  :content="carBase.alternativeReaction"
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
                  label="販売価格"
                  :content="carTrade.retailPrice | fmtHyphen"
                />
                <TextContent
                  label="査定価格"
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
                <fg-icon name="arrow-down"></fg-icon>
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
                  label="燃料タンク"
                  :content="carDetail.fuelTank | fmtHyphen"
                />
                <TextContent
                  label="カラーコード"
                  :content="carDetail.colorCode | fmtHyphen"
                />
                <TextContent
                  label="トリムコード"
                  :content="carDetail.trimCode | fmtHyphen"
                />
                <TextContent label="車両寸法"
                  >全長 {{ carDetail.length | fmtCarSize }}<br />全幅
                  {{ carDetail.width | fmtCarSize }}<br />全高
                  {{ carDetail.height | fmtCarSize }}</TextContent
                >
              </div>
            </v-col>
            <v-col cols="6">
              <div class="pt10 pl20 pr20">
                <TextContent
                  label="タイヤサイズ"
                  :content="carDetail.tireSize | fmtHyphen"
                />
                <TextContent label="タイヤ製造" content="2015年27週目" />
                <TextContent
                  label="バッテリーサイズ"
                  :content="carDetail.batterySize | fmtHyphen"
                />
                <TextContent
                  label="モデル"
                  :content="carDetail.model | fmtHyphen"
                />
                <TextContent
                  label="発売開始"
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
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4" class="customer-car__matching">
          <div class="top-edit-button-wrapper">
            <fg-button
              prefix-icon="edit"
              size="mini"
              border
              width="63px"
              justify="center"
              @click="goEditCar"
              >編集</fg-button
            >
          </div>
          <CarInfoSide :car-summary="carSummary" />
        </v-col>
        <SelectCarDialog
          v-model="selectCarVisible"
          :data="carListData"
          :query="carQuery"
          :current-car-id="currentCarId"
          @change="changeCar"
        />
        <EditReservationDialog v-model="reservationVisible" />
        <VICDialog v-model="vicVisible" />
        <InsuranceDialog v-model="insuranceVisible" />
      </v-row>
    </div>

    <CarTable class="customer-info mt30" :customer-id="customerId" />
  </div>
</template>
<script>
import { TRANSACTION_TYPES } from '../../common/base'
import SelectCarDialog from './select-car-dialog/index'
import CarInfoSide from './CarInfoSide'
import VICDialog from './vehicle-inspection-cert-dialog/index'
import InsuranceDialog from './insurance-dialog/index'
import SubTitle from '~/components/common/customer/common/SubTitle.vue'
import TextContent from '~/components/common/customer/common/TextContent.vue'
import ColumnTitle from '~/components/common/customer/common/ColumnTitle'
import EditReservationDialog from '~/components/common/customer/detail/car-info/edit-reservation-dialog'
import CarTable from '~/components/common/customer/detail/CarTable'
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

const CAR_TABLE_QUERY = {
  page: 1,
  limit: 10,
}

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
    fmtDate,
  },
  components: {
    SubTitle,
    TextContent,
    SelectCarDialog,
    ColumnTitle,
    EditReservationDialog,
    CarInfoSide,
    VICDialog,
    InsuranceDialog,
    CarTable,
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
    carQuery: {
      ...CAR_TABLE_QUERY,
    },
    carListData: {},
    currentCarId: '',
    carBase: {},
    carSummary: {},
    carTrade: {},
    carExpense: {},
    carCost: {},
    carDetail: {},
    vicVisible: false,
    insuranceVisible: false,
    carLives: [],
    transactionTypes: TRANSACTION_TYPES,
  }),
  watch: {
    carQuery: {
      deep: true,
      handler(val) {
        console.log(JSON.stringify(val, null, 2))
        this.getCarList()
      },
    },
  },
  created() {
    this.getCarList()
  },
  methods: {
    async getCarInfo() {
      if (!this.currentCarId) return
      try {
        const res = await this.$api.get(
          `/v1/customer/${this.customerId}/car/${this.currentCarId}`
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
    async getCarList() {
      const { page, limit } = this.carQuery
      const params = {
        limit,
        offset: (page - 1) * limit,
      }
      try {
        const res = await this.$api.get(
          `/v1/customer/${this.customerId}/car`,
          params
        )
        console.log('getCarList', res)
        this.carListData = res || {}
        const carList = this.carListData.results || []
        if (!this.currentCarId && carList.length > 0) {
          this.currentCarId = carList[0].carId
          await this.getCarInfo()
        }
      } catch (e) {
        console.error(e)
      }
    },
    changeCar(item) {
      // console.log(JSON.stringify(item, null, 2))
      this.currentCarId = item.carId
      this.getCarInfo()
    },
    goEditCar() {
      this.$router.push(
        `/customer/regist/car/edit?id=${this.currentCarId}&customerId=${this.customerId}`
      )
    },
  },
}
</script>

<style lang="scss">
.customer-detail-car-info-wrapper {
  color: $blue-200;
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

  .selection-points-wrapper {
    .fg-tag {
      margin: 0 4px 0 0;
      border: 1px solid $gray-100;
      box-sizing: content-box;
      &.__border {
        color: #748eb7;
      }
    }
  }
}
</style>
