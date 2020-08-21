<template>
  <div class="customer-page-wrapper">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="customer.svg"
      :page="pageTitle"
    >
      <template v-slot:right> </template>
    </Breadcrumbs>

    <SearchConditions :query="query" @change="conditionChange" />

    <Table class="mt30" :query="query" :table-data="tableData" />
  </div>
</template>

<script>
import SearchConditions from './index/SearchConditions'
import { DEFAULT_QUERY } from './common/base'
import Table from './index/table'
import Breadcrumbs from '~/components/common/breadcrumbs/index'

export default {
  components: {
    Breadcrumbs,
    SearchConditions,
    Table,
  },
  data() {
    return {
      pageTitle: '顧客管理',
      breadcrumbs: [
        {
          text: '顧客管理',
          href: '',
        },
      ],
      query: {
        ...DEFAULT_QUERY,
      },
      tableData: {},
    }
  },
  watch: {
    query: {
      deep: true,
      handler() {
        this.getData()
      },
    },
  },
  created() {
    this.getData()
  },
  methods: {
    conditionChange(data) {
      this.query = {
        ...this.query,
        ...data,
        page: 1,
      }
    },
    async getData() {
      const params = {
        ...this.query,
      }
      params.offset = (params.page - 1) * params.limit
      delete params.page
      if (/^(\d{4})-(\d{2})/.test(params.firstRegistrationDateFrom)) {
        params.firstRegistrationDateFrom = RegExp.$1 + RegExp.$2
      }
      if (/^(\d{4})-(\d{2})/.test(params.firstRegistrationDateTo)) {
        params.firstRegistrationDateTo = RegExp.$1 + RegExp.$2
      }
      console.log(JSON.stringify(params, null, 2))
      try {
        const res = await this.$api.post('/v1/customer', params)
        this.tableData = res || {}
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>

<style lang="scss">
.customer-page-wrapper {
  color: $blue-200;
}
</style>
