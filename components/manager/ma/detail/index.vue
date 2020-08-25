<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="ma-tel.svg"
      :page="page"
    >
      <template v-slot:right>
        <div class="export-area">
          <ExportButton @click="handleImportClick" />
          <ExportDialog v-model="importVisible" />
        </div>
      </template>
    </Breadcrumbs>
    <StatusBar />
    <MaResult
      v-model="searchParams.page"
      class="mt30"
      :item-list="maResultList"
    />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue'
import MaResult from '~/components/manager/ma/detail/ma-result/index'
import StatusBar from '~/components/manager/ma/detail/status-bar/index'
import ExportButton from '~/components/manager/ma/detail/ExportButton.vue'
import ExportDialog from '~/components/manager/ma/detail/ExportDialog.vue'

const SEARCH_PARAMS = {
  offset: 0,
  limit: 10,
  name: '',
  city: '',
  maker: '',
  class: '',
  tel: '',
  email: '',
  statusCall: '',
  statusDM: '',
  statusSMS: '',
  reserve: '',
  warehouse: '',
  page: 1,
}
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
  data: () => ({
    page: '対象者リスト:2020年9月車検満期',
    breadcrumbs: [
      {
        text: '集客',
        href: '',
      },
    ],
    searchParams: {
      ...SEARCH_PARAMS,
    },
    maResultList: {},
    importVisible: false,
  }),
  watch: {
    searchParams: {
      deep: true,
      handler() {
        this.getMaResult()
      },
    },
  },
  created() {
    this.apiParams = {
      ...this.$route.params,
    }
    this.getMaResult()
    // this.bindWindowPopStateEvent()
  },
  methods: {
    async getMaResult() {
      const params = {
        ...this.searchParams,
      }
      params.offset = (params.page - 1) * params.limit
      await this.$api
        .post(
          `/v1/marketing/targeting/${this.$route.query.type}/${this.$route.query.date}`,
          params
        )
        .then((data) => {
          this.maResultList = data
        })
        .catch((err) => {
          console.error(err)
        })
    },
    updateSearch(params) {
      this.searchParams = {
        ...this.searchParams,
        ...params,
        page: 1,
      }
    },
    handleImportClick() {
      this.importVisible = true
    },
  },
}
</script>
<style lang="scss" scoped>
.subTitle {
  color: $white-300;
  margin: 5px 0 0 20px;
  h3 {
    font-size: 20px;
  }
}
.export-area {
  position: relative;
}
</style>
