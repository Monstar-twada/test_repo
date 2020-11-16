<template>
  <div ref="carInfo">
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

      <fg-row gutter="60">
        <fg-col span="16">
          <div class="mt10 ml20">
            <SubTitle :sub-title="data.carType | fmtHyphen" />
          </div>

          <fg-row class="mt15">
            <fg-col span="8">
              <TextContent label="所有者" class="ml20" label-width="90px">
                <fg-avatar
                  v-if="data.ownerFacePhoto"
                  :src="data.ownerFacePhoto"
                  size="24"
                  class="mr5"
                />
                <template v-else>-</template>
              </TextContent>
            </fg-col>
            <fg-col span="8">
              <TextContent label="意思決定者" class="ml20" label-width="80px">
                <fg-avatar
                  v-if="data.deciderFacePhoto"
                  :src="data.deciderFacePhoto"
                  size="24"
                  class="mr5"
                />
                <template v-else>-</template>
              </TextContent>
            </fg-col>
            <fg-col span="8">
              <TextContent label="利用者" class="ml20" label-width="60px">
                <fg-avatar
                  v-for="(item, i) in data.users"
                  :key="i"
                  :src="item.facePhoto"
                  size="24"
                  class="mr5"
                />
              </TextContent>
            </fg-col>
          </fg-row>

          <TextContent label="カーライフ" class="ml20 mt10" label-width="90px">
            <fg-tag
              v-for="(item, i) in carLives"
              :key="i"
              size="small"
              :selected="item.selected"
              :border-color="$colors.border"
              class="mb5"
              >{{ item.text }}</fg-tag
            >
          </TextContent>

          <TextContent label="取引種別" class="ml20 mt10" label-width="90px">
            <fg-tag
              v-for="(item, i) in transactionTypes"
              :key="i"
              round
              size="small"
              no-border
              color="#fff"
              :bold="item.selected"
              :bg-color="item.selected ? $colors.primary : '#aaa'"
              >{{ item.text }}</fg-tag
            >
          </TextContent>

          <div class="mt20 ml20">
            <SubTitle sub-title="車両基本情報" />
          </div>

          <fg-row>
            <fg-col span="12">
              <div class="right-border pt10 pl20 pr20">
                <TextContent
                  label="メーカー"
                  :content="data.maker | fmtHyphen"
                />
                <TextContent label="車種" :content="data.carType | fmtHyphen" />
                <TextContent
                  label="登録ナンバー"
                  :content="data | fmtCarNumber"
                />
                <TextContent
                  label="登録年月日"
                  :content="data.registrationStartDate | fmtDate"
                />
                <TextContent label="新中区分" :content="saleNewOldCarType" />
                <TextContent
                  label="保険情報有無"
                  :content="data.insuranceNumber | fmtHyphen"
                  :copyable="!!data.insuranceNumber"
                  high-light
                  @click="insuranceVisible = true"
                >
                  <fg-tag
                    v-if="companyClassification"
                    size="mini"
                    class="ml5"
                    >{{ companyClassification }}</fg-tag
                  >
                </TextContent>
              </div>
            </fg-col>
            <fg-col span="12">
              <div class="pt10 pl20 pr20">
                <TextContent
                  label="グレード"
                  :content="data.grade | fmtHyphen"
                />
                <TextContent
                  label="初度登録年月"
                  :content="data.registrationFirstDate | fmtDate"
                />
                <TextContent
                  label="車検満了日"
                  :content="data.registrationEndDate | fmtDate"
                  flex
                ></TextContent>
                <TextContent
                  label="走行距離"
                  :content="carMileage"
                ></TextContent>
                <TextContent
                  label="車検証有無"
                  :content="data.registrationNumber | fmtHyphen"
                  :copyable="!!data.registrationImageFileCode"
                  :high-light="!!data.registrationImageFileCode"
                  @click="
                    data.registrationImageFileCode ? (vicVisible = true) : ''
                  "
                />
                <TextContent
                  label="乗換対象"
                  :content="data.purchaseTargetFlg | fmtPurchaseTarget"
                />
                <TextContent
                  label="買換意向"
                  :content="data.purchaseIntention === '1' ? 'あり' : 'なし'"
                />
              </div>
            </fg-col>
          </fg-row>

          <div class="mt20 ml20">
            <SubTitle sub-title="売買情報" />
          </div>

          <fg-row>
            <fg-col span="12">
              <div class="right-border pt10 pl20 pr20">
                <TextContent
                  label="販売価格"
                  :content="data.noSuchField | fmtHyphen"
                />
                <TextContent
                  label="査定価格"
                  :content="data.noSuchField | fmtHyphen"
                />
                <TextContent
                  label="支払区分"
                  :content="data.noSuchField | fmtHyphen"
                />
                <TextContent
                  label="月々返済"
                  :content="data.noSuchField | fmtHyphen"
                />
              </div>
            </fg-col>
            <fg-col span="12">
              <div class="pt10 pl20 pr20">
                <TextContent
                  label="AI査定額"
                  :content="data.noSuchField | fmtHyphen"
                />
                <TextContent
                  label="予想価格"
                  sub-label="(マッチング)"
                  is-small-sub-label
                  :content="data.noSuchField | fmtHyphen"
                />
                <TextContent
                  label="支払残債"
                  :content="data.noSuchField | fmtHyphen"
                />
              </div>
            </fg-col>
          </fg-row>

          <fg-row>
            <fg-col span="12">
              <div class="mt20 ml20">
                <SubTitle sub-title="税金/諸費用" />
              </div>
              <div class="pt10 pl20 pr20">
                <TextContent
                  label="自動車税"
                  :content="data.carTax | fmtMoney"
                />
                <TextContent
                  label="自賠責保険"
                  :content="data.libilityInsurance | fmtMoney"
                />
                <TextContent
                  label="重量税"
                  :content="data.weightTax | fmtMoney"
                />
                <TextContent
                  label="リサイクル"
                  :content="data.recycleFee | fmtMoney"
                />
              </div>
            </fg-col>
            <fg-col span="12">
              <div class="mt20 ml20">
                <SubTitle sub-title="ランニングコスト/月" />
              </div>
              <div class="pt10 pl20 pr20">
                <TextContent
                  label="ガソリン代"
                  :content="data.monthlyGasolineCost | fmtMoney"
                />
                <TextContent
                  label="保険料"
                  :content="data.carInsuranceFee | fmtMoney"
                />
                <TextContent
                  label="駐車場代"
                  :content="data.monthlyParkingFee | fmtMoney"
                />
                <div class="double-line mt10 mb5"></div>
                <TextContent label="月間コスト" :content="data | sumCost" />
              </div>
            </fg-col>
          </fg-row>

          <div class="mt20 ml20">
            <SubTitle sub-title="車両詳細情報">
              <button class="car-info-arrow-down-button">
                <fg-icon name="arrow-down"></fg-icon>
              </button>
            </SubTitle>
          </div>

          <fg-row>
            <fg-col span="12">
              <div class="right-border pt10 pl20 pr20 pb20">
                <TextContent
                  label="車台番号"
                  :content="data.chassisNumber | fmtHyphen"
                />
                <TextContent
                  label="型式"
                  :content="data.carInspectionType | fmtHyphen"
                />
                <TextContent
                  label="エンジン型式"
                  :content="data.engineType | fmtHyphen"
                />
                <TextContent
                  label="最大出力"
                  :content="data.engineMaximumOutput | fmtHyphen"
                />
                <TextContent
                  label="最大トルク"
                  :content="data.engineTorque | fmtHyphen"
                />
                <TextContent
                  label="燃料タンク"
                  :content="data.fuelTankSize | fmtHyphen"
                />
                <TextContent
                  label="カラーコード"
                  :content="data.colorCodeType | fmtHyphen"
                />
                <TextContent
                  label="トリムコード"
                  :content="data.colorTrimCode | fmtHyphen"
                />
                <TextContent label="車両寸法"
                  >全長 {{ data.carFullLength | fmtCarSize }}<br />全幅
                  {{ data.carFullWidth | fmtCarSize }}<br />全高
                  {{ data.carTotalHeight | fmtCarSize }}</TextContent
                >
              </div>
            </fg-col>
            <fg-col span="12">
              <div class="pt10 pl20 pr20">
                <TextContent
                  label="タイヤサイズ"
                  :content="data.tireSizeRear | fmtHyphen"
                />
                <TextContent label="タイヤ製造" :content="tireCreateYear" />
                <TextContent
                  label="バッテリーサイズ"
                  :content="data.batterySize | fmtHyphen"
                />
                <TextContent label="モデル" :content="data.model | fmtHyphen" />
                <TextContent
                  label="発売開始"
                  :content="data.salesPeriodStart | fmtHyphen"
                />
                <TextContent
                  label="保証期間"
                  :content="data.warrantyPeriodEnd | fmtHyphen"
                />
                <TextContent
                  label="燃費"
                  label-flex
                  sub-label="(JC08モード)"
                  is-small-sub-label
                  :content="data.fuelEconomy | fmtHyphen"
                />
                <TextContent
                  label="車両重量"
                  :content="data.carWeight | fmtCarWeight"
                />
              </div>
            </fg-col>
          </fg-row>
        </fg-col>
        <fg-col span="8">
          <div class="mt15 pb15 pr20" style="text-align: right">
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
          <CarInfoSide :data="carPhoto" />
        </fg-col>
      </fg-row>
    </div>

    <SelectCarDialog
      v-model="selectCarVisible"
      :data="carListData"
      :query="carQuery"
      :current-car-code="currentCarCode"
      @change="changeCar"
    />
    <EditReservationDialog v-model="reservationVisible" />
    <VICDialog
      v-if="data.registrationImageFileCode"
      v-model="vicVisible"
      :car-code="data.carCode"
      :customer-code="data.customerCode"
    />
    <InsuranceDialog v-model="insuranceVisible" />

    <CarTable
      ref="carTable"
      class="customer-info mt30"
      :customer-code="customerCode"
      @change="changeCar"
    />
  </div>
