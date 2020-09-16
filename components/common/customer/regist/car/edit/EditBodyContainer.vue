<template>
  <div class="customer-regist-car-edit-wrapper">
    <!-- <WhiteBox>
      <ColumnTitle>
        <template v-slot:title>
          <h3>所有者情報</h3>
        </template>
      </ColumnTitle>
      <div class="form-inner-wrapper">
        <fg-form label-width="140px" class="ml20">
          <fg-form-item label="所有者">
            <fg-avatar :data="avatarData" />
            <fg-button prefix-icon="change" border size="mini">変更</fg-button>
            <fg-button icon="trash" border circle size="mini"></fg-button>
          </fg-form-item>
          <fg-form-item label="意思決定者">
            <fg-avatar :data="avatarData" />
            <fg-button prefix-icon="change" border size="mini">変更</fg-button>
            <fg-button icon="trash" border circle size="mini"></fg-button>
          </fg-form-item>
          <fg-form-item label="利用者">
            <fg-row gutter="20">
              <fg-col span="40">
                <fg-avatar :data="avatarData" />
                <fg-button prefix-icon="change" border size="mini"
                  >変更</fg-button
                >
                <fg-button icon="trash" border circle size="mini"></fg-button>
              </fg-col>
              <fg-col span="20">
                <fg-avatar :data="avatarData" />
                <fg-button prefix-icon="change" border size="mini"
                  >変更</fg-button
                >
                <fg-button icon="trash" border circle size="mini"></fg-button>
                <fg-button icon="plus" border circle size="small"></fg-button>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="主な利用目的">
            <fg-tag size="medium" fillet>車出勤</fg-tag>
            <fg-tag size="medium" fillet>買い物</fg-tag>
            <fg-tag size="medium" fillet>部活送迎</fg-tag>
            <fg-tag size="medium" fillet>習い事送迎</fg-tag>
          </fg-form-item>
        </fg-form>
      </div>
    </WhiteBox> -->
    <WhiteBox>
      <ColumnTitle>
        <template v-slot:title>
          <h3>車両基本情報</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="140px" class="ml20">
        <fg-form-item label="車検証">
          <div class="customer-regist-car-edit-wrapper__item">
            <fg-image-processor
              icon="license-front"
              :url="form.photoKey"
              :validate="customValidate"
              @change="avatarChange"
            ></fg-image-processor>
          </div>
        </fg-form-item>
        <fg-form-item label="車検証番号">
          <fg-input
            v-model="form.carBase.carId"
            width="440px"
            :length="strLength.carBase.carId"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="メーカー">
          <fg-input
            v-model="form.carBase.maker"
            width="440px"
            :length="strLength.carBase.maker"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="車種">
          <fg-input
            v-model="form.carBase.class"
            width="440px"
            :length="strLength.carBase.class"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="グレード">
          <fg-input
            v-model="form.carBase.grade"
            width="440px"
            :length="strLength.carBase.grade"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="車両画像">
          <fg-image-processor
            icon="car"
            :validate="customValidate"
            url=""
          ></fg-image-processor>
        </fg-form-item>
        <fg-form-item label="ナンバー">
          <div class="customer-regist-car-edit-wrapper__car-box">
            <fg-input
              v-model="form.carBase.vinLTO"
              width="110px"
              :length="strLength.carBase.vinLTO"
              placeholder="富士山"
            ></fg-input>
            <fg-input
              v-model="form.carBase.vinNumber"
              width="110px"
              :length="strLength.carBase.vinNumber"
              placeholder="300"
            ></fg-input>
            <fg-input
              v-model="form.carBase.vinKana"
              width="80px"
              :length="strLength.carBase.vinKana"
              placeholder="あ"
            ></fg-input>
            <fg-input
              v-model="form.carBase.vin"
              width="110px"
              :length="strLength.carBase.vin"
              placeholder="1234"
            ></fg-input>
          </div>
        </fg-form-item>
        <fg-form-item label="初度登録年月">
          <fg-calendar
            v-model="form.carBase.firstRegistrationDate"
            width="160px"
            writable
            clearable
          />
        </fg-form-item>
        <fg-form-item label="登録年月日">
          <fg-calendar
            v-model="form.carBase.registrationDate"
            width="160px"
            writable
            clearable
          />
        </fg-form-item>
        <fg-form-item label="車検満了日">
          <fg-calendar
            v-model="form.carBase.inspectionExpirationDate"
            width="160px"
            writable
            clearable
          />
        </fg-form-item>
        <fg-form-item label="新中区分">
          <fg-select
            v-model="form.carBase.newOldType"
            :placeholder="form.carBase.newOldType"
            width="160px"
          ></fg-select>
        </fg-form-item>
        <fg-form-item label="買換意向">
          <fg-checkbox
            v-model="form.intentionToPurchase"
            theme="blue"
            label="あり"
          ></fg-checkbox>
        </fg-form-item>
        <fg-form-item label="走行距離">
          <fg-input
            v-model="form.carBase.mileage"
            width="110px"
            suffix-text-outside="km"
            :length="strLength.carBase.mileage"
            :custom-formatter="
              (val) => changeToHankakuAndGetNumber('carBase', 'mileage', val)
            "
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="走行距離確認日">
          <fg-calendar
            v-model="form.carBase.mileageCheckDate"
            width="160px"
            writable
            clearable
          />
        </fg-form-item>
      </fg-form>
    </WhiteBox>

    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>売買情報</h3>
        </template>
      </ColumnTitle>
      <fg-form ref="form" :model="form" label-width="150px" class="ml20">
        <fg-form-item label="販売価格">
          <fg-input
            v-model="form.carTrade.retailPrice"
            width="440px"
            :length="strLength.carTrade.retailPrice"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="販売価格確認日">
          <fg-calendar
            v-model="form.carTrade.salesPriceDate"
            width="160px"
            writable
            clearable
          />
        </fg-form-item>
        <fg-form-item label="査定価格">
          <fg-input
            v-model="form.carTrade.assessmentAmount"
            width="440px"
            :length="strLength.carTrade.assessmentAmount"
          ></fg-input>
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
          <div class="customer-regist-car-edit-wrapper__payment">
            <fg-input
              v-model="form.carTrade.paymentType"
              width="110px"
              placeholder="ローン種別"
              :length="strLength.carTrade.paymentType"
            ></fg-input>
            <fg-input
              v-model="form.carTrade.creditCompany"
              width="110px"
              placeholder="信販会社名"
              :length="strLength.carTrade.creditCompany"
            ></fg-input>
            <fg-input
              v-model="form.carTrade.numberOfPayment"
              width="110px"
              placeholder="支払回数"
              suffix-text-outside="回"
              :length="strLength.carTrade.numberOfPayment"
            ></fg-input>
          </div>
        </fg-form-item>
        <fg-form-item label="月々返済">
          <fg-input
            v-model="form.carTrade.repaymentMonthly"
            width="440px"
            :length="strLength.carTrade.repaymentMonthly"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="ボーナス時">
          <fg-input
            v-model="form.bonusDate"
            width="440px"
            :length="strLength.bonusDate"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="AI査定">
          <fg-input
            v-model="form.carTrade.aiAssessmentAmount"
            width="440px"
            :length="strLength.carTrade.aiAssessmentAmount"
          ></fg-input>
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
          <fg-input
            v-model="form.carTrade.estimatedPrice"
            :length="strLength.carTrade.estimatedPrice"
            width="440px"
          ></fg-input>
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
          <fg-input
            v-model="form.balancePayment"
            width="440px"
            :length="strLength.balancePayment"
          ></fg-input>
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
    </WhiteBox>

    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>税金/諸費用</h3>
        </template>
      </ColumnTitle>
      <fg-form ref="form" :model="form" label-width="150px" class="ml20">
        <fg-form-item label="自動車税">
          <fg-input
            v-model="form.carExpense.carTax"
            width="440px"
            :length="strLength.carExpense.carTax"
            :custom-formatter="
              (val) => changeToHankakuAndGetNumber('carExpense', 'carTax', val)
            "
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="自賠責保険">
          <fg-input
            v-model="form.carExpense.carInsurance"
            width="440px"
            :length="strLength.carExpense.carInsurance"
            :custom-formatter="
              (val) =>
                changeToHankakuAndGetNumber('carExpense', 'carInsurance', val)
            "
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="重量税">
          <fg-input
            v-model="form.carExpense.weightTax"
            width="440px"
            :length="strLength.carExpense.weightTax"
            :custom-formatter="
              (val) =>
                changeToHankakuAndGetNumber('carExpense', 'weightTax', val)
            "
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="リサイクル">
          <fg-input
            v-model="form.carExpense.recycleFee"
            width="440px"
            :length="strLength.carExpense.recycleFee"
            :custom-formatter="
              (val) =>
                changeToHankakuAndGetNumber('carExpense', 'recycleFee', val)
            "
          ></fg-input>
        </fg-form-item>
      </fg-form>
    </WhiteBox>

    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>ランニングコスト/月</h3>
        </template>
      </ColumnTitle>
      <fg-form ref="form" :model="form" label-width="150px" class="ml20">
        <fg-form-item label="ガソリン代">
          <fg-input
            v-model="form.carCost.gasFee"
            width="440px"
            :length="strLength.carCost.gasFee"
            :custom-formatter="
              (val) => changeToHankakuAndGetNumber('carCost', 'gasFee', val)
            "
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="保険料">
          <fg-input
            v-model="form.carCost.insuranceFee"
            width="440px"
            :length="strLength.carCost.insuranceFee"
            :custom-formatter="
              (val) =>
                changeToHankakuAndGetNumber('carCost', 'insuranceFee', val)
            "
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="駐車場代">
          <fg-input
            v-model="form.carCost.parkingFee"
            width="440px"
            :length="strLength.carCost.parkingFee"
            :custom-formatter="
              (val) => changeToHankakuAndGetNumber('carCost', 'parkingFee', val)
            "
          ></fg-input>
        </fg-form-item>
      </fg-form>
    </WhiteBox>

    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>車両詳細情報</h3>
        </template>
      </ColumnTitle>
      <fg-form ref="form" :model="form" label-width="150px" class="ml20">
        <fg-form-item label="車台番号">
          <fg-input
            v-model="form.carDetail.chassisNumber"
            width="440px"
            :length="strLength.carDetail.chassisNumber"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="通称型式">
          <fg-input
            v-model="form.carDetail.fullModel"
            width="440px"
            :length="strLength.carDetail.fullModel"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="エンジン型式">
          <fg-input
            v-model="form.carDetail.engineType"
            width="440px"
            :length="strLength.carDetail.engineType"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="最大出力">
          <fg-input
            v-model="form.carDetail.maxOutput"
            width="440px"
            :length="strLength.carDetail.maxOutput"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="最大トルク">
          <fg-input
            v-model="form.carDetail.maxTorque"
            width="440px"
            :length="strLength.carDetail.maxTorque"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="タイヤサイズ">
          <fg-row gutter="20">
            <fg-col span="9" class="customer-regist-car-edit-wrapper__tire-box">
              <h4>フロント</h4>
              <fg-input
                v-model="form.carDetail.tireSize"
                width="110px"
                :length="strLength.carDetail.tireSize"
              ></fg-input>
            </fg-col>
            <fg-col span="9" class="customer-regist-car-edit-wrapper__tire-box">
              <h4>リア</h4>
              <fg-input
                v-model="form.tireSizeBack"
                width="110px"
                :length="strLength.tireSizeBack"
              ></fg-input>
            </fg-col>
          </fg-row>
        </fg-form-item>
        <fg-form-item label="タイヤ製造">
          <fg-row gutter="20">
            <fg-col span="8" class="customer-regist-car-edit-wrapper__tire-box">
              <fg-input
                v-model="form.tireYear"
                width="110px"
                suffix-text-outside="年"
                :length="strLength.tireYear"
              ></fg-input>
            </fg-col>
            <fg-col span="8" class="customer-regist-car-edit-wrapper__tire-box">
              <fg-input
                v-model="form.tireWeek"
                width="110px"
                suffix-text-outside="週目"
                :length="strLength.tireWeek"
              ></fg-input>
            </fg-col>
          </fg-row>
        </fg-form-item>
        <fg-form-item label="バッテリーサイズ">
          <fg-input
            v-model="form.batterySize"
            width="440px"
            :length="strLength.batterySize"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="燃料タンク">
          <fg-input
            v-model="form.carDetail.fuelTank"
            width="110px"
            suffix-text-outside="L"
            :length="strLength.carDetail.fuelTank"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="カラーコード">
          <fg-input
            v-model="form.carDetail.colorCode"
            width="440px"
            :length="strLength.carDetail.colorCode"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="トリムコード">
          <fg-input
            v-model="form.carDetail.trimCode"
            width="440px"
            :length="strLength.carDetail.trimCode"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="モデル">
          <fg-input
            v-model="form.carDetail.model"
            width="440px"
            :length="strLength.carDetail.model"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="発売開始">
          <fg-input
            v-model="form.carDetail.salesPeriod"
            width="440px"
            :length="strLength.carDetail.salesPeriod"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="保証期間">
          <fg-input
            v-model="form.carDetail.warrantyPeriod"
            width="440px"
            :length="strLength.carDetail.warrantyPeriod"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="燃費(JC08モード)">
          <fg-input
            v-model="form.carDetail.gasMileage"
            width="110px"
            suffix-text-outside="km/L"
            :length="strLength.carDetail.gasMileage"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="車両重量">
          <fg-input
            v-model="form.carDetail.weight"
            width="110px"
            suffix-text-outside="Kg"
            :length="strLength.carDetail.weight"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="車両寸法">
          <div class="customer-regist-car-edit-wrapper__car-info">
            <h4>全長</h4>
            <fg-input
              v-model="form.carDetail.length"
              class="mb20"
              width="110px"
              suffix-text-outside="mm"
              :length="strLength.carDetail.length"
            ></fg-input>
          </div>
          <div class="customer-regist-car-edit-wrapper__car-info">
            <h4>全幅</h4>
            <fg-input
              v-model="form.carDetail.width"
              class="mb20"
              width="110px"
              suffix-text-outside="mm"
              :length="strLength.carDetail.width"
            ></fg-input>
          </div>
          <div class="customer-regist-car-edit-wrapper__car-info">
            <h4>全高</h4>
            <fg-input
              v-model="form.carDetail.height"
              width="110px"
              suffix-text-outside="mm"
              :length="strLength.carDetail.height"
            ></fg-input>
          </div>
        </fg-form-item>
      </fg-form>
    </WhiteBox>

    <div class="footer-button-wrapper">
      <fg-button width="240px" suffix-icon="arrow-right" @click="handleConfirm"
        >確認</fg-button
      >
      <fg-button
        width="240px"
        suffix-icon="arrow-right"
        white-transparent
        @click="handleBack"
        >戻る</fg-button
      >
    </div>
  </div>
