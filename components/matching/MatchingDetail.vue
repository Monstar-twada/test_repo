<template>
  <div class="container">
    <DetailSearch />
    <CarInfo />
    <CarInfoTab />
  </div>
</template>

<script>
import DetailSearch from '~/components/matching/detail/DetailSearch.vue'
import CarInfo from '~/components/matching/detail/CarInfo.vue'
import CarInfoTab from '~/components/matching/detail/CarInfoTab.vue'

export default {
  name: 'MatterDetail',
  components: {
    DetailSearch,
    CarInfo,
    CarInfoTab,
  },
}
</script>
<style lang="scss" scoped></style>
