<template>
  <div class="main-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="matching.svg"
      :page="page"
    />
    <Searchbar />
    <CustomerResult class="mt30 mb30" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Searchbar from '~/components/matching/Searchbar.vue'
import CustomerResult from '~/components/matching/MatchingResult.vue'
export default {
  components: {
    Breadcrumbs,
    Searchbar,
    CustomerResult,
  },
  data: () => ({
    page: 'マッチング',
    breadcrumbs: [
      {
        text: 'home',
        to: '/',
      },
      {
        text: 'マッチング',
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
