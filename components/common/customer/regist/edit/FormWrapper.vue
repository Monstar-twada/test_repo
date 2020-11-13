<template>
  <div class="customer-regist-edit-form-wrapper">
    <WhiteBox>
      <ColumnTitle>
        <template v-slot:title>
          <h3>基本情報</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="140px" @change="formChange">
        <fg-form-item label="お客様の写真">
          <fg-image-processor
            width="80"
            height="80"
            view-mode="crop"
            :options="{ width: 720, height: 720 }"
            :url="facePhoto"
            :validate="avatarValidator"
            @change="(res) => fileChange(res, 'tmpFacePhoto', 4)"
          ></fg-image-processor>
        </fg-form-item>

        <fg-form-item label="個人/法人">
          <fg-radio-group
            v-model="form.privateBusiness"
            :error-message="errors.privateBusiness"
          >
            <fg-radio
              v-for="(item, i) in customerTypes"
              :key="i"
              :label="item.value"
              >{{ item.text }}</fg-radio
            >
          </fg-radio-group>
        </fg-form-item>

        <fg-form-item label="氏名" required>
          <fg-input
            v-model="form.lastName"
            inline
            width="210"
            placeholder="姓"
            :error-message="errors.lastName"
          ></fg-input>
          <fg-input
            v-model="form.firstName"
            inline
            class="ml15"
            width="210"
            placeholder="名"
            :error-message="errors.firstName"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="フリガナ">
          <fg-input
            v-model="form.lastNameKana"
            placeholder="セイ"
            inline
            width="210"
            :error-message="errors.lastNameKana"
          ></fg-input>
          <fg-input
            v-model="form.firstNameKana"
            inline
            class="ml15"
            width="210"
            placeholder="メイ"
            :error-message="errors.firstNameKana"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="性別">
          <fg-radio-group v-model="form.sex" :error-message="errors.sex">
            <fg-radio
              v-for="(item, i) in genders"
              :key="i"
              :label="item.value"
              >{{ item.text }}</fg-radio
            >
          </fg-radio-group>
        </fg-form-item>

        <fg-form-item label="携帯電話">
          <fg-input
            v-model="form.cellphoneNumber"
            placeholder="00-0000-0000"
            :error-message="errors.cellphoneNumber"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="電話番号">
          <fg-input
            v-model="form.phoneNumber"
            placeholder="000-0000-0000"
            :error-message="errors.phoneNumber"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="メールアドレス">
          <fg-input
            v-model="form.email"
            placeholder="user@cars-enjoy.com"
            :error-message="errors.email"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="郵便番号">
          <fg-input
            v-model="form.zipCode"
            width="160"
            placeholder="000-0000"
            :error-message="errors.zipCode"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="都道府県">
          <fg-select
            v-model="form.prefecturesCode"
            width="160px"
            :items="prefectures"
            :error-message="errors.prefecturesCode"
          ></fg-select>
        </fg-form-item>

        <fg-form-item label="市区町村">
          <fg-input
            v-model="form.address1"
            placeholder=""
            :error-message="errors.address1"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="番地など">
          <fg-input
            v-model="form.address2"
            placeholder=""
            :error-message="errors.address2"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="建物名・部屋番号など">
          <fg-input
            v-model="form.address3"
            placeholder=""
            :error-message="errors.address3"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="生年月日">
          <fg-calendar
            v-model="form.birthday"
            width="160px"
            writable
            value-format="yyyy-MM-dd"
            default-view="1985/01/01"
          ></fg-calendar>
        </fg-form-item>

        <fg-form-item label="勤務先">
          <fg-input
            v-model="form.organizationName"
            placeholder=""
            :error-message="errors.organizationName"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="勤務先電話番号">
          <fg-input
            v-model="form.organizationPhoneNumber"
            placeholder=""
            :error-message="errors.organizationPhoneNumber"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="勤続年数（入社日）">
          <fg-calendar
            v-model="form.hireDate"
            width="160px"
            value-format="yyyy-MM-dd"
          ></fg-calendar>
        </fg-form-item>

        <fg-form-item label="年収">
          <fg-input
            v-model="form.annualIncome"
            width="160px"
            placeholder=""
            :error-message="errors.annualIncome"
            unit="万円"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="住宅（入居日）">
          <fg-select
            v-model="form.residenceType"
            :items="residenceTypes"
            width="160"
            inline
            placeholder="選択"
          ></fg-select>
          <fg-calendar
            v-model="form.moveInDate"
            value-format="yyyy-MM-dd"
            inline
            width="210"
            writable
            class="ml15"
          ></fg-calendar>
        </fg-form-item>

        <fg-form-item label="免許証">
          <fg-image-processor
            accept="*"
            :url="licenseImageFront.url"
            icon="license-front"
            :validate="licenseValidator"
            @change="(res) => fileChange(res, 'tmpLicenseImageFront', 6)"
          ></fg-image-processor>
          <fg-image-processor
            accept="*"
            :url="licenseImageBack.url"
            icon="license-back"
            :validate="licenseValidator"
            @change="(res) => fileChange(res, 'tmpLicenseImageBack', 7)"
          ></fg-image-processor>
        </fg-form-item>

        <fg-form-item label="免許証の色">
          <fg-select
            v-model="form.licenseColor"
            width="110px"
            placeholder="選択"
            :items="licenseColors"
          ></fg-select>
        </fg-form-item>

        <fg-form-item label="免許証番号">
          <fg-input
            v-model="form.licenseNumber"
            width="395px"
            placeholder=""
            :error-message="errors.licenseNumber"
          ></fg-input>
        </fg-form-item>

        <FamilyItem
          :customer-code="query.customerCode"
          :items="form.family"
          @change="familyChange"
        />
      </fg-form>
    </WhiteBox>

    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>希望するカーライフ＆車両選定ポイント</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="140px" @change="formChange">
        <fg-form-item label="カーライフ">
          <fg-checkbox
            v-for="(item, index) in carLives"
            :key="index"
            v-model="item.checked"
            :label="item.text"
            class="mr30"
          ></fg-checkbox>
        </fg-form-item>
        <fg-form-item label="選定ポイント">
          <fg-checkbox
            v-for="(item, index) in selectionPoints"
            :key="index"
            v-model="item.checked"
            :label="item.text"
            class="mr30"
          ></fg-checkbox>
        </fg-form-item>
      </fg-form>
    </WhiteBox>

    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>その他の情報</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="140px" @change="formChange">
        <fg-form-item label="ペット">
          <fg-input
            v-model="form.pet"
            placeholder=""
            :error-message="errors.pet"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="実家">
          <fg-input
            v-model="form.parentsHomeAddress"
            placeholder=""
            :error-message="errors.parentsHomeAddress"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="ドリンク">
          <fg-input
            v-model="form.drink"
            placeholder=""
            :error-message="errors.drink"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="趣味">
          <fg-input
            v-model="form.hobby"
            placeholder=""
            :error-message="errors.hobby"
          ></fg-input>
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
import { mapGetters } from 'vuex'
import WhiteBox from '../../common/WhiteBox'
import ColumnTitle from '../../common/ColumnTitle'
import FamilyItem from './FamilyItem'
import { FORM_RULES } from './validate'
import {
  DEF_CUSTOMER_FORM,
  CAR_LIVES_ENUM,
  SELECTION_POINT_ENUM,
} from './constants'
import { browserMixin } from '~/mixins/browser'

