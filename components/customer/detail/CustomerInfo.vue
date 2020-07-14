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
            <HtmlContent
              label="住所"
              content="〒150-0002<br />東京都渋谷区渋谷2丁目"
              :customheight="30"
            />
            <TextContent label="性別" content="男性" />
            <TextContent label="携帯電話" content="080-1234-1234" />
            <TextContent label="電話番号" content="03-1234-1234" />
            <TextContent label="メール" content="myoneda@gmail.com" />
            <TextContent label="生年月日" content="昭和63年1月1日" />
            <HtmlContent label="家族構成 " :content="family" />
          </v-col>
          <v-col cols="6" align-self="start" class="p20 pb-0">
            <TextContent
              label="勤務先"
              content="カーズ株式会社(03-1234-1234)"
            />
            <TextContent label="勤続年数" content="3年" />
            <TextContent label="年収" content="500万円" />
            <TextContent label="住宅" content="持家（家族所有）11年" />
            <TextContent
              label="免許証"
              content="ゴールド 839294813493"
              high-light
              copyable
            />
            <TextContent
              label="銀行口座"
              content="みずほ銀行"
              high-light
              copyable
            />
            <TextContent label="cars ID " content="0123456789" high-light flex>
              <RoundBorderButton
                text="招待"
                icon="invitation"
                class="ml5"
                @click="invitationVisible = true"
              />
            </TextContent>
            <TextContent label="個人/法人 " content="個人" />
            <TextContent
              label="その他システムID "
              content="VerticeID : 0123456789"
            />
          </v-col>
        </v-row>
        <v-row class="ma-0 pb20">
          <SubTitle sub-title="その他の情報" class="mt10 ml20" />
          <v-col cols="6" class="right-border p20 pb-0">
            <TextContent label="ペット" content="猫 タマ（2才）" />
            <TextContent label="実家" content="鹿児島" />
          </v-col>
          <v-col cols="6" class="p20 pb-0">
            <TextContent label="ドリンク" content="コーヒー(ブラック)" />
            <TextContent label="趣味" content="ドライブ" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="pt20">
        <v-row no-gutters>
          <v-col cols="3">
            <v-avatar size="80" class="customer-profile__image">
              <v-img :src="require('~/static/customer/profile.png')"></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="9" class="profile__info">
            <dl class="ml25">
              <dt>米田 道春 <span style="font-size: 10px;">（31歳）</span></dt>
              <dd>ヨネダ ミチハル</dd>
              <dd class="pt10">ユーザー名:miche_yone</dd>
              <dd>ユーザーID:6900245691</dd>
            </dl>
          </v-col>
        </v-row>
        <div class="questionnaire mr20">
          <h3 class="mt30 mb10">アンケート情報</h3>
          <v-data-table
            :headers="headers"
            :items="itemList"
            hide-default-footer
            @click:row="handleClickRow"
          >
          </v-data-table>
        </div>
      </v-col>
      <QuestionnaireResultDialog v-model="qrVisible" />
      <InvitationDialog v-model="invitationVisible" />
    </v-row>
  </div>
</template>
<script>
import QuestionnaireResultDialog from './questionnaire-results-dialog/index'
import SubTitle from '~/components/customer/SubTitle.vue'
import TextContent from '~/components/customer/TextContent.vue'
import HtmlContent from '~/components/customer/HtmlContent.vue'
import RoundBorderButton from '~/components/customer/detail/button/RoundBorderButton'
import ColumnTitle from '~/components/customer/ColumnTitle'
import InvitationDialog from '~/components/customer/detail/invitation-dialog/index'
export default {
  name: 'CustomerInfo',
  components: {
    SubTitle,
    TextContent,
    HtmlContent,
    QuestionnaireResultDialog,
    RoundBorderButton,
    ColumnTitle,
    InvitationDialog,
  },
  data() {
    const family = [
      {
        title: '配偶者',
        list: ['米田直子（30歳）'],
        link: true,
      },
      {
        title: '子供',
        list: ['米田 拓実（11歳）', '米田 咲（8歳）', '米田あや（2歳）'],
        link: false,
      },
    ]
    let familyContent = '<div>'
    family.forEach((item) => {
      familyContent += `<dl style="display:flex;"><dt style="width: 40px">${item.title}</dt><dd class="ml10">`
      item.list.forEach((child) => {
        familyContent += `<div style="display: flex;align-items: center" class="${
          item.link ? 'high-light' : ''
        }"><img class="mr5" src="/customer/profile-edit.svg" width="16" />${child}${
          item.link
            ? '<a href=""><img src="/customer/link.svg" width="10"></a>'
            : ''
        }</div>`
      })
      familyContent += '</dd></dl>'
    })
    familyContent += '</div>'
    return {
      headers: [
        {
          text: '取引種別',
          value: 'question_type',
          align: 'center',
          sortable: false,
        },
        { text: '回答日時', value: 'date', align: 'center', sortable: false },
        { text: '店舗', value: 'shop', align: 'center', sortable: false },
      ],
      itemList: [
        {
          id: 1,
          question_type: '車検',
          date: '2020/05/25 9:00',
          shop: 'cars足立',
        },
        {
          id: 2,
          question_type: '車検',
          date: '2020/05/25 9:00',
          shop: 'cars足立',
        },
        {
          id: 3,
          question_type: '車検',
          date: '2020/05/25 9:00',
          shop: 'cars足立',
        },
        {
          id: 4,
          question_type: '車検',
          date: '2020/05/25 9:00',
          shop: 'cars足立',
        },
      ],
      family: familyContent,
      qrVisible: false,
      invitationVisible: false,
    }
  },
  methods: {
    handleClickRow() {
      this.qrVisible = true
    },
  },
}
</script>

<style lang="scss">
.customer-detail-customer-info-wrapper {
  .questionnaire {
    font-size: 12px;
    color: $blue-200;
    .v-data-table {
      table {
        border: 1px $gray-100 solid;
        border-radius: 0 0 3px 3px;
        thead {
          tr {
            th {
              height: 40px !important;
              background: $white-100;
              color: $blue-200 !important;
              font-weight: normal;
            }
          }
        }
        tbody {
          tr {
            td {
              font-size: 12px;
              height: 40px !important;
              color: $blue-200 !important;
            }
          }
        }
      }
    }
    .theme--light.v-data-table table tbody tr td {
      font-size: 12px;
      color: $blue-100 !important;
      cursor: pointer;
    }
  }
  .profile__info {
    color: $blue-200;
    font-weight: normal;
    dt {
      font-weight: bold;
      font-size: 14px;
    }
    dd {
      font-size: 10px;
    }
  }

  .family {
    width: 200px;
    background: #888;
  }
}
</style>
