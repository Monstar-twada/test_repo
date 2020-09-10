<template>
  <div class="customer-regist-edit-form-wrapper">
    <WhiteBox>
      <ColumnTitle>
        <template v-slot:title>
          <h3>基本情報</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="140px">
        <fg-form-item label="お客様の写真">
          <fg-image-processor
            width="80px"
            height="80px"
            :options="{ width: 720, height: 720 }"
            :url="form.photoKey"
            :validate="customValidate"
            @change="avatarChange"
          ></fg-image-processor>
        </fg-form-item>

        <fg-form-item label="個人/法人">
          <fg-radio-group v-model="form.customerType">
            <fg-radio
              v-for="(item, i) in customerTypes"
              :key="i"
              :label="item.text"
            ></fg-radio>
          </fg-radio-group>
        </fg-form-item>

        <fg-form-item label="氏名" show-suffix-required-icon>
          <fg-row gutter="20">
            <fg-col span="10">
              <fg-input v-model="form.lastName"></fg-input>
            </fg-col>
            <fg-col span="10">
              <fg-input v-model="form.firstName"></fg-input>
            </fg-col>
          </fg-row>
        </fg-form-item>

        <fg-form-item label="フリガナ">
          <fg-row gutter="20">
            <fg-col span="10">
              <fg-input v-model="form.lastNameKana"></fg-input>
            </fg-col>
            <fg-col span="10">
              <fg-input v-model="form.firstNameKana"></fg-input>
            </fg-col>
          </fg-row>
        </fg-form-item>

        <fg-form-item label="性別">
          <fg-radio-group v-model="form.sex">
            <fg-radio
              v-for="(item, i) in genders"
              :key="i"
              :label="item.value"
              >{{ item.text }}</fg-radio
            >
          </fg-radio-group>
        </fg-form-item>

        <fg-form-item label="携帯電話">
          <fg-input v-model="form.cellphoneNumber"></fg-input>
        </fg-form-item>

        <fg-form-item label="電話番号">
          <fg-input v-model="form.phoneNumber"></fg-input>
        </fg-form-item>

        <fg-form-item label="メールアドレス">
          <fg-input v-model="form.email"></fg-input>
        </fg-form-item>

        <fg-form-item label="郵便番号">
          <fg-input v-model="form.zipCode" width="160px"></fg-input>
        </fg-form-item>

        <fg-form-item label="都道府県">
          <fg-select width="160px"></fg-select>
        </fg-form-item>

        <fg-form-item label="市区町村">
          <fg-input v-model="form.city"></fg-input>
        </fg-form-item>

        <fg-form-item label="番地など">
          <fg-input v-model="form.address1"></fg-input>
        </fg-form-item>

        <fg-form-item label="建物名・部屋番号など">
          <fg-input v-model="form.address2"></fg-input>
        </fg-form-item>

        <fg-form-item label="生年月日">
          <fg-calendar
            v-model="form.birthday"
            width="160px"
            writable
          ></fg-calendar>
        </fg-form-item>

        <fg-form-item label="勤務先">
          <fg-input v-model="form.workName"></fg-input>
        </fg-form-item>

        <fg-form-item label="勤務先電話番号">
          <fg-input v-model="form.workPhoneNumber"></fg-input>
        </fg-form-item>

        <fg-form-item label="勤続年数（入社日）">
          <fg-calendar v-model="form.workYear" width="160px"></fg-calendar>
        </fg-form-item>

        <fg-form-item label="年収">
          <fg-input
            v-model="form.annualIncome"
            type="number"
            width="160px"
            unit="万円"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="住宅（入居日）">
          <fg-row gutter="20">
            <fg-col span="5">
              <fg-select v-model="form.homeX" placeholder="選択"></fg-select>
            </fg-col>
            <fg-col span="10">
              <fg-calendar v-model="form.homeInDate" writable></fg-calendar>
            </fg-col>
          </fg-row>
        </fg-form-item>

        <fg-form-item label="免許証">
          <fg-image-processor
            :options="{ width: 2000 }"
            url=""
            icon="license-front"
            :validate="customValidate"
          ></fg-image-processor>
          <fg-image-processor
            :options="{ width: 2000 }"
            url=""
            icon="license-back"
            :validate="customValidate"
          ></fg-image-processor>
        </fg-form-item>

        <fg-form-item label="免許証の色">
          <fg-select
            v-model="form.licenceColor"
            width="110px"
            placeholder="選択"
          ></fg-select>
        </fg-form-item>

        <fg-form-item label="免許証番号">
          <fg-input v-model="form.licence" width="395px"></fg-input>
        </fg-form-item>

        <fg-form-item label="家族構成" class="plus-row-wrapper">
          <fg-row gutter="15">
            <fg-col span="5">
              <fg-select placeholder="選択"></fg-select>
            </fg-col>
            <fg-col span="5">
              <fg-input></fg-input>
            </fg-col>
            <fg-col span="5">
              <fg-input></fg-input>
            </fg-col>
            <fg-col span="7">
              <fg-calendar writable></fg-calendar>
            </fg-col>
            <fg-col span="1">
              <fg-button size="mini" icon="trash" circle border></fg-button>
            </fg-col>
          </fg-row>
          <fg-row>
            <fg-col>
              <fg-button size="small" icon="plus" circle border></fg-button>
            </fg-col>
          </fg-row>
        </fg-form-item>
      </fg-form>
    </WhiteBox>

    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>希望するカーライフ＆車両選定ポイント</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="140px">
        <fg-form-item label="カーライフ">
          <fg-checkbox
            v-for="(item, index) in carLives"
            :key="index"
            :label="item.text"
            :value="item.active"
            class="mr30"
          ></fg-checkbox>
        </fg-form-item>
        <fg-form-item label="選定ポイント">
          <fg-checkbox
            v-for="(item, index) in selectionPoints"
            :key="index"
            :label="item.text"
            :value="item.active"
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
      <fg-form label-width="140px">
        <fg-form-item label="ペット">
          <fg-input v-model="form.pet"></fg-input>
        </fg-form-item>

        <fg-form-item label="実家">
          <fg-input v-model="form.home"></fg-input>
        </fg-form-item>

        <fg-form-item label="ドリンク">
          <fg-input v-model="form.drink"></fg-input>
        </fg-form-item>

        <fg-form-item label="趣味">
          <fg-input v-model="form.hobby"></fg-input>
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
import {
  CAR_LIVES,
  SELECTION_POINTS,
  CUSTOMER_TYPES,
  GENDERS,
} from '~/assets/constants/index'

