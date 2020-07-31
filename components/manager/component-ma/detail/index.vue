<template>
  <div>
    <Breadcrumbs :breadcrumbs="breadcrumbs" title-image="ma.svg" :page="page">
      <template v-slot:left>
        <div class="subTitle">
          <h3>[ 9月満期車検 対象者リスト ]</h3>
        </div>
      </template>
      <template v-slot:right>
        <ExportButton @click="handleImportClick" />
      </template>
    </Breadcrumbs>
    <Searchbar :search-params="searchParams" @searchEvent="updateSearch" />
    <MaResult
      v-model="searchParams.page"
      class="mt30"
      :item-list="maResultList"
    />
    <ExportDialog v-model="importVisible" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/breadcrumbs/index.vue'
import Searchbar from '~/components/manager/component-ma/detail/search-bar/index'
import MaResult from '~/components/manager/component-ma/detail/ma-result/index'
import ExportButton from '~/components/manager/component-ma/detail/ExportButton.vue'
import ExportDialog from '~/components/manager/component-ma/detail/export-dialog/index'

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
    Searchbar,
    MaResult,
    ExportButton,
    ExportDialog,
  },
  data: () => ({
    page: '集客',
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
</style>
