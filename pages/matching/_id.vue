<template>
  <div class="main-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="matching.svg"
    />
    <MatchingDetail />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import MatchingDetail from '~/components/matching/MatchingDetail.vue'
export default {
  components: {
    Breadcrumbs,
    MatchingDetail,
  },
  data() {
    return {
      page: 'マッチング',
      breadcrumbs: [
        {
          text: 'home',
          href: '/',
        },
        {
          text: 'マッチング',
          href: '/matching',
        },
        {
          text: '詳細',
          href: '/matching/detail',
        },
      ],
    }
  },
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
