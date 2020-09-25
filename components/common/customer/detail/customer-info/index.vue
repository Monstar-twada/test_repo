<template>
  <div class="customer-detail-customer-info-wrapper">
    <ColumnTitle title="顧客情報" border>
      <fg-button
        prefix-icon="edit"
        size="mini"
        border
        width="63"
        justify="center"
        @click="handleEdit"
        >編集</fg-button
      >
    </ColumnTitle>
    <fg-row class="customer-profile" gutter="60">
      <fg-col span="16">
        <fg-row class="ma-0">
          <SubTitle sub-title="基本情報" class="mt10 ml20" />
          <fg-col span="12" align-self="start" class="right-border p20 pb-0">
            <TextContent label="住所">
              〒{{ data.zipCode }}<br />{{ data | fmtAddress }}
            </TextContent>
            <TextContent label="性別" :content="data.sex | fmtSex" />
            <TextContent
              label="携帯電話"
              :content="data.cellphoneNumber | fmtHyphen"
            />
            <TextContent
              label="電話番号"
              :content="data.phoneNumber | fmtHyphen"
            />
            <TextContent label="メール" :content="data.email | fmtHyphen" />
            <TextContent label="生年月日" :content="data.birthday | fmtDate" />
            <TextContent label="家族構成">
              <FamilyList :items="data.family"></FamilyList>
            </TextContent>
          </fg-col>
          <fg-col span="12" align-self="start" class="p20 pb-0">
            <TextContent label="勤務先" :content="data | fmtWork" />
            <TextContent label="勤続年数" :content="workingTerm" />
            <TextContent
              label="年収"
              :content="data.annualIncome | fmtHyphen"
            />
            <TextContent label="住宅" :content="houseInfo" />
            <TextContent
              label="免許証"
              :content="licence | fmtHyphen"
              high-light
              :copyable="!!licence"
              @click="clickLicence"
            />
            <TextContent
              label="cars ID "
              :content="data.carsId | fmtHyphen"
              high-light
              flex
            />
            <TextContent label="個人/法人 " :content="privateBusiness" />
          </fg-col>
        </fg-row>
        <fg-row class="ma-0 pb20">
          <SubTitle sub-title="その他の情報" class="mt10 ml20" />
          <fg-col span="12" class="right-border p20 pb-0">
            <TextContent label="ペット" :content="data.pet | fmtHyphen" />
            <TextContent
              label="実家"
              :content="data.parentsHomeAddress | fmtHyphen"
            />
          </fg-col>
          <fg-col span="12" class="p20 pb-0">
            <TextContent label="ドリンク" :content="data.drink | fmtHyphen" />
            <TextContent label="趣味" :content="data.hobby | fmtHyphen" />
          </fg-col>
        </fg-row>
      </fg-col>
      <fg-col span="8" class="pt20">
        <div class="side-customer-profile-wrapper">
          <fg-avatar
            size="80"
            :src="data.facePhoto || '/common/person_default.svg'"
          />
          <dl>
            <dt>
              {{ data | fmtCustomerName }}
              <span style="font-size: 10px;"
                >（{{ data.age | fmtHyphen }}歳）</span
              >
            </dt>
            <dd>{{ data | fmtNameKana }}</dd>
            <dd>
              <h5>担当店舗：{{ data.storeName }}</h5>
            </dd>
          </dl>
        </div>
        <h4 class="mt25 mb5">カーライフ</h4>
        <div class="tag-items">
          <fg-tag
            v-for="(item, i) in carLives"
            :key="i"
            :selected="item.selected"
            :border-color="$colors.border"
            >{{ item.text }}</fg-tag
          >
        </div>
        <h4 class="mt25 mb5">選定ポイント</h4>
        <div class="tag-items">
          <fg-tag
            v-for="(item, i) in selectionPoints"
            :key="i"
            fillet
            :selected="item.selected"
            :border-color="$colors.border"
            >{{ item.text }}</fg-tag
          >
        </div>
      </fg-col>
      <LicenceDialog v-model="licenceVisible" :data="data" />
    </fg-row>
  </div>
</template>
<script>
import LicenceDialog from '../licence-dialog/index'
import SubTitle from '../../common/SubTitle.vue'
import TextContent from '../../common/TextContent.vue'
import ColumnTitle from '../../common/ColumnTitle'
import FamilyList from './FamilyList'
import { customerMixin } from '~/mixins/customer'

export default {
  name: 'CustomerInfo',
  components: {
    SubTitle,
    TextContent,
    ColumnTitle,
    LicenceDialog,
    FamilyList,
  },
  mixins: [customerMixin],
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      licenceVisible: false,
    }
  },
  computed: {
    carLives() {
      const classes = this.$ui.getBasicData('car_life')
      const selectedItems = (this.data.carLives || []).map((item) => {
        return item.carLife
      })
      return classes.map((item) => {
        return {
          ...item,
          selected: selectedItems.includes(item.value),
        }
      })
    },
    selectionPoints() {
      const classes = this.$ui.getBasicData('selection_points')
      const selectedItems = (this.data.selectionPoints || []).map((item) => {
        return item.selectionPoints
      })
      return classes.map((item) => {
        return {
          ...item,
          selected: selectedItems.includes(item.value),
        }
      })
    },
    houseInfo() {
      const classes = this.$ui.getBasicData('residence_type', true)
      const { residenceType, residenceTerm } = this.data
      return [classes[residenceType], residenceTerm + '年'].join('/ ')
    },
    workingTerm() {
      const { workingTerm } = this.data
      return workingTerm ? workingTerm + '年' : '-'
    },
    privateBusiness() {
      const classes = this.$ui.getBasicData('private_business', true)
      const { privateBusiness } = this.data
      return classes[privateBusiness] || '-'
    },
    licence() {
      const { licenseColor, licenseNumber } = this.data
      const classes = this.$ui.getBasicData('license_color', true)
      return [classes[licenseColor], licenseNumber].join(' ')
    },
  },
  methods: {
    /**
     * show licence
     * 免許証
     */
    clickLicence() {
      this.licenceVisible = true
    },
    handleEdit() {
      this.$router.push(
        '/customer/regist/edit?customerCode=' + this.data.customerCode
      )
    },
  },
}
</script>

<style lang="scss">
.customer-detail-customer-info-wrapper {
  .side-customer-profile-wrapper {
    position: relative;
    color: $--color-primary;
    font-weight: normal;
    height: 80px;
    .fg-avatar {
      position: absolute;
      top: 0;
      left: 0;
    }
    dl {
      margin: 0 20px 0 106px;
      dt {
        font-weight: bold;
        font-size: 14px;
      }
      dd {
        font-size: 10px;
      }
    }
  }
  .tag-items {
    margin-top: 8px;
    .fg-tag {
      margin: 0 4px 8px 0;
    }
  }
}
</style>