</template>

<script>
import WhiteBox from '~/components/common/customer/common/WhiteBox'
import ColumnTitle from '~/components/common/customer/common/ColumnTitle'
import { storage } from '~/assets/js/storage'
const CAR_TABLE_QUERY = {
  page: 1,
  limit: 10,
}
export default {
  components: {
    WhiteBox,
    ColumnTitle,
  },
  data() {
    const query = this.$route.query
    return {
      query,
      carQuery: {
        ...CAR_TABLE_QUERY,
      },
      form: query.edit
        ? storage.get('registCarEdit')
        : {
            carListData: {},
            currentCarId: '',
            carBase: {},
            carSummary: {},
            carTrade: {},
            carExpense: {},
            carCost: {},
            carDetail: {},
          },
      strLength: {
        carBase: {
          carId: 100,
          maker: 255,
          class: 255,
          grade: 255,
          vinLTO: 20,
          vinNumber: 10,
          vinKana: 2,
          vin: 10,
          mileage: 10,
        },
        carTrade: {
          retailPrice: 30,
          assessmentAmount: 30,
          paymentType: 30,
          creditCompany: 50,
          numberOfPayment: 10,
          repaymentMonthly: 30,
          aiAssessmentAmount: 30,
          estimatedPrice: 30,
        },
        carExpense: {
          carTax: 8,
          carInsurance: 8,
          weightTax: 8,
          recycleFee: 8,
        },
        carCost: {
          gasFee: 8,
          insuranceFee: 8,
          parkingFee: 8,
        },
        carDetail: {
          chassisNumber: 30,
          fullModel: 30,
          engineType: 30,
          maxOutput: 30,
          maxTorque: 30,
          tireSize: 30,
          fuelTank: 30,
          colorCode: 30,
          trimCode: 30,
          model: 30,
          salesPeriod: 30,
          warrantyPeriod: 30,
          gasMileage: 30,
          weight: 30,
          length: 30,
          width: 30,
          height: 30,
        },
        bonusDate: 30,
        balancePayment: 30,
        tireSizeBack: 30,
        tireYear: 4,
        tireWeek: 4,
        batterySize: 30,
      },
    }
  },
  created() {
    if (!this.query.edit) {
      this.getCarList()
    }
  },
  methods: {
    saveCache() {
      storage.set('registCarEdit', this.form)
    },
    handleConfirm() {
      if (this.validation()) {
        this.saveCache()
        this.$router.push(
          `/customer/regist/car/confirm?id=${this.query.id}&customerId=${this.query.customerId}`
        )
      }
    },
    handleBack() {
      this.$router.push(`/customer/detail?id=${this.query.id}`)
    },
    avatarChange(data) {
      console.log('avatarChange', data)
      this.form.photoKey = data.url
    },
    validation() {
      let count = 0
      Object.keys(this.strLength).forEach((key) => {
        if (this.form[key]) {
          if (Number.isInteger(this.form[key])) {
            if (this.form[key].length > this.strLength[key]) {
              count += 1
            }
          } else {
            Object.keys(this.form[key]).forEach((key2) => {
              if (this.form[key][key2]) {
                if (this.form[key][key2].length > this.strLength[key][key2]) {
                  count += 1
                }
              }
            })
          }
        }
      })
      return count === 0
    },
    changeToHankakuAndGetNumber(target, secTarget, str) {
      const hankaku = str.replace(/[０-９]/g, function (s) {
        // eslint-disable-next-line
        return String.fromCharCode(s.charCodeAt(0) - 0xfee0)
      })
      const justNumber = hankaku.replace(/\D/g, '')
      if (secTarget) {
        this.form[target][secTarget] = justNumber
      } else {
        this.form[target] = justNumber
      }
      return justNumber
    },
    customValidate(file, next) {
      if (!/^image\/(jpeg|png|pdf|heif)/.test(file.type)) {
        this.$alert('PDF・JPEG・PNG・HEIFファイルのみ選択できます')
        return
      }

      if (file.size / 1024 > 5120) {
        this.$alert('5MBまでのファイルが使用できます')
        return
      }
      next()
    },
    async getCarInfo() {
      try {
        const res = await this.$api.get(
          `/v1/customer/${this.query.customerId}/car/${this.query.id}`
        )
        this.form.carBase = res.customer.base || {}
        this.form.carSummary = res.customer.summary || {}
        this.form.carTrade = res.customer.trade || {}
        this.form.carExpense = res.customer.expense || {}
        this.form.carCost = res.customer.cost || {}
        this.form.carDetail = res.customer.detail || {}
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
          `/v1/customer/${this.query.id}/car`,
          params
        )
        console.log('getCarList', res)
        this.carListData = res || {}
        const carList = this.carListData.results || []
        await this.getCarInfo()
        if (!this.currentCarId && carList.length > 0) {
          this.currentCarId = carList[0].carId
          await this.getCarInfo()
        }
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.customer-regist-car-edit-wrapper {
  margin: 0 auto;
  padding: 20px 0;
  width: 712px;
  &__item {
    display: flex;
    align-items: flex-end;
  }
  &__car-box {
    display: flex;
    justify-content: space-between;
    width: 440px;
  }
  &__payment {
    display: flex;
    .fg-input {
      margin-right: 10px;
    }
  }
  &__tire-box {
    display: flex;
    h4 {
      margin-right: 15px;
    }
  }
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