export default {
  components: {
    ColumnTitle,
    WhiteBox,
  },
  data() {
    const query = this.$route.query
    return {
      query,
      customerTypes: CUSTOMER_TYPES,
      genders: GENDERS,
      avatarData: {
        url: '/common/person_default.svg',
        name: '米田 道春',
        summary: '（31歳）',
      },
      carLives: CAR_LIVES,
      selectionPoints: SELECTION_POINTS,
      form: query.edit ? storage.get('registCustomEdit') : {},
    }
  },
  created() {
    if (!this.query.edit) {
      this.getDetail()
    }
  },
  methods: {
    saveCache() {
      storage.set('registCustomEdit', this.form)
    },
    handleConfirm() {
      this.saveCache()
      this.$router.push(`/customer/regist/user/confirm?id=${this.query.id}`)
    },
    handleBack() {
      this.$router.push(`/customer/detail?id=${this.query.id}`)
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
    async getDetail() {
      try {
        const { customer, enquete } = await this.$api.get(
          `/v1/customer/${this.query.id}`
        )
        console.log('customer detail index.vue', customer, enquete)
        if (customer) {
          this.form = customer
        }
      } catch (e) {
        console.error(e)
      }
    },
    avatarChange(data) {
      console.log('avatarChange', data)
      this.form.photoKey = data.url
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
