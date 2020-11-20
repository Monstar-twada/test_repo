<template>
  <div class="customer-regist-edit-form-wrapper">
    <WhiteBox>
      <ColumnTitle>
        <template v-slot:title>
          <h3>基本情報</h3>
        </template>
      </ColumnTitle>
      <fg-form label-width="140px">
        <fg-form-item v-model="form.storeInCharge" label="担当店舗">
          {{ form.storeInCharge }}
        </fg-form-item>
        <fg-form-item label="個人／法人区分" required>
          <fg-input
            v-model="form.customerType"
            width="210"
            placeholder=""
            :error-message="errors.customerType"
          ></fg-input>
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

        <fg-form-item label="フリガナ" required>
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

        <fg-form-item label="生年月日">
          <fg-calendar
            v-model="form.birthday"
            width="160px"
            writable
            value-format="yyyy-MM-dd"
            default-view="1985/01/01"
            :error-message="errors.birthday"
          ></fg-calendar>
        </fg-form-item>
        <fg-form-item label="性別" required>
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
            placeholder="000-0000-0000"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="電話番号">
          <fg-input
            v-model="form.phoneNumber"
            placeholder="000-0000-0000"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="メールアドレス">
          <fg-input
            v-model="form.email"
            placeholder="user@cars-enjoy.com"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="郵便番号">
          <fg-input
            v-model="form.zipCode"
            width="160"
            placeholder="000-0000"
          ></fg-input>
        </fg-form-item>

        <fg-form-item label="都道府県">
          <fg-select
            v-model="form.prefecturesCode"
            width="160px"
            :items="prefectures"
          ></fg-select>
        </fg-form-item>

        <fg-form-item label="市区町村">
          <fg-input v-model="form.address1" placeholder=""></fg-input>
        </fg-form-item>

        <fg-form-item label="番地など">
          <fg-input v-model="form.address2" placeholder=""></fg-input>
        </fg-form-item>

        <fg-form-item label="建物名・部屋番号など">
          <fg-input v-model="form.address3" placeholder=""></fg-input>
        </fg-form-item>
      </fg-form>
    </WhiteBox>
    <div class="footer-button-wrapper">
      <fg-button width="240px" suffix-icon="arrow-right" @click="handleConfirm"
        >確認</fg-button
      >
      <fg-button width="240px" suffix-icon="arrow-right" white-transparent
        >戻る</fg-button
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WhiteBox from '../../../../common/WhiteBox'
import ColumnTitle from '../../../../common/ColumnTitle'
import { FORM_RULES } from './validate'
import { browserMixin } from '~/mixins/browser'
export default {
  components: {
    ColumnTitle,
    WhiteBox,
  },
  mixins: [browserMixin],
  data() {
    const query = this.$route.query
    return {
      query,
      genders: this.$ui.getBasicData('sex'),
      prefectures: this.$ui.getBasicData('prefectures'),
      form: { storeInCharge: '速太郎天理店' },
      errors: {
        firstName: '',
        lastName: '',
      },
      isSubmitting: false,
      strLength: {},
    }
  },
  computed: {
    ...mapGetters('popup', ['getSaveFlg']),
  },
  watch: {
    form() {
      this.$store.dispatch('popup/setFlg', true)
    },
  },
  mounted() {
    this.addWindowPopstateEvent(
      window.location.href,
      this.clickBrowserSystemButton
    )
  },
  created() {
    // this.handleConfirm()
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
          this.addWindowPopstateEvent(
            window.location.href,
            this.clickBrowserSystemButton
          )
        }
      )
    },
    handleConfirm() {
      this.$store.dispatch('popup/setFlg', false)
      if (this.isSubmitting) return
      this.isSubmitting = true
      const form = {
        ...this.form,
      }
      this.errors = this.$ui.formSyncValidator(FORM_RULES, form)
      if (this.errors.length > 0) {
        this.$alert(
          '必須項目が未入力か、入力データに誤りがあります。エラーを確認してください。'
        )
        this.isSubmitting = false
        return
      }
      for (const property in form) {
        if (form[property] === '') {
          form[property] = null
        }
      }
      this.$ui.setCache('userNewCacheData', this.form)
      this.$router.push(`/customer/regist/new/user/confirm/`)
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
