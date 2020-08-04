<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="matching.svg"
    />
    <MatchingDetail />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index'
import MatchingDetail from '~/components/dashboard/matching/detail/index'
export default {
  layout: 'dashboard',
  components: {
    Breadcrumbs,
    MatchingDetail,
  },
  data() {
    return {
      page: 'マッチング',
      breadcrumbs: [
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
}
</script>
<style lang="scss" scoped></style>
