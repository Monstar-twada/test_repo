<template>
  <div class="main-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="customer.svg"
      :page="page"
    />
    <Searchbar />
    <CustomerResult class="mt30 mb30" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Searchbar from '~/components/customer/Searchbar.vue'
import CustomerResult from '~/components/customer/CustomerResult.vue'
export default {
  components: {
    Breadcrumbs,
    Searchbar,
    CustomerResult,
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
        to: '',
      },
    ],
  }),
  layout: 'loggedin',
}
</script>
<style lang="scss" scoped>
.main-container {
  padding: 30px 0px;
  margin: 0 75px;
  width: 100%;
}
</style>
