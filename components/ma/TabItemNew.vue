<template>
  <div class="tab-all">
    <v-row class="ma-0 tab-all__item" align="start">
      <v-col cols="1" class="py-0 my-0">
        <SwitchButton />
      </v-col>
      <v-col cols="11" class="pa-0 ma-0">
        <Title
          title="ディスプレイ広告"
          sub-title1="初期費用¥ 20,000"
          sub-title2="月額¥30,000"
          content="広告を見てタップした顧客が遷移するWebサイトをお持ちでない方のためにサイト構築と広告素材作成を含むプランです。"
          start-date="2020/02/19 14:00"
          target="既存顧客"
          conditions="なし"
        />
        <v-row class="ma-0">
          <v-col cols="7" class="tab-all__item-data">
            <DataColSmall
              :reach="displayAD.reach"
              :contacts="displayAD.contacts"
              :order="displayAD.order"
            />
            <p>
              リーチ数は連絡を行った人数、コンタクト数はSMS開封数＋通話できた方です。<br />（DMからの反応は未集計）
            </p>
          </v-col>
          <v-col cols="5">
            <v-img
              :src="require('~/static/ma/display.png')"
              :max-width="280"
              :max-height="140"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="ma-0 tab-all__item" align="start">
      <v-col cols="1" class="py-0 my-0">
        <SwitchButton />
      </v-col>
      <v-col cols="11" class="pa-0 ma-0">
        <Title
          title="リスティング広告"
          sub-title1="初期費用¥ 20,000"
          sub-title2="月額¥30,000"
          content="広告を見てタップした顧客が遷移するWebサイトをお持ちでない方のためにサイト構築と広告素材作成を含むプランです。"
          start-date="2020/02/19 14:00"
          target="既存顧客"
          conditions="なし"
        />
        <v-row class="ma-0">
          <v-col cols="7" class="tab-all__item-data">
            <DataColSmall
              :reach="listingAD.reach"
              :contacts="listingAD.contacts"
              :order="listingAD.order"
            />
            <p>
              リーチ数は連絡を行った人数、コンタクト数はSMS開封数＋通話できた方です。<br />（DMからの反応は未集計）
            </p>
          </v-col>
          <v-col cols="5">
            <v-col cols="5">
              <v-img
                :src="require('~/static/ma/google.png')"
                :max-width="240"
                :max-height="186"
              />
            </v-col>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="ma-0 tab-all__item" align="start">
      <v-col cols="1" class="py-0 my-0">
        <SwitchButton />
      </v-col>
      <v-col cols="11" class="pa-0 ma-0">
        <Title
          title="Facebook広告LP"
          sub-title1="初期費用¥ 20,000"
          sub-title2="月額¥30,000"
          content="広告を見てタップした顧客が遷移するWebサイトをお持ちでない方のためにサイト構築と広告素材作成を含むプランです。"
          start-date="2020/02/19 14:00"
          target="既存顧客"
          conditions="なし"
        />
        <v-row class="ma-0">
          <v-col cols="7" class="tab-all__item-data">
            <DataColSmall
              :reach="facebookAD.reach"
              :contacts="facebookAD.contacts"
              :order="facebookAD.order"
            />
            <p>
              リーチ数は連絡を行った人数、コンタクト数はSMS開封数＋通話できた方です。<br />（DMからの反応は未集計）
            </p>
          </v-col>
          <v-col cols="5">
            <v-img
              :src="require('~/static/ma/facebook.png')"
              :max-width="240"
              :max-height="126"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="ma-0 tab-all__item" align="start">
      <v-col cols="1" class="py-0 my-0">
        <SwitchButton />
      </v-col>
      <v-col cols="11" class="pa-0 ma-0">
        <Title
          title="Instagram広告LP"
          sub-title1="初期費用¥ 20,000"
          sub-title2="月額¥30,000"
          content="広告を見てタップした顧客が遷移するWebサイトをお持ちでない方のためにサイト構築と広告素材作成を含むプランです。"
          start-date="2020/02/19 14:00"
          target="既存顧客"
          conditions="なし"
        />
        <v-row class="ma-0">
          <v-col cols="7" class="tab-all__item-data">
            <DataColSmall
              :reach="instagramAD.reach"
              :contacts="instagramAD.contacts"
              :order="instagramAD.order"
            />
            <p>
              リーチ数は連絡を行った人数、コンタクト数はSMS開封数＋通話できた方です。<br />（DMからの反応は未集計）
            </p>
          </v-col>
          <v-col cols="5">
            <v-img
              :src="require('~/static/ma/instagram.png')"
              :max-width="280"
              :max-height="140"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Title from '~/components/ma/Title.vue'
import DataColSmall from '~/components/ma/DataColSmall.vue'
import SwitchButton from '~/components/ma/SwitchButton.vue'
export default {
  components: {
    Title,
    DataColSmall,
    SwitchButton,
  },
  data() {
    return {
      vehicleInspection: {
        reach: {
          value: 1034,
          isUp: true,
          rate: '5.2',
        },
        contacts: {
          value: 707,
          isUp: true,
          rate: '3.3',
        },
        order: {
          value: 198,
          isUp: true,
          rate: '2.3',
        },
      },
      sixMonthInspection: {
        reach: {
          value: 825,
          isUp: true,
          rate: '4.1',
        },
        contacts: {
          value: 580,
          isUp: true,
          rate: '2.6',
        },
        order: {
          value: 133,
          isUp: true,
          rate: '1.1',
        },
      },
      instagramAD: {
        reach: {
          value: 0,
          isUp: true,
          rate: '0',
        },
        contacts: {
          value: 0,
          isUp: true,
          rate: '0',
        },
        order: {
          value: 0,
          isUp: true,
          rate: '0',
        },
      },
      facebookAD: {
        reach: {
          value: 573071,
          isUp: false,
          rate: '14.4',
        },
        contacts: {
          value: 1386,
          isUp: false,
          rate: '14.2',
        },
        order: {
          value: 22,
          isUp: false,
          rate: '45.5',
        },
      },
      displayAD: {
        reach: {
          value: 2313810,
          isUp: false,
          rate: '18.4',
        },
        contacts: {
          value: 5298,
          isUp: false,
          rate: '13.1',
        },
        order: {
          value: 26,
          isUp: false,
          rate: '3.6',
        },
      },
      listingAD: {
        reach: {
          value: 7834,
          isUp: true,
          rate: '29.2',
        },
        contacts: {
          value: 814,
          isUp: true,
          rate: '26.0',
        },
        order: {
          value: 26,
          isUp: true,
          rate: '55.8',
        },
      },
    }
  },
}
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.tab-all__item {
  padding: 30px;
  border-bottom: 1px solid $gray-100;

  &-data {
    p {
      font-size: 12px;
      color: $blue-200;
      margin: 15px 0;
    }
  }
}
</style>