</template>
<script>
import SelectCarDialog from './select-car-dialog/index'
import CarInfoSide from './CarInfoSide'
import VICDialog from './vehicle-inspection-cert-dialog/index'
import InsuranceDialog from './insurance-dialog/index'
import SubTitle from '~/components/common/customer/common/SubTitle.vue'
import TextContent from '~/components/common/customer/common/TextContent.vue'
import ColumnTitle from '~/components/common/customer/common/ColumnTitle'
import EditReservationDialog from '~/components/common/customer/detail/car-info/edit-reservation-dialog'
import CarTable from '~/components/common/customer/detail/CarTable'
import { customerMixin } from '~/mixins/customer'

const CAR_TABLE_QUERY = {
  page: 1,
  limit: 10,
}

export default {
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
  mixins: [customerMixin],
  props: {
    customerCode: {
      type: [String, Number],
      default: 0,
    },
  },
  data() {
    return {
      selectCarVisible: false,
      reservationVisible: false,
      carQuery: {
        ...CAR_TABLE_QUERY,
      },
      data: {},
      carListData: {},
      currentCarCode: null,
      vicVisible: false,
      insuranceVisible: false,
      carPhoto: {},
    }
  },
  computed: {
    carLives() {
      const classes = this.$ui.getBasicData('car_life')
      const arr = (this.data.carLifeCodes || []).map((item) => item.carLifeCode)
      return classes.map((item) => {
        item.selected = arr.includes(item.value)
        return item
      })
    },
    transactionTypes() {
      const classes = this.$ui.getBasicData('transaction_type')
      const arr = (this.data.transactionTypes || []).map(
        (item) => item.transactionType
      )
      return classes.map((item) => {
        item.selected = arr.includes(item.value)
        return item
      })
    },
    saleNewOldCarType() {
      const data = this.$ui.getBasicData('sale_new_old_car_type', true)
      return data[this.data.saleNewOldCarType]
    },
    companyClassification() {
      const data = this.$ui.getBasicData('company_classification', true)
      return data[this.data.companyClassification]
    },
    carMileage() {
      // 90,000km (2020/09/07時点)
      const arr = []
      const { carMileage, carMileageRegistrationDate } = this.data
      if (carMileage) {
        arr.push(this.$ui.toCommaNumber(carMileage) + 'km')
      }
      if (carMileageRegistrationDate) {
        arr.push(`(${carMileageRegistrationDate}時点)`)
      }
      return arr.join(' ') || '-'
    },
    tireCreateYear() {
      // 2015年27週目
      const { tireCreateYear, tireCreateWeek } = this.data
      if (tireCreateYear) {
        return `${tireCreateYear}年${tireCreateWeek}週目`
      }
      return '-'
    },
  },
  watch: {
    carQuery: {
      deep: true,
      handler() {
        this.getCarList()
      },
    },
    currentCarCode(val) {
      this.$emit('current-car-code', val)
    },
  },
  created() {
    if (this.$route.query.carCode) {
      this.currentCarCode = this.$route.query.carCode
      this.getCarInfo()
    }
    this.getCarList()
  },
  methods: {
    async getCarInfo() {
      if (!this.currentCarCode) {
        this.data = {}
        return
      }
      try {
        const res = await this.$api.get(
          `/v1/customers/${this.customerCode}/cars/${this.currentCarCode}`
        )
        this.data = res
        if (res.imageFileCode !== null) {
          try {
            const res = await this.$api.get(
              `/v1/customers/${this.customerCode}/cars/${this.currentCarCode}/carPhoto`
            )
            this.carPhoto = res
          } catch (err) {
            console.error(err)
          }
        } else {
          this.carPhoto = {}
        }
      } catch (err) {
        console.error(err)
        this.$alert(err.message)
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
          `/v1/customers/${this.customerCode}/cars`,
          params
        )
        this.carListData = res || {}
        const carList = this.carListData.results || []
        if (!this.currentCarCode && carList.length > 0) {
          this.currentCarCode = carList[0].carCode
          await this.getCarInfo()
        }
      } catch (err) {
        console.error(err)
        this.$alert(err.message)
      }
    },
    changeCar(item) {
      this.currentCarCode = item.carCode
      this.getCarInfo()
      if (
        this.$route.query.carCode &&
        this.$route.query.carCode !== this.currentCarCode
      ) {
        this.$router.replace({
          query: {
            customerCode: this.customerCode,
            carCode: this.currentCarCode,
          },
        })
      }
    },
    goEditCar() {
      if (this.carListData.results && this.carListData.results.length > 0) {
        this.$router.push(
          `/customer/regist/car/edit/?carCode=${this.currentCarCode}&customerCode=${this.customerCode}`
        )
      }
    },
  },
}
</script>

<style lang="scss">
.customer-detail-car-info-wrapper {
  color: $--color-primary;

  .double-line {
    width: 100%;
    height: 3px;
    border-top: 1px solid $--color-border;
    border-bottom: 1px solid $--color-border;
  }
  .car-info-arrow-down-button {
    height: 40px;
    padding: 0 5px;
    outline: none;
  }
}
</style>
