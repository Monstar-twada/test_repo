<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="ma-tel.svg"
      :page="page"
    >
      <template v-slot:right>
        <div class="export-area">
          <ExportButton @click="handleExportClick" />
          <ExportDialog v-model="exportVisible" :export-list="maStatus" />
        </div>
      </template>
    </Breadcrumbs>
    <StatusBar :status="maStatus" />
    <MaResult
      v-model="searchParams.page"
      class="mt30"
      :item-list="maResultList"
    />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue'
import MaResult from '~/components/manager/ma/customer_list/ma-result/index'
import StatusBar from '~/components/manager/ma/customer_list/status-bar/index'
import ExportButton from '~/components/manager/ma/customer_list/ExportButton.vue'
import ExportDialog from '~/components/manager/ma/customer_list/export-dialog/index'

// const SEARCH_PARAMS = {
//   offset: 0,
//   limit: 10,
//   name: '',
//   city: '',
//   maker: '',
//   class: '',
//   tel: '',
//   email: '',
//   statusCall: '',
//   statusDM: '',
//   statusSMS: '',
//   reserve: '',
//   warehouse: '',
//   page: 1,
// }
export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Breadcrumbs,
    MaResult,
    ExportButton,
    ExportDialog,
    StatusBar,
  },
  props: {
    date: {
      type: Object,
      default: () => {
        return {
          month: '09',
          year: '2020',
        }
      },
    },
  },
  data: () => ({
    page: null,
    breadcrumbs: [
      {
        text: '集客',
        href: '',
      },
      // {
      //   text: `対象者リスト：${this.date.month}車検満期`,
      //   href: '',
      // },
    ],
    searchParams: {
      page: 1,
    },
    maResultList: [],
    exportVisible: false,
    maStatus: {},
  }),
  watch: {
    // searchParams: {
    //   deep: true,
    //   handler() {
    //     this.getMaResult()
    //   },
    // },
  },
  created() {
    this.apiParams = {
      ...this.$route.params,
    }
    this.getMaResult()
    this.getMaStatus()
    this.updateBreadCrumbs()
  },
  methods: {
    async getMaResult() {
      const params = {}
      // params.offset = (params.page - 1) * params.limit
      try {
        const res = await this.$api.post(
          `/v1/attaractingCustomers/1234/202009`,
          params
        )

        this.maResultList = res
      } catch (e) {
        console.error(e)
      }
    },

    async getMaStatus() {
      const params = {}
      // params.offset = (params.page - 1) * params.limit
      try {
        const res = await this.$api.post(
          `/v1/attaractingCustomersMonth/10001/202010`,
          params
        )
        this.maStatus = res[0]
      } catch (e) {
        console.error(e)
      }
    },
    // updateSearch(params) {
    //   this.searchParams = {
    //     ...this.searchParams,
    //     ...params,
    //     page: 1,
    //   }
    // },
    handleExportClick() {
      this.exportVisible = true
    },
    updateBreadCrumbs() {
      const date = this.$route.query.date
      const year = `${date.slice(0, 4)}年`
      const month = `${date.slice(4, 6)}月`
      const crumb = {}
      crumb.text = `対象者リスト：${year}${month}車検満期`
      crumb.href = ''
      this.breadcrumbs.push(crumb)
      this.page = crumb.text
    },
    updateStatusBar() {
      this.getMaStatus()
    },
  },
}
</script>
<style lang="scss" scoped>
.subTitle {
  color: $--color-white;
  margin: 5px 0 0 20px;
  h3 {
    font-size: 20px;
  }
}
.export-area {
  position: relative;
}
</style>
