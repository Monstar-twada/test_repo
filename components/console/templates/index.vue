<template>
  <div class="templates-index-wrapper">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <TemplateTable />
  </div>
</template>

<script>
import TemplateTable from './index/TemplateTable'
import Breadcrumbs from '~/components/console/common/breadcrumbs/index.vue'

export default {
  layout: 'console',
  components: {
    Breadcrumbs,
    TemplateTable,
  },
  data: () => ({
    breadcrumbs: [
      {
        text: 'テンプレート登録',
        href: '',
      },
    ],
  }),
}
</script>

<style lang="scss">
.templates-index-wrapper {
  color: #333333;
}
</style>
