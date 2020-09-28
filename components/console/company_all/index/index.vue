<template>
  <div class="company_all-index-wrapper">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <SearchConditions />
    <MainTableContainer />
  </div>
</template>

<script>
import SearchConditions from './SearchConditions.vue'
import MainTableContainer from './MainTableContainer.vue'
import Breadcrumbs from '~/components/console/common/breadcrumbs/index.vue'

export default {
  layout: 'console',
  components: {
    Breadcrumbs,
    SearchConditions,
    MainTableContainer,
  },
  data: () => ({
    breadcrumbs: [
      {
        text: '契約企業一覧',
        href: '',
      },
    ],
  }),
}
</script>

<style lang="scss">
.company_all-index-wrapper {
  color: #333333;
}
</style>
