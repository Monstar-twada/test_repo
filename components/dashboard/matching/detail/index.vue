<template>
  <div class="container">
    <DetailSearch />
    <CarInfo />
    <CarInfoTab />
  </div>
</template>

<script>
import DetailSearch from '~/components/dashboard/matching/detail/DetailSearch.vue'
import CarInfo from '~/components/dashboard/matching/detail/CarInfo.vue'
import CarInfoTab from '~/components/dashboard/matching/detail/CarInfoTab.vue'

export default {
  name: 'MatchingDetail',
  components: {
    DetailSearch,
    CarInfo,
    CarInfoTab,
  },
}
</script>
<style lang="scss" scoped></style>
