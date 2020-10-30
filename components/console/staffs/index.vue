<template>
  <div class="staffs-index-wrapper">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <StaffTable />
  </div>
</template>

<script>
import StaffTable from './index/StaffTable.vue'
import Breadcrumbs from '~/components/console/common/breadcrumbs/index.vue'

export default {
  layout: 'console',
  components: {
    Breadcrumbs,
    StaffTable,
  },
  data: () => ({
    breadcrumbs: [
      {
        text: '管理',
        href: '',
      },
    ],
  }),
}
</script>

<style lang="scss">
.staffs-index-wrapper {
  color: #333333;
}
</style>
