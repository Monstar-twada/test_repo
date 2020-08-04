<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="result.svg"
    />
    <DetailSearchBar />
    <MatterDetail />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue'
import DetailSearchBar from '~/components/dashboard/matter/DetailSearchBar.vue'
import MatterDetail from '~/components/dashboard/matter/MatterDetail.vue'
export default {
  layout: 'dashboard',
  components: {
    Breadcrumbs,
    DetailSearchBar,
    MatterDetail,
  },
  data() {
    return {
      page: '案件管理',
      breadcrumbs: [
        {
          text: '案件管理',
          href: '/matter',
        },
        {
          text: '案件詳細',
          href: '/matter/detail',
        },
      ],
    }
  },
}
</script>
