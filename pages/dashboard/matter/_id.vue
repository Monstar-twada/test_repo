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
import Breadcrumbs from '~/components/breadcrumbs/index.vue'
import DetailSearchBar from '~/components/matter/DetailSearchBar.vue'
import MatterDetail from '~/components/matter/MatterDetail.vue'
export default {
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
