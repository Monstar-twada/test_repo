<template>
  <v-app>
    <Sidebar />
    <div class="main-container">
      <Breadcrumbs :breadcrumbs="breadcrumbs" :page="page" is-title-btn />
      <Searchbar />
      <Itemlist class="mt30 mb30" />
    </div>
  </v-app>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Searchbar from '~/components/assess/Searchbar.vue'
import Itemlist from '~/components/assess/Itemlist.vue'
export default {
  components: {
    Sidebar,
    Breadcrumbs,
    Searchbar,
    Itemlist,
  },
  data: () => ({
    page: '査定',
    breadcrumbs: [
      {
        text: 'home',
        to: '/',
      },
      {
        text: '査定管理',
        to: 'customer',
      },
    ],
  }),
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
