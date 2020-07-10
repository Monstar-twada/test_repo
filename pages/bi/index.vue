<template>
  <div class="main-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      is-manager
      is-date
      title-image="buisnessinformation.svg"
    />
    <Sales />
    <SalesProductivity />
    <SalesBreakdown />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Sales from '~/components/bi/Sales.vue'
import SalesProductivity from '~/components/bi/SalesProductivity.vue'
import SalesBreakdown from '~/components/bi/SalesBreakdown.vue'
export default {
  components: {
    Breadcrumbs,
    Sales,
    SalesProductivity,
    SalesBreakdown,
  },
  data: () => ({
    page: '経営状況',
    breadcrumbs: [
      {
        text: 'home',
        href: '/',
      },
      {
        text: '経営状況',
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
  margin: 0 60px;
  width: 100%;
}
</style>
