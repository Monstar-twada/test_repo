<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="customer.svg"
      :page="pageTitle"
    >
      <template v-slot:right>
        <ImportButton class="mr15" @click="handleImportClick" />
        <PlusButton />
      </template>
    </Breadcrumbs>

    <TableConditions :query="query" @change="searchChange" />
    <CustomerResult class="mt30" :query="query" :table-data="tableData" />

    <ImportDialog v-model="importVisible" />
  </div>
</template>

<script>
import ImportButton from './ImportButton'
import TableConditions from './table-conditions/index.vue'
import CustomerResult from './CustomerResult.vue'
import ImportDialog from './import-dialog/index'
import Breadcrumbs from '~/components/breadcrumbs/index'
import PlusButton from '~/components/breadcrumbs/PlusButton'

const DEFAULT_QUERY = {
  offset: 0,
  limit: 10,
  name: '',
  maker: '',
  class: '',
  vin: '',
  // 202006
  firstRegistrationDateFrom: '',
  firstRegistrationDateTo: '',
  // 2020-06-01"
  inspectionExpirationDateFrom: '',
  inspectionExpirationDateTo: '',
  page: 1,
}

export default {
  // middleware: 'authenticated',
  layout: 'manager',
  components: {
    Breadcrumbs,
    TableConditions,
    CustomerResult,
    PlusButton,
    ImportButton,
    ImportDialog,
  },
  data: () => ({
    pageTitle: '顧客管理',
    breadcrumbs: [
      {
        text: '顧客管理',
        href: '',
      },
    ],
    importVisible: false,
    query: {
      ...DEFAULT_QUERY,
    },
    tableData: {},
  }),
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
    handleImportClick() {
      this.importVisible = true
    },
    searchChange(params) {
      this.query = {
        ...this.query,
        ...params,
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
<style lang="scss"></style>
