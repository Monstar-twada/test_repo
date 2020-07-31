<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="matching.svg"
      :page="page"
      icon-width="27"
    />
    <Searchbar />
    <CustomerResult class="mt30" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue'
import Searchbar from '~/components/matching/Searchbar.vue'
import CustomerResult from '~/components/matching/MatchingResult.vue'
export default {
  layout: 'dashboard',
  components: {
    Breadcrumbs,
    Searchbar,
    CustomerResult,
  },
  data: () => ({
    page: 'マッチング',
    breadcrumbs: [
      {
        text: 'マッチング',
        href: '',
      },
    ],
  }),
}
</script>
