<template>
  <div class="customer-detail-memo-wrapper">
    <ColumnTitle title="活動メモ">
      <PlusButton border @click="editVisible = true" />
    </ColumnTitle>

    <GlobalTable
      :headers="headers"
      :list="list"
      head-font-weight-normal
      head-background
      td-bottom-border
      td-space-vertical-line
      small-header
      body-max-height="280px"
      body-min-height="70px"
    >
      <tr v-for="(item, i) in list" :key="i">
        <td>{{ item.activityDate | fmtDate }}</td>
        <td>{{ item.class }}</td>
        <td>{{ item.comment }}</td>
        <td>
          <div>
            <div>{{ item.storeName }}</div>
            <div>{{ item.staffName }}</div>
          </div>
        </td>
        <td>
          <div class="flex">
            <RoundBorderButton />
          </div>
        </td>
      </tr>
    </GlobalTable>

    <MemoEditDialog v-model="editVisible" />

    <v-snackbar v-model="snackbar" timeout="3000" top>
      {{ message }}
    </v-snackbar>
  </div>
</template>
<script>
import MemoEditDialog from './memo-edit-dialog/index'
import ColumnTitle from '~/components/common/customer/ColumnTitle'
import PlusButton from '~/components/common/breadcrumbs/PlusButton'
import RoundBorderButton from '~/components/common/customer/detail/button/RoundBorderButton'
import GlobalTable from '~/components/common/customer/custom-table/index'
import { fmtDate } from '~/components/common/customer/helper'

export default {
  filters: {
    fmtDate,
  },
  components: {
    MemoEditDialog,
    ColumnTitle,
    PlusButton,
    RoundBorderButton,
    GlobalTable,
  },
  props: {
    customerId: {
      type: [String, Number],
      default: 0,
    },
  },
  data: () => ({
    headers: [
      { text: '交流日', width: 120 },
      { text: '車種' },
      { text: 'コメント' },
      { text: '担当者' },
      { text: '', width: 120 },
    ],
    list: [],
    editVisible: false,
    message: '',
    snackbar: false,
  }),
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      const params = {
        limit: 50,
        offset: 0,
      }
      try {
        const res = await this.$api.get(
          `/v1/customer/${this.customerId}/activity`,
          params
        )
        this.list = res.results || []
      } catch (e) {
        console.error(e)
        this.message = 'エラー：活動メモ'
        this.snackbar = true
      }
    },
  },
}
</script>

<style lang="scss">
.customer-detail-memo-wrapper {
  .edit-button {
    cursor: pointer;
  }
}
</style>
