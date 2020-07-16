<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="assess.svg"
    />
    <CustomerSearch />
    <VehicleSearch />
    <AssessResult class="mt30" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/breadcrumbs/index.vue'
import CustomerSearch from '~/components/assess/customer/CustomerSearch.vue'
import VehicleSearch from '~/components/assess/customer/VehicleSearch.vue'
import AssessResult from '~/components/assess/AssessResult.vue'
export default {
  layout: 'dashboard',
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
}
</script>
