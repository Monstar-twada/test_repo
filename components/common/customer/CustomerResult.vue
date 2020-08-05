<template>
  <div class="customer-list">
    <GlobalPagination
      v-model="query.page"
      :total="tableData.total"
      :page-size="query.limit"
      class="pb15"
    />
    <CustomTable
      :headers="headers"
      :list="list"
      padding="lr10"
      rounded
      head-bottom-border
      head-font-weight-normal
      stripe
      td-space-vertical-line
      body-min-height="300px"
      empty-content="検索結果はありません"
    >
      <tr v-for="(item, i) in list" :key="i">
        <td class="high-light cur" @click="clickRow(item)">
          {{ item.customerId }}
        </td>
        <td class="is-left">
          <TdUserInfo :item="item" />
        </td>
        <td>{{ item.tel }}</td>
        <td>
          <dl style="display: inline-block; text-align: left;">
            <dd>{{ item.maker }}</dd>
            <dd>{{ item.class || '-' }}</dd>
          </dl>
        </td>
        <td>{{ fmtCarNumber(item) }}</td>
        <td>{{ item.inspectionExpirationDate | fmtDate }}</td>
        <td>{{ item.firstRegistrationDate | fmtDate }}</td>
      </tr>
    </CustomTable>

    <GlobalPagination
      v-model="query.page"
      :total="tableData.total"
      :page-size="query.limit"
      class="pt15"
    />
  </div>
</template>
<script>
import CustomTable from './custom-table/index'
import TdUserInfo from './custom-table/TdUserInfo'
import GlobalPagination from '~/components/common/global-pagination/index'
import { fmtCarNumber, fmtDate } from '~/components/common/customer/helper'

export default {
  name: 'CustomerResult',
  filters: {
    fmtDate,
  },
  components: {
    GlobalPagination,
    CustomTable,
    TdUserInfo,
  },
  props: {
    query: {
      type: Object,
      default() {
        return {}
      },
    },
    tableData: {
      type: Object,
      default() {
        return {
          total: 0,
        }
      },
    },
  },
  data: () => ({
    headers: [
      {
        text: '顧客ID',
        align: 'center',
        value: 'id',
      },
      {
        text: '顧客名',
        value: 'name',
        align: 'center',
        width: '200px',
      },
      { text: '連絡先情報', value: 'tel', align: 'center' },
      { text: '所有車', value: 'maker', align: 'start', width: '120px' },
      { text: '登録ナンバー', value: 'car_number', align: 'center' },
      { text: '車検満了日', value: 'inspection_finish_date', align: 'center' },
      { text: '初度登録年月', value: 'registration_date', align: 'center' },
    ],
  }),
  computed: {
    list() {
      return this.tableData.results || []
    },
  },
  methods: {
    clickRow(item) {
      // console.log(JSON.stringify(item, null, 2))
      this.$router.push({
        path: `/customer/detail/`,
        query: { id: item.customerId },
      })
    },
    fmtCarNumber,
  },
}
</script>

<style lang="scss"></style>
