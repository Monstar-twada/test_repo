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
      <fg-form label-width="140px">
        <fg-form-item label="車検証">
          <fg-image-processor
            accept="*"
            icon="license-front"
            :url="registrationImage"
            :validate="customValidate"
            @change="(res) => filerChange(res, 'registrationImageFileCode')"
          ></fg-image-processor>
        </fg-form-item>
        <fg-form-item label="車検証番号">
          <fg-input
            v-model="form.registrationNumber"
            width="440px"
            :error-message="errors.registrationNumber"
            :length="strLength.registrationNumber"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="メーカー">
          <fg-input
            v-model="form.maker"
            width="440px"
            :error-message="errors.maker"
            :length="strLength.maker"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="車種">
          <fg-input
            v-model="form.carType"
            width="440px"
            :error-message="errors.carType"
            :length="strLength.carType"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="グレード">
          <fg-input
            v-model="form.grade"
            width="440px"
            :error-message="errors.grade"
            :length="strLength.grade"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="車両画像">
          <fg-image-processor
            icon="car"
            :validate="customValidate"
            url=""
            @change="(res) => filerChange(res, 'carPhoto')"
          ></fg-image-processor>
        </fg-form-item>
        <fg-form-item label="ナンバー">
          <fg-input
            v-model="form.landTransportOffice"
            inline
            width="110px"
            placeholder="陸運事務局"
            :error-message="errors.landTransportOffice"
          ></fg-input>
          <fg-input
            v-model="form.carRegistrationNumberType"
            class="ml5 mr5"
            inline
            width="110px"
            placeholder="種別"
            :error-message="errors.carRegistrationNumberType"
          ></fg-input>
          <fg-input
            v-model="form.carRegistrationNumberKana"
            inline
            width="80px"
            placeholder="カナ"
            :error-message="errors.carRegistrationNumberKana"
          ></fg-input>
          <fg-input
            v-model="form.carRegistrationNumber"
            class="ml5"
            inline
            width="110px"
            placeholder="プレート番号"
            :error-message="errors.carRegistrationNumber"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="初度登録年月">
          <fg-calendar
            v-model="form.registrationFirstDate"
            width="160px"
            writable
            clearable
            type="month"
            value-format="yyyy-MM"
          />
        </fg-form-item>
        <fg-form-item label="登録年月日">
          <fg-calendar
            v-model="form.registrationStartDate"
            width="160px"
            writable
            clearable
            value-format="yyyy-MM-dd"
          />
        </fg-form-item>
        <fg-form-item label="車検満了日">
          <fg-calendar
            v-model="form.registrationEndDate"
            width="160px"
            writable
            clearable
            value-format="yyyy-MM-dd"
          />
        </fg-form-item>
        <fg-form-item label="新中区分">
          <fg-select
            v-model="form.saleNewOldCarType"
            width="160px"
            :items="saleNewOldCarTypes"
          ></fg-select>
        </fg-form-item>
        <fg-form-item label="買換意向">
          <fg-checkbox
            v-model="form.purchaseIntention"
            label="あり"
          ></fg-checkbox>
        </fg-form-item>
        <fg-form-item label="走行距離">
          <fg-input v-model="form.carMileage" width="110" unit="km"></fg-input>
        </fg-form-item>
        <fg-form-item label="走行距離確認日">
          <fg-calendar
            v-model="form.carMileageRegistrationDate"
            width="160"
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
      <fg-form label-width="150px">
        <fg-form-item label="販売価格">
          <fg-input v-model="form.retailPrice" width="440px"></fg-input>
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
          <fg-input v-model="form.assessmentAmount" width="440px"></fg-input>
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
          <fg-input
            v-model="form.paymentType"
            width="110px"
            placeholder="ローン種別"
            inline
          ></fg-input>
          <fg-input
            v-model="form.creditCompany"
            width="110px"
            placeholder="信販会社名"
            inline
            class="ml5 mr5"
          ></fg-input>
          <fg-input
            v-model="form.numberOfPayment"
            width="110px"
            placeholder="支払回数"
            unit="回"
            inline
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="月々返済">
          <fg-input v-model="form.repaymentMonthly" width="440px"></fg-input>
        </fg-form-item>
        <fg-form-item label="ボーナス時">
          <fg-input
            v-model="form.bonusDate"
            width="440px"
            :length="strLength.bonusDate"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="AI査定">
          <fg-input v-model="form.aiAssessmentAmount" width="440px"></fg-input>
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
          <fg-input v-model="form.estimatedPrice" width="440px"></fg-input>
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
      <fg-form label-width="150px">
        <fg-form-item label="自動車税">
          <fg-input v-model="form.carTax" width="440px"></fg-input>
        </fg-form-item>
        <fg-form-item label="自賠責保険">
          <fg-input v-model="form.libilityInsurance" width="440px"></fg-input>
        </fg-form-item>
        <fg-form-item label="重量税">
          <fg-input v-model="form.weightTax" width="440px"></fg-input>
        </fg-form-item>
        <fg-form-item label="リサイクル">
          <fg-input v-model="form.recycleFee" width="440px"></fg-input>
        </fg-form-item>
      </fg-form>
    </WhiteBox>

    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>ランニングコスト/月</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="150px">
        <fg-form-item label="ガソリン代">
          <fg-input v-model="form.monthlyGasolineCost" width="440px"></fg-input>
        </fg-form-item>
        <fg-form-item label="保険料">
          <fg-input v-model="form.carInsuranceFee" width="440px"></fg-input>
        </fg-form-item>
        <fg-form-item label="駐車場代">
          <fg-input v-model="form.monthlyParkingFee" width="440px"></fg-input>
        </fg-form-item>
      </fg-form>
    </WhiteBox>

    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>車両詳細情報</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="150px">
        <fg-form-item label="車台番号">
          <fg-input v-model="form.chassisNumber" width="440px"></fg-input>
        </fg-form-item>
        <fg-form-item label="型式">
          <fg-input v-model="form.carInspectionType" width="440px"></fg-input>
        </fg-form-item>
        <fg-form-item label="エンジン型式">
          <fg-input v-model="form.engineType" width="440px"></fg-input>
        </fg-form-item>
        <fg-form-item label="最大出力">
          <fg-input v-model="form.engineMaximumOutput" width="440px"></fg-input>
        </fg-form-item>
        <fg-form-item label="最大トルク">
          <fg-input v-model="form.engineTorque" width="440px"></fg-input>
        </fg-form-item>
        <fg-form-item label="タイヤサイズ">
          <fg-form-item label="フロント" inline label-width="60">
            <fg-input v-model="form.tireSizeFront" width="110px"></fg-input>
          </fg-form-item>
          <fg-form-item label="リア" inline label-width="40" class="ml30">
            <fg-input v-model="form.tireSizeRear" width="110px"></fg-input>
          </fg-form-item>
        </fg-form-item>
        <fg-form-item label="タイヤ製造">
          <fg-input
            v-model="form.tireCreateYear"
            width="110px"
            unit="年"
            inline
            class="mr20"
          ></fg-input>
          <fg-input
            v-model="form.tireCreateWeek"
            width="110px"
            unit="週目"
            class="ml30"
            inline
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="バッテリーサイズ">
          <fg-input
            v-model="form.batterySize"
            width="440px"
            :length="strLength.batterySize"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="バッテリー製造">
          <fg-calendar
            v-model="form.batteryCreateDate"
            width="160"
          ></fg-calendar>
        </fg-form-item>
        <fg-form-item label="燃料タンク">
          <fg-input
            v-model="form.fuelTankSize"
            width="110px"
            unit="L"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="カラーコード">
          <fg-input v-model="form.colorCodeType" width="440px"></fg-input>
        </fg-form-item>
        <fg-form-item label="トリムコード">
          <fg-input v-model="form.colorTrimCode" width="440px"></fg-input>
        </fg-form-item>
        <fg-form-item label="モデル">
          <fg-input v-model="form.model" width="440px"></fg-input>
        </fg-form-item>
        <fg-form-item label="発売開始">
          <fg-input v-model="form.salesPeriodStart" width="440px"></fg-input>
        </fg-form-item>
        <fg-form-item label="保証期間">
          <fg-input v-model="form.warrantyPeriodEnd" width="440px"></fg-input>
        </fg-form-item>
        <fg-form-item label="燃費(JC08モード)">
          <fg-input
            v-model="form.fuelEconomy"
            width="110px"
            unit="km/L"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="車両重量">
          <fg-input v-model="form.carWeight" width="110px" unit="Kg"></fg-input>
        </fg-form-item>
        <fg-form-item label="車両寸法">
          <fg-form-item label="全長" label-width="45">
            <fg-input
              v-model="form.carFullLength"
              width="110"
              unit="mm"
            ></fg-input>
          </fg-form-item>
          <fg-form-item label="全幅" label-width="45" class="mt20">
            <fg-input
              v-model="form.carFullWidth"
              width="110"
              unit="mm"
            ></fg-input>
          </fg-form-item>
          <fg-form-item label="全高" label-width="45" class="mt20">
            <fg-input
              v-model="form.carTotalHeight"
              width="110"
              unit="mm"
            ></fg-input>
          </fg-form-item>
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
import { DEF_CAR_FORM } from './constants'
import { validate } from './validate'
import WhiteBox from '~/components/common/customer/common/WhiteBox'
import ColumnTitle from '~/components/common/customer/common/ColumnTitle'
import { REG_IMAGE_MIME, REG_PDF_MIME } from '~/assets/constants'

