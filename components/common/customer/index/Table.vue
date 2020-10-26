<template>
  <div class="customer-index-table-wrapper">
    <fg-pagination
      v-model="query.page"
      :total="tableData.total"
      :page-size="query.limit"
      class="pb15"
    />
    <fg-table-experiment
      :headers="headers"
      :list="list"
      padding="lr10"
      rounded
      head-bottom-border
      head-font-weight-normal
      stripe
      td-space-vertical-line
      body-min-height="300px"
      placeholder="検索結果はありません"
      @sort-change="sortChange"
    >
      <TableItem
        v-for="(item, i) in list"
        :key="i"
        class="cur"
        :item="item"
        @click.native="clickRow(item)"
      />
    </fg-table-experiment>

    <fg-pagination
      v-model="query.page"
      :total="tableData.total"
      :page-size="query.limit"
      class="pt15"
    />
  </div>
</template>

<script>
import TableItem from './TableItem'

export default {
  components: {
    TableItem,
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
  data() {
    return {
      headers: [
        {
          text: '顧客ID',
          align: 'center',
          field: 'customerCode',
          sortable: true,
          sortactive: true,
          width: '8%',
        },
        {
          text: '顧客名',
          field: 'customerName',
          align: 'center',
          width: '16%',
          sortactive: true,
          sortable: true,
        },
        { text: '連絡先情報', align: 'center', width: '10%' },
        { text: '所有車', align: 'start', width: '14%' },
        { text: '登録ナンバー', align: 'center', width: '10%' },
        {
          text: '車検満了日',
          align: 'center',
          width: '10%',
        },
        {
          text: '初度登録年月',
          align: 'center',
          width: '10%',
        },
        { text: '最終取引日', align: 'center', width: '10%' },
        { text: 'フラグ', align: 'center', width: '12%' },
      ],
    }
  },
  computed: {
    list() {
      return this.tableData.results || []
    },
  },
  methods: {
    clickRow(item) {
      this.$router.push({
        path: `/customer/detail/`,
        query: { customerCode: item.customerCode },
      })
    },
    sortChange(field, sort) {
      this.$nuxt.$loading.start()
      this.headers.map((item) => {
        item.sortactive = item.field === field
      })
      for (const item in this.query.sort) {
        this.query.sort[item] = item === field ? sort : ''
      }
      this.query.page = 1
    },
  },
}
</script>

<style lang="scss">
.customer-index-table-wrapper {
  .high-light {
    color: $--color-primary-active;
  }
  td {
    .table-item-tel {
      .fg-icon {
        margin-right: 2px;
      }
    }
    .fg-tag {
      margin: 2px;
      &.hide {
        opacity: 0;
      }
    }
  }
}
</style>
