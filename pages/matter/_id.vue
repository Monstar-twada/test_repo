<template>
  <div class="main-container">
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
import Breadcrumbs from '~/components/Breadcrumbs.vue'
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
          text: 'home',
          href: '/',
        },
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
  layout: 'loggedin',
}
</script>
<style lang="scss" scoped>
.main-container {
  padding: 30px 0px;
  margin: 0 75px;
  max-width: 1080px;
}
</style>
