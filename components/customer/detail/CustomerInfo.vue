<template>
  <div class="customer-detail-customer-info-wrapper">
    <ColumnTitle title="顧客情報" border>
      <RoundBorderButton />
    </ColumnTitle>
    <v-row class="customer-profile">
      <v-col cols="8">
        <v-row class="ma-0">
          <SubTitle sub-title="基本情報" class="mt10 ml20" />
          <v-col cols="6" align-self="start" class="right-border p20 pb-0">
            <TextContent label="住所">
              〒{{ data.zipCode }}<br />{{
                [data.prefecture, data.city, data.address1, data.address2].join(
                  ''
                )
              }}
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
            <TextContent
              label="生年月日"
              :content="data.birthday | fmtHyphen"
            />
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
              :content="data.licence | fmtHyphen"
              high-light
              :copyable="!!data.licence"
            />
            <TextContent
              label="銀行口座"
              :content="data.bank | fmtHyphen"
              high-light
              :copyable="!!data.bank"
            />
            <TextContent
              label="cars ID "
              :content="data.carsId | fmtHyphen"
              high-light
              flex
            >
              <RoundBorderButton
                v-if="data.carsId"
                text="招待"
                icon="invitation"
                class="ml5"
                @click="invitationVisible = true"
              />
            </TextContent>
            <TextContent
              label="個人/法人 "
              :content="data.customerType | fmtHyphen"
            />
            <TextContent label="その他" sub-label="システムID">
              <div v-if="data.otherSystemId">
                車両管理番号: {{ data.otherSystemId }}
              </div>
            </TextContent>
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
          <v-avatar size="80">
            <v-img
              :src="
                data.photoKey ||
                require('~/static/breadcrumbs/person_default.svg')
              "
            ></v-img>
          </v-avatar>
          <dl>
            <dt>
              {{ fmtCustomerName(data) }}
              <span style="font-size: 10px;"
                >（{{ data.age | fmtHyphen }}歳）</span
              >
            </dt>
            <dd>{{ [data.firstNameKana, data.lastNameKana].join(' ') }}</dd>
            <dd class="pt10">ユーザー名:{{ data.userName | fmtHyphen }}</dd>
            <dd>ユーザーID:{{ data.userId | fmtHyphen }}</dd>
          </dl>
        </div>
        <div class="questionnaire-wrapper mr20">
          <h3 class="mt30 mb10">アンケート情報</h3>
          <CustomerTable
            :headers="headers"
            head-background
            head-font-weight-normal
            border
            size="small"
            body-height="240px"
            bottom-rounded
            :is-empty="enqueteList.length === 0"
          >
            <tr
              v-for="(item, i) in enqueteList"
              :key="i"
              class="high-light cur"
              @click="handleClickRow(item)"
            >
              <td>{{ item.transactionType }}</td>
              <td>{{ item.inputDate }}</td>
              <td>{{ item.storeName }}</td>
            </tr>
          </CustomerTable>
        </div>
      </v-col>
      <QuestionnaireResultDialog v-model="qrVisible" :item="currentQrItem" />
      <InvitationDialog v-model="invitationVisible" />
    </v-row>
  </div>
</template>
<script>
import QuestionnaireResultDialog from './questionnaire-results-dialog/index'
import SubTitle from '~/components/customer/SubTitle.vue'
import TextContent from '~/components/customer/TextContent.vue'
import RoundBorderButton from '~/components/customer/detail/button/RoundBorderButton'
import ColumnTitle from '~/components/customer/ColumnTitle'
import InvitationDialog from '~/components/customer/detail/invitation-dialog/index'
import { fmtCustomerName, fmtHyphen } from '~/components/customer/helper'
import CustomerTable from '~/components/customer/custom-table/index'
export default {
  name: 'CustomerInfo',
  filters: {
    fmtHyphen,
    fmtWork(item) {
      const arr = []
      if (item.workName) {
        arr.push(item.workName)
      }
      if (item.workPhoneNumber) {
        arr.push(`(${item.workPhoneNumber})`)
      }
      return fmtHyphen(arr.join(''))
    },
  },
  components: {
    SubTitle,
    TextContent,
    QuestionnaireResultDialog,
    RoundBorderButton,
    ColumnTitle,
    InvitationDialog,
    CustomerTable,
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
        },
        { text: '回答日時' },
        { text: '店舗' },
      ],
      qrVisible: false,
      invitationVisible: false,
      currentQrItem: {},
    }
  },
  computed: {
    // アンケート情報
    enqueteList() {
      const data = this.data.enquete || {}
      return data.results || []
    },
  },
  methods: {
    handleClickRow(item) {
      this.currentQrItem = item
      this.qrVisible = true
    },
    fmtCustomerName,
  },
}
</script>

<style lang="scss">
.customer-detail-customer-info-wrapper {
  .side-customer-profile-wrapper {
    position: relative;
    color: $blue-200;
    font-weight: normal;
    .v-avatar {
      position: absolute;
      top: 0;
      left: 0;
    }
    dl {
      margin: 0 20px 0 98px;
      dt {
        font-weight: bold;
        font-size: 14px;
      }
      dd {
        font-size: 10px;
      }
    }
  }
  .questionnaire-wrapper {
    color: $blue-200;
  }
}
</style>
