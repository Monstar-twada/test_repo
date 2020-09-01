<template>
  <div class="customer-detail-memo-wrapper">
    <ColumnTitle title="活動報告" border> </ColumnTitle>

    <fg-pagination
      v-model="query.page"
      class="m20"
      :total="total"
      :page-size="query.limit"
      theme="blue"
    />
    <fg-table-experiment
      :headers="headers"
      :list="list"
      head-font-weight-normal
      head-background
      td-space-vertical-line
      stripe
      small-header
      body-min-height="300px"
    >
      <tr v-for="(item, i) in list" :key="i" @click="clickRow(item)">
        <td>
          2020/09/02 (水)<br />
          14:34
        </td>
        <td>
          <fg-icon
            name="flag"
            :color="i % 3 === 1 ? $colors.border : '#DB3394'"
          ></fg-icon>
        </td>
        <td>
          トヨタ<br />
          プリウス
        </td>
        <td>整備</td>
        <td>電話</td>
        <td>
          <fg-text :rows="2">
            入電 SMSからの返信 5/15の9:30に無料12ヶ月点検の予約いただきました。
          </fg-text>
        </td>
        <td>
          cars足立店<br />
          山田太郎
        </td>
        <td>
          <div class="flex">
            <fg-button
              icon="trash"
              border
              size="mini"
              style="width: 24px;"
            ></fg-button>
          </div>
        </td>
      </tr>
    </fg-table-experiment>

    <EditDialog v-model="editVisible" />

    <DetailDialog v-model="detailVisible" @edit="handleEdit" />
    <transition name="fg-zoom-in-right-bottom">
      <AddButton v-show="!addVisible" @click="addVisible = true" />
    </transition>
    <AddDialog v-model="addVisible" />
  </div>
</template>
<script>
import AddDialog from './AddDialog'
import EditDialog from './EditDialog'
import DetailDialog from './DetailDialog'
import AddButton from './add-button/index'
import ColumnTitle from '~/components/common/customer/common/ColumnTitle'
import { fmtDate } from '~/components/common/customer/common/helper'

export default {
  filters: {
    fmtDate,
  },
  components: {
    AddDialog,
    EditDialog,
    ColumnTitle,
    DetailDialog,
    AddButton,
  },
  props: {
    customerId: {
      type: [String, Number],
      default: 0,
    },
  },
  data() {
    return {
      headers: [
        { text: '日時', width: 120 },
        { text: 'チェック', width: 80 },
        { text: '対象車両', width: 100 },
        { text: '取引種別', width: 80 },
        { text: 'チャネル', width: 80 },
        { text: 'コメント' },
        { text: '担当者', width: 80 },
        { text: '', width: 60 },
      ],
      query: {
        page: 1,
        limit: 10,
      },
      total: 30,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      addVisible: false,
      editVisible: false,
      message: '',
      snackbar: false,
      detailVisible: false,
    }
  },
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
        console.log(res)
        // this.list = res.results || []
      } catch (e) {
        console.error(e)
        this.message = 'エラー：活動メモ'
        this.snackbar = true
      }
    },
    clickRow(row) {
      this.detailVisible = true
    },
    handleEdit(item) {
      this.detailVisible = false
      this.editVisible = true
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
