<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="result.svg"
      :page="page"
      task-counter
    />
    <SearchConditions />
  </div>
</template>

<script>
import SearchConditions from './index/SearchConditions'
import Breadcrumbs from '~/components/common/breadcrumbs/index'
export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Breadcrumbs,
    SearchConditions,
  },
  data: () => ({
    page: '案件管理',
    breadcrumbs: [
      {
        text: '案件管理',
        href: '',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped></style>
