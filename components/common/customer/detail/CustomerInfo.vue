<template>
  <div class="customer-detail-customer-info-wrapper">
    <ColumnTitle title="顧客情報" border>
      <fg-button
        prefix-icon="edit"
        size="mini"
        border
        width="63"
        justify="center"
        >編集</fg-button
      >
    </ColumnTitle>
    <v-row class="customer-profile">
      <v-col cols="8">
        <v-row class="ma-0">
          <SubTitle sub-title="基本情報" class="mt10 ml20" />
          <v-col cols="6" align-self="start" class="right-border p20 pb-0">
            <TextContent label="住所">
              〒{{ data.zipCode }}<br />{{ data | fmtAddress }}
            </TextContent>
            <TextContent label="性別" :content="data.sex | fmtHyphen" />
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
              {{ data.family | fmtHyphen }}
            </TextContent>
          </v-col>
          <v-col cols="6" align-self="start" class="p20 pb-0">
            <TextContent label="勤務先" :content="data | fmtWork" />
            <TextContent
              label="勤続年数"
              :content="data.workYear | fmtHyphen"
            />
            <TextContent
              label="年収"
              :content="data.annualIncome | fmtHyphen"
            />
            <TextContent label="住宅" :content="data.house | fmtHyphen" />
            <TextContent
              label="免許証"
              :content="(data.licence || 'ゴールド 839294813493') | fmtHyphen"
              high-light
              :copyable="!!data.licence || true"
              @click="clickLicence"
            />
            <TextContent
              label="cars ID "
              :content="data.carsId | fmtHyphen"
              high-light
              flex
            />
            <TextContent
              label="個人/法人 "
              :content="data.customerType | fmtHyphen"
            />
          </v-col>
        </v-row>
        <v-row class="ma-0 pb20">
          <SubTitle sub-title="その他の情報" class="mt10 ml20" />
          <v-col cols="6" class="right-border p20 pb-0">
            <TextContent label="ペット" :content="data.pet | fmtHyphen" />
            <TextContent label="実家" :content="data.home | fmtHyphen" />
          </v-col>
          <v-col cols="6" class="p20 pb-0">
            <TextContent label="ドリンク" :content="data.drink | fmtHyphen" />
            <TextContent label="趣味" :content="data.hobby | fmtHyphen" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="pt20">
        <div class="side-customer-profile-wrapper">
          <fg-avatar
            size="80"
            :src="
              data.photoKey || require('~/static/common/person_default.svg')
            "
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
              <h5>担当店舗：cars足立</h5>
            </dd>
          </dl>
        </div>
        <h4 class="mt25 mb5">カーライフ</h4>
        <div class="tag-items">
          <fg-tag
            v-for="(item, i) in carLife"
            :key="i"
            fillet
            :border="!item.active"
            >{{ item.text }}</fg-tag
          >
        </div>
        <h4 class="mt25 mb5">選定ポイント</h4>
        <div class="tag-items">
          <fg-tag
            v-for="(item, i) in selectionPoints"
            :key="i"
            fillet
            :border="!item.active"
            >{{ item.text }}</fg-tag
          >
        </div>
      </v-col>
      <LicenceDialog v-model="licenceVisible" :data="licenceInfo" />
    </v-row>
  </div>
</template>
<script>
import LicenceDialog from './licence-dialog/index'
import { carLife, selectionPoints } from './base'
import SubTitle from '~/components/common/customer/common/SubTitle.vue'
import TextContent from '~/components/common/customer/common/TextContent.vue'
import ColumnTitle from '~/components/common/customer/common/ColumnTitle'
import {
  fmtCustomerName,
  fmtHyphen,
  fmtDate,
  fmtAddress,
  fmtNameKana,
  fmtWork,
} from '~/components/common/customer/common/helper'

export default {
  name: 'CustomerInfo',
  filters: {
    fmtHyphen,
    fmtWork,
    fmtDate,
    fmtAddress,
    fmtNameKana,
    fmtCustomerName,
  },
  components: {
    SubTitle,
    TextContent,
    ColumnTitle,
    LicenceDialog,
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    // const family = [
    //   {
    //     title: '配偶者',
    //     list: ['米田直子（30歳）'],
    //     link: true,
    //   },
    //   {
    //     title: '子供',
    //     list: ['米田 拓実（11歳）', '米田 咲（8歳）', '米田あや（2歳）'],
    //     link: false,
    //   },
    // ]
    // let familyContent = '<div>'
    // family.forEach((item) => {
    //   familyContent += `<dl style="display:flex;"><dt style="width: 40px">${item.title}</dt><dd class="ml10">`
    //   item.list.forEach((child) => {
    //     familyContent += `<div style="display: flex;align-items: center" class="${
    //       item.link ? 'high-light' : ''
    //     }"><img class="mr5" src="/customer/profile-edit.svg" width="16" />${child}${
    //       item.link
    //         ? '<a href=""><img src="/customer/link.svg" width="10"></a>'
    //         : ''
    //     }</div>`
    //   })
    //   familyContent += '</dd></dl>'
    // })
    // familyContent += '</div>'
    return {
      headers: [
        {
          text: '取引種別',
          width: 100,
        },
        { text: '回答日時' },
        { text: '店舗' },
      ],
      licenceVisible: false,
      currentQrItem: {},
      carLife,
      selectionPoints,
    }
  },
  computed: {
    licenceInfo() {
      return {}
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
  },
}
</script>

<style lang="scss">
.customer-detail-customer-info-wrapper {
  .side-customer-profile-wrapper {
    position: relative;
    color: $blue-200;
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
      box-sizing: content-box;
      border: 1px solid $gray-100;
      &.__border {
        color: #748eb7;
      }
    }
  }
}
</style>