export default {
  components: {
    ColumnTitle,
    WhiteBox,
    FamilyItem,
  },
  mixins: [browserMixin],
  data() {
    const query = this.$route.query
    return {
      query,
      customerTypes: this.$ui.getBasicData('private_business'),
      genders: this.$ui.getBasicData('sex'),
      prefectures: this.$ui.getBasicData('prefectures'),
      residenceTypes: this.$ui.getBasicData('residence_type'),
      licenseColors: this.$ui.getBasicData('license_color'),
      form: {},
      selectedCarLives: [],
      selectedSelectionPoints: [],
      errors: {
        firstName: '',
        lastName: '',
      },
      family: [],
      isSubmitting: false,
      facePhoto: '',
      strLength: {},
      licenseImageFront: '',
      licenseImageBack: '',
      updateCarLifeCodes: [],
      updateSelectionPoints: [],
    }
  },
  computed: {
    ...mapGetters('popup', ['getSaveFlg']),
    carLives() {
      return this.$ui.getBasicData('car_life').map((item) => {
        return {
          ...item,
          checked: this.selectedCarLives.includes(item.value),
          field: CAR_LIVES_ENUM[item.value],
        }
      })
    },
    selectionPoints() {
      return this.$ui.getBasicData('selection_points').map((item) => {
        return {
          ...item,
          checked: this.selectedSelectionPoints.includes(item.value),
          field: SELECTION_POINT_ENUM[item.value],
        }
      })
    },
  },
  watch: {
    form() {
      this.$store.dispatch('popup/setFlg', true)
    },
  },
  mounted() {
    this.addWindowPopstateEvent(this.clickBrowserSystemButton)
  },
  created() {
    this.getDetail()
  },
  methods: {
    formChange() {
      this.errors = this.$ui.formSyncValidator(FORM_RULES, this.form)
    },

    clickBrowserSystemButton() {
      this.popupConfirm(
        this.getSaveFlg,
        () => {
          this.removeWindowPopstateEvent(this.clickBrowserSystemButton)
          this.$router.back()
        },
        () => {
          this.addWindowPopstateEvent(this.clickBrowserSystemButton)
        }
      )
      // if (!this.$store.getters['popup/getSaveFlg']) return
      // this.$confirm('入力中のデータが失われます。画面遷移をしますか？', {
      //   buttons: {
      //     ok: {
      //       text: '遷移する',
      //     },
      //   },
      // })
      //   .then(() => {
      //     this.$store.dispatch('popup/setFlg', false)
      //     this.removeWindowPopstateEvent()
      //     this.$router.back()
      //   })
      //   .catch(() => {
      //     this.addWindowPopstateEvent()
      //   })
    },
    async handleConfirm() {
      this.$store.dispatch('popup/setFlg', false)
      if (this.isSubmitting) return
      this.isSubmitting = true
      const form = {
        ...this.form,
        family: this.family,
      }
      // car lives
      this.updateCarLifeCodes = []
      this.carLives.forEach((item) => {
        if (item.checked) {
          this.updateCarLifeCodes.push(item.value)
        }
      })
      // selection points
      this.updateSelectionPoints = []
      this.selectionPoints.forEach((item) => {
        if (item.checked) {
          this.updateSelectionPoints.push(item.value)
        }
      })
      // if the form in family is empty change to null
      for (const property in form) {
        if (form[property] === '') {
          form[property] = null
        }
      }
      // if the family is empty change to null
      const family = this.family
      for (let i = 0; i < family.length; i++) {
        const childArray = family[i]
        for (const property in childArray) {
          if (childArray[property] === '') {
            childArray[property] = null
          }
        }
      }
      // validate data
      this.errors = this.$ui.formSyncValidator(FORM_RULES, form)
      if (this.errors.length > 0) {
        this.$alert(
          '必須項目が未入力か、入力データに誤りがあります。エラーを確認してください。'
        )
        this.isSubmitting = false
        return
      }

      // submit
      const customer = { ...form }
      const data = { customer }
      try {
        await this.$api.put(`/v1/customers/${this.query.customerCode}`, data)
        if (this.updateCarLifeCodes !== this.selectedCarLives) {
          await this.$api
            .put(`/v1/customers/${this.query.customerCode}/carLife`, {
              carLifeCodes: this.updateCarLifeCodes,
            })
            .then(() => {
              this.updateCarLifeCodes = []
            })
        }
        if (this.updateSelectionPoints !== this.selectedSelectionPoints) {
          await this.$api
            .put(`/v1/customers/${this.query.customerCode}/selectionPoint`, {
              selectionPoints: this.updateSelectionPoints,
            })
            .then(() => {
              this.updateSelectionPoints = []
            })
        }
        // await this.$alert(`顧客編集成功しました！`, { type: 'success' })
        this.handleBack()
      } catch (err) {
        if (err) this.$alert(err.message)
      }
      this.isSubmitting = false
    },
    // popup(callback) {
    //   if (this.$store.getters['popup/getSaveFlg']) {
    //     this.$confirm('入力中のデータが失われます。画面遷移をしますか？', {
    //       buttons: {
    //         ok: {
    //           text: '遷移する',
    //         },
    //       },
    //     })
    //       .then(() => {
    //         this.$store.dispatch('popup/setFlg', false)
    //         callback()
    //       })
    //       .catch((error) => {
    //         console.error({ error })
    //       })
    //   } else {
    //     callback()
    //   }
    // },
    handleBack() {
      this.popupConfirm(
        this.getSaveFlg,
        () => {
          setTimeout(() => {
            this.$router.push(
              `/customer/detail/?customerCode=${this.query.customerCode}`
            )
          }, 300)
        },
        () => {}
      )
      // this.popup(() =>
      //   setTimeout(() => {
      //     this.$router.push(
      //       `/customer/detail/?customerCode=${this.query.customerCode}`
      //     )
      //   }, 300)
      // )
    },
    avatarValidator(file, callback) {
      if (!/^image\/\w+/.test(file.type)) {
        this.$alert('JPEG・PNG・HEICファイルのみ選択できます')
        return
      }
      callback()
    },
    licenseValidator({ type, size }, callback) {
      if (
        !/^image\/(jpeg|png|pdf|heic)/i.test(type) &&
        !/^application\/pdf/i.test(type)
      ) {
        this.$alert('PDF・JPEG・PNG・HEICファイルのみ選択できます')
        return
      }
      if (size / 1024 > 10240) {
        this.$alert('10MBまでのファイルが使用できます')
        return
      }
      callback()
    },
    async getDetail() {
      try {
        const res = await this.$api.get(
          `/v1/customers/${this.query.customerCode}`
        )
        if (res.facePhoto !== null) {
          this.getFacePhoto()
        }
        if (res.licenseImageBack !== null) {
          this.getLicenseImageBack()
        }
        if (res.licenseImageFront !== null) {
          this.getLicenseImageFront()
        }
        this.resetForm(res)
      } catch (err) {
        this.$alert(err.message)
        console.error(err)
      }
    },
    async getFacePhoto() {
      try {
        const res = await this.$api.get(
          `/v1/customers/${this.query.customerCode}/facePhoto`
        )
        this.facePhoto = res.url
      } catch (err) {
        console.error(err)
      }
    },
    async getLicenseImageFront() {
      try {
        const res = await this.$api.get(
          `/v1/customers/${this.query.customerCode}/licenseImage/front`
        )
        this.licenseImageFront = res
      } catch (err) {
        console.error(err)
      }
    },
    async getLicenseImageBack() {
      try {
        const res = await this.$api.get(
          `/v1/customers/${this.query.customerCode}/licenseImage/back`
        )
        this.licenseImageBack = res
      } catch (err) {
        console.error(err)
      }
    },
    fileChange(res, type, imageType) {
      if (!res.data) {
        this.deleteFile(type)
      }

      this.$api
        .upload(res, { imageType })
        .then((data) => {
          this.deleteFile(type)
          this.form[type] = data.id
        })
        .catch((err) => {
          this.$alert(err.message)
        })
    },
    deleteFile(type) {
      const fileId = this.form[type]
      if (!fileId) return
      console.error('delete file:', fileId)
      const customerCode = this.query.customerCode
      switch (type) {
        case 'facePhoto':
          this.$api
            .delete(`/v1/customers/${customerCode}/facePhoto`)
            .then(() => {
              // console.log(`delete ${type}: ${fileId} successfully!`)
            })
            .catch((err) => {
              console.error(err)
            })
          break
        case 'licenseImageFront':
        case 'licenseImageBack':
          this.$api
            .delete(`/v1/customers/${customerCode}/licenseImage`)
            .then(() => {
              // console.log(`delete ${type}: ${fileId} successfully!`)
            })
            .catch((err) => {
              console.error(err)
            })
          break
      }
    },
    uploadFile(file) {
      return new Promise((resolve, reject) => {
        this.$api
          .upload(file, {
            onProgress(per) {
              // console.log('onProgress', per + '%')
            },
          })
          .then((res) => {
            resolve(res.id)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    resetForm(res) {
      const form = {}
      Object.keys(DEF_CUSTOMER_FORM).forEach((key) => {
        // licenseColor
        if (key === 'licenseColor' && res[key]) {
          const item =
            this.licenseColors.find((item) => item.text === res[key]) || {}
          form[key] = item.value || '1'
          return
        }
        if (res[key]) {
          form[key] = res[key]
        }
      })
      // car life
      if (Array.isArray(res.carLifeCodes)) {
        this.selectedCarLives = res.carLifeCodes
      } else {
        this.selectedCarLives = []
      }
      // selection points
      if (Array.isArray(res.selectionPoints)) {
        this.selectedSelectionPoints = res.selectionPoints
      } else {
        this.selectedSelectionPoints = []
      }
      this.form = form
    },
    familyChange(arr) {
      this.family = arr
    },
  },
}
</script>

<style lang="scss">
.customer-regist-edit-form-wrapper {
  margin: 0 auto;
  padding: 20px 0;
  width: 712px;
  .fg-form {
    margin: 10px 20px 0;
    .plus-row-wrapper {
      .fg-row {
        margin-bottom: 15px;
      }
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
