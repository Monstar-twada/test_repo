<template>
  <div class="customer-regist-user-confirm-wrapper">
    <WhiteBox>
      <ColumnTitle>
        <template v-slot:title>
          <h3>基本情報</h3>
        </template>
      </ColumnTitle>
      <fg-form :label-width="labelWidth" split-vertical-line item-spacing="0">
        <fg-form-item label="お客様の写真">
          <fg-image-processor
            width="80"
            height="80"
            :url="form.facePhoto"
            readonly
          ></fg-image-processor>
        </fg-form-item>

        <fg-form-item label="個人/法人">
          {{ customerType }}
        </fg-form-item>

        <fg-form-item label="氏名">
          {{ form | fmtCustomerName }}
        </fg-form-item>

        <fg-form-item label="フリガナ">
          {{ form | fmtNameKana }}
        </fg-form-item>

        <fg-form-item label="性別" class="mt40">
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

        <fg-form-item label="生年月日">
          {{ form.birthday }}
        </fg-form-item>

        <fg-form-item label="勤務先">
          {{ form.workName }}({{ form.workPhoneNumber }})
        </fg-form-item>

        <fg-form-item label="勤続年数">
          {{ form.workYear }}年（2010年5月2日 入社）
        </fg-form-item>

        <fg-form-item label="年収"> {{ form.annualIncome }}万円 </fg-form-item>

        <fg-form-item label="住宅（入居日）">
          持家（家族所有）/ 11年（2010年1月30日 入居）
        </fg-form-item>

        <fg-form-item label="免許証">
          <fg-image-processor
            url=""
            icon="license-front"
            readonly
          ></fg-image-processor>
          <fg-image-processor
            url=""
            icon="license-back"
            readonly
          ></fg-image-processor>
        </fg-form-item>

        <fg-form-item label="免許証の色">
          {{ licenseColor }}
        </fg-form-item>

        <fg-form-item label="免許証番号">
          {{ form.licence }}
        </fg-form-item>

        <fg-form-item label="家族構成" class="plus-row-wrapper">
          <fg-row gutter="15" overflow-hide>
            <fg-col span="3">配偶者</fg-col>
            <fg-col span="20">
              <div>米田直子（30歳） 1990/5/20生まれ</div>
            </fg-col>
            <fg-col span="3">子供</fg-col>
            <fg-col span="20">
              <div>米田 拓実（11歳） 2009/1/14生まれ</div>
              <div>米田 拓実（11歳） 2009/1/14生まれ</div>
              <div>米田 拓実（11歳） 2009/1/14生まれ</div>
              <div>米田 拓実（11歳） 2009/1/14生まれ</div>
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
      <fg-form :label-width="labelWidth" split-vertical-line item-spacing="0">
        <fg-form-item label="カーライフ">
          {{ carLifeContent }}
        </fg-form-item>
        <fg-form-item label="選定ポイント">
          {{ selectionPointsContent }}
        </fg-form-item>
      </fg-form>
    </WhiteBox>

    <WhiteBox class="mt30">
      <ColumnTitle>
        <template v-slot:title>
          <h3>その他の情報</h3>
        </template>
      </ColumnTitle>
      <fg-form :label-width="labelWidth" split-vertical-line item-spacing="0">
        <fg-form-item label="ペット">
          {{ form.pet }}
        </fg-form-item>

        <fg-form-item label="実家">
          {{ form.parentsHomeAddress }}
        </fg-form-item>

        <fg-form-item label="ドリンク">
          {{ form.drink }}
        </fg-form-item>

        <fg-form-item label="趣味">
          {{ form.hobby }}
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
import WhiteBox from '~/components/common/customer/common/WhiteBox';
import ColumnTitle from '~/components/common/customer/common/ColumnTitle';

import { customerMixin } from '~/mixins/customer';
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
      form: {},
    };
  },
  computed: {
    customerType() {
      const data = this.$ui.getBasicData('private_business', true) || {};
      return data[this.form.privateBusiness];
    },
    gender() {
      const data = this.$ui.getBasicData('sex', true) || {};
      return data[this.form.sex];
    },
    prefecture() {
      const data = this.$ui.getBasicData('prefectures', true) || {};
      return data[this.form.prefecturesCode];
    },
    residenceType() {
      const data = this.$ui.getBasicData('residence_type', true) || {};
      return data[this.form.residenceType];
    },
    licenseColor() {
      const data = this.$ui.getBasicData('license_color', true) || {};
      return data[this.form.licenseColor];
    },
    carLifeContent() {
      const data = this.$ui.getBasicData('car_life', true);
      const formData = this.form.carLives || [];
      return formData.map((item) => data[item.carLife]).join('、');
    },
    selectionPointsContent() {
      const data = this.$ui.getBasicData('selection_points', true);
      const formData = this.form.selectionPoints || [];
      return formData.map((item) => data[item.selectionPoints]).join('、');
    },
  },
  methods: {
    goBack() {
      this.$router.push(`/customer/regist/edit/?id=${this.query.id}&edit=1`);
    },
  },
};
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
