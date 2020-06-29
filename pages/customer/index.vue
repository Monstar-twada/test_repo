<template>
  <div class="main-container">
    <Breadcrumbs :breadcrumbs="breadcrumbs" :page="page" />
    <Searchbar />
    <Itemlist class="mt30 mb30" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Searchbar from '~/components/customer/Searchbar.vue'
import Itemlist from '~/components/customer/Itemlist.vue'
export default {
  components: {
    Breadcrumbs,
    Searchbar,
    Itemlist,
  },
  data: () => ({
    page: '顧客管理',
    breadcrumbs: [
      {
        text: 'home',
        to: '/',
      },
      {
        text: '顧客管理',
        to: 'customer',
      },
    ],
  }),
  layout: 'loggedin',
}
</script>
<style lang="scss" scoped>
.main-container {
  padding: 30px 70px 0px;
  width: 100%;
}
</style>