export default {
  components: {
    WhiteBox,
    ColumnTitle,
  },
  data() {
    const query = this.$route.query
    return {
      query,
      form: {},
      errors: {},
      registrationImage: '',
      isSubmitting: false,
      strLength: {},
    }
  },
  computed: {
    saleNewOldCarTypes() {
      return this.$ui.getBasicData('sale_new_old_car_type')
    },
  },
  created() {
    this.getCarInfo()
    // 車検証画像取得
    const { customerCode, carCode } = this.query
    this.$api
      .get(`/v1/customers/${customerCode}/cars/${carCode}/registrationImage`)
      .then((res) => {
        this.registrationImage = res.url
      })
      .catch(console.error)
  },
  methods: {
    async handleConfirm() {
      if (this.isSubmitting) return
      this.isSubmitting = true
      this.errors = validate(this.form)
      if (this.errors.length) {
        this.$alert('入力項目にはエラーが発生しました、チェックしてください！')
        return
      }
      const { customerCode, carCode } = this.query
      try {
        await this.$api.put(
          `/v1/customers/${customerCode}/cars/${carCode}`,
          this.form
        )
        await this.$alert('車両編集成功しました！', { type: 'success' })
        this.handleBack()
      } catch (err) {
        if (err) this.$alert(err.message)
      }
      this.isSubmitting = false
    },
    handleBack() {
      this.$router.push(
        `/customer/detail?customerCode=${this.query.customerCode}`
      )
    },
    filerChange(res, type) {
      if (!res.data) {
        // 削除処理を行う
        this.deleteFile(type)
        return
      }

      // upload file and delete old file
      this.$api
        .upload(res.data)
        .then((data) => {
          // delete old file
          this.deleteFile(type)
          // set new value of type
          if (type === 'carPhoto') {
            // new車両画像登録
            // ...
          } else {
            this.form[type] = data.id
          }
        })
        .catch((err) => {
          this.$alert(err.message)
        })
    },
    deleteFile(type) {
      // delete
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
      if (!REG_IMAGE_MIME.test(file.type) && !REG_PDF_MIME.test(file.type)) {
        this.$alert('PDF・JPEG・PNG・HEIFファイルを選択してください')
        return
      }

      if (file.size / 1024 > 5120) {
        this.$alert('5MBまでのファイルを選択してください')
        return
      }
      next()
    },
    async getCarInfo() {
      try {
        const { carCode, customerCode } = this.query
        const res = await this.$api.get(
          `/v1/customers/${customerCode}/cars/${carCode}`
        )
        const form = {}
        Object.keys(DEF_CAR_FORM).forEach((key) => {
          form[key] = res[key]
        })
        // string to boolean
        if (form.purchaseIntention) {
          form.purchaseIntention = form.purchaseIntention === '1'
        }
        this.form = form
      } catch (err) {
        this.$alert(err.message)
        console.error(err)
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
  .fg-form {
    margin-left: 40px;
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
