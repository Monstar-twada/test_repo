<template>
  <div class="tab-all">
    <v-row class="ma-0 tab-all__item" align="start">
      <v-col cols="1" class="py-0 my-0">
        <SwitchButton />
      </v-col>
      <v-col cols="11" class="pa-0">
        <Title
          title="車検"
          sub-title1="¥100/顧客"
          content="既存顧客に対して車検のお知らせをいたします。<br />車検３ヶ月前から以下のスケジュールで各種連絡を行います。"
          start-date="2020/07/10 14:00"
          target="既存顧客"
          conditions="なし"
          :select-item="list1"
          is-select-comp
        />
        <v-row class="ma-0" justify="start">
          <v-col cols="7" class="tab-all__item-data">
            <DataColSmall
              :reach="vehicleInspection.reach"
              :contacts="vehicleInspection.contacts"
              :order="vehicleInspection.order"
            />
            <p>
              リーチ数は連絡を行った人数、コンタクト数はSMS開封数＋通話できた方です。<br />（DMからの反応は未集計）
            </p>
          </v-col>
          <v-col cols="5">
            <v-row align="center" justify="start" class="flex-column">
              <TableCalendar />
              <nuxt-link to="/ma/list" class="mt20">
                <v-img
                  :src="require('./img/list.svg')"
                  :max-width="120"
                  :max-height="30"
                />
              </nuxt-link>
            </v-row>
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
          title="6ヶ月点検 "
          sub-title1="¥100/顧客"
          content="既存顧客に対して点検のお知らせをいたします。<br />点検3ヶ月前から以下のスケジュールで各種連絡を行います。"
          start-date="2020/07/10 14:00"
          target="既存顧客"
          conditions="なし"
          :select-item="list2"
          is-select-comp
        />
        <v-row class="ma-0">
          <v-col cols="7" class="tab-all__item-data">
            <DataColSmall
              :reach="sixMonthInspection.reach"
              :contacts="sixMonthInspection.contacts"
              :order="sixMonthInspection.order"
            />
            <p>
              リーチ数は連絡を行った人数、コンタクト数はSMS開封数＋通話できた方です。<br />（DMからの反応は未集計）
            </p>
          </v-col>
          <v-col cols="5">
            <v-row align="center" justify="start" class="flex-column">
              <TableCalendar />
              <nuxt-link to="/ma/list" class="mt20">
                <v-img
                  :src="require('./img/list.svg')"
                  :max-width="120"
                  :max-height="30"
                />
              </nuxt-link>
            </v-row>
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
          title="12ヶ月点検 "
          sub-title1="¥100/顧客"
          content="既存顧客に対して点検のお知らせをいたします。<br />点検3ヶ月前から以下のスケジュールで各種連絡を行います。"
          start-date="2020/07/10 14:00"
          target="既存顧客"
          conditions="なし"
          :select-item="list2"
          is-select-comp
        />
        <v-row class="ma-0">
          <v-col cols="7" class="tab-all__item-data">
            <DataColSmall
              :reach="sixMonthInspection.reach"
              :contacts="sixMonthInspection.contacts"
              :order="sixMonthInspection.order"
            />
            <p>
              リーチ数は連絡を行った人数、コンタクト数はSMS開封数＋通話できた方です。<br />（DMからの反応は未集計）
            </p>
          </v-col>
          <v-col cols="5">
            <v-row align="center" justify="start" class="flex-column">
              <TableCalendar />
              <nuxt-link to="/ma/list" class="mt20">
                <v-img
                  :src="require('./img/list.svg')"
                  :max-width="120"
                  :max-height="30"
                />
              </nuxt-link>
            </v-row>
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
          title="18ヶ月点検 "
          sub-title1="¥100/顧客"
          content="既存顧客に対して点検のお知らせをいたします。<br />点検3ヶ月前から以下のスケジュールで各種連絡を行います。"
          start-date="2020/07/10 14:00"
          target="既存顧客"
          conditions="なし"
          :select-item="list2"
          is-select-comp
        />
        <v-row class="ma-0">
          <v-col cols="7" class="tab-all__item-data">
            <DataColSmall
              :reach="sixMonthInspection.reach"
              :contacts="sixMonthInspection.contacts"
              :order="sixMonthInspection.order"
            />
            <p>
              リーチ数は連絡を行った人数、コンタクト数はSMS開封数＋通話できた方です。<br />（DMからの反応は未集計）
            </p>
          </v-col>
          <v-col cols="5">
            <v-row align="center" justify="center" class="flex-column">
              <TableCalendar />
              <nuxt-link to="/ma/list" class="mt20">
                <v-img
                  :src="require('./img/list.svg')"
                  :max-width="120"
                  :max-height="30"
                />
              </nuxt-link>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Title from '~/components/ma/tab/Title.vue'
import DataColSmall from '~/components/ma/tab/DataColSmall.vue'
import TableCalendar from '~/components/ma/tab/TableCalendar.vue'
import SwitchButton from '~/components/ma/tab/SwitchButton.vue'
export default {
  name: 'Inspection',
  components: {
    Title,
    DataColSmall,
    TableCalendar,
    SwitchButton,
  },
  data() {
    return {
      list1: [
        '2020年9月満期対象',
        '2020年10月満期対象',
        '2020年11月満期対象',
        '2020年12月満期対象',
      ],
      list2: [
        '2020年9月対象',
        '2020年10月対象',
        '2020年11月対象',
        '2020年12月対象',
      ],
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
