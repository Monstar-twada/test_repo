<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="send.svg"
      :page="page"
      icon-width="30"
    />
    <div class="context">
      <h2>お客様の情報を入力してください。</h2>
      <fg-form
        ref="form"
        :model="form"
        label-width="150px"
        class="context-form"
      >
        <fg-form-item label="氏名">
          <fg-row gutter="20" type="flex">
            <fg-col span="12">
              <fg-input
                v-model="form.lastName"
                width="210px"
                placeholder="姓"
              ></fg-input>
            </fg-col>
            <fg-col span="12">
              <fg-input
                v-model="form.firstName"
                width="210px"
                placeholder="名"
              ></fg-input>
            </fg-col>
          </fg-row>
        </fg-form-item>

        <fg-form-item label="フリカナ">
          <fg-row gutter="20" type="flex">
            <fg-col span="12">
              <fg-input
                v-model="form.lastName"
                width="210px"
                placeholder="セイ"
              ></fg-input>
            </fg-col>
            <fg-col span="12">
              <fg-input
                v-model="form.firstName"
                width="210px"
                placeholder="メイ"
              ></fg-input>
            </fg-col>
          </fg-row>
        </fg-form-item>

        <fg-form-item label="生年月日">
          <fg-calendar
            v-model="form.birthday"
            width="160px"
            writable
          ></fg-calendar>
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
      </fg-form>
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
    }
  },
}
</script>
<style lang="scss" scoped>
.context {
  width: 1000px;
  height: 850px;
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
</style>
