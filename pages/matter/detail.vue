<template>
  <v-app>
    <Sidebar />
    <div class="main-container">
      <Breadcrumbs :items="items" />
      <DetailSearchBar />
      <MatterDetail />
    </div>
  </v-app>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import DetailSearchBar from '~/components/matter/DetailSearchBar.vue'
import MatterDetail from '~/components/MatterDetail.vue'
export default {
  components: {
    Sidebar,
    Breadcrumbs,
    DetailSearchBar,
    MatterDetail,
  },
  data() {
    return {
      items: [
        {
          text: 'home',
          to: '/',
        },
        {
          text: '案件管理',
          to: 'matter',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.main-container {
  padding: 30px 0px;
  margin: 0 75px;
  max-width: 1080px;
}
</style>
