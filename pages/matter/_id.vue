<template>
  <v-app>
    <Sidebar />
    <div class="main-container">
      <Breadcrumbs :breadcrumbs="breadcrumbs" :page="page" />
      <DetailSearchBar />
      <MatterDetail />
    </div>
  </v-app>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import DetailSearchBar from '~/components/matter/DetailSearchBar.vue'
import MatterDetail from '~/components/matter/MatterDetail.vue'
export default {
  components: {
    Sidebar,
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
          to: '/',
        },
        {
          text: '案件管理',
          to: '/matter',
        },
        {
          text: '案件詳細',
          to: '/matter/detail',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.v-application {
  background: url('~static/common/full.png') !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
.v-application--wrap {
  flex-direction: row !important;
}
</style>
<style lang="scss" scoped>
.main-container {
  padding: 30px 0px;
  margin: 0 75px;
  max-width: 1080px;
}
</style>
