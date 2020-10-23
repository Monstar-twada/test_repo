<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="send.svg"
      :page="page"
      icon-width="30"
    />
    <div class="context">
      <h2>車両情報を入力してください</h2>
      <fg-form
        ref="form"
        :model="form"
        label-width="150px"
        class="context-form"
      >
        <fg-form-item label="メーカー">
          <fg-select
            v-model="form.maker"
            :placeholder="form.maker"
            :items="years"
            width="440px"
          ></fg-select>
        </fg-form-item>

        <fg-form-item label="車種">
          <fg-select
            v-model="form.maker"
            :placeholder="form.maker"
            :items="years"
            width="440px"
          ></fg-select>
        </fg-form-item>

        <fg-form-item label="グレード">
          <fg-input v-model="form.cellphoneNumber"></fg-input>
        </fg-form-item>

        <fg-form-item label="電話番号">
          <fg-input v-model="form.phoneNumber"></fg-input>
        </fg-form-item>

        <fg-form-item label="ナンバー">
          <div class="car-number">
            <fg-input
              v-model="form.plateCity"
              width="110px"
              placeholder="品川"
            ></fg-input>
            <fg-input
              v-model="form.plateNumber"
              width="110px"
              placeholder="300"
            ></fg-input>
            <fg-input
              v-model="form.plateLetter"
              width="80px"
              placeholder="あ"
            ></fg-input>
            <fg-input
              v-model="form.plateYear"
              width="110px"
              placeholder="1234"
            ></fg-input>
          </div>
        </fg-form-item>

        <fg-form-item label="初度登録年月">
          <fg-calendar
            v-model="form.birthday"
            width="160px"
            writable
          ></fg-calendar>
        </fg-form-item>

        <fg-form-item label="登録年月日">
          <fg-calendar
            v-model="form.birthday"
            width="160px"
            writable
          ></fg-calendar>
        </fg-form-item>

        <fg-form-item label="車検満了日">
          <fg-calendar
            v-model="form.birthday"
            width="160px"
            writable
          ></fg-calendar>
        </fg-form-item>
      </fg-form>
      <div class="form-button-wrapper">
        <fg-button
          suffix-icon="arrow-right"
          type="primary"
          border
          bold
          width="240px"
          >車両なし</fg-button
        >
      </div>
    </div>
    <div class="footer-button-wrapper">
      <fg-button suffix-icon="arrow-right" border bold width="240px"
        >次へ</fg-button
      >
      <fg-button
        suffix-icon="arrow-right"
        white-transparent
        round
        bold
        width="240px"
        >戻る</fg-button
      >
    </div>
  </div>
</template>
<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue'
export default {
  components: {
    Breadcrumbs,
  },
  props: {
    form: {
      type: Object,
      default: () => {
        return {
          lastName: '',
          firstName: '',
        }
      },
    },
  },
  data() {
    return {
      page: '送客',
      breadcrumbs: [
        {
          text: '送客',
          href: '',
        },
        {
          text: '送客依頼フォーム',
          href: '',
        },
      ],
      genders: this.$ui.getBasicData('sex'),
      years: ['1999'],
    }
  },
}
</script>
<style lang="scss" scoped>
.context {
  width: 1000px;
  height: 700px;
  margin: 0 auto;
  background: $--color-white;
  border-radius: 6px;
  color: $--color-primary;

  h2 {
    width: 100%;
    height: 54px;
    line-height: 54px;
    border-bottom: 1px $--color-border solid;
    padding-left: 20px;
  }

  &-form {
    width: 60%;
    margin: 40px auto 0;
  }

  .car-number {
    display: flex;
    justify-content: space-around;
  }
}
.footer-button-wrapper,
.form-button-wrapper {
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
</style>
