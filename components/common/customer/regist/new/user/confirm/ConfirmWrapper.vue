<template>
  <div class="customer-regist-user-confirm-wrapper">
    <WhiteBox>
      <ColumnTitle>
        <template v-slot:title>
          <h3>基本情報</h3>
        </template>
      </ColumnTitle>
      <fg-form :label-width="labelWidth" split-vertical-line item-spacing="0">
        <fg-form-item label="担当店舗">
          {{ form.storeInCharge }}
        </fg-form-item>
        <fg-form-item label="個人/法人">
          {{ form.customerType }}
        </fg-form-item>
        <fg-form-item label="氏名">
          {{ form | fmtCustomerName }}
        </fg-form-item>

        <fg-form-item label="フリガナ">
          {{ form | fmtNameKana }}
        </fg-form-item>

        <fg-form-item label="生年月日">
          {{ form.birthday }}
        </fg-form-item>

        <fg-form-item label="性別">
          {{ gender }}
        </fg-form-item>

        <fg-form-item label="携帯電話">
          {{ form.cellphoneNumber }}
        </fg-form-item>

        <fg-form-item label="電話番号">
          {{ form.phoneNumber }}
        </fg-form-item>

        <fg-form-item label="メールアドレス">
          {{ form.email }}
        </fg-form-item>

        <fg-form-item label="郵便番号">
          {{ form.zipCode }}
        </fg-form-item>

        <fg-form-item label="都道府県">
          {{ prefecture }}
        </fg-form-item>

        <fg-form-item label="市区町村">
          {{ form.address1 }}
        </fg-form-item>

        <fg-form-item label="番地など">
          {{ form.address2 }}
        </fg-form-item>

        <fg-form-item label="建物名・部屋番号など">
          {{ form.address3 }}
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
import WhiteBox from '~/components/common/customer/common/WhiteBox'
import ColumnTitle from '~/components/common/customer/common/ColumnTitle'

import { customerMixin } from '~/mixins/customer'
export default {
  components: {
    ColumnTitle,
    WhiteBox,
  },
  mixins: [customerMixin],
  data() {
    return {
      labelWidth: '168px',
      query: {
        ...this.$route.query,
      },
      form: this.$ui.getCache('userNewCacheData'),
    }
  },
  computed: {
    customerType() {
      const data = this.$ui.getBasicData('private_business', true) || {}
      return data[this.form.privateBusiness]
    },
    gender() {
      const data = this.$ui.getBasicData('sex', true) || {}
      return data[this.form.sex]
    },
    prefecture() {
      const data = this.$ui.getBasicData('prefectures', true) || {}
      return data[this.form.prefecturesCode]
    },
    residenceType() {
      const data = this.$ui.getBasicData('residence_type', true) || {}
      return data[this.form.residenceType]
    },
    licenseColor() {
      const data = this.$ui.getBasicData('license_color', true) || {}
      return data[this.form.licenseColor]
    },
    carLifeContent() {
      const data = this.$ui.getBasicData('car_life', true)
      const formData = this.form.carLives || []
      return formData.map((item) => data[item.carLife]).join('、')
    },
    selectionPointsContent() {
      const data = this.$ui.getBasicData('selection_points', true)
      const formData = this.form.selectionPoints || []
      return formData.map((item) => data[item.selectionPoints]).join('、')
    },
  },
  methods: {
    goBack() {
      this.$router.push(`/customer/regist/edit/?id=${this.query.id}&edit=1`)
    },
  },
}
</script>

<style lang="scss">
.customer-regist-user-confirm-wrapper {
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
