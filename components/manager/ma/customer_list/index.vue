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
      @update-event="updateStatusBar"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import throttle from 'lodash.throttle'
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue'
import MaResult from '~/components/manager/ma/customer_list/ma-result/index'
import StatusBar from '~/components/manager/ma/customer_list/status-bar/index'
import ExportButton from '~/components/manager/ma/customer_list/ExportButton.vue'
import ExportDialog from '~/components/manager/ma/customer_list/export-dialog/index'

const SEARCH_PARAMS = {
  offset: 0,
  limit: 10,
  page: 1,
}
export default {
  layout: 'manager',
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
    stateCode: null,
  }),
  computed: {
    ...mapGetters('auth', ['getStoreCode']),
  },
  watch: {
    searchParams: {
      deep: true,
      handler() {
        this.getDatawithThrottle()
      },
    },
  },
  created() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      this.apiParams = {
        ...this.$route.query,
      }
      this.getMaResult()
      this.getMaStatus()
      this.updateBreadCrumbs()
    })
  },
  methods: {
    getDatawithThrottle: throttle(async function () {
      await this.getMaResult()
    }, 3000),
    async getMaResult() {
      const params = {
        ...SEARCH_PARAMS,
        ...this.searchParams,
      }
      params.offset = (params.page - 1) * params.limit
      try {
        const res = await this.$api.get(
          `/v1/attractingCustomers/${this.getStoreCode}/${this.apiParams.date}`,
          params
        )
        if (res && Array.isArray(res.results)) {
          for (const item of res.results) {
            if (item.facePhoto !== null) {
              const res = await this.$api.get(
                `/v1/customers/${item.customerCode}/facePhoto`
              )
              item.imageUrl = res.url
            } else {
              item.imageUrl = '/common/person_default.svg'
            }
          }
        }
        this.maResultList = res
      } catch (e) {
        console.error(e)
      }
    },

    async getMaStatus() {
      const params = {
        additionalDataNumber: 0,
      }
      try {
        const res = await this.$api.post(
          `/v1/attractingCustomersMonth/${this.getStoreCode}/${this.apiParams.date}`,
          params
        )
        this.maStatus = res.results[0]
        this.$nuxt.$loading.finish()
      } catch (e) {
        console.error(e)
      }
    },
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
      this.getMaResult()
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
