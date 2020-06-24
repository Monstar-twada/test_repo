<template>
  <v-row align="top" justify="center" class="customer-profile ma-0 pa-0">
    <div class="title">
      <h2>顧客情報</h2>
      <p><v-img :src="require('~/static/customer/btn-edit.svg')" /></p>
    </div>
    <v-col cols="8" class="pl20 pr20">
      <v-row align="top" justify="center" class="ma-0">
        <SubTitle sub-title="基本情報" class="mt10" />
        <v-col cols="6" align-self="start" class="pa-0">
          <HtmlContent
            label="住所"
            content="〒150-0002<br />東京都渋谷区渋谷2丁目"
            :customheight="30"
          />
          <TextContent label="性別" content="男性" />
          <TextContent label="携帯電話" content="080-1234-1234" />
          <TextContent label="電話番号" content="03-1234-1234" />
          <TextContent label="メール" content="080-1234-1234" />
          <TextContent label="生年月日" content="昭和63年1月1日" />
          <HtmlContent label="家族構成 " :content="family" />
        </v-col>
        <v-col cols="6" align-self="start" class="pa-0">
          <TextContent label="勤務先" content="カーズ株式会社(03-1234-1234)" />
          <TextContent label="勤続年数" content="3年" />
          <TextContent label="年収" content="500万円" />
          <TextContent label="住宅" content="持家（家族所有）11年" />
          <TextContent label="免許証" content="ゴールド 839294813493" />
          <TextContent label="銀行口座" content="みずほ銀行" />
          <HtmlContent
            label="cars ID "
            content='0123456789<img class="d-inline-block" src="/customer/mail.svg" width="63" height="17" />'
          />
          <TextContent label="個人/法人 " content="個人" />
        </v-col>
      </v-row>
      <v-row align="top" justify="center" class="ma-0">
        <SubTitle sub-title="その他の情報" class="mt10" />
        <v-col cols="6" class="pa-0">
          <TextContent label="ペット" content="猫 タマ（2才）" />
          <TextContent label="実家" content="鹿児島" />
        </v-col>
        <v-col cols="6" class="pa-0">
          <TextContent label="ドリンク" content="コーヒー(ブラック)" />
          <TextContent label="趣味" content="ドライブ" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="4">
      <v-row align="center" justify="center" class="">
        <v-col cols="3">
          <v-avatar size="80" class="customer-profile__image">
            <v-img :src="require('~/static/customer/profile.png')"></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="9" class="profile__info">
          <v-col cols="12">
            <h3>米田 道春 <span>（31歳）</span></h3>
            <h4>ヨネダ ミチハル</h4>
            <h4 class="pt10">ユーザー名:miche_yone</h4>
            <h4>ユーザーID:6900245691</h4>
          </v-col>
        </v-col>
      </v-row>
      <v-row justify="left" class="questionary">
        <v-data-table
          :headers="headers"
          :items="itemlist"
          hide-default-footer
          class="itemlistTable"
        >
        </v-data-table>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import SubTitle from '~/components/customer/SubTitle.vue'
import TextContent from '~/components/customer/TextContent.vue'
import HtmlContent from '~/components/customer/HtmlContent.vue'
export default {
  name: 'CustomerInfo',
  components: {
    SubTitle,
    TextContent,
    HtmlContent,
  },
  data: () => ({
    headers: [
      { text: '取引種別', value: 'question_type', align: 'center' },
      { text: '回答日時', value: 'date', align: 'center' },
      { text: '店舗', value: 'shop', align: 'center' },
    ],
    itemlist: [
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
    family:
      '<div>' +
      '<dl style="display:flex;"><dt style="width: 40px">配偶者</dt><dd class="ml10"><img class="mr5" src="/customer/profile-edit.svg" width="16" />米田直子（30歳）<a href=""><img src="/customer/link.svg" width="10"></a> </dd></dl> ' +
      '<dl style="display:flex;"><dt style="width: 40px">子供</dt><dd class="ml10">米田 拓実（11歳）<br />米田 咲（8歳）<br />米田あや（2歳）</dd></dl></div>',
  }),
}
</script>

<style lang="scss">
.theme--light.v-data-table .v-data-table__wrapper table tbody tr td {
  font-size: 12px !important;
}
.v-data-table {
  &__wrapper {
    table {
      tbody {
        tr {
          font-size: 12px;
          height: 40px !important;
          color: $blue-500;
          td {
            height: 50px !important;
            margin: 10px 0;
            //border-right: 1px $gray-100 solid;
          }
        }
        tr:nth-child(even) {
          background-color: $white-100;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.customer-profile {
  margin-left: 0 !important;
  .title {
    width: 100%;
    height: 60px;
    border-bottom: 1px $gray-100 solid;
    color: $blue-200;

    h2 {
      float: left;
      line-height: 20px;
      margin: 20px auto 20px 20px;
    }

    p {
      float: right;
      margin: 20px;

      img {
        width: 60px;
      }
    }
  }
}
.profile__info {
  color: $blue-200;
  font-weight: normal;
  h3 {
    font-weight: bold;
  }
  h4 {
    font-weight: normal;
  }
}
.questionary {
  font-size: 12px;
  color: $blue-200;
}

.family {
  width: 200px;
  background: #888;
}
</style>
