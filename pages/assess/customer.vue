<template>
  <div class="main-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="assess.svg"
    />
    <CustomerSearch />
    <VehicleSearch />
    <AssessResult class="mt30 mb30" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import CustomerSearch from '~/components/assess/customer/CustomerSearch.vue'
import VehicleSearch from '~/components/assess/customer/VehicleSearch.vue'
import AssessResult from '~/components/assess/AssessResult.vue'
export default {
  components: {
    Breadcrumbs,
    VehicleSearch,
    CustomerSearch,
    AssessResult,
  },
  data: () => ({
    page: '査定',
    breadcrumbs: [
      {
        text: 'home',
        href: '/',
      },
      {
        text: '査定',
        href: 'assess',
      },
      {
        text: '新規査定',
        href: 'assess',
      },
      {
        text: 'お客様検索',
        href: '',
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
