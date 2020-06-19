<template>
  <v-app>
    <Sidebar />
    <div class="main-container">
      <Breadcrumbs :items="items" />
      <Searchbar />
      <MatterDetail />
    </div>
  </v-app>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Searchbar from '~/components/Searchbar.vue'
import MatterDetail from '~/components/MatterDetail.vue'
export default {
  components: {
    Sidebar,
    Breadcrumbs,
    Searchbar,
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
  padding: 30px 70px 0px;
  width: 100%;
}
</style>
