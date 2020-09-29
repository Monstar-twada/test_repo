<template>
  <div class="company_all-index-wrapper">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <Form />
  </div>
</template>

<script>
import Form from './Form'
import Breadcrumbs from '~/components/console/common/breadcrumbs/index.vue'

export default {
  layout: 'console',
  components: {
    Breadcrumbs,
    Form,
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
