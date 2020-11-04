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
import throttle from 'lodash.throttle';
import SearchConditions from './index/SearchConditions';
import { DEFAULT_QUERY } from './common/base';
import Table from './index/Table';
import Breadcrumbs from '~/components/common/breadcrumbs/index';

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
    };
  },
  watch: {
    query: {
      deep: true,
      handler() {
        this.getDatawithThrottle();
      },
    },
  },
  created() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      this.getData();
    });
  },
  methods: {
    conditionChange(data) {
      this.query = {
        ...this.query,
        ...data,
        page: 1,
      };
    },

    getDatawithThrottle: throttle(async function () {
      await this.getData();
    }, 3000),

    async getData() {
      const params = {
        ...this.query,
      };
      // sort
      params.sort = this.$ui.fmtSort(this.query.sort);
      // offset
      params.offset = (params.page - 1) * params.limit;
      delete params.page;
      // if (/^(\d{4})-(\d{2})/.test(params.registrationFirstDateFrom)) {
      //   params.registrationFirstDateFrom = RegExp.$1 + '-' + RegExp.$2
      // }
      // if (/^(\d{4})-(\d{2})/.test(params.registrationFirstDateTo)) {
      //   params.registrationFirstDateTo = RegExp.$1 + '-' + RegExp.$2
      // }
      // this.$nuxt.$loading.start()
      try {
        const res = await this.$api.post('/v1/customers', params);
        this.tableData = res || {};
        this.$nuxt.$loading.finish();
      } catch (err) {
        this.$alert(err.message);
        console.error(err);
      }
    },
  },
};
</script>

<style lang="scss">
.customer-page-wrapper {
  color: $--color-primary;
}
</style>
